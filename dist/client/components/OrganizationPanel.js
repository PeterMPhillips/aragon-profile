import React, { useContext } from 'react';
import CardWrapper from '../wrappers/styleWrappers/CardWrapper';
import { useProfile } from '../hooks';
import { ModalContext } from '../wrappers/modal';
import OrganizationTile from './OrganizationTile';
import { open, removeItem as _removeItem } from '../stateManagers/modal';
import { Text, Button, useTheme } from '@aragon/ui';
import styled from 'styled-components';

var OrganizationPanel = function OrganizationPanel() {
  var theme = useTheme();

  var _useProfile = useProfile(),
      organizations = _useProfile.organizations,
      viewMode = _useProfile.viewMode;

  var _useContext = useContext(ModalContext),
      dispatchModal = _useContext.dispatchModal;

  var organizationsNotEmpty = Object.keys(organizations).length > 0;
  var cardProps = {
    title: 'Organizations',
    addMore: organizationsNotEmpty ? function () {
      return dispatchModal(open('organization'));
    } : null,
    addSeparators: true,
    viewMode: viewMode
  };
  return React.createElement(CardWrapper, cardProps, organizationsNotEmpty ? Object.keys(organizations).map(function (id) {
    return React.createElement(OrganizationTile, {
      key: id,
      organizationData: organizations[id],
      removeItem: function removeItem() {
        return dispatchModal(_removeItem(id, 'organizations'));
      },
      viewMode: viewMode
    });
  }) : React.createElement(Center, null, React.createElement(Text, {
    size: "xlarge"
  }, "You have no organizations"), !viewMode && React.createElement(Button, {
    compact: true,
    size: "small",
    onClick: function onClick() {
      return dispatchModal(open('organization'));
    }
  }, React.createElement(Text, {
    color: theme.accent.toString(),
    size: "small"
  }, "Add organisation"))));
};

var Center = styled.div.withConfig({
  displayName: "OrganizationPanel__Center",
  componentId: "sc-1nr2vc7-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:90px;"]);
export default OrganizationPanel;