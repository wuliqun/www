webpackJsonp([6],{"6EFD":function(t,s){},"7s2F":function(t,s){},D8gc:function(t,s){},DWGZ:function(t,s){},hQVY:function(t,s){},uhc7:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{}},watch:{currentIndex:function(t){console.log(t)}},props:["toplist","currentIndex"],methods:{setCurrent:function(t){this.$emit("changeIndex",t)}}},e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"toplist-cate"}},[i("div",{staticClass:"cate"},[t._m(0),t._v(" "),i("ul",{staticClass:"list"},t._l(4,function(s){return i("li",{key:s,on:{click:function(i){return t.setCurrent(s-1)}}},[i("a",{staticClass:"list-item clearfix",class:{active:t.currentIndex==s-1}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.toplist[s-1].coverImgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("p",{staticClass:"name f-thide"},[t._v(t._s(t.toplist[s-1].name))]),t._v(" "),i("p",{staticClass:"uf"},[t._v(t._s(t.toplist[s-1].updateFrequency))])])])])}),0)]),t._v(" "),i("div",{staticClass:"cate"},[t._m(1),t._v(" "),i("ul",{staticClass:"list"},t._l(t.toplist.length-4,function(s){return i("li",{key:s,on:{click:function(i){return t.setCurrent(s+3)}}},[i("a",{staticClass:"list-item clearfix",class:{active:t.currentIndex==s+3}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.toplist[s+3].coverImgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("p",{staticClass:"name f-thide"},[t._v(t._s(t.toplist[s+3].name))]),t._v(" "),i("p",{staticClass:"uf"},[t._v(t._s(t.toplist[s+3].updateFrequency))])])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("h3",[this._v("云音乐特色榜")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("h3",[this._v("全球媒体榜")])])}]};var l=i("C7Lr")(a,e,!1,function(t){i("hQVY")},"data-v-7c653c3a",null).exports,n=i("lC5x"),c=i.n(n),r=i("J0Oq"),o=i.n(r),d=i("4YfN"),u=i.n(d),p=i("2bvH"),v={data:function(){return{}},computed:u()({},Object(p.c)("collectionList",["isPlaylistCollected"])),methods:u()({},Object(p.d)("playlist",["insertIntoPlaylist","pushIntoPlaylist"]),Object(p.d)("collectionList",["addCollect"]),{playAll:function(){this.insertIntoPlaylist(this.playlist.tracks),this.$message.playerMessage("已开始播放")},addToList:function(){this.pushIntoPlaylist(this.playlist.tracks),this.$message.playerMessage("已添加至播放列表")},collect:function(){this.isPlaylistCollected(this.playlist.id)?this.$message.warning("您已收藏过该歌单"):(this.addCollect(this.playlist),this.$message.success("收藏成功"))}}),filters:{time2str:function(t){var s=new Date(t),i=s.getFullYear(),a=s.getMonth()+1,e=s.getDate(),l=i+"-";return l+=a>9?a:"0"+a,l+="-",l+=e>9?e:"0"+e}},props:["playlist"]},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.playlist?i("div",{attrs:{id:"list-header"}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[i("h3",[t._v(t._s(t.playlist.name))])]),t._v(" "),i("div",{staticClass:"update-info"},[i("i",{staticClass:"icon time"}),t._v(" "),i("span",{staticClass:"ut"},[t._v("最近更新: "+t._s(t._f("time2str")(t.playlist.updateTime)))]),t._v(" "),i("span",{staticClass:"uf"},[t._v("("+t._s(t.playlist.updateFrequency)+")")])]),t._v(" "),i("div",{staticClass:"operate clearfix"},[i("a",{staticClass:"play",on:{click:t.playAll}},[t._v("播放")]),t._v(" "),i("a",{staticClass:"add",on:{click:t.addToList}}),t._v(" "),i("a",{staticClass:"collect icon-1",on:{click:t.collect}},[t._v("("+t._s(t.playlist.subscribedCount||0)+")")]),t._v(" "),i("a",{staticClass:"share icon-1"},[t._v("("+t._s(t.playlist.shareCount||0)+")")]),t._v(" "),i("a",{staticClass:"download icon-1"},[t._v("下载")]),t._v(" "),i("a",{staticClass:"comment icon-1"},[t._v("("+t._s(t.playlist.commentCount||0)+")")])])])]):t._e()},staticRenderFns:[]};var h=i("C7Lr")(v,_,!1,function(t){i("DWGZ")},"data-v-345d4ccc",null).exports,f={data:function(){return{}},methods:u()({},Object(p.d)("userDiyPlaylist",["setSongWaitToAdd","showAddDiyListPanel"]),Object(p.d)("playlist",["insertIntoPlaylist","pushIntoPlaylist"]),{addSong:function(t){this.setSongWaitToAdd(t),this.showAddDiyListPanel()},play:function(t){this.insertIntoPlaylist(this.playlist.tracks[t]),this.$message.playerMessage("已开始播放")},addToList:function(t){this.pushIntoPlaylist(this.playlist.tracks[t]),this.$message.playerMessage("已添加至播放列表")}}),computed:u()({},Object(p.e)("playlist",["playingId"])),filters:{time2str:function(t){var s=(t=Math.round(t/1e3))%60,i=(t=parseInt(t/60))%60,a=parseInt(t/60),e="";return a>0&&(e+=a>9?a:"0"+a,e+=":"),e+=i>9?i:"0"+i,e+=":",e+=s>9?s:"0"+s},joinName:function(t){return t.map(function(t){return t.name}).join("/")}},props:["playlist"]},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.playlist?i("div",{attrs:{id:"toplist-list"}},[i("div",{staticClass:"header clearfix"},[i("h2",[t._v("歌曲列表")]),t._v(" "),i("p",{staticClass:"track-count"},[t._v(t._s(t.playlist.tracks.length)+"首歌")]),t._v(" "),i("p",{staticClass:"play-count"},[t._v("\n\t\t\t播放："),i("em",[t._v(t._s(t.playlist.playCount))]),t._v("次\n\t\t")])]),t._v(" "),i("ul",{staticClass:"list"},[t._m(0),t._v(" "),t._l(t.playlist.tracks,function(s,a){return i("li",{key:s.id,staticClass:"list-item clearfix",class:{top3:a<3}},[i("div",{staticClass:"col col-1"},[i("span",{staticClass:"index"},[t._v(t._s(a+1))]),t._v(" "),i("span",{staticClass:"hot-description"})]),t._v(" "),i("div",{staticClass:"col col-2"},[a<3?i("div",{staticClass:"img"},[i("img",{attrs:{src:s.al.picUrl,alt:""}})]):t._e(),t._v(" "),i("a",{staticClass:"icon play",class:{playing:s.id==t.playingId},attrs:{title:"播放"},on:{click:function(s){return t.play(a)}}}),t._v(" "),i("router-link",{staticClass:"name f-thide",attrs:{to:{name:"song",query:{id:s.id}}}},[t._v(t._s(s.name))]),t._v(" "),s.mv?i("router-link",{staticClass:"mv-icon",attrs:{to:{name:"mv",query:{id:s.mv}},title:"播放MV"}}):t._e()],1),t._v(" "),i("div",{staticClass:"col col-3"},[i("span",{staticClass:"duration"},[t._v(t._s(t._f("time2str")(s.dt)))]),t._v(" "),i("div",{staticClass:"operate"},[i("a",{staticClass:"icon add",attrs:{title:"添加到播放列表"},on:{click:function(s){return t.addToList(a)}}}),t._v(" "),i("a",{staticClass:"icon collect",attrs:{title:"收藏"},on:{click:function(i){return t.addSong(s)}}}),t._v(" "),i("a",{staticClass:"icon share",attrs:{title:"分享"}}),t._v(" "),i("a",{staticClass:"icon download",attrs:{title:"下载"}})])]),t._v(" "),i("div",{staticClass:"col col-4 f-thide",attrs:{title:t._f("joinName")(s.ar)}},[t._l(s.ar,function(s){return[i("router-link",{key:s.id,attrs:{to:{name:"artist",query:{id:s.id}}}},[t._v(t._s(s.name)+"\n\t\t\t\t\t")]),i("span",{key:"sep"+s.id,staticClass:"sep"},[t._v("/")])]})],2)])})],2)]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"list-item list-header clearfix"},[s("div",{staticClass:"col col-1"}),this._v(" "),s("div",{staticClass:"col col-2"},[s("span",[this._v("标题")])]),this._v(" "),s("div",{staticClass:"col col-3"},[s("span",[this._v("时长")])]),this._v(" "),s("div",{staticClass:"col col-4"},[s("span",[this._v("歌手")])])])}]};var C=i("C7Lr")(f,m,!1,function(t){i("6EFD")},"data-v-16b7473b",null).exports,y=i("NWGz"),g=i("i84Q"),x={data:function(){return{toplistData:null}},props:{id:Number},watch:{id:function(t){this.initData()}},components:{ListHeader:h,SongList:C,Comment:y.a},computed:{},methods:{initData:function(){var t=this;return o()(c.a.mark(function s(){return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(g.p)(t.id).then(function(s){t.toplistData=s.data.playlist});case 2:case"end":return s.stop()}},s,t)}))()}},created:function(){this.initData()}},I={render:function(){var t=this.$createElement,s=this._self._c||t;return this.toplistData?s("div",{attrs:{id:"toplist-detail"}},[s("list-header",{attrs:{playlist:this.toplistData}}),this._v(" "),s("song-list",{attrs:{playlist:this.toplistData}}),this._v(" "),s("comment",{attrs:{type:"playlist",id:this.toplistData.id}})],1):this._e()},staticRenderFns:[]};var k={data:function(){return{toplist:null,currentIndex:0}},components:{ToplistList:l,ToplistDetail:i("C7Lr")(x,I,!1,function(t){i("7s2F")},"data-v-083cb8c0",null).exports},computed:{currentId:function(){if(this.toplist)return this.toplist[this.currentIndex].id}},methods:{initData:function(){var t=this,s=Number(this.$route.query.id);this.toplist||Object(g.x)().then(function(i){if(t.toplist=i.data.list,s){console.log(t);for(var a=0;a<t.toplist.length;a++)if(s===t.toplist[a].id){t.currentIndex=a;break}}})},changeIndex:function(t){this.currentIndex=t,this.$router.push({name:"discoverToplist",query:{id:this.toplist[t].id}})}},created:function(){this.initData()}},D={render:function(){var t=this.$createElement,s=this._self._c||t;return this.toplist?s("div",{attrs:{id:"toplist"}},[s("div",{staticClass:"wrapper clearfix"},[s("div",{staticClass:"cates"},[s("toplist-list",{attrs:{toplist:this.toplist,"current-index":this.currentIndex},on:{changeIndex:this.changeIndex}})],1),this._v(" "),s("div",{staticClass:"detail"},[s("toplist-detail",{attrs:{id:this.currentId}})],1)])]):this._e()},staticRenderFns:[]};var b=i("C7Lr")(k,D,!1,function(t){i("D8gc")},"data-v-7d33c514",null).exports;s.default=b}});
//# sourceMappingURL=6.45a67c7fcabccbd3e29a.js.map