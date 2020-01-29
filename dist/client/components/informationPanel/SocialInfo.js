import _styled2 from "styled-components";
import _styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Card, Button, IconClose, useTheme } from '@aragon/ui';
import { Social, Link, IconGitHub, IconTwitter, IconVerified } from '../styled-components';

var VerifySocial = function VerifySocial(_ref) {
  var social = _ref.social,
      setPopover = _ref.setPopover;
  return React.createElement(VerifyCard, null, React.createElement(Text.Block, {
    size: "xlarge"
  }, "Verify my ", social), React.createElement(CardCloseButton, {
    type: "button",
    onClick: function onClick() {
      setPopover('');
    }
  }, React.createElement(IconClose, null), "\uFFFC"), React.createElement(Text.Block, {
    size: "small"
  }, "Aragon manages profiles using 3box.io. To verify your ", social, ", you must visit your 3box profile."), React.createElement(Link, {
    size: "small",
    href: "https://3box.io/hub"
  }, "Take me to my 3box"));
};

VerifySocial.propTypes = {
  social: PropTypes.string.isRequired,
  setPopover: PropTypes.func.isRequired
};

var _StyledButton = styled(Button).withConfig({
  displayName: "SocialInfo___StyledButton",
  componentId: "dbsm2p-0"
})(["position:relative"]);

export var GitHub = function GitHub(_ref2) {
  var username = _ref2.github.username,
      activePopover = _ref2.activePopover,
      setPopover = _ref2.setPopover;
  var theme = useTheme();
  return React.createElement(Social, null, React.createElement(IconGitHub, {
    width: "13px",
    height: "13px",
    color: theme.contentSecondary.toString()
  }), username ? React.createElement("div", null, React.createElement(Link, {
    href: "https://github.com/".concat(username)
  }, username), React.createElement(Verified, null)) : React.createElement("div", null, React.createElement(_StyledButton, {
    compact: true,
    mode: "outline",
    onClick: function onClick() {
      return setPopover('github');
    }
  }, "Verify my GitHub account"), activePopover === 'github' && React.createElement(VerifySocial, {
    social: "GitHub",
    setPopover: setPopover
  })));
};
GitHub.propTypes = {
  github: PropTypes.object.isRequired,
  activePopover: PropTypes.string.isRequired,
  setPopover: PropTypes.func.isRequired
};

var _StyledButton2 = styled(Button).withConfig({
  displayName: "SocialInfo___StyledButton2",
  componentId: "dbsm2p-1"
})(["position:relative"]);

export var Twitter = function Twitter(_ref3) {
  var username = _ref3.twitter.username,
      activePopover = _ref3.activePopover,
      setPopover = _ref3.setPopover;
  var theme = useTheme();
  return React.createElement(Social, null, React.createElement(IconTwitter, {
    width: "13px",
    height: "13px",
    color: theme.contentSecondary.toString()
  }), username ? React.createElement("div", null, React.createElement(Link, {
    href: "https://twitter.com/".concat(username)
  }, username), React.createElement(Verified, null)) : React.createElement("div", null, React.createElement(_StyledButton2, {
    compact: true,
    mode: "outline",
    onClick: function onClick() {
      return setPopover('twitter');
    }
  }, "Verify my Twitter account"), activePopover === 'twitter' && React.createElement(VerifySocial, {
    social: "Twitter",
    setPopover: setPopover
  })));
};
Twitter.propTypes = {
  twitter: PropTypes.object,
  activePopover: PropTypes.string.isRequired,
  setPopover: PropTypes.func.isRequired
};
var Verified = styled(IconVerified).withConfig({
  displayName: "SocialInfo__Verified",
  componentId: "dbsm2p-2"
})(["margin-left:8px;"]);
var VerifyCard = styled(Card).attrs({
  width: '286px',
  height: '170px'
}).withConfig({
  displayName: "SocialInfo__VerifyCard",
  componentId: "dbsm2p-3"
})(["background:white;padding:13px 20px;position:absolute;left:52px;z-index:2;>:not(:last-child){margin-bottom:13px;}"]);
var CardCloseButton = styled.button.withConfig({
  displayName: "SocialInfo__CardCloseButton",
  componentId: "dbsm2p-4"
})(["", " &{position:absolute;\uFFFCpadding:20px;top:13px;right:13px;cursor:pointer;background:none;border:0;outline:0;&::-moz-focus-inner{border:0;}}\uFFFC"], VerifyCard);