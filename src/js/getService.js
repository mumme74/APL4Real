/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global SERVER_URL */

module.service("getService", function ($q) {
    this.url = SERVER_URL + "/get";
    this.getElever = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/elever",
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
    
    this.getHandledare = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/handledare",
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
    
    this.getAktiviteter = function (basic_auth) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/aktiviteter",
            type: 'get',
            headers: {
                "Authorization": basic_auth
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
});
