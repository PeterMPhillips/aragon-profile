import JsonSchemaValidator from 'ajv';
import { isAddress } from 'web3-utils';
export var validator = new JsonSchemaValidator({
  coerceTypes: true,
  useDefaults: true
});
validator.addFormat('address', {
  type: 'string',
  validate: isAddress
});
export var validateDAOAddress = validator.compile({
  type: 'string',
  format: 'address'
});
export var validateWorkPlace = validator.compile({
  type: 'string',
  minLength: 1,
  maxLength: 64
});
export var validateJobTitle = validator.compile({
  type: 'string',
  minLength: 1,
  maxLength: 64
});
export var validateEducationDates = function validateEducationDates(startDate, endDate) {
  if (!startDate && !endDate) return true;else if (!startDate && endDate) return false;else if (startDate && !endDate) return true;else if (startDate > endDate) return false;else return true;
};
export var educationDatesError = function educationDatesError(startDate, endDate) {
  if (!startDate && endDate) return 'Please provide a start date';else if (startDate > endDate) return 'Start date must be before end date';else return '';
};
export var validateWorkDates = function validateWorkDates(startDate, endDate) {
  if (!startDate) return false;else if (!endDate) return true;else if (startDate > endDate) return false;else return true;
};
export var workDatesError = function workDatesError(startDate, endDate) {
  if (!startDate) return 'Please provide a start date';else if (!endDate) return 'Please provide an end date';else if (startDate > endDate) return 'Start date must be before end date';else return '';
};
export var validateEducationOrg = validator.compile({
  type: 'string',
  minLength: 1,
  maxLength: 64
});
export var validateName = validator.compile({
  type: 'string',
  minLength: 1,
  maxLength: 32
});
export var validateWebsite = validator.compile({
  type: 'string',
  format: 'uri'
});