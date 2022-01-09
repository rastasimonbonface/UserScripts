// ==UserScript==
// @name         sgimage
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.suicidegirls.com/members/*
// @grant        none
// ==/UserScript==

(function() {
    $('body').prepend('<div id="ad" class="banner banner-click banner-burlesque imgSw"><div class="banner-header"><h3>IMAGE SWITCH</h3></div></div>')

    $('body').on('click', '.imgSw', ()=>{
      $('.photo-container').each(function( index ) {
        $( this ).find('img').attr('src', $( this ).find('a').attr('href') )
      });
    })
})();
