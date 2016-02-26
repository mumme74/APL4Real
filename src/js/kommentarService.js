/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("kommentarService", function ($q){
    this.url = SERVER_URL + "/logg";
    
    this.getKommentar = function (id_token, logg_id) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + logg_id+"/kommentar",
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

