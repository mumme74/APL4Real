/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.controller("momentCtrl", function ($scope, momentService) {
    
    //Klasser
    console.log("hello world!");
    $scope.id_token = "";
    var promiseKlasser = momentService.getKlasser();
    promiseKlasser.then(function (data) {
        $scope.klasser = data;
        console.log(data);
    });
    //elever
    $scope.id_token = "";
    var promiseElever = momentService.getElever();
    promiseElever.then(function (data) {
        $scope.elever = data;
        console.log(data);
    });
    
    //moment
    $scope.id_token = "";
    var promiseMoment = momentService.getMoment();
    promiseMoment.then(function (data){
        $scope.moment = data;
        console.log(data);
    }); 
});
