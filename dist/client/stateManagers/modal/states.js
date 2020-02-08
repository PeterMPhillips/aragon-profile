function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { REMOVE_ITEM, BOX_STATE } from './types';
export var initialState = {
  type: null,
  id: null,
  itemType: null,
  sigsRequired: []
};
export var openedModal = function openedModal(state, type, id) {
  return _objectSpread({}, state, {
    type: type,
    id: id
  });
};
export var closedModal = function closedModal(state) {
  return {
    type: null,
    id: null,
    itemType: null,
    sigsRequired: []
  };
};
export var removeItem = function removeItem(state, id, itemType) {
  return _objectSpread({}, state, {
    type: REMOVE_ITEM,
    itemType: itemType,
    id: id
  });
};
export var openedBoxStateModal = function openedBoxStateModal(state, sigsRequired) {
  return _objectSpread({}, state, {
    type: BOX_STATE,
    sigsRequired: sigsRequired
  });
};