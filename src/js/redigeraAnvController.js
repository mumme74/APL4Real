/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("redigeraCtrl", function ($scope, redigeraService,
        globalService, momentService) {
    var id_token;
    if (globalService.isLoggedIn()) {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
    }

    $scope.rensa = function () {
        $scope.ddHandledare = -1;
        document.getElementById("HLnamn").value = "";
        document.getElementById("HLtfnr").value = "";
        document.getElementById("HLemail").value = "";
        document.getElementById("HLforetag").value = "";
        document.getElementById("HLanvnamn").value = "";
        document.getElementById("HLlosen").value = "";
        $scope.HLp_id = -1;

        $scope.ddElev = -1;
        document.getElementById("elevnamn").value = "";
        document.getElementById("elevtfnr").value = "";
        document.getElementById("elevemail").value = "";
        $scope.elevklass = -1;
        $scope.elevHL_id = -1;
    };

    $scope.laddaAnv = function () {
        redigeraService.getHL(id_token).then(function (data) {
            $scope.HLLista = data;
            console.log(data);
        });

        var promiseElever = redigeraService.getElever(id_token);
        promiseElever.then(function (data) {
            $scope.EleverLista = data;
        });

        var promiseKlasser = momentService.getKlasser();
        promiseKlasser.then(function (data) {
            $scope.klasser = data;
        });
    };

    $scope.laddaElev = function () {
        var elev_id = parseInt($scope.ddElev);
        redigeraService.getElevInfo(id_token, elev_id).then(function (data) {
            $scope.elevObj = data;
            $scope.elevklass = data.klass;
            console.log(data.hl_id);
            $scope.elevHL_id = data.hl_id;

        });
    };

    $scope.laddaHL = function () {
        var hl_id = parseInt($scope.ddHandledare);
        var promiseElev = redigeraService.getHLInfo(id_token, hl_id);
        promiseElev.then(function (data) {
            $scope.HLObj = data;
            console.log(data);
        });
    };

    $scope.sparaHL = function () {
        var url = "/redigera/handledare";
        var ID = parseInt($scope.ddHandledare);
        var namn = document.getElementById("HLnamn").value;
        var tfnr = document.getElementById("HLtfnr").value;
        var email = document.getElementById("HLemail").value;
        var företag = document.getElementById("HLforetag").value;
        var användarnamn = document.getElementById("HLanvnamn").value;
        var lösenord = document.getElementById("HLlosen").value;

        var data = {
            ID: ID,
            namn: namn,
            tfnr: tfnr,
            email: email,
            foretag: företag,
            anvnamn: användarnamn,
            losenord: lösenord
        };

        globalService.skickaData(url, data).then(function (responses) {
            if (responses[0].status < 200 || responses[0].status > 299) {
                globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
            }
            $scope.rensa();
        });
    };

    $scope.sparaElev = function () {
        var url = "/redigera/elev";
        var ID = parseInt($scope.ddElev);
        var namn = document.getElementById("elevnamn").value;
        var tfnr = document.getElementById("elevtfnr").value;
        var email = document.getElementById("elevemail").value;
        var klass = parseInt($scope.elevklass);
        var handledar_id = parseInt($scope.elevHL_id);
        var data = {
            ID: ID,
            namn: namn,
            tfnr: tfnr,
            email: email,
            klass: klass,
            hl_id: handledar_id
        };
        globalService.skickaData(url, data).then(function (responses) {
            if (responses[0].status < 200 || responses[0].status > 299) {
                globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
            }
            $scope.rensa();
        });
    };
});
