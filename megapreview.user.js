// ==UserScript==
// @name         megapreview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.megapreview.com/?*feed=members*
// @require     http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {

    $("a.url").each(function() {
        let url = $(this).find('img').attr('alt')
        $(this).attr('href', url)
    })
})();