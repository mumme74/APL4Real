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
        var item = $scope.aktiviteter.splice(index, 1)[0];
        var url = "/handledare/godkann";
        var data = {
            id: item.id,
            elev_id: item.elev_id
        };
        $scope.skicka(url, data, item.typ);
    };
    $scope.neka = function (index) {
        console.log("Nekar " + index);
        var item = $scope.aktiviteter.splice(index, 1)[0];
        var url = "/handledare/neka";
        var data = {
            id: item.id,
            elev_id: item.elev_id
        };
        $scope.skicka(url, data, item.typ);
    };
    $scope.skicka = function (url, data, typ) {
        var urlTyp = $scope.parseUrlTyp(typ);
        if (urlTyp)
        {
            url += urlTyp;

            globalService.skickaData(url, data).then(function(responses){
                console.log(responses);
            });
        } else {
            alert("Något gick fel, kontakta support.");
        }
    };
});

