'use strict';

angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
      return $resource('http://localhost:3000/users/:userId', {}, {
        query: {
          method: 'GET',
          params: {userId: ''},
          isArray: true
        }
      });
    }
  ]);
