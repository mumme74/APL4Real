/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("getServiceLoggar", function ($http, $q) {

    var url = "http://localhost:8080/aplBackend/webresources/elev";
    
    this.getLoggar = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: "http://localhost:8080/aplBackend/webresources/elev/allaLoggar",
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
