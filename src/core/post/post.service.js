'use strict';

angular.
  module('core.post').
  factory('Post', ['$resource',
    function($resource) {
      return $resource('http://localhost:3000/posts/:postId', {}, {
        query: {
          method: 'GET',
          params: {postId: ''},
          isArray: true
        },
        'byUser': {
          method: 'GET',
          params: {userId: ''},
          isArray: true
        },
        'post': {
          method:'POST',
          url: 'http://localhost:3000/posts',
          isArray: false
        } 
      });
    }
  ]);
