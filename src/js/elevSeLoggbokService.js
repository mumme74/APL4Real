/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("getServiceLoggar", function ($http, $q) {

    this.url = SERVER_URL + "/elev";
    
    this.getLoggar = function (id_token) {
        console.log("hello?");
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/allaLoggar",
            type: 'GET',
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                console.log("wat!");
                deferred.resolve(data);
            },
            error: function (data) {
                console.log("hello!");
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };

});
