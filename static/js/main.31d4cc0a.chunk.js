(this["webpackJsonpreact-sid-player"]=this["webpackJsonpreact-sid-player"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"album":"The Last Ninja","file":"/assets/sids/Last_Ninja_1.sid","poster":"/assets/images/ln1_cover.jpg","songs":[{"id":0,"title":"The Wastelands Loader","length":"04:29","subtune":2},{"id":1,"title":"The Wastelands","length":"05:40","subtune":5},{"id":2,"title":"The Wilderness Loader","length":"05:06","subtune":0},{"id":3,"title":"The Wilderness","length":"05:34","subtune":6},{"id":4,"title":"Palace Gardens Loader","length":"03:59","subtune":1},{"id":5,"title":"Palace Gardens","length":"06:10","subtune":7},{"id":6,"title":"The Dungeons Loader","length":"03:48","subtune":10},{"id":7,"title":"The Dungeons","length":"05:05","subtune":8},{"id":8,"title":"The Palace Loader","length":"03:49","subtune":3},{"id":9,"title":"The Palace","length":"04:38","subtune":9},{"id":10,"title":"The Inner Sanctum Loader","length":"06:17","subtune":4},{"id":11,"title":"The Inner Sanctum","length":"07:55","subtune":10}]},{"id":2,"album":"Last Ninja 2","file":"/assets/sids/Last_Ninja_2.sid","poster":"/assets/images/ln2_cover.jpg","songs":[{"id":0,"title":"Central Park Loader","length":"04:29","subtune":0},{"id":1,"title":"Central Park","length":"05:40","subtune":1},{"id":2,"title":"The Street Loader","length":"05:06","subtune":2},{"id":3,"title":"The Street","length":"05:34","subtune":3},{"id":4,"title":"The Sewers Loader","length":"03:59","subtune":4},{"id":5,"title":"The Sewers","length":"06:10","subtune":5},{"id":6,"title":"The Basement Loader","length":"03:48","subtune":6},{"id":7,"title":"The Basement","length":"05:05","subtune":7},{"id":8,"title":"The Office Loader","length":"03:49","subtune":8},{"id":9,"title":"The Office","length":"04:38","subtune":9},{"id":10,"title":"The Mansion Loader","length":"06:17","subtune":10},{"id":11,"title":"The Mansion","length":"07:55","subtune":11},{"id":12,"title":"The Final Battle Loader","length":"03:33","subtune":12}]},{"id":3,"album":"The Last Ninja 3","file":"/assets/sids/Last_Ninja_3.sid","poster":"/assets/images/ln3_cover.jpg","songs":[{"id":0,"title":"Intro Tune","length":"04:47","subtune":2},{"id":1,"title":"Level 1 - Earth","length":"02:52","subtune":3},{"id":2,"title":"Level 2 - Wind","length":"04:05","subtune":4},{"id":3,"title":"Level 3 - Water","length":"04:19","subtune":5},{"id":4,"title":"Level 4 - Fire","length":"03:13","subtune":6},{"id":5,"title":"Level 5 - Void","length":"03:13","subtune":7},{"id":6,"title":"End Sequence","length":"02:50","subtune":9},{"id":7,"title":"Game Over","length":"00:38","subtune":8}]},{"id":3,"album":"The Last Ninja Remix","file":"/assets/sids/Last_Ninja_Remix.sid","poster":"/assets/images/lnrmx_cover.jpg","songs":[{"id":0,"title":"Intro - The Dungeons","length":"05:31","subtune":0},{"id":1,"title":"Central Park - The Wastelands","length":"03:29","subtune":1},{"id":2,"title":"The Street - Central Park","length":"04:20","subtune":2},{"id":3,"title":"The Sewers - Merry Christmas, Mr.\u200bLawrence","length":"04:19","subtune":3},{"id":4,"title":"The Basement - The Wastelands","length":"03:01","subtune":4},{"id":5,"title":"The Office - The Wastelands","length":"02:00","subtune":5},{"id":6,"title":"The Mansion & The Final Battle","length":"03:15","subtune":6}]}]')},16:function(e,t,n){e.exports=n.p+"static/media/ln1_cover.16ba26b9.jpg"},17:function(e,t,n){e.exports=n.p+"static/media/ln2_cover.4ff90d4c.jpg"},18:function(e,t,n){e.exports=n.p+"static/media/ln3_cover.15905d93.jpg"},19:function(e,t,n){e.exports=n.p+"static/media/lnrmx_cover.2ea4b80f.jpg"},22:function(e,t,n){e.exports=n(39)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),i=n.n(l),s=n(4),c=n(5),o=n(12),u=n.n(o),d=n(21),g=n(1),m=function(e){var t=e.split(":"),n=60*Number(t[0])+Number(t[1]);return parseInt(n.toFixed(0))},f=function(e,t){switch(t.type){case"SHOW_PLAYLIST":return Object(g.a)({},e,{playlistOpen:!e.playlistOpen});case"TOGGLE_PLAYING":return Object(g.a)({},e,{playing:!e.playing,pause:!e.pause,currentSongTime:e.currentSongTime,currentSongProgress:e.currentSongProgress});case"NEXT_SONG":var n;return n=e.current===e.songs.length-1?0:e.current+1,Object(g.a)({},e,{active:e.songs[n],current:e.songs[n].id,subtune:e.songs[n].subtune,currentSongTime:0,currentSongProgress:0,currentSongTotalTime:m(e.songs[n].length),playing:!0,pause:!1});case"PREVIOUS_SONG":var a;return a=0===e.current?e.songs.length-1:e.current-1,Object(g.a)({},e,{active:e.songs[a],current:e.songs[a].id,subtune:e.songs[a].subtune,currentSongTime:0,currentSongProgress:0,currentSongTotalTime:m(e.songs[a].length),playing:!0,pause:!1});case"PLAYLIST_SONG_SELECT":return Object(g.a)({},e,{active:e.songs[t.payload],current:e.songs[t.payload].id,subtune:e.songs[t.payload].subtune,currentSongTime:0,currentSongProgress:0,currentSongTotalTime:m(e.songs[t.payload].length),playing:!0,pause:!1});case"TIMER_START":return Object(g.a)({},e,{currentSongTime:0,currentSongProgress:0});case"TIMER_TICK":return Object(g.a)({},e,{currentSongTime:e.currentSongTime+1,currentSongProgress:e.currentSongTime/e.currentSongTotalTime*100});case"TIMER_STOP":return Object(g.a)({},e,{currentSongTime:0,currentSongProgress:0,pause:!0,playing:!1});case"TIMER_PAUSE":return Object(g.a)({},e,{currentSongTime:e.currentSongTime,currentSongProgress:e.currentSongProgress,pause:!0,playing:!1});case"TIMER_RESUME":return Object(g.a)({},e,{currentSongTime:e.currentSongTime,currentSongProgress:e.currentSongProgress,pause:!1,playing:!0});case"TIMER_RESET":return Object(g.a)({},e,{currentSongTime:0,currentSongProgress:0,pause:!0,playing:!1});case"GET_FILE_INFO":return Object(g.a)({},e,{fileInfo:t.payload,loaded:!0});case"GET_PLAYLIST_ITEM":return Object(g.a)({},e,{soundtrack:e.soundtracks[t.payload-1],active:e.soundtracks[t.payload-1].songs[0],current:e.soundtracks[t.payload-1].songs[0].id,subtune:e.soundtracks[t.payload-1].songs[0].subtune,songs:e.soundtracks[t.payload-1].songs,currentSongTotalTime:m(e.soundtracks[t.payload-1].songs[0].length)});default:return e}},p={fileInfo:{},soundtracks:n(13),soundtrack:{},active:{},current:0,subtune:0,currentSongTime:0,currentSongProgress:0,currentSongTotalTime:1,playing:!1,pause:!0,playlistOpen:!1,songs:[],loaded:!1},h=null,b=Object(a.createContext)(p),y=function(e){var t=e.children,n=Object(a.useReducer)(f,p),l=Object(d.a)(n,2),i=l[0],s=l[1],c=function(){s({type:"TIMER_TICK"})};return r.a.createElement(b.Provider,{value:{fileInfo:i.fileInfo,soundtracks:i.soundtracks,soundtrack:i.soundtrack,active:i.active,current:i.current,subtune:i.subtune,currentSongTime:i.currentSongTime,currentSongProgress:i.currentSongProgress,currentSongTotalTime:i.currentSongTotalTime,playing:i.playing,pause:i.pause,playlistOpen:i.playlistOpen,songs:i.songs,loaded:i.loaded,showPlayList:function(){s({type:"SHOW_PLAYLIST"})},togglePlaying:function(){clearInterval(h),s({type:"TOGGLE_PLAYING"})},playNextSong:function(){s({type:"NEXT_SONG"})},playPrevSong:function(){s({type:"PREVIOUS_SONG"})},playListSongSelect:function(e){s({type:"PLAYLIST_SONG_SELECT",payload:e})},startTimer:function(){s({type:"TIMER_START"}),clearInterval(h),h=setInterval((function(){return c()}),1e3)},stopTimer:function(){clearInterval(h),s({type:"TIMER_STOP"})},pauseTimer:function(){clearInterval(h),s({type:"TIMER_PAUSE"})},resumeTimer:function(){clearInterval(h),h=setInterval((function(){return c()}),1e3),s({type:"TIMER_RESUME"})},resetTimer:function(){clearInterval(h),s({type:"TIMER_RESET"})},getFileInfo:function(e){s({type:"GET_FILE_INFO",payload:e})},getPlaylistItem:function(e){s({type:"GET_PLAYLIST_ITEM",payload:e})}}},t)},E=function(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact;return r.a.createElement(c.a,{path:n,exact:a,children:function(e){var a=e.match;return r.a.createElement(s.b,{className:a?"active":"",to:n},t)}})},v=function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("p",{className:"title"},"React SID Player"),r.a.createElement("nav",{className:"site-navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E,{activeOnlyWhenExact:!0,to:"/",label:"Home"})),r.a.createElement("li",null,r.a.createElement(E,{activeOnlyWhenExact:!0,to:"/about",label:"About"})))))},T=n(16),S=n.n(T),O=n(17),w=n.n(O),j=n(18),I=n.n(j),L=n(19),P=n.n(L),N=function(){return r.a.createElement("ul",{className:"sid-list"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/player/1"},r.a.createElement("img",{src:S.a,alt:"Last Ninja 1 Soundtrack"}))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/player/2"},r.a.createElement("img",{src:w.a,alt:"Last Ninja 2 Soundtrack"}))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/player/3"},r.a.createElement("img",{src:I.a,alt:"Last Ninja 3 Soundtrack"}))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/player/4"},r.a.createElement("img",{src:P.a,alt:"Last Ninja Remix Soundtrack"}))))},R=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"About This Demo"),r.a.createElement("p",null,"SID (short for Sound Interface Device) is the name of the sound chip used in the VC 10, C64 and C128.  The chip's distinctive sound is easily recognized and was clearly ahead the competition. The chip combines analogue and digital circuitry, that cannot be emulated with 100% fidelity even today. Emulated sounds do come very close to the original and a layperson is not likely to notice the difference. The SID sound is well known among retro gamers."),r.a.createElement("p",null,"I grew up with the C64 during the 80's, and played a lot of games on it. So I figured, it would be a way for me to get into and learn some React and Redux while creating this player. The design of the player was designed by: Drew Vosburg, and can be found here ( ",r.a.createElement("a",{href:"http://codepen.io/drewvosburg/pen/YyvwJY"},"http://codepen.io/drewvosburg/pen/YyvwJY")," ). The jsSID ( JavaScript SID Emulator ) used was created by: ",r.a.createElement("a",{href:"http://hermit.sidrip.com"},"Mihaly Horvath"),"."),r.a.createElement("p",null,'The music is from one of my favorite C64 game series, "The Last Ninja", created by: ',r.a.createElement("a",{href:"http://www.system3.com"},"System 3")," back in the late 1980 - 1990s."),r.a.createElement("p",null,"The lovely chiptunes were composed by:"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Ben_Daglish"},"Ben Daglish")," and ",r.a.createElement("a",{href:"https://c64audio.com/blogs/news/anthony-lees-an-obituary"},"Anthony Lees")," (Last Ninja 1). ",r.a.createElement("a",{href:"https://www.facebook.com/MattGrayC64"},"Matt Gray")," (Last Ninja 2). ",r.a.createElement("a",{href:"http://www.reyn.net/"},"Reyn Ouwehand"),"  (Last Ninja 3 and Ninja Remix)."))},_=n(20),k=n.n(_),x=(n(35),function(){var e=Object(a.useContext)(b),t=e.playListSongSelect,n=function(e,n){if(e.length>0)return e.map((function(e,a){return r.a.createElement("li",{key:e.id,className:n===e.id?"playing":null,onClick:function(){return t(e.id)},"data-id":e.subtune}," ",e.title," ",r.a.createElement("span",{className:"time"},e.length))}))}(e.songs,e.current);return r.a.createElement("ol",{id:"playlist"},n)});function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=r.a.createElement("path",{fill:"currentColor",d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}),G=function(e){var t=e.svgRef,n=e.title,a=M(e,["svgRef","title"]);return r.a.createElement("svg",C({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"play",className:"svg-inline--fa fa-play fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},a),n?r.a.createElement("title",null,n):null,D)},A=r.a.forwardRef((function(e,t){return r.a.createElement(G,C({svgRef:t},e))}));n.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var W=r.a.createElement("path",{fill:"currentColor",d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}),Y=function(e){var t=e.svgRef,n=e.title,a=V(e,["svgRef","title"]);return r.a.createElement("svg",B({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pause",className:"svg-inline--fa fa-pause fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},a),n?r.a.createElement("title",null,n):null,W)},F=r.a.forwardRef((function(e,t){return r.a.createElement(Y,B({svgRef:t},e))}));n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var J=r.a.createElement("path",{fill:"currentColor",d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"}),U=function(e){var t=e.svgRef,n=e.title,a=H(e,["svgRef","title"]);return r.a.createElement("svg",z({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"step-forward",className:"svg-inline--fa fa-step-forward fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},a),n?r.a.createElement("title",null,n):null,J)},q=r.a.forwardRef((function(e,t){return r.a.createElement(U,z({svgRef:t},e))}));n.p;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=r.a.createElement("path",{fill:"currentColor",d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"}),Z=function(e){var t=e.svgRef,n=e.title,a=X(e,["svgRef","title"]);return r.a.createElement("svg",K({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"step-backward",className:"svg-inline--fa fa-step-backward fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},a),n?r.a.createElement("title",null,n):null,Q)},$=r.a.forwardRef((function(e,t){return r.a.createElement(Z,K({svgRef:t},e))}));n.p;function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ne=r.a.createElement("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}),ae=function(e){var t=e.svgRef,n=e.title,a=te(e,["svgRef","title"]);return r.a.createElement("svg",ee({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bars",className:"svg-inline--fa fa-bars fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},a),n?r.a.createElement("title",null,n):null,ne)},re=r.a.forwardRef((function(e,t){return r.a.createElement(ae,ee({svgRef:t},e))})),le=(n.p,n(36),function(e){var t=Object(a.useContext)(b),n=t.togglePlaying,l=t.showPlayList,i=t.playlistOpen,s=t.playNextSong,c=t.playPrevSong,o=t.playing,u=t.soundtrack,d=t.subtune,g=t.getPlaylistItem,m=t.getFileInfo,f=t.fileInfo,p=t.active,h=t.currentSongProgress,y=t.currentSongTime,E=t.currentSongTotalTime,v=t.startTimer,T=t.pauseTimer,S=t.resumeTimer,O=t.resetTimer,w=t.current,j=t.pause,I=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current},L=I(w),P=I(o),N=I(j);Object(a.useEffect)((function(){window.SIDplayer=new window.jsSID(16384,5e-4),g(e.match.params.id),setTimeout((function(){var e={SidTitle:window.SIDplayer.gettitle().replace(/\0/g,""),SidAuthor:window.SIDplayer.getauthor().replace(/\0/g,""),SidInfomation:window.SIDplayer.getinfo().replace(/\0/g,"")};m(e)}),100)}),[]),Object(a.useEffect)((function(){window.SIDplayer.loadinit("/react-sid-player"+u.file,0)}),[u.file]),Object(a.useEffect)((function(){w===L&&o!==P&&!0===P&&(window.SIDplayer.pause(),T()),w===L&&!0===o&&!0===N&&(window.SIDplayer.playcont(),S()),w!==L&&0===y&&!1!==o&&(v(),window.SIDplayer.start(d))}),[o,w,j,d,v,S,y,T,L,P,N]),Object(a.useEffect)((function(){E===y&&s()}),[E,y,s]),Object(a.useEffect)((function(){return function(){window.SIDplayer.pause(),O()}}),[]);var R=k()({show:i},{hidden:!i});return r.a.createElement("div",{className:"player-container"},r.a.createElement("div",{id:"player",className:R},r.a.createElement("div",{id:"main",style:{backgroundImage:"url(".concat("/react-sid-player"+u.poster,")")}},r.a.createElement("div",null,r.a.createElement("div",{className:"playback_controls"},r.a.createElement("h2",{id:"title"},u.album," - ",p.title),r.a.createElement("h3",{id:"artist"},f.SidAuthor," - ",f.SidInfomation),r.a.createElement("div",{className:"time-holder"},r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"fill",style:{width:h+"%"}}))),r.a.createElement("div",null,r.a.createElement("i",{onClick:l,className:"fa fa-bars menu"},r.a.createElement(re,null)),r.a.createElement("div",{className:"buttons"},r.a.createElement("i",{onClick:c,id:"back"},r.a.createElement($,null)),r.a.createElement("i",{onClick:n,id:"playpause"},"  ",o?r.a.createElement(F,null):r.a.createElement(A,null)),r.a.createElement("i",{onClick:s,id:"next"},r.a.createElement(q,null))))),r.a.createElement("audio",{id:"playbar",controls:!0}))),r.a.createElement(x,null)))}),ie=function(){var e=new Date;return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",{className:"copyright"}," \xa9 ",e.getFullYear(),"  Niklas Dahlqvist"),r.a.createElement("p",{className:"tools"}," Built with React"))},se=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("p",null,"404 ",r.a.createElement("small",null,"Not Found :("))))};n(37);u.a.load({google:{families:["Lato:300","sans-serif"]}});var ce=function(){return r.a.createElement(y,null,r.a.createElement(s.a,{basename:"/react-sid-player"},r.a.createElement(v,null),r.a.createElement("main",{className:"site-content"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:N}),r.a.createElement(c.a,{exact:!0,path:"/player/:id",component:le}),r.a.createElement(c.a,{exact:!0,path:"/about",component:R}),r.a.createElement(c.a,{component:se}))),r.a.createElement(ie,null)))};n(38);i.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.31d4cc0a.chunk.js.map