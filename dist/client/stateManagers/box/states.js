function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import cloneDeep from 'lodash.clonedeep';
import { image } from '../../../modules/things';
import { reformatNestedFields } from '../../utils';
export var initialState = {};
export var fetchingPublicProfile = function fetchingPublicProfile() {
  return {
    // basic loading of public profiles
    loadingPublicProf: true,
    loadedPublicProf: false,
    loadedPublicProfSuccess: false,
    noPublicProfileFound: false,
    // for tracking https://projects.invisionapp.com/d/main#/console/17511474/363488290/preview
    savingProfile: false,
    savedProfile: false,
    savedProfileSucess: false,
    removingItem: false,
    removedItem: false,
    removedItemSuccess: false,
    // for tracking https://projects.invisionapp.com/share/AQS14BPCG9R#/screens
    messageSigning: {
      openingProf: false,
      openedProfError: false,
      openedProfSuccess: false,
      syncingProf: false,
      syncedProfError: false,
      syncedProfSuccess: false,
      creatingProf: false,
      createdProfError: false,
      createdProfSuccess: false
    },
    // an unlocked profile is both opened and synced, which is why their state is set in a few different places
    unlockingProf: false,
    unlockedProf: false,
    unlockedProfSuccess: false,
    unlockedBox: {},
    publicProfile: {},
    // handles forms throughout the application
    forms: {
      name: '',
      job: '',
      workPlace: '',
      location: '',
      school: '',
      website: '',
      description: '',
      workHistory: {},
      educationHistory: {},
      organizations: {}
    },
    changed: [],
    // to display image loading status
    uploadingImage: false,
    uploadedImageSuccess: false,
    uploadedImage: false,
    checkingMembership: false,
    checkedMembershipSuccess: false,
    checkedMembershipError: false
  };
};
export var fetchedPublicProfileSuccess = function fetchedPublicProfileSuccess(state, profile) {
  var publicProfile = reformatNestedFields(profile);
  return _objectSpread({}, state, {
    loadingPublicProf: false,
    loadedPublicProf: true,
    loadedPublicProfSuccess: true,
    publicProfile: publicProfile,
    forms: _objectSpread({}, state.forms, {}, publicProfile),
    changed: []
  });
};
export var fetchedPublicProfileErr = function fetchedPublicProfileErr(state, error) {
  return _objectSpread({}, state, {
    loadingPublicProf: false,
    loadedPublicProf: true,
    loadedPublicProfSuccess: true,
    error: error
  });
};
export var noPublicProfileFound = function noPublicProfileFound(state, error) {
  return _objectSpread({}, state, {
    loadingPublicProf: false,
    loadedPublicProf: true,
    loadedPublicProfSuccess: true,
    noPublicProfileFound: true,
    error: error
  });
};
export var requestedProfUnlock = function requestedProfUnlock(state) {
  return _objectSpread({}, state, {
    unlockingProf: true,
    unlockedProf: false,
    unlockedProfSuccess: false,
    unlockedBox: {},
    messageSigning: _objectSpread({}, state.messageSigning, {
      unlockingProf: true,
      unlockedProf: false,
      unlockedProfSuccess: false
    })
  });
};
export var profileUnlocked = function profileUnlocked(state, unlockedBox) {
  return _objectSpread({}, state, {
    unlockingProf: false,
    unlockedProf: true,
    unlockedProfSuccess: true,
    editedProfile: false,
    unlockedBox: unlockedBox,
    messageSigning: _objectSpread({}, state.messageSigning, {
      unlockingProf: false,
      unlockedProf: true,
      unlockedProfSuccess: true
    })
  });
};
export var profileUnlockFailed = function profileUnlockFailed(state, error) {
  return _objectSpread({}, state, {
    unlockingProf: false,
    unlockedProf: true,
    unlockedProfSuccess: false,
    error: error,
    messageSigning: _objectSpread({}, state.messageSigning, {
      unlockingProf: false,
      unlockedProf: true,
      unlockedProfSuccess: false
    })
  });
};

var calculateChanged = function calculateChanged(changed, field) {
  if (!changed) return [field];
  if (!changed.includes(field)) return [].concat(_toConsumableArray(changed), [field]);
  return changed;
};

export var editedField = function editedField(state, field, value, uniqueId, nestedField) {
  var newFormVals = cloneDeep(_objectSpread({}, state.forms));
  if (!uniqueId) newFormVals[field] = value;else {
    var newNestedField = _objectSpread({}, newFormVals[field][uniqueId], _defineProperty({}, nestedField, value));

    if (!value) delete newNestedField[nestedField];
    newFormVals[field][uniqueId] = newNestedField;
  }
  return _objectSpread({}, state, {
    forms: newFormVals,
    changed: calculateChanged(state.changed, field)
  });
};
export var uploadingImage = function uploadingImage(state) {
  return _objectSpread({}, state, {
    uploadingImage: true,
    uploadedImageSuccess: false,
    uploadedImage: false
  });
};
export var uploadedImage = function uploadedImage(state, imageTag, imageContentHash) {
  var newFormVals = cloneDeep(_objectSpread({}, state.forms));
  newFormVals[imageTag] = image(imageContentHash);

  var newState = _objectSpread({}, state, {
    uploadingImage: false,
    uploadedImageSuccess: true,
    uploadedImage: true,
    forms: newFormVals,
    changed: calculateChanged(state.changed, imageTag)
  });

  return newState;
};
export var uploadedImageError = function uploadedImageError(state, error) {
  return _objectSpread({}, state, {
    uploadingImage: false,
    uploadedImageSuccess: false,
    uploadedImage: true,
    error: error
  });
};
export var requestedCheckMembership = function requestedCheckMembership(state) {
  return _objectSpread({}, state, {
    checkingMembership: true,
    checkedMembershipSuccess: false,
    checkedMembershipError: false
  });
};
export var requestedCheckMembershipReset = function requestedCheckMembershipReset(state) {
  return _objectSpread({}, state, {
    checkingMembership: false,
    checkedMembershipSuccess: false,
    checkedMembershipError: false
  });
};
export var requestedCheckMembershipSuccess = function requestedCheckMembershipSuccess(state) {
  return _objectSpread({}, state, {
    checkingMembership: false,
    checkedMembershipSuccess: true,
    checkedMembershipError: false
  });
};
export var requestedCheckMembershipError = function requestedCheckMembershipError(state, error) {
  return _objectSpread({}, state, {
    checkingMembership: false,
    checkedMembershipSuccess: false,
    checkedMembershipError: true,
    error: error
  });
};
export var requestedSaveProfile = function requestedSaveProfile(state) {
  return _objectSpread({}, state, {
    savingProfile: true,
    savedProfile: false,
    savedProfileSucess: false
  });
};
export var requestedSaveProfileSuccess = function requestedSaveProfileSuccess(state, profile) {
  return _objectSpread({}, state, {
    savingProfile: false,
    savedProfile: true,
    savedProfileSucess: true,
    publicProfile: _objectSpread({}, state.publicProfile, {}, profile),
    changed: []
  });
};
export var requestedSaveProfileError = function requestedSaveProfileError(state, error) {
  return _objectSpread({}, state, {
    savingProfile: false,
    savedProfile: true,
    savedProfileSucess: false,
    error: error
  });
};
export var requestedProfileItemRemove = function requestedProfileItemRemove(state) {
  return _objectSpread({}, state, {
    removingItem: true,
    removedItem: false,
    removedItemSuccess: false
  });
};
export var requestedProfileItemRemoveSuccess = function requestedProfileItemRemoveSuccess(state, profile) {
  var publicProfile = reformatNestedFields(profile);
  return _objectSpread({}, state, {
    removingItem: false,
    removedItem: true,
    removedItemSuccess: true,
    publicProfile: publicProfile,
    forms: _objectSpread({}, state.forms, {}, publicProfile)
  });
};
export var requestedProfileItemRemoveError = function requestedProfileItemRemoveError(state, error) {
  return _objectSpread({}, state, {
    removingItem: false,
    removedItem: true,
    removedItemSuccess: false,
    error: error
  });
};
export var requestProfileCreate = function requestProfileCreate(state) {
  return _objectSpread({}, state, {
    messageSigning: _objectSpread({}, state.messageSigning, {
      creatingProf: true,
      createdProfError: false,
      createdProfSuccess: false
    })
  });
};
export var requestProfileCreateSuccess = function requestProfileCreateSuccess(state) {
  return _objectSpread({}, state, {
    messageSigning: _objectSpread({}, state.messageSigning, {
      creatingProf: false,
      createdProfError: false,
      createdProfSuccess: true
    })
  });
};
export var requestProfileCreateError = function requestProfileCreateError(state) {
  return _objectSpread({}, state, {
    messageSigning: _objectSpread({}, state.messageSigning, {
      creatingProf: false,
      createdProfError: true,
      createdProfSuccess: false
    })
  });
};
export var requestProfileOpen = function requestProfileOpen(state) {
  return _objectSpread({}, state, {
    unlockingProf: true,
    unlockedProf: false,
    unlockedProfSuccess: false,
    messageSigning: _objectSpread({}, state.messageSigning, {
      openingProf: true,
      openedProfError: false,
      openedProfSuccess: false
    })
  });
};
export var requestProfileOpenSuccess = function requestProfileOpenSuccess(state) {
  return _objectSpread({}, state, {
    messageSigning: _objectSpread({}, state.messageSigning, {
      openingProf: false,
      openedProfError: false,
      openedProfSuccess: true
    })
  });
};
export var requestProfileOpenError = function requestProfileOpenError(state, error) {
  return _objectSpread({}, state, {
    error: error,
    messageSigning: _objectSpread({}, state.messageSigning, {
      openingProf: false,
      openedProfError: true,
      openedProfSuccess: false
    }),
    unlockingProf: false,
    unlockedProf: false,
    unlockedProfSuccess: false
  });
};
export var requestProfileSync = function requestProfileSync(state) {
  return _objectSpread({}, state, {
    messageSigning: _objectSpread({}, state.messageSigning, {
      syncingProf: true,
      syncedProfError: false,
      syncedProfSuccess: false
    })
  });
};
export var requestProfileSyncSuccess = function requestProfileSyncSuccess(state, syncedBox) {
  return _objectSpread({}, state, {
    unlockingProf: false,
    unlockedProf: true,
    unlockedProfSuccess: true,
    unlockedBox: syncedBox,
    messageSigning: _objectSpread({}, state.messageSigning, {
      syncingProf: false,
      syncedProfError: false,
      syncedProfSuccess: true
    })
  });
};
export var requestProfileSyncError = function requestProfileSyncError(state, error) {
  return _objectSpread({}, state, {
    unlockingProf: false,
    unlockedProf: true,
    unlockedProfSuccess: false,
    error: error,
    messageSigning: _objectSpread({}, state.messageSigning, {
      syncingProf: false,
      syncedProfError: true,
      syncedProfSuccess: false
    })
  });
};