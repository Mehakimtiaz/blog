"use strict";

angular.module("core", ["core.post", "core.user"]), angular.module("core.post", ["ngResource"]), angular.module("core.post").factory("Post", ["$resource", function(rp) {
  return rp("http://localhost:3000/posts/:postId", {}, {
      query: {
          method: "GET",
          params: {
              postId: ""
          },
          isArray: !0
      },
      byUser: {
          method: "GET",
          params: {
              userId: ""
          },
          isArray: !0
      },
      post: {
          method: "POST",
          url: "http://localhost:3000/posts",
          isArray: !1
      }
  })
}]),
 angular.module("core.user", ["ngResource"]), angular.module("core.user").factory("User", ["$resource", function(t) {
  return t("http://localhost:3000/users/:userId", {}, {
      query: {
          method: "GET",
          params: {
              userId: ""
          },
          isArray: !0
      }
  })
}]),
 angular.module("postList", ["core.post"]), angular.module("postList").component("postList", {
  templateUrl: "src/post-list/post-list.template.html",
  controller: ["Post", function(t) {
      self = this, self.post = {}, self.posts = t.query(), self.orderProp = "id", self.submitForm = function() {
          t.post({
              userId: self.post.userId,
              id: self.post.id,
              title: self.post.title,
              body: self.post.body
          })
      }
  }]
}), angular.module("postDetail", ["ngRoute", "core.post", "core.comment"]), angular.module("postDetail").component("postDetail", {
  templateUrl: "src/post-detail/post-detail.template.html",
  controller: ["$routeParams", "Post", "Comment", function(t, e, o) {
      this.post = e.get({
          postId: t.postId
      }), this.comments = o.query({
          postId: t.postId
      })
  }]
}), angular.module("userDetail", ["ngRoute", "core.user", "core.post"]), angular.module("userDetail").component("userDetail", {
  templateUrl: "src/user-detail/user-detail.template.html",
  controller: ["$routeParams", "User", "Post", function(t, e, o) {
      this.user = e.get({
          userId: t.userId
      }), this.posts = o.byUser({
          userId: t.userId
      })
  }]
});
