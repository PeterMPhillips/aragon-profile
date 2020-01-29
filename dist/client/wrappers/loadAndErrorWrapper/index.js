import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Initializing from './Initializing';
import LoadingPublicProfile from './LoadingPublicProfile';
import ErrorState from './Error';
import UnlockingBox from './UnlockingBox';
import NoProfile from './NoProfile';
import { useProfile, useProfileStates } from '../../hooks';
import EnableMetamask from './EnableMetamask';

var LoadAndErrorWrapper = function LoadAndErrorWrapper(_ref) {
  var children = _ref.children,
      enableWallet = _ref.enableWallet,
      ethereumAddress = _ref.ethereumAddress;

  var _useProfileStates = useProfileStates(),
      loadingPublicProf = _useProfileStates.loadingPublicProf,
      unlockingProf = _useProfileStates.unlockingProf,
      noPublicProfileFound = _useProfileStates.noPublicProfileFound,
      error = _useProfileStates.error;

  var _useProfile = useProfile(),
      viewMode = _useProfile.viewMode,
      metamaskEnabled = _useProfile.metamaskEnabled;

  var isInitializing = false;
  if (error instanceof Error) return React.createElement(ErrorState, {
    error: error,
    ethereumAddress: ethereumAddress
  });
  if (isInitializing) return React.createElement(Initializing, null);
  if (!metamaskEnabled) return React.createElement(EnableMetamask, {
    enableWallet: enableWallet
  });
  if (loadingPublicProf) return React.createElement(LoadingPublicProfile, null);
  if (unlockingProf) return React.createElement(UnlockingBox, null); // show NoProfile only if it doesn't exist and can't be created

  if (noPublicProfileFound && viewMode) return React.createElement(NoProfile, {
    ethereumAddress: ethereumAddress
  });
  return React.createElement(Fragment, null, children);
};

LoadAndErrorWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  enableWallet: PropTypes.func.isRequired,
  ethereumAddress: PropTypes.string
};
export default LoadAndErrorWrapper;