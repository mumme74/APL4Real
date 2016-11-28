module.controller("handledareMomentCtrl", function ($scope, handledareMomentService, globalService) {
    $scope.handledareSeMoment = function () {
	    if (globalService.isLoggedIn(false)) {
	    	var anvandare = JSON.parse(localStorage.anvandare);
	        var promiseAllaMoment = handledareMomentService.handledareSeMoment(anvandare.basic_auth);
	        promiseAllaMoment.then(function (data) {
	            $scope.moments = data;
	        });
        }
    };
});