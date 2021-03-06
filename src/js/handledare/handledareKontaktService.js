/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("handledareKontaktService", function ($q){
    this.url = SERVER_URL + "/info/handledare/kontakt";
    
    this.getKontakt = function (basic_auth) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url,
            type: 'GET',
            headers: {
                "Authorization": basic_auth,
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

