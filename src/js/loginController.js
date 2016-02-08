/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("loginCtrl", function ($window, $scope, loginService) {
    $scope.googleLogin = function (googleAnvandare) {

        var id_token = googleAnvandare.getAuthResponse().id_token;
        var google_id = googleAnvandare.getBasicProfile().getId();
        loginService.logInGoogle(id_token).then(function (data) {
            if (data.behorighet === 0) {
                console.log("Inloggad som elev.");
                var anvandare = {
                    id_token: id_token,
                    google_id: google_id,
                    behorighet: 0
                };
                localStorage.anvandare = JSON.stringify(anvandare);
                $window.location.href = "#/elev";
            } else if (data.behorighet === 1) {
                console.log("Inloggad som lärare.");
                var anvandare = {
                    id_token: id_token,
                    google_id: google_id,
                    behorighet: 1
                };
                localStorage.anvandare = JSON.stringify(anvandare);
                $window.location.href = "#/larare";
            } else if (data.behorighet === -1) {
                console.log("register");
                $window.location.href = "#/registration";
            } else {
                console.log("error");
                console.log(data);
            }
        });
    };
    $scope.handledareLogin = function () {
        var anvandarnamn = $scope.username;
        var losenord = $scope.password;
        loginService.logInHandledare(anvandarnamn, losenord).then(function (status) {
            if (status === 200) {
                console.log("Inloggad som handledare.");
                var anvandare = {
                    anvandarnamn: anvandarnamn,
                    basic_auth: "Basic " + btoa(anvandarnamn + ":" + losenord),
                    behorighet: 2
                };
                localStorage.anvandare = JSON.stringify(anvandare);
                $window.location.href = "#/handledare";
            } else if (status === 401) {
                console.log("Fel användarnamn/lösenord.");
            } else {
                console.log("Okänt fel");
                
                console.log(status);
            }
        });
    };
    window.onSignIn = $scope.googleLogin;
});

