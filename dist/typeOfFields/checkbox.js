"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Checkbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Checkbox);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleInputChange", function () {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        is_checked: !_this.state.is_checked
      }), function () {
        if (_this.props.formJson.name == 'required') {
          if (_this.state.is_checked) {
            //is required
            document.querySelector(".index_" + _this.props.index + " span.requied").innerHTML = "*";
          } else {
            document.querySelector(".index_" + _this.props.index + " span.requied").innerHTML = "";
          }
        }

        _this.props.jsonCollector((0, _defineProperty2.default)({}, _this.props.formJson.name, _this.state.is_checked));
      });
    });
    _this.state = {
      is_checked: props.jsonData[props.formJson.name] || props.formJson.value || false
    };
    props.jsonCollector((0, _defineProperty2.default)({}, props.formJson.name, _this.state.is_checked));
    return _this;
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('#formBuilder input[type=checkbox]').checkbox();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "field-input"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "radio-box"
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "mainLabel radiobox"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        checked: this.state.is_checked,
        onChange: function onChange() {
          return _this2.handleInputChange();
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, this.props.formJson.label))));
    }
  }]);
  return Checkbox;
}(_react.Component);

var _default = Checkbox;
exports.default = _default;