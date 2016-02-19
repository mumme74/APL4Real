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

    // hämta elever använder ng-change för att uppdatera
    $scope.updateraElevLista = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
        var promiseElever = momentService.getElevFranKlass(id_token, $scope.sokKlass);
        promiseElever.then(function (data) {
            $scope.eleverna = data;
            console.log(data);
        });
    };

    //hämta moment använder ng-change för att uppdatera
    $scope.updateraElevsMoment = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
        var elev_id_input = parseInt($scope.sokElev);
        console.log(elev_id_input);
        var elev_id = {"elev_i d":elev_id_input};
        console.log(elev_id);
        var obj = JSON.stringify(elev_id);
        var promiseMoment = momentService.getMoment(id_token, obj);
        promiseMoment.then(function (data) {
            $scope.moment = data;
            console.log(data);
        });
    };

    $scope.handledareSeMoment = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        console.log("SeallaMoment");
        var obj = JSON.stringify();
        var promiseAllaMoment = momentService.handledareSeMoment(anvandare, obj);
        promiseAllaMoment.then(function (data) {
            $scope.momentena = data;
            console.log(data);
        });
    };

});
