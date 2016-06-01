

module.controller("postNarvaroCtrl", function ($scope, globalService) {

    $scope.skickaNarvaro = function () {
        var id_token = JSON.parse(localStorage.anvandare).id_token;
        var datum = $scope.datum;
        var trafikljus = $scope.ljus;
        var data = {
            "trafikljus": trafikljus,
            "datum": datum
        };

        if (datum && trafikljus > -1) {
            var url = "/narvaro/post";
            globalService.skickaData(url, data)
                    .then(function (responses) {
                        var status = responses[0].status;
                        if (status == 200) {
                            globalService.notify("Närvaron har skickats.", "success");
                        } else if (status == 401) {
                            globalService.notify("Du verkar inte vara inloggad längre. Försök logga in igen", "danger");
                        } else {
                            globalService.notify("Närvaron kommer skickas automatiskt.", "info");
                        }
                    });
        } else {
            globalService.notify("Du måste fylla i datum och närvaro av dagen.", "danger");
        }

    };
    $scope.getLjus = function (ljus) {
        if (ljus === "rod")
            $scope.ljus = 0;
        else if (ljus === "gul")
            $scope.ljus = 1;
        else
            $scope.ljus = 2;
        $(".vald").removeClass("vald");
        $("." + ljus).addClass("vald");

    };
});