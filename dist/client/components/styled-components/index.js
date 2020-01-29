import _styled from "styled-components";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DateDropDown, EditTextField } from '../readOrEditFields';
import { ButtonBase, TextInput, SafeLink, theme, Text } from '@aragon/ui';
import editImage from '../../../../assets/pencil-black-tool-interface-symbol.png';
export var CheckWrapper = styled.div.withConfig({
  displayName: "styled-components__CheckWrapper",
  componentId: "sc-1ixv33k-0"
})(["height:146px;display:flex;align-items:center;padding-bottom:13px;>:first-child{margin-left:10px;margin-right:30px;}"]);
export var AlignRight = styled.div.withConfig({
  displayName: "styled-components__AlignRight",
  componentId: "sc-1ixv33k-1"
})(["display:flex;flex-direction:column;align-items:flex-end;cursor:pointer;"]);
export var Social = styled.div.withConfig({
  displayName: "styled-components__Social",
  componentId: "sc-1ixv33k-2"
})(["display:flex;align-items:center;>:nth-child(2){margin-left:8px;flex:1;}"]);
var linkStyles = {
  color: theme.accent,
  'text-decoration': 'none',
  '&:hover, &:focus': {
    'text-decoration': 'underline'
  }
};
export var Link = styled(SafeLink).attrs({
  target: '_blank'
}).withConfig({
  displayName: "styled-components__Link",
  componentId: "sc-1ixv33k-3"
})(linkStyles); // a Button styled to look like a Link

Link.Button = styled(ButtonBase).attrs({
  mode: 'text'
}).withConfig({
  displayName: "styled-components__Button",
  componentId: "sc-1ixv33k-4"
})(_objectSpread({}, linkStyles, {
  padding: 0
}));
export var EditIcon = styled.img.attrs({
  src: editImage
}).withConfig({
  displayName: "styled-components__EditIcon",
  componentId: "sc-1ixv33k-5"
})(["width:25px;"]);
export var SmallMargin = styled.div.withConfig({
  displayName: "styled-components__SmallMargin",
  componentId: "sc-1ixv33k-6"
})(["margin-top:10px;"]);
export var FlexDirectionRow = styled.div.withConfig({
  displayName: "styled-components__FlexDirectionRow",
  componentId: "sc-1ixv33k-7"
})(["display:flex;flex-direction:row;"]);
export var FlexDirectionCol = styled.div.withConfig({
  displayName: "styled-components__FlexDirectionCol",
  componentId: "sc-1ixv33k-8"
})(["display:flex;flex-direction:column;"]);
export var FullWidthButton = styled(ButtonBase).withConfig({
  displayName: "styled-components__FullWidthButton",
  componentId: "sc-1ixv33k-9"
})(["width:100%;"]);
export var FullWidthTextInput = styled(EditTextField).withConfig({
  displayName: "styled-components__FullWidthTextInput",
  componentId: "sc-1ixv33k-10"
})(["width:100%;"]);
export var FlexGrowTextInput = styled(EditTextField).withConfig({
  displayName: "styled-components__FlexGrowTextInput",
  componentId: "sc-1ixv33k-11"
})(["flex-grow:1;"]);
export var TextInputWithValidation = styled(TextInput).withConfig({
  displayName: "styled-components__TextInputWithValidation",
  componentId: "sc-1ixv33k-12"
})(["border-color:", ";"], function (props) {
  return props.error ? 'red' : 'default';
});
export var TextMultilineWithValidation = styled(TextInput.Multiline).withConfig({
  displayName: "styled-components__TextMultilineWithValidation",
  componentId: "sc-1ixv33k-13"
})(["border-color:", ";display:block;padding:10px 10px;height:80px;"], function (props) {
  return props.error ? 'red' : 'default';
});
export var ErrorBar = styled.div.withConfig({
  displayName: "styled-components__ErrorBar",
  componentId: "sc-1ixv33k-14"
})(["height:1px;margin-top:3px;width:100%;background-color:red;"]);
export var DropDownWithValidation = function DropDownWithValidation(props) {
  return React.createElement(Fragment, null, React.createElement(DateDropDown, props), props.error && React.createElement(ErrorBar, null));
};
DropDownWithValidation.propTypes = {
  error: PropTypes.string
};
DropDownWithValidation.defaultProps = {
  error: ''
};

var _StyledTextBlock = styled(Text.Block).withConfig({
  displayName: "styled-components___StyledTextBlock",
  componentId: "sc-1ixv33k-15"
})(["line-height:1.8;font-weight:bold;"]);

export var TileHeader = function TileHeader(props) {
  return React.createElement(_StyledTextBlock, {
    size: "large"
  }, props.children);
};
TileHeader.propTypes = {
  children: PropTypes.node
};
export { default as BasicInfoCardWrap } from './BasicInfoCardWrap';
export { default as ContentWrap } from './ContentWrap';
export { default as EthAddr } from './EthAddr';
export { default as IconPencil } from './IconPencil';
export { default as IconTrash } from './IconTrash';
export { default as IconGitHub } from './IconGitHub';
export { default as IconTwitter } from './IconTwitter';
export { default as IconEthereum } from './IconEthereum';
export { default as IconLocation } from './IconLocation';
export { default as IconVerified } from './IconVerified';
export { default as AnimationLoading } from './AnimationLoading';
export { default as IconGlobe } from './IconGlobe';
export { default as IconCamera } from './IconCamera';
export { default as AnimationLoadingCircle } from './AnimationLoadingCircle';
export { default as IconSuccess } from './IconSuccess';
export { default as IconError } from './IconError';