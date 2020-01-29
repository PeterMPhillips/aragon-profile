import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '@aragon/ui';

var EditTextField = function EditTextField(_ref) {
  var type = _ref.type,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      placeholder = _ref.placeholder,
      className = _ref.className;
  return React.createElement(TextInput, {
    className: className,
    type: type,
    disabled: disabled,
    onChange: onChange,
    value: value,
    placeholder: placeholder
  });
};

EditTextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};
EditTextField.defaultProps = {
  disabled: false,
  type: 'text',
  value: '',
  className: ''
};
export default EditTextField;