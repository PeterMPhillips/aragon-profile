import _styled3 from "styled-components";
import _styled2 from "styled-components";
import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Text, useTheme } from '@aragon/ui';
import styled from 'styled-components';
import { Link } from '../../components/styled-components';

var _StyledDiv = styled("div").withConfig({
  displayName: "CardWrapper___StyledDiv",
  componentId: "tsh62v-0"
})(["margin-top:15px"]);

var _StyledText = styled(Text).withConfig({
  displayName: "CardWrapper___StyledText",
  componentId: "tsh62v-1"
})(["padding-bottom:3px;display:inline-block;"]);

var _StyledLinkButton = styled(Link.Button).withConfig({
  displayName: "CardWrapper___StyledLinkButton",
  componentId: "tsh62v-2"
})(["padding-left:13px"]);

var CardWrapper = function CardWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      addMore = _ref.addMore,
      addSeparators = _ref.addSeparators,
      viewMode = _ref.viewMode;
  var theme = useTheme();
  return React.createElement(_StyledDiv, {
    className: className
  }, title && React.createElement(_StyledText, {
    size: "xlarge"
  }, title), addMore && !viewMode && React.createElement(_StyledLinkButton, {
    size: "tiny",
    onClick: addMore
  }, "Add more"), children && React.createElement(StyledCard, {
    theme: theme,
    addSeparators: addSeparators
  }, children));
};

CardWrapper.defaultProps = {
  addSeparators: false,
  addMore: null,
  viewMode: true
};
CardWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  addMore: PropTypes.func,
  addSeparators: PropTypes.bool,
  viewMode: PropTypes.bool
};
var StyledCard = styled(Card).attrs({
  width: '100%',
  height: 'auto'
}).withConfig({
  displayName: "CardWrapper__StyledCard",
  componentId: "tsh62v-3"
})(["padding:20px;>:not(:last-child){margin-bottom:13px;padding-bottom:13px;border-bottom:", ";}"], function (_ref2) {
  var theme = _ref2.theme,
      addSeparators = _ref2.addSeparators;
  return addSeparators ? "1px solid ".concat(theme.border) : '0';
});
export default CardWrapper;