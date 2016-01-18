var module = angular.module("elevHandledare",["ui.router"]);

module.controller("elevCtrl",function($scope, $http){
    console.log("inne i controller");
    $http.get("http://10.97.72.5:8080/aplBackend/webresources/elev").success(function(data){
        console.log(data);
        $scope.elever = data;
    });
});