/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.service("larareloggGetService", function ($q){

    this.url = SERVER_URL + "/larare/";
    
    this.getLoggar = function (id_token,elev_id) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "elev/"+elev_id+"/logg",
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

});

module.service("larareEleverService", function ($q){
    var url = SERVER_URL + "/larare";
    
    this.getElever = function (id_token){
        var deferred = $q.defer();
        $.ajax({
            url: url + "/elever",
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
    });
