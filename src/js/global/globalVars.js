//LOCAL_SERVER_URL = "http://localhost:8080/aplBackend/webresources";
//REAL_SERVER_URL = "http://apl.teknikum.it:8080/aplBackend/webresources";
IMG_SERVER_URL = "http://lundberg.t4.nu/fileupload";

//SERVER_URL = LOCAL_SERVER_URL; //REAL_SERVER_URL;
SERVER_URL = location.protocol + "//" + location.hostname  + ":8080/aplBackend/webresources"; 


var module = angular.module("apl", ["ui.router"]);

