/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.controller("momentCtrler", function ($scope, momentService, globalService) {

    var url = SERVER_URL + "moment";
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    //Klasser
    $scope.id_token = "";
    var promiseKlasser = momentService.getKlasser();
    promiseKlasser.then(function (data) {
        $scope.klasser = data;
        console.log(data);
    });

    var promiseMomentLärare = momentService.getMomentLärare(id_token);
    promiseMomentLärare.then(function (data) {
        $scope.lararMoment = data;
        console.log("LärareSeMoment");
        console.log(data);
    });

    // hämta elever använder ng-change för att uppdatera
    $scope.updateraElevLista = function () {

        var promiseElever = momentService.getElevFranKlass(id_token, $scope.sokKlass);
        promiseElever.then(function (data) {
            $scope.eleverna = data;
            console.log(data);
        });
    };

    //hämta moment använder ng-change för att uppdatera
    $scope.updateraElevsMoment = function () {
        var elev_id_input = parseInt($scope.sokElev);
        console.log(elev_id_input);
        var elev_id = {"elev_id": elev_id_input};
        console.log(elev_id);
        var obj = JSON.stringify(elev_id);
        var promiseMoment = momentService.getMoment(id_token, obj);
        promiseMoment.then(function (data) {
            $scope.moment = data;
            console.log(data);
        });
    };

    $scope.handledareSeMoment = function () {
        console.log("SeallaMoment");
        var obj = JSON.stringify();
        var promiseAllaMoment = momentService.handledareSeMoment(anvandare, obj);
        promiseAllaMoment.then(function (data) {
            $scope.momentena = data;
            console.log(data);
        });
    };

    $scope.parseMoment = function (p) {
        console.log(p);
        if (p === 0) {
            return "Ej avklarad";
        } else if (p === 1) {
            return "Väntande svar";
        } else if (p === 2) {
            return "Avklarad";
        } else if (p === 3) {
            return "Nekad";
        }
    };

    $scope.sparaMoment = function () {
        var innehall = document.getElementById("momentInnehall").value;
        if (innehall.toString().trim() !== "") {
            var data = {"beskrivning": innehall};
            globalService.skickaData("/moment", data).then(function (responses) {
                console.log(responses);
            });
            document.getElementById("momentInnehall").value = "";
            location.reload();
        }
    };
});
