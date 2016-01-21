/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var module = angular.module("apl",["ui.router"]);

module.config(function ($urlRouterProvider,$stateProvider){
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("home",{
        url:"/",
        templateUrl:"templates/login.html",
        controller:"loginCtrl"
    }).state("registration",{
        url:"/registration",
        templateUrl:"templates/registration.html",
        controller:"registrationCtrl"
    }).state("handledarreg",{
        url:"/handledarreg",
        templateUrl:"templates/handledare_registrering.html",
        controller:"handledareRegCtrl"
    }).state("elev",{
        url:"/elev",
        templateUrl:"templates/elev.html",
        controller:"elevCtrl"
    }).state("larare",{
        url:"/larare",
        templateUrl:"templates/larare.html",
        controller:"larareCtrl"
    }).state("handledare",{
        url:"/handledare",
        templateUrl:"templates/handledare.html",
        controller:"handledareCtrl"
    });
});


