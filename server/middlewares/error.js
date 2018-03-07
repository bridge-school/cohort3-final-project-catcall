'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.errorHandler = undefined;

var _logger = require('../config/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const errorHandler = exports.errorHandler = function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    _logger2.default.error(err);

    res.sendStatus(err.status || 500); // return a status code of 500 if none was provided or found
};
//# sourceMappingURL=error.js.map