/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("DOMContentLoaded", function(){
    var body = document.querySelector("body:not(.testserver)");
    if (body && location.hostname != "apl.teknikum.it") {
        body.className += " testserver";
    }
});
