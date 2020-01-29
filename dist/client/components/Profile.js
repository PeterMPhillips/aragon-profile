import _styled from "styled-components";
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '@aragon/ui';
import InformationPanel from './informationPanel'; // import OrganizationPanel from './OrganizationPanel'

import EducationPanel from './EducationPanel';
import WorkHistoryPanel from './WorkHistoryPanel';
import CoverImage from './CoverImage';
import { ContentWrap } from './styled-components';

var _StyledWorkHistoryPanel = styled(WorkHistoryPanel).withConfig({
  displayName: "Profile___StyledWorkHistoryPanel",
  componentId: "sc-14fpsqi-0"
})(["grid-row:span 2"]);

var Profile = function Profile() {
  return React.createElement(React.Fragment, null, React.createElement(CoverImage, null), React.createElement(Grid, null, React.createElement(InformationPanel, null), React.createElement(_StyledWorkHistoryPanel, null), React.createElement(EducationPanel, null)));
};

var Grid = styled(ContentWrap).withConfig({
  displayName: "Profile__Grid",
  componentId: "sc-14fpsqi-1"
})(["display:grid;grid-column-gap:26px;", ";", ";"], breakpoint('small', "\n      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n      grid-template-rows: auto 1fr;\n    "), breakpoint('large', 'grid-template-columns: 2fr 3fr'));
export default Profile;