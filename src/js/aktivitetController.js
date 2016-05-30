/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.controller("aktivitetCtrl", function ($scope, $window, getService, globalService) {
    $scope.parseLjus = function (i) {
        if (i === 0)
            return "frånvarande";
        else if (i === 1)
            return "delvis närvarande";
        else if (i === 2)
            return "närvarande hela";
    };
    $scope.parseRubrik = function (i) {
        if (i === 0)
            return "Närvaro";
        else if (i === 1)
            return "Loggbok";
        else if (i === 2)
            return "Moment";
    };
    $scope.getBildUrl = function (bild, storlek) {
        //tar bort citattecknen som kommer vem fan vet var ifrån
        bild = bild.substr(1, bild.length - 2);
        if (storlek)
            return IMG_SERVER_URL + "?file=" + bild + "&size=" + storlek;
        else
            return IMG_SERVER_URL + "?file=" + bild;
    };
    $scope.getHandledareAktiviteter = function () {
        var basic_auth = JSON.parse(localStorage.anvandare).basic_auth;
        getService.getHandledareAktiviteter(basic_auth).then(function (data) {
            $scope.aktiviteter = data;
            console.log(data);
        });
    };
    $scope.getNekadeAktiviteter = function () {
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        getService.getNekadeAktiviteter(id_token).then(function (data) {
            $scope.aktiviteter = data;
            console.log(data);
        });
    };
    $scope.show = function (e) {
        $(".aktivitet").not("#" + e.$id).slideUp();
        $("#" + e.$id).slideToggle();
    };
    $scope.godkann = function (index) {
        console.log("Godkänner " + index);
        //Ta ut aktiviteten
        var item = $scope.aktiviteter.splice(index, 1)[0];
        $scope.skickaHandledare(item, 1);
    };
    $scope.neka = function (index) {
        console.log("Nekar " + index);
        var item = $scope.aktiviteter.splice(index, 1)[0];
        $scope.skickaHandledare(item, 2);
    };
    $scope.skickaHandledare = function (item, godkant) {
        var url = "/handledare/aktivitet";
        var data = {
            id: item.id,
            typ: item.typ,
            godkant: godkant
        };

        globalService.skickaData(url, data).then(function (responses) {
            if (responses[0].status < 200 || responses[0].status > 299) {
                globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
            }
        });
    };
    $scope.skickaMoment = function (index) {
        var item = $scope.aktiviteter.splice(index, 1)[0];
        var data = {
            id: item.id,
            typ: item.typ
        };
        $scope.skickaElev(data);
    };
    $scope.skickaLogg = function (index, text) {
        var item = $scope.aktiviteter.splice(index, 1)[0];
        var data = {
            id: item.id,
            typ: item.typ,
            innehall: text
        };
        $scope.skickaElev(data);
    };
    $scope.skickaNarvaro = function (index, trafikljus) {
        var item = $scope.aktiviteter.splice(index, 1)[0];
        var data = {
            id: item.id,
            typ: item.typ,
            trafikljus: parseInt(trafikljus)
        };
        $scope.skickaElev(data);
    };
    $scope.skickaElev = function (data) {
        var url = "/elev/aktivitet";
        globalService.skickaData(url, data).then(function (responses) {
            if (responses[0].status < 200 || responses[0].status > 299) {
                globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
            }
        });
    };
});

