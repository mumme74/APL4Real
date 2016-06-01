module.service("momentService", function ($http, $q) {

    //Elever
    this.getKlasser = function () {
        var url = SERVER_URL + "/apl/klass";
        var deferred = $q.defer();
        $.ajax({
            url: url,
            type: 'get',
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
    //Elever
    this.url = SERVER_URL + "/elev";
    this.getElevFranKlass = function (id_token, klass) {
        var deferred = $q.defer();
        $.ajax({
            url: this.url + "/klass/" + klass,
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
    this.getMoment = function (id_token, elev_id) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/elev";
//        var url = "http://localhost:8080/aplBackend/webresources/moment/elev";
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

    //hämta moment
    this.getMomentLärare = function (id_token) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/larare";
        $.ajax({
            url: url,
            type: 'GET',
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

    //Radera Moment
    this.larareRaderaMoment = function (id_token, moment_id) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/" + moment_id;
        $.ajax({
            url: url,
            type: 'DELETE',
            headers: {
                "Authorization": id_token,
                "Content-Type": "application/json"
            },
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (data, status, headers, config) {
                deferred.resolve(status);
            }

        });
        return deferred.promise;
    };
    //Radera Moment
    this.elevRaderaMoment = function (id_token, moment_id, elev_id) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/" + moment_id + "/elev/" + elev_id;
        $.ajax({
            url: url,
            type: 'DELETE',
            headers: {
                "Authorization": id_token,
                "Content-Type": "application/json"
            },
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (data, status, headers, config) {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    };

    //hämta alla moment från handledarens elev
    this.handledareSeMoment = function (basic_auth) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/moment/handledare";
        $.ajax({
            url: url,
            type: 'get',
            headers: {
                "Authorization": basic_auth,
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
});
