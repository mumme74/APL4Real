/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("elevCtrl", function ($scope, $window) {
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
});

