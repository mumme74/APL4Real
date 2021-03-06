/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global SERVER_URL */

module.service("larareSeNarvaroService", function ($q, $http) {

    this.url = SERVER_URL;

    this.getGodkandNarvaro = function (id_token, klass_id) {
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: this.url + "/larare/klass/" + klass_id + "/narvaro",
            headers: {'Authorization': id_token}
        }).success(function (rdata, status, headers, config) {
            deferred.resolve(rdata);
        }).error(function (rdata, status, headers, config) {
            deferred.resolve(status);
        });
        return deferred.promise;
    };
});
