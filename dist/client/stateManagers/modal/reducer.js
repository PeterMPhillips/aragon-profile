function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { OPENED_MODAL, CLOSED_MODAL, REMOVE_ITEM, OPENED_BOX_MODAL } from './actionTypes';
import { openedModal, openedBoxStateModal, closedModal, removeItem } from './states';

var logStateUpdate = function logStateUpdate(action, prevState, nextState) {// console.log(
  //   'ACTION: ',
  //   action,
  //   'PREV STATE: ',
  //   prevState,
  //   'NEXT STATE:',
  //   nextState
  // )
};

var modalReducer = function modalReducer(prevState, action) {
  switch (action.type) {
    case OPENED_MODAL:
      {
        var nextState = openedModal(_objectSpread({}, prevState), action.meta.type, action.meta.id);
        logStateUpdate(action, prevState, nextState);
        return nextState;
      }

    case OPENED_BOX_MODAL:
      {
        var _nextState = openedBoxStateModal(_objectSpread({}, prevState), action.meta.sigsRequired);

        logStateUpdate(action, prevState, _nextState);
        return _nextState;
      }

    case CLOSED_MODAL:
      {
        var _nextState2 = closedModal(_objectSpread({}, prevState));

        logStateUpdate(action, prevState, _nextState2);
        return _nextState2;
      }

    case REMOVE_ITEM:
      {
        var _nextState3 = removeItem(_objectSpread({}, prevState), action.meta.id, action.meta.itemType);

        logStateUpdate(action, prevState, _nextState3);
        return _nextState3;
      }

    default:
      {
        return prevState;
      }
  }
};

export default modalReducer;