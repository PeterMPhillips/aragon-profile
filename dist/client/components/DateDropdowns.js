import _styled6 from "styled-components";
import _styled5 from "styled-components";
import _styled4 from "styled-components";
import _styled3 from "styled-components";
import _styled2 from "styled-components";
import _styled from "styled-components";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checkbox, Field } from '@aragon/ui';
import { DropDownWithValidation } from './styled-components';
import { years, months } from '../utils'; // copied from aragonUI Field

var Label = styled.label.withConfig({
  displayName: "DateDropdowns__Label",
  componentId: "sc-595lse-0"
})(["text-transform:lowercase;font-variant:small-caps;color:#707070;"]);

var _StyledDiv = styled.div.withConfig({
  displayName: "DateDropdowns___StyledDiv",
  componentId: "sc-595lse-1"
})(["width:48%;"]);

var _StyledDiv2 = styled.div.withConfig({
  displayName: "DateDropdowns___StyledDiv2",
  componentId: "sc-595lse-2"
})(["width:48%;"]);

var _StyledDiv3 = styled.div.withConfig({
  displayName: "DateDropdowns___StyledDiv3",
  componentId: "sc-595lse-3"
})(["display:flex;height:40px;margin-bottom:20px;"]);

var _StyledDiv4 = styled.div.withConfig({
  displayName: "DateDropdowns___StyledDiv4",
  componentId: "sc-595lse-4"
})(["width:48%;"]);

var _StyledDiv5 = styled.div.withConfig({
  displayName: "DateDropdowns___StyledDiv5",
  componentId: "sc-595lse-5"
})(["width:48%;"]);

var _StyledLabel = styled.label.withConfig({
  displayName: "DateDropdowns___StyledLabel",
  componentId: "sc-595lse-6"
})(["display:flex;align-items:center;"]);

var DateDropdowns = function DateDropdowns(_ref) {
  var current = _ref.current,
      dispatchDateChange = _ref.dispatchDateChange,
      indexStartMonth = _ref.indexStartMonth,
      indexStartYear = _ref.indexStartYear,
      indexEndMonth = _ref.indexEndMonth,
      indexEndYear = _ref.indexEndYear,
      type = _ref.type,
      error = _ref.error;
  return React.createElement(Fragment, null, React.createElement(Field, {
    label: "Start Date"
  }, React.createElement(DateDropDowns, null, React.createElement(_StyledDiv, null, React.createElement(DropDownWithValidation, {
    wide: true,
    items: months,
    active: indexStartMonth,
    onChange: function onChange(index) {
      return dispatchDateChange({
        type: 'setIndexStartMonth',
        index: index
      });
    },
    error: error
  })), React.createElement(_StyledDiv2, null, React.createElement(DropDownWithValidation, {
    wide: true,
    items: years,
    active: indexStartYear,
    onChange: function onChange(index) {
      return dispatchDateChange({
        type: 'setIndexStartYear',
        index: index
      });
    },
    error: error
  })))), React.createElement(Label, null, "End Date"), React.createElement(_StyledDiv3, null, !current && React.createElement(DateDropDowns, null, React.createElement(_StyledDiv4, null, React.createElement(DropDownWithValidation, {
    wide: true,
    items: months,
    active: indexEndMonth,
    onChange: function onChange(index) {
      return dispatchDateChange({
        type: 'setIndexEndMonth',
        index: index
      });
    },
    error: error
  })), React.createElement(_StyledDiv5, null, React.createElement(DropDownWithValidation, {
    wide: true,
    items: years,
    active: indexEndYear,
    onChange: function onChange(index) {
      return dispatchDateChange({
        type: 'setIndexEndYear',
        index: index
      });
    },
    error: error
  }))), React.createElement(_StyledLabel, null, React.createElement(Checkbox, {
    checked: current,
    onChange: function onChange(index) {
      return dispatchDateChange({
        type: 'setCurrent',
        index: index
      });
    }
  }), type === 'workHistory' ? 'I currently work here' : 'I currently study here')));
};

var DateDropDowns = styled.div.withConfig({
  displayName: "DateDropdowns__DateDropDowns",
  componentId: "sc-595lse-7"
})(["width:60%;padding-right:13px;display:flex;justify-content:space-between;"]);
DateDropdowns.propTypes = {
  current: PropTypes.bool.isRequired,
  dispatchDateChange: PropTypes.func.isRequired,
  indexStartMonth: PropTypes.number.isRequired,
  indexStartYear: PropTypes.number.isRequired,
  indexEndMonth: PropTypes.number.isRequired,
  indexEndYear: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string
};
DateDropdowns.defaultProps = {
  error: ''
};
export default DateDropdowns;