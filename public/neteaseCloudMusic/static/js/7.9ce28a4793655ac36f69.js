webpackJsonp([7],{"3NOW":function(t,n){},QkG1:function(t,n){},iNAB:function(t,n,s){"use strict";var a={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"txt-panel"},[t.txt.length<101?s("pre",[s("span",[t._v(t._s(t.txt.trim()))])]):t._e(),t._v(" "),t.txt.length>=101&&!t.spread?s("pre",[s("span",[t._v(t._s(t.txt.substr(0,101).trim()))]),s("span",{staticClass:"elli"},[t._v("...")]),s("a",{staticClass:"spread",on:{click:t.toggleSpread}},[t._v("展开"),s("i",{staticClass:"spread-icon"})])]):t._e(),t._v(" "),t.txt.length>=101&&t.spread?s("pre",[s("span",[t._v(t._s(t.txt.trim()))]),s("a",{staticClass:"spread",on:{click:t.toggleSpread}},[t._v("收起"),s("i",{staticClass:"fold-icon"})])]):t._e()])},staticRenderFns:[]};var i=s("C7Lr")({data:function(){return{spread:!1}},props:["txt"],methods:{toggleSpread:function(){this.spread=!this.spread}}},a,!1,function(t){s("3NOW")},"data-v-36ca7a74",null);n.a=i.exports},jCFP:function(t,n){},tJJS:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=s("i84Q"),i=s("4YfN"),e=s.n(i),r=s("lrMo"),o=s("9e8W"),l=s("iNAB"),d=s("2bvH"),c=s("vNxb"),p=s.n(c),u={data:function(){return{lyric:p.a.data}},props:{song:Object},methods:e()({},Object(d.d)("playlist",["insertIntoPlaylist","pushIntoPlaylist"]),Object(d.d)("userDiyPlaylist",["setSongWaitToAdd","showAddDiyListPanel"]),{play:function(){this.insertIntoPlaylist(this.song),this.$message.playerMessage("已开始播放")},addToList:function(){this.pushIntoPlaylist(this.song),this.$message.playerMessage("已添加到播放列表")},showAddPanel:function(){this.setSongWaitToAdd(this.song),this.showAddDiyListPanel()}}),components:{CollectButton:r.a,CommentButton:r.b,PlayAddButton:r.d,DownloadButton:r.c,ShareButton:r.e,DetailTag:o.a,TxtPanel:l.a}},v={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"song-head"},[s("div",{staticClass:"title-wrapper clearfix"},[s("div",{staticClass:"tag-wrapper"},[s("detail-tag",{attrs:{type:"song"}})],1),t._v(" "),s("h2",{staticClass:"title"},[t._v(t._s(t.song.name))])]),t._v(" "),s("div",{staticClass:"info-line"},[s("span",[t._v("歌手:")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:{name:"artist",query:{id:t.song.ar[0].id}}}},[t._v("\n            "+t._s(t.song.ar[0].name)+"\n        ")])],1),t._v(" "),s("div",{staticClass:"info-line"},[s("span",[t._v("所属专辑:")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:{name:"album",query:{id:t.song.al.id}}}},[t._v("\n            "+t._s(t.song.al.name)+"\n        ")])],1),t._v(" "),s("div",{staticClass:"operate clearfix"},[s("div",{staticClass:"btn-wrapper"},[s("play-add-button",{on:{play:t.play,add:t.addToList}})],1),t._v(" "),s("div",{staticClass:"btn-wrapper"},[s("collect-button",{on:{click:t.showAddPanel}},[t._v("\n                收藏\n            ")])],1),t._v(" "),s("div",{staticClass:"btn-wrapper"},[s("share-button",[t._v("\n                分享\n            ")])],1),t._v(" "),s("div",{staticClass:"btn-wrapper"},[s("download-button",[t._v("\n                下载\n            ")])],1),t._v(" "),s("div",{staticClass:"btn-wrapper"},[s("comment-button",[t._v("\n                ("+t._s(t.song.pop)+")\n            ")])],1)]),t._v(" "),s("div",{staticClass:"lyric"},[s("txt-panel",{attrs:{txt:t.lyric}})],1)])},staticRenderFns:[]};var _=s("C7Lr")(u,v,!1,function(t){s("QkG1")},"data-v-40e7e0dc",null).exports,g=s("NWGz"),h=s("herB"),f={data:function(){return{id:null,song:null}},methods:{initData:function(){var t=this;Object(a.v)({id:this.id}).then(function(n){t.song=n.data.songs[0]})}},watch:{$route:function(t){"song"===t.name&&t.query.id!==this.id&&(this.id=t.query.id,this.initData())}},created:function(){this.id=this.$route.query.id,this.id?this.initData():this.$router.redirectTo({name:"index"})},components:{SongHeader:_,Comment:g.a,AppDownload:h.a}},C={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"song-detail detail-content"},[s("div",{staticClass:"detail-wrapper clearfix"},[t.song?s("div",{staticClass:"detail-left"},[s("div",{staticClass:"head clearfix"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.song.al.picUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"song-header-wrapper"},[s("song-header",{attrs:{song:t.song}})],1)]),t._v(" "),t.song?s("div",{staticClass:"comment-wrapper"},[s("comment",{attrs:{type:"music",id:t.song.id}})],1):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"detail-right"},[s("div",{staticClass:"app-wrapper"},[s("app-download")],1)])])])},staticRenderFns:[]};var m=s("C7Lr")(f,C,!1,function(t){s("jCFP")},"data-v-51f54b6f",null).exports;n.default=m},vNxb:function(t,n){t.exports={data:"作曲 : 刘纪\n\n作词 : 刘纪\n\n编曲：马佳庆\n\n\n你转身以后 我的双眸\n强撑着走了很久\n不会垂涎你的双颊\n不再泪流不休\n无论明天阴雨或是晴空依旧\n我不会再牵你的手\n就像被抛下的时间不会再\n喋喋不休\n其实我想说的还有很多\n但是犹豫的人从来不是我\n也许从今过后我会想你更多\n可能云朵会莫名的伤心难过\n所以悲伤就汇成了江河\n可是悲伤却从不肯放过我\n可能今夜过后你的世界就没有我了\n所以请你答应我要好好的\n让我抽完这支香烟\n说一句 亲爱的\n愿你从今往后就不再回头\n心之所向着向往自由\n不会为世俗牵绊\n不会为爱情变得丑陋\n可能我不是你 你的那个人\n你也不是我命里的缤纷\n就像多彩的画\n只用黑白作为底蕴\n其实我想说的还有很多\n但是犹豫的人从来不是我\n也许从今过后我会想你更多\n可能云朵会莫名的伤心难过\n所以悲伤就汇成了江河\n可是悲伤却从不肯放过我\n可能今夜过后你的世界就没有我了\n所以请你答应我要好好的\n让我抽完这支香烟\n说一句 走吧\n让我抽完这支香烟\n说一句 走吧\n\n制作人：李艺皓\n吉他：王宝新\n录音：前男友\n混音：宋铮\n录音室：Solo Music One\n混音室：1000 Music Studio\n制作团队：1000 Music\nOP:乐巢文化（Solo Music工作室）"}}});
//# sourceMappingURL=7.9ce28a4793655ac36f69.js.map