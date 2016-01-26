/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.service("registrationService", function ($http, $q) {
    this.postRegistration = function (google_id, namn, klass, tfnr) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/user";
        var data = {
            id: google_id,
            namn: namn,
            tfnr: tfnr,
            klass: parseInt(klass)
        };
        $http.post(url, data).then(
                function successCallback(response) {
                    console.log("fungerar!");
                    deferred.resolve(response.status);
                },
                function errorCallback(response) {
                    console.log("Fungerar inte!!");
                    deferred.resolve(response.status);
                }
        );

        return deferred.promise;
    };


    this.getKlasser = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/klass"; //<----?
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
        this.getProgram = function () {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/program"; //<----?
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


    this.registreraHandledare = function (användarnamn, namn, lösenord, email, tfnr) {
        var deferred = $q.defer();
        var url = SERVER_URL + "/apl/handledare";
        var data = {
            //ID för att verifiera att läraren är legit
            //id: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUwNTA2ZDIzN2M3YmI3OTA2N2VhMjlmNjFjODQzNWI3NWRiYTM2ZTQifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXRfaGFzaCI6Im9nRURlbnBnRW9LNVh1bzBrS1BzMmciLCJhdWQiOiI2MDY4NTE0MDI5Mi12bHZnbGxzbnBoaWU2OWRibTBxYWc0bjR2NG9xbG5lZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjMyNzY1NjUwMzU4ODM1NDkzMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI2MDY4NTE0MDI5Mi12bHZnbGxzbnBoaWU2OWRibTBxYWc0bjR2NG9xbG5lZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImhkIjoidXRiLnZheGpvLnNlIiwiZW1haWwiOiJkYW5sdW5AdXRiLnZheGpvLnNlIiwiaWF0IjoxNDUzMTk1MDU5LCJleHAiOjE0NTMxOTg2NTksIm5hbWUiOiJEYW5pZWwgTHVuZGJlcmcgVEVLTklLVU0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1NZnNQZVpMelVuMC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFjdy8za1U4S3daSzBUZy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiRGFuaWVsIiwiZmFtaWx5X25hbWUiOiJMdW5kYmVyZyBURUtOSUtVTSIsImxvY2FsZSI6InN2In0.ajiYuPIkv0OuZhzAGK4V9_xhTzvjhPpjrLUQifdBeez22zYRz6JSXnwP9ox5MoOV4v6LzK4MskPul6MmEmvhex721EmbVLneiPhgcMsdOtf_H_Dcf13-9PWIYkxVVShc1_wSfl9GRoe165PrsdKIRpFmLXM457Jh7-a4IdSSKVRwvDXiCDyvmmN3ElKLphj8OSJ248r4WbYhvpEUphN05WVthBREwUEhQ41qSp0tqadXUtDAG8V0JAf5dwNdCMCzbCPdpb33T_13lfqyaJi-V1oyGiaPaNfqPwyNkPj--guIQTLDnEoc9vWcivFBr0I0O6EliWW3gGvHg3hPDX2GRQ",
            användarnamn: användarnamn,
            lösenord: lösenord,
            email: email,
            tfnr: tfnr,
            namn: namn,
            foretag: foretag,
            program: program
        };
        $http.post(url, data).then(
                function successCallback(response) {
                    console.log("fungerar!");
                    deferred.resolve(response.status);
                },
                function errorCallback(response) {
                    console.log("Fungerar inte!!");
                    deferred.resolve(response.status);
                }
        );

        return deferred.promise;
    }
});
