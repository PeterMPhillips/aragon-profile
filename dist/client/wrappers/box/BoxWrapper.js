import React from 'react';
import PropTypes from 'prop-types';
import { BoxContext } from '../box';
import { use3Box, useLinkedData } from '../../hooks';

var BoxWrapper = function BoxWrapper(_ref) {
  var ethereumAddress = _ref.ethereumAddress,
      children = _ref.children,
      onSignatures = _ref.onSignatures,
      isViewMode = _ref.isViewMode,
      web3Provider = _ref.web3Provider;

  var _use3Box = use3Box(ethereumAddress, onSignatures, web3Provider),
      boxes = _use3Box.boxes,
      dispatch = _use3Box.dispatch;

  useLinkedData(boxes, dispatch, ethereumAddress);
  return React.createElement(BoxContext.Provider, {
    value: {
      boxes: boxes,
      dispatch: dispatch,
      ethereumAddress: ethereumAddress,
      isViewMode: isViewMode,
      onSignatures: onSignatures,
      web3Provider: web3Provider
    }
  }, children);
};

BoxWrapper.propTypes = {
  ethereumAddress: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSignatures: PropTypes.func.isRequired,
  isViewMode: PropTypes.bool.isRequired,
  web3Provider: PropTypes.object.isRequired
};
export default BoxWrapper;