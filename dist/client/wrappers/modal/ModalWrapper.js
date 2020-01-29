function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../modal';
import { initialState, modalReducer } from '../../stateManagers/modal';
import UserInfoModal from '../../components/modals';

var ModalWrapper = function ModalWrapper(_ref) {
  var children = _ref.children,
      ethereumAddress = _ref.ethereumAddress,
      onSignatures = _ref.onSignatures;

  var _useReducer = useReducer(modalReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      modal = _useReducer2[0],
      dispatchModal = _useReducer2[1];

  return React.createElement(ModalContext.Provider, {
    value: {
      modal: modal,
      dispatchModal: dispatchModal
    }
  }, React.createElement(UserInfoModal, {
    ethereumAddress: ethereumAddress,
    onSignatures: onSignatures
  }), children);
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  ethereumAddress: PropTypes.string,
  onSignatures: PropTypes.func.isRequired
};
export default ModalWrapper;