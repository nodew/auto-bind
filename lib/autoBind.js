'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (self) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var ownProps = Object.getOwnPropertyNames(self.constructor.prototype);
  var toBind = props.length > 0 ? props : ownProps;
  toBind.forEach(function (key) {
    var val = self[key];
    if (val && key !== 'constructor' && typeof val === 'function') {
      self[key] = val.bind(self);
    }
  });
};