module.controller("elevSeMomentCtrl", function ($scope, getMoment) {
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    var promiseMoment = getMoment.getMoment(id_token);
    promiseMoment.then(function (data){
        $scope.moment = data;
    });
    
});
