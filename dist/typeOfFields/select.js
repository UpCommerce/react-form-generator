"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Select = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Select, _Component);

  var _super = _createSuper(Select);

  //initial state
  function Select(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Select);
    _this = _super.call(this);
    _this.state = {
      text: props.jsonData[props.formJson.name] || ""
    };
    if (!_this.state.text && props.formJson.options.length) props.jsonCollector((0, _defineProperty2.default)({}, props.formJson.name, props.formJson.options[0]['value']));else props.jsonCollector((0, _defineProperty2.default)({}, props.formJson.name, _this.state.text));
    return _this;
  } //change input value


  (0, _createClass2.default)(Select, [{
    key: "changeValue",
    value: function changeValue(e) {
      this.setState({
        text: e.target.value
      });
      this.props.jsonCollector((0, _defineProperty2.default)({}, this.props.formJson.name, e.target.value));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $('select[name=' + this.props.formJson.name + ']').combobox();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "field-input"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "mainLabel"
      }, /*#__PURE__*/_react.default.createElement("span", {
        "data-tip": this.props.formJson.description
      }, this.props.formJson.label, this.props.formJson.required ? /*#__PURE__*/_react.default.createElement("span", {
        className: "requiredStar"
      }, "*") : ""), /*#__PURE__*/_react.default.createElement("select", {
        value: this.state.text,
        name: this.props.formJson.name,
        onChange: function onChange(e) {
          return _this2.changeValue(e);
        }
      }, this.props.formJson.options.map(function (field) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: field.value,
          value: field.value
        }, field.label);
      }))));
    }
  }]);
  return Select;
}(_react.Component);

var _default = Select;
exports.default = _default;