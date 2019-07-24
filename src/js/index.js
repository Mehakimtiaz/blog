var app = angular.module('myApp',['ngRoute']);
app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : " http://localhost:3000/users"
  }).then(function (response) {
      $scope.myData=response.data;
      $scope.id = response.id;
      $scope.firstname = response.firstname;
      $scope.post = response.post;
    });
});
app.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/post/:id',{
    templateUrl:'post.html',
    controller:'postcontroller'
  }).
  when('/name/:id', {
      templateUrl: 'name.html',
      controller: 'usercontroller'
  }).
  otherwise({
    redirectTo:'/post'
  });
}]);
app.controller('postcontroller',function($scope, $http,$routeParams) {
  $http({
    method : "GET",
    url : " http://localhost:3000/users"
  }).then(function (response) {

      $scope.myData=response.data;
      $scope.id= response.id;
      console.log($routeParams.id ); 
      if($routeParams.id==$scope.id)
      {
     
      $scope.firstname = response.firstname;
      $scope.post = response.post;
      $scope.description = response.description;
      }
    });
});
app.controller('usercontroller',function($scope, $http, $routeParams) {

   $http({
    method : "GET",
    url : " http://localhost:3000/users"
  }).then(function (response) {
     console.log($routeParams.id ); 
      $scope.myData=response.data;
      $scope.id= response.id;
      if($routeParams.id==$scope.id)
      {
      $scope.id = response.id;
      $scope.firstname = response.firstname;
      $scope.post = response.email;
      }
    });
});