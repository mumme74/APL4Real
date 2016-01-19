/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("registrationCtrl",function ($scope, registrationService){
//    var promise = registrationService.getData();
//    promise.then(function(data){
//        $scope.data = data;
//        console.log (data); 
//    });
    console.log("Kör registring!!");
    registrationService.postRegistration();
    

     
});

