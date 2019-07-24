'use strict';
angular.
  module('postDetail').
  component('postDetail', {
    templateUrl: 'src/post-detail/post-detail.template.html',
    controller: ['$routeParams', 'Post',
      function PostDetailController($routeParams, Post) {
        var self = this;
        self.post = Post.get({postId: $routeParams.postId})
    

      }
    ]
  });