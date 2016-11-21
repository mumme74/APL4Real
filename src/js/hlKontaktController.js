/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("hlKontaktCtrl", function ($scope, hlKontaktService, globalService) {
    if (globalService.isLoggedIn()) {
        var anvandare = JSON.parse(localStorage.anvandare);
        var basic_auth = anvandare.basic_auth;
        var promiseLoggar = hlKontaktService.getKontakt(basic_auth);
        promiseLoggar.then(function (data) {
            $scope.kontakter = data;
        });
    }
});

