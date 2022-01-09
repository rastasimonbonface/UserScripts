// ==UserScript==
// @name         camwhores
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.camwhores.video/videos/*
// @icon         https://www.google.com/s2/favicons?domain=camwhores.video
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function(){
        document.querySelector('.player-holder').innerHTML += `<a href="${document.querySelector('.fp-engine').src}" target="_blank">------------------------------------------------------------------------------------------</a>`
    }, 2000);
})();
