function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

var IconSuccess = function IconSuccess(props) {
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
    transform: "translate(-1335.000000, -223.000000)"
  }, React.createElement("g", {
    transform: "translate(1335.000000, 223.000000)"
  }, React.createElement("circle", {
    fill: "#00D985",
    cx: "43",
    cy: "43",
    r: "43"
  }), React.createElement("g", {
    transform: "translate(18.000000, 25.000000)",
    fill: "#FFFFFF"
  }, React.createElement("polygon", {
    points: "15.8469945 29.255814 45.9699454 0 50 3.90518784 15.8469945 37 0 21.6440072 3.96174863 17.7388193"
  }))))));
};

IconSuccess.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};
IconSuccess.defaultProps = {
  color: '#00D985',
  width: '86px',
  height: '86px'
};
export default IconSuccess;