function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { worksFor, schoolAffiliation, homeLocation, schemaDotOrgImage } from './things';
var usedFields = new Set(['name', 'jobTitle', 'homeLocation', 'affiliation', 'url', 'description', 'image', 'worksFor']);

var isIPFS = function isIPFS() {
  return true;
};

var handleJobTitle = function handleJobTitle(publicProfile) {
  if (publicProfile.job) {
    var job = publicProfile.job;
    delete publicProfile.job;
    return _objectSpread({}, publicProfile, {
      jobTitle: job
    });
  }

  return publicProfile;
};

var handleEmployer = function handleEmployer(publicProfile) {
  if (publicProfile.employer) {
    var employer = publicProfile.employer;
    delete publicProfile.employer;
    return _objectSpread({}, publicProfile, {
      worksFor: worksFor(employer)
    });
  }

  return publicProfile;
};

var handleEducation = function handleEducation(publicProfile) {
  var hasEducation = !!publicProfile.school;
  if (!hasEducation) return publicProfile;
  var affiliation = publicProfile.affiliation || [];
  return _objectSpread({}, publicProfile, {
    affiliation: schoolAffiliation(publicProfile.school, affiliation)
  });
};

var handleWebsite = function handleWebsite(publicProfile) {
  if (publicProfile.website) {
    var website = publicProfile.website;
    delete publicProfile.website;
    return _objectSpread({}, publicProfile, {
      url: website
    });
  }

  return publicProfile;
};

var handleLocation = function handleLocation(publicProfile) {
  if (publicProfile.location) {
    var location = publicProfile.location;
    delete publicProfile.location;
    return _objectSpread({}, publicProfile, {
      homeLocation: homeLocation(location)
    });
  }

  return publicProfile;
};

var handlePerson = function handlePerson(publicProfile) {
  var isPerson = publicProfile['@type'] === 'Person' && publicProfile['@context'] === 'http://schema.org/';
  if (isPerson) return publicProfile;
  return _objectSpread({}, publicProfile, {
    '@type': 'Person',
    '@context': 'http://schema.org/'
  });
};

export var handleImage = function handleImage(publicProfile) {
  var hasImage = !!publicProfile.image && publicProfile.image.length > 0;
  if (!hasImage) return publicProfile;
  var isProperlyTyped = Array.isArray(publicProfile.image) && publicProfile.image.length > 0 && publicProfile.image[0].contentUrl && _typeof(publicProfile.image[0].contentUrl) === 'object';
  var cid = isProperlyTyped && publicProfile.image[0].contentUrl['/'];
  var isIPLD = isIPFS(cid);

  if (isIPLD) {
    delete publicProfile.image;
    return _objectSpread({}, publicProfile, {
      image: schemaDotOrgImage(cid)
    });
  }

  throw new Error('unknown image type passed');
};
/* prettier-ignore */

export var format = function format(publicProfile) {
  var formattedProfile = handlePerson(handleLocation(handleWebsite(handleEducation(handleEmployer(handleJobTitle(handleImage(_objectSpread({}, publicProfile))))))));
  return formattedProfile;
};
export var populateFormValue = function populateFormValue(publicProfile) {
  var strippedObject = {};
  Object.keys(publicProfile).filter(function (field) {
    return usedFields.has(field);
  }).forEach(function (field) {
    return strippedObject[field] = publicProfile[field];
  });
  return strippedObject;
};