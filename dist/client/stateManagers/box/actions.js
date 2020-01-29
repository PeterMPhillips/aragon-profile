import { FETCHING_PUBLIC_PROFILE, FETCHED_PUBLIC_PROFILE_SUCCESS, FETCHED_PUBLIC_PROFILE_ERROR, NO_PUBLIC_PROFILE_FOUND, REQUESTED_PROFILE_UNLOCK, PROFILE_UNLOCK_SUCCESS, PROFILE_UNLOCK_FAILURE, EDIT_FIELD, UPLOADING_IMAGE, UPLOADED_IMAGE_SUCCESS, UPLOADED_IMAGE_FAILURE, REQUESTED_PROFILE_SAVE, REQUESTED_PROFILE_SAVE_SUCCESS, REQUESTED_PROFILE_SAVE_ERROR, REQUESTED_PROFILE_ITEM_REMOVE, REQUESTED_PROFILE_ITEM_REMOVE_SUCCESS, REQUESTED_PROFILE_ITEM_REMOVE_ERROR, REQUEST_PROFILE_CREATE, REQUEST_PROFILE_CREATE_SUCCESS, REQUEST_PROFILE_CREATE_ERROR, REQUESTED_PROFILE_SYNC, REQUESTED_PROFILE_SYNC_SUCCESS, REQUESTED_PROFILE_SYNC_FAILURE, REQUESTED_PROFILE_OPEN, REQUESTED_PROFILE_OPEN_SUCCESS, REQUESTED_PROFILE_OPEN_FAILURE, REQUEST_CHECK_MEMBERSHIP, REQUEST_CHECK_MEMBERSHIP_RESET, REQUEST_CHECK_MEMBERSHIP_SUCCESS, REQUEST_CHECK_MEMBERSHIP_ERROR } from './actionTypes';
export var fetchingProfile = function fetchingProfile(ethereumAddress) {
  return {
    type: FETCHING_PUBLIC_PROFILE,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var fetchedPublicProfile = function fetchedPublicProfile(ethereumAddress, publicProfile) {
  return {
    type: FETCHED_PUBLIC_PROFILE_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      publicProfile: publicProfile
    }
  };
};
export var fetchedPublicProfileError = function fetchedPublicProfileError(ethereumAddress, error) {
  return {
    type: FETCHED_PUBLIC_PROFILE_ERROR,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {},
    error: error
  };
};
export var noPublicProfileFound = function noPublicProfileFound(ethereumAddress) {
  return {
    type: NO_PUBLIC_PROFILE_FOUND,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {}
  };
};
export var requestedProfileUnlock = function requestedProfileUnlock(ethereumAddress, hasBox) {
  return {
    type: REQUESTED_PROFILE_UNLOCK,
    meta: {
      ethereumAddress: ethereumAddress,
      hasBox: hasBox
    }
  };
};
export var profileUnlockSuccess = function profileUnlockSuccess(ethereumAddress, unlockedProfile) {
  return {
    type: PROFILE_UNLOCK_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      unlockedProfile: unlockedProfile
    }
  };
};
export var profileUnlockFailure = function profileUnlockFailure(ethereumAddress, error) {
  return {
    type: PROFILE_UNLOCK_FAILURE,
    meta: {
      ethereumAddress: ethereumAddress
    },
    error: error
  };
}; // uniqueId is used only when a field is nested (like workHistory and educationHistory)

export var editField = function editField(ethereumAddress, field, value, uniqueId, nestedField) {
  return {
    type: EDIT_FIELD,
    meta: {
      ethereumAddress: ethereumAddress,
      field: field,
      uniqueId: uniqueId,
      nestedField: nestedField
    },
    payload: {
      value: value
    }
  };
};
export var uploadingImage = function uploadingImage(ethereumAddress) {
  return {
    type: UPLOADING_IMAGE,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var uploadedImage = function uploadedImage(ethereumAddress, imageTag, imageContentHash) {
  return {
    type: UPLOADED_IMAGE_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      imageTag: imageTag,
      imageContentHash: imageContentHash
    }
  };
};
export var uploadedImageFailure = function uploadedImageFailure(ethereumAddress, error) {
  return {
    type: UPLOADED_IMAGE_FAILURE,
    meta: {
      ethereumAddress: ethereumAddress
    },
    error: error
  };
};
export var requestedCheckMembership = function requestedCheckMembership(ethereumAddress) {
  return {
    type: REQUEST_CHECK_MEMBERSHIP,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var requestedCheckMembershipReset = function requestedCheckMembershipReset(ethereumAddress) {
  return {
    type: REQUEST_CHECK_MEMBERSHIP_RESET,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var requestedCheckMembershipSuccess = function requestedCheckMembershipSuccess(ethereumAddress, token) {
  return {
    type: REQUEST_CHECK_MEMBERSHIP_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      token: token
    }
  };
};
export var requestedCheckMembershipError = function requestedCheckMembershipError(ethereumAddress, error) {
  return {
    type: REQUEST_CHECK_MEMBERSHIP_ERROR,
    meta: {
      ethereumAddress: ethereumAddress
    },
    error: error
  };
};
export var requestProfileCreate = function requestProfileCreate(ethereumAddress) {
  return {
    type: REQUEST_PROFILE_CREATE,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var requestProfileCreateSuccess = function requestProfileCreateSuccess(ethereumAddress) {
  return {
    type: REQUEST_PROFILE_CREATE_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var requestProfileCreateError = function requestProfileCreateError(ethereumAddress, error) {
  return {
    type: REQUEST_PROFILE_CREATE_ERROR,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      error: error
    }
  };
};
export var savingProfile = function savingProfile(ethereumAddress) {
  return {
    type: REQUESTED_PROFILE_SAVE,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var savedProfile = function savedProfile(ethereumAddress, profile) {
  return {
    type: REQUESTED_PROFILE_SAVE_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      profile: profile
    }
  };
};
export var saveProfileError = function saveProfileError(ethereumAddress, error) {
  return {
    type: REQUESTED_PROFILE_SAVE_ERROR,
    meta: {
      ethereumAddress: ethereumAddress
    },
    error: error
  };
};
export var removingItem = function removingItem(ethereumAddress) {
  return {
    type: REQUESTED_PROFILE_ITEM_REMOVE,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var removedItem = function removedItem(ethereumAddress, profile) {
  return {
    type: REQUESTED_PROFILE_ITEM_REMOVE_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      profile: profile
    }
  };
};
export var removedItemError = function removedItemError(ethereumAddress, error) {
  return {
    type: REQUESTED_PROFILE_ITEM_REMOVE_ERROR,
    meta: {
      ethereumAddress: ethereumAddress
    },
    error: error
  };
};
export var profileOpenRequest = function profileOpenRequest(ethereumAddress) {
  return {
    type: REQUESTED_PROFILE_OPEN,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var profileOpenSuccess = function profileOpenSuccess(ethereumAddress) {
  return {
    type: REQUESTED_PROFILE_OPEN_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var profileOpenFailure = function profileOpenFailure(ethereumAddress, error) {
  return {
    type: REQUESTED_PROFILE_OPEN_FAILURE,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      error: error
    }
  };
};
export var profileSyncRequest = function profileSyncRequest(ethereumAddress) {
  return {
    type: REQUESTED_PROFILE_SYNC,
    meta: {
      ethereumAddress: ethereumAddress
    }
  };
};
export var profileSyncSuccess = function profileSyncSuccess(ethereumAddress, profile) {
  return {
    type: REQUESTED_PROFILE_SYNC_SUCCESS,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      profile: profile
    }
  };
};
export var profileSyncFailure = function profileSyncFailure(ethereumAddress, error) {
  return {
    type: REQUESTED_PROFILE_SYNC_FAILURE,
    meta: {
      ethereumAddress: ethereumAddress
    },
    payload: {
      error: error
    }
  };
};