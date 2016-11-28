module.controller("larareNatverkCtrl", function ($scope, larareNatverkService, globalService) {
    if (globalService.isLoggedIn(true)) {
        larareNatverkService.getNatverk().then(function (data) {
            $scope.program = data;
        });
    }
});