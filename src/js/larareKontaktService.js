/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("getLarareKontaktService", function ($q){
    var url = SERVER_URL + "/larare/kontakt";
    //var url = "localhost:8080/aplBackend/webresources/larare/kontakt";
    
    this.getKontakt = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: url,
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

