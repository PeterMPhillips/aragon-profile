import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as AragonButton, Text, useTheme } from '@aragon/ui';
import { IconTrash } from './styled-components';

var OrganizationTile = function OrganizationTile(_ref) {
  var organizationData = _ref.organizationData,
      removeItem = _ref.removeItem,
      viewMode = _ref.viewMode;
  var theme = useTheme();
  return React.createElement(OrganizationItem, null, React.createElement(Text.Block, {
    size: "large"
  }, organizationData.address), !viewMode && React.createElement(Icons, null, React.createElement(Button, {
    onClick: removeItem
  }, React.createElement(IconTrash, {
    width: "16px",
    height: "16px",
    color: theme.accent.toString()
  }))));
};

var OrganizationItem = styled.div.withConfig({
  displayName: "OrganizationTile__OrganizationItem",
  componentId: "sc-1lem1ii-0"
})(["position:relative;"]);
var Icons = styled.div.withConfig({
  displayName: "OrganizationTile__Icons",
  componentId: "sc-1lem1ii-1"
})(["display:flex;flex-direction:column;position:absolute;top:-4px;right:-4px;visibility:hidden;", ":hover &{visibility:visible;}"], OrganizationItem);
var Button = styled(AragonButton).attrs({
  mode: 'text'
}).withConfig({
  displayName: "OrganizationTile__Button",
  componentId: "sc-1lem1ii-2"
})(["background:rgba(255,255,255,0.9);box-sizing:content-box;height:16px;overflow:hidden;padding:4px;&:not(:last-child){margin-bottom:4px;}"]);
OrganizationTile.propTypes = {
  organizationData: PropTypes.shape({
    address: PropTypes.string.isRequired
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  viewMode: PropTypes.bool.isRequired
};
export default OrganizationTile;