function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useEffect, useState } from 'react';
import { format } from '../../modules/3box-LD';
import { fetchedPublicProfileError } from '../stateManagers/box';

var useLinkedData = function useLinkedData(boxes, dispatch, ethereumAddress) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      formattedProfile = _useState2[0],
      setFormattedProfile = _useState2[1];

  var box = boxes[ethereumAddress];
  var loadedPublicProf = box ? box.loadedPublicProfSuccess : false;
  var publicProfile = loadedPublicProf ? box.publicProfile : {};
  useEffect(function () {
    try {
      if (loadedPublicProf) {
        var formattedBox = format(publicProfile);
        setFormattedProfile(formattedBox);
        var script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(formattedBox);
        document.head.appendChild(script);
      }
    } catch (error) {
      dispatch(fetchedPublicProfileError(ethereumAddress, error));
    }
  }, [ethereumAddress, loadedPublicProf, publicProfile, setFormattedProfile, dispatch]);
  return {
    formattedProfile: formattedProfile
  };
};

export default useLinkedData;