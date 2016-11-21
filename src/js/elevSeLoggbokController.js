/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller("elevSeLoggCtrl", function ($scope, getServiceLoggar, globalService) {
    if (globalService.isLoggedIn()) {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
        var promiseLoggar = getServiceLoggar.getLoggar(id_token);
        promiseLoggar.then(function (data) {
            console.log(data);
            $scope.loggar = data;
        });
    }
    $scope.show = function (e) {
        console.log("#" + e.$id + "_kommentarer");
        $(".kommentarContainer").not("#" + e.$id + "_kommentarer").slideUp();
        $("#" + e.$id + "_kommentarer").slideToggle();
    };
    $scope.getBildUrl = function (bild, storlek) {
        //tar bort citattecknen som kommer vem fan vet var ifrån
        bild = bild.substr(1, bild.length - 2);
        if (storlek)
            return IMG_SERVER_URL + "?file=" + bild + "&size=" + storlek;
        else
            return IMG_SERVER_URL + "?file=" + bild;
    };
});
