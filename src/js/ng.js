

module.service("natverkService", function ($http,$q){
    this.getNatverk = function (){
        var deferred = $q.defer();
        var url = SERVER_URL + "/handledare/natverk";
        $http({method:"GET",url:url}).success(function (data){
            console.log(data);
            deferred.resolve(data);
        }).error(function (data,status){
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };
});

module.controller("natverkCtrl", function ($scope, natverkService){
    var promiseNatverk = natverkService.getNatverk();
    promiseNatverk.then(function (data){
        $scope.program = data;
    });
});

//module.controller("natverkCtrl",function($scope, $http){
//    $http.get("http://10.97.72.5:8080/aplBackend/webresources/elev").success(function(data){
//        $scope.elever = data;
//
//    });
//    $http.get("http://10.97.72.5:8080/aplBackend/webresources/handledare").success(function (data) {
//        $scope.handledare = data;
//    });
//
//    $http.get("http://10.97.72.5:8080/aplBackend/webresources/handledare/program").success(function (data) {
//        $scope.program = data;
//    });
//});
