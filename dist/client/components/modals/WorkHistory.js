function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Field, Button } from '@aragon/ui';
import PropTypes from 'prop-types';
import { ModalWrapper, TwoColumnsRow, DisplayErrors } from './ModalWrapper';
import { useDate } from '../../hooks';
import { years } from '../../utils';
import DateDropdowns from '../DateDropdowns';
import { TextInputWithValidation, TextMultilineWithValidation } from '../styled-components';
import { validateWorkPlace, validateJobTitle, validateWorkDates, workDatesError } from '../../utils/validation';

var WorkHistory = function WorkHistory(_ref) {
  var getFormValue = _ref.getFormValue,
      _onChange = _ref.onChange,
      workHistoryId = _ref.workHistoryId,
      ethereumAddress = _ref.ethereumAddress,
      saveProfile = _ref.saveProfile,
      savingError = _ref.savingError;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      validationErrors = _useState2[0],
      setValidationErrors = _useState2[1];

  var validateAndSave = function validateAndSave() {
    var errors = {};
    if (!validateWorkPlace(getFormValue('workHistory', workHistoryId, 'workPlace'))) errors['workPlace'] = 'Please provide name of company or project';
    if (!validateJobTitle(getFormValue('workHistory', workHistoryId, 'jobTitle'))) errors['jobTitle'] = 'Please provide job title or role';
    if (!validateWorkDates(startDate, endDate)) errors['dates'] = workDatesError(startDate, endDate);
    setValidationErrors(errors);
    if (!Object.keys(errors).length) saveProfile(ethereumAddress);
  };

  var startDate = getFormValue('workHistory', workHistoryId, 'startDate');
  var endDate = getFormValue('workHistory', workHistoryId, 'endDate');

  var _useDate = useDate(startDate, endDate, years, _onChange, 'workHistory', workHistoryId),
      indexStartYear = _useDate.indexStartYear,
      indexStartMonth = _useDate.indexStartMonth,
      indexEndYear = _useDate.indexEndYear,
      indexEndMonth = _useDate.indexEndMonth,
      current = _useDate.current,
      dispatchDateChange = _useDate.dispatchDateChange;

  return React.createElement(ModalWrapper, {
    title: "Add Work"
  }, React.createElement(DisplayErrors, {
    errors: _objectSpread({}, validationErrors, {}, savingError)
  }), React.createElement(TwoColumnsRow, null, React.createElement(Field, {
    label: "Company or Project"
  }, React.createElement(TextInputWithValidation, {
    wide: true,
    value: getFormValue('workHistory', workHistoryId, 'workPlace'),
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'workHistory', workHistoryId, 'workPlace');
    },
    error: validationErrors['workPlace']
  })), React.createElement(Field, {
    label: "Job Title or Role"
  }, React.createElement(TextInputWithValidation, {
    wide: true,
    value: getFormValue('workHistory', workHistoryId, 'jobTitle'),
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'workHistory', workHistoryId, 'jobTitle');
    },
    error: validationErrors['jobTitle']
  }))), React.createElement(Field, {
    label: "Description"
  }, React.createElement(TextMultilineWithValidation, {
    wide: true,
    value: getFormValue('workHistory', workHistoryId, 'description'),
    onChange: function onChange(e) {
      return _onChange(e.target.value, 'workHistory', workHistoryId, 'description');
    },
    error: validationErrors['description']
  })), React.createElement(DateDropdowns, {
    current: current,
    dispatchDateChange: dispatchDateChange,
    indexStartMonth: indexStartMonth,
    indexStartYear: indexStartYear,
    indexEndMonth: indexEndMonth,
    indexEndYear: indexEndYear,
    type: "workHistory",
    error: validationErrors['dates']
  }), React.createElement(Button, {
    wide: true,
    mode: "strong",
    onClick: validateAndSave
  }, "Save"));
};

WorkHistory.propTypes = {
  ethereumAddress: PropTypes.string.isRequired,
  getFormValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saveProfile: PropTypes.func.isRequired,
  workHistoryId: PropTypes.string.isRequired,
  savingError: PropTypes.object
};
export default WorkHistory;