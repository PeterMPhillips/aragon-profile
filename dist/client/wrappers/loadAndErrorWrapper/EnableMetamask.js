import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, EmptyStateCard, IconIdentity, Text } from '@aragon/ui';

var EnableMetamask = function EnableMetamask(_ref) {
  var enableWallet = _ref.enableWallet;
  return React.createElement(EmptyWrapper, null, React.createElement(EmptyStateCard, {
    text: React.createElement(Text, null, "Get started now by creating a new account."),
    illustration: React.createElement(IconIdentity, {
      size: "large"
    }),
    action: React.createElement(Button, {
      wide: true,
      onClick: enableWallet
    }, "Enable wallet")
  }));
};

EnableMetamask.propTypes = {
  enableWallet: PropTypes.func.isRequired
};
var EmptyWrapper = styled.div.withConfig({
  displayName: "EnableMetamask__EmptyWrapper",
  componentId: "qreqv1-0"
})(["margin-top:50px;flex-grow:1;display:flex;align-items:center;justify-content:center;"]);
export default EnableMetamask;