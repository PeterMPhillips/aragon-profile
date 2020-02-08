function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Button, Field, TextInput } from '@aragon/ui';
import PropTypes from 'prop-types';
import { ModalWrapper, DisplayErrors } from './ModalWrapper';
import { TextInputWithValidation, TextMultilineWithValidation } from '../styled-components';
import { validateName, validateWebsite } from '../../utils/validation';

var BasicInformation = function BasicInformation(_ref) {
  var ethereumAddress = _ref.ethereumAddress,
      getFormValue = _ref.getFormValue,
      _onChange = _ref.onChange,
      saveProfile = _ref.saveProfile,
      savingError = _ref.savingError;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      validationErrors = _useState2[0],
      setValidationErrors = _useState2[1];

  var validateAndSave = function validateAndSave(e) {
    e.preventDefault();
    var errors = {};
    if (!validateName(getFormValue('name'))) errors['name'] = 'Please provide valid name'; // validate only if non-empty

    var website = getFormValue('website');
    if (!!website && !validateWebsite(website)) errors['website'] = 'Please provide valid website address';
    setValidationErrors(errors);
    if (!Object.keys(errors).length) saveProfile(ethereumAddress);
  };

  return React.createElement(ModalWrapper, {
    title: "Edit Basic Information"
  }, React.createElement("form", {
    onSubmit: validateAndSave
  }, React.createElement(DisplayErrors, {
    errors: _objectSpread({}, validationErrors, {}, savingError)
  }), React.createElement(Field, {
    label: "Name"
  }, React.createElement(TextInputWithValidation, {
    wide: true,
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'name');
    },
    value: getFormValue('name'),
    error: validationErrors['name']
  })), React.createElement(Field, {
    label: "Bio"
  }, React.createElement(TextMultilineWithValidation, {
    wide: true,
    value: getFormValue('description'),
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'description');
    }
  })), React.createElement(Field, {
    label: "Location"
  }, React.createElement(TextInput, {
    wide: true,
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'location');
    },
    value: getFormValue('location')
  })), React.createElement(Field, {
    label: "Website"
  }, React.createElement(TextInputWithValidation, {
    wide: true,
    value: getFormValue('website'),
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'website');
    },
    placeholder: "Enter a website starting with https://",
    type: "url",
    error: validationErrors['website']
  })), React.createElement(Button, {
    mode: "strong",
    wide: true,
    type: "submit"
  }, "Save")));
};

BasicInformation.propTypes = {
  ethereumAddress: PropTypes.string.isRequired,
  getFormValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saveProfile: PropTypes.func.isRequired,
  savingError: PropTypes.object
};
export default BasicInformation;