import * as config from 'config';
import * as appRoot from 'app-root-path';
import { Logger, LoggerOptions, transports, createLogger, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import * as fs from 'fs';
import { StreamOptions } from 'morgan';

const defaultLevel = 'debug';
console.log(`App root: ${appRoot}`);

const appLogFolder: string = `${appRoot}/logs`;

console.log(`Log folder: ${appLogFolder}`);

if (!fs.existsSync(appLogFolder)) {
    fs.mkdirSync(appLogFolder);
}

const options: LoggerOptions = {
    exitOnError: false,
    level: defaultLevel,
    transports: [
        new DailyRotateFile({
            datePattern: 'YYYY-MM-DD-HH',
            dirname: `${appLogFolder}/app`,
            filename: `${appLogFolder}/appLogger-%DATE%.log`,
            format: format.json(),
            json: true,
            level: 'info', // info and below to rotate
            maxFiles: '14d',
            maxSize: '20m',
            zippedArchive: false,
        }),
        new DailyRotateFile({
            datePattern: 'YYYY-MM-DD-HH',
            dirname: `${appLogFolder}/errors`,
            filename: `${appLogFolder}/appError-%DATE%.log`,
            json: true,
            level: 'error', // error and below to rotate
            maxFiles: '14d',
            maxSize: '20m',
            zippedArchive: false,
        }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.json(),
                format.timestamp({timestamp: () => {
                    return (new Date()).toISOString();
                }}),
            ),
            level: 'debug', // debug and below to console
        }),
    ],

};

const logger: Logger = createLogger(options);

export default logger;
