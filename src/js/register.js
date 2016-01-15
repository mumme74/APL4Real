/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.service("loggService",function ($http,$q){
    var deferred = $q.defer();
    var url = "";
    $http.get(url).success(function (data){
        deferred.resolve(data);
    });
    return deferred.promise;  
});


module.controller("readCtrl",function ($scope, loggService){
    var promise = loggService.getData();
    promise.then(function(data){
       $scope.data = data;
       console.log(data);
    });
});




