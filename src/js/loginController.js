/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("loginCtrl", function ($window, $scope, loginService) {
    $scope.onSignIn = function (googleUser) {
        console.log("logging in");
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        var promise = loginService.logInGoogle(id_token);
        promise.then(function (status) {
            if (status === 412) {
                console.log("register");
                $window.location.href = "#/registration";
            } else if (status === 200) {
                console.log("logged in");
                alert("Du är inloggad!");
            } else {
                console.log("error: Status "+status);
            }
        });
    };
    window.onSignIn = $scope.onSignIn;
});

