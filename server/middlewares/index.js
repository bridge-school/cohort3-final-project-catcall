'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./404.js');

Object.keys(_).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _[key];
    }
  });
});

var _error = require('./error.js');

Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});
//# sourceMappingURL=index.js.map