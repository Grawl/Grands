/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Grands\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-YouTube' : '&#xe000;',
			'icon-Yandex' : '&#xe001;',
			'icon-Vkontakte' : '&#xe002;',
			'icon-VK' : '&#xe003;',
			'icon-vimeo' : '&#xe004;',
			'icon-twitter' : '&#xe005;',
			'icon-tumblr' : '&#xe006;',
			'icon-Steam' : '&#xe007;',
			'icon-StackOverflow' : '&#xe008;',
			'icon-SoundCloud' : '&#xe009;',
			'icon-Skype' : '&#xe00a;',
			'icon-Share' : '&#xe00b;',
			'icon-RSS' : '&#xe00c;',
			'icon-Readability' : '&#xe00d;',
			'icon-Read-it-Later' : '&#xe00e;',
			'icon-Pocket' : '&#xe00f;',
			'icon-Pinterest' : '&#xe010;',
			'icon-Picasa' : '&#xe011;',
			'icon-OpenID' : '&#xe012;',
			'icon-MySpace' : '&#xe013;',
			'icon-MoiKrug' : '&#xe014;',
			'icon-Linked-in' : '&#xe015;',
			'icon-LiveJournal' : '&#xe016;',
			'icon-lastfm' : '&#xe017;',
			'icon-Jabber' : '&#xe018;',
			'icon-Instapaper' : '&#xe019;',
			'icon-HabraHabr' : '&#xe01a;',
			'icon-google' : '&#xe01b;',
			'icon-GitHub-octoface' : '&#xe01c;',
			'icon-GitHub-circle' : '&#xe01d;',
			'icon-FourSquare' : '&#xe01e;',
			'icon-flickr' : '&#xe01f;',
			'icon-Flattr' : '&#xe020;',
			'icon-facebook' : '&#xe021;',
			'icon-Evernote' : '&#xe022;',
			'icon-Email' : '&#xe023;',
			'icon-DropBox' : '&#xe024;',
			'icon-Blogspot' : '&#xe025;',
			'icon-BitBucket' : '&#xe026;',
			'icon-YouTube-play' : '&#xe027;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};
