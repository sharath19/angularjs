var myApp= angular.module('myApp',[]);
myApp.controller('MyController',function MyController($scope){
   $scope.author = {
       'name':'Sharath',
       'title': 'Web Developer',
       'company': 'Alden Image'
   } ;
});