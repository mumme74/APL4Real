/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global SERVER_URL */

module.service("elevAktivitetService", function ($q) {
    this.url = SERVER_URL + "/get";
    this.getNekadeAktiviteter = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/nekade_aktiviteter",
            type: 'get',
            headers: {
                "Authorization": id_token
            },
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (data)
            {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };

    this.raderaLogg = function (id_token, id) {
        var deferred = $q.defer();
        $.ajax({
            url: SERVER_URL + "/elev/logg/radera/" + id,
            type: 'DELETE',
            headers: {
                "Authorization": id_token
            },
            success: function (data, status) {
                deferred.resolve(status);
            },
            error: function (data, status, jqXHR) {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };

    this.raderaNarvaro = function (id_token, id) {
        var deferred = $q.defer();
        $.ajax({
            url: SERVER_URL + "/narvaro/radera/" + id,
            type: 'DELETE',
            headers: {
                "Authorization": id_token
            },
            success: function (data, status) {
                deferred.resolve(status);
            },
            error: function (data, status, jqXHR) {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    };
});
