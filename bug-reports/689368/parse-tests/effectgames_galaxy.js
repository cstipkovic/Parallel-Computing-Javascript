;
var ZeroUpload = {
clients: {}, 
moviePath: 'ZeroUpload.swf', 
nextId: 1, 
$: function(thingy) {
if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
if (!thingy.__zeroUploadExtended) {
thingy.__zeroUploadExtended = true;
thingy.hide = function() { this.style.display = 'none'; };
thingy.show = function() { this.style.display = ''; };
thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
thingy.removeClass = function(name) {
this.className = this.className.replace( new RegExp("(^|\\s+)" + name + "(\\s+|$)"), "").replace(/^\s+|\s+$/g, '');
};
thingy.hasClass = function(name) {
return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
};
}
return thingy;
},
setMoviePath: function(path) {
this.moviePath = path;
},
dispatch: function(id, eventName, args) {
var client = this.clients[id];
if (client) {
client.receiveEvent(eventName, args);
}
},
register: function(id, client) {
this.clients[id] = client;
},
getDOMObjectPosition: function(obj) {
var info = {
left: 0, 
top: 0, 
width: obj.width ? obj.width : obj.offsetWidth, 
height: obj.height ? obj.height : obj.offsetHeight
};
while (obj) {
info.left += obj.offsetLeft;
info.top += obj.offsetTop;
obj = obj.offsetParent;
}
return info;
},
Client: function(elem) {
this.fileTypes = ["All Files", "*.*"];
this.postParams = {};
this.handlers = {};
this.id = ZeroUpload.nextId++;
this.containerId = 'ZeroUploadContainer_' + this.id;
this.movieId = 'ZeroUploadMovie_' + this.id;
ZeroUpload.register(this.id, this);
if (elem) this.glue(elem);
}
};
ZeroUpload.Client.prototype = {
id: 0, 
ready: false, 
movie: null, 
fileTypes: null, 
postParams: null, 
targetURL: '', 
fileDataField: 'Filedata', 
handCursorEnabled: true, 
maxFileSize: 0, 
cssEffects: true, 
maxFiles: 0, 
delayBetween: 1, 
handlers: null, 
glue: function(elem) {
this.domElement = ZeroUpload.$(elem);
var zIndex = 9999;
if (this.domElement.style.zIndex) {
zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
}
var box = ZeroUpload.getDOMObjectPosition(this.domElement);
this.div = document.createElement('div');
var style = this.div.style;
style.position = 'absolute';
style.left = '' + box.left + 'px';
style.top = '' + box.top + 'px';
style.width = '' + box.width + 'px';
style.height = '' + box.height + 'px';
style.zIndex = zIndex;
var body = document.getElementsByTagName('body')[0];
body.appendChild(this.div);
this.div.innerHTML = this.getHTML( box.width, box.height );
},
getHTML: function(width, height) {
var html = '';
var flashvars = 'id=' + this.id + 
'&width=' + width + 
'&height=' + height;
if (navigator.userAgent.match(/MSIE/)) {
var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroUpload.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
}
else {
html += '<embed id="'+this.movieId+'" src="'+ZeroUpload.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
}
return html;
},
hide: function() {
if (this.div) {
this.div.style.left = '-2000px';
}
},
show: function() {
this.reposition();
},
destroy: function() {
if (this.domElement && this.div) {
this.hide();
this.movie = null;
try { this.div.removeChild( this.movie ); } catch(e) {;}
var body = document.getElementsByTagName('body')[0];
try { body.removeChild( this.div ); } catch(e) {;}
this.domElement = null;
this.div = null;
}
},
reposition: function(elem) {
if (elem) {
this.domElement = ZeroUpload.$(elem);
}
if (this.domElement && this.div) {
var box = ZeroUpload.getDOMObjectPosition(this.domElement);
var style = this.div.style;
style.left = '' + box.left + 'px';
style.top = '' + box.top + 'px';
}
},
setFileTypes: function(desc, exts) {
this.fileTypes = [desc, exts];
if (this.ready) this.movie.setFileTypes(desc, exts);
},
setPostParam: function(name, value) {
this.postParams[name] = value;
if (this.ready) this.movie.setPostParam(name, value);
},
setPostParams: function(obj) {
for (var key in obj) this.setPostParam(key, obj[key]);
if (this.ready) this.movie.setPostParams(obj);
},
setURL: function(url) {
this.targetURL = url;
if (this.ready) this.movie.setURL(url);
},
setFileDataField: function(name) {
this.fileDataField = name;
if (this.ready) this.movie.setFileDataField(name);
},
addEventListener: function(eventName, func) {
eventName = eventName.toString().toLowerCase().replace(/^on/, '');
if (!this.handlers[eventName]) this.handlers[eventName] = [];
this.handlers[eventName].push(func);
},
cancel: function() {
if (this.ready) this.movie.cancel();
},
setHandCursor: function(enabled) {
this.handCursorEnabled = enabled;
if (this.ready) this.movie.setHandCursor(enabled);
},
setMaxFileSize: function(size) {
this.maxFileSize = size;
if (this.ready) this.movie.setMaxFileSize(size);
},
setMaxFiles: function(num) {
this.maxFiles = num;
if (this.ready) this.movie.setMaxFiles(num);
},
setCSSEffects: function(enabled) {
this.cssEffects = !!enabled;
},
setDelayBetween: function(ms) {
this.delayBetween = ms;
if (this.ready) this.movie.setDelayBetween(ms);
},
receiveEvent: function(eventName, args) {
eventName = eventName.toString().toLowerCase().replace(/^on/, '');
if (this.handlers.debug) {
for (var idx = 0, len = this.handlers.debug.length; idx < len; idx++) {
this.fireHandler( 'debug', eventName, args );
}
}
switch (eventName) {
case 'load':
this.movie = document.getElementById(this.movieId);
if (!this.movie) {
var self = this;
setTimeout( function() { self.receiveEvent('load', null); }, 10 );
return;
}
if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
var self = this;
setTimeout( function() { self.receiveEvent('load', null); }, 100 );
this.ready = true;
return;
}
this.ready = true;
this.movie.setFileTypes( this.fileTypes[0], this.fileTypes[1] );
this.movie.setPostParams( this.postParams );
this.movie.setURL( this.targetURL );
this.movie.setFileDataField( this.fileDataField );
this.movie.setHandCursor( this.handCursorEnabled );
this.movie.setMaxFileSize( this.maxFileSize );
this.movie.setMaxFiles( this.maxFiles );
this.movie.setDelayBetween( this.delayBetween );
break;
case 'mouseover':
if (this.domElement && this.cssEffects) {
this.domElement.addClass('hover');
if (this.recoverActive) this.domElement.addClass('active');
}
break;
case 'mouseout':
if (this.domElement && this.cssEffects) {
this.recoverActive = false;
if (this.domElement.hasClass('active')) {
this.domElement.removeClass('active');
this.recoverActive = true;
}
this.domElement.removeClass('hover');
}
break;
case 'mousedown':
if (this.domElement && this.cssEffects) {
this.domElement.addClass('active');
}
break;
case 'mouseup':
if (this.domElement && this.cssEffects) {
this.domElement.removeClass('active');
this.recoverActive = false;
}
break;
} 
this.fireHandler(eventName, args);
},
fireHandler: function() {
var eventName = arguments[0];
eventName = eventName.toString().toLowerCase().replace(/^on/, '');
var args = [ this ];
for (var idx = 1; idx < arguments.length; idx++) args.push( arguments[idx] );
if (this.handlers[eventName]) {
for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
var func = this.handlers[eventName][idx];
if (typeof(func) == 'function') {
func.apply(window, args);
}
else if ((typeof(func) == 'object') && (func.length == 2)) {
func[0][ func[1] ].apply(func[0], args);
}
else if (typeof(func) == 'string') {
window[func].apply(window, args);
}
} 
} 
}
};
var ZeroClipboard = {
version: "1.0.5",
clients: {}, 
moviePath: 'ZeroClipboard.swf', 
nextId: 1, 
$: function(thingy) {
if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
if (!thingy.addClass) {
thingy.hide = function() { this.style.display = 'none'; };
thingy.show = function() { this.style.display = ''; };
thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
thingy.removeClass = function(name) {
this.className = this.className.replace( new RegExp("(^|\\s+)" + name + "(\\s+|$)"), "").replace(/^\s+|\s+$/g, '');
};
thingy.hasClass = function(name) {
return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
};
}
return thingy;
},
setMoviePath: function(path) {
this.moviePath = path;
},
dispatch: function(id, eventName, args) {
var client = this.clients[id];
if (client) {
client.receiveEvent(eventName, args);
}
},
register: function(id, client) {
this.clients[id] = client;
},
getDOMObjectPosition: function(obj, stopObj) {
var info = {
left: 0, 
top: 0, 
width: obj.width ? obj.width : obj.offsetWidth, 
height: obj.height ? obj.height : obj.offsetHeight
};
while (obj && (obj != stopObj)) {
info.left += obj.offsetLeft;
info.top += obj.offsetTop;
obj = obj.offsetParent;
}
return info;
},
Client: function(elem) {
this.handlers = {};
this.id = ZeroClipboard.nextId++;
this.movieId = 'ZeroClipboardMovie_' + this.id;
ZeroClipboard.register(this.id, this);
if (elem) this.glue(elem);
}
};
ZeroClipboard.Client.prototype = {
id: 0, 
ready: false, 
movie: null, 
clipText: '', 
handCursorEnabled: true, 
cssEffects: true, 
handlers: null, 
glue: function(elem, appendElem, stylesToAdd) {
this.domElement = ZeroClipboard.$(elem);
var zIndex = 99;
if (this.domElement.style.zIndex) {
zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
}
if (typeof(appendElem) == 'string') {
appendElem = ZeroClipboard.$(appendElem);
}
else if (typeof(appendElem) == 'undefined') {
appendElem = document.getElementsByTagName('body')[0];
}
var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);
this.div = document.createElement('div');
var style = this.div.style;
style.position = 'absolute';
style.left = '' + box.left + 'px';
style.top = '' + box.top + 'px';
style.width = '' + box.width + 'px';
style.height = '' + box.height + 'px';
style.zIndex = zIndex;
if (typeof(stylesToAdd) == 'object') {
for (addedStyle in stylesToAdd) {
style[addedStyle] = stylesToAdd[addedStyle];
}
}
appendElem.appendChild(this.div);
this.div.innerHTML = this.getHTML( box.width, box.height );
},
getHTML: function(width, height) {
var html = '';
var flashvars = 'id=' + this.id + 
'&width=' + width + 
'&height=' + height;
if (navigator.userAgent.match(/MSIE/)) {
var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
}
else {
html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
}
return html;
},
hide: function() {
if (this.div) {
this.div.style.left = '-2000px';
}
},
show: function() {
this.reposition();
},
destroy: function() {
if (this.domElement && this.div) {
this.hide();
this.div.innerHTML = '';
var body = document.getElementsByTagName('body')[0];
try { body.removeChild( this.div ); } catch(e) {;}
this.domElement = null;
this.div = null;
}
},
reposition: function(elem) {
if (elem) {
this.domElement = ZeroClipboard.$(elem);
if (!this.domElement) this.hide();
}
if (this.domElement && this.div) {
var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
var style = this.div.style;
style.left = '' + box.left + 'px';
style.top = '' + box.top + 'px';
}
},
setText: function(newText) {
this.clipText = newText;
if (this.ready) this.movie.setText(newText);
},
addEventListener: function(eventName, func) {
eventName = eventName.toString().toLowerCase().replace(/^on/, '');
if (!this.handlers[eventName]) this.handlers[eventName] = [];
this.handlers[eventName].push(func);
},
setHandCursor: function(enabled) {
this.handCursorEnabled = enabled;
if (this.ready) this.movie.setHandCursor(enabled);
},
setCSSEffects: function(enabled) {
this.cssEffects = !!enabled;
},
receiveEvent: function(eventName, args) {
eventName = eventName.toString().toLowerCase().replace(/^on/, '');
switch (eventName) {
case 'load':
this.movie = document.getElementById(this.movieId);
if (!this.movie) {
var self = this;
setTimeout( function() { self.receiveEvent('load', null); }, 1 );
return;
}
if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
var self = this;
setTimeout( function() { self.receiveEvent('load', null); }, 100 );
this.ready = true;
return;
}
this.ready = true;
this.movie.setText( this.clipText );
this.movie.setHandCursor( this.handCursorEnabled );
break;
case 'mouseover':
if (this.domElement && this.cssEffects) {
this.domElement.addClass('hover');
if (this.recoverActive) this.domElement.addClass('active');
}
break;
case 'mouseout':
if (this.domElement && this.cssEffects) {
this.recoverActive = false;
if (this.domElement.hasClass('active')) {
this.domElement.removeClass('active');
this.recoverActive = true;
}
this.domElement.removeClass('hover');
}
break;
case 'mousedown':
if (this.domElement && this.cssEffects) {
this.domElement.addClass('active');
}
break;
case 'mouseup':
if (this.domElement && this.cssEffects) {
this.domElement.removeClass('active');
this.recoverActive = false;
}
break;
} 
if (this.handlers[eventName]) {
for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
var func = this.handlers[eventName][idx];
if (typeof(func) == 'function') {
func(this, args);
}
else if ((typeof(func) == 'object') && (func.length == 2)) {
func[0][ func[1] ](this, args);
}
else if (typeof(func) == 'string') {
window[func](this, args);
}
} 
} 
}
};
var hexcase = 0;  
var b64pad  = ""; 
var chrsz   = 8;  
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function md5_vm_test()
{
return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}
function core_md5(x, len)
{
x[len >> 5] |= 0x80 << ((len) % 32);
x[(((len + 64) >>> 9) << 4) + 14] = len;
var a =  1732584193;
var b = -271733879;
var c = -1732584194;
var d =  271733878;
for(var i = 0; i < x.length; i += 16)
{
var olda = a;
var oldb = b;
var oldc = c;
var oldd = d;
a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
a = safe_add(a, olda);
b = safe_add(b, oldb);
c = safe_add(c, oldc);
d = safe_add(d, oldd);
}
return Array(a, b, c, d);
}
function md5_cmn(q, a, b, x, s, t)
{
return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}
function core_hmac_md5(key, data)
{
var bkey = str2binl(key);
if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
var ipad = Array(16), opad = Array(16);
for(var i = 0; i < 16; i++) 
{
ipad[i] = bkey[i] ^ 0x36363636;
opad[i] = bkey[i] ^ 0x5C5C5C5C;
}
var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
return core_md5(opad.concat(hash), 512 + 128);
}
function safe_add(x, y)
{
var lsw = (x & 0xFFFF) + (y & 0xFFFF);
var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
function bit_rol(num, cnt)
{
return (num << cnt) | (num >>> (32 - cnt));
}
function str2binl(str)
{
var bin = Array();
var mask = (1 << chrsz) - 1;
for(var i = 0; i < str.length * chrsz; i += chrsz)
bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
return bin;
}
function binl2hex(binarray)
{
var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
var str = "";
for(var i = 0; i < binarray.length * 4; i++)
{
str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
}
return str;
}
function binl2b64(binarray)
{
var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var str = "";
for(var i = 0; i < binarray.length * 4; i += 3)
{
var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
| (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
|  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
for(var j = 0; j < 4; j++)
{
if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
}
}
return str;
}
var Namespace = {
create: function(path, container) {
if (!container) container = window;
while (path.match(/^(\w+)\.?/)) {
var key = RegExp.$1;
path = path.replace(/^(\w+)\.?/, "");
if (!container[key]) container[key] = {};
container = container[key];
}
return container;
},
prep: function(name, container) {
if (!container) container = window;
if (name.match(/^(.+)\.(\w+)$/)) {
var path = RegExp.$1;
name = RegExp.$2;
container = Namespace.create(path, container);
}
return { container: container, name: name };
}
};
var Class = {
create: function(name, members) {
assert(name, "Must pass name to Class.create");
if (!members) members = {};
members.__parent = null;
var ns = Namespace.prep(name);
var container = ns.container;
name = ns.name;
members.__name = name;
if (!members.__construct) members.__construct = function() {};
container[name] = members.__construct;
var static_members = members.__static;
if (static_members) {
for (var key in static_members) {
container[name][key] = static_members[key];
}
}
container[name].prototype = members;
container[name].extend = container[name].subclass = function(name, members) {
Class.subclass( this, name, members );
};
container[name].set = container[name].add = function(members) {
Class.add( this, members );
};
},
subclass: function(parent, name, members) {
assert(parent, "Must pass parent class to Class.subclass");
assert(name, "Must pass name to Class.subclass");
if (!members) members = {};
members.__name = name;
members.__parent = parent.prototype;
var ns = Namespace.prep(name);
var container = ns.container;
var subname = ns.name;
if (members.__construct) {
container[subname] = members.__construct;
}
else {
var code = parent.toString();
var args = code.substring( code.indexOf("(")+1, code.indexOf(")") );
var inner_code = code.substring( code.indexOf("{")+1, code.lastIndexOf("}") );
eval('members.__construct = container[subname] = function ('+args+') {'+inner_code+'};');
}
if (parent.prototype.__static) {
for (var key in parent.prototype.__static) {
container[subname][key] = parent.prototype.__static[key];
}
}
var static_members = members.__static;
if (static_members) {
for (var key in static_members) {
container[subname][key] = static_members[key];
}
}
container[subname].prototype = new parent();
for (var key in members) container[subname].prototype[key] = members[key];
container[subname].extend = container[subname].subclass = function(name, members) {
Class.subclass( this, name, members );
};
container[subname].set = container[subname].add = function(members) {
Class.add( this, members );
};
},
add: function(obj, members) {
for (var key in members) obj.prototype[key] = members[key];
},
require: function() {
for (var idx = 0, len = arguments.length; idx < len; idx++) {
assert( !!eval('window.' + arguments[idx]) );
}
return true;
}
};
Class.extend = Class.subclass;
Class.set = Class.add;
if (!window.assert) window.assert = function(fact, msg) {
if (!fact) return alert("ASSERT FAILED!  " + msg);
return fact;
};
var images_uri = '/effect/images';
var icons_uri = images_uri + '/icons';
var protocol = location.protocol.match(/https/i) ? 'https' : 'http';
var ua = navigator.userAgent;
var safari = !!ua.match(/Safari/);
var safari3 = safari && (!!ua.match(/Version\/[3456789]/) || window.chrome);
var safari2 = (safari && !safari3 && !window.chrome);
var ie = !!ua.match(/MSIE/);
var ie7 = ie && !!ua.match(/MSIE\s+[789]/);
var ie6 = (ie && !ie7);
var moz = !safari && !ie;
var op = !!window.opera;
var mac = !!ua.match(/Mac/i);
var ff = !!ua.match(/Firefox/i);
var ff2 = ff && !!ua.match(/Firefox\/2/);
var ff3 = ff && !!ua.match(/Firefox\/[3456789]/);
var months = [
[ 1, 'January' ], [ 2, 'February' ], [ 3, 'March' ], [ 4, 'April' ],
[ 5, 'May' ], [ 6, 'June' ], [ 7, 'July' ], [ 8, 'August' ],
[ 9, 'September' ], [ 10, 'October' ], [ 11, 'November' ],
[ 12, 'December' ]
];
var short_month_names = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 
'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
var day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
'Thursday', 'Friday', 'Saturday'];
function $(thingy) {
var obj = (typeof(thingy) == 'string') ? document.getElementById(thingy) : thingy;
if (obj && !obj.setOpacity) {
obj.hide = function() { this.style.display = 'none'; return this; };
obj.show = function() { this.style.display = ''; return this; };
obj.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; return this; };
obj.removeClass = function(name) {
var classes = this.className.split(/\s+/);
var idx = find_idx_in_array( classes, name );
if (idx > -1) {
classes.splice( idx, 1 );
this.className = classes.join(' ');
}
return this;
};
obj.setOpacity = function(opacity) {
if (opacity == 0.0) {
this.style.opacity = 1.0;
if (moz) this.style.MozOpacity = 1.0;
else if (ie) this.style.filter = "";
this.style.visibility = 'hidden';
}
else if (opacity == 1.0) {
this.style.opacity = 1.0;
if (moz) this.style.MozOpacity = 1.0;
else if (ie) this.style.filter = "";
this.style.visibility = 'visible';
}
else {
this.style.opacity = opacity;
if (moz) this.style.MozOpacity = opacity;
else if (ie) this.style.filter = "alpha(opacity=" + parseInt(opacity * 100, 10) + ")";
this.style.visibility = 'visible';
}
return this;
};
}
return obj;
}
function parseQueryString(queryString) {
var pair = null;
var queryObject = new Object();
queryString = queryString.replace(/^.*\?(.+)$/,'$1');
while ((pair = queryString.match(/(\w+)=([^\&]*)\&?/)) && pair[0].length) {
queryString = queryString.substring( pair[0].length );
pair[2] = unescape(pair[2]);
if (/^\-?\d+$/.test(pair[2])) pair[2] = parseInt(pair[2], 10);
if (typeof(queryObject[pair[1]]) != 'undefined') {
always_array( queryObject, pair[1] );
array_push( queryObject[pair[1]], pair[2] );
}
else queryObject[pair[1]] = pair[2];
}
return queryObject;
}
function composeQueryString(queryObj) {
var qs = '';
for (var key in queryObj) {
var values = always_array(queryObj[key]);
for (var idx = 0, len = values.length; idx < len; idx++) {
qs += (qs.length ? '&' : '?') + escape(key) + '=' + escape(values[idx]);
}
}
return qs;
}
function spacer(width, height) {
return '<img src="'+images_uri+'/spacer.gif" width="'+width+'" height="'+height+'">';
}
function solidify(obj) {
obj.style.opacity = '1.0';
if (moz) obj.style.MozOpacity = '1.0';
else if (ie) obj.style.filter = '';
}
function transify(obj) {
obj.style.opacity = '0.5';
if (moz) obj.style.MozOpacity = '0.5';
else if (ie) obj.style.filter = 'alpha(opacity=50)';
}
function trans_icon(name, code) {
var size = 16;
var html = '<a href="javascript:void(' + code + ')">';
html += '<img src="'+icons_uri+'/'+name+'.gif" width='+size+' height='+size+' border=0';
html += ' style="opacity:0.5; moz-opacity:0.5; filter:alpha(opacity=50);"';
html += ' onMouseOver="solidify(this)"';
html += ' onMouseOut="transify(this)"';
html += '>';
html += '</a>';
return html;
}
function icon(name, label, code, status_text, id, hspace) {
if (!window.icons_uri) return 'icons_uri not set!';
var html = '';
var ahref = '';
var size = 16;
if (typeof(label) == 'undefined') label = '';
else label = '' + label;
if (!id) id = '';
if (!status_text) status_text = '';
if (name.indexOf('_mini') > -1) size = 14;
if (!name.match(/\.\w+$/)) name += '.gif';
if (label) {
html += '<table cellspacing=0 cellpadding=0 border=0><tr><td style="padding:0px; background:transparent;" valign=center>';
}
if (code) {
if (code.toString().match(/^(\#|\/|http\:\/\/)/)) ahref = '<a href="' + code + '"';
else ahref = '<a href="javascript:void(' + code + ')"';
ahref += ' title="' + status_text + '">';
html += ahref;
}
html += '<img id="'+id+'" class="png" src="'+png(icons_uri+'/'+name, true)+'" width='+size+' height='+size+' border=0>';
if (code) html += '</a>';
if (hspace) html += '&nbsp;';
if (label) {
html += '</td><td style="padding:0px;  background:transparent;" width=4>'+spacer(4,1)+'</td><td style="padding:0px; background:transparent;" valign=center>';
if (code) html += ahref;
html += label;
if (code) html += '</a>';
html += '</td></tr></table>';
}
return html;
}
function code_link(code, html, status_text) {
if (!status_text) status_text = html.toString().replace(/<.+?>/g, "");
return '<a href="javascript:void(' + code + ')"' + 
' title="' + status_text + '"' + 
' style="cursor:pointer"' + 
'>' + html + '</a>';
}
function set_section_visibility(id, visible) {
var div = document.getElementById(id);
var current_state = div.style.display;
div.style.display = visible ? 'block' : 'none';
var sc = document.getElementById('sc_' + id);
if (sc) {
var new_icon_name = visible ? 'arrow-down' : 'arrow-right';
if (sc.src.indexOf('_mini') > -1) new_icon_name += '_mini';
sc.src = icons_uri + '/' + new_icon_name + '.png';
}
if (visible && !div.innerHTML.length && div.getAttribute('onExpand')) 
eval( div.getAttribute('onExpand') );
}
function toggle_section(id) {
var div = document.getElementById(id);
var current_state = div.style.display;
div.style.display = (current_state == 'block') ? 'none' : 'block';
var sc = document.getElementById('sc_' + id);
if (sc) {
var new_icon_name = (current_state == 'block') ? 'arrow-right' : 'arrow-down';
if (sc.src.indexOf('_mini') > -1) new_icon_name += '_mini';
sc.src = icons_uri + '/' + new_icon_name + '.png';
}
if (!div.innerHTML.length && div.getAttribute('onExpand')) 
eval( div.getAttribute('onExpand') );
}
function section_control(id, expanded) {
return icon(
expanded ? 'arrow-down.png' : 'arrow-right.png', '', '', 'Toggle Section View', 'sc_' + id
);
}
function get_text_from_bytes(bytes) {
if (bytes >= 1024) {
bytes = parseInt( (bytes / 1024) * 10, 10 ) / 10;
if (bytes >= 1024) {
bytes = parseInt( (bytes / 1024) * 10, 10 ) / 10;
if (bytes >= 1024) {
bytes = parseInt( (bytes / 1024) * 10, 10 ) / 10;
return bytes + ' GB';
} else return bytes + ' MB';
}
else return bytes + ' K';
}
else return bytes + ' bytes';
}
function csv_to_hash(csv) {
if (!csv.length) return {};
assert( arguments.length == 1, "Wrong number of arguments sent to csv_to_hash (" + arguments.length + ")" );
var list = csv.split(/\,\s*/);
var hash = {};
for (var idx = 0, len = list.length; idx < len; idx++) {
hash[ list[idx] ] = 1;
}
return hash;
}
function num_keys(hash) {
var count = 0;
for (var a in hash) count++;
return count;
}
function reverse_hash(a) {
var c = {};
for (var key in a) {
c[ a[key] ] = key;
}
return c;
}
function progress_bar(args) {
if (!args.counter_max) args.counter_max = 1;
var x = parseInt( (args.counter * args.width) / args.counter_max, 10 );
if (x < 0) x = 0;
if (x > args.width) x = args.width;
var html = '<table cellspacing=0 cellpadding=0 border=0><tr><td valign=center';
if (!x) html += ' background="'+images_uri+'/b2_loop.gif"';
html += '>';
html += '<nobr>';
if (x > 4) {
var xtemp = x - 4;
html += '<img src="'+images_uri+'/a1.gif" width=2 height='+args.height+'>';
html += '<img src="'+images_uri+'/a2.gif" width='+xtemp+' height='+args.height+'>';
html += '<img src="'+images_uri+'/a3.gif" width=2 height='+args.height+'>';
}
if (x < args.width - 4) {
var xtemp = (args.width - x) - 4;
var b2 = x ? "b2" : "spacer";
html += '<img src="'+images_uri+'/b1.gif" width=2 height='+args.height+'>';
html += '<img src="'+images_uri+'/'+b2+'.gif" width='+xtemp+' height='+args.height+'>';
html += '<img src="'+images_uri+'/b3.gif" width=2 height='+args.height+'>';
}
html += '</nobr>';
html += '</td>';
if (args.show_percent) {
var pct = parseInt( (args.counter * 100) / args.counter_max, 10 );
if (pct < 0) pct = 0;
if (pct > 100) pct = 100;
html += '<td valign=center>&nbsp;' + pct + '%</td>';
}
html += '</tr></table>';
return html;
}
var g_unique_id = 772; 
function get_unique_id() {
g_unique_id++;
return g_unique_id;
}
function substitute(text, args) {
if (!text) text = "";
if (!args) args = {};
while (text.indexOf('[') > -1) {
var open_bracket = text.indexOf('[');
var close_bracket = text.indexOf(']');
var before = text.substring(0, open_bracket);
var after = text.substring(close_bracket + 1, text.length);
var name = text.substring( open_bracket + 1, close_bracket );
var value = '';
if (name.indexOf('/') == 0) value = lookup_path(name, args);
else if (typeof(args[name]) != 'undefined') value = args[name];
else if (!(/^\w+$/.test(name))) value = eval(name);
else value = '[' + name + ']';
text = before + value + after;
} 
return text;
}
function time_now() {
var now = new Date();
return parseInt( now.getTime() / 1000, 10 );
}
function ucfirst(text) {
return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
}
function text_to_html(text) {
if (!text) text = "";
return encode_entities(text).toString().replace(/\n/g, "\n<br>");
}
function html_to_text(html) {
html = html.replace(/<\/(p|div|ul|ol|li|table|tr|dl|dd|dt|h\d)>/ig, "__ChBREAk__");
html = html.replace(/<br\/?>/ig, "__ChBREAk__");
html = html.replace(/<.+?>/g, "");
html = html.replace(/__ChBREAk__/g, "<br/>");
return html;
}
function image_rollover(img) {
img.src = img.src.replace(/_up(\.\w+)$/, "_over$1");
}
function image_rollout(img) {
img.src = img.src.replace(/_over(\.\w+)$/, "_up$1");
}
function commify(number) {
if (!number) number = 0;
number = '' + number;
if (number.length > 3) {
var mod = number.length % 3;
var output = (mod > 0 ? (number.substring(0,mod)) : '');
for (i=0 ; i < Math.floor(number.length / 3); i++) {
if ((mod == 0) && (i == 0))
output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
else
output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
}
return (output);
}
else return number;
}
function short_float(value) {
if (!value) value = 0;
return value.toString().replace(/^(\-?\d+\.[0]*\d{2}).*$/, '$1');
}
function pct(count, max) {
var pct = (count * 100) / (max || 1);
if (!pct.toString().match(/^\d+(\.\d+)?$/)) { pct = 0; }
return '' + short_float( pct ) + '%';
}
function hash_to_query(hash) {
var str = '';
for (var key in hash) {
if (str.length > 0) str += '&';
str += key + '=' + escape(hash[key]);
}
return str;
}
function get_text_from_seconds(sec, abbrev, no_secondary) {
var neg = '';
sec = parseInt(sec, 10);
if (sec<0) { sec =- sec; neg = '-'; }
var p_text = abbrev ? "sec" : "second";
var p_amt = sec;
var s_text = "";
var s_amt = 0;
if (sec > 59) {
var min = parseInt(sec / 60, 10);
sec = sec % 60; 
s_text = abbrev ? "sec" : "second"; 
s_amt = sec; 
p_text = abbrev ? "min" : "minute"; 
p_amt = min;
if (min > 59) {
var hour = parseInt(min / 60, 10);
min = min % 60; 
s_text = abbrev ? "min" : "minute"; 
s_amt = min; 
p_text = abbrev ? "hr" : "hour"; 
p_amt = hour;
if (hour > 23) {
var day = parseInt(hour / 24, 10);
hour = hour % 24; 
s_text = abbrev ? "hr" : "hour"; 
s_amt = hour; 
p_text = "day"; 
p_amt = day;
if (day > 29) {
var month = parseInt(day / 30, 10);
day = day % 30; 
s_text = "day"; 
s_amt = day; 
p_text = abbrev ? "mon" : "month"; 
p_amt = month;
} 
} 
} 
} 
var text = p_amt + "&nbsp;" + p_text;
if ((p_amt != 1) && !abbrev) text += "s";
if (s_amt && !no_secondary) {
text += ", " + s_amt + "&nbsp;" + s_text;
if ((s_amt != 1) && !abbrev) text += "s";
}
return(neg + text);
}
function get_nice_remaining_time(epoch_start, epoch_now, counter, counter_max, abbrev) {
if (counter == counter_max) return 'Complete';
if (counter == 0) return 'n/a';
var sec_remain = parseInt(((counter_max - counter) * (epoch_now - epoch_start)) / counter, 10);
return get_text_from_seconds( sec_remain, abbrev );
}
function dumper(_obj, _max_levels, _indent) {
if (typeof(_max_levels) == 'undefined') _max_levels = 0;
var _text = '';
if (!_indent) {
if (typeof(_obj) == 'object' && typeof(_obj.length) != 'undefined') _text += "[\n";
else _text += "{\n";
_indent = 1;
}
var _indentStr = '';
for (var _k=0; _k<_indent; _k++) _indentStr += "\t";
if (typeof(_obj) == 'object' && typeof(_obj.length) != 'undefined') {
for (var _a = 0; _a < _obj.length; _a++) {
if (typeof(_obj[_a]) != 'function') {
if (typeof(_obj.length) != 'undefined') _text += _indentStr;
else _text += _indentStr + _a + ": ";
if (typeof(_obj[_a]) == 'object') {
if (_obj[_a] == null) {
_text += "null,\n";
}
else if (typeof(_obj[_a].length) != 'undefined') {
if (_max_levels) _text += "[\n" + dumper( _obj[_a], _max_levels - 1, _indent + 1 ) + _indentStr + "],\n";
else _text += "[...],\n";
}
else {
if (_max_levels) _text += "{\n" + dumper( _obj[_a], _max_levels - 1, _indent + 1 ) + _indentStr + "},\n";
else _text += "{...},\n";
}
}
else if (typeof(_obj[_a]) == 'number') _text += _obj[_a] + ",\n";
else _text += '"' + _obj[_a] + '",' + "\n";
} 
} 
} 
else {
for (var _a in _obj) {
if (typeof(_obj[_a]) != 'function') {
if (typeof(_obj.length) != 'undefined') _text += _indentStr;
else _text += _indentStr + _a + ": ";
if (typeof(_obj[_a]) == 'object') {
if (_obj[_a] == null) {
_text += "null,\n";
}
else if (typeof(_obj[_a].length) != 'undefined') {
if (_max_levels) _text += "[\n" + dumper( _obj[_a], _max_levels - 1, _indent + 1 ) + _indentStr + "],\n";
else _text += "[...],\n";
}
else {
if (_max_levels) _text += "{\n" + dumper( _obj[_a], _max_levels - 1, _indent + 1) + _indentStr + "},\n";
else _text += "{...},\n";
}
}
else if (typeof(_obj[_a]) == 'number') _text += _obj[_a] + ",\n";
else _text += '"' + _obj[_a] + '",' + "\n";
} 
} 
} 
if (_indent == 1) {
if (typeof(_obj) == 'object' && typeof(_obj.length) != 'undefined') _text += "]\n";
else _text += "}\n";
}
return _text;
}
function object_tree( title, obj, expanded ) {
var html = '';
var id = 's_' + get_unique_id();
html += '<table cellspacing=0 cellpadding=0 onClick="toggle_section(\'' + id + '\')"><tr>';
html += '<td style="padding:0px" width=16>' + section_control(id, expanded) + '</td>';
html += '<td style="padding:0px" width=16>' + icon('folder') + '</td><td style="padding:0px" width=2>' + spacer(2,1) + '</td>';
html += '<td style="padding:0px"><font class=section_title><nobr><font color=blue style="cursor:pointer"><b>'+title+'</b></font></nobr></font></td>';
html += '</tr></table>';
html += '<div id="'+id+'" style="display:' + (expanded ? 'block' : 'none') + '">';
html += '<table cellspacing=0 cellpadding=0><tr><td style="padding:0px" width=16>&nbsp;</td><td style="padding:0px">';
html += '<table>';
var sorted_keys = hash_keys_to_array(obj).sort();
for (var idx in sorted_keys) {
var key = sorted_keys[idx];
if (typeof(obj[key]) == 'object') {
html += '<tr><td style="padding:0px">';
html += object_tree( key, obj[key], 0 );
html += '</td></tr>';
}
}
for (var idx in sorted_keys) {
var key = sorted_keys[idx];
if (typeof(obj[key]) != 'object') {
html += '<tr><td style="padding:0px">';
html += '<table cellspacing=0 cellpadding=0><tr><td style="padding:0px" width=16>&nbsp;</td><td style="padding:0px">';
html += icon( 'file', '<b>' + key.toString().replace(/^\W+/, "") + ':</b> ' + obj[key] );
html += '</td></tr></table>';
html += '</td></tr>';
}
}
html += '</table>';
html += '</td></tr></table>';
html += '</div>';
return html;
}
function this_hour() {
var now = new Date();
var then = new Date(
now.getFullYear(),
now.getMonth(),
now.getDate(),
now.getHours(),
0, 0, 0 );
return parseInt( then.getTime() / 1000, 10 );
}
function today_midnight() {
var now = new Date();
var then = new Date(
now.getFullYear(),
now.getMonth(),
now.getDate(),
0, 0, 0, 0 );
return parseInt( then.getTime() / 1000, 10 );
}
function yesterday_midnight() {
var midnight = today_midnight();
var yesterday = new Date( (midnight - 1) * 1000 );
var then = new Date(
yesterday.getFullYear(),
yesterday.getMonth(),
yesterday.getDate(),
0, 0, 0, 0 );
return parseInt( then.getTime() / 1000, 10 );
}
function this_month_midnight() {
var now = new Date();
var then = new Date(
now.getFullYear(),
now.getMonth(),
1, 0, 0, 0, 0 );
return parseInt( then.getTime() / 1000, 10 );
}
function last_month_midnight() {
var this_month = this_month_midnight();
var last_month = new Date( (this_month - 1) * 1000 );
var then = new Date(
last_month.getFullYear(),
last_month.getMonth(),
1, 0, 0, 0, 0 );
return parseInt( then.getTime() / 1000, 10 );
}
function get_date_args(epoch) {
var date = new Date( epoch * 1000 );
var args = {
year: date.getFullYear(),
mon: date.getMonth() + 1,
mday: date.getDate(),
hour: date.getHours(),
min: date.getMinutes(),
sec: date.getSeconds(),
msec: date.getMilliseconds()
};
args.yyyy = args.year;
if (args.mon < 10) args.mm = "0" + args.mon; else args.mm = args.mon;
if (args.mday < 10) args.dd = "0" + args.mday; else args.dd = args.mday;
if (args.hour < 10) args.hh = "0" + args.hour; else args.hh = args.hour;
if (args.min < 10) args.mi = "0" + args.min; else args.mi = args.min;
if (args.sec < 10) args.ss = "0" + args.sec; else args.ss = args.sec;
if (args.hour >= 12) {
args.ampm = 'pm';
args.hour12 = args.hour - 12;
if (!args.hour12) args.hour12 = 12;
}
else {
args.ampm = 'am';
args.hour12 = args.hour;
if (!args.hour12) args.hour12 = 12;
}
return args;
}
function get_time_from_args(args) {
var then = new Date(
args.year,
args.mon - 1,
args.mday,
args.hour,
args.min,
args.sec,
0
);
return parseInt( then.getTime() / 1000, 10 );
}
function yyyy(epoch) {
if (!epoch) epoch = time_now();
var args = get_date_args(epoch);
return args.year;
}
function yyyy_mm_dd(epoch) {
if (!epoch) epoch = time_now();
var args = get_date_args(epoch);
return args.yyyy + '/' + args.mm + '/' + args.dd;
}
function normalize_time(epoch, zero_args) {
var args = get_date_args(epoch);
for (key in zero_args) args[key] = zero_args[key];
if (!args['mday']) args['mday'] = 1;
return get_time_from_args(args);
}
function find_iframe_doc(id) {
var domObj = $(id);
if (!domObj) return null;
var doc = null;
if (domObj.contentDocument)	doc = domObj.contentDocument; 
else if (domObj.contentWindow) doc = domObj.contentWindow.document; 
else if (domObj.document) doc = eval(domObj.id+".document"); 
return doc;
}
function rand_array(arr) {
return arr[ parseInt(Math.random() * arr.length, 10) ];
}
function find_elem_idx(arr, elem) {
for (var idx = 0, len = arr.length; idx < len; idx++) {
if (arr[idx] == elem) return idx;
}
return -1; 
}
function remove_from_array(arr, elem) {
var idx = find_elem_idx(arr, elem);
if (idx > -1) {
array_splice( arr, idx, 1 );
return 1;
}
return 0;
}
function remove_all_from_array(arr, elem) {
var done = 0;
var found = 0;
while (!done) {
var idx = find_elem_idx(arr, elem);
if (idx > -1) { array_splice(arr, idx, 1); found++; }
else { done = 1; }
}
return found;
}
function getInnerWindowSize(dom) {
if (!dom) dom = window;
var myWidth = 0, myHeight = 0;
if( typeof( dom.innerWidth ) == 'number' ) {
myWidth = dom.innerWidth;
myHeight = dom.innerHeight;
}
else if( dom.document.documentElement && ( dom.document.documentElement.clientWidth || dom.document.documentElement.clientHeight ) ) {
myWidth = dom.document.documentElement.clientWidth;
myHeight = dom.document.documentElement.clientHeight;
}
else if( dom.document.body && ( dom.document.body.clientWidth || dom.document.body.clientHeight ) ) {
myWidth = dom.document.body.clientWidth;
myHeight = dom.document.body.clientHeight;
}
return { width: myWidth, height: myHeight };
}
function getScrollXY(dom) {
if (!dom) dom = window;
var scrOfX = 0, scrOfY = 0;
if( typeof( dom.pageYOffset ) == 'number' ) {
scrOfY = dom.pageYOffset;
scrOfX = dom.pageXOffset;
} else if( dom.document.body && ( dom.document.body.scrollLeft || dom.document.body.scrollTop ) ) {
scrOfY = dom.document.body.scrollTop;
scrOfX = dom.document.body.scrollLeft;
} else if( dom.document.documentElement && ( dom.document.documentElement.scrollLeft || dom.document.documentElement.scrollTop ) ) {
scrOfY = dom.document.documentElement.scrollTop;
scrOfX = dom.document.documentElement.scrollLeft;
}
return { x: scrOfX, y: scrOfY };
}
function getScrollMax(dom) {
if (!dom) dom = window;
var myWidth = 0, myHeight = 0;
if (dom.document.body.scrollHeight) {
myWidth = dom.document.body.scrollWidth;
myHeight = dom.document.body.scrollHeight;
}
else if (dom.document.documentElement.scrollHeight) {
myWidth = dom.document.documentElement.scrollWidth;
myHeight = dom.document.documentElement.scrollHeight;
}
return { width: myWidth, height: myHeight };
}
function safe_call(name, arg1, arg2, arg3) {
if (window[name]) return window[name](arg1, arg2, arg3);
else return null;
}
function hires_time_now() {
var now = new Date();
return ( now.getTime() / 1000 );
}
function fire_callback(callback) {
var args = array_slice( arguments, 1 );
if (isa_array(callback)) {
var obj = callback[0];
var func = callback[1];
return obj[func].apply(obj, args);
}
else if (typeof(callback) == 'function') {
return callback.apply(null, args);
}
else {
return window[callback].apply(null, args);
}
}
function fire_hook(name) {
if (session.hooks[name]) {
var args = array_slice(arguments, 1);
array_unshift( args, session.hooks[name] );
delete session.hooks[name];
return fire_callback.apply(window, args);
}
return true; 
}
function str_value(str) {
if (typeof(str) == 'undefined') str = '';
else if (str === null) str = '';
return '' + str;
}
function pluralize(word, num) {
if (num != 1) return word + 's'; else return word;
}
function get_menu_value(id) {
var menu = $(id);
if (!menu) return '';
return menu.options[menu.selectedIndex].value;
}
function get_menu_text(id) {
var menu = $(id);
if (!menu) return '';
return menu.options[menu.selectedIndex].text;
}
function set_menu_value(id, value, auto_add) {
var menu = $(id);
if (!menu) return false;
for (var idx = 0, len = menu.options.length; idx < len; idx++) {
if (menu.options[idx].value == value) {
menu.selectedIndex = idx;
return true;
}
}
if (auto_add) {
menu.options[menu.options.length] = new Option(value, value);
menu.selectedIndex = menu.options.length - 1;
return true;
}
return false;
}
function disable_menu(id) {
var menu = $(id);
if (!menu) return false;
menu.disabled = true;
menu.setAttribute( 'disabled', 'disabled' );
}
function enable_menu(id) {
var menu = $(id);
if (!menu) return false;
menu.disabled = false;
menu.setAttribute( 'disabled', '' );
}
function populate_menu(id, items, sel_value) {
var menu = $(id);
if (!menu) return false;
menu.options.length = 0;
for (var idx = 0, len = items.length; idx < len; idx++) {
var item = items[idx];
var item_name = isa_array(item) ? item[0] : item;
var item_value = isa_array(item) ? item[1] : item;
menu.options[ menu.options.length ] = new Option( item_name, item_value );
if (item_value == sel_value) menu.selectedIndex = idx;
} 
}
function dirname(path) {
return path.toString().replace(/\/$/, "").replace(/\/[^\/]+$/, "");
}
function basename(path) {
return path.toString().replace(/\/$/, "").replace(/^(.*)\/([^\/]+)$/, "$2");
}
function strip_ext(path) {
return path.toString().replace(/\.\w+$/, "");
}
function mm_dd_yyyy(epoch, ch) {
if (!ch) ch = '/';
var dargs = get_date_args(epoch);
if (dargs.mon < 10) dargs.mon = '0' + dargs.mon;
if (dargs.mday < 10) dargs.mday = '0' + dargs.mday;
return dargs.year + ch + dargs.mon + ch + dargs.mday;
}
function get_nice_date(epoch, abbrev) {
var dargs = get_date_args(epoch);
var month = months[dargs.mon - 1][1];
if (abbrev) month = month.substring(0, 3);
return month + ' ' + dargs.mday + ', ' + dargs.year;
}
function get_nice_time(epoch, secs) {
var dargs = get_date_args(epoch);
if (dargs.min < 10) dargs.min = '0' + dargs.min;
if (dargs.sec < 10) dargs.sec = '0' + dargs.sec;
var output = dargs.hour12 + ':' + dargs.min;
if (secs) output += ':' + dargs.sec;
output += ' ' + dargs.ampm.toUpperCase();
return output;
}
function get_nice_date_time(epoch, secs) {
return get_nice_date(epoch) + ' ' + get_nice_time(epoch, secs);
}
function get_short_date_time(epoch) {
return get_nice_date(epoch, true) + ' ' + get_nice_time(epoch, false);
}
function get_midnight(date) {
var midnight = parseInt( date.getTime() / 1000, 10 );
midnight -= (date.getHours() * 3600);
midnight -= (date.getMinutes() * 60);
midnight -= date.getSeconds();
return midnight;
}
function get_relative_date(epoch, show_time) {
var mydate;
var now = new Date();
var now_epoch = parseInt( now.getTime() / 1000, 10 );
if (epoch) {
mydate = new Date( epoch * 1000 );
epoch = parseInt( epoch, 10 );
}
else {
mydate = new Date();
epoch = parseInt( mydate.getTime() / 1000, 10 );
}
var full_date_string = mydate.toLocaleString();
var html = '<span title="'+full_date_string+'">';
var mydate_midnight = get_midnight( mydate );
var now_midnight = get_midnight( now );
if (mydate_midnight > now_midnight) {
var mm = mydate.getMonth() + 1; 
var dd = mydate.getDate(); 
var yyyy = mydate.getFullYear();
html += short_month_names[ mydate.getMonth() ] + ' ' + dd;
if (yyyy != now.getFullYear()) html += ', ' + yyyy;
}
else if (mydate_midnight == now_midnight) {
if (show_time) {
if (now_epoch - epoch < 1) {
html += 'Now';
}
else if (now_epoch - epoch < 60) {
html += 'A Moment Ago';
}
else if (now_epoch - epoch < 3600) {
var min = parseInt( (now_epoch - epoch) / 60, 10 );
html += min + ' Minute';
if (min != 1) html += 's';
html += ' Ago';
}
else if (now_epoch - epoch <= 12 * 3600) {
var hr = parseInt( (now_epoch - epoch) / 3600, 10 );
html += hr + ' Hour';
if (hr != 1) html += 's';
html += ' Ago';
}
else {
html += 'Earlier Today';
if (show_time) html += ', ' + get_short_time(epoch);
}
}
else html += 'Today';
}
else if (now_midnight - mydate_midnight == 86400) {
html += 'Yesterday';
if (show_time) html += ', ' + get_short_time(epoch);
}
else if ((now_midnight - mydate_midnight < 86400 * 7) && (mydate.getDay() < now.getDay())) {
html += day_names[ mydate.getDay() ];
if (show_time) html += ', ' + get_short_time(epoch);
}
else if ((mydate.getMonth() == now.getMonth()) && (mydate.getFullYear() == now.getFullYear())) {
var mydate_sunday = mydate_midnight - (mydate.getDay() * 86400);
var now_sunday = now_midnight - (now.getDay() * 86400);
if (now_sunday - mydate_sunday == 86400 * 7) {
html += 'Last ' + day_names[ mydate.getDay() ];
}
else if (now_sunday - mydate_sunday == 86400 * 14) {
html += 'Two Weeks Ago';
}
else if (now_sunday - mydate_sunday == 86400 * 21) {
html += 'Three Weeks Ago';
}
else {
html += 'Four Weeks Ago';
}
}
else {
var mm = mydate.getMonth() + 1; 
var dd = mydate.getDate(); 
var yyyy = mydate.getFullYear();
html += short_month_names[ mydate.getMonth() ] + ' ' + dd;
if (yyyy != now.getFullYear()) html += ', ' + yyyy;
}
html += '</span>';
return html;
}
function get_short_time(epoch, show_msec) {
var mydate;
if (epoch) mydate = new Date( epoch * 1000 );
else mydate = new Date();
var ampm = 'AM';
var hh = mydate.getHours();
if (hh >= 12) { ampm = 'PM'; hh -=12; }
if (hh == 0) hh = 12;
var mi = mydate.getMinutes(); if (mi < 10) mi = "0" + mi;
var ss = mydate.getSeconds(); if (ss < 10) ss = "0" + ss;
var msec = mydate.getMilliseconds();
if (msec < 10) msec = "00" + msec;
else if (msec < 100) msec = "0" + msec;
var str = hh+':'+mi;
if (show_msec) str += ':'+ss+'.'+msec;
str += '&nbsp;'+ampm;
return str;
}
function load_script(url) {
var scr = document.createElement('SCRIPT');
scr.type = 'text/javascript';
scr.src = url;
document.getElementsByTagName('HEAD')[0].appendChild(scr);
}
function safe_query_add(url, str) {
if (url.match(/\?/)) url += '&'; else url += '?';
return url + str;
}
function trim(str) {
return str.toString().replace(/^\s+/, "").replace(/\s+$/, "");
}
function compose_attribs(attribs) {
var html = '';
if (attribs) {
for (var key in attribs) {
html += " " + key + "=\"" + attribs[key] + "\"";
}
}
return html;
}
function compose_style(attribs) {
var html = '';
if (attribs) {
for (var key in attribs) {
html += " " + key + ":" + attribs[key] + ";";
}
}
return html;
}
function find_idx_in_array(arr, elem) {
for (var idx = 0, len = arr.length; idx < len; idx++) {
if (arr[idx] == elem) return idx;
}
return -1;
}
function find_in_array(arr, elem) {
for (var idx = 0, len = arr.length; idx < len; idx++) {
if (arr[idx] == elem) return true;
}
return false;
}
function delete_from_array(arr, elem) {
var idx = find_idx_in_array(arr, elem);
if (idx > -1) arr.splice(idx, 1);
}
function tiptext_field(id, class_name, attribs, style, value, tip) {
var html = '';
if (!attribs) attribs = {};
if (!style) style = {};
value = str_value(value);
if (value.length == 0) {
value = tip;
if (class_name.length) class_name += ' ';
class_name += 'tiptext_empty';
}
html += '<input type="text" class="'+class_name+'" id="'+id+'" style="'+compose_style(style)+'" value="'+escape_text_field_value(value)+'" title="'+tip+'" onBlur="tiptext_blur(this)" onFocus="tiptext_focus(this)" '+compose_attribs(attribs)+'>';
return html;
}
function tiptext_focus(obj) {
if (obj.value == obj.getAttribute('title')) obj.value = '';
$(obj).removeClass('tiptext_empty');
}
function tiptext_blur(obj) {
if (!obj.value.length) {
obj.value = obj.getAttribute('title');
$(obj).addClass('tiptext_empty');
}
else if (obj.value != obj.getAttribute('title')) {
$(obj).removeClass('tiptext_empty');
}
}
function tiptext_value(id) {
var value = get_clean_field_value(id);
if (value == $(id).getAttribute('title')) value = '';
return value;
}
function tiptext_set(id, value) {
var obj = $(id); if (!obj) return;
value = str_value(value);
if (value.length > 0) {
tiptext_focus(obj);
obj.value = value;
}
else {
obj.value = '';
tiptext_blur(obj);
}
}
function get_clean_field_value(id) {
return trim( $(id).value );
}
function validate_url(url) {
return !!url.match(/^(https?\:\/\/)[\w\-\.\/]+(\?\S+)?$/);
}
function format_price_usd(value, show_usd) {
var matches = value.toString().match(/^(\d+)\.(\d+)$/);
if (matches) {
if (matches[2].length < 2) matches[2] = '0' + matches[2];
else if (matches[2].length > 2) matches[2] = matches[2].substring(0, 2);
return '$' + commify(matches[1]) + '.' + matches[2] + (show_usd ? ' USD' : '');
}
else return '$' + commify(value) + '.00' + (show_usd ? ' USD' : '');
}
function pretty_print_csv(csv) {
csv = str_value(csv);
return csv.toString().replace(/\,(\S)/g, ", $1");
}
function blur_all_text_fields() {
var fields = document.getElementsByTagName('input');
for (var idx = 0, len = fields.length; idx < len; idx++) {
var field = fields[idx];
if (field.type == 'text') field.blur();
}
}
function escape_text_field_value(text) {
text = encode_attrib_entities( str_value(text) );
if (ie && text.replace) text = text.replace(/\&apos\;/g, "'");
return text;
}
function escape_textarea_value(text) {
text = encode_entities( str_value(text) );
if (ie && text.replace) text = text.replace(/\&apos\;/g, "'");
return text;
}
function selectLine(input, lineNum) {
lineNum--; 
var lines = input.value.split(/\n/);
var before = '';
for (var idx = 0, len = lines.length; idx < len; idx++) {
if (idx == lineNum) idx = len;
else before += lines[idx] + "\n";
}
setSelectionRange( input, before.length, before.length + lines[lineNum].length + 1 );
}
function selectAllText(input) {
if (input.setSelectionRange) {
input.focus();
input.setSelectionRange(0, input.value.length);
}
else if (input.createTextRange) {
var range = input.createTextRange();
range.collapse(true);
range.moveEnd('character', input.value.length);
range.moveStart('character', 0);
range.select();
}
return true;
}
function setSelectionRange(input, selectionStart, selectionEnd) {
if (input.setSelectionRange) {
input.focus();
input.setSelectionRange(selectionStart, selectionEnd);
}
else if (input.createTextRange) {
var range = input.createTextRange();
range.collapse(true);
range.moveEnd('character', selectionEnd);
range.moveStart('character', selectionStart);
range.select();
}
}
function getSelectedText(input) {
if (input.setSelectionRange) {
return input.value.substring( input.selectionStart, input.selectionEnd );
}
else if (document.selection) {
var range = document.selection.createRange();
if (range.parentElement() == input) {
return range.text;
}
}
return '';
}
function indentSelectedText(input, direction) {
if (input.setSelectionRange) {
var selectionStart = input.selectionStart;
var selectionEnd = input.selectionEnd;
while ((selectionStart > 0) && (input.value.substring(selectionStart - 1, selectionStart) != "\n"))
selectionStart--;
while ((selectionEnd < input.value.length) && !input.value.substring(selectionEnd - 1, selectionEnd).match(/[\r\n]/))
selectionEnd++;
input.setSelectionRange( selectionStart, selectionEnd );
input.focus();
}
var lines = getSelectedText(input).split(/\n/);
var text = '';
for (var idx = 0, len = lines.length; idx < len - 1; idx++) {
var line = lines[idx];
if (direction == 1) text += "\t" + line;
else if (direction == -1) text += line.replace(/^(\t| {4})/, '');
if (idx < len - 1) text += "\n";
}
replaceSelection(input, text);
}
function surroundSelection(input, left, right) {
if (!right) right = left;
var text = getSelectedText(input);
replaceSelection(input, left + text + right);
if (!text.length && input.setSelectionRange) {
input.setSelectionRange(input.selectionStart - right.length, input.selectionEnd - right.length);
}
}
function replaceSelection (input, replaceString) {
var oldScroll = input.scrollTop;
if (input.setSelectionRange) {
var selectionStart = input.selectionStart;
var selectionEnd = input.selectionEnd;
input.value = input.value.substring(0, selectionStart)+ replaceString + input.value.substring(selectionEnd);
if (selectionStart != selectionEnd){ 
setSelectionRange(input, selectionStart, selectionStart + 	replaceString.length);
}else{
setSelectionRange(input, selectionStart + replaceString.length, selectionStart + replaceString.length);
}
}else if (document.selection) {
var range = document.selection.createRange();
if (range.parentElement() == input) {
var isCollapsed = range.text == '';
range.text = replaceString;
if (!isCollapsed)  {
range.moveStart('character', -replaceString.length);
range.select();
}
}
}
input.scrollTop = oldScroll;
}
function catchTab(item,e){
var c = e.which ? e.which : e.keyCode;
if (c == 9) { 
if (getSelectedText(item).length) {
indentSelectedText(item, e.shiftKey ? -1 : 1);
}
else {
replaceSelection(item, String.fromCharCode(9));
}
setTimeout("document.getElementById('"+item.id+"').focus();",0);	
return false;
}
}
function count_chars(str, ch) {
var count = 0;
for (var idx = 0, len = str.length; idx < len; idx++) {
if (str.substring(idx, idx + 1) == ch) count++;
}
return count;
}
function multiplex_str(ch, num) {
var str = '';
for (var idx = 0; idx < num; idx++) str += ch;
return str;
}
function deep_copy_tree(obj) {
var new_obj = null;
if (typeof(obj.length) != 'undefined') {
new_obj = [];
for (var idx = 0, len = obj.length; idx < len; idx++) {
if ((typeof(obj[idx]) == 'object') || (typeof(obj[idx]) == 'array')) new_obj[idx] = deep_copy_tree( obj[idx] );
else new_obj[idx] = obj[idx];
}
}
else {
new_obj = {};
for (var key in obj) {
if ((typeof(obj[key]) == 'object') || (typeof(obj[key]) == 'array')) new_obj[key] = deep_copy_tree( obj[key] );
else new_obj[key] = obj[key];
}
}
return new_obj;
}
function strip_base_path(path, base) {
if (!path || !base) return '';
if (path.indexOf(base) == 0) path = path.substring( base.length );
return path;
}
function parse_useragent(useragent) {
if (!useragent) useragent = navigator.userAgent;
useragent = '' + useragent;
var os = 'Unknown';
var browser = 'Unknown';
useragent = useragent.replace(/\;\s+[\d\.]+\s+cache[\.\w]+(\:\d+)?\s+\(squid[^\)]+\)/, '');
if (useragent.match(/SunOS/)) { os = 'SunOS'; }
else if (useragent.match(/IRIX/)) { os = 'IRIX'; }
else if (useragent.match(/Linux/)) { os = 'Linux'; }
else if (useragent.match(/iPhone/)) { os = 'iPhone'; }
else if (useragent.match(/Mac\s+OS\s+X\s+([\d\_]+)/)) { os = 'Mac OS X'; }
else if (useragent.match(/(Mac\s+OS\s+X|Mac_PowerPC)/)) { os = 'Mac OS X'; }
else if (useragent.match(/Mac/)) { os = 'Mac OS'; }
else if (useragent.match(/Windows\s+CE/)) { os = 'Windows CE'; }
else if (useragent.match(/(Windows\s+ME|Win\s9x)/)) { os = 'Windows Me'; }
else if (useragent.match(/Win(95|98|NT)/)) { os = "Windows " + RegExp.RegExp.$1; }
else if (useragent.match(/Win\D+([\d\.]+)/)) {
var ver = RegExp.$1;
if (ver.match(/95/)) { os = 'Windows 95'; }
else if (ver.match(/98/)) { os = 'Windows 98'; }
else if (ver.match(/4\.0/)) { os = 'Windows NT'; }
else if (ver.match(/5\.0/)) { os = 'Windows 2000'; }
else if (ver.match(/5\.[12]/)) {
os = 'Windows XP';
}
else if (ver.match(/6.\d+/)) { os = 'Windows Vista'; }
else if (ver.match(/7.\d+/)) { os = 'Windows 7'; }
else if (useragent.match(/Windows\sNT/)) { os = 'Windows NT'; }
}
else if (useragent.match(/Windows\sNT/)) { os = 'Windows NT'; }
else if (useragent.match(/PSP/)) { os = 'Sony PSP'; }
else if (useragent.match(/WebTV/)) { os = 'Web TV'; }
else if (useragent.match(/Palm/)) { os = 'Palm OS'; }
else if (useragent.match(/Wii/)) { os = 'Nintendo Wii'; }
else if (useragent.match(/Symbian/)) { os = 'Symbian OS'; }
if (useragent.match(/Chrome\D+(\d+)/)) {
browser = "Chrome " + RegExp.$1;
}
else if (useragent.match(/Safari\/((\d+)[\d\.]+)/)) {
if (useragent.match(/Version\D+([\d]+)/)) {
browser = "Safari " + RegExp.$1;
}
else {
browser = 'Safari 2';
}
}
else if (useragent.match(/iCab/)) { browser = 'iCab'; }
else if (useragent.match(/OmniWeb/)) { browser = 'OmniWeb'; }
else if (useragent.match(/Opera\D*(\d+)/)) { browser = "Opera " + RegExp.$1; }
else if (useragent.match(/(Camino|Chimera)/)) { browser = 'Camino'; }
else if (useragent.match(/Firefox\D*(\d+\.\d+)/)) { browser = "Firefox " + RegExp.$1; }
else if (useragent.match(/Netscape\D*(\d+(\.\d+)?)/)) { browser = "Netscape " + RegExp.$1; }
else if (useragent.match(/Gecko/)) { browser = 'Mozilla'; }
else if (useragent.match(/America\s+Online\s+Browser\D+(\d+(\.\d+)?)/)) { browser = "AOL Explorer " + RegExp.$1; }
else if (useragent.match(/PSP\D+(\d+(\.\d+)?)/)) { browser = "PSP " + RegExp.$1; }
else if (useragent.match(/Lynx\D+(\d+(\.\d+)?)/)) { browser = "Lynx " + RegExp.$1; }
else if (useragent.match(/Konqueror\D+(\d+(\.\d+)?)/)) { browser = "Konqueror " + RegExp.$1; }
else if (useragent.match(/Blazer\D+(\d+(\.\d+)?)/)) { browser = "Blazer " + RegExp.$1; }
else if (useragent.match(/MSIE\D+(\d+)/)) { browser = "Internet Explorer " + RegExp.$1; }
else if (useragent.match(/Mozilla\/(4\.\d)/)) {
var ver = RegExp.$1;
if (ver != '4.0') { browser = "Netscape " + ver; }
else { browser = "Mozilla"; }
}
else if (useragent.match(/Mozilla/)) { browser = "Mozilla"; }
if ((os == 'Unknown') && (browser == 'Unknown') && useragent.match(/Flash\s+Player\s+([\d\.\,]+)/)) {
os = 'Adobe';
browser = 'Flash Player ' + RegExp.$1;
}
if ((os == 'Unknown') && (browser == 'Unknown')) {
os = '';
browser = useragent;
}
return { os: os, browser: browser };
}
function forceFloatString(value) {
if (!value.toString().match(/^\d+\.\d+$/)) value = '' + value + '.0';
return value;
}
function check_reserved_word(name) {
return !name.toString().match(/^(break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with|type|interface|class)$/);
}
function get_next_key_seq(hash) {
var largest = 0;
for (var key in hash) {
if (key.match(/^\d+$/)) {
var num = parseInt(key, 10);
if (num > largest) largest = num;
}
}
return largest + 1;
}
function scroll_to_element(elem) {
var elem = $(elem);
if (elem) {
var info = get_dom_object_info( $(elem) );
if (info) window.scrollTo( 0, info.top );
}
}
function get_user_client_info(str) {
str = str.toString().replace( /\b10\.\d+\.\d+\.\d+\,\s*/, '' ); 
var ip = '';
if (str.match(/^(\d+\.\d+\.\d+\.\d+)\,\s*/)) {
ip = RegExp.$1;
str = str.replace( /^(\d+\.\d+\.\d+\.\d+)\,\s*/, '' );
}
str = str.toString().replace(/\;\s+[\d\.]+\s+cache[\.\w]+(\:\d+)?\s+\(squid[^\)]+\)/, '');
var user_info = parse_useragent( str );
user_info.ip = ip;
return user_info;
}
window.EaseAlgos = {
Linear: function(amount) { return amount; },
Quadratic: function(amount) { return Math.pow(amount, 2); },
Cubic: function(amount) { return Math.pow(amount, 3); },
Quartetic: function(amount) { return Math.pow(amount, 4); },
Quintic: function(amount) { return Math.pow(amount, 5); },
Sine: function(amount) { return 1 - Math.sin((1 - amount) * Math.PI / 2); },
Circular: function(amount) { return 1 - Math.sin(Math.acos(amount)); }
};
window.EaseModes = {
EaseIn: function(amount, algo) { return window.EaseAlgos[algo](amount); },
EaseOut: function(amount, algo) { return 1 - window.EaseAlgos[algo](1 - amount); },
EaseInOut: function(amount, algo) {
return (amount <= 0.5) ? window.EaseAlgos[algo](2 * amount) / 2 : (2 - window.EaseAlgos[algo](2 * (1 - amount))) / 2;
}
};
function ease(amount, mode, algo) {
return window.EaseModes[mode]( amount, algo );
}
function tweenFrame(start, end, amount, mode, algo) {
return start + (ease(amount, mode, algo) * (end - start));
}
var indent_string = "\t";
var xml_header = '<?xml version="1.0"?>';
var sort_args = null;
var re_valid_tag_name  = /^\w[\w\-\:]*$/;
function XML(args) {
if (!args) args = '';
if (isa_hash(args)) {
for (var key in args) this[key] = args[key];
}
else this.text = args || '';
this.tree = {};
this.errors = [];
this.piNodeList = [];
this.dtdNodeList = [];
this.documentNodeName = '';
this.patTag.lastIndex = 0;
if (this.text) this.parse();
}
XML.prototype.preserveAttributes = false;
XML.prototype.patTag = /([^<]*?)<([^>]+)>/g;
XML.prototype.patSpecialTag = /^\s*([\!\?])/;
XML.prototype.patPITag = /^\s*\?/;
XML.prototype.patCommentTag = /^\s*\!--/;
XML.prototype.patDTDTag = /^\s*\!DOCTYPE/;
XML.prototype.patCDATATag = /^\s*\!\s*\[\s*CDATA/;
XML.prototype.patStandardTag = /^\s*(\/?)([\w\-\:\.]+)\s*(.*)$/;
XML.prototype.patSelfClosing = /\/\s*$/;
XML.prototype.patAttrib = new RegExp("([\\w\\-\\:\\.]+)\\s*=\\s*([\\\"\\'])([^\\2]*?)\\2", "g");
XML.prototype.patPINode = /^\s*\?\s*([\w\-\:]+)\s*(.*)$/;
XML.prototype.patEndComment = /--$/;
XML.prototype.patNextClose = /([^>]*?)>/g;
XML.prototype.patExternalDTDNode = new RegExp("^\\s*\\!DOCTYPE\\s+([\\w\\-\\:]+)\\s+(SYSTEM|PUBLIC)\\s+\\\"([^\\\"]+)\\\"");
XML.prototype.patInlineDTDNode = /^\s*\!DOCTYPE\s+([\w\-\:]+)\s+\[/;
XML.prototype.patEndDTD = /\]$/;
XML.prototype.patDTDNode = /^\s*\!DOCTYPE\s+([\w\-\:]+)\s+\[(.*)\]/;
XML.prototype.patEndCDATA = /\]\]$/;
XML.prototype.patCDATANode = /^\s*\!\s*\[\s*CDATA\s*\[(.*)\]\]/;
XML.prototype.attribsKey = '_Attribs';
XML.prototype.dataKey = '_Data';
XML.prototype.parse = function(branch, name) {
if (!branch) branch = this.tree;
if (!name) name = null;
var foundClosing = false;
var matches = null;
while ( matches = this.patTag.exec(this.text) ) {
var before = matches[1];
var tag = matches[2];
if (before.match(/\S/)) {
if (typeof(branch[this.dataKey]) != 'undefined') branch[this.dataKey] += ' '; else branch[this.dataKey] = '';
branch[this.dataKey] += trim(decode_entities(before));
}
if (tag.match(this.patSpecialTag)) {
if (tag.match(this.patPITag)) tag = this.parsePINode(tag);
else if (tag.match(this.patCommentTag)) tag = this.parseCommentNode(tag);
else if (tag.match(this.patDTDTag)) tag = this.parseDTDNode(tag);
else if (tag.match(this.patCDATATag)) {
tag = this.parseCDATANode(tag);
if (typeof(branch[this.dataKey]) != 'undefined') branch[this.dataKey] += ' '; else branch[this.dataKey] = '';
branch[this.dataKey] += trim(decode_entities(tag));
} 
else {
this.throwParseError( "Malformed special tag", tag );
break;
} 
if (tag == null) break;
continue;
} 
else {
var matches = tag.match(this.patStandardTag);
if (!matches) {
this.throwParseError( "Malformed tag", tag );
break;
}
var closing = matches[1];
var nodeName = matches[2];
var attribsRaw = matches[3];
if (closing) {
if (nodeName == (name || '')) {
foundClosing = 1;
break;
}
else {
this.throwParseError( "Mismatched closing tag (expected </" + name + ">)", tag );
break;
}
} 
else {
var selfClosing = !!attribsRaw.match(this.patSelfClosing);
var leaf = {};
var attribs = leaf;
if (this.preserveAttributes) {
leaf[this.attribsKey] = {};
attribs = leaf[this.attribsKey];
}
this.patAttrib.lastIndex = 0;
while ( matches = this.patAttrib.exec(attribsRaw) ) {
attribs[ matches[1] ] = decode_entities( matches[3] );
} 
if (this.preserveAttributes && !num_keys(attribs)) {
delete leaf[this.attribsKey];
}
if (!selfClosing) {
this.parse( leaf, nodeName );
if (this.error()) break;
}
var num_leaf_keys = num_keys(leaf);
if ((typeof(leaf[this.dataKey]) != 'undefined') && (num_leaf_keys == 1)) {
leaf = leaf[this.dataKey];
}
else if (!num_leaf_keys) {
leaf = '';
}
if (typeof(branch[nodeName]) != 'undefined') {
if (isa_array(branch[nodeName])) {
array_push( branch[nodeName], leaf );
}
else {
var temp = branch[nodeName];
branch[nodeName] = [ temp, leaf ];
}
}
else {
branch[nodeName] = leaf;
}
if (this.error() || (branch == this.tree)) break;
} 
} 
} 
if (name && !foundClosing) {
this.throwParseError( "Missing closing tag (expected </" + name + ">)", name );
}
if (branch == this.tree) {
if (typeof(this.tree[this.dataKey]) != 'undefined') delete this.tree[this.dataKey];
if (num_keys(this.tree) > 1) {
this.throwParseError( 'Only one top-level node is allowed in document', first_key(this.tree) );
return;
}
this.documentNodeName = first_key(this.tree);
if (this.documentNodeName) {
this.tree = this.tree[this.documentNodeName];
}
}
};
XML.prototype.throwParseError = function(key, tag) {
var parsedSource = this.text.substring(0, this.patTag.lastIndex);
var eolMatch = parsedSource.match(/\n/g);
var lineNum = (eolMatch ? eolMatch.length : 0) + 1;
lineNum -= tag.match(/\n/) ? tag.match(/\n/g).length : 0;
array_push(this.errors, {
type: 'Parse',
key: key,
text: '<' + tag + '>',
line: lineNum
});
};
XML.prototype.error = function() {
return this.errors.length;
};
XML.prototype.getError = function(error) {
var text = '';
if (!error) return '';
text = (error.type || 'General') + ' Error';
if (error.code) text += ' ' + error.code;
text += ': ' + error.key;
if (error.line) text += ' on line ' + error.line;
if (error.text) text += ': ' + error.text;
return text;
};
XML.prototype.getLastError = function() {
if (!this.error()) return '';
return this.getError( this.errors[this.errors.length - 1] );
};
XML.prototype.parsePINode = function(tag) {
if (!tag.match(this.patPINode)) {
this.throwParseError( "Malformed processor instruction", tag );
return null;
}
array_push( this.piNodeList, tag );
return tag;
};
XML.prototype.parseCommentNode = function(tag) {
var matches = null;
this.patNextClose.lastIndex = this.patTag.lastIndex;
while (!tag.match(this.patEndComment)) {
if (matches = this.patNextClose.exec(this.text)) {
tag += '>' + matches[1];
}
else {
this.throwParseError( "Unclosed comment tag", tag );
return null;
}
}
this.patTag.lastIndex = this.patNextClose.lastIndex;
return tag;
};
XML.prototype.parseDTDNode = function(tag) {
var matches = null;
if (tag.match(this.patExternalDTDNode)) {
array_push( this.dtdNodeList, tag );
}
else if (tag.match(this.patInlineDTDNode)) {
this.patNextClose.lastIndex = this.patTag.lastIndex;
while (!tag.match(this.patEndDTD)) {
if (matches = this.patNextClose.exec(this.text)) {
tag += '>' + matches[1];
}
else {
this.throwParseError( "Unclosed DTD tag", tag );
return null;
}
}
this.patTag.lastIndex = this.patNextClose.lastIndex;
if (tag.match(this.patDTDNode)) {
array_push( this.dtdNodeList, tag );
}
else {
this.throwParseError( "Malformed DTD tag", tag );
return null;
}
}
else {
this.throwParseError( "Malformed DTD tag", tag );
return null;
}
return tag;
};
XML.prototype.parseCDATANode = function(tag) {
var matches = null;
this.patNextClose.lastIndex = this.patTag.lastIndex;
while (!tag.match(this.patEndCDATA)) {
if (matches = this.patNextClose.exec(this.text)) {
tag += '>' + matches[1];
}
else {
this.throwParseError( "Unclosed CDATA tag", tag );
return null;
}
}
this.patTag.lastIndex = this.patNextClose.lastIndex;
if (matches = tag.match(this.patCDATANode)) {
return matches[1];
}
else {
this.throwParseError( "Malformed CDATA tag", tag );
return null;
}
};
XML.prototype.getTree = function() {
return this.tree;
};
XML.prototype.compose = function() {
var raw = compose_xml( this.documentNodeName, this.tree );
var body = raw.substring( raw.indexOf("\n") + 1, raw.length );
var xml = '';
if (this.piNodeList.length) {
for (var idx = 0, len = this.piNodeList.length; idx < len; idx++) {
xml += '<' + this.piNodeList[idx] + '>' + "\n";
}
}
else {
xml += xml_header + "\n";
}
if (this.dtdNodeList.length) {
for (var idx = 0, len = this.dtdNodeList.length; idx < len; idx++) {
xml += '<' + this.dtdNodeList[idx] + '>' + "\n";
}
}
xml += body;
return xml;
};
function parse_xml(text) {
var parser = new XML(text);
return parser.error() ? parser.getLastError() : parser.getTree();
}
function trim(text) {
if (text == null) return '';
if (text && text.replace) {
text = text.replace(/^\s+/, "");
text = text.replace(/\s+$/, "");
}
return text;
}
function encode_entities(text) {
if (text == null) return '';
if (text && text.replace) {
text = text.replace(/\&/g, "&amp;"); 
text = text.replace(/</g, "&lt;");
text = text.replace(/>/g, "&gt;");
}
return text;
}
function encode_attrib_entities(text) {
if (text == null) return '';
if (text && text.replace) {
text = text.replace(/\&/g, "&amp;"); 
text = text.replace(/</g, "&lt;");
text = text.replace(/>/g, "&gt;");
text = text.replace(/\"/g, "&quot;");
text = text.replace(/\'/g, "&apos;");
}
return text;
}
function decode_entities(text) {
if (text == null) return '';
if (text && text.replace) {
text = text.replace(/\&lt\;/g, "<");
text = text.replace(/\&gt\;/g, ">");
text = text.replace(/\&quot\;/g, '"');
text = text.replace(/\&apos\;/g, "'");
text = text.replace(/\&amp\;/g, "&"); 
}
return text;
}
function compose_xml(name, node, indent) {
var xml = "";
if (!indent) {
indent = 0;
xml = xml_header + "\n";
}
var indent_text = "";
for (var k = 0; k < indent; k++) indent_text += indent_string;
if ((typeof(node) == 'object') && (node != null)) {
if (!node.length) { 
xml += indent_text + "<" + name;
var num_keys = 0;
var has_attribs = 0;
for (var key in node) num_keys++; 
if (node["_Attribs"]) {
has_attribs = 1;
var sorted_keys = hash_keys_to_array(node["_Attribs"]).sort();
for (var idx = 0, len = sorted_keys.length; idx < len; idx++) {
var key = sorted_keys[idx];
xml += " " + key + "=\"" + encode_attrib_entities(node["_Attribs"][key]) + "\"";
}
} 
if (num_keys > has_attribs) {
xml += ">";
if (node["_Data"]) {
xml += encode_entities(node["_Data"]) + "</" + name + ">\n";
} 
else {
xml += "\n";
var sorted_keys = hash_keys_to_array(node).sort();
for (var idx = 0, len = sorted_keys.length; idx < len; idx++) {
var key = sorted_keys[idx];					
if ((key != "_Attribs") && key.match(re_valid_tag_name)) {
xml += compose_xml( key, node[key], indent + 1 );
} 
} 
xml += indent_text + "</" + name + ">\n";
} 
}
else {
xml += "/>\n";
}
} 
else {
for (var idx = 0; idx < node.length; idx++) {
xml += compose_xml( name, node[idx], indent );
}
} 
} 
else {
xml += indent_text + "<" + name + ">" + encode_entities(node) + "</" + name + ">\n";
} 
return xml;
}
function find_object(obj, criteria) {
var criteria_length = 0;
for (var a in criteria) criteria_length++;
obj = always_array(obj);
for (var a = 0; a < obj.length; a++) {
var matches = 0;
for (var b in criteria) {
if (obj[a][b] && (obj[a][b] == criteria[b])) matches++;
else if (obj[a]["_Attribs"] && obj[a]["_Attribs"][b] && (obj[a]["_Attribs"][b] == criteria[b])) matches++;
}
if (matches >= criteria_length) return obj[a];
}
return null;
}
function find_objects(obj, criteria) {
var objs = new Array();
var criteria_length = 0;
for (var a in criteria) criteria_length++;
obj = always_array(obj);
for (var a = 0; a < obj.length; a++) {
var matches = 0;
for (var b in criteria) {
if (obj[a][b] && obj[a][b] == criteria[b]) matches++;
else if (obj[a]["_Attribs"] && obj[a]["_Attribs"][b] && (obj[a]["_Attribs"][b] == criteria[b])) matches++;
}
if (matches >= criteria_length) array_push( objs, obj[a] );
}
return objs;
}
function find_object_idx(obj, criteria) {
var criteria_length = 0;
for (var a in criteria) criteria_length++;
obj = always_array(obj);
for (var idx = 0; idx < obj.length; idx++) {
var matches = 0;
for (var b in criteria) {
if (obj[idx][b] && (obj[idx][b] == criteria[b])) matches++;
else if (obj[idx]["_Attribs"] && obj[idx]["_Attribs"][b] && (obj[idx]["_Attribs"][b] == criteria[b])) matches++;
}
if (matches >= criteria_length) return idx;
}
return -1;
}
function delete_object(obj, criteria) {
var idx = find_object_idx(obj, criteria);
if (idx > -1) {
array_splice( obj, idx, 1 );
return true;
}
return false;
}
function delete_objects(obj, criteria) {
while (delete_object(obj, criteria)) ;
}
function insert_object_before(obj, criteria, insert) {
var idx = find_object_idx(obj, criteria);
if (idx > -1) {
array_splice( obj, idx, 0, insert );
return true;
}
return false;
}
function always_array(obj, key) {
if (key) {
if ((typeof(obj[key]) != 'object') || (typeof(obj[key].length) == 'undefined')) {
var temp = obj[key];
delete obj[key];
obj[key] = new Array();
obj[key][0] = temp;
}
return null;
}
else {
if ((typeof(obj) != 'object') || (typeof(obj.length) == 'undefined')) { return [ obj ]; }
else return obj;
}
}
function hash_keys_to_array(hash) {
var array = [];
for (var key in hash) array_push(array, key);
return array;
}
function encode_object(obj) {
for (var idx = 1; idx < arguments.length; idx++) obj = merge_objects(obj, arguments[idx]);
var stream = serialize(obj);
return "decode_object('" + escape(stream) + "')";
}
function decode_object(stream) {
var a;
return eval( 'a=' + unescape(stream) );
}
function serialize(thingy, glue) {
if (!glue) glue = ':'; 
var stream = '';
if (typeof(thingy) == 'number') {
stream += thingy;
}
else if (typeof(thingy) == 'string') {
stream += '"' + thingy.replace(/([\"\\])/g, '\\$1').replace(/\r/g, "\\r").replace(/\n/g, "\\n") + '"';
}
else if (isa_hash(thingy)) {
var num = 0;
var buffer = [];
for (var key in thingy) {
buffer[num] = (key.match(/^[A-Za-z]\w*$/) ? key : ('"'+key+'"')) + glue + serialize(thingy[key], glue);
num++;
}
stream += '{' + buffer.join(',') + '}';
}
else if (isa_array(thingy)) {
var buffer = [];
for (var idx = 0, len = thingy.length; idx < len; idx++) {
buffer[idx] = serialize(thingy[idx], glue);
}
stream += '[' + buffer.join(',') + ']';
}
else {
stream += '0';
}
return stream;
}
function ue(str) {
return unescape(str);
}
function custom_sort(a, b) {
var value_a = a[ sort_args.sort_by ];
if (!value_a && a["_Attribs"]) value_a = a["_Attribs"][ sort_args.sort_by ];
var value_b = b[ sort_args.sort_by ];
if (!value_b && b["_Attribs"]) value_b = b["_Attribs"][ sort_args.sort_by ];
var cmp = (value_b < value_a) ? 1 : -1;
return cmp * sort_args.sort_dir;
}
function sort_array(obj, args) {
var list = always_array(obj);
sort_args = args;
return list.sort( custom_sort );
}
function merge_objects(a, b) {
if (!a) a = {};
if (!b) b = {};
var c = {};
if (typeof(a) != 'object') eval( "a = " + a );
if (typeof(b) != 'object') eval( "b = " + b );
for (var key in a) c[key] = a[key];
for (var key in b) c[key] = b[key];
return c;
}
function copy_object(obj) {
var new_obj = {};
for (var key in obj) new_obj[key] = obj[key];
return new_obj;
}
function deep_copy_object(obj) {
if (isa_hash(obj)) {
var new_obj = {};
for (var key in obj) {
if (isa_hash(obj[key]) || isa_array(obj[key]))
new_obj[key] = deep_copy_object(obj[key]);
else
new_obj[key] = obj[key];
}
return new_obj;
}
else if (isa_array(obj)) {
var new_obj = [];
for (var idx = 0, len = obj.length; idx < len; idx++) {
if (isa_hash(obj[idx]) || isa_array(obj[idx]))
new_obj[idx] = deep_copy_object(obj[idx]);
else
new_obj[idx] = obj[idx];
}
return new_obj;
}
return null;
}
function deep_copy_object_lc_keys(obj) {
var new_obj = {};
if (obj.length) new_obj = [];
for (var key in obj) {
var lc_key = key.toLowerCase ? key.toLowerCase() : key;
if (typeof(obj[key]) == 'object') new_obj[lc_key] = deep_copy_object_lc_keys( obj[key] );
else new_obj[lc_key] = obj[key];
}
return new_obj;
}
function copy_into_object(a, b) {
for (var key in b) a[key] = b[key];
}
function deep_copy_into_object(a, b) {
for (var key in b) {
if (typeof(b[key]) == 'object') {
if (typeof(a[key]) == 'undefined') {
if (b[key].length) a[key] = []; else a[key] = {};
}
deep_copy_into_object( a[key], b[key] );
}
else a[key] = b[key];
}
}
function num_keys(hash) {
var count = 0;
for (var a in hash) count++;
return count;
}
function deep_diff_object(a, b) {
if ((typeof(a) != 'object') && (typeof(a) != 'array')) {
if (typeof(a) == 'string') {
a = a.replace(/\r\n/g, "\n");
a = a.replace(/\r/g, "\n");
}
if (typeof(b) == 'string') {
b = b.replace(/\r\n/g, "\n");
b = b.replace(/\r/g, "\n");
}
if (a != b) return 1; 
else return 0;
}
if (typeof(a) != typeof(b)) return 1; 
if (typeof(a.length) == 'undefined') {
if (num_keys(a) != num_keys(b)) return 1; 
for (var akey in a) {
if (typeof(b[akey]) == 'undefined') return 1; 
if (deep_diff_object( a[akey], b[akey] )) return 1; 
}
for (var bkey in b) {
if (typeof(a[bkey]) == 'undefined') return 1; 
}
}
else {
if (a.length != b.length) return 1; 
for (var idx = 0; idx < a.length; idx++) {
if (deep_diff_object( a[idx], b[idx] )) return 1; 
}
}
return 0;
}
function lookup_path(path, obj) {
path = path.replace(/\/$/, ""); 
while (/\/[^\/]+/.test(path) && (typeof(obj) == 'object')) {
var slash = path.indexOf('/');
path = path.substring( slash + 1 );
slash = path.indexOf('/');
if (slash == -1) slash = path.length;
var name = path.substring(0, slash);
if (typeof(obj.length) == 'undefined') {
if (typeof(obj[name]) != 'undefined') obj = obj[name];
else return null;
}
else {
var idx = parseInt(name, 10);
if (isNaN(idx)) return null;
if (typeof(obj[idx]) != 'undefined') obj = obj[idx];
else return null;
}
} 
return obj;
}
function set_path_value(path, obj, value) {
path = path.replace(/\/$/, ""); 
var final_slash = path.lastIndexOf('/');
var final_name = path.substring( final_slash + 1, path.length );
path = path.substring( 0, final_slash );
while (/\/[^\/]+/.test(path)) {
var slash = path.indexOf('/');
path = path.substring( slash + 1 );
slash = path.indexOf('/');
if (slash == -1) slash = path.length;
var name = path.substring(0, slash);
if (typeof(obj.length) == 'undefined') {
if (!isa_hash(obj[name])) obj[name] = {}; 
obj = obj[name];
}
else {
var idx = parseInt(name, 10);
if (isNaN(idx)) return null;
if (typeof(obj[idx]) != 'undefined') obj[idx] = {}; 
obj = obj[idx];
}
} 
obj[final_name] = value;
}
function delete_path_value(path, obj) {
path = path.replace(/\/$/, ""); 
var final_slash = path.lastIndexOf('/');
var final_name = path.substring( final_slash + 1, path.length );
path = path.substring( 0, final_slash );
while (/\/[^\/]+/.test(path) && (typeof(obj) == 'object')) {
var slash = path.indexOf('/');
path = path.substring( slash + 1 );
slash = path.indexOf('/');
if (slash == -1) slash = path.length;
var name = path.substring(0, slash);
if (typeof(obj.length) == 'undefined') {
if (typeof(obj[name]) != 'undefined') obj = obj[name];
else return null;
}
else {
var idx = parseInt(name, 10);
if (isNaN(idx)) return null;
if (typeof(obj[idx]) != 'undefined') obj = obj[idx];
else return null;
}
} 
delete obj[final_name];
return true;
}
function set_all(obj, args) {
for (var idx = 0; idx < obj.length; idx++) {
for (var a in args) {
obj[idx][a] = args[a];
} 
} 
}
function delete_all(obj, key) {
for (var idx = 0; idx < obj.length; idx++) {
if (typeof(obj[idx][key]) != 'undefined') delete obj[idx][key];
}
}
function compose_attribs(attribs) {
var html = '';
if (attribs) {
for (var key in attribs) {
html += " " + key + "=\"" + attribs[key] + "\"";
}
}
return html;
}
function compose_style(attribs) {
var html = '';
if (attribs) {
for (var key in attribs) {
html += " " + key + ":" + attribs[key] + ";";
}
}
return html;
}
function isa_hash(arg) {
return( !!arg && (typeof(arg) == 'object') && (typeof(arg.length) == 'undefined') );
}
function isa_array(arg) {
if (typeof(arg) == 'array') return true;
return( !!arg && (typeof(arg) == 'object') && (typeof(arg.length) != 'undefined') );
}
function first_key(hash) {
for (var key in hash) return key;
return null; 
}
function xml_index_by( xml, element, key, recursive, compress ) {
if (!xml || !key || !element) return 0;
if (isa_hash(xml) && isa_hash(xml[element]) && xml[element][key])
always_array( xml, element );
if (isa_hash(xml) && isa_array(xml[element])) {
var reindex = 0;
for (var idx = xml[element].length - 1; idx >= 0; idx--) {
var elem = xml[element][idx];
if (elem[key]) {
reindex = 1;
var new_name = elem[key];
delete elem[key];
if (compress && (num_keys(elem) == 1) && (typeof(elem[ first_key(elem) ]) != 'object')) {
elem = elem[ first_key(elem) ];
} 
if (typeof(xml[new_name]) != 'undefined') {
always_array( xml, new_name );
array_unshift( xml[new_name], elem );
}
else {
xml[new_name] = elem;
}
} 
} 
if (reindex) {
delete xml[element];
}
} 
if (recursive) {
if (xml && (typeof(xml) == 'object')) { 
if (typeof(xml.length) != 'undefined') {
for (var idx = 0; idx < xml.length; idx++) {
xml_index_by( xml[idx], element, key, recursive, compress );
} 
}
else {
for (var key in xml) {
xml_index_by( xml[key], element, key, recursive, compress );
} 
}
} 
} 
}
function expand_parameter_nodes(tree) {
xml_index_by( tree, 'ParameterGroup', 'Name', true, false );
xml_index_by( tree, 'Parameter', 'Name', true, true );
}
function make_parameter_nodes(tree, max_levels) {
var out = {};
if (typeof(max_levels) == 'undefined') { max_levels = -1; } 
if (!max_levels) { return {}; } 
for (var key in tree) {
if (isa_hash(tree[key])) {
var node_group = merge_objects({ "_Attribs": { Name: key } },
make_parameter_nodes(tree[key], max_levels - 1) );
if (out['ParameterGroup']) {
if (isa_array(out['ParameterGroup'])) {
array_push( out['ParameterGroup'], node_group );
}
else {
out['ParameterGroup'] = [ out['ParameterGroup'], node_group ];
}
}
else {
out['ParameterGroup'] = node_group;
}
}
else if (isa_array(tree[key])) {
for (var idx = 0; idx < tree[key].length; idx++) {
var elem = tree[key][idx];
if (isa_hash(elem)) {
var node_group = merge_objects({ "_Attribs": { Name: key } },
make_parameter_nodes(elem, max_levels - 1) );
if (out['ParameterGroup']) {
if (isa_array(out['ParameterGroup'])) {
array_push( out['ParameterGroup'], node_group );
}
else {
out['ParameterGroup'] = [ out['ParameterGroup'], node_group ];
}
}
else {
out['ParameterGroup'] = node_group;
}
} 
else {
var node = { "_Attribs": { Name: key } };
if (/[\n\"]/.test(elem)) {
node['content'] = elem;
}
else {
node['_Attribs']['Value'] = elem;
}
if (out['Parameter']) {
if (isa_array(out['Parameter'])) {
array_push( out['Parameter'], node );
}
else {
out['Parameter'] = [ out['Parameter'], node ];
}
}
else {
out['Parameter'] = node;
}
} 
} 
}
else {
var node = { "_Attribs": { Name: key } };
if (/[\n\"]/.test(tree[key])) {
node['content'] = tree[key];
}
else {
node['_Attribs']['Value'] = tree[key];
}
if (out['Parameter']) {
if (isa_array(out['Parameter'])) {
array_push( out['Parameter'], node );
}
else {
out['Parameter'] = [ out['Parameter'], node ];
}
}
else {
out['Parameter'] = node;
}
}
}
return out;
}
function xpath_summary(xml, base_path) {
if (!base_path) base_path = '/';
var paths = {};
if (isa_hash(xml)) {
for (var key in xml) {
if (typeof(xml[key]) == 'object') paths = merge_objects(paths, xpath_summary(xml[key], base_path + key + '/'));
else paths[base_path + key] = xml[key];
}
}
else if (isa_array(xml)) {
for (var idx = 0, len = xml.length; idx < len; idx++) {
if (typeof(xml[idx]) == 'object') paths = merge_objects(paths, xpath_summary(xml[idx], base_path.replace(/\/$/, '') + '[' + idx + ']/'));
else paths[ base_path.replace(/\/$/, '') + '[' + idx + ']'] = xml[idx];
}
}
return paths;
}
function array_push(array, item) {
array[ array.length ] = item;
}
function array_pop(array) {
if (array.length > 0) {
var temp = array[ array.length - 1 ];
delete array[ array.length - 1 ];
array.length--;
return temp;
}
else return null;
}
function array_unshift(array, item) {
if (array.length > 0) {
for (var idx = array.length - 1; idx >= 0; idx--) {
array[idx + 1] = array[idx];
}
}
array[0] = item;
}
function array_shift(array) {
if (array.length > 0) {
var temp = array[0];
if (array.length > 1) {
for (var idx = 0; idx < array.length - 1; idx++) {
array[idx] = array[idx + 1];
}
}
array_pop(array);
return temp;
}
else return null;
}
function array_splice(array, pos, del_count, item) {
var spliced = [];
while (del_count) {
array_push(spliced, array[pos]);
if (array.length > pos + 1) {
for (var idx = pos; idx < array.length - 1; idx++) {
array[idx] = array[idx + 1];
}
}
array_pop(array);
del_count--;
}
if (typeof(item) != 'undefined') {
for (var idx = array.length - 1; idx >= pos; idx--) {
array[idx + 1] = array[idx];
}
array[pos] = item;
}
return spliced;
}
function array_slice(array, start, end) {
if (!end) end = array.length;
var slice = [];
for (var idx = start; idx < end; idx++) {
if (idx < array.length) array_push( slice, array[idx] );
}
return slice;
}
function array_combine(a, b) {
var c = [];
for (var idx = 0; idx < a.length; idx++) array_push( c, a[idx] );
for (var idx = 0; idx < b.length; idx++) array_push( c, b[idx] );
return c;
}
function array_cat(a, b) {
for (var idx = 0; idx < b.length; idx++) array_push( a, b[idx] );
}
function array_join(arr, glue) {
var str = '';
for (var idx = 0, len = arr.length; idx < len; idx++) {
if (idx > 0) str += glue;
str += arr[idx];
}
return str;
}
if (!window.Ajax) window.Ajax = {};
Ajax.Connection = function() {
this._inUse = false;
this._conn = null;
this._xProgIds = [
'MSXML2.XMLHTTP.3.0',
'MSXML2.XMLHTTP',
'Microsoft.XMLHTTP'
];
try {
this._conn = new XMLHttpRequest();
}
catch (e) {
for (var idx = 0; idx < this._xProgIds.length; idx++) {
try {
this._conn = new ActiveXObject( this._xProgIds[idx] );
break;
}
catch (e) {}
} 
} 
};
Ajax.Connection.prototype._socketTimeout = 30 * 1000;
Ajax.Connection.prototype.send = function(tx) {
this.tx = tx;
if (!this._conn) {
this.tx.response.code = 500;
this.tx.response.data = "Could not create XMLHTTP object";
this.tx._notifyComplete();
return;
}
if (this.tx.request.url.toLowerCase().match(/^(\w+)\:\/\/([\w\-\.]+)/)) {
if ((RegExp.$1 != 'file') && (RegExp.$2.toLowerCase() != location.hostname.toLowerCase())) {
this.tx.response.code = 501;
this.tx.response.data = "Cannot perform cross-domain AJAX calls";
this.tx._notifyComplete();
return;
}
}
else {
if (this.tx.request.url.match(/^\//)) {
var proto = location.protocol.match(/https/i) ? 'https' : 'http';
this.tx.request.url = proto + '://' + location.hostname + this.tx.request.url;
}
else {
var base_url = location.href.replace(/\?.*$/, ""); 
if (!base_url.match(/\/$/)) base_url = base_url.replace(/\/[^\/]+$/, "/");
this.tx.request.url = base_url + this.tx.request.url;
}
}
try {
this._conn.open(this.tx.request.method, this.tx.request.url, true);
}
catch (e) {
this.tx.response.code = 502;
this.tx.response.data = e.toString();
this.tx._notifyComplete();
return;
}
var me = this;
this._conn.onreadystatechange = function() {
me.pollConnection();
};
for (var key in this.tx.request.headers)
this._conn.setRequestHeader( key, this.tx.request.headers[key] );
try {
this._conn.send( this.tx.request.data.length ? this.tx.request.data : null );
}
catch (e) {
this.tx.response.code = 503;
this.tx.response.data = e.toString();
this.tx._notifyComplete();
return;
}
this._inUse = true;
this._timeout = setTimeout( function() { me.callTimeout(); }, this._socketTimeout );
};
Ajax.Connection.prototype.callTimeout = function() {
this._conn.abort();
if (this._pollTimer) { clearInterval( this._pollTimer ); this._pollTimer = null; }
this._inUse = false;
this.tx.response.code = 504;
this.tx.response.data = 'Socket Timeout: ' + this.tx.request.url.replace(/\?.+$/, "?...");
this.tx._notifyComplete();
};
Ajax.Connection.prototype.pollConnection = function() {
if (this._inUse && this._conn && (this._conn.readyState == 4)) {
if (this._pollTimer) { clearInterval( this._pollTimer ); this._pollTimer = null; }
if (this._timeout) { clearTimeout( this._timeout ); this._timeout = null; }
this.complete();
} 
};
Ajax.Connection.prototype.complete = function() {
this._inUse = false;
if (!this._conn.status && this._conn.responseText.length) {
this.tx.response.code = 200;
}
else {
try {
if ((typeof(this._conn.status) != "undefined") && (this._conn.status != 0)) {
this.tx.response.code = this._conn.status;
}
else {
this.tx.response.code = 505;
this.tx.response.data = 'Could not determine HTTP Status Code';
}
}
catch(e) {
this.tx.response.code = 506;
this.tx.response.data = 'Could not determine HTTP Status Code';
}
try {
this.tx.response.headersRaw = this._conn.getAllResponseHeaders();
var headers = this.tx.response.headersRaw.split('\n');
for (var idx = 0; idx < headers.length; idx++){
var delimitPos = headers[idx].indexOf(':');
if (delimitPos != -1) {
this.tx.response.headers[headers[idx].substring(0, delimitPos)] = 
headers[idx].substring(delimitPos + 2);
}
}
}
catch (e) {
}
}
this.tx.response.data = '' + this._conn.responseText;
this.tx.response.xml = this._conn.responseXML ? this._conn.responseXML : null;
this.tx.response.statusLine = this._conn.statusText ? this._conn.statusText : '';
this.tx._notifyComplete();
}
Ajax.Request = function() {
this.method = 'POST';
this.url = '';
this.data = '';
this.headers = {};
};
Ajax.Response = function() {
this.code = 0;
this.data = '';
this.headers = {};
this.xml = null;
this.statusLine = '';
};
Ajax.Transaction = function() {
this.request = new Ajax.Request();
this.response = new Ajax.Response();
this.callback = null;
this.connection = null;
};
Ajax.Transaction.prototype._notifyComplete = function() {
if (typeof(this.callback) == 'function') this.callback( this );
else if (window[this.callback]) window[this.callback]( this );
else alert("ERROR: AJAX callback function is unknown: " + this.callback);
}
Ajax.ConnectionManager = function() {
this._connections = [];	
this.ie = !!navigator.userAgent.match(/MSIE/);
};
Ajax.ConnectionManager.prototype._createConnection = function() {
var obj = new Ajax.Connection();
this._connections[ this._connections.length ] = obj;
return obj;
};
Ajax.ConnectionManager.prototype._getConnection = function() {
for (var idx = 0; idx < this._connections.length; idx++) {
var conn = this._connections[idx];
if (!conn._inUse) return conn;
}
if (this.ie && this._connections.length > 0) return null;
return this._createConnection();
};
Ajax.ConnectionManager.prototype.inUse = function() {
var num = 0;
for (var idx = 0; idx < this._connections.length; idx++) {
var conn = this._connections[idx];
if (conn._inUse) num++;
}
if (!num && this.req_wait) num = true; 
return num;
}
Ajax.ConnectionManager.prototype.send = function(requestArgs, callback, userData) {
if (!userData) userData = {};
var tx = new Ajax.Transaction();
for (var key in requestArgs) tx.request[key] = requestArgs[key];
for (var key in userData) tx[key] = userData[key];
if (!callback) return this.doError( "callback is not set" );
if (!requestArgs.url) return this.doError( "url is not set" );
tx.callback = callback;
tx.connection = this._getConnection();
var me = this;
if (!tx.connection) {
this.req_wait = true;
setTimeout( function() {
me.send( requestArgs, callback, userData );
}, 100 );
return false;
}
this.req_wait = false;
tx.connection.send( tx );
return true;
};
Ajax.ConnectionManager.prototype.get = function(url, callback, userData) {
return this.send({
method: 'GET',
url: url
}, callback, userData );
}
Ajax.ConnectionManager.prototype.doError = function(msg) {
alert( "ERROR: " + msg );
}
Ajax.ConnectionManager.prototype.setSocketTimeout = function(sec) {
Ajax.Connection.prototype._socketTimeout = sec * 1000;
}
ajax = new Ajax.ConnectionManager();
if (!window.merge_objects || !window.serialize)
alert("ERROR: cookie.js requires tools.js.");
function CookieTree(args) {
if (args) {
for (var key in args) this[key] = args[key];
}
if (!this.expires) {
var now = new Date();
now.setFullYear( now.getFullYear() + 10 ); 
this.expires = now.toGMTString();
}
this.parse();
};
CookieTree.prototype.domain = location.hostname;
CookieTree.prototype.path = location.pathname;
CookieTree.prototype.parse = function() {
this.tree = {};
var cookies = document.cookie.split(/\;\s*/);
for (var idx = 0, len = cookies.length; idx < len; idx++) {
var cookie_raw = cookies[idx];
if (cookie_raw.match(/^CookieTree=(.+)$/)) {
var cookie = null;
var cookie_raw = unescape( RegExp.$1 );
Debug.trace("Cookie", "Parsing cookie: " + cookie_raw);
try {
eval( "cookie = " + cookie_raw + ";" );
}
catch (e) {
Debug.trace("Cookie", "Failed to parse cookie.");
cookie = {}; 
}
this.tree = merge_objects( this.tree, cookie );
idx = len;
}
}
};
CookieTree.prototype.get = function(key) {
return this.tree[key];
};
CookieTree.prototype.set = function(key, value) {
this.tree[key] = value;
};
CookieTree.prototype.save = function() {
var cookie_raw = 'CookieTree=' + escape(serialize(this.tree));
if (!this.path.match(/\/$/)) {
this.path = this.path.replace(/\/[^\/]+$/, "") + '/';
}
cookie_raw += '; expires=' + this.expires;
cookie_raw += '; domain=' + this.domain;
cookie_raw += '; path=' + this.path;
Debug.trace("Cookie", "Saving cookie: " + cookie_raw);
document.cookie = cookie_raw;
};
CookieTree.prototype.remove = function() {
var cookie_raw = 'CookieTree={}';
if (!this.path.match(/\/$/)) {
this.path = this.path.replace(/\/[^\/]+$/, "") + '/';
}
var now = new Date();
now.setFullYear( now.getFullYear() - 1 ); 
cookie_raw += '; expires=' + now.toGMTString();
cookie_raw += '; domain=' + this.domain;
cookie_raw += '; path=' + this.path;
document.cookie = cookie_raw;
};
var ww_char_widths = { 32: 0.33, 33: 0.33, 34: 0.4, 35: 0.66, 36: 0.66, 37: 1.03, 38: 0, 39: 0.22, 40: 0.4, 41: 0.4, 42: 0.44, 43: 0.7, 44: 0.33, 45: 0.4, 46: 0.33, 47: 0.33, 48: 0.66, 49: 0.66, 50: 0.66, 51: 0.66, 52: 0.66, 53: 0.66, 54: 0.66, 55: 0.66, 56: 0.66, 57: 0.66, 58: 0.33, 59: 0.33, 60: 0, 61: 0.7, 62: 0.7, 63: 0.66, 64: 1.18, 65: 0.77, 66: 0.77, 67: 0.85, 68: 0.85, 69: 0.77, 70: 0.74, 71: 0.92, 72: 0.85, 73: 0.33, 74: 0.59, 75: 0.77, 76: 0.66, 77: 1, 78: 0.85, 79: 0.92, 80: 0.77, 81: 0.92, 82: 0.85, 83: 0.77, 84: 0.74, 85: 0.85, 86: 0.77, 87: 1.11, 88: 0.77, 89: 0.77, 90: 0.74, 91: 0.33, 92: 0.33, 93: 0.33, 94: 0.55, 95: 0.66, 96: 0.4, 97: 0.66, 98: 0.66, 99: 0.59, 100: 0.66, 101: 0.66, 102: 0.33, 103: 0.66, 104: 0.66, 105: 0.25, 106: 0.25, 107: 0.59, 108: 0.25, 109: 1, 110: 0.66, 111: 0.66, 112: 0.66, 113: 0.66, 114: 0.4, 115: 0.59, 116: 0.33, 117: 0.66, 118: 0.59, 119: 0.85, 120: 0.59, 121: 0.59, 122: 0.59, 123: 0.4, 124: 0.29, 125: 0.4, 126: 0.7, 127: 1.18 };
document.write( '<span style="position:absolute; left:-1000px; top:0px; padding:0px; margin:0px;" id="ww_span"></span>' );
function ww_precalc_font(sty, callback) {
var css_type = !!sty.match(/:/) ? 'style' : 'class';
document.getElementById('ww_span').innerHTML = '<font '+css_type+'="'+sty+'">M</font>';
setTimeout( 'ww_precalc_font_finish("'+callback+'")', 1 );
}
function ww_precalc_font_finish(callback) {
var span = document.getElementById('ww_span');
window[ callback ]( span.offsetWidth, span.offsetHeight );
}
function ww_string_width(str, em_width) {
var len = str.length;
var width = 0;
for (var idx=0; idx<len; idx++) {
var ch = str.charCodeAt(idx);
if (ww_char_widths[ch]) width += (em_width * ww_char_widths[ch]);
else width += em_width;
}
return width;
}
function ww_fit_filename(filename, max_width, em_width) {
if (ww_string_width(filename, em_width) <= max_width) return filename;
var end = filename.lastIndexOf('.');
if (end == -1) end = filename.length;
if (end < 3) return filename; 
var tpos = Math.floor(end / 2);
var a = filename.substring(0,tpos);
var b = filename.substring(tpos + 1);
while (ww_string_width(a + '...' + b, em_width) > max_width) {
a = a.substring(0, a.length - 1); if (!a.length) return '...' + b;
b = b.substring(1); if (!b.length) return a + '...';
}
return a + '...' + b;
}
function ww_fit_array(arr, max_width, em_width, ellipsis, html) {
var output = [];
for (var idx = 0, len = arr.length; idx < len; idx++) {
output.push( ww_fit_string(arr[idx], max_width, em_width, ellipsis, html) );
}
return output;
}
function ww_fit_string(in_str, max_width, em_width, ellipsis, html) {
var str = '' + in_str;
var len = str.length;
var width = 0;
var state = 0;
var last_word_end = 0;
if (ellipsis == 1) max_width -= ww_string_width("...", em_width);
for (var idx=0; idx<len; idx++) {
var is_word_char = !!str.substring(idx, idx + 1).match(/\S/);
if ((state == 1) && !is_word_char) {
last_word_end = idx;
}
state = is_word_char ? 1 : 0;
var code = str.charCodeAt(idx);
if (ww_char_widths[code]) width += (em_width * ww_char_widths[code]);
else width += em_width;
if (width > max_width) {
if (!last_word_end) {
var final_str = str.substring(0, (ellipsis == 2) ? (idx - 3) : idx);
if (ellipsis) final_str += '...';
return html ? ('<nobr>'+final_str.replace(/\s/g, "&nbsp;")+'</nobr>') : final_str;
}
else {
var final_str = str.substring(0, last_word_end);
if (ellipsis == 1) final_str += '...';
return html ? ('<nobr>'+final_str.replace(/\s/g, "&nbsp;")+'</nobr>') : final_str;
}
} 
} 
return html ? str.replace(/\s/g, "&nbsp;") : str;
}
function ww_fit_box(str, max_width, max_lines, em_width, ellipsis, html) {
var line_idx = 0;
var char_idx = 0;
var final_str = '';
while (line_idx < max_lines) {
while (!!str.substring(char_idx, char_idx + 1).match(/\s/)) char_idx++;
var last_line = (line_idx == (max_lines - 1));
var temp_str = ww_fit_string( str.substring(char_idx), max_width, em_width, last_line ? ellipsis : 2, 0 );
final_str += temp_str;
char_idx += temp_str.length;
if (temp_str.match(/\.\.\.$/)) char_idx -= 3;
if (char_idx >= str.length) line_idx = max_lines;
else if (!last_line) final_str += "\n";
line_idx++;
} 
return html ? final_str.replace(/\n/g, "<br>").replace(/\s/g, "&nbsp;") : final_str;
}
var last_section = {};
var last_tab = '';
var rendering_page = true;
var years = [
[ 2002, '2002' ], [ 2003, '2003' ], [ 2004, '2004' ], [ 2005, '2005' ],
[ 2006, '2006' ], [ 2007, '2007' ], [ 2008, '2008' ], [ 2009, '2009' ],
[ 2010, '2010' ]
];
var months = [
[ 1, 'January' ], [ 2, 'February' ], [ 3, 'March' ], [ 4, 'April' ],
[ 5, 'May' ], [ 6, 'June' ], [ 7, 'July' ], [ 8, 'August' ],
[ 9, 'September' ], [ 10, 'October' ], [ 11, 'November' ],
[ 12, 'December' ]
];
var days = [
[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9], [10,10],
[11,11], [12,12], [13,13], [14,14], [15,15], [16,16], [17,17], [18,18], 
[19,19], [20,20], [21,21], [22,22], [23,23], [24,24], [25,25], [26,26],
[27,27], [28,28], [29,29], [30,30], [31,31]
];
var hours = [
[0, '12 AM'], [1, '1 AM'], [2, '2 AM'], [3, '3 AM'], [4, '4 AM'],
[5, '5 AM'], [6, '6 AM'], [7, '7 AM'], [8, '8 AM'], [9, '9 AM'],
[10, '10 AM'], [11, '11 AM'], [12, '12 PM'], [13, '1 PM'], 
[14, '2 PM'], [15, '3 PM'], [16, '4 PM'], [17, '5 PM'], [18, '6 PM'],
[19, '7 PM'], [20, '8 PM'], [21, '9 PM'], [22, '10 PM'], [23, '11 PM']
];
function mouse_icon_button(type, e, pt) {
switch (type) {
case 'mouseDown': this.className = 'icon_button_active'; return false; 
case 'mouseUp': this.className = 'icon_button'; break;
case 'click':
var self = this;
setTimeout( function() { invoke_dom_handler(self, 'onMouseClick'); }, 10 );
break;
}
return true; 
}
function icon_button(icon_name, text, code, width) {
var html = '';
html += '<table class="icon_button" cellspacing=0 cellpadding=0 captureMouse="mouse_icon_button"';
if (width) html += ' width="'+width+'"';
html += ' onMouseClick="'+code+'">';
html += '<tr>';
html += '<td width="16" style="padding-right:0px;">' + icon(icon_name) + '</td>';
if (!ie) html += '<td width="3" style="padding-right:0px;">' + spacer(3,1) + '</td>';
html += '<td align="center" width="*" onselectstart="return false" style="padding-right:0px;"><nobr>' + text + '</nobr></td>';
html += '</tr></table>';
return html;
}
function large_icon_button(icon_name, text, code, id, style, extra_classes) {
var html = '';
if (!icon_name) icon_name = '';
if (!icon_name.match(/\.\w+$/)) icon_name += '.gif';
if (!text) text = '';
if (!code) code = '';
if (!id) id = '';
if (!extra_classes) extra_classes = '';
if (code.toString().match(/^\#(.+)$/)) code = "Nav.go('"+RegExp.$1+"')";
html += '<div class="button '+extra_classes+'" id="'+id+'" onClick="'+code+'">';
html += '<ul>';
html += '<li class="left"></li>';
if (icon_name) html += '<li class="icon"><img src="'+png(icons_uri+'/'+icon_name, true)+'" class="png" width="16" height="16"/></li>';
html += '<li class="center" style="' + (icon_name ? 'padding-left:5px;' : '') + compose_style(style) + '">' + text + '</li>';
html += '<li class="right"></li>';
html += '</ul>';
html += '<div class="clear"></div>';
html += '</div>';
return html;
}
function get_icon_for(filename, id, text, code) {
if (!id) id = '';
if (!text) text = '';
if (!code) code = '';
var icon_name = '';
var ext = filename.replace(/^.+\.(\w+)$/, '$1').toLowerCase();
if (filename.match(/\/$/)) icon_name = 'folder.png';
else if (ext.match(/(js|sh|pl|pm|php|asp)/)) icon_name = 'page_white_code.png';
else if (ext.match(/(xml|xsl|dtd|txt|htm|html|css)/)) icon_name = 'page_white_text.png';
else if (ext.match(/(jpg|jpe|jpeg|bmp|gif|pcx|png|tif|tiff|psd)/)) icon_name = 'page_white_colorwheel.png';
else if (ext.match(/(as|swf|fla)/)) icon_name = 'page_white_flash.png';
else if (ext.match(/(doc)/)) icon_name = 'page_white_word.png';
else if (ext.match(/(xls)/)) icon_name = 'page_white_excel.png';
else if (ext.match(/(pdf)/)) icon_name = 'page_white_acrobat.png';
else if (ext.match(/(zip)/)) icon_name = 'page_white_zip.png';
else if (ext.match(/(mp3)/)) icon_name = 'page_white_audio.png';
else if (ext.match(/(flv|mp4|mp4v|mov|3gp|3g2)/)) icon_name = 'page_white_movie.png';
else if (ext.match(/(ttf|otf)/)) icon_name = 'page_white_font.png';
else icon_name = 'page_white.png';
return icon(icon_name, text, code, filename, id);
}
function get_color_preview(color) {
if (!color.match(/^\#/)) color = '#' + color;
var html = '';
html += '<table cellspacing="0" cellpadding="0"><tr>';
html += '<td style="margin:0; padding:0;"><div style="width:24px; height:14px; border:1px solid #aaa; background-color:'+color+';"></div></td>';
html += '<td style="margin:0; padding:0;">' + spacer(4,1) + '</td>';
html += '<td style="margin:0; padding:0;">' + color + '</td>';
html += '</tr></table>';
return html;
}
function busy() {
return '<img src="'+images_uri+'/busy.gif" width="16" height="16"/>';
}
function loading_image() {
return '<center><img src="'+images_uri+'/loading.gif" width="32" height="32"/></center>';
}
function begin_section(type, size, ext, table_attribs) {
if (typeof(size) == 'number') size = [size, size, size, size];
if (!ext || ie6) ext = 'gif';
last_section.type = type;
last_section.size = size;
last_section.ext = ext;
var png = (ext.toLowerCase() == 'png') ? true : false;
var html = '<table cellspacing=0 cellpadding=0 border=0 '+compose_attribs(table_attribs)+'><tr>';
html += '<td width="'+size[0]+'" height="'+size[1]+'"><img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/top_left.'+ext+'" width="'+size[0]+'" height="'+size[1]+'"></td>';
html += '<td width="*" height="'+size[1]+'" '+(png ? 'class="png" ' : '')+' background="'+images_uri+'/'+type+'/top.'+ext+'"><img src="'+images_uri+'/pixel.gif" width="1" height="1"></td>';
html += '<td width="'+size[2]+'" height="'+size[1]+'"><img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/top_right.'+ext+'" width="'+size[2]+'" height="'+size[1]+'"></td>';
html += '</tr><tr>';
html += '<td width="'+size[0]+'" height="*" '+(png ? 'class="png" ' : '')+'background="'+images_uri+'/'+type+'/left.'+ext+'"><img src="'+images_uri+'/pixel.gif" width="1" height="1"></td>';
html += '<td width="*" height="*">';
if (rendering_page) document.write(html); else return html;
}
function end_section(type, size, ext) {
if (typeof(size) == 'number') size = [size, size, size, size];
if (!type) type = last_section.type;
if (!size) size = last_section.size;
if (!ext) ext = last_section.ext;
if (ie6) ext = 'gif';
var png = (ext.toLowerCase() == 'png') ? true : false;
var html = '</td>';
html += '<td width="'+size[2]+'" height="*" '+(png ? 'class="png" ' : '')+'background="'+images_uri+'/'+type+'/right.'+ext+'"><img src="'+images_uri+'/pixel.gif" width="1" height="1"></td>';
html += '</tr><tr>';
html += '<td width="'+size[0]+'" height="'+size[3]+'"><img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/bottom_left.'+ext+'" width="'+size[0]+'" height="'+size[3]+'"></td>';
html += '<td width="*" height="'+size[3]+'" '+(png ? 'class="png" ' : '')+'background="'+images_uri+'/'+type+'/bottom.'+ext+'"><img src="'+images_uri+'/pixel.gif" width="1" height="1"></td>';
html += '<td width="'+size[2]+'" height="'+size[3]+'"><img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/bottom_right.'+ext+'" width="'+size[2]+'" height="'+size[3]+'"></td>';
html += '</tr></table>';
if (rendering_page) document.write(html); else return html;
}
function img8_bkgnd(lw, th, rw, bh) {
if (arguments.length == 1) { th = rw = bh = lw; }
else if (arguments.length == 2) { rw = lw; bh = th; }
return( 
'<table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%"><tr>' + 
'<td width="'+lw+'" height="'+th+'" class="tl"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' +
'<td width="*" height="'+th+'" class="t"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'<td width="'+rw+'" height="'+th+'" class="tr"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'</tr><tr>' + 
'<td width="'+lw+'" height="*" class="l"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'<td width="*" height="*" class="c"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'<td width="'+rw+'" height="*" class="r"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'</tr><tr>' + 
'<td width="'+lw+'" height="'+bh+'" class="bl"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'<td width="*" height="'+bh+'" class="b"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'<td width="'+rw+'" height="'+bh+'" class="br"><img src="'+images_uri+'/sp.gif" width="1" height="1"/></td>' + 
'</tr></table>'
);
}
function tab_bar(tabs, cur_tab_name) {
var lw = 10, th = 10, rw = 10;
var html = '';
html += '<div class="tab_bar">';
for (var idx = 0, len = tabs.length; idx < len; idx++) {
var tab = tabs[idx];
var code = tab[0];
if (code.toString().match(/^\#(.+)$/)) code = "Nav.go('"+RegExp.$1+"')";
html += '<div class="tab '+((tab[1] == cur_tab_name) ? 'active' : 'inactive')+'" onClick="'+code+'">';
html += '<div class="content ' + (tab[2] ? (' icon" style="background-image:url(images/icons/'+tab[2]+')"') : '"') + '>' + tab[1] + '</div>';
html += '</div>';
}
html += '<div class="clear"></div>';
html += '</div>';
return html;
}
function select_tab(id) {
$('tab_left_'+id).src = $('tab_left_'+id).src.replace(/_inactive_/, '_active_');
$('tab_middle_'+id).style.backgroundImage = $('tab_middle_'+id).style.backgroundImage.replace(/_inactive_/, '_active_');
$('tab_right_'+id).src = $('tab_right_'+id).src.replace(/_inactive_/, '_active_');
$('tab_text_'+id).className = 'tab_active';
$('page_'+id).show();
}
function deselect_tab(id) {
$('tab_left_'+id).src = $('tab_left_'+id).src.replace(/_active_/, '_inactive_');
$('tab_middle_'+id).style.backgroundImage = $('tab_middle_'+id).style.backgroundImage.replace(/_active_/, '_inactive_');
$('tab_right_'+id).src = $('tab_right_'+id).src.replace(/_active_/, '_inactive_');
$('tab_text_'+id).className = 'tab_inactive';
$('page_'+id).hide();
}
function click_tab(id) {
if (id != last_tab) {
if (last_tab) {
deselect_tab(last_tab);
safe_call('deactivate_page_'+last_tab);
}
select_tab(id);
last_tab = id;
if (!$('page_'+id).innerHTML.length) safe_call('init_page_'+id);
else safe_call('activate_page_'+id);
}
}
function begin_tabs(tabs, type, size, tab_height, ext, table_attribs) {
if (!ext) ext = 'gif';
last_section.type = type;
last_section.size = size;
last_section.ext = ext;
var png = (ext.toLowerCase() == 'png') ? true : false;
var html = '<table cellspacing=0 cellpadding=0 border=0 '+compose_attribs(table_attribs)+'>';
html += '<tr>';
html += '<td width="'+size+'" height="'+tab_height+'"><img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/tabs/top_left.'+ext+'" width="'+size+'" height="'+tab_height+'"></td>';
html += '<td width="*" height="'+tab_height+'">';
html += '<table width="100%" cellspacing=0 cellpadding=0 border=0><tr>';
for (var idx = 0, len = tabs.length; idx < len; idx++) {
var tab = tabs[idx];
var tab_mode = 'tab_inactive';
var click_action = 'onMouseDown="return false" onMouseUp="click_tab(\''+tab[1]+'\')"';
html += '<td width="'+size+'" height="'+tab_height+'" '+click_action+'>';
html += '<img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/tabs/'+tab_mode+'_left.'+ext+'" width="'+size+'" height="'+tab_height+'" id="tab_left_'+tab[1]+'">';
html += '</td>';
html += '<td '+(png ? 'class="png" ' : '')+'width="1" height="'+tab_height+'" '+click_action+' id="tab_middle_'+tab[1]+'" style="background-image:url('+images_uri+'/'+type+'/tabs/'+tab_mode+'_middle.'+ext+');">';
html += '<span id="tab_text_'+tab[1]+'" class="'+tab_mode+'">' + tab[0].toString().replace(/\s/g, "&nbsp;") + '</span>';
html += '</td>';
html += '<td width="'+size+'" height="'+tab_height+'" '+click_action+'>';
html += '<img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/tabs/'+tab_mode+'_right.'+ext+'" width="'+size+'" height="'+tab_height+'" id="tab_right_'+tab[1]+'">';
html += '</td>';
}
html += '<td width="*" height="'+tab_height+'" '+(png ? 'class="png" ' : '')+' background="'+images_uri+'/'+type+'/tabs/top.'+ext+'"><img src="'+images_uri+'/pixel.gif" width="1" height="1"></td>';
html += '</tr></table>';
html += '</td>';
html += '<td width="'+size+'" height="'+tab_height+'"><img '+(png ? 'class="png" ' : '')+'src="'+images_uri+'/'+type+'/tabs/top_right.'+ext+'" width="'+size+'" height="'+tab_height+'"></td>';
html += '</tr><tr>';
html += '<td width="'+size+'" height="*" '+(png ? 'class="png" ' : '')+'background="'+images_uri+'/'+type+'/left.'+ext+'"><img src="'+images_uri+'/pixel.gif" width="1" height="1"></td>';
html += '<td width="*" height="*" bgcolor=white>';
if (rendering_page) document.write(html); else return html;
}
function popup_fade_animate() {
if (session.popup_fade_screen_active) {
var div_amount = (session.popup_fade_target == 0.0) ? 4 : 8;
session.popup_fade_opacity += ((session.popup_fade_target - session.popup_fade_opacity) / div_amount);
var div = document.getElementById('lbox_overlay');
if (div) {
div.style.opacity = session.popup_fade_opacity;
if (ie) div.style.filter = 'alpha(opacity=' + parseInt(session.popup_fade_opacity * 100, 10) + ')';
div = null;
}
if (Math.abs(session.popup_fade_target - session.popup_fade_opacity) < 0.01) {
session.popup_fade_screen_active = 0;
if (!session.popup_fade_target) {
document.body.removeChild( $('lbox_overlay') );
if (ie) {
document.body.removeChild( $('lbox_msie_frame') );
}
if (0) {
var html = document.getElementsByTagName('html')[0];
html.style.height = 'auto';
html.style.width = 'auto';
html.style.overflow = '';
var body = document.getElementsByTagName('body')[0];
body.style.width = 'auto';
body.style.height = 'auto';
body.style.overflow = '';
body.style.marginRight = '0px';
}
if (safari) {
window.scrollBy(0, 1);
window.scrollBy(0, -1);
}
} 
}
else {
setTimeout( 'popup_fade_animate()', 33 );
}
}
}
function popup_fade_screen() {
if (!session.popup_dialog_active) {
if (0) {
var html = document.getElementsByTagName('html')[0];
html.style.height = '100%';
html.style.width = '100%';
html.style.overflow = 'hidden';
var body = document.getElementsByTagName('body')[0];
body.style.height = '100%';
body.style.overflow = 'hidden';
if (getInnerWindowSize().height < getScrollMax().height) {
body.style.marginRight = '16px';
}
}
if (ie && !$('lbox_msie_frame')) {
var ifr = document.createElement('IFRAME');
ifr.id = 'lbox_msie_frame';
document.body.appendChild(ifr);
}
if (!$('lbox_overlay')) {
var div = document.createElement('DIV');
div.id = 'lbox_overlay';
document.body.appendChild(div);
}
session.popup_fade_target = 0.4;
if (!session.popup_fade_screen_active) {
session.popup_fade_opacity = 0.0;
session.popup_fade_screen_active = 1;
popup_fade_animate();
}
}
}
function popup_restore_screen() {
if (session.popup_dialog_active) {
session.popup_fade_target = 0.0;
if (1) {
var html = document.getElementsByTagName('html')[0];
html.style.height = 'auto';
html.style.width = 'auto';
html.style.overflow = '';
var body = document.getElementsByTagName('body')[0];
body.style.width = 'auto';
body.style.height = 'auto';
body.style.overflow = '';
body.style.marginRight = '0px';
}
if (safari) {
window.scrollBy(0, 1);
window.scrollBy(0, -1);
}
if (!session.popup_fade_screen_active) {
session.popup_fade_opacity = 0.5;
session.popup_fade_screen_active = 1;
popup_fade_animate();
}
}
}
function show_popup_dialog(width, height, html) {
if (session.net_error) return;
if (window.gGameControl) {
gGameControl.pause();
gGameControl.setClickResume( false );
}
else {
if (window.Effect && Effect.Game && Effect.Game.inGame) Effect.Game.pause();
if (window.Effect && Effect.Game) Effect.Game.clickResume = false;
}
var popup = $('d_dialog_outer');
var doc_size = getInnerWindowSize();
var scroll = getScrollXY();
var outer_width = width + 24 + 24; 
var outer_height = height + 24 + 24; 
var left = Math.floor( (doc_size.width / 2) - (outer_width / 2) );
var top = Math.floor( ((doc_size.height / 2) - (outer_height / 2)) / 2 );
top += scroll.y;
top += 50;
popup.style.left = left + 'px';
popup.style.top = top + 'px';
popup.style.width = outer_width + 'px';
popup.style.height = outer_height + 'px';
var content = $('d_dialog_inner');
content.style.width = width + 'px';
content.style.height = height + 'px';
content.innerHTML = html;
popup.show();
if (!ie) popup_fade_screen();
session.popup_dialog_active = true;
delete session.progress;
safe_call('hook_show_popup_dialog');
}
function hide_popup_dialog() {
$('d_dialog_inner').innerHTML = '';
var popup = $('d_dialog_outer');
popup.left = "-4000px";
popup.hide();
if (!ie) popup_restore_screen();
session.popup_dialog_active = false;
delete session.hooks.keys[ENTER_KEY];
delete session.hooks.keys[ESC_KEY];
delete session.progress;
safe_call('hook_hide_popup_dialog');
if (window.gGameControl) {
gGameControl.setClickResume( true );
}
else if (window.Effect && Effect.Game) Effect.Game.clickResume = true;
}
function clear_notice() {
hide_popup_dialog();
fire_hook('after_notice');
}
function do_notice(title, msg, callback) {
hide_popup_dialog();
delete session.progress;
if (callback) session.hooks.after_notice = callback;
var html = '<table cellspacing=0 cellpadding=0><tr><td width=400 height=150 valign=center align=center>';
html += '<div class="dialog_title">'+title+'</div>';
html += text_to_html(msg);
html += '<br><br>';
html += '<table><tr>';
html += '<td>' + large_icon_button('check', 'Close', 'clear_notice()') + '</td>';
html += '</tr></table>';
html += '</td></tr></table>';
session.hooks.keys[ENTER_KEY] = 'clear_notice'; 
session.hooks.keys[ESC_KEY] = 'clear_notice'; 
show_popup_dialog(400, 150, html);
}
function clear_error() {
hide_popup_dialog();
fire_hook('after_error');
}
function do_error(msg, button_args, pure) {
hide_popup_dialog();
delete session.progress;
fire_hook('before_error');
var html = '<table cellspacing=0 cellpadding=0><tr><td width=400 height=250 valign=center align=center>';
html += '<img src="'+images_uri+'/icons/error.gif" width="33" height="32"><br>';
html += '<span class="subtitle" style="color:#f00;">Sorry, an error occurred:</span><br><br>';
html += '<div style="width:350px; height:150px; overflow-x:hidden; overflow-y:auto;">';
html += pure ? msg : text_to_html(msg);
html += '</div><br>';
html += '<table><tr>';
html += '<td>' + large_icon_button('check', 'Close', 'clear_error()') + '</td>';
if (button_args) {
html += '<td width=15>&nbsp;</td>';
html += '<td>' + large_icon_button.apply(window, button_args) + '</td>';
}
html += '</tr></table>';
html += '</td></tr></table>';
session.hooks.keys[ENTER_KEY] = 'clear_error'; 
session.hooks.keys[ESC_KEY] = 'clear_error'; 
show_popup_dialog(400, 250, html);
return null;
}
function show_progress_dialog(counter, title, remain_disp, button_args) {
if (session.progress) {
update_progress_dialog(counter, title);
return;
}
if (!counter) counter = 0;
var cx = Math.floor( counter * 196 );
var html = '';
html += '<center><br>';
html += '<span id="d_progress_title" class="subtitle">' + title + '</span><br><br>';
var opac_str = '';
if (counter == 1.0) opac_str = 'opacity:0.5; moz-opacity:0.5; filter:alpha(opacity=50);';
html += '<div style="position:relative; overflow:hidden; width:196px; height:20px; background-image:url('+images_uri+'/aquaprogressbar_bkgnd.gif);">';
html += '<div id="d_progress_bar" style="position:absolute; left:0px; top:0px; width:196px; height:20px; clip:rect(0px '+cx+'px 20px 0px);'+opac_str+'">';
html += '<img src="'+images_uri+'/aquaprogressbar.gif" width="196" height="20"/>';
html += '</div>';
html += '</div>';
html += '<br><span id="d_progress_caption" class="caption"></span>';
if (button_args) {
html += '<br/><br/><table><tr><td>';
html += large_icon_button.apply(window, button_args);
html += '<br clear="all"/></td></tr></table>';
}
html += '</center>';
show_popup_dialog(275, button_args ? 150 : 100, html);
session.progress = {
remain_disp: remain_disp,
start_counter: counter,
counter: counter,
counter_max: 1,
start_time: hires_time_now(),
last_update: hires_time_now(),
title: title
};
}
function hide_progress_dialog() {
hide_popup_dialog();
session.progress = null;
delete session.progress;
}
function update_progress_dialog(counter, title, caption) {
var now = hires_time_now();
var cx = Math.floor( counter * 196 );
var prog_div = $('d_progress_bar');
if (prog_div) {
prog_div.style.clip = 'rect(0px '+cx+'px 20px 0px)';
var opacity = (counter == 1.0) ? 0.5 : 1.0;
if ((opacity > 0) && (opacity < 1.0)) {
prog_div.style.opacity = opacity;
if (moz) prog_div.style.MozOpacity = opacity;
else if (ie) prog_div.style.filter = "alpha(opacity=" + parseInt(opacity * 100, 10) + ")";
}
else {
prog_div.style.opacity = 1.0;
if (moz) prog_div.style.MozOpacity = 1.0;
else if (ie) prog_div.style.filter = "";
}
}
if (title) session.progress.title = title;
var title_div = $('d_progress_title');
if (title_div) title_div.innerHTML = session.progress.title;
if (caption) {
var cap_div = $('d_progress_caption');
if (cap_div) cap_div.innerHTML = caption;
}
else if (session.progress.remain_disp) {
if (session.progress.start_time <= now - 5.0) {
var caption = '';
if ((counter > 0.0) && (counter < 1.0)) {
caption = get_nice_remaining_time(session.progress.start_time, now, counter, 1.0, true);
caption += ' remaining';
}
var cap_div = $('d_progress_caption');
if (cap_div) cap_div.innerHTML = caption;
}
} 
session.progress.last_update = now;
session.progress.counter = counter;
}
function safe_focus(id) {
if ($(id)) {
try { $(id).focus(); } catch (e) {;}
}
else setTimeout( "try { $('"+id+"').focus(); } catch (e) {;}", 1 );
}
function do_message(type, msg) {
$GR.growl(type, msg);
return;
}
function hide_message(id) {
if (session.message_id == id) {
if (ie) $('d_message').hide();
else animate_div_visibility('d_message_wrapper', false);
}
}
function menu( id, items, value, attribs ) {
if (typeof(value) == 'undefined') value = null;
var html = '<select name="'+id+'" id="'+id+'" '+compose_attribs(attribs)+'>';
for (var idx = 0, len = items.length; idx < len; idx++) {
var item = items[idx];
if (typeof(item) != 'object') item = [ items[idx], items[idx] ];
if (isa_array(item[0])) {
var subitems = item[0];
html += '<optgroup label="'+item[1]+'">';
for (var idy = 0, ley = subitems.length; idy < ley; idy++) {
var subitem = subitems[idy];
if (typeof(subitem) != 'object') subitem = [ subitems[idy], subitems[idy] ];
var selected = (subitem[0] == value) ? ' selected="selected"' : '';
html += '<option value="'+subitem[0]+'"' + selected + '>' + subitem[1] + '</option>';
}
html += '</optgroup>';
}
else {
var selected = (item[0] == value) ? ' selected="selected"' : '';
html += '<option value="'+item[0]+'"' + selected + '>' + item[1] + '</option>';
}
}
html += '</select>';
return html;
}
function insert_date_selector(prefix, epoch) {
var date = get_date_args(epoch);
var html = '';
html += menu( prefix + '_mon', months, date.mon );
html += menu( prefix + '_mday', days, date.mday );
html += menu( prefix + '_year', years, date.year );
return html;
}
function set_menu_date( prefix, epoch ) {
var date = get_date_args(epoch);
var mon = $( prefix + '_mon' );
if (mon) mon.selectedIndex = date.mon - 1;
var mday = $( prefix + '_mday' );
if (mday) mday.selectedIndex = date.mday - 1;
var year = $( prefix + '_year' );
if (year) year.selectedIndex = date.year - years[0][0];
}
function get_menu_date( prefix ) {
var mon = get_menu_value( prefix + '_mon' );
var mday = get_menu_value( prefix + '_mday' );
var year = get_menu_value( prefix + '_year' );
var date = new Date( year, mon - 1, mday, 0, 0, 0, 0 );
return parseInt( date.getTime() / 1000, 10 );
}
function animate_div(id) {
var div = $(id);
if (!div) return alert("Cannot find div: " + id);
div._timer = null;
var target = div._state ? div.scrollHeight : 0;
if (div._height != target) {
div._height += ((target - div._height) / 4);
if (Math.abs( target - div._height ) < 1.0) div._height = target;
div.style.height = '' + div._height + 'px';
if (div._mode == -1) div.scrollTop = div.scrollHeight;
else div.scrollTop = 0;
div._timer = setTimeout('animate_div("'+id+'");', 33);
}
else {
if (div._state) {
div.style.height = 'auto';
}
div.scrollTop = 0;
}
}
function animate_div_visibility(id, visible) {
var div = $(id);
if (typeof(div._state) == 'undefined') {
div._state = (div.style.display != 'none') ? true : false;
div._height = div._state ? div.scrollHeight : 0;
div.style.height = '' + (div._state ? 'auto' : '0px');
div.style.overflow = 'hidden';
div.scrollTop = 0;
}
else {
div._height = div.offsetHeight;
}
div.show();
div._state = visible;
div._mode = -1; 
if (!div._timer) animate_div(id);
var sc = document.getElementById('sc_' + id);
if (sc) {
var new_icon_name = visible ? 'arrow-down' : 'arrow-right';
if (sc.src.indexOf('_mini') > -1) new_icon_name += '_mini';
sc.src = images_uri + '/icons/' + new_icon_name + '.png';
}
if (visible && !div.innerHTML.length && div.getAttribute('onExpand')) 
eval( div.getAttribute('onExpand') );
}
function image_placeholder(text, width, height) {
return '<table cellspacing="0" cellpadding="0" width="'+width+'" height="'+height+'"><tr><td bgcolor="#dddddd" align="center" valign="center"><b>'+text+'</b></td></tr></table>';
}
function bad_field(id, msg) {
var field = $(id);
field.addClass('control_bad');
do_message("error", msg);
try { field.focus(); } catch(e) {;}
session.last_bad_field_id = id;
return false;
}
function clear_field_error() {
if (session.last_bad_field_id && $(session.last_bad_field_id)) $(session.last_bad_field_id).removeClass('control_bad');
}
function smart_sect_restore(sects, prefs) {
if (!sects) sects = [];
if (!prefs) prefs = {};
for (var idx = 0, len = sects.length; idx < len; idx++) {
var sect = sects[idx];
if (typeof(prefs[sect]) == 'undefined') prefs[sect] = 1;
if (prefs[sect] == 1) {
$(sect).show();
$(sect).style.height = '';
$('ctl_'+sect).removeClass('closed');
$('ctl_'+sect).addClass('open');
}
else {
$(sect).hide();
$('ctl_'+sect).removeClass('open');
$('ctl_'+sect).addClass('closed');
}
}
}
function smart_sect_toggle(sect, prefs) {
if (prefs[sect] == 0) {
animate_div_visibility(sect, true);
$('ctl_'+sect).removeClass('closed');
$('ctl_'+sect).addClass('open');
prefs[sect] = 1;
}
else {
animate_div_visibility(sect, false);
$('ctl_'+sect).removeClass('open');
$('ctl_'+sect).addClass('closed');
prefs[sect] = 0;
}
user_storage_mark();
}
function custom_fit(source_width, source_height, dest_width, dest_height) {
var width = dest_width;
var height = dest_height;
if ((dest_width <= source_width) || (dest_height <= source_height)) {
width = source_width;
height = source_height;
for (var idx = 0; idx < 2; idx++) {
if (width - dest_width > height - dest_height) {
if (width > dest_width) {
height = Math.floor( height / (width / dest_width) );
width = dest_width;
}
}
else {
if (height > dest_height) {
width = Math.floor( width / (height / dest_height) );
height = dest_height;
}
}
} 
if (!width) width = 1;
if (!height) height = 1;
}
return { width: width, height: height };
}
function fit_game_title(title) {
return ww_fit_string(title, 550, session.em_width, 1);
}
function render_user_stats(stats) {
var html = '';
html += '<div class="article_info_floater">';
html += '<div class="article_info_header">' + icon('chart_pie.png', 'User Stats') + '</div>';
html += '<div class="stats_row"><b>Logins:</b>&nbsp;' + commify(stats.Logins || 0) + '</div>';
html += '<div class="stats_row"><b>Articles:</b>&nbsp;' + commify(stats.Articles || 0) + '</div>';
html += '<div class="stats_row"><b>Comments:</b>&nbsp;' + commify(stats.Comments || 0) + '</div>';
html += '<div class="stats_row"><b>Games:</b>&nbsp;' + commify(stats.Games || 0) + '</div>';
html += '</div>';
return html;
}
function get_speech_bubble(color, content) {
var bubble_uri = images_uri + '/speech_bubbles/' + color;
var html = '';
html += '<table cellspacing=0 cellpadding=0 border=0><tr>';
html += '<td width="24" height="14"><img class="png" src="'+png(bubble_uri+'_tl.png', true)+'" width="24" height="14"/></td>';
html += '<td width="*" height="14" class="png" background="'+png(bubble_uri+'_tm.png', true)+'">'+spacer(1,14)+'</td>';
html += '<td width="24" height="14"><img class="png" src="'+png(bubble_uri+'_tr.png', true)+'" width="24" height="14"/></td>';
html += '</tr><tr>';
html += '<td width="24" height="*" class="png" background="'+png(bubble_uri+'_ml.png', true)+'">'+spacer(24,1)+'</td>';
html += '<td width="*" height="*" class="png" background="'+png(bubble_uri+'_mi.png', true)+'">';
html += '<div ';
if (!ie6) {
html += 'style="';
if (!ie7) html += 'margin-left:-5px; margin-right:-5px; ';
html += 'margin-top:-7px; margin-bottom:-7px; overflow:visible; position:relative;"';
}
html += '>';
html += content;
html += '</div></td>';
html += '<td width="24" height="*" class="png" background="'+png(bubble_uri+'_mr.png', true)+'">'+spacer(24,1)+'</td>';
html += '</tr><tr>';
html += '<td width="24" height="17"><img class="png" src="'+png(bubble_uri+'_bl.png', true)+'" width="24" height="17"/></td>';
html += '<td width="*" height="17" class="png" background="'+png(bubble_uri+'_bm.png', true)+'">'+spacer(1,17)+'</td>';
html += '<td width="24" height="17"><img class="png" src="'+png(bubble_uri+'_br.png', true)+'" width="24" height="17"/></td>';
html += '</tr></table>';
return html;
}
function get_chat_balloon(color, username, chat_text) {
var html = '<div class="chat_msg_bubble"><table><tr><th valign="bottom" onClick="Nav.go(\'User/'+username+'\')" style="cursor:pointer;" title="'+username+'">';
html += get_buddy_icon_display(username, true, false);
html += '</th>';
var user_span = '';
user_span += '<span class="chat_msg_text"';
user_span += '>';
user_span += chat_text;
user_span += '</span>';
html += '<td valign="bottom"';
html += '>';
html += get_speech_bubble( color, user_span );
html += '</td></tr></table></div>';
return html;
}
function bar(count, max, width) {
if (!max) max = 1; 
var a_width = Math.floor( (count / max) * width );
var b_width = Math.floor( ((max - count) / max) * width );
var html = '';
html += '<div style="width:'+width+'px; height:14px;">';
html += '<div class="bar_inner" style="width:'+a_width+'px;">';
html += '</div>';
html += '</div>';
return html;
}
function get_ticket_number_disp(num) {
num = num.toString();
return "#" + num;
}
function png(url, no_alpha_dither) {
if (ie6 && url.match(/\.png/)) {
if (url.match(/^images\//)) {
url = url.replace(/^images\//, '/effect/api/image/');
}
else if (url.match(/^\/effect\/images\//)) {
url = url.replace(/^\/effect\/images\//, '/effect/api/image/');
}
if (url.match(/\?/)) url += '&'; else url += '?';
url += 'format=gif';
if (no_alpha_dither) url += '&noalphadither=1';
}
return url;
}
var dblclick_threshold = 0.25;
var SPACE_BAR = 32;
var ENTER_KEY = 13;
var ESC_KEY = 27;
var DELETE_KEY = 8;
var TAB_KEY = 9;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var mozKeyMap = {
192: '~',
187: '=',
189: '-',
111: '/',
106: '*',
109: '-',
219: '[',
221: ']',
220: "\\",
103: '7',
104: '8',
105: '9',
107: '+',
186: ':',
222: '\'',
100: '4',
101: '5',
102: '6',
188: ',',
190: '.',
191: '/',
97: '1',
98: '2',
99: '3',
96: '0',
110: '.'
};
var keyCodeTitleMap = {
8: 'Backspace',
9: 'Tab',
27: 'Escape', 
32: 'Space',
192: 'Tilde',
187: 'Equals',
189: 'Dash',
45: 'Insert',
36: 'Home',
33: 'Page Up',
144: 'Num Lock',
111: 'Slash (Keypad)',
106: 'Asterisk (Keypad)',
109: 'Dash (Keypad)',
219: 'Left Bracket',
221: 'Right Bracket',
220: "Backslash",
46: 'Delete',
35: 'End',
34: 'Page Down',
103: '7 (Keypad)',
104: '8 (Keypad)',
105: '9 (Keypad)',
107: 'Plus (Keypad)',
186: 'Semicolon',
222: 'Quote',
13: 'Enter',
100: '4 (Keypad)',
101: '5 (Keypad)',
102: '6 (Keypad)',
188: 'Comma',
190: 'Period',
191: 'Slash',
38: 'Up Arrow',
97: '1 (Keypad)',
98: '2 (Keypad)',
99: '3 (Keypad)',
17: 'Control',
37: 'Left Arrow',
40: 'Down Arrow',
39: 'Right Arrow',
96: '0 (Keypad)',
110: 'Period (Keypad)',
16: 'Shift',
18: 'Alt/Option',
224: 'Meta/Cmd'
};
function get_nice_key_name(keyCode) {
if (keyCodeTitleMap[keyCode]) return keyCodeTitleMap[keyCode];
else {
var ch = String.fromCharCode(keyCode);
if ( ((keyCode >= 65) && (keyCode <= 90)) || ((keyCode >= 45) && (keyCode <= 57)) ) {
return ch;
}
else {
return 'Unknown (#' + keyCode + ')';
}
}	
}
function fix_key_code(keyCode) {
switch (keyCode) {
case 59: keyCode = 186; break; 
case 91:
case 93: keyCode = 224; break; 
}
return keyCode;
}
function get_mouse_coords(e, obj) {
var pt = {};
if (document.all) {
pt.x = e.clientX;
pt.y = e.clientY;
}
else {
pt.x = e.pageX;
pt.y = e.pageY;
}
if (obj) {
var info = get_dom_object_info(obj);
pt.x -= info.left;
pt.y -= info.top;
}
return pt;
}
function get_dom_object_info(obj) {
var info = {
left: 0, 
top: 0, 
width: obj.width ? obj.width : obj.offsetWidth, 
height: obj.height ? obj.height : obj.offsetHeight
};
while (obj) {
info.left += obj.offsetLeft;
info.top += obj.offsetTop;
obj = obj.offsetParent;
}
return info;
}
function delay_onChange_input_text(e) {
if (!e) e = window.event;
var ch = 0;
if (e.keyCode) ch = e.keyCode;
else if (e.which) ch = e.which;
if (ch == 13) {
if (this.getAttribute('onEnter')) invoke_dom_handler(this, 'onEnter');
if (e.preventDefault) {
e.preventDefault();
e.stopPropagation();
}
else {
e.returnValue = false;
e.cancelBubble = true;
}
return false;
}
if (this.getAttribute('onChange')) {
var obj = this;
setTimeout( function() { invoke_dom_handler(obj, 'onChange'); }, 1 );
}
return true;
}
function delay_onChange_textarea() {
if (this.getAttribute('onChange')) {
var obj = this;
setTimeout( function() { invoke_dom_handler(obj, 'onChange'); }, 1 );
}
return true;
}
function invoke_dom_handler(target, handlerName) {
if (typeof(target[handlerName]) == 'function') return target[handlerName](); 
var handler = target.getAttribute(handlerName);
if (!handler) return false;
var code = handler.toString ? handler.toString() : handler;
if (code.match(/^function\s+\w+\(\)/)) {
code = code.substring( code.indexOf("{") + 1, code.lastIndexOf("}") ) + "\r;";
}
target['__temp'] = new Function( code );
target['__temp']();
}
var received_mouse_down = false;
var received_mouse_up = false;
function pass_event_if(state, e) {
if (!received_mouse_down || !received_mouse_up) return true;
if (state) return true; 
else return stop_event(e);
}
function stop_event(e) {
if (e.preventDefault) {
e.preventDefault();
e.stopPropagation();
}
else {
e.returnValue = false;
e.cancelBubble = true;
}
return false;
}
function stop_textarea_key_event(e) {
if (!e) e = window.event;
if (e && !e.metaKey && !e.ctrlKey) {
return stop_event(e);
}
else return true;
}
var mouseObj = null; 
function app_mouse_down(e) {
received_mouse_down = true;
if (!e) e = window.event;
if (window.session) session.mouseIsDown = true;
if (window.session && session.progress) {
stop_event(e);
return false; 
}
if (window.session) session.last_mouse_event = e;
var targetObj = e.target ? e.target : e.srcElement;
while (targetObj && !targetObj.tagName.match(/^(BODY|HTML)$/) && !targetObj.getAttribute('captureMouse') && !targetObj.captureMouse) {
targetObj = targetObj.parentNode ? targetObj.parentNode : targetObj.parentElement;
}
if (targetObj && targetObj.getAttribute('captureMouse')) {
var pt = get_mouse_coords(e, targetObj);
mouseObj = targetObj;
targetObj['__captureMouse'] = eval( 'window.' + targetObj.getAttribute('captureMouse') );
if (!targetObj['__captureMouse']) return alert("captureMouse handler not found: " + targetObj.getAttribute('captureMouse'));
var result = pass_event_if( targetObj.__captureMouse('mouseDown', e, pt), e );
if (!result) return false; 
}
else if (targetObj && targetObj.captureMouse) {
var pt = get_mouse_coords(e, targetObj);
mouseObj = targetObj;
if (mouseObj.captureMouse.onMouseDown) {
var handlers = always_array( mouseObj.captureMouse.onMouseDown );
for (var idx = 0, len = handlers.length; idx < len; idx++) {
var result = pass_event_if(
(typeof(handlers[idx]) == 'function') ? 
handlers[idx].apply( mouseObj.captureMouse, [e, pt]) : 
window[handlers[idx]].apply( mouseObj.captureMouse, [e, pt]), 
e );
if (!result) return false; 
} 
} 
} 
var pt = get_mouse_coords(e);
if (window.session) {
session.mousePt = pt;
}
return true; 
}
function app_mouse_move(e) {
if (!e) e = window.event;
var globalPt = get_mouse_coords(e);
if ((globalPt.x < 0) || (globalPt.y < 0)) return true;
if (mouseObj && mouseObj.__captureMouse) {
var pt = get_mouse_coords(e, mouseObj);
var result = pass_event_if( mouseObj.__captureMouse('mouseMove', e, pt), e );
if (!result) return false; 
}
else if (mouseObj && mouseObj.captureMouse && mouseObj.captureMouse.onMouseMove) {
var pt = get_mouse_coords(e, mouseObj);
var handlers = always_array( mouseObj.captureMouse.onMouseMove );
for (var idx = 0, len = handlers.length; idx < len; idx++) {
var result = pass_event_if( 
(typeof(handlers[idx]) == 'function') ? 
handlers[idx].apply( mouseObj.captureMouse, [e, pt]) : 
window[handlers[idx]].apply( mouseObj.captureMouse, [e, pt]), 
e );
if (!result) return false; 
} 
} 
if (window.session) session.mousePt = globalPt;
safe_call('notify_mouse_move', e);
return true; 
}
function app_mouse_up(e) {
received_mouse_up = true;
if (!e) e = window.event;
if (window.session) session.last_mouse_event = e;
if (window.session) session.mouseIsDown = false;
var globalPt = get_mouse_coords(e);
if (mouseObj && mouseObj.__captureMouse) {
var pt = get_mouse_coords(e, mouseObj);
var result = pass_event_if( mouseObj.__captureMouse('mouseUp', e, pt), e );
if (1 || ((pt.x >= 0) && (pt.y >= 0) && (pt.x < mouseObj.offsetWidth) && (pt.y < mouseObj.offsetHeight))) {
if (mouseObj.__lastClick && (mouseObj.__lastClick > hires_time_now() - dblclick_threshold))
result = pass_event_if( mouseObj.__captureMouse('doubleClick', e, pt), e );
else
result = pass_event_if( mouseObj.__captureMouse('click', e, pt), e );
mouseObj.__lastClick = hires_time_now();
}
mouseObj = null;
if (!result) return false; 
}
else if (mouseObj && mouseObj.captureMouse) {
var pt = get_mouse_coords(e, mouseObj);
var result = true;
var handlers = mouseObj.captureMouse.onMouseUp ? always_array( mouseObj.captureMouse.onMouseUp ) : [];
var capMouse = mouseObj.captureMouse;
mouseObj = null;
for (var idx = 0, len = handlers.length; idx < len; idx++) {
var result = (typeof(handlers[idx]) == 'function') ? 
handlers[idx].apply( capMouse, [e, pt]) : 
window[handlers[idx]].apply( capMouse, [e, pt]);
if (!result) return stop_event(e);
}
if (!result) return false; 
}
if (window.session) session.mousePt = globalPt;
return true;
}
function ie_dblclick(e) {
if (!e) e = window.event;
app_mouse_down(e);
return app_mouse_up(e);
}
function app_key_down(e) {
if (!e) e = window.event;
if (window.session) session.last_key_event = e;
var ch = fix_key_code( e.keyCode );
if (window.session && session.hooks.keys[ch]) {
var func = session.hooks.keys[ch];
delete session.hooks.keys[ch];
var result = pass_event_if( isa_array(func) ? func[0][ func[1] ](func[2]) : window[func](), e );
return result;
}
var result = pass_event_if( fire_hook('key_down', e), e );
if (!result) return false;
safe_call('notify_key_down', e);
return true;
}
function app_key_up(e) {
if (!e) e = window.event;
if (window.session) session.last_key_event = e;
var ch = fix_key_code( e.keyCode );
var result = pass_event_if( fire_hook('key_up', e), e );
if (!result) return false;
return true;
}
if (!window.no_hooky) {
if (window.addEventListener) {
window.addEventListener( 'mousedown', app_mouse_down, false );
window.addEventListener( 'mousemove', app_mouse_move, false );
window.addEventListener( 'mouseup', app_mouse_up, false );
window.addEventListener( 'keydown', app_key_down, false );
window.addEventListener( 'keyup', app_key_up, false );
}
else {
if (document.captureEvents) {
document.captureEvents(Event.MOUSEDOWN);
document.captureEvents(Event.MOUSEMOVE);
document.captureEvents(Event.MOUSEUP);
document.captureEvents(Event.KEYDOWN);
document.captureEvents(Event.KEYUP);
}
var body = document.body ? document.body : document.getElementsByTagName('body')[0];
if (!body) body = {};
window.onmousedown = document.onmousedown = body.onmousedown = app_mouse_down;
window.onmousemove = document.onmousemove = body.onmousemove = app_mouse_move;
window.onmouseup = document.onmouseup = body.onmouseup = app_mouse_up;
parent.onkeydown = window.onkeydown = document.onkeydown = app_key_down;
parent.onkeyup = window.onkeyup = document.onkeyup = app_key_up;
if (ie) {
window.ondblclick = document.ondblclick = body.ondblclick = ie_dblclick;
}
}
}
var webcam_callback = null;
function get_webcam_html(width, height) {
var html = '';
if (ie) {
html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="webcam" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="false" /><param name="movie" value="webcam.swf" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" />	</object>';
}
else {
html += '<embed id="webcam" src="webcam.swf" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="webcam" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
}
return html;
}
function webcam_snap(url, callback) {
if (callback) webcam_callback = callback;
else webcam_callback = null;
Debug.trace('webcam', 'Sending snapshot to: ' + url);
session.webcam_in_progress = true;
var movie = $('webcam');
movie._snap( url );
}
function webcam_configure(panel) {
if (!panel) panel = "camera";
var movie = $('webcam');
movie._configure(panel);
}
function webcam_flash_notify(type, msg) {
Debug.trace('webcam', 'Flash Notify: ' + type);
switch (type) {
case 'flashLoadComplete':
session.webcam_loaded = true;
safe_call('notify_webcam_loaded');
if (!session.cookie.get('wbfuse')) {
webcam_configure();
session.cookie.set('wbfuse', 1);
session.cookie.save();
}
break;
case 'debug':
alert("Flash Debug: " + msg);
break;
case 'error':
alert("Flash Error: " + msg);
session.webcam_in_progress = false;
break;
case 'success':
session.webcam_in_progress = false;
if (webcam_callback) window[webcam_callback](msg);
break;
default:
alert("webcam_flash_notify: " + type + ": " + msg);
break;
}
}
var zero_client;
function uploadQueueStart(client, stats) {
Debug.trace('upload', "Upload queue starting now");
show_progress_dialog( 0, 'Starting Upload...', true );
session.upload_in_progress = 1;
}
function uploadFileStart(client, stats) {
Debug.trace('upload', "Upload file starting now");
update_progress_dialog(stats.progress, "Uploading file " + stats.currentFileNum + " of " + stats.numFiles + "...");
}
function uploadProgress(client, stats) {
update_progress_dialog(stats.progress);
}
function uploadFileComplete(client, stats) {
Debug.trace('upload', "Upload file complete");
update_progress_dialog(stats.progress);
}
function uploadQueueComplete() {
Debug.trace('upload', "Upload queue complete");
session.upload_in_progress = 0;
update_progress_dialog(1.0);
fire_callback( session.upload_callback );
}
function uploadError(client, msg) {
session.upload_in_progress = 0;
do_error("Upload Error: " + msg);
}
function upload_basic() {
hide_popup_dialog();
delete session.progress;
var html = '';
html += '<iframe id="i_upload_basic" src="blank.html" style="position:absolute; left:-2000px; top:0px; width:1px; height:1px;"></iframe>';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('/effect/images/big_icons/upload.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=400 height=200 valign=center align=center>';
html += '<div class="dialog_title">Upload File</div>';
html += '<div class="caption">Want to upload multiple files at once?  Please upgrade to the latest <a href="http://www.adobe.com/products/flashplayer/" target="_blank">Flash Player</a>, then reload this page.  For some reason our Flash based uploader did not load, so you are currently using our single file uploader.</div>';
html += spacer(1,20) + '<br/>';
var url = zero_client.targetURL;
if (url.indexOf('?') > -1) url += '&'; else url += '?';
url += 'format=jshtml&onafter=' + escape('window.parent.upload_basic_finish(response);');
Debug.trace('upload', "Prepping basic upload: " + url);
html += '<form id="f_upload_basic" method="post" enctype="multipart/form-data" target="i_upload_basic" action="'+url+'">';
html += '<div id="d_upload_form">';
html += '<input type="file" name="Filedata"/><br/>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "hide_popup_dialog()") + '</td>';
html += '<td width=50>&nbsp;</td>';
html += '<td>' + large_icon_button('page_white_get.png', '<b>Upload</b>', "upload_basic_go()") + '</td>';
html += '</tr></table>';
html += '</div>';
html += '<div id="d_upload_progress" style="display:none">';
html += '<img src="'+images_uri+'/aquaprogressbar.gif" width="196" height="20"/>';
html += '</div>';
html += '</form>';
html += '</div>';
session.hooks.keys[ESC_KEY] = 'hide_popup_dialog'; 
show_popup_dialog(528, 200, html);
}
function upload_basic_go() {
$('f_upload_basic').submit();
$('d_upload_form').hide();
$('d_upload_progress').show();
}
function upload_basic_finish(response) {
Debug.trace('upload', "Basic upload complete: " + dumper(response));
setTimeout( 'upload_basic_finish_2()', 100 );
}
function upload_basic_finish_2() {
$('i_upload_basic').src = 'blank.html';
setTimeout( 'upload_basic_finish_3()', 100 );
}
function upload_basic_finish_3() {
hide_popup_dialog();
delete session.progress;
show_progress_dialog( 0, 'Finishing Upload...', true );
fire_callback( session.upload_callback );
}
function upload_destroy() {
if (zero_client) {
zero_client.destroy();
delete ZeroUpload.clients[ zero_client.id ];
zero_client = null;
}
}
function prep_upload(dom_id, url, callback, types) {
session.upload_callback = callback;
if (url) {
if (url.indexOf('?') > -1) url += '&'; else url += '?';
url += 'session=' + session.cookie.get('effect_session_id');
}
upload_destroy();
zero_client = new ZeroUpload.Client();
if (url) zero_client.setURL( url );
zero_client.setHandCursor( true );
if (types) zero_client.setFileTypes( types[0], types[1] );
zero_client.addEventListener( 'queueStart', uploadQueueStart );
zero_client.addEventListener( 'fileStart', uploadFileStart );
zero_client.addEventListener( 'progress', uploadProgress );
zero_client.addEventListener( 'fileComplete', uploadFileComplete );
zero_client.addEventListener( 'queueComplete', uploadQueueComplete );
zero_client.addEventListener( 'error', uploadError );
zero_client.addEventListener( 'debug', function(client, eventName, args) {
Debug.trace('upload', "Caught event: " + eventName);
} );
if (dom_id) {
Debug.trace('upload', "Gluing ZeroUpload to: " + dom_id);
zero_client.glue( dom_id );
}
}
Class.create( 'Debug', {
__static: {
enabled: false,
categories: { all: 1 }, 
buffer: [], 
max_rows: 5000, 
win: null, 
ie: !!navigator.userAgent.match(/MSIE/),
ie6: !!navigator.userAgent.match(/MSIE\D+6/),
init: function() {
Debug.enabled = true;
Debug.trace( 'debug', 'Debug log start' );
var html = '<p align="right"><input type="button" value="Debug..." onClick="Debug.show()"/></p>';
if (Debug.ie) {
setTimeout( function() {
document.body.insertAdjacentHTML('beforeEnd',
'<div id="d_debug" style="position:absolute; z-index:101; left:0px; top:0px; width:100%;">' + html + '</div>'
);
}, 1000 );
}
else {
var div = document.createElement('DIV');
div.id = 'd_debug';
div.setAttribute('id', 'd_debug');
div.style.position = Debug.ie6 ? 'absolute' : 'fixed';
div.style.zIndex = '101';
div.style.left = '0px';
div.style.top = '0px';
div.style.width = '100%';
div.innerHTML = html;
document.getElementsByTagName('body')[0].appendChild(div);
}
},
show: function() {
if (!Debug.win || Debug.win.closed) {
Debug.trace('debug', "Opening debug window");
Debug.win = window.open( '', 'DebugWindow', 'width=600,height=500,menubar=no,resizable=yes,scrollbars=yes,location=no,status=no,toolbar=no,directories=no' );
if (!Debug.win) return alert("Failed to open window.  Popup blocker maybe?");
var doc = Debug.win.document;
doc.open();
doc.writeln( '<html><head><title>Debug Log</title></head><body onLoad="window.opener.Debug.refresh_console()">' );
doc.writeln( '<div id="d_debug_log"></div>' );
doc.writeln( '<hr/>' );
doc.writeln( '<form action="javascript:void(window.opener.Debug.console_execute())" style="margin:0; padding:0;"><table width="100%"><tr>' );
doc.writeln( '<td width="*"><input type="text" id="fe_command" style="width:100%;"/></td>' );
doc.writeln( '<td width="50"><input type=button value="Clear" onClick="document.getElementById(\'d_debug_log\').innerHTML = \'\';"/></td>' );
doc.writeln( '</tr></table></form>' );
doc.writeln( '</body></html>' );
doc.close();
}
Debug.win.focus();
},
console_execute: function() {
var cmd = Debug.win.document.getElementById('fe_command');
if (cmd.value.length) {
Debug.trace( 'console', cmd.value );
try {
Debug.trace( 'console', '' + eval(cmd.value) );
}
catch (e) {
Debug.trace( 'error', 'JavaScript Interpreter Exception: ' + e.toString() );
}
}
},
get_time_stamp: function(now) {
var date = new Date( now * 1000 );
var hh = date.getHours(); if (hh < 10) hh = "0" + hh;
var mi = date.getMinutes(); if (mi < 10) mi = "0" + mi;
var ss = date.getSeconds(); if (ss < 10) ss = "0" + ss;
var sss = '' + date.getMilliseconds(); while (sss.length < 3) sss = "0" + sss;
return '' + hh + ':' + mi + ':' + ss + '.' + sss;
},
refresh_console: function() {
if (!Debug.win || Debug.win.closed) return;
var div = Debug.win.document.getElementById('d_debug_log');
if (div) {
var row = null;
while ( row = Debug.buffer.shift() ) {
var time_stamp = Debug.get_time_stamp(row.time);
var msg = row.msg;
msg = msg.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
msg = msg.replace(/</g, "&lt;");
msg = msg.replace(/>/g, "&gt;");
msg = msg.replace(/\n/g, "<br>\n");
var html = '';
var sty = 'float:left; font-family: Consolas, Courier, mono; font-size: 12px; cursor:default; margin-right:10px; margin-bottom:1px; padding:2px;';
html += '<div style="'+sty+' background-color:#eee;">' + time_stamp + '</div>';
html += '<div style="'+sty+' background-color:#eee; width:60px; overflow:hidden;">' + row.cat + '</div>';
html += '<div style="'+sty+' background-color:#fff; word-break:break-all;">' + msg + '</div>';
html += '<br clear="all"/>';
var chunk = Debug.win.document.createElement('DIV');
chunk.style['float'] = 'none';
chunk.innerHTML = html;
div.appendChild(chunk);
}
var cmd = Debug.win.document.getElementById('fe_command');
cmd.focus();
} 
Debug.dirty = 0;
Debug.win.scrollTo(0, 99999);
},
hires_time_now: function() {
var now = new Date();
return ( now.getTime() / 1000 );
},
trace: function(cat, msg) {
if (arguments.length == 1) {
msg = cat;
cat = 'debug';
}
if (Debug.categories.all || Debug.categories[cat]) {
Debug.buffer.push({ cat: cat, msg: msg, time: Debug.hires_time_now() });
if (Debug.buffer.length > Debug.max_rows) Debug.buffer.shift();
if (!Debug.dirty) {
Debug.dirty = 1; 
setTimeout( 'Debug.refresh_console();', 1 );
}
}
}
} 
} ); 
var session = {
inited: false,
api_mod_cache: {},
query: parseQueryString( ''+location.search ),
cookie: new CookieTree({ path: '/effect/' }),
storage: {},
storage_dirty: false,
hooks: {
keys: {}
},
username: '',
em_width: 11,
audioResourceMatch: /\.mp3$/i,
imageResourceMatch: /\.(jpe|jpeg|jpg|png|gif)$/i,
textResourceMatch: /\.xml$/i,
movieResourceMatch: /\.(flv|mp4|mp4v|mov|3gp|3g2)$/i,
imageResourceMatchString: '\.(jpe|jpeg|jpg|png|gif)$'
};
session.debug = session.query.debug ? true : false;
var page_manager = null;
var preload_icons = [];
var preload_images = [
'loading.gif',
'aquaprogressbar.gif', 
'aquaprogressbar_bkgnd.gif'
];
function get_base_url() {
return protocol + '://' + location.hostname + session.config.BaseURI;
}
function effect_init() {
if (session.inited) return;
session.inited = true;
assert( window.config, "Config not loaded" );
session.config = window.config;
Debug.trace("Starting up");
rendering_page = false;
preload();
window.$R = {};
for (var key in config.RegExpShortcuts) {
$R[key] = new RegExp( config.RegExpShortcuts[key] );
}
ww_precalc_font("body", "effect_precalc_font_finish");
page_manager = new Effect.PageManager( config.Pages.Page );
var session_id = session.cookie.get('effect_session_id');
if (session_id && session_id.match(/^login/)) {
do_session_recover();
}
else {
show_default_login_status();
Nav.init();
}
Blog.search({
stag: 'sidebar_docs',
limit: 20,
title_only: true,
sort_by: 'seq',
sort_dir: -1,
target: 'd_sidebar_documents',
outer_div_class: 'sidebar_blog_row',
title_class: 'sidebar_blog_title',
after: '<div class="sidebar_see_more">&rarr; <a href="#ArticleCategory/docs">See More...</a></div>'
});
Blog.search({
stag: 'sidebar_tutorials',
limit: 5,
title_only: true,
sort_by: 'seq',
sort_dir: -1,
target: 'd_sidebar_tutorials',
outer_div_class: 'sidebar_blog_row',
title_class: 'sidebar_blog_title',
after: '<div class="sidebar_see_more">&rarr; <a href="#ArticleCategory/tutorials">See More...</a></div>'
});
Blog.search({
stag: 'sidebar_plugins',
limit: 5,
title_only: true,
sort_by: 'seq',
sort_dir: -1,
target: 'd_sidebar_plugins',
outer_div_class: 'sidebar_blog_row',
title_class: 'sidebar_blog_title',
after: '<div class="sidebar_see_more">&rarr; <a href="#ArticleCategory/plugins">See More...</a></div>'
});
$('fe_search_bar').onkeydown = delay_onChange_input_text;
user_storage_idle();
}
function effect_precalc_font_finish(width, height) {
session.em_width = width;
}
function preload() {
for (var idx = 0, len = preload_icons.length; idx < len; idx++) {
var url = images_uri + '/icons/' + preload_icons[idx] + '.gif';
preload_icons[idx] = new Image();
preload_icons[idx].src = url;
}
for (var idx = 0, len = preload_images.length; idx < len; idx++) {
var url = images_uri + '/' + preload_images[idx];
preload_images[idx] = new Image();
preload_images[idx].src = url;
}
}
function $P(id) {
if (!id) id = page_manager.current_page_id;
var page = page_manager.find(id);
assert( !!page, "Failed to locate page: " + id );
return page;
}
function get_pref(name) {
if (!session.user || !session.user.Preferences) return alert("ASSERT FAILURE!  Tried to lookup pref " + name + " and user is not yet loaded!");
return session.user.Preferences[name];
}
function get_bool_pref(name) {
return (get_pref(name) == 1);
}
function set_pref(name, value) {
session.user.Preferences[name] = value;
}
function set_bool_pref(name, value) {
set_pref(name, value ? '1' : '0');
}
function save_prefs() {
var prefs_to_save = {};
if (arguments.length) {
for (var idx = 0, len = arguments.length; idx < len; idx++) {
var key = arguments[idx];
prefs_to_save[key] = get_pref(key);
}
}
else prefs_to_save = session.user.Preferences;
effect_api_mod_touch('user_get');
effect_api_send('user_update', {
Username: session.username,
Preferences: prefs_to_save
}, 'save_prefs_2');
}
function save_prefs_2(response) {
do_message('success', 'Preferences saved.');
}
function get_full_name(username) {
var user = session.users[username];
if (!user) return username;
return user.FullName;
}
function get_buddy_icon_url(username, size) {
var mod = session.api_mod_cache.get_buddy_icon || 0;
if (!size) size = 32;
var url = '/effect/api/get_buddy_icon?username='+username + '&mod=' + mod + '&size=' + size;
return url;
}
function get_buddy_icon_display(username, show_icon, show_name) {
if ((typeof(show_icon) == 'undefined') && get_bool_pref('show_user_icons')) show_icon = 1;
if ((typeof(show_name) == 'undefined') && get_bool_pref('show_user_names')) show_name = 1;
var html = '';
if (show_icon) html += '<img class="png" src="'+get_buddy_icon_url(username)+'" width="32" height="32" border="0"/>';
if (show_icon && show_name) html += '<br/>';
if (show_name) html += username;
return html;
}
function do_session_recover() {
session.hooks.after_error = 'do_logout';
effect_api_send('session_recover', {}, 'do_login_2', { _from_recover: 1 } );
}
function require_login() {
if (session.user) return true;
Debug.trace('Page requires login, showing login page');
session.nav_after_login = Nav.currentAnchor();
setTimeout( function() {
Nav.go( 'Login' );
}, 1 );
return false;
}
function popup_window(url, name) {
if (!url) url = '';
if (!name) name = '';
var win = window.open(url, name);
if (!win) return alert('Failed to open popup window.  If you have a popup blocker, please disable it for this website and try again.');
return win;
}
function do_login_prompt() {
hide_popup_dialog();
delete session.progress;
if (!session.temp_password) session.temp_password = ''; 
if (!session.username) session.username = '';
var temp_username = session.open_id || session.username || '';
var html = '';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('images/big_icons/key.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=450 height=225 valign=center align=center>';
html += '<div class="dialog_title">Effect Developer Login</div>';
html += '<form method=get action="javascript:void(0)"><table cellspacing="0" cellpadding="0"><tr><td align="left">';
html += '<div class="fe_label"><table cellspacing="0" cellpadding="0"><tr><td>Effect Username&nbsp;&nbsp;or&nbsp;&nbsp;</td><td>'+icon('openid', 'OpenID', 'popup_window(\'http://openid.net/\')', 'What is OpenID?')+'</td></tr></table></div><input type=text class="fe_big" id="fe_username" size=20 value="'+temp_username+'"><br><br>';
html += '<input type=checkbox id="fe_auto_login" value="1"><label for="fe_auto_login"><span class="fe_label">Keep me logged in</span></label><br>';
html += '</td></tr></table>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "clear_login()") + '</td>';
html += '<td width=30>&nbsp;</td>';
html += '<td>' + large_icon_button('check', '<b>Login</b>', 'do_login()') + '</td>';
html += '</tr></table>';
html += '</form>';
html += '</div>';
session.hooks.keys[ENTER_KEY] = 'do_login'; 
session.hooks.keys[ESC_KEY] = 'clear_login'; 
safe_focus( 'fe_username' );
show_popup_dialog(450, 225, html);
}
function do_openid_reg(title, auto_login_button) {
hide_popup_dialog();
delete session.progress;
if (!title) title = 'Register Account Using OpenID';
if (typeof(auto_login_button) == 'undefined') auto_login_button = 1;
var html = '';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('images/big_icons/openid.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=450 height=225 valign=center align=center>';
html += '<div class="dialog_title">'+title+'</div>';
html += '<form method=get action="javascript:void(0)"><table cellspacing="0" cellpadding="0"><tr><td align="left">';
html += '<div class="fe_label"><table cellspacing="0" cellpadding="0"><tr><td>'+icon('openid', 'Enter Your OpenID URL:')+'</td></tr></table></div><input type=text class="fe_big" id="fe_username" size=20 value="">';
if (auto_login_button) html += '<br><br><input type=checkbox id="fe_auto_login" value="1"><label for="fe_auto_login"><span class="fe_label">Keep me logged in</span></label><br>';
html += '</td></tr></table>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "hide_popup_dialog()") + '</td>';
html += '<td width=30>&nbsp;</td>';
html += '<td>' + large_icon_button('check', title.match(/login/i) ? '<b>Login</b>' : '<b>Register</b>', 'do_openid_login()') + '</td>';
html += '</tr></table>';
html += '</form>';
html += '</div>';
session.hooks.keys[ENTER_KEY] = 'do_openid_login'; 
session.hooks.keys[ESC_KEY] = 'hide_popup_dialog'; 
safe_focus( 'fe_username' );
show_popup_dialog(450, 225, html);
}
function do_login_prompt_2() {
hide_popup_dialog();
delete session.progress;
if (!session.temp_password) session.temp_password = ''; 
if (!session.username) session.username = '';
var html = '';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('images/big_icons/key.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=450 height=225 valign=center align=center>';
html += '<div class="dialog_title">Enter Your Password</div>';
html += '<form method=get action="javascript:void(0)"><table cellspacing="0" cellpadding="0"><tr><td align="left">';
html += '<div class="fe_label">Password:</div><input type=password class="fe_big" id="fe_lp_password" size=20 value="'+session.temp_password+'"><br><br>';
html += '<input type=checkbox id="fe_auto_login" value="1" '+(session.auto_login ? 'checked="checked"' : '')+'><label for="fe_auto_login"><span class="fe_label">Keep me logged in</span></label><br>';
html += '</td></tr></table>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "clear_login()") + '</td>';
html += '<td width=30>&nbsp;</td>';
html += '<td>' + large_icon_button('check', '<b>Login</b>', 'do_effect_login()') + '</td>';
html += '</tr></table>';
html += '</form>';
html += '</div>';
session.hooks.keys[ENTER_KEY] = 'do_effect_login'; 
session.hooks.keys[ESC_KEY] = 'clear_login'; 
safe_focus( 'fe_lp_password' );
show_popup_dialog(450, 225, html);
}
function clear_login() {
hide_popup_dialog();
Nav.prev();
}
function do_login() {
if ($('fe_username').value.match(/^\w+$/)) {
session.username = $('fe_username').value;
session.auto_login = $('fe_auto_login').checked;
do_login_prompt_2();
return;
}
else {
do_openid_login();
}
}
function do_openid_login() {
if (!$('fe_username').value) return;
session.openid_win = popup_window('');
if (!session.openid_win) return;
session.open_id = $('fe_username').value;
session.auto_login = $('fe_auto_login') && $('fe_auto_login').checked;
hide_popup_dialog();
show_progress_dialog(1, "Logging in...");
session.hooks.before_error = 'close_openid_window';
session.hooks.after_error = 'do_login_prompt';
effect_api_send('openid_login', {
OpenID: session.open_id,
Infinite: session.auto_login ? 1 : 0
}, 'do_openid_login_2');
}
function close_openid_window() {
if (session.openid_win) {
session.openid_win.close();
delete session.openid_win;
}
}
function do_openid_login_2(response) {
if (response.CheckURL) {
Debug.trace('openid', "Redirecting popup window to OpenID Check URL: " + response.CheckURL);
show_progress_dialog(1, "Waiting for popup window...", false, ['x', 'Cancel', 'do_login_prompt()']);
session.openid_win.location = response.CheckURL;
session.openid_win.focus();
}
}
function receive_openid_response(iframe_response) {
var response = deep_copy_object(iframe_response); 
Debug.trace('openid', "Received OpenID Response: " + dumper(response));
hide_popup_dialog();
if (response.Code) {
close_openid_window();
return do_error( response.Description );
}
delete session.hooks.before_error;
delete session.hooks.after_error;
if (response.SessionID) {
session.cookie.set( 'effect_session_id', response.SessionID );
session.cookie.save();
}
switch (response.Action) {
case 'popup':
show_progress_dialog(1, "Waiting for popup window...", false, ['x', 'Cancel', 'do_login_prompt()']);
Debug.trace('openid', "Redirecting popup window to OpenID Setup URL: " + response.SetupURL);
session.openid_win.location = response.SetupURL;
session.openid_win.focus();
break;
case 'login':
close_openid_window();
do_login_2(response);
break;
case 'register':
if (!response.Info) response.Info = {};
close_openid_window();
Debug.trace('openid', 'Original OpenID: ' + response.OpenID_Login);
Debug.trace('openid', 'Clean OpenID: ' + response.OpenID_Unique);
Debug.trace('openid', 'Registration Info: ' + dumper(response.Info));
session.prereg = response.Info;
session.prereg.open_id_login = response.OpenID_Login;
session.prereg.open_id = response.OpenID_Unique;
if (session.user) {
if (!session.user.OpenIDs) session.user.OpenIDs = {};
if (!session.user.OpenIDs.OpenID) session.user.OpenIDs.OpenID = [];
var dupe = find_object( session.user.OpenIDs.OpenID, { Unique: session.prereg.open_id } );
if (dupe) return do_error("That OpenID is already registered and attached to your account.  No need to add it again.");
session.user.OpenIDs.OpenID.push({
Login: session.prereg.open_id_login,
Unique: session.prereg.open_id
});
setTimeout( function() {
Nav.go('MyAccount', true);
do_message('success', 'Added new OpenID URL to account.');
}, 1 );
}
else {
setTimeout( function() { Nav.go('CreateAccount', true); }, 1 );
}
break;
}
}
function do_effect_login() {
var password = $('fe_lp_password').value;
session.auto_login = $('fe_auto_login').checked;
hide_popup_dialog();
show_progress_dialog(1, "Logging in...");
session.hooks.after_error = 'do_login_prompt';
effect_api_send('user_login', {
Username: session.username,
Password: password,
Infinite: session.auto_login ? 1 : 0
}, 'do_login_2');
}
function do_logout() {
effect_api_send('user_logout', {}, 'do_logout_2');
}
function do_logout_2(response) {
hide_popup_dialog();
show_default_login_status();
delete session.hooks.after_error;
delete session.cookie.tree.effect_session_id;
session.cookie.save();
session.storage = {};
session.storage_dirty = false;
delete session.user;
delete session.first_login;
var old_username = session.username;
session.username = '';
if (Nav.inited) {
Nav.go('Main');
if (old_username) $GR.growl('success', "Logged out of account: " + old_username);
}
else {
Nav.init();
}
}
function do_login_2(response, tx) {
if (response.FirstLogin) session.first_login = 1;
if (response.User.UserStorage) {
Debug.trace('Recovering site storage blob: session.storage = ' + response.User.UserStorage + ';');
try {
eval( 'session.storage = ' + response.User.UserStorage + ';' );
}
catch (e) {
Debug.trace("SITE STORAGE RECOVERY FAILED: " + e);
session.storage = {};
}
delete response.User.UserStorage;
session.storage_dirty = false;
}
session.user = response.User;
session.username = session.user.Username;
hide_popup_dialog();
delete session.hooks.after_error;
update_header();
if (!tx || !tx._from_recover) $GR.growl('success', "Logged in as: " + session.username);
if (session.nav_after_login) {
Nav.go( session.nav_after_login );
delete session.nav_after_login;
}
else if (Nav.currentAnchor().match(/^Login/)) {
Nav.go('Home');
}
else {
Nav.refresh();
}
Nav.init();
}
function user_storage_mark() {
Debug.trace("Marking user storage as dirty");
session.storage_dirty = true;
}
function user_storage_idle() {
if (session.storage_dirty && !session.mouseIsDown) {
user_storage_save();
session.storage_dirty = false;
}
setTimeout( 'user_storage_idle()', 5000 );
}
function user_storage_save() {
if (session.user) {
Debug.trace("Committing user storage blob");
effect_api_send('update_user_storage', { Data: serialize(session.storage) }, 'user_storage_save_finish', { _silent: 1 } );
}
}
function user_storage_save_finish(response, tx) {
}
function show_default_login_status() {
$('d_sidebar_wrapper_recent_games').hide();
$('d_login_status').innerHTML = '<center><table><tr><td>' + 
large_icon_button('key', "<b>Login</b>", '#Home') + '</td>' + 
'<td>' + spacer(1,1) + '<td>' + 
'<td>' + large_icon_button('user_add.png', "<b>Signup</b>", '#CreateAccount') + '</td></tr></table>' + 
'</center>';
$('d_tagline').innerHTML = 
'<a href="#Home">Login</a>' + ' <span class="spacer">|</span> ' + 
'<a href="#CreateAccount">Create Account</a>';
}
function update_header() {
var html = '';
html += '<table><tr><td>';
html += '<a href="#Home">';
html += '<img class="png" src="'+get_buddy_icon_url(session.username) + '" width="32" height="32" border="0"/>';
html += '</a>';
html += '</td><td>'+spacer(2,2)+'</td><td>';
html += session.user.FullName + '<br/>';
html += spacer(1,5) + '<br/>';
html += '<a href="#Home"><b>My Home</b></a>&nbsp;&nbsp;|&nbsp;&nbsp;';
html += '<a href="javascript:void(0)" onClick="do_logout()">Logout</a>';
html += '</td></tr></table>';
$('d_login_status').innerHTML = html;
$('d_tagline').innerHTML = 
'Welcome '+session.user.FirstName+'' + ' <span class="spacer">|</span> ' + 
'<a href="#Home">My Home</a>' + ' <span class="spacer">|</span> ' + 
'<a href="javascript:void(0)" onClick="do_logout()">Logout</a>';
effect_api_get( 'get_user_games', { limit:5, offset:0 }, 'receive_sidebar_recent_games', { } );
}
function receive_sidebar_recent_games(response, tx) {
var html = '';
if (response.Rows && response.Rows.Row) {
var games = always_array( response.Rows.Row );
for (var idx = 0, len = games.length; idx < len; idx++) {
var game = games[idx];
html += '<div class="sidebar_blog_row">';
html += '<div class="sidebar_blog_title"><a href="#Game/'+game.GameID+'">'+ww_fit_string(game.Title, 170, session.em_width, 1)+'</a></div>';
html += '</div>';
} 
html += '<div class="sidebar_see_more">&rarr; <a href="#GameEdit">Create New Game...</a></div>';
$('d_sidebar_recent_games').innerHTML = html;
$('d_sidebar_wrapper_recent_games').show();
}
else {
$('d_sidebar_wrapper_recent_games').hide();
}
}
function check_privilege(key) {
if (!session.user) return false;
if (session.user.Privileges.admin == 1) return true; 
if (!key.toString().match(/^\//)) key = '/' + key;
var value = lookup_path(key, session.user.Privileges);
return( value && (value != 0) );
}
function is_admin() {
return check_privilege('admin');
}
function upgrade_flash_error() {
return alert("Sorry, file upload requires Adobe Flash Player 9 or higher.");
}
function cancel_user_image_manager() {
upload_destroy();
hide_popup_dialog();
delete session.hooks.keys[DELETE_KEY];
}
function do_user_image_manager(callback) {
if (callback) session.uim_callback = callback;
else session.uim_callback = null;
session.temp_last_user_img = null;
session.temp_last_user_image_filename = '';
var html = '<table cellspacing=0 cellpadding=0><tr><td width=500 height=300 valign=center align=center>';
html += '<div class="dialog_title">Image Manager</div>';
html += '<div class="vert_selector" id="d_user_image_list" style="width:480px; height:200px;">';
html += '<img src="images/loading.gif" width="32" height="32" style="margin-left:174px; margin-top:84px"/>';
html += '</div>';
html += '<br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', 'cancel_user_image_manager()') + '</td>';
html += '<td width=25>&nbsp;</td>';
html += '<td>' + large_icon_button('bullet_upload.png', 'Upload Files...', 'upload_basic()', 'b_upload_user_image') + '</td>';
html += '<td width=25>&nbsp;</td>';
html += '<td>' + large_icon_button('check', '<b>Choose</b>', 'do_choose_user_image()', 'btn_choose_user_image', '', 'disabled') + '</td>';
html += '</tr></table>';
html += '</td></tr></table>';
session.hooks.keys[ENTER_KEY] = 'do_choose_user_image'; 
session.hooks.keys[ESC_KEY] = 'cancel_user_image_manager'; 
session.hooks.keys[DELETE_KEY] = 'do_delete_selected_user_image';
show_popup_dialog(500, 300, html);
var self = this;
setTimeout( function() {
prep_upload('b_upload_user_image', '/effect/api/upload_user_image', [self, 'do_upload_user_image_2'], ['Image Files', '*.jpg;*.jpe;*.jpeg;*.gif;*.png']);
}, 1 );
var args = {
limit: 50,
offset: 0,
random: Math.random()
};
effect_api_get( 'user_images_get', args, 'uim_populate_images', { } );
}
function do_upload_user_image_2() {
effect_api_mod_touch('user_images_get');
effect_api_send('user_get', {
Username: session.username
}, [this, 'do_upload_user_image_3']);
}
function do_upload_user_image_3(response) {
if (response.User.LastUploadError) return do_error( "Failed to upload image: " + response.User.LastUploadError );
do_user_image_manager( session.uim_callback );
}
function uim_populate_images(response, tx) {
var html = '';
var base_url = '/effect/api/view/users/' + session.username + '/images';
if (response.Rows && response.Rows.Row) {
var imgs = always_array( response.Rows.Row );
for (var idx = 0, len = imgs.length; idx < len; idx++) {
var img = imgs[idx];
var class_name = ((img.Filename == session.temp_last_user_image_filename) ? 'choose_item_selected' : 'choose_item');
html += '<img class="'+class_name+'" src="'+base_url+'/'+img.Thumbnail+'" width="80" height="60" onClick="do_select_user_image(this,\''+img.Filename+'\')" onDblClick="do_select_user_image(this,\''+img.Filename+'\'); do_choose_user_image();">';
} 
} 
else {
html = '';
}
$('d_user_image_list').innerHTML = html;
}
function do_select_user_image(img, filename) {
if (session.temp_last_user_img) session.temp_last_user_img.className = 'choose_item';
img.className = 'choose_item_selected';
$('btn_choose_user_image').removeClass('disabled');
session.temp_last_user_img = img;
session.temp_last_user_image_filename = filename;
}
function do_delete_selected_user_image() {
if (session.temp_last_user_image_filename) {
effect_api_send('user_image_delete', { Filename: session.temp_last_user_image_filename }, 'do_delete_selected_user_image_finish', {});
}
}
function do_delete_selected_user_image_finish(response, tx) {
try { $('d_user_image_list').removeChild( session.temp_last_user_img ); } catch(e) {;}
session.temp_last_user_img = null;
session.temp_last_user_image_filename = null;
}
function do_choose_user_image() {
if (!session.temp_last_user_image_filename) return;
if (session.uim_callback) {
fire_callback( session.uim_callback, session.temp_last_user_image_filename );
}
cancel_user_image_manager();
}
function user_image_thumbnail(filename, width, height, attribs) {
var username = session.username;
if (filename.match(/^(\w+)\/(.+)$/)) {
username = RegExp.$1;
filename = RegExp.$2;
}
var url = '/effect/api/view/users/' + username + '/images/' + filename.replace(/\.(\w+)$/, '_thumb.jpg');
return '<img src="'+url+'" width="'+width+'" height="'+height+'" '+compose_attribs(attribs)+'/>';
}
function get_user_display(username, full_name, base_url) {
if (!base_url) base_url = '';
return icon('user', full_name || username, base_url + '#User/' + username);
}
function get_game_tab_bar(game_id, cur_page_name) {
return tab_bar([
['#Game/' + game_id, 'Game', 'controller.png'],
['#GameDisplay/' + game_id, 'Display', 'monitor.png'],
['#GameAssets/' + game_id, 'Assets', 'folder_page_white.png'],
['#GameObjects/' + game_id, 'Objects', 'bricks.png'],
['#GameAudio/' + game_id, 'Audio', 'sound.gif'],
['#GameKeys/' + game_id, 'Keyboard', 'keyboard.png'],
['#GameLevels/' + game_id, 'Levels', 'world.png'],
['#GamePublisher/' + game_id, 'Publish', 'cd.png']
], cur_page_name);
}
function get_user_tab_bar(cur_page_name) {
var tabs = [
['#Home', 'My Home', 'house.png']
];
tabs.push( ['#MyAccount', 'Edit Account', 'user_edit.png'] );
tabs.push( ['#ArticleEdit', 'Post Article', 'page_white_edit.png'] );
if (config.ProEnabled) {
tabs.push( ['#UserPayments', 'Payments', 'money.png'] );
}
tabs.push( ['#UserLog', 'Security Log', 'application_view_detail.png'] );
return tab_bar(tabs, cur_page_name);
}
function get_admin_tab_bar(cur_page_name) {
var tabs = [];
tabs.push( ['#Admin', 'Admin', 'lock.png'] );
tabs.push( ['#TicketSearch/bugs', 'Bug Tracker', 'bug.png'] );
tabs.push( ['#TicketSearch/helpdesk', 'Help Desk', 'telephone.png'] );
tabs.push( ['#AdminReport', 'Reports', 'chart_pie.png'] );
return tab_bar(tabs, cur_page_name);
}
function get_string(path, args) {
assert(window.config, "get_string() called before config loaded");
if (!args) args = {};
args.config = config;
args.session = session;
args.query = session.query;
var value = lookup_path(path, config.Strings);
return (typeof(value) == 'string') ? substitute(value, args) : value;
}
function normalize_dir_path(path) {
if (!path.match(/^\//)) path = '/' + path;
if (!path.match(/\/$/)) path += '/';
return path;
}
function textedit_window_save(storage_key, filename, content, callback) {
if (!callback) callback = null;
effect_api_mod_touch('textedit');
if (storage_key.match(/^\/games\/([a-z0-9][a-z0-9\-]*[a-z0-9])\/assets(.+)$/)) {
var game_id = RegExp.$1;
var path = RegExp.$2;
show_progress_dialog(1, "Saving file...");
effect_api_send('asset_save_file_contents', {
GameID: game_id,
Path: path,
Filename: filename,
Content: content
}, 'textedit_window_save_finish', { _mode: 'asset', _game_id: game_id, _filename: filename, _callback: callback } );
}
else {
show_progress_dialog(1, "Saving data...");
effect_api_send('admin_save_file_contents', {
Path: storage_key,
Filename: filename,
Content: content
}, 'textedit_window_save_finish', { _mode: 'admin', _storage_key: storage_key, _filename: filename, _callback: callback } );
}
}
function textedit_window_save_finish(response, tx) {
hide_progress_dialog();
if (tx._mode == 'asset') {
do_message('success', "Saved asset: \""+tx._filename+"\"");
show_glog_widget();
}
else {
do_message('success', "Saved data: \""+tx._storage_key+'/'+tx._filename+"\"");
}
if (tx._callback) tx._callback();
}
function do_buy(args) {
$P().hide();
$('d_page_loading').show();
effect_api_send('create_order', args, 'do_buy_redirect', { _buy_args: args } );
}
function do_buy_redirect(response, tx) {
var args = tx._buy_args;
$('fe_gco_title').value = args.Title || '';
$('fe_gco_desc').value = args.Desc || '';
$('fe_gco_price').value = args.Price || '';
$('fe_gco_after').value = args.After || '';
$('fe_gco_unique_id').value = response.OrderID;
Debug.trace('payment', "Redirecting to Google Checkout");
setTimeout( function() { $('BB_BuyButtonForm').submit(); }, 1 );
}
function show_glog_widget(game_id) {
if (!game_id) game_id = session.glog_game_id;
if (!game_id) {
$('glog_widget').hide();
return;
}
if (game_id != session.glog_game_id) {
$('glog_widget').hide();
session.glog_game_id = game_id;
update_glog_widget(game_id);
}
else {
$('glog_widget').show();
setTimeout( function() { update_glog_widget(game_id); }, 500 );
}
}
function update_glog_widget(game_id) {
effect_api_get('game_get_log', { 
id: game_id,
offset: 0,
limit: 1,
rand: Math.random()
}, 'receive_glog_data', { _game_id: game_id });
}
function receive_glog_data(response, tx) {
var game_id = tx._game_id;
if (response && response.Rows && response.Rows.Row) {
var rows = always_array( response.Rows.Row );
var row = rows[0];
var html = '';
html += '<div class="h2" style="margin-bottom:5px;">';
html += '<div class="fl">Latest Game Activity</div>';
html += '<div class="fr"><a href="#GameLog/'+game_id+'" title="View Log" class="icon" style="margin-left:5px; background-image:url(images/icons/application_view_detail.png)">View Log</a></div>';
html += '<div class="fr"><a href="javascript:void(show_glog_post_dialog(\''+game_id+'\'))" title="Post Message" class="icon" style="margin-left:5px; background-image:url(images/icons/comment_edit.png)">Post Message</a></div>';
html += '<div class="clear"></div>';
html += '</div>';
html += '<table><tr>';
html += '<td style="cursor:pointer" onClick="Nav.go(\'User/'+row.Username+'\')">' + get_buddy_icon_display(row.Username, 1, 0) + '</td>';
html += '<td>';
html += '<div>' + icon( get_icon_for_glog_type(row.Type), '<span class="fe_label">'+row.Message+'</span>' ) + '</div>';
html += '<div class="caption" style="margin-top:2px;">' + get_relative_date(row.Date, true) + '</div>';
html += '</td>';
html += '</tr></table>';
$('glog_widget').innerHTML = html;
$('glog_widget').show();
}
}
function show_glog_post_dialog(game_id) {
hide_popup_dialog();
delete session.progress;
var html = '';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('/effect/images/big_icons/pencil_paper.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=500 height=175 valign=center align=center>';
html += '<div class="dialog_title">Post Game Log Message</div>';
html += '<form method=get action="javascript:void(0)"><table cellspacing="0" cellpadding="0"><tr><td align="left">';
html += '<textarea class="fe_edit" id="fe_glog_body" style="width:300px; height:50px;" wrap="virtual" onkeydown="return catchTab(this,event)"></textarea>';
html += '<div class="caption">Enter your log message here.  Plain text only please.</div>';
html += '</td></tr></table>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "hide_popup_dialog()") + '</td>';
html += '<td width=50>&nbsp;</td>';
html += '<td>' + large_icon_button('check', '<b>Post Message</b>', "glog_post('"+game_id+"')") + '</td>';
html += '</tr></table>';
html += '</form>';
html += '</div>';
session.hooks.keys[ESC_KEY] = 'hide_popup_dialog'; 
safe_focus( 'fe_glog_body' );
show_popup_dialog(500, 175, html);
}
function glog_post(game_id) {
var msg = trim( $('fe_glog_body').value );
if (msg) {
hide_popup_dialog();
effect_api_send('game_post_log', {
GameID: game_id,
Message: msg
}, [this, 'glog_post_finish'], { _game_id: game_id });
}
}
function glog_post_finish(response, tx) {
show_glog_widget( tx._game_id );
}
function hide_glog_widget() {
$('glog_widget').hide();
}
function get_icon_for_glog_type(type) {
var icon = 'page_white.png';
switch (type) {
case 'asset': icon = 'folder_page_white.png'; break;
case 'game': icon = 'controller.png'; break;
case 'member': icon = 'user'; break;
case 'comment': icon = 'comment.png'; break;
case 'level': icon = 'world.png'; break;
case 'sprite': icon = 'cog.png'; break;
case 'tile': icon = 'brick.png'; break;
case 'tileset': icon = 'color_swatch.png'; break;
case 'rev': icon = 'cd.png'; break;
case 'revision': icon = 'cd.png'; break;
case 'font': icon = 'style.png'; break;
case 'key': icon = 'keyboard.png'; break;
case 'audio': icon = 'sound'; break;
case 'payment': icon = 'money.png'; break;
case 'env': icon = 'weather.png'; break;
case 'environment': icon = 'weather.png'; break;
}
return icon;
}
function effect_load_script(url) {
Debug.trace('api', 'Loading script: ' + url);
load_script(url);
}
function effect_api_get_ie(cmd, params, userData) {
if (!session.api_state_ie) session.api_state_ie = {};
var unique_id = get_unique_id();
session.api_state_ie[unique_id] = userData;
params.format = 'js';
params.onafter = 'effect_api_response_ie(' + unique_id + ', response);';
var url = '/effect/api/' + cmd + composeQueryString(params);
Debug.trace('api', "Sending MSIE HTTP GET: " + url);
load_script(url);
}
function effect_api_response_ie(unique_id, tree) {
Debug.trace('api', "Got response from MSIE HTTP GET");
var tx = session.api_state_ie[unique_id];
delete session.api_state_ie[unique_id];
if (tree.Code == 'session') {
do_logout_2();
return;
}
if (tree.Code == 'access') {
do_notice("Access Denied", tree.Description, 'do_not_pass_go');
return;
}
if (tree.Code != 0) {
if (tx._on_error) return fire_callback( tx._on_error, tree, tx );
return do_error( tree.Description );
}
if (tree.SessionID) {
if (tree.SessionID == '_DELETE_') {
delete session.cookie.tree.effect_session_id;
}
else {
session.cookie.set( 'effect_session_id', tree.SessionID );
}
session.cookie.save();
}
if (tx._api_callback) {
fire_callback( tx._api_callback, tree, tx );
}
}
function effect_api_get(cmd, params, callback, userData) {
if (!userData) userData = {};
userData._api_callback = callback;
if (!session.api_mod_cache[cmd] && session.username) session.api_mod_cache[cmd] = hires_time_now();
if (!params.mod && session.api_mod_cache[cmd]) params.mod = session.api_mod_cache[cmd];
if (ie) return effect_api_get_ie(cmd, params, userData);
var url = '/effect/api/' + cmd + composeQueryString(params);
Debug.trace('api', "Sending HTTP GET: " + url);
ajax.get( url, 'effect_api_response', userData );
}
function effect_api_send(cmd, xml, callback, userData) {
if (!userData) userData = {};
userData._api_callback = callback;
var data = compose_xml('EffectRequest', xml);
Debug.trace('api', "Sending API Command: " + cmd + ": " + data);
ajax.send({
method: 'POST',
url: '/effect/api/' + cmd,
data: data,
headers: { 'Content-Type': 'text/xml' }
}, 'effect_api_response', userData);
}
function effect_api_response(tx) {
Debug.trace('api', "HTTP " + tx.response.code + ": " + tx.response.data);
if (tx.response.code == 999) { 
if (tx.request._auto_retry) {
session.net_error = false; 
show_progress_dialog(1, "Trying to reestablish connection...");
session.net_error = true;
setTimeout( function() { ajax.send(tx.request); }, 1000 );
return;
}
else return do_error( "HTTP ERROR: " + tx.response.code + ": " + tx.response.data + ' (URL: ' + tx.request.url + ')' );
}
if (session.net_error) {
hide_progress_dialog();
session.net_error = false;
}
if (tx.response.code != 200) {
if (tx._silent) return; 
else return do_error( "HTTP ERROR: " + tx.response.code + ": " + tx.response.data + ' (URL: ' + tx.request.url + ')' );
}
var tree = null;
if (!tx._raw) {
var parser = new XML({
preserveAttributes: true,
text: tx.response.data 
});
if (parser.getLastError()) return do_error("XML PARSE ERROR: " + parser.getLastError());
tree = parser.getTree();
if (tree.Code == 'session') {
do_logout_2();
return;
}
if (tree.Code == 'access') {
do_notice("Access Denied", tree.Description, 'do_not_pass_go');
return;
}
if (tree.Code != 0) {
if (tx._on_error) return fire_callback( tx._on_error, tree, tx );
return do_error( tree.Description );
}
if (tree.SessionID) {
if (tree.SessionID == '_DELETE_') {
delete session.cookie.tree.effect_session_id;
}
else {
session.cookie.set( 'effect_session_id', tree.SessionID );
}
session.cookie.save();
}
} 
if (tx._api_callback) {
fire_callback( tx._api_callback, tree, tx );
}
}
function effect_api_mod_touch() {
for (var idx = 0, len = arguments.length; idx < len; idx++) {
session.api_mod_cache[ arguments[idx] ] = hires_time_now();
}
}
function do_not_pass_go() {
Nav.go('Main');
}
var Nav = {
loc: '',
old_loc: '',
inited: false,
nodes: [],
init: function() {
if (!this.inited) {
this.inited = true;
this.loc = 'init';
this.monitor();
}
},
monitor: function() {
var parts = window.location.href.split(/\#/);
var anchor = parts[1];
if (!anchor) anchor = 'Main';
var full_anchor = '' + anchor;
var sub_anchor = '';
anchor = anchor.replace(/\%7C/, '|');
if (anchor.match(/\|(\w+)$/)) {
sub_anchor = RegExp.$1.toLowerCase();
anchor = anchor.replace(/\|(\w+)$/, '');
}
if ((anchor != this.loc) && !anchor.match(/^_/)) { 
Debug.trace('nav', "Caught navigation anchor: " + full_anchor);
var page_name = '';
var page_args = null;
if (full_anchor.match(/^\w+\?.+/)) {
parts = full_anchor.split(/\?/);
page_name = parts[0];
page_args = parseQueryString( parts[1] );
}
else if (full_anchor.match(/^(\w+)\/(.*)$/)) {
page_name = RegExp.$1;
page_args = RegExp.$2;
}
else {
parts = full_anchor.split(/\//);
page_name = parts[0];
page_args = parts.slice(1);
}
Debug.trace('nav', "Calling page: " + page_name + ": " + serialize(page_args));
hide_popup_dialog();
var result = page_manager.click( page_name, page_args );
if (result) {
if (window.pageTracker && (this.loc != 'init')) {
setTimeout( function() { pageTracker._trackPageview('/effect/' + anchor); }, 1000 );
}
this.old_loc = this.loc;
if (this.old_loc == 'init') this.old_loc = 'Main';
this.loc = anchor;
}
else {
this.go( this.loc );
}
}
else if (sub_anchor != this.sub_anchor) {
Debug.trace('nav', "Caught sub-anchor: " + sub_anchor);
$P().gosub( sub_anchor );
} 
this.sub_anchor = sub_anchor;
setTimeout( 'Nav.monitor()', 100 );
},
go: function(anchor, force) {
anchor = anchor.replace(/^\#/, '');
if (force) this.loc = 'init';
window.location.href = '#' + anchor;
},
prev: function() {
this.go( this.old_loc || 'Main' );
},
refresh: function() {
this.loc = 'refresh';
},
bar: function() {
var nodes = arguments;
var html = '';
for (var idx = 0, len = nodes.length; idx < len; idx++) {
var node = nodes[idx];
if (node) this.nodes[idx] = node;
else node = this.nodes[idx];
if (node != '_ignore_') {
html += '<div><a href="#'+node[0]+'"><b>'+ww_fit_string(node[1], 200, session.em_width, 1)+'</b></a></div>';
}
}
html += '<br clear="all"/>';
$('d_nav_bar').innerHTML = html;
},
title: function(name) {
if (name) document.title = name + ' | EffectGames.com';
else document.title = 'EffectGames.com';
},
currentAnchor: function() {
var parts = window.location.href.split(/\#/);
var anchor = parts[1] || '';
var sub_anchor = '';
anchor = anchor.replace(/\%7C/, '|');
if (anchor.match(/\|(\w+)$/)) {
sub_anchor = RegExp.$1.toLowerCase();
anchor = anchor.replace(/\|(\w+)$/, '');
}
return anchor;
}
};
var Blog = {
edit_caption: '<div class="caption" style="margin-top:5px;">*<b>Bold</b>*&nbsp;&nbsp;|<i>Italic</i>|&nbsp;&nbsp;{<span style="font-family:monaco,courier,monospace;">monospace</span>}&nbsp;&nbsp;[http://link]&nbsp;&nbsp;<a href="/effect/#Article/Formatting_Guide" target="_blank">Formatting Guide...</a></div>',
search: function(args) {
if (!args.mode) args.mode = 'and';
if (!args.offset) args.offset = 0;
if (!args.limit) args.limit = 10;
if (!args.format) args.format = 'xml';
var query_args = copy_object( args ); 
delete query_args.callback;
effect_api_get( 'article_search', query_args, [this, 'search_response'], { _search_args: args } );
},
get_article_preview: function(row, args) {
var html = '';
Debug.trace('blog', 'Row: ' + dumper(row));
html += '<div class="' + (args.outer_div_class || 'blog_article_preview') + '">';
var ext_article_url = 'http://' + location.hostname + '/effect/article.psp.html' + row.Path + '/' + row.ArticleID;
var article_url = '#Article' + row.Path + '/' + row.ArticleID;
html += '<div class="' + (args.title_class || 'blog_title') + '"><a href="'+article_url+'">' + row.Title + '</a></div>';
if (!args.title_only) {
html += '<div class="' + (args.preview_class || 'blog_preview_body') + '">';
html += row.Preview;
html += '&nbsp;&nbsp;<a href="'+article_url+'">' + (args.link_title || 'Read Full Story...') + '</a>';
html += '</div>';
html += '<nobr>';
html += '<div class="' + (args.footer_class || 'blog_preview_footer') + '">';
var elem_class = args.footer_element_class || 'blog_preview_footer_element';
if ((session.username == row.Username) || is_admin()) {
html += '<div class="' + elem_class + '">' + 
icon('page_white_edit.png', "Edit", '#ArticleEdit?path=' + row.Path + '&id=' + row.ArticleID) + '</div>';
}
html += '<div class="' + elem_class + '">' + get_user_display(row.Username) + '</div>';
html += '<div class="' + elem_class + '">' + icon('calendar', get_short_date_time(row.Published)) + '</div>';
html += '<div class="' + elem_class + '">' + icon('talk', row.Comments) + '</div>';
if (0 && row.Tags) html += '<div class="' + elem_class + '">' + icon('note.png', make_tag_links(row.Tags, 3)) + '</div>';
html += '<div class="' + elem_class + '">' + icon('facebook.png', 'Facebook', "window.open('http://www.facebook.com/sharer.php?u="+encodeURIComponent(ext_article_url)+'&t='+encodeURIComponent(row.Title)+"','sharer','toolbar=0,status=0,width=626,height=436')", "Share on Facebook") + '</div>';
html += '<div class="' + elem_class + '">' + icon('twitter.png', 'Twitter', "window.open('http://twitter.com/home?status=Reading%20" + encodeURIComponent(row.Title) + "%3A%20" +  encodeURIComponent(ext_article_url)+"')", "Share on Twitter") + '</div>';
html += '</nobr>';
html += '<br clear="both"/>';
html += '</div>';
}
html += '</div>';
return html;
},
search_response: function(response, tx) {
var args = tx._search_args;
if (args.callback) return fire_callback(args.callback, response, args);
var div = $(args.target);
assert(div, "Could not find target DIV: " + args.target);
var html = '';
if (response.Rows && response.Rows.Row) {
var rows = always_array( response.Rows.Row );
for (var idx = 0, len = rows.length; idx < len; idx++) {
var row = rows[idx];
html += this.get_article_preview( row, args );
} 
if (args.more && (rows.length == args.limit)) {
html += large_icon_button('page_white_put.png', 'More...', "Blog.more(this, "+encode_object(args)+")") + '<br clear="all"/>';
html += spacer(1,15) + '<br/>';
}
if (args.after) html += args.after;
} 
else if (response.Code != 0) {
html = 'Search Error: ' . response.Code + ': ' + response.Description;
}
else {
html = args.none_found_msg || 'No articles found.';
}
div.innerHTML = html;
},
more: function(div, args) {
args.offset += args.limit;
Debug.trace('blog', "More Args: " + dumper(args));
div.innerHTML = '<img src="images/loading.gif" width="32" height="32"/>';
effect_api_get( 'article_search', args, [this, 'more_response'], { _search_args: args, _div: div } );
},
more_response: function(response, tx) {
var args = tx._search_args;
var button = tx._div;
var html = '';
if (response.Rows && response.Rows.Row) {
var rows = always_array( response.Rows.Row );
for (var idx = 0, len = rows.length; idx < len; idx++) {
var row = rows[idx];
html += this.get_article_preview( row, args );
} 
if (args.more && (rows.length == args.limit)) {
html += large_icon_button('page_white_put.png', 'More...', "Blog.more(this, "+encode_object(args)+")") + '<br clear="all"/>';
html += spacer(1,15) + '<br/>';
}
} 
else if (response.Code != 0) {
html = 'Search Error: ' . response.Code + ': ' + response.Description;
}
else {
html = args.none_found_msg || 'No more articles found.';
}
var div = document.createElement('div');
div.innerHTML = html;
button.parentNode.replaceChild( div, button );
}
};
function make_tag_links(csv, max, base_url) {
if (!base_url) base_url = '';
var tags = csv.split(/\,\s*/);
var append = '';
if (max && (tags.length > max)) {
tags.length = max;
append = '...';
}
var html = '';
for (var idx = 0, len = tags.length; idx < len; idx++) {
html += '<a href="' + base_url + '#Tag/'+tags[idx]+'">'+tags[idx]+'</a>';
if (idx < len - 1) html += ', ';
}
html += append;
return html;
}
function get_url_friendly_title(title) {
title = title.toString().replace(/\W+/g, '_'); 
if (title.length > 40) title = title.substring(0, 40);
title = title.replace(/^_+/, ''); 
title = title.replace(/_+$/, ''); 
return title;
}
function get_full_url(url) {
if (url.match(/^\#/)) {
var parts = window.location.href.split(/\#/);
url = parts[0] + url;
}
return url;
}
var Comments = {
comments_per_page: 10,
get: function(page_id) {
var html = '';
html += '<div class="comments_container">';
html += '<fieldset><legend>Comments</legend>';
html += '<div class="comments" id="d_comments_' + page_id + '"></div>';
html += '</fieldset>';
html += '</div>';
setTimeout( function() { Comments.search({ page_id: page_id }); }, 1 );
return html;
},
search: function(args) {
if (!args.limit) args.limit = this.comments_per_page;
if (!args.offset) args.offset = 0;
assert(args.page_id, "Comments.search: No page_id specified");
args.format = 'xml';
this.last_search = args;
effect_api_get( 'comments_get', args, [this, 'search_response'], { _search_args: args } );
},
research: function(offset) {
var args = this.last_search;
if (!args) return;
args.offset = offset;
effect_api_get( 'comments_get', args, [this, 'search_response'], { _search_args: args } );
},
search_response: function(response, tx) {
this.comments = [];
var args = tx._search_args;
if (args.callback) return fire_callback(args.callback, response, args);
var html = '';
html += '<div class="little_button_stack">' + 
large_icon_button( 'comment_edit.png', 'Post Comment...', "Comments.add('"+args.page_id+"')" ) + '<div class="clear"></div></div>';
if (args.page_id.match(/^Article\//)) {
html += '<div class="feed">' + icon('feed.png', 'RSS', '/effect/api/comment_feed/' + args.page_id + '.rss', 'Comments RSS Feed') + '</div>';
}
if (response.Items && response.Items.Item && response.List && response.List.length) {
html += '<div class="pagination">';
var total_items = response.List.length;
var num_pages = parseInt( total_items / args.limit, 10 ) + 1;
if (total_items % args.limit == 0) num_pages--;
var current_page = parseInt( args.offset / args.limit, 10 ) + 1;
if (num_pages > 1) {
html += 'Page: ';
if (current_page > 1) {
html += code_link( 'Comments.research(' + ((current_page - 2) * args.limit) + ')', '&larr; Newer' );
}
html += '&nbsp;&nbsp;';
var start_page = current_page - 4;
var end_page = current_page + 5;
if (start_page < 1) {
end_page += (1 - start_page);
start_page = 1;
}
if (end_page > num_pages) {
start_page -= (end_page - num_pages);
if (start_page < 1) start_page = 1;
end_page = num_pages;
}
for (var idx = start_page; idx <= end_page; idx++) {
if (idx == current_page) {
html += '<b>' + idx + '</b>';
}
else {
html += code_link( 'Comments.research(' + ((idx - 1) * args.limit) + ')', idx );
}
html += '&nbsp;';
}
html += '&nbsp;&nbsp;';
if (current_page < num_pages) {
html += code_link( 'Comments.research(' + ((current_page + 0) * args.limit) + ')', 'Older &rarr;' );
}
} 
else {
html += 'Page 1 of 1';
}
html += '</div>';
html += '<br clear="all"/>';
var items = this.comments = always_array( response.Items.Item );
for (var idx = 0, len = items.length; idx < len; idx++) {
var item = items[idx];
var extra_classes = (args.highlight && (args.highlight == item.ID)) ? ' highlight' : '';
html += '<div class="comment_container'+extra_classes+'">';
html += '<div class="info">';
if (item.Username) html += '<a href="#User/'+item.Username+'">';
html += '<b>' + item.Name.toString().toUpperCase() + '</b>';
if (item.Username) html += '</a>';
html += ', ' + get_short_date_time(item.Date) + '</div>';
html += '<div class="controls" id="d_comment_controls_'+item.ID+'">';
html += this.get_comment_controls( args.page_id, item );
html += '</div>';
html += '<br clear="all"/>';
html += '<div class="comment_body">' + item.Comment + '</div>';
html += '</div>';
html += '<div id="d_comment_replies_'+item.ID+'" class="comment_replies_container" style="display:none"></div>';
if (item.LastReply && ((item.LastReply >= time_now() - (86400 * 7)) || (session.username && (session.username == item.Username)))) {
setTimeout( "Comments.show_replies('"+args.page_id+"','"+item.ID+"')", 1 );
}
} 
}
else {
}
$( 'd_comments_' + args.page_id ).innerHTML = html;
},
get_control: function(icon, code, text, status_text) {
if (!icon.match(/\.\w+$/)) icon += '.gif';
return '<span class="comment_control" style="background-image:url(/effect/images/icons/small/'+icon+')">' + code_link(code, text, status_text) + '</span>';
},
get_comment_controls: function(page_id, comment) {
var html = '';
var spacer_txt = '&nbsp;&nbsp;|&nbsp;&nbsp;';
if (session.user) {
html += this.get_control('comment', "Comments.reply('"+page_id+"','"+comment.ID+"')", 'Reply') + spacer_txt;
}
if (comment.Replies) {
if (comment._replies_visible) html += this.get_control('magnify_minus', "Comments.hide_replies('"+page_id+"','"+comment.ID+"')", 'Hide Replies');
else html += this.get_control('magnify_plus', "Comments.show_replies('"+page_id+"','"+comment.ID+"')", 'Show Replies ('+comment.Replies+')');
if (session.user) html += spacer_txt;
}
if (session.user) {
html += this.get_control(
'star', 
"Comments.like('"+page_id+"','"+comment.ID+"')", 
'Like' + (comment.Like ? (' ('+comment.Like+')') : ''),
comment.Like ? (comment.Like + ' ' + ((comment.Like == 1) ? 'person likes this' : 'people like this')) : 'I like this comment'
) + spacer_txt;
if (is_admin()) html += this.get_control('trash', "Comments._delete('"+page_id+"','"+comment.ID+"')", 'Delete') + spacer_txt;
html += this.get_control('warning', "Comments.report('"+page_id+"','"+comment.ID+"')", 'Report Abuse');
}
return html;
},
reply: function(page_id, comment_id) {
hide_popup_dialog();
delete session.progress;
var comment = find_object( this.comments, { ID: comment_id } );
var html = '';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('/effect/images/big_icons/pencil_paper.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=600 height=300 valign=center align=center>';
html += '<div class="dialog_title">Reply to Comment by "'+comment.Name+'"</div>';
html += '<form method=get action="javascript:void(0)"><table cellspacing="0" cellpadding="0"><tr><td align="left">';
var name = this.get_name();
html += '<p align="left"><span class="fe_label">Posted by:</span>&nbsp;' + name;
if (!session.user) html += ' &rarr; <a href="/effect/#CreateAccount">Create Account</a>';
html += '</p><br/>';
html += '<textarea class="fe_edit" id="fe_comment_body" style="width:400px; height:150px;" wrap="virtual" onkeydown="return catchTab(this,event)"></textarea>';
html += Blog.edit_caption;
html += '</td></tr></table>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "hide_popup_dialog()") + '</td>';
html += '<td width=50>&nbsp;</td>';
html += '<td>' + large_icon_button('check', '<b>Post Reply</b>', "Comments.post_reply('"+page_id+"','"+comment_id+"')") + '</td>';
html += '</tr></table>';
html += '</form>';
html += '</div>';
session.hooks.keys[ESC_KEY] = 'hide_popup_dialog'; 
safe_focus( 'fe_comment_body' );
show_popup_dialog(600, 300, html);
},
post_reply: function(page_id, comment_id) {
var value = $('fe_comment_body').value;
if (!value) return;
hide_popup_dialog();
show_progress_dialog(1, "Posting reply...");
var name = this.get_name();
effect_api_mod_touch('comment_replies_get');
effect_api_send('comment_post_reply', {
PageID: page_id,
CommentID: comment_id,
Username: session.username || '',
Name: name,
Comment: value,
PageURL: location.href
}, [this, 'post_reply_finish'], { _page_id: page_id, _comment_id: comment_id } );
},
post_reply_finish: function(response, tx) {
hide_popup_dialog();
var page_id = tx._page_id;
var comment_id = tx._comment_id;
var comment = find_object( this.comments, { ID: comment_id } );
do_message('success', "Comment reply posted successfully.");
this.show_replies(page_id, comment_id);
if (!comment.Replies) comment.Replies = 1; else comment.Replies++;
$('d_comment_controls_'+comment_id).innerHTML = this.get_comment_controls( page_id, comment );
},
show_replies: function(page_id, comment_id) {
var comment = find_object( this.comments, { ID: comment_id } );
if (!comment._replies_visible) {
$('d_comment_replies_' + comment_id).show().innerHTML = '<img src="images/loading.gif" width="32" height="32"/>';
}
var args = { page_id: page_id, comment_id: comment_id, offset: 0, limit: 100 };
effect_api_get( 'comment_replies_get', args, [this, 'receive_replies_response'], { _search_args: args } );
},
receive_replies_response: function(response, tx) {
var page_id = tx._search_args.page_id;
var comment_id = tx._search_args.comment_id;
var comment = find_object( this.comments, { ID: comment_id } );
var html = '';
var replies = always_array( response.Items.Item );
for (var idx = 0, len = replies.length; idx < len; idx++) {
var reply = replies[idx];
html += get_chat_balloon(
(reply.Username == session.username) ? 'blue' : 'grey', 
reply.Username, 
reply.Comment.replace(/^<div[^>]*?>(.+)<\/div>$/i, '$1')
);
} 
$('d_comment_replies_' + comment_id).innerHTML = html;
if (!comment._replies_visible) {
$('d_comment_replies_' + comment_id).hide();
animate_div_visibility( 'd_comment_replies_' + comment_id, true );
}
comment._replies_visible = true;
$('d_comment_controls_'+comment_id).innerHTML = this.get_comment_controls( page_id, comment );
},
hide_replies: function(page_id, comment_id) {
var comment = find_object( this.comments, { ID: comment_id } );
if (comment._replies_visible) {
animate_div_visibility( 'd_comment_replies_' + comment_id, false );
comment._replies_visible = false;
$('d_comment_controls_'+comment_id).innerHTML = this.get_comment_controls( page_id, comment );
}
},
like: function(page_id, comment_id) {
effect_api_mod_touch('comments_get');
effect_api_send('comment_like', {
PageID: page_id,
CommentID: comment_id
}, [this, 'like_finish'], { _page_id: page_id, _comment_id: comment_id, _on_error: [this, 'like_error'] } );
},
like_error: function(response, tx) {
if (response.Code == 'comment_already_like') do_message('error', "You already like this comment.");
else do_error( response.Description );
},
like_finish: function(resopnse, tx) {
var page_id = tx._page_id;
var comment_id = tx._comment_id;
var comment = find_object( this.comments, { ID: comment_id } );
do_message('success', "You now like this comment.");
if (!comment.Like) comment.Like = 1; else comment.Like++;
$('d_comment_controls_'+comment_id).innerHTML = this.get_comment_controls( page_id, comment );
},
add: function(page_id) {
hide_popup_dialog();
delete session.progress;
var html = '';
html += '<div class="dialog_bkgnd" style="background-image:url('+png('/effect/images/big_icons/pencil_paper.png')+')">';
html += '<table cellspacing=0 cellpadding=0><tr><td width=600 height=300 valign=center align=center>';
html += '<div class="dialog_title">Post New Comment</div>';
html += '<form method=get action="javascript:void(0)"><table cellspacing="0" cellpadding="0"><tr><td align="left">';
var name = this.get_name();
html += '<p align="left"><span class="fe_label">Posted by:</span>&nbsp;' + name;
if (!session.user) html += ' &rarr; <a href="/effect/#CreateAccount">Create Account</a>';
html += '</p><br/>';
html += '<textarea class="fe_edit" id="fe_comment_body" style="width:400px; height:150px;" wrap="virtual" onkeydown="return catchTab(this,event)"></textarea>';
html += Blog.edit_caption;
html += '</td></tr></table>';
html += '<br><br><table><tr>';
html += '<td>' + large_icon_button('x', 'Cancel', "hide_popup_dialog()") + '</td>';
html += '<td width=50>&nbsp;</td>';
html += '<td>' + large_icon_button('check', '<b>Post Comment</b>', "Comments.post('"+page_id+"')") + '</td>';
html += '</tr></table>';
html += '</form>';
html += '</div>';
session.hooks.keys[ESC_KEY] = 'hide_popup_dialog'; 
safe_focus( 'fe_comment_body' );
show_popup_dialog(600, 300, html);
},
report: function(page_id, comment_id) {
if (confirm('Are you sure you want to report this comment to the site administrators as abusive and/or spam?')) {
effect_api_send('comment_report_abuse', {
PageID: page_id,
CommentID: comment_id
}, [this, 'report_finish'], { _page_id: page_id, _comment_id: comment_id } );
}
},
report_finish: function(response, tx) {
do_message('success', 'Your abuse report has been received, and will be evaluated by the site administrators.');
},
_delete: function(page_id, comment_id) {
if (confirm('Are you sure you want to permanently delete this comment?')) {
effect_api_mod_touch('comments_get');
effect_api_send('comment_delete', {
PageID: page_id,
CommentID: comment_id
}, [this, 'delete_finish'], { _page_id: page_id, _comment_id: comment_id } );
}
},
delete_finish: function(response, tx) {
do_message('success', 'The comment was deleted successfully.');
var page_id = tx._page_id;
this.search({ page_id: page_id });
},
get_name: function() {
var name = '(Anonymous)';
if (session.user) {
if (get_bool_pref('public_profile')) name = session.user.FullName;
else name = session.username;
}
return name;
},
post: function(page_id) {
var value = $('fe_comment_body').value;
if (!value) return;
hide_popup_dialog();
show_progress_dialog(1, "Posting comment...");
var name = this.get_name();
effect_api_mod_touch('comments_get');
effect_api_send('comment_post', {
PageID: page_id,
Username: session.username || '',
Name: name,
Comment: value
}, [this, 'post_finish'], { _page_id: page_id } );
},
post_finish: function(response, tx) {
hide_popup_dialog();
var comment_id = response.CommentID;
var page_id = tx._page_id;
this.search({ page_id: page_id, highlight: comment_id });
}
};
Class.create( 'Menu', {
id: '', 
menu: null, 
__construct: function(id) {
this.id = id;
},
load: function() {
if (!this.menu) {
this.menu = $(this.id);
assert( !!this.menu, "Could not locate DOM element: " + this.id );
}
},
get_value: function() {
this.load();
return this.menu.options[this.menu.selectedIndex].value;
},
set_value: function(value, auto_add) {
value = str_value(value);
this.load();
for (var idx = 0, len = this.menu.options.length; idx < len; idx++) {
if (this.menu.options[idx].value == value) {
this.menu.selectedIndex = idx;
return true;
}
}
if (auto_add) {
this.menu.options[this.menu.options.length] = new Option(value, value);
this.menu.selectedIndex = this.menu.options.length - 1;
return true;
}
return false;
},
disable: function() {
this.load();
this.menu.disabled = true;
this.menu.setAttribute( 'disabled', 'disabled' );
},
enable: function() {
this.load();
this.menu.setAttribute( 'disabled', '' );
this.menu.disabled = false;
},
populate: function(items, sel_value) {
this.load();
this.menu.options.length = 0;
for (var idx = 0, len = items.length; idx < len; idx++) {
var item = items[idx];
var item_name = '';
var item_value = '';
if (isa_hash(item)) {
item_name = item.label;
item_value = item.data;
}
else if (isa_array(item)) {
item_name = item[0];
item_value = item[1];
}
else {
item_name = item_value = item;
}
this.menu.options[ this.menu.options.length ] = new Option( item_name, item_value );
if (item_value == sel_value) this.menu.selectedIndex = idx;
} 
}
} ); 
Class.subclass( Menu, 'MultiMenu', {
__static: {
toggle_type: function(id) {
var menu = $(id);
assert(menu, "Could not find menu in DOM: " + id);
if (menu.disabled) return;
var obj = MenuManager.find(id);
assert(obj, "Could not find menu in MenuManager: " + id);
var div = $( 'd_inner_' + id );
var ic = $( 'ic_' + id );
var is_multiple = (ic.src.indexOf('contract') > -1);
obj.multi = !is_multiple;
var multiple_tag = !is_multiple ? 
' multiple="multiple" size=5' : '';
var items = [];
for (var idx = 0; idx < menu.options.length; idx++) {
var option = menu.options[idx];
array_push( items, {
value: option.value,
text: option.text,
selected: option.selected
});
} 
var html = '';
html += '<select name="'+id+'" id="'+id+'"' + multiple_tag + ' ' + compose_attribs(obj.attribs) + '>' + "\n";
var found_selected = 0;
for (var idx in items) {
var item = items[idx];
html += '<option value="' + item.value.replace(/\"/g, "&quot;") + '"';
if (item.selected && (!found_selected || multiple_tag)) {
html += ' selected="selected"';
found_selected = 1;
}
html += '>' + item.text + '</option>' + "\n";
}
html += '</select>';
div.innerHTML = html;
ic.src = images_uri + '/menu_' + (is_multiple ? 'expand' : 'contract') + '.gif';
obj.menu = null;
}
}, 
attribs: null, 
multi: false, 
toggle: true, 
__construct: function(id, attribs) {
this.id = id;
if (attribs) this.attribs = attribs;
},
get_html: function(items, selected_csv, attribs) {
if (!items) items = [];
if (!selected_csv) selected_csv = '';
if (attribs) this.attribs = attribs;
var selected = csv_to_hash(selected_csv);
this.menu = null;
if (num_keys(selected) > 1) this.multi = true;
var html = '<div id="d_outer_'+this.id+'"><form>';
html += '<table cellspacing="0" cellpadding="0"><tr>';
html += '<td><div id="d_inner_'+this.id+'"><select id="'+this.id+'"';
if (this.multi) html += ' multiple="multiple" size="5"';
html += compose_attribs(this.attribs);
html += '>';
for (var idx = 0, len = items.length; idx < len; idx++) {
var item = items[idx];
var item_name = '';
var item_value = '';
if (isa_hash(item)) {
item_name = item.label;
item_value = item.data;
}
else if (isa_array(item)) {
item_name = item[0];
item_value = item[1];
}
else {
item_name = item_value = item;
}
html += '<option value="'+item_value+'"';
if (selected[item_value]) html += ' selected="selected"';
html += '>' + item_name + '</option>';
}
html += '</select></div></td>';
html += '<td width="1">' + spacer(1,1) + '</td>';
if (this.toggle) html += '<td valign="bottom"><img id="ic_'+this.id+'" src="'+images_uri+'/menu_'+(this.multi ? 'contract' : 'expand')+'.gif" width="16" height="16" style="cursor:pointer" onClick="MultiMenu.toggle_type(\''+this.id+'\')"><br/>'+spacer(1,2)+'</td>';
html += '</tr></table>';
html += '</form></div>';
return html;
},
get_value: function() {
this.load();
var value = '';
for (var idx = 0; idx < this.menu.options.length; idx++) {
var option = this.menu.options[idx];
if (option.selected && option.value.length) {
if (value.length > 0) value += ',';
value += option.value;
}
} 
return value;
},
set_value: function(value, auto_add) {
value = '' + value; 
this.load();
if (!value) {
value = '';
for (var idx = 0; idx < this.menu.options.length; idx++) {
var option = this.menu.options[idx];
option.selected = (option.value == value);
}
return;
}
var selected = csv_to_hash(value);
if ((num_keys(selected) > 1) && !this.multi) {
MultiMenu.toggle_type(this.id);
var self = this;
setTimeout( function() {
self.set_value(value, auto_add);
}, 1 );
return;
}
for (var idx = 0; idx < this.menu.options.length; idx++) {
var option = this.menu.options[idx];
option.selected = selected[option.value] ? true : false;
}
},
populate: function(items, value) {
this.load();
this.menu.options.length = 0;
if (!value) value = '';
var selected = csv_to_hash(value);
for (var idx = 0, len = items.length; idx < len; idx++) {
var item = items[idx];
var item_name = '';
var item_value = '';
if (isa_hash(item)) {
item_name = item.label;
item_value = item.data;
}
else if (isa_array(item)) {
item_name = item[0];
item_value = item[1];
}
else {
item_name = item_value = item;
}
var opt = new Option( item_name, item_value );
this.menu.options[ this.menu.options.length ] = opt;
opt.selected = selected[item_value] ? true : false;
} 
},
collapse: function() {
if (this.multi) MultiMenu.toggle_type(this.id);
},
expand: function() {
if (!this.multi) MultiMenu.toggle_type(this.id);
}
} ); 
Class.create( 'MenuManager', {
__static: {
menus: {},
register: function(menu) {
this.menus[ menu.id ] = menu;
return menu; 
},
find: function(id) {
return this.menus[id];
}
} 
} ); 
Class.create( 'GrowlManager', {
lifetime: 10,
marginRight: 0,
marginTop: 0,
__construct: function() {
this.growls = [];
},
growl: function(type, msg) {
if (find_object(this.growls, { type: type, msg: msg })) return;
var div = $(document.createElement('div'));
div.className = 'growl_message ' + type;
div.setOpacity(0.0);
div.innerHTML = '<div class="growl_message_inner">' + msg + '<br/>' + spacer(1,5) + '</div>';
$('d_growl_wrapper').insertBefore( div, $('d_growl_top').nextSibling );
var growl = { id:get_unique_id(), type: type, msg: msg, opacity:0.0, start:hires_time_now(), div:div };
this.growls.push(growl);
this.handle_resize();
this.animate(growl);
var self = this;
div.onclick = function() {
delete_object(self.growls, { id: growl.id });
$('d_growl_wrapper').removeChild( div );
};
},
animate: function(growl) {
if (growl.deleted) return;
var now = hires_time_now();
var div = growl.div;
if (now - growl.start <= 0.5) {
div.setOpacity( tweenFrame(0.0, 1.0, (now - growl.start) * 2, 'EaseOut', 'Quadratic') );
}
else if (now - growl.start <= this.lifetime) {
if (!growl._fully_opaque) {
div.setOpacity( 1.0 );
growl._fully_opaque = true;
}
}
else if (now - growl.start <= this.lifetime + 1.0) {
div.setOpacity( tweenFrame(1.0, 0.0, (now - growl.start) - this.lifetime, 'EaseOut', 'Quadratic') );
}
else {
delete_object(this.growls, { id: growl.id });
$('d_growl_wrapper').removeChild( div );
return; 
}
var self = this;
setTimeout( function() { self.animate(growl); }, 33 );
},
handle_resize: function() {
var div = $('d_growl_wrapper');
if (this.growls.length) {
var size = getInnerWindowSize();
div.style.top = '' + (10 + this.marginTop) + 'px';
div.style.left = '' + Math.floor((size.width - 310) - this.marginRight) + 'px';
}
else {
div.style.left = '-2000px';
}
}
} );
window.$GR = new GrowlManager();
if (window.addEventListener) {
window.addEventListener( "resize", function() {
$GR.handle_resize();
}, false );
}
else if (window.attachEvent && !ie6) {
window.attachEvent("onresize", function() {
$GR.handle_resize();
});
}
Class.create( 'Effect.Page', {
ID: '', 
data: null,   
active: false, 
__construct: function(config) {
if (!config) return;
this.data = {};
if (!config) config = {};
for (var key in config) this[key] = config[key];
this.div = $('page_' + this.ID);
assert(this.div, "Cannot find page div: page_" + this.ID);
},
onInit: function() {
},
onActivate: function() {
return true;
},
onDeactivate: function() {
return true;
},
show: function() {
this.div.show();
},
hide: function() {
this.div.hide();
},
gosub: function(anchor) {
}
} ); 
Class.require( 'Effect.Page' );
Class.create( 'Effect.PageManager', {
pages: null, 
current_page_id: '', 
on_demand: {}, 
__construct: function(page_list) {
this.pages = [];
this.page_list = page_list;
for (var idx = 0, len = page_list.length; idx < len; idx++) {
Debug.trace( 'page', "Initializing page: " + page_list[idx].ID );
if (Effect.Page[ page_list[idx].ID ]) {
var page = new Effect.Page[ page_list[idx].ID ]( page_list[idx] );
page.onInit();
this.pages.push(page);
}
else {
Debug.trace( 'page', 'Page ' + page_list[idx].ID + ' will be loaded on-demand' );
}
}
},
find: function(id) {
var page = find_object( this.pages, { ID: id } );
if (!page) Debug.trace('PageManager', "Could not find page: " + id);
return page;
},
notify_load: function(file, id) {
for (var idx = 0, len = this.page_list.length; idx < len; idx++) {
var page_config = this.page_list[idx];
if (page_config.File == file) {
Debug.trace( 'page', "Initializing page on-demand: " + page_config.ID );
var page = new Effect.Page[ page_config.ID ]( page_config );
page.onInit();
this.pages.push(page);
}
}
var self = this;
setTimeout( function() {
var result = self.activate(id, self.temp_args);
delete self.temp_args;
$('d_page_loading').hide();
if (!result) {
$('page_'+id).hide();
self.current_page_id = '';
}
}, 1 );
},
activate: function(id, args) {
if (!find_object( this.pages, { ID: id } )) {
var page_config = find_object( this.page_list, { ID: id } );
assert(!!page_config, "Page config not found: " + id );
Debug.trace('page', "Loading file on-demand: " + page_config.File + " for page: " + id);
var url = '/effect/api/load_page/' + page_config.File + '?onafter=' + escape('page_manager.notify_load(\''+page_config.File+'\',\''+id+'\')');
if (page_config.Requires) {
var files = page_config.Requires.split(/\,\s*/);
for (var idx = 0, len = files.length; idx < len; idx++) {
var filename = files[idx];
if (!this.on_demand[filename]) {
Debug.trace('page', "Also loading file: " + filename);
url += '&file=' + filename;
this.on_demand[filename] = 1;
} 
} 
} 
$('d_page_loading').show();
this.temp_args = args;
load_script( url );
return true;
}
$('page_'+id).show();
var page = this.find(id);
page.active = true;
if (!args) args = [];
if (!isa_array(args)) args = [ args ];
var result = page.onActivate.apply(page, args);
if (typeof(result) == 'boolean') return result;
else return alert("Page " + id + " onActivate did not return a boolean!");
},
deactivate: function(id, new_id) {
var page = this.find(id);
var result = page.onDeactivate(new_id);
if (result) {
$('page_'+id).hide();
page.active = false;
}
return result;
},
click: function(id, args) {
Debug.trace('page', "Switching pages to: " + id);
var old_id = this.current_page_id;
if (this.current_page_id) {
var result = this.deactivate( this.current_page_id, id );
if (!result) return false; 
}
this.current_page_id = id;
this.old_page_id = old_id;
window.scrollTo( 0, 0 );
var result = this.activate(id, args);
if (!result) {
$('page_'+id).hide();
this.current_page_id = '';
}
return true;
}
} ); 
Class.subclass( Effect.Page, "Effect.Page.Main", {
inited: false,
onActivate: function() {
Nav.bar( ['Main', 'EffectGames.com'] );
Nav.title('');
$('d_blog_news').innerHTML = loading_image();
$('d_blog_community').innerHTML = loading_image();
$('d_blog_featured').innerHTML = loading_image();
Blog.search({
stag: 'featured_game',
limit: 4,
full: 1,
callback: [this, 'receive_featured_games']
});
effect_api_get( 'get_site_info', { cat: 'pop_pub_games' }, [this, 'receive_pop_pub_games'], { } );
Blog.search({
stag: 'front_page',
limit: 5,
target: 'd_blog_news',
more: 1
});
Blog.search({
path: '/community',
limit: 5,
target: 'd_blog_community',
more: 1
});
if (!this.inited) {
this.inited = true;
config.Strings.MainSlideshow.Slide = always_array( config.Strings.MainSlideshow.Slide );
this.slide_idx = 0;
this.num_slides = config.Strings.MainSlideshow.Slide.length;
this.slide_div_num = 0;
this.slide_dir = 1;
this.bk_pos = -340;
this.bk_pos_target = -340;
this.slide_images = [];
for (var idx = 0, len = this.num_slides; idx < len; idx++) {
var url = images_uri + '/' + config.Strings.MainSlideshow.Slide[idx].Photo;
this.slide_images[idx] = new Image();
this.slide_images[idx].src = png(url, true);
}			
}
this.height_target = 470;
this.height_start = $('d_header').offsetHeight;
this.time_start = hires_time_now();
this.duration = 0.75;
if (!this.timer) this.timer = setTimeout( '$P("Main").animate_mhs()', 33 );
if (session.user) $('d_blurb_main').hide();
else {
$('d_blurb_main').innerHTML = get_string('/Main/Blurb');
$('d_blurb_main').show();
}
return true;
},
receive_pop_pub_games: function(response, tx) {
var html = '';
if (response.Data && response.Data.Games && response.Data.Games.Game) {
var games = always_array( response.Data.Games.Game );
for (var idx = 0, len = Math.min(games.length, 16); idx < len; idx++) {
var game = games[idx];
html += '<div class="game_thumb" onClick="Nav.go(\'Game/'+game.GameID+'\')">' + 
(game.Logo ? 
user_image_thumbnail(game.Logo, 80, 60) : 
'<img class="png" src="/effect/images/logo_80_60.png" width="80" height="60"/>'
) + '<br/>' + ww_fit_box(game.Title, 80, 2, session.em_width, 1) + '</div>';
} 
html += '<div class="clear"></div>';
}
else {
html += 'No active public games found!  Why not <a href="#GameEdit"><b>create a new one?</b></a>';
}
$('d_main_pop_pub_games').innerHTML = html;
},
receive_featured_games: function(response, tx) {
var html = '';
if (response.Rows && response.Rows.Row) {
html += '<table cellspacing="0" cellpadding="0" border="0" width="100%">';
var rows = always_array( response.Rows.Row );
for (var idx = 0, len = rows.length; idx < len; idx++) {
var row = rows[idx];
var image_url = row.Params.featured_image;
if (image_url && image_url.match(/^(\w+)\/(\w+\.\w+)$/)) {
image_url = '/effect/api/view/users/' + RegExp.$1 + '/images/' + RegExp.$2;
}
if (idx % 2 == 0) html += '<tr>';
html += '<td width="50%">';
html += '<table cellspacing="0" cellpadding="0"><tr>';
html += '<td width="175" height="175">';
html += '<div class="featured_image_container" style="background-image:url('+image_url+')">';
html += '<div class="featured_image_overlay" onClick="window.open(\''+row.Params.featured_link+'\')"></div>';
html += '</div>';
html += '</td>';
html += '<td width="10">' + spacer(10,1) + '</td>';
html += '<td width="*" valign="top">';
html += '<div class="blog_title"><a href="'+row.Params.featured_link+'" target="_blank">' + row.Title + '</a></div>';
html += '<div class="featured_game_content">' + row.HTML + '</div>';
html += '</td>';
html += '<td width="10">' + spacer(15,1) + '</td>';
html += '</tr></table>';
html += spacer(1,20);
html += '</td>';
if (idx % 2 == 1) html += '</tr>';
} 
if (rows.length % 2 == 1) {
html += '<td></td>';
html += '</tr>';
}
html += '</table>';
} 
$('d_blog_featured').innerHTML = html;
},
animate_mhs: function() {
var now = hires_time_now();
if (now - this.time_start >= this.duration) {
$('d_header').style.height = '' + this.height_target + 'px';
$('d_shadow').style.height = '' + this.height_target + 'px';
delete this.timer;
}
else {
var height = tweenFrame(this.height_start, this.height_target, (now - this.time_start) / this.duration, 'EaseOut', 'Circular');
$('d_header').style.height = '' + height + 'px';
$('d_shadow').style.height = '' + height + 'px';
this.timer = setTimeout( '$P("Main").animate_mhs()', 33 );
}
},
onDeactivate: function() {
$('d_blog_news').innerHTML = '';
$('d_blog_community').innerHTML = '';
this.height_target = 75;
this.height_start = $('d_header').offsetHeight;
this.time_start = hires_time_now();
if (!this.timer) this.timer = setTimeout( '$P("Main").animate_mhs()', 33 );
return true;
},
draw_slide: function() {
if (this.slide_timer) return;
var slide = config.Strings.MainSlideshow.Slide[ this.slide_idx ];
this.old_photo = $('d_header_slideshow_photo_' + this.slide_div_num);
this.old_text = $('d_header_slideshow_text_' + this.slide_div_num);
this.slide_div_num = 1 - this.slide_div_num;
this.new_photo = $('d_header_slideshow_photo_' + this.slide_div_num);
this.new_text = $('d_header_slideshow_text_' + this.slide_div_num);
this.new_photo.style.backgroundImage = 'url('+png(images_uri+'/'+slide.Photo, true)+')';
this.new_photo.setOpacity(0.0);
var html = '';
html += slide.Text;
this.slide_width = this.new_text.offsetWidth;
this.new_text.innerHTML = html;
if (this.slide_dir == 1) this.new_text.style.left = '' + this.slide_width + 'px';
else this.new_text.style.left = '-' + this.slide_width + 'px';
this.slide_time_start = hires_time_now();
this.slide_timer = setTimeout( '$P("Main").animate_mhs_slide()', 33 );
},
animate_mhs_slide: function() {
var now = hires_time_now();
if (now - this.slide_time_start >= this.duration) {
this.new_text.style.left = '0px';
this.old_text.style.left = '-' + this.slide_width + 'px';
this.new_photo.setOpacity( 1.0 );
this.old_photo.setOpacity( 0.0 );
delete this.slide_timer;
this.bk_pos = this.bk_pos_target;
}
else {
var value = tweenFrame(0.0, 1.0, (now - this.slide_time_start) / this.duration, 'EaseOut', 'Circular');
if (this.slide_dir == 1) {
this.new_text.style.left = '' + Math.floor( this.slide_width - (this.slide_width * value) ) + 'px';
this.old_text.style.left = '-' + Math.floor( this.slide_width * value ) + 'px';
}
else {
this.new_text.style.left = '-' + Math.floor( this.slide_width - (this.slide_width * value) ) + 'px';
this.old_text.style.left = '' + Math.floor( this.slide_width * value ) + 'px';
}
this.new_photo.setOpacity( value );
this.old_photo.setOpacity( 1.0 - value );
var bkp = Math.floor( this.bk_pos + ((this.bk_pos_target - this.bk_pos) * value) );
$('d_header').style.backgroundPosition = '' + bkp + 'px 0px';
this.slide_timer = setTimeout( '$P("Main").animate_mhs_slide()', 33 );
}
},
prev_slide: function() {
this.bk_pos_target += 200;
this.slide_idx--;
if (this.slide_idx < 0) this.slide_idx += this.num_slides;
this.slide_dir = -1;
this.draw_slide();
},
next_slide: function() {
this.bk_pos_target -= 200;
this.slide_idx++;
if (this.slide_idx >= this.num_slides) this.slide_idx -= this.num_slides;
this.slide_dir = 1;
this.draw_slide();
}
} );
Class.subclass( Effect.Page, "Effect.Page.PublicGameList", {
onActivate: function() {
Nav.bar(
['Main', 'EffectGames.com'],
['PublicGameList', "All Public Games"]
);
Nav.title( "List of All Public Game Projects" );
effect_api_get( 'get_site_info', { cat: 'all_pub_games' }, [this, 'receive_all_pub_games'], { } );
this.div.innerHTML = loading_image();
return true;
},
onDeactivate: function() {
this.div.innerHTML = '';
return true;
},
receive_all_pub_games: function(response, tx) {
var html = '';
html += '<h1>List of All Public Game Projects</h1>';
html += '<div class="blurb">This is the complete list of public games currently being built by our users, presented in alphabetical order.  Maybe they could use some help!  Check out the game project pages and see (requires user account).</div>';
if (response.Data && response.Data.Games && response.Data.Games.Game) {
var games = always_array( response.Data.Games.Game );
for (var idx = 0, len = games.length; idx < len; idx++) {
var game = games[idx];
html += '<div class="game_thumb" onClick="Nav.go(\'Game/'+game.GameID+'\')">' + 
(game.Logo ? 
user_image_thumbnail(game.Logo, 80, 60) : 
'<img class="png" src="/effect/images/logo_80_60.png" width="80" height="60"/>'
) + '<br/>' + ww_fit_box(game.Title, 80, 2, session.em_width, 1) + '</div>';
} 
html += '<div class="clear"></div>';
}
else {
html += 'No public games found!  Why not <a href="#GameEdit"><b>create a new one?</b></a>';
}
this.div.innerHTML = html;
}
} );
Class.subclass( Effect.Page, "Effect.Page.Search", {
onActivate: function(args) {
if (!args) args = {};
var search_text = args.q;
var start = args.s || 0;
if (!start) start = 0;
var title = 'Search results for "'+search_text+'"';
Nav.bar(
['Main', 'EffectGames.com'],
['Search?q=' + escape(search_text), "Search Results"]
);
Nav.title( title );
this.last_search_text = search_text;
$('d_article_search').innerHTML = loading_image();
load_script( 'http://www.google.com/uds/GwebSearch?callback=receive_google_search_results&context=0&lstkp=0&rsz=large&hl=en&source=gsc&gss=.com&sig=&q='+escape(search_text)+'%20site%3Ahttp%3A%2F%2Fwww.effectgames.com%2F&key=notsupplied&v=1.0&start='+start+'&nocache=' + (new Date()).getTime() );
$('h_article_search').innerHTML = title;
return true;
},
onDeactivate: function(new_page) {
$('fe_search_bar').value = '';
$('d_article_search').innerHTML = '';
return true;
}
} );
function do_search_bar() {
var search_text = $('fe_search_bar').value;
if (search_text.length) {
Nav.go('Search?q=' + escape(search_text));
}
}
function receive_google_search_results(context, response) {
var html = '';
html += '<div class="powered_by_google">Powered by</div><div class="clear"></div>';
if (response.results.length) {
for (var idx = 0, len = response.results.length; idx < len; idx++) {
var row = response.results[idx];
var url = row.unescapedUrl.replace(/^.+article\.psp\.html/, '#Article'); 
html += '<div class="google_search_result_row">';
html += '<div class="link"><a href="'+url+'"><b>'+row.title+'</b></a></div>';
html += '<div class="preview">' + row.content + '</div>';
html += '</div>';
} 
} 
else {
html += 'No results found.';
}
if (response.cursor.pages) {
html += '<div class="google_pagination">Page: ';
for (var idx = 0, len = response.cursor.pages.length; idx < len; idx++) {
html += '<span>';
var page = response.cursor.pages[idx];
var url = '#Search?q=' + escape($P('Search').last_search_text) + '&s=' + page.start;
if (response.cursor.currentPageIndex != idx) html += '<a href="'+url+'">';
else html += '<b>';
html += page.label;
if (response.cursor.currentPageIndex != idx) html += '</a>';
else html += '</b>';
html += '</span>';
}
html += '</div>';
}
$('d_article_search').innerHTML = html;
}
