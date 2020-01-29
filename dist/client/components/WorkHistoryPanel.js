import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardWrapper from '../wrappers/styleWrappers/CardWrapper';
import { useProfile } from '../hooks';
import { ModalContext } from '../wrappers/modal';
import WorkHistoryTile from './WorkHistoryTile';
import { open, removeItem as _removeItem } from '../stateManagers/modal';
import { Text } from '@aragon/ui';
import styled from 'styled-components';
import { Link } from './styled-components';
import { sortHistory } from '../utils';

var WorkHistoryPanel = function WorkHistoryPanel(_ref) {
  var className = _ref.className;

  var _useProfile = useProfile(),
      workHistory = _useProfile.workHistory,
      viewMode = _useProfile.viewMode;

  var _useContext = useContext(ModalContext),
      dispatchModal = _useContext.dispatchModal;

  var historyPresent = Object.keys(workHistory).length > 0;
  if (!historyPresent && viewMode) return null;
  var cardProps = {
    title: 'Work history',
    addMore: historyPresent ? function () {
      return dispatchModal(open('workHistory'));
    } : null,
    addSeparators: true,
    className: className,
    viewMode: viewMode
  };
  return React.createElement(CardWrapper, cardProps, historyPresent ? sortHistory(workHistory).map(function (item) {
    return React.createElement(WorkHistoryTile, {
      key: item.id,
      workHistoryData: item,
      openModal: function openModal() {
        return dispatchModal(open('workHistory', item.id));
      },
      removeItem: function removeItem() {
        return dispatchModal(_removeItem(item.id, 'workHistory'));
      },
      viewMode: viewMode
    });
  }) : React.createElement(Center, null, React.createElement(Text, {
    size: "normal"
  }, "No work history added"), React.createElement(Link.Button, {
    onClick: function onClick() {
      return dispatchModal(open('workHistory'));
    },
    size: "small"
  }, "Add work")));
};

WorkHistoryPanel.propTypes = {
  className: PropTypes.string
};
var Center = styled.div.withConfig({
  displayName: "WorkHistoryPanel__Center",
  componentId: "zmg4lg-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:90px;"]);
export default WorkHistoryPanel;