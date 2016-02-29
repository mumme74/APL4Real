/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("loginCtrl", function ($location, $window, $scope, loginService) {
    $scope.googleLogin = function (googleAnvandare) {

        var id_token = googleAnvandare.getAuthResponse().id_token;
        var expires_at = googleAnvandare.getAuthResponse().expires_at;
        console.log(expires_at);
        var google_id = googleAnvandare.getBasicProfile().getId();
        loginService.logInGoogle(id_token).then(function (data) {
            if (data.behorighet === 0) {
                console.log("Inloggad som elev.");
                var anvandare = {
                    id_token: id_token,
                    google_id: google_id,
                    behorighet: 0,
                    expires_at: expires_at
                };
                localStorage.anvandare = JSON.stringify(anvandare);
                if ($location.path() === "/")
                    $window.location.href = "#/elev";
                else
                    $window.location.reload();
            } else if (data.behorighet === 1) {
                console.log("Inloggad som lärare.");
                var anvandare = {
                    id_token: id_token,
                    google_id: google_id,
                    behorighet: 1,
                    expires_at: expires_at
                };
                localStorage.anvandare = JSON.stringify(anvandare);
                if ($location.path() === "/")
                    $window.location.href = "#/larare";
                else
                    $window.location.reload();
            } else if (data.behorighet === -1) {
                console.log("register");
                if ($window.location.href === "#/")
                    $window.location.href = "#/registration";
            } else {
                console.log("error");
                console.log(data);
            }
        });
    };
    $scope.handledareLogin = function () {
        console.log("Daniel är bäst");
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
                $window.location.href = "index.html#/handledare";
            } else if (status === 401) {
                console.log("Fel användarnamn/lösenord.");
            } else {
                console.log("Okänt fel");

                console.log(status);
            }
        });
    };
    $scope.checkLogin = function (googleAnvandare) {
        if (localStorage.anvandare) {
            if (JSON.parse(localStorage.anvandare).expires_at) {
                if (JSON.parse(localStorage.anvandare).expires_at > Date.now()) {
                    if ($location.path() === "/") {
                        var behorighet = JSON.parse(localStorage.anvandare).behorighet;
                        if (behorighet === 0)
                            $window.location.href = "#/elev";
                        else if (behorighet === 1)
                            $window.location.href = "#/larare";
                    }
                    console.log("id_token not expired yet.");
                    return;
                }
            }
        }
        console.log("id_token expired. Getting a new one.");
        $scope.googleLogin(googleAnvandare);
    };
    window.onSignIn = $scope.checkLogin;
});

