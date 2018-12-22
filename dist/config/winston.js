"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appRoot = __importStar(require("app-root-path"));
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const fs = __importStar(require("fs"));
const defaultLevel = 'debug';
console.log(`App root: ${appRoot}`);
const appLogFolder = `${appRoot}/logs`;
console.log(`Log folder: ${appLogFolder}`);
if (!fs.existsSync(appLogFolder)) {
    fs.mkdirSync(appLogFolder);
}
const options = {
    exitOnError: false,
    level: defaultLevel,
    transports: [
        new winston_daily_rotate_file_1.default({
            datePattern: 'YYYY-MM-DD-HH',
            dirname: `${appLogFolder}/app`,
            filename: `${appLogFolder}/appLogger-%DATE%.log`,
            format: winston_1.format.json(),
            json: true,
            level: 'info',
            maxFiles: '14d',
            maxSize: '20m',
            zippedArchive: false,
        }),
        new winston_daily_rotate_file_1.default({
            datePattern: 'YYYY-MM-DD-HH',
            dirname: `${appLogFolder}/errors`,
            filename: `${appLogFolder}/appError-%DATE%.log`,
            json: true,
            level: 'error',
            maxFiles: '14d',
            maxSize: '20m',
            zippedArchive: false,
        }),
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.json(), winston_1.format.timestamp({ timestamp: () => {
                    return (new Date()).toISOString();
                } })),
            level: 'debug',
        }),
    ],
};
const logger = winston_1.createLogger(options);
exports.default = logger;
//# sourceMappingURL=winston.js.map