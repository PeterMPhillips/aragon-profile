import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@aragon/ui';
import { toUnix, unixToCalendar } from '../../utils';
import { FlexDirectionCol } from '../styled-components';

var DatePicker = function DatePicker(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      label = _ref.label;

  var returnUnixTime = function returnUnixTime(_ref2) {
    var value = _ref2.target.value;
    return onChange(toUnix(value));
  };

  return React.createElement(FlexDirectionCol, null, React.createElement(Text, null, label), React.createElement("input", {
    type: "date",
    value: unixToCalendar(value),
    onChange: returnUnixTime
  }));
};

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number
};
export default DatePicker;