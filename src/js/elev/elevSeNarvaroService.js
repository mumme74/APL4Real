/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global SERVER_URL */

module.service("elevNarvaroGetService", function ($q, $http) {

    this.url = SERVER_URL;

    this.getNarvaro = function (id_token) {
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: this.url + "/elev/narvaro",
            headers: {'Authorization': id_token}
        }).success(function (rdata, status, headers, config) {
            deferred.resolve(rdata);
        }).error(function (rdata, status, headers, config) {
            deferred.resolve(status);
        });
        return deferred.promise;
    };
});
