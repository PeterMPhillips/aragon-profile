import { useContext } from 'react';
import { BoxContext } from '../wrappers/box';
var defaultValues = {
  description: '',
  name: '',
  coverPhotoCid: '',
  educationHistory: {},
  imageCid: '',
  location: '',
  website: '',
  workHistory: {},
  twitter: {
    username: '',
    proof: ''
  },
  github: {
    username: '',
    proof: ''
  },
  userLoaded: false,
  viewMode: true,
  metamaskEnabled: false,
  organizations: {}
};

var useProfile = function useProfile() {
  var _useContext = useContext(BoxContext),
      boxes = _useContext.boxes,
      ethereumAddress = _useContext.ethereumAddress,
      isViewMode = _useContext.isViewMode,
      onSignatures = _useContext.onSignatures;

  var metamaskEnabled = !!ethereumAddress;
  var userLoaded = !!boxes[ethereumAddress];
  if (!userLoaded || !metamaskEnabled) return defaultValues;
  var _boxes$ethereumAddres = boxes[ethereumAddress].publicProfile,
      description = _boxes$ethereumAddres.description,
      name = _boxes$ethereumAddres.name,
      coverPhoto = _boxes$ethereumAddres.coverPhoto,
      educationHistory = _boxes$ethereumAddres.educationHistory,
      image = _boxes$ethereumAddres.image,
      location = _boxes$ethereumAddres.location,
      website = _boxes$ethereumAddres.website,
      workHistory = _boxes$ethereumAddres.workHistory,
      twitter = _boxes$ethereumAddres.twitter,
      github = _boxes$ethereumAddres.github,
      organizations = _boxes$ethereumAddres.organizations;
  var imageCid = userLoaded && image && image[0].contentUrl['/'];
  var coverPhotoCid = userLoaded && coverPhoto && coverPhoto[0].contentUrl['/'];
  return {
    ethereumAddress: ethereumAddress,
    description: description || defaultValues.description,
    name: name || defaultValues.name,
    coverPhotoCid: coverPhotoCid || defaultValues.coverPhotoCid,
    educationHistory: educationHistory || defaultValues.educationHistory,
    imageCid: imageCid || defaultValues.imageCid,
    location: location || defaultValues.location,
    website: website || defaultValues.website,
    workHistory: workHistory || defaultValues.workHistory,
    twitter: twitter || defaultValues.twitter,
    github: github || defaultValues.github,
    userLoaded: userLoaded,
    metamaskEnabled: metamaskEnabled,
    viewMode: typeof isViewMode !== 'undefined' ? isViewMode : defaultValues.viewMode,
    onSignatures: onSignatures,
    organizations: organizations || defaultValues.organizations
  };
};

export default useProfile;