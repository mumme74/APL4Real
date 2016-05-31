/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("redigeraService", function ($q){    
    this.getHL = function (id_token){
        var url = SERVER_URL + "/info/handledare/lista";
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
    
    this.getElever = function (id_token){
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
    
    this.getElevInfo = function (id_token, elev_id){
        var deferred = $q.defer();
        var url = SERVER_URL + "/info/elev/" + elev_id;
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
    
    this.getHLInfo = function (id_token, HL_id){
        var deferred = $q.defer();
        var url = SERVER_URL + "/info/handledare/"+HL_id;
        $.ajax({
            url: url,
            type: 'POST',
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
