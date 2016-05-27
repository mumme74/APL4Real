/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.service("omdomeService", function ($q) {
    this.url = SERVER_URL + "/omdome";
    this.getOmdome = function (id_token, klass_id) {
        var deferred = $q.defer();
        var data = {
            id: klass_id
        };
        $.ajax({
            url: this.url,
            type: 'post',
            data: JSON.stringify(data),
            headers: {
                "Authorization": id_token,
                "Content-Type": 'application/json'
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
