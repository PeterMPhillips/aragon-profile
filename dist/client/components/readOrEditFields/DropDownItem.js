function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@aragon/ui';
var NON_BREAKING_SPACE = '\xa0';
var accent = theme.accent,
    contentBackgroundActive = theme.contentBackgroundActive;

var DropDownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropDownItem, _React$Component);

  function DropDownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropDownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropDownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pressed: false,
      displayFocus: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleActivate", function (event) {
      var keyboard = event.type === 'keydown';

      if (keyboard && event.keyCode !== 13) {
        return;
      }

      _this.props.onActivate(_this.props.index, {
        keyboard: keyboard
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function () {
      _this.setState({
        pressed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      _this.setState({
        pressed: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        displayFocus: !_this.state.pressed
      });
    });

    return _this;
  }

  _createClass(DropDownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          mainRef = _this$props.mainRef,
          active = _this$props.active;
      var displayFocus = this.state.displayFocus;
      return React.createElement(StyledDropDownItem, {
        ref: mainRef,
        className: className,
        active: active,
        displayFocus: displayFocus,
        onClick: this.handleActivate,
        onKeyDown: this.handleActivate,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onFocus: this.handleFocus
      }, children);
    }
  }]);

  return DropDownItem;
}(React.Component);

_defineProperty(DropDownItem, "propTypes", {
  active: PropTypes.bool,
  children: PropTypes.node,
  index: PropTypes.number,
  mainRef: PropTypes.func,
  onActivate: PropTypes.func,
  className: PropTypes.string
});

_defineProperty(DropDownItem, "defaultProps", {
  children: NON_BREAKING_SPACE,
  mainRef: function mainRef() {},
  className: ''
});

var StyledDropDownItem = styled.div.attrs({
  tabIndex: '0'
}).withConfig({
  displayName: "DropDownItem__StyledDropDownItem",
  componentId: "sc-1ujaf3x-0"
})(["position:relative;padding:8px 15px;cursor:pointer;outline:0;&:after{content:'';opacity:0;position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;margin:-1px -2px;border:2px solid ", ";transition:all 100ms ease-in-out;}&:active{background-color:", ";}&:hover,&:focus{color:", ";}&:focus:after{opacity:", ";}"], accent, contentBackgroundActive, accent, function (_ref) {
  var displayFocus = _ref.displayFocus;
  return displayFocus ? 1 : 0;
});
export default DropDownItem;