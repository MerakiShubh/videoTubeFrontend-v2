const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-DCY_0X_S-C6jT2Xp7.js","assets/index-QFptoyZp.js","assets/index-Dt0mSSvf.css"])))=>i.map(i=>d[i]);
import{bk as g,b4 as p,bl as u,bm as C,aW as f,bj as h,aP as m,b7 as E}from"./index-QFptoyZp.js";function w(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function v(){var a;return!!((a=window.cast)!=null&&a.framework)}function y(){var a,e;return!!((e=(a=window.chrome)==null?void 0:a.cast)!=null&&e.isAvailable)}function l(){return s().getCastState()===cast.framework.CastState.CONNECTED}function s(){return window.cast.framework.CastContext.getInstance()}function d(){return s().getCurrentSession()}function _(){var a;return(a=d())==null?void 0:a.getSessionObj().media[0]}function k(a){var t;return((t=_())==null?void 0:t.media.contentId)===(a==null?void 0:a.src)}function S(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function I(a){return`Google Cast Error Code: ${a}`}function A(a,e){return g(s(),a,e)}class b{constructor(){this.name="google-cast"}get cast(){return s()}mediaType(){return"video"}canPlay(e){return p&&!u&&C(e)}async prompt(e){var i;let t,o,r;try{t=await this.Fj(e),this.f||(this.f=new cast.framework.RemotePlayer,new cast.framework.RemotePlayerController(this.f)),o=e.player.createEvent("google-cast-prompt-open",{trigger:t}),e.player.dispatchEvent(o),this.De(e,"connecting",o),await this.Gj(f(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:(i=d())==null?void 0:i.getCastDevice().friendlyName}),l()&&this.De(e,"connected",o)}catch(n){const c=n instanceof Error?n:this.Ee((n+"").toUpperCase(),"Prompt failed.");throw r=e.player.createEvent("google-cast-prompt-error",{detail:c,trigger:o??t,cancelable:!0}),e.player.dispatch(r),this.De(e,l()?"connected":"disconnected",r),c}finally{e.player.dispatch("google-cast-prompt-close",{trigger:r??o??t})}}async load(e){if(h)throw Error("[vidstack] can not load google cast provider server-side");if(!this.f)throw Error("[vidstack] google cast player was not initialized");return new(await m(async()=>{const{GoogleCastProvider:t}=await import("./vidstack-DCY_0X_S-C6jT2Xp7.js");return{GoogleCastProvider:t}},__vite__mapDeps([0,1,2]))).GoogleCastProvider(this.f,e)}async Fj(e){if(v())return;const t=e.player.createEvent("google-cast-load-start");e.player.dispatch(t),await E(w()),await customElements.whenDefined("google-cast-launcher");const o=e.player.createEvent("google-cast-loaded",{trigger:t});if(e.player.dispatch(o),!y())throw this.Ee("CAST_NOT_AVAILABLE","Google Cast not available on this platform.");return o}async Gj(e){this.Hj(e);const t=await this.cast.requestSession();if(t)throw this.Ee(t.toUpperCase(),I(t))}Hj(e){var t;(t=this.cast)==null||t.setOptions({...S(),...e})}De(e,t,o){const r={type:"google-cast",state:t};e.delegate.c("remote-playback-change",r,o)}Ee(e,t){const o=Error(t);return o.code=e,o}}var D=Object.freeze({__proto__:null,GoogleCastLoader:b});export{s as getCastContext,I as getCastErrorMessage,d as getCastSession,_ as getCastSessionMedia,k as hasActiveCastSession,A as listenCastContextEvent,D as loader};
