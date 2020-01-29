import _styled2 from "styled-components";
import _styled from "styled-components";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Text, theme } from '@aragon/ui';
import { ModalWrapper, DisplayErrors } from './ModalWrapper';
import { ModalContext } from '../../wrappers/modal';
import { close } from '../../stateManagers/modal';

var _StyledText = styled(Text).withConfig({
  displayName: "RemoveItem___StyledText",
  componentId: "sc-2ek0nk-0"
})(["margin:20px 0 26px 0;"]);

var _StyledButton = styled(Button).withConfig({
  displayName: "RemoveItem___StyledButton",
  componentId: "sc-2ek0nk-1"
})(["background:", ";"], function (p) {
  return p._css;
});

var RemoveItem = function RemoveItem(_ref) {
  var itemType = _ref.itemType,
      onRemove = _ref.onRemove,
      removingError = _ref.removingError;

  var _useContext = useContext(ModalContext),
      dispatchModal = _useContext.dispatchModal;

  var title;
  if (itemType === 'workHistory') title = 'Delete work history record';else if (itemType === 'educationHistory') title = 'Delete education history record';else if (itemType === 'organizations') title = 'Delete organization membership record';else title = 'Delete data';
  return React.createElement(ModalWrapper, {
    title: title
  }, React.createElement(DisplayErrors, {
    errors: removingError
  }), React.createElement(_StyledText, {
    size: "large"
  }, "Are you sure you want to delete it?"), React.createElement(ButtonsRow, null, React.createElement(Button, {
    compact: true,
    mode: "outline",
    onClick: function onClick() {
      return dispatchModal(close());
    }
  }, "Cancel"), React.createElement(_StyledButton, {
    compact: true,
    mode: "strong",
    onClick: onRemove,
    _css: theme.negative
  }, "Delete")));
};

var ButtonsRow = styled.div.withConfig({
  displayName: "RemoveItem__ButtonsRow",
  componentId: "sc-2ek0nk-2"
})(["display:flex;justify-content:flex-end;> *{margin-left:13px;width:130px;}"]);
RemoveItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  itemType: PropTypes.string,
  removingError: PropTypes.object
};
RemoveItem.defaultProps = {
  itemType: ''
};
export default RemoveItem;