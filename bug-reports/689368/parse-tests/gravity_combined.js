  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-86951-7']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
  })();



(function(){var aa="_gat",ba="_gaq",r=true,v=false,w=undefined,ca="4.6.5",x="length",y="cookie",A="location",B="&",C="=",D="__utma=",E="__utmb=",G="__utmc=",da="__utmk=",H="__utmv=",J="__utmz=",K="__utmx=",L="GASO=";var N=function(i){return w==i||"-"==i||""==i},ea=function(i){return i[x]>0&&" \n\r\t".indexOf(i)>-1},P=function(i,l,g){var t="-",k;if(!N(i)&&!N(l)&&!N(g)){k=i.indexOf(l);if(k>-1){g=i.indexOf(g,k);if(g<0)g=i[x];t=O(i,k+l.indexOf(C)+1,g)}}return t},Q=function(i){var l=v,g=0,t,k;if(!N(i)){l=r;for(t=0;t<i[x];t++){k=i.charAt(t);g+="."==k?1:0;l=l&&g<=1&&(0==t&&"-"==k||".0123456789".indexOf(k)>-1)}}return l},S=function(i,l){var g=encodeURIComponent;return g instanceof Function?l?encodeURI(i):g(i):escape(i)},
T=function(i,l){var g=decodeURIComponent,t;i=i.split("+").join(" ");if(g instanceof Function)try{t=l?decodeURI(i):g(i)}catch(k){t=unescape(i)}else t=unescape(i);return t},U=function(i,l){return i.indexOf(l)>-1},V=function(i,l){i[i[x]]=l},W=function(i){return i.toLowerCase()},X=function(i,l){return i.split(l)},fa=function(i,l){return i.indexOf(l)},O=function(i,l,g){g=w==g?i[x]:g;return i.substring(l,g)},ga=function(i,l){return i.join(l)},ia=function(i){var l=1,g=0,t;if(!N(i)){l=0;for(t=i[x]-1;t>=0;t--){g=
i.charCodeAt(t);l=(l<<6&268435455)+g+(g<<14);g=l&266338304;l=g!=0?l^g>>21:l}}return l},ja=function(){var i=window,l=w;if(i&&i.gaGlobal&&i.gaGlobal.hid)l=i.gaGlobal.hid;else{l=Y();i.gaGlobal=i.gaGlobal?i.gaGlobal:{};i.gaGlobal.hid=l}return l},Y=function(){return Math.round(Math.random()*2147483647)},Z={Ha:function(i,l){this.bb=i;this.nb=l},ib:v,_gasoDomain:w,_gasoCPath:w};Z.Gb=function(){function i(k){return new t(k[0],k[1])}function l(k){var p=[];k=k.split(",");var f;for(f=0;f<k.length;++f)p.push(i(k[f].split(":")));return p}var g=this,t=Z.Ha;g.Ia="utm_campaign";g.Ja="utm_content";g.Ka="utm_id";g.La="utm_medium";g.Ma="utm_nooverride";g.Na="utm_source";g.Oa="utm_term";g.Pa="gclid";g.ba=0;g.z=0;g.Ta=15768E6;g.sb=18E5;g.v=63072E6;g.ta=[];g.va=[];g.nc="cse";g.oc="q";g.ob=5;g.T=l("daum:q,eniro:search_word,naver:query,images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:query,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:words");
g.t=w;g.lb=v;g.h="/";g.U=100;g.oa="/__utm.gif";g.ga=1;g.ha=1;g.u="|";g.fa=1;g.da=1;g.Ra=1;g.b="auto";g.I=1;g.ra=1E3;g.Jc=10;g.Pb=10;g.Kc=0.2;g.o=w;g.a=document;g.e=window};Z.Hb=function(i){function l(d,a,j,c){var n="",s=0;n=P(d,"2"+a,";");if(!N(n)){d=n.indexOf("^"+j+".");if(d<0)return["",0];n=O(n,d+j[x]+2);if(n.indexOf("^")>0)n=n.split("^")[0];j=n.split(":");n=j[1];s=parseInt(j[0],10);if(!c&&s<p.r)n=""}if(N(n))n="";return[n,s]}function g(d,a){return"^"+ga([[a,d[1]].join("."),d[0]],":")}function t(d,a){f.a[y]=d+"; path="+f.h+"; "+a+p.fb()}function k(d){var a=new Date;d=new Date(a.getTime()+d);return"expires="+d.toGMTString()+"; "}var p=this,f=i;p.r=(new Date).getTime();
var h=[D,E,G,J,H,K,L];p.k=function(){var d=f.a[y];return f.o?p.Wb(d,f.o):d};p.Wb=function(d,a){var j=[],c,n;for(c=0;c<h[x];c++){n=l(d,h[c],a)[0];N(n)||(j[j[x]]=h[c]+n+";")}return j.join("")};p.l=function(d,a,j){var c=j>0?k(j):"";if(f.o){a=p.kc(f.a[y],d,f.o,a,j);d="2"+d;c=j>0?k(f.v):""}t(d+a,c)};p.kc=function(d,a,j,c,n){var s="";n=n||f.v;c=g([c,p.r+n*1],j);s=P(d,"2"+a,";");if(!N(s)){d=g(l(d,a,j,r),j);s=ga(s.split(d),"");return s=c+s}return c};p.fb=function(){return N(f.b)?"":"domain="+f.b+";"}};Z.$=function(i){function l(b){b=b instanceof Array?b.join("."):"";return N(b)?"-":b}function g(b,e){var o=[];if(!N(b)){o=b.split(".");if(e)for(b=0;b<o[x];b++)Q(o[b])||(o[b]="-")}return o}function t(b,e,o){var m=c.M,q,u;for(q=0;q<m[x];q++){u=m[q][0];u+=N(e)?e:e+m[q][4];m[q][2](P(b,u,o))}}var k,p,f,h,d,a,j,c=this,n,s=i;c.j=new Z.Hb(i);c.kb=function(){return w==n||n==c.P()};c.k=function(){return c.j.k()};c.ma=function(){return d?d:"-"};c.vb=function(b){d=b};c.za=function(b){n=Q(b)?b*1:"-"};c.la=function(){return l(a)};
c.Aa=function(b){a=g(b)};c.Vb=function(){c.j.l(H,"",-1)};c.lc=function(){return n?n:"-"};c.fb=function(){return N(s.b)?"":"domain="+s.b+";"};c.ja=function(){return l(k)};c.tb=function(b){k=g(b,1)};c.C=function(){return l(p)};c.ya=function(b){p=g(b,1)};c.ka=function(){return l(f)};c.ub=function(b){f=g(b,1)};c.na=function(){return l(h)};c.wb=function(b){h=g(b);for(b=0;b<h[x];b++)if(b<4&&!Q(h[b]))h[b]="-"};c.fc=function(){return j};c.Dc=function(b){j=b};c.Sb=function(){k=[];p=[];f=[];h=[];d=w;a=[];n=
w};c.P=function(){var b="",e;for(e=0;e<c.M[x];e++)b+=c.M[e][1]();return ia(b)};c.ua=function(b){var e=c.k(),o=v;if(e){t(e,b,";");c.za(c.P());o=r}return o};c.zc=function(b){t(b,"",B);c.za(P(b,da,B))};c.Hc=function(){var b=c.M,e=[],o;for(o=0;o<b[x];o++)V(e,b[o][0]+b[o][1]());V(e,da+c.P());return e.join(B)};c.Nc=function(b,e){var o=c.M,m=s.h;c.ua(b);s.h=e;for(b=0;b<o[x];b++)N(o[b][1]())||o[b][3]();s.h=m};c.Cb=function(){c.j.l(D,c.ja(),s.v)};c.Ea=function(){c.j.l(E,c.C(),s.sb)};c.Db=function(){c.j.l(G,
c.ka(),0)};c.Ga=function(){c.j.l(J,c.na(),s.Ta)};c.Eb=function(){c.j.l(K,c.ma(),s.v)};c.Fa=function(){c.j.l(H,c.la(),s.v)};c.Oc=function(){c.j.l(L,c.fc(),0)};c.M=[[D,c.ja,c.tb,c.Cb,"."],[E,c.C,c.ya,c.Ea,""],[G,c.ka,c.ub,c.Db,""],[K,c.ma,c.vb,c.Eb,""],[J,c.na,c.wb,c.Ga,"."],[H,c.la,c.Aa,c.Fa,"."]]};Z.Kb=function(i){var l=this,g=i,t=new Z.$(g),k=function(){},p=function(f){var h=(new Date).getTime(),d;d=(h-f[3])*(g.Kc/1E3);if(d>=1){f[2]=Math.min(Math.floor(f[2]*1+d),g.Pb);f[3]=h}return f};l.H=function(f,h,d,a,j,c){var n,s=g.I,b=g.a[A];t.ua(d);n=X(t.C(),".");if(n[1]<500||a){if(j)n=p(n);if(a||!j||n[2]>=1){if(!a&&j)n[2]=n[2]*1-1;n[1]=n[1]*1+1;f="?utmwv="+ca+"&utmn="+Y()+(N(b.hostname)?"":"&utmhn="+S(b.hostname))+(g.U==100?"":"&utmsp="+S(g.U))+f;if(0==s||2==s){a=2==s?k:c||k;l.$a(g.oa+f,a)}if(1==s||
2==s){f=("https:"==b.protocol?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif")+f+"&utmac="+h+"&utmcc="+l.ac(d);if(ka)f+="&gaq=1";l.$a(f,c)}}}t.ya(n.join("."));t.Ea()};l.$a=function(f,h){var d=new Image(1,1);d.src=f;d.onload=function(){d.onload=null;(h||k)()}};l.ac=function(f){var h=[],d=[D,J,H,K],a,j=t.k(),c;for(a=0;a<d[x];a++){c=P(j,d[a]+f,";");if(!N(c)){if(d[a]==H){c=X(c.split(f+".")[1],"|")[0];if(N(c))continue;c=f+"."+c}V(h,d[a]+c+";")}}return S(h.join("+"))}};Z.n=function(){var i=this;i.Y=[];i.hb=function(l){var g,t=i.Y,k;for(k=0;k<t.length;k++)g=l==t[k].q?t[k]:g;return g};i.Ob=function(l,g,t,k,p,f,h,d){var a=i.hb(l);if(w==a){a=new Z.n.Mb(l,g,t,k,p,f,h,d);V(i.Y,a)}else{a.Qa=g;a.Ab=t;a.zb=k;a.xb=p;a.Xa=f;a.yb=h;a.Za=d}return a}};Z.n.Lb=function(i,l,g,t,k,p){var f=this;f.Bb=i;f.Ba=l;f.D=g;f.Va=t;f.pb=k;f.qb=p;f.Ca=function(){return"&"+["utmt=item","tid="+S(f.Bb),"ipc="+S(f.Ba),"ipn="+S(f.D),"iva="+S(f.Va),"ipr="+S(f.pb),"iqt="+S(f.qb)].join("&utm")}};
Z.n.Mb=function(i,l,g,t,k,p,f,h){var d=this;d.q=i;d.Qa=l;d.Ab=g;d.zb=t;d.xb=k;d.Xa=p;d.yb=f;d.Za=h;d.R=[];d.Nb=function(a,j,c,n,s){var b=d.gc(a),e=d.q;if(w==b)V(d.R,new Z.n.Lb(e,a,j,c,n,s));else{b.Bb=e;b.Ba=a;b.D=j;b.Va=c;b.pb=n;b.qb=s}};d.gc=function(a){var j,c=d.R,n;for(n=0;n<c.length;n++)j=a==c[n].Ba?c[n]:j;return j};d.Ca=function(){return"&"+["utmt=tran","id="+S(d.q),"st="+S(d.Qa),"to="+S(d.Ab),"tx="+S(d.zb),"sp="+S(d.xb),"ci="+S(d.Xa),"rg="+S(d.yb),"co="+S(d.Za)].join("&utmt")}};Z.Fb=function(i){function l(){var f,h,d;h="ShockwaveFlash";var a="$version",j=k.d?k.d.plugins:w;if(j&&j[x]>0)for(f=0;f<j[x]&&!d;f++){h=j[f];if(U(h.name,"Shockwave Flash"))d=h.description.split("Shockwave Flash ")[1]}else{h=h+"."+h;try{f=new ActiveXObject(h+".7");d=f.GetVariable(a)}catch(c){}if(!d)try{f=new ActiveXObject(h+".6");d="WIN 6,0,21,0";f.AllowScriptAccess="always";d=f.GetVariable(a)}catch(n){}if(!d)try{f=new ActiveXObject(h);d=f.GetVariable(a)}catch(s){}if(d){d=X(d.split(" ")[1],",");d=d[0]+
"."+d[1]+" r"+d[2]}}return d?d:p}var g=i,t=g.e,k=this,p="-";k.V=t.screen;k.Sa=!k.V&&t.java?java.awt.Toolkit.getDefaultToolkit():w;k.d=t.navigator;k.W=p;k.xa=p;k.Wa=p;k.qa=p;k.pa=1;k.eb=p;k.bc=function(){var f;if(t.screen){k.W=k.V.width+"x"+k.V.height;k.xa=k.V.colorDepth+"-bit"}else if(k.Sa)try{f=k.Sa.getScreenSize();k.W=f.width+"x"+f.height}catch(h){}k.qa=W(k.d&&k.d.language?k.d.language:k.d&&k.d.browserLanguage?k.d.browserLanguage:p);k.pa=k.d&&k.d.javaEnabled()?1:0;k.eb=g.ha?l():p;k.Wa=S(g.a.characterSet?
g.a.characterSet:g.a.charset?g.a.charset:p)};k.Ic=function(){return B+"utm"+["cs="+S(k.Wa),"sr="+k.W,"sc="+k.xa,"ul="+k.qa,"je="+k.pa,"fl="+S(k.eb)].join("&utm")};k.$b=function(){var f=g.a,h=t.history[x];f=k.d.appName+k.d.version+k.qa+k.d.platform+k.d.userAgent+k.pa+k.W+k.xa+(f[y]?f[y]:"")+(f.referrer?f.referrer:"");for(var d=f[x];h>0;)f+=h--^d++;return ia(f)}};Z.m=function(i,l,g,t){function k(d){var a="";d=W(d.split("://")[1]);if(U(d,"/")){d=d.split("/")[1];if(U(d,"?"))a=d.split("?")[0]}return a}function p(d){var a="";a=W(d.split("://")[1]);if(U(a,"/"))a=a.split("/")[0];return a}var f=t,h=this;h.c=i;h.rb=l;h.r=g;h.ic=function(d){var a=h.gb();return new Z.m.w(P(d,f.Ka+C,B),P(d,f.Na+C,B),P(d,f.Pa+C,B),h.Q(d,f.Ia,"(not set)"),h.Q(d,f.La,"(not set)"),h.Q(d,f.Oa,a&&!N(a.K)?T(a.K):w),h.Q(d,f.Ja,w))};h.jb=function(d){var a=p(d),j=k(d);if(U(a,"google")){d=d.split("?").join(B);
if(U(d,B+f.oc+C))if(j==f.nc)return r}return v};h.gb=function(){var d,a=h.rb,j,c,n=f.T;if(!(N(a)||"0"==a||!U(a,"://")||h.jb(a))){d=p(a);for(j=0;j<n[x];j++){c=n[j];if(U(d,W(c.bb))){a=a.split("?").join(B);if(U(a,B+c.nb+C)){d=a.split(B+c.nb+C)[1];if(U(d,B))d=d.split(B)[0];return new Z.m.w(w,c.bb,w,"(organic)","organic",d,w)}}}}};h.Q=function(d,a,j){d=P(d,a+C,B);return j=!N(d)?T(d):!N(j)?j:"-"};h.uc=function(d){var a=f.ta,j=v,c;if(d&&"organic"==d.S){d=W(T(d.K));for(c=0;c<a[x];c++)j=j||W(a[c])==d}return j};
h.hc=function(){var d="",a="";d=h.rb;if(!(N(d)||"0"==d||!U(d,"://")||h.jb(d))){d=d.split("://")[1];if(U(d,"/")){a=O(d,d.indexOf("/"));a=a.split("?")[0];d=W(d.split("/")[0])}if(0==d.indexOf("www."))d=O(d,4);return new Z.m.w(w,d,w,"(referral)","referral",w,a)}};h.Xb=function(d){var a="";if(f.ba){a=d&&d.hash?d.href.substring(d.href.indexOf("#")):"";a=""!=a?a+B:a}a+=d.search;return a};h.dc=function(){return new Z.m.w(w,"(direct)",w,"(direct)","(none)",w,w)};h.vc=function(d){var a=v,j,c=f.va;if(d&&"referral"==
d.S){d=W(S(d.X));for(j=0;j<c[x];j++)a=a||U(d,W(c[j]))}return a};h.L=function(d){return w!=d&&d.mb()};h.cc=function(d,a){var j="",c="-",n,s=0,b,e,o=h.c;if(!d)return"";e=d.k();j=h.Xb(f.a[A]);if(f.z&&d.kb()){c=d.na();if(!N(c)&&!U(c,";")){d.Ga();return""}}c=P(e,J+o+".",";");n=h.ic(j);if(h.L(n)){j=P(j,f.Ma+C,B);if("1"==j&&!N(c))return""}if(!h.L(n)){n=h.gb();if(!N(c)&&h.uc(n))return""}if(!h.L(n)&&a){n=h.hc();if(!N(c)&&h.vc(n))return""}if(!h.L(n))if(N(c)&&a)n=h.dc();if(!h.L(n))return"";if(!N(c)){s=c.split(".");
b=new Z.m.w;b.Zb(s.slice(4).join("."));b=W(b.Da())==W(n.Da());s=s[3]*1}if(!b||a){a=P(e,D+o+".",";");e=a.lastIndexOf(".");a=e>9?O(a,e+1)*1:0;s++;a=0==a?1:a;d.wb([o,h.r,a,s,n.Da()].join("."));d.Ga();return B+"utmcn=1"}else return B+"utmcr=1"}};
Z.m.w=function(i,l,g,t,k,p,f){var h=this;h.q=i;h.X=l;h.ea=g;h.D=t;h.S=k;h.K=p;h.Ya=f;h.Da=function(){var d=[],a=[["cid",h.q],["csr",h.X],["gclid",h.ea],["ccn",h.D],["cmd",h.S],["ctr",h.K],["cct",h.Ya]],j,c;if(h.mb())for(j=0;j<a[x];j++)if(!N(a[j][1])){c=a[j][1].split("+").join("%20");c=c.split(" ").join("%20");V(d,"utm"+a[j][0]+C+c)}return d.join("|")};h.mb=function(){return!(N(h.q)&&N(h.X)&&N(h.ea))};h.Zb=function(d){var a=function(j){return T(P(d,"utm"+j+C,"|"))};h.q=a("cid");h.X=a("csr");h.ea=a("gclid");
h.D=a("ccn");h.S=a("cmd");h.K=a("ctr");h.Ya=a("cct")}};Z.Ib=function(i,l,g,t){function k(j,c,n){var s;if(!N(n)){n=n.split(",");for(var b=0;b<n[x];b++){s=n[b];if(!N(s)){s=s.split(h);if(s[x]==4)c[s[0]]=[s[1],s[2],j]}}}}var p=this,f=l,h=C,d=i,a=t;p.O=g;p.sa="";p.p={};p.tc=function(){var j;j=X(P(p.O.k(),H+f+".",";"),f+".")[1];if(!N(j)){j=j.split("|");k(1,p.p,j[1]);p.sa=j[0];p.Z()}};p.Z=function(){p.Qb();var j=p.sa,c,n,s="";for(c in p.p)if((n=p.p[c])&&1===n[2])s+=c+h+n[0]+h+n[1]+h+1+",";N(s)||(j+="|"+s);if(N(j))p.O.Vb();else{p.O.Aa(f+"."+j);p.O.Fa()}};p.Ec=
function(j){p.sa=j;p.Z()};p.Cc=function(j,c,n,s){if(1!=s&&2!=s&&3!=s)s=3;var b=v;if(c&&n&&j>0&&j<=d.ob){c=S(c);n=S(n);if(c[x]+n[x]<=64){p.p[j]=[c,n,s];p.Z();b=r}}return b};p.mc=function(j){if((j=p.p[j])&&1===j[2])return j[1]};p.Ub=function(j){var c=p.p;if(c[j]){delete c[j];p.Z()}};p.Qb=function(){a._clearKey(8);a._clearKey(9);a._clearKey(11);var j=p.p,c,n;for(n in j)if(c=j[n]){a._setKey(8,n,c[0]);a._setKey(9,n,c[1]);(c=c[2])&&3!=c&&a._setKey(11,n,""+c)}}};Z.N=function(){function i(m,q,u,z){if(w==f[m])f[m]={};if(w==f[m][q])f[m][q]=[];f[m][q][u]=z}function l(m,q){if(w!=f[m]&&w!=f[m][q]){f[m][q]=w;q=r;var u;for(u=0;u<a[x];u++)if(w!=f[m][a[u]]){q=v;break}if(q)f[m]=w}}function g(m){var q="",u=v,z,M;for(z=0;z<a[x];z++){M=m[a[z]];if(w!=M){if(u)q+=a[z];q+=t(M);u=v}else u=r}return q}function t(m){var q=[],u,z;for(z=0;z<m[x];z++)if(w!=m[z]){u="";if(z!=o&&w==m[z-1])u+=z.toString()+s;u+=k(m[z]);V(q,u)}return j+q.join(n)+c}function k(m){var q="",u,z,M;for(u=0;u<
m[x];u++){z=m.charAt(u);M=e[z];q+=w!=M?M:z}return q}var p=this,f={},h="k",d="v",a=[h,d],j="(",c=")",n="*",s="!",b="'",e={};e[b]="'0";e[c]="'1";e[n]="'2";e[s]="'3";var o=1;p.qc=function(m){return w!=f[m]};p.G=function(){var m="",q;for(q in f)if(w!=f[q])m+=q.toString()+g(f[q]);return m};p.Ac=function(m){if(m==w)return p.G();var q=m.G(),u;for(u in f)if(w!=f[u]&&!m.qc(u))q+=u.toString()+g(f[u]);return q};p._setKey=function(m,q,u){if(typeof u!="string")return v;i(m,h,q,u);return r};p._setValue=function(m,
q,u){if(typeof u!="number"&&(w==Number||!(u instanceof Number))||Math.round(u)!=u||u==NaN||u==Infinity)return v;i(m,d,q,u.toString());return r};p._getKey=function(m,q){return w!=f[m]&&w!=f[m][h]?f[m][h][q]:w};p._getValue=function(m,q){return w!=f[m]&&w!=f[m][d]?f[m][d][q]:w};p._clearKey=function(m){l(m,h)};p._clearValue=function(m){l(m,d)}};Z.Jb=function(i,l){var g=this;g.Qc=l;g.xc=i;g._trackEvent=function(t,k,p){return l._trackEvent(g.xc,t,k,p)}};Z.aa=function(i,l){function g(){if("auto"==c.b){var b=c.a.domain;if("www."==O(b,0,4))b=O(b,4);c.b=b}c.b=W(c.b)}function t(){var b=c.b,e=b.indexOf("www.google.")*b.indexOf(".google.")*b.indexOf("google.");return e||"/"!=c.h||b.indexOf("google.org")>-1}function k(b,e,o){if(N(b)||N(e)||N(o))return"-";b=P(b,D+a.c+".",e);if(!N(b)){b=b.split(".");b[5]=b[5]?b[5]*1+1:1;b[3]=b[4];b[4]=o;b=b.join(".")}return b}function p(){return"file:"!=c.a[A].protocol&&t()}function f(b){if(!b||""==b)return"";for(;ea(b.charAt(0));)b=
O(b,1);for(;ea(b.charAt(b[x]-1));)b=O(b,0,b[x]-1);return b}function h(b,e,o,m){if(!N(b())){e(m?T(b()):b());U(b(),";")||o()}}function d(b){var e,o=""!=b&&c.a[A].host!=b;if(o)for(e=0;e<c.t[x];e++)o=o&&fa(W(b),W(c.t[e]))==-1;return o}var a=this,j=w,c=new Z.Gb,n=v,s=w;a.e=window;a.r=Math.round((new Date).getTime()/1E3);a.s=i||"UA-XXXXX-X";a.ab=c.a.referrer;a.ia=w;a.f=w;a.B=w;a.F=v;a.A=w;a.Ua="";a.g=w;a.cb=w;a.c=w;a.i=w;c.o=l?S(l):w;a.wc=function(){var b=v;if(a.B)b=a.B.match(/^[0-9a-z-_.]{10,1200}$/i);
return b};a.jc=function(){return Y()^a.A.$b()&2147483647};a.ec=function(){if(!c.b||""==c.b||"none"==c.b){c.b="";return 1}g();return c.Ra?ia(c.b):1};a.Yb=function(b,e){if(N(b))b="-";else{e+=c.h&&"/"!=c.h?c.h:"";e=b.indexOf(e);b=e>=0&&e<=8?"0":"["==b.charAt(0)&&"]"==b.charAt(b[x]-1)?"-":b}return b};a.wa=function(b){var e="",o=c.a;e+=c.fa?a.A.Ic():"";e+=c.da?a.Ua:"";e+=c.ga&&!N(o.title)?"&utmdt="+S(o.title):"";e+="&utmhid="+ja()+"&utmr="+S(a.ia)+"&utmp="+S(a.Bc(b));return e};a.Bc=function(b){var e=c.a[A];
return b=w!=b&&""!=b?S(b,r):S(e.pathname+e.search,r)};a.Lc=function(b){if(a.J()){var e="";if(a.g!=w&&a.g.G()[x]>0)e+="&utme="+S(a.g.G());e+=a.wa(b);j.H(e,a.s,a.c)}};a.Tb=function(){var b=new Z.$(c);return b.ua(a.c)?b.Hc():w};a._getLinkerUrl=function(b,e){var o=b.split("#"),m=b,q=a.Tb();if(q)if(e&&1>=o[x])m+="#"+q;else if(!e||1>=o[x])if(1>=o[x])m+=(U(b,"?")?B:"?")+q;else m=o[0]+(U(b,"?")?B:"?")+q+"#"+o[1];return m};a.Fc=function(){var b;if(a.wc()){a.i.Dc(a.B);a.i.Oc();Z._gasoDomain=c.b;Z._gasoCPath=
c.h;b=c.a.createElement("script");b.type="text/javascript";b.id="_gasojs";b.src="https://www.google.com/analytics/reporting/overlay_js?gaso="+a.B+B+Y();c.a.getElementsByTagName("head")[0].appendChild(b)}};a.pc=function(){var b=a.r,e=a.i,o=e.k(),m=a.c+"",q=c.e,u=q?q.gaGlobal:w,z,M=U(o,D+m+"."),la=U(o,E+m),ma=U(o,G+m),F,I=[],R="",ha=v;o=N(o)?"":o;if(c.z){z=c.a[A]&&c.a[A].hash?c.a[A].href.substring(c.a[A].href.indexOf("#")):"";if(c.ba&&!N(z))R=z+B;R+=c.a[A].search;if(!N(R)&&U(R,D)){e.zc(R);e.kb()||e.Sb();
F=e.ja()}h(e.ma,e.vb,e.Eb,true);h(e.la,e.Aa,e.Fa)}if(N(F))if(M)if(!la||!ma){F=k(o,";",b);a.F=r}else{F=P(o,D+m+".",";");I=X(P(o,E+m,";"),".")}else{F=ga([m,a.jc(),b,b,b,1],".");ha=a.F=r}else if(N(e.C())||N(e.ka())){F=k(R,B,b);a.F=r}else{I=X(e.C(),".");m=I[0]}F=F.split(".");if(q&&u&&u.dh==m&&!c.o){F[4]=u.sid?u.sid:F[4];if(ha){F[3]=u.sid?u.sid:F[4];if(u.vid){b=u.vid.split(".");F[1]=b[0];F[2]=b[1]}}}e.tb(F.join("."));I[0]=m;I[1]=I[1]?I[1]:0;I[2]=w!=I[2]?I[2]:c.Jc;I[3]=I[3]?I[3]:F[4];e.ya(I.join("."));
e.ub(m);N(e.lc())||e.za(e.P());e.Cb();e.Ea();e.Db()};a.rc=function(){j=new Z.Kb(c)};a._initData=function(){var b;if(!n){if(!a.A){a.A=new Z.Fb(c);a.A.bc()}a.c=a.ec();a.i=new Z.$(c);a.g=new Z.N;s=new Z.Ib(c,a.c,a.i,a.g);a.rc()}if(p()){a.pc();s.tc()}if(!n){if(p()){a.ia=a.Yb(a.ab,c.a.domain);if(c.da){b=new Z.m(a.c,a.ia,a.r,c);a.Ua=b.cc(a.i,a.F)}}a.cb=new Z.N;n=r}Z.ib||a.sc()};a._visitCode=function(){a._initData();var b=P(a.i.k(),D+a.c+".",";");b=b.split(".");return b[x]<4?"":b[1]};a._cookiePathCopy=function(b){a._initData();
a.i&&a.i.Nc(a.c,b)};a.sc=function(){var b=c.a[A].hash;if(b&&1==b.indexOf("gaso="))b=P(b,"gaso=",B);else b=(b=c.e.name)&&0<=b.indexOf("gaso=")?P(b,"gaso=",B):P(a.i.k(),L,";");if(b[x]>=10){a.B=b;a.Fc()}Z.ib=r};a.J=function(){return a._visitCode()%1E4<c.U*100};a.Gc=function(){var b,e,o=c.a.links;if(!c.lb){b=c.a.domain;if("www."==O(b,0,4))b=O(b,4);c.t.push("."+b)}for(b=0;b<o[x]&&(c.ra==-1||b<c.ra);b++){e=o[b];if(d(e.host))if(!e.gatcOnclick){e.gatcOnclick=e.onclick?e.onclick:a.yc;e.onclick=function(m){var q=
!this.target||this.target=="_self"||this.target=="_top"||this.target=="_parent";q=q&&!a.Rb(m);a.Mc(m,this,q);return q?v:this.gatcOnclick?this.gatcOnclick(m):r}}}};a.yc=function(){};a._trackPageview=function(b){if(p()){a._initData();c.t&&a.Gc();a.Lc(b);a.F=v}};a._trackTrans=function(){var b=a.c,e=[],o,m,q;a._initData();if(a.f&&a.J()){for(o=0;o<a.f.Y[x];o++){m=a.f.Y[o];V(e,m.Ca());for(q=0;q<m.R[x];q++)V(e,m.R[q].Ca())}for(o=0;o<e[x];o++)j.H(e[o],a.s,b,r)}};a._setTrans=function(){var b=c.a,e,o,m;b=b.getElementById?
b.getElementById("utmtrans"):b.utmform&&b.utmform.utmtrans?b.utmform.utmtrans:w;a._initData();if(b&&b.value){a.f=new Z.n;m=b.value.split("UTM:");c.u=!c.u||""==c.u?"|":c.u;for(b=0;b<m[x];b++){m[b]=f(m[b]);e=m[b].split(c.u);for(o=0;o<e[x];o++)e[o]=f(e[o]);if("T"==e[0])a._addTrans(e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);else"I"==e[0]&&a._addItem(e[1],e[2],e[3],e[4],e[5],e[6])}}};a._addTrans=function(b,e,o,m,q,u,z,M){a.f=a.f?a.f:new Z.n;return a.f.Ob(b,e,o,m,q,u,z,M)};a._addItem=function(b,e,o,m,q,u){var z;
a.f=a.f?a.f:new Z.n;(z=a.f.hb(b))||(z=a._addTrans(b,"","","","","","",""));z.Nb(e,o,m,q,u)};a._setVar=function(b){if(b&&""!=b&&t()){a._initData();s.Ec(S(b));a.J()&&j.H("&utmt=var",a.s,a.c)}};a._setCustomVar=function(b,e,o,m){a._initData();return s.Cc(b,e,o,m)};a._deleteCustomVar=function(b){a._initData();s.Ub(b)};a._getVisitorCustomVar=function(b){a._initData();return s.mc(b)};a._setMaxCustomVariables=function(b){c.ob=b};a._link=function(b,e){if(c.z&&b){a._initData();c.a[A].href=a._getLinkerUrl(b,
e)}};a._linkByPost=function(b,e){if(c.z&&b&&b.action){a._initData();b.action=a._getLinkerUrl(b.action,e)}};a._setXKey=function(b,e,o){a.g._setKey(b,e,o)};a._setXValue=function(b,e,o){a.g._setValue(b,e,o)};a._getXKey=function(b,e){return a.g._getKey(b,e)};a._getXValue=function(b,e){return a.g.getValue(b,e)};a._clearXKey=function(b){a.g._clearKey(b)};a._clearXValue=function(b){a.g._clearValue(b)};a._createXObj=function(){a._initData();return new Z.N};a._sendXEvent=function(b){var e="";a._initData();
if(a.J()){e+="&utmt=event&utme="+S(a.g.Ac(b))+a.wa();j.H(e,a.s,a.c,v,r)}};a._createEventTracker=function(b){a._initData();return new Z.Jb(b,a)};a._trackEvent=function(b,e,o,m){var q=a.cb;if(w!=b&&w!=e&&""!=b&&""!=e){q._clearKey(5);q._clearValue(5);(b=q._setKey(5,1,b)&&q._setKey(5,2,e)&&(w==o||q._setKey(5,3,o))&&(w==m||q._setValue(5,1,m)))&&a._sendXEvent(q)}else b=v;return b};a.Mc=function(b,e,o){a._initData();if(a.J()){var m=new Z.N;m._setKey(6,1,e.href);var q=o?function(){a.db(b,e)}:w;j.H("&utmt=event&utme="+
S(m.G())+a.wa(),a.s,a.c,v,r,q);if(o){var u=this;c.e.setTimeout(function(){u.db(b,e)},500)}}};a.db=function(b,e){if(!b)b=c.e.event;var o=r;if(e.gatcOnclick)o=e.gatcOnclick(b);if(o||typeof o=="undefined")if(!e.target||e.target=="_self")c.e[A]=e.href;else if(e.target=="_top")c.e.top.document[A]=e.href;else if(e.target=="_parent")c.e.parent.document[A]=e.href};a.Rb=function(b){if(!b)b=c.e.event;var e=b.shiftKey||b.ctrlKey||b.altKey;if(!e)if(b.modifiers&&c.e.Event)e=b.modifiers&c.e.Event.CONTROL_MASK||
b.modifiers&c.e.Event.SHIFT_MASK||b.modifiers&c.e.Event.ALT_MASK;return e};a.Pc=function(){return c};a._setDomainName=function(b){c.b=b};a._addOrganic=function(b,e,o){c.T.splice(o?0:c.T.length,0,new Z.Ha(b,e))};a._clearOrganic=function(){c.T=[]};a._addIgnoredOrganic=function(b){V(c.ta,b)};a._clearIgnoredOrganic=function(){c.ta=[]};a._addIgnoredRef=function(b){V(c.va,b)};a._clearIgnoredRef=function(){c.va=[]};a._setAllowHash=function(b){c.Ra=b?1:0};a._setCampaignTrack=function(b){c.da=b?1:0};a._setClientInfo=
function(b){c.fa=b?1:0};a._getClientInfo=function(){return c.fa};a._setCookiePath=function(b){c.h=b};a._setTransactionDelim=function(b){c.u=b};a._setCookieTimeout=function(b){a._setCampaignCookieTimeout(b*1E3)};a._setCampaignCookieTimeout=function(b){c.Ta=b};a._setDetectFlash=function(b){c.ha=b?1:0};a._getDetectFlash=function(){return c.ha};a._setDetectTitle=function(b){c.ga=b?1:0};a._getDetectTitle=function(){return c.ga};a._setLocalGifPath=function(b){c.oa=b};a._getLocalGifPath=function(){return c.oa};
a._setLocalServerMode=function(){c.I=0};a._setRemoteServerMode=function(){c.I=1};a._setLocalRemoteServerMode=function(){c.I=2};a._getServiceMode=function(){return c.I};a._setSampleRate=function(b){c.U=b};a._setSessionTimeout=function(b){a._setSessionCookieTimeout(b*1E3)};a._setSessionCookieTimeout=function(b){c.sb=b};a._setAllowLinker=function(b){c.z=b?1:0};a._setAllowAnchor=function(b){c.ba=b?1:0};a._setCampNameKey=function(b){c.Ia=b};a._setCampContentKey=function(b){c.Ja=b};a._setCampIdKey=function(b){c.Ka=
b};a._setCampMediumKey=function(b){c.La=b};a._setCampNOKey=function(b){c.Ma=b};a._setCampSourceKey=function(b){c.Na=b};a._setCampTermKey=function(b){c.Oa=b};a._setCampCIdKey=function(b){c.Pa=b};a._getAccount=function(){return a.s};a._setAccount=function(b){a.s=b};a._setNamespace=function(b){c.o=b?S(b):w};a._getVersion=function(){return ca};a._setAutoTrackOutbound=function(b){c.t=[];if(b)c.t=b};a._setTrackOutboundSubdomains=function(b){c.lb=b};a._setHrefExamineLimit=function(b){c.ra=b};a._setReferrerOverride=
function(b){a.ab=b};a._setCookiePersistence=function(b){a._setVisitorCookieTimeout(b)};a._setVisitorCookieTimeout=function(b){c.v=b}};Z._getTracker=function(i,l){return new Z.aa(i,l)};var ka=v,$={ca:{},_createAsyncTracker:function(i,l){l=l||"";i=new Z.aa(i);$.ca[l]=i;ka=r;return i},_getAsyncTracker:function(i){i=i||"";var l=$.ca[i];if(!l){l=new Z.aa;$.ca[i]=l;ka=r}return l},push:function(){for(var i=arguments,l=0,g=0;g<i[x];g++)try{if(typeof i[g]==="function")i[g]();else{var t="",k=i[g][0],p=k.lastIndexOf(".");if(p>0){t=O(k,0,p);k=O(k,p+1)}var f=$._getAsyncTracker(t);f[k].apply(f,i[g].slice(1))}}catch(h){l++}return l}};window[aa]=Z;function na(){var i=window[ba],l=v;if(i&&typeof i.push=="function"){l=i.constructor==Array;if(!l)return}window[ba]=$;l&&$.push.apply($,i)}na();})()



/* Based on Alex Arnell's inheritance implementation. */
var Class = {
  create: function() {
    var parent = null, properties = $A(arguments);
    if (Object.isFunction(properties[0]))
      parent = properties.shift();

    function klass() {
      this.initialize.apply(this, arguments);
    }

    Object.extend(klass, Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      var subclass = function() { };
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }

    for (var i = 0; i < properties.length; i++)
      klass.addMethods(properties[i]);

    if (!klass.prototype.initialize)
      klass.prototype.initialize = this.emptyFunction;

    klass.prototype.constructor = klass;

    return klass;
  },
  emptyFunction:function () {},

};

Class.Methods = {
  addMethods: function(source) {
    var ancestor   = this.superclass && this.superclass.prototype;
    var properties = Object.keys(source);

    if (!Object.keys({ toString: true }).length)
      properties.push("toString", "valueOf");

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i], value = source[property];
      if (ancestor && Object.isFunction(value) &&
          value.argumentNames().first() == "$super") {
        var method = value, value = Object.extend((function(m) {
          return function() { return ancestor[m].apply(this, arguments) };
        })(property).wrap(method), {
          valueOf:  function() { return method },
          toString: function() { return method.toString() }
        });
      }
      this.prototype[property] = value;
    }

    return this;
  }
};

Object.extend = function(destination, source) {
  for (var property in source)
    destination[property] = source[property];
  return destination;
};

Object.extend(Object, {
  inspect: function(object) {
    try {
      if (Object.isUndefined(object)) return 'undefined';
      if (object === null) return 'null';
      return object.inspect ? object.inspect() : String(object);
    } catch (e) {
      if (e instanceof RangeError) return '...';
      throw e;
    }
  },

  toJSON: function(object) {
    var type = typeof object;
    switch (type) {
      case 'undefined':
      case 'function':
      case 'unknown': return;
      case 'boolean': return object.toString();
    }

    if (object === null) return 'null';
    if (object.toJSON) return object.toJSON();
    if (Object.isElement(object)) return;

    var results = [];
    for (var property in object) {
      var value = Object.toJSON(object[property]);
      if (!Object.isUndefined(value))
        results.push(property.toJSON() + ': ' + value);
    }

    return '{' + results.join(', ') + '}';
  },

  toQueryString: function(object) {
    return $H(object).toQueryString();
  },

  toHTML: function(object) {
    return object && object.toHTML ? object.toHTML() : String.interpret(object);
  },

  keys: function(object) {
    var keys = [];
    for (var property in object)
      keys.push(property);
    return keys;
  },

  values: function(object) {
    var values = [];
    for (var property in object)
      values.push(object[property]);
    return values;
  },

  clone: function(object) {
    return Object.extend({ }, object);
  },

  isElement: function(object) {
    return object && object.nodeType == 1;
  },

  isArray: function(object) {
    return object != null && typeof object == "object" &&
      'splice' in object && 'join' in object;
  },

  isHash: function(object) {
    return object instanceof Hash;
  },

  isFunction: function(object) {
    return typeof object == "function";
  },

  isString: function(object) {
    return typeof object == "string";
  },

  isNumber: function(object) {
    return typeof object == "number";
  },

  isUndefined: function(object) {
    return typeof object == "undefined";
  }
});

function $A(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}

if (WebKit = navigator.userAgent.indexOf('AppleWebKit/') > -1) {
  $A = function(iterable) {
    if (!iterable) return [];
    if (!(Object.isFunction(iterable) && iterable == '[object NodeList]') &&
        iterable.toArray) return iterable.toArray();
    var length = iterable.length || 0, results = new Array(length);
    while (length--) results[length] = iterable[length];
    return results;
  };
}



/* 
 * Box2Djs (port of Box2DFlash 1.4.3.1) - http://box2d-js.sourceforge.net/
 * Single-filed and jsmined ( http://code.google.com/p/jsmin-php/ ) by Mr.doob
 */
var b2Settings=Class.create();b2Settings.prototype={initialize:function(){}}
b2Settings.USHRT_MAX=0x0000ffff;b2Settings.b2_pi=Math.PI;b2Settings.b2_massUnitsPerKilogram=1.0;b2Settings.b2_timeUnitsPerSecond=1.0;b2Settings.b2_lengthUnitsPerMeter=30.0;b2Settings.b2_maxManifoldPoints=2;b2Settings.b2_maxShapesPerBody=64;b2Settings.b2_maxPolyVertices=8;b2Settings.b2_maxProxies=1024;b2Settings.b2_maxPairs=8*b2Settings.b2_maxProxies;b2Settings.b2_linearSlop=0.005*b2Settings.b2_lengthUnitsPerMeter;b2Settings.b2_angularSlop=2.0/180.0*b2Settings.b2_pi;b2Settings.b2_velocityThreshold=1.0*b2Settings.b2_lengthUnitsPerMeter/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_maxLinearCorrection=0.2*b2Settings.b2_lengthUnitsPerMeter;b2Settings.b2_maxAngularCorrection=8.0/180.0*b2Settings.b2_pi;b2Settings.b2_contactBaumgarte=0.2;b2Settings.b2_timeToSleep=0.5*b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_linearSleepTolerance=0.01*b2Settings.b2_lengthUnitsPerMeter/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2_angularSleepTolerance=2.0/180.0/b2Settings.b2_timeUnitsPerSecond;b2Settings.b2Assert=function(a)
{if(!a){var nullVec;nullVec.x++;}};
var b2Vec2=Class.create();b2Vec2.prototype={initialize:function(x_,y_){this.x=x_;this.y=y_;},SetZero:function(){this.x=0.0;this.y=0.0;},Set:function(x_,y_){this.x=x_;this.y=y_;},SetV:function(v){this.x=v.x;this.y=v.y;},Negative:function(){return new b2Vec2(-this.x,-this.y);},Copy:function(){return new b2Vec2(this.x,this.y);},Add:function(v)
{this.x+=v.x;this.y+=v.y;},Subtract:function(v)
{this.x-=v.x;this.y-=v.y;},Multiply:function(a)
{this.x*=a;this.y*=a;},MulM:function(A)
{var tX=this.x;this.x=A.col1.x*tX+A.col2.x*this.y;this.y=A.col1.y*tX+A.col2.y*this.y;},MulTM:function(A)
{var tX=b2Math.b2Dot(this,A.col1);this.y=b2Math.b2Dot(this,A.col2);this.x=tX;},CrossVF:function(s)
{var tX=this.x;this.x=s*this.y;this.y=-s*tX;},CrossFV:function(s)
{var tX=this.x;this.x=-s*this.y;this.y=s*tX;},MinV:function(b)
{this.x=this.x<b.x?this.x:b.x;this.y=this.y<b.y?this.y:b.y;},MaxV:function(b)
{this.x=this.x>b.x?this.x:b.x;this.y=this.y>b.y?this.y:b.y;},Abs:function()
{this.x=Math.abs(this.x);this.y=Math.abs(this.y);},Length:function()
{return Math.sqrt(this.x*this.x+this.y*this.y);},Normalize:function()
{var length=this.Length();if(length<Number.MIN_VALUE)
{return 0.0;}
var invLength=1.0/length;this.x*=invLength;this.y*=invLength;return length;},IsValid:function()
{return b2Math.b2IsValid(this.x)&&b2Math.b2IsValid(this.y);},x:null,y:null};b2Vec2.Make=function(x_,y_)
{return new b2Vec2(x_,y_);};
var b2Mat22=Class.create();b2Mat22.prototype={initialize:function(angle,c1,c2)
{if(angle==null)angle=0;this.col1=new b2Vec2();this.col2=new b2Vec2();if(c1!=null&&c2!=null){this.col1.SetV(c1);this.col2.SetV(c2);}
else{var c=Math.cos(angle);var s=Math.sin(angle);this.col1.x=c;this.col2.x=-s;this.col1.y=s;this.col2.y=c;}},Set:function(angle)
{var c=Math.cos(angle);var s=Math.sin(angle);this.col1.x=c;this.col2.x=-s;this.col1.y=s;this.col2.y=c;},SetVV:function(c1,c2)
{this.col1.SetV(c1);this.col2.SetV(c2);},Copy:function(){return new b2Mat22(0,this.col1,this.col2);},SetM:function(m)
{this.col1.SetV(m.col1);this.col2.SetV(m.col2);},AddM:function(m)
{this.col1.x+=m.col1.x;this.col1.y+=m.col1.y;this.col2.x+=m.col2.x;this.col2.y+=m.col2.y;},SetIdentity:function()
{this.col1.x=1.0;this.col2.x=0.0;this.col1.y=0.0;this.col2.y=1.0;},SetZero:function()
{this.col1.x=0.0;this.col2.x=0.0;this.col1.y=0.0;this.col2.y=0.0;},Invert:function(out)
{var a=this.col1.x;var b=this.col2.x;var c=this.col1.y;var d=this.col2.y;var det=a*d-b*c;det=1.0/det;out.col1.x=det*d;out.col2.x=-det*b;out.col1.y=-det*c;out.col2.y=det*a;return out;},Solve:function(out,bX,bY)
{var a11=this.col1.x;var a12=this.col2.x;var a21=this.col1.y;var a22=this.col2.y;var det=a11*a22-a12*a21;det=1.0/det;out.x=det*(a22*bX-a12*bY);out.y=det*(a11*bY-a21*bX);return out;},Abs:function()
{this.col1.Abs();this.col2.Abs();},col1:new b2Vec2(),col2:new b2Vec2()};
var b2Math=Class.create();b2Math.prototype={initialize:function(){}}
b2Math.b2IsValid=function(x)
{return isFinite(x);};b2Math.b2Dot=function(a,b)
{return a.x*b.x+a.y*b.y;};b2Math.b2CrossVV=function(a,b)
{return a.x*b.y-a.y*b.x;};b2Math.b2CrossVF=function(a,s)
{var v=new b2Vec2(s*a.y,-s*a.x);return v;};b2Math.b2CrossFV=function(s,a)
{var v=new b2Vec2(-s*a.y,s*a.x);return v;};b2Math.b2MulMV=function(A,v)
{var u=new b2Vec2(A.col1.x*v.x+A.col2.x*v.y,A.col1.y*v.x+A.col2.y*v.y);return u;};b2Math.b2MulTMV=function(A,v)
{var u=new b2Vec2(b2Math.b2Dot(v,A.col1),b2Math.b2Dot(v,A.col2));return u;};b2Math.AddVV=function(a,b)
{var v=new b2Vec2(a.x+b.x,a.y+b.y);return v;};b2Math.SubtractVV=function(a,b)
{var v=new b2Vec2(a.x-b.x,a.y-b.y);return v;};b2Math.MulFV=function(s,a)
{var v=new b2Vec2(s*a.x,s*a.y);return v;};b2Math.AddMM=function(A,B)
{var C=new b2Mat22(0,b2Math.AddVV(A.col1,B.col1),b2Math.AddVV(A.col2,B.col2));return C;};b2Math.b2MulMM=function(A,B)
{var C=new b2Mat22(0,b2Math.b2MulMV(A,B.col1),b2Math.b2MulMV(A,B.col2));return C;};b2Math.b2MulTMM=function(A,B)
{var c1=new b2Vec2(b2Math.b2Dot(A.col1,B.col1),b2Math.b2Dot(A.col2,B.col1));var c2=new b2Vec2(b2Math.b2Dot(A.col1,B.col2),b2Math.b2Dot(A.col2,B.col2));var C=new b2Mat22(0,c1,c2);return C;};b2Math.b2Abs=function(a)
{return a>0.0?a:-a;};b2Math.b2AbsV=function(a)
{var b=new b2Vec2(b2Math.b2Abs(a.x),b2Math.b2Abs(a.y));return b;};b2Math.b2AbsM=function(A)
{var B=new b2Mat22(0,b2Math.b2AbsV(A.col1),b2Math.b2AbsV(A.col2));return B;};b2Math.b2Min=function(a,b)
{return a<b?a:b;};b2Math.b2MinV=function(a,b)
{var c=new b2Vec2(b2Math.b2Min(a.x,b.x),b2Math.b2Min(a.y,b.y));return c;};b2Math.b2Max=function(a,b)
{return a>b?a:b;};b2Math.b2MaxV=function(a,b)
{var c=new b2Vec2(b2Math.b2Max(a.x,b.x),b2Math.b2Max(a.y,b.y));return c;};b2Math.b2Clamp=function(a,low,high)
{return b2Math.b2Max(low,b2Math.b2Min(a,high));};b2Math.b2ClampV=function(a,low,high)
{return b2Math.b2MaxV(low,b2Math.b2MinV(a,high));};b2Math.b2Swap=function(a,b)
{var tmp=a[0];a[0]=b[0];b[0]=tmp;};b2Math.b2Random=function()
{return Math.random()*2-1;};b2Math.b2NextPowerOfTwo=function(x)
{x|=(x>>1)&0x7FFFFFFF;x|=(x>>2)&0x3FFFFFFF;x|=(x>>4)&0x0FFFFFFF;x|=(x>>8)&0x00FFFFFF;x|=(x>>16)&0x0000FFFF;return x+1;};b2Math.b2IsPowerOfTwo=function(x)
{var result=x>0&&(x&(x-1))==0;return result;};b2Math.tempVec2=new b2Vec2();b2Math.tempVec3=new b2Vec2();b2Math.tempVec4=new b2Vec2();b2Math.tempVec5=new b2Vec2();b2Math.tempMat=new b2Mat22();
var b2AABB=Class.create();b2AABB.prototype={IsValid:function(){var dX=this.maxVertex.x;var dY=this.maxVertex.y;dX=this.maxVertex.x;dY=this.maxVertex.y;dX-=this.minVertex.x;dY-=this.minVertex.y;var valid=dX>=0.0&&dY>=0.0;valid=valid&&this.minVertex.IsValid()&&this.maxVertex.IsValid();return valid;},minVertex:new b2Vec2(),maxVertex:new b2Vec2(),initialize:function(){this.minVertex=new b2Vec2();this.maxVertex=new b2Vec2();}};
var b2Bound=Class.create();b2Bound.prototype={IsLower:function(){return(this.value&1)==0;},IsUpper:function(){return(this.value&1)==1;},Swap:function(b){var tempValue=this.value;var tempProxyId=this.proxyId;var tempStabbingCount=this.stabbingCount;this.value=b.value;this.proxyId=b.proxyId;this.stabbingCount=b.stabbingCount;b.value=tempValue;b.proxyId=tempProxyId;b.stabbingCount=tempStabbingCount;},value:0,proxyId:0,stabbingCount:0,initialize:function(){}}

var b2BoundValues=Class.create();b2BoundValues.prototype={lowerValues:[0,0],upperValues:[0,0],initialize:function(){this.lowerValues=[0,0];this.upperValues=[0,0];}}

var b2Pair=Class.create();b2Pair.prototype={SetBuffered:function(){this.status|=b2Pair.e_pairBuffered;},ClearBuffered:function(){this.status&=~b2Pair.e_pairBuffered;},IsBuffered:function(){return(this.status&b2Pair.e_pairBuffered)==b2Pair.e_pairBuffered;},SetRemoved:function(){this.status|=b2Pair.e_pairRemoved;},ClearRemoved:function(){this.status&=~b2Pair.e_pairRemoved;},IsRemoved:function(){return(this.status&b2Pair.e_pairRemoved)==b2Pair.e_pairRemoved;},SetFinal:function(){this.status|=b2Pair.e_pairFinal;},IsFinal:function(){return(this.status&b2Pair.e_pairFinal)==b2Pair.e_pairFinal;},userData:null,proxyId1:0,proxyId2:0,next:0,status:0,initialize:function(){}};b2Pair.b2_nullPair=b2Settings.USHRT_MAX;b2Pair.b2_nullProxy=b2Settings.USHRT_MAX;b2Pair.b2_tableCapacity=b2Settings.b2_maxPairs;b2Pair.b2_tableMask=b2Pair.b2_tableCapacity-1;b2Pair.e_pairBuffered=0x0001;b2Pair.e_pairRemoved=0x0002;b2Pair.e_pairFinal=0x0004;
var b2PairCallback=Class.create();b2PairCallback.prototype={PairAdded:function(proxyUserData1,proxyUserData2){return null},PairRemoved:function(proxyUserData1,proxyUserData2,pairUserData){},initialize:function(){}};
var b2BufferedPair=Class.create();b2BufferedPair.prototype={proxyId1:0,proxyId2:0,initialize:function(){}}

var b2PairManager=Class.create();b2PairManager.prototype={initialize:function(){var i=0;this.m_hashTable=new Array(b2Pair.b2_tableCapacity);for(i=0;i<b2Pair.b2_tableCapacity;++i)
{this.m_hashTable[i]=b2Pair.b2_nullPair;}
this.m_pairs=new Array(b2Settings.b2_maxPairs);for(i=0;i<b2Settings.b2_maxPairs;++i)
{this.m_pairs[i]=new b2Pair();}
this.m_pairBuffer=new Array(b2Settings.b2_maxPairs);for(i=0;i<b2Settings.b2_maxPairs;++i)
{this.m_pairBuffer[i]=new b2BufferedPair();}
for(i=0;i<b2Settings.b2_maxPairs;++i)
{this.m_pairs[i].proxyId1=b2Pair.b2_nullProxy;this.m_pairs[i].proxyId2=b2Pair.b2_nullProxy;this.m_pairs[i].userData=null;this.m_pairs[i].status=0;this.m_pairs[i].next=(i+1);}
this.m_pairs[b2Settings.b2_maxPairs-1].next=b2Pair.b2_nullPair;this.m_pairCount=0;},Initialize:function(broadPhase,callback){this.m_broadPhase=broadPhase;this.m_callback=callback;},AddBufferedPair:function(proxyId1,proxyId2){var pair=this.AddPair(proxyId1,proxyId2);if(pair.IsBuffered()==false)
{pair.SetBuffered();this.m_pairBuffer[this.m_pairBufferCount].proxyId1=pair.proxyId1;this.m_pairBuffer[this.m_pairBufferCount].proxyId2=pair.proxyId2;++this.m_pairBufferCount;}
pair.ClearRemoved();if(b2BroadPhase.s_validate)
{this.ValidateBuffer();}},RemoveBufferedPair:function(proxyId1,proxyId2){var pair=this.Find(proxyId1,proxyId2);if(pair==null)
{return;}
if(pair.IsBuffered()==false)
{pair.SetBuffered();this.m_pairBuffer[this.m_pairBufferCount].proxyId1=pair.proxyId1;this.m_pairBuffer[this.m_pairBufferCount].proxyId2=pair.proxyId2;++this.m_pairBufferCount;}
pair.SetRemoved();if(b2BroadPhase.s_validate)
{this.ValidateBuffer();}},Commit:function(){var i=0;var removeCount=0;var proxies=this.m_broadPhase.m_proxyPool;for(i=0;i<this.m_pairBufferCount;++i)
{var pair=this.Find(this.m_pairBuffer[i].proxyId1,this.m_pairBuffer[i].proxyId2);pair.ClearBuffered();var proxy1=proxies[pair.proxyId1];var proxy2=proxies[pair.proxyId2];if(pair.IsRemoved())
{if(pair.IsFinal()==true)
{this.m_callback.PairRemoved(proxy1.userData,proxy2.userData,pair.userData);}
this.m_pairBuffer[removeCount].proxyId1=pair.proxyId1;this.m_pairBuffer[removeCount].proxyId2=pair.proxyId2;++removeCount;}
else
{if(pair.IsFinal()==false)
{pair.userData=this.m_callback.PairAdded(proxy1.userData,proxy2.userData);pair.SetFinal();}}}
for(i=0;i<removeCount;++i)
{this.RemovePair(this.m_pairBuffer[i].proxyId1,this.m_pairBuffer[i].proxyId2);}
this.m_pairBufferCount=0;if(b2BroadPhase.s_validate)
{this.ValidateTable();}},AddPair:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;var pair=pair=this.FindHash(proxyId1,proxyId2,hash);if(pair!=null)
{return pair;}
var pIndex=this.m_freePair;pair=this.m_pairs[pIndex];this.m_freePair=pair.next;pair.proxyId1=proxyId1;pair.proxyId2=proxyId2;pair.status=0;pair.userData=null;pair.next=this.m_hashTable[hash];this.m_hashTable[hash]=pIndex;++this.m_pairCount;return pair;},RemovePair:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;var node=this.m_hashTable[hash];var pNode=null;while(node!=b2Pair.b2_nullPair)
{if(b2PairManager.Equals(this.m_pairs[node],proxyId1,proxyId2))
{var index=node;if(pNode){pNode.next=this.m_pairs[node].next;}
else{this.m_hashTable[hash]=this.m_pairs[node].next;}
var pair=this.m_pairs[index];var userData=pair.userData;pair.next=this.m_freePair;pair.proxyId1=b2Pair.b2_nullProxy;pair.proxyId2=b2Pair.b2_nullProxy;pair.userData=null;pair.status=0;this.m_freePair=index;--this.m_pairCount;return userData;}
else
{pNode=this.m_pairs[node];node=pNode.next;}}
return null;},Find:function(proxyId1,proxyId2){if(proxyId1>proxyId2){var temp=proxyId1;proxyId1=proxyId2;proxyId2=temp;}
var hash=b2PairManager.Hash(proxyId1,proxyId2)&b2Pair.b2_tableMask;return this.FindHash(proxyId1,proxyId2,hash);},FindHash:function(proxyId1,proxyId2,hash){var index=this.m_hashTable[hash];while(index!=b2Pair.b2_nullPair&&b2PairManager.Equals(this.m_pairs[index],proxyId1,proxyId2)==false)
{index=this.m_pairs[index].next;}
if(index==b2Pair.b2_nullPair)
{return null;}
return this.m_pairs[index];},ValidateBuffer:function(){},ValidateTable:function(){},m_broadPhase:null,m_callback:null,m_pairs:null,m_freePair:0,m_pairCount:0,m_pairBuffer:null,m_pairBufferCount:0,m_hashTable:null};b2PairManager.Hash=function(proxyId1,proxyId2)
{var key=((proxyId2<<16)&0xffff0000)|proxyId1;key=~key+((key<<15)&0xFFFF8000);key=key^((key>>12)&0x000fffff);key=key+((key<<2)&0xFFFFFFFC);key=key^((key>>4)&0x0fffffff);key=key*2057;key=key^((key>>16)&0x0000ffff);return key;};b2PairManager.Equals=function(pair,proxyId1,proxyId2)
{return(pair.proxyId1==proxyId1&&pair.proxyId2==proxyId2);};b2PairManager.EqualsPair=function(pair1,pair2)
{return pair1.proxyId1==pair2.proxyId1&&pair1.proxyId2==pair2.proxyId2;};
var b2BroadPhase=Class.create();b2BroadPhase.prototype={initialize:function(worldAABB,callback){this.m_pairManager=new b2PairManager();this.m_proxyPool=new Array(b2Settings.b2_maxPairs);this.m_bounds=new Array(2*b2Settings.b2_maxProxies);this.m_queryResults=new Array(b2Settings.b2_maxProxies);this.m_quantizationFactor=new b2Vec2();var i=0;this.m_pairManager.Initialize(this,callback);this.m_worldAABB=worldAABB;this.m_proxyCount=0;for(i=0;i<b2Settings.b2_maxProxies;i++){this.m_queryResults[i]=0;}
this.m_bounds=new Array(2);for(i=0;i<2;i++){this.m_bounds[i]=new Array(2*b2Settings.b2_maxProxies);for(var j=0;j<2*b2Settings.b2_maxProxies;j++){this.m_bounds[i][j]=new b2Bound();}}
var dX=worldAABB.maxVertex.x;var dY=worldAABB.maxVertex.y;dX-=worldAABB.minVertex.x;dY-=worldAABB.minVertex.y;this.m_quantizationFactor.x=b2Settings.USHRT_MAX/dX;this.m_quantizationFactor.y=b2Settings.USHRT_MAX/dY;var tProxy;for(i=0;i<b2Settings.b2_maxProxies-1;++i)
{tProxy=new b2Proxy();this.m_proxyPool[i]=tProxy;tProxy.SetNext(i+1);tProxy.timeStamp=0;tProxy.overlapCount=b2BroadPhase.b2_invalid;tProxy.userData=null;}
tProxy=new b2Proxy();this.m_proxyPool[b2Settings.b2_maxProxies-1]=tProxy;tProxy.SetNext(b2Pair.b2_nullProxy);tProxy.timeStamp=0;tProxy.overlapCount=b2BroadPhase.b2_invalid;tProxy.userData=null;this.m_freeProxy=0;this.m_timeStamp=1;this.m_queryResultCount=0;},InRange:function(aabb){var dX;var dY;var d2X;var d2Y;dX=aabb.minVertex.x;dY=aabb.minVertex.y;dX-=this.m_worldAABB.maxVertex.x;dY-=this.m_worldAABB.maxVertex.y;d2X=this.m_worldAABB.minVertex.x;d2Y=this.m_worldAABB.minVertex.y;d2X-=aabb.maxVertex.x;d2Y-=aabb.maxVertex.y;dX=b2Math.b2Max(dX,d2X);dY=b2Math.b2Max(dY,d2Y);return b2Math.b2Max(dX,dY)<0.0;},GetProxy:function(proxyId){if(proxyId==b2Pair.b2_nullProxy||this.m_proxyPool[proxyId].IsValid()==false)
{return null;}
return this.m_proxyPool[proxyId];},CreateProxy:function(aabb,userData){var index=0;var proxy;var proxyId=this.m_freeProxy;proxy=this.m_proxyPool[proxyId];this.m_freeProxy=proxy.GetNext();proxy.overlapCount=0;proxy.userData=userData;var boundCount=2*this.m_proxyCount;var lowerValues=new Array();var upperValues=new Array();this.ComputeBounds(lowerValues,upperValues,aabb);for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var lowerIndex=0;var upperIndex=0;var lowerIndexOut=[lowerIndex];var upperIndexOut=[upperIndex];this.Query(lowerIndexOut,upperIndexOut,lowerValues[axis],upperValues[axis],bounds,boundCount,axis);lowerIndex=lowerIndexOut[0];upperIndex=upperIndexOut[0];var tArr=new Array();var j=0;var tEnd=boundCount-upperIndex
var tBound1;var tBound2;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[upperIndex+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;var tIndex=upperIndex+2;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tArr=new Array();tEnd=upperIndex-lowerIndex;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[lowerIndex+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;tIndex=lowerIndex+1;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
++upperIndex;bounds[lowerIndex].value=lowerValues[axis];bounds[lowerIndex].proxyId=proxyId;bounds[upperIndex].value=upperValues[axis];bounds[upperIndex].proxyId=proxyId;bounds[lowerIndex].stabbingCount=lowerIndex==0?0:bounds[lowerIndex-1].stabbingCount;bounds[upperIndex].stabbingCount=bounds[upperIndex-1].stabbingCount;for(index=lowerIndex;index<upperIndex;++index)
{bounds[index].stabbingCount++;}
for(index=lowerIndex;index<boundCount+2;++index)
{var proxy2=this.m_proxyPool[bounds[index].proxyId];if(bounds[index].IsLower())
{proxy2.lowerBounds[axis]=index;}
else
{proxy2.upperBounds[axis]=index;}}}
++this.m_proxyCount;for(var i=0;i<this.m_queryResultCount;++i)
{this.m_pairManager.AddBufferedPair(proxyId,this.m_queryResults[i]);}
this.m_pairManager.Commit();this.m_queryResultCount=0;this.IncrementTimeStamp();return proxyId;},DestroyProxy:function(proxyId){var proxy=this.m_proxyPool[proxyId];var boundCount=2*this.m_proxyCount;for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var lowerIndex=proxy.lowerBounds[axis];var upperIndex=proxy.upperBounds[axis];var lowerValue=bounds[lowerIndex].value;var upperValue=bounds[upperIndex].value;var tArr=new Array();var j=0;var tEnd=upperIndex-lowerIndex-1;var tBound1;var tBound2;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[lowerIndex+1+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;var tIndex=lowerIndex;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tArr=new Array();tEnd=boundCount-upperIndex-1;for(j=0;j<tEnd;j++){tArr[j]=new b2Bound();tBound1=tArr[j];tBound2=bounds[upperIndex+1+j];tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=tArr.length;tIndex=upperIndex-1;for(j=0;j<tEnd;j++){tBound2=tArr[j];tBound1=bounds[tIndex+j]
tBound1.value=tBound2.value;tBound1.proxyId=tBound2.proxyId;tBound1.stabbingCount=tBound2.stabbingCount;}
tEnd=boundCount-2;for(var index=lowerIndex;index<tEnd;++index)
{var proxy2=this.m_proxyPool[bounds[index].proxyId];if(bounds[index].IsLower())
{proxy2.lowerBounds[axis]=index;}
else
{proxy2.upperBounds[axis]=index;}}
tEnd=upperIndex-1;for(var index2=lowerIndex;index2<tEnd;++index2)
{bounds[index2].stabbingCount--;}
this.Query([0],[0],lowerValue,upperValue,bounds,boundCount-2,axis);}
for(var i=0;i<this.m_queryResultCount;++i)
{this.m_pairManager.RemoveBufferedPair(proxyId,this.m_queryResults[i]);}
this.m_pairManager.Commit();this.m_queryResultCount=0;this.IncrementTimeStamp();proxy.userData=null;proxy.overlapCount=b2BroadPhase.b2_invalid;proxy.lowerBounds[0]=b2BroadPhase.b2_invalid;proxy.lowerBounds[1]=b2BroadPhase.b2_invalid;proxy.upperBounds[0]=b2BroadPhase.b2_invalid;proxy.upperBounds[1]=b2BroadPhase.b2_invalid;proxy.SetNext(this.m_freeProxy);this.m_freeProxy=proxyId;--this.m_proxyCount;},MoveProxy:function(proxyId,aabb){var axis=0;var index=0;var bound;var prevBound
var nextBound
var nextProxyId=0;var nextProxy;if(proxyId==b2Pair.b2_nullProxy||b2Settings.b2_maxProxies<=proxyId)
{return;}
if(aabb.IsValid()==false)
{return;}
var boundCount=2*this.m_proxyCount;var proxy=this.m_proxyPool[proxyId];var newValues=new b2BoundValues();this.ComputeBounds(newValues.lowerValues,newValues.upperValues,aabb);var oldValues=new b2BoundValues();for(axis=0;axis<2;++axis)
{oldValues.lowerValues[axis]=this.m_bounds[axis][proxy.lowerBounds[axis]].value;oldValues.upperValues[axis]=this.m_bounds[axis][proxy.upperBounds[axis]].value;}
for(axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var lowerIndex=proxy.lowerBounds[axis];var upperIndex=proxy.upperBounds[axis];var lowerValue=newValues.lowerValues[axis];var upperValue=newValues.upperValues[axis];var deltaLower=lowerValue-bounds[lowerIndex].value;var deltaUpper=upperValue-bounds[upperIndex].value;bounds[lowerIndex].value=lowerValue;bounds[upperIndex].value=upperValue;if(deltaLower<0)
{index=lowerIndex;while(index>0&&lowerValue<bounds[index-1].value)
{bound=bounds[index];prevBound=bounds[index-1];var prevProxyId=prevBound.proxyId;var prevProxy=this.m_proxyPool[prevBound.proxyId];prevBound.stabbingCount++;if(prevBound.IsUpper()==true)
{if(this.TestOverlap(newValues,prevProxy))
{this.m_pairManager.AddBufferedPair(proxyId,prevProxyId);}
prevProxy.upperBounds[axis]++;bound.stabbingCount++;}
else
{prevProxy.lowerBounds[axis]++;bound.stabbingCount--;}
proxy.lowerBounds[axis]--;bound.Swap(prevBound);--index;}}
if(deltaUpper>0)
{index=upperIndex;while(index<boundCount-1&&bounds[index+1].value<=upperValue)
{bound=bounds[index];nextBound=bounds[index+1];nextProxyId=nextBound.proxyId;nextProxy=this.m_proxyPool[nextProxyId];nextBound.stabbingCount++;if(nextBound.IsLower()==true)
{if(this.TestOverlap(newValues,nextProxy))
{this.m_pairManager.AddBufferedPair(proxyId,nextProxyId);}
nextProxy.lowerBounds[axis]--;bound.stabbingCount++;}
else
{nextProxy.upperBounds[axis]--;bound.stabbingCount--;}
proxy.upperBounds[axis]++;bound.Swap(nextBound);index++;}}
if(deltaLower>0)
{index=lowerIndex;while(index<boundCount-1&&bounds[index+1].value<=lowerValue)
{bound=bounds[index];nextBound=bounds[index+1];nextProxyId=nextBound.proxyId;nextProxy=this.m_proxyPool[nextProxyId];nextBound.stabbingCount--;if(nextBound.IsUpper())
{if(this.TestOverlap(oldValues,nextProxy))
{this.m_pairManager.RemoveBufferedPair(proxyId,nextProxyId);}
nextProxy.upperBounds[axis]--;bound.stabbingCount--;}
else
{nextProxy.lowerBounds[axis]--;bound.stabbingCount++;}
proxy.lowerBounds[axis]++;bound.Swap(nextBound);index++;}}
if(deltaUpper<0)
{index=upperIndex;while(index>0&&upperValue<bounds[index-1].value)
{bound=bounds[index];prevBound=bounds[index-1];prevProxyId=prevBound.proxyId;prevProxy=this.m_proxyPool[prevProxyId];prevBound.stabbingCount--;if(prevBound.IsLower()==true)
{if(this.TestOverlap(oldValues,prevProxy))
{this.m_pairManager.RemoveBufferedPair(proxyId,prevProxyId);}
prevProxy.lowerBounds[axis]++;bound.stabbingCount--;}
else
{prevProxy.upperBounds[axis]++;bound.stabbingCount++;}
proxy.upperBounds[axis]--;bound.Swap(prevBound);index--;}}}},Commit:function(){this.m_pairManager.Commit();},QueryAABB:function(aabb,userData,maxCount){var lowerValues=new Array();var upperValues=new Array();this.ComputeBounds(lowerValues,upperValues,aabb);var lowerIndex=0;var upperIndex=0;var lowerIndexOut=[lowerIndex];var upperIndexOut=[upperIndex];this.Query(lowerIndexOut,upperIndexOut,lowerValues[0],upperValues[0],this.m_bounds[0],2*this.m_proxyCount,0);this.Query(lowerIndexOut,upperIndexOut,lowerValues[1],upperValues[1],this.m_bounds[1],2*this.m_proxyCount,1);var count=0;for(var i=0;i<this.m_queryResultCount&&count<maxCount;++i,++count)
{var proxy=this.m_proxyPool[this.m_queryResults[i]];userData[i]=proxy.userData;}
this.m_queryResultCount=0;this.IncrementTimeStamp();return count;},Validate:function(){var pair;var proxy1;var proxy2;var overlap;for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];var boundCount=2*this.m_proxyCount;var stabbingCount=0;for(var i=0;i<boundCount;++i)
{var bound=bounds[i];if(bound.IsLower()==true)
{stabbingCount++;}
else
{stabbingCount--;}}}},ComputeBounds:function(lowerValues,upperValues,aabb)
{var minVertexX=aabb.minVertex.x;var minVertexY=aabb.minVertex.y;minVertexX=b2Math.b2Min(minVertexX,this.m_worldAABB.maxVertex.x);minVertexY=b2Math.b2Min(minVertexY,this.m_worldAABB.maxVertex.y);minVertexX=b2Math.b2Max(minVertexX,this.m_worldAABB.minVertex.x);minVertexY=b2Math.b2Max(minVertexY,this.m_worldAABB.minVertex.y);var maxVertexX=aabb.maxVertex.x;var maxVertexY=aabb.maxVertex.y;maxVertexX=b2Math.b2Min(maxVertexX,this.m_worldAABB.maxVertex.x);maxVertexY=b2Math.b2Min(maxVertexY,this.m_worldAABB.maxVertex.y);maxVertexX=b2Math.b2Max(maxVertexX,this.m_worldAABB.minVertex.x);maxVertexY=b2Math.b2Max(maxVertexY,this.m_worldAABB.minVertex.y);lowerValues[0]=(this.m_quantizationFactor.x*(minVertexX-this.m_worldAABB.minVertex.x))&(b2Settings.USHRT_MAX-1);upperValues[0]=((this.m_quantizationFactor.x*(maxVertexX-this.m_worldAABB.minVertex.x))&0x0000ffff)|1;lowerValues[1]=(this.m_quantizationFactor.y*(minVertexY-this.m_worldAABB.minVertex.y))&(b2Settings.USHRT_MAX-1);upperValues[1]=((this.m_quantizationFactor.y*(maxVertexY-this.m_worldAABB.minVertex.y))&0x0000ffff)|1;},TestOverlapValidate:function(p1,p2){for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];if(bounds[p1.lowerBounds[axis]].value>bounds[p2.upperBounds[axis]].value)
return false;if(bounds[p1.upperBounds[axis]].value<bounds[p2.lowerBounds[axis]].value)
return false;}
return true;},TestOverlap:function(b,p)
{for(var axis=0;axis<2;++axis)
{var bounds=this.m_bounds[axis];if(b.lowerValues[axis]>bounds[p.upperBounds[axis]].value)
return false;if(b.upperValues[axis]<bounds[p.lowerBounds[axis]].value)
return false;}
return true;},Query:function(lowerQueryOut,upperQueryOut,lowerValue,upperValue,bounds,boundCount,axis){var lowerQuery=b2BroadPhase.BinarySearch(bounds,boundCount,lowerValue);var upperQuery=b2BroadPhase.BinarySearch(bounds,boundCount,upperValue);for(var j=lowerQuery;j<upperQuery;++j)
{if(bounds[j].IsLower())
{this.IncrementOverlapCount(bounds[j].proxyId);}}
if(lowerQuery>0)
{var i=lowerQuery-1;var s=bounds[i].stabbingCount;while(s)
{if(bounds[i].IsLower())
{var proxy=this.m_proxyPool[bounds[i].proxyId];if(lowerQuery<=proxy.upperBounds[axis])
{this.IncrementOverlapCount(bounds[i].proxyId);--s;}}
--i;}}
lowerQueryOut[0]=lowerQuery;upperQueryOut[0]=upperQuery;},IncrementOverlapCount:function(proxyId){var proxy=this.m_proxyPool[proxyId];if(proxy.timeStamp<this.m_timeStamp)
{proxy.timeStamp=this.m_timeStamp;proxy.overlapCount=1;}
else
{proxy.overlapCount=2;this.m_queryResults[this.m_queryResultCount]=proxyId;++this.m_queryResultCount;}},IncrementTimeStamp:function(){if(this.m_timeStamp==b2Settings.USHRT_MAX)
{for(var i=0;i<b2Settings.b2_maxProxies;++i)
{this.m_proxyPool[i].timeStamp=0;}
this.m_timeStamp=1;}
else
{++this.m_timeStamp;}},m_pairManager:new b2PairManager(),m_proxyPool:new Array(b2Settings.b2_maxPairs),m_freeProxy:0,m_bounds:new Array(2*b2Settings.b2_maxProxies),m_queryResults:new Array(b2Settings.b2_maxProxies),m_queryResultCount:0,m_worldAABB:null,m_quantizationFactor:new b2Vec2(),m_proxyCount:0,m_timeStamp:0};b2BroadPhase.s_validate=false;b2BroadPhase.b2_invalid=b2Settings.USHRT_MAX;b2BroadPhase.b2_nullEdge=b2Settings.USHRT_MAX;b2BroadPhase.BinarySearch=function(bounds,count,value)
{var low=0;var high=count-1;while(low<=high)
{var mid=Math.floor((low+high)/2);if(bounds[mid].value>value)
{high=mid-1;}
else if(bounds[mid].value<value)
{low=mid+1;}
else
{return(mid);}}
return(low);};
var b2Collision=Class.create();b2Collision.prototype={initialize:function(){}}
b2Collision.b2_nullFeature=0x000000ff;b2Collision.ClipSegmentToLine=function(vOut,vIn,normal,offset)
{var numOut=0;var vIn0=vIn[0].v;var vIn1=vIn[1].v;var distance0=b2Math.b2Dot(normal,vIn[0].v)-offset;var distance1=b2Math.b2Dot(normal,vIn[1].v)-offset;if(distance0<=0.0)vOut[numOut++]=vIn[0];if(distance1<=0.0)vOut[numOut++]=vIn[1];if(distance0*distance1<0.0)
{var interp=distance0/(distance0-distance1);var tVec=vOut[numOut].v;tVec.x=vIn0.x+interp*(vIn1.x-vIn0.x);tVec.y=vIn0.y+interp*(vIn1.y-vIn0.y);if(distance0>0.0)
{vOut[numOut].id=vIn[0].id;}
else
{vOut[numOut].id=vIn[1].id;}
++numOut;}
return numOut;};b2Collision.EdgeSeparation=function(poly1,edge1,poly2)
{var vert1s=poly1.m_vertices;var count2=poly2.m_vertexCount;var vert2s=poly2.m_vertices;var normalX=poly1.m_normals[edge1].x;var normalY=poly1.m_normals[edge1].y;var tX=normalX;var tMat=poly1.m_R;normalX=tMat.col1.x*tX+tMat.col2.x*normalY;normalY=tMat.col1.y*tX+tMat.col2.y*normalY;var normalLocal2X=normalX;var normalLocal2Y=normalY;tMat=poly2.m_R;tX=normalLocal2X*tMat.col1.x+normalLocal2Y*tMat.col1.y;normalLocal2Y=normalLocal2X*tMat.col2.x+normalLocal2Y*tMat.col2.y;normalLocal2X=tX;var vertexIndex2=0;var minDot=Number.MAX_VALUE;for(var i=0;i<count2;++i)
{var tVec=vert2s[i];var dot=tVec.x*normalLocal2X+tVec.y*normalLocal2Y;if(dot<minDot)
{minDot=dot;vertexIndex2=i;}}
tMat=poly1.m_R;var v1X=poly1.m_position.x+(tMat.col1.x*vert1s[edge1].x+tMat.col2.x*vert1s[edge1].y)
var v1Y=poly1.m_position.y+(tMat.col1.y*vert1s[edge1].x+tMat.col2.y*vert1s[edge1].y)
tMat=poly2.m_R;var v2X=poly2.m_position.x+(tMat.col1.x*vert2s[vertexIndex2].x+tMat.col2.x*vert2s[vertexIndex2].y)
var v2Y=poly2.m_position.y+(tMat.col1.y*vert2s[vertexIndex2].x+tMat.col2.y*vert2s[vertexIndex2].y)
v2X-=v1X;v2Y-=v1Y;var separation=v2X*normalX+v2Y*normalY;return separation;};b2Collision.FindMaxSeparation=function(edgeIndex,poly1,poly2,conservative)
{var count1=poly1.m_vertexCount;var dX=poly2.m_position.x-poly1.m_position.x;var dY=poly2.m_position.y-poly1.m_position.y;var dLocal1X=(dX*poly1.m_R.col1.x+dY*poly1.m_R.col1.y);var dLocal1Y=(dX*poly1.m_R.col2.x+dY*poly1.m_R.col2.y);var edge=0;var maxDot=-Number.MAX_VALUE;for(var i=0;i<count1;++i)
{var dot=(poly1.m_normals[i].x*dLocal1X+poly1.m_normals[i].y*dLocal1Y);if(dot>maxDot)
{maxDot=dot;edge=i;}}
var s=b2Collision.EdgeSeparation(poly1,edge,poly2);if(s>0.0&&conservative==false)
{return s;}
var prevEdge=edge-1>=0?edge-1:count1-1;var sPrev=b2Collision.EdgeSeparation(poly1,prevEdge,poly2);if(sPrev>0.0&&conservative==false)
{return sPrev;}
var nextEdge=edge+1<count1?edge+1:0;var sNext=b2Collision.EdgeSeparation(poly1,nextEdge,poly2);if(sNext>0.0&&conservative==false)
{return sNext;}
var bestEdge=0;var bestSeparation;var increment=0;if(sPrev>s&&sPrev>sNext)
{increment=-1;bestEdge=prevEdge;bestSeparation=sPrev;}
else if(sNext>s)
{increment=1;bestEdge=nextEdge;bestSeparation=sNext;}
else
{edgeIndex[0]=edge;return s;}
while(true)
{if(increment==-1)
edge=bestEdge-1>=0?bestEdge-1:count1-1;else
edge=bestEdge+1<count1?bestEdge+1:0;s=b2Collision.EdgeSeparation(poly1,edge,poly2);if(s>0.0&&conservative==false)
{return s;}
if(s>bestSeparation)
{bestEdge=edge;bestSeparation=s;}
else
{break;}}
edgeIndex[0]=bestEdge;return bestSeparation;};b2Collision.FindIncidentEdge=function(c,poly1,edge1,poly2)
{var count1=poly1.m_vertexCount;var vert1s=poly1.m_vertices;var count2=poly2.m_vertexCount;var vert2s=poly2.m_vertices;var vertex11=edge1;var vertex12=edge1+1==count1?0:edge1+1;var tVec=vert1s[vertex12];var normal1Local1X=tVec.x;var normal1Local1Y=tVec.y;tVec=vert1s[vertex11];normal1Local1X-=tVec.x;normal1Local1Y-=tVec.y;var tX=normal1Local1X;normal1Local1X=normal1Local1Y;normal1Local1Y=-tX;var invLength=1.0/Math.sqrt(normal1Local1X*normal1Local1X+normal1Local1Y*normal1Local1Y);normal1Local1X*=invLength;normal1Local1Y*=invLength;var normal1X=normal1Local1X;var normal1Y=normal1Local1Y;tX=normal1X;var tMat=poly1.m_R;normal1X=tMat.col1.x*tX+tMat.col2.x*normal1Y;normal1Y=tMat.col1.y*tX+tMat.col2.y*normal1Y;var normal1Local2X=normal1X;var normal1Local2Y=normal1Y;tMat=poly2.m_R;tX=normal1Local2X*tMat.col1.x+normal1Local2Y*tMat.col1.y;normal1Local2Y=normal1Local2X*tMat.col2.x+normal1Local2Y*tMat.col2.y;normal1Local2X=tX;var vertex21=0;var vertex22=0;var minDot=Number.MAX_VALUE;for(var i=0;i<count2;++i)
{var i1=i;var i2=i+1<count2?i+1:0;tVec=vert2s[i2];var normal2Local2X=tVec.x;var normal2Local2Y=tVec.y;tVec=vert2s[i1];normal2Local2X-=tVec.x;normal2Local2Y-=tVec.y;tX=normal2Local2X;normal2Local2X=normal2Local2Y;normal2Local2Y=-tX;invLength=1.0/Math.sqrt(normal2Local2X*normal2Local2X+normal2Local2Y*normal2Local2Y);normal2Local2X*=invLength;normal2Local2Y*=invLength;var dot=normal2Local2X*normal1Local2X+normal2Local2Y*normal1Local2Y;if(dot<minDot)
{minDot=dot;vertex21=i1;vertex22=i2;}}
var tClip;tClip=c[0];tVec=tClip.v;tVec.SetV(vert2s[vertex21]);tVec.MulM(poly2.m_R);tVec.Add(poly2.m_position);tClip.id.features.referenceFace=edge1;tClip.id.features.incidentEdge=vertex21;tClip.id.features.incidentVertex=vertex21;tClip=c[1];tVec=tClip.v;tVec.SetV(vert2s[vertex22]);tVec.MulM(poly2.m_R);tVec.Add(poly2.m_position);tClip.id.features.referenceFace=edge1;tClip.id.features.incidentEdge=vertex21;tClip.id.features.incidentVertex=vertex22;};b2Collision.b2CollidePolyTempVec=new b2Vec2();b2Collision.b2CollidePoly=function(manifold,polyA,polyB,conservative)
{manifold.pointCount=0;var edgeA=0;var edgeAOut=[edgeA];var separationA=b2Collision.FindMaxSeparation(edgeAOut,polyA,polyB,conservative);edgeA=edgeAOut[0];if(separationA>0.0&&conservative==false)
return;var edgeB=0;var edgeBOut=[edgeB];var separationB=b2Collision.FindMaxSeparation(edgeBOut,polyB,polyA,conservative);edgeB=edgeBOut[0];if(separationB>0.0&&conservative==false)
return;var poly1;var poly2;var edge1=0;var flip=0;var k_relativeTol=0.98;var k_absoluteTol=0.001;if(separationB>k_relativeTol*separationA+k_absoluteTol)
{poly1=polyB;poly2=polyA;edge1=edgeB;flip=1;}
else
{poly1=polyA;poly2=polyB;edge1=edgeA;flip=0;}
var incidentEdge=[new ClipVertex(),new ClipVertex()];b2Collision.FindIncidentEdge(incidentEdge,poly1,edge1,poly2);var count1=poly1.m_vertexCount;var vert1s=poly1.m_vertices;var v11=vert1s[edge1];var v12=edge1+1<count1?vert1s[edge1+1]:vert1s[0];var dvX=v12.x-v11.x;var dvY=v12.y-v11.y;var sideNormalX=v12.x-v11.x;var sideNormalY=v12.y-v11.y;var tX=sideNormalX;var tMat=poly1.m_R;sideNormalX=tMat.col1.x*tX+tMat.col2.x*sideNormalY;sideNormalY=tMat.col1.y*tX+tMat.col2.y*sideNormalY;var invLength=1.0/Math.sqrt(sideNormalX*sideNormalX+sideNormalY*sideNormalY);sideNormalX*=invLength;sideNormalY*=invLength;var frontNormalX=sideNormalX;var frontNormalY=sideNormalY;tX=frontNormalX;frontNormalX=frontNormalY;frontNormalY=-tX;var v11X=v11.x;var v11Y=v11.y;tX=v11X;tMat=poly1.m_R;v11X=tMat.col1.x*tX+tMat.col2.x*v11Y;v11Y=tMat.col1.y*tX+tMat.col2.y*v11Y;v11X+=poly1.m_position.x;v11Y+=poly1.m_position.y;var v12X=v12.x;var v12Y=v12.y;tX=v12X;tMat=poly1.m_R;v12X=tMat.col1.x*tX+tMat.col2.x*v12Y;v12Y=tMat.col1.y*tX+tMat.col2.y*v12Y;v12X+=poly1.m_position.x;v12Y+=poly1.m_position.y;var frontOffset=frontNormalX*v11X+frontNormalY*v11Y;var sideOffset1=-(sideNormalX*v11X+sideNormalY*v11Y);var sideOffset2=sideNormalX*v12X+sideNormalY*v12Y;var clipPoints1=[new ClipVertex(),new ClipVertex()];var clipPoints2=[new ClipVertex(),new ClipVertex()];var np=0;b2Collision.b2CollidePolyTempVec.Set(-sideNormalX,-sideNormalY);np=b2Collision.ClipSegmentToLine(clipPoints1,incidentEdge,b2Collision.b2CollidePolyTempVec,sideOffset1);if(np<2)
return;b2Collision.b2CollidePolyTempVec.Set(sideNormalX,sideNormalY);np=b2Collision.ClipSegmentToLine(clipPoints2,clipPoints1,b2Collision.b2CollidePolyTempVec,sideOffset2);if(np<2)
return;if(flip){manifold.normal.Set(-frontNormalX,-frontNormalY);}
else{manifold.normal.Set(frontNormalX,frontNormalY);}
var pointCount=0;for(var i=0;i<b2Settings.b2_maxManifoldPoints;++i)
{var tVec=clipPoints2[i].v;var separation=(frontNormalX*tVec.x+frontNormalY*tVec.y)-frontOffset;if(separation<=0.0||conservative==true)
{var cp=manifold.points[pointCount];cp.separation=separation;cp.position.SetV(clipPoints2[i].v);cp.id.Set(clipPoints2[i].id);cp.id.features.flip=flip;++pointCount;}}
manifold.pointCount=pointCount;};b2Collision.b2CollideCircle=function(manifold,circle1,circle2,conservative)
{manifold.pointCount=0;var dX=circle2.m_position.x-circle1.m_position.x;var dY=circle2.m_position.y-circle1.m_position.y;var distSqr=dX*dX+dY*dY;var radiusSum=circle1.m_radius+circle2.m_radius;if(distSqr>radiusSum*radiusSum&&conservative==false)
{return;}
var separation;if(distSqr<Number.MIN_VALUE)
{separation=-radiusSum;manifold.normal.Set(0.0,1.0);}
else
{var dist=Math.sqrt(distSqr);separation=dist-radiusSum;var a=1.0/dist;manifold.normal.x=a*dX;manifold.normal.y=a*dY;}
manifold.pointCount=1;var tPoint=manifold.points[0];tPoint.id.set_key(0);tPoint.separation=separation;tPoint.position.x=circle2.m_position.x-(circle2.m_radius*manifold.normal.x);tPoint.position.y=circle2.m_position.y-(circle2.m_radius*manifold.normal.y);};b2Collision.b2CollidePolyAndCircle=function(manifold,poly,circle,conservative)
{manifold.pointCount=0;var tPoint;var dX;var dY;var xLocalX=circle.m_position.x-poly.m_position.x;var xLocalY=circle.m_position.y-poly.m_position.y;var tMat=poly.m_R;var tX=xLocalX*tMat.col1.x+xLocalY*tMat.col1.y;xLocalY=xLocalX*tMat.col2.x+xLocalY*tMat.col2.y;xLocalX=tX;var dist;var normalIndex=0;var separation=-Number.MAX_VALUE;var radius=circle.m_radius;for(var i=0;i<poly.m_vertexCount;++i)
{var s=poly.m_normals[i].x*(xLocalX-poly.m_vertices[i].x)+poly.m_normals[i].y*(xLocalY-poly.m_vertices[i].y);if(s>radius)
{return;}
if(s>separation)
{separation=s;normalIndex=i;}}
if(separation<Number.MIN_VALUE)
{manifold.pointCount=1;var tVec=poly.m_normals[normalIndex];manifold.normal.x=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;manifold.normal.y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tPoint=manifold.points[0];tPoint.id.features.incidentEdge=normalIndex;tPoint.id.features.incidentVertex=b2Collision.b2_nullFeature;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=separation-radius;return;}
var vertIndex1=normalIndex;var vertIndex2=vertIndex1+1<poly.m_vertexCount?vertIndex1+1:0;var eX=poly.m_vertices[vertIndex2].x-poly.m_vertices[vertIndex1].x;var eY=poly.m_vertices[vertIndex2].y-poly.m_vertices[vertIndex1].y;var length=Math.sqrt(eX*eX+eY*eY);eX/=length;eY/=length;if(length<Number.MIN_VALUE)
{dX=xLocalX-poly.m_vertices[vertIndex1].x;dY=xLocalY-poly.m_vertices[vertIndex1].y;dist=Math.sqrt(dX*dX+dY*dY);dX/=dist;dY/=dist;if(dist>radius)
{return;}
manifold.pointCount=1;manifold.normal.Set(tMat.col1.x*dX+tMat.col2.x*dY,tMat.col1.y*dX+tMat.col2.y*dY);tPoint=manifold.points[0];tPoint.id.features.incidentEdge=b2Collision.b2_nullFeature;tPoint.id.features.incidentVertex=vertIndex1;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=dist-radius;return;}
var u=(xLocalX-poly.m_vertices[vertIndex1].x)*eX+(xLocalY-poly.m_vertices[vertIndex1].y)*eY;tPoint=manifold.points[0];tPoint.id.features.incidentEdge=b2Collision.b2_nullFeature;tPoint.id.features.incidentVertex=b2Collision.b2_nullFeature;tPoint.id.features.referenceFace=b2Collision.b2_nullFeature;tPoint.id.features.flip=0;var pX,pY;if(u<=0.0)
{pX=poly.m_vertices[vertIndex1].x;pY=poly.m_vertices[vertIndex1].y;tPoint.id.features.incidentVertex=vertIndex1;}
else if(u>=length)
{pX=poly.m_vertices[vertIndex2].x;pY=poly.m_vertices[vertIndex2].y;tPoint.id.features.incidentVertex=vertIndex2;}
else
{pX=eX*u+poly.m_vertices[vertIndex1].x;pY=eY*u+poly.m_vertices[vertIndex1].y;tPoint.id.features.incidentEdge=vertIndex1;}
dX=xLocalX-pX;dY=xLocalY-pY;dist=Math.sqrt(dX*dX+dY*dY);dX/=dist;dY/=dist;if(dist>radius)
{return;}
manifold.pointCount=1;manifold.normal.Set(tMat.col1.x*dX+tMat.col2.x*dY,tMat.col1.y*dX+tMat.col2.y*dY);tPoint.position.x=circle.m_position.x-radius*manifold.normal.x;tPoint.position.y=circle.m_position.y-radius*manifold.normal.y;tPoint.separation=dist-radius;};b2Collision.b2TestOverlap=function(a,b)
{var t1=b.minVertex;var t2=a.maxVertex;var d1X=t1.x-t2.x;var d1Y=t1.y-t2.y;t1=a.minVertex;t2=b.maxVertex;var d2X=t1.x-t2.x;var d2Y=t1.y-t2.y;if(d1X>0.0||d1Y>0.0)
return false;if(d2X>0.0||d2Y>0.0)
return false;return true;};
var Features=Class.create();Features.prototype={set_referenceFace:function(value){this._referenceFace=value;this._m_id._key=(this._m_id._key&0xffffff00)|(this._referenceFace&0x000000ff)},get_referenceFace:function(){return this._referenceFace;},_referenceFace:0,set_incidentEdge:function(value){this._incidentEdge=value;this._m_id._key=(this._m_id._key&0xffff00ff)|((this._incidentEdge<<8)&0x0000ff00)},get_incidentEdge:function(){return this._incidentEdge;},_incidentEdge:0,set_incidentVertex:function(value){this._incidentVertex=value;this._m_id._key=(this._m_id._key&0xff00ffff)|((this._incidentVertex<<16)&0x00ff0000)},get_incidentVertex:function(){return this._incidentVertex;},_incidentVertex:0,set_flip:function(value){this._flip=value;this._m_id._key=(this._m_id._key&0x00ffffff)|((this._flip<<24)&0xff000000)},get_flip:function(){return this._flip;},_flip:0,_m_id:null,initialize:function(){}};
var b2ContactID=Class.create();b2ContactID.prototype={initialize:function(){this.features=new Features();this.features._m_id=this;},Set:function(id){this.set_key(id._key);},Copy:function(){var id=new b2ContactID();id.set_key(this._key);return id;},get_key:function(){return this._key;},set_key:function(value){this._key=value;this.features._referenceFace=this._key&0x000000ff;this.features._incidentEdge=((this._key&0x0000ff00)>>8)&0x000000ff;this.features._incidentVertex=((this._key&0x00ff0000)>>16)&0x000000ff;this.features._flip=((this._key&0xff000000)>>24)&0x000000ff;},features:new Features(),_key:0};
var b2ContactPoint=Class.create();b2ContactPoint.prototype={position:new b2Vec2(),separation:null,normalImpulse:null,tangentImpulse:null,id:new b2ContactID(),initialize:function(){this.position=new b2Vec2();this.id=new b2ContactID();}};var b2Distance=Class.create();b2Distance.prototype={initialize:function(){}};b2Distance.ProcessTwo=function(p1Out,p2Out,p1s,p2s,points)
{var rX=-points[1].x;var rY=-points[1].y;var dX=points[0].x-points[1].x;var dY=points[0].y-points[1].y;var length=Math.sqrt(dX*dX+dY*dY);dX/=length;dY/=length;var lambda=rX*dX+rY*dY;if(lambda<=0.0||length<Number.MIN_VALUE)
{p1Out.SetV(p1s[1]);p2Out.SetV(p2s[1]);p1s[0].SetV(p1s[1]);p2s[0].SetV(p2s[1]);points[0].SetV(points[1]);return 1;}
lambda/=length;p1Out.x=p1s[1].x+lambda*(p1s[0].x-p1s[1].x);p1Out.y=p1s[1].y+lambda*(p1s[0].y-p1s[1].y);p2Out.x=p2s[1].x+lambda*(p2s[0].x-p2s[1].x);p2Out.y=p2s[1].y+lambda*(p2s[0].y-p2s[1].y);return 2;};b2Distance.ProcessThree=function(p1Out,p2Out,p1s,p2s,points)
{var aX=points[0].x;var aY=points[0].y;var bX=points[1].x;var bY=points[1].y;var cX=points[2].x;var cY=points[2].y;var abX=bX-aX;var abY=bY-aY;var acX=cX-aX;var acY=cY-aY;var bcX=cX-bX;var bcY=cY-bY;var sn=-(aX*abX+aY*abY);var sd=(bX*abX+bY*abY);var tn=-(aX*acX+aY*acY);var td=(cX*acX+cY*acY);var un=-(bX*bcX+bY*bcY);var ud=(cX*bcX+cY*bcY);if(td<=0.0&&ud<=0.0)
{p1Out.SetV(p1s[2]);p2Out.SetV(p2s[2]);p1s[0].SetV(p1s[2]);p2s[0].SetV(p2s[2]);points[0].SetV(points[2]);return 1;}
var n=abX*acY-abY*acX;var vc=n*(aX*bY-aY*bX);var va=n*(bX*cY-bY*cX);if(va<=0.0&&un>=0.0&&ud>=0.0)
{var lambda=un/(un+ud);p1Out.x=p1s[1].x+lambda*(p1s[2].x-p1s[1].x);p1Out.y=p1s[1].y+lambda*(p1s[2].y-p1s[1].y);p2Out.x=p2s[1].x+lambda*(p2s[2].x-p2s[1].x);p2Out.y=p2s[1].y+lambda*(p2s[2].y-p2s[1].y);p1s[0].SetV(p1s[2]);p2s[0].SetV(p2s[2]);points[0].SetV(points[2]);return 2;}
var vb=n*(cX*aY-cY*aX);if(vb<=0.0&&tn>=0.0&&td>=0.0)
{var lambda=tn/(tn+td);p1Out.x=p1s[0].x+lambda*(p1s[2].x-p1s[0].x);p1Out.y=p1s[0].y+lambda*(p1s[2].y-p1s[0].y);p2Out.x=p2s[0].x+lambda*(p2s[2].x-p2s[0].x);p2Out.y=p2s[0].y+lambda*(p2s[2].y-p2s[0].y);p1s[1].SetV(p1s[2]);p2s[1].SetV(p2s[2]);points[1].SetV(points[2]);return 2;}
var denom=va+vb+vc;denom=1.0/denom;var u=va*denom;var v=vb*denom;var w=1.0-u-v;p1Out.x=u*p1s[0].x+v*p1s[1].x+w*p1s[2].x;p1Out.y=u*p1s[0].y+v*p1s[1].y+w*p1s[2].y;p2Out.x=u*p2s[0].x+v*p2s[1].x+w*p2s[2].x;p2Out.y=u*p2s[0].y+v*p2s[1].y+w*p2s[2].y;return 3;};b2Distance.InPoinsts=function(w,points,pointCount)
{for(var i=0;i<pointCount;++i)
{if(w.x==points[i].x&&w.y==points[i].y)
{return true;}}
return false;};b2Distance.Distance=function(p1Out,p2Out,shape1,shape2)
{var p1s=new Array(3);var p2s=new Array(3);var points=new Array(3);var pointCount=0;p1Out.SetV(shape1.m_position);p2Out.SetV(shape2.m_position);var vSqr=0.0;var maxIterations=20;for(var iter=0;iter<maxIterations;++iter)
{var vX=p2Out.x-p1Out.x;var vY=p2Out.y-p1Out.y;var w1=shape1.Support(vX,vY);var w2=shape2.Support(-vX,-vY);vSqr=(vX*vX+vY*vY);var wX=w2.x-w1.x;var wY=w2.y-w1.y;var vw=(vX*wX+vY*wY);if(vSqr-b2Dot(vX*wX+vY*wY)<=0.01*vSqr)
{if(pointCount==0)
{p1Out.SetV(w1);p2Out.SetV(w2);}
b2Distance.g_GJK_Iterations=iter;return Math.sqrt(vSqr);}
switch(pointCount)
{case 0:p1s[0].SetV(w1);p2s[0].SetV(w2);points[0]=w;p1Out.SetV(p1s[0]);p2Out.SetV(p2s[0]);++pointCount;break;case 1:p1s[1].SetV(w1);p2s[1].SetV(w2);points[1].x=wX;points[1].y=wY;pointCount=b2Distance.ProcessTwo(p1Out,p2Out,p1s,p2s,points);break;case 2:p1s[2].SetV(w1);p2s[2].SetV(w2);points[2].x=wX;points[2].y=wY;pointCount=b2Distance.ProcessThree(p1Out,p2Out,p1s,p2s,points);break;}
if(pointCount==3)
{b2Distance.g_GJK_Iterations=iter;return 0.0;}
var maxSqr=-Number.MAX_VALUE;for(var i=0;i<pointCount;++i)
{maxSqr=b2Math.b2Max(maxSqr,(points[i].x*points[i].x+points[i].y*points[i].y));}
if(pointCount==3||vSqr<=100.0*Number.MIN_VALUE*maxSqr)
{b2Distance.g_GJK_Iterations=iter;return Math.sqrt(vSqr);}}
b2Distance.g_GJK_Iterations=maxIterations;return Math.sqrt(vSqr);};b2Distance.g_GJK_Iterations=0;
var b2Manifold=Class.create();b2Manifold.prototype={initialize:function(){this.points=new Array(b2Settings.b2_maxManifoldPoints);for(var i=0;i<b2Settings.b2_maxManifoldPoints;i++){this.points[i]=new b2ContactPoint();}
this.normal=new b2Vec2();},points:null,normal:null,pointCount:0};
var b2OBB=Class.create();b2OBB.prototype={R:new b2Mat22(),center:new b2Vec2(),extents:new b2Vec2(),initialize:function(){this.R=new b2Mat22();this.center=new b2Vec2();this.extents=new b2Vec2();}};
var b2Proxy=Class.create();b2Proxy.prototype={GetNext:function(){return this.lowerBounds[0];},SetNext:function(next){this.lowerBounds[0]=next;},IsValid:function(){return this.overlapCount!=b2BroadPhase.b2_invalid;},lowerBounds:[(0),(0)],upperBounds:[(0),(0)],overlapCount:0,timeStamp:0,userData:null,initialize:function(){this.lowerBounds=[(0),(0)];this.upperBounds=[(0),(0)];}}

var ClipVertex=Class.create();ClipVertex.prototype={v:new b2Vec2(),id:new b2ContactID(),initialize:function(){this.v=new b2Vec2();this.id=new b2ContactID();}};var b2Shape=Class.create();b2Shape.prototype={TestPoint:function(p){return false},GetUserData:function(){return this.m_userData;},GetType:function(){return this.m_type;},GetBody:function(){return this.m_body;},GetPosition:function(){return this.m_position;},GetRotationMatrix:function(){return this.m_R;},ResetProxy:function(broadPhase){},GetNext:function(){return this.m_next;},initialize:function(def,body){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;},DestroyProxy:function()
{if(this.m_proxyId!=b2Pair.b2_nullProxy)
{this.m_body.m_world.m_broadPhase.DestroyProxy(this.m_proxyId);this.m_proxyId=b2Pair.b2_nullProxy;}},Synchronize:function(position1,R1,position2,R2){},QuickSync:function(position,R){},Support:function(dX,dY,out){},GetMaxRadius:function(){return this.m_maxRadius;},m_next:null,m_R:new b2Mat22(),m_position:new b2Vec2(),m_type:0,m_userData:null,m_body:null,m_friction:null,m_restitution:null,m_maxRadius:null,m_proxyId:0,m_categoryBits:0,m_maskBits:0,m_groupIndex:0};b2Shape.Create=function(def,body,center){switch(def.type)
{case b2Shape.e_circleShape:{return new b2CircleShape(def,body,center);}
case b2Shape.e_boxShape:case b2Shape.e_polyShape:{return new b2PolyShape(def,body,center);}}
return null;};b2Shape.Destroy=function(shape)
{if(shape.m_proxyId!=b2Pair.b2_nullProxy)
shape.m_body.m_world.m_broadPhase.DestroyProxy(shape.m_proxyId);};b2Shape.e_unknownShape=-1;b2Shape.e_circleShape=0;b2Shape.e_boxShape=1;b2Shape.e_polyShape=2;b2Shape.e_meshShape=3;b2Shape.e_shapeTypeCount=4;b2Shape.PolyMass=function(massData,vs,count,rho)
{var center=new b2Vec2();center.SetZero();var area=0.0;var I=0.0;var pRef=new b2Vec2(0.0,0.0);var inv3=1.0/3.0;for(var i=0;i<count;++i)
{var p1=pRef;var p2=vs[i];var p3=i+1<count?vs[i+1]:vs[0];var e1=b2Math.SubtractVV(p2,p1);var e2=b2Math.SubtractVV(p3,p1);var D=b2Math.b2CrossVV(e1,e2);var triangleArea=0.5*D;area+=triangleArea;var tVec=new b2Vec2();tVec.SetV(p1);tVec.Add(p2);tVec.Add(p3);tVec.Multiply(inv3*triangleArea);center.Add(tVec);var px=p1.x;var py=p1.y;var ex1=e1.x;var ey1=e1.y;var ex2=e2.x;var ey2=e2.y;var intx2=inv3*(0.25*(ex1*ex1+ex2*ex1+ex2*ex2)+(px*ex1+px*ex2))+0.5*px*px;var inty2=inv3*(0.25*(ey1*ey1+ey2*ey1+ey2*ey2)+(py*ey1+py*ey2))+0.5*py*py;I+=D*(intx2+inty2);}
massData.mass=rho*area;center.Multiply(1.0/area);massData.center=center;I=rho*(I-area*b2Math.b2Dot(center,center));massData.I=I;};b2Shape.PolyCentroid=function(vs,count,out)
{var cX=0.0;var cY=0.0;var area=0.0;var pRefX=0.0;var pRefY=0.0;var inv3=1.0/3.0;for(var i=0;i<count;++i)
{var p1X=pRefX;var p1Y=pRefY;var p2X=vs[i].x;var p2Y=vs[i].y;var p3X=i+1<count?vs[i+1].x:vs[0].x;var p3Y=i+1<count?vs[i+1].y:vs[0].y;var e1X=p2X-p1X;var e1Y=p2Y-p1Y;var e2X=p3X-p1X;var e2Y=p3Y-p1Y;var D=(e1X*e2Y-e1Y*e2X);var triangleArea=0.5*D;area+=triangleArea;cX+=triangleArea*inv3*(p1X+p2X+p3X);cY+=triangleArea*inv3*(p1Y+p2Y+p3Y);}
cX*=1.0/area;cY*=1.0/area;out.Set(cX,cY);};
var b2ShapeDef=Class.create();b2ShapeDef.prototype={initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;},ComputeMass:function(massData)
{massData.center=new b2Vec2(0.0,0.0)
if(this.density==0.0)
{massData.mass=0.0;massData.center.Set(0.0,0.0);massData.I=0.0;};switch(this.type)
{case b2Shape.e_circleShape:{var circle=this;massData.mass=this.density*b2Settings.b2_pi*circle.radius*circle.radius;massData.center.Set(0.0,0.0);massData.I=0.5*(massData.mass)*circle.radius*circle.radius;}
break;case b2Shape.e_boxShape:{var box=this;massData.mass=4.0*this.density*box.extents.x*box.extents.y;massData.center.Set(0.0,0.0);massData.I=massData.mass/3.0*b2Math.b2Dot(box.extents,box.extents);}
break;case b2Shape.e_polyShape:{var poly=this;b2Shape.PolyMass(massData,poly.vertices,poly.vertexCount,this.density);}
break;default:massData.mass=0.0;massData.center.Set(0.0,0.0);massData.I=0.0;break;}},type:0,userData:null,localPosition:null,localRotation:null,friction:null,restitution:null,density:null,categoryBits:0,maskBits:0,groupIndex:0};
var b2BoxDef=Class.create();Object.extend(b2BoxDef.prototype,b2ShapeDef.prototype);Object.extend(b2BoxDef.prototype,{initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.type=b2Shape.e_boxShape;this.extents=new b2Vec2(1.0,1.0);},extents:null});
var b2CircleDef=Class.create();Object.extend(b2CircleDef.prototype,b2ShapeDef.prototype);Object.extend(b2CircleDef.prototype,{initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.type=b2Shape.e_circleShape;this.radius=1.0;},radius:null});var b2CircleShape=Class.create();Object.extend(b2CircleShape.prototype,b2Shape.prototype);Object.extend(b2CircleShape.prototype,{TestPoint:function(p){var d=new b2Vec2();d.SetV(p);d.Subtract(this.m_position);return b2Math.b2Dot(d,d)<=this.m_radius*this.m_radius;},initialize:function(def,body,localCenter){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;this.m_localPosition=new b2Vec2();var circle=def;this.m_localPosition.Set(def.localPosition.x-localCenter.x,def.localPosition.y-localCenter.y);this.m_type=b2Shape.e_circleShape;this.m_radius=circle.radius;this.m_R.SetM(this.m_body.m_R);var rX=this.m_R.col1.x*this.m_localPosition.x+this.m_R.col2.x*this.m_localPosition.y;var rY=this.m_R.col1.y*this.m_localPosition.x+this.m_R.col2.y*this.m_localPosition.y;this.m_position.x=this.m_body.m_position.x+rX;this.m_position.y=this.m_body.m_position.y+rY;this.m_maxRadius=Math.sqrt(rX*rX+rY*rY)+this.m_radius;var aabb=new b2AABB();aabb.minVertex.Set(this.m_position.x-this.m_radius,this.m_position.y-this.m_radius);aabb.maxVertex.Set(this.m_position.x+this.m_radius,this.m_position.y+this.m_radius);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},Synchronize:function(position1,R1,position2,R2){this.m_R.SetM(R2);this.m_position.x=(R2.col1.x*this.m_localPosition.x+R2.col2.x*this.m_localPosition.y)+position2.x;this.m_position.y=(R2.col1.y*this.m_localPosition.x+R2.col2.y*this.m_localPosition.y)+position2.y;if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var p1X=position1.x+(R1.col1.x*this.m_localPosition.x+R1.col2.x*this.m_localPosition.y);var p1Y=position1.y+(R1.col1.y*this.m_localPosition.x+R1.col2.y*this.m_localPosition.y);var lowerX=Math.min(p1X,this.m_position.x);var lowerY=Math.min(p1Y,this.m_position.y);var upperX=Math.max(p1X,this.m_position.x);var upperY=Math.max(p1Y,this.m_position.y);var aabb=new b2AABB();aabb.minVertex.Set(lowerX-this.m_radius,lowerY-this.m_radius);aabb.maxVertex.Set(upperX+this.m_radius,upperY+this.m_radius);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
{broadPhase.MoveProxy(this.m_proxyId,aabb);}
else
{this.m_body.Freeze();}},QuickSync:function(position,R){this.m_R.SetM(R);this.m_position.x=(R.col1.x*this.m_localPosition.x+R.col2.x*this.m_localPosition.y)+position.x;this.m_position.y=(R.col1.y*this.m_localPosition.x+R.col2.y*this.m_localPosition.y)+position.y;},ResetProxy:function(broadPhase)
{if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var proxy=broadPhase.GetProxy(this.m_proxyId);broadPhase.DestroyProxy(this.m_proxyId);proxy=null;var aabb=new b2AABB();aabb.minVertex.Set(this.m_position.x-this.m_radius,this.m_position.y-this.m_radius);aabb.maxVertex.Set(this.m_position.x+this.m_radius,this.m_position.y+this.m_radius);if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},Support:function(dX,dY,out)
{var len=Math.sqrt(dX*dX+dY*dY);dX/=len;dY/=len;out.Set(this.m_position.x+this.m_radius*dX,this.m_position.y+this.m_radius*dY);},m_localPosition:new b2Vec2(),m_radius:null});
var b2MassData=Class.create();b2MassData.prototype={mass:0.0,center:new b2Vec2(0,0),I:0.0,initialize:function(){this.center=new b2Vec2(0,0);}}

var b2PolyDef=Class.create();Object.extend(b2PolyDef.prototype,b2ShapeDef.prototype);Object.extend(b2PolyDef.prototype,{initialize:function()
{this.type=b2Shape.e_unknownShape;this.userData=null;this.localPosition=new b2Vec2(0.0,0.0);this.localRotation=0.0;this.friction=0.2;this.restitution=0.0;this.density=0.0;this.categoryBits=0x0001;this.maskBits=0xFFFF;this.groupIndex=0;this.vertices=new Array(b2Settings.b2_maxPolyVertices);this.type=b2Shape.e_polyShape;this.vertexCount=0;for(var i=0;i<b2Settings.b2_maxPolyVertices;i++){this.vertices[i]=new b2Vec2();}},vertices:new Array(b2Settings.b2_maxPolyVertices),vertexCount:0});var b2PolyShape=Class.create();Object.extend(b2PolyShape.prototype,b2Shape.prototype);Object.extend(b2PolyShape.prototype,{TestPoint:function(p){var pLocal=new b2Vec2();pLocal.SetV(p);pLocal.Subtract(this.m_position);pLocal.MulTM(this.m_R);for(var i=0;i<this.m_vertexCount;++i)
{var tVec=new b2Vec2();tVec.SetV(pLocal);tVec.Subtract(this.m_vertices[i]);var dot=b2Math.b2Dot(this.m_normals[i],tVec);if(dot>0.0)
{return false;}}
return true;},initialize:function(def,body,newOrigin){this.m_R=new b2Mat22();this.m_position=new b2Vec2();this.m_userData=def.userData;this.m_friction=def.friction;this.m_restitution=def.restitution;this.m_body=body;this.m_proxyId=b2Pair.b2_nullProxy;this.m_maxRadius=0.0;this.m_categoryBits=def.categoryBits;this.m_maskBits=def.maskBits;this.m_groupIndex=def.groupIndex;this.syncAABB=new b2AABB();this.syncMat=new b2Mat22();this.m_localCentroid=new b2Vec2();this.m_localOBB=new b2OBB();var i=0;var hX;var hY;var tVec;var aabb=new b2AABB();this.m_vertices=new Array(b2Settings.b2_maxPolyVertices);this.m_coreVertices=new Array(b2Settings.b2_maxPolyVertices);this.m_normals=new Array(b2Settings.b2_maxPolyVertices);this.m_type=b2Shape.e_polyShape;var localR=new b2Mat22(def.localRotation);if(def.type==b2Shape.e_boxShape)
{this.m_localCentroid.x=def.localPosition.x-newOrigin.x;this.m_localCentroid.y=def.localPosition.y-newOrigin.y;var box=def;this.m_vertexCount=4;hX=box.extents.x;hY=box.extents.y;var hcX=Math.max(0.0,hX-2.0*b2Settings.b2_linearSlop);var hcY=Math.max(0.0,hY-2.0*b2Settings.b2_linearSlop);tVec=this.m_vertices[0]=new b2Vec2();tVec.x=localR.col1.x*hX+localR.col2.x*hY;tVec.y=localR.col1.y*hX+localR.col2.y*hY;tVec=this.m_vertices[1]=new b2Vec2();tVec.x=localR.col1.x*-hX+localR.col2.x*hY;tVec.y=localR.col1.y*-hX+localR.col2.y*hY;tVec=this.m_vertices[2]=new b2Vec2();tVec.x=localR.col1.x*-hX+localR.col2.x*-hY;tVec.y=localR.col1.y*-hX+localR.col2.y*-hY;tVec=this.m_vertices[3]=new b2Vec2();tVec.x=localR.col1.x*hX+localR.col2.x*-hY;tVec.y=localR.col1.y*hX+localR.col2.y*-hY;tVec=this.m_coreVertices[0]=new b2Vec2();tVec.x=localR.col1.x*hcX+localR.col2.x*hcY;tVec.y=localR.col1.y*hcX+localR.col2.y*hcY;tVec=this.m_coreVertices[1]=new b2Vec2();tVec.x=localR.col1.x*-hcX+localR.col2.x*hcY;tVec.y=localR.col1.y*-hcX+localR.col2.y*hcY;tVec=this.m_coreVertices[2]=new b2Vec2();tVec.x=localR.col1.x*-hcX+localR.col2.x*-hcY;tVec.y=localR.col1.y*-hcX+localR.col2.y*-hcY;tVec=this.m_coreVertices[3]=new b2Vec2();tVec.x=localR.col1.x*hcX+localR.col2.x*-hcY;tVec.y=localR.col1.y*hcX+localR.col2.y*-hcY;}
else
{var poly=def;this.m_vertexCount=poly.vertexCount;b2Shape.PolyCentroid(poly.vertices,poly.vertexCount,b2PolyShape.tempVec);var centroidX=b2PolyShape.tempVec.x;var centroidY=b2PolyShape.tempVec.y;this.m_localCentroid.x=def.localPosition.x+(localR.col1.x*centroidX+localR.col2.x*centroidY)-newOrigin.x;this.m_localCentroid.y=def.localPosition.y+(localR.col1.y*centroidX+localR.col2.y*centroidY)-newOrigin.y;for(i=0;i<this.m_vertexCount;++i)
{this.m_vertices[i]=new b2Vec2();this.m_coreVertices[i]=new b2Vec2();hX=poly.vertices[i].x-centroidX;hY=poly.vertices[i].y-centroidY;this.m_vertices[i].x=localR.col1.x*hX+localR.col2.x*hY;this.m_vertices[i].y=localR.col1.y*hX+localR.col2.y*hY;var uX=this.m_vertices[i].x;var uY=this.m_vertices[i].y;var length=Math.sqrt(uX*uX+uY*uY);if(length>Number.MIN_VALUE)
{uX*=1.0/length;uY*=1.0/length;}
this.m_coreVertices[i].x=this.m_vertices[i].x-2.0*b2Settings.b2_linearSlop*uX;this.m_coreVertices[i].y=this.m_vertices[i].y-2.0*b2Settings.b2_linearSlop*uY;}}
var minVertexX=Number.MAX_VALUE;var minVertexY=Number.MAX_VALUE;var maxVertexX=-Number.MAX_VALUE;var maxVertexY=-Number.MAX_VALUE;this.m_maxRadius=0.0;for(i=0;i<this.m_vertexCount;++i)
{var v=this.m_vertices[i];minVertexX=Math.min(minVertexX,v.x);minVertexY=Math.min(minVertexY,v.y);maxVertexX=Math.max(maxVertexX,v.x);maxVertexY=Math.max(maxVertexY,v.y);this.m_maxRadius=Math.max(this.m_maxRadius,v.Length());}
this.m_localOBB.R.SetIdentity();this.m_localOBB.center.Set((minVertexX+maxVertexX)*0.5,(minVertexY+maxVertexY)*0.5);this.m_localOBB.extents.Set((maxVertexX-minVertexX)*0.5,(maxVertexY-minVertexY)*0.5);var i1=0;var i2=0;for(i=0;i<this.m_vertexCount;++i)
{this.m_normals[i]=new b2Vec2();i1=i;i2=i+1<this.m_vertexCount?i+1:0;this.m_normals[i].x=this.m_vertices[i2].y-this.m_vertices[i1].y;this.m_normals[i].y=-(this.m_vertices[i2].x-this.m_vertices[i1].x);this.m_normals[i].Normalize();}
for(i=0;i<this.m_vertexCount;++i)
{i1=i;i2=i+1<this.m_vertexCount?i+1:0;}
this.m_R.SetM(this.m_body.m_R);this.m_position.x=this.m_body.m_position.x+(this.m_R.col1.x*this.m_localCentroid.x+this.m_R.col2.x*this.m_localCentroid.y);this.m_position.y=this.m_body.m_position.y+(this.m_R.col1.y*this.m_localCentroid.x+this.m_R.col2.y*this.m_localCentroid.y);b2PolyShape.tAbsR.col1.x=this.m_R.col1.x*this.m_localOBB.R.col1.x+this.m_R.col2.x*this.m_localOBB.R.col1.y;b2PolyShape.tAbsR.col1.y=this.m_R.col1.y*this.m_localOBB.R.col1.x+this.m_R.col2.y*this.m_localOBB.R.col1.y;b2PolyShape.tAbsR.col2.x=this.m_R.col1.x*this.m_localOBB.R.col2.x+this.m_R.col2.x*this.m_localOBB.R.col2.y;b2PolyShape.tAbsR.col2.y=this.m_R.col1.y*this.m_localOBB.R.col2.x+this.m_R.col2.y*this.m_localOBB.R.col2.y;b2PolyShape.tAbsR.Abs()
hX=b2PolyShape.tAbsR.col1.x*this.m_localOBB.extents.x+b2PolyShape.tAbsR.col2.x*this.m_localOBB.extents.y;hY=b2PolyShape.tAbsR.col1.y*this.m_localOBB.extents.x+b2PolyShape.tAbsR.col2.y*this.m_localOBB.extents.y;var positionX=this.m_position.x+(this.m_R.col1.x*this.m_localOBB.center.x+this.m_R.col2.x*this.m_localOBB.center.y);var positionY=this.m_position.y+(this.m_R.col1.y*this.m_localOBB.center.x+this.m_R.col2.y*this.m_localOBB.center.y);aabb.minVertex.x=positionX-hX;aabb.minVertex.y=positionY-hY;aabb.maxVertex.x=positionX+hX;aabb.maxVertex.y=positionY+hY;var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},syncAABB:new b2AABB(),syncMat:new b2Mat22(),Synchronize:function(position1,R1,position2,R2){this.m_R.SetM(R2);this.m_position.x=this.m_body.m_position.x+(R2.col1.x*this.m_localCentroid.x+R2.col2.x*this.m_localCentroid.y);this.m_position.y=this.m_body.m_position.y+(R2.col1.y*this.m_localCentroid.x+R2.col2.y*this.m_localCentroid.y);if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var hX;var hY;var v1=R1.col1;var v2=R1.col2;var v3=this.m_localOBB.R.col1;var v4=this.m_localOBB.R.col2;this.syncMat.col1.x=v1.x*v3.x+v2.x*v3.y;this.syncMat.col1.y=v1.y*v3.x+v2.y*v3.y;this.syncMat.col2.x=v1.x*v4.x+v2.x*v4.y;this.syncMat.col2.y=v1.y*v4.x+v2.y*v4.y;this.syncMat.Abs();hX=this.m_localCentroid.x+this.m_localOBB.center.x;hY=this.m_localCentroid.y+this.m_localOBB.center.y;var centerX=position1.x+(R1.col1.x*hX+R1.col2.x*hY);var centerY=position1.y+(R1.col1.y*hX+R1.col2.y*hY);hX=this.syncMat.col1.x*this.m_localOBB.extents.x+this.syncMat.col2.x*this.m_localOBB.extents.y;hY=this.syncMat.col1.y*this.m_localOBB.extents.x+this.syncMat.col2.y*this.m_localOBB.extents.y;this.syncAABB.minVertex.x=centerX-hX;this.syncAABB.minVertex.y=centerY-hY;this.syncAABB.maxVertex.x=centerX+hX;this.syncAABB.maxVertex.y=centerY+hY;v1=R2.col1;v2=R2.col2;v3=this.m_localOBB.R.col1;v4=this.m_localOBB.R.col2;this.syncMat.col1.x=v1.x*v3.x+v2.x*v3.y;this.syncMat.col1.y=v1.y*v3.x+v2.y*v3.y;this.syncMat.col2.x=v1.x*v4.x+v2.x*v4.y;this.syncMat.col2.y=v1.y*v4.x+v2.y*v4.y;this.syncMat.Abs();hX=this.m_localCentroid.x+this.m_localOBB.center.x;hY=this.m_localCentroid.y+this.m_localOBB.center.y;centerX=position2.x+(R2.col1.x*hX+R2.col2.x*hY);centerY=position2.y+(R2.col1.y*hX+R2.col2.y*hY);hX=this.syncMat.col1.x*this.m_localOBB.extents.x+this.syncMat.col2.x*this.m_localOBB.extents.y;hY=this.syncMat.col1.y*this.m_localOBB.extents.x+this.syncMat.col2.y*this.m_localOBB.extents.y;this.syncAABB.minVertex.x=Math.min(this.syncAABB.minVertex.x,centerX-hX);this.syncAABB.minVertex.y=Math.min(this.syncAABB.minVertex.y,centerY-hY);this.syncAABB.maxVertex.x=Math.max(this.syncAABB.maxVertex.x,centerX+hX);this.syncAABB.maxVertex.y=Math.max(this.syncAABB.maxVertex.y,centerY+hY);var broadPhase=this.m_body.m_world.m_broadPhase;if(broadPhase.InRange(this.syncAABB))
{broadPhase.MoveProxy(this.m_proxyId,this.syncAABB);}
else
{this.m_body.Freeze();}},QuickSync:function(position,R){this.m_R.SetM(R);this.m_position.x=position.x+(R.col1.x*this.m_localCentroid.x+R.col2.x*this.m_localCentroid.y);this.m_position.y=position.y+(R.col1.y*this.m_localCentroid.x+R.col2.y*this.m_localCentroid.y);},ResetProxy:function(broadPhase){if(this.m_proxyId==b2Pair.b2_nullProxy)
{return;}
var proxy=broadPhase.GetProxy(this.m_proxyId);broadPhase.DestroyProxy(this.m_proxyId);proxy=null;var R=b2Math.b2MulMM(this.m_R,this.m_localOBB.R);var absR=b2Math.b2AbsM(R);var h=b2Math.b2MulMV(absR,this.m_localOBB.extents);var position=b2Math.b2MulMV(this.m_R,this.m_localOBB.center);position.Add(this.m_position);var aabb=new b2AABB();aabb.minVertex.SetV(position);aabb.minVertex.Subtract(h);aabb.maxVertex.SetV(position);aabb.maxVertex.Add(h);if(broadPhase.InRange(aabb))
{this.m_proxyId=broadPhase.CreateProxy(aabb,this);}
else
{this.m_proxyId=b2Pair.b2_nullProxy;}
if(this.m_proxyId==b2Pair.b2_nullProxy)
{this.m_body.Freeze();}},Support:function(dX,dY,out)
{var dLocalX=(dX*this.m_R.col1.x+dY*this.m_R.col1.y);var dLocalY=(dX*this.m_R.col2.x+dY*this.m_R.col2.y);var bestIndex=0;var bestValue=(this.m_coreVertices[0].x*dLocalX+this.m_coreVertices[0].y*dLocalY);for(var i=1;i<this.m_vertexCount;++i)
{var value=(this.m_coreVertices[i].x*dLocalX+this.m_coreVertices[i].y*dLocalY);if(value>bestValue)
{bestIndex=i;bestValue=value;}}
out.Set(this.m_position.x+(this.m_R.col1.x*this.m_coreVertices[bestIndex].x+this.m_R.col2.x*this.m_coreVertices[bestIndex].y),this.m_position.y+(this.m_R.col1.y*this.m_coreVertices[bestIndex].x+this.m_R.col2.y*this.m_coreVertices[bestIndex].y));},m_localCentroid:new b2Vec2(),m_localOBB:new b2OBB(),m_vertices:null,m_coreVertices:null,m_vertexCount:0,m_normals:null});b2PolyShape.tempVec=new b2Vec2();b2PolyShape.tAbsR=new b2Mat22();
var b2Body=Class.create();b2Body.prototype={SetOriginPosition:function(position,rotation){if(this.IsFrozen())
{return;}
this.m_rotation=rotation;this.m_R.Set(this.m_rotation);this.m_position=b2Math.AddVV(position,b2Math.b2MulMV(this.m_R,this.m_center));this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.Synchronize(this.m_position,this.m_R,this.m_position,this.m_R);}
this.m_world.m_broadPhase.Commit();},GetOriginPosition:function(){return b2Math.SubtractVV(this.m_position,b2Math.b2MulMV(this.m_R,this.m_center));},SetCenterPosition:function(position,rotation){if(this.IsFrozen())
{return;}
this.m_rotation=rotation;this.m_R.Set(this.m_rotation);this.m_position.SetV(position);this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.Synchronize(this.m_position,this.m_R,this.m_position,this.m_R);}
this.m_world.m_broadPhase.Commit();},GetCenterPosition:function(){return this.m_position;},GetRotation:function(){return this.m_rotation;},GetRotationMatrix:function(){return this.m_R;},SetLinearVelocity:function(v){this.m_linearVelocity.SetV(v);},GetLinearVelocity:function(){return this.m_linearVelocity;},SetAngularVelocity:function(w){this.m_angularVelocity=w;},GetAngularVelocity:function(){return this.m_angularVelocity;},ApplyForce:function(force,point)
{if(this.IsSleeping()==false)
{this.m_force.Add(force);this.m_torque+=b2Math.b2CrossVV(b2Math.SubtractVV(point,this.m_position),force);}},ApplyTorque:function(torque)
{if(this.IsSleeping()==false)
{this.m_torque+=torque;}},ApplyImpulse:function(impulse,point)
{if(this.IsSleeping()==false)
{this.m_linearVelocity.Add(b2Math.MulFV(this.m_invMass,impulse));this.m_angularVelocity+=(this.m_invI*b2Math.b2CrossVV(b2Math.SubtractVV(point,this.m_position),impulse));}},GetMass:function(){return this.m_mass;},GetInertia:function(){return this.m_I;},GetWorldPoint:function(localPoint){return b2Math.AddVV(this.m_position,b2Math.b2MulMV(this.m_R,localPoint));},GetWorldVector:function(localVector){return b2Math.b2MulMV(this.m_R,localVector);},GetLocalPoint:function(worldPoint){return b2Math.b2MulTMV(this.m_R,b2Math.SubtractVV(worldPoint,this.m_position));},GetLocalVector:function(worldVector){return b2Math.b2MulTMV(this.m_R,worldVector);},IsStatic:function(){return(this.m_flags&b2Body.e_staticFlag)==b2Body.e_staticFlag;},IsFrozen:function()
{return(this.m_flags&b2Body.e_frozenFlag)==b2Body.e_frozenFlag;},IsSleeping:function(){return(this.m_flags&b2Body.e_sleepFlag)==b2Body.e_sleepFlag;},AllowSleeping:function(flag)
{if(flag)
{this.m_flags|=b2Body.e_allowSleepFlag;}
else
{this.m_flags&=~b2Body.e_allowSleepFlag;this.WakeUp();}},WakeUp:function(){this.m_flags&=~b2Body.e_sleepFlag;this.m_sleepTime=0.0;},GetShapeList:function(){return this.m_shapeList;},GetContactList:function()
{return this.m_contactList;},GetJointList:function()
{return this.m_jointList;},GetNext:function(){return this.m_next;},GetUserData:function(){return this.m_userData;},initialize:function(bd,world){this.sMat0=new b2Mat22();this.m_position=new b2Vec2();this.m_R=new b2Mat22(0);this.m_position0=new b2Vec2();var i=0;var sd;var massData;this.m_flags=0;this.m_position.SetV(bd.position);this.m_rotation=bd.rotation;this.m_R.Set(this.m_rotation);this.m_position0.SetV(this.m_position);this.m_rotation0=this.m_rotation;this.m_world=world;this.m_linearDamping=b2Math.b2Clamp(1.0-bd.linearDamping,0.0,1.0);this.m_angularDamping=b2Math.b2Clamp(1.0-bd.angularDamping,0.0,1.0);this.m_force=new b2Vec2(0.0,0.0);this.m_torque=0.0;this.m_mass=0.0;var massDatas=new Array(b2Settings.b2_maxShapesPerBody);for(i=0;i<b2Settings.b2_maxShapesPerBody;i++){massDatas[i]=new b2MassData();}
this.m_shapeCount=0;this.m_center=new b2Vec2(0.0,0.0);for(i=0;i<b2Settings.b2_maxShapesPerBody;++i)
{sd=bd.shapes[i];if(sd==null)break;massData=massDatas[i];sd.ComputeMass(massData);this.m_mass+=massData.mass;this.m_center.x+=massData.mass*(sd.localPosition.x+massData.center.x);this.m_center.y+=massData.mass*(sd.localPosition.y+massData.center.y);++this.m_shapeCount;}
if(this.m_mass>0.0)
{this.m_center.Multiply(1.0/this.m_mass);this.m_position.Add(b2Math.b2MulMV(this.m_R,this.m_center));}
else
{this.m_flags|=b2Body.e_staticFlag;}
this.m_I=0.0;for(i=0;i<this.m_shapeCount;++i)
{sd=bd.shapes[i];massData=massDatas[i];this.m_I+=massData.I;var r=b2Math.SubtractVV(b2Math.AddVV(sd.localPosition,massData.center),this.m_center);this.m_I+=massData.mass*b2Math.b2Dot(r,r);}
if(this.m_mass>0.0)
{this.m_invMass=1.0/this.m_mass;}
else
{this.m_invMass=0.0;}
if(this.m_I>0.0&&bd.preventRotation==false)
{this.m_invI=1.0/this.m_I;}
else
{this.m_I=0.0;this.m_invI=0.0;}
this.m_linearVelocity=b2Math.AddVV(bd.linearVelocity,b2Math.b2CrossFV(bd.angularVelocity,this.m_center));this.m_angularVelocity=bd.angularVelocity;this.m_jointList=null;this.m_contactList=null;this.m_prev=null;this.m_next=null;this.m_shapeList=null;for(i=0;i<this.m_shapeCount;++i)
{sd=bd.shapes[i];var shape=b2Shape.Create(sd,this,this.m_center);shape.m_next=this.m_shapeList;this.m_shapeList=shape;}
this.m_sleepTime=0.0;if(bd.allowSleep)
{this.m_flags|=b2Body.e_allowSleepFlag;}
if(bd.isSleeping)
{this.m_flags|=b2Body.e_sleepFlag;}
if((this.m_flags&b2Body.e_sleepFlag)||this.m_invMass==0.0)
{this.m_linearVelocity.Set(0.0,0.0);this.m_angularVelocity=0.0;}
this.m_userData=bd.userData;},Destroy:function(){var s=this.m_shapeList;while(s)
{var s0=s;s=s.m_next;b2Shape.Destroy(s0);}},sMat0:new b2Mat22(),SynchronizeShapes:function(){this.sMat0.Set(this.m_rotation0);for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.Synchronize(this.m_position0,this.sMat0,this.m_position,this.m_R);}},QuickSyncShapes:function(){for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.QuickSync(this.m_position,this.m_R);}},IsConnected:function(other){for(var jn=this.m_jointList;jn!=null;jn=jn.next)
{if(jn.other==other)
return jn.joint.m_collideConnected==false;}
return false;},Freeze:function(){this.m_flags|=b2Body.e_frozenFlag;this.m_linearVelocity.SetZero();this.m_angularVelocity=0.0;for(var s=this.m_shapeList;s!=null;s=s.m_next)
{s.DestroyProxy();}},m_flags:0,m_position:new b2Vec2(),m_rotation:null,m_R:new b2Mat22(0),m_position0:new b2Vec2(),m_rotation0:null,m_linearVelocity:null,m_angularVelocity:null,m_force:null,m_torque:null,m_center:null,m_world:null,m_prev:null,m_next:null,m_shapeList:null,m_shapeCount:0,m_jointList:null,m_contactList:null,m_mass:null,m_invMass:null,m_I:null,m_invI:null,m_linearDamping:null,m_angularDamping:null,m_sleepTime:null,m_userData:null};b2Body.e_staticFlag=0x0001;b2Body.e_frozenFlag=0x0002;b2Body.e_islandFlag=0x0004;b2Body.e_sleepFlag=0x0008;b2Body.e_allowSleepFlag=0x0010;b2Body.e_destroyFlag=0x0020;
var b2BodyDef=Class.create();b2BodyDef.prototype={initialize:function()
{this.shapes=new Array();this.userData=null;for(var i=0;i<b2Settings.b2_maxShapesPerBody;i++){this.shapes[i]=null;}
this.position=new b2Vec2(0.0,0.0);this.rotation=0.0;this.linearVelocity=new b2Vec2(0.0,0.0);this.angularVelocity=0.0;this.linearDamping=0.0;this.angularDamping=0.0;this.allowSleep=true;this.isSleeping=false;this.preventRotation=false;},userData:null,shapes:new Array(),position:null,rotation:null,linearVelocity:null,angularVelocity:null,linearDamping:null,angularDamping:null,allowSleep:null,isSleeping:null,preventRotation:null,AddShape:function(shape)
{for(var i=0;i<b2Settings.b2_maxShapesPerBody;++i)
{if(this.shapes[i]==null)
{this.shapes[i]=shape;break;}}}};
var b2CollisionFilter=Class.create();b2CollisionFilter.prototype={ShouldCollide:function(shape1,shape2){if(shape1.m_groupIndex==shape2.m_groupIndex&&shape1.m_groupIndex!=0)
{return shape1.m_groupIndex>0;}
var collide=(shape1.m_maskBits&shape2.m_categoryBits)!=0&&(shape1.m_categoryBits&shape2.m_maskBits)!=0;return collide;},initialize:function(){}};b2CollisionFilter.b2_defaultFilter=new b2CollisionFilter;
var b2Island=Class.create();b2Island.prototype={initialize:function(bodyCapacity,contactCapacity,jointCapacity,allocator)
{var i=0;this.m_bodyCapacity=bodyCapacity;this.m_contactCapacity=contactCapacity;this.m_jointCapacity=jointCapacity;this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;this.m_bodies=new Array(bodyCapacity);for(i=0;i<bodyCapacity;i++)
this.m_bodies[i]=null;this.m_contacts=new Array(contactCapacity);for(i=0;i<contactCapacity;i++)
this.m_contacts[i]=null;this.m_joints=new Array(jointCapacity);for(i=0;i<jointCapacity;i++)
this.m_joints[i]=null;this.m_allocator=allocator;},Clear:function()
{this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;},Solve:function(step,gravity)
{var i=0;var b;for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
continue;b.m_linearVelocity.Add(b2Math.MulFV(step.dt,b2Math.AddVV(gravity,b2Math.MulFV(b.m_invMass,b.m_force))));b.m_angularVelocity+=step.dt*b.m_invI*b.m_torque;b.m_linearVelocity.Multiply(b.m_linearDamping);b.m_angularVelocity*=b.m_angularDamping;b.m_position0.SetV(b.m_position);b.m_rotation0=b.m_rotation;}
var contactSolver=new b2ContactSolver(this.m_contacts,this.m_contactCount,this.m_allocator);contactSolver.PreSolve();for(i=0;i<this.m_jointCount;++i)
{this.m_joints[i].PrepareVelocitySolver();}
for(i=0;i<step.iterations;++i)
{contactSolver.SolveVelocityConstraints();for(var j=0;j<this.m_jointCount;++j)
{this.m_joints[j].SolveVelocityConstraints(step);}}
for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
continue;b.m_position.x+=step.dt*b.m_linearVelocity.x;b.m_position.y+=step.dt*b.m_linearVelocity.y;b.m_rotation+=step.dt*b.m_angularVelocity;b.m_R.Set(b.m_rotation);}
for(i=0;i<this.m_jointCount;++i)
{this.m_joints[i].PreparePositionSolver();}
if(b2World.s_enablePositionCorrection)
{for(b2Island.m_positionIterationCount=0;b2Island.m_positionIterationCount<step.iterations;++b2Island.m_positionIterationCount)
{var contactsOkay=contactSolver.SolvePositionConstraints(b2Settings.b2_contactBaumgarte);var jointsOkay=true;for(i=0;i<this.m_jointCount;++i)
{var jointOkay=this.m_joints[i].SolvePositionConstraints();jointsOkay=jointsOkay&&jointOkay;}
if(contactsOkay&&jointsOkay)
{break;}}}
contactSolver.PostSolve();for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
continue;b.m_R.Set(b.m_rotation);b.SynchronizeShapes();b.m_force.Set(0.0,0.0);b.m_torque=0.0;}},UpdateSleep:function(dt)
{var i=0;var b;var minSleepTime=Number.MAX_VALUE;var linTolSqr=b2Settings.b2_linearSleepTolerance*b2Settings.b2_linearSleepTolerance;var angTolSqr=b2Settings.b2_angularSleepTolerance*b2Settings.b2_angularSleepTolerance;for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];if(b.m_invMass==0.0)
{continue;}
if((b.m_flags&b2Body.e_allowSleepFlag)==0)
{b.m_sleepTime=0.0;minSleepTime=0.0;}
if((b.m_flags&b2Body.e_allowSleepFlag)==0||b.m_angularVelocity*b.m_angularVelocity>angTolSqr||b2Math.b2Dot(b.m_linearVelocity,b.m_linearVelocity)>linTolSqr)
{b.m_sleepTime=0.0;minSleepTime=0.0;}
else
{b.m_sleepTime+=dt;minSleepTime=b2Math.b2Min(minSleepTime,b.m_sleepTime);}}
if(minSleepTime>=b2Settings.b2_timeToSleep)
{for(i=0;i<this.m_bodyCount;++i)
{b=this.m_bodies[i];b.m_flags|=b2Body.e_sleepFlag;}}},AddBody:function(body)
{this.m_bodies[this.m_bodyCount++]=body;},AddContact:function(contact)
{this.m_contacts[this.m_contactCount++]=contact;},AddJoint:function(joint)
{this.m_joints[this.m_jointCount++]=joint;},m_allocator:null,m_bodies:null,m_contacts:null,m_joints:null,m_bodyCount:0,m_jointCount:0,m_contactCount:0,m_bodyCapacity:0,m_contactCapacity:0,m_jointCapacity:0,m_positionError:null};b2Island.m_positionIterationCount=0;
var b2TimeStep=Class.create();b2TimeStep.prototype={dt:null,inv_dt:null,iterations:0,initialize:function(){}};
var b2ContactNode=Class.create();b2ContactNode.prototype={other:null,contact:null,prev:null,next:null,initialize:function(){}};
var b2Contact=Class.create();b2Contact.prototype={GetManifolds:function(){return null},GetManifoldCount:function()
{return this.m_manifoldCount;},GetNext:function(){return this.m_next;},GetShape1:function(){return this.m_shape1;},GetShape2:function(){return this.m_shape2;},initialize:function(s1,s2)
{this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;},Evaluate:function(){},m_flags:0,m_prev:null,m_next:null,m_node1:new b2ContactNode(),m_node2:new b2ContactNode(),m_shape1:null,m_shape2:null,m_manifoldCount:0,m_friction:null,m_restitution:null};b2Contact.e_islandFlag=0x0001;b2Contact.e_destroyFlag=0x0002;b2Contact.AddType=function(createFcn,destroyFcn,type1,type2)
{b2Contact.s_registers[type1][type2].createFcn=createFcn;b2Contact.s_registers[type1][type2].destroyFcn=destroyFcn;b2Contact.s_registers[type1][type2].primary=true;if(type1!=type2)
{b2Contact.s_registers[type2][type1].createFcn=createFcn;b2Contact.s_registers[type2][type1].destroyFcn=destroyFcn;b2Contact.s_registers[type2][type1].primary=false;}};b2Contact.InitializeRegisters=function(){b2Contact.s_registers=new Array(b2Shape.e_shapeTypeCount);for(var i=0;i<b2Shape.e_shapeTypeCount;i++){b2Contact.s_registers[i]=new Array(b2Shape.e_shapeTypeCount);for(var j=0;j<b2Shape.e_shapeTypeCount;j++){b2Contact.s_registers[i][j]=new b2ContactRegister();}}
b2Contact.AddType(b2CircleContact.Create,b2CircleContact.Destroy,b2Shape.e_circleShape,b2Shape.e_circleShape);b2Contact.AddType(b2PolyAndCircleContact.Create,b2PolyAndCircleContact.Destroy,b2Shape.e_polyShape,b2Shape.e_circleShape);b2Contact.AddType(b2PolyContact.Create,b2PolyContact.Destroy,b2Shape.e_polyShape,b2Shape.e_polyShape);};b2Contact.Create=function(shape1,shape2,allocator){if(b2Contact.s_initialized==false)
{b2Contact.InitializeRegisters();b2Contact.s_initialized=true;}
var type1=shape1.m_type;var type2=shape2.m_type;var createFcn=b2Contact.s_registers[type1][type2].createFcn;if(createFcn)
{if(b2Contact.s_registers[type1][type2].primary)
{return createFcn(shape1,shape2,allocator);}
else
{var c=createFcn(shape2,shape1,allocator);for(var i=0;i<c.GetManifoldCount();++i)
{var m=c.GetManifolds()[i];m.normal=m.normal.Negative();}
return c;}}
else
{return null;}};b2Contact.Destroy=function(contact,allocator){if(contact.GetManifoldCount()>0)
{contact.m_shape1.m_body.WakeUp();contact.m_shape2.m_body.WakeUp();}
var type1=contact.m_shape1.m_type;var type2=contact.m_shape2.m_type;var destroyFcn=b2Contact.s_registers[type1][type2].destroyFcn;destroyFcn(contact,allocator);};b2Contact.s_registers=null;b2Contact.s_initialized=false;
var b2ContactConstraint=Class.create();b2ContactConstraint.prototype={initialize:function(){this.normal=new b2Vec2();this.points=new Array(b2Settings.b2_maxManifoldPoints);for(var i=0;i<b2Settings.b2_maxManifoldPoints;i++){this.points[i]=new b2ContactConstraintPoint();}},points:null,normal:new b2Vec2(),manifold:null,body1:null,body2:null,friction:null,restitution:null,pointCount:0};
var b2ContactConstraintPoint=Class.create();b2ContactConstraintPoint.prototype={localAnchor1:new b2Vec2(),localAnchor2:new b2Vec2(),normalImpulse:null,tangentImpulse:null,positionImpulse:null,normalMass:null,tangentMass:null,separation:null,velocityBias:null,initialize:function(){this.localAnchor1=new b2Vec2();this.localAnchor2=new b2Vec2();}};
var b2ContactRegister=Class.create();b2ContactRegister.prototype={createFcn:null,destroyFcn:null,primary:null,initialize:function(){}};
var b2ContactSolver=Class.create();b2ContactSolver.prototype={initialize:function(contacts,contactCount,allocator){this.m_constraints=new Array();this.m_allocator=allocator;var i=0;var tVec;var tMat;this.m_constraintCount=0;for(i=0;i<contactCount;++i)
{this.m_constraintCount+=contacts[i].GetManifoldCount();}
for(i=0;i<this.m_constraintCount;i++){this.m_constraints[i]=new b2ContactConstraint();}
var count=0;for(i=0;i<contactCount;++i)
{var contact=contacts[i];var b1=contact.m_shape1.m_body;var b2=contact.m_shape2.m_body;var manifoldCount=contact.GetManifoldCount();var manifolds=contact.GetManifolds();var friction=contact.m_friction;var restitution=contact.m_restitution;var v1X=b1.m_linearVelocity.x;var v1Y=b1.m_linearVelocity.y;var v2X=b2.m_linearVelocity.x;var v2Y=b2.m_linearVelocity.y;var w1=b1.m_angularVelocity;var w2=b2.m_angularVelocity;for(var j=0;j<manifoldCount;++j)
{var manifold=manifolds[j];var normalX=manifold.normal.x;var normalY=manifold.normal.y;var c=this.m_constraints[count];c.body1=b1;c.body2=b2;c.manifold=manifold;c.normal.x=normalX;c.normal.y=normalY;c.pointCount=manifold.pointCount;c.friction=friction;c.restitution=restitution;for(var k=0;k<c.pointCount;++k)
{var cp=manifold.points[k];var ccp=c.points[k];ccp.normalImpulse=cp.normalImpulse;ccp.tangentImpulse=cp.tangentImpulse;ccp.separation=cp.separation;var r1X=cp.position.x-b1.m_position.x;var r1Y=cp.position.y-b1.m_position.y;var r2X=cp.position.x-b2.m_position.x;var r2Y=cp.position.y-b2.m_position.y;tVec=ccp.localAnchor1;tMat=b1.m_R;tVec.x=r1X*tMat.col1.x+r1Y*tMat.col1.y;tVec.y=r1X*tMat.col2.x+r1Y*tMat.col2.y;tVec=ccp.localAnchor2;tMat=b2.m_R;tVec.x=r2X*tMat.col1.x+r2Y*tMat.col1.y;tVec.y=r2X*tMat.col2.x+r2Y*tMat.col2.y;var r1Sqr=r1X*r1X+r1Y*r1Y;var r2Sqr=r2X*r2X+r2Y*r2Y;var rn1=r1X*normalX+r1Y*normalY;var rn2=r2X*normalX+r2Y*normalY;var kNormal=b1.m_invMass+b2.m_invMass;kNormal+=b1.m_invI*(r1Sqr-rn1*rn1)+b2.m_invI*(r2Sqr-rn2*rn2);ccp.normalMass=1.0/kNormal;var tangentX=normalY
var tangentY=-normalX;var rt1=r1X*tangentX+r1Y*tangentY;var rt2=r2X*tangentX+r2Y*tangentY;var kTangent=b1.m_invMass+b2.m_invMass;kTangent+=b1.m_invI*(r1Sqr-rt1*rt1)+b2.m_invI*(r2Sqr-rt2*rt2);ccp.tangentMass=1.0/kTangent;ccp.velocityBias=0.0;if(ccp.separation>0.0)
{ccp.velocityBias=-60.0*ccp.separation;}
var tX=v2X+(-w2*r2Y)-v1X-(-w1*r1Y);var tY=v2Y+(w2*r2X)-v1Y-(w1*r1X);var vRel=c.normal.x*tX+c.normal.y*tY;if(vRel<-b2Settings.b2_velocityThreshold)
{ccp.velocityBias+=-c.restitution*vRel;}}
++count;}}},PreSolve:function(){var tVec;var tVec2;var tMat;for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var j=0;var tCount=0;if(b2World.s_enableWarmStarting)
{tCount=c.pointCount;for(j=0;j<tCount;++j)
{var ccp=c.points[j];var PX=ccp.normalImpulse*normalX+ccp.tangentImpulse*tangentX;var PY=ccp.normalImpulse*normalY+ccp.tangentImpulse*tangentY;tMat=b1.m_R;tVec=ccp.localAnchor1;var r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;var r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b2.m_R;tVec=ccp.localAnchor2;var r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;var r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;b1.m_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b1.m_linearVelocity.x-=invMass1*PX;b1.m_linearVelocity.y-=invMass1*PY;b2.m_angularVelocity+=invI2*(r2X*PY-r2Y*PX);b2.m_linearVelocity.x+=invMass2*PX;b2.m_linearVelocity.y+=invMass2*PY;ccp.positionImpulse=0.0;}}
else{tCount=c.pointCount;for(j=0;j<tCount;++j)
{var ccp2=c.points[j];ccp2.normalImpulse=0.0;ccp2.tangentImpulse=0.0;ccp2.positionImpulse=0.0;}}}},SolveVelocityConstraints:function(){var j=0;var ccp;var r1X;var r1Y;var r2X;var r2Y;var dvX;var dvY;var lambda;var newImpulse;var PX;var PY;var tMat;var tVec;for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var b1_angularVelocity=b1.m_angularVelocity;var b1_linearVelocity=b1.m_linearVelocity;var b2_angularVelocity=b2.m_angularVelocity;var b2_linearVelocity=b2.m_linearVelocity;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var tCount=c.pointCount;for(j=0;j<tCount;++j)
{ccp=c.points[j];tMat=b1.m_R;tVec=ccp.localAnchor1;r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
tMat=b2.m_R;tVec=ccp.localAnchor2;r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
dvX=b2_linearVelocity.x+(-b2_angularVelocity*r2Y)-b1_linearVelocity.x-(-b1_angularVelocity*r1Y);dvY=b2_linearVelocity.y+(b2_angularVelocity*r2X)-b1_linearVelocity.y-(b1_angularVelocity*r1X);var vn=dvX*normalX+dvY*normalY;lambda=-ccp.normalMass*(vn-ccp.velocityBias);newImpulse=b2Math.b2Max(ccp.normalImpulse+lambda,0.0);lambda=newImpulse-ccp.normalImpulse;PX=lambda*normalX;PY=lambda*normalY;b1_linearVelocity.x-=invMass1*PX;b1_linearVelocity.y-=invMass1*PY;b1_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b2_linearVelocity.x+=invMass2*PX;b2_linearVelocity.y+=invMass2*PY;b2_angularVelocity+=invI2*(r2X*PY-r2Y*PX);ccp.normalImpulse=newImpulse;dvX=b2_linearVelocity.x+(-b2_angularVelocity*r2Y)-b1_linearVelocity.x-(-b1_angularVelocity*r1Y);dvY=b2_linearVelocity.y+(b2_angularVelocity*r2X)-b1_linearVelocity.y-(b1_angularVelocity*r1X);var vt=dvX*tangentX+dvY*tangentY;lambda=ccp.tangentMass*(-vt);var maxFriction=c.friction*ccp.normalImpulse;newImpulse=b2Math.b2Clamp(ccp.tangentImpulse+lambda,-maxFriction,maxFriction);lambda=newImpulse-ccp.tangentImpulse;PX=lambda*tangentX;PY=lambda*tangentY;b1_linearVelocity.x-=invMass1*PX;b1_linearVelocity.y-=invMass1*PY;b1_angularVelocity-=invI1*(r1X*PY-r1Y*PX);b2_linearVelocity.x+=invMass2*PX;b2_linearVelocity.y+=invMass2*PY;b2_angularVelocity+=invI2*(r2X*PY-r2Y*PX);ccp.tangentImpulse=newImpulse;}
b1.m_angularVelocity=b1_angularVelocity;b2.m_angularVelocity=b2_angularVelocity;}},SolvePositionConstraints:function(beta){var minSeparation=0.0;var tMat;var tVec;for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var b1=c.body1;var b2=c.body2;var b1_position=b1.m_position;var b1_rotation=b1.m_rotation;var b2_position=b2.m_position;var b2_rotation=b2.m_rotation;var invMass1=b1.m_invMass;var invI1=b1.m_invI;var invMass2=b2.m_invMass;var invI2=b2.m_invI;var normalX=c.normal.x;var normalY=c.normal.y;var tangentX=normalY;var tangentY=-normalX;var tCount=c.pointCount;for(var j=0;j<tCount;++j)
{var ccp=c.points[j];tMat=b1.m_R;tVec=ccp.localAnchor1;var r1X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
var r1Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
tMat=b2.m_R;tVec=ccp.localAnchor2;var r2X=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y
var r2Y=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y
var p1X=b1_position.x+r1X;var p1Y=b1_position.y+r1Y;var p2X=b2_position.x+r2X;var p2Y=b2_position.y+r2Y;var dpX=p2X-p1X;var dpY=p2Y-p1Y;var separation=(dpX*normalX+dpY*normalY)+ccp.separation;minSeparation=b2Math.b2Min(minSeparation,separation);var C=beta*b2Math.b2Clamp(separation+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);var dImpulse=-ccp.normalMass*C;var impulse0=ccp.positionImpulse;ccp.positionImpulse=b2Math.b2Max(impulse0+dImpulse,0.0);dImpulse=ccp.positionImpulse-impulse0;var impulseX=dImpulse*normalX;var impulseY=dImpulse*normalY;b1_position.x-=invMass1*impulseX;b1_position.y-=invMass1*impulseY;b1_rotation-=invI1*(r1X*impulseY-r1Y*impulseX);b1.m_R.Set(b1_rotation);b2_position.x+=invMass2*impulseX;b2_position.y+=invMass2*impulseY;b2_rotation+=invI2*(r2X*impulseY-r2Y*impulseX);b2.m_R.Set(b2_rotation);}
b1.m_rotation=b1_rotation;b2.m_rotation=b2_rotation;}
return minSeparation>=-b2Settings.b2_linearSlop;},PostSolve:function(){for(var i=0;i<this.m_constraintCount;++i)
{var c=this.m_constraints[i];var m=c.manifold;for(var j=0;j<c.pointCount;++j)
{var mPoint=m.points[j];var cPoint=c.points[j];mPoint.normalImpulse=cPoint.normalImpulse;mPoint.tangentImpulse=cPoint.tangentImpulse;}}},m_allocator:null,m_constraints:new Array(),m_constraintCount:0};
var b2CircleContact=Class.create();Object.extend(b2CircleContact.prototype,b2Contact.prototype);Object.extend(b2CircleContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m_manifold=[new b2Manifold()];this.m_manifold[0].pointCount=0;this.m_manifold[0].points[0].normalImpulse=0.0;this.m_manifold[0].points[0].tangentImpulse=0.0;},Evaluate:function(){b2Collision.b2CollideCircle(this.m_manifold[0],this.m_shape1,this.m_shape2,false);if(this.m_manifold[0].pointCount>0)
{this.m_manifoldCount=1;}
else
{this.m_manifoldCount=0;}},GetManifolds:function()
{return this.m_manifold;},m_manifold:[new b2Manifold()]});b2CircleContact.Create=function(shape1,shape2,allocator){return new b2CircleContact(shape1,shape2);};b2CircleContact.Destroy=function(contact,allocator){};
var b2Conservative=Class.create();b2Conservative.prototype={initialize:function(){}}
b2Conservative.R1=new b2Mat22();b2Conservative.R2=new b2Mat22();b2Conservative.x1=new b2Vec2();b2Conservative.x2=new b2Vec2();b2Conservative.Conservative=function(shape1,shape2){var body1=shape1.GetBody();var body2=shape2.GetBody();var v1X=body1.m_position.x-body1.m_position0.x;var v1Y=body1.m_position.y-body1.m_position0.y;var omega1=body1.m_rotation-body1.m_rotation0;var v2X=body2.m_position.x-body2.m_position0.x;var v2Y=body2.m_position.y-body2.m_position0.y;var omega2=body2.m_rotation-body2.m_rotation0;var r1=shape1.GetMaxRadius();var r2=shape2.GetMaxRadius();var p1StartX=body1.m_position0.x;var p1StartY=body1.m_position0.y;var a1Start=body1.m_rotation0;var p2StartX=body2.m_position0.x;var p2StartY=body2.m_position0.y;var a2Start=body2.m_rotation0;var p1X=p1StartX;var p1Y=p1StartY;var a1=a1Start;var p2X=p2StartX;var p2Y=p2StartY;var a2=a2Start;b2Conservative.R1.Set(a1);b2Conservative.R2.Set(a2);shape1.QuickSync(p1,b2Conservative.R1);shape2.QuickSync(p2,b2Conservative.R2);var s1=0.0;var maxIterations=10;var dX;var dY;var invRelativeVelocity=0.0;var hit=true;for(var iter=0;iter<maxIterations;++iter)
{var distance=b2Distance.Distance(b2Conservative.x1,b2Conservative.x2,shape1,shape2);if(distance<b2Settings.b2_linearSlop)
{if(iter==0)
{hit=false;}
else
{hit=true;}
break;}
if(iter==0)
{dX=b2Conservative.x2.x-b2Conservative.x1.x;dY=b2Conservative.x2.y-b2Conservative.x1.y;var dLen=Math.sqrt(dX*dX+dY*dY);var relativeVelocity=(dX*(v1X-v2X)+dY*(v1Y-v2Y))+Math.abs(omega1)*r1+Math.abs(omega2)*r2;if(Math.abs(relativeVelocity)<Number.MIN_VALUE)
{hit=false;break;}
invRelativeVelocity=1.0/relativeVelocity;}
var ds=distance*invRelativeVelocity;var s2=s1+ds;if(s2<0.0||1.0<s2)
{hit=false;break;}
if(s2<(1.0+100.0*Number.MIN_VALUE)*s1)
{hit=true;break;}
s1=s2;p1X=p1StartX+s1*v1.x;p1Y=p1StartY+s1*v1.y;a1=a1Start+s1*omega1;p2X=p2StartX+s1*v2.x;p2Y=p2StartY+s1*v2.y;a2=a2Start+s1*omega2;b2Conservative.R1.Set(a1);b2Conservative.R2.Set(a2);shape1.QuickSync(p1,b2Conservative.R1);shape2.QuickSync(p2,b2Conservative.R2);}
if(hit)
{dX=b2Conservative.x2.x-b2Conservative.x1.x;dY=b2Conservative.x2.y-b2Conservative.x1.y;var length=Math.sqrt(dX*dX+dY*dY);if(length>FLT_EPSILON)
{d*=b2_linearSlop/length;}
if(body1.IsStatic())
{body1.m_position.x=p1X;body1.m_position.y=p1Y;}
else
{body1.m_position.x=p1X-dX;body1.m_position.y=p1Y-dY;}
body1.m_rotation=a1;body1.m_R.Set(a1);body1.QuickSyncShapes();if(body2.IsStatic())
{body2.m_position.x=p2X;body2.m_position.y=p2Y;}
else
{body2.m_position.x=p2X+dX;body2.m_position.y=p2Y+dY;}
body2.m_position.x=p2X+dX;body2.m_position.y=p2Y+dY;body2.m_rotation=a2;body2.m_R.Set(a2);body2.QuickSyncShapes();return true;}
shape1.QuickSync(body1.m_position,body1.m_R);shape2.QuickSync(body2.m_position,body2.m_R);return false;};
var b2NullContact=Class.create();Object.extend(b2NullContact.prototype,b2Contact.prototype);Object.extend(b2NullContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;},Evaluate:function(){},GetManifolds:function(){return null;}});
var b2PolyAndCircleContact=Class.create();Object.extend(b2PolyAndCircleContact.prototype,b2Contact.prototype);Object.extend(b2PolyAndCircleContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m_manifold=[new b2Manifold()];b2Settings.b2Assert(this.m_shape1.m_type==b2Shape.e_polyShape);b2Settings.b2Assert(this.m_shape2.m_type==b2Shape.e_circleShape);this.m_manifold[0].pointCount=0;this.m_manifold[0].points[0].normalImpulse=0.0;this.m_manifold[0].points[0].tangentImpulse=0.0;},Evaluate:function(){b2Collision.b2CollidePolyAndCircle(this.m_manifold[0],this.m_shape1,this.m_shape2,false);if(this.m_manifold[0].pointCount>0)
{this.m_manifoldCount=1;}
else
{this.m_manifoldCount=0;}},GetManifolds:function()
{return this.m_manifold;},m_manifold:[new b2Manifold()]})
b2PolyAndCircleContact.Create=function(shape1,shape2,allocator){return new b2PolyAndCircleContact(shape1,shape2);};b2PolyAndCircleContact.Destroy=function(contact,allocator){};
var b2PolyContact=Class.create();Object.extend(b2PolyContact.prototype,b2Contact.prototype);Object.extend(b2PolyContact.prototype,{initialize:function(s1,s2){this.m_node1=new b2ContactNode();this.m_node2=new b2ContactNode();this.m_flags=0;if(!s1||!s2){this.m_shape1=null;this.m_shape2=null;return;}
this.m_shape1=s1;this.m_shape2=s2;this.m_manifoldCount=0;this.m_friction=Math.sqrt(this.m_shape1.m_friction*this.m_shape2.m_friction);this.m_restitution=b2Math.b2Max(this.m_shape1.m_restitution,this.m_shape2.m_restitution);this.m_prev=null;this.m_next=null;this.m_node1.contact=null;this.m_node1.prev=null;this.m_node1.next=null;this.m_node1.other=null;this.m_node2.contact=null;this.m_node2.prev=null;this.m_node2.next=null;this.m_node2.other=null;this.m0=new b2Manifold();this.m_manifold=[new b2Manifold()];this.m_manifold[0].pointCount=0;},m0:new b2Manifold(),Evaluate:function(){var tMani=this.m_manifold[0];var tPoints=this.m0.points;for(var k=0;k<tMani.pointCount;k++){var tPoint=tPoints[k];var tPoint0=tMani.points[k];tPoint.normalImpulse=tPoint0.normalImpulse;tPoint.tangentImpulse=tPoint0.tangentImpulse;tPoint.id=tPoint0.id.Copy();}
this.m0.pointCount=tMani.pointCount;b2Collision.b2CollidePoly(tMani,this.m_shape1,this.m_shape2,false);if(tMani.pointCount>0)
{var match=[false,false];for(var i=0;i<tMani.pointCount;++i)
{var cp=tMani.points[i];cp.normalImpulse=0.0;cp.tangentImpulse=0.0;var idKey=cp.id.key;for(var j=0;j<this.m0.pointCount;++j)
{if(match[j]==true)
continue;var cp0=this.m0.points[j];var id0=cp0.id;if(id0.key==idKey)
{match[j]=true;cp.normalImpulse=cp0.normalImpulse;cp.tangentImpulse=cp0.tangentImpulse;break;}}}
this.m_manifoldCount=1;}
else
{this.m_manifoldCount=0;}},GetManifolds:function()
{return this.m_manifold;},m_manifold:[new b2Manifold()]});b2PolyContact.Create=function(shape1,shape2,allocator){return new b2PolyContact(shape1,shape2);};b2PolyContact.Destroy=function(contact,allocator){};
var b2ContactManager=Class.create();Object.extend(b2ContactManager.prototype,b2PairCallback.prototype);Object.extend(b2ContactManager.prototype,{initialize:function(){this.m_nullContact=new b2NullContact();this.m_world=null;this.m_destroyImmediate=false;},PairAdded:function(proxyUserData1,proxyUserData2){var shape1=proxyUserData1;var shape2=proxyUserData2;var body1=shape1.m_body;var body2=shape2.m_body;if(body1.IsStatic()&&body2.IsStatic())
{return this.m_nullContact;}
if(shape1.m_body==shape2.m_body)
{return this.m_nullContact;}
if(body2.IsConnected(body1))
{return this.m_nullContact;}
if(this.m_world.m_filter!=null&&this.m_world.m_filter.ShouldCollide(shape1,shape2)==false)
{return this.m_nullContact;}
if(body2.m_invMass==0.0)
{var tempShape=shape1;shape1=shape2;shape2=tempShape;var tempBody=body1;body1=body2;body2=tempBody;}
var contact=b2Contact.Create(shape1,shape2,this.m_world.m_blockAllocator);if(contact==null)
{return this.m_nullContact;}
else
{contact.m_prev=null;contact.m_next=this.m_world.m_contactList;if(this.m_world.m_contactList!=null)
{this.m_world.m_contactList.m_prev=contact;}
this.m_world.m_contactList=contact;this.m_world.m_contactCount++;}
return contact;},PairRemoved:function(proxyUserData1,proxyUserData2,pairUserData){if(pairUserData==null)
{return;}
var c=pairUserData;if(c!=this.m_nullContact)
{if(this.m_destroyImmediate==true)
{this.DestroyContact(c);c=null;}
else
{c.m_flags|=b2Contact.e_destroyFlag;}}},DestroyContact:function(c)
{if(c.m_prev)
{c.m_prev.m_next=c.m_next;}
if(c.m_next)
{c.m_next.m_prev=c.m_prev;}
if(c==this.m_world.m_contactList)
{this.m_world.m_contactList=c.m_next;}
if(c.GetManifoldCount()>0)
{var body1=c.m_shape1.m_body;var body2=c.m_shape2.m_body;var node1=c.m_node1;var node2=c.m_node2;body1.WakeUp();body2.WakeUp();if(node1.prev)
{node1.prev.next=node1.next;}
if(node1.next)
{node1.next.prev=node1.prev;}
if(node1==body1.m_contactList)
{body1.m_contactList=node1.next;}
node1.prev=null;node1.next=null;if(node2.prev)
{node2.prev.next=node2.next;}
if(node2.next)
{node2.next.prev=node2.prev;}
if(node2==body2.m_contactList)
{body2.m_contactList=node2.next;}
node2.prev=null;node2.next=null;}
b2Contact.Destroy(c,this.m_world.m_blockAllocator);--this.m_world.m_contactCount;},CleanContactList:function()
{var c=this.m_world.m_contactList;while(c!=null)
{var c0=c;c=c.m_next;if(c0.m_flags&b2Contact.e_destroyFlag)
{this.DestroyContact(c0);c0=null;}}},Collide:function()
{var body1;var body2;var node1;var node2;for(var c=this.m_world.m_contactList;c!=null;c=c.m_next)
{if(c.m_shape1.m_body.IsSleeping()&&c.m_shape2.m_body.IsSleeping())
{continue;}
var oldCount=c.GetManifoldCount();c.Evaluate();var newCount=c.GetManifoldCount();if(oldCount==0&&newCount>0)
{body1=c.m_shape1.m_body;body2=c.m_shape2.m_body;node1=c.m_node1;node2=c.m_node2;node1.contact=c;node1.other=body2;node1.prev=null;node1.next=body1.m_contactList;if(node1.next!=null)
{node1.next.prev=c.m_node1;}
body1.m_contactList=c.m_node1;node2.contact=c;node2.other=body1;node2.prev=null;node2.next=body2.m_contactList;if(node2.next!=null)
{node2.next.prev=node2;}
body2.m_contactList=node2;}
else if(oldCount>0&&newCount==0)
{body1=c.m_shape1.m_body;body2=c.m_shape2.m_body;node1=c.m_node1;node2=c.m_node2;if(node1.prev)
{node1.prev.next=node1.next;}
if(node1.next)
{node1.next.prev=node1.prev;}
if(node1==body1.m_contactList)
{body1.m_contactList=node1.next;}
node1.prev=null;node1.next=null;if(node2.prev)
{node2.prev.next=node2.next;}
if(node2.next)
{node2.next.prev=node2.prev;}
if(node2==body2.m_contactList)
{body2.m_contactList=node2.next;}
node2.prev=null;node2.next=null;}}},m_world:null,m_nullContact:new b2NullContact(),m_destroyImmediate:null});
var b2World=Class.create();b2World.prototype={initialize:function(worldAABB,gravity,doSleep){this.step=new b2TimeStep();this.m_contactManager=new b2ContactManager();this.m_listener=null;this.m_filter=b2CollisionFilter.b2_defaultFilter;this.m_bodyList=null;this.m_contactList=null;this.m_jointList=null;this.m_bodyCount=0;this.m_contactCount=0;this.m_jointCount=0;this.m_bodyDestroyList=null;this.m_allowSleep=doSleep;this.m_gravity=gravity;this.m_contactManager.m_world=this;this.m_broadPhase=new b2BroadPhase(worldAABB,this.m_contactManager);var bd=new b2BodyDef();this.m_groundBody=this.CreateBody(bd);},SetListener:function(listener){this.m_listener=listener;},SetFilter:function(filter){this.m_filter=filter;},CreateBody:function(def){var b=new b2Body(def,this);b.m_prev=null;b.m_next=this.m_bodyList;if(this.m_bodyList)
{this.m_bodyList.m_prev=b;}
this.m_bodyList=b;++this.m_bodyCount;return b;},DestroyBody:function(b)
{if(b.m_flags&b2Body.e_destroyFlag)
{return;}
if(b.m_prev)
{b.m_prev.m_next=b.m_next;}
if(b.m_next)
{b.m_next.m_prev=b.m_prev;}
if(b==this.m_bodyList)
{this.m_bodyList=b.m_next;}
b.m_flags|=b2Body.e_destroyFlag;--this.m_bodyCount;b.m_prev=null;b.m_next=this.m_bodyDestroyList;this.m_bodyDestroyList=b;},CleanBodyList:function()
{this.m_contactManager.m_destroyImmediate=true;var b=this.m_bodyDestroyList;while(b)
{var b0=b;b=b.m_next;var jn=b0.m_jointList;while(jn)
{var jn0=jn;jn=jn.next;if(this.m_listener)
{this.m_listener.NotifyJointDestroyed(jn0.joint);}
this.DestroyJoint(jn0.joint);}
b0.Destroy();}
this.m_bodyDestroyList=null;this.m_contactManager.m_destroyImmediate=false;},CreateJoint:function(def){var j=b2Joint.Create(def,this.m_blockAllocator);j.m_prev=null;j.m_next=this.m_jointList;if(this.m_jointList)
{this.m_jointList.m_prev=j;}
this.m_jointList=j;++this.m_jointCount;j.m_node1.joint=j;j.m_node1.other=j.m_body2;j.m_node1.prev=null;j.m_node1.next=j.m_body1.m_jointList;if(j.m_body1.m_jointList)j.m_body1.m_jointList.prev=j.m_node1;j.m_body1.m_jointList=j.m_node1;j.m_node2.joint=j;j.m_node2.other=j.m_body1;j.m_node2.prev=null;j.m_node2.next=j.m_body2.m_jointList;if(j.m_body2.m_jointList)j.m_body2.m_jointList.prev=j.m_node2;j.m_body2.m_jointList=j.m_node2;if(def.collideConnected==false)
{var b=def.body1.m_shapeCount<def.body2.m_shapeCount?def.body1:def.body2;for(var s=b.m_shapeList;s;s=s.m_next)
{s.ResetProxy(this.m_broadPhase);}}
return j;},DestroyJoint:function(j)
{var collideConnected=j.m_collideConnected;if(j.m_prev)
{j.m_prev.m_next=j.m_next;}
if(j.m_next)
{j.m_next.m_prev=j.m_prev;}
if(j==this.m_jointList)
{this.m_jointList=j.m_next;}
var body1=j.m_body1;var body2=j.m_body2;body1.WakeUp();body2.WakeUp();if(j.m_node1.prev)
{j.m_node1.prev.next=j.m_node1.next;}
if(j.m_node1.next)
{j.m_node1.next.prev=j.m_node1.prev;}
if(j.m_node1==body1.m_jointList)
{body1.m_jointList=j.m_node1.next;}
j.m_node1.prev=null;j.m_node1.next=null;if(j.m_node2.prev)
{j.m_node2.prev.next=j.m_node2.next;}
if(j.m_node2.next)
{j.m_node2.next.prev=j.m_node2.prev;}
if(j.m_node2==body2.m_jointList)
{body2.m_jointList=j.m_node2.next;}
j.m_node2.prev=null;j.m_node2.next=null;b2Joint.Destroy(j,this.m_blockAllocator);--this.m_jointCount;if(collideConnected==false)
{var b=body1.m_shapeCount<body2.m_shapeCount?body1:body2;for(var s=b.m_shapeList;s;s=s.m_next)
{s.ResetProxy(this.m_broadPhase);}}},GetGroundBody:function(){return this.m_groundBody;},step:new b2TimeStep(),Step:function(dt,iterations){var b;var other;this.step.dt=dt;this.step.iterations=iterations;if(dt>0.0)
{this.step.inv_dt=1.0/dt;}
else
{this.step.inv_dt=0.0;}
this.m_positionIterationCount=0;this.m_contactManager.CleanContactList();this.CleanBodyList();this.m_contactManager.Collide();var island=new b2Island(this.m_bodyCount,this.m_contactCount,this.m_jointCount,this.m_stackAllocator);for(b=this.m_bodyList;b!=null;b=b.m_next)
{b.m_flags&=~b2Body.e_islandFlag;}
for(var c=this.m_contactList;c!=null;c=c.m_next)
{c.m_flags&=~b2Contact.e_islandFlag;}
for(var j=this.m_jointList;j!=null;j=j.m_next)
{j.m_islandFlag=false;}
var stackSize=this.m_bodyCount;var stack=new Array(this.m_bodyCount);for(var k=0;k<this.m_bodyCount;k++)
stack[k]=null;for(var seed=this.m_bodyList;seed!=null;seed=seed.m_next)
{if(seed.m_flags&(b2Body.e_staticFlag|b2Body.e_islandFlag|b2Body.e_sleepFlag|b2Body.e_frozenFlag))
{continue;}
island.Clear();var stackCount=0;stack[stackCount++]=seed;seed.m_flags|=b2Body.e_islandFlag;;while(stackCount>0)
{b=stack[--stackCount];island.AddBody(b);b.m_flags&=~b2Body.e_sleepFlag;if(b.m_flags&b2Body.e_staticFlag)
{continue;}
for(var cn=b.m_contactList;cn!=null;cn=cn.next)
{if(cn.contact.m_flags&b2Contact.e_islandFlag)
{continue;}
island.AddContact(cn.contact);cn.contact.m_flags|=b2Contact.e_islandFlag;other=cn.other;if(other.m_flags&b2Body.e_islandFlag)
{continue;}
stack[stackCount++]=other;other.m_flags|=b2Body.e_islandFlag;}
for(var jn=b.m_jointList;jn!=null;jn=jn.next)
{if(jn.joint.m_islandFlag==true)
{continue;}
island.AddJoint(jn.joint);jn.joint.m_islandFlag=true;other=jn.other;if(other.m_flags&b2Body.e_islandFlag)
{continue;}
stack[stackCount++]=other;other.m_flags|=b2Body.e_islandFlag;}}
island.Solve(this.step,this.m_gravity);this.m_positionIterationCount=b2Math.b2Max(this.m_positionIterationCount,b2Island.m_positionIterationCount);if(this.m_allowSleep)
{island.UpdateSleep(dt);}
for(var i=0;i<island.m_bodyCount;++i)
{b=island.m_bodies[i];if(b.m_flags&b2Body.e_staticFlag)
{b.m_flags&=~b2Body.e_islandFlag;}
if(b.IsFrozen()&&this.m_listener)
{var response=this.m_listener.NotifyBoundaryViolated(b);if(response==b2WorldListener.b2_destroyBody)
{this.DestroyBody(b);b=null;island.m_bodies[i]=null;}}}}
this.m_broadPhase.Commit();},Query:function(aabb,shapes,maxCount){var results=new Array();var count=this.m_broadPhase.QueryAABB(aabb,results,maxCount);for(var i=0;i<count;++i)
{shapes[i]=results[i];}
return count;},GetBodyList:function(){return this.m_bodyList;},GetJointList:function(){return this.m_jointList;},GetContactList:function(){return this.m_contactList;},m_blockAllocator:null,m_stackAllocator:null,m_broadPhase:null,m_contactManager:new b2ContactManager(),m_bodyList:null,m_contactList:null,m_jointList:null,m_bodyCount:0,m_contactCount:0,m_jointCount:0,m_bodyDestroyList:null,m_gravity:null,m_allowSleep:null,m_groundBody:null,m_listener:null,m_filter:null,m_positionIterationCount:0};b2World.s_enablePositionCorrection=1;b2World.s_enableWarmStarting=1;
var b2WorldListener=Class.create();b2WorldListener.prototype={NotifyJointDestroyed:function(joint){},NotifyBoundaryViolated:function(body)
{return b2WorldListener.b2_freezeBody;},initialize:function(){}};b2WorldListener.b2_freezeBody=0;b2WorldListener.b2_destroyBody=1;
var b2JointNode=Class.create();b2JointNode.prototype={other:null,joint:null,prev:null,next:null,initialize:function(){}}

var b2Joint=Class.create();b2Joint.prototype={GetType:function(){return this.m_type;},GetAnchor1:function(){return null},GetAnchor2:function(){return null},GetReactionForce:function(invTimeStep){return null},GetReactionTorque:function(invTimeStep){return 0.0},GetBody1:function()
{return this.m_body1;},GetBody2:function()
{return this.m_body2;},GetNext:function(){return this.m_next;},GetUserData:function(){return this.m_userData;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;},PrepareVelocitySolver:function(){},SolveVelocityConstraints:function(step){},PreparePositionSolver:function(){},SolvePositionConstraints:function(){return false},m_type:0,m_prev:null,m_next:null,m_node1:new b2JointNode(),m_node2:new b2JointNode(),m_body1:null,m_body2:null,m_islandFlag:null,m_collideConnected:null,m_userData:null};b2Joint.Create=function(def,allocator){var joint=null;switch(def.type)
{case b2Joint.e_distanceJoint:{joint=new b2DistanceJoint(def);}
break;case b2Joint.e_mouseJoint:{joint=new b2MouseJoint(def);}
break;case b2Joint.e_prismaticJoint:{joint=new b2PrismaticJoint(def);}
break;case b2Joint.e_revoluteJoint:{joint=new b2RevoluteJoint(def);}
break;case b2Joint.e_pulleyJoint:{joint=new b2PulleyJoint(def);}
break;case b2Joint.e_gearJoint:{joint=new b2GearJoint(def);}
break;default:break;}
return joint;};b2Joint.Destroy=function(joint,allocator){};b2Joint.e_unknownJoint=0;b2Joint.e_revoluteJoint=1;b2Joint.e_prismaticJoint=2;b2Joint.e_distanceJoint=3;b2Joint.e_pulleyJoint=4;b2Joint.e_mouseJoint=5;b2Joint.e_gearJoint=6;b2Joint.e_inactiveLimit=0;b2Joint.e_atLowerLimit=1;b2Joint.e_atUpperLimit=2;b2Joint.e_equalLimits=3;
var b2JointDef=Class.create();b2JointDef.prototype={initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;},type:0,userData:null,body1:null,body2:null,collideConnected:null}

var b2DistanceJoint=Class.create();Object.extend(b2DistanceJoint.prototype,b2Joint.prototype);Object.extend(b2DistanceJoint.prototype,{initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_u=new b2Vec2();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=def.anchorPoint1.x-this.m_body1.m_position.x;tY=def.anchorPoint1.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint2.x-this.m_body2.m_position.x;tY=def.anchorPoint2.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;tX=def.anchorPoint2.x-def.anchorPoint1.x;tY=def.anchorPoint2.y-def.anchorPoint1.y;this.m_length=Math.sqrt(tX*tX+tY*tY);this.m_impulse=0.0;},PrepareVelocitySolver:function(){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;this.m_u.x=this.m_body2.m_position.x+r2X-this.m_body1.m_position.x-r1X;this.m_u.y=this.m_body2.m_position.y+r2Y-this.m_body1.m_position.y-r1Y;var length=Math.sqrt(this.m_u.x*this.m_u.x+this.m_u.y*this.m_u.y);if(length>b2Settings.b2_linearSlop)
{this.m_u.Multiply(1.0/length);}
else
{this.m_u.SetZero();}
var cr1u=(r1X*this.m_u.y-r1Y*this.m_u.x);var cr2u=(r2X*this.m_u.y-r2Y*this.m_u.x);this.m_mass=this.m_body1.m_invMass+this.m_body1.m_invI*cr1u*cr1u+this.m_body2.m_invMass+this.m_body2.m_invI*cr2u*cr2u;this.m_mass=1.0/this.m_mass;if(b2World.s_enableWarmStarting)
{var PX=this.m_impulse*this.m_u.x;var PY=this.m_impulse*this.m_u.y;this.m_body1.m_linearVelocity.x-=this.m_body1.m_invMass*PX;this.m_body1.m_linearVelocity.y-=this.m_body1.m_invMass*PY;this.m_body1.m_angularVelocity-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_linearVelocity.x+=this.m_body2.m_invMass*PX;this.m_body2.m_linearVelocity.y+=this.m_body2.m_invMass*PY;this.m_body2.m_angularVelocity+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);}
else
{this.m_impulse=0.0;}},SolveVelocityConstraints:function(step){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var v1X=this.m_body1.m_linearVelocity.x+(-this.m_body1.m_angularVelocity*r1Y);var v1Y=this.m_body1.m_linearVelocity.y+(this.m_body1.m_angularVelocity*r1X);var v2X=this.m_body2.m_linearVelocity.x+(-this.m_body2.m_angularVelocity*r2Y);var v2Y=this.m_body2.m_linearVelocity.y+(this.m_body2.m_angularVelocity*r2X);var Cdot=(this.m_u.x*(v2X-v1X)+this.m_u.y*(v2Y-v1Y));var impulse=-this.m_mass*Cdot;this.m_impulse+=impulse;var PX=impulse*this.m_u.x;var PY=impulse*this.m_u.y;this.m_body1.m_linearVelocity.x-=this.m_body1.m_invMass*PX;this.m_body1.m_linearVelocity.y-=this.m_body1.m_invMass*PY;this.m_body1.m_angularVelocity-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_linearVelocity.x+=this.m_body2.m_invMass*PX;this.m_body2.m_linearVelocity.y+=this.m_body2.m_invMass*PY;this.m_body2.m_angularVelocity+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);},SolvePositionConstraints:function(){var tMat;tMat=this.m_body1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=this.m_body2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var dX=this.m_body2.m_position.x+r2X-this.m_body1.m_position.x-r1X;var dY=this.m_body2.m_position.y+r2Y-this.m_body1.m_position.y-r1Y;var length=Math.sqrt(dX*dX+dY*dY);dX/=length;dY/=length;var C=length-this.m_length;C=b2Math.b2Clamp(C,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);var impulse=-this.m_mass*C;this.m_u.Set(dX,dY);var PX=impulse*this.m_u.x;var PY=impulse*this.m_u.y;this.m_body1.m_position.x-=this.m_body1.m_invMass*PX;this.m_body1.m_position.y-=this.m_body1.m_invMass*PY;this.m_body1.m_rotation-=this.m_body1.m_invI*(r1X*PY-r1Y*PX);this.m_body2.m_position.x+=this.m_body2.m_invMass*PX;this.m_body2.m_position.y+=this.m_body2.m_invMass*PY;this.m_body2.m_rotation+=this.m_body2.m_invI*(r2X*PY-r2Y*PX);this.m_body1.m_R.Set(this.m_body1.m_rotation);this.m_body2.m_R.Set(this.m_body2.m_rotation);return b2Math.b2Abs(C)<b2Settings.b2_linearSlop;},GetAnchor1:function(){return b2Math.AddVV(this.m_body1.m_position,b2Math.b2MulMV(this.m_body1.m_R,this.m_localAnchor1));},GetAnchor2:function(){return b2Math.AddVV(this.m_body2.m_position,b2Math.b2MulMV(this.m_body2.m_R,this.m_localAnchor2));},GetReactionForce:function(invTimeStep)
{var F=new b2Vec2();F.SetV(this.m_u);F.Multiply(this.m_impulse*invTimeStep);return F;},GetReactionTorque:function(invTimeStep)
{return 0.0;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_u:new b2Vec2(),m_impulse:null,m_mass:null,m_length:null});
var b2DistanceJointDef=Class.create();Object.extend(b2DistanceJointDef.prototype,b2JointDef.prototype);Object.extend(b2DistanceJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.anchorPoint1=new b2Vec2();this.anchorPoint2=new b2Vec2();this.type=b2Joint.e_distanceJoint;},anchorPoint1:new b2Vec2(),anchorPoint2:new b2Vec2()});
var b2Jacobian=Class.create();b2Jacobian.prototype={linear1:new b2Vec2(),angular1:null,linear2:new b2Vec2(),angular2:null,SetZero:function(){this.linear1.SetZero();this.angular1=0.0;this.linear2.SetZero();this.angular2=0.0;},Set:function(x1,a1,x2,a2){this.linear1.SetV(x1);this.angular1=a1;this.linear2.SetV(x2);this.angular2=a2;},Compute:function(x1,a1,x2,a2){return(this.linear1.x*x1.x+this.linear1.y*x1.y)+this.angular1*a1+(this.linear2.x*x2.x+this.linear2.y*x2.y)+this.angular2*a2;},initialize:function(){this.linear1=new b2Vec2();this.linear2=new b2Vec2();}};
var b2GearJoint=Class.create();Object.extend(b2GearJoint.prototype,b2Joint.prototype);Object.extend(b2GearJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetReactionForce:function(invTimeStep){return new b2Vec2();},GetReactionTorque:function(invTimeStep){return 0.0;},GetRatio:function(){return this.m_ratio;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_groundAnchor1=new b2Vec2();this.m_groundAnchor2=new b2Vec2();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_J=new b2Jacobian();this.m_revolute1=null;this.m_prismatic1=null;this.m_revolute2=null;this.m_prismatic2=null;var coordinate1;var coordinate2;this.m_ground1=def.joint1.m_body1;this.m_body1=def.joint1.m_body2;if(def.joint1.m_type==b2Joint.e_revoluteJoint)
{this.m_revolute1=def.joint1;this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2);coordinate1=this.m_revolute1.GetJointAngle();}
else
{this.m_prismatic1=def.joint1;this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1);this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2);coordinate1=this.m_prismatic1.GetJointTranslation();}
this.m_ground2=def.joint2.m_body1;this.m_body2=def.joint2.m_body2;if(def.joint2.m_type==b2Joint.e_revoluteJoint)
{this.m_revolute2=def.joint2;this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2);coordinate2=this.m_revolute2.GetJointAngle();}
else
{this.m_prismatic2=def.joint2;this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1);this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2);coordinate2=this.m_prismatic2.GetJointTranslation();}
this.m_ratio=def.ratio;this.m_constant=coordinate1+this.m_ratio*coordinate2;this.m_impulse=0.0;},PrepareVelocitySolver:function(){var g1=this.m_ground1;var g2=this.m_ground2;var b1=this.m_body1;var b2=this.m_body2;var ugX;var ugY;var rX;var rY;var tMat;var tVec;var crug;var K=0.0;this.m_J.SetZero();if(this.m_revolute1)
{this.m_J.angular1=-1.0;K+=b1.m_invI;}
else
{tMat=g1.m_R;tVec=this.m_prismatic1.m_localXAxis1;ugX=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;ugY=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b1.m_R;rX=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;rY=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;crug=rX*ugY-rY*ugX;this.m_J.linear1.Set(-ugX,-ugY);this.m_J.angular1=-crug;K+=b1.m_invMass+b1.m_invI*crug*crug;}
if(this.m_revolute2)
{this.m_J.angular2=-this.m_ratio;K+=this.m_ratio*this.m_ratio*b2.m_invI;}
else
{tMat=g2.m_R;tVec=this.m_prismatic2.m_localXAxis1;ugX=tMat.col1.x*tVec.x+tMat.col2.x*tVec.y;ugY=tMat.col1.y*tVec.x+tMat.col2.y*tVec.y;tMat=b2.m_R;rX=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;rY=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;crug=rX*ugY-rY*ugX;this.m_J.linear2.Set(-this.m_ratio*ugX,-this.m_ratio*ugY);this.m_J.angular2=-this.m_ratio*crug;K+=this.m_ratio*this.m_ratio*(b2.m_invMass+b2.m_invI*crug*crug);}
this.m_mass=1.0/K;b1.m_linearVelocity.x+=b1.m_invMass*this.m_impulse*this.m_J.linear1.x;b1.m_linearVelocity.y+=b1.m_invMass*this.m_impulse*this.m_J.linear1.y;b1.m_angularVelocity+=b1.m_invI*this.m_impulse*this.m_J.angular1;b2.m_linearVelocity.x+=b2.m_invMass*this.m_impulse*this.m_J.linear2.x;b2.m_linearVelocity.y+=b2.m_invMass*this.m_impulse*this.m_J.linear2.y;b2.m_angularVelocity+=b2.m_invI*this.m_impulse*this.m_J.angular2;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var Cdot=this.m_J.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var impulse=-this.m_mass*Cdot;this.m_impulse+=impulse;b1.m_linearVelocity.x+=b1.m_invMass*impulse*this.m_J.linear1.x;b1.m_linearVelocity.y+=b1.m_invMass*impulse*this.m_J.linear1.y;b1.m_angularVelocity+=b1.m_invI*impulse*this.m_J.angular1;b2.m_linearVelocity.x+=b2.m_invMass*impulse*this.m_J.linear2.x;b2.m_linearVelocity.y+=b2.m_invMass*impulse*this.m_J.linear2.y;b2.m_angularVelocity+=b2.m_invI*impulse*this.m_J.angular2;},SolvePositionConstraints:function(){var linearError=0.0;var b1=this.m_body1;var b2=this.m_body2;var coordinate1;var coordinate2;if(this.m_revolute1)
{coordinate1=this.m_revolute1.GetJointAngle();}
else
{coordinate1=this.m_prismatic1.GetJointTranslation();}
if(this.m_revolute2)
{coordinate2=this.m_revolute2.GetJointAngle();}
else
{coordinate2=this.m_prismatic2.GetJointTranslation();}
var C=this.m_constant-(coordinate1+this.m_ratio*coordinate2);var impulse=-this.m_mass*C;b1.m_position.x+=b1.m_invMass*impulse*this.m_J.linear1.x;b1.m_position.y+=b1.m_invMass*impulse*this.m_J.linear1.y;b1.m_rotation+=b1.m_invI*impulse*this.m_J.angular1;b2.m_position.x+=b2.m_invMass*impulse*this.m_J.linear2.x;b2.m_position.y+=b2.m_invMass*impulse*this.m_J.linear2.y;b2.m_rotation+=b2.m_invI*impulse*this.m_J.angular2;b1.m_R.Set(b1.m_rotation);b2.m_R.Set(b2.m_rotation);return linearError<b2Settings.b2_linearSlop;},m_ground1:null,m_ground2:null,m_revolute1:null,m_prismatic1:null,m_revolute2:null,m_prismatic2:null,m_groundAnchor1:new b2Vec2(),m_groundAnchor2:new b2Vec2(),m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_J:new b2Jacobian(),m_constant:null,m_ratio:null,m_mass:null,m_impulse:null});
var b2GearJointDef=Class.create();Object.extend(b2GearJointDef.prototype,b2JointDef.prototype);Object.extend(b2GearJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_gearJoint;this.joint1=null;this.joint2=null;this.ratio=1.0;},joint1:null,joint2:null,ratio:null});
var b2MouseJoint=Class.create();Object.extend(b2MouseJoint.prototype,b2Joint.prototype);Object.extend(b2MouseJoint.prototype,{GetAnchor1:function(){return this.m_target;},GetAnchor2:function(){var tVec=b2Math.b2MulMV(this.m_body2.m_R,this.m_localAnchor);tVec.Add(this.m_body2.m_position);return tVec;},GetReactionForce:function(invTimeStep)
{var F=new b2Vec2();F.SetV(this.m_impulse);F.Multiply(invTimeStep);return F;},GetReactionTorque:function(invTimeStep)
{return 0.0;},SetTarget:function(target){this.m_body2.WakeUp();this.m_target=target;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.K=new b2Mat22();this.K1=new b2Mat22();this.K2=new b2Mat22();this.m_localAnchor=new b2Vec2();this.m_target=new b2Vec2();this.m_impulse=new b2Vec2();this.m_ptpMass=new b2Mat22();this.m_C=new b2Vec2();this.m_target.SetV(def.target);var tX=this.m_target.x-this.m_body2.m_position.x;var tY=this.m_target.y-this.m_body2.m_position.y;this.m_localAnchor.x=(tX*this.m_body2.m_R.col1.x+tY*this.m_body2.m_R.col1.y);this.m_localAnchor.y=(tX*this.m_body2.m_R.col2.x+tY*this.m_body2.m_R.col2.y);this.m_maxForce=def.maxForce;this.m_impulse.SetZero();var mass=this.m_body2.m_mass;var omega=2.0*b2Settings.b2_pi*def.frequencyHz;var d=2.0*mass*def.dampingRatio*omega;var k=mass*omega*omega;this.m_gamma=1.0/(d+def.timeStep*k);this.m_beta=def.timeStep*k/(d+def.timeStep*k);},K:new b2Mat22(),K1:new b2Mat22(),K2:new b2Mat22(),PrepareVelocitySolver:function(){var b=this.m_body2;var tMat;tMat=b.m_R;var rX=tMat.col1.x*this.m_localAnchor.x+tMat.col2.x*this.m_localAnchor.y;var rY=tMat.col1.y*this.m_localAnchor.x+tMat.col2.y*this.m_localAnchor.y;var invMass=b.m_invMass;var invI=b.m_invI;this.K1.col1.x=invMass;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass;this.K2.col1.x=invI*rY*rY;this.K2.col2.x=-invI*rX*rY;this.K2.col1.y=-invI*rX*rY;this.K2.col2.y=invI*rX*rX;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.col1.x+=this.m_gamma;this.K.col2.y+=this.m_gamma;this.K.Invert(this.m_ptpMass);this.m_C.x=b.m_position.x+rX-this.m_target.x;this.m_C.y=b.m_position.y+rY-this.m_target.y;b.m_angularVelocity*=0.98;var PX=this.m_impulse.x;var PY=this.m_impulse.y;b.m_linearVelocity.x+=invMass*PX;b.m_linearVelocity.y+=invMass*PY;b.m_angularVelocity+=invI*(rX*PY-rY*PX);},SolveVelocityConstraints:function(step){var body=this.m_body2;var tMat;tMat=body.m_R;var rX=tMat.col1.x*this.m_localAnchor.x+tMat.col2.x*this.m_localAnchor.y;var rY=tMat.col1.y*this.m_localAnchor.x+tMat.col2.y*this.m_localAnchor.y;var CdotX=body.m_linearVelocity.x+(-body.m_angularVelocity*rY);var CdotY=body.m_linearVelocity.y+(body.m_angularVelocity*rX);tMat=this.m_ptpMass;var tX=CdotX+(this.m_beta*step.inv_dt)*this.m_C.x+this.m_gamma*this.m_impulse.x;var tY=CdotY+(this.m_beta*step.inv_dt)*this.m_C.y+this.m_gamma*this.m_impulse.y;var impulseX=-(tMat.col1.x*tX+tMat.col2.x*tY);var impulseY=-(tMat.col1.y*tX+tMat.col2.y*tY);var oldImpulseX=this.m_impulse.x;var oldImpulseY=this.m_impulse.y;this.m_impulse.x+=impulseX;this.m_impulse.y+=impulseY;var length=this.m_impulse.Length();if(length>step.dt*this.m_maxForce)
{this.m_impulse.Multiply(step.dt*this.m_maxForce/length);}
impulseX=this.m_impulse.x-oldImpulseX;impulseY=this.m_impulse.y-oldImpulseY;body.m_linearVelocity.x+=body.m_invMass*impulseX;body.m_linearVelocity.y+=body.m_invMass*impulseY;body.m_angularVelocity+=body.m_invI*(rX*impulseY-rY*impulseX);},SolvePositionConstraints:function(){return true;},m_localAnchor:new b2Vec2(),m_target:new b2Vec2(),m_impulse:new b2Vec2(),m_ptpMass:new b2Mat22(),m_C:new b2Vec2(),m_maxForce:null,m_beta:null,m_gamma:null});
var b2MouseJointDef=Class.create();Object.extend(b2MouseJointDef.prototype,b2JointDef.prototype);Object.extend(b2MouseJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.target=new b2Vec2();this.type=b2Joint.e_mouseJoint;this.maxForce=0.0;this.frequencyHz=5.0;this.dampingRatio=0.7;this.timeStep=1.0/60.0;},target:new b2Vec2(),maxForce:null,frequencyHz:null,dampingRatio:null,timeStep:null});
var b2PrismaticJoint=Class.create();Object.extend(b2PrismaticJoint.prototype,b2Joint.prototype);Object.extend(b2PrismaticJoint.prototype,{GetAnchor1:function(){var b1=this.m_body1;var tVec=new b2Vec2();tVec.SetV(this.m_localAnchor1);tVec.MulM(b1.m_R);tVec.Add(b1.m_position);return tVec;},GetAnchor2:function(){var b2=this.m_body2;var tVec=new b2Vec2();tVec.SetV(this.m_localAnchor2);tVec.MulM(b2.m_R);tVec.Add(b2.m_position);return tVec;},GetJointTranslation:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var translation=ax1X*dX+ax1Y*dY;return translation;},GetJointSpeed:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var v1=b1.m_linearVelocity;var v2=b2.m_linearVelocity;var w1=b1.m_angularVelocity;var w2=b2.m_angularVelocity;var speed=(dX*(-w1*ax1Y)+dY*(w1*ax1X))+(ax1X*(((v2.x+(-w2*r2Y))-v1.x)-(-w1*r1Y))+ax1Y*(((v2.y+(w2*r2X))-v1.y)-(w1*r1X)));return speed;},GetMotorForce:function(invTimeStep){return invTimeStep*this.m_motorImpulse;},SetMotorSpeed:function(speed)
{this.m_motorSpeed=speed;},SetMotorForce:function(force)
{this.m_maxMotorForce=force;},GetReactionForce:function(invTimeStep)
{var tImp=invTimeStep*this.m_limitImpulse;var tMat;tMat=this.m_body1.m_R;var ax1X=tImp*(tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y);var ax1Y=tImp*(tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y);var ay1X=tImp*(tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y);var ay1Y=tImp*(tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y);return new b2Vec2(ax1X+ay1X,ax1Y+ay1Y);},GetReactionTorque:function(invTimeStep)
{return invTimeStep*this.m_angularImpulse;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_localXAxis1=new b2Vec2();this.m_localYAxis1=new b2Vec2();this.m_linearJacobian=new b2Jacobian();this.m_motorJacobian=new b2Jacobian();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=(def.anchorPoint.x-this.m_body1.m_position.x);tY=(def.anchorPoint.y-this.m_body1.m_position.y);this.m_localAnchor1.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));tMat=this.m_body2.m_R;tX=(def.anchorPoint.x-this.m_body2.m_position.x);tY=(def.anchorPoint.y-this.m_body2.m_position.y);this.m_localAnchor2.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));tMat=this.m_body1.m_R;tX=def.axis.x;tY=def.axis.y;this.m_localXAxis1.Set((tX*tMat.col1.x+tY*tMat.col1.y),(tX*tMat.col2.x+tY*tMat.col2.y));this.m_localYAxis1.x=-this.m_localXAxis1.y;this.m_localYAxis1.y=this.m_localXAxis1.x;this.m_initialAngle=this.m_body2.m_rotation-this.m_body1.m_rotation;this.m_linearJacobian.SetZero();this.m_linearMass=0.0;this.m_linearImpulse=0.0;this.m_angularMass=0.0;this.m_angularImpulse=0.0;this.m_motorJacobian.SetZero();this.m_motorMass=0.0;this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;this.m_limitPositionImpulse=0.0;this.m_lowerTranslation=def.lowerTranslation;this.m_upperTranslation=def.upperTranslation;this.m_maxMotorForce=def.motorForce;this.m_motorSpeed=def.motorSpeed;this.m_enableLimit=def.enableLimit;this.m_enableMotor=def.enableMotor;},PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;tMat=b1.m_R;var ay1X=tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y;var ay1Y=tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y;var eX=b2.m_position.x+r2X-b1.m_position.x;var eY=b2.m_position.y+r2Y-b1.m_position.y;this.m_linearJacobian.linear1.x=-ay1X;this.m_linearJacobian.linear1.y=-ay1Y;this.m_linearJacobian.linear2.x=ay1X;this.m_linearJacobian.linear2.y=ay1Y;this.m_linearJacobian.angular1=-(eX*ay1Y-eY*ay1X);this.m_linearJacobian.angular2=r2X*ay1Y-r2Y*ay1X;this.m_linearMass=invMass1+invI1*this.m_linearJacobian.angular1*this.m_linearJacobian.angular1+
invMass2+invI2*this.m_linearJacobian.angular2*this.m_linearJacobian.angular2;this.m_linearMass=1.0/this.m_linearMass;this.m_angularMass=1.0/(invI1+invI2);if(this.m_enableLimit||this.m_enableMotor)
{tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;this.m_motorJacobian.linear1.x=-ax1X;this.m_motorJacobian.linear1.y=-ax1Y;this.m_motorJacobian.linear2.x=ax1X;this.m_motorJacobian.linear2.y=ax1Y;this.m_motorJacobian.angular1=-(eX*ax1Y-eY*ax1X);this.m_motorJacobian.angular2=r2X*ax1Y-r2Y*ax1X;this.m_motorMass=invMass1+invI1*this.m_motorJacobian.angular1*this.m_motorJacobian.angular1+
invMass2+invI2*this.m_motorJacobian.angular2*this.m_motorJacobian.angular2;this.m_motorMass=1.0/this.m_motorMass;if(this.m_enableLimit)
{var dX=eX-r1X;var dY=eY-r1Y;var jointTranslation=ax1X*dX+ax1Y*dY;if(b2Math.b2Abs(this.m_upperTranslation-this.m_lowerTranslation)<2.0*b2Settings.b2_linearSlop)
{this.m_limitState=b2Joint.e_equalLimits;}
else if(jointTranslation<=this.m_lowerTranslation)
{if(this.m_limitState!=b2Joint.e_atLowerLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atLowerLimit;}
else if(jointTranslation>=this.m_upperTranslation)
{if(this.m_limitState!=b2Joint.e_atUpperLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atUpperLimit;}
else
{this.m_limitState=b2Joint.e_inactiveLimit;this.m_limitImpulse=0.0;}}}
if(this.m_enableMotor==false)
{this.m_motorImpulse=0.0;}
if(this.m_enableLimit==false)
{this.m_limitImpulse=0.0;}
if(b2World.s_enableWarmStarting)
{var P1X=this.m_linearImpulse*this.m_linearJacobian.linear1.x+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear1.x;var P1Y=this.m_linearImpulse*this.m_linearJacobian.linear1.y+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear1.y;var P2X=this.m_linearImpulse*this.m_linearJacobian.linear2.x+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear2.x;var P2Y=this.m_linearImpulse*this.m_linearJacobian.linear2.y+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.linear2.y;var L1=this.m_linearImpulse*this.m_linearJacobian.angular1-this.m_angularImpulse+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.angular1;var L2=this.m_linearImpulse*this.m_linearJacobian.angular2+this.m_angularImpulse+(this.m_motorImpulse+this.m_limitImpulse)*this.m_motorJacobian.angular2;b1.m_linearVelocity.x+=invMass1*P1X;b1.m_linearVelocity.y+=invMass1*P1Y;b1.m_angularVelocity+=invI1*L1;b2.m_linearVelocity.x+=invMass2*P2X;b2.m_linearVelocity.y+=invMass2*P2Y;b2.m_angularVelocity+=invI2*L2;}
else
{this.m_linearImpulse=0.0;this.m_angularImpulse=0.0;this.m_limitImpulse=0.0;this.m_motorImpulse=0.0;}
this.m_limitPositionImpulse=0.0;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;var oldLimitImpulse;var linearCdot=this.m_linearJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var linearImpulse=-this.m_linearMass*linearCdot;this.m_linearImpulse+=linearImpulse;b1.m_linearVelocity.x+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.y;b1.m_angularVelocity+=invI1*linearImpulse*this.m_linearJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.y;b2.m_angularVelocity+=invI2*linearImpulse*this.m_linearJacobian.angular2;var angularCdot=b2.m_angularVelocity-b1.m_angularVelocity;var angularImpulse=-this.m_angularMass*angularCdot;this.m_angularImpulse+=angularImpulse;b1.m_angularVelocity-=invI1*angularImpulse;b2.m_angularVelocity+=invI2*angularImpulse;if(this.m_enableMotor&&this.m_limitState!=b2Joint.e_equalLimits)
{var motorCdot=this.m_motorJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity)-this.m_motorSpeed;var motorImpulse=-this.m_motorMass*motorCdot;var oldMotorImpulse=this.m_motorImpulse;this.m_motorImpulse=b2Math.b2Clamp(this.m_motorImpulse+motorImpulse,-step.dt*this.m_maxMotorForce,step.dt*this.m_maxMotorForce);motorImpulse=this.m_motorImpulse-oldMotorImpulse;b1.m_linearVelocity.x+=(invMass1*motorImpulse)*this.m_motorJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*motorImpulse)*this.m_motorJacobian.linear1.y;b1.m_angularVelocity+=invI1*motorImpulse*this.m_motorJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*motorImpulse)*this.m_motorJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*motorImpulse)*this.m_motorJacobian.linear2.y;b2.m_angularVelocity+=invI2*motorImpulse*this.m_motorJacobian.angular2;}
if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{var limitCdot=this.m_motorJacobian.Compute(b1.m_linearVelocity,b1.m_angularVelocity,b2.m_linearVelocity,b2.m_angularVelocity);var limitImpulse=-this.m_motorMass*limitCdot;if(this.m_limitState==b2Joint.e_equalLimits)
{this.m_limitImpulse+=limitImpulse;}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Max(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Min(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
b1.m_linearVelocity.x+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.x;b1.m_linearVelocity.y+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.y;b1.m_angularVelocity+=invI1*limitImpulse*this.m_motorJacobian.angular1;b2.m_linearVelocity.x+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.x;b2.m_linearVelocity.y+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.y;b2.m_angularVelocity+=invI2*limitImpulse*this.m_motorJacobian.angular2;}},SolvePositionConstraints:function(){var limitC;var oldLimitImpulse;var b1=this.m_body1;var b2=this.m_body2;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var dX=p2X-p1X;var dY=p2Y-p1Y;tMat=b1.m_R;var ay1X=tMat.col1.x*this.m_localYAxis1.x+tMat.col2.x*this.m_localYAxis1.y;var ay1Y=tMat.col1.y*this.m_localYAxis1.x+tMat.col2.y*this.m_localYAxis1.y;var linearC=ay1X*dX+ay1Y*dY;linearC=b2Math.b2Clamp(linearC,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);var linearImpulse=-this.m_linearMass*linearC;b1.m_position.x+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.x;b1.m_position.y+=(invMass1*linearImpulse)*this.m_linearJacobian.linear1.y;b1.m_rotation+=invI1*linearImpulse*this.m_linearJacobian.angular1;b2.m_position.x+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.x;b2.m_position.y+=(invMass2*linearImpulse)*this.m_linearJacobian.linear2.y;b2.m_rotation+=invI2*linearImpulse*this.m_linearJacobian.angular2;var positionError=b2Math.b2Abs(linearC);var angularC=b2.m_rotation-b1.m_rotation-this.m_initialAngle;angularC=b2Math.b2Clamp(angularC,-b2Settings.b2_maxAngularCorrection,b2Settings.b2_maxAngularCorrection);var angularImpulse=-this.m_angularMass*angularC;b1.m_rotation-=b1.m_invI*angularImpulse;b1.m_R.Set(b1.m_rotation);b2.m_rotation+=b2.m_invI*angularImpulse;b2.m_R.Set(b2.m_rotation);var angularError=b2Math.b2Abs(angularC);if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;dX=p2X-p1X;dY=p2Y-p1Y;tMat=b1.m_R;var ax1X=tMat.col1.x*this.m_localXAxis1.x+tMat.col2.x*this.m_localXAxis1.y;var ax1Y=tMat.col1.y*this.m_localXAxis1.x+tMat.col2.y*this.m_localXAxis1.y;var translation=(ax1X*dX+ax1Y*dY);var limitImpulse=0.0;if(this.m_limitState==b2Joint.e_equalLimits)
{limitC=b2Math.b2Clamp(translation,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);limitImpulse=-this.m_motorMass*limitC;positionError=b2Math.b2Max(positionError,b2Math.b2Abs(angularC));}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{limitC=translation-this.m_lowerTranslation;positionError=b2Math.b2Max(positionError,-limitC);limitC=b2Math.b2Clamp(limitC+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Max(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{limitC=translation-this.m_upperTranslation;positionError=b2Math.b2Max(positionError,limitC);limitC=b2Math.b2Clamp(limitC-b2Settings.b2_linearSlop,0.0,b2Settings.b2_maxLinearCorrection);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Min(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
b1.m_position.x+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.x;b1.m_position.y+=(invMass1*limitImpulse)*this.m_motorJacobian.linear1.y;b1.m_rotation+=invI1*limitImpulse*this.m_motorJacobian.angular1;b1.m_R.Set(b1.m_rotation);b2.m_position.x+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.x;b2.m_position.y+=(invMass2*limitImpulse)*this.m_motorJacobian.linear2.y;b2.m_rotation+=invI2*limitImpulse*this.m_motorJacobian.angular2;b2.m_R.Set(b2.m_rotation);}
return positionError<=b2Settings.b2_linearSlop&&angularError<=b2Settings.b2_angularSlop;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_localXAxis1:new b2Vec2(),m_localYAxis1:new b2Vec2(),m_initialAngle:null,m_linearJacobian:new b2Jacobian(),m_linearMass:null,m_linearImpulse:null,m_angularMass:null,m_angularImpulse:null,m_motorJacobian:new b2Jacobian(),m_motorMass:null,m_motorImpulse:null,m_limitImpulse:null,m_limitPositionImpulse:null,m_lowerTranslation:null,m_upperTranslation:null,m_maxMotorForce:null,m_motorSpeed:null,m_enableLimit:null,m_enableMotor:null,m_limitState:0});
var b2PrismaticJointDef=Class.create();Object.extend(b2PrismaticJointDef.prototype,b2JointDef.prototype);Object.extend(b2PrismaticJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.type=b2Joint.e_prismaticJoint;this.anchorPoint=new b2Vec2(0.0,0.0);this.axis=new b2Vec2(0.0,0.0);this.lowerTranslation=0.0;this.upperTranslation=0.0;this.motorForce=0.0;this.motorSpeed=0.0;this.enableLimit=false;this.enableMotor=false;},anchorPoint:null,axis:null,lowerTranslation:null,upperTranslation:null,motorForce:null,motorSpeed:null,enableLimit:null,enableMotor:null});
var b2PulleyJoint=Class.create();Object.extend(b2PulleyJoint.prototype,b2Joint.prototype);Object.extend(b2PulleyJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetGroundPoint1:function(){return new b2Vec2(this.m_ground.m_position.x+this.m_groundAnchor1.x,this.m_ground.m_position.y+this.m_groundAnchor1.y);},GetGroundPoint2:function(){return new b2Vec2(this.m_ground.m_position.x+this.m_groundAnchor2.x,this.m_ground.m_position.y+this.m_groundAnchor2.y);},GetReactionForce:function(invTimeStep){return new b2Vec2();},GetReactionTorque:function(invTimeStep){return 0.0;},GetLength1:function(){var tMat;tMat=this.m_body1.m_R;var pX=this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y);var pY=this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y);var dX=pX-(this.m_ground.m_position.x+this.m_groundAnchor1.x);var dY=pY-(this.m_ground.m_position.y+this.m_groundAnchor1.y);return Math.sqrt(dX*dX+dY*dY);},GetLength2:function(){var tMat;tMat=this.m_body2.m_R;var pX=this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y);var pY=this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y);var dX=pX-(this.m_ground.m_position.x+this.m_groundAnchor2.x);var dY=pY-(this.m_ground.m_position.y+this.m_groundAnchor2.y);return Math.sqrt(dX*dX+dY*dY);},GetRatio:function(){return this.m_ratio;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.m_groundAnchor1=new b2Vec2();this.m_groundAnchor2=new b2Vec2();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_u1=new b2Vec2();this.m_u2=new b2Vec2();var tMat;var tX;var tY;this.m_ground=this.m_body1.m_world.m_groundBody;this.m_groundAnchor1.x=def.groundPoint1.x-this.m_ground.m_position.x;this.m_groundAnchor1.y=def.groundPoint1.y-this.m_ground.m_position.y;this.m_groundAnchor2.x=def.groundPoint2.x-this.m_ground.m_position.x;this.m_groundAnchor2.y=def.groundPoint2.y-this.m_ground.m_position.y;tMat=this.m_body1.m_R;tX=def.anchorPoint1.x-this.m_body1.m_position.x;tY=def.anchorPoint1.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint2.x-this.m_body2.m_position.x;tY=def.anchorPoint2.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;this.m_ratio=def.ratio;tX=def.groundPoint1.x-def.anchorPoint1.x;tY=def.groundPoint1.y-def.anchorPoint1.y;var d1Len=Math.sqrt(tX*tX+tY*tY);tX=def.groundPoint2.x-def.anchorPoint2.x;tY=def.groundPoint2.y-def.anchorPoint2.y;var d2Len=Math.sqrt(tX*tX+tY*tY);var length1=b2Math.b2Max(0.5*b2PulleyJoint.b2_minPulleyLength,d1Len);var length2=b2Math.b2Max(0.5*b2PulleyJoint.b2_minPulleyLength,d2Len);this.m_constant=length1+this.m_ratio*length2;this.m_maxLength1=b2Math.b2Clamp(def.maxLength1,length1,this.m_constant-this.m_ratio*b2PulleyJoint.b2_minPulleyLength);this.m_maxLength2=b2Math.b2Clamp(def.maxLength2,length2,(this.m_constant-b2PulleyJoint.b2_minPulleyLength)/this.m_ratio);this.m_pulleyImpulse=0.0;this.m_limitImpulse1=0.0;this.m_limitImpulse2=0.0;},PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var s1X=this.m_ground.m_position.x+this.m_groundAnchor1.x;var s1Y=this.m_ground.m_position.y+this.m_groundAnchor1.y;var s2X=this.m_ground.m_position.x+this.m_groundAnchor2.x;var s2Y=this.m_ground.m_position.y+this.m_groundAnchor2.y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);this.m_u2.Set(p2X-s2X,p2Y-s2Y);var length1=this.m_u1.Length();var length2=this.m_u2.Length();if(length1>b2Settings.b2_linearSlop)
{this.m_u1.Multiply(1.0/length1);}
else
{this.m_u1.SetZero();}
if(length2>b2Settings.b2_linearSlop)
{this.m_u2.Multiply(1.0/length2);}
else
{this.m_u2.SetZero();}
if(length1<this.m_maxLength1)
{this.m_limitState1=b2Joint.e_inactiveLimit;this.m_limitImpulse1=0.0;}
else
{this.m_limitState1=b2Joint.e_atUpperLimit;this.m_limitPositionImpulse1=0.0;}
if(length2<this.m_maxLength2)
{this.m_limitState2=b2Joint.e_inactiveLimit;this.m_limitImpulse2=0.0;}
else
{this.m_limitState2=b2Joint.e_atUpperLimit;this.m_limitPositionImpulse2=0.0;}
var cr1u1=r1X*this.m_u1.y-r1Y*this.m_u1.x;var cr2u2=r2X*this.m_u2.y-r2Y*this.m_u2.x;this.m_limitMass1=b1.m_invMass+b1.m_invI*cr1u1*cr1u1;this.m_limitMass2=b2.m_invMass+b2.m_invI*cr2u2*cr2u2;this.m_pulleyMass=this.m_limitMass1+this.m_ratio*this.m_ratio*this.m_limitMass2;this.m_limitMass1=1.0/this.m_limitMass1;this.m_limitMass2=1.0/this.m_limitMass2;this.m_pulleyMass=1.0/this.m_pulleyMass;var P1X=(-this.m_pulleyImpulse-this.m_limitImpulse1)*this.m_u1.x;var P1Y=(-this.m_pulleyImpulse-this.m_limitImpulse1)*this.m_u1.y;var P2X=(-this.m_ratio*this.m_pulleyImpulse-this.m_limitImpulse2)*this.m_u2.x;var P2Y=(-this.m_ratio*this.m_pulleyImpulse-this.m_limitImpulse2)*this.m_u2.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var v1X;var v1Y;var v2X;var v2Y;var P1X;var P1Y;var P2X;var P2Y;var Cdot;var impulse;var oldLimitImpulse;v1X=b1.m_linearVelocity.x+(-b1.m_angularVelocity*r1Y);v1Y=b1.m_linearVelocity.y+(b1.m_angularVelocity*r1X);v2X=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y);v2Y=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X);Cdot=-(this.m_u1.x*v1X+this.m_u1.y*v1Y)-this.m_ratio*(this.m_u2.x*v2X+this.m_u2.y*v2Y);impulse=-this.m_pulleyMass*Cdot;this.m_pulleyImpulse+=impulse;P1X=-impulse*this.m_u1.x;P1Y=-impulse*this.m_u1.y;P2X=-this.m_ratio*impulse*this.m_u2.x;P2Y=-this.m_ratio*impulse*this.m_u2.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);if(this.m_limitState1==b2Joint.e_atUpperLimit)
{v1X=b1.m_linearVelocity.x+(-b1.m_angularVelocity*r1Y);v1Y=b1.m_linearVelocity.y+(b1.m_angularVelocity*r1X);Cdot=-(this.m_u1.x*v1X+this.m_u1.y*v1Y);impulse=-this.m_limitMass1*Cdot;oldLimitImpulse=this.m_limitImpulse1;this.m_limitImpulse1=b2Math.b2Max(0.0,this.m_limitImpulse1+impulse);impulse=this.m_limitImpulse1-oldLimitImpulse;P1X=-impulse*this.m_u1.x;P1Y=-impulse*this.m_u1.y;b1.m_linearVelocity.x+=b1.m_invMass*P1X;b1.m_linearVelocity.y+=b1.m_invMass*P1Y;b1.m_angularVelocity+=b1.m_invI*(r1X*P1Y-r1Y*P1X);}
if(this.m_limitState2==b2Joint.e_atUpperLimit)
{v2X=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y);v2Y=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X);Cdot=-(this.m_u2.x*v2X+this.m_u2.y*v2Y);impulse=-this.m_limitMass2*Cdot;oldLimitImpulse=this.m_limitImpulse2;this.m_limitImpulse2=b2Math.b2Max(0.0,this.m_limitImpulse2+impulse);impulse=this.m_limitImpulse2-oldLimitImpulse;P2X=-impulse*this.m_u2.x;P2Y=-impulse*this.m_u2.y;b2.m_linearVelocity.x+=b2.m_invMass*P2X;b2.m_linearVelocity.y+=b2.m_invMass*P2Y;b2.m_angularVelocity+=b2.m_invI*(r2X*P2Y-r2Y*P2X);}},SolvePositionConstraints:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;var s1X=this.m_ground.m_position.x+this.m_groundAnchor1.x;var s1Y=this.m_ground.m_position.y+this.m_groundAnchor1.y;var s2X=this.m_ground.m_position.x+this.m_groundAnchor2.x;var s2Y=this.m_ground.m_position.y+this.m_groundAnchor2.y;var r1X;var r1Y;var r2X;var r2Y;var p1X;var p1Y;var p2X;var p2Y;var length1;var length2;var C;var impulse;var oldLimitPositionImpulse;var linearError=0.0;{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);this.m_u2.Set(p2X-s2X,p2Y-s2Y);length1=this.m_u1.Length();length2=this.m_u2.Length();if(length1>b2Settings.b2_linearSlop)
{this.m_u1.Multiply(1.0/length1);}
else
{this.m_u1.SetZero();}
if(length2>b2Settings.b2_linearSlop)
{this.m_u2.Multiply(1.0/length2);}
else
{this.m_u2.SetZero();}
C=this.m_constant-length1-this.m_ratio*length2;linearError=b2Math.b2Max(linearError,Math.abs(C));C=b2Math.b2Clamp(C,-b2Settings.b2_maxLinearCorrection,b2Settings.b2_maxLinearCorrection);impulse=-this.m_pulleyMass*C;p1X=-impulse*this.m_u1.x;p1Y=-impulse*this.m_u1.y;p2X=-this.m_ratio*impulse*this.m_u2.x;p2Y=-this.m_ratio*impulse*this.m_u2.y;b1.m_position.x+=b1.m_invMass*p1X;b1.m_position.y+=b1.m_invMass*p1Y;b1.m_rotation+=b1.m_invI*(r1X*p1Y-r1Y*p1X);b2.m_position.x+=b2.m_invMass*p2X;b2.m_position.y+=b2.m_invMass*p2Y;b2.m_rotation+=b2.m_invI*(r2X*p2Y-r2Y*p2X);b1.m_R.Set(b1.m_rotation);b2.m_R.Set(b2.m_rotation);}
if(this.m_limitState1==b2Joint.e_atUpperLimit)
{tMat=b1.m_R;r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;p1X=b1.m_position.x+r1X;p1Y=b1.m_position.y+r1Y;this.m_u1.Set(p1X-s1X,p1Y-s1Y);length1=this.m_u1.Length();if(length1>b2Settings.b2_linearSlop)
{this.m_u1.x*=1.0/length1;this.m_u1.y*=1.0/length1;}
else
{this.m_u1.SetZero();}
C=this.m_maxLength1-length1;linearError=b2Math.b2Max(linearError,-C);C=b2Math.b2Clamp(C+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);impulse=-this.m_limitMass1*C;oldLimitPositionImpulse=this.m_limitPositionImpulse1;this.m_limitPositionImpulse1=b2Math.b2Max(0.0,this.m_limitPositionImpulse1+impulse);impulse=this.m_limitPositionImpulse1-oldLimitPositionImpulse;p1X=-impulse*this.m_u1.x;p1Y=-impulse*this.m_u1.y;b1.m_position.x+=b1.m_invMass*p1X;b1.m_position.y+=b1.m_invMass*p1Y;b1.m_rotation+=b1.m_invI*(r1X*p1Y-r1Y*p1X);b1.m_R.Set(b1.m_rotation);}
if(this.m_limitState2==b2Joint.e_atUpperLimit)
{tMat=b2.m_R;r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;p2X=b2.m_position.x+r2X;p2Y=b2.m_position.y+r2Y;this.m_u2.Set(p2X-s2X,p2Y-s2Y);length2=this.m_u2.Length();if(length2>b2Settings.b2_linearSlop)
{this.m_u2.x*=1.0/length2;this.m_u2.y*=1.0/length2;}
else
{this.m_u2.SetZero();}
C=this.m_maxLength2-length2;linearError=b2Math.b2Max(linearError,-C);C=b2Math.b2Clamp(C+b2Settings.b2_linearSlop,-b2Settings.b2_maxLinearCorrection,0.0);impulse=-this.m_limitMass2*C;oldLimitPositionImpulse=this.m_limitPositionImpulse2;this.m_limitPositionImpulse2=b2Math.b2Max(0.0,this.m_limitPositionImpulse2+impulse);impulse=this.m_limitPositionImpulse2-oldLimitPositionImpulse;p2X=-impulse*this.m_u2.x;p2Y=-impulse*this.m_u2.y;b2.m_position.x+=b2.m_invMass*p2X;b2.m_position.y+=b2.m_invMass*p2Y;b2.m_rotation+=b2.m_invI*(r2X*p2Y-r2Y*p2X);b2.m_R.Set(b2.m_rotation);}
return linearError<b2Settings.b2_linearSlop;},m_ground:null,m_groundAnchor1:new b2Vec2(),m_groundAnchor2:new b2Vec2(),m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_u1:new b2Vec2(),m_u2:new b2Vec2(),m_constant:null,m_ratio:null,m_maxLength1:null,m_maxLength2:null,m_pulleyMass:null,m_limitMass1:null,m_limitMass2:null,m_pulleyImpulse:null,m_limitImpulse1:null,m_limitImpulse2:null,m_limitPositionImpulse1:null,m_limitPositionImpulse2:null,m_limitState1:0,m_limitState2:0});b2PulleyJoint.b2_minPulleyLength=b2Settings.b2_lengthUnitsPerMeter;
var b2PulleyJointDef=Class.create();Object.extend(b2PulleyJointDef.prototype,b2JointDef.prototype);Object.extend(b2PulleyJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.groundPoint1=new b2Vec2();this.groundPoint2=new b2Vec2();this.anchorPoint1=new b2Vec2();this.anchorPoint2=new b2Vec2();this.type=b2Joint.e_pulleyJoint;this.groundPoint1.Set(-1.0,1.0);this.groundPoint2.Set(1.0,1.0);this.anchorPoint1.Set(-1.0,0.0);this.anchorPoint2.Set(1.0,0.0);this.maxLength1=0.5*b2PulleyJoint.b2_minPulleyLength;this.maxLength2=0.5*b2PulleyJoint.b2_minPulleyLength;this.ratio=1.0;this.collideConnected=true;},groundPoint1:new b2Vec2(),groundPoint2:new b2Vec2(),anchorPoint1:new b2Vec2(),anchorPoint2:new b2Vec2(),maxLength1:null,maxLength2:null,ratio:null});
var b2RevoluteJoint=Class.create();Object.extend(b2RevoluteJoint.prototype,b2Joint.prototype);Object.extend(b2RevoluteJoint.prototype,{GetAnchor1:function(){var tMat=this.m_body1.m_R;return new b2Vec2(this.m_body1.m_position.x+(tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y),this.m_body1.m_position.y+(tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y));},GetAnchor2:function(){var tMat=this.m_body2.m_R;return new b2Vec2(this.m_body2.m_position.x+(tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y),this.m_body2.m_position.y+(tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y));},GetJointAngle:function(){return this.m_body2.m_rotation-this.m_body1.m_rotation;},GetJointSpeed:function(){return this.m_body2.m_angularVelocity-this.m_body1.m_angularVelocity;},GetMotorTorque:function(invTimeStep){return invTimeStep*this.m_motorImpulse;},SetMotorSpeed:function(speed)
{this.m_motorSpeed=speed;},SetMotorTorque:function(torque)
{this.m_maxMotorTorque=torque;},GetReactionForce:function(invTimeStep)
{var tVec=this.m_ptpImpulse.Copy();tVec.Multiply(invTimeStep);return tVec;},GetReactionTorque:function(invTimeStep)
{return invTimeStep*this.m_limitImpulse;},initialize:function(def){this.m_node1=new b2JointNode();this.m_node2=new b2JointNode();this.m_type=def.type;this.m_prev=null;this.m_next=null;this.m_body1=def.body1;this.m_body2=def.body2;this.m_collideConnected=def.collideConnected;this.m_islandFlag=false;this.m_userData=def.userData;this.K=new b2Mat22();this.K1=new b2Mat22();this.K2=new b2Mat22();this.K3=new b2Mat22();this.m_localAnchor1=new b2Vec2();this.m_localAnchor2=new b2Vec2();this.m_ptpImpulse=new b2Vec2();this.m_ptpMass=new b2Mat22();var tMat;var tX;var tY;tMat=this.m_body1.m_R;tX=def.anchorPoint.x-this.m_body1.m_position.x;tY=def.anchorPoint.y-this.m_body1.m_position.y;this.m_localAnchor1.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor1.y=tX*tMat.col2.x+tY*tMat.col2.y;tMat=this.m_body2.m_R;tX=def.anchorPoint.x-this.m_body2.m_position.x;tY=def.anchorPoint.y-this.m_body2.m_position.y;this.m_localAnchor2.x=tX*tMat.col1.x+tY*tMat.col1.y;this.m_localAnchor2.y=tX*tMat.col2.x+tY*tMat.col2.y;this.m_intialAngle=this.m_body2.m_rotation-this.m_body1.m_rotation;this.m_ptpImpulse.Set(0.0,0.0);this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;this.m_limitPositionImpulse=0.0;this.m_lowerAngle=def.lowerAngle;this.m_upperAngle=def.upperAngle;this.m_maxMotorTorque=def.motorTorque;this.m_motorSpeed=def.motorSpeed;this.m_enableLimit=def.enableLimit;this.m_enableMotor=def.enableMotor;},K:new b2Mat22(),K1:new b2Mat22(),K2:new b2Mat22(),K3:new b2Mat22(),PrepareVelocitySolver:function(){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;this.K1.col1.x=invMass1+invMass2;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass1+invMass2;this.K2.col1.x=invI1*r1Y*r1Y;this.K2.col2.x=-invI1*r1X*r1Y;this.K2.col1.y=-invI1*r1X*r1Y;this.K2.col2.y=invI1*r1X*r1X;this.K3.col1.x=invI2*r2Y*r2Y;this.K3.col2.x=-invI2*r2X*r2Y;this.K3.col1.y=-invI2*r2X*r2Y;this.K3.col2.y=invI2*r2X*r2X;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Invert(this.m_ptpMass);this.m_motorMass=1.0/(invI1+invI2);if(this.m_enableMotor==false)
{this.m_motorImpulse=0.0;}
if(this.m_enableLimit)
{var jointAngle=b2.m_rotation-b1.m_rotation-this.m_intialAngle;if(b2Math.b2Abs(this.m_upperAngle-this.m_lowerAngle)<2.0*b2Settings.b2_angularSlop)
{this.m_limitState=b2Joint.e_equalLimits;}
else if(jointAngle<=this.m_lowerAngle)
{if(this.m_limitState!=b2Joint.e_atLowerLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atLowerLimit;}
else if(jointAngle>=this.m_upperAngle)
{if(this.m_limitState!=b2Joint.e_atUpperLimit)
{this.m_limitImpulse=0.0;}
this.m_limitState=b2Joint.e_atUpperLimit;}
else
{this.m_limitState=b2Joint.e_inactiveLimit;this.m_limitImpulse=0.0;}}
else
{this.m_limitImpulse=0.0;}
if(b2World.s_enableWarmStarting)
{b1.m_linearVelocity.x-=invMass1*this.m_ptpImpulse.x;b1.m_linearVelocity.y-=invMass1*this.m_ptpImpulse.y;b1.m_angularVelocity-=invI1*((r1X*this.m_ptpImpulse.y-r1Y*this.m_ptpImpulse.x)+this.m_motorImpulse+this.m_limitImpulse);b2.m_linearVelocity.x+=invMass2*this.m_ptpImpulse.x;b2.m_linearVelocity.y+=invMass2*this.m_ptpImpulse.y;b2.m_angularVelocity+=invI2*((r2X*this.m_ptpImpulse.y-r2Y*this.m_ptpImpulse.x)+this.m_motorImpulse+this.m_limitImpulse);}
else{this.m_ptpImpulse.SetZero();this.m_motorImpulse=0.0;this.m_limitImpulse=0.0;}
this.m_limitPositionImpulse=0.0;},SolveVelocityConstraints:function(step){var b1=this.m_body1;var b2=this.m_body2;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var oldLimitImpulse;var ptpCdotX=b2.m_linearVelocity.x+(-b2.m_angularVelocity*r2Y)-b1.m_linearVelocity.x-(-b1.m_angularVelocity*r1Y);var ptpCdotY=b2.m_linearVelocity.y+(b2.m_angularVelocity*r2X)-b1.m_linearVelocity.y-(b1.m_angularVelocity*r1X);var ptpImpulseX=-(this.m_ptpMass.col1.x*ptpCdotX+this.m_ptpMass.col2.x*ptpCdotY);var ptpImpulseY=-(this.m_ptpMass.col1.y*ptpCdotX+this.m_ptpMass.col2.y*ptpCdotY);this.m_ptpImpulse.x+=ptpImpulseX;this.m_ptpImpulse.y+=ptpImpulseY;b1.m_linearVelocity.x-=b1.m_invMass*ptpImpulseX;b1.m_linearVelocity.y-=b1.m_invMass*ptpImpulseY;b1.m_angularVelocity-=b1.m_invI*(r1X*ptpImpulseY-r1Y*ptpImpulseX);b2.m_linearVelocity.x+=b2.m_invMass*ptpImpulseX;b2.m_linearVelocity.y+=b2.m_invMass*ptpImpulseY;b2.m_angularVelocity+=b2.m_invI*(r2X*ptpImpulseY-r2Y*ptpImpulseX);if(this.m_enableMotor&&this.m_limitState!=b2Joint.e_equalLimits)
{var motorCdot=b2.m_angularVelocity-b1.m_angularVelocity-this.m_motorSpeed;var motorImpulse=-this.m_motorMass*motorCdot;var oldMotorImpulse=this.m_motorImpulse;this.m_motorImpulse=b2Math.b2Clamp(this.m_motorImpulse+motorImpulse,-step.dt*this.m_maxMotorTorque,step.dt*this.m_maxMotorTorque);motorImpulse=this.m_motorImpulse-oldMotorImpulse;b1.m_angularVelocity-=b1.m_invI*motorImpulse;b2.m_angularVelocity+=b2.m_invI*motorImpulse;}
if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{var limitCdot=b2.m_angularVelocity-b1.m_angularVelocity;var limitImpulse=-this.m_motorMass*limitCdot;if(this.m_limitState==b2Joint.e_equalLimits)
{this.m_limitImpulse+=limitImpulse;}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Max(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{oldLimitImpulse=this.m_limitImpulse;this.m_limitImpulse=b2Math.b2Min(this.m_limitImpulse+limitImpulse,0.0);limitImpulse=this.m_limitImpulse-oldLimitImpulse;}
b1.m_angularVelocity-=b1.m_invI*limitImpulse;b2.m_angularVelocity+=b2.m_invI*limitImpulse;}},SolvePositionConstraints:function(){var oldLimitImpulse;var limitC;var b1=this.m_body1;var b2=this.m_body2;var positionError=0.0;var tMat;tMat=b1.m_R;var r1X=tMat.col1.x*this.m_localAnchor1.x+tMat.col2.x*this.m_localAnchor1.y;var r1Y=tMat.col1.y*this.m_localAnchor1.x+tMat.col2.y*this.m_localAnchor1.y;tMat=b2.m_R;var r2X=tMat.col1.x*this.m_localAnchor2.x+tMat.col2.x*this.m_localAnchor2.y;var r2Y=tMat.col1.y*this.m_localAnchor2.x+tMat.col2.y*this.m_localAnchor2.y;var p1X=b1.m_position.x+r1X;var p1Y=b1.m_position.y+r1Y;var p2X=b2.m_position.x+r2X;var p2Y=b2.m_position.y+r2Y;var ptpCX=p2X-p1X;var ptpCY=p2Y-p1Y;positionError=Math.sqrt(ptpCX*ptpCX+ptpCY*ptpCY);var invMass1=b1.m_invMass;var invMass2=b2.m_invMass;var invI1=b1.m_invI;var invI2=b2.m_invI;this.K1.col1.x=invMass1+invMass2;this.K1.col2.x=0.0;this.K1.col1.y=0.0;this.K1.col2.y=invMass1+invMass2;this.K2.col1.x=invI1*r1Y*r1Y;this.K2.col2.x=-invI1*r1X*r1Y;this.K2.col1.y=-invI1*r1X*r1Y;this.K2.col2.y=invI1*r1X*r1X;this.K3.col1.x=invI2*r2Y*r2Y;this.K3.col2.x=-invI2*r2X*r2Y;this.K3.col1.y=-invI2*r2X*r2Y;this.K3.col2.y=invI2*r2X*r2X;this.K.SetM(this.K1);this.K.AddM(this.K2);this.K.AddM(this.K3);this.K.Solve(b2RevoluteJoint.tImpulse,-ptpCX,-ptpCY);var impulseX=b2RevoluteJoint.tImpulse.x;var impulseY=b2RevoluteJoint.tImpulse.y;b1.m_position.x-=b1.m_invMass*impulseX;b1.m_position.y-=b1.m_invMass*impulseY;b1.m_rotation-=b1.m_invI*(r1X*impulseY-r1Y*impulseX);b1.m_R.Set(b1.m_rotation);b2.m_position.x+=b2.m_invMass*impulseX;b2.m_position.y+=b2.m_invMass*impulseY;b2.m_rotation+=b2.m_invI*(r2X*impulseY-r2Y*impulseX);b2.m_R.Set(b2.m_rotation);var angularError=0.0;if(this.m_enableLimit&&this.m_limitState!=b2Joint.e_inactiveLimit)
{var angle=b2.m_rotation-b1.m_rotation-this.m_intialAngle;var limitImpulse=0.0;if(this.m_limitState==b2Joint.e_equalLimits)
{limitC=b2Math.b2Clamp(angle,-b2Settings.b2_maxAngularCorrection,b2Settings.b2_maxAngularCorrection);limitImpulse=-this.m_motorMass*limitC;angularError=b2Math.b2Abs(limitC);}
else if(this.m_limitState==b2Joint.e_atLowerLimit)
{limitC=angle-this.m_lowerAngle;angularError=b2Math.b2Max(0.0,-limitC);limitC=b2Math.b2Clamp(limitC+b2Settings.b2_angularSlop,-b2Settings.b2_maxAngularCorrection,0.0);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Max(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
else if(this.m_limitState==b2Joint.e_atUpperLimit)
{limitC=angle-this.m_upperAngle;angularError=b2Math.b2Max(0.0,limitC);limitC=b2Math.b2Clamp(limitC-b2Settings.b2_angularSlop,0.0,b2Settings.b2_maxAngularCorrection);limitImpulse=-this.m_motorMass*limitC;oldLimitImpulse=this.m_limitPositionImpulse;this.m_limitPositionImpulse=b2Math.b2Min(this.m_limitPositionImpulse+limitImpulse,0.0);limitImpulse=this.m_limitPositionImpulse-oldLimitImpulse;}
b1.m_rotation-=b1.m_invI*limitImpulse;b1.m_R.Set(b1.m_rotation);b2.m_rotation+=b2.m_invI*limitImpulse;b2.m_R.Set(b2.m_rotation);}
return positionError<=b2Settings.b2_linearSlop&&angularError<=b2Settings.b2_angularSlop;},m_localAnchor1:new b2Vec2(),m_localAnchor2:new b2Vec2(),m_ptpImpulse:new b2Vec2(),m_motorImpulse:null,m_limitImpulse:null,m_limitPositionImpulse:null,m_ptpMass:new b2Mat22(),m_motorMass:null,m_intialAngle:null,m_lowerAngle:null,m_upperAngle:null,m_maxMotorTorque:null,m_motorSpeed:null,m_enableLimit:null,m_enableMotor:null,m_limitState:0});b2RevoluteJoint.tImpulse=new b2Vec2();
var b2RevoluteJointDef=Class.create();Object.extend(b2RevoluteJointDef.prototype,b2JointDef.prototype);Object.extend(b2RevoluteJointDef.prototype,{initialize:function()
{this.type=b2Joint.e_unknownJoint;this.userData=null;this.body1=null;this.body2=null;this.collideConnected=false;this.type=b2Joint.e_revoluteJoint;this.anchorPoint=new b2Vec2(0.0,0.0);this.lowerAngle=0.0;this.upperAngle=0.0;this.motorTorque=0.0;this.motorSpeed=0.0;this.enableLimit=false;this.enableMotor=false;},anchorPoint:null,lowerAngle:null,upperAngle:null,motorTorque:null,motorSpeed:null,enableLimit:null,enableMotor:null});



if (!window['google']) {
window['google'] = {};
}
if (!window['google']['loader']) {
window['google']['loader'] = {};
google.loader.ServiceBase = 'http://www.google.com/uds';
google.loader.GoogleApisBase = 'http://ajax.googleapis.com/ajax';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
google.loader.Secure = false;
google.loader.GoogleLocale = 'www.google.com';
google.loader.ClientLocation = {"latitude":37.454,"longitude":-122.203,"address":{"city":"Atherton","region":"CA","country":"USA","country_code":"US"}};
google.loader.AdditionalParams = '';
google.loader.OriginalAppPath = 'http://mrdoob.com/projects/chromeexperiments/google_gravity/';
(function() {var d=true,e=null,g=false,h=encodeURIComponent,j=window,k=google,m=undefined,n=document;function p(a,b){return a.load=b}var q="push",s="replace",t="charAt",u="ServiceBase",v="name",w="getTime",x="length",y="prototype",z="setTimeout",A="loader",B="substring",C="join",D="toLowerCase";function E(a){if(a in F)return F[a];return F[a]=navigator.userAgent[D]().indexOf(a)!=-1}var F={};function G(a,b){var c=function(){};c.prototype=b[y];a.S=b[y];a.prototype=new c}
function H(a,b){var c=a.G||[];c=c.concat(Array[y].slice.call(arguments,2));if(typeof a.t!="undefined")b=a.t;if(typeof a.s!="undefined")a=a.s;var f=function(){var i=c.concat(Array[y].slice.call(arguments));return a.apply(b,i)};f.G=c;f.t=b;f.s=a;return f}function I(a){a=new Error(a);a.toString=function(){return this.message};return a}function J(a,b){a=a.split(/\./);for(var c=j,f=0;f<a[x]-1;f++){c[a[f]]||(c[a[f]]={});c=c[a[f]]}c[a[a[x]-1]]=b}function K(a,b,c){a[b]=c}if(!L)var L=J;if(!M)var M=K;k[A].u={};L("google.loader.callbacks",k[A].u);var N={},O={};k[A].eval={};L("google.loader.eval",k[A].eval);
p(k,function(a,b,c){function f(r){var o=r.split(".");if(o[x]>2)throw I("Module: '"+r+"' not found!");else if(typeof o[1]!="undefined"){i=o[0];c.packages=c.packages||[];c.packages[q](o[1])}}var i=a;c=c||{};if(a instanceof Array||a&&typeof a=="object"&&typeof a[C]=="function"&&typeof a.reverse=="function")for(var l=0;l<a[x];l++)f(a[l]);else f(a);if(a=N[":"+i]){if(c&&!c.language&&c.locale)c.language=c.locale;if(c&&typeof c.callback=="string"){l=c.callback;if(l.match(/^[[\]A-Za-z0-9._]+$/)){l=j.eval(l);
c.callback=l}}if((l=c&&c.callback!=e)&&!a.r(b))throw I("Module: '"+i+"' must be loaded before DOM onLoad!");else if(l)a.l(b,c)?j[z](c.callback,0):a.load(b,c);else a.l(b,c)||a.load(b,c)}else throw I("Module: '"+i+"' not found!");});L("google.load",k.load);k.R=function(a,b){b?aa(a):P(j,"load",a)};L("google.setOnLoadCallback",k.R);function P(a,b,c){if(a.addEventListener)a.addEventListener(b,c,g);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var f=a["on"+b];a["on"+b]=f!=e?ba([c,f]):c}}
function ba(a){return function(){for(var b=0;b<a[x];b++)a[b]()}}var Q=[];function aa(a){if(Q[x]==0){P(j,"load",R);if(!E("msie")&&!(E("safari")||E("konqueror"))&&E("mozilla")||j.opera)j.addEventListener("DOMContentLoaded",R,g);else if(E("msie"))n.write("<script defer onreadystatechange='google.loader.domReady()' src=//:><\/script>");else(E("safari")||E("konqueror"))&&j[z](ca,10)}Q[q](a)}
k[A].M=function(){var a=j.event.srcElement;if(a.readyState=="complete"){a.onreadystatechange=e;a.parentNode.removeChild(a);R()}};L("google.loader.domReady",k[A].M);var da={loaded:d,complete:d};function ca(){if(da[n.readyState])R();else Q[x]>0&&j[z](ca,10)}function R(){for(var a=0;a<Q[x];a++)Q[a]();Q.length=0}
k[A].e=function(a,b,c){if(c){var f;if(a=="script"){f=n.createElement("script");f.type="text/javascript";f.src=b}else if(a=="css"){f=n.createElement("link");f.type="text/css";f.href=b;f.rel="stylesheet"}(a=n.getElementsByTagName("head")[0])||(a=n.body.parentNode.appendChild(n.createElement("head")));a.appendChild(f)}else if(a=="script")n.write('<script src="'+b+'" type="text/javascript"><\/script>');else a=="css"&&n.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
L("google.loader.writeLoadTag",k[A].e);k[A].O=function(a){O=a};L("google.loader.rfm",k[A].O);k[A].Q=function(a){for(var b in a)if(typeof b=="string"&&b&&b[t](0)==":"&&!N[b])N[b]=new T(b[B](1),a[b])};L("google.loader.rpl",k[A].Q);k[A].P=function(a){if((a=a.specs)&&a[x])for(var b=0;b<a[x];++b){var c=a[b];if(typeof c=="string")N[":"+c]=new U(c);else{c=new V(c[v],c.baseSpec,c.customSpecs);N[":"+c[v]]=c}}};L("google.loader.rm",k[A].P);k[A].loaded=function(a){N[":"+a.module].j(a)};
L("google.loader.loaded",k[A].loaded);k[A].L=function(){var a=(new Date)[w](),b=Math.floor(Math.random()*1E7);return"qid="+(a.toString(16)+b.toString(16))};L("google.loader.createGuidArg_",k[A].L);J("google_exportSymbol",J);J("google_exportProperty",K);k[A].b={};L("google.loader.themes",k[A].b);k[A].b.A="http://www.google.com/cse/style/look/bubblegum.css";M(k[A].b,"BUBBLEGUM",k[A].b.A);k[A].b.C="http://www.google.com/cse/style/look/greensky.css";M(k[A].b,"GREENSKY",k[A].b.C);k[A].b.B="http://www.google.com/cse/style/look/espresso.css";
M(k[A].b,"ESPRESSO",k[A].b.B);k[A].b.F="http://www.google.com/cse/style/look/shiny.css";M(k[A].b,"SHINY",k[A].b.F);k[A].b.D="http://www.google.com/cse/style/look/minimalist.css";M(k[A].b,"MINIMALIST",k[A].b.D);function U(a){this.a=a;this.p=[];this.o={};this.c={};this.k=d;this.d=-1}
U[y].g=function(a,b){var c="";if(b!=m){if(b.language!=m)c+="&hl="+h(b.language);if(b.nocss!=m)c+="&output="+h("nocss="+b.nocss);if(b.nooldnames!=m)c+="&nooldnames="+h(b.nooldnames);if(b.packages!=m)c+="&packages="+h(b.packages);if(b.callback!=e)c+="&async=2";if(b.style!=m)c+="&style="+h(b.style);if(b.other_params!=m)c+="&"+b.other_params}if(!this.k){if(k[this.a]&&k[this.a].JSHash)c+="&sig="+h(k[this.a].JSHash);b=[];for(var f in this.o)f[t](0)==":"&&b[q](f[B](1));for(f in this.c)f[t](0)==":"&&b[q](f[B](1));
c+="&have="+h(b[C](","))}return k[A][u]+"/?file="+this.a+"&v="+a+k[A].AdditionalParams+c};U[y].w=function(a){var b=e;if(a)b=a.packages;var c=e;if(b)if(typeof b=="string")c=[a.packages];else if(b[x]){c=[];for(a=0;a<b[x];a++)typeof b[a]=="string"&&c[q](b[a][s](/^\s*|\s*$/,"")[D]())}c||(c=["default"]);b=[];for(a=0;a<c[x];a++)this.o[":"+c[a]]||b[q](c[a]);return b};
p(U[y],function(a,b){var c=this.w(b),f=b&&b.callback!=e;if(f)var i=new W(b.callback);for(var l=[],r=c[x]-1;r>=0;r--){var o=c[r];f&&i.H(o);if(this.c[":"+o]){c.splice(r,1);f&&this.c[":"+o][q](i)}else l[q](o)}if(c[x]){if(b&&b.packages)b.packages=c.sort()[C](",");if(!b&&O[":"+this.a]!=e&&O[":"+this.a].versions[":"+a]!=e&&!k[A].AdditionalParams&&this.k){a=O[":"+this.a];k[this.a]=k[this.a]||{};for(var S in a.properties)if(S&&S[t](0)==":")k[this.a][S[B](1)]=a.properties[S];k[A].e("script",k[A][u]+a.path+
a.js,f);a.css&&k[A].e("css",k[A][u]+a.path+a.css,f)}else if(!b||!b.autoloaded)k[A].e("script",this.g(a,b),f);if(this.k){this.k=g;this.d=(new Date)[w]();if(this.d%100!=1)this.d=-1}for(r=0;r<l[x];r++){o=l[r];this.c[":"+o]=[];f&&this.c[":"+o][q](i)}}});
U[y].j=function(a){if(this.d!=-1){X("al_"+this.a,"jl."+((new Date)[w]()-this.d),d);this.d=-1}this.p=this.p.concat(a.components);k[A][this.a]||(k[A][this.a]={});k[A][this.a].packages=this.p.slice(0);for(var b=0;b<a.components[x];b++){this.o[":"+a.components[b]]=d;var c=this.c[":"+a.components[b]];if(c){for(var f=0;f<c[x];f++)c[f].K(a.components[b]);delete this.c[":"+a.components[b]]}}X("hl",this.a)};U[y].l=function(a,b){return this.w(b)[x]==0};U[y].r=function(){return d};
function W(a){this.J=a;this.m={};this.q=0}W[y].H=function(a){this.q++;this.m[":"+a]=d};W[y].K=function(a){if(this.m[":"+a]){this.m[":"+a]=g;this.q--;this.q==0&&j[z](this.J,0)}};function V(a,b,c){this.name=a;this.I=b;this.n=c;this.v=this.h=g;this.i=[];k[A].u[this[v]]=H(this.j,this)}G(V,U);p(V[y],function(a,b){var c=b&&b.callback!=e;if(c){this.i[q](b.callback);b.callback="google.loader.callbacks."+this[v]}else this.h=d;if(!b||!b.autoloaded)k[A].e("script",this.g(a,b),c);X("el",this[v])});V[y].l=function(a,b){return b&&b.callback!=e?this.v:this.h};V[y].j=function(){this.v=d;for(var a=0;a<this.i[x];a++)j[z](this.i[a],0);this.i=[]};
var Y=function(a,b){return a.string?h(a.string)+"="+h(b):a.regex?b[s](/(^.*$)/,a.regex):""};V[y].g=function(a,b){return this.N(this.z(a),a,b)};
V[y].N=function(a,b,c){var f="";if(a.key)f+="&"+Y(a.key,k[A].ApiKey);if(a.version)f+="&"+Y(a.version,b);b=k[A].Secure&&a.ssl?a.ssl:a.uri;if(c!=e)for(var i in c)if(a.params[i])f+="&"+Y(a.params[i],c[i]);else if(i=="other_params")f+="&"+c[i];else if(i=="base_domain")b="http://"+c[i]+a.uri[B](a.uri.indexOf("/",7));k[this[v]]={};if(b.indexOf("?")==-1&&f)f="?"+f[B](1);return b+f};V[y].r=function(a){return this.z(a).deferred};V[y].z=function(a){if(this.n)for(var b=0;b<this.n[x];++b){var c=this.n[b];if((new RegExp(c.pattern)).test(a))return c}return this.I};function T(a,b){this.a=a;this.f=b;this.h=g}G(T,U);p(T[y],function(a,b){this.h=d;k[A].e("script",this.g(a,b),g)});T[y].l=function(){return this.h};T[y].j=function(){};T[y].g=function(a,b){if(!this.f.versions[":"+a]){if(this.f.aliases){var c=this.f.aliases[":"+a];if(c)a=c}if(!this.f.versions[":"+a])throw I("Module: '"+this.a+"' with version '"+a+"' not found!");}a=k[A].GoogleApisBase+"/libs/"+this.a+"/"+a+"/"+this.f.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"];X("el",this.a);return a};
T[y].r=function(){return g};var ea=g,Z=[],fa=(new Date)[w](),X=function(a,b,c){if(!ea){P(j,"unload",ga);ea=d}if(c){if(!k[A].Secure&&(!k[A].Options||k[A].Options.csi===g)){a=a[D]()[s](/[^a-z0-9_.]+/g,"_");b=b[D]()[s](/[^a-z0-9_.]+/g,"_");j[z](H($,e,"http://csi.gstatic.com/csi?s=uds&v=2&action="+h(a)+"&it="+h(b)),1E4)}}else{Z[q]("r"+Z[x]+"="+h(a+(b?"|"+b:"")));j[z](ga,Z[x]>5?0:15E3)}},ga=function(){if(Z[x]){$(k[A][u]+"/stats?"+Z[C]("&")+"&nc="+(new Date)[w]()+"_"+((new Date)[w]()-fa));Z.length=0}},$=function(a){var b=new Image,
c=ha++;ia[c]=b;b.onload=b.onerror=function(){delete ia[c]};b.src=a;b=e},ia={},ha=0;J("google.loader.recordStat",X);J("google.loader.createImageForLogging",$);

}) ();google.loader.rm({"specs":[{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},"feeds",{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},"spreadsheets","gdata","visualization",{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"search",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.google.com/maps/api/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},"annotations_v2","orkut","language","earth",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}},"ads","elements"]});
google.loader.rfm({":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/e291a634414cb5ef1c9f3b5424b8ac4b/","js":"default+en.I.js","css":"default.css","properties":{":JSHash":"e291a634414cb5ef1c9f3b5424b8ac4b",":Version":"1.0"}},":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/457a1b12dfe20ca00fd65f9ad5d52ccd/","js":"default+en.I.js","css":"default.css","properties":{":JSHash":"457a1b12dfe20ca00fd65f9ad5d52ccd",":NoOldNames":false,":Version":"1.0"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/cd6e6992328d3619ee31352c39a90b10/","js":"default+en.I.js","properties":{":JSHash":"cd6e6992328d3619ee31352c39a90b10",":Version":"1.0"}},":spreadsheets":{"versions":{":0":"1",":0.3":"1"},"path":"/api/spreadsheets/0.3/8331b0bbcc74776270648505340e9200/","js":"default.I.js","properties":{":JSHash":"8331b0bbcc74776270648505340e9200",":Version":"0.3"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/36b9e8d98246edaa2aac0e8ecc4dcec7/","js":"default.I.js","properties":{":JSHash":"36b9e8d98246edaa2aac0e8ecc4dcec7",":Version":"1.0"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/95e76f84c9532973f104478d1e810796/","js":"default+en.I.js","properties":{":JSHash":"95e76f84c9532973f104478d1e810796",":Version":"1.0"}}});
google.loader.rpl({":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1.8":"1.8.3",":1":"1.8.3"}},":yui":{"versions":{":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"}},"aliases":{":2":"2.8.0r4",":2.7":"2.7.0",":2.6":"2.6.0",":2.8":"2.8.0r4",":2.8.0":"2.8.0r4"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":mootools":{"versions":{":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.11":"1.1.1",":1.2":"1.2.4",":1.1":"1.1.2"}},":jqueryui":{"versions":{":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1.7":"1.7.2",":1":"1.7.2",":1.6":"1.6.0",":1.5":"1.5.3"}},":chrome-frame":{"versions":{":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":prototype":{"versions":{":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1.6.1":"1.6.1.0",":1":"1.6.1.0",":1.6":"1.6.1.0",":1.6.0":"1.6.0.3"}},":jquery":{"versions":{":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1":"1.4.2",":1.4":"1.4.2",":1.3":"1.3.2",":1.2":"1.2.6"}},":dojo":{"versions":{":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1":"1.4.1",":1.4":"1.4.1",":1.3":"1.3.2",":1.2":"1.2.3",":1.1":"1.1.1"}}});
}
if (window['google'] != undefined && window['google']['loader'] != undefined) {
if (!window['google']['search']) {
window['google']['search'] = {};
google.search.Version = '1.0';
google.search.NoOldNames = false;
google.search.JSHash = '457a1b12dfe20ca00fd65f9ad5d52ccd';
google.search.LoadArgs = 'file\75uds.js\46v\0750.1';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
}
google.loader.writeLoadTag("script", google.loader.ServiceBase + "/api/search/1.0/457a1b12dfe20ca00fd65f9ad5d52ccd/default+en.I.js", false);
}



(function() {
var _UDS_CONST_LOCALE = 'en';
var _UDS_CONST_SHORT_DATE_PATTERN = 'MDY'; 
var _UDS_MSG_SEARCHER_IMAGE = ('Image'); 
var _UDS_MSG_SEARCHER_WEB = ('Web'); 
var _UDS_MSG_SEARCHER_BLOG = ('Blog'); 
var _UDS_MSG_SEARCHER_VIDEO = ('Video'); 
var _UDS_MSG_SEARCHER_LOCAL = ('Local'); 
var _UDS_MSG_SEARCHCONTROL_SAVE = ('save'); 
var _UDS_MSG_SEARCHCONTROL_KEEP = ('keep'); 
var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('include'); 
var _UDS_MSG_SEARCHCONTROL_COPY = ('copy'); 
var _UDS_MSG_SEARCHCONTROL_CLOSE = ('close'); 
var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('Sponsored Links'); 
var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('see more...'); 
var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('clipped from Google'); 
var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('Search location'); 
var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('Disable address lookup'); 
var _UDS_MSG_SEARCHER_NEWS = ('News'); 
function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {return ('' + AGE_MINUTES_AGO + ' minutes ago');} 
var _UDS_MSG_ONE_HOUR_AGO = ('1 hour ago'); 
function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {return ('' + AGE_HOURS_AGO + ' hours ago');} 
function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {return ('all ' + NUMBER + ' related');} 
var _UDS_MSG_NEWS_RELATED = ('Related Articles'); 
var _UDS_MSG_BRANDING_STRING = ('powered by Google'); 
var _UDS_MSG_SORT_BY_DATE = ('Sort by date'); 
var _UDS_MSG_MONTH_ABBR_JAN = ('Jan'); 
var _UDS_MSG_MONTH_ABBR_FEB = ('Feb'); 
var _UDS_MSG_MONTH_ABBR_MAR = ('Mar'); 
var _UDS_MSG_MONTH_ABBR_APR = ('Apr'); 
var _UDS_MSG_MONTH_ABBR_MAY = ('May'); 
var _UDS_MSG_MONTH_ABBR_JUN = ('Jun'); 
var _UDS_MSG_MONTH_ABBR_JUL = ('Jul'); 
var _UDS_MSG_MONTH_ABBR_AUG = ('Aug'); 
var _UDS_MSG_MONTH_ABBR_SEP = ('Sep'); 
var _UDS_MSG_MONTH_ABBR_OCT = ('Oct'); 
var _UDS_MSG_MONTH_ABBR_NOV = ('Nov'); 
var _UDS_MSG_MONTH_ABBR_DEC = ('Dec'); 
var _UDS_MSG_DIRECTIONS = ('directions'); 
var _UDS_MSG_CLEAR_RESULTS = ('clear results'); 
var _UDS_MSG_SHOW_ONE_RESULT = ('show one result'); 
var _UDS_MSG_SHOW_MORE_RESULTS = ('show more results'); 
var _UDS_MSG_SHOW_ALL_RESULTS = ('show all results'); 
var _UDS_MSG_SETTINGS = ('settings'); 
var _UDS_MSG_SEARCH = ('search'); 
var _UDS_MSG_SEARCH_UC = ('Search'); 
var _UDS_MSG_POWERED_BY = ('powered by'); 
function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {return ('Business listings provided by ' + LOCAL_RESULTS_PROVIDER + '');} 
var _UDS_MSG_SEARCHER_BOOK = ('Book'); 
function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {return ('Page ' + FOUND_ON_PAGE + '');} 
function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {return ('' + PAGE_COUNT + ' pages');} 
var _UDS_MSG_SEARCHER_BY = ('by'); 
var _UDS_MSG_SEARCHER_CODE = ('Code'); 
var _UDS_MSG_UNKNOWN_LICENSE = ('Unknown License'); 
var _UDS_MSG_SEARCHER_GSA = ('Search Appliance'); 
var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('More results'); 
var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('Previous'); 
var _UDS_MSG_SEARCHCONTROL_NEXT = ('Next'); 
var _UDS_MSG_GET_DIRECTIONS = ('Get directions'); 
var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('To here'); 
var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('From here'); 
var _UDS_MSG_CLEAR_RESULTS_UC = ('Clear results'); 
var _UDS_MSG_SEARCH_THE_MAP = ('search the map'); 
var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('scroll through results'); 
var _UDS_MSG_EDIT_TAGS = ('edit tags'); 
var _UDS_MSG_TAG_THIS_SEARCH = ('tag this search'); 
var _UDS_MSG_SEARCH_STRING = ('search string'); 
var _UDS_MSG_OPTIONAL_LABEL = ('optional label'); 
var _UDS_MSG_DELETE = ('delete'); 
var _UDS_MSG_DELETED = ('deleted'); 
var _UDS_MSG_CANCEL = ('cancel'); 
var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('upload your own video'); 
var _UDS_MSG_IM_DONE_WATCHING = ('i\047m done watching this'); 
var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('close video player'); 
var _UDS_MSG_NO_RESULTS = ('No Results'); 
var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('This Custom Search Engine is loading. Try again in a few seconds.'); 
var _UDS_MSG_COUPONS = ('Coupons'); 
var _UDS_MSG_BACK = ('back'); 
var _UDS_MSG_SUBSCRIBE = ('Subscribe'); 
var _UDS_MSG_SEARCHER_PATENT = ('Patent'); 
var _UDS_MSG_USPAT = ('US Pat.'); 
var _UDS_MSG_USPAT_APP = ('US Pat. App'); 
var _UDS_MSG_PATENT_FILED = ('Filed'); 
var _UDS_MSG_ADS_BY_GOOGLE = ('Ads by Google'); 
var _UDS_MSG_SET_DEFAULT_LOCATION = ('Set default location'); 
var _UDS_MSG_NEWSCAT_TOPSTORIES = ('Top Stories'); 
var _UDS_MSG_NEWSCAT_WORLD = ('World'); 
var _UDS_MSG_NEWSCAT_NATION = ('Nation'); 
var _UDS_MSG_NEWSCAT_BUSINESS = ('Business'); 
var _UDS_MSG_NEWSCAT_SCITECH = ('Sci/Tech'); 
var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('Entertainment'); 
var _UDS_MSG_NEWSCAT_HEALTH = ('Health'); 
var _UDS_MSG_NEWSCAT_SPORTS = ('Sports'); 
var _UDS_MSG_NEWSCAT_POLITICS = ('Politics');
var b=true,c=null,g=false,i=encodeURIComponent,j=google_exportSymbol,aa=_UDS_CONST_SHORT_DATE_PATTERN,k=window,m=google,ba=navigator,o=undefined,ca=parseInt,da=parseFloat,ea=_UDS_CONST_LOCALE,p=document,fa=decodeURIComponent,q=Math;function ga(a,d){return a.onload=d}function ha(a,d){return a.onreadystatechange=d}function ia(a,d){return a.input=d}function ja(a,d){return a.width=d}function r(a,d){return a.innerHTML=d}function ka(a,d){return a.value=d}function la(a,d){return a.type=d}
function ma(a,d){return a.visibility=d}function s(a,d){return a.title=d}function t(a,d){return a.className=d}function na(a,d){return a.checked=d}function oa(a,d){return a.onclick=d}function pa(a,d){return a.display=d}function qa(a,d){return a.execute=d}function u(a,d){return a.height=d}
var v="appendChild",ra="push",sa="clearTimeout",w="input",x="width",ta="round",z="replace",ua="floor",va="content",xa="value",ya="indexOf",za="match",Aa="readyState",Ba="focus",A="createElement",C="setAttribute",Ca="cloneNode",Da="type",Ea="recordStat",Fa="ServiceBase",Ga="getTime",D="length",Ha="title",E="prototype",F="cursor",Ia="className",Ja="Version",Ka="checked",La="setTimeout",Ma="document",Na="split",Oa="userAgent",Pa="location",Qa="getComputedStyle",G="style",Ra="close",H="search",I="call",
J="loader",Sa="currentStyle",Ta="console",Ua="action",Va="apply",Wa="navigator",K="CurrentLocale",L="execute",Xa="height",Ya="toLowerCase",Za="event",M;if(!m[H].NoOldNames){j("UDS_ServiceBase",m[J][Fa]);j("UDS_OriginalAppPath",m[J].OriginalAppPath);j("UDS_ApiKey",m[J].ApiKey);j("UDS_KeyVerified",m[J].KeyVerified);j("UDS_LoadFailure",m[J].LoadFailure);j("UDS_CurrentLocale",ea);j("UDS_ShortDatePattern",aa);j("UDS_Version",m[H][Ja]);j("UDS_JSHash",m[H].JSHash)}if(!N)var N=j;if(!O)var O=google_exportProperty;var P={};P.blank="&nbsp;";P.image=_UDS_MSG_SEARCHER_IMAGE;P.web=_UDS_MSG_SEARCHER_WEB;P.blog=_UDS_MSG_SEARCHER_BLOG;P.video=_UDS_MSG_SEARCHER_VIDEO;P.local=_UDS_MSG_SEARCHER_LOCAL;P.news=_UDS_MSG_SEARCHER_NEWS;P.book=_UDS_MSG_SEARCHER_BOOK;P.patent="Patent";P["ads-by-google"]=_UDS_MSG_ADS_BY_GOOGLE;P.cse="Custom Search Control";P.save=_UDS_MSG_SEARCHCONTROL_SAVE;P.keep=_UDS_MSG_SEARCHCONTROL_KEEP;P.include=_UDS_MSG_SEARCHCONTROL_INCLUDE;P.copy=_UDS_MSG_SEARCHCONTROL_COPY;P.close=_UDS_MSG_SEARCHCONTROL_CLOSE;
P["sponsored-links"]=_UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;P["see-more"]=_UDS_MSG_SEARCHCONTROL_SEE_MORE;P.watermark=_UDS_MSG_SEARCHCONTROL_WATERMARK;P["search-location"]=_UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;P["disable-address-lookup"]=_UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;P["sort-by-date"]=_UDS_MSG_SORT_BY_DATE;P.pbg=_UDS_MSG_BRANDING_STRING;P["n-minutes-ago"]=_UDS_MSG_MINUTES_AGO;P["n-hours-ago"]=_UDS_MSG_HOURS_AGO;P["one-hour-ago"]=_UDS_MSG_ONE_HOUR_AGO;P["all-n-related"]=_UDS_MSG_NEWS_ALL_N_RELATED;
P["related-articles"]=_UDS_MSG_NEWS_RELATED;P["page-count"]=_UDS_MSG_TOTAL_PAGE_COUNT;var Q=[];Q[0]=_UDS_MSG_MONTH_ABBR_JAN;Q[1]=_UDS_MSG_MONTH_ABBR_FEB;Q[2]=_UDS_MSG_MONTH_ABBR_MAR;Q[3]=_UDS_MSG_MONTH_ABBR_APR;Q[4]=_UDS_MSG_MONTH_ABBR_MAY;Q[5]=_UDS_MSG_MONTH_ABBR_JUN;Q[6]=_UDS_MSG_MONTH_ABBR_JUL;Q[7]=_UDS_MSG_MONTH_ABBR_AUG;Q[8]=_UDS_MSG_MONTH_ABBR_SEP;Q[9]=_UDS_MSG_MONTH_ABBR_OCT;Q[10]=_UDS_MSG_MONTH_ABBR_NOV;Q[11]=_UDS_MSG_MONTH_ABBR_DEC;P["month-abbr"]=Q;P.directions=_UDS_MSG_DIRECTIONS;
P["clear-results"]=_UDS_MSG_CLEAR_RESULTS;P["show-one-result"]=_UDS_MSG_SHOW_ONE_RESULT;P["show-more-results"]=_UDS_MSG_SHOW_MORE_RESULTS;P["show-all-results"]=_UDS_MSG_SHOW_ALL_RESULTS;P.settings=_UDS_MSG_SETTINGS;P.search=_UDS_MSG_SEARCH;P["search-uc"]=_UDS_MSG_SEARCH_UC;P["powered-by"]=_UDS_MSG_POWERED_BY;P.sa=_UDS_MSG_SEARCHER_GSA;P.by=_UDS_MSG_SEARCHER_BY;P.code=_UDS_MSG_SEARCHER_CODE;P["unknown-license"]=_UDS_MSG_UNKNOWN_LICENSE;P["more-results"]=_UDS_MSG_SEARCHCONTROL_MORERESULTS;
P.previous=_UDS_MSG_SEARCHCONTROL_PREVIOUS;P.next=_UDS_MSG_SEARCHCONTROL_NEXT;P["get-directions"]=_UDS_MSG_GET_DIRECTIONS;P["to-here"]=_UDS_MSG_GET_DIRECTIONS_TO_HERE;P["from-here"]=_UDS_MSG_GET_DIRECTIONS_FROM_HERE;P["clear-results-uc"]=_UDS_MSG_CLEAR_RESULTS_UC;P["search-the-map"]=_UDS_MSG_SEARCH_THE_MAP;P["scroll-results"]=_UDS_MSG_SCROLL_THROUGH_RESULTS;P["edit-tags"]=_UDS_MSG_EDIT_TAGS;P["tag-search"]=_UDS_MSG_TAG_THIS_SEARCH;P["search-string"]=_UDS_MSG_SEARCH_STRING;P["optional-label"]=_UDS_MSG_OPTIONAL_LABEL;
P["delete"]=_UDS_MSG_DELETE;P.deleted=_UDS_MSG_DELETED;P.cancel=_UDS_MSG_CANCEL;P["upload-video"]=_UDS_MSG_UPLOAD_YOUR_VIDEOS;P["im-done"]=_UDS_MSG_IM_DONE_WATCHING;P["close-player"]=_UDS_MSG_CLOSE_VIDEO_PLAYER;P["no-results"]=_UDS_MSG_NO_RESULTS;P["linked-cse-error-results"]=_UDS_MSG_LINKEDCSE_ERROR_RESULTS;P.back=_UDS_MSG_BACK;P.subscribe=_UDS_MSG_SUBSCRIBE;P["us-pat"]="US Pat.";P["us-pat-app"]="US Pat. App";P["us-pat-filed"]="Filed";function $a(a,d){var e=function(){};e.prototype=d[E];a.prototype=new e;a[E].Mg=function(f){var h=Array[E].splice[Va](arguments,[1,arguments[D]]);return f[Va](a,h)}}var _json_cache_defeater_=(new Date)[Ga](),_json_request_require_prep=b;function ab(a,d){bb("msie")&&cb("msie 6.0")?k[La](R(this,db,[a,d]),0):db(a,d)}function eb(a){_json_request_require_prep=g;ab(a,c);_json_request_require_prep=b}
function db(a,d){var e=p.getElementsByTagName("head")[0];e||(e=p.body.parentNode[v](p[A]("head")));var f=p[A]("script");la(f,"text/javascript");f.charset="utf-8";a=_json_request_require_prep?a+"&key="+m[J].ApiKey+"&v="+d:a;if(fb()||gb())a=a+"&nocache="+_json_cache_defeater_++;f.src=a;var h=function(){ga(f,c);f.parentNode.removeChild(f);delete f};a=function(l){l=(l?l:k[Za]).target?(l?l:k[Za]).target:(l?l:k[Za]).srcElement;if(l[Aa]=="loaded"||l[Aa]=="complete"){ha(l,c);h()}};if(ba.product=="Gecko")ga(f,
h);else ha(f,a);e[v](f)}function hb(a,d){return function(){return d[Va](a,arguments)}}function R(a,d,e){return function(){return d[Va](a,e)}}function ib(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function jb(a,d){if(a)try{ib(a);a[v](d)}catch(e){}return d}function T(a,d){try{a[v](d)}catch(e){}return d}function kb(a){return p.createTextNode(a?a:"")}function U(a,d){var e=p[A]("div");if(a)r(e,a);if(d)t(e,d);return e}function lb(a,d){var e=p[A]("div");a&&T(e,kb(a));if(d)t(e,d);return e}
function V(a){var d=p[A]("div");if(a)t(d,a);return d}function mb(a,d){var e=p[A]("span");a&&T(e,kb(a));if(d)t(e,d);return e}function nb(a,d,e){var f=p[A]("table");f[C]("cellSpacing",a?a:0);f[C]("cellPadding",d?d:0);if(e)t(f,e);return f}function ob(a,d,e){(a=a.insertRow(-1))||alert(a);for(var f=0;f<d;f++)X(a,e);return a}function X(a,d){a=a.insertCell(-1);if(d)t(a,d);return a}function pb(a){var d=p[A]("td");if(a)t(d,a);return d}
function qb(a,d,e,f){var h=p[A]("img");h.src=a;if(d)ja(h,d);if(e)u(h,e);if(f)t(h,f);return h}function rb(a,d,e,f,h){var l=p[A]("a");l.href=a;if(d)f?T(l,mb(d,f)):T(l,kb(d));if(e)l.target=e;if(h)s(l,h);return l}function Y(a,d,e,f,h){var l=U(c,f),n=p[A]("a");n.href=a;r(n,d);if(f)t(n,f);if(e)n.target=e;if(h)s(n,h);l[v](n);return l}function sb(a,d,e,f,h){var l=U(c,f),n=p[A]("a");n.href=a;d&&T(n,kb(d));if(f)t(n,f);if(e)n.target=e;if(h)s(n,h);l[v](n);return l}
function tb(a){var d=p[A]("form");if(a)t(d,a);return d}function ub(a,d){var e=p[A]("input");la(e,"submit");ka(e,a);if(d)t(e,d);return e}function vb(a,d,e){var f=p[A]("input");f[C]("autoComplete","off");la(f,"text");if(a==-1)Z(f,"util-css-expand");else f.size=a>0?a:10;d&&wb(f,d);if(e)ka(f,e);return f}function xb(a,d,e,f){var h=p[A]("input");la(h,"checkbox");h.name=a;ka(h,d);if(f)t(h,f);if(e)na(h,e);return h}function yb(a,d){t(a,d)}function wb(a,d){Z(a,d)}function zb(a,d){$(a,d)}
function Z(a,d){var e;a:{if(!(a==c||a[Ia]==c)){e=a[Ia][Na](" ");for(var f=0;f<e[D];f++)if(e[f]==d){e=b;break a}}e=g}e||(a.className+=" "+d)}function $(a,d){if(a[Ia]!=c){for(var e=a[Ia][Na](" "),f=[],h=g,l=0;l<e[D];l++)if(e[l]!=d)e[l]&&f[ra](e[l]);else h=b;if(h)t(a,f.join(" "))}}function Ab(a){if(Bb!="")return Bb;var d=a[Ya]()[Na](".");if(d[D]<2)Bb=".com";a=d.pop();d=d.pop();return Bb=a[D]==2?Cb[d]&&Cb[d][a]==1?"."+d+"."+a:"."+a:".com"}
var Bb="",Cb={pf:{Vg:1,Zg:1,hh:1,id:1,ih:1,"in":1,kh:1,mh:1,nh:1,oh:1,rh:1,Ah:1,Ph:1,Th:1,Uh:1,Yh:1,Zh:1,bi:1},Wg:{Ng:1,Pg:1,Rg:1,Sg:1,Tg:1,Ug:1,pf:1,$g:1,"do":1,ah:1,bh:1,dh:1,eh:1,fh:1,gh:1,lh:1,sh:1,th:1,uh:1,vh:1,wh:1,xh:1,yh:1,zh:1,Ch:1,Dh:1,Eh:1,Fh:1,Gh:1,Hh:1,Kh:1,Mh:1,Oh:1,Qh:1,Rh:1,Sh:1,Wh:1,Xh:1,ai:1},Bh:{Og:1}};function bb(a){if(a in Db)return Db[a];return Db[a]=ba[Oa][Ya]()[ya](a)!=-1}function cb(a){if(a in Eb)return Eb[a];return Eb[a]=ba.appVersion[Ya]()[ya](a)!=-1}var Db={},Eb={};
function fb(){return bb("msie")}function gb(){return bb("safari")||bb("konqueror")}var Fb,Gb;if(k.Lg){Fb=b;if(k.XMLHttpRequest)Gb=b}function Hb(a){this.bc=a+"branding";this.Sb=a+"branding-vertical";this.jh=a+"branding-img";this.Vh=a+"branding-user-defined";this.qe=a+"branding-img-noclear";this.of=a+"branding-clickable";this.text=a+"branding-text"};m[H].a=function(){this.fa=this.Xg=c;this.Fc=this.Gg=0;this.ke=b;this.M={width:100,height:75};this.Fa=m[H].a.db;this.we=1;this.S(m[H].a.X);this.$d();this.gwsUrl=this.u=this.H=this.Lh=this.w=this.Kb=this.Cb=this.bb=this.tc=this.Pb=this.ic=this.gc=c;this.pa=[];this.me=typeof k==="object"&&k[Pa]&&k[Pa].hostname&&k[Pa].hostname!=""?Ab(k[Pa].hostname):".com";this.rb=this.lb=c};N("google.search.Search",m[H].a);m[H].a.Jc=m[J][Fa];O(m[H].a,"BASE",m[H].a.Jc);m[H].a.la="large";O(m[H].a,"LARGE_RESULTSET",m[H].a.la);
m[H].a.X="small";O(m[H].a,"SMALL_RESULTSET",m[H].a.X);m[H].a.Ma="filtered_cse";O(m[H].a,"FILTERED_CSE_RESULTSET",m[H].a.Ma);m[H].a.Te=8;O(m[H].a,"LARGE_RESULTS",m[H].a.Te);m[H].a.cf=4;O(m[H].a,"SMALL_RESULTS",m[H].a.cf);m[H].a.Ne=10;O(m[H].a,"FILTERED_CSE_RESULTS",m[H].a.Ne);m[H].a.od=5E3;O(m[H].a,"KEEP_SWEEPER_DELAY",m[H].a.od);m[H].a.We="_top";O(m[H].a,"LINK_TARGET_TOP",m[H].a.We);m[H].a.Ve="_self";O(m[H].a,"LINK_TARGET_SELF",m[H].a.Ve);m[H].a.Ue="_parent";O(m[H].a,"LINK_TARGET_PARENT",m[H].a.Ue);
m[H].a.db="_blank";O(m[H].a,"LINK_TARGET_BLANK",m[H].a.db);m[H].a.eb="order-by-relevance";O(m[H].a,"ORDER_BY_RELEVANCE",m[H].a.eb);m[H].a.ma="order-by-date";O(m[H].a,"ORDER_BY_DATE",m[H].a.ma);m[H].a.rd="order-by-ascending-date";O(m[H].a,"ORDER_BY_ASCENDING_DATE",m[H].a.rd);m[H].a.Db="restrict-type";O(m[H].a,"RESTRICT_TYPE",m[H].a.Db);m[H].a.Ub="restrict-safesearch";O(m[H].a,"RESTRICT_SAFESEARCH",m[H].a.Ub);m[H].a.Wb="active";O(m[H].a,"SAFESEARCH_STRICT",m[H].a.Wb);m[H].a.Vb="off";
O(m[H].a,"SAFESEARCH_OFF",m[H].a.Vb);m[H].a.Ad="moderate";O(m[H].a,"SAFESEARCH_MODERATE",m[H].a.Ad);m[H].a.Na="restrict-extended";O(m[H].a,"RESTRICT_EXTENDED_ARGS",m[H].a.Na);m[H].a.Ag=P;O(m[H].a,"strings",m[H].a.Ag);m[H].a[E].dg=function(){var a=this.na+"?hl="+m[H][K]+"&source=uds";a+=this.u?this.u:"&q=";return this.wa&&this.wa!=""?this.wa:a};m[H].a[E].sg=function(a){this.H=a==c||a==""?c:a};O(m[H].a[E],"setQueryAddition",m[H].a[E].sg);
m[H].a[E].ya=function(a,d,e){a=m[H].a.Jc+this.Ba+"?callback="+a+"&context="+d+"&lstkp="+this.nf()+"&rsz="+this.za+"&hl="+m[H][K];if(this.wb)a+="&source="+i(this.wb);if(this.me)a+="&gss="+this.me;if(m[H].JSHash)a+="&sig="+m[H].JSHash;if(e)a+="&start="+e;return a};m[H].a[E].wg=function(a){this.wb=a};O(m[H].a[E],"setSearcherSrc",m[H].a[E].wg);m[H].a[E].xb=function(a){this.Fa=a};O(m[H].a[E],"setLinkTarget",m[H].a[E].xb);M=m[H].a[E];M.s=function(){return this.Fa&&this.Fa!=""?this.Fa:c};
M.Lf=function(){this.Gg++;this.Fc++;this.Kb&&k[sa](this.Kb);this.Kb=k[La](R(this,this[L],[c]),m[H].a.od)};M.nf=function(){k[sa](this.Kb);var a=this.Fc;this.Fc=0;return a};M.nc=function(){if(this.gc==c)this.gc="gsc-"+this.w+"Result";return this.gc};M.ia=function(){if(this.ic==c)this.ic="gs-"+this.w+"Result";return this.ic};M.Hf=function(){if(this.Pb==c)this.Pb=P[this.w];return this.bb?this.bb:this.Pb};M.Ff=function(){if(this.tc==c)this.tc=P[this.w];return this.bb?this.bb:this.tc};M.Gf=function(){return this.za};
O(m[H].a[E],"getResultSetSize",m[H].a[E].Gf);m[H].a[E].S=function(a){switch(a){case m[H].a.la:this.za=m[H].a.la;break;default:case m[H].a.X:this.za=m[H].a.X;break}};O(m[H].a[E],"setResultSetSize",m[H].a[E].S);qa(m[H].a[E],function(a){var d=(new Date)[Ga]();this.Ec=d%100==1?d:-1;d=this.ha(a,c,c);d+=this.Wa?"&"+this.Wa:"";if(k._googleudsextrastuff)d+=k._googleudsextrastuff;this.cursor=c;this.Rf=a;ab(d,m[H][Ja]);if(this.pa&&this.pa[D]>0)for(d=0;d<this.pa[D];d++)this.pa[d][L](a)});
O(m[H].a[E],"execute",m[H].a[E][L]);m[H].a[E].ne=function(a){if(this[F]&&a<this[F].pages[D]){a=this.ha(this.Rf,c,c,this[F].pages[a].start);this.cursor=c;ab(a,m[H][Ja])}};O(m[H].a[E],"gotoPage",m[H].a[E].ne);m[H].a[E].ef=function(a){this.pa&&this.pa[ra](a)};O(m[H].a[E],"addRelatedSearcher",m[H].a[E].ef);m[H].a[E].Ef=function(a,d,e){return this.ha(a,d,e)+"&key="+m[J].ApiKey+"&v="+m[H][Ja]};O(m[H].a[E],"getExecuteUrl",m[H].a[E].Ef);
m[H].a[E].ta=function(a){var d=Y("http://code.google.com/apis/ajaxsearch/faq.html",P.watermark+" - "+this.qf(),"_blank","gs-watermark");T(a,d)};m[H].a[E].qf=function(){var a=new Date;return a.getMonth()+1+"/"+a.getFullYear()};
m[H].a[E].Va=function(a){var d;d=a.getFullYear();var e=a.getMonth(),f=P["month-abbr"][e];a=a.getDate();if(a<10)a="0"+a;switch(m[H].ShortDatePattern){case "MDY":d=f+" "+a+", "+d;break;case "YMD":if(m[H][K]=="zh-CN"||m[H][K]=="zh-TW"||m[H][K]=="ja"||m[H][K]=="ko"){f=Ib[m[H][K]];d=d+f.year+(e+1)+f.month+a+f.day}else d=d+" "+f+" "+a;break;default:case "DMY":d=a+" "+f+" "+d;break}return d};O(m[H].a[E],"formatToShortDate",m[H].a[E].Va);
var Ib={"zh-CN":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},"zh-TW":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},ja:{month:"\u6708",year:"\u5e74",day:"\u65e5"},ko:{month:" \uc6d4 ",year:" \ub144 ",day:" \uc77c "}};m[H].a.pd=36E5;m[H].a.bf=6E4;m[H].a.af=864E5;
m[H].a[E].mc=function(a){var d=(new Date)[Ga](),e=a[Ga]();if(d<e)return P["n-minutes-ago"](2);d=d-e;if(d<m[H].a.pd){a=q[ua](d/m[H].a.bf);a=a<=1?2:a;return P["n-minutes-ago"](a)}if(d<m[H].a.af){a=q[ua](d/m[H].a.pd);if(a<=1)return P["one-hour-ago"];else{a=a;return P["n-hours-ago"](a)}}return this.Va(a)};O(m[H].a[E],"formatToRelativeDate",m[H].a[E].mc);m[H].a[E].$d=function(){this.Ih=this.gwsUrl=c;this.results=[]};O(m[H].a[E],"clearResults",m[H].a[E].$d);
m[H].a[E].zf=function(){this.ae&&this.ae();if(this.Ec!=-1){m[J][Ea]("asa_"+this.w,"req."+((new Date)[Ga]()-this.Ec),b);this.Ec=-1}};
m[H].a[E].W=function(a,d,e,f){if(!(a==c&&d==204)){this.gwsUrl=c;if(this.results&&this.results[D]>0)for(var h=0;h<this.results[D];h++)this.results[h].html&&Jb(this.results[h].html);if(a&&a.results&&a.results[D]>0){this.results=a.results;if(a[F]&&a[F].moreResultsUrl)this.gwsUrl=this.wa&&this.wa!=""?this.wa:a[F].moreResultsUrl;else if(this.u&&this.na)this.gwsUrl=this.dg()}else this.results=[];this.completionStatus=d;this.hashStatus=f;this.Yg=e;this.ze=a&&a.resultAttribution&&a.resultAttribution!=c&&
a.resultAttribution!=""?a.resultAttribution:c;if(a&&a[F]&&a[F].pages&&a[F].pages[D]>0)this.cursor=a[F];else typeof this[F]!="undefined"&&delete this[F];if(a&&a.context)this.context=a.context;else typeof this.context!="undefined"&&delete this.context;if(a&&a.promotions)this.promotions=a.promotions;else typeof this.promotions!="undefined"&&delete this.promotions;if(a&&a.omittedResults)this.omittedResults=a.omittedResults;else typeof this.omittedResults!="undefined"&&delete this.omittedResults;this.ke&&
this.hf();this.zf()}};O(m[H].a[E],"onSearchComplete",m[H].a[E].W);m[H].a[E].le=function(){var a=c;if(this.ze)a=U(this.ze,"gs-results-attribution");return a};O(m[H].a[E],"getAttribution",m[H].a[E].le);m[H].a[E].hf=function(){var a,d;for(a=0;a<this.results[D];a++){d=this.results[a];this.C(d)}};m[H].a[E].zb=function(a,d,e){e||(e=[c]);this.ae=R(a,d,e)};O(m[H].a[E],"setSearchCompleteCallback",m[H].a[E].zb);
m[H].a.ka=function(a,d){var e=g,f;if(a[D])for(var h=0;h<a[D];h++)if(a[h]==c){a[h]=d;f=h;e=b;break}if(!e){f=a[D];a[ra](d)}return f};O(m[H].a,"AllocateCompletionMapContext",m[H].a.ka);m[H].a[E].Bb=function(a){this.bb=a};O(m[H].a[E],"setUserDefinedLabel",m[H].a[E].Bb);m[H].a[E].yg=function(a){this.Cb=a};O(m[H].a[E],"setUserDefinedClassSuffix",m[H].a[E].yg);m[H].a[E].qg=function(){this.ke=g};O(m[H].a[E],"setNoHtmlGeneration",m[H].a[E].qg);
m[H].a.$a=function(a,d,e,f,h){var l=q.min(q.min(e[x]/a,e[Xa]/d),1),n={};ja(n,q[ta](a*l));u(n,q[ta](d*l));if(f){ja(f,n[x]);u(f,n[Xa]);if(h)f[G].left=(e[x]-n[x])/2+"px"}return n};O(m[H].a,"scaleImage",m[H].a.$a);m[H].a.Qd=1;O(m[H].a,"VERTICAL_BRANDING",m[H].a.Qd);m[H].a.Oe=2;O(m[H].a,"HORIZONTAL_BRANDING",m[H].a.Oe);
m[H].a.Cf=function(a,d,e){var f=d&&d==m[H].a.Qd,h=new Hb("gsc-");d=V(h.bc);var l=nb(c,c,h.bc);T(d,l);f=!f;if(!f){Z(d,h.Sb);Z(l,h.Sb)}var n=ob(l,0),y,B;if(f)B=y=n;else{y=n;B=ob(l,0)}var W="/css/small-logo.png",S=51;n=15;if(e)if(typeof e=="string")if(e[za](/^http:\/\/www\.youtube\.com/)){W="/css/youtube-logo-55x24.png";S=55;n=24;Z(d,h.bc+"-youtube");if(!f){Z(d,h.Sb+"-youtube");Z(l,h.Sb+"-youtube")}}f=X(y,h.text);l=X(B,h.qe);y=U(P["powered-by"],h.text);W=m[J][Fa]+W;S=S;n=n;B=h.qe;if(Fb&&!Gb){B=V(B);
B[G].filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+W+'")';ja(B[G],S+"px");u(B[G],n+"px")}else B=qb(W,c,c,B);n=B;T(f,y);if(e){f="http://www.google.com";if(typeof e=="string"&&(e[za](/^http:\/\/[a-z]*\.google\.com/)||e[za](/^http:\/\/www\.youtube\.com/)))f=e;e=rb(f,c,"_BLANK");t(e,h.of);T(e,n);T(l,e)}else T(l,n);if(a){a=typeof a=="string"?p.getElementById(a):a;ib(a);T(a,d)}return d};O(m[H].a,"getBranding",m[H].a.Cf);m[H].a.setOnLoadCallback=function(a,d){m.setOnLoadCallback(a,d)};
O(m[H].a,"setOnLoadCallback",m[H].a.setOnLoadCallback);var Kb;function Jb(a){Kb||(Kb=p[A]("DIV"));Kb[v](a);r(Kb,"")}m[H].a[E].Af=function(a){var d=this.lb;if(a)d=a;a={};var e=V(this.ia());Z(e,"gs-result");Z(e,"gs-error-result");d=U(d,"gs-snippet");T(e,d);a.html=e;return a};m[H].a[E].Bf=function(a){var d=this.rb;if(a)d=a;a={};var e=V(this.ia());Z(e,"gs-result");Z(e,"gs-no-results-result");d=U(d,"gs-snippet");T(e,d);a.html=e;return a};j("google.search.CurrentLocale",ea);
j("google.search.ShortDatePattern",aa);m[H].q=function(){m[H].a[I](this);this.w="blog";this.Ba="/GblogSearch";this.na="http://blogsearch.google.com/blogsearch";this.l=c;this.N=g;this.Ta=b;this.fa=hb(this,m[H].q[E].oa);this.Sa="gsc-blogConfig";this.o=c};N("google.search.BlogSearch",m[H].q);$a(m[H].q,m[H].a);m[H].q.B="GblogSearch";O(m[H].q,"RESULT_CLASS",m[H].q.B);m[H].q.n=[];m[H].q.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].q.n[l];m[H].q.n[l]=c;a.W(d,e,f,h)};O(m[H].q,"RawCompletion",m[H].q.I);
m[H].q[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].q.n,this):e;d=this.ya(d==c?"google.search.BlogSearch.RawCompletion":d,e,f);if(a){a=a;if(this.H)a=a+" "+this.H;if(this.l)a=a+" blogurl:"+this.l;a="&q="+i(a);if(this.N)a+="&scoring=d";d+=a;this.u=a}return d};
m[H].q[E].C=function(a){a.html&&delete a.html;var d=V(this.ia());Z(d,"gs-result");var e;e=Y(a.postUrl,a[Ha],this.s(),"gs-title");T(d,e);e=new Date(a.publishedDate);e=U(this.Va(e),"gs-publishedDate");T(d,e);e=new Date(a.publishedDate);e=U(this.mc(e),"gs-relativePublishedDate");T(d,e);e=U(a[va],"gs-snippet");T(d,e);e=Y(a.blogUrl,a.blogUrl,this.s(),"gs-visibleUrl");T(d,e);a.html=d;this.ta(a.html)};O(m[H].q[E],"createResultHtml",m[H].q[E].C);m[H].q[E].qa=function(a){this.l=a==c||a==""?c:a};
O(m[H].q[E],"setSiteRestriction",m[H].q[E].qa);m[H].q[E].K=function(a){this.N=a==m[H].a.ma?b:g};O(m[H].q[E],"setResultOrder",m[H].q[E].K);
m[H].q[E].oa=function(a,d){if(d){if(this.o==c){d=V("gsc-configSetting");this.o=xb(c,"0",this.N,"gsc-configSettingCheckbox");T(d,this.o);T(d,U(P["sort-by-date"],"gsc-configSettingCheckboxLabel"));var e=V("gsc-configSettingSubmit");T(e,ub(P[Ra],"gsc-configSettingSubmit"));T(d,e);T(a,d)}else na(this.o,this.N);this.o[Ba]()}else if(this.o)this.o[Ka]?this.K(m[H].a.ma):this.K(m[H].a.eb)};m[H].k=function(){m[H].a[I](this);this.w="book";this.Ba="/GbookSearch";this.na="http://books.google.com/books";this.Jb=g;this.Gc=c};N("google.search.BookSearch",m[H].k);$a(m[H].k,m[H].a);m[H].k.B="GbookSearch";O(m[H].k,"RESULT_CLASS",m[H].k.B);m[H].k.Pd="user-list";O(m[H].k,"USER_LIST",m[H].k.Pd);m[H].k.Hd=1;O(m[H].k,"TYPE_ALL_BOOKS",m[H].k.Hd);m[H].k.Ld=2;O(m[H].k,"TYPE_FULL_VIEW_BOOKS",m[H].k.Ld);m[H].k.n=[];
m[H].k.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].k.n[l];m[H].k.n[l]=c;a.W(d,e,f,h)};O(m[H].k,"RawCompletion",m[H].k.I);m[H].k[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].k.n,this):e;d=this.ya(d==c?"google.search.BookSearch.RawCompletion":d,e,f);if(a){a=a;if(this.H)a=a+" "+this.H;a="&q="+i(a);if(this.Jb)a+="&as_brr=1";if(this.Gc)a=a+"&as_list="+this.Gc;d+=a;this.u=a}return d};
m[H].k[E].C=function(a){a.html&&delete a.html;a.thumbnailHtml=this.hc(a);var d=V(this.ia());Z(d,"gs-result");var e=V("gs-text-box"),f=nb(),h=ob(f,0),l=X(h,"gs-image-box");h=X(h,"gs-text-box");T(l,a.thumbnailHtml[Ca](b));T(h,e);T(d,f);f=Y(a.unescapedUrl,a[Ha],this.s(),"gs-title");T(e,f);f=U(P.by+"&nbsp;"+a.authors,"gs-author");T(e,f);f=V("gs-spacer");T(e,f);if(a.publishedYear){f=U(a.publishedYear,"gs-publishedDate");T(e,f)}if(ca(a.pageCount,10)>0){f=U("-&nbsp;"+P["page-count"](a.pageCount),"gs-pageCount");
T(e,f)}f=Y("http://books.google.com","books.google.com",this.s(),"gs-visibleUrl");T(e,f);a.html=d;this.ta(a.html)};O(m[H].k[E],"createResultHtml",m[H].k[E].C);
m[H].k[E].hc=function(a){var d=V("gs-image-box gs-book-image-box"),e=V("gs-row-1"),f=qb("http://books.google.com/googlebooks/pages-trans.gif",c,c,"gs-pages");T(e,f);f=qb("http://books.google.com/googlebooks/p_edge-trans.gif",c,c,"gs-page-edge");T(e,f);T(d,e);e=V("gs-row-2");f=m[H].a.$a(a.tbWidth,a.tbHeight,this.M);f=qb(a.tbUrl,f[x],f[Xa],"gs-image");a=rb(a.unescapedUrl,c,this.s(),"gs-image");t(a,"gs-image");T(a,f);T(e,a);T(d,e);return d};
m[H].k[E].R=function(a,d){if(a==m[H].a.Db)if(d)if(d==m[H].k.Hd)this.Jb=g;else if(d==m[H].k.Ld)this.Jb=b;else this.R(a,c);else this.Jb=g;else if(a==m[H].k.Pd)this.Gc=d&&d[za](/^[a-zA-Z0-9\-_]*$/)?d:c};O(m[H].k[E],"setRestriction",m[H].k[E].R);m[H].c=function(){m[H].a[I](this);this.we=2;this.w="image";this.Ba="/GimageSearch";this.na="http://images.google.com/images";this.l=this.yc=this.lc=this.rc=this.pc=this.oc=this.qc=this.Ha=c;this.M={width:112,height:84}};N("google.search.ImageSearch",m[H].c);$a(m[H].c,m[H].a);m[H].c.B="GimageSearch";O(m[H].c,"RESULT_CLASS",m[H].c.B);m[H].c.yd="restrict-imagesize";O(m[H].c,"RESTRICT_IMAGESIZE",m[H].c.yd);m[H].c.Se=["icon"];O(m[H].c,"IMAGESIZE_SMALL",m[H].c.Se);m[H].c.Re=["small","medium","large","xlarge"];
O(m[H].c,"IMAGESIZE_MEDIUM",m[H].c.Re);m[H].c.Qe=["xxlarge"];O(m[H].c,"IMAGESIZE_LARGE",m[H].c.Qe);m[H].c.Pe=["huge"];O(m[H].c,"IMAGESIZE_EXTRA_LARGE",m[H].c.Pe);m[H].c.vd="restrict-coloration";O(m[H].c,"RESTRICT_COLORIZATION",m[H].c.vd);m[H].c.Kc="mono";O(m[H].c,"COLORIZATION_BLACK_AND_WHITE",m[H].c.Kc);m[H].c.Mc="gray";O(m[H].c,"COLORIZATION_GRAYSCALE",m[H].c.Mc);m[H].c.Lc="color";O(m[H].c,"COLORIZATION_COLOR",m[H].c.Lc);m[H].c.ud="restrict-colorfilter";O(m[H].c,"RESTRICT_COLORFILTER",m[H].c.ud);
m[H].c.Vc="red";O(m[H].c,"COLOR_RED",m[H].c.Vc);m[H].c.Sc="orange";O(m[H].c,"COLOR_ORANGE",m[H].c.Sc);m[H].c.Yc="yellow";O(m[H].c,"COLOR_YELLOW",m[H].c.Yc);m[H].c.Rc="green";O(m[H].c,"COLOR_GREEN",m[H].c.Rc);m[H].c.Wc="teal";O(m[H].c,"COLOR_TEAL",m[H].c.Wc);m[H].c.Oc="blue";O(m[H].c,"COLOR_BLUE",m[H].c.Oc);m[H].c.Uc="purple";O(m[H].c,"COLOR_PURPLE",m[H].c.Uc);m[H].c.Tc="pink";O(m[H].c,"COLOR_PINK",m[H].c.Tc);m[H].c.Xc="white";O(m[H].c,"COLOR_WHITE",m[H].c.Xc);m[H].c.Qc="gray";
O(m[H].c,"COLOR_GRAY",m[H].c.Qc);m[H].c.Nc="black";O(m[H].c,"COLOR_BLACK",m[H].c.Nc);m[H].c.Pc="brown";O(m[H].c,"COLOR_BROWN",m[H].c.Pc);m[H].c.xd="restrict-filetype";O(m[H].c,"RESTRICT_FILETYPE",m[H].c.xd);m[H].c.bd="jpg";O(m[H].c,"FILETYPE_JPG",m[H].c.bd);m[H].c.cd="png";O(m[H].c,"FILETYPE_PNG",m[H].c.cd);m[H].c.ad="gif";O(m[H].c,"FILETYPE_GIF",m[H].c.ad);m[H].c.$c="bmp";O(m[H].c,"FILETYPE_BMP",m[H].c.$c);m[H].c.zd="restrict-imagetype";O(m[H].c,"RESTRICT_IMAGETYPE",m[H].c.zd);m[H].c.ed="face";
O(m[H].c,"IMAGETYPE_FACES",m[H].c.ed);m[H].c.dd="clipart";O(m[H].c,"IMAGETYPE_CLIPART",m[H].c.dd);m[H].c.fd="lineart";O(m[H].c,"IMAGETYPE_LINEART",m[H].c.fd);m[H].c.gd="news";O(m[H].c,"IMAGETYPE_NEWS",m[H].c.gd);m[H].c.hd="photo";O(m[H].c,"IMAGETYPE_PHOTO",m[H].c.hd);m[H].c.td="restrict";O(m[H].c,"RESTRICT",m[H].c.td);m[H].c.wd="cc_attribute";O(m[H].c,"RESTRICT_CREATIVE_COMMONS",m[H].c.wd);m[H].c.n=[];m[H].c.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].c.n[l];m[H].c.n[l]=c;a.W(d,e,f,h)};
O(m[H].c,"RawCompletion",m[H].c.I);
m[H].c[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].c.n,this):e;d=this.ya(d==c?"google.search.ImageSearch.RawCompletion":d,e,f);if(a){a=a;if(this.H)a=a+" "+this.H;a="&q="+i(a);if(this.Ha)a=a+"&safe="+this.Ha;if(this.qc)a=a+"&imgsz="+i(this.qc);if(this.oc)a=a+"&imgc="+i(this.oc);if(this.pc)a=a+"&imgcolor="+i(this.pc);if(this.rc)a=a+"&imgtype="+i(this.rc);if(this.lc)a=a+"&as_filetype="+i(this.lc);if(this.yc)a=a+"&restrict="+i(this.yc);if(this.l)a=a+"&as_sitesearch="+i(this.l);d+=a;this.u=a;if(f&&f!=
0)this.u=this.u+"&start="+f}return d};
m[H].c[E].C=function(a){a.html&&delete a.html;var d=V(this.ia());Z(d,"gs-result");var e=V("gs-image-box"),f=m[H].a.$a(a.tbWidth,a.tbHeight,this.M),h=qb(a.tbUrl,f[x],f[Xa],"gs-image");h[G].left=(this.M[x]-f[x])/2+"px";s(h,a.titleNoFormatting+" ("+a.visibleUrl+")");f=rb(a.unescapedUrl,c,this.s(),"gs-image");t(f,"gs-image");T(f,h);T(e,f);T(d,e);e=V("gs-text-box");h=U(a[va],"gs-snippet");s(h,a.contentNoFormatting);T(e,h);h=U(a[x]+" x "+a[Xa],"gs-size");T(e,h);h=Y(a.originalContextUrl,a.visibleUrl,this.s(),
"gs-visibleUrl");s(h,a.visibleUrl);T(e,h);T(d,e);a.html=d;this.ta(a.html)};O(m[H].c[E],"createResultHtml",m[H].c[E].C);m[H].c[E].qa=function(a){this.l=a};O(m[H].c[E],"setSiteRestriction",m[H].c[E].qa);
m[H].c[E].R=function(a,d){if(a==m[H].a.Ub)this.Ha=d?d==m[H].a.Wb||d==m[H].a.Vb?d:c:c;else if(a==m[H].c.yd)this.qc=d?d.join("|"):c;else if(a==m[H].c.vd)this.oc=d?d==m[H].c.Kc||d==m[H].c.Mc||d==m[H].c.Lc?d:c:c;else if(a==m[H].c.ud)this.pc=d?d==m[H].c.Vc||d==m[H].c.Sc||d==m[H].c.Yc||d==m[H].c.Rc||d==m[H].c.Wc||d==m[H].c.Oc||d==m[H].c.Uc||d==m[H].c.Tc||d==m[H].c.Xc||d==m[H].c.Qc||d==m[H].c.Nc||d==m[H].c.Pc?d:c:c;else if(a==m[H].c.xd)this.lc=d?d==m[H].c.bd||d==m[H].c.cd||d==m[H].c.ad||d==m[H].c.$c?d:c:
c;else if(a==m[H].c.zd)this.rc=d?d==m[H].c.ed||d==m[H].c.dd||d==m[H].c.fd||d==m[H].c.gd||d==m[H].c.hd?d:c:c;else if(a==m[H].c.td)this.yc=d?d==m[H].c.wd?d:c:c};O(m[H].c[E],"setRestriction",m[H].c[E].R);m[H].e=function(){m[H].a[I](this);this.ba=c;this.aa="San Francisco, CA";this.ea={y:37.77916,x:-122.42009};this.Ra=c;this.qb=b;this.fb=g;this.Za=c;this.Ta=b;this.fa=hb(this,this.oa);this.Sa="gsc-locationConfig";this.w="local";this.Ba="/GlocalSearch";this.na="http://www.google.com/local";this.Pa=this.G=c};N("google.search.LocalSearch",m[H].e);$a(m[H].e,m[H].a);m[H].e.B="GlocalSearch";O(m[H].e,"RESULT_CLASS",m[H].e.B);m[H].e.Kd="blended";O(m[H].e,"TYPE_BLENDED_RESULTS",m[H].e.Kd);m[H].e.Nd="kmlonly";
O(m[H].e,"TYPE_KMLONLY_RESULTS",m[H].e.Nd);m[H].e.Od="localonly";O(m[H].e,"TYPE_LOCALONLY_RESULTS",m[H].e.Od);m[H].e.Hc="disabled";O(m[H].e,"ADDRESS_LOOKUP_DISABLED",m[H].e.Hc);m[H].e.Ic="enabled";O(m[H].e,"ADDRESS_LOOKUP_ENABLED",m[H].e.Ic);m[H].e.Ed=17;O(m[H].e,"STATIC_MAP_ZOOM_FARTHEST",m[H].e.Ed);m[H].e.df=4;O(m[H].e,"STATIC_MAP_ZOOM_DEFAULT",m[H].e.df);m[H].e.Dd=0;O(m[H].e,"STATIC_MAP_ZOOM_CLOSEST",m[H].e.Dd);m[H].e.$b=8;O(m[H].e,"STATIC_MAP_MAX_POINTS",m[H].e.$b);m[H].e.cg=3.141592653589;
m[H].e.yf=6367E3;m[H].e.Eg=16093;m[H].e.n=[];m[H].e.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].e.n[l];m[H].e.n[l]=c;a.resultViewport=d&&d.viewport?d.viewport:c;a.W(d,e,f,h)};O(m[H].e,"RawCompletion",m[H].e.I);
m[H].e[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].e.n,this):e;d=this.ya(d==c?"google.search.LocalSearch.RawCompletion":d,e,f);f="";if(a){f="&q="+i(a);d+=f}this.$h=c;if(this.ba){var h;if(this.qb){e=this.ba.getCenterLatLng();h=this.ba.getSpanLatLng();a="&sll="+e.y+","+e.x;a+="&sspn="+h[Xa]+","+h[x]}else{e=this.ba.getCenter();h=this.ba.getBounds().toSpan().toUrlValue();a="&sll="+e.y+","+e.x;a+="&sspn="+h}a+=m[H].e.cc(e.y,e.x);d+=a;f+=a}else if(this.ea){a="&sll="+this.ea.y+","+this.ea.x;if(this.Ra)a=
a+"&sspn="+this.Ra.lat+","+this.Ra.lng;a+=m[H].e.cc(this.ea.y,this.ea.x);d+=a;f+=a}else if(this.aa){a="&near="+i(this.aa);d+=a;f+=a}if(this.fb){d+="&nogeocode=t";f+="&nogeocode=t"}if(this.Za){d+="&mrt="+i(this.Za);f+="&mrt="+i(this.Za)}if(f)this.u=f;return d};m[H].e.cc=function(a,d){var e=2*m[H].e.Eg/m[H].e.yf*2*m[H].e.cg,f=d-e,h=a+e;d=d+e;return"&gll="+q[ua]((a-e)*1E6)+","+q[ua](f*1E6)+","+q[ua](h*1E6)+","+q[ua](d*1E6)+"&llsep=500,500"};O(m[H].e,"centerToGll",m[H].e.cc);
m[H].e[E].C=function(a){a.html&&delete a.html;var d=V(this.ia());Z(d,"gs-result");var e;e=Y(a.url,a[Ha],this.s(),"gs-title");T(d,e);if(a.listingType=="kml"&&a[va]&&a[va]!=""){e=U(a[va],"gs-snippet");T(d,e)}var f=V("gs-address");if(a.addressLines&&a.addressLines[D]>0)for(var h=0;h<a.addressLines[D];h++){e=a.addressLines[h];var l="gs-addressLine";if(h==0)l="gs-street gs-addressLine";else if(h==1)l="gs-city gs-addressLine";e=U(e,l);T(f,e)}else{e=U(a.streetAddress,"gs-street");T(f,e);h="";if(a.city!=
""){h=a.city;if(a.region!="")h+=", "}e=U(h,"gs-city");T(f,e);e=U(a.region,"gs-region");T(f,e)}e=U(a.country,"gs-country");T(f,e);T(d,f);if(a.phoneNumbers&&a.phoneNumbers[D]){h=f=c;e=a.phoneNumbers[0];for(var n=0;n<a.phoneNumbers[D];n++){l=a.phoneNumbers[n];if(l[Da]=="main"){f=l;break}if(l[Da]==""||l[Da]=="mobile"&&h==c)h=l}l=f?f:h?h:e;e=U(l.number,"gs-phone");T(d,e)}if(a.ddUrl&&a.ddUrl!=""){e=Y(a.ddUrl,P.directions,this.s(),"gs-directions");T(d,e)}if(a.ddUrlToHere&&a.ddUrlToHere!=""&&a.ddUrlFromHere&&
a.ddUrlFromHere!=""){e=V("gs-directions-to-from");f=U(P["get-directions"]+":","gs-label");e[v](f);f=Y(a.ddUrlToHere,P["to-here"],this.s(),"gs-secondary-link");e[v](f);f=U("-","gs-spacer");e[v](f);f=Y(a.ddUrlFromHere,P["from-here"],this.s(),"gs-secondary-link");e[v](f);T(d,e)}a.html=d;this.ta(a.html)};O(m[H].e[E],"createResultHtml",m[H].e[E].C);
m[H].e[E].Ce=function(a){if(a.centerAndZoom){this.qb=b;this.ba=a;this.ea=c;this.aa="";if(this.G)this.G=c}else if(a.setCenter){this.qb=g;this.ba=a;this.Ra=this.ea=c;this.aa="";if(this.G)this.G=c}else if(a.x&&a.y){this.qb=b;this.ea=a;this.ba=this.Ra=c;this.aa="";if(this.G)this.G=c}else if(a!=c&&a!=""){this.qb=b;this.ba=c;this.aa=a;this.ea=c;if(this.G)this.G=c;var d=new m[H].e;d.zb(this,this.gf,[d,a]);d[L](a)}};O(m[H].e[E],"setCenterPoint",m[H].e[E].Ce);
m[H].e[E].gf=function(a,d){if(a.results&&a.results[D]){var e={};e.y=da(a.results[0].lat);e.x=da(a.results[0].lng);this.ea=e;this.aa=d;this.Ta=b;this.ba=c;if(a.resultViewport){d={};d.ph=da(a.resultViewport.span.lat)/2;d.qh=da(a.resultViewport.span.lng)/2;this.Ra=d}}};
m[H].e[E].oa=function(a,d){if(d){if(this.G==c){d=c;if(this.ba==c){var e=V("gsc-configSetting");this.G=vb(c,"gsc-configSettingInput",this.aa==""?c:this.aa);T(e,U(P["search-location"],"gsc-configSettingInputLabel"));T(e,this.G);T(a,e);d=this.G}e=V("gsc-configSetting");this.Pa=xb(c,"0",this.fb,"gsc-configSettingCheckbox");T(e,this.Pa);T(e,U(P["disable-address-lookup"],"gsc-configSettingCheckboxLabel"));if(d==c)d=this.Pa;var f=U(c,"gsc-configSettingSubmit");T(f,ub(P[Ra],"gsc-configSettingSubmit"));T(e,
f);T(a,e);d[Ba]()}}else{if(this.G){if(this.G[xa]){this.aa=this.G[xa];this.Ce(this.aa)}this.G=c}if(this.Pa){this.fb=this.Pa[Ka];this.Pa=c}ib(a)}};m[H].e[E].lg=function(a){if(a==m[H].e.Hc)this.fb=b;else if(a==m[H].e.Ic)this.fb=g};O(m[H].e[E],"setAddressLookupMode",m[H].e[E].lg);m[H].e.ye=function(a,d,e,f){var h=a.staticMapUrl;h=h[z](/&h=\d*/,"&h="+d);h=h[z](/&w=\d*/,"&w="+e);if(f&&f>=m[H].e.Dd&&f<=m[H].e.Ed)h=h[z](/&zl=\d*/,"&zl="+f);return a.staticMapUrl=h};O(m[H].e,"resizeStaticMapUrl",m[H].e.ye);
m[H].e.rf=function(a,d,e,f){var h="",l="http://mt.google.com/mapdata?cc=us&tstyp=5&zl=4&w=150&h=100",n={};n.staticMapUrl=l;l=m[H].e.ye(n,d,e,f);if(f==c)l=l[z](/&zl=\d*/,"");d=a[D];if(d>m[H].e.$b)d=m[H].e.$b;for(e=0;e<d;e++){n=a[e];if(n.lat&&n.lng)if(typeof n.lat=="string"){f=da(n.lat);n=da(n.lng)}else{f=n.lat;n=n.lng}else if(n.x&&n.y){f=n.y;n=n.x}else return c;n=n*1E6;f="&Point=b&Point.latitude_e6=__LAT__&Point.longitude_e6=__LNG__&Point.iconid=__ICONID__&Point=e"[z](/__LAT__/,q[ua](f*1E6));f=f[z](/__LNG__/,
q[ua](n));n=51+e;if(d==1)n=15;f=f[z](/__ICONID__/,n);h+=f}return l+h};O(m[H].e,"computeStaticMapUrl",m[H].e.rf);m[H].e[E].R=function(a,d){if(a==m[H].a.Db)if(d){this.Za=c;this.Za=d==m[H].e.Kd||d==m[H].e.Nd||d==m[H].e.Od?d:c}else this.Za=c};O(m[H].e[E],"setRestriction",m[H].e[E].R);m[H].m=function(){m[H].a[I](this);this.w="news";this.Ba="/GnewsSearch";this.na="http://news.google.com/nwshp";this.Nh=c;this.ab="site:";this.N=g;this.Ta=b;this.fa=hb(this,this.oa);this.Sa="gsc-newsConfig";this.F=this.o=c};N("google.search.NewsSearch",m[H].m);$a(m[H].m,m[H].a);m[H].m.B="GnewsSearch";O(m[H].m,"RESULT_CLASS",m[H].m.B);m[H].m.sd="GnewsSearch.quote";O(m[H].m,"QUOTE_RESULT_CLASS",m[H].m.sd);m[H].m.n=[];
m[H].m.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].m.n[l];m[H].m.n[l]=c;a.W(d,e,f,h)};O(m[H].m,"RawCompletion",m[H].m.I);
m[H].m[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].m.n,this):e;d=this.ya(d==c?"google.search.NewsSearch.RawCompletion":d,e,f);if(a||!a&&this.F){e=c;if(a)e=a;if(this.H)e=e==c?this.H:e+" "+this.H;if(this.l)e=e==c?this.ab+this.l:e+" "+this.ab+this.l;a=e?"&q="+i(e):"";if(this.N)a+="&scoring=d";if(this.F){e="";for(var h in this.F)if(h.charAt(0)==":")e+="&"+this.F[h];a+=e}if(this.l&&this.ab=="source:")d=d[z](/&hl=.*&/,"&hl=en&");d+=a;this.u=a;if(f&&f!=0)this.u=this.u+"&start="+f}return d};
m[H].m[E].C=function(a){a.html&&delete a.html;if(a.GsearchResultClass!=m[H].m.sd){var d=V(this.ia());Z(d,"gs-result");var e;e=Y(a.unescapedUrl,a[Ha],this.s(),"gs-title");T(d,e);e=U(a.publisher,"gs-publisher");T(d,e);e=a[Pa][Na](",");if(e[D]>1){e=U(", "+e[e[D]-1],"gs-location");T(d,e)}e=new Date(a.publishedDate);e=U(" - "+this.Va(e),"gs-publishedDate");T(d,e);e=new Date(a.publishedDate);e=U(" - "+this.mc(e),"gs-relativePublishedDate");T(d,e);e=U(a[va],"gs-snippet");T(d,e);if(a.clusterUrl&&a.clusterUrl!=
""){e=Y(a.clusterUrl,P["related-articles"]+"&nbsp;&raquo;",this.s(),"gs-clusterUrl");T(d,e)}a.html=d;this.ta(a.html)}};O(m[H].m[E],"createResultHtml",m[H].m[E].C);m[H].m[E].qa=function(a){if(a==c||a==""){this.l=c;this.ab="site:"}else if(a[za]("[./:]")){this.ab="site:";this.l=a}else{this.ab="source:";this.l=a[z](/\s/g,"_")}};O(m[H].m[E],"setSiteRestriction",m[H].m[E].qa);m[H].m[E].K=function(a){this.N=a==m[H].a.ma?b:g};O(m[H].m[E],"setResultOrder",m[H].m[E].K);
m[H].m[E].oa=function(a,d){if(d){if(this.o==c){d=V("gsc-configSetting");this.o=xb(c,"0",this.N,"gsc-configSettingCheckbox");T(d,this.o);T(d,U(P["sort-by-date"],"gsc-configSettingCheckboxLabel"));var e=V("gsc-configSettingSubmit");T(e,ub(P[Ra],"gsc-configSettingSubmit"));T(d,e);T(a,d)}else na(this.o,this.N);this.o[Ba]()}else if(this.o)this.o[Ka]?this.K(m[H].a.ma):this.K(m[H].a.eb)};m[H].m[E].jf={geo:b,qsid:b,quotesearch:b,topic:b,ned:b,scoring:b,as_mind:b,as_minm:b,as_miny:b,as_maxd:b,as_maxm:b,as_maxy:b};
m[H].m[E].R=function(a,d){if(a==m[H].a.Na)if(d)for(var e in d){a=d[e];if(typeof this.jf[e]!="undefined"){this.F=this.F||{};this.F[":"+e]=e+"="+i(a)}}else this.F=c};O(m[H].m[E],"setRestriction",m[H].m[E].R);m[H].h=function(){m[H].a[I](this);this.w="patent";this.Ba="/GpatentSearch";this.na="http://www.google.com/patents";this.Je="";this.tb=c;this.Ta=b;this.fa=hb(this,this.oa);this.Sa="gsc-patentConfig";this.o=c};N("google.search.PatentSearch",m[H].h);$a(m[H].h,m[H].a);m[H].h.B="GpatentSearch";O(m[H].h,"RESULT_CLASS",m[H].h.B);m[H].h.Id=1;O(m[H].h,"TYPE_ANY_STATUS",m[H].h.Id);m[H].h.Md=2;O(m[H].h,"TYPE_ISSUED_PATENTS",m[H].h.Md);m[H].h.Jd=3;O(m[H].h,"TYPE_APPLICATIONS",m[H].h.Jd);m[H].h.n=[];
m[H].h.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].h.n[l];m[H].h.n[l]=c;a.W(d,e,f,h)};O(m[H].h,"RawCompletion",m[H].h.I);m[H].h[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].h.n,this):e;d=this.ya(d==c?"google.search.PatentSearch.RawCompletion":d,e,f);if(a){a=a;if(this.H)a=a+" "+this.H;a="&q="+i(a)+this.Je;if(this.tb)a+=this.tb;d+=a;this.u=a}return d};
m[H].h[E].C=function(a){a.html&&delete a.html;a.thumbnailHtml=this.hc(a);var d=V(this.ia());Z(d,"gs-result");var e=V("gs-text-box"),f=nb(),h=ob(f,0),l=X(h,"gs-image-box");h=X(h,"gs-text-box");T(l,a.thumbnailHtml[Ca](b));T(h,e);T(d,f);l=Y(a.unescapedUrl,a[Ha],this.s(),"gs-title");T(e,l);f=V("gs-patent-info gs-metadata");T(e,f);l=c;l=a.patentNumber?a.patentStatus=="issued"?P["us-pat"]+"&nbsp;"+a.patentNumber:P["us-pat-app"]+"&nbsp;"+a.patentNumber:P["us-pat-app"]+"&nbsp; N/A";l=U(l,"gs-patent-number");
T(f,l);if(a.applicationDate){l=U(" - "+this.Va(new Date(a.applicationDate)),"gs-publishedDate");T(f,l)}if(a.assignee){l=U(" - "+a.assignee,"gs-author");T(f,l)}l=U(a[va],"gs-snippet");T(e,l);T(e,l);a.html=d;this.ta(a.html)};O(m[H].h[E],"createResultHtml",m[H].h[E].C);m[H].h[E].hc=function(a){var d=V("gs-patent-image"),e=qb(a.tbUrl,75,100,"gs-image");a=rb(a.unescapedUrl,c,this.s(),"gs-image");t(a,"gs-image");T(a,e);T(d,a);return d};
m[H].h[E].K=function(a){this.tb=a==m[H].a.ma?"&scoring=d":a==m[H].a.rd?"&scoring=ad":c};O(m[H].h[E],"setResultOrder",m[H].h[E].K);m[H].h[E].R=function(a,d){if(a==m[H].a.Db)this.Je=d?d==m[H].h.Id?"":d==m[H].h.Md?"&as_psrg=1":d==m[H].h.Jd?"&as_psra=1":"":""};O(m[H].h[E],"setRestriction",m[H].h[E].R);
m[H].h[E].oa=function(a,d){if(d){var e=g;if(this.tb&&this.tb=="&scoring=d")e=b;if(this.o==c){d=V("gsc-configSetting");this.o=xb(c,"0",e,"gsc-configSettingCheckbox");T(d,this.o);T(d,U(P["sort-by-date"],"gsc-configSettingCheckboxLabel"));e=V("gsc-configSettingSubmit");T(e,ub(P[Ra],"gsc-configSettingSubmit"));T(d,e);T(a,d)}else na(this.o,e);this.o[Ba]()}else if(this.o)this.o[Ka]?this.K(m[H].a.ma):this.K(m[H].a.eb)};m[H].A=function(){this.xe=this.$=m[H].b.Da;this.i=c;this.M={width:112,height:84};this.Tb={width:100,height:75};this.rb=c};N("google.search.SearcherOptions",m[H].A);m[H].A[E].Ee=function(a){switch(a){case m[H].b.Zc:case m[H].b.La:case m[H].b.Da:this.$=a;break;default:this.$=m[H].b.Da;break}this.xe=this.$};O(m[H].A[E],"setExpandMode",m[H].A[E].Ee);m[H].A[E].tg=function(a){ib(a);this.i=a};O(m[H].A[E],"setRoot",m[H].A[E].tg);m[H].A[E].yb=function(a){this.rb=a};O(m[H].A[E],"setNoResultsString",m[H].A[E].yb);
m[H].A[E].ng=function(a){if(a>100)a=100;u(this.M,a);ja(this.M,q[ta](a*1.33))};O(m[H].A[E],"setImageResultsTbHeight",m[H].A[E].ng);m[H].A[E].zg=function(a){if(a>100)a=100;u(this.Tb,a);ja(this.Tb,q[ta](a*1.33))};O(m[H].A[E],"setVideoResultsTbHeight",m[H].A[E].zg);m[H].T=function(){ia(this,c);this.Ie=c;this.Z=m[H].b.ra};N("google.search.DrawOptions",m[H].T);m[H].T[E].og=function(a){ia(this,a)};O(m[H].T[E],"setInput",m[H].T[E].og);
m[H].T[E].ug=function(a){if(a&&typeof a=="string")a=p.getElementById(a);this.Ie=a};O(m[H].T[E],"setSearchFormRoot",m[H].T[E].ug);m[H].T[E].De=function(a){this.Z=a==m[H].b.ra||a==m[H].b.Ka?a:m[H].b.ra};O(m[H].T[E],"setDrawMode",m[H].T[E].De);
m[H].z=function(a,d,e){this.t=e;this.fc=this.kc=g;this.f=a;this.v=c;this.hg=R(d,m[H].b[E].bg,[this]);this.kg=R(d,m[H].b[E].wc,[this,m[H].z.Zb]);this.jg=R(d,m[H].b[E].wc,[this,m[H].z.Yb]);this.ig=R(d,m[H].b[E].wc,[this,m[H].z.Cd]);this.gg=R(d,m[H].b[E].ag,[this]);this.fg=R(d,m[H].b[E].Xf,[this]);this.f.zb(d,m[H].b[E].W,[this]);this.f.S(d.Mb);this.f.xb(d.Fa);this.Q=this.Ua=this.va=this.zc=this.nb=this.Rb=this.i=c;this.pb=b};m[H].z.Xb=0;m[H].z.Zb=1;m[H].z.Yb=2;m[H].z.Cd=3;
m[H].z[E].Dc=function(a){var d="gsc-results-selector ";d+=a==m[H].z.Xb?this.t.$==m[H].b.Da?"gsc-one-result-active":this.f.za==m[H].a.X?"gsc-more-results-active":"gsc-all-results-active":a==m[H].z.Zb?"gsc-one-result-active":a==m[H].z.Yb?"gsc-more-results-active":"gsc-all-results-active";t(this.zc,d)};
m[H].b=function(a){if(!m[J].KeyVerified)if(m[H].b.ue())m[J].KeyVerified=b;else return;this.Vd=this.Mb=m[H].a.X;this.Z=m[H].b.ra;this.Nb=this.i=c;ia(this,c);this.Qb=m[H].b.Eb;this.Of=R(this,m[H].b[E].Yf,[c]);this.Pf=R(this,m[H].b[E].Zf,[c]);this.Xa=this.ub=this.Bc=this.Lb=c;this.gb=this.Uf=g;this.Fa=m[H].a.db;this.sc=P.copy;this.d=[];this.Qg=[];var d;if(a)for(var e=0;e<a[D];e++){d=new m[H].z(a[e],this,g);this.d[ra](d)}};N("google.search.SearchControl",m[H].b);m[H].b.qd=P["no-results"];
O(m[H].b,"NO_RESULTS_DEFAULT_STRING",m[H].b.qd);m[H].b.Gd=350;O(m[H].b,"TIMEOUT_SHORT",m[H].b.Gd);m[H].b.Eb=500;O(m[H].b,"TIMEOUT_MEDIUM",m[H].b.Eb);m[H].b.Fd=700;O(m[H].b,"TIMEOUT_LONG",m[H].b.Fd);m[H].b.Zc=1;O(m[H].b,"EXPAND_MODE_CLOSED",m[H].b.Zc);m[H].b.La=2;O(m[H].b,"EXPAND_MODE_OPEN",m[H].b.La);m[H].b.Da=3;O(m[H].b,"EXPAND_MODE_PARTIAL",m[H].b.Da);m[H].b.ra=1;O(m[H].b,"DRAW_MODE_LINEAR",m[H].b.ra);m[H].b.Ka=2;O(m[H].b,"DRAW_MODE_TABBED",m[H].b.Ka);m[H].b.nd="save";
O(m[H].b,"KEEP_LABEL_SAVE",m[H].b.nd);m[H].b.md="keep";O(m[H].b,"KEEP_LABEL_KEEP",m[H].b.md);m[H].b.ld="include";O(m[H].b,"KEEP_LABEL_INCLUDE",m[H].b.ld);m[H].b.kd="copy";O(m[H].b,"KEEP_LABEL_COPY",m[H].b.kd);m[H].b.jd="blank";O(m[H].b,"KEEP_LABEL_BLANK",m[H].b.jd);try{m[H].b.appPath=k[Pa].href}catch(Lb){m[H].b.appPath=c}
m[H].b.ue=function(){var a=b,d;d=k[Pa].host[Ya]()[Na](".");if(d[D]<2)d=g;else{var e=d.pop(),f=d.pop();if((f=="igoogle"||f=="gmodules"||f=="googlesyndication")&&e=="com")d=b;else{if(e[D]==2&&d[D]>0)if(Cb[f]&&Cb[f][e]==1)f=d.pop();d=f=="google"}}if(d)return b;if(m[J].LoadFailure)if(m[J].OriginalAppPath&&m[H].b.appPath){m[J].LoadFailure=g;a=b}m[J].KeyVerified=b;m[J].LoadFailure=g;return a};O(m[H].b,"keyCheck",m[H].b.ue);
m[H].b[E].jb=function(a,d){this.ua=b;this.Qa=a;if(d){if(d.includeVerticalAds!=o)this.Ca=d.includeVerticalAds;if(d.includeSideAds!=o)this.Ca=d.includeSideAds;if(d.iframes!=o)this.mb=d.iframes;if(d.useNarrowTopAd!=o)if(this.mb)this.Ig=d.useNarrowTopAd;if(d.channel)this.Sd=d.channel;if(d.clientIP)this.Td=d.clientIP;if(d.safe)this.Ud=d.safe;if(d[Oa])this.Wd=d[Oa];if(a=d.adtest||d.debug)this.ac=a;if(d.numTopAds!=o){this.Ga=d.numTopAds;this.Ga=q.max(0,q.min(4,this.Ga))}if(d.numSideAds!=o){this.xa=d.numSideAds;
this.Ca=(this.xa=q.max(0,q.min(8,this.xa)))?b:g}this.Be=d.enableSearchCompleteCallback?b:g}m[J][Ea]("hl","afs_ads")};O(m[H].b[E],"enableAds",m[H].b[E].jb);m[H].b[E].Oa=function(a,d){d||(d=new m[H].A);a.pa=c;this.d[ra](new m[H].z(a,this,d));if(this.vb(a))this.Jf=b;a.wb="gsc"};O(m[H].b[E],"addSearcher",m[H].b[E].Oa);
m[H].b[E].ce=function(a){if(this.d[a].t.i){this.d[a].pb=g;this.d[a].i=this.d[a].t.i;Z(this.d[a].i,"gsc-resultsRoot");$(this.d[a].i,"gsc-resultsbox-visible");Z(this.d[a].i,"gsc-resultsbox-invisible")}else this.d[a].i=V("gsc-resultsRoot");this.d[a].f.Cb&&wb(this.d[a].i,"gsc-resultsRoot-"+this.d[a].f.Cb);if(this.Z==m[H].b.Ka)this.p[a].ga=this.d[a].i;var d=nb(c,c,"gsc-resultsHeader"),e=ob(d,0);this.d[a].Ja=X(e,"gsc-twiddleRegionCell");e=X(e,"gsc-configLabelCell");this.d[a].Rb=U("","gsc-twiddle");T(this.d[a].Ja,
this.d[a].Rb);var f=lb(this.d[a].f.Ff(),"gsc-title");T(this.d[a].Rb,f);this.d[a].nb=U("","gsc-stats");T(this.d[a].Ja,this.d[a].nb);f=U();var h=U(P.blank,"gsc-result-selector gsc-one-result"),l=U(P.blank,"gsc-result-selector gsc-more-results"),n=U(P.blank,"gsc-result-selector gsc-all-results");s(h,P["show-one-result"]);s(l,P["show-more-results"]);s(n,P["show-all-results"]);T(f,h);T(f,l);T(f,n);oa(h,this.d[a].kg);oa(l,this.d[a].jg);oa(n,this.d[a].ig);this.d[a].zc=f;this.d[a].Dc(m[H].z.Xb);T(this.d[a].Ja,
this.d[a].zc);oa(this.d[a].Rb,this.d[a].hg);if(this.d[a].f.fa){this.d[a].P=mb("","gsc-configLabel");r(this.d[a].P,P.blank);Z(this.d[a].P,"gsc-twiddle-closed");T(e,this.d[a].P);oa(this.d[a].P,this.d[a].gg);s(this.d[a].P,P.settings);this.d[a].va=V("gsc-config");Z(this.d[a].va,this.d[a].f.Sa);this.d[a].Ua=tb("gsc-config");Z(this.d[a].Ua,this.d[a].f.Sa);this.d[a].Ua.onsubmit=this.d[a].fg;T(this.d[a].va,this.d[a].Ua);pa(this.d[a].va[G],"none")}this.d[a].Q=V("gsc-results");e=this.d[a].f.nc();Z(this.d[a].Q,
e);this.d[a].t.i==c&&T(this.Aa,this.d[a].i);T(this.d[a].i,d);this.d[a].va&&T(this.d[a].i,this.d[a].va);T(this.d[a].i,this.d[a].Q)};m[H].b[E].de=function(a){var d=this.d[a],e={},f=d.f.Hf();e.V=lb(f);e.ga=c;e.Cc=d.f;e.w=d.f.w;oa(e.V,R(this,this.Dg,[a]));this.p[a]=e;T(this.ca,e.V);a="gs-spacer";if(bb("opera"))a+=" gs-spacer-opera";a=mb(" ",a);T(this.ca,a);d.t.Ee(m[H].b.La)};
m[H].b[E].Ib=function(a,d){var e=c,f=c;if(d)if(d.Z){this.Z=d.Z;e=d[w];f=d.Ie}else this.Z=m[H].b.ra;else this.Z=m[H].b.ra;this.i=V("gsc-control");if(e!=c){ia(this,e);this[w].onkeyup=this.Of;this[w].onpaste=this.Pf}else{if(f==c)f=this.i;d=new m[H].L(b,f);d.Ge(this,this.submit);d.Fe(this,this.dc);ia(this,d[w]);this.kb&&d.Kf()}this.Aa=V("gsc-resultsbox-invisible");if(this.Z==m[H].b.Ka){this.ca=V("gsc-tabsAreaInvisible");T(this.i,this.ca);this.p=[];for(d=this.J=0;d<this.d[D];d++)this.de(d)}this.da=this.i;
if(this.ua){this.da=V("gsc-wrapper");this.O=V("gsc-adBlockInvisible");this.U=V("gsc-adBlockInvisible");T(this.da,this.O);T(this.i,this.U);T(this.i,this.da);this.ac&&wb(this.i,"gsc-ad-preview")}T(this.da,this.Aa);for(d=0;d<this.d[D];d++){this.ce(d);if(this.Z==m[H].b.Ka){Z(this.p[d].V,"gsc-tabHeader");Z(this.p[d].ga,"gsc-tabData");if(d==this.J){Z(this.p[d].V,"gsc-tabhActive");Z(this.p[d].ga,"gsc-tabdActive")}else{Z(this.p[d].V,"gsc-tabhInactive");Z(this.p[d].ga,"gsc-tabdInactive")}}}if(a&&typeof a==
"string")a=p.getElementById(a);if(a){jb(a,this.i);if((a=this.Df())&&a<300){this.Uf=b;Z(this.i,"gsc-narrow")}}};O(m[H].b[E],"draw",m[H].b[E].Ib);m[H].b[E].xg=function(a){switch(a){case m[H].b.Gd:case m[H].b.Eb:case m[H].b.Fd:this.Qb=a;break;default:this.Qb=m[H].b.Eb;break}};O(m[H].b[E],"setTimeoutInterval",m[H].b[E].xg);m[H].b[E].rg=function(a,d,e){if(e)switch(e){case m[H].b.nd:case m[H].b.md:case m[H].b.ld:case m[H].b.kd:case m[H].b.jd:this.sc=P[e];break;default:this.sc=e;break}this.Lb=hb(a,d)};
O(m[H].b[E],"setOnKeepCallback",m[H].b[E].rg);M=m[H].b[E];M.vb=function(a){var d=a.w;if(this.kb){if(d=="web"&&a.D!=m[H].g.Y)return g;return b}else return d=="blog"||d=="image"?b:g};
M.Dg=function(a){if(this.J!=a){$(this.p[this.J].V,"gsc-tabhActive");$(this.p[this.J].ga,"gsc-tabdActive");Z(this.p[this.J].V,"gsc-tabhInactive");Z(this.p[this.J].ga,"gsc-tabdInactive");this.J=a;Z(this.p[this.J].V,"gsc-tabhActive");Z(this.p[this.J].ga,"gsc-tabdActive");$(this.p[this.J].V,"gsc-tabhInactive");$(this.p[this.J].ga,"gsc-tabdInactive");if(this.ua)this.vb(this.p[this.J].Cc)?this.ob():this.fe()}};
M.ob=function(){if(this.ua){t(this.O,"gsc-adBlockInvisible");t(this.U,"gsc-adBlockInvisible");this.Ca&&zb(this.da,"gsc-thinWrapper")}};M.fe=function(){if(this.ua){this.vc>0?yb(this.O,"gsc-adBlock"):yb(this.O,"gsc-adBlockInvisible");if(this.Ca)if(this.uc>0){t(this.U,"gsc-adBlockVertical");Z(this.da,"gsc-thinWrapper")}else{t(this.U,"gsc-adBlockInvisible");$(this.da,"gsc-thinWrapper")}}};M.submit=function(){this[w][xa][D]?this[L]():this.dc();return g};O(m[H].b[E],"submit",m[H].b[E].submit);M=m[H].b[E];
M.Hb=function(){if(this.ca&&!this.Cg&&(!this.kb||this.Rd))t(this.ca,"gsc-tabsArea")};M.Mf=function(a,d,e){d[v](a);(new Mb(e,"parent",a)).sf()};M.Nf=function(a,d,e){var f=k;(f.postMessage?f:f[Ma].postMessage?f[Ma]:c)?this.lf(a,e):this.kf(a,e);d[v](a)};M.re=function(a,d,e){t(e,"gsc-adBlockNoHeight");d=this.Fb.Jg(this.tf(a,d,e));var f;if(f=k[Wa]?k[Wa][Oa]:c){f=Nb(f);var h=k[Wa]?k[Wa][Oa]:c;f=(h?h[ya]("Opera")!=0&&h[ya]("MSIE")!=-1:g)&&(f==6||f==7)}else f=g;f&&!Ob()?this.Mf(a,e,d):this.Nf(a,e,d)};
qa(M,function(a){if(a){a=a;this[w].onfocus&&this[w].onfocus();ka(this[w],a)}else a=this[w][xa];this.Fb=c;if(a[D]){this.gb=g;t(this.Aa,"gsc-resultsbox-visible");this.Hb();this.Wa=m[J].createGuidArg_();var d=this.ua;if(d&&this.Jf&&this.Z==m[H].b.ra)d=g;var e=this.Qf();if(e==o&&!this.Qa&&!this.mb)d=g;if(d){this.mg();d="w"+this.Ga;if(this.Ca)d=d+"n"+this.xa;if(this.mb){d="w"+this.Ga;d=m[J][Fa]+"/GafsAds?q="+i(a)+"&hl="+i(m[H][K])+"&ad="+i(d)+"&source="+this.d[0].f.wb+"&"+this.Wa}else d="http://www.google.com/"+
(e?"cse":"search")+"?output=js&num=0&ie=utf8&oe=utf8&q="+i(a)+"&hl="+i(m[H][K])+"&ad="+i(d)+"&js=uds&"+this.Wa;if(e)d+="&cx="+e;if(this.Qa)d+="&client="+i(this.Qa);if(this.Sd)d+="&channel="+i(this.Sd);if(this.ac)d+="&adtest=on";if(this.Td)d+="&ip="+i(this.Td);if(this.Ud)d+="&adsafe="+i(this.Ud);if(this.Wd)d+="&useragent="+i(this.Wd);if(this.mb){ma(this.Aa[G],"hidden");this.Fb=new m[H].cb;this.ob();r(this.O,"");r(this.U,"");if(fb()||gb())d+="&nocache="+_json_cache_defeater_++;d+="&referer="+k[Pa].host;
if(this.Ga>0){if(this.Ig)d=d[z](/&ad=[^&]*/,"&ad=n1w0");var f=this.je();e=d.substring(0,2E3);e=e[z](/%\w?$/,"");f.src=e;this.re(f,g,this.O)}if(this.Ca&&this.xa>0){e=d[z](/&ad=[^&]*/,"&ad="+("n"+this.xa));d=this.je();e=e.substring(0,2E3);e=e[z](/%\w?$/,"");d.src=e;this.re(d,b,this.U)}}else{var h=this;k.google_afs_request_done=function(l){h.Wf(l)};eb(d)}}for(e=0;e<this.d[D];e++){if(!this.d[e].pb){$(this.d[e].i,"gsc-resultsbox-invisible");Z(this.d[e].i,"gsc-resultsbox-visible")}this.Bc&&this.Bc(this,
this.d[e].f,a);if(this.d[e].f.pa)this.d[e].f.pa=c;this.d[e].f.Wa=this.Wa;this.d[e].f[L](a)}this.Fb&&this.Fb.start(2E3)}});O(m[H].b[E],"execute",m[H].b[E][L]);M=m[H].b[E];M.tf=function(a,d,e){var f=this;return function(h){m[J][Ea]("afsq","1");var l=h&&h>40;if(d)f.uc=l?1:0;else f.vc=l?1:0;f.Sf(a,h,l);if(f.ca)if(f.vb(f.p[f.J].Cc))l=g;l?f.fe():yb(e,"gsc-adBlockInvisible")}};
M.kf=function(a,d){var e=function(){var f=0;try{var h=a.contentWindow;if(h.frames&&h.frames[D])f=h.frames[0].name}catch(l){}d(f)};if(fb())ha(a,function(){if(a[Aa]=="loaded"||a[Aa]=="complete"){ha(a,c);e()}});else ga(a,function(){ga(a,c);e()})};
M.lf=function(a,d){var e=function(f){f=f?f:k[Za];if(f.source==a.contentWindow){if(k.detachEvent)k.detachEvent("onmessage",e);else k.removeEventListener&&k.removeEventListener("message",e,g);d(f.data)}};if(k.attachEvent)k.attachEvent("onmessage",e);else k.addEventListener&&k.addEventListener("message",e,g)};
M.je=function(){var a=p[A]("iframe");a.name="google_afs_ads_frame";u(a,0);a.frameBorder=0;a.marginWidth=0;a.marginHeight=0;a.vspace=0;a.hspace=0;a[C]("allowTransparency",b);a.scrolling="no";ma(a[G],"hidden");return a};M.Sf=function(a,d,e){ja(a,"100%");if(e){u(a[G],d+"px");ma(a[G],"visible")}else{u(a[G],"0px");ma(a[G],"hidden")}};M.Qf=function(){for(var a=0;a<this.d[D];a++){var d=this.d[a].f;if(d.w=="web")if(d.D!=m[H].g.Y)if(d.D==m[H].g.ib)return d.l}return c};
M.Wf=function(a){k.google_afs_request_done=c;if(this.O){m[J][Ea]("afsq","1");r(this.O,"");r(this.U,"");this.vc=this.uc=0;if(!a||a[D]<1)this.ob();else{if(!this.ca)for(var d=0;d<this.d[D];d++){var e=this.d[d].f;if(this.vb(e)){this.ob();return}}t(this.O,"gsc-adBlock");e=g;var f=p[A]("h2");d="";if(this.ac)d="*DEBUG* ";d+=P["ads-by-google"];r(f,d);T(this.O,f);var h=a[D];for(d=0;d<h;d++){var l=a[d];if(l[Da]=="text/wide"){this.vc++;var n=V("gsc-ad"),y=Y(l.url,l.line1,m[H].a.db);T(n,y);y=p[A]("cite");r(y,
l.visible_url);T(n,y);y=mb();r(y,l.line2);T(n,y);T(this.O,n)}else if(this.Ca){this.uc++;if(!e){e=b;Z(this.da,"gsc-thinWrapper");T(this.U,f[Ca](b));t(this.U,"gsc-adBlockVertical")}n=V("gsc-ad");y=Y(l.url,l.line1,m[H].a.db);T(n,y);y=mb();r(y,l.line2+"<br/>"+l.line3);T(n,y);y=p[A]("cite");r(y,l.visible_url);T(n,y);T(this.U,n)}}this.Ca&&!e&&zb(this.da,"gsc-thinWrapper");if(this.ca){e=this.p[this.J].Cc;this.vb(e)&&this.ob()}this.ub&&this.Be&&this.ub(this,"ads")}}};
M.Yf=function(){var a=this[w][xa];if(a&&a!=""){this.Xa&&k[sa](this.Xa);this.Xa=k[La](R(this,m[H].b[E][L],[c]),this.Qb)}};M.Zf=function(){this.Xa&&k[sa](this.Xa);this.Xa=k[La](R(this,m[H].b[E][L],[c]),this.Qb)};M.mg=function(){var a,d;switch(this.Vd){case m[H].a.Ma:a=3;d=5;break;case m[H].a.la:a=2;d=4;break;case m[H].a.X:default:a=1;d=2;break}if(this.Ga==o)this.Ga=a;if(this.xa==o)this.xa=d};
M.S=function(a){switch(a){case m[H].a.la:case m[H].a.Ma:this.Mb=m[H].a.la;break;default:case m[H].a.X:this.Mb=m[H].a.X;break}for(var d=0;d<this.d[D];d++)this.d[d].f.S(a);this.Vd=a};O(m[H].b[E],"setResultSetSize",m[H].b[E].S);m[H].b[E].xb=function(a){this.Fa=a;for(var d=0;d<this.d[D];d++)this.d[d].f.xb(a)};O(m[H].b[E],"setLinkTarget",m[H].b[E].xb);m[H].b[E].yb=function(a){for(var d=0;d<this.d[D];d++)this.d[d].t.yb(a)};O(m[H].b[E],"setNoResultsString",m[H].b[E].yb);M=m[H].b[E];
M.bg=function(a){a.kc?this.Ia(a,g):this.Ia(a,b)};M.Ia=function(a,d,e){if(d){$(a.Ja,"gsc-twiddle-closed");Z(a.Ja,"gsc-twiddle-opened");a.kc=b;pa(a.Q[G],"block")}else{$(a.Ja,"gsc-twiddle-opened");Z(a.Ja,"gsc-twiddle-closed");a.kc=g;pa(a.Q[G],"none");r(a.nb,e?"(0)":"("+a.f.results[D]+")")}};M.Xf=function(a){this.Ab(a,g,b);return g};M.ag=function(a){if(a.f.Ta)a.fc?this.Ab(a,g,b):this.Ab(a,b,b)};
M.Ab=function(a,d,e){if(d){if(a.P&&a.f.fa){Z(a.P,"gsc-twiddle-opened");$(a.P,"gsc-twiddle-closed");r(a.P,P[Ra]);a.fc=b;pa(a.va[G],"block");a.f.fa(a.Ua,b)}}else if(a.P&&a.f.fa){$(a.P,"gsc-twiddle-opened");Z(a.P,"gsc-twiddle-closed");r(a.P,P.blank);a.fc=g;a.f.fa(a.Ua,g);pa(a.va[G],"none");e&&this[L]()}};M.$f=function(a,d){if(this.Lb){d.f.Lf();this.Lb(a)}};M.mf=function(){this.gb=b};O(m[H].b[E],"cancelSearch",m[H].b[E].mf);
m[H].b[E].dc=function(){ka(this[w],"");this[w].onblur&&this[w].onblur();t(this.Aa,"gsc-resultsbox-invisible");this.ca&&yb(this.ca,"gsc-tabsAreaInvisible");this.O&&yb(this.O,"gsc-adBlockInvisible");if(this.U){t(this.U,"gsc-adBlockInvisible");$(this.da,"gsc-thinWrapper")}for(var a=0;a<this.d[D];a++){if(!this.d[a].pb){$(this.d[a].i,"gsc-resultsbox-visible");Z(this.d[a].i,"gsc-resultsbox-invisible")}var d=this.d[a];ib(d.Q);d.v=c;this.Ia(d,g,b);this.Ab(d,g,g)}};O(m[H].b[E],"clearAllResults",m[H].b[E].dc);
m[H].b[E].W=function(a){if(this.mb&&a==this.d[this.J])ma(this.Aa[G],"visible");var d,e,f=g,h;if(!this.gb){ib(a.Q);a.v=c;this.Ia(a,g,b);this.Ab(a,g,g);a.Dc(m[H].z.Xb);var l=a.f.context,n=this.ca&&l;if(this.kb&&!this.Rd){if(n){h=l[Ha];for(e=0;e<this.p[D];e++){d=this.p[e];if(d.w==a.f.w){var y=a.f;h&&!a.f.bb&&jb(d.V,kb(h));break}}}this.Rd=b;this.Hb()}if((d=a.f.promotions)&&d[D]>0)for(e=0;e<d[D];e++){var B=d[e];B.html||a.f.be(B);if(B.html){h=V(a.f.nc());Z(h,"gsc-result");var W=B.html[Ca](b);T(h,W);T(a.Q,
h)}}B=a.f.results;if(a.f.lb&&a.f.completionStatus>=400){B=[];B[ra](a.f.Af())}else if(B[D]==0&&a.t.rb&&a.f.completionStatus==200){B=[];B[ra](a.f.Bf(a.t.rb))}for(e=0;e<B[D];e++){d=B[e];d.html||a.f.C(d);if(d.html){f=b;h=V(a.f.nc());Z(h,"gsc-result");a.f.Cb&&wb(h,"gsc-result-"+a.f.Cb);W=d.html[Ca](b);if(d.GsearchResultClass==m[H].c.B){if(a.t.M)if(a.t.M[x]!=a.f.M[x]||a.t.M[Xa]!=a.f.M[Xa])for(var S=W.getElementsByTagName("img"),wa=0;wa<S[D];wa++)m[H].a.$a(d.tbWidth,d.tbHeight,a.t.M,S[wa],b)}else if(d.GsearchResultClass==
m[H].r.B)if(a.t.Tb){S=W.getElementsByTagName("img");for(wa=0;wa<S[D];wa++)m[H].a.$a(d.tbWidth,d.tbHeight,a.t.Tb,S[wa])}T(h,W);if(this.Lb){W=this.sc;S=U("","gsc-keeper");r(S,W);T(h,S);oa(S,R(this,m[H].b[E].$f,[d,a]))}if(e>=a.f.we){if(!a.v){a.v=V("gsc-expansionArea");T(a.Q,a.v);if(a.t.$==m[H].b.Da)pa(a.v[G],"none")}T(a.v,h)}else T(a.Q,h)}}if(!a.v&&a.f[F]){a.v=V("gsc-expansionArea");T(a.Q,a.v)}if(a.v&&a.f.u&&a.f.gwsUrl){h=Y(a.f.gwsUrl,P["more-results"]+"&nbsp;&raquo;",a.f.s(),"gsc-trailing-more-results");
if(a.f[F]){e=V("gsc-cursor-box");d=this.vf(a);e[v](d);a.f[F].currentPageIndex==a.f[F].pages[D]-1&&e[v](h);T(a.v,e)}else T(a.v,h)}if(f){r(a.nb,"("+a.f.results[D]+")");a.t.$==m[H].b.Da||a.t.$==m[H].b.La?this.Ia(a,b):this.Ia(a,g);(e=a.f.le())&&T(a.Q,e)}else{r(a.nb,"(0)");r(a.Q,"");this.Ia(a,g)}a.t.$=a.t.xe;this.ub&&this.ub(this,a.f);if(this.kb&&n&&!this.ff&&l.facets){a=this[w][xa];l=l.facets;for(e=0;e<l[D];e++){n=l[e];f=new m[H].g;y&&y.l&&f.qa(y.l,n.label);f.Bb(n.anchor);this.Oa(f);f.S(y.za);f[L](a)}for(e=
0;e<this.d[D];e++)if(!this.p[e]){this.de(e);this.ce(e);Z(this.p[e].V,"gsc-tabHeader");Z(this.p[e].ga,"gsc-tabData");Z(this.p[e].V,"gsc-tabhInactive");Z(this.p[e].ga,"gsc-tabdInactive")}this.ff=b}}};O(m[H].b[E],"onSearchComplete",m[H].b[E].W);m[H].b[E].vf=function(a){for(var d=V("gsc-cursor"),e=a.f[F],f=0;f<e.pages[D];f++){var h="gsc-cursor-page";if(f==e.currentPageIndex)h+=" gsc-cursor-current-page";h=U(e.pages[f].label,h);oa(h,R(this,m[H].b[E].eg,[a,f]));d[v](h)}return d};
m[H].b.Bd={border:"border",borderColor:"border-color",borderStyle:"border-style",borderWidth:"border-width",borderTop:"border-top",borderTopColor:"border-top-color",borderTopStyle:"border-top-style",borderTopWidth:"border-top-width",borderRight:"border-right",borderRightColor:"border-right-color",borderRightStyle:"border-right-style",borderRightWidth:"border-right-width",borderBottom:"border-bottom",borderBottomColor:"border-bottom-color",borderBottomStyle:"border-bottom-style",borderBottomWidth:"border-bottom-width",
borderLeft:"border-left",borderLeftColor:"border-left-color",borderLeftStyle:"border-left-style",borderLeftWidth:"border-left-width",color:"color",cssFloat:"float",styleFloat:"float",clear:"clear",cursor:"cursor",display:"display",font:"font",fontFamily:"font-family",fontSize:"font-size",fontStyle:"font-style",fontWeight:"font-weight",height:"height",margin:"margin",marginTop:"margin-top",marginRight:"margin-right",marginBottom:"margin-bottom",marginLeft:"margin-left",overflow:"overflow",padding:"padding",
paddingTop:"padding-top",paddingRight:"padding-right",paddingBottom:"padding-bottom",paddingLeft:"padding-left",textAlign:"text-align",textDecoration:"text-decoration",textTransform:"text-transform",verticalAlign:"vertical-align",visibility:"visibility",width:"width"};
m[H].b.se=function(a,d){if(gb())alert("google.search.SearchControl.inlineCurrentStyle is not supported on Safari");else{var e=b;if(d)e=d;if(e)for(d=0;d<a.childNodes[D];d++)m[H].b.se(a.childNodes[d],b);if(a.nodeType==1){var f,h;d=e=g;if(k[Qa]){f=k[Qa](a,c);e=h=b}else if(a[Sa]){f=a[Sa];h=g;e=b}if(e){for(var l in f)if(m[H].b.Bd[l]){e=m[H].b.Bd[l];var n=f[l];if(l=="display"&&n=="none"){r(a,"");d=b}if(f[l]!="")h?a[G].setProperty(e,n):a[G][C](e,n)}if(d)if(!h)a.outerHTML='<div style="display:none"/>'}}}};
O(m[H].b,"inlineCurrentStyle",m[H].b.se);m[H].b[E].Df=function(a){a=a?a:this.i;var d=c;if(k[Qa])d=k[Qa](a,c);else if(a[Sa])d=a[Sa];else if(p.defaultView[Qa])d=p.defaultView[Qa](a,c);return d?ca(d[x],10):300};m[H].b[E].zb=function(a,d){this.ub=hb(a,d)};O(m[H].b[E],"setSearchCompleteCallback",m[H].b[E].zb);m[H].b[E].vg=function(a,d){this.Bc=hb(a,d)};O(m[H].b[E],"setSearchStartingCallback",m[H].b[E].vg);
m[H].b[E].wc=function(a,d){a.Dc(d);var e=g;switch(d){default:case m[H].z.Zb:if(a.v)pa(a.v[G],"none");break;case m[H].z.Yb:if(a.v)pa(a.v[G],"block");if(a.f.za!=m[H].a.X)e=b;a.f.S(m[H].a.X);break;case m[H].z.Cd:if(a.v)pa(a.v[G],"block");if(a.f.za!=m[H].a.la)e=b;a.f.S(m[H].a.la);break}if(e){d=this[w][xa];if(d[D]){this.gb=g;t(this.Aa,"gsc-resultsbox-visible");this.Hb();if(!a.pb){$(a.i,"gsc-resultsbox-invisible");Z(a.i,"gsc-resultsbox-visible")}a.t.$=m[H].b.La;a.f[L](d)}}};
m[H].b[E].eg=function(a,d){this.gb=g;t(this.Aa,"gsc-resultsbox-visible");this.Hb();if(!a.pb){$(a.i,"gsc-resultsbox-invisible");Z(a.i,"gsc-resultsbox-visible")}a.t.$=m[H].b.La;a.f.ne(d)};
m[H].L=function(a,d,e){var f=tb("gsc-search-box");f.acceptCharset="utf-8";var h=c,l=P["search-uc"],n=P[H];if(e){if(e.buttonText)n=l=e.buttonText;if(e.clickableBrandingUrl){h="http://www.google.com";if(typeof e.clickableBrandingUrl=="string"&&e.clickableBrandingUrl[za](/^http:\/\/[a-z]*\.google\.com/))h=e.clickableBrandingUrl;h=rb(h,c,"_BLANK");t(h,"gsc-branding-clickable")}}this.Nb=ub(l,"gsc-search-button");s(this.Nb,n);if(a){e="gsc-branding-img";this.ec=U(P.blank,"gsc-clear-button");s(this.ec,P["clear-results"])}else e=
"gsc-branding-img-noclear";ia(this,vb(c,"gsc-input",c));this[w].name="search";s(this[w],n);n=nb(c,c,"gsc-search-box");T(f,n);n=ob(n,0);this.te=X(n,"gsc-input");l=X(n,"gsc-search-button");if(a){a=X(n,"gsc-clear-button");T(a,this.ec)}T(this.te,this[w]);T(l,this.Nb);a=nb(c,c,"gsc-branding");T(f,a);n=ob(a,0);this.userDefinedCell=X(n,"gsc-branding-user-defined");a=X(n,"gsc-branding-text");n=X(n,e);l=U(P["powered-by"],"gsc-branding-text");var y=m[J][Fa]+"/css/small-logo.png";e=e;if(fb()){e=V(e);e[G].filter=
'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+y+'")';ja(e[G],"51px");u(e[G],"15px")}else e=qb(y,c,c,e);e=e;T(a,l);if(h){T(h,e);T(n,h)}else T(n,e);this.Ae=f;ib(d);T(d,this.Ae)};N("google.search.SearchForm",m[H].L);m[H].L[E].Ge=function(a,d){this.Ke=R(this,this.Bg,[this]);this.Ob=R(a,d,[this]);this.Ae.onsubmit=this.Ke;oa(this.Nb,this.Ke)};O(m[H].L[E],"setOnSubmitCallback",m[H].L[E].Ge);m[H].L[E].Fe=function(a,d){oa(this.ec,R(a,d,[this]))};O(m[H].L[E],"setOnClearCallback",m[H].L[E].Fe);
m[H].L[E].Bg=function(){var a=this.te.offsetWidth,d=this[w][xa];this.Ob&&this.Ob();if(fb()){var e=this,f;f=d[D]*8>=a?a-6:"99%";k[La](function(){ja(e[w][G],f)},1)}return g};qa(m[H].L[E],function(a){if(a)ka(this[w],a);this.Ob&&this.Ob()});O(m[H].L[E],"execute",m[H].L[E][L]);
m[H].L[E].Kf=function(){var a=this[w],d=function(){if(a[xa]=="")a[G].background="#FFFFFF url(http://www.google.com/coop/intl/"+m[H][K]+"/images/google_custom_search_watermark.gif) left no-repeat"};a.onblur=d;a.onfocus=function(){a[G].background="#FFFFFF"};d()};m[H].cb=function(){this.xc=0;this.ie=g;this.sb=[]};m[H].cb[E].Jg=function(a){this.xc++;var d=this;return function(){for(var e=[],f=0;f<arguments[D];++f)e[ra](arguments[f]);if(d.ie)this.ge(a,e);else{d.sb[ra]([a,e]);d.xc--;d.xc==0&&d.he()}}};
m[H].cb[E].he=function(){for(var a=0;a<this.sb[D];a++)this.ge(this.sb[a][0],this.sb[a][1]);this.sb=[];this.ie=b};m[H].cb[E].ge=function(a,d){k[La](function(){a[Va](c,d)},0)};m[H].cb[E].start=function(a){k[La](R(this,this.he,[]),a)};m[H].j=function(a,d){m[H].b[I](this);this.kb=b;this.S(m[H].a.la);this.jb("",{iframes:b});this.hb=new m[H].g;if(a==o){a={crefUrl:"http://www.google.com/coop/tools/autocse?referer="+k[Pa]};this.Kg=b}this.hb.qa(a);this.hb.Pb=P.cse;d&&d[m[H].a.Na]&&this.hb.R(m[H].a.Na,d[m[H].a.Na]);this.Oa(this.hb);this.yb(m[H].b.qd);this.Fg=(new Date)[Ga]()};N("google.search.CustomSearchControl",m[H].j);$a(m[H].j,m[H].b);
m[H].j[E].Ib=function(a,d){(d=d)||(d=new m[H].T);d.De(m[H].b.Ka);if(this.Kg&&this.d[D]==1)this.Cg=b;m[H].b[E].Ib[I](this,a,d);t(this.i,"gsc-control-cse")};O(m[H].j[E],"draw",m[H].j[E].Ib);
qa(m[H].j[E],function(a){var d=this.i.offsetWidth;$(this.da,"gsc-thinWrapper");if(d<m[H].j.Xe)this.ua=g;else if(d<m[H].j.Ze)this.jb(this.Qa,{useNarrowTopAd:b,includeVerticalAds:g});else{d={useNarrowTopAd:g,includeVerticalAds:d>m[H].j.Ye};if(this.ve)d.numTopAds=m[H].j.$e;this.jb(this.Qa,d)}if((new Date)[Ga]()-this.Fg<m[H].j.Le&&this.ua){d=fa(k[Pa].href)[z](/\+/g," ");var e=fa(a)[z](/\+/g," ");this.ua=d[ya](e)!=-1}m[H].b[E][L][I](this,a)});O(m[H].j[E],"execute",m[H].j[E][L]);m[H].j[E].Bb=function(a){this.hb.Bb(a)};
O(m[H].j[E],"setUserDefinedLabel",m[H].j[E].Bb);m[H].j[E].Oa=function(a,d){m[H].b[E].Oa[I](this,a,d);a.wb="gcsc"};O(m[H].j[E],"addSearcher",m[H].j[E].Oa);m[H].j[E].xf=function(){m[H].b[E].jb("",{numTopAds:0,numSideAds:0});this.Qa=c;this.Be=g};O(m[H].j[E],"disableAds",m[H].j[E].xf);m[H].j[E].pg=function(){this.ve=b};O(m[H].j[E],"setMoreAds",m[H].j[E].pg);m[H].j.Me="";O(m[H].j,"AUTO_PUBID",m[H].j.Me);m[H].j.Xe=250;m[H].j.Ze=500;m[H].j.Ye=800;m[H].j.Le=500;m[H].j[E].ve=g;m[H].j.$e=4;m[H].r=function(){m[H].a[I](this);this.w="video";this.Ba="/GvideoSearch";this.na="http://video.google.com/videosearch";this.N=g;this.Ta=b;this.fa=hb(this,this.oa);this.Sa="gsc-videoConfig";this.o=c};N("google.search.VideoSearch",m[H].r);$a(m[H].r,m[H].a);m[H].r.B="GvideoSearch";O(m[H].r,"RESULT_CLASS",m[H].r.B);m[H].r.n=[];m[H].r.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].r.n[l];m[H].r.n[l]=c;a.W(d,e,f,h)};O(m[H].r,"RawCompletion",m[H].r.I);
m[H].r[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].r.n,this):e;d=this.ya(d==c?"google.search.VideoSearch.RawCompletion":d,e,f);if(a){a=a;if(this.H)a=a+" "+this.H;a="&q="+i(a);if(this.N)a+="&scoring=d";d+=a;this.u=a;if(f&&f!=0)this.u=this.u+"&start="+f}return d};
m[H].r[E].C=function(a){a.html&&delete a.html;var d=V(this.ia());Z(d,"gs-result");var e=V("gs-image-box"),f=V("gs-text-box"),h=nb(),l=ob(h,0),n=X(l,"gs-image-box");l=X(l,"gs-text-box");T(n,e);T(l,f);T(d,h);h=m[H].a.$a(a.tbWidth,a.tbHeight,this.M);h=qb(a.tbUrl,h[x],h[Xa],"gs-image");n=rb(a.url,c,this.s(),"gs-image");t(n,"gs-image");T(n,h);T(e,n);e=Y(a.url,a[Ha],this.s(),"gs-title");T(f,e);e=U(a[va],"gs-snippet");if(fb())u(e[G],"2.6em");T(f,e);e=U(this.Va(new Date(a.published)),"gs-publishedDate");
T(f,e);e=Y("http://"+a.publisher,a.publisher,this.s(),"gs-publisher");T(f,e);a.html=d;this.ta(a.html)};O(m[H].r[E],"createResultHtml",m[H].r[E].C);
m[H].r.wf=function(a,d){var e=c;if(a.playUrl&&a.playUrl!=""){e=a.playUrl;var f="gsc-video-player";if(d)f=d;if(bb("opera")){var h=p[A]("object");t(h,f);h[C]("type","application/x-shockwave-flash");h[C]("data",e)}else{h=p[A]("embed");t(h,f);h[C]("type","application/x-shockwave-flash");h[C]("src",e);if(a.videoType)a.videoType=="Google"?h[C]("bgcolor","#000000"):h[C]("wmode","transparent");else h[C]("bgcolor","#000000")}e=V(d);e[v](h)}return e};O(m[H].r,"createPlayer",m[H].r.wf);
m[H].r[E].K=function(a){this.N=a==m[H].a.ma?b:g};O(m[H].r[E],"setResultOrder",m[H].r[E].K);m[H].r[E].oa=function(a,d){if(d){if(this.o==c){d=V("gsc-configSetting");this.o=xb(c,"0",this.N,"gsc-configSettingCheckbox");T(d,this.o);T(d,U(P["sort-by-date"],"gsc-configSettingCheckboxLabel"));var e=V("gsc-configSettingSubmit");T(e,ub(P[Ra],"gsc-configSettingSubmit"));T(d,e);T(a,d)}else na(this.o,this.N);this.o[Ba]()}else if(this.o)this.o[Ka]?this.K(m[H].a.ma):this.K(m[H].a.eb)};m[H].g=function(){m[H].a[I](this);this.w="web";this.Ba="/GwebSearch";this.na="http://www.google.com/search";this.l=c;this.D=m[H].g.Y;this.F=this.Ha=this.wa=this.jc=this.Ea=c};N("google.search.WebSearch",m[H].g);$a(m[H].g,m[H].a);m[H].g.B="GwebSearch";O(m[H].g,"RESULT_CLASS",m[H].g.B);m[H].g.ib="cx";O(m[H].g,"cxRestriction_CX",m[H].g.ib);m[H].g.Gb="cref";O(m[H].g,"cxRestriction_CREF",m[H].g.Gb);m[H].g.Y="none";O(m[H].g,"cxRestriction_NONE",m[H].g.Y);m[H].g.n=[];
m[H].g.I=function(a,d,e,f,h){var l=0;if(a)l=ca(a,10);a=m[H].g.n[l];m[H].g.n[l]=c;a.W(d,e,f,h)};O(m[H].g,"RawCompletion",m[H].g.I);m[H].g[E].Hg=function(a){return a[z](/\s+$/,"")[z](/^\s+/,"")};m[H].g[E].Vf=function(a){a=this.Hg(a);return a[z](/\s+/g,"_")[Ya]()};
m[H].g[E].ha=function(a,d,e,f){e=e==c?m[H].a.ka(m[H].g.n,this):e;if(this.D==m[H].g.Y&&this.Jh==m[H].a.Ma)throw createException("The resultset size google.search.Search.FILTERED_CSE_RESULTSET can  only be used for querying filtered Custom Search Engines.");d=this.ya(d==c?"google.search.WebSearch.RawCompletion":d,e,f);if(a){a=a;if(this.H)a=a+" "+this.H;if(this.l&&this.D!=m[H].g.Y&&this.jc){e=this.jc;var h=a;if(this.Ea!=c)h=a+" more:"+this.Ea;e=e[z](/__HL__/,m[H][K]);this.wa=e=e[z](/__QUERY__/,i(h))}if(this.l&&
this.D==m[H].g.Y)a=a+" site:"+this.l;e="";if(this.l&&this.D!=m[H].g.Y){if(this.D==m[H].g.ib)e=e+"&cx="+this.l;else if(this.D==m[H].g.Gb)e=e+"&cref="+i(this.l);if(this.Ea!=c)a=a+" more:"+this.Ea}e=e+"&q="+i(a);if(this.Ha)e=e+"&safe="+this.Ha;if(this.F)e+=this.F;d+=e;this.u=e;if(f&&f!=0)this.u=this.u+"&start="+f}if(k.google[J].GoogleLocale)d+="&gl="+i(k.google[J].GoogleLocale);return d};
m[H].g[E].be=function(a){a.html&&delete a.html;var d=V("gs-promotion");Z(d,"gs-result");var e=sb(a.url,a[Ha],this.s(),"gs-title");T(d,e);e=nb(0,0);var f=ob(e,0),h;T(d,e);if(a.image){e=a.image;e=qb(e.url,e[x],e[Xa],"gs-promotion-image");h=pb("gs-promotion-image-td");T(h,e);T(f,h)}if(a.bodyLines){h=pb();var l=V();T(f,h);T(h,l);f=a.bodyLines;for(h=0;h<f[D];h++){e=f[h];var n=e[Ha],y=e.url,B=e.visibleUrl;e=V("gs-snippet");if(y&&B){y=rb(y,B,this.s(),"gs-title");T(e,y)}n&&T(e,kb(n));T(l,e)}}e=lb(a.visibleUrl,
"gs-visibleUrl");T(l,e);Z(e,"gs-visibleUrl-short");a.html=d};O(m[H].g[E],"createPromotionHtml",m[H].g[E].be);m[H].g[E].ee=function(a,d,e,f){var h=V("gs-image-box gs-web-image-box");if(e==o)e=100;a=qb(a,e,f,"gs-image");d=rb(d,c,this.s());t(d,"gs-image");T(d,a);T(h,d);return h};m[H].g[E].Xd=function(a,d){if(d.url){var e=sb(d.url,d.label,this.s(),"gs-action");d["class"]&&wb(e,d["class"]);a.actionHtml||(a.actionHtml=V("gs-actions"));T(a.actionHtml,e)}};
m[H].g[E].C=function(a){a.html&&delete a.html;a.thumbnailHtml&&delete a.thumbnailHtml;a.actionHtml&&delete a.actionHtml;var d=V(this.ia());Z(d,"gs-result");if(a.richSnippet){var e=a.richSnippet;if(e.thumbnail&&e.thumbnail.src)a.thumbnailHtml=this.ee(e.thumbnail.src,a.unescapedUrl,e.thumbnail[x],e.thumbnail[Xa]);else if(e[Ma]&&e[Ma].thumbnailUrl)a.thumbnailHtml=this.ee(e[Ma].thumbnailUrl,a.unescapedUrl);if(e[Ua])if(e[Ua][D]&&e[Ua][0])for(var f=0;f<e[Ua][D];f++)this.Xd(a,e[Ua][f]);else this.Xd(a,e[Ua]);
a.thumbnailHtml&&T(d,a.thumbnailHtml[Ca](b))}e=Y(a.unescapedUrl,a[Ha],this.s(),"gs-title");T(d,e);e=U(a[va],"gs-snippet");T(d,e);e=U(a.visibleUrl,"gs-visibleUrl");T(d,e);Z(e,"gs-visibleUrl-short");e=a.unescapedUrl[ya](a.visibleUrl);f=a.visibleUrl;if(e!=-1&&e!=0)f=a.unescapedUrl.substring(e);e=U(f,"gs-visibleUrl");Z(e,"gs-visibleUrl-long");T(d,e);a.actionHtml&&T(d,a.actionHtml[Ca](b));a.html=d;this.ta(a.html)};O(m[H].g[E],"createResultHtml",m[H].g[E].C);
m[H].g[E].qa=function(a,d,e){this.lb=this.wa=c;var f=g;if(a==c||typeof a=="string"&&a==""){f=g;this.l=c;this.D=m[H].g.Y;this.lb=this.Ea=c}else if(typeof a=="string")if(f=a[za](/(^partner-pub-\d*:.*)|(^\d{21}:.*)/)){this.l=a;this.D=m[H].g.ib}else{this.l=a;this.D=m[H].g.Y}else if(a.siteUrl){f=g;this.l=a.siteUrl}else if(a.cseId){f=b;this.l=a.cseId;this.D=m[H].g.ib}else if(a.crefUrl){f=b;this.l=a.crefUrl;this.D=m[H].g.Gb;this.lb=P["linked-cse-error-results"]}else{f=g;this.l=c;this.D=m[H].g.Y;this.Ea=
c}if(f){if(d)this.Ea=this.Vf(d);if(e)if(e[za](/__HL__/)&&e[za](/__QUERY__/))this.jc=e;if(this.D==m[H].g.Gb)if(!this.l[za](/^http:\/\/www\.google\.com\/coop\/tools\/autocse\?referer=/))(new Image).src="http://www.google.com/cse/tools/ping?cref="+i(this.l)+"&nocache="+Number(new Date)}};O(m[H].g[E],"setSiteRestriction",m[H].g[E].qa);
m[H].g[E].R=function(a,d){if(a==m[H].a.Ub)this.Ha=d?d==m[H].a.Wb||d==m[H].a.Vb||d==m[H].a.Ad?d:c:c;if(a==m[H].a.Na)if(d)for(var e in d){a=d[e];if(e=="lr"||e=="usg"||e=="filter"||e=="gl"||e=="richsnippet"){if(this.F==c)this.F="&";else this.F+="&";this.F+=e+"="+i(a)}}else this.F=c};O(m[H].g[E],"setRestriction",m[H].g[E].R);m[H].g[E].S=function(a){if(m[H].a.Ma==a)this.za=m[H].a.Ma;else m[H].a[E].S[I](this,a)};O(m[H].g[E],"setResultSetSize",m[H].g[E].S);if(!m[H].NoOldNames){j("GwebSearch",m[H].g);j("GbookSearch",m[H].k);j("GblogSearch",m[H].q);j("GvideoSearch",m[H].r);j("GnewsSearch",m[H].m);j("GlocalSearch",m[H].e);j("GimageSearch",m[H].c);j("GpatentSearch",m[H].h);j("GSearch",m[H].a);j("GSearchControl",m[H].b);j("GSearchForm",m[H].L);j("GsearcherOptions",m[H].A);j("GdrawOptions",m[H].T)};var Mb=function(a,d,e){this.Tf=a;this.Ac=d;this.Ya=g;this.pe=e||c;this.console=k[Ta]||{log:function(){}};if(!this.pe&&this.Ac=="parent")this[Ta].log("You forgot to pass an iframe.");else{if(!k.UDS_IEXDC_SETUP_COMPLETE)try{k.execScript("Class UDS_GCXPC____NIXVBS_wrapper\n Private UDS_M_TRANSPORT\nPublic Sub UDS_SET_TRANSPORT(transport)\nIf isEmpty(UDS_M_TRANSPORT) Then\nSet UDS_M_TRANSPORT = transport\nEnd If\nEnd Sub\nPublic Sub UDS_SEND_MESSAGE_(payload)\n Call UDS_M_TRANSPORT.UDS_GCXPC____NIXJS_handle_message(payload)\nEnd Sub\nPublic Sub UDS_CREATE_CHANNEL(channel)\n Call UDS_M_TRANSPORT.UDS_GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub UDS_GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function UDS_GCXPC____NIXVBS_get_wrapper(transport)\nDim wrap\nSet wrap = New UDS_GCXPC____NIXVBS_wrapper\nwrap.UDS_SET_TRANSPORT transport\nSet UDS_GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function",
"vbscript");k.UDS_IEXDC_SETUP_COMPLETE=b}catch(f){}this.UDS_GCXPC____NIXJS_handle_message=this.If;this.UDS_GCXPC____NIXJS_create_channel=this.uf}},Ob=function(){var a=k[Wa]?k[Wa][Oa]:c;if(a)return/trident\/\d/i.test(a)&&Nb(a)==7;return g},Pb=/MSIE\s+([^\);]+)(\)|;)/,Nb=function(a){return(a=Pb.exec(a))?a[1]:""};M=Mb[E];M.If=function(a){this.Ac=="parent"&&a=="connected"?this.He():this.Tf(a)};M.uf=function(a){this.oe=a};
M.Zd=function(a){return function(){if(!a.Ya){var d=a.pe;try{d.contentWindow.opener=k.UDS_GCXPC____NIXVBS_get_wrapper(a);a.Ya=b}catch(e){this[Ta].log("Exception caught while attempting Google IE XDC: "+e.message)}a.Ya||k[La](a.Zd(a),100)}}};M.Yd=function(a){return function(){if(!a.Ya){try{var d=k.opener;if(d&&"UDS_GCXPC____NIXVBS_container"in d){a.oe=d;a.oe.UDS_CREATE_CHANNEL(k.UDS_GCXPC____NIXVBS_get_wrapper(a));a.Ya=b;a.send("connected");a.He()}}catch(e){return}a.Ya||k[La](a.Yd(a),100)}}};
M.send=function(){this[Ta].log("Cross-domain channel has been modified.")};M.sf=function(a){this.He=a||function(){};this.Ac=="parent"?this.Zd(this)():this.Yd(this)()};
google.loader.loaded({"module":"search","version":"1.0","components":["default"]});
google.loader.eval.search = function() {eval(arguments[0]);};if (google.loader.eval.scripts && google.loader.eval.scripts['search']) {(function() {var scripts = google.loader.eval.scripts['search'];for (var i = 0; i < scripts.length; i++) {google.loader.eval.search(scripts[i]);}})();google.loader.eval.scripts['search'] = null;}})();



var canvas;

var delta = [0,0];
var stage = [window.screenX,window.screenY,window.innerWidth,window.innerHeight];
getBrowserDimensions();

var isPlaying = false;
var isMouseDown = false;

var worldAABB;
var world;
var iterations = 1;
var timeStep = 1/25;

var walls = new Array();
var wall_thickness = 200;
var wallsSetted = false;

var mouseJoint;
var mouseX = 0;
var mouseY = 0;

var mouseOnClick = new Array();

var timer = 0;
//var stats = new Stats();
var elements = new Array();
var bodies = new Array();
var properties = new Array();

var gWebSearch;
var imFeelingLuckyMode = false;
var resultBodies = new Array();

init();

// GOOGLE API

function onLoad()
{
	gWebSearch = new GwebSearch();
	gWebSearch.setResultSetSize(GSearch.SMALL_RESULTSET);
	gWebSearch.setSearchCompleteCallback(null, onWebSearch);
}

function onWebSearch()
{
	if(imFeelingLuckyMode)
	{
		location.href = gWebSearch.results[0].unescapedUrl;
		return;
	}
	
	for (var i = 0; i < gWebSearch.results.length; i++)
		addResult(gWebSearch.results[i]);
}

//

function init()
{
	canvas = document.getElementById('canvas');
	
	document.onmousedown = onDocumentMouseDown;
	document.onmouseup = onDocumentMouseUp;
	document.onmousemove = onDocumentMouseMove;
	document.ondblclick = onDocumentDoubleClick;
	
	document.onkeypress = onDocumentKeyPress;

	// init box2d
	
	worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-200, -200);
	worldAABB.maxVertex.Set( screen.width + 200, screen.height + 200);

	world = new b2World(worldAABB, new b2Vec2(0, 0), true);
	
	// walls	
	setWalls();

	// Get box2d elements
	
	elements = getElementsByClass("box2d");
		
	for (i = 0; i < elements.length; i++)
	{
		var element = elements[i];
		properties[i] = findPos(element);
		properties[i][2] = element.offsetWidth;
		properties[i][3] = element.offsetHeight;
	}
	
	for (i = 0; i < elements.length; i++)
	{
		var element = elements[i];
		element.style['position'] = 'absolute';
		element.style['left'] = properties[i][0] + 'px';
		element.style['top'] = properties[i][1] + 'px';
		//element.style['backgroundColor'] = '#ffff00';
		element.onmousedown = onElementMouseDown;
		element.onmouseup = onElementMouseUp;
		element.onclick = onElementClick;
		
		bodies[i] = createBox(world, properties[i][0] + (properties[i][2] >> 1), properties[i][1] + (properties[i][3] >> 1), properties[i][2] / 2, properties[i][3] / 2, false);		
	}
}

function play()
{
	setInterval(loop, 25);	
}

// .. ACTIONS

function onDocumentMouseDown()
{
	isMouseDown = true;
	return false;
}

function onDocumentMouseUp()
{
	isMouseDown = false;
	return false;
}

function onDocumentMouseMove()
{
	if (!isPlaying)
	{
		isPlaying = true;
		play();
	}
	
	mouseX = window.event.clientX;
	mouseY = window.event.clientY;
}

function onDocumentDoubleClick()
{
	for (i = 0; i < resultBodies.length; i++)
	{
		var body = resultBodies[i]
		canvas.removeChild( body.GetUserData().element );
		world.DestroyBody(body);
		body = null;
	}
	
	resultBodies = new Array();
}

function onDocumentKeyPress(e)
{
	if (e.charCode == 13)
		search();
}

function onElementMouseDown()
{
	mouseOnClick[0] = window.event.clientX;
	mouseOnClick[1] = window.event.clientY;	
	return false;
}

function onElementMouseUp()
{
	return false;
}

function onElementClick()
{
	var range = 5;
	
	if (mouseOnClick[0] > window.event.clientX + range || mouseOnClick[0] < window.event.clientX - range && mouseOnClick[1] > window.event.clientY + range || mouseOnClick[1] < window.event.clientY - range)
		return false;
	
	if (this == document.getElementById('btnG')) search();
	if (this == document.getElementById('btnI')) imFeelingLucky();
	if (this == document.getElementById('q')) document.f.q.focus();
}

// API STUFF

function search()
{
	if (!isPlaying)
	{
		isPlaying = true;
		play();
	}
	
	onDocumentDoubleClick(); // clean
	gWebSearch.execute(document.getElementById('q').value);
	return false;
}

function imFeelingLucky()
{
	imFeelingLuckyMode = true;
	gWebSearch.execute(document.getElementById('q').value);
	return false;	
}

function addResult(data)
{
	var element = document.createElement("div");
	element.innerHTML = '<div><h3 class=r><a href="' + data.unescapedUrl + '" class=l onmousedown="return clk(this.href,\'\',\'\',\'res\',\'1\',\'&amp;sig2=3Ti89FTuSYfE6a-5k1jjKQ\')">' + data.title + '</a></h3><span style=display:inline-block><button class=w10 title="Promote"></button><button class=w20 title="Remove"></button></span><div class="s">' + data.content + '<br><cite>' + data.visibleUrl + '</cite></div>';
	
	canvas.appendChild( element );
	properties.push([Math.random() * (window.innerWidth / 2),-200,600,element.offsetHeight]);
	
	var i = properties.length - 1;

	element.style['position'] = 'absolute';
	element.style['left'] = 0 + 'px';
	element.style['top'] = -100 + 'px';
	element.style['backgroundColor'] = '#ffffff';
	element.onmousedown = onElementMouseDown;
	element.onmouseup = onElementMouseUp;
	element.onclick = onElementClick;

	elements[i] = element;

	resultBodies.push( bodies[i] = createBox(world, properties[i][0] + (properties[i][2] >> 1), properties[i][1] + (properties[i][3] >> 1), properties[i][2] / 2, properties[i][3] / 2, false, element) );
	
}

//

function loop()
{
	if (getBrowserDimensions())
		setWalls();

	delta[0] += (0 - delta[0]) * .5;
	delta[1] += (0 - delta[1]) * .5;
	
	world.m_gravity.x = 0 + delta[0];
	world.m_gravity.y = 350 + delta[1];

	mouseDrag();
	world.Step(timeStep, iterations);	
	
	for (i = 0; i < elements.length; i++)
	{
		var element = elements[i];
		
		element.style['left'] = (bodies[i].m_position0.x - (properties[i][2] >> 1)) + 'px';
		element.style['top'] = (bodies[i].m_position0.y - (properties[i][3] >> 1)) + 'px';
		
		// webkit
		element.style['-webkit-transform'] = 'rotate(' + (bodies[i].m_rotation0 * 57.2957795) + 'deg)';
		
		// gecko
		element.style['MozTransform'] = 'rotate(' + (bodies[i].m_rotation0 * 57.2957795) + 'deg)';

		// opera
		element.style['OTransform'] = 'rotate(' + (bodies[i].m_rotation0 * 57.2957795) + 'deg)';
	}
}


// .. BOX2D UTILS

function createBox(world, x, y, width, height, fixed, element)
{
	if (typeof(fixed) == 'undefined') fixed = true;
	var boxSd = new b2BoxDef();
	if (!fixed) boxSd.density = 1.0;
	boxSd.extents.Set(width, height);
	var boxBd = new b2BodyDef();
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x,y);
	boxBd.userData = {element: element};
	return world.CreateBody(boxBd)
}

function mouseDrag()
{
	// mouse press
	if (isMouseDown && !mouseJoint)
	{
		var body = getBodyAtMouse();
		
		if (body)
		{
			var md = new b2MouseJointDef();
			md.body1 = world.m_groundBody;
			md.body2 = body;
			md.target.Set(mouseX, mouseY);
			md.maxForce = 30000.0 * body.m_mass;
			md.timeStep = timeStep;
			mouseJoint = world.CreateJoint(md);
			body.WakeUp();
		}
	}
	
	// mouse release
	if (!isMouseDown)
	{
		if (mouseJoint)
		{
			world.DestroyJoint(mouseJoint);
			mouseJoint = null;
		}
	}
	
	// mouse move
	if (mouseJoint)
	{
		var p2 = new b2Vec2(mouseX, mouseY);
		mouseJoint.SetTarget(p2);
	}
}

function getBodyAtMouse()
{
	// Make a small box.
	var mousePVec = new b2Vec2();
	mousePVec.Set(mouseX, mouseY);
	
	var aabb = new b2AABB();
	aabb.minVertex.Set(mouseX - 1, mouseY - 1);
	aabb.maxVertex.Set(mouseX + 1, mouseY + 1);

	// Query the world for overlapping shapes.
	var k_maxCount = 10;
	var shapes = new Array();
	var count = world.Query(aabb, shapes, k_maxCount);
	var body = null;
	
	for (var i = 0; i < count; ++i)
	{
		if (shapes[i].m_body.IsStatic() == false)
		{
			if ( shapes[i].TestPoint(mousePVec) )
			{
				body = shapes[i].m_body;
				break;
			}
		}
	}
	return body;
}

function setWalls()
{
	if (wallsSetted)
	{
		world.DestroyBody(walls[0]);
		world.DestroyBody(walls[1]);
		world.DestroyBody(walls[2]);
		world.DestroyBody(walls[3]);
		
		walls[0] = null; 
		walls[1] = null;
		walls[2] = null;
		walls[3] = null;
	}
	
	walls[0] = createBox(world, stage[2] / 2, - wall_thickness, stage[2], wall_thickness);
	walls[1] = createBox(world, stage[2] / 2, stage[3] + wall_thickness, stage[2], wall_thickness);
	walls[2] = createBox(world, - wall_thickness, stage[3] / 2, wall_thickness, stage[3]);
	walls[3] = createBox(world, stage[2] + wall_thickness, stage[3] / 2, wall_thickness, stage[3]);	
	
	wallsSetted = true;
}

// .. UTILS

function getElementsByClass( searchClass )
{
	var classElements = new Array();
	var els = document.getElementsByTagName('*');
	var elsLen = els.length
	for (i = 0, j = 0; i < elsLen; i++)
	{
		var classes = els[i].className.split(' ');
		for (k = 0; k < classes.length; k++)
			if ( classes[k] == searchClass )
				classElements[j++] = els[i];
	}
	return classElements;
}

function findPos(obj)
{
	var curleft = curtop = 0;
	if (obj.offsetParent)
	{
		do
		{
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		}
		while (obj = obj.offsetParent);
	}
	return [curleft,curtop];
}

function getBrowserDimensions()
{
	var changed = false;
		
	if (stage[0] != window.screenX)
	{
		delta[0] = (window.screenX - stage[0]) * 50;
		stage[0] = window.screenX;
		changed = true;
	}
	
	if (stage[1] != window.screenY)
	{
		delta[1] = (window.screenY - stage[1]) * 50;
		stage[1] = window.screenY;
		changed = true;
	}
	
	if (stage[2] != window.innerWidth)
	{
		stage[2] = window.innerWidth;
		changed = true;
	}
	
	if (stage[3] != window.innerHeight)
	{
		stage[3] = window.innerHeight;
		changed = true;
	}
	
	return changed;
}	

