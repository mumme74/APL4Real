/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("kommentarCtrl", function ($scope, globalService, kommentarService) {
    var url = "/kommentar";
    $scope.postKommentar = function (logg_id) {
        var datumObj = new Date();
        var datum = datumObj.getFullYear() + "-"
                + (datumObj.getMonth() + 1) + "-"
                + datumObj.getDate() + " "
                + datumObj.getHours() + ":"
                + ('0' + datumObj.getMinutes()).slice(-2);
        var kommentar = document.getElementById(logg_id).value;
        var data = {"loggbok_id": logg_id, "innehall": kommentar, "datum": datum};
        globalService.skickaData(url + "/postKommentar", data).then(function (responses) {
            console.log(responses);
        });
        document.getElementById(logg_id).value = "";
    };
    $scope.laddaKommentar = function (logg_id) {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
        var objekt = JSON.stringify({"loggbok_id": logg_id});
        var promiseKommentar = kommentarService.getKommentar(id_token, objekt);
        promiseKommentar.then(function (data) {
            var kommentarer = data;
            var html = "";
            for (var i = 0; i < kommentarer.length; i++) {
                var obj = kommentarer[i];
                var datum = obj.datum;
                datum = datum.substring(0, 16);
                html += "<div class='alert alert-link well ridge'><h4>";
                html += obj.namn+  "<span class='small'>  "+ datum+"</span></h4>";
                html += "<p>"+obj.innehall+"<p></div>";
            }
            document.getElementById(logg_id+"kommentar").innerHTML = html;
        });
    };
});
