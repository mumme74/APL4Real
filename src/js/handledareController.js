/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller("handledareCtrl", function ($scope, $window, getService, globalService) {
    $scope.logout = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        anvandare.losenord = "";
        localStorage.anvandare = JSON.stringify(anvandare);
        $window.location.href = "#/";
    };
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
    $scope.parseUrlTyp = function (i) {
        if (i === 0)
            return "/narvaro";
        else if (i === 1)
            return "/loggbok";
        else if (i === 2)
            return "/moment";
        else
            return false;
    };
    $scope.getAktiviteter = function () {
        var basic_auth = JSON.parse(localStorage.anvandare).basic_auth;
        getService.getAktiviteter(basic_auth).then(function (data) {
            $scope.aktiviteter = data;
        });
    };
    $scope.show = function (e) {
        $("#" + e.$id).slideToggle();
    };
    $scope.godkann = function (index) {
        console.log("Godkänner " + index);
        //Ta ut aktiviteten
        var item = $scope.aktiviteter.splice(index, 1)[0];
        $scope.skicka(item, 1);
    };
    $scope.neka = function (index) {
        console.log("Nekar " + index);
        var item = $scope.aktiviteter.splice(index, 1)[0];
        $scope.skicka(item, 2);
    };
    $scope.skicka = function (item, godkant) {
        var url = "/handledare/aktivitet";
        var data = {
            id: item.id,
            typ: item.typ,
            godkant: godkant
        };

        globalService.skickaData(url, data).then(function (responses) {
            console.log(responses);
        });
    };
    globalService.kollaStorage().then(function (responses) {
        console.log(responses);
    });
});

