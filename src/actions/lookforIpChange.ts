
import { getDNSRecord } from './getIP';
import { getLocalIPAddress } from './getLocalIP';
import { updateDNSRecord } from './changeIP';
import { Logger } from '../utils/logger';

export async function lookForIPChange(logger: Logger): Promise<void> {
    try {
        const localIP = await getLocalIPAddress(logger);
        const cloudflareIP = await getDNSRecord(logger);

        if (localIP !== cloudflareIP) {
            await updateDNSRecord(localIP, logger);
            logger.info(`DNS record updated to ${localIP}`);
        } else {
            logger.debug('IP address has not changed');
        }
    } catch (error) {
        logger.error(`Error checking for IP change: ${error.message}`);
    }
}
