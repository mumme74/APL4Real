/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



module.service("loginService", function ($q) {
    this.logInGoogle = function (id_token) {
        var deferred = $q.defer();
        var data = {
            "id": id_token
        };
        $.ajax({
            url: 'http://localhost:8080/aplBackend/webresources/apl/login',
            type: 'post',
            data: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data.status);
            },
            fail: function (data, status) {
                deferred.resolve(status);
            },
            always: function (data, status) {
                deferred.resolve(status);
            },
            error: function (data)
            {
                deferred.resolve(data.status);
            }
        });
        return deferred.promise;
    };
    this.logInHandledare = function (user, pass) {
        var deferred = $q.defer();
        var data = {
            "användarnamn": user,
            "lösenord": pass
        };
        $.ajax({
            url: 'http://localhost:8080/aplBackend/webresources/apl/login',
            type: 'post',
            data: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            },
            dataType: 'json',
            success: function (status, data) {
                deferred.resolve([status, data]);
            }
        });
        return deferred.promise;
    };
});
