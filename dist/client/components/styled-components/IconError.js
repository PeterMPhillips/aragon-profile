function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var IconError = function IconError(props) {
  return React.createElement("svg", _extends({
    width: "86px",
    height: "86px",
    viewBox: "0 0 86 86"
  }, props), React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(-1335.000000, -517.000000)",
    fill: "#FB7777"
  }, React.createElement("circle", {
    cx: "1378",
    cy: "560",
    r: "43"
  }), React.createElement("g", {
    transform: "translate(1335.000000, 517.000000)"
  }, React.createElement("circle", {
    fill: "#FB7777",
    cx: "43",
    cy: "43",
    r: "43"
  }), React.createElement("g", {
    transform: "translate(25.000000, 25.000000)",
    fill: "#FFFFFF"
  }, React.createElement("polygon", {
    points: "35.2374545 5.12618182 21.1909091 19.1727273 35.2374545 33.2192727 31.6652727 36.7914545 17.6187273 22.7449091 3.57218182 36.7914545 0 33.2192727 14.0465455 19.1727273 0 5.12618182 3.57218182 1.554 17.6187273 15.6005455 31.6652727 1.554"
  }))))));
};

IconError.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};
IconError.defaultProps = {
  color: '#FB7777',
  width: '86px',
  height: '86px'
};
export default IconError;