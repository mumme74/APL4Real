/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//global för att ändringar i $scope aldrig stannade kvar
var gbild;
module.controller("elevCtrl", function ($scope, $window, postService, globalService) {
    $scope.logout = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        anvandare.id_token = "";
        localStorage.anvandare = JSON.stringify(anvandare);
        $window.location.href = "#/logout";
    };
    $scope.postLogg = function () {
        //Tidszon fix
        if (!$scope.datum) {
            return globalService.notify("Du måste fylla i datum.", "danger");
        }
        $scope.datum.setHours(12);
        //Göra om till databasens Date
        var datum = $scope.datum.toISOString().substring(0, 10);
        var innehall = $scope.text;
        var ljus = $scope.ljus;
        var bild = gbild;
        if (!bild)
            bild = null;
        if (datum && innehall && ljus >= 0) {
            postService.postLogg(datum, innehall, ljus, bild)
                    .then(function (responses) {
                        status = responses[0].status;
                        if (status == 201) {
                            $window.location.href = "#/elev";
                        } else if (status == 500) {
                            globalService.notify("Ett okänt fel inträffades på servern", "danger");
                        } else if (status == 401) {
                            globalService.notify("Du verkar inte vara inloggad längre. Försök logga in igen", "danger");
                        }
                        gbild = undefined;
                    });
        } else {
            globalService.notify("Du måste fylla i datum, innehåll och upplevelse av dagen.", "danger");
        }
    };
    $scope.valj = function (ljus) {
        if (ljus === "rod")
            $scope.ljus = 0;
        else if (ljus === "gul")
            $scope.ljus = 1;
        else
            $scope.ljus = 2;
        $(".vald").removeClass("vald");
        $("." + ljus).addClass("vald");
    };
    $scope.onImgUrl = function (responseText, statusText, xhr, $form) {
        console.log(responseText.filename);
        gbild = responseText.filename;
        $("#loggimg").attr("src", $scope.getBildUrl("\"" + gbild + "\""));
    };
    $scope.getBildUrl = function (bild, storlek) {
        //tar bort citattecknen som kommer vem fan vet var ifrån
        bild = bild.substr(1, bild.length - 2);
        if (storlek)
            return IMG_SERVER_URL + "?file=" + bild + "&size=" + storlek;
        else
            return IMG_SERVER_URL + "?file=" + bild;
    };
    window.onImgUrl = $scope.onImgUrl;
    globalService.kollaStorage().then(function (responses) {
        //console.log(responses);
    });
});

