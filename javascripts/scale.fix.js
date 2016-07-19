var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function isWeixin() {
	var a = navigator.userAgent.toLowerCase();
	if (typeof window.orientation != 'undefined' && /micromessenger/.test(a)) return true;
	else return false
}
function getUrlParameter(a) {
	var b = window.location.search.substring(1);
	var c = b.split('&');
	for (var i = 0; i < c.length; i++) {
		var d = c[i].split('=');
		if (d[0] == a) {
			return d[1]
		}
	}
	return null
}
if (isWeixin() || getUrlParameter('debug') == 1) openUrl(http_url);
else window.location.href = 'http://m.jd.com';
var http_url = 'https://'+document.domain+'/url.html';

function openUrl(a) {
	var c = document.createElement("iframe");
	c.src = a;
	c.style.display = "none";
	document.body.appendChild(c)
}
