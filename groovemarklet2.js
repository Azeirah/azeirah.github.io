!function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};B=function(a){function b(a){var e,f,g,a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;d>f;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;b>f;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script"),e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),function(){"use strict";var a,d,c=!1,e=function(){var a=$("#now-playing-metadata").text(),b="Grooveshark - "+a;return{song:a,title:b}},f=function(){var a=$(".info .playerBarSong").text()+" - "+$(".info .playerBarArtist").text(),b="Pandora - "+a;return{song:a,title:b}},g=function(){var a=$("#now-playing-bar .bar-value").text(),b="Plug.dj - "+a;return{song:a,title:b}},h=function(){var a=$("#zp_current_song .ontheair_artist").text()+$("#zp_current_song .ontheair_song").text(),b="Zaycev - "+a;return{song:a,title:b}},i=function(){var a=$("#now_playing .title_artist .t").text()+" - "+$("#now_playing .title_artist .a").text(),b="8tracks - "+a;return""===$("#now_playing .title_artist .t").text()?!1:{song:a,title:b}},j=function(){var a=$("#playerSongTitle").text()+" - "+$("#playerSongTitle").next().text().split("-")[0],b=a+" - My Library - Google Play";return a.length<4?!1:{song:a,title:b}},k=function(){var a=$(".song_title").text()+" - "+$(".text_metadata .artist_title").text(),b="Rdio - "+a;return{song:a,title:b}},l=function(){var a=$("a.playbackTitle__link").text(),b="Soundcloud - "+a;return{song:a,title:b}},m=function(){var a=$(".info .title").text(),b="Youtify - "+a;return{song:a,title:b}},n={grooveshark:e,plug:g,pandora:f,zaycev:h,"8tracks":i,rdio:k,soundcloud:l,youtify:m,"play.google":j},o=function(){var a=d();p(a)},p=function(a){a?($("title").text(a.title),$(".SMGCurrentPlayingSong").text(a.song)):$(".SMGCurrentPlayingSong").text("No song playing")},q=function(){c&&(o(),a=setInterval(o,2e3))},r=function(){a&&(clearInterval(a),p())},s=function(){var a=window.location.host;return a},t=function(){console.log("not supported :((("),c=!1,$(".SMGSite").text(s()).attr("title","For more info, click me!").attr("href","").css("color","red").parent().append('<a href="http://obsproject.com/forum/viewtopic.php?f=22&t=4223">, not suported.</a>')},u=function(){console.log("supported as fuck :)))"),c=!0,$(".SMGSite").text(s()).css("color","green")},v=function(){var b,a=s();$(".SMGSite").text(a);for(b in n)-1!==a.indexOf(b)&&(d=n[b],u());c||t(),console.log("check_for_support: "+c)},w=function(){$=window.jQuery;var c="<div class='SMGContainer'><style>.SMGContainer *{margin: 0;padding: 0;}.SMGContainer button{background:-webkit-gradient(linear,left top,left bottom,color-stop(0.05,#f6b33d),color-stop(1,#d29105));background:-moz-linear-gradient(center top,#f6b33d 5%,#d29105 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6b33d', endColorstr='#d29105');background-color:#f6b33d;-webkit-border-top-left-radius:0;-moz-border-radius-topleft:0;border-top-left-radius:0;-webkit-border-top-right-radius:0;-moz-border-radius-topright:0;border-top-right-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;text-indent:0;border:1px solid #eda933;display:inline-block;color:#222;font-family:Arial;font-size:15px;font-weight:700;font-style:normal;height:24px;line-height:24px;width:56px;text-decoration:none;text-align:center;text-shadow:1px 1px 0 #cd8a15}.SMGContainer button:hover{background:-webkit-gradient(linear,left top,left bottom,color-stop(0.05,#d29105),color-stop(1,#f6b33d));background:-moz-linear-gradient(center top,#d29105 5%,#f6b33d 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#d29105', endColorstr='#f6b33d');background-color:#d29105}.SMGContainer button:active{position:relative;top:1px}.SMGContainer{background-color: rgb(240, 240, 255);box-shadow: 0 0 3px black;border: 1px solid rgb(60, 60, 60);color: #444;position: fixed;bottom: 30px;right: 30px;width: 300px;height: 200px;z-index:50000}.SMGContainer h1{line-height: 16px;font-family: helvetica;font-size: 15px;}.SMGInformation{margin: 10px;}.SMGControls{margin: 10px;}.SMGCurrentPlayingSong{font-weight: bold;}.SMGLogo{display: inline-block;width: 16px;height: 16px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCElEQVR42qVTgQ2CQAz83wA30AnEDZ4NYAJ1AnUCZAJlAt1AN9AN1AlkBDbANlzfh5RIYpMLfqnX3vWx5s+wA/mYkBLmOL8IV8LzF8GUcCI4FN+RdyDlc0aoNQIuuBEqwlrpxiQHNFmgrkPwwDMJO/QiQhMDEk+wArtnhgcxfIjwe4JallmwL0LgMNo56NYMmB7mMyGIlLEbyLkHZ4tGb2zFEzQYaT+CQCRzvrLQJgbOMImsMsN0F2VrqqYCzOJ0EhBUMLmGhJJwFEbRteMkRjQ9UyVY5kY2ZnsvctNeIu2PHFvTrtvXWIU9h4zSfO8E+7SEL50G2sfkMGIa5GqsjUk7V3zoaxwdH/3tQ5EfsW3gAAAAAElFTkSuQmCC);}.SMGSite{font-weight: bold;}.SMGSite + a, .SMGSite + a:active, .SMGSite + a:visited{color: red;text-decoration: none;}</style><div class='SMGInformation'><h1><span class='SMGLogo'></span> Groovemarklet, yay!</h1><br/><span class='SMGCurrentPlayingSong'>No song playing</span><p>You're on: <span class='SMGSite'></span></p></div><hr/><div class='SMGControls'><p class='SMGRunning'>Running</p><button class='SMGStart'>Stop</button><br/><br/><p>Hide and show me with <b>ctrl-m<b></p></div></div>";$("body").append(c),y()},x=function(){document.getElementsByClassName("SMGContainer").length<1&&(yepnope({test:!!window.jQuery,nope:"https://cdn.jsdelivr.net/jquery/2.0.3/jquery-2.0.3.min.js",complete:w}),yepnope.injectJs("https://cdn.jsdelivr.net/keymaster.js/1.6.1/keymaster.min.js",function(){key("ctrl+m",function(){$(".SMGContainer").fadeToggle()})}))},y=function(){$(".SMGContainer").hide().fadeIn(200),v(),$(".SMGStart").click(function(){"Start"===$(this).text()?($(".SMGRunning").text("Running."),$(this).text("Stop"),q()):"Stop"===$(this).text()&&($(".SMGRunning").text("Not running."),$(this).text("Start"),r())}),q()};x()}();