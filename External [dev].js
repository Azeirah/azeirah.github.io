var strip = function(url) {
	if (url.indexOf('www.') !== -1){
		url = url.replace('www.', '');
	}
	if (url.indexOf('http://') !== -1) {
		url = url.replace('http://', '');
	}
	if (url.indexOf('https://') !== -1) {
		url = url.replace('https://', '');
	}
	url = url.split('.')[0];
	return url;
};

var grooveshark = function() {
	var newtitle = 'Grooveshark - ' + $('#now-playing-metadata').text();
	$('title').text(newtitle);
};

var pandora = function() {
	var newtitle = 'Pandora - ' + $('.info .playerBarSong').text() + ' - ' + $('.info .playerBarArtist').text();
	$('title').text(newtitle);
};

var plug = function() {
	var newtitle = 'Plug.dj - ' + $('#now-playing-value').text();
	$('title').text(newtitle);
};

var zaycev = function() {
	var newtitle = 'Zaycev - ' + $('#zp_current_song .ontheair_artist').text() + $('#zp_current_song .ontheair_song').text();
	$('title').text(newtitle);
};

var eighttracks = function() {
	var newtitle = '8tracks - ' + $('.t').text() + ' - ' + $('.a').text();
	$('title').text(newtitle);
};

var rdio = function() {
	var newtitle = 'Rdio - ' + $('.song_title').text() + ' - ' + $('.text_metadata .artist_title').text();
	$('title').text(newtitle);
};

var soundcloud = function() {
	var newTitle = $('title').text().replace('▶ ', 'Soundcloud - ');
	$('title').text(newTitle);
}

var youtify = function() {
	var newTitle = 'Youtify - ' + $('.info .title').text();
	$('title').text(newTitle);
}

var redirects = {
	'grooveshark': grooveshark,
	'plug': plug,
	'pandora': pandora,
	'zaycev': zaycev,
	'8tracks': eighttracks,
	'rdio': rdio,
	'soundcloud': soundcloud,
	'youtify': youtify
};

var site = strip(window.location.origin);
redirects[site]();
setInterval(redirects[site], 5000);
