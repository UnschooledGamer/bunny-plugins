(function(i,d,l,c){"use strict";const{View:f}=d.ReactNative,a=l.after("render",f,function(p,s){const u=c.findInReactTree(s,function(t){var e,n,o,r;return(t==null||(n=t.props)===null||n===void 0||(e=n.channel)===null||e===void 0?void 0:e.name)&&(t==null||(r=t.props)===null||r===void 0||(o=r.hasOwnProperty)===null||o===void 0?void 0:o.call(r,"isRulesChannel"))});u&&(l.after("type",u.type,function(t,e){const n=c.findInReactTree(e,function(o){return typeof o?.children=="string"});if(n)return n.children=n.children.replace(/-/g," "),e}),a())}),v=function(){return a()};return i.onUnload=v,i})({},vendetta.metro.common,vendetta.patcher,vendetta.utils);
