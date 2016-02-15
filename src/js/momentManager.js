/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.controller("momentCtrler", function ($scope, momentService) {

    //Klasser
    $scope.id_token = "";
    var promiseKlasser = momentService.getKlasser();
    promiseKlasser.then(function (data) {
        $scope.klasser = data;
        console.log(data);
    });
    //elever
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    var promiseLoggar = momentService.getElever(id_token);
    promiseLoggar.then(function (data){
        $scope.eleverna = data;
        console.log(data);
    });
    
    
});
