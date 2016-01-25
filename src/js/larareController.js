/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareCtrl", function ($scope, $window, getService, postService) {
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
    $scope.getPeople = function () {
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        var elevPromise = getService.getElever(id_token);
        elevPromise.then(function (data) {
            console.log(data);
            $scope.elever = data;
        });
        var handledarePromise = getService.getHandledare(id_token);
        handledarePromise.then(function (data) {
            console.log(data);
            $scope.handledare = data;
        });
    };
    $scope.kopplaElevHandledare = function () {
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        var elever = $scope.elever;
        var array = [];
        for (var i = 0; i < elever.length; i++) {
            if (elever[i].ny_handledare !== elever[i].handledare_ID)
            {
                array.push({
                    "elev_id": elever[i].ID,
                    "handledare_id": elever[i].ny_handledare
                });
            }
        }
        console.log(array);
        if (array.length > 0)
        {
            var promise = postService.updateElevHandledare(id_token, array);
            promise.then(function (response) {
                console.log(response);
            });
            
        }
    };
    window.getPeople = $scope.getPeople;
});

