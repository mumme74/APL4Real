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
    $scope.getEleverna = function () {
//        var id_token = JSON.parse(localStorage.anvandare).id_token;
        var promiseEleverna = momentService.getEleverna();
        momentService.getEleverna(id_token).then(function (data) {
            $scope.elever = data;
        });
    };
    
});
