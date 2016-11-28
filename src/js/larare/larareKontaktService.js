/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("larareKontaktService", function ($q){
    this.url = SERVER_URL + "/info/larare/kontakt";
    
    this.getKontakt = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url,
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

