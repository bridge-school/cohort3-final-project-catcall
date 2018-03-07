'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const notFoundHandler = exports.notFoundHandler = function (req, res, next) {
    // creating an error with this message because we shouldn't have reached this middleware
    // if the accessed route actually existed
    let err = new Error('Not Found');
    err.status = 404; // set the status to 404 because it describes the reason the error was reached

    next(err); // call the 'next' callback to let the next middleware in the sequence deal with the error
};
//# sourceMappingURL=404.js.map