(function(t,f,g,h,D,o,e,a,i){"use strict";const{ScrollView:m}=i.General,{FormSection:B,FormRow:n}=i.Forms;function R(){return e.React.createElement(m,null,e.React.createElement(B,null,e.React.createElement(n,{label:"Discord Server",leading:e.React.createElement(n.Icon,{source:a.getAssetIDByName("Discord")}),trailing:n.Arrow,onPress:function(){return e.url.openDeeplink("https://discord.gg/TeRQEPb")}}),e.React.createElement(n,{label:"Reload DB",leading:e.React.createElement(n.Icon,{source:a.getAssetIDByName("ic_message_retry")}),onPress:async function(){return await c()?o.showToast("Reloaded DB",a.getAssetIDByName("check")):o.showToast("Failed to reload DB",a.getAssetIDByName("small"))}})))}const w=g.findByProps("default","getUserBannerURL");let r,l;const c=async function(){try{return r=await(await D.safeFetch("https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json",{cache:"no-store"})).json(),r}catch(s){f.logger.error("Failed to fetch userBG data",s)}},v=async function(){if(await c(),!r)return o.showToast("Failed to load DB");l=h.after("getUserBannerURL",w,function(s){let[d]=s;const u=r?.find(function(E){return E.uid===d?.id});if(d?.banner===void 0&&u)return u.img})},y=function(){return l?.()},b=R;return t.fetchData=c,t.onLoad=v,t.onUnload=y,t.settings=b,t})({},vendetta,vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.ui.toasts,vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components);
