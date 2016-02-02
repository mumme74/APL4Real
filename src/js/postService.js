/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global SERVER_URL */

module.service("postService", function ($q) {
    this.url = SERVER_URL + "/post";

    this.updateElevHandledare = function (id_token, data) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/elevhandledare",
            type: 'post',
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
            },
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (data) {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };

    this.postLogg = function (id_token, datum, innehall, ljus) {
        var deferred = $q.defer();
        var data = {
            "datum": datum,
            "innehall": innehall,
            "ljus": ljus
        };
        $.ajax({
            url: this.url + "/logg",
            type: 'post',
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
            },
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (data) {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };
});
