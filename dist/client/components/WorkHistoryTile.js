import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, useTheme } from '@aragon/ui';
import { IconPencil, IconTrash, TileHeader } from './styled-components';
import { displayStartEndDates } from '../utils';

var _StyledText = styled(Text).withConfig({
  displayName: "WorkHistoryTile___StyledText",
  componentId: "v3ey1w-0"
})(["margin-left:13px"]);

var WorkHistoryTile = function WorkHistoryTile(_ref) {
  var workHistoryData = _ref.workHistoryData,
      openModal = _ref.openModal,
      removeItem = _ref.removeItem,
      viewMode = _ref.viewMode;
  var theme = useTheme();
  return React.createElement(SingleWorkItem, null, React.createElement(Details, null, React.createElement(TileHeader, null, workHistoryData.workPlace), React.createElement(Text.Block, {
    size: "large"
  }, workHistoryData.jobTitle, React.createElement(_StyledText, {
    color: theme.contentSecondary.toString(),
    size: "xsmall"
  }, displayStartEndDates(workHistoryData))), React.createElement(Text.Block, {
    size: "small"
  }, workHistoryData.description)), !viewMode && React.createElement(Icons, null, React.createElement(IconPencil, {
    color: theme.accent.toString(),
    width: "16px",
    onClick: openModal
  }), React.createElement(IconTrash, {
    color: theme.accent.toString(),
    width: "16px",
    onClick: removeItem
  })));
};

var SingleWorkItem = styled.div.withConfig({
  displayName: "WorkHistoryTile__SingleWorkItem",
  componentId: "v3ey1w-1"
})(["width:100%;display:flex;>:not(:last-child){margin-bottom:5px;}"]);
var Icons = styled.div.withConfig({
  displayName: "WorkHistoryTile__Icons",
  componentId: "v3ey1w-2"
})(["display:inline-flex;width:auto;flex-direction:column;visibility:hidden;> *{margin:0 0 8px 8px;cursor:pointer;}", ":hover &{visibility:visible;}}"], SingleWorkItem);
var Details = styled.div.withConfig({
  displayName: "WorkHistoryTile__Details",
  componentId: "v3ey1w-3"
})(["width:100%;>:not(:last-child){margin-bottom:6px;}"]);
WorkHistoryTile.propTypes = {
  workHistoryData: PropTypes.shape({
    workPlace: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    description: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  viewMode: PropTypes.bool.isRequired
};
export default WorkHistoryTile;