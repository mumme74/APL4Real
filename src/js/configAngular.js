/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var module = angular.module("apl", ["ui.router"]);

module.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/login.html",
        controller: "loginCtrl"
    }).state("logout", {
        url: "/logout",
        templateUrl: "templates/logout.html",
        controller: "logoutCtrl"
    }).state("registration", {
        url: "/registration",
        templateUrl: "templates/registration.html",
        controller: "registrationCtrl"
    }).state("handledarreg", {
        url: "/handledarreg",
        templateUrl: "templates/handledare_registrering.html",
        controller: "handledareRegCtrl"
    }).state("elev", {
        url: "/elev",
        templateUrl: "templates/elev.html",
        controller: "aktivitetCtrl"
    }).state("larare", {
        url: "/larare",
        templateUrl: "templates/larare.html",
        controller: "larareCtrl"
    }).state("handledare", {
        url: "/handledare",
        templateUrl: "templates/handledare.html",
        controller: "handledareCtrl"
    }).state("handledarenatverk", {
        url: "/handledarenatverk",
        templateUrl: "templates/lararetemplates/handledare_natverk.html"//,
//        controller: "natverkCtrl"
    }).state("elev_handledare", {
        url: "/elev_handledare",
        templateUrl: "templates/lararetemplates/elev_handledare.html",
        controller: "larareCtrl"
    }).state("elev_loggbok", {
        url: "/elev_loggbok",
        templateUrl: "templates/elevtemplates/elev_loggbok.html",
        controller: "elevCtrl"
    }).state("elev_se_loggbok", {
        url: "/elev_se_loggbok",
        templatesUrl: "templates/elevtemplates/elev_se_loggbok.html",
        controller: "elevSeLoggCtrl"
    }).state("elevnarvaro", {
        url: "/elevnarvaro",
        templateUrl: "templates/elevtemplates/elev_narvaro.html",
        controller: "postNarvaroCtrl"
    }).state("larare_se_loggbok", {
        url: "/larare_se_loggbok",
        templateUrl: "templates/lararetemplates/larare_se_loggbok.html",
        controller: ""
    }).state("elev_kontakt", {
        url: "/elev_kontakt",
        templateUrl: "templates/elevtemplates/elev_kontakt.html",
        controller: "elevKontaktCtrl"
    }).state("elev_moment", {
        url: "/elev_moment",
        templateUrl: "templates/elevtemplates/elev_moment.html",
        controller: "elevSeMomentCtrl"
    }).state("elev_aktivitet", {
        url: "/elev_aktivitet",
        templateUrl: "templates/handledaretemplates/elev_aktivitet.html",
        controller: "aktivitetCtrl"
    }).state("handledare_aktivitet", {
        url: "/handledare_aktivitet",
        templateUrl: "templates/handledaretemplates/handledare_aktivitet.html",
        controller: "aktivitetCtrl"
    }).state("handledare_kontakt", {
        url: "/handledare_kontakt",
        templateUrl: "templates/handledaretemplates/handledare_kontakt.html",
        controller: ""
    }).state("handledare_moment", {
        url: "/handledare_moment",
        templateUrl: "templates/handledaretemplates/handledare_moment.html",
        controller: "momentCtrler"
    }).state("handledare_sida", {
        url: "/handledare_sida",
        templateUrl: "templates/handledaretemplates/handledare_sida.html",
        controller: ""
    }).state("larare_oversikt", {
        url: "/larare_oversikt",
        templateUrl: "templates/lararetemplates/larare_oversikt.html",
        controller: ""
    }).state("larare_narvaro", {
        url: "/larare_narvaro",
        templateUrl: "templates/lararetemplates/larare_narvaro.html",
        controller: ""
    }).state("larare_moment", {
        url: "/larare_moment",
        templateUrl: "templates/lararetemplates/larare_moment.html",
        controller: "momentCtrl"
    }).state("larare_kontakt", {
        url: "/larare_kontakt",
        templateUrl: "templates/lararetemplates/larare_kontakt.html",
        controller: "larareKontaktCtrl"
    }).state("larare_c_loggbok", {
        url: "/larare_c_loggbok",
        templateUrl: "templates/lararetemplates/larare_c_loggbok.html",
        controller: ""
    });
});


