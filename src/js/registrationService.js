/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.service("registrationService", function ($http, $q) {
    this.postRegistration = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/user";
        var data = {id:parseInt($scope.getId()), //<----?
                    namn:String($scope.nnm),
                    telnr:String($scope.tfl),
                    klass:parseInt($scope.kl)
        };
        $http.post(url, data).then(
                function successCallback(response) {
                    console.log("fungerar!");
                    deferred.resolve(response.status);
                },
                function errorCallback(response) {
                    console.log("Fungerar inte!!");
                    deferred.resolve(response.status);
                }
        );

        return deferred.promise;
    };
    
    
    this.getKlasser = function (){
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/klass"; //<----?
        $http({method:"GET",url:url}).success(function (data,status){
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
