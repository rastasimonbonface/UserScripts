// ==UserScript==
// @name         fusk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Rastasimon
// @include      /.*\[\d*\-\d*\].*/
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(() => {
    let wurl = window.location.href

    const ureg = /(.*)\[(.*)\](.*)/
    const mmreg = /(\d*)\-(\d*)/
    const padreg = /(^0*)(?!$)/gm
    const ident = /(.*)(\*\*\*)(.*)/
    const DO = () => {
        let num = ''
        let url = wurl
        if(ureg.test(url)){
            let purl = ureg.exec(url)
            let html = ''
            console.log(purl)
            let mm = purl[2]
            if(mmreg.test(mm)){
                console.log(mmreg.exec(mm))
                let minmax = mmreg.exec(mm)
                let min = minmax[1]
                let max = minmax[2]
                let pad = min.toString().length;
                min = min.replace(padreg, '')
                max = max.replace(padreg, '')
                console.log('min: ' + min + ' max: ' + max)
                let iurl = ''
                for (let i = min; i <= max; i++) {
                    num = i + ''
                    num = num.padStart(pad, '0')
                    if(ident.test(purl[3])){
                        let end = ident.exec(purl[3])
                        iurl = purl[1]+ num + end[1] + num + end[3]
                    }else{
                        iurl = purl[1] + num + purl[3]
                    }
                    html += /*html*/`
<div class='iitem' style='max-width: 570px; display:inline-block; position:relative; margin: 4px'>
<a href='${iurl}' target="_blank">
<img class='img' style='max-width: 570px' src='${iurl}'>
</a>
</div>
`
                }
                $('html').html(html);
            }
        }
        $("img").on("error" ,function(){
            $(this).parent().parent().remove()
        })
    }
    DO()
})()
