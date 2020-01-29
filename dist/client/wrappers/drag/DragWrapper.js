function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { DragContext } from '../drag';
import { initialState, dragReducer, startDrag, stopDrag, cancelDrag } from '../../stateManagers/drag';

var DragWrapper = function DragWrapper(_ref) {
  var children = _ref.children;

  var _useReducer = useReducer(dragReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      dragState = _useReducer2[0],
      dispatchDrag = _useReducer2[1];

  var handleDrag = function handleDrag(dragAction) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      dispatchDrag(dragAction());
    };
  };

  window.addEventListener('dragenter', handleDrag(startDrag));
  window.addEventListener('dragleave', handleDrag(stopDrag));
  window.addEventListener('dragend', handleDrag(cancelDrag));
  window.addEventListener('drop', handleDrag(cancelDrag));
  return React.createElement(DragContext.Provider, {
    value: {
      dragState: dragState,
      dispatchDrag: dispatchDrag
    }
  }, children);
};

DragWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default DragWrapper;