import _styled2 from "styled-components";
import _styled from "styled-components";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useState } from 'react';
import { Field, Text, Button, theme } from '@aragon/ui';
import PropTypes from 'prop-types';
import { ModalWrapper, DisplayErrors } from './ModalWrapper';
import { validateDAOAddress } from '../../utils/validation';
import { shortDAOAddress, fakeIsMember } from '../../utils';
import { BoxContext } from '../../wrappers/box';
import { ModalContext } from '../../wrappers/modal';
import { close } from '../../stateManagers/modal';
import { isEmpty } from 'lodash';
import { useProfileStates } from '../../hooks';
import { requestedCheckMembership, requestedCheckMembershipReset, requestedCheckMembershipSuccess, requestedCheckMembershipError } from '../../stateManagers/box';
import { TextInputWithValidation, AnimationLoadingCircle, IconSuccess, IconError, CheckWrapper } from '../../components/styled-components';

var _StyledTextBlock = _styled(Text.Block).withConfig({
  displayName: "Organization___StyledTextBlock",
  componentId: "sc-1jy21f8-0"
})(["text-align:right;margin-bottom:0px;text-decoration:underline;cursor:pointer;vertical-align:text-bottom;position:absolute;bottom:0;right:0;"]);

var BackToPreviousScreen = function BackToPreviousScreen(_ref) {
  var ethereumAddress = _ref.ethereumAddress,
      dispatch = _ref.dispatch;
  return React.createElement(_StyledTextBlock, {
    color: theme.accent,
    onClick: function onClick() {
      return dispatch(requestedCheckMembershipReset(ethereumAddress));
    }
  }, "Back to previous screen");
};

BackToPreviousScreen.propTypes = {
  ethereumAddress: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
var checkInfoIcon = {
  started: AnimationLoadingCircle,
  success: IconSuccess,
  error: IconError
};

var checkInfoText = function checkInfoText(address) {
  return {
    started: "Validating your membership to ".concat(shortDAOAddress(address), "..."),
    success: "We found ".concat(shortDAOAddress(address), " and confirmed you are a member"),
    error: "We could not verify your membership to ".concat(shortDAOAddress(address))
  };
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Organization___StyledDiv",
  componentId: "sc-1jy21f8-1"
})(["height:100%;width:100%;position:relative;display:flex;align-items:center;"]);

var CheckInfo = function CheckInfo(_ref2) {
  var type = _ref2.type,
      ethereumAddress = _ref2.ethereumAddress,
      address = _ref2.address,
      dispatch = _ref2.dispatch,
      linkBack = _ref2.linkBack;
  var Icon = checkInfoIcon[type];
  return React.createElement(ModalWrapper, null, React.createElement(CheckWrapper, null, React.createElement(Icon, null), React.createElement(_StyledDiv, null, React.createElement(Text.Block, {
    size: "xxlarge"
  }, checkInfoText(address)[type]), linkBack && React.createElement(BackToPreviousScreen, {
    dispatch: dispatch,
    ethereumAddress: ethereumAddress
  }))));
};

CheckInfo.propTypes = {
  type: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  ethereumAddress: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  linkBack: PropTypes.bool.isRequired
};
CheckInfo.defaultProps = {
  linkBack: false
};

var Organization = function Organization(_ref3) {
  var ethereumAddress = _ref3.ethereumAddress,
      getFormValue = _ref3.getFormValue,
      _onChange = _ref3.onChange,
      saveProfile = _ref3.saveProfile,
      organizationId = _ref3.organizationId,
      savingError = _ref3.savingError;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      validationErrors = _useState2[0],
      setValidationErrors = _useState2[1];

  var _useContext = useContext(BoxContext),
      dispatch = _useContext.dispatch;

  var _useContext2 = useContext(ModalContext),
      dispatchModal = _useContext2.dispatchModal;

  var _useProfileStates = useProfileStates(),
      checkingMembership = _useProfileStates.checkingMembership,
      checkedMembershipSuccess = _useProfileStates.checkedMembershipSuccess,
      checkedMembershipError = _useProfileStates.checkedMembershipError,
      error = _useProfileStates.error;

  var checkMembershipError = checkedMembershipError ? {
    error: "Error checking membership: ".concat(error.message)
  } : {};

  var checkMembershipAndSave =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(ethereumAddress, address) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestedCheckMembership(ethereumAddress));
              _context.prev = 1;
              _context.next = 4;
              return fakeIsMember(ethereumAddress, address);

            case 4:
              result = _context.sent;

              if (!result) {
                _context.next = 13;
                break;
              }

              dispatch(requestedCheckMembershipSuccess(ethereumAddress));
              saveProfile(ethereumAddress);
              dispatchModal(close());
              dispatch(requestedCheckMembershipReset(ethereumAddress));
              return _context.abrupt("return", true);

            case 13:
              throw new Error({
                message: 'Cannot confirm membership'
              });

            case 14:
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);
              dispatch(requestedCheckMembershipError(ethereumAddress, _context.t0));
              return _context.abrupt("return", false);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 16]]);
    }));

    return function checkMembershipAndSave(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var validateAndSave = function validateAndSave() {
    var errors = {};
    var address = getFormValue('organizations', organizationId, 'address');
    if (!validateDAOAddress(address)) errors['organization'] = 'Please provide valid DAO address';

    if (isEmpty(errors)) {
      checkMembershipAndSave(ethereumAddress, address);
    } else {
      setValidationErrors(errors);
    }
  };

  var address = getFormValue('organizations', organizationId, 'address');
  var checkInfoProps = {
    address: address,
    ethereumAddress: ethereumAddress,
    dispatch: dispatch
  };
  if (checkingMembership) return React.createElement(CheckInfo, _extends({
    type: "started"
  }, checkInfoProps));else if (checkedMembershipSuccess) return React.createElement(CheckInfo, _extends({
    type: "success"
  }, checkInfoProps));else if (checkedMembershipError) return React.createElement(CheckInfo, _extends({
    type: "error",
    linkBack: true
  }, checkInfoProps));else {
    return React.createElement(ModalWrapper, {
      title: "Add Organization"
    }, React.createElement(DisplayErrors, {
      errors: _objectSpread({}, validationErrors, {}, checkMembershipError, {}, savingError)
    }), React.createElement(Text, null, "Enter an organization ID where your logged in ethereum account is a member"), React.createElement(Field, null, React.createElement(TextInputWithValidation, {
      wide: true,
      value: address,
      onChange: function onChange(e) {
        return _onChange(e.target.value, 'organizations', organizationId, 'address');
      },
      placeholder: "Example: 0xb4124cEB3451635DAcedd11767f004d8a28c6eE7",
      error: validationErrors['organization']
    })), React.createElement(Button, {
      wide: true,
      mode: "strong",
      onClick: validateAndSave
    }, "Add to Profile"));
  }
};

Organization.propTypes = {
  organizationId: PropTypes.string.isRequired,
  ethereumAddress: PropTypes.string.isRequired,
  getFormValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saveProfile: PropTypes.func.isRequired,
  savingError: PropTypes.object
};
export default Organization;