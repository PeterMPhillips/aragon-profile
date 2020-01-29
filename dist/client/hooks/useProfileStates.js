import { useContext } from 'react';
import { BoxContext } from '../wrappers/box';
var defaultValues = {
  checkingMembership: false,
  checkedMembershipSuccess: false,
  checkedMembershipError: false,
  loadingPublicProf: false,
  unlockingProf: false,
  noPublicProfileFound: false,
  error: ''
};

var useProfileStates = function useProfileStates() {
  var _useContext = useContext(BoxContext),
      boxes = _useContext.boxes,
      ethereumAddress = _useContext.ethereumAddress;

  var userLoaded = !!boxes[ethereumAddress];
  if (!userLoaded) return defaultValues;
  var _boxes$ethereumAddres = boxes[ethereumAddress],
      checkingMembership = _boxes$ethereumAddres.checkingMembership,
      checkedMembershipSuccess = _boxes$ethereumAddres.checkedMembershipSuccess,
      checkedMembershipError = _boxes$ethereumAddres.checkedMembershipError,
      loadingPublicProf = _boxes$ethereumAddres.loadingPublicProf,
      unlockingProf = _boxes$ethereumAddres.unlockingProf,
      noPublicProfileFound = _boxes$ethereumAddres.noPublicProfileFound,
      error = _boxes$ethereumAddres.error;
  return {
    checkingMembership: checkingMembership,
    checkedMembershipSuccess: checkedMembershipSuccess,
    checkedMembershipError: checkedMembershipError,
    loadingPublicProf: loadingPublicProf,
    unlockingProf: unlockingProf,
    noPublicProfileFound: noPublicProfileFound,
    error: error || defaultValues.error
  };
};

export default useProfileStates;