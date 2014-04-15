---~~~Groovebrother~~~---
javascript:
title = function(){
  var newtitle = 'Grooveshark - ' + $('#now-playing-metadata').text();
	$('title').text(newtitle);
	console.log(newtitle);
}
var i = 1;
function myLoop () {
   setTimeout(function () {
      title();
      i++;
      if (i < 1e4) {
         myLoop();
      }
   }, 10000)
}
title();
myLoop();
		
//function myLoop(){setTimeout(function(){title();i++;if(i<1e4){myLoop()}},1e4)}title=function(){var e="Grooveshark - "+$("#now-playing-metadata").text();$("title").text(e);console.log(e)};var i=1;title();myLoop()

---~~~Pandora~~~---
javascript:
title = function(){
  var newtitle = 'Pandora - ' + $('.info .playerBarSong').text() + ' - ' + $('.info .playerBarArtist').text();
	$('title').text(newtitle);
	console.log(newtitle);
}
var i = 1;
function myLoop () {
   setTimeout(function () {
      title();
      i++;
      if (i < 1e4) {
         myLoop();
      }
   }, 10000)
}
title();
myLoop();
//function myLoop(){setTimeout(function(){title();i++;if(i<1e4){myLoop()}},1e4)}title=function(){var e="Pandora - "+$(".info .playerBarSong").text()+" - "+$(".info .playerBarArtist").text();$("title").text(e);console.log(e)};var i=1;title();myLoop()

---~~~plug.dj~~~---
javascript:
title = function(){
  var newtitle = 'Plug.dj - ' + $('#now-playing-value').text();
	$('title').text(newtitle);
	console.log(newtitle);
}
var i = 1;
function myLoop () {
   setTimeout(function () {
      title();
      i++;
      if (i < 1e4) {
         myLoop();
      }
   }, 10000)
}
title();
myLoop();
//function myLoop(){setTimeout(function(){title();i++;if(i<1e4){myLoop()}},1e4)}title=function(){var e="Plug.dj - "+$("#now-playing-value").text();$("title").text(e);console.log(e)};var i=1;title();myLoop()

---~~~Runs external js~~~---
javascript:(function(){document.body.appendChild(document.createElement("script")).src="//yourjavascript.com/19414811763/external-compress.js"})()