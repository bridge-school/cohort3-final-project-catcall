import winston from 'winston';

winston.emitErrs = true;

let logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
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

