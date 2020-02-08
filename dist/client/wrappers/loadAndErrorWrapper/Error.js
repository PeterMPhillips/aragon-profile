import _styled3 from "styled-components";
import _styled2 from "styled-components";
import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import CoverImage from '../../components/CoverImage';
import ProfilePicture from '../../components/informationPanel/ProfilePicture';
import { IconEthereum } from '../../components/styled-components';
import { Text, Card, theme } from '@aragon/ui';
import styled from 'styled-components';

var _StyledDiv = styled("div").withConfig({
  displayName: "Error___StyledDiv",
  componentId: "sc-1kxw6za-0"
})(["width:100%"]);

var _StyledDiv2 = styled("div").withConfig({
  displayName: "Error___StyledDiv2",
  componentId: "sc-1kxw6za-1"
})(["display:flex;margin-bottom:24px"]);

var _StyledText = styled(Text).withConfig({
  displayName: "Error___StyledText",
  componentId: "sc-1kxw6za-2"
})(["margin-left:8px"]);

var ErrorState = function ErrorState(_ref) {
  var ethereumAddress = _ref.ethereumAddress,
      error = _ref.error;
  return React.createElement(_StyledDiv, null, React.createElement(CoverImage, null), React.createElement(ProfilePicture, null), React.createElement(ErrorCard, null, React.createElement(_StyledDiv2, null, React.createElement(IconEthereum, {
    width: "18px",
    height: "18px"
  }), React.createElement(_StyledText, {
    size: "small",
    color: theme.textTertiary
  }, ethereumAddress)), React.createElement(Text.Block, {
    size: "normal",
    color: theme.negative
  }, "Error: ", error.message)));
};

ErrorState.propTypes = {
  ethereumAddress: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired
};
var ErrorCard = styled(Card).attrs({
  width: 'auto'
}).withConfig({
  displayName: "Error__ErrorCard",
  componentId: "sc-1kxw6za-3"
})(["padding:30px;padding-top:62px;margin:0 30px;height:auto;"]);
export default ErrorState;