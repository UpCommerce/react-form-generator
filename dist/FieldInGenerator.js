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

require("./FormBuilder.css");

var _input = _interopRequireDefault(require("./typeOfFields/input"));

var _checkbox = _interopRequireDefault(require("./typeOfFields/checkbox"));

var _select = _interopRequireDefault(require("./typeOfFields/select"));

var _optionBuilder = _interopRequireDefault(require("./typeOfFields/optionBuilder"));

var _textArea = _interopRequireDefault(require("./typeOfFields/textArea"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FieldInGenerator = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FieldInGenerator, _Component);

  var _super = _createSuper(FieldInGenerator);

  function FieldInGenerator(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FieldInGenerator);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "jsonField", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addToJson", function (jsonToAdd) {
      if (!jsonToAdd) return;
      var actualJson = _this.jsonField;
      Object.keys(jsonToAdd).map(function (key) {
        actualJson[key] = jsonToAdd[key];
      });
      _this.jsonField = actualJson;

      _this.props.addToFormJson(_this.props.actualElem.index, actualJson);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "counter", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCounter", function () {
      return _this.counter++;
    });
    _this.objectField = props.definedFields[props.actualElem.typefield];
    var newState = {
      generalFieldsShow: false,
      extraFieldsShow: false
    };
    _this.state = newState;
    _this.jsonField = _objectSpread(_objectSpread({}, props.jsonData), {}, {
      "typeField": props.actualElem.typefield
    });
    props.addToFormJson(props.actualElem.index, _this.jsonField);
    return _this;
  }

  (0, _createClass2.default)(FieldInGenerator, [{
    key: "render",
    // this.props.jsonData.readOnly
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "headerBar index_" + this.props.actualElem.index
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Field ", this.props.jsonData.readOnly ? this.props.jsonData.label : ""), /*#__PURE__*/_react.default.createElement("span", {
        className: "typeField"
      }, "(", this.props.actualElem.typefield, ")"), /*#__PURE__*/_react.default.createElement("span", {
        className: "requied"
      }, this.props.jsonData.required ? "*" : "")), /*#__PURE__*/_react.default.createElement("div", {
        className: "buttons"
      }, !this.props.jsonData.readOnly && /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-secondary delete_button",
        onClick: function onClick() {
          if (window.confirm("Are you sure you want delete this field?")) {
            _this2.props.deleteField(_this2.props.actualElem.index);
          }
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "delete"), "Delete field"), /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-secondary edit_button",
        onClick: function onClick() {
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            generalFieldsShow: !_this2.state.generalFieldsShow
          }));
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "edit"), "Edit field"))), /*#__PURE__*/_react.default.createElement("div", {
        className: this.state.generalFieldsShow ? "mainField show" : "mainField hidden"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fieldsTop"
      }, Object.keys(this.props.definedFields['toAllFields'].fields).map(function (item) {
        var actualInput = _this2.props.definedFields['toAllFields'].fields[item];

        if (_this2.props.definedFields['toAllFields'].showFields.has(item)) {
          if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField != undefined) if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField.has(item)) return;
          if (actualInput) switch (actualInput.inputType) {
            case 'textarea':
              return /*#__PURE__*/_react.default.createElement(_textArea.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'text':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'number':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'checkbox':
              return /*#__PURE__*/_react.default.createElement(_checkbox.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'optionBuilder':
              return /*#__PURE__*/_react.default.createElement(_optionBuilder.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'select':
              return /*#__PURE__*/_react.default.createElement(_select.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });
          }
        }
      }), Object.keys(this.props.definedFields[this.props.actualElem.typefield].fields).map(function (item) {
        var actualInput = _this2.props.definedFields[_this2.props.actualElem.typefield].fields[item];

        if (_this2.objectField.showFields && _this2.objectField.showFields.has(item)) {
          if (actualInput) switch (actualInput.inputType) {
            case 'textarea':
              return /*#__PURE__*/_react.default.createElement(_textArea.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'text':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'number':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'checkbox':
              return /*#__PURE__*/_react.default.createElement(_checkbox.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'optionBuilder':
              return /*#__PURE__*/_react.default.createElement(_optionBuilder.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'select':
              return /*#__PURE__*/_react.default.createElement(_select.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });
          }
        }
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "button-show-more"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-secondary",
        onClick: function onClick() {
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            extraFieldsShow: !_this2.state.extraFieldsShow
          }));
        }
      }, this.state.extraFieldsShow ? "Hide extra fields" : "Show extra fields", this.state.extraFieldsShow ? /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "expand_less") : /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons"
      }, "expand_more"))), /*#__PURE__*/_react.default.createElement("div", {
        className: this.state.extraFieldsShow ? "hideExtraOptions show" : "hideExtraOptions hidden"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fieldsBottom"
      }, Object.keys(this.props.definedFields['toAllFields'].fields).map(function (item) {
        var _React$createElement;

        var actualInput = _this2.props.definedFields['toAllFields'].fields[item];

        if (!_this2.props.definedFields['toAllFields'].showFields.has(item)) {
          if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField != undefined) if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField.has(item)) return;
          if (actualInput) switch (actualInput.inputType) {
            case 'textarea':
              return /*#__PURE__*/_react.default.createElement(_textArea.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'text':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'number':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'checkbox':
              return /*#__PURE__*/_react.default.createElement(_checkbox.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'optionBuilder':
              return /*#__PURE__*/_react.default.createElement(_optionBuilder.default, (_React$createElement = {
                readOnly: _this2.props.jsonData.readOnly
              }, (0, _defineProperty2.default)(_React$createElement, "readOnly", _this2.props.formJson.readOnly), (0, _defineProperty2.default)(_React$createElement, "index", _this2.props.actualElem.index), (0, _defineProperty2.default)(_React$createElement, "updateLabel", _this2.updateLabel), (0, _defineProperty2.default)(_React$createElement, "jsonData", _this2.jsonField), (0, _defineProperty2.default)(_React$createElement, "jsonCollector", _this2.addToJson), (0, _defineProperty2.default)(_React$createElement, "key", _this2.getCounter()), (0, _defineProperty2.default)(_React$createElement, "formJson", actualInput), _React$createElement));

            case 'select':
              return /*#__PURE__*/_react.default.createElement(_select.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });
          }
        }
      }), Object.keys(this.props.definedFields[this.props.actualElem.typefield].fields).map(function (item) {
        var actualInput = _this2.props.definedFields[_this2.props.actualElem.typefield].fields[item];

        if (!(_this2.objectField.showFields && _this2.objectField.showFields.has(item))) {
          if (actualInput) switch (actualInput.inputType) {
            case 'textarea':
              return /*#__PURE__*/_react.default.createElement(_textArea.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'text':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'number':
              return /*#__PURE__*/_react.default.createElement(_input.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'checkbox':
              return /*#__PURE__*/_react.default.createElement(_checkbox.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'optionBuilder':
              return /*#__PURE__*/_react.default.createElement(_optionBuilder.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });

            case 'select':
              return /*#__PURE__*/_react.default.createElement(_select.default, {
                readOnly: _this2.props.jsonData.readOnly,
                index: _this2.props.actualElem.index,
                updateLabel: _this2.updateLabel,
                jsonData: _this2.jsonField,
                jsonCollector: _this2.addToJson,
                key: _this2.getCounter(),
                formJson: actualInput
              });
          }
        }
      })))));
    }
  }]);
  return FieldInGenerator;
}(_react.Component);

var _default = FieldInGenerator;
exports.default = _default;