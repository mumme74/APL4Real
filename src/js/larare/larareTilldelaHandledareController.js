/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareTilldelaHandledareCtrl", function ($scope, $window, larareService, globalService) {
    $scope.getPeople = function () {
        if (globalService.isLoggedIn(true)) {
            var id_token = JSON.parse(localStorage.anvandare).id_token;
            larareService.getAnvandarensElever(id_token).then(function (data) {
                $scope.elever = data;
            });
            larareService.getHL(id_token).then(function (data) {
                console.log(data);
                $scope.handledare = data;
            });
        }
    };
    $scope.kopplaElevHandledare = function () {
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        var elever = $scope.elever;
        var array = [];
        for (var i = 0; i < elever.length; i++) {
            if (elever[i].ny_handledare !== elever[i].hl_id)
            {
                array.push({
                    "elev_id": elever[i].ID,
                    "handledare_id": elever[i].ny_handledare
                });
            }
        }
        if (array.length > 0) {
            var targetUrl = "/larare/koppla";
            globalService.skickaData(targetUrl, array).then(function (responses) {
                if (responses[0].status < 200 || responses[0].status > 299) {
                    globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
                } else {
                    globalService.notify("Elevernas handledare har uppdaterats.", "success");
                }
            });
        }
    };
});

