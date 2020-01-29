import React from 'react';
import styled from 'styled-components';
import ImageMenu from './ImageMenu';
import { useProfile } from '../hooks';
import { ipfsAddress } from '../../ipfs';

var CoverImage = function CoverImage() {
  var _useProfile = useProfile(),
      userLoaded = _useProfile.userLoaded,
      coverPhotoCid = _useProfile.coverPhotoCid,
      ethereumAddress = _useProfile.ethereumAddress,
      viewMode = _useProfile.viewMode,
      onSignatures = _useProfile.onSignatures;

  var hasImage = !!coverPhotoCid;
  return React.createElement(CoverBase, {
    className: "imageHover"
  }, hasImage ? React.createElement(CoverPicture, {
    imageCid: coverPhotoCid
  }) : React.createElement(CoverPlaceholder, null), userLoaded && !viewMode && React.createElement(ImageMenu, {
    ethereumAddress: ethereumAddress,
    top: 26,
    right: 26,
    imageExists: !!hasImage,
    open: open,
    imageTag: "coverPhoto",
    imageTitle: "Cover",
    onSignatures: onSignatures
  }));
};

var getBackground = function getBackground(props) {
  return "url(https://".concat(ipfsAddress, "/ipfs/").concat(props.imageCid, ")");
};

var CoverBase = styled.div.withConfig({
  displayName: "CoverImage__CoverBase",
  componentId: "sc-1k4yhn2-0"
})(["width:100%;height:156px;position:relative;background-size:cover;background-position:center;"]);
var CoverPicture = styled(CoverBase).withConfig({
  displayName: "CoverImage__CoverPicture",
  componentId: "sc-1k4yhn2-1"
})(["background-image:", ";"], function (props) {
  return getBackground(props);
});
var CoverPlaceholder = styled(CoverBase).withConfig({
  displayName: "CoverImage__CoverPlaceholder",
  componentId: "sc-1k4yhn2-2"
})(["border:", ";filter:grayscale(100);background:black;opacity:0.1;"], function (_ref) {
  var dragBorder = _ref.dragBorder;
  return dragBorder;
});
export default CoverImage;