'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
    DB_PASS,
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

const connectionUrl = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Get Mongoose to use the global promise library
_mongoose2.default.Promise = global.Promise;

exports.default = () => _mongoose2.default.connect(connectionUrl).then(() => {
    // Get the default connection
    const db = _mongoose2.default.connection;

    // Bind connection to 'error' event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    return db;
}).catch(err => {
    // We were unable to connect! Oh no!
    console.log(err); // let's log the error
    process.exit(-1); // and get the current process to exit
});
//# sourceMappingURL=db.js.map