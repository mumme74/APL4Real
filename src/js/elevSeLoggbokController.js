/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller("elevSeLoggCtrl", function ($scope, getServiceLoggar) {
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    var promiseLoggar = getServiceLoggar.getLoggar(id_token);
    promiseLoggar.then(function (data){
        $scope.loggar = data;
    });
    $scope.getBildUrl = function (bild) {
        //tar bort citattecknen som kommer vem fan vet var ifrån
        bild = bild.substr(1, bild.length - 2);
        return "//10.97.72.5/fileload/uploads/" + bild;
    };
});
