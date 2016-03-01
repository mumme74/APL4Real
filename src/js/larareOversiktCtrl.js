module.controller("larareOversiktCtrl", function ($scope, larareService) {
    $scope.labels = ["bra", "sådar", "dåligt", "jag vet inte"];
    $scope.data = [10, 50, 20, 33];

    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    larareService.getKlasser(id_token).then(function (data) {
        $scope.klasser = data;
    });
    $scope.getElever = function (klass_id) {
        /*
        larareOversiktService.getOmdome(id_token, klass_id).then(function (data) {
            var alla = [];
            alla.push({elev_id: -1, namn: "Alla"});
            $scope.elever = alla.concat(data);
        });
        */
    };
});