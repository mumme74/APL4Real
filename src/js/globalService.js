/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global SERVER_URL */

module.service("globalService", function ($q, $http) {
    this.notify = function (message, type) {
        var element = '<div class="alert alert-' + type + '">';
        element += '<a class="close" data-dismiss="alert" aria-label="close">&times;</a>';
        element += message + '</div>';
        $(element).hide().appendTo("#alerts").slideDown("fast").delay(5000).slideUp('slow', function () {
            $(this).remove();
        });
    };
    this.skickaData = function (url, data) {
        var google_id = JSON.parse(localStorage.anvandare).google_id;
        var anvandarnamn = JSON.parse(localStorage.anvandare).anvandarnamn;
        var objekt = {
            url: url,
            google_id: google_id,
            anvandarnamn: anvandarnamn,
            data: data
        };

        var array = [];
        if (!localStorage.oskickat)
            localStorage.oskickat = JSON.stringify([]);
        array = JSON.parse(localStorage.oskickat);
        array.push(objekt);
        localStorage.oskickat = JSON.stringify(array);
        return this.kollaStorage();
    };
    this.kollaStorage = function () {
        var deferred = $q.defer();
        if (!localStorage.oskickat)
        {
            localStorage.oskickat = JSON.stringify([]);
        }
        if (localStorage.oskickat.length > 2)
        {
            var dataArray = JSON.parse(localStorage.oskickat);
            var anvandare = JSON.parse(localStorage.anvandare);
            var failed = [];
            var responses = [];
            var auth;
            if (anvandare.behorighet === 2)
            {
                auth = anvandare.basic_auth;
            } else {
                auth = anvandare.id_token;
            }

            function postData() {
                console.log("Posting data");
                var data = dataArray.pop();
                if (data.google_id !== anvandare.google_id
                        || data.anvandarnamn !== anvandare.anvandarnamn)
                {
                    failed.push(data);
                    localStorage.oskickat = JSON.stringify(failed);
                    if (dataArray.length > 0)
                    {
                        postData();
                        return;
                    } else {
                        return;
                    }
                }
                localStorage.oskickat = JSON.stringify(failed);
                $http({
                    method: "POST",
                    url: SERVER_URL + data.url,
                    data: JSON.stringify(data.data),
                    headers: {'Authorization': auth}
                }).success(function (rdata, status, headers, config) {
                    response = {
                        data: rdata,
                        status: status,
                        headers: headers,
                        config: config
                    };
                    responses.push(response);
                    console.log("1.0.0");
                    if (dataArray.length === 0)
                    {
                        console.log("1.0.1");
                        deferred.resolve(responses);
                    } else {
                        console.log("1.0.2");
                        postData();
                    }
                }).error(function (rdata, status, headers, config) {
                    response = {
                        data: rdata,
                        status: status,
                        headers: headers,
                        config: config
                    };
                    responses.push(response);
                    failed.push(data);
                    localStorage.oskickat = JSON.stringify(failed);
                    console.log("1.1.0");
                    if (dataArray.length === 0)
                    {
                        console.log("1.1.1");
                        deferred.resolve(responses);
                    } else {
                        console.log("1.1.2");
                        postData();
                    }
                });
            }
            postData();
        } else
        {
            deferred.resolve([]);
        }
        return deferred.promise;
    };
});