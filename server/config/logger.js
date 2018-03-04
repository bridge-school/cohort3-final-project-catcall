import winston from 'winston';
import fs from 'fs';
import path from 'path';

winston.emitErrs = true;

const logDir = path.resolve(
    path.dirname(__filename),'..', '..', 'logs'
);

// Generally we don't like doing synchronous things with Node, BUT since this will only happen once, when
// file gets used for the first time, it's okay
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

let logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: path.join(logDir, 'all-logs.log'),
            handleExceptions: true,
            json: false,
            maxsize: 5242880, // 5MB limit
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

// modify the winston logger to make it compatible with morgan's request logger
logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

export default logger;

