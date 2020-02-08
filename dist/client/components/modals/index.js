import _styled from "styled-components";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@aragon/ui';
import uuidv1 from 'uuid/v1';
import { BoxContext } from '../../wrappers/box';
import { ModalContext } from '../../wrappers/modal';
import { editField, savingProfile, savedProfile, saveProfileError, removingItem, removedItem, removedItemError } from '../../stateManagers/box';
import { unlockAndCreateBoxIfRequired } from '../../utils';
import { close, open } from '../../stateManagers/modal';
import WorkHistoryModal from './WorkHistory';
import BasicInformationModal from './BasicInformation';
import EducationHistoryModal from './EducationHistory';
import OrganizationModal from './Organization';
import RemoveItem from './RemoveItem';
import BoxState from './BoxState';
import AfterSave from './AfterSave';
import { BASIC_INFORMATION, EDUCATION_HISTORY, WORK_HISTORY, ORGANIZATION, REMOVE_ITEM, BOX_STATE, SAVING_PROFILE, SAVED_PROFILE_SUCCESS, SAVED_PROFILE_ERROR } from '../../stateManagers/modal/types';

var _StyledDiv = _styled("div").withConfig({
  displayName: "modals___StyledDiv",
  componentId: "sc-7dneqd-0"
})(["position:relative"]);

var UserInfoModal = function UserInfoModal(_ref) {
  var _modals;

  var ethereumAddress = _ref.ethereumAddress,
      onSignatures = _ref.onSignatures;

  var _useContext = useContext(BoxContext),
      boxes = _useContext.boxes,
      dispatch = _useContext.dispatch,
      web3Provider = _useContext.web3Provider;

  var _useContext2 = useContext(ModalContext),
      modal = _useContext2.modal,
      dispatchModal = _useContext2.dispatchModal;

  var _useState = useState(uuidv1()),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var userLoaded = !!boxes[ethereumAddress];

  var onChange = function onChange(value, field, uniqueId, nestedField) {
    dispatch(editField(ethereumAddress, field, value, uniqueId, nestedField));
  };

  var getFormValue = function getFormValue(field, uniqueId, nestedField) {
    var value;
    if (!userLoaded) value = '';else if (!uniqueId) value = boxes[ethereumAddress].forms[field];else if (!nestedField) value = boxes[ethereumAddress].forms[field][uniqueId];else value = boxes[ethereumAddress].forms[field][uniqueId] && boxes[ethereumAddress].forms[field][uniqueId][nestedField];
    return value || '';
  };

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, ms);
    });
  };

  var saveProfile =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(ethereumAddress) {
      var _boxes$ethereumAddres, changed, forms, calculateChanged, changedValues, unlockedBox;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(savingProfile(ethereumAddress));
              dispatchModal(open('savingProfile'));
              _context.prev = 2;
              _boxes$ethereumAddres = boxes[ethereumAddress], changed = _boxes$ethereumAddres.changed, forms = _boxes$ethereumAddres.forms;

              calculateChanged = function calculateChanged(field) {
                if (field === 'workHistory' || field === 'educationHistory' || field === 'organizations') {
                  return Object.keys(forms[field]).map(function (id) {
                    return forms[field][id];
                  });
                }

                return forms[field];
              };

              changedValues = changed.map(calculateChanged); // unlockAndCreateBoxIfRequired opens the signature modal, and handles errors

              _context.next = 8;
              return unlockAndCreateBoxIfRequired(boxes[ethereumAddress], dispatch, dispatchModal, ethereumAddress, onSignatures, web3Provider);

            case 8:
              unlockedBox = _context.sent;

              if (!unlockedBox) {
                _context.next = 20;
                break;
              }

              _context.next = 12;
              return unlockedBox.setPublicFields(changed, changedValues);

            case 12:
              dispatch(savedProfile(ethereumAddress, forms));
              _context.next = 15;
              return delay(500);

            case 15:
              dispatchModal(open('savedProfileSuccess'));
              _context.next = 18;
              return delay(2000);

            case 18:
              dispatchModal(close());
              setKey(uuidv1());

            case 20:
              _context.next = 29;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](2);
              dispatch(saveProfileError(ethereumAddress, _context.t0));
              dispatchModal(open('savedProfileError'));
              _context.next = 28;
              return delay(2000);

            case 28:
              dispatchModal(close());

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 22]]);
    }));

    return function saveProfile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (!userLoaded) return null;

  var removeItem =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _forms, itemType, id, unlockedBox, newBoxVals, updatedProfile;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(removingItem(ethereumAddress));
              _context2.prev = 1;
              _forms = boxes[ethereumAddress].forms;
              itemType = modal.itemType, id = modal.id;
              _context2.next = 6;
              return unlockAndCreateBoxIfRequired(boxes[ethereumAddress], dispatch, dispatchModal, ethereumAddress, onSignatures, web3Provider);

            case 6:
              unlockedBox = _context2.sent;

              if (!unlockedBox) {
                _context2.next = 25;
                break;
              }

              if (!(itemType === 'image' || itemType === 'coverPhoto')) {
                _context2.next = 13;
                break;
              }

              _context2.next = 11;
              return unlockedBox.removePublicField(itemType);

            case 11:
              _context2.next = 17;
              break;

            case 13:
              delete _forms[itemType][id];
              newBoxVals = Object.keys(_forms[itemType]).map(function (id) {
                return _forms[itemType][id];
              });
              _context2.next = 17;
              return unlockedBox.setPublicFields([itemType], [newBoxVals]);

            case 17:
              _context2.next = 19;
              return unlockedBox.getPublic();

            case 19:
              updatedProfile = _context2.sent;
              dispatch(removedItem(ethereumAddress, updatedProfile));
              dispatchModal(open('savedProfileSuccess'));
              _context2.next = 24;
              return delay(2000);

            case 24:
              dispatchModal(close());

            case 25:
              _context2.next = 34;
              break;

            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2["catch"](1);
              dispatch(removedItemError(ethereumAddress, _context2.t0));
              dispatchModal(open('savedProfileError'));
              _context2.next = 33;
              return delay(2000);

            case 33:
              dispatchModal(close());

            case 34:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 27]]);
    }));

    return function removeItem() {
      return _ref3.apply(this, arguments);
    };
  }();

  var error = boxes[ethereumAddress].error;
  var savingError = boxes[ethereumAddress].savedProfile && !boxes[ethereumAddress].savedProfileSucess ? {
    error: "Error saving profile: ".concat(error.message)
  } : {};
  var removingError = boxes[ethereumAddress].removedItem && !boxes[ethereumAddress].removedItemSuccess ? {
    error: "Error removing item: ".concat(error.message)
  } : {};
  var modalsCommonProps = {
    ethereumAddress: ethereumAddress,
    getFormValue: getFormValue,
    onChange: onChange,
    saveProfile: saveProfile,
    savingError: savingError,
    removingError: removingError
  };
  var modals = (_modals = {}, _defineProperty(_modals, BASIC_INFORMATION, React.createElement(BasicInformationModal, modalsCommonProps)), _defineProperty(_modals, EDUCATION_HISTORY, React.createElement(EducationHistoryModal, _extends({
    educationHistoryId: modal.id || key
  }, modalsCommonProps))), _defineProperty(_modals, WORK_HISTORY, React.createElement(WorkHistoryModal, _extends({
    workHistoryId: modal.id || key
  }, modalsCommonProps))), _defineProperty(_modals, ORGANIZATION, React.createElement(OrganizationModal, _extends({
    organizationId: modal.id || key
  }, modalsCommonProps))), _defineProperty(_modals, REMOVE_ITEM, React.createElement(RemoveItem, {
    itemType: modal.itemType,
    onRemove: removeItem,
    removingError: removingError
  })), _defineProperty(_modals, BOX_STATE, React.createElement(BoxState, {
    messageSigning: boxes[ethereumAddress].messageSigning,
    signaturesRequired: modal.sigsRequired
  })), _defineProperty(_modals, SAVING_PROFILE, React.createElement(AfterSave, {
    state: "savingProfile"
  })), _defineProperty(_modals, SAVED_PROFILE_SUCCESS, React.createElement(AfterSave, {
    state: "savedProfileSuccess"
  })), _defineProperty(_modals, SAVED_PROFILE_ERROR, React.createElement(AfterSave, {
    state: "savedProfileError"
  })), _modals);
  return React.createElement(Modal, {
    visible: !!modal.type,
    padding: "0"
  }, React.createElement(_StyledDiv, null, modal.type && modals[modal.type]));
};

UserInfoModal.propTypes = {
  ethereumAddress: PropTypes.string,
  onSignatures: PropTypes.func.isRequired
};
export default UserInfoModal;