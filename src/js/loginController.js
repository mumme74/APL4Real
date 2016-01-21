/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("loginCtrl", function ($window, $scope, loginService) {
    $scope.googleLogin = function (googleAnvändare) {
        
        var id_token = googleAnvändare.getAuthResponse().id_token;
        var promise = loginService.logInGoogle(id_token);
        console.log(id_token);
        promise.then(function (data) {
            if (data.behorighet === 0) {
                console.log("Inloggad som elev.");
                $window.location.href = "#/elev";
            } else if (data.behorighet === 1) {
                console.log("Inloggad som lärare.");
                $window.location.href = "#/lärare";
            } else if (data.behorighet === -1){
                console.log("register");
                $window.location.href = "#/registration";
            } else {
                console.log("error");
                console.log(data);
            }
        });
    };
    $scope.handledareLogin = function(){
        var användarnamn = $scope.username;
        var lösenord = $scope.password;
        var promise = loginService.logInHandledare(användarnamn, lösenord);
        promise.then(function (status) {
            if (status === 200) {
                console.log("Inloggad som handledare.");
                $window.location.href = "#/handledare";
            } else if (status === 401) {
                console.log("Fel användarnamn/lösenord.");
            }
        });
    };
    window.onSignIn = $scope.googleLogin;
});

