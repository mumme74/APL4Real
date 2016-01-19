var module = angular.module("elevHandledare",["ui.router"]);

module.controller("lärareCtrl",function($scope, $http){
    $http.get("http://10.97.72.5:8080/aplBackend/webresources/elev").success(function(data){
        $scope.elever = data;

    });
    $http.get("http://10.97.72.5:8080/aplBackend/webresources/handledare").success(function (data) {
        $scope.handledare = data;
    });

    $http.get("http://10.97.72.5:8080/aplBackend/webresources/handledare").success(function (data) {
        $scope.handledare = data;
        console.log(data);
        $scope.countList = [data];
        $scope.countSelected = $scope.countList[0].id;
        alert('Selected count ID: ' + $scope.countSelected);

        $scope.onchange = function (id) {
            alert("id:" + id.name);

        };

    });
});
