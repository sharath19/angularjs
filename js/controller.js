var myApp= angular.module('myApp',[]);
myApp.controller('Rendersdata', function renderdata($scope,$http){
    $http.get('js/dataset.json').success(function(data){
         $scope.restaurant = data;
    })
   
    
})