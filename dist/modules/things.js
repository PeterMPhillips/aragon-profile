function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

export var worksFor = function worksFor(organizationName) {
  return {
    '@context': 'http://schema.org/',
    '@type': 'Organization',
    name: organizationName
  };
};
export var schoolAffiliation = function schoolAffiliation(schoolName, otherAffiliations) {
  return [].concat(_toConsumableArray(otherAffiliations), [{
    '@context': 'http://schema.org/',
    '@type': 'School',
    name: schoolName
  }]);
};
export var homeLocation = function homeLocation(locationName) {
  return {
    '@context': 'http://schema.org/',
    '@type': 'Residence',
    name: locationName
  };
};
export var image = function image(imageHash) {
  return [{
    '@type': 'ImageObject',
    '@context': 'http://schema.org/',
    contentUrl: {
      '/': imageHash
    }
  }];
};
export var schemaDotOrgImage = function schemaDotOrgImage(imageHash) {
  return [{
    '@type': 'ImageObject',
    '@context': 'http://schema.org/',
    contentUrl: "https://ipfs.infura.io/ipfs/".concat(imageHash)
  }];
};