/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller("handledareCtrl", function ($scope, $window, globalService) {
    $scope.logout = function () {
        if (globalService.isLoggedIn(true, true)) {
            var anvandare = JSON.parse(localStorage.anvandare);
            anvandare.id_token = "";
            localStorage.anvandare = JSON.stringify(anvandare);
            $window.location.href = "#/logout";
        }
        else if (globalService.isLoggedIn(false, true)) {
            var anvandare = JSON.parse(localStorage.anvandare);
            anvandare.basic_auth = "";
            localStorage.anvandare = JSON.stringify(anvandare);
            $window.location.href = "/handledare";
        } else {
            $window.location.href = "#";
        }
    };

    globalService.kollaStorage().then(function (responses) {
        console.log(responses);
    });
});
