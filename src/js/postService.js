/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* global SERVER_URL */

module.service("postService", function ($q, globalService) {
    this.url = "/post";

    this.updateElevHandledare = function (data) {
        var targetUrl = this.url + "/elevhandledare";
        return globalService.skickaData(targetUrl, data);
    };

    this.postLogg = function (datum, innehall, ljus, imgUrl) {
        var targetUrl = "/elev/logg";
        var data = {
            "datum": datum,
            "innehall": innehall,
            "ljus": ljus,
            "imgUrl": imgUrl
        };
        return globalService.skickaData(targetUrl, data);
    };
});
