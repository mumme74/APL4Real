module.controller("larareOversiktCtrl", function ($scope, larareService, omdomeService) {
    $scope.labels = ["bra", "sådar", "dåligt"];
    $scope.colours = ["#89ba17","#f0de00","#dc002e"];
    $scope.data = [];

    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    larareService.getKlasser(id_token).then(function (data) {
        $scope.klasser = data;
    });
    $scope.getElever = function (klass_id) {
        larareService.getElever(id_token, klass_id).then(function (data) {
            $scope.elever = data;
        });
    };
    $scope.getOmdome = function (elev_id) {
        omdomeService.getOmdome(id_token, elev_id).then(function (data) {
            console.log(data);
            $scope.data[0] = data.antal2;
            $scope.data[1] = data.antal1;
            $scope.data[2] = data.antal0;
        });
    };
});