"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var OptionBuilder = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(OptionBuilder, _Component);

  var _super = _createSuper(OptionBuilder);

  //initial state
  function OptionBuilder(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OptionBuilder);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "counter", 2);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCounter", function () {
      return _this.counter++;
    });
    _this.state = {
      resultOption: props.jsonData[props.formJson.name] || [{
        pos: 1,
        label: "",
        value: ""
      }]
    };
    props.jsonCollector((0, _defineProperty2.default)({}, props.formJson.name, _this.state.resultOption));
    return _this;
  }

  (0, _createClass2.default)(OptionBuilder, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "field-input"
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "mainLabel"
      }, /*#__PURE__*/_react.default.createElement("span", {
        "data-tip": this.props.formJson.description
      }, this.props.formJson.label, this.props.formJson.required ? /*#__PURE__*/_react.default.createElement("span", {
        className: "requiredStar"
      }, "*") : ""), /*#__PURE__*/_react.default.createElement("div", {
        className: "optionFields"
      }, /*#__PURE__*/_react.default.createElement("ul", null, this.state.resultOption.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: item.pos
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "index"
        }, index + 1, "."), /*#__PURE__*/_react.default.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Label",
          value: item.label || "",
          onChange: function onChange(e) {
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              resultOption: (0, _toConsumableArray2.default)(_this2.state.resultOption.map(function (elem) {
                if (elem.pos == item.pos) elem.label = e.target.value;
                return elem;
              }))
            }), function () {
              _this2.props.jsonCollector((0, _defineProperty2.default)({}, _this2.props.formJson.name, _this2.state.resultOption));
            });
          }
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Value",
          value: item.value || "",
          onChange: function onChange(e) {
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              resultOption: (0, _toConsumableArray2.default)(_this2.state.resultOption.map(function (elem) {
                if (elem.pos == item.pos) elem.value = e.target.value;
                return elem;
              }))
            }), function () {
              _this2.props.jsonCollector((0, _defineProperty2.default)({}, _this2.props.formJson.name, _this2.state.resultOption));
            });
          }
        }), item.pos == 1 ? "" : /*#__PURE__*/_react.default.createElement("button", {
          className: "btn btn-secondary btn-remove-option",
          title: "Remove option",
          onClick: function onClick() {
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              resultOption: (0, _toConsumableArray2.default)(_this2.state.resultOption.filter(function (elem) {
                if (elem.pos == item.pos) return false;
                return true;
              }))
            }));
          }
        }, /*#__PURE__*/_react.default.createElement("i", {
          className: "material-icons"
        }, "cancel")));
      })), /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-secondary",
        onClick: function onClick() {
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            resultOption: [].concat((0, _toConsumableArray2.default)(_this2.state.resultOption), [{
              pos: _this2.getCounter(),
              label: "",
              value: ""
            }])
          }));

          _this2.getCounter();
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "add"), "Add option"))));
    }
  }]);
  return OptionBuilder;
}(_react.Component);

var _default = OptionBuilder;
exports.default = _default;