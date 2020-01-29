import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '@aragon/ui';
import ImageMenu from '../ImageMenu';
import { useProfile } from '../../hooks';
import { ipfsAddress } from '../../../ipfs';
import { assetsPath } from '../../utils';
import defaultImage from '../../../../assets/profile_avatar.svg';

var ProfilePicture = function ProfilePicture() {
  var theme = useTheme();

  var _useProfile = useProfile(),
      imageCid = _useProfile.imageCid,
      ethereumAddress = _useProfile.ethereumAddress,
      userLoaded = _useProfile.userLoaded,
      viewMode = _useProfile.viewMode,
      onSignatures = _useProfile.onSignatures;

  var hasImage = !!imageCid; // image upload menu can have either 3 or 2 rows, depending on hasImage

  var topMenuPos = hasImage ? 26 : 32;
  return React.createElement(Container, {
    theme: theme,
    className: "imageHover",
    imageCid: imageCid
  }, userLoaded && !viewMode && React.createElement(ImageMenu, {
    ethereumAddress: ethereumAddress,
    top: topMenuPos,
    right: -12,
    imageExists: !!hasImage,
    imageTag: "image",
    imageTitle: "Profile",
    onSignatures: onSignatures
  }));
};

var Container = styled.div.withConfig({
  displayName: "ProfilePicture__Container",
  componentId: "sc-47xk5i-0"
})(["cursor:", ";padding:20px;border:2px solid ", ";background-repeat:no-repeat;background-position:center;transition:border 0.24s ease-in-out;border-radius:50%;width:150px;height:150px;position:absolute;bottom:calc(100% - 30px);left:30px;z-index:4;", ""], function (props) {
  return props.isEditing && 'pointer';
}, function (_ref) {
  var theme = _ref.theme;
  return theme.surface;
}, function (props) {
  return props.imageCid ? css(["background-image:url(https://", "/ipfs/", ");background-size:100%;background-color:white;"], ipfsAddress, props.imageCid) : css(["background-image:url(", ");background-size:50%;background-color:#e5e8eb;"], assetsPath(defaultImage));
});
export default ProfilePicture;