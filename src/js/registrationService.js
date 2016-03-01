/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.service("registrationService", function ($http, $q) {
    this.postRegistration = function (google_id, namn, klass, tfnr) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/user";
        var data = {
            id: google_id,
            namn: namn,
            tfnr: tfnr,
            klass: parseInt(klass)
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


    this.getKlasser = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/klass"; //<----?
        $http({method: "GET", url: url}).success(function (data, status) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };
        this.getProgram = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/program"; //<----?
        $http({method: "GET", url: url}).success(function (data, status) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };
});
