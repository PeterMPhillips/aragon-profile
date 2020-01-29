export var initialState = {
  counter: 0,
  dragging: false
};
export var startDrag = function startDrag(state) {
  return {
    counter: state.counter + 1,
    dragging: true
  };
};
export var stopDrag = function stopDrag(state) {
  return {
    counter: state.counter - 1,
    dragging: state.counter > 1
  };
};
export var cancelDrag = function cancelDrag(state) {
  return {
    counter: 0,
    dragging: false
  };
};