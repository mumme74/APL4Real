/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("registrationCtrl",function ($scope, loggService){
    var promise = loggService.getData();
    promise.then(function(data){
        $scope.data = data;
        console.log (data); 
    });
    
        $scope.update = function (){
      var promise = loggService.getData($scope.klasserna);
        promise.then(function (data){
        $scope.data = data;
    });   
    };
    
    $scope.sendReg = function(){
        loggService.postLogg($scope.namn, $scope.telnr, $scope.klasserna);
        $scope.logg="";
        console.log($scope);
    };
     
});

module.service("loggService",function ($http,$q){
    this.getData = function(){
        var deferred = $q.defer();
        var url = "";
        if(typeof name === "string" && name.length > 0){
            url+="?name="+name;
        }
        $http.get(url).success(function(data){
           deferred.resolve(data); 
        });
        return deferred.promise;
    };
    
        //hämta klasserna
        
        this.getKlass = function(){
        var deferred = $q.defer();
        var url = "";
        $http.get(url).success(function(data){
            deferred.resolve(data);
        });
        return deferred.promise;
    };
});
