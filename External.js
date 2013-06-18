strip = function(url){
	if(url.indexOf('www.') != -1){
		url = url.replace('www.', '');
	}
	if(url.indexOf('http://') != -1){
		url = url.replace('http://', '');
	}
	if(url.indexOf('https://') != -1){
		url = url.replace('https://', '');
	}
  url = url.split('.')[0];
	console.log(url)
  return url
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
	var newtitle = 'Zaycev - ' + $('#zp_current_song .ontheair_artist').text() + $('#zp_current_song .ontheair_song').text();
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