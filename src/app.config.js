'use strict';
 angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/posts', {
        template: '<post-list></post-list>'
      }).
      when('/posts/:postId', {
        template: '<post-detail></post-detail>'
      }).
      when('/users/:userId', {
        template: '<user-detail></user-detail>'
      }).
      otherwise('/posts');
    }
  ]);