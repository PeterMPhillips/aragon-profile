import React from 'react';
import ProfilePicture from './ProfilePicture';
import InformationCard from './InformationCard';
import { BasicInfoCardWrap } from '../styled-components';

var InformationCardWrap = function InformationCardWrap() {
  return React.createElement(BasicInfoCardWrap, null, React.createElement(ProfilePicture, null), React.createElement(InformationCard, null));
};

export default InformationCardWrap;