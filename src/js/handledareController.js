/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller("handledareCtrl", function ($scope, $window, getService, globalService) {
    $scope.logout = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        anvandare.losenord = "";
        localStorage.anvandare = JSON.stringify(anvandare);
        $window.location.href = "/handledare";
    };
    
    globalService.kollaStorage().then(function (responses) {
        console.log(responses);
    });
});
