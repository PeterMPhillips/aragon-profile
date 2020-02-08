function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useEffect, useReducer } from 'react';
import { toUnix, yearFromUnix, monthFromUnix, years } from '../utils';

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      index = _ref.index;

  switch (type) {
    case 'setIndexStartYear':
      {
        return _objectSpread({}, state, {
          indexStartYear: index
        });
      }

    case 'setIndexStartMonth':
      {
        return _objectSpread({}, state, {
          indexStartMonth: index
        });
      }

    case 'setIndexEndYear':
      {
        return _objectSpread({}, state, {
          indexEndYear: index
        });
      }

    case 'setIndexEndMonth':
      {
        return _objectSpread({}, state, {
          indexEndMonth: index
        });
      }

    case 'setCurrent':
      {
        return _objectSpread({}, state, {
          current: !state.current,
          indexEndYear: 0,
          indexEndMonth: 0
        });
      }
  }
};

var calculateInitialState = function calculateInitialState(startDate, endDate) {
  var indexStartYear = 0;
  var indexStartMonth = 0;
  var indexEndYear = 0;
  var indexEndMonth = 0;
  var current = false;

  if (startDate) {
    var startYear = yearFromUnix(startDate);
    indexStartYear = years.indexOf(startYear);
    indexStartMonth = Number(monthFromUnix(startDate));
  }

  if (endDate) {
    var endYear = yearFromUnix(endDate);
    indexEndYear = years.indexOf(endYear);
    indexEndMonth = Number(monthFromUnix(endDate));
  } else {
    current = true;
  }

  return {
    indexStartYear: indexStartYear,
    indexStartMonth: indexStartMonth,
    indexEndYear: indexEndYear,
    indexEndMonth: indexEndMonth,
    current: current
  };
};

var useDate = function useDate(startDate, endDate, years, onChange, history, id) {
  var _useReducer = useReducer(reducer, calculateInitialState(startDate, endDate)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      indexStartYear = _useReducer2$.indexStartYear,
      indexStartMonth = _useReducer2$.indexStartMonth,
      indexEndYear = _useReducer2$.indexEndYear,
      indexEndMonth = _useReducer2$.indexEndMonth,
      current = _useReducer2$.current,
      dispatchDateChange = _useReducer2[1];

  useEffect(function () {
    if (indexStartYear > 0 && indexStartMonth > 0) {
      var unixTime = toUnix("".concat(years[indexStartYear], "-").concat(indexStartMonth, "-01"));
      if (unixTime !== startDate) onChange(unixTime, history, id, 'startDate');
    } else {
      if (startDate) onChange('', history, id, 'startDate');
    }

    if (indexEndYear > 0 && indexEndMonth > 0) {
      var _unixTime = toUnix("".concat(years[indexEndYear], "-").concat(indexEndMonth, "-01"));

      if (_unixTime !== endDate) onChange(_unixTime, history, id, 'endDate');
    } else {
      if (endDate) onChange('', history, id, 'endDate');
    }

    if (endDate && current) {
      onChange('', history, id, 'endDate');
    }
  }, [years, startDate, onChange, id, endDate, indexStartYear, indexStartMonth, indexEndYear, indexEndMonth, history, current]);
  return {
    indexStartYear: indexStartYear,
    indexStartMonth: indexStartMonth,
    indexEndYear: indexEndYear,
    indexEndMonth: indexEndMonth,
    current: current,
    dispatchDateChange: dispatchDateChange
  };
};

export default useDate;