/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareSeLoggCtrl", function ($scope, larareloggGetService, larareEleverService, larareService) {
    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;

    larareService.getKlasser(id_token).then(function (data) {
        $scope.klasser = data;
    });

    $scope.getElever = function (klass_id) {
        var data = {"klass_id":klass_id};
        var promiseElever = larareService.getElever(id_token, data);
        promiseElever.then(function (data){
            $scope.elever = data;
        });
    };
    $scope.getLogg = function (selected_elev) {
        var promiseLoggar = larareloggGetService.getLoggar(id_token, selected_elev);
        promiseLoggar.then(function (data) {
            console.log(data);
            $scope.loggar = data;
        });
    };
    $scope.show = function (e) {
        console.log("#" + e.$id + "_kommentarer");
        $(".kommentarContainer").not("#" + e.$id + "_kommentarer").slideUp();
        $("#" + e.$id + "_kommentarer").slideToggle();
    };
    $scope.getBildUrl = function (bild, storlek) {
        //tar bort citattecknen som kommer vem fan vet var ifrån
        bild = bild.substr(1, bild.length - 2);
        if (storlek)
            return "//10.97.72.5/fileload/?file=" + bild + "&size=" + storlek;
        else
            return "//10.97.72.5/fileload/?file=" + bild;
    };
});
