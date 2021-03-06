/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareRedigeraAnvCtrl", function ($scope, larareRedigeraAnvService, globalService, larareService) {
    var id_token;
    if (globalService.isLoggedIn(true)) {
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
        larareService.getHL(id_token).then(function (data) {
            $scope.HLLista = data;
            console.log(data);
        });

        larareService.getAnvandarensElever(id_token).then(function (data) {
            $scope.EleverLista = data;
        });

        larareService.getAllaKlasser().then(function (data) {
            $scope.klasser = data;
        });
    };

    $scope.laddaElev = function () {
        var elev_id = parseInt($scope.ddElev);
        larareRedigeraAnvService.getElevInfo(id_token, elev_id).then(function (data) {
            $scope.elevObj = data;
            $scope.elevklass = data.klass;
            console.log(data.hl_id);
            $scope.elevHL_id = data.hl_id;

        });
    };

    $scope.laddaHL = function () {
        var hl_id = parseInt($scope.ddHandledare);
        larareRedigeraAnvService.getHLInfo(id_token, hl_id).then(function (data) {
            $scope.HLObj = data;
            console.log(data);
        });
    };

    $scope.sparaHL = function () {
        var url = "/larare/handledare/redigera";
        var id = parseInt($scope.ddHandledare);
        var namn = document.getElementById("HLnamn").value;
        var tfnr = document.getElementById("HLtfnr").value;
        var email = document.getElementById("HLemail").value;
        var företag = document.getElementById("HLforetag").value;
        var användarnamn = document.getElementById("HLanvnamn").value;
        var lösenord = document.getElementById("HLlosen").value;

        var data = {
            id: id,
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
        var url = "/larare/elev/redigera";
        var id = parseInt($scope.ddElev);
        var namn = document.getElementById("elevnamn").value;
        var tfnr = document.getElementById("elevtfnr").value;
        var email = document.getElementById("elevemail").value;
        var klass = parseInt($scope.elevklass);
        var handledar_id = parseInt($scope.elevHL_id);
        var data = {
            id: id,
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
