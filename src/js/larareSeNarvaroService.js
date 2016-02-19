/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global SERVER_URL */

module.service("larareNarvaroGetService", function ($q, $http) {

    this.url = SERVER_URL;

    this.getGodkandNarvaro = function (id_token, data) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            url: this.url + "/narvaro/godkand",
            data: JSON.stringify(data),
            headers: {'Authorization': id_token}
        }).success(function (rdata, status, headers, config) {
            deferred.resolve(rdata);
        }).error(function (rdata, status, headers, config) {
            deferred.resolve(status);
        });
        return deferred.promise;
    };
});
