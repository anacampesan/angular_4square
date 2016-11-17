var client = angular.module('client', []);

client_id = "";
client_secret = "";
base_url = "https://api.foursquare.com/v2/";

client.controller("connection", function($scope, $http){
  url = base_url + "venues/search?ll=40.7,-74&client_id=" + client_id + "&client_secret=" + client_secret + "&v=20161116";
  $scope.content = [];
  $http.get(url).success(function(data){
    $scope.content = data;
  });
});
