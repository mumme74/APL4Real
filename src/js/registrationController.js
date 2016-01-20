/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("registrationCtrl", function ($scope, $window, registrationService) {
//    var promise = registrationService.getData();
//    promise.then(function(data){
//        $scope.data = data;
//        console.log (data); 
//    });
    $scope.id_token = "";
    var promiseKlasser = registrationService.getKlasser();
    promiseKlasser.then(function (data) {
        $scope.klasser = data;
    });


    $scope.postRegistration = function () {
        var google_id = $scope.id_token;
        var namn = $scope.nmn;
        var klass = $scope.kl;
        var tfnr = $scope.tfl;
        console.log(google_id, namn, klass, tfnr);
        if (google_id !== "")
        {
            var promise = registrationService.postRegistration(google_id, namn, klass, tfnr);
        }
        promise.then(function (response) {
            console.log(response.status);
        });
    };
    $scope.googleLogin = function (googleAnvändare) {
        console.log("googlelogin");
        $scope.id_token = googleAnvändare.getAuthResponse().id_token;
        console.log($scope.id_token);
    };
    window.onSignIn = $scope.googleLogin;
});





