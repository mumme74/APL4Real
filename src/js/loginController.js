/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("loginCtrl", function ($window, $scope, loginService) {
    $scope.googleLogin = function (googleAnvändare) {
        
        var id_token = googleAnvändare.getAuthResponse().id_token;
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
    $scope.handledareLogin = function(){
        console.log("handledarlogin");
        var användarnamn = $scope.username;
        var lösenord = $scope.password;
        var promise = loginService.logInHandledare(användarnamn, lösenord);
        promise.then(function (status) {
            if (status === 200) {
                console.log("logged in");
                alert("Du är inloggad!");
            } else {
                console.log("error: Status "+status);
            }
        });
    };
    window.onSignIn = $scope.googleLogin;
});

