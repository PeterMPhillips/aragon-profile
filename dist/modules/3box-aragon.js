function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Box from '3box';

var Web3ProviderProxy = function Web3ProviderProxy(ethereumAddress, onSignatures, web3Provider) {
  var _this = this;

  _classCallCheck(this, Web3ProviderProxy);

  _defineProperty(this, "sendAsync", function (_ref, callback) {
    var fromAddress = _ref.fromAddress,
        method = _ref.method,
        params = _ref.params,
        jsonrpc = _ref.jsonrpc;
    var overridenMethods = {
      personal_sign: function personal_sign(_ref2, callback) {
        var _ref3 = _slicedToArray(_ref2, 1),
            message = _ref3[0];

        if (fromAddress.toLowerCase() !== _this.ethereumAddress.toLowerCase()) {
          throw new Error('Address mismatch');
        }

        var signatureBag = {
          message: message,
          requestingApp: '3Box-Aragon Profile',
          resolve: function resolve(signature) {
            return callback(null, {
              result: signature,
              error: null
            });
          },
          reject: function reject(error) {
            return callback(error, {
              error: error
            });
          }
        };
        return _this.onSignatures(signatureBag);
      }
    }; // if we want to override a default web3 behavior (like personal_sign), we return the overriden method here

    if (overridenMethods[method]) {
      return overridenMethods[method](params, callback);
    }

    return _this.web3Provider.sendAsync({
      fromAddress: fromAddress,
      method: method,
      params: params,
      jsonrpc: jsonrpc
    }, callback);
  });

  this.ethereumAddress = ethereumAddress;
  this.onSignatures = onSignatures;
  this.web3Provider = web3Provider;
};

export var Profile = function Profile(ethereumAddress, onSignatures, web3Provider) {
  var _this2 = this;

  _classCallCheck(this, Profile);

  _defineProperty(this, "_getPublic",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var publicProfile;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_this2.boxState.opened) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return _this2.unlockedBox["public"].all();

          case 3:
            _context.t0 = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.next = 8;
            return Box.getProfile(_this2.ethereumAddress);

          case 8:
            _context.t0 = _context.sent;

          case 9:
            publicProfile = _context.t0;
            return _context.abrupt("return", publicProfile);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  _defineProperty(this, "getPublic",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var publicProfile, _ref6, github, twitter;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this2._getPublic();

          case 2:
            publicProfile = _context2.sent;

            if (Object.keys(publicProfile).length) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", publicProfile);

          case 5:
            _context2.next = 7;
            return Box.getVerifiedAccounts(publicProfile);

          case 7:
            _ref6 = _context2.sent;
            github = _ref6.github;
            twitter = _ref6.twitter;
            return _context2.abrupt("return", _objectSpread({}, publicProfile, {
              github: github || {
                username: '',
                proof: ''
              },
              twitter: twitter || {
                username: '',
                proof: ''
              }
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));

  _defineProperty(this, "unlock",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var openedBox;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Box.openBox(_this2.ethereumAddress, _this2.web3ProviderProxy);

          case 2:
            openedBox = _context3.sent;
            _this2.boxState = {
              opened: true,
              synced: false
            };
            _this2.unlockedBox = openedBox;
            return _context3.abrupt("return", openedBox);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));

  _defineProperty(this, "sync", function () {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(resolve, reject) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this2.boxState.opened) {
                  _context4.next = 14;
                  break;
                }

                _context4.prev = 1;
                _context4.next = 4;
                return _this2.unlockedBox.syncDone;

              case 4:
                _this2.boxState = {
                  opened: true,
                  synced: true
                };
                resolve(_this2.unlockedBox);
                _context4.next = 12;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                _this2.boxState = {
                  opened: true,
                  synced: false
                };
                return _context4.abrupt("return", reject(_context4.t0));

              case 12:
                _context4.next = 15;
                break;

              case 14:
                reject(new Error('Box needs to be unlocked before it can be synced'));

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      return function (_x, _x2) {
        return _ref8.apply(this, arguments);
      };
    }());
  });

  _defineProperty(this, "unlockAndSync",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var openedBox;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Box.openBox(_this2.ethereumAddress, _this2.web3ProviderProxy);

          case 2:
            openedBox = _context5.sent;
            _this2.boxState = {
              opened: true,
              synced: false
            };
            _this2.unlockedBox = openedBox;
            return _context5.abrupt("return", _this2.sync());

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));

  _defineProperty(this, "createProfile", function () {
    return _this2.unlockedBox.linkAddress();
  });

  _defineProperty(this, "hasProfile",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var config;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return Box.getConfig(_this2.ethereumAddress);

          case 3:
            config = _context6.sent;
            return _context6.abrupt("return", config && config.links && config.links.length > 0);

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", false);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  })));

  _defineProperty(this, "isLoggedIn", function () {
    return Box.isLoggedIn(_this2.ethereumAddress);
  });

  _defineProperty(this, "logout", function () {
    return _this2.unlockedBox.logout();
  });

  _defineProperty(this, "getPrivate", function () {
    if (_this2.boxState.opened && _this2.boxState.synced) {
      return _this2.unlockedBox["private"].all();
    }

    throw new Error('box was not unlocked or has not finished syncing');
  });

  _defineProperty(this, "checkForErrorsBeforeSetting", function (fields, values) {
    if (!_this2.boxState.opened || !_this2.boxState.synced) {
      throw new Error('box was not unlocked or has not finished syncing');
    }

    if (!Array.isArray(fields) || !Array.isArray(values)) {
      throw new Error('must pass two arrays');
    }
  });

  _defineProperty(this, "setPublicFields",
  /*#__PURE__*/
  function () {
    var _ref11 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(fields, values) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this2.checkForErrorsBeforeSetting(fields, values);

              _context7.prev = 1;
              _context7.next = 4;
              return _this2.unlockedBox["public"].setMultiple(fields, values);

            case 4:
              _context7.next = 9;
              break;

            case 6:
              _context7.prev = 6;
              _context7.t0 = _context7["catch"](1);
              throw new Error("Error setting in box: ".concat(_context7.t0));

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 6]]);
    }));

    return function (_x3, _x4) {
      return _ref11.apply(this, arguments);
    };
  }());

  _defineProperty(this, "setPrivateFields",
  /*#__PURE__*/
  function () {
    var _ref12 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8(fields, values) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this2.checkForErrorsBeforeSetting(fields, values);

              _context8.prev = 1;
              _context8.next = 4;
              return _this2.unlockedBox["private"].setMultiple(fields, values);

            case 4:
              _context8.next = 9;
              break;

            case 6:
              _context8.prev = 6;
              _context8.t0 = _context8["catch"](1);
              throw new Error("Error setting in box: ".concat(_context8.t0));

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[1, 6]]);
    }));

    return function (_x5, _x6) {
      return _ref12.apply(this, arguments);
    };
  }());

  _defineProperty(this, "removePublicField",
  /*#__PURE__*/
  function () {
    var _ref13 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9(field) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return _this2.unlockedBox["public"].remove(field);

            case 3:
              _context9.next = 8;
              break;

            case 5:
              _context9.prev = 5;
              _context9.t0 = _context9["catch"](0);
              throw new Error("Error removing field from box ".concat(_context9.t0));

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 5]]);
    }));

    return function (_x7) {
      return _ref13.apply(this, arguments);
    };
  }());

  _defineProperty(this, "removePrivateField",
  /*#__PURE__*/
  function () {
    var _ref14 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee10(field) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return _this2.unlockedBox["private"].remove(field);

            case 3:
              _context10.next = 8;
              break;

            case 5:
              _context10.prev = 5;
              _context10.t0 = _context10["catch"](0);
              throw new Error("Error removing field from box ".concat(_context10.t0));

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 5]]);
    }));

    return function (_x8) {
      return _ref14.apply(this, arguments);
    };
  }());

  this.ethereumAddress = ethereumAddress;
  this.web3ProviderProxy = new Web3ProviderProxy(ethereumAddress, onSignatures, web3Provider);
  this.boxState = {
    opened: false,
    errorFetchingBox: false
  };
  this.unlockedBox = null;
};