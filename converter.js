const _0x5c6efa=_0x5b57;(function(_0x4d6b5a,_0x4805cc){const _0x592261=_0x5b57,_0x58eea0=_0x4d6b5a();while(!![]){try{const _0x1b6998=-parseInt(_0x592261(0xdc))/0x1*(-parseInt(_0x592261(0xc7))/0x2)+parseInt(_0x592261(0xe0))/0x3*(parseInt(_0x592261(0xce))/0x4)+parseInt(_0x592261(0xc6))/0x5*(parseInt(_0x592261(0xdf))/0x6)+-parseInt(_0x592261(0xd8))/0x7*(parseInt(_0x592261(0xbd))/0x8)+-parseInt(_0x592261(0xca))/0x9*(-parseInt(_0x592261(0xc3))/0xa)+-parseInt(_0x592261(0xde))/0xb+-parseInt(_0x592261(0xd4))/0xc*(-parseInt(_0x592261(0xda))/0xd);if(_0x1b6998===_0x4805cc)break;else _0x58eea0['push'](_0x58eea0['shift']());}catch(_0x3b6e9c){_0x58eea0['push'](_0x58eea0['shift']());}}}(_0x5a3b,0x418ec));function _0x5b57(_0x49c9,_0x17c99a){const _0x5a3b26=_0x5a3b();return _0x5b57=function(_0x5b577a,_0x3d2842){_0x5b577a=_0x5b577a-0xbb;let _0x22c9bc=_0x5a3b26[_0x5b577a];return _0x22c9bc;},_0x5b57(_0x49c9,_0x17c99a);}function hi(){const _0x2b0cef=_0x5b57;console[_0x2b0cef(0xbe)]('Hello\x20World!');}function _0x5a3b(){const _0x47fc81=['122MvgCyF','child_process','-crf','477vDZOVF','-c:a','unlink','-b:a','31732UNaKmX','promises','writeFile','../tmp','aac','-vbr','8856bllBps','libx264','libopus','-vn','7RhslUU','-ab','3354YRLDQl','-ar','1033rfJUea','-c:v','5622705bmFzgD','712404nkvJEC','108SszMvy','128k','44100','2804016lelizW','log','join','opus','close','-compression_level','89140bKeSOY','readFile','error','5GkQnPx'];_0x5a3b=function(){return _0x47fc81;};return _0x5a3b();}hi();const fs=require('fs'),path=require('path'),{spawn}=require(_0x5c6efa(0xc8));function ffmpeg(_0x228574,_0x7426c5=[],_0x678d62='',_0x4adfa3=''){return new Promise(async(_0x467377,_0x2457d5)=>{const _0x152966=_0x5b57;try{let _0x398efb=path[_0x152966(0xbf)](__dirname,_0x152966(0xd1),+new Date()+'.'+_0x678d62),_0x199f1b=_0x398efb+'.'+_0x4adfa3;await fs[_0x152966(0xcf)][_0x152966(0xd0)](_0x398efb,_0x228574),spawn('ffmpeg',['-y','-i',_0x398efb,..._0x7426c5,_0x199f1b])['on'](_0x152966(0xc5),_0x2457d5)['on'](_0x152966(0xc1),async _0x8a3b88=>{const _0x389b02=_0x152966;try{await fs[_0x389b02(0xcf)][_0x389b02(0xcc)](_0x398efb);if(_0x8a3b88!==0x0)return _0x2457d5(_0x8a3b88);_0x467377({'data':await fs[_0x389b02(0xcf)][_0x389b02(0xc4)](_0x199f1b),'filename':_0x199f1b,'delete'(){return fs['promises']['unlink'](_0x199f1b);}});}catch(_0x576726){_0x2457d5(_0x576726);}});}catch(_0x3b7df4){_0x2457d5(_0x3b7df4);}});}function toPTT(_0x360c82,_0x1db90f){const _0x46e41d=_0x5c6efa;return ffmpeg(_0x360c82,[_0x46e41d(0xd7),_0x46e41d(0xcb),_0x46e41d(0xd6),_0x46e41d(0xcd),_0x46e41d(0xbb),'-vbr','on'],_0x1db90f,'ogg');}function toAudio(_0x1181b7,_0x3c5dc2){const _0x55b369=_0x5c6efa;return ffmpeg(_0x1181b7,[_0x55b369(0xd7),_0x55b369(0xcb),_0x55b369(0xd6),_0x55b369(0xcd),'128k',_0x55b369(0xd3),'on',_0x55b369(0xc2),'10'],_0x3c5dc2,_0x55b369(0xc0));}function toVideo(_0x1597eb,_0x36617c){const _0x26a3fe=_0x5c6efa;return ffmpeg(_0x1597eb,[_0x26a3fe(0xdd),_0x26a3fe(0xd5),_0x26a3fe(0xcb),_0x26a3fe(0xd2),_0x26a3fe(0xd9),_0x26a3fe(0xbb),_0x26a3fe(0xdb),_0x26a3fe(0xbc),_0x26a3fe(0xc9),'32','-preset','slow'],_0x36617c,'mp4');}module['exports']={'toAudio':toAudio,'toPTT':toPTT,'toVideo':toVideo,'ffmpeg':ffmpeg};