(this.webpackJsonpDemo=this.webpackJsonpDemo||[]).push([[0],{134:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(15),a=(n(26),n(41)),i=function(t,e,n,i,o){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,i=t.velocityX,u=n/2,s=i>=0&&(i>.2||t.deltaX>u),d=(s?1-a:a)*n,h=0;if(d>5){var f=d/Math.abs(i);h=Math.min(f,540)}o(s,a<=0?.01:Object(r.c)(0,a,.9999),h)}})}}}]);
//# sourceMappingURL=0.5ba5d006.chunk.js.map