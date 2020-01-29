import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import { Text, IconCheck, IconAttention, IconError } from '@aragon/ui';
import styled from 'styled-components';
import { FlexDirectionRow, FlexDirectionCol } from '../styled-components';
import { ModalWrapper } from './ModalWrapper';

var ProfileStatus = function ProfileStatus(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      complete = _ref.complete,
      title = _ref.title;
  var Icon;
  var text;

  if (complete) {
    Icon = IconCheck;
    text = 'Message signed!';
  } else if (error) {
    Icon = IconError;
    text = 'Error signing message';
  } else if (loading) {
    Icon = IconAttention;
    text = 'Loading';
  } else {
    Icon = IconAttention;
    text = 'Waiting for signature...';
  }

  return React.createElement(AlignColCenter, null, React.createElement(Text, {
    smallcaps: true
  }, title), React.createElement(Icon, {
    width: "100px",
    height: "100px"
  }), React.createElement(Text, null, text));
};

ProfileStatus.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  complete: PropTypes.bool,
  title: PropTypes.string
};
ProfileStatus.defaultProps = {
  loading: false,
  error: false,
  complete: false,
  title: ''
};

var _StyledText = styled(Text).withConfig({
  displayName: "BoxState___StyledText",
  componentId: "sc-1i57851-0"
})(["margin:20px 0 26px 0;"]);

var BoxState = function BoxState(_ref2) {
  var _ref2$messageSigning = _ref2.messageSigning,
      creatingProf = _ref2$messageSigning.creatingProf,
      createdProfError = _ref2$messageSigning.createdProfError,
      createdProfSuccess = _ref2$messageSigning.createdProfSuccess,
      openingProf = _ref2$messageSigning.openingProf,
      openedProfError = _ref2$messageSigning.openedProfError,
      openedProfSuccess = _ref2$messageSigning.openedProfSuccess,
      syncingProf = _ref2$messageSigning.syncingProf,
      syncedProfError = _ref2$messageSigning.syncedProfError,
      syncedProfSuccess = _ref2$messageSigning.syncedProfSuccess,
      signaturesRequired = _ref2.signaturesRequired;
  var needsToUnlock = signaturesRequired.indexOf('unlock') > -1;
  var needsToCreate = signaturesRequired.indexOf('create') > -1;
  return React.createElement(ModalWrapper, {
    title: "3BOX"
  }, React.createElement(_StyledText, {
    size: "large"
  }, "Your wallet should open and you need to sign ".concat(signaturesRequired.length, " message").concat(signaturesRequired.length > 1 ? 's after another ' : '', "\n        to create your profile and save your updates.")), React.createElement(JustifyRowCenter, null, needsToUnlock && React.createElement(ProfileStatus, {
    awaitingSig: openingProf,
    complete: openedProfSuccess && syncedProfSuccess,
    error: openedProfError || syncedProfError,
    loading: syncingProf,
    title: "Grant aragon access to your 3box"
  }), needsToCreate && React.createElement(ProfileStatus, {
    awaitingSig: creatingProf,
    error: createdProfError,
    complete: createdProfSuccess,
    title: "Profile creation"
  })));
};

BoxState.propTypes = {
  messageSigning: PropTypes.shape({
    creatingProf: PropTypes.bool.isRequired,
    createdProfError: PropTypes.bool.isRequired,
    createdProfSuccess: PropTypes.bool.isRequired,
    openingProf: PropTypes.bool.isRequired,
    openedProfError: PropTypes.bool.isRequired,
    openedProfSuccess: PropTypes.bool.isRequired,
    syncingProf: PropTypes.bool.isRequired,
    syncedProfError: PropTypes.bool.isRequired,
    syncedProfSuccess: PropTypes.bool.isRequired
  }).isRequired,
  signaturesRequired: PropTypes.array.isRequired
};
var AlignColCenter = styled(FlexDirectionCol).withConfig({
  displayName: "BoxState__AlignColCenter",
  componentId: "sc-1i57851-1"
})(["align-items:center;"]);
var JustifyRowCenter = styled(FlexDirectionRow).withConfig({
  displayName: "BoxState__JustifyRowCenter",
  componentId: "sc-1i57851-2"
})(["justify-content:center;"]);
export default BoxState;