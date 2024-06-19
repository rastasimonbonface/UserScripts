// ==UserScript==
// @name         Tele2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Rastasimon
// @match        https://web.telegram.org/k/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    document.addEventListener("keydown", (event) => {if (event.keyCode === 18) {
        document.querySelector('div.media-viewer-buttons > button:nth-child(3)').classList.remove("hide")
        document.querySelector('div.media-viewer-buttons > button:nth-child(3)').click()
    }})
})();
