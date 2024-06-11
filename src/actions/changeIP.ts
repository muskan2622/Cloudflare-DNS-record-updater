
import fetch from 'node-fetch';
import { Logger } from '../utils/logger';

const CLOUDFLARE_API_URL = 'https://api.cloudflare.com/client/v4';
const ZONE_ID = 'c618c19feb0ff0656bc776485c5bc266';
const RECORD_ID = 'your-record-id';
const CLOUDFLARE_API_TOKEN = '14e5FgicNmeuXZLgBBoIJYorYUnDwV7PKePeW0So';

export async function updateDNSRecord(ip: string, logger: Logger): Promise<void> {
    try {
        const response = await fetch(`${CLOUDFLARE_API_URL}/zones/${ZONE_ID}/dns_records/${RECORD_ID}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'A',
                name: 'your-subdomain',
                content: ip,
                ttl: 120,
                proxied: false
            }),
        });
        const data = await response.json();
        if (!data.success) {
            logger.error('Failed to update DNS record');
            throw new Error('Failed to update DNS record');
        }
        logger.info(`Updated DNS record to ${ip}`);
    } catch (error) {
        logger.error(`Error updating DNS record: ${error.message}`);
        throw error;
    }
}
