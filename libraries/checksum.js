"use strict";function fasthash_js(r){var t=5381,n=r.length;while(n)t=t*33^r.charCodeAt(--n);return t>>>0}function strhash(r){if(r.length%32>0)r+=Array(33-r.length%32).join("z");var t,n,e,h,o;t=n=e=h=0;var a="",f=[],i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","1","2","3","4","5","6","7","8","9"];for(t=0;t<r.length;t++){o=r.charCodeAt(t);f[n++]=o<127?o&255:127}var u=Math.ceil(f.length/32);for(t=0;t<f.length;t++){n+=f[t];e++;if(e==u||t==f.length-1){h=Math.floor(n/e);if(h<32)a+="0";else if(h>126)a+="z";else a+=i[Math.floor((h-32)/2.76)];n=e=0}}return a}function toHex(r){var t=((r<0?8:0)+(r>>28&7)).toString(16)+(r&268435455).toString(16);while(t.length<8)t="0"+t;return t}function hashCode(r,t){t=t||2;var n,e,h=[];for(n=0;n<t;n++)h.push(n*268803292);function o(r){var t,n;if(r===null)return"n";if(r===true)return"t";if(r===false)return"f";if(r instanceof Date)return"d:"+(0+r);t=typeof r;if(t==="string")return"s:"+r.replace(/([\\\\;])/g,"\\$1");if(t==="number")return"n:"+r;if(r instanceof Function)return"m:"+r.toString().replace(/([\\\\;])/g,"\\$1");if(r instanceof Array){n=[];for(t=0;t<r.length;t++)n.push(o(r[t]));return"a:"+n.join(";")}n=[];for(t in r){n.push(t+":"+o(r[t]))}return"o:"+n.join(";")}r=o(r);for(n=0;n<r.length;n++){for(e=0;e<h.length;e++){h[e]=(h[e]<<13)-(h[e]>>19);h[e]+=r.charCodeAt(n)<<h[e]%24;h[e]=h[e]&h[e]}}for(n=0;n<h.length;n++){h[n]=toHex(h[n])}return h.join("")}var Sha1={};Sha1.hash=function(r){var t=[1518500249,1859775393,2400959708,3395469782];r+=String.fromCharCode(128);var n=r.length/4+2;var e=Math.ceil(n/16);var h=new Array(e);for(var o=0;o<e;o++){h[o]=new Array(16);for(var a=0;a<16;a++){h[o][a]=r.charCodeAt(o*64+a*4)<<24|r.charCodeAt(o*64+a*4+1)<<16|r.charCodeAt(o*64+a*4+2)<<8|r.charCodeAt(o*64+a*4+3)}}h[e-1][14]=(r.length-1)*8/Math.pow(2,32);h[e-1][14]=Math.floor(h[e-1][14]);h[e-1][15]=(r.length-1)*8&4294967295;var f=1732584193;var i=4023233417;var u=2562383102;var d=271733878;var c=3285377520;var g=new Array(80);var l,s,v,w,S;for(o=0;o<e;o++){for(var C=0;C<16;C++)g[C]=h[o][C];for(C=16;C<80;C++)g[C]=Sha1.ROTL(g[C-3]^g[C-8]^g[C-14]^g[C-16],1);l=f;s=i;v=u;w=d;S=c;for(C=0;C<80;C++){var m=Math.floor(C/20);var A=Sha1.ROTL(l,5)+Sha1.f(m,s,v,w)+S+t[m]+g[C]&4294967295;S=w;w=v;v=Sha1.ROTL(s,30);s=l;l=A}f=f+l&4294967295;i=i+s&4294967295;u=u+v&4294967295;d=d+w&4294967295;c=c+S&4294967295}return Sha1.toHexStr(f)+Sha1.toHexStr(i)+Sha1.toHexStr(u)+Sha1.toHexStr(d)+Sha1.toHexStr(c)};Sha1.f=function(r,t,n,e){switch(r){case 0:return t&n^~t&e;case 1:return t^n^e;case 2:return t&n^t&e^n&e;case 3:return t^n^e}};Sha1.ROTL=function(r,t){return r<<t|r>>>32-t};Sha1.toHexStr=function(r){var t="",n;for(var e=7;e>=0;e--){n=r>>>e*4&15;t+=n.toString(16)}return t};function md5cycle(r,t){var n=r[0],e=r[1],h=r[2],o=r[3];n=ff(n,e,h,o,t[0],7,-680876936);o=ff(o,n,e,h,t[1],12,-389564586);h=ff(h,o,n,e,t[2],17,606105819);e=ff(e,h,o,n,t[3],22,-1044525330);n=ff(n,e,h,o,t[4],7,-176418897);o=ff(o,n,e,h,t[5],12,1200080426);h=ff(h,o,n,e,t[6],17,-1473231341);e=ff(e,h,o,n,t[7],22,-45705983);n=ff(n,e,h,o,t[8],7,1770035416);o=ff(o,n,e,h,t[9],12,-1958414417);h=ff(h,o,n,e,t[10],17,-42063);e=ff(e,h,o,n,t[11],22,-1990404162);n=ff(n,e,h,o,t[12],7,1804603682);o=ff(o,n,e,h,t[13],12,-40341101);h=ff(h,o,n,e,t[14],17,-1502002290);e=ff(e,h,o,n,t[15],22,1236535329);n=gg(n,e,h,o,t[1],5,-165796510);o=gg(o,n,e,h,t[6],9,-1069501632);h=gg(h,o,n,e,t[11],14,643717713);e=gg(e,h,o,n,t[0],20,-373897302);n=gg(n,e,h,o,t[5],5,-701558691);o=gg(o,n,e,h,t[10],9,38016083);h=gg(h,o,n,e,t[15],14,-660478335);e=gg(e,h,o,n,t[4],20,-405537848);n=gg(n,e,h,o,t[9],5,568446438);o=gg(o,n,e,h,t[14],9,-1019803690);h=gg(h,o,n,e,t[3],14,-187363961);e=gg(e,h,o,n,t[8],20,1163531501);n=gg(n,e,h,o,t[13],5,-1444681467);o=gg(o,n,e,h,t[2],9,-51403784);h=gg(h,o,n,e,t[7],14,1735328473);e=gg(e,h,o,n,t[12],20,-1926607734);n=hh(n,e,h,o,t[5],4,-378558);o=hh(o,n,e,h,t[8],11,-2022574463);h=hh(h,o,n,e,t[11],16,1839030562);e=hh(e,h,o,n,t[14],23,-35309556);n=hh(n,e,h,o,t[1],4,-1530992060);o=hh(o,n,e,h,t[4],11,1272893353);h=hh(h,o,n,e,t[7],16,-155497632);e=hh(e,h,o,n,t[10],23,-1094730640);n=hh(n,e,h,o,t[13],4,681279174);o=hh(o,n,e,h,t[0],11,-358537222);h=hh(h,o,n,e,t[3],16,-722521979);e=hh(e,h,o,n,t[6],23,76029189);n=hh(n,e,h,o,t[9],4,-640364487);o=hh(o,n,e,h,t[12],11,-421815835);h=hh(h,o,n,e,t[15],16,530742520);e=hh(e,h,o,n,t[2],23,-995338651);n=ii(n,e,h,o,t[0],6,-198630844);o=ii(o,n,e,h,t[7],10,1126891415);h=ii(h,o,n,e,t[14],15,-1416354905);e=ii(e,h,o,n,t[5],21,-57434055);n=ii(n,e,h,o,t[12],6,1700485571);o=ii(o,n,e,h,t[3],10,-1894986606);h=ii(h,o,n,e,t[10],15,-1051523);e=ii(e,h,o,n,t[1],21,-2054922799);n=ii(n,e,h,o,t[8],6,1873313359);o=ii(o,n,e,h,t[15],10,-30611744);h=ii(h,o,n,e,t[6],15,-1560198380);e=ii(e,h,o,n,t[13],21,1309151649);n=ii(n,e,h,o,t[4],6,-145523070);o=ii(o,n,e,h,t[11],10,-1120210379);h=ii(h,o,n,e,t[2],15,718787259);e=ii(e,h,o,n,t[9],21,-343485551);r[0]=add32(n,r[0]);r[1]=add32(e,r[1]);r[2]=add32(h,r[2]);r[3]=add32(o,r[3])}function cmn(r,t,n,e,h,o){t=add32(add32(t,r),add32(e,o));return add32(t<<h|t>>>32-h,n)}function ff(r,t,n,e,h,o,a){return cmn(t&n|~t&e,r,t,h,o,a)}function gg(r,t,n,e,h,o,a){return cmn(t&e|n&~e,r,t,h,o,a)}function hh(r,t,n,e,h,o,a){return cmn(t^n^e,r,t,h,o,a)}function ii(r,t,n,e,h,o,a){return cmn(n^(t|~e),r,t,h,o,a)}function md51(r){var t=r.length,n=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=r.length;e+=64){md5cycle(n,md5blk(r.substring(e-64,e)))}r=r.substring(e-64);var h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<r.length;e++)h[e>>2]|=r.charCodeAt(e)<<(e%4<<3);h[e>>2]|=128<<(e%4<<3);if(e>55){md5cycle(n,h);for(e=0;e<16;e++)h[e]=0}h[14]=t*8;md5cycle(n,h);return n}function md5blk(r){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=r.charCodeAt(n)+(r.charCodeAt(n+1)<<8)+(r.charCodeAt(n+2)<<16)+(r.charCodeAt(n+3)<<24)}return t}var hex_chr="0123456789abcdef".split("");function rhex(r){var t="",n=0;for(;n<4;n++)t+=hex_chr[r>>n*8+4&15]+hex_chr[r>>n*8&15];return t}function hex(r){for(var t=0;t<r.length;t++)r[t]=rhex(r[t]);return r.join("")}function md5(r){return hex(md51(r))}var add32=function(r,t){return r+t&4294967295};if(md5("hello")!="5d41402abc4b2a76b9719d911017c592"){add32=function(r,t){var n=(r&65535)+(t&65535),e=(r>>16)+(t>>16)+(n>>16);return e<<16|n&65535}}function pad(r,t){while(r.length<t){r="0"+r}return r}function fold(r,t){var n;var e;var h;if(t.length===0){return r}for(n=0,h=t.length;n<h;n++){e=t.charCodeAt(n);r=(r<<5)-r+e;r|=0}return r<0?r*-2:r}function foldObject(r,t,n){return Object.keys(t).sort().reduce(e,r);function e(r,e){return foldValue(r,t[e],e,n)}}function foldValue(r,t,n,e){var h=fold(fold(fold(r,n),toString(t)),typeof t);if(t===null){return fold(h,"null")}if(t===undefined){return fold(h,"undefined")}if(typeof t==="object"){if(e.indexOf(t)!==-1){return fold(h,"[Circular]"+n)}e.push(t);return foldObject(h,t,e)}return fold(h,t.toString())}function toString(r){return Object.prototype.toString.call(r)}function sum(r){return pad(foldValue(0,r,"",[]).toString(16),8)}function stringHashCode(r){var t=0,n,e,h;if(r.length===0)return t;for(n=0,h=r.length;n<h;n++){e=r.charCodeAt(n);t=(t<<5)-t+e;t|=0}return t}function toBase36(r){var t=((r<0?8:0)+(r>>28&7)).toString(36)+(r&268435455).toString(36);while(t.length<8)t="0"+t;return t}function hashCodeMod(r,t){t=t||2;var n,e,h=[];for(n=0;n<t;n++)h.push(n*268803292);r="s:"+r.replace(/([\\\\;])/g,"\\$1");for(n=0;n<r.length;n++){for(e=0;e<h.length;e++){h[e]=(h[e]<<13)-(h[e]>>19);h[e]+=r.charCodeAt(n)<<h[e]%24;h[e]=h[e]&h[e]}}for(n=0;n<h.length;n++){h[n]=toBase36(h[n])}return h.join("")}window.weirdhash={};window.weirdhash.fastHash=fasthash_js;window.weirdhash.strHash=strhash;window.weirdhash.hashCode=hashCode;window.weirdhash.md5=md5;window.weirdhash.sha1=Sha1.hash;window.weirdhash.sum=sum;window.weirdhash.javaHashCode=stringHashCode;window.weirdhash.hashCode2=hashCodeMod;