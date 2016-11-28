/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global SERVER_URL */

module.service("handledareAktivitetService", function ($q) {
    this.url = SERVER_URL + "/get";
    this.getHandledareAktiviteter = function (basic_auth) {
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
