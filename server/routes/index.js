'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

/* GET greeting */
router.get('/', function (req, res, next) {
  res.send('Hello World!'); // return a greeting
});

exports.default = router;
//# sourceMappingURL=index.js.map