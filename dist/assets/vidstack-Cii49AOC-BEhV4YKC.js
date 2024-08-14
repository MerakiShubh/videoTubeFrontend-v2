import{ba as m,bc as y,aV as v,a_ as k,aU as w,bf as g,bg as r,bb as l,bh as S}from"./index-QFptoyZp.js";import{E as f,t as b}from"./vidstack-BKPm0xXI-D0_8nF_t.js";import{resolveYouTubeVideoId as j}from"./vidstack-DscYSLiW-CA6XwpqT.js";const c={Pm:-1,qg:0,rg:1,hj:2,ij:3,jj:5};class O extends f{constructor(t,s){super(t),this.b=s,this.$$PROVIDER_TYPE="YOUTUBE",this.scope=m(),this.ia=y(""),this.Aa=-1,this.nd=-1,this.wc=!1,this.L=null,this.J=null,this.S=null,this.language="en",this.color="red",this.cookies=!1}get c(){return this.b.delegate.c}get currentSrc(){return this.L}get type(){return"youtube"}get videoId(){return this.ia()}preconnect(){v(this.Ob())}setup(){super.setup(),k(this.xe.bind(this)),this.c("provider-setup",this)}async play(){const{paused:t}=this.b.$state;return this.J||(this.J=b(()=>{if(this.J=null,t())return"Timed out."}),this.u("playVideo")),this.J.promise}On(t){var s;(s=this.J)==null||s.reject(t),this.J=null}async pause(){const{paused:t}=this.b.$state;return this.S||(this.S=b(()=>{this.S=null,t()}),this.u("pauseVideo")),this.S.promise}Pn(t){var s;(s=this.S)==null||s.reject(t),this.S=null}setMuted(t){t?this.u("mute"):this.u("unMute")}setCurrentTime(t){this.wc=this.b.$state.paused(),this.u("seekTo",t),this.c("seeking",t)}setVolume(t){this.u("setVolume",t*100)}setPlaybackRate(t){this.u("setPlaybackRate",t)}async loadSource(t){if(!w(t.src)){this.L=null,this.ia.set("");return}const s=j(t.src);this.ia.set(s??""),this.L=t}Ob(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}xe(){this.A();const t=this.ia();if(!t){this.tc.set("");return}this.tc.set(`${this.Ob()}/embed/${t}`),this.c("load-start")}ng(){const{keyDisabled:t}=this.b.$props,{muted:s,playsInline:i,nativeControls:h}=this.b.$state,e=h();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:e?1:void 0,color:this.color,controls:e?1:0,disablekb:!e||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:e?1:3,mute:s()?1:0,playsinline:i()?1:0}}u(t,s){this.te({event:"command",func:t,args:s?[s]:void 0})}hd(){window.setTimeout(()=>this.te({event:"listening"}),100)}ld(t){this.c("loaded-metadata"),this.c("loaded-data"),this.b.delegate.Ha(void 0,t)}jb(t){var s;(s=this.S)==null||s.resolve(),this.S=null,this.c("pause",void 0,t)}nc(t,s){const{duration:i,realCurrentTime:h}=this.b.$state,e=this.Aa===c.qg,a=e?i():t;this.c("time-change",a,s),!e&&Math.abs(a-h())>1&&this.c("seeking",a,s)}ob(t,s,i){const h={buffered:new l(0,t),seekable:s};this.c("progress",h,i);const{seeking:e,realCurrentTime:a}=this.b.$state;e()&&t>a()&&this.pb(i)}pb(t){const{paused:s,realCurrentTime:i}=this.b.$state;window.clearTimeout(this.nd),this.nd=window.setTimeout(()=>{this.c("seeked",i(),t),this.nd=-1},s()?100:0),this.wc=!1}mc(t){const{seeking:s}=this.b.$state;s()&&this.pb(t),this.c("pause",void 0,t),this.c("end",void 0,t)}je(t,s){var u;const{started:i,paused:h,seeking:e}=this.b.$state,a=t===c.rg,o=t===c.ij,n=(h()||this.J)&&(o||a);if(o&&this.c("waiting",void 0,s),e()&&a&&this.pb(s),!i()&&n&&this.wc){this.On("invalid internal play operation"),a&&(this.pause(),this.wc=!1);return}switch(n&&((u=this.J)==null||u.resolve(),this.J=null,this.c("play",void 0,s)),t){case c.Pm:this.On("provider rejected"),this.Pn("provider rejected"),this.c("pause",void 0,s);break;case c.jj:this.ld(s);break;case c.rg:this.c("playing",void 0,s);break;case c.hj:this.jb(s);break;case c.qg:this.mc(s);break}this.Aa=t}ue({info:t},s){var a;if(!t)return;const{title:i,intrinsicDuration:h,playbackRate:e}=this.b.$state;if(g(t.videoData)&&t.videoData.title!==i()&&this.c("title-change",t.videoData.title,s),r(t.duration)&&t.duration!==h()){if(r(t.videoLoadedFraction)){const o=((a=t.progressState)==null?void 0:a.loaded)??t.videoLoadedFraction*t.duration,n=new l(0,t.duration);this.ob(o,n,s)}this.c("duration-change",t.duration,s)}if(r(t.playbackRate)&&t.playbackRate!==e()&&this.c("rate-change",t.playbackRate,s),t.progressState){const{current:o,seekableStart:n,seekableEnd:u,loaded:p,duration:d}=t.progressState;this.nc(o,s),this.ob(p,new l(n,u),s),d!==h()&&this.c("duration-change",d,s)}if(r(t.volume)&&S(t.muted)){const o={muted:t.muted,volume:t.volume/100};this.c("volume-change",o,s)}r(t.playerState)&&t.playerState!==this.Aa&&this.je(t.playerState,s)}A(){this.Aa=-1,this.nd=-1,this.J=null,this.S=null,this.wc=!1}}export{O as YouTubeProvider};
