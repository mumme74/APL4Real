/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.service("larareNarvaroGetService", function ($q){

    this.url = SERVER_URL;
    
    this.getGodkandNarvaro = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/narvaro/godkand",
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

});
