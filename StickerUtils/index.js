(function(l,p,n,u,r,i,o,f){"use strict";const S=n.findByStoreName("GuildStore"),b=n.findByStoreName("UserSettingsProtoStore"),{default:k}=n.find(function(c){return c.default?.render?.name==="ActionSheet"}),{hideActionSheet:a}=n.findByProps("hideActionSheet"),{downloadMediaAsset:A}=n.findByProps("downloadMediaAsset"),m=n.findByProps("favoriteSticker","unfavoriteSticker"),d={marginBottom:10},B=p.before("render",k,function(c){let[v]=c;const y=u.findInReactTree(v,function(t){return Array.isArray(t?.children)}),e=u.findInReactTree(v,function(t){return typeof t?.sticker=="object"&&t?.sticker?.hasOwnProperty("guild_id")})?.sticker,g=b.frecencyWithoutFetchingLatest.favoriteStickers.stickerIds;if(!y||!e||!g)return;const s=!!g.find(function(t){return t===e.id}),h=`https://discord.com/stickers/${e.id}.png`;y.children[1]=React.createElement(React.Fragment,null,Object.values(S.getGuilds()).find(function(t){return t.id===e.guild_id})&&React.createElement(r.Button,{text:s?"Remove from Favorites":"Add to Favorites",color:s?"red":"brand",style:d,size:"small",onPress:function(){return s?m.unfavoriteSticker(e.id):m.favoriteSticker(e.id),a(),i.showToast(s?"Removed from Favorites":"Added to Favorites",o.getAssetIDByName("Check"))}}),React.createElement(r.Button,{text:"Copy ID to clipboard",color:"brand",size:"small",style:d,onPress:function(){return f.clipboard.setString(e.id),a(),i.showToast(`Copied ${e.name}'s ID to clipboard`,o.getAssetIDByName("ic_copy_message_link"))}}),React.createElement(r.Button,{text:"Copy URL to clipboard",color:"brand",size:"small",style:d,onPress:function(){return f.clipboard.setString(h),a(),i.showToast(`Copied ${e.name}'s URL to clipboard`,o.getAssetIDByName("ic_copy_message_link"))}}),React.createElement(r.Button,{text:"Save image",color:"brand",size:"small",style:d,onPress:function(){return A(h,0),a(),i.showToast(`Saved ${e.name}'s image`,o.getAssetIDByName("toast_image_saved"))}}))}),R=function(){return B()};return l.onUnload=R,l})({},vendetta.patcher,vendetta.metro,vendetta.utils,vendetta.ui.components,vendetta.ui.toasts,vendetta.ui.assets,vendetta.metro.common);
