#!/usr/bin/env node
'use strict';

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _logger = require('../config/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */
const serverDebug = (0, _debug2.default)('server:server');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || process.env.npm_package_config_serverPort || '3001');

(0, _app2.default)().then(app => {
  app.set('port', port);

  /**
   * Create HTTP server.
   */

  const server = _http2.default.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening(server));
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      _logger2.default.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      _logger2.default.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = server => () => {
  const addr = server.address();

  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

  _logger2.default.info(`Listening on ${bind}`);
  serverDebug(`Listening on ${bind}`);
};
//# sourceMappingURL=www.js.map