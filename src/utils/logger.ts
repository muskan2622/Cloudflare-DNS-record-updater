// src/utils/logger.ts
export enum Verbosity {
    Silent = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
    Debug = 4,
}

export class Logger {
    constructor(private level: Verbosity) {}

    log(level: Verbosity, message: string) {
        if (level <= this.level) {
            console.log(message);
        }
    }

    error(message: string) {
        this.log(Verbosity.Error, `ERROR: ${message}`);
    }

    warning(message: string) {
        this.log(Verbosity.Warning, `WARNING: ${message}`);
    }

    info(message: string) {
        this.log(Verbosity.Info, `INFO: ${message}`);
    }

    debug(message: string) {
        this.log(Verbosity.Debug, `DEBUG: ${message}`);
    }
}
