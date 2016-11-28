module.service("handledareMomentService", function ($http, $q) {
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
