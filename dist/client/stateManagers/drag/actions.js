import { STOP_DRAG, START_DRAG, CANCEL_DRAG } from './actionTypes';
export var startDrag = function startDrag() {
  return {
    type: START_DRAG
  };
};
export var stopDrag = function stopDrag() {
  return {
    type: STOP_DRAG
  };
};
export var cancelDrag = function cancelDrag() {
  return {
    type: CANCEL_DRAG
  };
};