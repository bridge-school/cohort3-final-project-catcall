'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _someModels = require('./routes/someModels');

var _someModels2 = _interopRequireDefault(_someModels);

var _db = require('./config/db');

var _db2 = _interopRequireDefault(_db);

var _logger = require('./config/logger');

var _logger2 = _interopRequireDefault(_logger);

var _middlewares = require('./middlewares');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _morgan2.default)("dev", { "stream": _logger2.default.stream }));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

app.use('/', _index2.default);
app.use('/someModels', _someModels2.default);

// catch 404 and forward to error handler
app.use(_middlewares.notFoundHandler);

// error handler
app.use(_middlewares.errorHandler);

// anything that bootstraps the express app will first connect to the database and then have access to the app object
// This way, we can query the database anywhere else in our code and expect to have already connected

exports.default = () => (0, _db2.default)().then(() => app);
//# sourceMappingURL=app.js.map