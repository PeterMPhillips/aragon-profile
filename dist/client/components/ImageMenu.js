import _styled from "styled-components";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RADIUS, useTheme } from '@aragon/ui';
import { useDropzone } from 'react-dropzone';
import { ipfs } from '../../ipfs';
import { removeItem } from '../stateManagers/modal';
import { BoxContext } from '../wrappers/box';
import { ModalContext } from '../wrappers/modal';
import { DragContext } from '../wrappers/drag';
import { image } from '../../modules/things';
import { unlockAndCreateBoxIfRequired } from '../utils';
import { IconCamera } from './styled-components';
import { uploadingImage, uploadedImage, uploadedImageFailure, savingProfile, savedProfile, saveProfileError } from '../stateManagers/box';

var ImageMenu = function ImageMenu(_ref) {
  var ethereumAddress = _ref.ethereumAddress,
      top = _ref.top,
      right = _ref.right,
      imageExists = _ref.imageExists,
      imageTag = _ref.imageTag,
      imageTitle = _ref.imageTitle,
      onSignatures = _ref.onSignatures;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useContext = useContext(BoxContext),
      boxes = _useContext.boxes,
      dispatch = _useContext.dispatch,
      web3Provider = _useContext.web3Provider;

  var _useContext2 = useContext(ModalContext),
      dispatchModal = _useContext2.dispatchModal;

  var _useContext3 = useContext(DragContext),
      dragState = _useContext3.dragState;

  var onDrop = useCallback(function (acceptedFiles) {
    dispatch(uploadingImage(ethereumAddress));
    var reader = new FileReader();

    reader.onerror = function (error) {
      reader.onabort = function () {
        return console.log('file reading failed and was aborted');
      };

      dispatch(uploadedImageFailure(ethereumAddress, error));
    };

    reader.onload =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var file, unlockedBox, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              file = Buffer.from(reader.result);
              _context.next = 4;
              return unlockAndCreateBoxIfRequired(boxes[ethereumAddress], dispatch, dispatchModal, ethereumAddress, onSignatures, web3Provider);

            case 4:
              unlockedBox = _context.sent;

              if (!unlockedBox) {
                _context.next = 20;
                break;
              }

              _context.next = 8;
              return ipfs.add(file);

            case 8:
              result = _context.sent;
              dispatch(uploadedImage(ethereumAddress, imageTag, result[0].hash));
              _context.prev = 10;
              dispatch(savingProfile(ethereumAddress));
              _context.next = 14;
              return unlockedBox.setPublicFields([imageTag], [image(result[0].hash)]);

            case 14:
              dispatch(savedProfile(ethereumAddress, _defineProperty({}, imageTag, image(result[0].hash))));
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](10);
              dispatch(saveProfileError(ethereumAddress, _context.t0));

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](0);
              dispatch(uploadedImageFailure(ethereumAddress, _context.t1));

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 22], [10, 17]]);
    }));
    acceptedFiles.forEach(function (file) {
      return reader.readAsArrayBuffer(file);
    });
  }, [boxes, dispatch, dispatchModal, ethereumAddress, imageTag, onSignatures, web3Provider]);

  var _useDropzone = useDropzone({
    accept: 'image/*',
    onDrop: onDrop,
    noDragEventsBubbling: true,
    noClick: true,
    noKeyboard: true
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject,
      open = _useDropzone.open;

  var imageCid = imageExists && boxes[ethereumAddress].publicProfile[imageTag][0].contentUrl['/'];
  return React.createElement(ClickOutHandler, {
    onBlur: function onBlur() {
      return setActive(false);
    }
  }, React.createElement(ImageMenuStyled, _extends({
    theme: theme,
    top: top,
    right: right,
    dragging: dragState.dragging,
    active: active
  }, getRootProps({
    className: 'dropzone',
    isDragActive: isDragActive,
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    imageCid: imageCid
  })), React.createElement(_StyledButton, {
    theme: theme,
    "aria-controls": "".concat(imageTag, "-photo-actions"),
    onClick: function onClick() {
      return imageExists ? setActive(!active) : open();
    }
  }, React.createElement(IconCamera, {
    width: "16px",
    height: "16px",
    color: theme.content.toString()
  }), "Update ", imageTitle, " photo"), React.createElement("div", {
    role: "region",
    "aria-live": "polite",
    id: "".concat(imageTag, "-photo-actions")
  }, React.createElement("input", getInputProps({
    disabled: false
  })), active && React.createElement(React.Fragment, null, React.createElement(Button, {
    theme: theme,
    onClick: open
  }, "Upload new image"), imageExists && React.createElement(Button, {
    theme: theme,
    onClick: function onClick() {
      return dispatchModal(removeItem(imageCid, imageTag));
    }
  }, "Delete")))));
};

ImageMenu.propTypes = {
  ethereumAddress: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  imageExists: PropTypes.bool.isRequired,
  imageTag: PropTypes.oneOf(['image', 'coverPhoto']),
  imageTitle: PropTypes.string.isRequired,
  onSignatures: PropTypes.func.isRequired
};

var ClickOutHandler = function ClickOutHandler(_ref3) {
  var children = _ref3.children,
      onBlur = _ref3.onBlur;
  var wrap = React.createRef();

  var handleBlur = function handleBlur(e) {
    if (wrap.current && wrap.current.contains(e.relatedTarget)) return;
    onBlur();
  };

  return React.createElement("div", {
    tabIndex: "-1",
    ref: wrap,
    onBlur: handleBlur
  }, children);
};

ClickOutHandler.propTypes = {
  children: PropTypes.node.isRequired,
  onBlur: PropTypes.func.isRequired
};

var isVisible = function isVisible(props) {
  return props.isDragAccept || props.isDragReject || props.isDragActive || props.dragging || props.active;
};

var ImageMenuStyled = styled.div.withConfig({
  displayName: "ImageMenu__ImageMenuStyled",
  componentId: "sc-1iwn9pw-0"
})(["transition:opacity 0.3s;background-color:", ";border-radius:", "px;width:170px;z-index:1;position:absolute;top:", ";right:", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.03);opacity:", ";&:focus-within,.imageHover:hover &{opacity:1;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.surface;
}, RADIUS, function (_ref5) {
  var top = _ref5.top;
  return "".concat(top, "px");
}, function (_ref6) {
  var right = _ref6.right;
  return "".concat(right, "px");
}, function (props) {
  return isVisible(props) ? 1 : 0;
});
var Button = styled.button.withConfig({
  displayName: "ImageMenu__Button",
  componentId: "sc-1iwn9pw-1"
})(["background:transparent;border:none;color:inherit;cursor:pointer;font:inherit;font-size:13px;outline:none;padding:8px 8px 6px 8px;text-align:left;width:100%;svg{margin-right:8px;vertical-align:text-bottom;}:not(:first-child){:hover,:focus{background:", ";}}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.background;
});

var _StyledButton = styled(Button).withConfig({
  displayName: "ImageMenu___StyledButton",
  componentId: "sc-1iwn9pw-2"
})(["font-weight:bold"]);

export default ImageMenu;