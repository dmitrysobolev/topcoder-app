(function() {
  'use strict';

  angular.module('topcoder').factory('authtoken', authtoken);

  authtoken.$inject = ['CONSTANTS', '$window', '$cookies'];

  function authtoken(CONSTANTS, $window, $cookies) {
    var tokenKey = 'tcjwt';

    var service = {
      setToken: setToken,
      getToken: getToken,
      removeToken: removeToken
    };
    return service;

    ///////////////

    function setToken() {
      $window.document.cookie = tokenKey + '=' + token + '; path=/; domain=.' + CONSTANTS.domain + '; expires=' + new Date(new Date().getTime() + 12096e5);
    }

    function getToken() {
      console.log('here');
      return $cookies.get(tokenKey);
    }

    function removeToken() {
      $window.document.cookie = tokenKey + '=; path=/; domain=.' + CONSTANTS.domain + '; expires=' + (new Date(0)).toUTCString();
    }

  }

})();
