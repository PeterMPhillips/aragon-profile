import _styled3 from "styled-components";
import _styled2 from "styled-components";
import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, ButtonBase, useTheme } from '@aragon/ui';
import { Social, Link, IconLocation, IconGlobe } from '../styled-components';
export var Name = function Name(_ref) {
  var name = _ref.name,
      handleOpenEdit = _ref.handleOpenEdit;
  var theme = useTheme();
  return name ? React.createElement(Text.Block, {
    size: "xxlarge"
  }, name) : React.createElement(Center, null, React.createElement(ButtonBase, {
    onClick: handleOpenEdit
  }, React.createElement(Text, {
    size: "large",
    color: theme.accent.toString()
  }, "Add name")));
};
Name.propTypes = {
  name: PropTypes.string,
  handleOpenEdit: PropTypes.func.isRequired
};
export var Description = function Description(_ref2) {
  var description = _ref2.description;
  return description && React.createElement(Text.Block, null, description);
};
Description.propTypes = {
  description: PropTypes.string
};
export var Location = function Location(_ref3) {
  var location = _ref3.location;
  var theme = useTheme();
  return location && React.createElement(Social, null, React.createElement(IconLocation, {
    width: "13px",
    height: "13px",
    color: theme.contentSecondary.toString()
  }), React.createElement(Text, {
    size: "normal",
    color: theme.contentSecondary.toString()
  }, location));
};
Location.propTypes = {
  location: PropTypes.string
};

var _StyledLink = styled(Link).withConfig({
  displayName: "BasicInfo___StyledLink",
  componentId: "sc-1nonxf5-0"
})({
  textAlign: 'left'
});

export var Website = function Website(_ref4) {
  var website = _ref4.website;
  var theme = useTheme();
  return website && React.createElement(Social, null, React.createElement(IconGlobe, {
    width: "13px",
    height: "13px",
    color: theme.contentSecondary.toString()
  }), React.createElement(_StyledLink, {
    href: website,
    placeholder: "website",
    size: "small"
  }, website));
};
Website.propTypes = {
  website: PropTypes.string
};

var _StyledTextBlock = styled(Text.Block).withConfig({
  displayName: "BasicInfo___StyledTextBlock",
  componentId: "sc-1nonxf5-1"
})(["text-align:center"]);

var _StyledButtonBase = styled(ButtonBase).withConfig({
  displayName: "BasicInfo___StyledButtonBase",
  componentId: "sc-1nonxf5-2"
})(["padding:0"]);

export var Empty = function Empty(_ref5) {
  var handleOpenEdit = _ref5.handleOpenEdit;
  var theme = useTheme();
  return React.createElement(Center, {
    height: "130px"
  }, React.createElement(_StyledTextBlock, {
    size: "xlarge"
  }, "You have no name, bio or location"), React.createElement(_StyledButtonBase, {
    large: true,
    onClick: handleOpenEdit
  }, React.createElement(Text, {
    size: "small",
    color: theme.accent.toString()
  }, "Add basic information")));
};
Empty.propTypes = {
  handleOpenEdit: PropTypes.func.isRequired
};
var Center = styled.div.withConfig({
  displayName: "BasicInfo__Center",
  componentId: "sc-1nonxf5-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:", ";"], function (_ref6) {
  var height = _ref6.height;
  return height || '40px';
});