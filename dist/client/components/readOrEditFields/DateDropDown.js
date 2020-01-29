function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition, animated } from 'react-spring';
import ClickOutHandler from 'react-onclickout';
import { springs, unselectable, useTheme } from '@aragon/ui';
import DropDownItem from './DropDownItem';
import arrow from '../../../../assets/arrow-down.svg';
var NON_BREAKING_SPACE = '\xa0';

var assetsPath = function assetsPath(asset) {
  return asset.replace(/.*\//, '/');
};

var StyledDropDown = styled.div.withConfig({
  displayName: "DateDropDown__StyledDropDown",
  componentId: "iwuboz-0"
})(["z-index:", ";display:", ";flex-direction:column;color:", ";white-space:nowrap;box-shadow:0 4px 4px 0 rgba(0,0,0,0.03);", ";&:focus{outline:0;}"], function (_ref) {
  var opened = _ref.opened;
  return opened ? '2' : '0';
}, function (_ref2) {
  var wide = _ref2.wide;
  return wide ? 'flex' : 'inline-flex';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.content;
}, unselectable());
var DropDownItems = styled(animated.div).withConfig({
  displayName: "DateDropDown__DropDownItems",
  componentId: "iwuboz-1"
})(["position:absolute;z-index:2;top:30px;bottom:30px;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;list-style:none;overflow-x:hidden;overflow-y:scroll;width:150px;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.content;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.surface;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.border;
});
var BlockingLayer = styled(animated.div).withConfig({
  displayName: "DateDropDown__BlockingLayer",
  componentId: "iwuboz-2"
})(["position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;"]);
var DropDownActiveItem = styled(DropDownItem).withConfig({
  displayName: "DateDropDown__DropDownActiveItem",
  componentId: "iwuboz-3"
})(["padding-right:40px;background:", ";background-image:url(", ");background-repeat:no-repeat;background-position:calc(100% - 15px) 50%;border:1px solid ", ";border-radius:3px;&:hover,&:focus{color:inherit;}&:active{color:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.surface;
}, assetsPath(arrow), function (_ref8) {
  var theme = _ref8.theme;
  return theme.border;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.content;
});

var DateDropDown = function DateDropDown(_ref10) {
  var _ref10$items = _ref10.items,
      items = _ref10$items === void 0 ? [] : _ref10$items,
      _ref10$wide = _ref10.wide,
      wide = _ref10$wide === void 0 ? false : _ref10$wide,
      _ref10$active = _ref10.active,
      active = _ref10$active === void 0 ? 0 : _ref10$active,
      _ref10$onChange = _ref10.onChange,
      onChange = _ref10$onChange === void 0 ? function () {} : _ref10$onChange;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      activeItemElt = _useState4[0],
      setActiveItemElt = _useState4[1];

  var activeItem = items[active] || items[0];

  var handleToggle = function handleToggle() {
    return setOpened(!opened);
  };

  var handleClose = function handleClose() {
    return setOpened(false);
  };

  var handleItemActivate = function handleItemActivate(index, _ref11) {
    var keyboard = _ref11.keyboard;
    onChange(index, items);
    setOpened(false);

    if (activeItemElt && keyboard) {
      activeItemElt.focus();
    }
  };

  return React.createElement(ClickOutHandler, {
    onClickOut: handleClose
  }, React.createElement(StyledDropDown, {
    theme: theme,
    wide: wide,
    opened: opened
  }, React.createElement(DropDownActiveItem, {
    theme: theme,
    onActivate: handleToggle,
    mainRef: function mainRef(el) {
      return setActiveItemElt(el);
    }
  }, activeItem), React.createElement(Transition, {
    config: springs.swift,
    items: opened,
    from: {
      scale: 0.98,
      opacity: 0,
      enabled: 1
    },
    enter: {
      scale: 1,
      opacity: 1,
      enabled: 1
    },
    leave: {
      scale: 1,
      opacity: 0,
      enabled: 0
    },
    "native": true
  }, function (opened) {
    return opened && function (_ref12) {
      var scale = _ref12.scale,
          opacity = _ref12.opacity,
          enabled = _ref12.enabled;
      return React.createElement(DropDownItems, {
        theme: theme,
        role: "listbox",
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (t) {
            return "scale3d(".concat(t, ",").concat(t, ",1)");
          })
        }
      }, items.length ? items.map(function (item, i) {
        return React.createElement(DropDownItem, {
          role: "option",
          key: i,
          index: i,
          active: i === active,
          onActivate: handleItemActivate
        }, item);
      }) : NON_BREAKING_SPACE, React.createElement(BlockingLayer, {
        style: {
          display: enabled.interpolate(function (t) {
            return t === 1 ? 'none' : 'block';
          })
        }
      }));
    };
  })));
};

DateDropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  wide: PropTypes.bool,
  active: PropTypes.number,
  onChange: PropTypes.func
};
export default DateDropDown;