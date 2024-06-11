
import fetch from 'node-fetch';
import { Logger } from '../utils/logger';

const CLOUDFLARE_API_URL = 'https://api.cloudflare.com/client/v4';
const ZONE_ID = 'your-zone-id';
const RECORD_ID = 'your-record-id';
const CLOUDFLARE_API_TOKEN = 'your-cloudflare-ip-token';

interface DNSRecord {
    result: {
        id: string;
        content: string;
    };
}

export async function getDNSRecord(logger: Logger): Promise<string> {
    try {
        const response = await fetch(`${CLOUDFLARE_API_URL}/zones/${ZONE_ID}/dns_records/${RECORD_ID}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        const data: DNSRecord = await response.json();
        logger.info('Fetched DNS record from CloudFlare');
        return data.result.content;
    } catch (error) {
        logger.error(`Failed to fetch DNS record: ${error.message}`);
        throw error;
    }
}
