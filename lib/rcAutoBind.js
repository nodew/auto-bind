'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoBind = require('./autoBind');

var _autoBind2 = _interopRequireDefault(_autoBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ignoreProps = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

exports.default = function (self) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var ownProps = Object.getOwnPropertyNames(self.constructor.prototype);
  var toBind = props.length > 0 ? props : ownProps;
  var filteredProps = toBind.filter(function (item) {
    return ignoreProps.indexOf(item) < 0;
  });
  _autoBind2.default.apply(undefined, [self].concat(_toConsumableArray(filteredProps)));
};