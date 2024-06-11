
import { lookForIPChange } from './actions/lookforIpChange';
import { Logger, Verbosity } from './utils/logger';

const logger = new Logger(Verbosity.Debug);

async function main() {
    await lookForIPChange(logger);


    setInterval(async () => {
        await lookForIPChange(logger);
    }, 5 * 60 * 1000);
}


main();
