

module.controller("postNarvaroCtrl", function ($scope, narvaroService) {

    $scope.skickaNarvaro = function () {
        console.log("skicka!");
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        $scope.datum.setHours(12);
        var datum = $scope.datum.toISOString().substring(0, 10);
        var trafikljus = $scope.ljus;
        var array = {
            "trafikljus": trafikljus,
            "datum": datum
        };
        

        var promise = narvaroService.postNarvaro(id_token, array);
        promise.then(function (response) {
            console.log(response);
            location.reload();
        });

    };
    $scope.getLjus = function (ljus) {
        if (ljus === "rod")
            $scope.ljus = 0;
        else if (ljus === "gul")
            $scope.ljus = 1;
        else
            $scope.ljus = 2;
        $(".vald").removeClass("vald");
        $("." + ljus).addClass("vald");

    };
});

module.service("narvaroService", function ($http, $q)
{
//    this.getNarvaro = function(){
//        var deferred =$q.defer();
//        var url= "http://10.97.72.5:8080/aplBackend/webresources/narvaro";
//        $http({method:"GET",url:url})
//        .success(function (data,status){
//        console.log(data);
//        deferred.resolve(data);
//        }).error(function (data,status){
//        console.log("ERROR");
//        console.log(status);
//        deferred.reject();
//    });
//    return deferred.promise;
//    };
//
//    this.getElev = function(){
//        var deferred =$q.defer();
//        var url= "http://10.97.72.5:8080/aplBackend/webresources/elev";
//        $http({method:"GET",url:url})
//        .success(function (data,status){
//        console.log(data);
//        deferred.resolve(data);
//        }).error(function (data,status){
//        console.log("ERROR");
//        console.log(status);
//        deferred.reject();
//    });
//    return deferred.promise;
//    };

    this.postNarvaro = function (id_token, data) {

        var deferred = $q.defer();
        var base_url = SERVER_URL;
        var url = base_url + "/narvaro/post";


        $http({
            method: "POST",
            url: url,
            data: JSON.stringify(data),
            headers: {'Authorization': id_token}
        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };
});
