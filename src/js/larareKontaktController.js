/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareKontaktCtrl", function ($scope, getLarareKontaktService, globalService) {
    if (globalService.isLoggedIn()) {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
        var promiseLoggar = getLarareKontaktService.getKontakt(id_token);
        promiseLoggar.then(function (data) {
            $scope.kontaktUppgifter = data;
            console.log(data);
        });
    }
});

