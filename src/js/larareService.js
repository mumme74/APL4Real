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
    
    this.getElever = function (id_token, data) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/elever",
            type: 'post',
            headers: {
                "Authorization": id_token
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
});
