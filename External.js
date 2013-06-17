strip = function(url){
	if('www' in url){
		url = url.replace('www','');
	}
  url = url.split('.')[0];
  url = url.split('/');
	console.log(url);
  return url[2]
}

var grooveshark = function(){
  var newtitle = 'Grooveshark - ' + $('#now-playing-metadata').text();
	console.log(newtitle);
	$('title').text(newtitle);
}

var pandora = function(){
  var newtitle = 'Pandora - ' + $('.info .playerBarSong').text() + ' - ' + $('.info .playerBarArtist').text();
	console.log(newtitle);
	$('title').text(newtitle);
}

var plug = function(){
  var newtitle = 'Plug.dj - ' + $('#now-playing-value').text();
	console.log(newtitle);
	$('title').text(newtitle);
}

var zaycev = function(){
	var newtitle = 'Zaycef - ' + $('.ontheair_artist').text() + $('.ontheair_song').text();
	console.log(newtitle);
	$('title').text(newtitle);
}

redirects = {
'grooveshark': grooveshark,
'plug': plug,
'pandora': pandora,
'zaycev': zaycev
}

site = strip(window.location.origin);
var i = 1;
function myLoop () {
   setTimeout(function () {
      redirects[site]();
      i++;
      if (i < 1e4) {
         myLoop();
      }
   }, 10000)
}
if(site in redirects){
	redirects[site]();
	myLoop();
}