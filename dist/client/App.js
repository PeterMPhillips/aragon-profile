import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // import { EthereumAddressType } from '../../../prop-types'

import { BoxWrapper } from './wrappers/box';
import LoadAndErrorWrapper from './wrappers/loadAndErrorWrapper';
import Profile from './components/Profile';
import { ModalWrapper } from './wrappers/modal';
import { DragWrapper } from './wrappers/drag';
import { determineAddress, isViewMode } from './utils';

var App = function App(_ref) {
  var account = _ref.account,
      enableWallet = _ref.enableWallet,
      onSignatures = _ref.onSignatures,
      parts = _ref.parts,
      web3Provider = _ref.web3Provider;
  return React.createElement(BoxWrapper, {
    isViewMode: isViewMode(account, parts),
    ethereumAddress: determineAddress(account, parts),
    onSignatures: onSignatures,
    web3Provider: web3Provider
  }, React.createElement(ModalWrapper, {
    ethereumAddress: determineAddress(account, parts),
    onSignatures: onSignatures
  }, React.createElement(DragWrapper, null, React.createElement(BaseLayout, null, React.createElement(LoadAndErrorWrapper, {
    ethereumAddress: determineAddress(account, parts),
    enableWallet: enableWallet
  }, React.createElement(Profile, {
    ethereumAddress: determineAddress(account, parts),
    onSignatures: onSignatures
  }))))));
};

App.propTypes = {
  account: PropTypes.string,
  enableWallet: PropTypes.func.isRequired,
  onSignatures: PropTypes.func.isRequired,
  parts: PropTypes.array,
  web3Provider: PropTypes.object.isRequired
};
App.defaultProps = {
  parts: []
};
var BaseLayout = styled.div.withConfig({
  displayName: "App__BaseLayout",
  componentId: "pmp544-0"
})(["display:flex;align-items:center;flex-direction:column;"]);
export default App;