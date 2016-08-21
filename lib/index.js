'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rcAutoBind = exports.autoBind = undefined;

var _autoBind = require('./autoBind');

var _autoBind2 = _interopRequireDefault(_autoBind);

var _rcAutoBind = require('./rcAutoBind');

var _rcAutoBind2 = _interopRequireDefault(_rcAutoBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autoBind = exports.autoBind = _autoBind2.default;

var rcAutoBind = exports.rcAutoBind = _rcAutoBind2.default;

exports.default = {
  autoBind: autoBind,
  rcAutoBind: rcAutoBind
};