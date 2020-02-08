import _styled2 from "styled-components";
import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import CoverImage from '../../components/CoverImage';
import ProfilePicture from '../../components/informationPanel/ProfilePicture';
import { BasicInfoCardWrap, ContentWrap, EthAddr, IconEthereum } from '../../components/styled-components';
import { Text } from '@aragon/ui';

var _StyledDiv = _styled("div").withConfig({
  displayName: "NoProfile___StyledDiv",
  componentId: "sc-4i6ab3-0"
})(["display:flex;margin:7px 0 24px;"]);

var _StyledEthAddr = _styled(EthAddr).withConfig({
  displayName: "NoProfile___StyledEthAddr",
  componentId: "sc-4i6ab3-1"
})(["margin-left:8px"]);

var NoProfile = function NoProfile(_ref) {
  var ethereumAddress = _ref.ethereumAddress;
  return React.createElement(React.Fragment, null, React.createElement(CoverImage, null), React.createElement(ContentWrap, null, React.createElement(BasicInfoCardWrap, null, React.createElement(ProfilePicture, null), React.createElement(_StyledDiv, null, React.createElement(IconEthereum, {
    width: "18px",
    height: "18px"
  }), React.createElement(_StyledEthAddr, null, ethereumAddress)), React.createElement(Text.Block, null, "This account has not created a profile"))));
};

NoProfile.propTypes = {
  ethereumAddress: PropTypes.string.isRequired
};
export default NoProfile;