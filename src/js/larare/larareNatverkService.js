module.service("larareNatverkService", function ($http, $q) {
    this.getNatverk = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/handledare/natverk";
        $http({method: "GET", url: url}).success(function (data) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };
});