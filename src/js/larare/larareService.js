/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global SERVER_URL */

module.service("larareService", function ($q) {
    this.url = SERVER_URL + "/get/larare";
    this.getKlasser = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/klasser",
            type: 'GET',
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

    this.getAllaKlasser = function () {
        var url = SERVER_URL + "/apl/klass";
        var deferred = $q.defer();
        $.ajax({
            url: url,
            type: 'get',
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

    this.getAnvandarensElever = function (id_token){
        var deferred = $q.defer();
        $.ajax({
            url: SERVER_URL + "/larare/elever",
            type: 'GET',
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
            },
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
    
    this.getElever = function (id_token, klass_id) {
        var deferred = $q.defer();
        var data = {
            klass_id: klass_id
        };
        $.ajax({
            url: this.url + "/elever",
            type: 'POST',
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
            },
            data: JSON.stringify(data),
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

    this.getHL = function (id_token){
        var url = SERVER_URL + "/info/handledare/lista/alla";
        var deferred = $q.defer();
        $.ajax({
            url: url,
            type: 'GET',
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
            },
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
