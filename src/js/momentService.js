module.service("momentService", function ($http, $q){
       
    //Klasser 
    this.getKlasser = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/klass";
        $http({method: "GET", url: url}).success(function (data, status) {
            console.log(data);
            deferred.resolve(data);
        }).error(function (data, status) {
            console.log("Error");
            console.log(status);
            deferred.reject();
        });
        return deferred.promise;
    };
    
    //Elever
     this.url = SERVER_URL + "/get";
    this.getElevFranKlass = function (id_token) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/elever",
            type: 'get',
            headers: {
                "Authorization": id_token,
                "Content-Type": "application/json"
            },
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (data)
            {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };


        //moment
    this.allaSeMoment = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment";
        $http({method: "GET", url: url}).success(function (data, status) {
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