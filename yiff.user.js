// ==UserScript==
// @name         yiff
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yiff.party/render_posts?*
// @require     http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {

    let mcss = `
    <style>
        .yp-post-comment-avatar {
            max-width: 65px;
        }
        .yp-post {
            margin: 75px;
            background-color:#c8dbe6;
            max-width: 800px;
        }
    </style>
    `
    let ziplist = ''
    $('.yp-post-tag').remove();
    
    $('body').prepend(mcss)
    
    $(".yp-post").each(function() {
    
        let pfile = $(this).find('.card-action > a').attr('href')
        $(this).find('.card-image > img').attr('src', pfile)
        $(this).find('.card-image > img').css('max-width', '800px')
    
        $(this).find('.card-attachments a').each(function() {
            console.log(this.href)
            if(/\.(jpg|png|PNG|JPG|JPEG|jpeg|gif|GIF)$/g.test(this.href) && !/\d{2,}x\d{2,}/g.test(this.href) && !/\-e\d{13}\./g.test(this.href)){
                 $(this).html(`<img src="${this.href}" style="max-width:500px;max-height:500px;"/>`)
             }
             if(/\.(mp4|MP4|webm|WEBM)$/g.test(this.href)){
                 $(this).html(`<video src="${this.href}" style="max-width:500px;max-height:500px;"/>`)
             }
             if(/\.(zip|rar|ZIP|RAR)$/g.test(this.href)){
                 ziplist += `${this.href} `
             }
        })
    })
        console.log(ziplist)
        // Your code here...
    })();