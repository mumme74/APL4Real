/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global SERVER_URL */

module.service("loginService", function ($q) {
    this.url = SERVER_URL + "/apl/login";
    this.logInGoogle = function (id_token) {
        var deferred = $q.defer();
        var data = {
            "id": id_token
        };
        $.ajax({
            url: this.url,
            type: 'post',
            data: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data.status);
            },
            fail: function (data, status) {
                deferred.resolve(status);
            },
            always: function (data, status) {
                deferred.resolve(status);
            },
            error: function (data)
            {
                deferred.resolve(data.status);
            }
        });
        return deferred.promise;
    };
    this.logInHandledare = function (användarnamn, lösenord) {
        var deferred = $q.defer();
        var data = {
            "användarnamn": användarnamn,
            "lösenord": lösenord
        };
        $.ajax({
            url: this.url,
            type: 'post',
            data: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data.status);
            },
            fail: function (data, status) {
                deferred.resolve(status);
            },
            always: function (data, status) {
                deferred.resolve(status);
            },
            error: function (data)
            {
                deferred.resolve(data.status);
            }
        });
        return deferred.promise;
    };
});