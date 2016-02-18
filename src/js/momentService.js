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
     this.url = SERVER_URL + "/elev";
    this.getElevFranKlass = function (id_token,klass) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/klass/"+klass,
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

    this.getToment = function (id_token, elev_id) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/elev/";
     $.ajax({
            url: this.url,
            type: 'post',
            headers: {
                "Authorization": id_token,
                "Content-Type": "application/json"
            },
            data: elev_id,
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


//        //T(m)oment
//        this.url = SERVER_URL + "/moment";
//    this.allaSeMoment = function (id_token,elev) {
//            var deferred = $q.defer();
//        $.ajax({
//            url: this.url + "/elev/"+elev,
//            type: 'get',
//            headers: {
//                "Authorization": id_token,
//                "Content-Type": "application/json"
//            },
//            success: function (data) {
//                deferred.resolve(data);
//            },
//            error: function (data)
//            {
//                deferred.resolve(data);
//            }
//        });
//        return deferred.promise;
//    };

    
 });