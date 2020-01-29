function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useReducer, useEffect } from 'react';
import { Profile } from '../../modules/3box-aragon';
import { fetchingProfile, fetchedPublicProfile, boxReducer, initialState, fetchedPublicProfileError, requestedProfileUnlock, profileUnlockSuccess, profileUnlockFailure, noPublicProfileFound } from '../stateManagers/box';

var use3Box = function use3Box(account, onSignatures, web3Provider) {
  var _useReducer = useReducer(boxReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      boxes = _useReducer2[0],
      dispatch = _useReducer2[1];

  useEffect(function () {
    var unlockIfLoggedIn =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(profile) {
        var isLoggedIn;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return profile.isLoggedIn();

              case 2:
                isLoggedIn = _context.sent;

                if (!isLoggedIn) {
                  _context.next = 14;
                  break;
                }

                dispatch(requestedProfileUnlock(account));
                _context.prev = 5;
                _context.next = 8;
                return profile.unlockAndSync();

              case 8:
                dispatch(profileUnlockSuccess(account, profile));
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                dispatch(profileUnlockFailure(account, _context.t0));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 11]]);
      }));

      return function unlockIfLoggedIn(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var getBox =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var profile, publicProfile;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(account && onSignatures)) {
                  _context2.next = 14;
                  break;
                }

                dispatch(fetchingProfile(account));
                _context2.prev = 2;
                profile = new Profile(account, onSignatures, web3Provider);
                _context2.next = 6;
                return profile.getPublic();

              case 6:
                publicProfile = _context2.sent;

                if (Object.keys(publicProfile).length > 0) {
                  dispatch(fetchedPublicProfile(account, publicProfile));
                } else {
                  dispatch(noPublicProfileFound(account));
                }

                unlockIfLoggedIn(profile);
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);
                dispatch(fetchedPublicProfileError(account, _context2.t0));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 11]]);
      }));

      return function getBox() {
        return _ref2.apply(this, arguments);
      };
    }();

    getBox();
  }, [account, onSignatures, web3Provider]);
  return {
    boxes: boxes,
    dispatch: dispatch
  };
};

export default use3Box;