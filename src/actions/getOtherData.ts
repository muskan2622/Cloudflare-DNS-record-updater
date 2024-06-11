
import fetch from 'node-fetch';
import { Logger } from '../utils/logger';


export async function getOtherData(logger: Logger): Promise<any> {

    try {

        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        logger.info('Fetched other data');
        return data;
    } catch (error) {
        logger.error(`Failed to fetch other data: ${error.message}`);
        throw error;
    }
}
