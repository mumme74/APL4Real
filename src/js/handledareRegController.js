/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller("handledareRegCtrl", function ($scope, registrationService, globalService) {
    var promiseProgram = registrationService.getProgram();
    promiseProgram.then(function (data) {
        $scope.programs = data;
    });
    $scope.registreraHandledare = function () {
        var användarnamn = $scope.username;
        var lösenord = $scope.password;
        var email = $scope.email;
        var tfnr = $scope.phone;
        var namn = $scope.name;
        var foretag = $scope.frtg;
        var program = parseInt($scope.pr);
        var url = "/apl/handledare";
        var data = {
            anvandarnamn: användarnamn,
            losenord: lösenord,
            email: email,
            tfnr: tfnr,
            namn: namn,
            foretag: foretag,
            program_id: program
        };
        globalService.skickaData(url, data).then(function (responses) {
            if (responses[0].status < 200 || responses[0].status > 299) {
                globalService.notify("Ett fel inträffade, datan kommer skickas automatiskt.", "info");
            }
        });
    };
});
