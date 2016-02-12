module.controller("elevSeMomentCtrl", function ($scope, getMoment) {
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    var promiseMoment = getMoment.getMoment(id_token);
    promiseMoment.then(function (data){
        $scope.moment = data;
    });
    
    $scope.getStatus = function (status) {
        if (status === 0)
            return "Icke avklarad";
        else if (status === 1)
            return "Väntande";
        else if(status === 2)
            return "Avklarad!";
        
    };

});
