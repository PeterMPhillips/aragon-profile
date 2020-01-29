import _styled3 from "styled-components";
import _styled2 from "styled-components";
import _styled from "styled-components";
import React from 'react';
import { AnimationLoading } from '../../components/styled-components';

var _StyledDiv = _styled.div.withConfig({
  displayName: "UnlockingBox___StyledDiv",
  componentId: "sc-1ujbphe-0"
})(["margin-top:40px;display:flex;flex-direction:column;justify-content:center;"]);

var _StyledDiv2 = _styled.div.withConfig({
  displayName: "UnlockingBox___StyledDiv2",
  componentId: "sc-1ujbphe-1"
})(["text-align:center"]);

var _StyledDiv3 = _styled.div.withConfig({
  displayName: "UnlockingBox___StyledDiv3",
  componentId: "sc-1ujbphe-2"
})(["margin-top:13px"]);

var UnlockingBox = function UnlockingBox() {
  return React.createElement(_StyledDiv, null, React.createElement(_StyledDiv2, null, React.createElement(AnimationLoading, null)), React.createElement(_StyledDiv3, null, "Unlocking box"));
};

export default UnlockingBox;