/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fuck;
module.controller("elevCtrl", function ($scope, $window, postService) {
    $scope.logout = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        anvandare.id_token = "";
        localStorage.anvandare = JSON.stringify(anvandare);
        var auth2 = gapi.auth2.getAuthInstance();
        console.log(auth2);
        auth2.signOut().then(function () {
            console.log('User signed out.');
            $window.location.href = "#/";
        });
    };
    $scope.postLogg = function () {
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        //Tidszon fix
        $scope.datum.setHours(12);
        //Göra om till databasens Date
        var datum = $scope.datum.toISOString().substring(0,10);
        var innehall = $scope.text;
        var ljus = $scope.ljus;
        console.log(datum);
        if (datum && innehall && ljus >= 0)
        {
            postService.postLogg(id_token, datum, innehall, ljus)
                    .then(function (response) {
                        if (response.status === 201)
                        {
                            $window.location.href = "#/";
                        } else if (response.status === 500) {
                            alert("Ett okänt fel inträffades på servern.");
                        } else if (response.status === 401) {
                            alert("Du verkar inte vara inloggad längre. Försök logga in igen.");
                        }
                    });
        }
    };
    $scope.valj = function (ljus) {
        if (ljus === "rod")
            $scope.ljus = 0;
        else if (ljus === "gul")
            $scope.ljus = 1;
        else
            $scope.ljus = 2;
        $(".vald").removeClass("vald");
        $("."+ljus).addClass("vald");
        
    };
});

