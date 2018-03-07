'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_winston2.default.emitErrs = true;

const logDir = _path2.default.resolve(_path2.default.dirname(__filename), '..', '..', 'logs');

// Generally we don't like doing synchronous things with Node, BUT since this will only happen once, when
// file gets used for the first time, it's okay
if (!_fs2.default.existsSync(logDir)) {
    _fs2.default.mkdirSync(logDir);
}

let logger = new _winston2.default.Logger({
    transports: [new _winston2.default.transports.File({
        level: 'info',
        filename: _path2.default.join(logDir, 'all-logs.log'),
        handleExceptions: true,
        json: false,
        maxsize: 5242880, // 5MB limit
        maxFiles: 5,
        colorize: false
    }), new _winston2.default.transports.Console({
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    })],
    exitOnError: false
});

// modify the winston logger to make it compatible with morgan's request logger
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};

exports.default = logger;
//# sourceMappingURL=logger.js.map