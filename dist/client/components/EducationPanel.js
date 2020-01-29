import React, { useContext } from 'react';
import CardWrapper from '../wrappers/styleWrappers/CardWrapper';
import { useProfile } from '../hooks';
import { ModalContext } from '../wrappers/modal';
import EducationHistoryTile from './EducationHistoryTile';
import { open, removeItem as _removeItem } from '../stateManagers/modal';
import { Text } from '@aragon/ui';
import styled from 'styled-components';
import { Link } from './styled-components';
import { sortHistory } from '../utils';

var EducationPanel = function EducationPanel() {
  var _useProfile = useProfile(),
      educationHistory = _useProfile.educationHistory,
      viewMode = _useProfile.viewMode;

  var _useContext = useContext(ModalContext),
      dispatchModal = _useContext.dispatchModal;

  var historyPresent = Object.keys(educationHistory).length > 0;
  if (!historyPresent && viewMode) return null;
  var cardProps = {
    title: 'Education',
    addMore: historyPresent ? function () {
      return dispatchModal(open('educationHistory'));
    } : null,
    addSeparators: true,
    viewMode: viewMode
  };
  return React.createElement(CardWrapper, cardProps, historyPresent ? sortHistory(educationHistory).map(function (item) {
    return React.createElement(EducationHistoryTile, {
      key: item.id,
      educationHistoryData: item,
      openModal: function openModal() {
        return dispatchModal(open('educationHistory', item.id));
      },
      removeItem: function removeItem() {
        return dispatchModal(_removeItem(item.id, 'educationHistory'));
      },
      viewMode: viewMode
    });
  }) : React.createElement(Center, null, React.createElement(Text, {
    size: "normal"
  }, "No education added"), React.createElement(Link.Button, {
    onClick: function onClick() {
      return dispatchModal(open('educationHistory'));
    },
    size: "small"
  }, "Add education")));
};

var Center = styled.div.withConfig({
  displayName: "EducationPanel__Center",
  componentId: "sc-1bf2ajg-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:90px;"]);
export default EducationPanel;