import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, useTheme } from '@aragon/ui';
import { IconPencil, IconTrash, TileHeader } from './styled-components';
import { displayStartEndDates } from '../utils';

var _StyledTextBlock = styled(Text.Block).withConfig({
  displayName: "EducationHistoryTile___StyledTextBlock",
  componentId: "sc-143vmqk-0"
})(["line-height:1.8"]);

var EducationHistoryTile = function EducationHistoryTile(_ref) {
  var educationHistoryData = _ref.educationHistoryData,
      openModal = _ref.openModal,
      removeItem = _ref.removeItem,
      viewMode = _ref.viewMode;
  var theme = useTheme();
  return React.createElement(SingleEducationItem, null, React.createElement("div", null, React.createElement(TileHeader, null, educationHistoryData.organization), React.createElement(_StyledTextBlock, {
    size: "normal"
  }, educationHistoryData.degree, educationHistoryData.fieldOfStudy ? ', ' + educationHistoryData.fieldOfStudy : ''), React.createElement(Dates, {
    theme: theme
  }, displayStartEndDates(educationHistoryData))), !viewMode && React.createElement(Icons, null, React.createElement(IconPencil, {
    color: theme.accent.toString(),
    width: "16px",
    onClick: openModal
  }), React.createElement(IconTrash, {
    color: theme.accent.toString(),
    width: "16px",
    onClick: removeItem
  })));
};

var SingleEducationItem = styled.div.withConfig({
  displayName: "EducationHistoryTile__SingleEducationItem",
  componentId: "sc-143vmqk-1"
})(["width:100%;position:relative;"]);
var Icons = styled.div.withConfig({
  displayName: "EducationHistoryTile__Icons",
  componentId: "sc-143vmqk-2"
})(["display:flex;flex-direction:column;position:absolute;top:-4px;right:-4px;visibility:hidden;", ":hover &{visibility:visible;}"], SingleEducationItem);
var Dates = styled(Text.Block).attrs({
  size: 'xsmall'
}).withConfig({
  displayName: "EducationHistoryTile__Dates",
  componentId: "sc-143vmqk-3"
})(["color:", ";margin-top:2px;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.contentSecondary;
});
EducationHistoryTile.propTypes = {
  educationHistoryData: PropTypes.shape({
    degree: PropTypes.string,
    organization: PropTypes.string.isRequired,
    fieldOfStudy: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  viewMode: PropTypes.bool.isRequired
};
export default EducationHistoryTile;