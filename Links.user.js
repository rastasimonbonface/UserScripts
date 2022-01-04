// ==UserScript==
// @name         Links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @run-at       context-menu
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    const vht = link => `<video src="${link}" style="max-width:500px;max-height:500px;"/>`
    const iht = link =>`<img src="${link}" style="max-width:500px;max-height:500px;">`
    let html = ''
    let list = ''
    const checkStrategy = () => {
        var uri = window.location
        switch (true) {
            case /sapph\.com/.test(uri):
                sapph()
                break
            case /wp-content\/uploads\//.test(uri):
                wp()
                break
            case /cyberdrop\.me/.test(uri):
                cyber()
                break
           case /ofans\.party\/\#\/creator\//.test(uri):
                ofans()
                break
            case /newgenerationmodels\.com/.test(uri):
            case /metromodels\.com/.test(uri):
                metro()
                break
            case /mc2mm\.co\.il/.test(uri):
            case /mostwantedmodels\.com/.test(uri):
                mc()
                break
            case /deboekers\.nl/.test(uri):
                deboekers()
                break
            case /christianvanduuren\.nl/.test(uri):
                fabrik()
                break
            case /socialmediagirls\.com/.test(uri):
                soc()
                break
            default:
                //links()
                alert('no match')
                break
        }
    }

    const sapph = () => {
        $(".carousel-item img").each(function() {
            let img = $(this).attr('src')
            let regexed = /(https:\/\/www.sapph.com\/.*\.jpg\?)(sw=\d{3}&sh=\d{3})(&sm=fit&sfrm=png)/.exec(img)
            let bimg = regexed[1] + 'sw=2000&sh=2000' + regexed[3]
            html += `<img src="${bimg}" style="max-width:500px;max-height:500px;">`
        })
        $('html').html(html)
    }
    const wp = () => {
        $("a").each(function() {
            if(/\.(jpg|png|JPG|PNG|jpeg|JPEG)$/g.test(this.href) && !/\d{2,}x\d{2,}/g.test(this.href) && !/\-e\d{13}\./g.test(this.href) && !/\-scaled/g.test(this.href)){
                html += iht(this.href)
            }
        })
        $('html').html(html)
    }
    const soc = () => {
        $(".js-lbImage").each(function() {
                html += iht(this.href)
                list += `${this.href} `
        })
        html += `<textarea>${list}</textarea>`
        $('html').html(html)
    }
    const cyber = () => {
         $(".image").each(function() {
             if(/\.mp4/.test(this.href)){
             html += vht(this.href)
             }else{
             html += iht(this.href)
             }
             list += `${this.href} `
        })
        html += `<textarea>${list}</textarea>`
        $('html').html(html)
        console.log(list)
    }
    const ofans = () => {
        $("a").each(function() {
            $(this).find("img").attr('src', this.href)
            $(this).find("img").css("max-width", "360px");
        })
//list = ''
//json.response.posts.forEach(p => p.media.forEach(m => list +=`https://ipfs.runfission.com/ipfs/${m.ipfs_media_hash} `))
//list
    }
    const metro = () => {
        $(".bookGalleryElement > img").each(function() {
            let im = $(this).attr('src')
            if(/\.(jpg|png|JPG|PNG|jpeg|JPEG)$/g.test(im) && /googleapis\.com/g.test(im)){
                html += iht(im.replace('large-', ''))
                list += `${im.replace('large-', '')} `
            }
        })
        html += `<textarea>${list}</textarea>`
        $('html').html(html)
    }
    const mc = () => {
        $("img").each(function() {
            let im = $(this).attr('src')
            if(/\.(jpg|png|JPG|PNG|jpeg|JPEG)$/g.test(im) && /googleapis\.com/g.test(im)){
                html += iht(im.replace('large-', ''))
                list += `${im.replace('large-', '')} `
            }
        })
        html += `<textarea>${list}</textarea>`
        $('html').html(html)
    }
    const deboekers = () => {
        $("a").each(function() {
            if(/_zipExport/g.test(this.href)){
                html += iht(this.href)
                list += `${this.href} `
            }
        })
        html += `<textarea>${list}</textarea>`
        $('html').html(html)
    }
    const fabrik = () => {
            $("img").each(function() {
                let set = $(this).attr('data-srcset')
                html += iht(/http.*2560w/.exec(set)[0])
                list += /http.*2560w/.exec(set)[0] + " "
            })
        html += `<textarea>${list}</textarea>`
        $('html').html(html)
    }
    checkStrategy()
})();
