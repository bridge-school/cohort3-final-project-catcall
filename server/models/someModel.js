'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SomeModel = exports.someModelSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const someModelSchema = exports.someModelSchema = new _mongoose.Schema({
    name: {
        type: String
    }
});

const SomeModel = exports.SomeModel = _mongoose2.default.model('SomeModel', someModelSchema);

exports.default = SomeModel;
//# sourceMappingURL=someModel.js.map