import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text } from '@aragon/ui';

var TextField = function TextField(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      size = _ref.size;
  return React.createElement(Fragment, null, value ? React.createElement(Text, {
    size: size
  }, value) : React.createElement(Text, {
    size: size,
    color: "grey"
  }, placeholder));
};

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};
TextField.defaultProps = {
  value: ''
};
export default TextField;