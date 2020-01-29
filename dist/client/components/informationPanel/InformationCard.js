function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '@aragon/ui';
import { ModalContext } from '../../wrappers/modal';
import { useProfile } from '../../hooks';
import { open } from '../../stateManagers/modal';
import { EthAddr, Social, IconPencil, IconEthereum } from '../styled-components';
import { GitHub, Twitter } from './SocialInfo';
import { Name, Description, Location, Website, Empty } from './BasicInfo';

var InformationCard = function InformationCard() {
  var theme = useTheme();

  var _useProfile = useProfile(),
      ethereumAddress = _useProfile.ethereumAddress,
      description = _useProfile.description,
      name = _useProfile.name,
      location = _useProfile.location,
      website = _useProfile.website,
      twitter = _useProfile.twitter,
      github = _useProfile.github,
      userLoaded = _useProfile.userLoaded,
      viewMode = _useProfile.viewMode;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      activePopover = _useState2[0],
      setPopover = _useState2[1];

  var _useContext = useContext(ModalContext),
      dispatchModal = _useContext.dispatchModal; // return early if there is no profile to display


  if (!userLoaded) return React.createElement("div", null);

  var handleOpenEdit = function handleOpenEdit() {
    dispatchModal(open('basicInformation'));
  };

  return React.createElement(Wrap, null, React.createElement("div", null, React.createElement(Details, null, !(name || description || location) ? React.createElement(Empty, {
    handleOpenEdit: handleOpenEdit
  }) : React.createElement(Fragment, null, React.createElement(Name, {
    name: name,
    handleOpenEdit: handleOpenEdit
  }), React.createElement(Description, {
    description: description
  }), React.createElement(Location, {
    location: location
  })), React.createElement(Website, {
    website: website
  }), (!viewMode || twitter.username || github.username) && React.createElement(Separator, {
    theme: theme
  }), (!viewMode || twitter.username) && React.createElement(Twitter, {
    twitter: twitter,
    activePopover: activePopover,
    setPopover: setPopover
  }), (!viewMode || github.username) && React.createElement(GitHub, {
    github: github,
    activePopover: activePopover,
    setPopover: setPopover
  }), React.createElement(Separator, {
    theme: theme
  }), React.createElement(Social, null, React.createElement(IconEthereum, {
    width: "13px",
    height: "13px",
    color: theme.contentSecondary.toString()
  }), React.createElement(EthAddr, {
    theme: theme
  }, ethereumAddress))), !viewMode && React.createElement(Icons, null, React.createElement(IconPencil, {
    width: "16px",
    color: theme.accent.toString(),
    onClick: handleOpenEdit
  }))));
}; // used for hover effects in Icons; needs no styling of its own


var Wrap = styled.div.withConfig({
  displayName: "InformationCard__Wrap",
  componentId: "o8hq1z-0"
})(["position:relative;"]);
var Icons = styled.div.withConfig({
  displayName: "InformationCard__Icons",
  componentId: "o8hq1z-1"
})(["position:absolute;top:0px;right:0px;visibility:hidden;> *{box-sizing:content-box;padding:4px;cursor:pointer;}", ":hover &{visibility:visible;}"], Wrap);
var Details = styled.div.withConfig({
  displayName: "InformationCard__Details",
  componentId: "o8hq1z-2"
})(["width:100%;>:not(:last-child){margin-bottom:7px;}"]);
var Separator = styled.hr.withConfig({
  displayName: "InformationCard__Separator",
  componentId: "o8hq1z-3"
})(["height:1px;border:0;width:100%;margin:13px 0 !important;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});
export default InformationCard;