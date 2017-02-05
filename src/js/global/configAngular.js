/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
        controller: "larareRegHandledareCtrl"
    }).state("elev", {
        url: "/elev",
        templateUrl: "templates/elev.html",
        controller: "elevAktivitetCtrl"
    }).state("larare", {
        url: "/larare",
        templateUrl: "templates/larare.html",
        controller: "larareOversiktCtrl"
    }).state("handledare", {
        url: "/handledare",
        templateUrl: "templates/handledare.html",
        controller: "handledareAktivitetCtrl"
    }).state("handledarenatverk", {
        url: "/handledarenatverk",
        templateUrl: "templates/lararetemplates/handledare_natverk.html",
        controller: "larareNatverkCtrl"
    }).state("elev_handledare", {
        url: "/elev_handledare",
        templateUrl: "templates/lararetemplates/elev_handledare.html",
        controller: "larareTilldelaHandledareCtrl"
    }).state("elev_loggbok", {
        url: "/elev_loggbok",
        templateUrl: "templates/elevtemplates/elev_loggbok.html",
        controller: "elevLoggbokCtrl"
    }).state("elev_se_loggbok", {
        url: "/elev_se_loggbok",
        templateUrl: "templates/elevtemplates/elev_se_loggbok.html",
        controller: "elevSeLoggCtrl"
    }).state("elev_narvaro", {
        url: "/elev_narvaro",
        templateUrl: "templates/elevtemplates/elev_narvaro.html",
        controller: "elevNarvaroCtrl"
    }).state("elev_se_narvaro", {
        url: "/elev_se_narvaro",
        templateUrl: "templates/elevtemplates/elev_se_narvaro.html",
        controller: "elevSeNarvaroCtrl"
    }).state("larare_se_loggbok", {
        url: "/larare_se_loggbok",
        templateUrl: "templates/lararetemplates/larare_se_loggbok.html",
        controller: "larareSeLoggCtrl"
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
        controller: "elevAktivitetCtrl"
    }).state("handledare_aktivitet", {
        url: "/handledare_aktivitet",
        templateUrl: "templates/handledaretemplates/handledare_aktivitet.html",
        controller: "handledareAktivitetCtrl"
    }).state("handledare_kontakt", {
        url: "/handledare_kontakt",
        templateUrl: "templates/handledaretemplates/handledare_kontakt.html",
        controller: "handledareKontaktCtrl"
    }).state("handledare_moment", {
        url: "/handledare_moment",
        templateUrl: "templates/handledaretemplates/handledare_moment.html",
        controller: "handledareMomentCtrl"
    }).state("handledare_sida", {
        url: "/handledare_sida",
        templateUrl: "templates/handledaretemplates/handledare_sida.html",
        controller: ""
    }).state("larare_oversikt", {
        url: "/larare_oversikt",
        templateUrl: "templates/lararetemplates/larare_oversikt.html",
        controller: "larareOversiktCtrl"
    }).state("larare_narvaro", {
        url: "/larare_narvaro",
        templateUrl: "templates/lararetemplates/larare_narvaro.html",
        controller: "larareSeNarvaroCtrl"
    }).state("larare_moment", {
        url: "/larare_moment",
        templateUrl: "templates/lararetemplates/larare_moment.html",
        controller: "larareMomentCtrl"
    }).state("larare_kontakt", {
        url: "/larare_kontakt",
        templateUrl: "templates/lararetemplates/larare_kontakt.html",
        controller: "larareKontaktCtrl"
    }).state("larare_c_loggbok", {
        url: "/larare_c_loggbok",
        templateUrl: "templates/lararetemplates/larare_c_loggbok.html",
        controller: ""
    }).state("se_moment_larare",{
        url:"/se_moment_larare",
        templateUrl:"templates/lararetemplates/se_moment_larare.html",
        controller:"larareMomentCtrl"
    }).state("skapa_moment",{
        url:"/skapa_moment",
        templateUrl:"templates/lararetemplates/skapa_moment.html",
        controller:"larareMomentCtrl"
    }).state("tilldela_moment",{
        url:"/tilldela_moment",
        templateUrl:"templates/lararetemplates/tilldela_moment.html",
        controller:"larareTilldelaMomentCtrl"
    }).state("redigera_anv", {
        url: "/redigera",
        templateUrl: "templates/lararetemplates/larare_redigera_anv.html",
        controller: "larareRedigeraAnvCtrl"
    });
});


