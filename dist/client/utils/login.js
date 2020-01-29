function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { Profile } from '../../modules/3box-aragon';
import { saveProfileError, requestProfileCreate, requestProfileCreateSuccess, requestProfileCreateError, profileOpenRequest, profileOpenSuccess, profileOpenFailure, profileSyncRequest, profileSyncSuccess, profileSyncFailure } from '../stateManagers/box';
import { openBoxState } from '../stateManagers/modal';
export var unlockAndCreateBoxIfRequired =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(box, dispatch, dispatchModal, ethereumAddress, onSignatures, web3Provider) {
    var unlockProfile, createProfile, hasProfile, createProfSig, openBoxSig, invokeBothSigs, profileExists;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            unlockProfile =
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var profile;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        profile = new Profile(ethereumAddress, onSignatures, web3Provider);
                        _context.next = 4;
                        return profile.unlock();

                      case 4:
                        dispatch(profileOpenSuccess(ethereumAddress, profile));
                        _context.next = 11;
                        break;

                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        dispatch(profileOpenFailure(ethereumAddress, _context.t0));
                        return _context.abrupt("return", false);

                      case 11:
                        dispatch(profileSyncRequest(ethereumAddress, profile));
                        _context.prev = 12;
                        _context.next = 15;
                        return profile.sync();

                      case 15:
                        dispatch(profileSyncSuccess(ethereumAddress, profile));
                        return _context.abrupt("return", profile);

                      case 19:
                        _context.prev = 19;
                        _context.t1 = _context["catch"](12);
                        dispatch(profileSyncFailure(ethereumAddress, _context.t1));
                        return _context.abrupt("return", false);

                      case 23:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 7], [12, 19]]);
              }));

              return function unlockProfile() {
                return _ref2.apply(this, arguments);
              };
            }();

            createProfile =
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(unlockedBox) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return unlockedBox.createProfile();

                      case 3:
                        dispatch(requestProfileCreateSuccess(ethereumAddress));
                        return _context2.abrupt("return", true);

                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2["catch"](0);
                        dispatch(requestProfileCreateError(ethereumAddress, _context2.t0));
                        return _context2.abrupt("return", false);

                      case 11:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 7]]);
              }));

              return function createProfile(_x7) {
                return _ref3.apply(this, arguments);
              };
            }();

            hasProfile = function hasProfile() {
              var _ref4 = new Profile(ethereumAddress, onSignatures, web3Provider),
                  hasProfile = _ref4.hasProfile;

              return hasProfile();
            };

            createProfSig =
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(unlockedBox) {
                var created;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        dispatch(requestProfileCreate(ethereumAddress));
                        dispatchModal(openBoxState(['create']));
                        _context3.next = 4;
                        return createProfile(unlockedBox);

                      case 4:
                        created = _context3.sent;
                        return _context3.abrupt("return", created ? unlockedBox : null);

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function createProfSig(_x8) {
                return _ref5.apply(this, arguments);
              };
            }();

            openBoxSig =
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        dispatch(profileOpenRequest(ethereumAddress));
                        dispatchModal(openBoxState(['unlock']));
                        return _context4.abrupt("return", unlockProfile());

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function openBoxSig() {
                return _ref6.apply(this, arguments);
              };
            }();

            invokeBothSigs =
            /*#__PURE__*/
            function () {
              var _ref7 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5() {
                var unlockedBox, created;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        dispatch(profileOpenRequest(ethereumAddress));
                        dispatchModal(openBoxState(['unlock', 'create']));
                        _context5.next = 4;
                        return unlockProfile();

                      case 4:
                        unlockedBox = _context5.sent;
                        dispatch(requestProfileCreate(ethereumAddress));
                        _context5.next = 8;
                        return createProfile(unlockedBox);

                      case 8:
                        created = _context5.sent;
                        return _context5.abrupt("return", created ? unlockedBox : null);

                      case 10:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function invokeBothSigs() {
                return _ref7.apply(this, arguments);
              };
            }();

            _context6.prev = 6;
            _context6.next = 9;
            return hasProfile();

          case 9:
            profileExists = _context6.sent;

            if (!(box.unlockedProfSuccess && profileExists)) {
              _context6.next = 12;
              break;
            }

            return _context6.abrupt("return", box.unlockedBox);

          case 12:
            if (!box.unlockedProfSuccess) {
              _context6.next = 14;
              break;
            }

            return _context6.abrupt("return", createProfSig(box.unlockedBox));

          case 14:
            if (!(!box.unlockedProfSuccess && profileExists)) {
              _context6.next = 16;
              break;
            }

            return _context6.abrupt("return", openBoxSig());

          case 16:
            console.log('need both'); // both signatures, return box once finished

            return _context6.abrupt("return", invokeBothSigs());

          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](6);
            dispatch(saveProfileError(ethereumAddress, "error unlocking or creating profile: ".concat(_context6.t0)));
            return _context6.abrupt("return", null);

          case 24:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[6, 20]]);
  }));

  return function unlockAndCreateBoxIfRequired(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();