/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("elevKontaktCtrl", function ($scope, elevKontaktService, globalService) {
    if (globalService.isLoggedIn(true)) {
        var anvandare = JSON.parse(localStorage.anvandare);
        var id_token = anvandare.id_token;
        var promiseLoggar = elevKontaktService.getKontakt(id_token);
        promiseLoggar.then(function (data) {
            $scope.kontakter = data;
        });
    }
});
