/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fuck;
module.controller("elevCtrl", function ($scope, $window, postService, globalService) {
    $scope.logout = function () {
        var anvandare = JSON.parse(localStorage.anvandare);
        anvandare.id_token = "";
        localStorage.anvandare = JSON.stringify(anvandare);
        $window.location.href = "#/logout";
    };
    $scope.postLogg = function () {
        //Tidszon fix
        $scope.datum.setHours(12);
        //Göra om till databasens Date
        var datum = $scope.datum.toISOString().substring(0, 10);
        var innehall = $scope.text;
        var ljus = $scope.ljus;
        console.log(datum);
        if (datum && innehall && ljus >= 0)
        {
            postService.postLogg(datum, innehall, ljus)
                    .then(function (responses) {
                        if (responses.length == 1)
                        {
                            status = responses[0].status;
                            if (status == 201){
                                $window.location.href = "#/elev";
                            } else if (status == 500) {
                                alert("Ett okänt fel inträffades på servern.");
                            } else if (status == 401) {
                                alert("Du verkar inte vara inloggad längre. Försök logga in igen.");
                            }
                        } else {
                            console.log(responses);
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
                $("." + ljus).addClass("vald");

            };
            globalService.kollaStorage().then(function (responses) {
                console.log(responses);
            });
        });

