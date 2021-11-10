"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextArea = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TextArea, _Component);

  var _super = _createSuper(TextArea);

  //initial state
  function TextArea(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextArea);
    _this = _super.call(this);

    if (props.formJson.name == 'label') {
      console.log("New");
      console.log(props.formJson);
      console.log(props.formJson.name);
    }

    _this.state = {
      text: props.jsonData[props.formJson.name] || props.formJson.value || ""
    };
    props.jsonCollector((0, _defineProperty2.default)({}, props.formJson.name, _this.state.text));
    return _this;
  } //change input value


  (0, _createClass2.default)(TextArea, [{
    key: "changeValue",
    value: function changeValue(e) {
      var _this2 = this;

      this.setState({
        text: e.target.value
      }, function () {
        if (_this2.props.formJson.name == 'label') {
          document.querySelector(".index_" + _this2.props.index + " b").innerHTML = "Field " + _this2.state.text;
        }

        _this2.props.jsonCollector((0, _defineProperty2.default)({}, _this2.props.formJson.name, _this2.state.text));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "field-input"
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "mainLabel inputLabel"
      }, /*#__PURE__*/_react.default.createElement("span", null, this.props.formJson.label), /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
        placeholder: this.props.formJson.placeholder,
        onChange: function onChange(e) {
          return _this3.changeValue(e);
        },
        defaultValue: this.state.text
      }, this.props.formJson.readOnly ? "disabled" : ""))));
    }
  }]);
  return TextArea;
}(_react.Component);

var _default = TextArea;
exports.default = _default;