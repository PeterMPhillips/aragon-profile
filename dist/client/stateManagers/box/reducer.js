function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { FETCHING_PUBLIC_PROFILE, FETCHED_PUBLIC_PROFILE_SUCCESS, FETCHED_PUBLIC_PROFILE_ERROR, NO_PUBLIC_PROFILE_FOUND, REQUESTED_PROFILE_UNLOCK, PROFILE_UNLOCK_SUCCESS, PROFILE_UNLOCK_FAILURE, EDIT_FIELD, UPLOADING_IMAGE, UPLOADED_IMAGE_SUCCESS, UPLOADED_IMAGE_FAILURE, REQUESTED_PROFILE_SAVE, REQUESTED_PROFILE_SAVE_SUCCESS, REQUESTED_PROFILE_SAVE_ERROR, REQUESTED_PROFILE_ITEM_REMOVE, REQUESTED_PROFILE_ITEM_REMOVE_SUCCESS, REQUESTED_PROFILE_ITEM_REMOVE_ERROR, REQUEST_PROFILE_CREATE, REQUEST_PROFILE_CREATE_SUCCESS, REQUEST_PROFILE_CREATE_ERROR, REQUESTED_PROFILE_SYNC, REQUESTED_PROFILE_SYNC_SUCCESS, REQUESTED_PROFILE_SYNC_FAILURE, REQUESTED_PROFILE_OPEN, REQUESTED_PROFILE_OPEN_SUCCESS, REQUESTED_PROFILE_OPEN_FAILURE, REQUEST_CHECK_MEMBERSHIP, REQUEST_CHECK_MEMBERSHIP_RESET, REQUEST_CHECK_MEMBERSHIP_SUCCESS, REQUEST_CHECK_MEMBERSHIP_ERROR } from './actionTypes';
import { fetchingPublicProfile, fetchedPublicProfileSuccess, fetchedPublicProfileErr, noPublicProfileFound, requestedProfUnlock, profileUnlocked, profileUnlockFailed, editedField, uploadingImage, uploadedImage, uploadedImageError, requestedSaveProfile, requestedSaveProfileSuccess, requestedSaveProfileError, requestedProfileItemRemove, requestedProfileItemRemoveSuccess, requestedProfileItemRemoveError, requestProfileCreate, requestProfileCreateSuccess, requestProfileCreateError, requestProfileSync, requestProfileSyncSuccess, requestProfileSyncError, requestProfileOpen, requestProfileOpenSuccess, requestProfileOpenError, requestedCheckMembership, requestedCheckMembershipReset, requestedCheckMembershipSuccess, requestedCheckMembershipError } from './states';

var logStateUpdate = function logStateUpdate(action, prevState, nextState) {
  console.log('ACTION: ', action, 'PREV STATE: ', prevState, 'NEXT STATE:', nextState);
};

var boxReducer = function boxReducer(prevState, action) {
  switch (action.type) {
    case FETCHING_PUBLIC_PROFILE:
      {
        var nextState = _objectSpread({}, prevState);

        nextState[action.meta.ethereumAddress] = fetchingPublicProfile();
        logStateUpdate(action, prevState, nextState);
        return nextState;
      }

    case FETCHED_PUBLIC_PROFILE_SUCCESS:
      {
        var _nextState = _objectSpread({}, prevState);

        var ethereumAddress = action.meta.ethereumAddress;
        _nextState[ethereumAddress] = fetchedPublicProfileSuccess(prevState[ethereumAddress], action.payload.publicProfile);
        logStateUpdate(action, prevState, _nextState);
        return _nextState;
      }

    case FETCHED_PUBLIC_PROFILE_ERROR:
      {
        var _nextState2 = _objectSpread({}, prevState);

        var _ethereumAddress = action.meta.ethereumAddress;
        _nextState2[_ethereumAddress] = fetchedPublicProfileErr(prevState[_ethereumAddress], action.error);
        logStateUpdate(action, prevState, _nextState2);
        return _nextState2;
      }

    case NO_PUBLIC_PROFILE_FOUND:
      {
        var _nextState3 = _objectSpread({}, prevState);

        var _ethereumAddress2 = action.meta.ethereumAddress;
        _nextState3[_ethereumAddress2] = noPublicProfileFound(prevState[_ethereumAddress2]);
        logStateUpdate(action, prevState, _nextState3);
        return _nextState3;
      }

    case REQUESTED_PROFILE_UNLOCK:
      {
        var _nextState4 = _objectSpread({}, prevState);

        var _ethereumAddress3 = action.meta.ethereumAddress;
        var hasBox = action.meta.hasBox;
        _nextState4[_ethereumAddress3] = requestedProfUnlock(prevState[_ethereumAddress3], hasBox);
        logStateUpdate(action, prevState, _nextState4);
        return _nextState4;
      }

    case PROFILE_UNLOCK_SUCCESS:
      {
        var _nextState5 = _objectSpread({}, prevState);

        var _ethereumAddress4 = action.meta.ethereumAddress;
        _nextState5[_ethereumAddress4] = profileUnlocked(prevState[_ethereumAddress4], action.payload.unlockedProfile);
        logStateUpdate(action, prevState, _nextState5);
        return _nextState5;
      }

    case PROFILE_UNLOCK_FAILURE:
      {
        var _nextState6 = _objectSpread({}, prevState);

        var _ethereumAddress5 = action.meta.ethereumAddress;
        _nextState6[_ethereumAddress5] = profileUnlockFailed(prevState[_ethereumAddress5], action.error);
        logStateUpdate(action, prevState, _nextState6);
        return _nextState6;
      }

    case EDIT_FIELD:
      {
        var _nextState7 = _objectSpread({}, prevState);

        var _ethereumAddress6 = action.meta.ethereumAddress;
        var _action$meta = action.meta,
            field = _action$meta.field,
            uniqueId = _action$meta.uniqueId,
            nestedField = _action$meta.nestedField;
        var value = action.payload.value;
        _nextState7[_ethereumAddress6] = editedField(prevState[_ethereumAddress6], field, value, uniqueId, nestedField);
        logStateUpdate(action, prevState, _nextState7);
        return _nextState7;
      }

    case UPLOADING_IMAGE:
      {
        var _nextState8 = _objectSpread({}, prevState);

        var _ethereumAddress7 = action.meta.ethereumAddress;
        _nextState8[_ethereumAddress7] = uploadingImage(prevState[_ethereumAddress7]);
        logStateUpdate(action, prevState, _nextState8);
        return _nextState8;
      }

    case UPLOADED_IMAGE_SUCCESS:
      {
        var _nextState9 = _objectSpread({}, prevState);

        var _ethereumAddress8 = action.meta.ethereumAddress;
        var _action$payload = action.payload,
            imageTag = _action$payload.imageTag,
            imageContentHash = _action$payload.imageContentHash;
        _nextState9[_ethereumAddress8] = uploadedImage(prevState[_ethereumAddress8], imageTag, imageContentHash);
        logStateUpdate(action, prevState, _nextState9);
        return _nextState9;
      }

    case UPLOADED_IMAGE_FAILURE:
      {
        var _nextState10 = _objectSpread({}, prevState);

        var _ethereumAddress9 = action.meta.ethereumAddress;
        _nextState10[_ethereumAddress9] = uploadedImageError(prevState[_ethereumAddress9], action.error);
        logStateUpdate(action, prevState, _nextState10);
        return _nextState10;
      }

    case REQUEST_CHECK_MEMBERSHIP:
      {
        var _nextState11 = _objectSpread({}, prevState);

        var _ethereumAddress10 = action.meta.ethereumAddress;
        _nextState11[_ethereumAddress10] = requestedCheckMembership(prevState[_ethereumAddress10]);
        logStateUpdate(action, prevState, _nextState11);
        return _nextState11;
      }

    case REQUEST_CHECK_MEMBERSHIP_RESET:
      {
        var _nextState12 = _objectSpread({}, prevState);

        var _ethereumAddress11 = action.meta.ethereumAddress;
        _nextState12[_ethereumAddress11] = requestedCheckMembershipReset(prevState[_ethereumAddress11]);
        logStateUpdate(action, prevState, _nextState12);
        return _nextState12;
      }

    case REQUEST_CHECK_MEMBERSHIP_SUCCESS:
      {
        var _nextState13 = _objectSpread({}, prevState);

        var _ethereumAddress12 = action.meta.ethereumAddress;
        _nextState13[_ethereumAddress12] = requestedCheckMembershipSuccess(prevState[_ethereumAddress12]);
        logStateUpdate(action, prevState, _nextState13);
        return _nextState13;
      }

    case REQUEST_CHECK_MEMBERSHIP_ERROR:
      {
        var _nextState14 = _objectSpread({}, prevState);

        var _ethereumAddress13 = action.meta.ethereumAddress;
        _nextState14[_ethereumAddress13] = requestedCheckMembershipError(prevState[_ethereumAddress13], action.error);
        logStateUpdate(action, prevState, _nextState14);
        return _nextState14;
      }

    case REQUESTED_PROFILE_SAVE:
      {
        var _nextState15 = _objectSpread({}, prevState);

        var _ethereumAddress14 = action.meta.ethereumAddress;
        _nextState15[_ethereumAddress14] = requestedSaveProfile(prevState[_ethereumAddress14]);
        logStateUpdate(action, prevState, _nextState15);
        return _nextState15;
      }

    case REQUESTED_PROFILE_SAVE_SUCCESS:
      {
        var _nextState16 = _objectSpread({}, prevState);

        var _ethereumAddress15 = action.meta.ethereumAddress;
        _nextState16[_ethereumAddress15] = requestedSaveProfileSuccess(prevState[_ethereumAddress15], action.payload.profile);
        logStateUpdate(action, prevState, _nextState16);
        return _nextState16;
      }

    case REQUESTED_PROFILE_SAVE_ERROR:
      {
        var _nextState17 = _objectSpread({}, prevState);

        var _ethereumAddress16 = action.meta.ethereumAddress;
        _nextState17[_ethereumAddress16] = requestedSaveProfileError(prevState[_ethereumAddress16], action.error);
        logStateUpdate(action, prevState, _nextState17);
        return _nextState17;
      }

    case REQUESTED_PROFILE_ITEM_REMOVE:
      {
        var _nextState18 = _objectSpread({}, prevState);

        var _ethereumAddress17 = action.meta.ethereumAddress;
        _nextState18[_ethereumAddress17] = requestedProfileItemRemove(prevState[_ethereumAddress17]);
        logStateUpdate(action, prevState, _nextState18);
        return _nextState18;
      }

    case REQUESTED_PROFILE_ITEM_REMOVE_SUCCESS:
      {
        var _nextState19 = _objectSpread({}, prevState);

        var _ethereumAddress18 = action.meta.ethereumAddress;
        _nextState19[_ethereumAddress18] = requestedProfileItemRemoveSuccess(prevState[_ethereumAddress18], action.payload.profile);
        logStateUpdate(action, prevState, _nextState19);
        return _nextState19;
      }

    case REQUESTED_PROFILE_ITEM_REMOVE_ERROR:
      {
        var _nextState20 = _objectSpread({}, prevState);

        var _ethereumAddress19 = action.meta.ethereumAddress;
        _nextState20[_ethereumAddress19] = requestedProfileItemRemoveError(prevState[_ethereumAddress19], action.error);
        logStateUpdate(action, prevState, _nextState20);
        return _nextState20;
      }

    case REQUEST_PROFILE_CREATE:
      {
        var _nextState21 = _objectSpread({}, prevState);

        var _ethereumAddress20 = action.meta.ethereumAddress;
        _nextState21[_ethereumAddress20] = requestProfileCreate(prevState[_ethereumAddress20]);
        logStateUpdate(action, prevState, _nextState21);
        return _nextState21;
      }

    case REQUEST_PROFILE_CREATE_SUCCESS:
      {
        var _nextState22 = _objectSpread({}, prevState);

        var _ethereumAddress21 = action.meta.ethereumAddress;
        _nextState22[_ethereumAddress21] = requestProfileCreateSuccess(prevState[_ethereumAddress21]);
        logStateUpdate(action, prevState, _nextState22);
        return _nextState22;
      }

    case REQUEST_PROFILE_CREATE_ERROR:
      {
        var _nextState23 = _objectSpread({}, prevState);

        var _ethereumAddress22 = action.meta.ethereumAddress;
        _nextState23[_ethereumAddress22] = requestProfileCreateError(prevState[_ethereumAddress22], action.payload.error);
        logStateUpdate(action, prevState, _nextState23);
        return _nextState23;
      }

    case REQUESTED_PROFILE_OPEN:
      {
        var _nextState24 = _objectSpread({}, prevState);

        var _ethereumAddress23 = action.meta.ethereumAddress;
        _nextState24[_ethereumAddress23] = requestProfileOpen(prevState[_ethereumAddress23]);
        logStateUpdate(action, prevState, _nextState24);
        return _nextState24;
      }

    case REQUESTED_PROFILE_OPEN_SUCCESS:
      {
        var _nextState25 = _objectSpread({}, prevState);

        var _ethereumAddress24 = action.meta.ethereumAddress;
        _nextState25[_ethereumAddress24] = requestProfileOpenSuccess(prevState[_ethereumAddress24]);
        logStateUpdate(action, prevState, _nextState25);
        return _nextState25;
      }

    case REQUESTED_PROFILE_OPEN_FAILURE:
      {
        var _nextState26 = _objectSpread({}, prevState);

        var _ethereumAddress25 = action.meta.ethereumAddress;
        _nextState26[_ethereumAddress25] = requestProfileOpenError(prevState[_ethereumAddress25], action.payload.error);
        logStateUpdate(action, prevState, _nextState26);
        return _nextState26;
      }

    case REQUESTED_PROFILE_SYNC:
      {
        var _nextState27 = _objectSpread({}, prevState);

        var _ethereumAddress26 = action.meta.ethereumAddress;
        _nextState27[_ethereumAddress26] = requestProfileSync(prevState[_ethereumAddress26]);
        logStateUpdate(action, prevState, _nextState27);
        return _nextState27;
      }

    case REQUESTED_PROFILE_SYNC_SUCCESS:
      {
        var _nextState28 = _objectSpread({}, prevState);

        var _ethereumAddress27 = action.meta.ethereumAddress;
        _nextState28[_ethereumAddress27] = requestProfileSyncSuccess(prevState[_ethereumAddress27], action.payload.profile);
        logStateUpdate(action, prevState, _nextState28);
        return _nextState28;
      }

    case REQUESTED_PROFILE_SYNC_FAILURE:
      {
        var _nextState29 = _objectSpread({}, prevState);

        var _ethereumAddress28 = action.meta.ethereumAddress;
        _nextState29[_ethereumAddress28] = requestProfileSyncError(prevState[_ethereumAddress28], action.payload.error);
        logStateUpdate(action, prevState, _nextState29);
        return _nextState29;
      }

    default:
      {
        return prevState;
      }
  }
};

export default boxReducer;