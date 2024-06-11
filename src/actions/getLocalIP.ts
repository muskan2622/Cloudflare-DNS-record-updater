
import fetch from 'node-fetch';
import { Logger } from '../utils/logger';

export async function getLocalIPAddress(logger: Logger): Promise<string> {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        logger.info('Fetched local IP address');
        return data.ip;
    } catch (error) {
        logger.error(`Failed to fetch local IP address: ${error.message}`);
        throw error;
    }
}
