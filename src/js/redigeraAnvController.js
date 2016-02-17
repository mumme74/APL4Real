/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("redigeraCtrl", function ($scope, redigeraService, globalService) {
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;

    $scope.laddaAnv = function () {
        var promiseHL = redigeraService.getHL(id_token);
        promiseHL.then(function (data) {
            $scope.HLLista = data;
        });
        
        var promiseElever = redigeraService.getElever(id_token);
        promiseElever.then(function (data) {
            $scope.EleverLista = data;
        });
    };

    $scope.laddaElev = function () {
        var elev_id = $scope.ddElever;
        var obj = {"elev_id": elev_id};
        var promiseElev = redigeraService.getElev(id_token, obj);
        promiseElev.then(function (data) {
            $scope.elevObj = data;
        });
    };

    $scope.laddaHL = function () {
        var hl_id = $scope.ddHandledare;
        var obj = {"hl_id": hl_id};
        var promiseElev = redigeraService.getHL(id_token, obj);
        promiseElev.then(function (data) {
            $scope.HLObj = data;
        });
    };

    $scope.sparaHL = function () {
        var url = "/redigera/handledare";
        var ID = $scope.ddHandledare;
        var namn = $scope.HLnamn;
        var tfnr = $scope.HLtfnr;
        var email = $scope.HLemail;
        var program_id = $scope.HLp_id;
        var företag = $scope.HLforetag;
        var användarnamn = $scope.HLanvnamn;
        var lösenord = $scope.HLlosen;

        var data = {ID: ID, "namn": namn, "tfnr": tfnr, "email": email,
            program_id: program_id, "foretag": företag, "anvnamn": användarnamn,
            "losenord": lösenord};

        globalService.skickaData(url, data).then(function (responses) {
            console.log(responses);
        });
    };

    $scope.sparaElev = function () {
        var url = "/redigera/elev";
        var ID = $scope.ddElev;
        var namn = $scope.elevnamn;
        var tfnr = $scope.elevtfnr;
        var email = $scope.elevemail;
        var klass = $scope.elevKlass;
        var handledar_id = $scope.elevHL_id;
        var data = {ID: ID, "namn": namn, "tfnr": tfnr, "email": email,
            klass: klass, hl_id: handledar_id};
        globalService.skickaData(url, data).then(function (responses) {
            console.log(responses);
        });
    };
});
