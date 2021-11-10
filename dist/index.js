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

var _Field = _interopRequireDefault(require("./Field.js"));

var _FieldInGenerator = _interopRequireDefault(require("./FieldInGenerator.js"));

var _Helpers = require("../../../Scripts/utils/Helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormBuilder = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FormBuilder, _Component);

  var _super = _createSuper(FormBuilder);

  function FormBuilder(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FormBuilder);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "jsonToLoad", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dragedElement", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "pos", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "outsideForm", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearFromPlaceHolders", function () {
      var arrOfPlaceholders = document.querySelectorAll('.placeholder, .placeholder-up');

      if (arrOfPlaceholders.length) {
        var _iterator = _createForOfIteratorHelper(arrOfPlaceholders),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;
            i.classList.remove('placeholder');
            i.classList.remove('placeholder-up');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fields", {
      text: {
        showFields: new Set(['type']),
        classIcon: 'text_fields',
        // class for icon from notawesome
        label: _Helpers.T._("Text field", "Admin"),
        //show this label
        typeInput: "text",
        //Field recognize by this variable
        fields: {
          'type': {
            'inputType': "select",
            'label': _Helpers.T._('Type', 'Admin'),
            'name': 'type',
            'options': [{
              'label': _Helpers.T._('text', 'Admin'),
              'value': 'text'
            }, {
              'label': _Helpers.T._('email', 'Admin'),
              'value': 'email'
            }, {
              'label': _Helpers.T._('password', 'Admin'),
              'value': 'password'
            }, {
              'label': 'tel',
              'value': 'tel'
            }, {
              'label': 'url',
              'value': 'url'
            }]
          },
          'minLength': {
            'inputType': "number",
            'label': 'Min length',
            'value': "",
            'step': '1',
            'name': 'min_length'
          },
          'maxLength': {
            'inputType': "number",
            'label': 'Max length',
            'value': "",
            'step': '1',
            'name': 'max_length'
          },
          'sufix': {
            'inputType': "text",
            'label': 'Sufix',
            'value': "",
            'name': 'sufix'
          }
        }
      },
      number: {
        classIcon: 'calculate',
        showFields: new Set([]),
        label: "Number",
        typeInput: "number",
        fields: {
          'minValue': {
            'inputType': "number",
            'label': 'Min',
            'value': "",
            'step': '0.1',
            'name': 'min_value'
          },
          'maxValue': {
            'inputType': "number",
            'label': 'Max',
            'value': "",
            'step': '0.1',
            'name': 'max_value'
          },
          'step': {
            'inputType': "number",
            'label': 'Step',
            'value': "",
            'step': '0.1',
            'name': 'step'
          },
          'sufix': {
            'inputType': "text",
            'label': 'Sufix',
            'value': "",
            'name': 'sufix'
          }
        }
      },
      textArea: {
        classIcon: 'format_align_left',
        label: _Helpers.T._("Text area", "Admin"),
        typeInput: "textArea",
        fields: {
          'minLength': {
            'inputType': "number",
            'label': _Helpers.T._('Min length', 'Admin'),
            'value': "",
            'step': '1',
            'name': 'min_length'
          },
          'maxLength': {
            'inputType': "number",
            'label': _Helpers.T._('Max length', 'Admin'),
            'value': "",
            'step': '1',
            'name': 'max_length'
          },
          'cols': {
            'inputType': "number",
            'label': 'Cols',
            'value': "30",
            'step': '1',
            'name': 'cols'
          },
          'rows': {
            'inputType': "number",
            'label': _Helpers.T._('Rows', 'Admin'),
            'value': "10",
            'step': '1',
            'name': 'rows'
          }
        }
      },
      // autocomplete: {
      //     classIcon: 'fa-clone',
      //     showFields: new Set(['optionBuilder']),
      //     label: "Text autocomplete",
      //     typeInput: "autocomplete",
      //     fields: {
      //         'optionBuilder': {
      //             'inputType': "optionBuilder",
      //             'label': 'Options',
      //             'value': "",
      //             'name': 'options'
      //         },
      //     }
      // },
      inputRadio: {
        classIcon: 'radio_button_checked',
        showFields: new Set(['optionBuilder']),
        label: _Helpers.T._("Input Radio group", "Admin"),
        typeInput: "inputRadio",
        fields: {
          'optionBuilder': {
            'inputType': "optionBuilder",
            'label': _Helpers.T._('Options', 'Admin'),
            'value': "",
            'name': 'options'
          }
        }
      },
      inputCheckbox: {
        classIcon: 'check_box',
        showFields: new Set([]),
        label: _Helpers.T._("Checkbox", "Admin"),
        typeInput: "inputCheckbox",
        fields: {
          'defaultSelected': {
            'inputType': "checkbox",
            'label': _Helpers.T._('Default selected', 'Admin'),
            'value': false,
            'name': 'defaultSelected'
          }
        }
      },
      select: {
        classIcon: 'view_list',
        showFields: new Set(['optionBuilder']),
        label: _Helpers.T._("Select", "Admin"),
        typeInput: "select",
        fields: {
          'optionBuilder': {
            'inputType': "optionBuilder",
            'label': _Helpers.T._('Options', 'Admin'),
            'value': "",
            'name': 'options'
          }
        },
        banField: new Set(['placeholder'])
      },
      // fileUpload: {
      //     classIcon: 'fa-download',
      //     showFields: new Set(['optionBuilder']),
      //     label: "Upload file",
      //     typeInput: "fileUpload",
      //     fields: {
      //     }
      // },
      // button: {
      //     classIcon: 'fa-circle',
      //     showFields: new Set(['type']),
      //     label: "Button",
      //     typeInput: "button",
      //     fields: {
      //         'type' : {
      //             'inputType': "select",
      //             'label': 'Type',
      //             'name': 'type',
      //             'options': [
      //                 {
      //                     'label': 'Button',
      //                     'value': 'button'
      //                 },
      //                 {
      //                     'label': 'Submit',
      //                     'value': 'submit'
      //                 },
      //                 {
      //                     'label': 'Reset',
      //                     'value': 'reset'
      //                 },
      //             ]
      //         },
      //     },
      //     banField: new Set([
      //         'placeholder',
      //         'defaultValue',
      //         'required',
      //         'tipText',
      //         'name'
      //     ])
      // },
      header: {
        classIcon: 'drag_handle',
        showFields: new Set(['headerLevel', 'Headertext']),
        label: _Helpers.T._("Header", "Admin"),
        typeInput: "header",
        fields: {
          'Headertext': {
            'inputType': "text",
            'label': _Helpers.T._('Header text', 'Admin'),
            'value': "",
            'name': 'headertext'
          },
          'headerLevel': {
            'inputType': "select",
            'label': 'Header level',
            'name': 'headerlevel',
            'options': [{
              'label': 'H1',
              'value': 'h1'
            }, {
              'label': 'H2',
              'value': 'h2'
            }, {
              'label': 'H3',
              'value': 'h3'
            }, {
              'label': 'H4',
              'value': 'h4'
            }, {
              'label': 'H5',
              'value': 'h5'
            }, {
              'label': 'H6',
              'value': 'h6'
            }]
          }
        },
        banField: new Set(['placeholder', 'defaultValue', 'required', 'tipText', 'required', 'label', 'name'])
      },
      paragraph: {
        classIcon: 'format_textdirection_l_to_r',
        showFields: new Set(['content']),
        label: _Helpers.T._("Paragraph", "Admin"),
        typeInput: "paragraph",
        fields: {
          'content': {
            'inputType': "textarea",
            'label': 'Content',
            'value': "",
            'name': 'content',
            'placeholder': _Helpers.T._('Put paragraph content', 'Admin')
          }
        },
        banField: new Set(['placeholder', 'defaultValue', 'required', 'tipText', 'required', 'label', 'name'])
      },
      // hiddenInput: {
      //     classIcon: 'fa-eye-slash',
      //     showFields: new Set(['value']),
      //     label: "Hidden input",
      //     typeInput: "hiddenInput",
      //     fields: {
      //         'value': {
      //             'inputType': "text",
      //             'label': 'Value',
      //             'value': "",
      //             'name': 'value'
      //         },
      //     },
      //     banField: new Set([
      //         'placeholder',
      //         'defaultValue',
      //         'required',
      //         'tipText',
      //         'required',
      //         'label',
      //         'defaultValue',
      //         'class'
      //     ])
      // },
      toAllFields: {
        showFields: new Set(['required', 'label']),
        fields: {
          'label': {
            'inputType': "text",
            'label': _Helpers.T._('Label', 'Admin'),
            'value': "",
            'name': 'label'
          },
          'name': {
            'inputType': "text",
            'label': _Helpers.T._('Name', 'Admin'),
            'value': "",
            'name': 'name'
          },
          'required': {
            'inputType': "checkbox",
            'label': _Helpers.T._('Required', 'Admin'),
            'value': false,
            'name': 'required'
          },
          'class': {
            'inputType': "text",
            'label': 'CSS class',
            'value': "",
            'name': 'class'
          },
          'tipText': {
            'inputType': "text",
            'label': 'Title',
            'value': "",
            'name': 'tipText'
          },
          'placeholder': {
            'inputType': "text",
            'label': 'Placeholder',
            'value': "",
            'name': 'placeholder'
          },
          'defaultValue': {
            'inputType': "text",
            'label': 'Default value',
            'value': "",
            'name': 'value'
          }
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      fieldsInForm: [],
      onDragField: false,
      fieldsToEdit: []
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "normalElem", function (typefield, number) {
      var optionalJson = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return {
        typefield: typefield,
        number: number,
        index: Math.random().toString(36).substring(4) + "_" + new Date().getTime(),
        optionalJson: _objectSpread({}, optionalJson),
        classList: ''
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "counter", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCounter", function () {
      return _this.counter++;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "formJson", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "jsonCollector", function () {
      var jsonInCorrectOrder = _this.getJson();

      if (document.getElementById('result')) document.getElementById('result').innerHTML = JSON.stringify(jsonInCorrectOrder, null, 4);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getJson", function () {
      var jsonInCorrectOrder = [];

      _this.state.fieldsToEdit.map(function (item) {
        jsonInCorrectOrder.push(item.optionalJson);
      });

      return jsonInCorrectOrder;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addToFormJson", function (name, value) {
      _this.formJson[name] = _objectSpread({}, value);
      var jsonInCorrectOrder = [];
      _this.state.fieldsToEdit = _this.state.fieldsToEdit.map(function (item) {
        if (item.index == name) item.optionalJson = value;
        jsonInCorrectOrder.push(item.optionalJson);
        return item;
      });
      if (_this.props.makeActionWhenJsonChange) _this.props.makeActionWhenJsonChange(jsonInCorrectOrder);

      _this.jsonCollector();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deleteField", function (index) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        fieldsToEdit: _this.state.fieldsToEdit.filter(function (item) {
          if (index == item.index) return false;
          return true;
        })
      }));

      delete _this.formJson[index];
    });

    if (props.fields) {
      _this.fields = Object.assign(_this.fields, props.fields);
    }

    if (props.jsonToLoad != undefined) {
      //load existing json
      var arrayRes = [];
      Object.keys(props.jsonToLoad).map(function (item) {
        arrayRes.push(_this.normalElem(props.jsonToLoad[item].typeField, _this.getCounter(), props.jsonToLoad[item]));
      });
      _this.state.fieldsToEdit = arrayRes;
      _this.state.formToGenerate = [];
    }

    return _this;
  }

  (0, _createClass2.default)(FormBuilder, [{
    key: "someElementOfArrayHasClass",
    value: function someElementOfArrayHasClass(arr, className) {
      var result = false;
      arr.map(function (elem) {
        if (elem.className) if (elem.className.includes(className)) {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "returnElementOfArrayHasClass",
    value: function returnElementOfArrayHasClass(arr, className) {
      var result = false;
      arr.map(function (elem) {
        if (elem.className) if (elem.className.includes(className)) {
          result = elem;
        }
      });
      return result;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = function (state, callback) {
        return;
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // if(this.props.jsonToLoad)
      //     this.jsonToLoad = this.props.jsonToLoad
      document.addEventListener("dragstart", function (event) {
        if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
          event.preventDefault();
          return;
        }

        _this2.dragedElement = event.target;

        _this2.dragedElement.classList.add('actualmoving');

        if (event.target.className.includes('elementOFDrag')) {
          _this2.dragedElement = event.target;
        }

        _this2.outsideForm = false;
      });
      document.addEventListener("dragover", function (event) {
        event.preventDefault();
        var dragedFieldClassNames = _this2.dragedElement.className;

        if (_this2.someElementOfArrayHasClass(event.path, 'formBuilderGroup')) {
          //mouse over formbuilder
          if (dragedFieldClassNames.includes('fieldToDrag')) {
            //field is moving from right bar to generator form
            //there aren't any field in generator form
            if (_this2.state.fieldsToEdit.length == 0) {
              document.getElementById("formBuilder-form").classList.add("placeholder");
            } else {
              //there is some field in generator form
              _this2.clearFromPlaceHolders();

              var allExistingFields = document.querySelectorAll('.elementOFDrag');

              if (_this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag')) {
                //position relative to existing fields
                var posAct = 0;

                var _iterator2 = _createForOfIteratorHelper(allExistingFields),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;

                    if (item.getAttribute('data-order-form-builder') == _this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag').getAttribute('data-order-form-builder')) {
                      _this2.pos = posAct;
                      break;
                    }

                    posAct++;
                  } //add placeholder to existing field

                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                allExistingFields[_this2.pos].classList.add("placeholder-up");
              } else {
                //mouse over form but not on element, so select default under
                document.getElementById("formBuilder-form").classList.add("placeholder"); //position on last item

                if (allExistingFields) _this2.pos = allExistingFields.length;
              }
            }
          } else {
            //moving existing field
            //clear before placeholder first
            _this2.clearFromPlaceHolders(); //get existing fields


            var allExistingFields = document.querySelectorAll('.elementOFDrag'); //check if actual dragged element is on it self, if yes it won't show placeholder

            if (_this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag') && _this2.dragedElement.getAttribute('data-order-form-builder') == _this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag').getAttribute('data-order-form-builder')) return;

            if (_this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag')) {
              //position relative to existing fields
              var posAct = 0;
              var blockAfterElementPlaceholder = false;

              var _iterator3 = _createForOfIteratorHelper(allExistingFields),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var item = _step3.value;

                  if (_this2.dragedElement.getAttribute('data-order-form-builder') == item.getAttribute('data-order-form-builder')) {
                    //it's element draged over it self
                    blockAfterElementPlaceholder = posAct;
                  }

                  if (item.getAttribute('data-order-form-builder') == _this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag').getAttribute('data-order-form-builder')) {
                    //define position of element on which drag element is over
                    _this2.pos = posAct;
                  }

                  posAct++;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (_this2.pos == blockAfterElementPlaceholder + 1) {
                //block placeholder after draged element
                return;
              }

              allExistingFields[_this2.pos].classList.add("placeholder-up");
            } else {
              //mouse is over form but any existing element
              document.getElementById("formBuilder-form").classList.add("placeholder"); //position on last item

              _this2.pos = allExistingFields.length;
            }
          } //inform drag drop that mouse is over form


          _this2.outsideForm = false;
        } else {
          //mouse outside form generator
          _this2.clearFromPlaceHolders();

          _this2.outsideForm = true;
        }
      });
      document.addEventListener('dragend', function (event) {
        if (_this2.outsideForm) {
          //existing form outside form, so don't show its postion migration
          _this2.dragedElement.classList.remove('actualmoving');

          return;
        }

        if (_this2.dragedElement.className.includes('fieldToDrag')) {
          //field moved from right sidebar to generator
          event.preventDefault(); //add first field to generator form

          if (_this2.state.fieldsToEdit.length == 0) {
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              fieldsToEdit: [_this2.normalElem(_this2.dragedElement.getAttribute('data-type-field'), _this2.getCounter())]
            }), function () {
              _this2.clearFromPlaceHolders();
            });
          } else {
            //add next field to list
            var newFieldsToEdit = _this2.state.fieldsToEdit.slice(); //add element to correct position


            newFieldsToEdit.splice(_this2.pos, 0, _this2.normalElem(_this2.dragedElement.getAttribute('data-type-field'), _this2.getCounter()));

            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              fieldsToEdit: newFieldsToEdit
            }), function () {
              _this2.clearFromPlaceHolders();
            });
          }
        } else {
          //field is existing and is moving
          _this2.dragedElement.classList.remove('actualmoving');

          var _newFieldsToEdit = _this2.state.fieldsToEdit.slice(); //define element which was dragged to move


          var element;

          _newFieldsToEdit.map(function (item) {
            if (item.number == _this2.dragedElement.getAttribute('data-order-form-builder')) {
              element = item;
            }
          }); //add element in correct position


          _newFieldsToEdit.splice(_this2.pos, 0, _objectSpread(_objectSpread({}, element), {}, {
            number: _this2.getCounter()
          })); //remove element from old position


          _newFieldsToEdit = _newFieldsToEdit.filter(function (item) {
            if (item.number == _this2.dragedElement.getAttribute('data-order-form-builder')) {
              return false;
            }

            return true;
          });

          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            fieldsToEdit: _newFieldsToEdit
          }), function () {
            _this2.clearFromPlaceHolders();
          });
        }
      }, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        id: "formBuilder"
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "formBuilder-form",
        className: "formBuilderGroup"
      }, this.state.fieldsToEdit.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: item.number,
          "data-order-form-builder": item.number,
          draggable: "true",
          className: item.classList + " elementOFDrag"
        }, /*#__PURE__*/_react.default.createElement(_FieldInGenerator.default, {
          deleteField: _this3.deleteField,
          addToFormJson: _this3.addToFormJson,
          actualElem: item,
          definedFields: _this3.fields,
          jsonData: item.optionalJson || _this3.formJson[item.index] || {}
        }));
      })), /*#__PURE__*/_react.default.createElement("div", {
        id: "optionColumn"
      }, Object.keys(this.fields).map(function (field) {
        if (field != "toAllFields") return /*#__PURE__*/_react.default.createElement(_Field.default, {
          "data-field": _this3.fields[field],
          key: _this3.getCounter(),
          className: "elementOFDrag"
        });
      }), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        id: "preview-form",
        className: "btn btn-primary",
        onClick: function onClick() {
          _this3.props.onSaveForm(_this3.getJson());
        }
      }, "Preview")));
    }
  }]);
  return FormBuilder;
}(_react.Component);

var _default = FormBuilder;
exports.default = _default;