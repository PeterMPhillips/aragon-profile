import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font, theme } from '@aragon/ui';

var EditTextArea = function EditTextArea(_ref) {
  var type = _ref.type,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      placeholder = _ref.placeholder;
  return React.createElement(TextArea, {
    type: type,
    disabled: disabled,
    onChange: onChange,
    value: value,
    placeholder: placeholder,
    rows: 3
  });
};

EditTextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
};
EditTextArea.defaultProps = {
  editing: false,
  disabled: false,
  type: 'text',
  wide: false,
  value: ''
};
var baseStyles = css(["", ";width:", ";padding:0 10px;background:", ";border:1px solid ", ";border-radius:3px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.06);color:", ";appearance:none;&:focus{outline:none;border-color:", ";}&:read-only{color:transparent;text-shadow:0 0 0 ", ";}width:100%;"], font({
  size: 'small',
  weight: 'normal'
}), function (_ref2) {
  var wide = _ref2.wide;
  return wide ? '100%' : 'auto';
}, theme.contentBackground, theme.contentBorder, theme.textPrimary, theme.contentBorderActive, theme.textSecondary);
var TextArea = styled.textarea.withConfig({
  displayName: "EditTextArea__TextArea",
  componentId: "sc-1mysy55-0"
})(["", ";"], baseStyles);
export default EditTextArea;