import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@aragon/ui';
import { ModalWrapper } from './ModalWrapper';
import { CheckWrapper, IconSuccess, IconError, AnimationLoadingCircle } from '../styled-components';
var messages = {
  savingProfile: 'Updating your profile...',
  savedProfileSuccess: 'Your profile has been updated!',
  savedProfileError: 'Your profile could not be updated.'
};
var icons = {
  savingProfile: AnimationLoadingCircle,
  savedProfileSuccess: IconSuccess,
  savedProfileError: IconError
};

var AfterSave = function AfterSave(_ref) {
  var state = _ref.state;
  var Icon = icons[state] || IconError;
  return React.createElement(ModalWrapper, null, React.createElement(CheckWrapper, null, React.createElement(Icon, null), React.createElement(Text, {
    size: "xxlarge"
  }, messages[state] || 'Oops, something went wrong on our end. Please try again.')));
};

AfterSave.propTypes = {
  state: PropTypes.string
};
export default AfterSave;