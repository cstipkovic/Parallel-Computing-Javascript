//<![CDATA[
var matches,url,path,domain;url=document.location.toString();try{domain=url.match(/https?:\/\/[^\/]+/);if(matches=url.match(/(.+?)#(.+)/)){url=matches[1];path=matches[2];if(path){var arr=path.split(/\?/);path=arr[0];var params=arr[1];path=path.replace(/^\//,"");var redirect_url=[domain,path].join("/");if(params){redirect_url=[redirect_url,params].join("?")}document.location=redirect_url}}}catch(err){};
//]]>



//<![CDATA[
var page={};var onCondition=function(D,C,A,B){D=D;A=A?Math.min(A,5):5;B=B||100;if(D()){C()}else{if(A>1){setTimeout(function(){onCondition(D,C,A-1,B)},B)}}};
//]]>



//<![CDATA[
if (window.top !== window.self) {document.write = "";window.top.location = window.self.location; setTimeout(function(){document.body.innerHTML='';},1);window.self.onload=function(evt){document.body.innerHTML='';};}
//]]>



  function showFlashNotice() {
    var notification = (new InfoNotification());
    notification.setMessage("Your account has been confirmed. Thanks!");

    
    notification.show();
  }

  if (window.attachEvent) {
    window.attachEvent('onload', showFlashNotice)
  } else {
    window.addEventListener('load', showFlashNotice, false);
  }

/*
 * jQuery JavaScript Library v1.3
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-01-13 12:50:31 -0500 (Tue, 13 Jan 2009)
 * Revision: 6104
 */
(function(){var l=this,g,x=l.jQuery,o=l.$,n=l.jQuery=l.$=function(D,E){return new n.fn.init(D,E)},C=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;n.fn=n.prototype={init:function(D,G){D=D||document;if(D.nodeType){this[0]=D;this.length=1;this.context=D;return this}if(typeof D==="string"){var F=C.exec(D);if(F&&(F[1]||!G)){if(F[1]){D=n.clean([F[1]],G)}else{var H=document.getElementById(F[3]);if(H){if(H.id!=F[3]){return n().find(D)}var E=n(H);E.context=document;E.selector=D;return E}D=[]}}else{return n(G).find(D)}}else{if(n.isFunction(D)){return n(document).ready(D)}}if(D.selector&&D.context){this.selector=D.selector;this.context=D.context}return this.setArray(n.makeArray(D))},selector:"",jquery:"1.3",size:function(){return this.length},get:function(D){return D===g?n.makeArray(this):this[D]},pushStack:function(E,G,D){var F=n(E);F.prevObject=this;F.context=this.context;if(G==="find"){F.selector=this.selector+(this.selector?" ":"")+D}else{if(G){F.selector=this.selector+"."+G+"("+D+")"}}return F},setArray:function(D){this.length=0;Array.prototype.push.apply(this,D);return this},each:function(E,D){return n.each(this,E,D)},index:function(D){return n.inArray(D&&D.jquery?D[0]:D,this)},attr:function(E,G,F){var D=E;if(typeof E==="string"){if(G===g){return this[0]&&n[F||"attr"](this[0],E)}else{D={};D[E]=G}}return this.each(function(H){for(E in D){n.attr(F?this.style:this,E,n.prop(this,D[E],F,H,E))}})},css:function(D,E){if((D=="width"||D=="height")&&parseFloat(E)<0){E=g}return this.attr(D,E,"curCSS")},text:function(E){if(typeof E!=="object"&&E!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(E))}var D="";n.each(E||this,function(){n.each(this.childNodes,function(){if(this.nodeType!=8){D+=this.nodeType!=1?this.nodeValue:n.fn.text([this])}})});return D},wrapAll:function(D){if(this[0]){var E=n(D,this[0].ownerDocument).clone();if(this[0].parentNode){E.insertBefore(this[0])}E.map(function(){var F=this;while(F.firstChild){F=F.firstChild}return F}).append(this)}return this},wrapInner:function(D){return this.each(function(){n(this).contents().wrapAll(D)})},wrap:function(D){return this.each(function(){n(this).wrapAll(D)})},append:function(){return this.domManip(arguments,true,function(D){if(this.nodeType==1){this.appendChild(D)}})},prepend:function(){return this.domManip(arguments,true,function(D){if(this.nodeType==1){this.insertBefore(D,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(D){this.parentNode.insertBefore(D,this)})},after:function(){return this.domManip(arguments,false,function(D){this.parentNode.insertBefore(D,this.nextSibling)})},end:function(){return this.prevObject||n([])},push:[].push,find:function(D){if(this.length===1&&!/,/.test(D)){var F=this.pushStack([],"find",D);F.length=0;n.find(D,this[0],F);return F}else{var E=n.map(this,function(G){return n.find(D,G)});return this.pushStack(/[^+>] [^+>]/.test(D)?n.unique(E):E,"find",D)}},clone:function(E){var D=this.map(function(){if(!n.support.noCloneEvent&&!n.isXMLDoc(this)){var H=this.cloneNode(true),G=document.createElement("div");G.appendChild(H);return n.clean([G.innerHTML])[0]}else{return this.cloneNode(true)}});var F=D.find("*").andSelf().each(function(){if(this[h]!==g){this[h]=null}});if(E===true){this.find("*").andSelf().each(function(H){if(this.nodeType==3){return}var G=n.data(this,"events");for(var J in G){for(var I in G[J]){n.event.add(F[H],J,G[J][I],G[J][I].data)}}})}return D},filter:function(D){return this.pushStack(n.isFunction(D)&&n.grep(this,function(F,E){return D.call(F,E)})||n.multiFilter(D,n.grep(this,function(E){return E.nodeType===1})),"filter",D)},closest:function(D){var E=n.expr.match.POS.test(D)?n(D):null;return this.map(function(){var F=this;while(F&&F.ownerDocument){if(E?E.index(F)>-1:n(F).is(D)){return F}F=F.parentNode}})},not:function(D){if(typeof D==="string"){if(f.test(D)){return this.pushStack(n.multiFilter(D,this,true),"not",D)}else{D=n.multiFilter(D,this)}}var E=D.length&&D[D.length-1]!==g&&!D.nodeType;return this.filter(function(){return E?n.inArray(this,D)<0:this!=D})},add:function(D){return this.pushStack(n.unique(n.merge(this.get(),typeof D==="string"?n(D):n.makeArray(D))))},is:function(D){return !!D&&n.multiFilter(D,this).length>0},hasClass:function(D){return !!D&&this.is("."+D)},val:function(J){if(J===g){var D=this[0];if(D){if(n.nodeName(D,"option")){return(D.attributes.value||{}).specified?D.value:D.text}if(n.nodeName(D,"select")){var H=D.selectedIndex,K=[],L=D.options,G=D.type=="select-one";if(H<0){return null}for(var E=G?H:0,I=G?H+1:L.length;E<I;E++){var F=L[E];if(F.selected){J=n(F).val();if(G){return J}K.push(J)}}return K}return(D.value||"").replace(/\r/g,"")}return g}if(typeof J==="number"){J+=""}return this.each(function(){if(this.nodeType!=1){return}if(n.isArray(J)&&/radio|checkbox/.test(this.type)){this.checked=(n.inArray(this.value,J)>=0||n.inArray(this.name,J)>=0)}else{if(n.nodeName(this,"select")){var M=n.makeArray(J);n("option",this).each(function(){this.selected=(n.inArray(this.value,M)>=0||n.inArray(this.text,M)>=0)});if(!M.length){this.selectedIndex=-1}}else{this.value=J}}})},html:function(D){return D===g?(this[0]?this[0].innerHTML:null):this.empty().append(D)},replaceWith:function(D){return this.after(D).remove()},eq:function(D){return this.slice(D,+D+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(D){return this.pushStack(n.map(this,function(F,E){return D.call(F,E,F)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=n.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild,D=this.length>1?I.cloneNode(true):I;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),G>0?D.cloneNode(true):I)}}if(F){n.each(F,y)}}return this;function K(N,O){return M&&n.nodeName(N,"table")&&n.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};n.fn.init.prototype=n.fn;function y(D,E){if(E.src){n.ajax({url:E.src,async:false,dataType:"script"})}else{n.globalEval(E.text||E.textContent||E.innerHTML||"")}if(E.parentNode){E.parentNode.removeChild(E)}}function e(){return +new Date}n.extend=n.fn.extend=function(){var I=arguments[0]||{},G=1,H=arguments.length,D=false,F;if(typeof I==="boolean"){D=I;I=arguments[1]||{};G=2}if(typeof I!=="object"&&!n.isFunction(I)){I={}}if(H==G){I=this;--G}for(;G<H;G++){if((F=arguments[G])!=null){for(var E in F){var J=I[E],K=F[E];if(I===K){continue}if(D&&K&&typeof K==="object"&&!K.nodeType){I[E]=n.extend(D,J||(K.length!=null?[]:{}),K)}else{if(K!==g){I[E]=K}}}}}return I};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,p=document.defaultView||{},r=Object.prototype.toString;n.extend({noConflict:function(D){l.$=o;if(D){l.jQuery=x}return n},isFunction:function(D){return r.call(D)==="[object Function]"},isArray:function(D){return r.call(D)==="[object Array]"},isXMLDoc:function(D){return D.documentElement&&!D.body||D.tagName&&D.ownerDocument&&!D.ownerDocument.body},globalEval:function(F){F=n.trim(F);if(F){var E=document.getElementsByTagName("head")[0]||document.documentElement,D=document.createElement("script");D.type="text/javascript";if(n.support.scriptEval){D.appendChild(document.createTextNode(F))}else{D.text=F}E.insertBefore(D,E.firstChild);E.removeChild(D)}},nodeName:function(E,D){return E.nodeName&&E.nodeName.toUpperCase()==D.toUpperCase()},each:function(F,J,E){var D,G=0,H=F.length;if(E){if(H===g){for(D in F){if(J.apply(F[D],E)===false){break}}}else{for(;G<H;){if(J.apply(F[G++],E)===false){break}}}}else{if(H===g){for(D in F){if(J.call(F[D],D,F[D])===false){break}}}else{for(var I=F[0];G<H&&J.call(I,G,I)!==false;I=F[++G]){}}}return F},prop:function(G,H,F,E,D){if(n.isFunction(H)){H=H.call(G,E)}return typeof H==="number"&&F=="curCSS"&&!b.test(D)?H+"px":H},className:{add:function(D,E){n.each((E||"").split(/\s+/),function(F,G){if(D.nodeType==1&&!n.className.has(D.className,G)){D.className+=(D.className?" ":"")+G}})},remove:function(D,E){if(D.nodeType==1){D.className=E!==g?n.grep(D.className.split(/\s+/),function(F){return !n.className.has(E,F)}).join(" "):""}},has:function(E,D){return n.inArray(D,(E.className||E).toString().split(/\s+/))>-1}},swap:function(G,F,H){var D={};for(var E in F){D[E]=G.style[E];G.style[E]=F[E]}H.call(G);for(var E in F){G.style[E]=D[E]}},css:function(F,D,H){if(D=="width"||D=="height"){var J,E={position:"absolute",visibility:"hidden",display:"block"},I=D=="width"?["Left","Right"]:["Top","Bottom"];function G(){J=D=="width"?F.offsetWidth:F.offsetHeight;var L=0,K=0;n.each(I,function(){L+=parseFloat(n.curCSS(F,"padding"+this,true))||0;K+=parseFloat(n.curCSS(F,"border"+this+"Width",true))||0});J-=Math.round(L+K)}if(n(F).is(":visible")){G()}else{n.swap(F,E,G)}return Math.max(0,J)}return n.curCSS(F,D,H)},curCSS:function(H,E,F){var K,D=H.style;if(E=="opacity"&&!n.support.opacity){K=n.attr(D,"opacity");return K==""?"1":K}if(E.match(/float/i)){E=v}if(!F&&D&&D[E]){K=D[E]}else{if(p.getComputedStyle){if(E.match(/float/i)){E="float"}E=E.replace(/([A-Z])/g,"-$1").toLowerCase();var L=p.getComputedStyle(H,null);if(L){K=L.getPropertyValue(E)}if(E=="opacity"&&K==""){K="1"}}else{if(H.currentStyle){var I=E.replace(/\-(\w)/g,function(M,N){return N.toUpperCase()});K=H.currentStyle[E]||H.currentStyle[I];if(!/^\d+(px)?$/i.test(K)&&/^\d/.test(K)){var G=D.left,J=H.runtimeStyle.left;H.runtimeStyle.left=H.currentStyle.left;D.left=K||0;K=D.pixelLeft+"px";D.left=G;H.runtimeStyle.left=J}}}}return K},clean:function(E,J,H){J=J||document;if(typeof J.createElement==="undefined"){J=J.ownerDocument||J[0]&&J[0].ownerDocument||document}if(!H&&E.length===1&&typeof E[0]==="string"){var G=/^<(\w+)\s*\/?>$/.exec(E[0]);if(G){return[J.createElement(G[1])]}}var F=[],D=[],K=J.createElement("div");n.each(E,function(O,Q){if(typeof Q==="number"){Q+=""}if(!Q){return}if(typeof Q==="string"){Q=Q.replace(/(<(\w+)[^>]*?)\/>/g,function(S,T,R){return R.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?S:T+"></"+R+">"});var N=n.trim(Q).toLowerCase();var P=!N.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!N.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||N.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!N.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!N.indexOf("<td")||!N.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!N.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!n.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];K.innerHTML=P[1]+Q+P[2];while(P[0]--){K=K.lastChild}if(!n.support.tbody){var M=!N.indexOf("<table")&&N.indexOf("<tbody")<0?K.firstChild&&K.firstChild.childNodes:P[1]=="<table>"&&N.indexOf("<tbody")<0?K.childNodes:[];for(var L=M.length-1;L>=0;--L){if(n.nodeName(M[L],"tbody")&&!M[L].childNodes.length){M[L].parentNode.removeChild(M[L])}}}if(!n.support.leadingWhitespace&&/^\s/.test(Q)){K.insertBefore(J.createTextNode(Q.match(/^\s*/)[0]),K.firstChild)}Q=n.makeArray(K.childNodes)}if(Q.nodeType){F.push(Q)}else{F=n.merge(F,Q)}});if(H){for(var I=0;F[I];I++){if(n.nodeName(F[I],"script")&&(!F[I].type||F[I].type.toLowerCase()==="text/javascript")){D.push(F[I].parentNode?F[I].parentNode.removeChild(F[I]):F[I])}else{if(F[I].nodeType===1){F.splice.apply(F,[I+1,0].concat(n.makeArray(F[I].getElementsByTagName("script"))))}H.appendChild(F[I])}}return D}return F},attr:function(I,F,J){if(!I||I.nodeType==3||I.nodeType==8){return g}var G=!n.isXMLDoc(I),K=J!==g;F=G&&n.props[F]||F;if(I.tagName){var E=/href|src|style/.test(F);if(F=="selected"&&I.parentNode){I.parentNode.selectedIndex}if(F in I&&G&&!E){if(K){if(F=="type"&&n.nodeName(I,"input")&&I.parentNode){throw"type property can't be changed"}I[F]=J}if(n.nodeName(I,"form")&&I.getAttributeNode(F)){return I.getAttributeNode(F).nodeValue}if(F=="tabIndex"){var H=I.getAttributeNode("tabIndex");return H&&H.specified?H.value:I.nodeName.match(/^(a|area|button|input|object|select|textarea)$/i)?0:g}return I[F]}if(!n.support.style&&G&&F=="style"){return n.attr(I.style,"cssText",J)}if(K){I.setAttribute(F,""+J)}var D=!n.support.hrefNormalized&&G&&E?I.getAttribute(F,2):I.getAttribute(F);return D===null?g:D}if(!n.support.opacity&&F=="opacity"){if(K){I.zoom=1;I.filter=(I.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(J)+""=="NaN"?"":"alpha(opacity="+J*100+")")}return I.filter&&I.filter.indexOf("opacity=")>=0?(parseFloat(I.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}F=F.replace(/-([a-z])/ig,function(L,M){return M.toUpperCase()});if(K){I[F]=J}return I[F]},trim:function(D){return(D||"").replace(/^\s+|\s+$/g,"")},makeArray:function(F){var D=[];if(F!=null){var E=F.length;if(E==null||typeof F==="string"||n.isFunction(F)||F.setInterval){D[0]=F}else{while(E){D[--E]=F[E]}}}return D},inArray:function(F,G){for(var D=0,E=G.length;D<E;D++){if(G[D]===F){return D}}return -1},merge:function(G,D){var E=0,F,H=G.length;if(!n.support.getAll){while((F=D[E++])!=null){if(F.nodeType!=8){G[H++]=F}}}else{while((F=D[E++])!=null){G[H++]=F}}return G},unique:function(J){var E=[],D={};try{for(var F=0,G=J.length;F<G;F++){var I=n.data(J[F]);if(!D[I]){D[I]=true;E.push(J[F])}}}catch(H){E=J}return E},grep:function(E,I,D){var F=[];for(var G=0,H=E.length;G<H;G++){if(!D!=!I(E[G],G)){F.push(E[G])}}return F},map:function(D,I){var E=[];for(var F=0,G=D.length;F<G;F++){var H=I(D[F],F);if(H!=null){E[E.length]=H}}return E.concat.apply([],E)}});var B=navigator.userAgent.toLowerCase();n.browser={version:(B.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(B),opera:/opera/.test(B),msie:/msie/.test(B)&&!/opera/.test(B),mozilla:/mozilla/.test(B)&&!/(compatible|webkit)/.test(B)};n.each({parent:function(D){return D.parentNode},parents:function(D){return n.dir(D,"parentNode")},next:function(D){return n.nth(D,2,"nextSibling")},prev:function(D){return n.nth(D,2,"previousSibling")},nextAll:function(D){return n.dir(D,"nextSibling")},prevAll:function(D){return n.dir(D,"previousSibling")},siblings:function(D){return n.sibling(D.parentNode.firstChild,D)},children:function(D){return n.sibling(D.firstChild)},contents:function(D){return n.nodeName(D,"iframe")?D.contentDocument||D.contentWindow.document:n.makeArray(D.childNodes)}},function(D,E){n.fn[D]=function(F){var G=n.map(this,E);if(F&&typeof F=="string"){G=n.multiFilter(F,G)}return this.pushStack(n.unique(G),D,F)}});n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(D,E){n.fn[D]=function(){var F=arguments;return this.each(function(){for(var G=0,H=F.length;G<H;G++){n(F[G])[E](this)}})}});n.each({removeAttr:function(D){n.attr(this,D,"");if(this.nodeType==1){this.removeAttribute(D)}},addClass:function(D){n.className.add(this,D)},removeClass:function(D){n.className.remove(this,D)},toggleClass:function(E,D){if(typeof D!=="boolean"){D=!n.className.has(this,E)}n.className[D?"add":"remove"](this,E)},remove:function(D){if(!D||n.filter(D,[this]).length){n("*",this).add([this]).each(function(){n.event.remove(this);n.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){n(">*",this).remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(D,E){n.fn[D]=function(){return this.each(E,arguments)}});function j(D,E){return D[0]&&parseInt(n.curCSS(D[0],E,true),10)||0}var h="jQuery"+e(),u=0,z={};n.extend({cache:{},data:function(E,D,F){E=E==l?z:E;var G=E[h];if(!G){G=E[h]=++u}if(D&&!n.cache[G]){n.cache[G]={}}if(F!==g){n.cache[G][D]=F}return D?n.cache[G][D]:G},removeData:function(E,D){E=E==l?z:E;var G=E[h];if(D){if(n.cache[G]){delete n.cache[G][D];D="";for(D in n.cache[G]){break}if(!D){n.removeData(E)}}}else{try{delete E[h]}catch(F){if(E.removeAttribute){E.removeAttribute(h)}}delete n.cache[G]}},queue:function(E,D,G){if(E){D=(D||"fx")+"queue";var F=n.data(E,D);if(!F||n.isArray(G)){F=n.data(E,D,n.makeArray(G))}else{if(G){F.push(G)}}}return F},dequeue:function(G,F){var D=n.queue(G,F),E=D.shift();if(!F||F==="fx"){E=D[0]}if(E!==g){E.call(G)}}});n.fn.extend({data:function(D,F){var G=D.split(".");G[1]=G[1]?"."+G[1]:"";if(F===g){var E=this.triggerHandler("getData"+G[1]+"!",[G[0]]);if(E===g&&this.length){E=n.data(this[0],D)}return E===g&&G[1]?this.data(G[0]):E}else{return this.trigger("setData"+G[1]+"!",[G[0],F]).each(function(){n.data(this,D,F)})}},removeData:function(D){return this.each(function(){n.removeData(this,D)})},queue:function(D,E){if(typeof D!=="string"){E=D;D="fx"}if(E===g){return n.queue(this[0],D)}return this.each(function(){var F=n.queue(this,D,E);if(D=="fx"&&F.length==1){F[0].call(this)}})},dequeue:function(D){return this.each(function(){n.dequeue(this,D)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.1
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var N=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|[^[\]]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g,I=0,F=Object.prototype.toString;var E=function(ae,S,aa,V){aa=aa||[];S=S||document;if(S.nodeType!==1&&S.nodeType!==9){return[]}if(!ae||typeof ae!=="string"){return aa}var ab=[],ac,Y,ah,ag,Z,R,Q=true;N.lastIndex=0;while((ac=N.exec(ae))!==null){ab.push(ac[1]);if(ac[2]){R=RegExp.rightContext;break}}if(ab.length>1&&G.match.POS.exec(ae)){if(ab.length===2&&G.relative[ab[0]]){var U="",X;while((X=G.match.POS.exec(ae))){U+=X[0];ae=ae.replace(G.match.POS,"")}Y=E.filter(U,E(/\s$/.test(ae)?ae+"*":ae,S))}else{Y=G.relative[ab[0]]?[S]:E(ab.shift(),S);while(ab.length){var P=[];ae=ab.shift();if(G.relative[ae]){ae+=ab.shift()}for(var af=0,ad=Y.length;af<ad;af++){E(ae,Y[af],P)}Y=P}}}else{var ai=V?{expr:ab.pop(),set:D(V)}:E.find(ab.pop(),ab.length===1&&S.parentNode?S.parentNode:S);Y=E.filter(ai.expr,ai.set);if(ab.length>0){ah=D(Y)}else{Q=false}while(ab.length){var T=ab.pop(),W=T;if(!G.relative[T]){T=""}else{W=ab.pop()}if(W==null){W=S}G.relative[T](ah,W,M(S))}}if(!ah){ah=Y}if(!ah){throw"Syntax error, unrecognized expression: "+(T||ae)}if(F.call(ah)==="[object Array]"){if(!Q){aa.push.apply(aa,ah)}else{if(S.nodeType===1){for(var af=0;ah[af]!=null;af++){if(ah[af]&&(ah[af]===true||ah[af].nodeType===1&&H(S,ah[af]))){aa.push(Y[af])}}}else{for(var af=0;ah[af]!=null;af++){if(ah[af]&&ah[af].nodeType===1){aa.push(Y[af])}}}}}else{D(ah,aa)}if(R){E(R,S,aa,V)}return aa};E.matches=function(P,Q){return E(P,null,null,Q)};E.find=function(V,S){var W,Q;if(!V){return[]}for(var R=0,P=G.order.length;R<P;R++){var T=G.order[R],Q;if((Q=G.match[T].exec(V))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){Q[1]=(Q[1]||"").replace(/\\/g,"");W=G.find[T](Q,S);if(W!=null){V=V.replace(G.match[T],"");break}}}}if(!W){W=S.getElementsByTagName("*")}return{set:W,expr:V}};E.filter=function(S,ac,ad,T){var Q=S,Y=[],ah=ac,V,ab;while(S&&ac.length){for(var U in G.filter){if((V=G.match[U].exec(S))!=null){var Z=G.filter[U],R=null,X=0,aa,ag;ab=false;if(ah==Y){Y=[]}if(G.preFilter[U]){V=G.preFilter[U](V,ah,ad,Y,T);if(!V){ab=aa=true}else{if(V===true){continue}else{if(V[0]===true){R=[];var W=null,af;for(var ae=0;(af=ah[ae])!==g;ae++){if(af&&W!==af){R.push(af);W=af}}}}}}if(V){for(var ae=0;(ag=ah[ae])!==g;ae++){if(ag){if(R&&ag!=R[X]){X++}aa=Z(ag,V,X,R);var P=T^!!aa;if(ad&&aa!=null){if(P){ab=true}else{ah[ae]=false}}else{if(P){Y.push(ag);ab=true}}}}}if(aa!==g){if(!ad){ah=Y}S=S.replace(G.match[U],"");if(!ab){return[]}break}}}S=S.replace(/\s*,\s*/,"");if(S==Q){if(ab==null){throw"Syntax error, unrecognized expression: "+S}else{break}}Q=S}return ah};var G=E.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(P){return P.getAttribute("href")}},relative:{"+":function(T,Q){for(var R=0,P=T.length;R<P;R++){var S=T[R];if(S){var U=S.previousSibling;while(U&&U.nodeType!==1){U=U.previousSibling}T[R]=typeof Q==="string"?U||false:U===Q}}if(typeof Q==="string"){E.filter(Q,T,true)}},">":function(U,Q,V){if(typeof Q==="string"&&!/\W/.test(Q)){Q=V?Q:Q.toUpperCase();for(var R=0,P=U.length;R<P;R++){var T=U[R];if(T){var S=T.parentNode;U[R]=S.nodeName===Q?S:false}}}else{for(var R=0,P=U.length;R<P;R++){var T=U[R];if(T){U[R]=typeof Q==="string"?T.parentNode:T.parentNode===Q}}if(typeof Q==="string"){E.filter(Q,U,true)}}},"":function(S,Q,U){var R="done"+(I++),P=O;if(!Q.match(/\W/)){var T=Q=U?Q:Q.toUpperCase();P=L}P("parentNode",Q,R,S,T,U)},"~":function(S,Q,U){var R="done"+(I++),P=O;if(typeof Q==="string"&&!Q.match(/\W/)){var T=Q=U?Q:Q.toUpperCase();P=L}P("previousSibling",Q,R,S,T,U)}},find:{ID:function(Q,R){if(R.getElementById){var P=R.getElementById(Q[1]);return P?[P]:[]}},NAME:function(P,Q){return Q.getElementsByName?Q.getElementsByName(P[1]):null},TAG:function(P,Q){return Q.getElementsByTagName(P[1])}},preFilter:{CLASS:function(S,Q,R,P,U){S=" "+S[1].replace(/\\/g,"")+" ";for(var T=0;Q[T];T++){if(U^(" "+Q[T].className+" ").indexOf(S)>=0){if(!R){P.push(Q[T])}}else{if(R){Q[T]=false}}}return false},ID:function(P){return P[1].replace(/\\/g,"")},TAG:function(Q,P){for(var R=0;!P[R];R++){}return M(P[R])?Q[1]:Q[1].toUpperCase()},CHILD:function(P){if(P[1]=="nth"){var Q=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(P[2]=="even"&&"2n"||P[2]=="odd"&&"2n+1"||!/\D/.test(P[2])&&"0n+"+P[2]||P[2]);P[2]=(Q[1]+(Q[2]||1))-0;P[3]=Q[3]-0}P[0]="done"+(I++);return P},ATTR:function(Q){var P=Q[1];if(G.attrMap[P]){Q[1]=G.attrMap[P]}if(Q[2]==="~="){Q[4]=" "+Q[4]+" "}return Q},PSEUDO:function(T,Q,R,P,U){if(T[1]==="not"){if(T[3].match(N).length>1){T[3]=E(T[3],null,null,Q)}else{var S=E.filter(T[3],Q,R,true^U);if(!R){P.push.apply(P,S)}return false}}else{if(G.match.POS.test(T[0])){return true}}return T},POS:function(P){P.unshift(true);return P}},filters:{enabled:function(P){return P.disabled===false&&P.type!=="hidden"},disabled:function(P){return P.disabled===true},checked:function(P){return P.checked===true},selected:function(P){P.parentNode.selectedIndex;return P.selected===true},parent:function(P){return !!P.firstChild},empty:function(P){return !P.firstChild},has:function(R,Q,P){return !!E(P[3],R).length},header:function(P){return/h\d/i.test(P.nodeName)},text:function(P){return"text"===P.type},radio:function(P){return"radio"===P.type},checkbox:function(P){return"checkbox"===P.type},file:function(P){return"file"===P.type},password:function(P){return"password"===P.type},submit:function(P){return"submit"===P.type},image:function(P){return"image"===P.type},reset:function(P){return"reset"===P.type},button:function(P){return"button"===P.type||P.nodeName.toUpperCase()==="BUTTON"},input:function(P){return/input|select|textarea|button/i.test(P.nodeName)}},setFilters:{first:function(Q,P){return P===0},last:function(R,Q,P,S){return Q===S.length-1},even:function(Q,P){return P%2===0},odd:function(Q,P){return P%2===1},lt:function(R,Q,P){return Q<P[3]-0},gt:function(R,Q,P){return Q>P[3]-0},nth:function(R,Q,P){return P[3]-0==Q},eq:function(R,Q,P){return P[3]-0==Q}},filter:{CHILD:function(P,S){var V=S[1],W=P.parentNode;var U="child"+W.childNodes.length;if(W&&(!W[U]||!P.nodeIndex)){var T=1;for(var Q=W.firstChild;Q;Q=Q.nextSibling){if(Q.nodeType==1){Q.nodeIndex=T++}}W[U]=T-1}if(V=="first"){return P.nodeIndex==1}else{if(V=="last"){return P.nodeIndex==W[U]}else{if(V=="only"){return W[U]==1}else{if(V=="nth"){var Y=false,R=S[2],X=S[3];if(R==1&&X==0){return true}if(R==0){if(P.nodeIndex==X){Y=true}}else{if((P.nodeIndex-X)%R==0&&(P.nodeIndex-X)/R>=0){Y=true}}return Y}}}}},PSEUDO:function(V,R,S,W){var Q=R[1],T=G.filters[Q];if(T){return T(V,S,R,W)}else{if(Q==="contains"){return(V.textContent||V.innerText||"").indexOf(R[3])>=0}else{if(Q==="not"){var U=R[3];for(var S=0,P=U.length;S<P;S++){if(U[S]===V){return false}}return true}}}},ID:function(Q,P){return Q.nodeType===1&&Q.getAttribute("id")===P},TAG:function(Q,P){return(P==="*"&&Q.nodeType===1)||Q.nodeName===P},CLASS:function(Q,P){return P.test(Q.className)},ATTR:function(T,R){var P=G.attrHandle[R[1]]?G.attrHandle[R[1]](T):T[R[1]]||T.getAttribute(R[1]),U=P+"",S=R[2],Q=R[4];return P==null?false:S==="="?U===Q:S==="*="?U.indexOf(Q)>=0:S==="~="?(" "+U+" ").indexOf(Q)>=0:!R[4]?P:S==="!="?U!=Q:S==="^="?U.indexOf(Q)===0:S==="$="?U.substr(U.length-Q.length)===Q:S==="|="?U===Q||U.substr(0,Q.length+1)===Q+"-":false},POS:function(T,Q,R,U){var P=Q[2],S=G.setFilters[P];if(S){return S(T,R,Q,U)}}}};for(var K in G.match){G.match[K]=RegExp(G.match[K].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var D=function(Q,P){Q=Array.prototype.slice.call(Q);if(P){P.push.apply(P,Q);return P}return Q};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(J){D=function(T,S){var Q=S||[];if(F.call(T)==="[object Array]"){Array.prototype.push.apply(Q,T)}else{if(typeof T.length==="number"){for(var R=0,P=T.length;R<P;R++){Q.push(T[R])}}else{for(var R=0;T[R];R++){Q.push(T[R])}}}return Q}}(function(){var Q=document.createElement("form"),R="script"+(new Date).getTime();Q.innerHTML="<input name='"+R+"'/>";var P=document.documentElement;P.insertBefore(Q,P.firstChild);if(!!document.getElementById(R)){G.find.ID=function(T,U){if(U.getElementById){var S=U.getElementById(T[1]);return S?S.id===T[1]||S.getAttributeNode&&S.getAttributeNode("id").nodeValue===T[1]?[S]:g:[]}};G.filter.ID=function(U,S){var T=U.getAttributeNode&&U.getAttributeNode("id");return U.nodeType===1&&T&&T.nodeValue===S}}P.removeChild(Q)})();(function(){var P=document.createElement("div");P.appendChild(document.createComment(""));if(P.getElementsByTagName("*").length>0){G.find.TAG=function(Q,U){var T=U.getElementsByTagName(Q[1]);if(Q[1]==="*"){var S=[];for(var R=0;T[R];R++){if(T[R].nodeType===1){S.push(T[R])}}T=S}return T}}P.innerHTML="<a href='#'></a>";if(P.firstChild.getAttribute("href")!=="#"){G.attrHandle.href=function(Q){return Q.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var P=E;E=function(T,S,Q,R){S=S||document;if(!R&&S.nodeType===9){try{return D(S.querySelectorAll(T),Q)}catch(U){}}return P(T,S,Q,R)};E.find=P.find;E.filter=P.filter;E.selectors=P.selectors;E.matches=P.matches})()}if(document.documentElement.getElementsByClassName){G.order.splice(1,0,"CLASS");G.find.CLASS=function(P,Q){return Q.getElementsByClassName(P[1])}}function L(Q,W,V,Z,X,Y){for(var T=0,R=Z.length;T<R;T++){var P=Z[T];if(P){P=P[Q];var U=false;while(P&&P.nodeType){var S=P[V];if(S){U=Z[S];break}if(P.nodeType===1&&!Y){P[V]=T}if(P.nodeName===W){U=P;break}P=P[Q]}Z[T]=U}}}function O(Q,V,U,Y,W,X){for(var S=0,R=Y.length;S<R;S++){var P=Y[S];if(P){P=P[Q];var T=false;while(P&&P.nodeType){if(P[U]){T=Y[P[U]];break}if(P.nodeType===1){if(!X){P[U]=S}if(typeof V!=="string"){if(P===V){T=true;break}}else{if(E.filter(V,[P]).length>0){T=P;break}}}P=P[Q]}Y[S]=T}}}var H=document.compareDocumentPosition?function(Q,P){return Q.compareDocumentPosition(P)&16}:function(Q,P){return Q!==P&&(Q.contains?Q.contains(P):true)};var M=function(P){return P.documentElement&&!P.body||P.tagName&&P.ownerDocument&&!P.ownerDocument.body};n.find=E;n.filter=E.filter;n.expr=E.selectors;n.expr[":"]=n.expr.filters;E.selectors.filters.hidden=function(P){return"hidden"===P.type||n.css(P,"display")==="none"||n.css(P,"visibility")==="hidden"};E.selectors.filters.visible=function(P){return"hidden"!==P.type&&n.css(P,"display")!=="none"&&n.css(P,"visibility")!=="hidden"};E.selectors.filters.animated=function(P){return n.grep(n.timers,function(Q){return P===Q.elem}).length};n.multiFilter=function(R,P,Q){if(Q){R=":not("+R+")"}return E.matches(R,P)};n.dir=function(R,Q){var P=[],S=R[Q];while(S&&S!=document){if(S.nodeType==1){P.push(S)}S=S[Q]}return P};n.nth=function(T,P,R,S){P=P||1;var Q=0;for(;T;T=T[R]){if(T.nodeType==1&&++Q==P){break}}return T};n.sibling=function(R,Q){var P=[];for(;R;R=R.nextSibling){if(R.nodeType==1&&R!=Q){P.push(R)}}return P};return;l.Sizzle=E})();n.event={add:function(H,E,G,J){if(H.nodeType==3||H.nodeType==8){return}if(H.setInterval&&H!=l){H=l}if(!G.guid){G.guid=this.guid++}if(J!==g){var F=G;G=this.proxy(F);G.data=J}var D=n.data(H,"events")||n.data(H,"events",{}),I=n.data(H,"handle")||n.data(H,"handle",function(){return typeof n!=="undefined"&&!n.event.triggered?n.event.handle.apply(arguments.callee.elem,arguments):g});I.elem=H;n.each(E.split(/\s+/),function(L,M){var N=M.split(".");M=N.shift();G.type=N.slice().sort().join(".");var K=D[M];if(n.event.specialAll[M]){n.event.specialAll[M].setup.call(H,J,N)}if(!K){K=D[M]={};if(!n.event.special[M]||n.event.special[M].setup.call(H,J,N)===false){if(H.addEventListener){H.addEventListener(M,I,false)}else{if(H.attachEvent){H.attachEvent("on"+M,I)}}}}K[G.guid]=G;n.event.global[M]=true});H=null},guid:1,global:{},remove:function(J,G,I){if(J.nodeType==3||J.nodeType==8){return}var F=n.data(J,"events"),E,D;if(F){if(G===g||(typeof G==="string"&&G.charAt(0)==".")){for(var H in F){this.remove(J,H+(G||""))}}else{if(G.type){I=G.handler;G=G.type}n.each(G.split(/\s+/),function(L,N){var P=N.split(".");N=P.shift();var M=RegExp("(^|\\.)"+P.slice().sort().join(".*\\.")+"(\\.|$)");if(F[N]){if(I){delete F[N][I.guid]}else{for(var O in F[N]){if(M.test(F[N][O].type)){delete F[N][O]}}}if(n.event.specialAll[N]){n.event.specialAll[N].teardown.call(J,P)}for(E in F[N]){break}if(!E){if(!n.event.special[N]||n.event.special[N].teardown.call(J,P)===false){if(J.removeEventListener){J.removeEventListener(N,n.data(J,"handle"),false)}else{if(J.detachEvent){J.detachEvent("on"+N,n.data(J,"handle"))}}}E=null;delete F[N]}}})}for(E in F){break}if(!E){var K=n.data(J,"handle");if(K){K.elem=null}n.removeData(J,"events");n.removeData(J,"handle")}}},trigger:function(H,J,G,D){var F=H.type||H;if(!D){H=typeof H==="object"?H[h]?H:n.extend(n.Event(F),H):n.Event(F);if(F.indexOf("!")>=0){H.type=F=F.slice(0,-1);H.exclusive=true}if(!G){H.stopPropagation();if(this.global[F]){n.each(n.cache,function(){if(this.events&&this.events[F]){n.event.trigger(H,J,this.handle.elem)}})}}if(!G||G.nodeType==3||G.nodeType==8){return g}H.result=g;H.target=G;J=n.makeArray(J);J.unshift(H)}H.currentTarget=G;var I=n.data(G,"handle");if(I){I.apply(G,J)}if((!G[F]||(n.nodeName(G,"a")&&F=="click"))&&G["on"+F]&&G["on"+F].apply(G,J)===false){H.result=false}if(!D&&G[F]&&!H.isDefaultPrevented()&&!(n.nodeName(G,"a")&&F=="click")){this.triggered=true;try{G[F]()}catch(K){}}this.triggered=false;if(!H.isPropagationStopped()){var E=G.parentNode||G.ownerDocument;if(E){n.event.trigger(H,J,E,true)}}},handle:function(J){var I,D;J=arguments[0]=n.event.fix(J||l.event);var K=J.type.split(".");J.type=K.shift();I=!K.length&&!J.exclusive;var H=RegExp("(^|\\.)"+K.slice().sort().join(".*\\.")+"(\\.|$)");D=(n.data(this,"events")||{})[J.type];for(var F in D){var G=D[F];if(I||H.test(G.type)){J.handler=G;J.data=G.data;var E=G.apply(this,arguments);if(E!==g){J.result=E;if(E===false){J.preventDefault();J.stopPropagation()}}if(J.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(G){if(G[h]){return G}var E=G;G=n.Event(E);for(var F=this.props.length,I;F;){I=this.props[--F];G[I]=E[I]}if(!G.target){G.target=G.srcElement||document}if(G.target.nodeType==3){G.target=G.target.parentNode}if(!G.relatedTarget&&G.fromElement){G.relatedTarget=G.fromElement==G.target?G.toElement:G.fromElement}if(G.pageX==null&&G.clientX!=null){var H=document.documentElement,D=document.body;G.pageX=G.clientX+(H&&H.scrollLeft||D&&D.scrollLeft||0)-(H.clientLeft||0);G.pageY=G.clientY+(H&&H.scrollTop||D&&D.scrollTop||0)-(H.clientTop||0)}if(!G.which&&((G.charCode||G.charCode===0)?G.charCode:G.keyCode)){G.which=G.charCode||G.keyCode}if(!G.metaKey&&G.ctrlKey){G.metaKey=G.ctrlKey}if(!G.which&&G.button){G.which=(G.button&1?1:(G.button&2?3:(G.button&4?2:0)))}return G},proxy:function(E,D){D=D||function(){return E.apply(this,arguments)};D.guid=E.guid=E.guid||D.guid||this.guid++;return D},special:{ready:{setup:A,teardown:function(){}}},specialAll:{live:{setup:function(D,E){n.event.add(this,E[0],c)},teardown:function(F){if(F.length){var D=0,E=RegExp("(^|\\.)"+F[0]+"(\\.|$)");n.each((n.data(this,"events").live||{}),function(){if(E.test(this.type)){D++}});if(D<1){n.event.remove(this,F[0],c)}}}}}};n.Event=function(D){if(!this.preventDefault){return new n.Event(D)}if(D&&D.type){this.originalEvent=D;this.type=D.type;this.timeStamp=D.timeStamp}else{this.type=D}if(!this.timeStamp){this.timeStamp=e()}this[h]=true};function k(){return false}function t(){return true}n.Event.prototype={preventDefault:function(){this.isDefaultPrevented=t;var D=this.originalEvent;if(!D){return}if(D.preventDefault){D.preventDefault()}D.returnValue=false},stopPropagation:function(){this.isPropagationStopped=t;var D=this.originalEvent;if(!D){return}if(D.stopPropagation){D.stopPropagation()}D.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=t;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(E){var D=E.relatedTarget;while(D&&D!=this){try{D=D.parentNode}catch(F){D=this}}if(D!=this){E.type=E.data;n.event.handle.apply(this,arguments)}};n.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(E,D){n.event.special[D]={setup:function(){n.event.add(this,E,a,D)},teardown:function(){n.event.remove(this,E,a)}}});n.fn.extend({bind:function(E,F,D){return E=="unload"?this.one(E,F,D):this.each(function(){n.event.add(this,E,D||F,D&&F)})},one:function(F,G,E){var D=n.event.proxy(E||G,function(H){n(this).unbind(H,D);return(E||G).apply(this,arguments)});return this.each(function(){n.event.add(this,F,D,E&&G)})},unbind:function(E,D){return this.each(function(){n.event.remove(this,E,D)})},trigger:function(D,E){return this.each(function(){n.event.trigger(D,E,this)})},triggerHandler:function(D,F){if(this[0]){var E=n.Event(D);E.preventDefault();E.stopPropagation();n.event.trigger(E,F,this[0]);return E.result}},toggle:function(F){var D=arguments,E=1;while(E<D.length){n.event.proxy(F,D[E++])}return this.click(n.event.proxy(F,function(G){this.lastToggle=(this.lastToggle||0)%E;G.preventDefault();return D[this.lastToggle++].apply(this,arguments)||false}))},hover:function(D,E){return this.mouseenter(D).mouseleave(E)},ready:function(D){A();if(n.isReady){D.call(document,n)}else{n.readyList.push(D)}return this},live:function(F,E){var D=n.event.proxy(E);D.guid+=this.selector+F;n(document).bind(i(F,this.selector),this.selector,D);return this},die:function(E,D){n(document).unbind(i(E,this.selector),D?{guid:D.guid+this.selector+E}:null);return this}});function c(G){var D=RegExp("(^|\\.)"+G.type+"(\\.|$)"),F=true,E=[];n.each(n.data(this,"events").live||[],function(H,I){if(D.test(I.type)){var J=n(G.target).closest(I.data)[0];if(J){E.push({elem:J,fn:I})}}});n.each(E,function(){if(!G.isImmediatePropagationStopped()&&this.fn.call(this.elem,G,this.fn.data)===false){F=false}});return F}function i(E,D){return["live",E,D.replace(/\./g,"`").replace(/ /g,"|")].join(".")}n.extend({isReady:false,readyList:[],ready:function(){if(!n.isReady){n.isReady=true;if(n.readyList){n.each(n.readyList,function(){this.call(document,n)});n.readyList=null}n(document).triggerHandler("ready")}}});var w=false;function A(){if(w){return}w=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);n.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);n.ready()}});if(document.documentElement.doScroll&&!l.frameElement){(function(){if(n.isReady){return}try{document.documentElement.doScroll("left")}catch(D){setTimeout(arguments.callee,0);return}n.ready()})()}}}n.event.add(l,"load",n.ready)}n.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(E,D){n.fn[D]=function(F){return F?this.bind(D,F):this.trigger(D)}});n(l).bind("unload",function(){for(var D in n.cache){if(D!=1&&n.cache[D].handle){n.event.remove(n.cache[D].handle.elem)}}});(function(){n.support={};var E=document.documentElement,F=document.createElement("script"),J=document.createElement("div"),I="script"+(new Date).getTime();J.style.display="none";J.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var G=J.getElementsByTagName("*"),D=J.getElementsByTagName("a")[0];if(!G||!G.length||!D){return}n.support={leadingWhitespace:J.firstChild.nodeType==3,tbody:!J.getElementsByTagName("tbody").length,objectAll:!!J.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!J.getElementsByTagName("link").length,style:/red/.test(D.getAttribute("style")),hrefNormalized:D.getAttribute("href")==="/a",opacity:D.style.opacity==="0.5",cssFloat:!!D.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};F.type="text/javascript";try{F.appendChild(document.createTextNode("window."+I+"=1;"))}catch(H){}E.insertBefore(F,E.firstChild);if(l[I]){n.support.scriptEval=true;delete l[I]}E.removeChild(F);if(J.attachEvent&&J.fireEvent){J.attachEvent("onclick",function(){n.support.noCloneEvent=false;J.detachEvent("onclick",arguments.callee)});J.cloneNode(true).fireEvent("onclick")}n(function(){var K=document.createElement("div");K.style.width="1px";K.style.paddingLeft="1px";document.body.appendChild(K);n.boxModel=n.support.boxModel=K.offsetWidth===2;document.body.removeChild(K)})})();var v=n.support.cssFloat?"cssFloat":"styleFloat";n.props={"for":"htmlFor","class":"className","float":v,cssFloat:v,styleFloat:v,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};n.fn.extend({_load:n.fn.load,load:function(F,I,J){if(typeof F!=="string"){return this._load(F)}var H=F.indexOf(" ");if(H>=0){var D=F.slice(H,F.length);F=F.slice(0,H)}var G="GET";if(I){if(n.isFunction(I)){J=I;I=null}else{if(typeof I==="object"){I=n.param(I);G="POST"}}}var E=this;n.ajax({url:F,type:G,dataType:"html",data:I,complete:function(L,K){if(K=="success"||K=="notmodified"){E.html(D?n("<div/>").append(L.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(D):L.responseText)}if(J){E.each(J,[L.responseText,K,L])}}});return this},serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?n.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))}).map(function(D,E){var F=n(this).val();return F==null?null:n.isArray(F)?n.map(F,function(H,G){return{name:E.name,value:H}}):{name:E.name,value:F}}).get()}});n.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(D,E){n.fn[E]=function(F){return this.bind(E,F)}});var q=e();n.extend({get:function(D,F,G,E){if(n.isFunction(F)){G=F;F=null}return n.ajax({type:"GET",url:D,data:F,success:G,dataType:E})},getScript:function(D,E){return n.get(D,null,E,"script")},getJSON:function(D,E,F){return n.get(D,E,F,"json")},post:function(D,F,G,E){if(n.isFunction(F)){G=F;F={}}return n.ajax({type:"POST",url:D,data:F,success:G,dataType:E})},ajaxSetup:function(D){n.extend(n.ajaxSettings,D)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(L){L=n.extend(true,L,n.extend(true,{},n.ajaxSettings,L));var V,E=/=\?(&|$)/g,Q,U,F=L.type.toUpperCase();if(L.data&&L.processData&&typeof L.data!=="string"){L.data=n.param(L.data)}if(L.dataType=="jsonp"){if(F=="GET"){if(!L.url.match(E)){L.url+=(L.url.match(/\?/)?"&":"?")+(L.jsonp||"callback")+"=?"}}else{if(!L.data||!L.data.match(E)){L.data=(L.data?L.data+"&":"")+(L.jsonp||"callback")+"=?"}}L.dataType="json"}if(L.dataType=="json"&&(L.data&&L.data.match(E)||L.url.match(E))){V="jsonp"+q++;if(L.data){L.data=(L.data+"").replace(E,"="+V+"$1")}L.url=L.url.replace(E,"="+V+"$1");L.dataType="script";l[V]=function(W){U=W;H();K();l[V]=g;try{delete l[V]}catch(X){}if(G){G.removeChild(S)}}}if(L.dataType=="script"&&L.cache==null){L.cache=false}if(L.cache===false&&F=="GET"){var D=e();var T=L.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+D+"$2");L.url=T+((T==L.url)?(L.url.match(/\?/)?"&":"?")+"_="+D:"")}if(L.data&&F=="GET"){L.url+=(L.url.match(/\?/)?"&":"?")+L.data;L.data=null}if(L.global&&!n.active++){n.event.trigger("ajaxStart")}var P=/^(\w+:)?\/\/([^\/?#]+)/.exec(L.url);if(L.dataType=="script"&&F=="GET"&&P&&(P[1]&&P[1]!=location.protocol||P[2]!=location.host)){var G=document.getElementsByTagName("head")[0];var S=document.createElement("script");S.src=L.url;if(L.scriptCharset){S.charset=L.scriptCharset}if(!V){var N=false;S.onload=S.onreadystatechange=function(){if(!N&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){N=true;H();K();G.removeChild(S)}}}G.appendChild(S);return g}var J=false;var I=L.xhr();if(L.username){I.open(F,L.url,L.async,L.username,L.password)}else{I.open(F,L.url,L.async)}try{if(L.data){I.setRequestHeader("Content-Type",L.contentType)}if(L.ifModified){I.setRequestHeader("If-Modified-Since",n.lastModified[L.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}I.setRequestHeader("X-Requested-With","XMLHttpRequest");I.setRequestHeader("Accept",L.dataType&&L.accepts[L.dataType]?L.accepts[L.dataType]+", */*":L.accepts._default)}catch(R){}if(L.beforeSend&&L.beforeSend(I,L)===false){if(L.global&&!--n.active){n.event.trigger("ajaxStop")}I.abort();return false}if(L.global){n.event.trigger("ajaxSend",[I,L])}var M=function(W){if(I.readyState==0){if(O){clearInterval(O);O=null;if(L.global&&!--n.active){n.event.trigger("ajaxStop")}}}else{if(!J&&I&&(I.readyState==4||W=="timeout")){J=true;if(O){clearInterval(O);O=null}Q=W=="timeout"?"timeout":!n.httpSuccess(I)?"error":L.ifModified&&n.httpNotModified(I,L.url)?"notmodified":"success";if(Q=="success"){try{U=n.httpData(I,L.dataType,L)}catch(Y){Q="parsererror"}}if(Q=="success"){var X;try{X=I.getResponseHeader("Last-Modified")}catch(Y){}if(L.ifModified&&X){n.lastModified[L.url]=X}if(!V){H()}}else{n.handleError(L,I,Q)}K();if(L.async){I=null}}}};if(L.async){var O=setInterval(M,13);if(L.timeout>0){setTimeout(function(){if(I){if(!J){M("timeout")}if(I){I.abort()}}},L.timeout)}}try{I.send(L.data)}catch(R){n.handleError(L,I,null,R)}if(!L.async){M()}function H(){if(L.success){L.success(U,Q)}if(L.global){n.event.trigger("ajaxSuccess",[I,L])}}function K(){if(L.complete){L.complete(I,Q)}if(L.global){n.event.trigger("ajaxComplete",[I,L])}if(L.global&&!--n.active){n.event.trigger("ajaxStop")}}return I},handleError:function(E,G,D,F){if(E.error){E.error(G,D,F)}if(E.global){n.event.trigger("ajaxError",[G,E,F])}},active:0,httpSuccess:function(E){try{return !E.status&&location.protocol=="file:"||(E.status>=200&&E.status<300)||E.status==304||E.status==1223}catch(D){}return false},httpNotModified:function(F,D){try{var G=F.getResponseHeader("Last-Modified");return F.status==304||G==n.lastModified[D]}catch(E){}return false},httpData:function(I,G,F){var E=I.getResponseHeader("content-type"),D=G=="xml"||!G&&E&&E.indexOf("xml")>=0,H=D?I.responseXML:I.responseText;if(D&&H.documentElement.tagName=="parsererror"){throw"parsererror"}if(F&&F.dataFilter){H=F.dataFilter(H,G)}if(typeof H==="string"){if(G=="script"){n.globalEval(H)}if(G=="json"){H=l["eval"]("("+H+")")}}return H},param:function(D){var F=[];function G(H,I){F[F.length]=encodeURIComponent(H)+"="+encodeURIComponent(I)}if(n.isArray(D)||D.jquery){n.each(D,function(){G(this.name,this.value)})}else{for(var E in D){if(n.isArray(D[E])){n.each(D[E],function(){G(E,this)})}else{G(E,n.isFunction(D[E])?D[E]():D[E])}}}return F.join("&").replace(/%20/g,"+")}});var m={},d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function s(E,D){var F={};n.each(d.concat.apply([],d.slice(0,D)),function(){F[this]=E});return F}n.fn.extend({show:function(I,K){if(I){return this.animate(s("show",3),I,K)}else{for(var G=0,E=this.length;G<E;G++){var D=n.data(this[G],"olddisplay");this[G].style.display=D||"";if(n.css(this[G],"display")==="none"){var F=this[G].tagName,J;if(m[F]){J=m[F]}else{var H=n("<"+F+" />").appendTo("body");J=H.css("display");if(J==="none"){J="block"}H.remove();m[F]=J}this[G].style.display=n.data(this[G],"olddisplay",J)}}return this}},hide:function(G,H){if(G){return this.animate(s("hide",3),G,H)}else{for(var F=0,E=this.length;F<E;F++){var D=n.data(this[F],"olddisplay");if(!D&&D!=="none"){n.data(this[F],"olddisplay",n.css(this[F],"display"))}this[F].style.display="none"}return this}},_toggle:n.fn.toggle,toggle:function(F,E){var D=typeof F==="boolean";return n.isFunction(F)&&n.isFunction(E)?this._toggle.apply(this,arguments):F==null||D?this.each(function(){var G=D?F:n(this).is(":hidden");n(this)[G?"show":"hide"]()}):this.animate(s("toggle",3),F,E)},fadeTo:function(D,F,E){return this.animate({opacity:F},D,E)},animate:function(H,E,G,F){var D=n.speed(E,G,F);return this[D.queue===false?"each":"queue"](function(){var J=n.extend({},D),L,K=this.nodeType==1&&n(this).is(":hidden"),I=this;for(L in H){if(H[L]=="hide"&&K||H[L]=="show"&&!K){return J.complete.call(this)}if((L=="height"||L=="width")&&this.style){J.display=n.css(this,"display");J.overflow=this.style.overflow}}if(J.overflow!=null){this.style.overflow="hidden"}J.curAnim=n.extend({},H);n.each(H,function(N,R){var Q=new n.fx(I,J,N);if(/toggle|show|hide/.test(R)){Q[R=="toggle"?K?"show":"hide":R](H)}else{var P=R.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),S=Q.cur(true)||0;if(P){var M=parseFloat(P[2]),O=P[3]||"px";if(O!="px"){I.style[N]=(M||1)+O;S=((M||1)/Q.cur(true))*S;I.style[N]=S+O}if(P[1]){M=((P[1]=="-="?-1:1)*M)+S}Q.custom(S,M,O)}else{Q.custom(S,R,"")}}});return true})},stop:function(E,D){var F=n.timers;if(E){this.queue([])}this.each(function(){for(var G=F.length-1;G>=0;G--){if(F[G].elem==this){if(D){F[G](true)}F.splice(G,1)}}});if(!D){this.dequeue()}return this}});n.each({slideDown:s("show",1),slideUp:s("hide",1),slideToggle:s("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(D,E){n.fn[D]=function(F,G){return this.animate(E,F,G)}});n.extend({speed:function(F,G,E){var D=typeof F==="object"?F:{complete:E||!E&&G||n.isFunction(F)&&F,duration:F,easing:E&&G||G&&!n.isFunction(G)&&G};D.duration=n.fx.off?0:typeof D.duration==="number"?D.duration:n.fx.speeds[D.duration]||n.fx.speeds._default;D.old=D.complete;D.complete=function(){if(D.queue!==false){n(this).dequeue()}if(n.isFunction(D.old)){D.old.call(this)}};return D},easing:{linear:function(F,G,D,E){return D+E*F},swing:function(F,G,D,E){return((-Math.cos(F*Math.PI)/2)+0.5)*E+D}},timers:[],timerId:null,fx:function(E,D,F){this.options=D;this.elem=E;this.prop=F;if(!D.orig){D.orig={}}}});n.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(n.fx.step[this.prop]||n.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(E){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var D=parseFloat(n.css(this.elem,this.prop,E));return D&&D>-10000?D:parseFloat(n.curCSS(this.elem,this.prop))||0},custom:function(H,G,F){this.startTime=e();this.start=H;this.end=G;this.unit=F||this.unit||"px";this.now=this.start;this.pos=this.state=0;var D=this;function E(I){return D.step(I)}E.elem=this.elem;n.timers.push(E);if(E()&&n.timerId==null){n.timerId=setInterval(function(){var J=n.timers;for(var I=0;I<J.length;I++){if(!J[I]()){J.splice(I--,1)}}if(!J.length){clearInterval(n.timerId);n.timerId=null}},13)}},show:function(){this.options.orig[this.prop]=n.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());n(this.elem).show()},hide:function(){this.options.orig[this.prop]=n.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(G){var F=e();if(G||F>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var D=true;for(var E in this.options.curAnim){if(this.options.curAnim[E]!==true){D=false}}if(D){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(n.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){n(this.elem).hide()}if(this.options.hide||this.options.show){for(var H in this.options.curAnim){n.attr(this.elem.style,H,this.options.orig[H])}}}if(D){this.options.complete.call(this.elem)}return false}else{var I=F-this.startTime;this.state=I/this.options.duration;this.pos=n.easing[this.options.easing||(n.easing.swing?"swing":"linear")](this.state,I,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};n.extend(n.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(D){n.attr(D.elem.style,"opacity",D.now)},_default:function(D){if(D.elem.style&&D.elem.style[D.prop]!=null){D.elem.style[D.prop]=D.now+D.unit}else{D.elem[D.prop]=D.now}}}});if(document.documentElement.getBoundingClientRect){n.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return n.offset.bodyOffset(this[0])}var F=this[0].getBoundingClientRect(),I=this[0].ownerDocument,E=I.body,D=I.documentElement,K=D.clientTop||E.clientTop||0,J=D.clientLeft||E.clientLeft||0,H=F.top+(self.pageYOffset||n.boxModel&&D.scrollTop||E.scrollTop)-K,G=F.left+(self.pageXOffset||n.boxModel&&D.scrollLeft||E.scrollLeft)-J;return{top:H,left:G}}}else{n.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return n.offset.bodyOffset(this[0])}n.offset.initialized||n.offset.initialize();var I=this[0],F=I.offsetParent,E=I,N=I.ownerDocument,L,G=N.documentElement,J=N.body,K=N.defaultView,D=K.getComputedStyle(I,null),M=I.offsetTop,H=I.offsetLeft;while((I=I.parentNode)&&I!==J&&I!==G){L=K.getComputedStyle(I,null);M-=I.scrollTop,H-=I.scrollLeft;if(I===F){M+=I.offsetTop,H+=I.offsetLeft;if(n.offset.doesNotAddBorder&&!(n.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(I.tagName))){M+=parseInt(L.borderTopWidth,10)||0,H+=parseInt(L.borderLeftWidth,10)||0}E=F,F=I.offsetParent}if(n.offset.subtractsBorderForOverflowNotVisible&&L.overflow!=="visible"){M+=parseInt(L.borderTopWidth,10)||0,H+=parseInt(L.borderLeftWidth,10)||0}D=L}if(D.position==="relative"||D.position==="static"){M+=J.offsetTop,H+=J.offsetLeft}if(D.position==="fixed"){M+=Math.max(G.scrollTop,J.scrollTop),H+=Math.max(G.scrollLeft,J.scrollLeft)}return{top:M,left:H}}}n.offset={initialize:function(){if(this.initialized){return}var K=document.body,E=document.createElement("div"),G,F,M,H,L,D,I=K.style.marginTop,J='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"cellpadding="0"cellspacing="0"><tr><td></td></tr></table>';L={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(D in L){E.style[D]=L[D]}E.innerHTML=J;K.insertBefore(E,K.firstChild);G=E.firstChild,F=G.firstChild,H=G.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(F.offsetTop!==5);this.doesAddBorderForTableAndCells=(H.offsetTop===5);G.style.overflow="hidden",G.style.position="relative";this.subtractsBorderForOverflowNotVisible=(F.offsetTop===-5);K.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(K.offsetTop===0);K.style.marginTop=I;K.removeChild(E);this.initialized=true},bodyOffset:function(D){n.offset.initialized||n.offset.initialize();var F=D.offsetTop,E=D.offsetLeft;if(n.offset.doesNotIncludeMarginInBodyOffset){F+=parseInt(n.curCSS(D,"marginTop",true),10)||0,E+=parseInt(n.curCSS(D,"marginLeft",true),10)||0}return{top:F,left:E}}};n.fn.extend({position:function(){var H=0,G=0,E;if(this[0]){var F=this.offsetParent(),I=this.offset(),D=/^body|html$/i.test(F[0].tagName)?{top:0,left:0}:F.offset();I.top-=j(this,"marginTop");I.left-=j(this,"marginLeft");D.top+=j(F,"borderTopWidth");D.left+=j(F,"borderLeftWidth");E={top:I.top-D.top,left:I.left-D.left}}return E},offsetParent:function(){var D=this[0].offsetParent||document.body;while(D&&(!/^body|html$/i.test(D.tagName)&&n.css(D,"position")=="static")){D=D.offsetParent}return n(D)}});n.each(["Left","Top"],function(E,D){var F="scroll"+D;n.fn[F]=function(G){if(!this[0]){return null}return G!==g?this.each(function(){this==l||this==document?l.scrollTo(!E?G:n(l).scrollLeft(),E?G:n(l).scrollTop()):this[F]=G}):this[0]==l||this[0]==document?self[E?"pageYOffset":"pageXOffset"]||n.boxModel&&document.documentElement[F]||document.body[F]:this[0][F]}});n.each(["Height","Width"],function(G,E){var D=G?"Left":"Top",F=G?"Right":"Bottom";n.fn["inner"+E]=function(){return this[E.toLowerCase()]()+j(this,"padding"+D)+j(this,"padding"+F)};n.fn["outer"+E]=function(I){return this["inner"+E]()+j(this,"border"+D+"Width")+j(this,"border"+F+"Width")+(I?j(this,"margin"+D)+j(this,"margin"+F):0)};var H=E.toLowerCase();n.fn[H]=function(I){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+E]||document.body["client"+E]:this[0]==document?Math.max(document.documentElement["client"+E],document.body["scroll"+E],document.documentElement["scroll"+E],document.body["offset"+E],document.documentElement["offset"+E]):I===g?(this.length?n.css(this[0],H):null):this.css(H,typeof I==="string"?I:I+"px")}})})();

if(!Array.forEach){Array.prototype.forEach=function(D,E){var C=E||window;for(var B=0,A=this.length;B<A;++B){D.call(C,this[B],B,this)}};Array.prototype.map=function(E,F){var D=F||window;var A=[];for(var C=0,B=this.length;C<B;++C){A.push(E.call(D,this[C],C,this))}return A};Array.prototype.filter=function(E,F){var D=F||window;var A=[];for(var C=0,B=this.length;C<B;++C){if(!E.call(D,this[C],C,this)){continue}A.push(this[C])}return A};Array.prototype.every=function(D,E){var C=E||window;for(var B=0,A=this.length;B<A;++B){if(!D.call(C,this[B],B,this)){return false}}return true};Array.prototype.indexOf=function(B,C){var C=C||0;for(var A=0;A<this.length;++A){if(this[A]===B){return A}}return -1}}Array.prototype.contains=function(A){if(Array.contains){return this.contains(A)}return this.indexOf(A)>-1};Array.prototype.insert=function(A){if(!this.contains(A)){this.push(A)}};if(!Array.remove){Array.remove=function(D,C,B){var A=D.slice((B||C)+1||D.length);D.length=C<0?D.length+C:C;return D.push.apply(D,A)}}Function.prototype.method=function(A,B){this.prototype[A]=B;return this};Function.prototype.augmentProto=function(A){for(key in A){this.prototype[key]=A[key]}return this};Function.prototype.pBind=function(B){var A=this;return function(){return A.apply(B,arguments)}};Function.prototype.widget=function(){this.prototype.bind=function(B,A){this.$root.bind(B,A);return this};this.prototype.trigger=function(A,B){this.$root.trigger(A,B)};this.prototype.find=function(A){return this.$root.find(A)};return this};String.prototype.toCamel=function(){return this.replace(/[-_\s]\D/gi,function(A){return A.charAt(A.length-1).toUpperCase()})};String.prototype.escapeHTML=function(){return this.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};window.twttr=window.twttr||{};twttr.augmentObject=function(B,C){for(var A in C){B[A]=C[A]}return B};twttr.augmentObject(twttr,{namespaceOf:function(A){return twttr.is.object(A)?A:window},merge:function(){var C=arguments;var F=arguments[arguments.length-1];var B=false;if(twttr.is.nil(C[0])||!twttr.is.def(C[0])){if(C.length<2){return{}}[].shift.call(C);return this.merge.apply(this,C)}if(twttr.is.bool(F)){B=F;[].pop.call(C)}for(var E=0,A=C.length-1;E<A;E++){for(var D in C[E+1]){if(B&&C[0][D]&&twttr.is.object(C[0][D])&&!twttr.is.fn(C[0][D])&&twttr.is.object(C[E+1][D])&&!twttr.is.fn(C[E+1][D])){this.merge(C[0][D],C[E+1][D])}else{C[0][D]=C[E+1][D]}}}return C[0]},extend:function(B,C){var A=function(){};A.prototype=C.prototype;B.prototype=new A();B.prototype.constructor=B;B.uber=C.prototype;if(C.prototype.constructor==Object.prototype.constructor){C.prototype.constructor=C}},klass:function(A,B){return twttr.magic(A,B)},augmentAndExtend:function(B,C,D){var A=twttr.namespaceOf(B);A[C]=function(){A[C].uber.constructor.apply(this,arguments)};twttr.extend(A[C],D);return A[C]},auxo:function(C,D,B){var A=twttr.is.object(B)?B:twttr;return twttr.augmentAndExtend(A,C,D)},augmentString:function(C,A){var B=window;C.split(".").forEach(function(F,E,D){B=B[F]=B[F]||(twttr.is.def(D[E+1])?{}:A)});return B},magic:function(B,A){if(twttr.is.string(B)){return twttr.augmentString(B,A)}else{return twttr.augmentObject(B,A)}},inspect:function(B){console.clear();var C=$(B);var H=C.data("events");var A=0;var G=0;var E=[];var D=[];for(key in H){E.push(key);A++;D.push("\n*******************\n");D.push("Events for "+key+"\n\n");for(fn in H[key]){var F=H[key][fn];G++;D.push(F.toString()+"\n")}}console.log("************* Summary *************");console.log("for target",C);console.log(A+" types of events",E);console.log(G,"Total Event Listeners");console.log("Event listeners assigned to target");console.log(D.join(" "))},is:{bool:function(A){return typeof A==="boolean"},nil:function(A){return A===null},def:function(A){return !(typeof A==="undefined")},number:function(A){return typeof A==="number"&&isFinite(A)},fn:function(A){return typeof A==="function"},array:function(A){return A?this.number(A.length)&&this.fn(A.splice):false},string:function(A){return typeof A==="string"},blank:function(A){return A===""},falsy:function(A){return A===false||A===null||A===undefined},object:function(A){return(A&&(typeof A==="object"||this.fn(A)))||false}},widget:function(A){A.prototype.bind=function(C,B){this.$element.bind(C,B)}}});if(!window.console){var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];window.console={};for(var i=0;i<names.length;++i){window.console[names[i]]=function(){}}}function _(C,A){if(twttr.i18n){var B=twttr.i18n[C];if(B){C=B}}return replaceParams(C,A)}function replaceParams(B,A){if(A){for(var C in A){B=B.replace(new RegExp("\\%\\{"+C+"\\}","gi"),A[C])}}return B}var h=function(){var A=$("<div/>");return function(B){return B?A.text(B).html().replace(/\"/gi,"&quot;"):B}}();function unh(A){return A?A.replace(/&(amp;)+/g,"&").replace(/&[a-z]+;/gi,function(B){if(unh.HTML_ESCAPE_TOKENS[B]){return unh.HTML_ESCAPE_TOKENS[B]}return B}):A}window.unh.HTML_ESCAPE_TOKENS={"&lt;":"<","&gt;":">","&quot;":'"'};function addSlashes(A){return A.replace(/\'/g,"\\'").replace(/\"/g,'\\"')}var reverseString=function(A){return A?A.split("").reverse().join(""):A};var numberWithDelimiter=function(B,A,C){A=A?A:",";C=C?C:".";parts=(""+B).split(".");parts[0]=reverseString(reverseString(parts[0]).replace(/(\d\d\d)/g,"$1"+A));if(parts[0][0]==A){parts[0]=parts[0].substring(1)}return parts.join(C)};var timeAgo=function(C){if(!C){return false}var H=new Date();var G=new Date(C);if(document.all){G=Date.parse(C.replace(/( \+)/," UTC$1"))}var D=H-G;var B=1000,F=B*60,A=F*60;if(isNaN(D)||D<0){return false}var E=-1;$.each([5,10,20],function(){if(D<this*B){E=this;return false}});if(E!=-1){return _("less than %{time} seconds ago",{time:E})}if(D<B*40){return _("half a minute ago")}if(D<F){return _("less than a minute ago")}if(D<B*90){return _("1 minute ago")}if(D<F*45){return _("%{time} minutes ago",{time:Math.round(D/F)})}if(D<F*90){return _("about 1 hour ago")}if(D<A*24){return _("about %{time} hours ago",{time:Math.round(D/A)})}return false};var updateTimeAgo=function(){$(".timestamp").each(function(){var B=$(this);var A=timeAgo(B.meta().time);if(A&&B.find("*").length==0){B.html(A)}});$(".timestamp-title").each(function(){var B=$(this);var A=timeAgo(B.meta().time);if(A){B.attr("title",A)}})};var DEBUG=false;$.extend({log:function(A){if(window.console){console.log(A)}},debug:function(A){if(DEBUG){console.log(A)}},inspect:function(B){var A="{\n";for(var C in B){A+="\t"+C+": "+B[C]+"\n"}A+="}";console.log(A);return A}});(function(){if(document.all){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var A=new Number(RegExp.$1);if(A>=8){$.browser.msie8=true}else{if(A>=7){$.browser.msie7=true}else{$.browser.msie6=true}}}}})();var _tmp={};twttr.augmentObject(twttr,{templates:{},timeouts:{},wait:function(){var A={};twttr.clearWait=function(B){if(twttr.is.def(A[B])){clearTimeout(B);delete A[B]}};return function(E,C){var B="TIMER_"+(new Date()).getTime();var D=setTimeout(function(){if(!twttr.is.def(A[B])){return }E()},C);A[B]=D;return B}}(),processJson:function(json){if(typeof (json)=="object"){var evals=[];$.each(json,function(selector,content){var c=selector.charAt(0);if(c=="$"){evals.push(content)}else{if(c=="!"){var notification=window[selector.substring(1)+"Notification"];if(notification){(new notification()).setMessage(content).show()}}else{var $contentPadded=$("<div></div>").html(content);var $content=$(selector,$contentPadded);if($content.length==1){$(selector).replaceWith($content)}else{$(selector).html(content)}$(selector).show()}}});$.each(evals,function(index,js){if(js){eval(js)}})}},googleAnalytics:function(A){if(window.pageTracker){window.pageTracker._trackEvent("Ajax","refresh",A,null)}},trackPageView:function(C,B,D){if(window.pageTracker){var A;if(C){A=C.toString();if(B){A="/search/tweets/"+encodeURIComponent(h(page.query))}if(D){A=A+D}window.pageTracker._trackPageview(A)}else{window.pageTracker._trackPageview()}}},fadeAndReplace:function(A,B){$(A).fadeOut("medium",function(){$(A).html(B)});$(A).fadeIn("medium")},error:function(A){alert(A?A:_("Whoops! Something went wrong. Please refresh the page and try again!"))},loading:function(){$("#loader").fadeIn(200)},loaded:function(){$("#loader").fadeOut(200)},updateLocation:function(A,E){if(!E){E=document}if(A){var D=A.replace(/^https?:\/\/.+?\//,"").replace(/#/gi,"%23").replace(/\s/gi,"+");var C=D.replace(/[^\w\d_-].*$/,"");var B=(C.length>0)?$(E).find("#"+C):[];if(B.length>0){B.get(0).id=C+"_tmp_for_update_location"}E.location.hash=D;if(B.length>0){B.get(0).id=C}}},NON_CHAR_KEY_CODES:[8,9,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,91,92,93],isNonCharKeyCode:function(A){return $.inArray(A.keyCode,twttr.NON_CHAR_KEY_CODES)!=-1||((A.ctrlKey||A.metaKey)&&$.inArray(A.keyCode,[67,88])!=-1)}});$.extend($.expr[":"],{onthepage:"($(elem).is(':visible') && $(elem).parents(':hidden').length == 0)"});jQuery.fn.move=function(A){var B=$(this).html();$(this).remove();$(A).html(B)};jQuery.fn.meta=function(){var B={type:"attr",name:"data"};var C=$(this);if(C.length==1){return C.metadata(B)}else{var A=[];C.each(function(){A.push($(this).metadata(B))});return A}};jQuery.fn.visible=function(A){$(this).each(function(){$(this).css("visibility",A?"visible":"hidden")})};jQuery.fn.isLoading=function(){$(this).addClass("loading")};$.fn.isLoaded=function(){$(this).removeClass("loading")};$.fn.replace_text=function(C,B){var A=$(this).html();if(A){$(this).html(A.replace(C,B))}};var pluralize=function(C,B,A){return C==1?B:A};var setDocumentTitle=function(A){document.title=unh(A)||""};var addCountToDocumentTitle=function(A){document.title=(A?"("+numberWithDelimiter(A)+") ":"")+document.title.replace(/\([^)]*[0-9]\)\s+/gi,"")};var getCurrentUserScreenName=function(){return page.user_screenname||$('meta[name="session-user-screen_name"]:first').get(0).content};var sessionUserIsPageUser=function(){try{return $('meta[name="session-user-screen_name"]:first').get(0).content==$('meta[name="page-user-screen_name"]:first').get(0).content}catch(A){return false}};$.fn.focusEnd=function(){return this.each(function(){var A=this;if(A.style.display!="none"){if($.browser.msie){A.focus();var B=A.createTextRange();B.collapse(false);B.select()}else{A.setSelectionRange(A.value.length,A.value.length);A.focus()}}})};$.fn.focusFirstTextField=function(){return this.find("input[type=text]:visible:enabled:first").focus().length>0},$.fn.focusFirstTextArea=function(){return this.find("textarea:visible:enabled:first").focus().length>0};$.fn.focusFirstTexttarget=function(){return this.focusFirstTextField()||this.focusFirstTextArea()};$.fn.maxLength=function(A){return this.each(function(){$(this).keydown(function(B){return this.value.length<=A||twttr.isNonCharKeyCode(B)})})};$.fn.replaceClass=function(B,A){return this.each(function(){var C=$(this);if(C.hasClass(B)){C.removeClass(B).addClass(A)}else{if(C.hasClass(A)){C.removeClass(A).addClass(B)}}})};$.fn.isSelectAll=function(A){return this.each(function(){var B=$(this);if(typeof (A)=="string"){var D=$(A).find("input[type=checkbox]")}else{var D=A}function C(){var E=true;D.each(function(){if(!this.checked){E=false;return false}});B.get(0).checked=E}B.click(function(){var E=B.get(0).checked;D.each(function(){this.checked=E});$(this).trigger("select-all-changed",E)});D.click(function(){C();$(this).trigger("checkbox-changed",this.checked)})})};function bodytarget(){return $("body")}twttr.klass("twttr.Observer",function(){this.fns=[]}).method("listen",function(A){this.fns.push(A)}).method("unlisten",function(A){this.fns=this.fns.filter(function(B){if(B!==A){return B}})}).method("trigger",function(C,B){var A=B||window;this.fns.forEach(function(D){D.call(A,C)})});twttr.klass("twttr.User",function(A){this.screen_name=A}).method("update",function(B,A){twttr.tweeters[this.screen_name][B]=A;return this}).method("updateAll",function(B){for(var A in B){twttr.tweeters[this.screen_name][A]=B[A]}return this}).method("data",function(B){var A=twttr.tweeters[this.screen_name];return B?A[B]:A});twttr.augmentString("twttr.Tweeter",{UserFetchTimeout:5000,UserFetchUrl:"/users/show",_bail:false,_requesting:false,bail:function(){this._bail=true},isRequesting:function(){return this._requesting},getCurrentUser:function(A){return this.findById(page.sessionUserId,A)},find:function(F,C,G){var B,A;var D=this;if(twttr.is.fn(C)){B=window;A=C}else{B=C;A=G}var E=twttr.is.def(F.screen_name)?F.screen_name.toLowerCase():null;if(E&&twttr.tweeters[E]){A.call(B,new twttr.User(E),true);return true}else{$.ajax({url:this.UserFetchUrl,type:"GET",data:F,dataType:"json",timeout:this.UserFetchTimeout,beforeSend:function(){D._requesting=true},success:function(K){D._requesting=false;var H=K.user;if(H){var I={};var J=H.screen_name.toLowerCase();I[J]=H;twttr.Tweeter.merge(I,true);if(D._bail){D._bail=false;return false}A.call(B,new twttr.User(J),false)}else{if(D._bail){D._bail=false;return false}A.call(B,null,false)}},error:function(H){D._requesting=false;if(D._bail){D._bail=false;return false}A.call(B,null,false)}});return false}},findByScreenName:function(B,A,C){return this.find({screen_name:B,hovercard:true},A,C)},findById:function(D,A,C){var B=twttr._birdtags[D];if(twttr.is.def(B)){this.findByScreenName(B,A,C)}else{this.find({user_id:D,hovercard:true},A,C)}},merge:function(){twttr.tweeters={};twttr._birdtags={};return function(D,A){var D=D||{};if(A){twttr.merge(twttr.tweeters,D,true)}else{var C=twttr.merge(D,twttr.tweeters,true);twttr.merge(twttr.tweeters,C,true)}for(var B in twttr.tweeters){twttr._birdtags[twttr.tweeters[B].user_id]=B}}}()});twttr.loadTemplate=function(A,B){if(twttr.templates[A]){return twttr.templates[A]}B=B||function(){};$.get("/mustaches/"+A+".html",null,function(D){var C={templates:{}};C.templates[A]=D;twttr.merge(twttr,C,true);B(twttr.templates)},"html")};twttr.loadTemplates=function(A,B){B=B||function(){};A.forEach(function(D,C){twttr.loadTemplate(D,function(E){var F=A.every(function(G){return twttr.is.def(E[G])});if(F){B(twttr.templates)}})})};twttr.SimplePositioner={setPosition:function(C,G,E){var D={inline:false,direction:null,offsets:{inline:{top:0,left:0},below:{top:0,left:0},above:{top:0,left:0}}};var F=twttr.merge({},D,E,true);var B=C instanceof jQuery?C:$(C);var A=G instanceof jQuery?G:$(G);var H=A.offset();this._opts=F;if(!F.inline){switch(F.direction){case"above":this._positionAbove(B,A,H,F.offsets.above);break;case"below":this._positionBelow(B,A,H,F.offsets.below);break;default:if((H.top-$(document).scrollTop())>(F.itemHeight||B.height())){this._positionAbove(B,A,H,F.offsets.above)}else{this._positionBelow(B,A,H,F.offsets.below)}break}}else{this._positionInline(B,A,H,F.offsets.inline);B.css("left",H.left+F.offsets.inline.left)}},_positionAbove:function(C,B,H,A){$("body").addClass("loading-hoverer-above");C.addClass("position_above").removeClass("position_below").removeClass("position_inline");var G=Math.round(H.top+A.top);var F=$("body");var E=parseInt(F.css("padding-top"));G+=E>0?12:0;var D=F.outerHeight()-G-B.height();C.css({bottom:D,left:this._getLeftPosition(C,B,H)+A.left})},_positionBelow:function(A,C,D,E){var B=Math.round(D.top+C.height()+E.top);A.addClass("position_below").removeClass("position_above").removeClass("position_inline");A.css({top:B,left:this._getLeftPosition(A,C,D)+E.left})},_positionInline:function(A,B,D,C){A.css("top",D.top+C.top).addClass("position_inline").removeClass("position_below").removeClass("position_above")},_getLeftPosition:function(A,B,C){return Math.round(C.left+(B.width()/2))}};var updateCount=function(A,F,D){try{var E=$(A);var C=parseInt(E.html().replace(/[^0-9]/g,""))+F;return setCount(A,C,D)}catch(B){return false}};var setCount=function(A,C,D){try{var E=$(A);if(D){E.fadeOut(D,function(){E.html(numberWithDelimiter(C)).fadeIn(D)})}else{E.html(numberWithDelimiter(C))}return C}catch(B){return false}};var updateFollowingCount=function(A){return updateCount("#following_count",A)};var updateFollowersCount=function(A){return updateCount("#follower_count",A)};twttr.forbiddenAccess={decider:function(A){twttr.forbiddenAccess.unauthed(A)},unauthed:function(req){var message;try{message=eval("("+req.responseText+")").error}catch(err){}if(!message){if(req.status==403){message=_("You are not authorized to perform this operation.")}}if(message){new ShortNotification().setMessage(message).show()}},revoked:function(){window.location.reload()}};twttr.isReplyOnlyTweet=function(A){var B=/^\@([a-zA-Z0-9_]{1,20})\s*$/;if(A.match(B)){return true}return false};$.fn.isAlertBox=function(){return this.each(function(){var A=$(this);A.find("a").click(function(){var B=$(this).attr("href");$.ajax({type:"POST",dataType:"text",data:{authenticity_token:twttr.form_authenticity_token},url:"/account/clear_user_alert",success:function(){A.slideUp("fast");window.location=B}});return false})})};$.fn.isUpdateForm=function(){return this.each(function(){var O=$(this);var H=O.find("textarea").isCharCounter();var A=O.find("#tweeting_button, #update-submit");var B=O.find("label.doing");var J=O.find(".char-counter");var F=/^\s*@(\w+)\W+/;var D=/^\s*[dD][mM]?\s+(?:(\w+)\W+)?/;var I=O.find(".places-nearby");var E;var N=false;function M(){var P=H.val();if(twttr.isReplyOnlyTweet(P)){location.href=RegExp.$1;return false}if(P.length>140){alert(_("That tweet is over 140 characters!"));return false}else{if(P.replace(/s\*/g,"")==""){return false}else{A.addClass("btn-disabled").attr("disabled",true);return true}}}A.bind("click",function(Q){var P=$(this);Q.preventDefault();if(!P.hasClass("btn-disabled")){P.closest("form").submit()}});function K(P){if(twttr.is.def(P.users)){twttr.Tweeter.merge(P.users,true)}A.removeClass("btn-disabled").removeAttr("disabled");var Q=P.text;if(P.messageForFlash){(new ShortNotification()).setMessage(P.messageForFlash).show()}else{if(P.errorForFlash){(new InfoNotification()).setMessage(P.errorForFlash).show()}else{if($("body").attr("id")!="home"){(new ShortNotification()).setMessage(_("Your status has been updated!")).show()}else{if(P.status_li){$("#timeline tr.hentry:first").removeClass("latest-status");$.Timeline.prepend(P.status_li)}}setCount("#update_count",P.status_count,250);if(P.latest_status){updateTimeAgo();$("#latest_status").html(P.latest_status).isCurrentStatus(true)}}}H.val("").focusEnd();$("#in_reply_to_status_id").val("");$("#in_reply_to").val("");C("");H.trigger("change");J.removeClass("loading");if(document.all){J.text("140")}else{J.css("color","#ccc")}}function C(Q){var P;if(P=Q.match(D)){B.html(P[1]?_("Direct message %{person}:",{person:P[1]}):_("Direct message:"));A.val(_("send"))}else{if(P=Q.match(F)){B.html(_("Reply to %{screen_name}:",{screen_name:P[1]}));A.val(_("reply"))}else{B.html(_("Whatâs happening?"));A.val(_("update"))}}}H.bind("keyup blur focus",function(){C($(this).val())});O.submit(function(){if(M()){twttr.googleAnalytics("/status/update/refresh");var T=H.val();E={authenticity_token:twttr.form_authenticity_token,status:T,twttr:true};var Q=window.location.href;if($("body").attr("id")=="home"&&((Q.indexOf("page=")==-1)||Q.match(/page=1(?!\d)/))){E.return_rendered_status=true}var P=$("#in_reply_to_status_id").val();var S;if(P&&(S=T.match(F))){if(S[1]==$("#in_reply_to").val()){E.in_reply_to_status_id=P}}var R=$("#source").val();if(R){E.source=R}E.lat=$("#lat").val();E["long"]=$("#long").val();E.place_id=$("#place_id").val();G(E)}return false});function G(P){$.ajax({type:"POST",dataType:"json",url:"/status/update",data:P,beforeSend:function(){J.addClass("loading");if(document.all){J.html("&nbsp;&nbsp;&nbsp;&nbsp;")}else{J.css("color","transparent")}},success:K,error:twttr.forbiddenAccess.decider})}try{H.focusEnd()}catch(L){}})};$.fn.isLocationTrends=function(){var A=$("div#trends").meta()["global_id"];return this.each(function(){var I=$(this);var G=$("#location_menu");var B=$("#change_location");var L=$("#trends .trends-links");var E=new twttr.AttachedDialog($("#tt_menu span"),{content:$("#local_trends"),width:"545px",gravity:"east",weight:"top",modal:false});$(document).click(function(N){var M=$(N.target);if(E.opened&&!M.parents(".modal, .trends-links li").length){E.close()}});E.find("#location_done").click(function(){E.close();B.removeClass("active");if(!F()){D(A)}});var K=false;if($("#local_trends_notice").length){setTimeout(function(){(K=new twttr.AttachedDialog($("#tt_menu span"),{content:$("#local_trends_notice").parent(),width:"186px",gravity:"east",weight:"top",openonload:true,closeButton:true,modal:false})).bind("close",function(){D(A);return false}).open();K.find("#location_notice_set").click(function(){D(A);K.close();E.open();return false})},500)}function H(P){E.find("a.active-parent").removeClass("active-parent");var M=$(P).attr("parents");if(M){var N=M.split(" ");for(var O=0;O<N.length;O++){$("."+N[O]).addClass("active-parent")}}}function F(){return G.find("em")}function D(M){if(!M){M=0}$.ajax({type:"POST",url:"/users/update_trend_location_id",data:{authenticity_token:twttr.form_authenticity_token,trend_location_id:M},success:function(){L.append($("<em></em>").append(M))}});return false}B.click(function(){E.toggle();if(K){K.close()}B.toggleClass("active");return false});E.find("a").click(function(){var M=$(this);var N=M.attr("id").replace("trend_loc_","");E.find(".active").removeClass("active");E.find("#trend_loc_"+N).parent().addClass("active");H(M);if(N){$.ajax({type:"GET",dataType:"json",url:"/users/location_trends",data:{twttr:true,trend_location_id:N},beforeSend:function(){$("#trends_loading").show()},success:function(O){L.hide();L.fadeIn();$("#trends_loading").hide();if(O){var P=[];L.html("");$.each(O.trends,function(){var Q=this;var T=Q.name;var S=$('<a class="search_link" href="/search?q='+encodeURIComponent(Q.query)+'"name="'+T+'" title="'+T+'">'+T+"</a>");S.isSearchLink();var R=Q.description;if(R){L.append($("<li></li>").append(S).append($("<em></em>").append(R)))}else{L.append($("<li></li>").append(S))}});G.html(O.location["name"]);loadTrendDescriptions();D(O.location["id"])}else{}},error:function(O){$.debug("error: "+O.responseText)},complete:function(){$("#trends_loading").hide()}})}return false});var C=F();if(C){var J=$("#trend_loc_"+C);J.parent().addClass("active");H(J)}})};$.fn.isDirectMessageForm=function(){return this.each(function(){var L=$(this);var D=L.find("textarea").isCharCounter();var B=/^\s*[dD][mM]?\s+([A-Za-z0-9]{1,20})[^A-Za-z0-9]/;var F=L.find("select");var A=L.find("#dm-submit");var E=L.find(".char-counter");var G="";L.find("input[type=submit]").attr("disabled","disabled").addClass("btn-disabled");try{D.focusEnd()}catch(I){}function C(N){if(F.val()){return }if((matches=N.match(B))&&matches[1]&&(G!=matches[1])){var M=true;F.find("option").each(function(){if(this.innerHTML.toLowerCase()==matches[1].toLowerCase()){F.val(this.value);M=false;return false}});if(M){F.append(_('<option value="%{screen_name}">%{screen_name}</option>',{screen_name:matches[1]}));F.val(matches[1])}G=matches[1]}}A.click(function(M){var P=D.val();var N=P.match(B);var O=F.find("option[value="+F.val()+"]");if(N&&N[1]&&N[1].toLowerCase()==O.text().toLowerCase()){D.val(P.replace(B,""))}return true});F.change(function(M){D.trigger("update",M)});D.bind("keyup blur focus",function(M){C($(this).val());D.trigger("update",M)});function H(M){(new ShortNotification()).setMessage(M.messageForFlash).show();if($("body").attr("id")=="sent"){$.Timeline.prepend(M.direct_message_li)}D.val("");F.val("");G="";D.trigger("change");E.removeClass("loading");if(document.all){E.text("140")}else{E.css("color","#ccc")}}if(F.length>0){function J(){if(F.length&&(F.find("option").length==0)){$.ajax({type:"GET",dataType:"json",url:"/direct_messages/recipients_list",data:{twttr:true},success:function(N){if(N){var M=[];$.each(N,function(){var O=this;if((O.length>1)&&O[0]&&O[1]){M.push('<option value="'+O[0]+'">'+O[1]+"</option>")}});F.html('<option value="" selected="selected"></option>'+M.join(""))}},error:function(M){$.debug("error: "+M.responseText)}})}}var K=$("body").attr("id");if(K=="direct_messages"||K=="inbox"||K=="sent"){J()}L.bind("loadrecipients",null,function(M){J()});L.submit(function(){twttr.googleAnalytics("/direct_messages/create/refresh");var N=D.val();var M={authenticity_token:twttr.form_authenticity_token,text:N,"user[id]":F.val(),twttr:true};$.ajax({type:"POST",dataType:"json",url:"/direct_messages/create",data:M,beforeSend:function(){E.addClass("loading");if(document.all){E.text("")}else{E.css("color","transparent")}},success:H,error:twttr.forbiddenAccess.decider});return false})}})};$.fn.isTimelineTabLink=function(){return this.each(function(){var A=$(this);A.click(function(B){document.body.id=A.meta().dispatch_action}).bind("loading",null,function(B){A.parent("li").addClass("loading")}).bind("loaded",null,function(B){A.parent("li").removeClass("loading")}).bind("aborted",null,function(B){A.parent("li").removeClass("loading")})})};$.fn.isEmbeddedMediaExpander=function(){return this.livequery(function(){var A=$(this);var B=A.parent().find(".embedded_media");A.click(function(){B.slideToggle("normal",function(){if(A.hasClass("embedded_media_icon_active")){A.removeClass("embedded_media_icon_active")}else{A.addClass("embedded_media_icon_active")}})})})};$.fn.isCharCounter=function(){return this.each(function(){var A=true;var F=$(this);var J=F.closest("form");var E=J.find(".char-counter");var H=J.find("#tweeting_button, #update-submit, #dm-submit");var D=J.find("select");function C(){H.addClass("btn-disabled").attr("disabled","disabled");A=true}function G(){if(A){H.removeClass("btn-disabled").removeAttr("disabled");A=false}}function B(){var L=F.val();var K=L.length;E.html(""+(140-K));if(K<=0){E.css("color","#cccccc");C()}else{if(K<=140&&(D.length==0||D.val())){G()}else{C()}if(K>130){E.css("color","#d40d12")}else{if(K>120){E.css("color","#5c0002")}else{E.css("color","#cccccc")}}}}var I="blur focus change "+($.browser.mozilla?"paste input":"keyup");F.bind(I,function(K){B()});D.change(function(K){B()});F.focus()})};$.fn.isCurrentStatus=function(A){return this.each(function(){var F=$(this);var I=$("#latest_status");var C=F.find("#latest_text");var E=C.find(".status-text");var D=$(this).parent("#update_notifications");var H=I.find("strong");$("#latest_text_full, #latest_text").click(function(){$("#latest_text_full, #latest_text").toggle()});C.css("color","transparent");var B=$("#latest_text_full .status-text").text();$("#latest_text .status-text").html("<strong>"+_("Latest: ")+"</strong>").append(B.escapeHTML());C.css("color","");if(A){var G=I.find("span, strong");G.each(function(){$(this).data("old_color",$(this).css("color")).animate({color:"#333"},500)});clearTimeout(twttr.timeouts.latest_status_timeout);twttr.timeouts.latest_status_timeout=setTimeout(function(){G.each(function(){$(this).animate({color:$(this).data("old_color")},1500,function(){$(this).css("color","")})})},1500)}})};function initializeTimeline(){$.Statuses.initialize($("#timeline"))}function getListItemFromChild(A){return A.parents(".hentry:first")}function getStatusIdFromListItem(B){var A=/status_(.*)/i.exec(B.attr("id"));return(A)?A[1]:null}function getScreenNameFromListItem(B){var A=/u-([A-Za-z0-9_]+)/i.exec(B.attr("class"));return(A)?A[1]:null}function getShareIdFromListItem(B){var A=/(.)* s-([\d]+)(.)*/i.exec(B.attr("class"));return(A)?A[2]:getStatusIdFromListItem(B)}function timelineRefresh(D,A){var C=$("#results_update");if(C.length==0){return }if(!D||(("home,replies,inbox".indexOf(D)==-1)&&!D.match(/^\/?list/))){return }if(!A){A=($("#results_update").attr("href").replace(/^\//,"")||window.location.hash.replace(/^#/,"")||D).replace(/^([^\/])/,"/$1")}A=A.replace(/\/?list\//,"/");var B=$("#new_results_notification").meta().timeline;$("#new_results_notification").data("count",0);if(page.timelineRefresher){if(page.timelineRefresher.dispatchAction==D){return }else{page.timelineRefresher.stop()}}page.newResults=null;page.timelineRefresher=new Occasionally(B.delay*1000,B.max_delay*1000,function(){var E=false;if($("ol#timeline").length){$.ajax({method:"GET",dataType:"json",url:A,data:{since_id:getMaxStatusIdFromTimeline(),refresh:true},success:function(F){processTimelineRefresh(F,D)},error:function(){if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null}}})}},function(){return page.newResults},B.decay);page.timelineRefresher.dispatchAction=D;page.timelineRefresher.start()}function getMaxStatusIdFromTimeline(){var A=0;$("ol#timeline > li").each(function(){var B=parseInt(this.id.replace(/^[A-Z_]+/gi,""));if(A<B){A=B}});return A}function processTimelineRefresh(J,D){if(twttr.is.def(J.users)){twttr.Tweeter.merge(J.users)}var G=$("#new_results_notification").meta().timeline;var K=$("<div>"+J["#timeline"]+"</div>");var A=$("#content ol#timeline");K.find("#timeline > li").each(function(){if(A.find("li#"+this.id).length){$(this).remove()}});var F=K.find("ol > li");var C=F.length;var E=($("#new_results_notification").data("count")||0)+C;if(C){A.prepend(F.addClass("buffered"));K.remove();A.find("li.buffered:gt("+(G.max_refresh_size-1)+")").remove();var B={results_count:numberWithDelimiter(E),username:getCurrentUserScreenName()};var H=$("#results_update").is(":visible")?"":' style="display:none;"';var I='<a id="results_update" class="minor-notification" href="/'+D+'" accesskey="n"'+H+">";if(D=="inbox"){I+=((E==1)?_("1 new message."):_("%{results_count} new messages.",B))}else{if(D=="replies"){I+=((E==1)?_("1 new mention of @%{username}.",B):_("%{results_count} new mentions of @%{username}.",B))}else{I+=((E==1)?_("1 new tweet."):_("%{results_count} new tweets.",B))}}I+="</a>";$("#results_update").replaceWith(I);$("#results_update").click(function(){$("#content ol#timeline > li.buffered").addClass("unbuffered").removeClass("buffered");if($("#new_results_notification").data("count")>G.max_refresh_size){$("#content ol#timeline > li:not(.unbuffered)").remove();var M=$("#content ol#timeline > li").attr("id").replace(/^[^0-9]+/,"");var L=($("#results_update").attr("href")||window.location.hash||D).replace(/^([^\/])/,"/$1")+"?max_id="+M+"&page=3&twttr=true";$("#pagination").html('<div id="#pagination"><a id="more" class="round more" rel="next" href="'+L+'">'+_("more")+"</a></div>")}else{$("#content ol#timeline > li.last-on-refresh").removeClass("last-on-refresh");$("#content ol#timeline > li.unbuffered:last").addClass("last-on-refresh")}updateTimeAgo();$("#content ol#timeline > li.unbuffered").removeClass("unbuffered");$("#results_update").hide();addCountToDocumentTitle();$.Timeline.triggerPageHeightChangedEvent();$("#new_results_notification").data("count",0);return false});$("#new_results_notification").data("count",E);$("#results_update:hidden").slideDown("normal",function(){$.Timeline.triggerPageHeightChangedEvent();var L=$(this);if(twttr.is.def(twttr.HOVERCARD)){twttr.HOVERCARD.reposition(L.get(0).offsetHeight+parseInt(L.css("margin-top")))}});addCountToDocumentTitle(E)}else{K.remove()}page.newResults=(C>0)}$(document).ready(function(){$().Page();twttr.setDefaultBucket();initializeTimeline();$("#pagination #more").isMoreButton();$("body").bind("ajaxSuccess",twttr.setupRetweetTips);twttr.setupRetweetTips();$("span.byline a").tipsy({gravity:"n"})});twttr.augmentObject(twttr,{RETWEETING_BACKGROUND_COLOR:"#ffffe5",_bucket:null,setDefaultBucket:function(){this._bucket=parseInt(page.sessionUserId)%2},getBucket:function(){return this._bucket},setBucket:function(A){this._bucket=A},applyTipsy:function(A,C,B){if(!A.data("tipsy_applied")){A.data("tipsy_applied",true);A.attr("title",A.attr("title")+C);A.tipsy(B)}},isRetweetTimeline:function(){return !!(location.hash&&location.hash.match(/retweet/))},setupRetweetTips:function(){$("span.status-body span.shared-content a.screen-name, div.shared-by-avatar-tiles a.profile-pic img.photo").each(function(){var A=$(this);if(A.data("tipsy_applied")||!twttr.isRetweetTimeline()){return }var B="left-align";var C="";if($("body#home").length>0&&!A.hasClass("you")){var C=_('<div class="retweet_tip_tip">Tip: To hide/show retweets from this user, click on their username and look for the retweet setting <div class="retweet-icon"></div></div>');B+=" retweet-tooltip"}twttr.applyTipsy(A,C,{gravity:"l",hideTimeout:10000,additionalCSSClass:B})});$("span.big-retweet-icon").each(function(){if($("body#profile").length==0){twttr.applyTipsy($(this),"",{gravity:"s",hideTimeout:10000})}else{$(this).attr("title","")}})},getStatusBodyParent:function(A){return A.parents(".status-body").parent()},setRetweetingStyles:function(B,E,D){var A=getListItemFromChild(B);var C=twttr.getStatusBodyParent(B);C.append("<span class='retweeting loading'>"+E+"</span>");A.addClass("no-hover");if($("body.status").length==0){A.css("background-color",twttr.RETWEETING_BACKGROUND_COLOR)}},unsetRetweetingStyles:function(B){var A=getListItemFromChild(B);var C=twttr.getStatusBodyParent(B);A.removeClass("no-hover");C.find(".retweeting.loading").remove()},animateStatusReplacement:function(B,D){var C=getListItemFromChild(B);var F=$(D.status_li);F.hide();C.after(F);if(C.hasClass("latest-status")){F.addClass("latest-status")}var A=F.height();var E=C.height();F.remove().show().height(E);if($("body.status").length==0){F.css("background-color",twttr.RETWEETING_BACKGROUND_COLOR)}C.replaceWith(F);if(A!=E){F.animate({height:A},500,function(){F.css("height",null);twttr.animateStatusColorChange(F)})}else{twttr.animateStatusColorChange(F)}if(D.latest_status){$("#latest_status").html(D.latest_status).isCurrentStatus(true)}},animateStatusColorChange:function(A){A.animate({backgroundColor:"#FFF"},1500,function(){A.css("background-color",null)})}});$.fn.Page=function(){var A=$('meta[name="session-user-screen_name"]:first').get(0);var D=$('meta[name="page-user-screen_name"]:first').get(0);var B=$('meta[name="session-userid"]:first').get(0);var C=A&&D&&A.content==D.content;if(typeof (page)=="undefined"){page={}}page=$.extend(page,{timeline:null,sessionUserScreenName:(A?A.content:null),sessionUserId:(B?B.content:null),pageUserScreenName:(D?D.content:null),loggedIn:$('meta[name="session-loggedin"][content="y"]').length>0,hideUnfavorited:C,isTimelineChange:false,currentTimelineChange:{},$oldTimelineLink:""})};$.Statuses={initialize:function(A){if(page.loggedIn){var B=$(A).find(".hentry");$.each($.Statuses.actions,function(){var C=this;C.apply(B)})}},actions:{isTweet:function(){this.livequery(function(){var A=$("body#show.status").length>0;var B=$("body#profile").length>0;if(!A&&!B){var C=$(this).find("a.hashtag");C.isSearchLink(SEARCH_CALLBACKS.hashtagLink)}})},isHoverable:function(){if($("body.ie,body.ie6").get(0)){this.livequery(function(){var A=$(this);A.hover(function(){A.addClass("hover")},function(){A.removeClass("hover")})})}},isFavoriteable:function(){this.find(".fav-action").live("click",function(){var D=$(this);if(D.hasClass("blocked")){return false}var B=D.parents(".hentry:first");var E=B.attr("id").replace(/status_/,"");var C=D.hasClass("fav")?"destroy":"create";twttr.googleAnalytics("/favorites/"+C+"/refresh/"+E);function A(){var F=D.hasClass("fav");D.removeClass(F?"fav":"non-fav").addClass(F?"non-fav":"fav").attr("title",(F?_("favorite this tweet"):_("un-favorite this tweet")))}$.ajax({type:"POST",dataType:"json",url:"/favorites/"+C+"/"+E,data:{authenticity_token:twttr.form_authenticity_token},beforeSend:function(){A();D.addClass("blocked")},complete:function(){D.removeClass("blocked")}});return false})},isReplyable:function(){this.find(".reply").live("click",function(){var E=$(this);var C=E.parents(".hentry:first");var G=C.attr("id").replace(/status_/,"");var A=C.attr("class").match(/u-([A-Za-z0-9_]+)/);var B=A[1];if(!B){alert(_("Whoops! Something went wrong. Please refresh the page and try again!"));return }if(C.hasClass("direct_message")){var F=$("#text");twttr.googleAnalytics("/direct_messages/reply/"+B+"/"+G);var D=$("#direct_message_user_id");if(!D.find("option[text='"+B+"']").attr("selected",true).length){D.append('<option value="'+B+'" selected="selected">'+B+"</option>")}F.trigger("update");$("#text").focusEnd()}else{if(C.hasClass("status")||C.hasClass("share")){var F=$("#status");twttr.googleAnalytics("/reply/"+B+"/"+G);if(F.size()){F.val("@"+B+" "+F.val().replace(RegExp("@"+B+" ?","i"),"")).trigger("update");$("#status").focusEnd();$("#in_reply_to_status_id").val(G);$("#in_reply_to").val(B);window.scroll(0,0)}else{window.location=E.find("a").attr("href");return false}}}window.scroll(0,0);return false})},isRetweetable:function(){this.find(".retweet-link").live("click",function(A){new RetweetInlineForm().show({targetNode:$(this)});A.preventDefault()})},isDeleteable:function(){this.find(".del").live("click",function(D){var C=$(this);var A=C.parents(".hentry:first");var F=A.attr("id").replace(/[^\d]*/,"");var E=A.hasClass("latest-status");var B;if(A.hasClass("direct_message")){B="/direct_messages/destroy"}else{B="/status/destroy"}if(confirm(_("Sure you want to delete this tweet? There is NO undo!"))){twttr.googleAnalytics(B+"/refresh/"+F);$.ajax({type:"POST",url:B+"/"+F,data:{authenticity_token:twttr.form_authenticity_token,latest_status:E},dataType:(B=="/status/destroy"?"json":null),beforeSend:function(){A.fadeOut(500);updateCount("#update_count",-1,250)},success:function(G){A.remove();if(B=="/status/destroy"){if(E){twttr.processJson(G);updateLatest()}}setCount("#update_count",G.status_count)},error:function(){A.fadeIn(0);(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please try again!")).show()}})}D.preventDefault()})},isUndoable:function(){this.find(".undo").live("click",function(){var C=$(this);var B=C.parents(".hentry:first");var A=B.attr("id").replace(/status_/,"");$.ajax({type:"POST",url:"/statuses/"+A+"/retweet",data:{_method:"delete",authenticity_token:twttr.form_authenticity_token,controller_name:page.controller_name,action_name:page.action_name,user_screenname:page.pageUserScreenName},dataType:"json",beforeSend:function(){C.attr("title","").removeClass("undo");twttr.setRetweetingStyles(C,_("Undoing..."))},success:function(D){if(D.status_li){twttr.animateStatusReplacement(C,D)}else{B.fadeOut(500,function(){var E=$("ol#timeline .hentry:visible:first");if(!E.hasClass("share")){E.addClass("latest-status")}})}(new InfoNotification()).setMessage(_("Your followers will no longer see the tweet as retweeted by you.")).show()},complete:function(){twttr.unsetRetweetingStyles(B)}});return false})},isMappable:function(){this.find(".geo_pin").live("click",function(){var B=jQuery(this);var A=B.next();var C=B.position();A.css({left:C.left-25,bottom:C.top+20});A.show();A.find(".map_close").click(function(){A.hide();return false})})}}};$.Timeline={prepend:function(A){$("#timeline").prepend(A);$.Timeline.triggerTimelineChanged()},append:function(A){$("#timeline").append(A);$.Timeline.triggerTimelineChanged()},registerTimelineEvent:function(A){$("body").bind("timeline-changed",A)},unregisterTimelineEvent:function(A){$("body").unbind("timeline-changed",A)},triggerTimelineChanged:function(){$("body").trigger("timeline-changed")},registerPageHeightChangedEvent:function(A){$("body").bind("page-height-changed",A)},unregisterPageHeightChangedEvent:function(A){$("body").unbind("page-height-changed",A)},triggerPageHeightChangedEvent:function(){$("body").trigger("page-height-changed")}};function basicMoreButtonHandler(A){return function(){var C=$(this);C.blur();if(C.hasClass("loading")){return false}var B=C.attr("href");var D=$("#more").text();$.ajax(jQuery.extend({type:"GET",url:B,dataType:"json"},A));return false}}$.fn.isMoreButton=function(){return this.live("click",basicMoreButtonHandler({beforeSend:function(){$("#timeline li:last-child").addClass("last-on-page");$("#more").addClass("loading").html("")},success:function(A){updateTimeAgo();if(twttr.is.def(A.users)){twttr.Tweeter.merge(A.users)}$("#timeline").append($(A["#timeline"]).find(".hentry"));$("#pagination").html(A["#pagination"]);if(window.onPageChange){onPageChange()}$.Timeline.triggerTimelineChanged()},error:function(){$("#timeline li:last-child").removeClass("last-on-page");$("#more").removeClass("loading").text(_("more"));(new ShortNotification()).setMessage(_("Whoops! Something went wrong. Please try again!")).show()}}))};$(function(){var request=function(data,success){return function(){var self=this;var $this=$(this);var notification=(new ProgressNotification()).setProgressMessage($this.attr("progress")).setCompletedMessage($this.attr("completed"));$.ajax({type:$this.attr("method"),dataType:"json",url:$this.attr("href")||$this.attr("action"),data:data.apply(self),success:function(){notification.done();if(success){success.apply(self)}},beforeSend:function(){twttr.loading();notification.show()},complete:twttr.loaded});return false}};$("form.restful").livequery("submit",request(function(){return $(this).serializeArray()},function(){$(this).trigger("submitted")}));$("a.restful").livequery("click",request(function(){return eval("("+$(this).attr("data")+")")}))});function updateLatest(){var A=$("#latest_status");if(A.length){A.isCurrentStatus(true)}$("#timeline li:first").addClass("latest-status")}function setTitleAndHeading(C){var K=$("#timeline_heading h1");var I=$("#timeline_heading h2");var C=C||$("body").attr("id");var A=h(page.query);var D=getCurrentUserScreenName();if(!twttr.titles_and_headings){var H={user:D,name:page.user_fullname};twttr.titles_and_headings={home:{title:_("Home"),heading:_("Home")},replies:{title:("@"+D),heading:_("Tweets mentioning @%{user}",H)},favorites:{title:_("Your Favorites"),heading:_("Your Favorites")},inbox:{title:_("Direct Messages"),heading:_("Direct messages sent only to you")},direct_messages:{title:_("Direct Messages"),heading:_("Direct messages sent only to you")},sent:{title:_("Sent Direct Messages"),heading:_("Direct messages you've sent")},retweets_by_others:{title:_("Retweets",H),heading:"&nbsp;"},profile_favorites:{title:_("%{user}'s Favorites",H),heading:_("%{user}'s Favorites",H)},profile:{title:_("%{name} (%{user}) on Twitter",H),heading:null}}}var E;if(C=="search"){E={title:_("Search - %{query}",{query:page.query})};var B=$("#side #saved_searches ul.sidebar-menu li.active");var J;if(B.length){var F=B.attr("id").replace("ss_","");J='<a href="/saved_searches/destroy/'+F+'" title="'+A+'" class="delete-search-link">'+_("Remove this saved search")+"</a></label>"}else{J='<a href="/saved_searches/create" class="save-search-link" title="'+A+'">'+_("Save this search")}J="<label>"+J+"</a></label>";if(page.searchResults){E.heading=J+_("Real-time results for <b>%{query}</b>",{query:A})}else{E.heading=J+_("No results for <b>%{query}</b>",{query:A})}}else{E=twttr.titles_and_headings[C]}if(E){var G=(C=="profile")?"":"Twitter / ";setDocumentTitle(G+E.title);I.remove();if(E.heading){K.html(E.heading);K.parent("div").show()}else{K.parent("div").hide()}if(C=="search"){K.find(".save-search-link").isSaveSearchLink().end().find(".delete-search-link").isRemoveSearchLink()}}}$.fn.isSaveSearchLink=function(){return this.each(function(){var A=$(this);var B=$("#saved_searches");var C=B.find("ul.sidebar-menu");A.click(function(){if(C.find("li").length>=10){(new InfoNotification()).setMessage(_("You can only save ten searches. To remove a saved search, select the search and click <strong>remove this saved search</strong>.")).show();return false}var E=A.attr("title");var D=$('<li><a href="/search?q='+encodeURIComponent(E)+'" class="search-link" title="'+h(E)+'"><span>'+h(E)+"</span></a></li>");D.find("a").isSearchLink(SEARCH_CALLBACKS.savedSearchLink);D.fadeOut(1,function(){C.append(D);D.fadeIn(100)});if(B.hasClass("collapsed")){B.trigger("expand")}B.fadeIn();$("#side ul.sidebar-menu li").removeClass("active");$("#side #custom_search").removeClass("active");D.addClass("active");$.ajax({type:"POST",dataType:"json",url:"/saved_searches/create",data:{q:E,authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){A.replaceWith('<span class="loading">'+_("Save this search")+"</span>")},success:function(F){D.attr("id","ss_"+F.id);setTitleAndHeading("search")},error:function(F){(new InfoNotification()).setMessage(F.responseText).show();D.remove()}});return false})})};$.fn.isRemoveSearchLink=function(){return this.each(function(){var A=$(this);var C=A.attr("title");var B=A.attr("href");A.click(function(){var D=$("#side #saved_searches li a[title='"+C+"']").parent("li");D.fadeOut(100,function(){D.remove();var E=$("#saved_searches ul.sidebar-menu a");if(E.length==0){$("#saved_searches").hide()}setTitleAndHeading("search");$("#side #custom_search").addClass("active")});$.ajax({type:"POST",url:B,data:{authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){A.replaceWith('<span class="loading">'+_("Remove this saved search")+"</span>")},error:function(){(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please refresh the page and try again!")).show()}});return false})})};function initializePage(A){if(("home,search".indexOf(A)==-1)&&($("body#list_show").length==0)){twttr.updateLocation(A)}initializeSidebar();$("#side form#sidebar_search").isSearchForm();$("#side .collapsible").isCollapsibleMenu();onPageChange(true);timelineRefresh(A);$(".saved-search-links li a").isSearchLink(SEARCH_CALLBACKS.savedSearchLink);$(".trends-links li a").isSearchLink(SEARCH_CALLBACKS.trendLink);$("#dm_tabs a, #retweet_tabs a").isTimelineTabLink();$("div.bulletin").isBulletin();$("ul.sidebar-menu a").isSidebarTab()}function initializeSidebar(){if($("#side ul.sidebar-menu li.active").length==0){var B=$("body").attr("id");var A=null;if(B=="search"){B=page.query;if(B){var C=$.grep($("#side ul.sidebar-menu li a"),function(D){return $(D).attr("title")==page.query})[0];if(C){A=$(C).parent("li")}else{$("#side #custom_search").addClass("active")}}}else{if(B){if(B=="sent"||B=="inbox"){B="direct_messages"}A=$("#side ul.sidebar-menu li#"+B+"_tab")}}if(A&&A.length){$(A.get(0)).addClass("active")}}}$.fn.isCollapsibleMenu=function(){function A(){var B=[];$("#side .collapsible").each(function(){var C=$(this);var E=C.find("h2.sidebar-title").attr("id");if(E){E=E.replace("_menu","")}else{return true}var D=C.hasClass("collapsed")?"C":"O";B.push(E+D)});$.cookie("menus",B.join("_"))}return this.each(function(){var D=$(this);var B=D.find("h2.sidebar-title");function F(G){$.ajax({type:"GET",url:G,dataType:"html",beforeSend:function(){D.addClass("loading")},success:function(H){D.find(".sidebar-menu").remove();B.after(H);C()},complete:function(){D.removeClass("loading")}})}function C(){var G=D.find(".sidebar-menu");D.find("#friends_view_all").fadeIn();G.slideDown(100,function(){D.removeClass("collapsed");A()})}function E(){var G=D.find(".sidebar-menu");D.find("a.xref").fadeOut(100);D.find("div#friends_view_all").fadeOut(100);G.slideUp(100,function(){D.addClass("collapsed");A()})}D.bind("expand",function(){C()});D.bind("collapse",function(){E()});B.click(function(H){if(H.target.nodeName.toLowerCase()=="a"){return true}var G=D.find("a.fetch-contents");if(D.hasClass("collapsed")){D.find("a.xref").fadeIn(100);if(G.length){F(G.attr("href"));G.remove()}else{C()}}else{E()}})})};$.fn.isSidebarTab=function(){return this.each(function(){var A=$(this);A.bind("click",function(){A.trigger("active")}).bind("active",null,function(B){if(A.parents("#side").length>0){$(window).scrollTop(0);$("#side ul.sidebar-menu li, #trends_list li").removeClass("active");$("#side #custom_search").removeClass("active");A.parent("li").addClass("active")}}).bind("loading",null,function(B){A.parent("li").addClass("loading")}).bind("loaded",null,function(B){A.parent("li").removeClass("loading")}).bind("aborted",null,function(B){A.parent("li").removeClass("loading")})})};$.fn.isInPageLink=function(A){return this.each(function(){var B=$(this);var C=B.meta();var D=C.dispatch_action;B.click(function(G){var E=G.srcElement||G.originalTarget||G.target;if(E.tagName.toLowerCase()=="em"){G.stopImmediatePropagation();return true}if($.browser.msie){this.hideFocus=true}var F=B.attr("href");page.query="";if(page.isTimelineChange){page.currentTimelineChange.abort();page.$oldTimelineLink.trigger("aborted")}page.currentTimelineChange=$.ajax({type:"GET",url:F,dataType:"json",beforeSend:function(){page.isTimelineChange=true;B.trigger("loading");page.$oldTimelineLink=B},success:function(H){if(twttr.is.def(H.users)){twttr.Tweeter.merge(H.users)}twttr.processJson(H);twttr.updateLocation(D=="list"?"/list"+F:F);if(D){page.action_name=D;$("body").attr("id",D);if(D=="direct_messages"||D=="inbox"||D=="sent"){$("#direct_message_form").trigger("loadrecipients")}}if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null}addCountToDocumentTitle();timelineRefresh(D,F);$.Timeline.triggerPageHeightChangedEvent()},complete:function(H){$("#sidebar_search_q").val("").blur();onPageChange();$("body").addClass("replyable");B.trigger("loaded");page.isTimelineChange=false;if(A){A(B)}}});return false})})};function reloadTimeline(B){var A=(window.location.hash||B).toString().replace(/^#?([^\/])/,"/$1").replace(/^\/?list/,"");page.currentTimelineChange=$.ajax({type:"GET",url:A,dataType:"json",beforeSend:function(){page.isTimelineChange=true},success:function(C){if(twttr.is.def(C.users)){twttr.Tweeter.merge(C.users)}twttr.processJson(C);if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null}addCountToDocumentTitle();timelineRefresh(B,A)},error:function(){(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please refresh the page and try again!")).show()},complete:function(){$("#sidebar_search_q").val("").blur();onPageChange();$("body").addClass("replyable");initializeTimeline();$("#timeline").removeClass("loading");page.isTimelineChange=false;if(B.match(/\/?list\//)){var C=$(".lists-links a[href="+h(A)+"]");$("#side ul.sidebar-menu li, #trends_list li").removeClass("active");$("#side #custom_search").removeClass("active");if(C.length){C.parent("li").addClass("active");setTimelineForListInPageLink(C)}}}})}$.fn.isBulletin=function(){return this.each(function(){var A=$(this);var B=A.find("a.close, a.hide");B.click(function(){A.fadeOut();return false})})};$.fn.isBrowserUpgradeBulletin=function(A){return this.each(function(){var B=$(this);B.find("a.close, a.hide").click(function(){$.cookie(A+"_upgrade","y")})})};$.fn.isDeviceFailBulletin=function(){return this.each(function(){var A=$(this);var B=A.find("a.hide-fail-notice, a.close, a.hide");var C=B.attr("id").replace("hide_device_","");B.click(function(){$.ajax({type:"POST",dataType:"text",url:"/devices/update/"+C,data:{authenticity_token:twttr.form_authenticity_token,"device[fail_alert]":"0",twttr:true},success:function(D){if(D.match(/success/)){A.fadeOut(200)}else{twttr.error()}},beforeSend:null,complete:null});return false})})};$.fn.isBouncingEmailBulletin=function(){return this.each(function(){var A=$(this);A.find("a.close, a.hide").click(function(){$.ajax({type:"POST",dataType:"text",url:"/bouncers/reset",data:{authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:null,complete:function(){(new InfoNotification()).setMessage(_("Your email notifications should resume shortly.")).show()}});return false})})};$.fn.isNotificationSetting=function(){return this.each(function(){var B=$(this);var A=B.attr("id").replace("notify_on_","").replace("notify_off_","");B.click(function(){var C=B.attr("value");$.ajax({type:"POST",dataType:"text",url:"/friendships/device_"+C+"/"+A,data:{authenticity_token:twttr.form_authenticity_token,twttr:true},success:function(D){if(D.match(/success/)){$(".follow-control").trigger("refresh",["notify_"+(C=="follow"?"on":"off")])}else{twttr.error()}}})})})};$.fn.isNudgable=function(){return this.each(function(){var A=$(this);A.click(function(){var B=A.parents("form");B.find("input[name=authenticity_token]").val(twttr.form_authenticity_token);B.submit();return false})})};$.fn.isSlugField=function(B,A){return this.bind("keyup",function(){var C=slug($(this).val());if(B){B.val(C)}if(A){A.text(C)}})};var slug=function(A){return A.toLowerCase().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^[_-]+|[_-]+$/g,"")};$.fn.isDeleteButton=function(A){if(!confirm(A)){return false}};$.fn.disable=function(){$(this).attr("disabled","disabled").addClass("disabled")};$.fn.enable=function(){$(this).removeAttr("disabled").removeClass("disabled")};$.fn.textAreaSizeLimiter=function(C){var D=$(this);var A=C.maxLength;var B=C.infoMessageSelector;var E=D.parents("form").find("input[type=submit]");D.keyup(function(){var F=D.val().length;if(F>A){E.attr("disabled","DISABLED").removeClass("btn").addClass("dbtn");$(B).show()}else{E.removeAttr("disabled").removeClass("dbtn").addClass("btn");$(B).hide()}})};$.fn.isPasswordStrengthField=function(A,B){return this.each(function(){if(!A){return }if(!B){B={}}var H=$(this);var J=$(A);J.append('<span class="pstrength-text"></span>');var F=J.find(".pstrength-text");function E(K){J.children().each(function(){var L=$(this);if(L.hasClass("pstrength-text")){if(K){L.show()}else{L.hide()}}else{if(K){L.hide()}else{L.show()}}})}function I(K){var M=0;var L=B.minlength?B.minlength:6;if(K.length<L){return{score:K.length,message:_("Too short"),className:"password-invalid"}}if(B.username){var N=(typeof (B.username)=="function")?B.username():B.username;if(N&&(K.toLowerCase()==N.toLowerCase())){return{score:0,message:_("Too obvious"),className:"password-invalid"}}}if($.inArray(K.toLowerCase(),twttr.BANNED_PASSWORDS)!=-1){return{score:0,message:_("Too obvious"),className:"password-invalid"}}M+=K.length*4;M+=(D(1,K).length-K.length)*1;M+=(D(2,K).length-K.length)*1;M+=(D(3,K).length-K.length)*1;M+=(D(4,K).length-K.length)*1;if(K.match(/(.*[0-9].*[0-9].*[0-9])/)){M+=5}if(K.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)){M+=5}if(K.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){M+=10}if(K.match(/([a-zA-Z])/)&&K.match(/([0-9])/)){M+=15}if(K.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&K.match(/([0-9])/)){M+=15}if(K.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&K.match(/([a-zA-Z])/)){M+=15}if(K.match(/^\w+$/)||K.match(/^\d+$/)){M-=10}if(M<0){M=0}if(M>100){M=100}if(M<34){return{score:M,message:_("Weak"),className:"password-weak"}}if(M<50){return{score:M,message:_("Good"),className:"password-good"}}if(M<75){return{score:M,message:_("Strong"),className:"password-strong"}}return{score:M,message:_("Very Strong"),className:"password-verystrong"}}function D(L,O){var K="";for(var N=0;N<O.length;N++){var P=true;for(var M=0;M<L&&(M+N+L)<O.length;M++){P=P&&(O.charAt(M+N)==O.charAt(M+N+L))}if(M<L){P=false}if(P){N+=L-1;P=false}else{K+=O.charAt(N)}}return K}function C(K){if(K&&J.hasClass(K)){return false}J.removeClass("password-weak").removeClass("password-good").removeClass("password-strong").removeClass("password-verystrong").removeClass("password-invalid");return true}function G(){var L=H.val();if(L.length==0){C();E(false)}else{if(L.length){E(true)}}if(L.length>0){var K=I(L);F.html(K.message);if(C(K.className)){J.addClass(K.className)}}}H.bind("show-password-meter",function(){J.show()});H.bind("hide-password-meter",function(){J.hide()});H.keyup(function(){G()});H.blur(function(){if(this.value.length==0){C();H.trigger("hide-password-meter")}});if(H.val()){G();J.show()}})};$.fn.isOAuthApplication=function(){return this.each(function(){var C=$(this);var B=C.attr("id").replace("oauth_application_","");var A=C.find(".revoke-access");A.click(function(){$.ajax({type:"POST",dataType:"json",url:"/oauth/revoke",data:{authenticity_token:twttr.form_authenticity_token,token:B,twttr:true},success:function(D){if(D.revoked){C.addClass("revoked")}else{C.removeClass("revoked")}A.text(D.label)}});return false})})};$.fn.screenName=function(){return $(this).find(".screen-name").text()||page.sessionUserScreenName};$.fn.userId=function(){var A;if(A=$(this).attr("id")){return A.replace("user_","")}else{return page.sessionUserId}};twttr.klass("twttr.MinimumDelayCallback",function(A){this.waitUntil=twttr.getTimeMillis()+A}).method("delay",function(C){var A=twttr.getTimeMillis();var B=this.waitUntil-A;if(B>0){setTimeout(function(){this.delay(C)}.pBind(this),B)}else{C.apply()}});twttr.augmentObject(twttr,{getTimeMillis:function(){return new Date().getTime()}});jQuery.fn.pulsate=function(F,C){var D=$(this);var E=1;var A=function(){E=E+0.5;var G=E>F?function(){}:B;D.fadeIn(C,G)};var B=function(){E=E+0.5;D.fadeOut(C,A)};B()};$("html").keypress(function(C){var B=C.charCode?C.charCode:C.keyCode?C.keyCode:0;var A=$(C.target);if(A&&A.hasClass("a-btn")&&B==32){A.click();C.preventDefault()}});$("#status_update_form").isUpdateForm();twttr.ajaxSetup=function(){$.ajaxSetup({data:{twttr:true,authenticity_token:twttr.form_authenticity_token}})};var searchSummize=function(E,B,F,A){page.query=E;var D=$("body#search #timeline li.search_result").attr("id");if(D&&page.retainTimeline){page.maxId=D.substring(7)}else{page.maxId=null}var C={q:page.query,rpp:20,maxId:page.maxId,callback:F||window.SEARCH_CALLBACKS.summize,layout:"none"};if(A){C.page=A}$("#side #q").val(E);B.trigger("loading");return $.ajax({url:page.summizeSearchUrl,data:C,dataType:"script",cache:false,complete:function(){$("#side #primary_nav li").removeClass("active");$("body").attr("id","search");var H="";if($("body.front").length){H=$("#trends_list li.active").length?"front/trends":"front/custom_search"}else{var G=$("#side li.active a.search-link").parents("div#trends, div#saved_searches");H=G.length==0?$("#side div#custom_search.active").attr("id"):G.attr("id")}twttr.trackPageView($("body").attr("id"),(page.query&&page.query.length>0?page.query:null),"/"+H+(!page.retainTimeline?"/ajax":"/ajax/more"));B.trigger("loaded");page.retainTimeline=null;page.isTimelineChange=false}})};var sponsoredSearch=function(A){if(page.showSS){$.ajax({url:"/timeline/garuda_search",data:{query:page.query,authenticity_token:twttr.form_authenticity_token},type:"post",dataType:"html",success:function(B){clearTimelineIfNewSearch();$("#timeline").prepend(B);processSummizeInternal(A)},error:function(){clearTimelineIfNewSearch();processSummizeInternal(A)}})}else{clearTimelineIfNewSearch();processSummizeInternal(A)}};var processSummize=function(A){var B=getPageNumAndUrl(A)[0];if(B==2){sponsoredSearch(A)}else{clearTimelineIfNewSearch();processSummizeInternal(A)}};var clearTimelineIfNewSearch=function(){var A=(page.query!="");if(A){if(!page.retainTimeline){$("#timeline").empty();$("#pagination").empty();$("#content .no-results").remove();$("#results_update").hide()}}};var getPageNumAndUrl=function(A){var E=$(A);var B=1;var D;var C=E.find(".paginator a.next");if(C.length){D=C.attr("href");D.match(/\?.*page=([0-9]+)/gi);B=RegExp.$1;B=B?parseInt(B):1}return[B,D]};var processSummizeInternal=function(B){var J=page.trendDescriptions[page.query];if(J){$("#trend_info").hide();$("#trend_description span").text(_("%{trend} is a popular topic on Twitter right now.",{trend:J[0]}));$("#trend_description p").html(J[1]);$("#trend_description").show()}else{$("#trend_description").hide();$("#trend_info").show()}var H=$(B);var M=$(".homepage #timeline").length;var C=M&&!$(".homepage #timeline li").length;var F=$("#timeline");var L=(page.query!="");$("body").attr("id","search");var E=getPageNumAndUrl(B)[1];var D=[];if(L){D=renderResultsFromSummize(H,F,M)}$("#container, #side_base").show();F.find(".msgtxt a").each(twttr.appendClassesToSearchResults);F.find(".msgtxt").prev().addClass("tweet-url screen-name");F.find("span.vcard a").addClass("tweet-url profile-pic");F.find(".search_result").find(".status-body a,.vcard a").each(function(){var P=$(this);var N=P.attr("href");if(N.match(/^\/search\?q=([^&]+)/)){P.removeAttr("target");var O=decodeURIComponent(RegExp.$1);P.attr("title",O);P.isSearchLink(O.match(/^#/)?SEARCH_CALLBACKS.hashtagLink:SEARCH_CALLBACKS.inResultsLink)}else{if(N.match(/^https?:\/\/twitter\.com/)){P.removeAttr("target")}}});if(page.searchResults=(D.length>0&&L)){if(!M){enfavoriteSummize(D)}page.maxId=D[0];if(E){$("#pagination").empty().html('<a id="search_more" class="round more" rel="next" href="'+E+'">'+_("more")+"</a>").find("a").isSearchMoreButton(M)}else{$("#pagination").empty().html('<p class="no-more-tweets">'+_("Older tweets are temporarily unavailable.")+"</p>")}}else{var I=[_("Try a more general search."),_("Try using different words.")];var K='<div class="no-results">'+_("Suggestions:")+"<ol>";for(var G=0;G<I.length;G++){K+="<li>"+_(I[G])+"</li>"}K+="</ol></div>";setTimeout(function(){$("#timeline_heading").after(K)},1)}twttr.updateLocation("search?q="+encodeURIComponent(page.query));initializeSidebar();var A=$("#sidebar_search_q, #home_search_q");if(A.val()!=page.query){A.val(page.query);A.css("color","#000")}onPageChange(C);$("#side #rssfeed a.search-rss").attr("href","http://search.twitter.com/search.atom?q="+h(encodeURIComponent(page.query)));summizeRefresh()};if(!window.SEARCH_CALLBACKS){window.SEARCH_CALLBACKS={summize:"processSummize",load:"pageLoadSearch",searchLink:"processSearchLink",trendLink:"processTrendLink",savedSearchLink:"processSavedSearchLink",searchForm:"processSearchForm",hashtagLink:"processHashtagLink",inResultsLink:"processInResultsLink",more:"processSearchMore",refresh:"processSearchRefresh"};$.each(window.SEARCH_CALLBACKS,function(){window[this]=window.processSummize})}function renderResultsFromSummize(C,B,A){var D=[];C.find(".result").each(function(){var J=$(this);J.find(".location,.thread,.to_av,p.clearleft,.expand,#share").remove();var F=$(J.find(".avatar").get(0));F.replaceWith('<span class="thumb vcard author">'+F.html()+"</span>");var L=$(J.find(".info").get(0));var M,G,E;L.find("a.lit").each(function(){E=$(this).attr("href");var P=E.match(/\/(\w+)\/statuses\/(\d+)/);M=P[2];D.push(M);G=P[1]});var H=L.find(".source").remove();L.find("a").remove();L.html('<a href="'+E+'">'+L.html()+"</a>");L.append(H);var O='<span class="meta entry-meta">'+L.html().replace(/\u00B7/g,"")+"</span>";L.remove();var N=$(J.find(".msg").get(0));N.replaceWith(($.browser.msie6?'<img src="http://s.twimg.com/a/1267135446/images/white.png" width="1" height="50" align="left">':"")+N.html().replace(/a>\s*:\s*<span/,"a> <span")+O);var K=J.html();if(!A){K='<span class="actions"><div><a href="#" class="fav-action non-fav" id="status_star_'+M+'"> &nbsp; </a></div></span>'+K;K+='<ul class="actions-hover"><li><span class="reply"><span class="reply-icon icon"></span><a href="/home?status=@'+G+"%20&in_reply_to_status_id="+M+"&in_reply_to="+G+'">Reply</a></span></li><li><span class="retweet-link"><span class="retweet-icon icon"></span><a href="#" title="Retweet">Retweet</a></span></li></ul>'}var I=$('<li class="hentry status search_result u-'+G+'" id="status_'+M+'"><span class="status-body">'+K+"</span></li>");B.append(I)});return D}function enfavoriteSummize(A){if(page.loggedIn&&A.length>0){$timeline=$("#timeline");$.ajax({type:"POST",dataType:"json",url:"/favourings/intersect_for_search",data:{authenticity_token:twttr.form_authenticity_token,"status_id[]":A,twttr:true},beforeSend:null,success:function(B){$.map(B,function(C){$timeline.find("#status_"+C+" .non-fav").addClass("fav").removeClass("non-fav")})},complete:null})}}function summizeRefresh(){if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null;addCountToDocumentTitle()}var B=$("#results_update");B.data("count",0);var A=$("#new_results_notification").meta().search;if(page.summizeRefresher||$("#results_update").length==0){return }page.newResults=null;page.summizeRefresher=new Occasionally(A.delay*1000,A.max_delay*1000,function(){var C=false;$.ajax({dataType:"script",url:page.summizeSearchUrl,data:{q:page.query,since_id:page.maxId,refresh:true,callback:"processSummizeRefresh"},cache:false,callback:null})},function(){return page.newResults},A.decay);page.summizeRefresher.start()}function processSummizeRefresh(B){if(decodeURIComponent(B.query).replace(/\+/g," ")==page.query&&B.total){page.maxId=B.max_id;var C=page.summizeRefreshResults=(page.summizeRefreshResults||0)+B.total;var A=$("#results_update").is(":visible")?"":' style="display:none;"';var D='<a id="results_update" class="minor-notification"'+A+">";D+=(C==1)?_("1 more tweet since you started searching."):_("%{results_count} more tweets since you started searching.",{results_count:numberWithDelimiter(C)});D+="</a>";$("#results_update").replaceWith(D);$("#results_update:hidden").slideDown();$("#results_update").attr("title",page.query).attr("href","/search?q="+encodeURIComponent(h(page.query))).isSearchLink(SEARCH_CALLBACKS.refresh).click(function(){addCountToDocumentTitle();return false});if(C){addCountToDocumentTitle(C)}page.newResults=true}else{page.newResults=false}}$.fn.isSearchMoreButton=function(A){return this.each(function(){var B=$(this);B.click(function(){B.blur();var D=B.attr("href");D.match(/\?.*page=([0-9]+)/gi);var C=RegExp.$1;page.retainTimeline=true;$("#timeline li:last-child").addClass("last-on-page");searchSummize(page.query,B,SEARCH_CALLBACKS.more,C);B.addClass("loading").html("");return false})})};function onPageChange(A){var C=$("body").attr("id");setTitleAndHeading(C);if(!A){if(page.summizeRefresher){page.summizeRefresher.stop();page.summizeRefresher=null;page.summizeRefreshResults=null}if(!page.retainTimeline){$("#results_update").hide()}$(".no-results").remove();$("#new_results_count").html("0")}$(".in-page-link").isInPageLink();$(".in-page-list-link").isListInPageLink();try{$(".in-page-list-label").isListInPageLabel();$(".in-page-label").isInPageLabel()}catch(B){}if(C=="list"||C=="list_show"){C=(window.location.hash||window.location.pathname).replace(/^#/,"").replace(/^([^\/])/,"/$1");if(C.indexOf("/list")!=0){C="/list"+C}}twttr.trackPageView(C,(page.query&&page.query.length>0?page.query:null),A?null:"/ajax")}$.fn.isSearchLink=function(A){return this.each(function(){var B=$(this);B.click(function(C){C.preventDefault();if($.browser.msie){this.hideFocus=true}if(page.isTimelineChange&&page.currentTimelineChange){page.currentTimelineChange.abort();page.$oldTimelineLink.trigger("aborted");page.isTimelineChange=false}page.isTimelineChange=true;page.currentTimelineChange=searchSummize(B.attr("name")?B.attr("name"):B.attr("title"),B,A);if(B.parents("#side").length>0){$("#side ul.sidebar-menu li").removeClass("active");B.parent("li").addClass("active")}$("#trends_list li.active a").removeClass("active")})})};$.fn.isSearchForm=function(){return this.each(function(){var B=$(this);var A=$(B.find('input[type="text"]')[0]);var C=B.find("#sidebar_search_submit");A.Watermark(_("Search")).focus(function(){A.select();return true});C.click(function(){B.submit()});B.submit(function(){var D=A.val();if(D!=""){C.addClass("loading");searchSummize(D,B,SEARCH_CALLBACKS.searchForm)}$("#side ul.sidebar-menu li").removeClass("active");$("#side #custom_search").addClass("active");return false});B.bind("loaded",null,function(D){C.removeClass("loading")})})};function loadTrendDescriptions(){$("#trends a").each(function(){var A=$(this);var C=A.parent().find("em");if(C.length){var B=A.text();var D=C.text().replace(new RegExp(B.replace(/([^\w])/gi,"\\$1"),"gi"),"<strong>"+B+"</strong>");page.trendDescriptions[A.attr("title")]=[B,D]}})}$(document).ready(function(){$("#tweet_search_submit").click(function(){$("#tweet_search").submit()});$("#content #trend_description img").tipsy({gravity:"s"});page.trendDescriptions={};loadTrendDescriptions();if($("body").attr("id")=="search"){onCondition(function(){return page.summizeResults},function(){window[SEARCH_CALLBACKS.summize](page.summizeResults)})}});twttr.appendClassesToSearchResults=function(){var A=$(this);A.addClass("tweet-url");if(A.text().match(/^@/)){A.addClass("username")}else{if(A.text().match(/^#/)){A.addClass("hashtag")}else{A.addClass("web")}}};var LIST_PUBLIC_MODE="public";var LIST_PRIVATE_MODE="private";var LIST_MAX_NAME_LENGTH=25;var LIST_MAX_DESCRIPTION_LENGTH=100;var numeric_mode=function(A){switch(A){case"public":return 0;case"private":return 1;default:return 0}};var updateListFollowersCount=function(A){return updateCount("#subscribers_tab .stat-count",A)};var updateListFollowingCount=function(A){return updateCount("#members_tab .stat-count",A)};var fadeUserOnListUnfollow=function(A){A.fadeOut("medium",function(){A.remove()})};var onListMembersPage=function(A){return $("body").hasClass("lists_members")&&$('.list-header h2 a[href="'+A.uri+'"]').length==1};var linkToList=function(A,B){A.dispatch_action="list";return'<li><a class="list_'+A.id+'" href="'+A.uri+'" data="'+h(JSON.stringify(A))+'">'+(B?"<em />":"")+"<span>"+listDisplayName(A)+"</span></a></li>"};var listDisplayName=function(A){return(page.sessionUserScreenName&&page.sessionUserScreenName==A.user?h(A.slug):"<b>@</b>"+h(A.user)+"/<wbr/>"+h(A.slug))+lockIconForList(A)};var lockIconForList=function(A){return(A.mode==LIST_PRIVATE_MODE)?'<span class="lock-icon" title="Private List"></span>':""};var findListIndexBySlug=function(A,B){return jQuery.map(A,function(D,C){if(D.slug==B){return C}else{return null}})};$.fn.isUserListMenu=function(){var A=$("#list_menu");return this.one("click",function(){var D=$(this);var E=D.parents(".user");var C={};$.map(E.meta().lists,function(F){C[F.slug]=true});$("body").click();D.addClass("clicked").after(A.html());var B=D.siblings("ul");if(B.find("li:not(.new-list)").size()>=twttr.ListPerUserLimit){B.find(".new-list").remove()}B.find("li").each(function(){var F=$(this);if(F.hasClass("new-list")){F.isNewListLink()}else{F.isUserListItem(C[F.find('input[type="checkbox"]').meta().slug])}});$("html").one("click",function(){D.removeClass("clicked").blur().siblings("ul").remove().end().isUserListMenu();return false});return false})};$.fn.isUserListItem=function(D){var A=function(I,H,F,G){I.show();H.hide();var E=(G=="POST");H.attr("checked",E);F.unbind("click.checkbox");F.bind("click.while-processing",function(){return false})};var C=function(H,G,F,E){H.hide();G.show();F.unbind("click.while-processing");F.bind("click.checkbox",function(I){B.call(this,F,G,H,E);return false})};var B=function(M,F,I,L){var H=L?"DELETE":"POST";var G=M.parents(".user");var K=G.attr("id").replace("user_","");var J={authenticity_token:twttr.form_authenticity_token,twttr:true};var E=M.find('input[type="checkbox"]').meta().uri+"/members";if(H=="POST"){J["member[id]"]=K}else{E+="/"+K}$.ajax({type:H,dataType:"json",url:E,data:J,beforeSend:function(){A(I,F,M,H)},complete:function(){C(I,F,M,L)},success:function(N){L=(H=="POST");F.attr("checked",L);if(H=="POST"){addListToUser(G,N);if(onListMembersPage(N)){updateListFollowingCount(1)}}else{removeListFromUser(G,N);if(onListMembersPage(N)){fadeUserOnListUnfollow(G);updateListFollowingCount(-1)}}},error:function(){F.attr("checked",L)}})};return this.each(function(){var E=$(this);var F=E.find('input[type="checkbox"]');var H=E.find(".loading-spinner");var G=false;if(D){G=F.attr("checked",true)}E.bind("click.checkbox",function(I){B.call(this,E,F,H,G);return false})})};$.fn.isNewListLink=function(){return this.click(function(){var A=$(this).parents(".user");if(A.length==0){A=null}$(this).parent(".ul").remove();openListDialog(true,{userObject:A});return false})};$.fn.isEditListLink=function(){return this.click(function(){openListDialog(false,$(this).meta());return false})};var openListDialog=function(D,F){if(!F){F={}}var G=$("#list_dialog");var B=$(G.html());var A=new twttr.dialog(false,{closeButton:true,content:B,heading:$($("#list_dialog_header").html()),modal:true,width:"405px"});A.bind("close",function(){A.$root.remove()});var E="";A.$root.addClass("list-dialog");if(D){A.$root.addClass("create-list-dialog")}else{E=F.description;A.$root.addClass("update-list-dialog").find('input[type="submit"]').val(_("Update list")).end().find(".list-name").val(F.name).end().find(".list-slug-title-and-slug").show().end().find(".list-description").val(E).end().find(".list-link span").text(F.slug).end().find('input[name="list[mode]"][value="'+numeric_mode(F.mode)+'"]').attr("checked",true);var C=A.find(".private-warning");A.find('input[name="list[mode]"]').change(function(){if(this.value==numeric_mode(LIST_PRIVATE_MODE)&&this.checked){C.show()}else{C.hide()}})}$(".list-description",A.$root).maxLength(LIST_MAX_DESCRIPTION_LENGTH-2);A.find(".list-name").focus();A.$root.isListDialog(D,F,A);A.open()};$.fn.isListDialog=function(C,A,B){return this.each(function(){var G=$(this);var F=A.userObject;var D=G.find("form");D.find(".list-name").one("keyup",function(){console.log("keyup");$(this).siblings(".list-slug-title-and-slug").show()}).isSlugField(D.find(".list-slug-field"),D.find(".list-link span"));if(F){D.find(".list-member-id").val(F.userId())}var E=$(this).find('input[type="submit"]');D.submit(function(I){var H=D.serialize();if(!C){H+="&"+$('<input type="hidden" name="_method" value="PUT" />').serialize()}$.ajax({type:"POST",dataType:"json",url:C?D.attr("action"):A.uri,data:H,beforeSend:function(){E.attr("disabled","disabled")},success:function(J){B.close();B.$root.remove();if(C){addListToMenu(J);if(F){addListToUser(F,J)}addListToLists(J);(new ShortNotification()).setMessage(_("Yay! Your list was created.")).show()}else{window.location=J.uri}},error:function(J){(new InfoNotification()).setMessage(J.responseText).show()},complete:function(){E.removeAttr("disabled","disabled")}});I.preventDefault()})})};$.fn.isDestroyListLink=function(){return this.click(function(D){var C=$(this);var A=C.next("form");var B=A.attr("action");if(confirm(_("Are sure you want to delete this list? There is NO undo!"))){$.ajax({url:B,type:"POST",dataType:"json",data:{_method:"delete",authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){C.disable()},success:function(){document.location="/"},error:function(){C.enable()}})}return false})};$.fn.isSubscribeListLink=function(){return this.click(function(B){var A=$(this);$.ajax({url:A.attr("href"),type:"POST",dataType:"json",data:{authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){A.disable()},complete:function(){A.enable()},success:function(){A.parents(".list").addClass("subscriber");updateListFollowersCount(1)},error:function(){A.parents(".list").removeClass("subscriber")}});return false})};$.fn.isUnsubscribeListLink=function(){return this.click(function(B){var A=$(this);$.ajax({url:A.attr("href"),type:"POST",dataType:"json",data:{_method:"delete",authenticity_token:twttr.form_authenticity_token,twttr:true},success:function(){A.parents(".list").removeClass("subscriber");var C=$("#lists_subscribers #follow_grid #user_"+page.sessionUserId);fadeUserOnListUnfollow(C);updateListFollowersCount(-1)},error:function(){A.parents(".list").addClass("subscriber")}});B.preventDefault()})};$.fn.isListInPageLink=function(){return this.each(function(){var A=$(this);A.isInPageLink(setTimelineForListInPageLink)})};var setTimelineForListInPageLink=function(A){$("#timeline_heading").show();var E=$("#timeline_heading h1");var D=$("#timeline_heading h2");var C=A.meta();var B=h(C.uri);var F=listDisplayName(C);D.remove();E.html(F);E.after('<h2 class="list-subheading"><p class="list-numbers"><a href="'+B+'/members">'+_("Following:")+" <span>"+h(C.member_count)+"</span></a>"+(C.mode==LIST_PRIVATE_MODE?"":'<a href="'+B+'/subscribers">'+_("Followers:")+" <span>"+h(C.subscriber_count)+"</span></a>")+'</p><p class="list-link"><a href="'+B+'">'+_("View list page")+"<span> âº</span></a></p></h2>");if(C.member_count==0){$("#timeline_heading h2").append($(C.user==page.sessionUserScreenName?"#list_no_members_owner":"#list_no_members").html())}setDocumentTitle("Twitter / "+C.full_name)};var addListToUser=function(B,A){return B.each(function(){if(findListIndexBySlug(B.meta().lists,A.slug).length==0){B.meta().lists.push(A);if(B.find(".list-tags").length>0){B.find(".list-tags-outer:hidden").show();B.find(".list-tags").append(linkToList(A))}}})};var removeListFromUser=function(B,A){$.each(findListIndexBySlug(B.meta().lists,A.slug),function(){Array.remove(B.meta().lists,this);B.find(".list-tags .list_"+A.id).each(function(){$(this).parent("li").remove()});if(B.meta().lists.length==0){B.find(".list-tags-outer:visible").hide()}})};var addListToMenu=function(B){var A=$("#list_menu");A.find(".new-list").before('<li><img class="loading-spinner" src="http://s.twimg.com/a/1267135446/images/spinner.gif" style="display: none;" alt="waiting" title="waiting" height="14" width="14"/><input type="checkbox" id="list_'+B.id+'" data="'+h(JSON.stringify(B))+'" /> <label for="list_'+B.id+'">'+h(B.name)+lockIconForList(B)+"</label></li>")};var isInPageLists=function(){return $("#side_lists.in-page-lists").length==1};var addListToLists=function(C){var B=isInPageLists();var A=$("ul.lists-links").siblings(".no-lists").remove().end().append(linkToList(C,B)).find(".list_"+C.id);if(B){A.addClass("in-page-list-link").isListInPageLink().isSidebarTab().click()}};var bindAdminListActions=function(){$("#admin_list a.destroy-list").isDestroyListLink();$("#admin_list a.edit-list").isEditListLink()};var isMoreButton=function(){$("#lists_pagination #more").live("click",basicMoreButtonHandler({beforeSend:function(){$("#more").addClass("loading").html("")},success:function(A){$("#lists_table tbody").append($(A["#lists"]));$("#lists_pagination").html(A["#pagination"])},error:function(){$("#more").removeClass("loading").text(_("more"));(new ShortNotification()).setMessage(_("Whoops! Something went wrong. Please try again!")).show()}}))};$.fn.equals=function(A){return this.length==1&&A.length==1&&this.get(0)==A.get(0)};$.fn.hasParent=function(A){return jQuery.inArray(A[0],this.parents())>-1};function InlineForm(A){this.initialize(A)}jQuery.extend(InlineForm.prototype,{defaultOptions:{title:"",submitBtnValue:"",showCancel:true,closeOnOutsideClick:true,formClass:"",timelineChangedEvents:false,pageHeightChangedEvents:false},overrideDefaultOptions:{},initialize:function(A){this.options=jQuery.extend({},this.defaultOptions);jQuery.extend(this.options,this.overrideDefaultOptions);jQuery.extend(this.options,A);this.$form=$('<div class="inline-form '+this.options.formClass+'"></div>');this.$buttonParent=$('<div class="inline-form-buttons"></div>');this.$button=$('<button type="button" class="btn">'+this.options.submitBtnValue+"</button>");if(this.options.showCancel){this.$cancel=$('<span class="cancel">&nbsp;</span>')}this.$form_inner=$('<div class="inline-form-inner"></div>');this.$input=$('<textarea class="inline-form-input"></textarea>');this.$inputsPrompt=$('<div class="inline-inputs-prompt"></div>');this.$title=$('<div class="title">'+this.options.title+"</div>");this.$body=$('<div class="body">'+(this.options.body||"")+"</div>");this.initEvents()},initEvents:function(){this.buttonEvent=this.submitForm.pBind(this);this.closeEvent=this.close.pBind(this);this.outsideClickEvent=this.destroyFromEvent.pBind(this);this.timelineEvent=this.timelineEvent.pBind(this);if(this.options.timelineChangedEvents){$.Timeline.registerTimelineEvent(this.timelineEvent)}if(this.options.pageHeightChangedEvents){this.pageHeightChangedEvent=this.pageHeightChangedEvent.pBind(this);$.Timeline.registerPageHeightChangedEvent(this.pageHeightChangedEvent)}},addEvents:function(){this.$button.click(this.buttonEvent);if(this.options.showCancel){this.$cancel.click(this.closeEvent)}if(this.options.closeOnOutsideClick){$(window).click(this.outsideClickEvent)}},removeEvents:function(){this.$button.unbind("click",this.buttonEvent);if(this.options.showCancel){this.$cancel.unbind("click",this.closeEvent)}if(this.options.closeOnOutsideClick){$(window).unbind("click",this.outsideClickEvent)}if(this.options.timelineChangedEvents){$.Timeline.unregisterTimelineEvent(this.timelineEvent)}$.Timeline.unregisterPageHeightChangedEvent(this.pageHeightChangedEvent)},onSendError:function(A){if(this.sendNotification){this.sendNotification.cancel()}(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please refresh the page and try again!")).show();this.close()},onSendSuccess:function(A){},formAction:function(){},timelineEvent:function(){},pageHeightChangedEvent:function(){this.positionForm()},postData:function(){},beforePost:function(){},onComplete:function(){},submitForm:function(){this.$button.disable();var A={authenticity_token:twttr.form_authenticity_token};jQuery.extend(A,this.postData());if(this.progressNotificationText){this.sendNotification=(new ProgressNotification()).setProgressMessage(this.progressNotificationText).setCompletedMessage(_("Ok, done.")).show()}this.beforePost();$.ajax({type:"POST",dataType:"json",dataFilter:function(B){if(!jQuery.trim(B)){return null}return B},url:this.formAction(),data:A,error:function(B){this.onSendError(B)}.pBind(this),success:function(B){this.onSendSuccess(B);this.close();if(this.sendNotification){this.sendNotification.done()}}.pBind(this),beforeSend:twttr.loading,complete:function(){twttr.loaded();this.onComplete()}.pBind(this)})},arrange:function(){var A=$('<div class="inline-form-inputs"></div>');if(this.options.showCancel){this.$buttonParent.append(this.$cancel)}this.$buttonParent.append(this.$button);this.$form_inner.append(A.append(this.$title).append(this.$body).append(this.$inputsPrompt).append(this.$input)).append(this.$buttonParent);this.$form.append(this.$form_inner);this.$form.hide();this.baseElement().append(this.$form)},baseElement:function(){return this.$parentNode||$(document.body)},show:function(A){this.addEvents();this.$targetNode=A.targetNode;this.$parentNode=A.parentNode;this.positionForm();this.arrange();this.$form.fadeIn(100);this.currentlyShown=true;this.afterShow()},afterShow:function(){},positionForm:function(){if(this.$targetNode&&this.$targetNode.width()>0){var C=this.position();var B=C[0];var A=C[1];this.$form.css("top",B).css("left",A)}else{this.close()}},close:function(){this.removeEvents();this.$form.remove();this.currentlyShown=false;this.afterClose()},afterClose:function(){},destroyFromEvent:function(B){var A=$(B.target);if(A.equals(this.$targetNode)||jQuery.inArray(this.$targetNode.get(0),A.parents())!=-1||A.equals(this.$form)||A.hasParent(this.$form)){return }this.close()},position:function(){var A=this.$targetNode.offset();return[A.top,A.left]}});RetweetInlineForm=function(){var A=_("Yes");var B=_("Retweet to your followers?");this.initialize({title:B,submitBtnValue:A})};RetweetInlineForm.prototype=new InlineForm();jQuery.extend(RetweetInlineForm.prototype,{overrideDefaultOptions:{formClass:"retweet-dlg",pageHeightChangedEvents:true},formAction:function(){var B=getListItemFromChild(this.$targetNode);var A=getStatusIdFromListItem(B);return"/statuses/"+A+"/retweet"},postData:function(){return{controller_name:page.controller_name,action_name:page.action_name}},beforePost:function(){this.close();twttr.setRetweetingStyles(this.$targetNode,_("Updating..."))},onSendSuccess:function(A){twttr.animateStatusReplacement(this.$targetNode,A)},onComplete:function(){twttr.unsetRetweetingStyles(this.$targetNode)},afterShow:function(){getListItemFromChild(this.$targetNode).addClass("perma-hover");this.$targetNode.find("a").blur()},afterClose:function(){getListItemFromChild(this.$targetNode).removeClass("perma-hover")},position:function(){var A=this.$targetNode.offset();return[parseInt(A.top)+20,parseInt(A.left)-220]}});RetweetContextDlgForm=function(){var B=_("Close");var C=_("Wondering who this is?");var A=_('Someone you follow thought this was worth retweeting, which is why you are seeing it in your Home timeline. <a target="_blank" href="http://help.twitter.com/forums/10711/entries/77606">Learn more</a>.');this.initialize({title:C,body:A,submitBtnValue:B})};RetweetContextDlgForm.prototype=new InlineForm();jQuery.extend(RetweetContextDlgForm.prototype,{overrideDefaultOptions:{showCancel:false,closeOnOutsideClick:false,formClass:"retweet-ctx-dlg",timelineChangedEvents:true},formAction:function(){return"/users/"+page.sessionUserId},postData:function(){return{_method:"put","user[has_dismissed_retweet_contextual_dialog]":"1"}},position:function(){return[this.$parentNode.height(),-9]},timelineEvent:function(){if(!this.currentlyShown){this.showIfElementExists()}},afterShow:function(){this.$targetNode.css("z-index","300");var A=parseInt($.cookie("retweet_contextual_count"))||0;if(A<5){$.cookie("retweet_contextual_count",A+1)}else{this.close();this.submitForm();$.cookie("retweet_contextual_count",null)}},afterClose:function(){this.$targetNode.css("z-index",null)},showIfElementExists:function(){var A=$(".rt-dlg");if(A.length){this.show({targetNode:A,parentNode:A})}}});$(document).ready(function(){new RetweetContextDlgForm().showIfElementExists()});$(document).ready(function(){try{var A="share-text-active";$(".status").each(function(){var E=$(this);var C=E.find(".retweet-link");var D=E.find(".share-text");C.hover(function(){D.addClass(A)},function(){D.removeClass(A)})})}catch(B){}});(function(){jQuery.inherits=function(A,C){function B(){}B.prototype=C.prototype;A.prototype=new B();A.prototype.constructor=A}})();(function(){jQuery.fn.equals=function(A){return this.get(0)==A.get(0)}})();(function(){jQuery.fn.hasParent=function(A){var B=false;this.parents().map(function(){if($(this).equals(A)){B=true}});return B}})();function Notification(B){this.$bar=jQuery('<div class="notification-bar"></div>');this.$barContainer=jQuery('<div class="notification-bar-container"></div>');this.$barContents=jQuery('<div class="notification-bar-contents"></div>');this.$barBackground=jQuery('<div class="notification-bar-bkg"></div>');this.$message=jQuery('<div class="message"></div>');this.$bar.hide();this.$barBackground.hide();var A=this;this.$bar.click(function(C){A.removeAfterEvent(C)});this.className=B}Notification.SLIDE_SPEED_IN_MS=300;Notification.prototype.remove=function(){var A=this;this.slideUp(function(){A.$bar.remove();A.$barBackground.remove();window.clearTimeout(A.timeout)})};Notification.prototype.removeAfterEvent=function(B){var A=$(B.target);if(A.get(0).nodeName.toLowerCase()=="a"&&A.hasParent(this.$message)){return }this.remove()};Notification.prototype.setMessage=function(A){this.msg=A;return this};Notification.prototype.show=function(){this.$message.addClass(this.className).html(this.msg);this.$barContainer.append(this.$barBackground).append(this.$bar.append(this.$barContents.append(this.$message)));jQuery("#notifications").append(this.$barContainer);this.$barBackground.height(this.$bar.height());this.showBar();if(this.onShow){this.onShow()}return this};Notification.prototype.removeInMilliseconds=function(){var A=this;this.timeout=window.setTimeout(function(){A.remove()},A.timeoutInMilliseconds)};Notification.prototype.showBar=function(){this.$bar.show();this.$barBackground.show()};Notification.prototype.onShow=function(){this.removeInMilliseconds()};Notification.prototype.slideUp=function(A){this.$bar.slideUp(Notification.SLIDE_SPEED_IN_MS);this.$barBackground.slideUp(Notification.SLIDE_SPEED_IN_MS,A)};function ShortNotification(){Notification.call(this,"message-info");this.timeoutInMilliseconds=3000}jQuery.inherits(ShortNotification,Notification);ShortNotification.prototype.showBar=function(){this.$bar.slideDown(Notification.SLIDE_SPEED_IN_MS);this.$barBackground.slideDown(Notification.SLIDE_SPEED_IN_MS)};function InfoNotification(){Notification.call(this,"message-info");this.timeoutInMilliseconds=6000}jQuery.inherits(InfoNotification,Notification);InfoNotification.prototype.showBar=function(){this.$bar.slideDown(Notification.SLIDE_SPEED_IN_MS);this.$barBackground.slideDown(Notification.SLIDE_SPEED_IN_MS)};function ProgressNotification(){Notification.call(this,"message-progress");this.timeoutInMilliseconds=1000}jQuery.inherits(ProgressNotification,Notification);ProgressNotification.prototype.setProgressMessage=function(A){return this.setMessage(A)};ProgressNotification.prototype.setCompletedMessage=function(A){this.completedMsg=A;return this};ProgressNotification.prototype.onShow=function(){};ProgressNotification.prototype.cancel=function(){this.timeoutInMilliseconds=0;this.removeInMilliseconds()};ProgressNotification.prototype.done=function(){this.$message.addClass("message-progress-done").removeClass(this.className).html(this.completedMsg);this.removeInMilliseconds()};function ErrorNotification(){Notification.call(this,"message-error");this.timeoutInMilliseconds=8000}jQuery.inherits(ErrorNotification,Notification);function Occasionally(A,D,C,B,E){this.interval=A;this.maxDecayTime=D;this.job=C;this.decayCallback=B;this.timesRun=0;this.decayRate=1;this.decayMultiplier=E||1.25;this.maxRequests=360}Occasionally.prototype.start=function(){this.stop();this.run()};Occasionally.prototype.stop=function(){if(this.worker){window.clearTimeout(this.worker)}};Occasionally.prototype.run=function(){var A=this;this.decayRate=this.decayCallback()?Math.max(1,this.decayRate/this.decayMultiplier):this.decayRate*this.decayMultiplier;var B=this.interval*this.decayRate;B=(B>=this.maxDecayTime)?this.maxDecayTime:B;this.worker=window.setTimeout(function(){A.execute()},Math.floor(B))};Occasionally.prototype.execute=function(){this.job();if(++this.timesRun<this.maxRequests){this.run()}};twttr.countClick=function(){var A=twttr.createTrackingParameters(this);twttr.asyncClickCount(A)};twttr.asyncClickCount=function(A){(new Image()).src="/abacus?"+$.param(A)};twttr.createTrackingParameters=function(F){var B=$(F);var A=function(){var K=B.attr("class");var I=["hashtag","profile-pic","screen-name","username","web"];for(var J in I){if(K.indexOf(I[J])!==-1){return I[J]}}}();var E=B.closest(".status").find(".meta").children("a").get(0).href.split("/");var G=E[E.length-1];var H=$('meta[name="session-userid"]');var D=H.attr("content")||-1;var C=twttr.form_authenticity_token||$('input[name="authenticity_token"]').attr("value");return{url:F.href,linkType:A,tweetId:G,userId:D,authenticity_token:C,time:(new Date).getTime()}};$(document).ready(function(){var A=$("#content a.tweet-url");A.live("mousedown",twttr.countClick)});/*
    http://www.JSON.org/json2.js
    2009-09-21

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html

    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*jslint evil: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
function scribe(A,C,B){B=B||{};if(window.DARKMODE_SCRIBE){return this}if(typeof (A)=="function"){A=A.call(this)}var D={log:JSON.stringify(A)};if(B.filter){D.filter=B.filter}if(C){D.category=C}(new Image()).src="/scribe?"+$.param($.extend(D,{ts:(new Date()).getTime()}))}(function(A){A.extend(A.fn,{scribe:function(C,E,D){var B=this;D=D||{};this[(D.clientEvent||"mousedown")](function(F){window.scribe.call(this,C,E,D)});return this}})})(jQuery);twttr.position={relativeTo:function(I,H,A){var F,G;A=(A||{});F=G=H.offset();G.gravity=A.gravity;G.weight=A.weight;var D={height:H.height(),width:H.width()};var C={height:$(window).height(),width:$(window).width()};var E={height:$("body").height(),width:$("body").width()};var B={height:I.height(),width:I.width()};if(!G.gravity){G.gravity="vertical"}if("vertical,north,south".indexOf(G.gravity)!=-1){if("right,left,center".indexOf(G.weight)==-1){G.weight=(F.left>C.width/2)?"right":"left"}if(G.gravity=="vertical"){G.gravity=((F.top+B.height)>($(window).scrollTop()+C.height))?"south":"north"}if(G.weight=="right"){G.left=F.left-B.width+D.width}else{if(G.weight=="center"){G.left=F.left-(B.width/2)}}G.top=(G.gravity=="north")?(G.top+D.height):(G.top-B.height)}if("horizontal,east,west".indexOf(G.gravity)!=-1){if("top,bottom,center".indexOf(G.weight)==-1){if((F.top-(B.height/2))<0){G.weight="top"}else{if((F.top+(B.height/2))>Math.max(C.height,E.height)){G.weight="bottom"}else{G.weight="center"}}}if(G.gravity=="horizontal"){G.gravity=((F.left+(D.width/2))>C.width/2)?"east":"west"}if(G.weight=="center"){G.top=G.top+(D.height/2)-(B.height/2)}else{if(G.weight=="bottom"){G.top=G.top-B.height}}G.left=(G.gravity=="west")?(F.left+D.width):(F.left-B.width)}return G},center:function(A){var C=$(window);var B={top:parseInt((C.height()-A.height())/2),left:parseInt((C.width()-A.width())/2)};if($("body.ie6").length){B.top+=C.scrollTop();B.left+=C.scrollLeft()}return B}};twttr.klass("twttr.dialog",function(A,B){this.opts=B;this.$trigger=A;this.$heading=B.heading?$(B.heading):false;this.$footer=B.footer?$(B.footer):false;this.$content=$(B.content);this.createShell();this.bindEvents()}).widget().method("getHeaderHTML",function(){if(this.$heading&&this.$heading.length){return"<h2><span>"+this.$heading.html()+"</span>"+(this.opts.closeButton?'<a href="#" class="modal-close">&times;</a>':"")+"</h2>"}else{return(this.opts.closeButton?'<span class="no-heading"><a href="#" class="modal-close right">&times;</a></span>':"")}}).method("getShellHTML",function(){var A=(this.opts.modal===false);return['<div class="twttr-dialog'+(this.opts.cssClass?" "+this.opts.cssClass:"")+'" style="display: none;">','<div class="hanging"'+(this.opts.zIndex?' style="z-index: '+this.opts.zIndex+' !important;"':"")+">",'<div class="modal">','<div class="modal-inner">',this.getHeaderHTML(),'<div class="modal-content"> </div>',"</div>","</div>","</div>",(A?"":'<div class="modal-overlay"></div>'),"</div>"].join("")}).method("createShell",function(){var C=this;this.$root=$(this.getShellHTML());if(this.opts.width){this.find(".hanging").css({width:this.opts.width})}var D=this.$content.parent().length?this.$content.parent():$(document.body);this.$content.move(this.find(".modal-content"));if(this.$footer.length){this.find(".modal-content").after('<div class="footer"></div>');this.$footer.move(this.find(".footer"))}if(this.opts.renderInline){D.append(this.$root)}else{$(document.body).append(this.$root)}if(this.opts.fixed===false){this.find(".hanging").css({position:"absolute"})}var B=this.$root.find(".modal-submit");if(B.length>0){if(C.opts.noajax){B.bind("click",function(E){B.closest("form").submit()});return }var A=C.opts.ajax.complete;B.bind("click",function(F){F.preventDefault();B.attr("disabled",true);B.addClass("dbtn").removeClass("btn");var E=$(this).closest("form");$.ajax($.extend((C.opts.ajax||{}),{type:E.attr("method"),url:E.attr("action"),data:E.serialize(),complete:function(G){B.attr("disabled",false);B.addClass("btn").removeClass("dbtn");if(A){A(G)}}}))})}}).method("bindEvents",function(){var A=this;if(this.$trigger&&!this.opts.openonload){this.$trigger.click(function(B){B.preventDefault();A.open()})}else{if(this.opts.openonload){A.open()}}this.find(".modal-close").click(function(B){B.preventDefault();A.close()});if(this.find(".modal-close").length){$(document).keydown(function(B){if(B.which==27){B.preventDefault();A.close()}})}if(this.opts.popup){$(document).click(function(B){if(A.opened&&!$(B.target).parents(".modal").length){A.close()}})}}).method("windowHeight",function(){return $(window).height()}).method("scrollTop",function(){return $(window).scrollTop()}).method("open",function(){this.$root.fadeIn("fast");var A=this.find(".hanging");var B=this.center(A);if(this.opts.top){B.top=this.opts.top}if(this.opts.left){B.left=this.opts.left}if(this.opts.maxTop){B.top=Math.min(B.top,this.opts.maxTop)}if(this.opts.maxLeft){B.left=Math.min(B.left,this.opts.maxLeft)}A.css({top:B.top,left:B.left});this.$root.trigger("open");this.opened=true;if(this.windowHeight()<A.outerHeight()){A.css("position","absolute");A.css("top",this.scrollTop()+"px")}this.$root.find("input[type=text]:first").focus()}).method("close",function(){this.$root.fadeOut("fast");this.opened=false;this.$root.trigger("close")}).method("toggle",function(){this.opened?this.close():this.open()});twttr.augmentObject(twttr.dialog.prototype,twttr.position);twttr.auxo("AttachedDialog",twttr.dialog).method("open",function(){this.$root.addClass("attached");this.$root.fadeIn("fast");this.opened=true;if(!this.positioned){var A=this.find(".hanging");var D=this.relativeTo(this.find(".hanging"),this.$trigger,this.opts);if(this.opts.offsetX){D.left+=this.opts.offsetX}if(this.opts.offsetY){D.top+=this.opts.offsetY}twttr.augmentObject(this.opts,D);var B=this.opts.gravity;if(B&&("horizontal,vertical".indexOf(B)==-1)){if("north,south".indexOf(B)==-1){var C=parseInt(this.find(".hanging").height());this.find(".modal-inner").prepend('<div class="'+B+'" style="height:'+C+'px;"></div>');D.left+=this.nudge(B);D.top+=this.nudge(this.opts.weight)}else{this.find(".modal")[(B=="north"?"before":"after")]('<div class="'+B+'"></div>');D.top+=this.nudge(B);D.left+=this.nudge(this.opts.weight)}}this.find(".hanging").css({top:D.top,left:D.left});if(this.opts.weight&&this.opts.weight!="auto"){this.find(".hanging").addClass("weight-"+this.opts.weight)}if(this.opts.modal){this.find(".modal-overlay").height(Math.max($(window).height(),$("body").height())+25)}this.positioned=true}}).method("nudge",function(A){return(twttr.AttachedDialog.offsets[A]||0)});twttr.AttachedDialog.offsets={top:-15,bottom:30,east:-10,west:10,south:-10,north:4};/*
 * Copyright (c) 2007 Josh Bush (digitalbush.com)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * Version: Beta 1
 * Release: 2007-06-01
 */
(function($) {
	var map=new Array();
	$.Watermark = {
		ShowAll:function(){
			for (var i=0;i<map.length;i++){
				if(map[i].obj.val()==""){
					map[i].obj.val(map[i].text);
					map[i].obj.css("color",map[i].WatermarkColor);
				}else{
				    map[i].obj.css("color",map[i].DefaultColor);
				}
			}
		},
		HideAll:function(){
			for (var i=0;i<map.length;i++){
				if(map[i].obj.val()==map[i].text)
					map[i].obj.val("");
			}
		}
	}

	$.fn.Watermark = function(text,color) {
		if(!color)
			color="#aaa";
		return this.each(
			function(){
				var input=$(this);
				var defaultColor=input.css("color");
				map[map.length]={text:text,obj:input,DefaultColor:defaultColor,WatermarkColor:color};
				function clearMessage(){
					if(input.val()==text)
						input.val("");
					input.css("color",defaultColor);
				}

				function insertMessage(){
					if(input.val().length==0 || input.val()==text){
						input.val(text);
						input.css("color",color);
					}else
						input.css("color",defaultColor);
				}

				input.focus(clearMessage);
				input.blur(insertMessage);
				input.change(insertMessage);

				insertMessage();
			}
		);
	};
})(jQuery);
/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor', 'borderColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}

	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break;

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};

	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};

})(jQuery);
/* Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.3
 * Requires jQuery 1.1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */

(function($) {

$.extend($.fn, {
	livequery: function(type, fn, fn2) {
		var self = this, q;

		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;

		// See if Live Query already exists
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				type == query.type && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) )
					// Found the query, exit the each loop
					return (q = query) && false;
		});

		// Create new Live Query if it wasn't found
		q = q || new $.livequery(this.selector, this.context, type, fn, fn2);

		// Make sure it is running
		q.stopped = false;

		// Run it immediately for the first time
		q.run();

		// Contnue the chain
		return this;
	},

	expire: function(type, fn, fn2) {
		var self = this;

		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;

		// Find the Live Query based on arguments and stop it
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				(!type || type == query.type) && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) && !this.stopped )
					$.livequery.stop(query.id);
		});

		// Continue the chain
		return this;
	}
});

$.livequery = function(selector, context, type, fn, fn2) {
	this.selector = selector;
	this.context  = context || document;
	this.type     = type;
	this.fn       = fn;
	this.fn2      = fn2;
	this.elements = [];
	this.stopped  = false;

	// The id is the index of the Live Query in $.livequery.queries
	this.id = $.livequery.queries.push(this)-1;

	// Mark the functions for matching later on
	fn.$lqguid = fn.$lqguid || $.livequery.guid++;
	if (fn2) fn2.$lqguid = fn2.$lqguid || $.livequery.guid++;

	// Return the Live Query
	return this;
};

$.livequery.prototype = {
	stop: function() {
		var query = this;

		if ( this.type )
			// Unbind all bound events
			this.elements.unbind(this.type, this.fn);
		else if (this.fn2)
			// Call the second function for all matched elements
			this.elements.each(function(i, el) {
				query.fn2.apply(el);
			});

		// Clear out matched elements
		this.elements = [];

		// Stop the Live Query from running until restarted
		this.stopped = true;
	},

	run: function() {
		// Short-circuit if stopped
		if ( this.stopped ) return;
		var query = this;

		var oEls = this.elements,
			els  = $(this.selector, this.context),
			nEls = els.not(oEls);

		// Set elements to the latest set of matched elements
		this.elements = els;

		if (this.type) {
			// Bind events to newly matched elements
			nEls.bind(this.type, this.fn);

			// Unbind events to elements no longer matched
			if (oEls.length > 0)
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						$.event.remove(el, query.type, query.fn);
				});
		}
		else {
			// Call the first function for newly matched elements
			nEls.each(function() {
				query.fn.apply(this);
			});

			// Call the second function for elements no longer matched
			if ( this.fn2 && oEls.length > 0 )
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						query.fn2.apply(el);
				});
		}
	}
};

$.extend($.livequery, {
	guid: 0,
	queries: [],
	queue: [],
	running: false,
	timeout: null,

	checkQueue: function() {
		if ( $.livequery.running && $.livequery.queue.length ) {
			var length = $.livequery.queue.length;
			// Run each Live Query currently in the queue
			while ( length-- )
				$.livequery.queries[ $.livequery.queue.shift() ].run();
		}
	},

	pause: function() {
		// Don't run anymore Live Queries until restarted
		$.livequery.running = false;
	},

	play: function() {
		// Restart Live Queries
		$.livequery.running = true;
		// Request a run of the Live Queries
		$.livequery.run();
	},

	registerPlugin: function() {
		$.each( arguments, function(i,n) {
			// Short-circuit if the method doesn't exist
			if (!$.fn[n]) return;

			// Save a reference to the original method
			var old = $.fn[n];

			// Create a new method
			$.fn[n] = function() {
				// Call the original method
				var r = old.apply(this, arguments);

				// Request a run of the Live Queries
				$.livequery.run();

				// Return the original methods result
				return r;
			}
		});
	},

	run: function(id) {
		if (id != undefined) {
			// Put the particular Live Query in the queue if it doesn't already exist
			if ( $.inArray(id, $.livequery.queue) < 0 )
				$.livequery.queue.push( id );
		}
		else
			// Put each Live Query in the queue if it doesn't already exist
			$.each( $.livequery.queries, function(id) {
				if ( $.inArray(id, $.livequery.queue) < 0 )
					$.livequery.queue.push( id );
			});

		// Clear timeout if it already exists
		if ($.livequery.timeout) clearTimeout($.livequery.timeout);
		// Create a timeout to check the queue and actually run the Live Queries
		$.livequery.timeout = setTimeout($.livequery.checkQueue, 20);
	},

	stop: function(id) {
		if (id != undefined)
			// Stop are particular Live Query
			$.livequery.queries[ id ].stop();
		else
			// Stop all Live Queries
			$.each( $.livequery.queries, function(id) {
				$.livequery.queries[ id ].stop();
			});
	}
});

// Register core DOM manipulation methods
$.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');

// Run Live Queries when the Document is ready
$(function() { $.livequery.play(); });


// Save a reference to the original init method
var init = $.prototype.init;

// Create a new init method that exposes two new properties: selector and context
$.prototype.init = function(a,c) {
	// Call the original init and save the result
	var r = init.apply(this, arguments);

	// Copy over properties if they exist already
	if (a && a.selector)
		r.context = a.context, r.selector = a.selector;

	// Set properties
	if ( typeof a == 'string' )
		r.context = c || document, r.selector = a;

	// Return the result
	return r;
};

// Give the init function the jQuery prototype for later instantiation (needed after Rev 4091)
$.prototype.init.prototype = $.prototype;

})(jQuery);/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jï¿½Ã¶rn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 3640 2007-10-11 18:34:38Z pmclanahan $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are four supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *   html5: Values are stored in data-* attributes.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @example <p id="one" class="some_class" data-item_id="1" data-item_label="Label">This is a p</p>
 * @before $.metadata.setType("html5")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a series of data-* attributes
 *
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
  metadata : {
    defaults : {
      type: 'class',
      name: 'metadata',
      cre: /({.*})/,
      single: 'metadata'
    },
    setType: function( type, name ){
      this.defaults.type = type;
      this.defaults.name = name;
    },
    get: function( elem, opts ){
      var settings = $.extend({},this.defaults,opts);
      // check for empty string in single property
      if ( !settings.single.length ) settings.single = 'metadata';
      
      var data = $.data(elem, settings.single);
      // returned cached data if it already exists
      if ( data ) return data;
      
      data = "{}";
      
      var getData = function(data) {
        if(typeof data != "string") return data;
        
        if( data.indexOf('{') < 0 ) {
          data = eval("(" + data + ")");
        }
      }
      
      var getObject = function(data) {
        if(typeof data != "string") return data;
        
        data = eval("(" + data + ")");
        return data;
      }
      
      if ( settings.type == "html5" ) {
        var object = {};
        $( elem.attributes ).each(function() {
          var name = this.nodeName;
          if(name.match(/^data-/)) name = name.replace(/^data-/, '');
          else return true;
          object[name] = getObject(this.nodeValue);
        });
      } else {
        if ( settings.type == "class" ) {
          var m = settings.cre.exec( elem.className );
          if ( m )
            data = m[1];
        } else if ( settings.type == "elem" ) {
          if( !elem.getElementsByTagName ) return;
          var e = elem.getElementsByTagName(settings.name);
          if ( e.length )
            data = $.trim(e[0].innerHTML);
        } else if ( elem.getAttribute != undefined ) {
          var attr = elem.getAttribute( settings.name );
          if ( attr )
            data = attr;
        }
        object = getObject(data.indexOf("{") < 0 ? "{" + data + "}" : data);
      }
      
      $.data( elem, settings.single, object );
      return object;
    }
  }
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
  return $.metadata.get( this[0], opts );
};

})(jQuery);//Licensed under The MIT License
//Copyright (c) 2008 Jason Frame (jason@onehackoranother.com)


(function($) {
    $.fn.tipsy = function(opts) {

        opts = $.extend({fade: false, gravity: 'n'}, opts || {});
        // ...Added by andy@twitter.com 20090717
        if(!opts['offsetTop']) { opts['offsetTop'] = 0; }
        if(!opts['offsetLeft']) { opts['offsetLeft'] = 0; }
        if(!opts['header']) { opts['header'] = ''; }
        if(!opts['footer']) { opts['footer'] = ''; }
        if(!opts['hideTimeout']) { opts['hideTimeout'] = 100; }
        if(!opts['showTimeout']) { opts['hideTimeout'] = 0; }
        if(!opts['additionalCSSClass']) { opts['additionalCSSClass'] = ''; }
        var showTimeoutKey = false;
        // ...Added by andy@twitter.com 20090717
        var tip = null, cancelHide = false;
        this.hover(function() {

            // ...Added by andy@twitter.com 20090717
            var linkText = $(this).text();
            var header = opts['header'].replace('%{link}', linkText);
            var footer = opts['footer'].replace('%{link}', linkText);
            // ...Added by andy@twitter.com 20090717

            $.data(this, 'cancel.tipsy', true);

            var tip = $.data(this, 'active.tipsy');
            if (!tip) {
                $('.tipsy').hide();
                tip = $('<div class="tipsy '+ opts['additionalCSSClass'] +'"><div class="tipsy-inner">' + header + $(this).attr('title') + footer + '</div></div>');
                tip.css({position: 'absolute', zIndex: 100000});
                $(this).attr('title', '');
                $.data(this, 'active.tipsy', tip);
            // Added by rael@twitter.com 20090628...
            } else if ($(this).attr('title') != '') {
              tip.find('.tipsy-inner').html($(this).attr('title'));
              $(this).attr('title', '');
            // ...Added by rael@twitter.com 20090628
            }

            var pos = $.extend({}, $(this).offset(), {width: this.offsetWidth, height: this.offsetHeight});
            // ...Added by andy@twitter.com 20090717
            pos.top = pos.top + opts['offsetTop'];
            pos.left = pos.left + opts['offsetLeft'];

            // remove open tips if timeout to fade
            $('.tipsy').hide();
            // ...Added by andy@twitter.com 20090717
            tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
            var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight;

            switch (opts.gravity.charAt(0)) {
                case 'n':
                    tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-north');
                    break;
                case 'l':
                    //left north align
                    tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - 18}).addClass('tipsy-north');
                    break;
                case 's':
                    tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-south');
                    break;
                case 'e':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tipsy-east');
                    break;
                case 'w':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tipsy-west');
                    break;
            }
            // ...Added by andy@twitter.com 20090717
            function show() {
              if (opts.fade) {
                  tip.css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: 1});
              } else {
                  tip.css({visibility: 'visible'});
              }
            }
            if(opts['showTimeout']) {
              showTimeoutKey = setTimeout(show, opts['showTimeout']);
            } else {
              show();
            }
        }, function() {
            clearTimeout(showTimeoutKey);
            // ...Added by andy@twitter.com 20090717
            $.data(this, 'cancel.tipsy', false);
            var self = this;
            setTimeout(function() {
                if ($.data(this, 'cancel.tipsy')) return;
                var tip = $.data(self, 'active.tipsy');
                if (opts.fade) {
                    tip.stop().fadeOut(function() { $(this).remove(); });
                } else {
                    tip.remove();
                }
            }, opts['hideTimeout']);
        });

    };
})(jQuery);
/*
 * jQuery Form Plugin
 * version: 2.36 (07-NOV-2009)
 * @requires jQuery v1.2.6 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function() {
			$(this).ajaxSubmit({
				target: '#output'
			});
			return false; // <-- important!
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function')
		options = { success: options };

	var url = $.trim(this.attr('action'));
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
   	}
   	url = url || window.location.href || '';

	options = $.extend({
		url:  url,
		type: this.attr('method') || 'GET',
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options || {});

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (var n in options.data) {
		  if(options.data[n] instanceof Array) {
			for (var k in options.data[n])
			  a.push( { name: n, value: options.data[n][k] } );
		  }
		  else
			 a.push( { name: n, value: options.data[n] } );
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else
		options.data = q; // data is the query string for 'post'

	var $form = this, callbacks = [];
	if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
	if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			$(options.target).html(data).each(oldSuccess, arguments);
		});
	}
	else if (options.success)
		callbacks.push(options.success);

	options.success = function(data, status) {
		for (var i=0, max=callbacks.length; i < max; i++)
			callbacks[i].apply(options, [data, status, $form]);
	};

	// are there files to upload?
	var files = $('input:file', this).fieldValue();
	var found = false;
	for (var j=0; j < files.length; j++)
		if (files[j])
			found = true;

	var multipart = false;
//	var mp = 'multipart/form-data';
//	multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if ((files.length && options.iframe !== false) || options.iframe || found || multipart) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive)
		   $.get(options.closeKeepAlive, fileUpload);
	   else
		   fileUpload();
	   }
   else
	   $.ajax(options);

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit]', form).length) {
			alert('Error: Form elements must not be named "submit".');
			return;
		}

		var opts = $.extend({}, $.ajaxSettings, options);
		var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

		var id = 'jqFormIO' + (new Date().getTime());
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ opts.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', opts.iframeSrc); // abort op in progress
			}
		};

		var g = opts.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) $.event.trigger("ajaxStart");
		if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && $.active--;
			return;
		}
		if (xhr.aborted)
			return;

		var cbInvoked = 0;
		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				options.extraData = options.extraData || {};
				options.extraData[n] = sub.value;
				if (sub.type == "image") {
					options.extraData[name+'.x'] = form.clk_x;
					options.extraData[name+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		setTimeout(function() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);

			// ie borks in some cases when setting encoding
			if (! options.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (opts.timeout)
				setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (options.extraData)
					for (var n in options.extraData)
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
								.appendTo(form)[0]);

				// add iframe to doc and submit the form
				$io.appendTo('body');
				io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				t ? form.setAttribute('target', t) : $form.removeAttr('target');
				$(extraInputs).remove();
			}
		}, 10);

		var domCheckCount = 50;

		function cb() {
			if (cbInvoked++) return;

			io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) throw 'timeout';
				// extract the server response from the iframe
				var data, doc;

				doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;

				var isXml = opts.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && (doc.body == null || doc.body.innerHTML == '')) {
				 	if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						cbInvoked = 0;
						setTimeout(cb, 100);
						return;
					}
					log('Could not access iframe DOM after 50 tries.');
					return;
				}

				xhr.responseText = doc.body ? doc.body.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': opts.dataType};
					return headers[header];
				};

				if (opts.dataType == 'json' || opts.dataType == 'script') {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta)
						xhr.responseText = ta.value;
					else {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						if (pre)
							xhr.responseText = pre.innerHTML;
					}
				}
				else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				data = $.httpData(xhr, opts.dataType);
			}
			catch(e){
				ok = false;
				$.handleError(opts, xhr, 'error', e);
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				opts.success(data, 'success');
				if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
			}
			if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
			if (g && ! --$.active) $.event.trigger("ajaxStop");
			if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		};

		function toXml(s, doc) {
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
		};
	};
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	return this.ajaxFormUnbind().bind('submit.form-plugin', function() {
		$(this).ajaxSubmit(options);
		return false;
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0)
				return;
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length == 0) return a;

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) return a;
	for(var i=0, max=els.length; i < max; i++) {
		var el = els[i];
		var n = el.name;
		if (!n) continue;

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		var v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(var j=0, jmax=v.length; j < jmax; j++)
				a.push({name: n, value: v[j]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: n, value: v});
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0], n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) return;
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++)
				a.push({name: n, value: v[i]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: this.name, value: v});
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
			continue;
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (typeof successful == 'undefined') successful = true;

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1))
			return null;

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) return null;
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				if (one) return v;
				a.push(v);
			}
		}
		return a;
	}
	return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea')
			this.value = '';
		else if (t == 'checkbox' || t == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
			this.reset();
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b == undefined) b = true;
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select == undefined) select = true;
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio')
			this.checked = select;
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
		window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);

//Licensed under The MIT License
//Copyright (c) 2008 Jason Frame (jason@onehackoranother.com)
(function($){$.fn.tipsy=function(g){g=$.extend({fade:false,gravity:'n'},g||{});if(!g['offsetTop']){g['offsetTop']=0}if(!g['offsetLeft']){g['offsetLeft']=0}if(!g['header']){g['header']=''}if(!g['footer']){g['footer']=''}if(!g['hideTimeout']){g['hideTimeout']=100}if(!g['showTimeout']){g['hideTimeout']=0}if(!g['additionalCSSClass']){g['additionalCSSClass']=''}var h=false;var i=null,cancelHide=false;this.hover(function(){var a=$(this).text();var b=g['header'].replace('%{link}',a);var c=g['footer'].replace('%{link}',a);$.data(this,'cancel.tipsy',true);var d=$.data(this,'active.tipsy');if(!d){$('.tipsy').hide();d=$('<div class="tipsy '+g['additionalCSSClass']+'"><div class="tipsy-inner">'+b+$(this).attr('title')+c+'</div></div>');d.css({position:'absolute',zIndex:100000});$(this).attr('title','');$.data(this,'active.tipsy',d)}else if($(this).attr('title')!=''){d.find('.tipsy-inner').html($(this).attr('title'));$(this).attr('title','')}var e=$.extend({},$(this).offset(),{width:this.offsetWidth,height:this.offsetHeight});e.top=e.top+g['offsetTop'];e.left=e.left+g['offsetLeft'];$('.tipsy').hide();d.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var f=d[0].offsetWidth,actualHeight=d[0].offsetHeight;switch(g.gravity.charAt(0)){case'n':d.css({top:e.top+e.height,left:e.left+e.width/2-f/2}).addClass('tipsy-north');break;case'l':d.css({top:e.top+e.height,left:e.left+e.width/2-18}).addClass('tipsy-north');break;case's':d.css({top:e.top-actualHeight,left:e.left+e.width/2-f/2}).addClass('tipsy-south');break;case'e':d.css({top:e.top+e.height/2-actualHeight/2,left:e.left-f}).addClass('tipsy-east');break;case'w':d.css({top:e.top+e.height/2-actualHeight/2,left:e.left+e.width}).addClass('tipsy-west');break}function show(){if(g.fade){d.css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:1})}else{d.css({visibility:'visible'})}}if(g['showTimeout']){h=setTimeout(show,g['showTimeout'])}else{show()}},function(){clearTimeout(h);$.data(this,'cancel.tipsy',false);var b=this;setTimeout(function(){if($.data(this,'cancel.tipsy'))return;var a=$.data(b,'active.tipsy');if(g.fade){a.stop().fadeOut(function(){$(this).remove()})}else{a.remove()}},g['hideTimeout'])})}})(jQuery);

/*
  Shamless port of http://github.com/defunkt/mustache
  by Jan Lehnardt <jan@apache.org>, Alexander Lang <alex@upstream-berlin.com>,
     Sebastian Cohnen <sebastian.cohnen@googlemail.com>

  Thanks @defunkt for the awesome code.

  See http://github.com/defunkt/mustache for more info.
*/

var Mustache = function() {
  var Renderer = function() {};

  Renderer.prototype = {
    otag: "{{",
    ctag: "}}",

    render: function(template, context, partials) {
      // fail fast
      if (template.indexOf(this.otag) == -1) {
        return template;
      }

      var html = this.render_section(template, context, partials);
      html = this.render_i18n(html);
      return this.render_tags(html, context, partials);
    },

    /*
      Tries to find a partial in the global scope and render it
    */
    render_partial: function(name, context, partials) {
      if(typeof(context[name]) != "object") {
        throw({message: "subcontext for '" + name + "' is not an object"});
      }
	    if(!partials || !partials[name]) {
        throw({message: "unknown_partial"});
      }
      return this.render(partials[name], context[name], partials);
    },

    /*
      Renders boolean and enumerable sections
    */
    render_section: function(template, context, partials) {
      var hasConditional = (template.indexOf(this.otag + "#") == -1)
      var hasNegation = (template.indexOf(this.otag + "!") == -1)
      if(!hasConditional && !hasNegation) {
        return template;
      }
      var that = this;

      // CSW - Added "+?" so it finds the tighest bound, not the widest
      var regex = new RegExp(this.otag + "(\\#|\\~)(.+)" + this.ctag +
              "\\s*([\\s\\S]+?)" + this.otag + "\\/\\2" + this.ctag + "\\s*", "mg");

      // for each {{#foo}}{{/foo}} section do...
      // and will also render negated sections with {{~foo}}{{/foo}}
      return template.replace(regex, function(match, operation, name, content) {
        var value = that.find(name, context);
        if(that.is_array(value)) { // Enumerable, Let's loop!
          return that.map(value, function(row) {
            return that.render(content, that.merge(context,
                    that.create_context(row)), partials);
          }).join('');
        } else if(operation == "#" && !twttr.is.falsy(value)) { // boolean section
          return that.render(content, context, partials);
        }  else if(operation == "~" && twttr.is.falsy(value)) {
          return that.render(content, context, partials);
        } else {
          return "";
        }
      });
    },

    render_i18n: function(html) {
      if (html.indexOf(this.otag + "_i") == -1) {
        return html;
      }
      var that = this;
      var regex = new RegExp(this.otag + "\\_i" + this.ctag +
              "\\s*([\\s\\S]+?)" + this.otag + "\\/i" + this.ctag + "\\s*", "mg");
      // for each {{_i}}{{/i}} section do...
      return html.replace(regex, function(match, content) {
        return _(content);
      });
    },

    /*
      Replace {{foo}} and friends with values from our view
    */
    render_tags: function(template, context, partials) {
      var lines = template.split("\n");

      var new_regex = function() {
        return new RegExp(that.otag + "(=|!|<|\\{)?([^\/#]+?)\\1?" +
          that.ctag + "+", "g");
      };

      // tit for tat
      var that = this;

      var regex = new_regex();
      for (var i=0; i < lines.length; i++) {
        lines[i] = lines[i].replace(regex, function (match, operator, name) {
          switch(operator) {
            case "!": // ignore comments
              return match;
            case "=": // set new delimiters, rebuild the replace regexp
              that.set_delimiters(name);
              regex = new_regex();
              // redo the line in order to get tags with the new delimiters
              // on the same line
              i--;
              return "";
            case "<": // render partial
              return that.render_partial(name, context, partials);
            case "{": // the triple mustache is unescaped
              var value = that.find(name, context);
              return twttr.is.def(value) ? value : "";
            default: // escape the value
              var value = that.find(name, context);
              return twttr.is.def(value) ? that.escape(value) : "";
          }
        },this);
      };
      return lines.join("\n");
    },

    set_delimiters: function(delimiters) {
      var dels = delimiters.split(" ");
      this.otag = this.escape_regex(dels[0]);
      this.ctag = this.escape_regex(dels[1]);
    },

    escape_regex: function(text) {
      // thank you Simon Willison
      if(!arguments.callee.sRE) {
        var specials = [
          '/', '.', '*', '+', '?', '|',
          '(', ')', '[', ']', '{', '}', '\\'
        ];
        arguments.callee.sRE = new RegExp(
          '(\\' + specials.join('|\\') + ')', 'g'
        );
      }
    return text.replace(arguments.callee.sRE, '\\$1');
    },

    /*
      find `name` in current `context`. That is find me a value
      from the view object
    */
    find: function(name, context) {
      name = this.trim(name);
      if (twttr.is.def(context) && typeof context[name] === "function") {
        return context[name].apply(context);
      }
      if (context && context[name] !== undefined && context[name] !== null) {
        return context[name];
      } else {
        return undefined;
      }
    },

    i18n: function(name, context) {
      console.log("i18n", name, context);
      return _(this.trim(name));
    },

    // Utility methods

    /*
      Does away with nasty characters
    */
    escape: function(s) {
      return s.toString().replace(/[&"<>\\]/g, function(s) {
        switch(s) {
          case "&": return "&amp;";
          case "\\": return "\\\\";;
          case '"': return '\"';;
          case "<": return "&lt;";
          case ">": return "&gt;";
          default: return s;
        }
      });
    },

    /*
      Merges all properties of object `b` into object `a`.
      `b.property` overwrites a.property`
    */
    merge: function(a, b) {
      var _new = {};
      for(var name in a) {
        if(a.hasOwnProperty(name)) {
          _new[name] = a[name];
        }
      };
      for(var name in b) {
        if(b.hasOwnProperty(name)) {
          _new[name] = b[name];
        }
      };
      return _new;
    },

    create_context: function(_context) {
      if(this.is_object(_context)) {
        return _context;
      } else {
        return {'.': _context};
      }
    },

    is_object: function(a) {
      return a && typeof a == 'object'
    },

    /*
      Thanks Doug Crockford
      JavaScript â The Good Parts lists an alternative that works better with
      frames. Frames can suck it, we use the simple version.
    */
    is_array: function(a) {
      return (a &&
        typeof a === 'object' &&
        a.constructor === Array);
    },

    /*
      Gets rid of leading and trailing whitespace
    */
    trim: function(s) {
      return s.replace(/^\s*|\s*$/g, '');
    },

    /*
      Why, why, why? Because IE. Cry, cry cry.
    */
    map: function(array, fn) {
      if (typeof array.map == "function") {
        return array.map(fn)
      } else {
        var r = [];
        var l = array.length;
        for(i=0;i<l;i++) {
          r.push(fn(array[i]));
        }
        return r;
      }
    }
  };

  return({
    name: "mustache.js",
    version: "0.1",

    /*
      Turns a template and view into HTML
    */
    to_html: function(template, view, partials) {
      return new Renderer().render(template, view, partials);
    }
  });
}();



(function(A){A.fn.dismissable=function(B){var D=A(this);var C={authenticity_token:twttr.form_authenticity_token,_method:"put"};C["user["+B.userAttribute+"]"]="1";D.find("a.dismiss").click(function(){D.hide();A.ajax({type:"POST",url:B.userUrl,data:C});return false});return this}})(jQuery);



//<![CDATA[
  page.summizeSearchUrl = 'http://integratedsearch.twitter.com/search.html';
  page.query = '';
  page.locale = 'en';
  
      page.controller_name = 'TimelineController';
      page.action_name = 'home';
      twttr.form_authenticity_token = 'a96df982cd10e7cbdaaa0f2de38e43023d08d2de';
      $.ajaxSetup({ data: { authenticity_token: 'a96df982cd10e7cbdaaa0f2de38e43023d08d2de' } });

      // FIXME: Reconcile with the kinds on the Status model.
      twttr.statusKinds = {
        UPDATE: 1,
        SHARE: 2
      };
      twttr.ListPerUserLimit = 20;
      
    
//]]>



//<![CDATA[

      $( function () {
        $('#latest_status').isCurrentStatus();  $('#direct_message_form').isDirectMessageForm();
    $('.new-list').isNewListLink();
    $('#local_trends').isLocationTrends();
    $('.new-list-banner').isNewListLink();
    initializePage('home');
  $('.embedded_media_icon').isEmbeddedMediaExpander();
  $('#user_alert_bulletin').isAlertBox();
  

      });
    
//]]>



    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
  



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

    try {
      var pageTracker = _gat._getTracker("UA-30775-6");
      pageTracker._setDomainName("twitter.com");
            pageTracker._setVar('Logged In');
            pageTracker._setVar('lang: en');
            pageTracker._initData();
                              pageTracker._trackPageview('/home');
                  } catch(err) { }
