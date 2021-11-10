"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _chai = require("chai");

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("../index"));

// Demo tests
// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', function () {
  it('to have three `.icon-test`s', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.default, null));
    (0, _chai.expect)(wrapper.find('.icon-test')).to.have.length(3);
  });
  it('simulates click events', function () {
    var buttonClick = _sinon.default.spy();

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.default, {
      handleClick: buttonClick
    }));
    wrapper.find('button').simulate('click');
    (0, _chai.expect)(buttonClick.calledOnce).to.equal(true);
  });
}); // Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md

describe('Full DOM Rendering', function () {
  it('allows us to set props', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_index.default, {
      bar: "baz"
    }));
    (0, _chai.expect)(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({
      bar: 'foo'
    });
    (0, _chai.expect)(wrapper.props().bar).to.equal('foo');
  });
  it('calls componentDidMount', function () {
    _sinon.default.spy(_index.default.prototype, 'componentDidMount');

    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_index.default, null));
    (0, _chai.expect)(_index.default.prototype.componentDidMount.calledOnce).to.be.true;

    _index.default.prototype.componentDidMount.restore();
  });
}); // Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md

describe('Static Rendered Markup', function () {
  it('renders three `.icon-test`s', function () {
    var wrapper = (0, _enzyme.render)( /*#__PURE__*/_react.default.createElement(_index.default, null));
    (0, _chai.expect)(wrapper.find('.icon-test').length).to.equal(3);
  });
});