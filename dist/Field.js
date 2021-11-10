"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

require("./FormBuilder.css");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Field = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Field, _Component);

  var _super = _createSuper(Field);

  function Field() {
    (0, _classCallCheck2.default)(this, Field);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Field, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        draggable: "true",
        className: "field fieldToDrag",
        "data-type-field": this.props['data-field']['typeInput'],
        title: "Drag element to add it"
      }, /*#__PURE__*/_react.default.createElement("span", null, this.props['data-field']['classIcon'] ? /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, this.props['data-field']['classIcon']) : "", this.props['data-field']['label']));
    }
  }]);
  return Field;
}(_react.Component);

var _default = Field;
exports.default = _default;