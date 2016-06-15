/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("kommentarCtrl", function ($scope, globalService) {
    var url = "/logg";
    $scope.postKommentar = function (logg_id) {
        var kommentar = document.getElementById(logg_id).value.trim();
        if (kommentar !== "")
        {
            var datumObj = new Date();
            var datum = datumObj.getFullYear() + "-"
                    + (datumObj.getMonth() + 1) + "-"
                    + datumObj.getDate() + " "
                    + datumObj.getHours() + ":"
                    + ('0' + datumObj.getMinutes()).slice(-2);
            var data = {"loggbok_id": logg_id, "innehall": kommentar, "datum": datum};

            globalService.skickaData(url + "/kommentar", data).then(function (responses) {
                if (responses[0].status < 200 || responses[0].status > 299) {
                    globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
                }
            });
            document.getElementById(logg_id).value = "";
        }
    };
});
