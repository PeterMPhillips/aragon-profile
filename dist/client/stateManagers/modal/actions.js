import { OPENED_MODAL, OPENED_BOX_MODAL, CLOSED_MODAL, REMOVE_ITEM } from './actionTypes';
export var open = function open(type, id) {
  return {
    type: OPENED_MODAL,
    meta: {
      type: type,
      id: id
    }
  };
};
export var openBoxState = function openBoxState(sigsRequired) {
  return {
    type: OPENED_BOX_MODAL,
    meta: {
      sigsRequired: sigsRequired
    }
  };
};
export var close = function close() {
  return {
    type: CLOSED_MODAL
  };
};
export var removeItem = function removeItem(id, itemType) {
  return {
    type: REMOVE_ITEM,
    meta: {
      id: id,
      itemType: itemType
    }
  };
};