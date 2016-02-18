/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareSeLoggCtrl", function ($scope, larareloggGetService, larareEleverService) {
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;

    var promiseLoggar = larareEleverService.getElever(id_token);
    promiseLoggar.then(function (data) {
        $scope.elever = data;
    });

    $scope.getElev = function () {
       
        var promiseLoggar = larareloggGetService.getLoggar(id_token,$scope.valdElev);
        promiseLoggar.then(function (data) {
            $scope.loggar = data;
        });


    };
});
