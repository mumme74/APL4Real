/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.service("getService", function ($http, $q) {

    this.getLoggar = function (id_token) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/elev/allaLoggar";
        $http({method: "GET", url: url, data: id_token}).success(function (data, status) {
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };

});