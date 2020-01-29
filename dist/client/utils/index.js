function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import dayjs from 'dayjs';
import uuidv1 from 'uuid/v1';
import { isAddress } from 'web3-utils';
/* TIME HELPERS */

export var toUnix = function toUnix(date) {
  return dayjs(date, 'YYYY-MM-DD').unix();
};
export var unixToCalendar = function unixToCalendar(unix) {
  return dayjs.unix(unix).format('YYYY-MM-DD');
};
export var yearFromUnix = function yearFromUnix(unix) {
  return dayjs.unix(unix).format('YYYY');
};
export var monthFromUnix = function monthFromUnix(unix) {
  return dayjs.unix(unix).format('MM');
};
export var unixToTileDate = function unixToTileDate(unix) {
  return dayjs.unix(unix).format('MMM YYYY');
};
export var todayInUnix = function todayInUnix() {
  return dayjs().unix();
};
/* FORM HELPERS */

var assignArbitraryIds = function assignArbitraryIds(fieldArray) {
  var returnObj = {};
  fieldArray.forEach(function (field) {
    return returnObj[uuidv1()] = field;
  });
  return returnObj;
};

export var reformatNestedFields = function reformatNestedFields(forms) {
  var copiedForms = _objectSpread({}, forms);

  if (copiedForms.educationHistory) {
    copiedForms.educationHistory = assignArbitraryIds(copiedForms.educationHistory);
  }

  if (copiedForms.workHistory) {
    copiedForms.workHistory = assignArbitraryIds(copiedForms.workHistory);
  }

  if (copiedForms.organizations) {
    copiedForms.organizations = assignArbitraryIds(copiedForms.organizations);
  }

  return copiedForms;
};
export var months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export var currentYear = yearFromUnix(todayInUnix());
export var years = Array.apply(0, Array(74)).map(function (_x, index) {
  return index === 0 ? 'Year' : (currentYear - index + 1).toString();
});
export var displayStartEndDates = function displayStartEndDates(data) {
  if (data.startDate && data.endDate) {
    if (data.startDate === data.endDate) {
      return "".concat(unixToTileDate(data.startDate));
    } else {
      return "".concat(unixToTileDate(data.startDate), " - ").concat(unixToTileDate(data.endDate));
    }
  } else if (data.startDate) {
    return "".concat(unixToTileDate(data.startDate), " - Present");
  } else {
    return '';
  }
};
export var determineAddress = function determineAddress(connectedAccount, queryParams) {
  if (queryParams.length > 0 && isAddress(queryParams[0])) {
    return queryParams[0];
  }

  return connectedAccount;
};
export var isViewMode = function isViewMode(connectedAccount, queryParams) {
  if (queryParams.length === 0) return false;

  if (isAddress(queryParams[0])) {
    return queryParams[0] !== connectedAccount;
  }

  if (!queryParams[0]) {
    return false;
  }

  if (!isAddress(queryParams[0])) {
    return true;
  }
};
export var assetsPath = function assetsPath(asset) {
  return asset.replace(/.*\//, '/');
};
export var shortDAOAddress = function shortDAOAddress() {
  var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (address.endsWith('.eth')) return address;
  return address.slice(0, 6) + '…' + address.slice(-4);
};
export var fakeIsMember =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ethereumAddress, address) {
    var promise;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            promise = new Promise(function (resolve, reject) {
              setTimeout(function () {
                return resolve(Math.random() >= 0.99);
              }, 2000);
            });
            return _context.abrupt("return", promise);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fakeIsMember(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
export var sortHistory = function sortHistory(history) {
  return Object.keys(history).map(function (id) {
    return _objectSpread({
      id: id
    }, history[id]);
  }).sort(function (a, b) {
    if (a.endDate && !b.endDate) return 1;
    if (b.endDate && !a.endDate) return -1;
    if (!a.endDate && !b.endDate) return b.startDate - a.startDate;
    if (a.endDate && b.endDate) return b.endDate - a.endDate;
  });
};
export * from './login';