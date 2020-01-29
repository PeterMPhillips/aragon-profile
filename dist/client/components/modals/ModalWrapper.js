import React, { useContext, Fragment } from 'react';
import { Text, IconClose, unselectable, theme } from '@aragon/ui';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalContext } from '../../wrappers/modal';
import { close } from '../../stateManagers/modal';
var CONTENT_PADDING = 30;

var ModalWrapper = function ModalWrapper(_ref) {
  var children = _ref.children,
      title = _ref.title;

  var _useContext = useContext(ModalContext),
      dispatchModal = _useContext.dispatchModal;

  return React.createElement(Fragment, null, React.createElement(PanelHeader, null, title && React.createElement("h1", null, React.createElement(Text, {
    size: "xxlarge"
  }, title)), React.createElement(PanelCloseButton, {
    type: "button",
    onClick: function onClick() {
      return dispatchModal(close());
    }
  }, React.createElement(IconClose, null))), React.createElement(PanelScrollView, null, React.createElement(PanelContent, null, children)));
};

ModalWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

var DisplayErrors = function DisplayErrors(_ref2) {
  var errors = _ref2.errors;
  return Object.keys(errors).length ? React.createElement(Fragment, null, Object.keys(errors).filter(function (field) {
    return !!errors[field];
  }).map(function (errorSource) {
    return React.createElement(Text.Block, {
      key: errorSource,
      color: theme.negative
    }, errors[errorSource]);
  })) : React.createElement(Fragment, null);
};

DisplayErrors.propTypes = {
  errors: PropTypes.object
};
DisplayErrors.defaultProps = {
  errors: {}
};
var PanelHeader = styled.header.withConfig({
  displayName: "ModalWrapper__PanelHeader",
  componentId: "sc-1k1i77w-0"
})(["position:relative;padding-top:15px;padding-left:", "px;padding-right:20px;padding-bottom:15px;", ";flex-shrink:0;"], CONTENT_PADDING, unselectable());
var PanelScrollView = styled.div.withConfig({
  displayName: "ModalWrapper__PanelScrollView",
  componentId: "sc-1k1i77w-1"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);
var PanelContent = styled.div.withConfig({
  displayName: "ModalWrapper__PanelContent",
  componentId: "sc-1k1i77w-2"
})(["min-height:0;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;width:100%;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;"], CONTENT_PADDING, CONTENT_PADDING, CONTENT_PADDING);
var PanelCloseButton = styled.button.withConfig({
  displayName: "ModalWrapper__PanelCloseButton",
  componentId: "sc-1k1i77w-3"
})(["", " &{position:absolute;padding:20px;top:0;right:0;cursor:pointer;background:none;border:0;outline:0;&::-moz-focus-inner{border:0;}}"], PanelHeader);
var TwoColumnsRow = styled.div.withConfig({
  displayName: "ModalWrapper__TwoColumnsRow",
  componentId: "sc-1k1i77w-4"
})(["display:flex;justify-content:space-between;align-content:stretch;> *{width:48%;}"]);
export { ModalWrapper, TwoColumnsRow, DisplayErrors };