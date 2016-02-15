/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.service("momentService", function ($http, $q){
      
    //Klasser  
    this.getKlasser = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/klass";
        $http({method: "GET", url: url}).success(function (data, status) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };
    
    //Elever
    this.getElever = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/elev"; 
        $http({method: "GET", url: url}).success(function (data, status) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };


    //Moment
    this.getMoment = function () {
        var deffered = $defer();
        var url = SERVER_URL + "/moment";
        $http({method: "GET", url: url}).success(function (data, status) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    
    
    };
 });
