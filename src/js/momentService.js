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
        
        //hämta moment
    this.getMoment = function (id_token,elev_id) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/elev";
     $.ajax({
            url: url,
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
    
        
    //hämta alla moment
    this.seallaMoment = function (anvandare,elev_id) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/elev";
     $.ajax({
            url: url,
            type: 'post',
            headers: {
                "Authorization": anvandare,
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
    
    
 });