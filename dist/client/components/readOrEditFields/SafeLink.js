import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import { SafeLink, Text, theme } from '@aragon/ui';

var _StyledSafeLink = _styled(SafeLink).withConfig({
  displayName: "SafeLink___StyledSafeLink",
  componentId: "od0puc-0"
})(["color:", ";"], function (p) {
  return p._css;
});

var Link = function Link(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      size = _ref.size;
  return React.createElement("div", null, value ? React.createElement(_StyledSafeLink, {
    href: value,
    target: "_blank",
    size: size,
    _css: theme.accent
  }, value) : React.createElement(Text, {
    size: size,
    color: "grey"
  }, placeholder));
};

Link.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};
export default Link;