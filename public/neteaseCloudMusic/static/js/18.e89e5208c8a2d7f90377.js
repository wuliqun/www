webpackJsonp([18],{"/Ofe":function(t,i){},O7T5:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("bJ/d");i.default=s.a},"bJ/d":function(t,i,a){"use strict";var s=a("i84Q"),r={data:function(){return{catId:"",routerName:"",initial:"",artists:null}},watch:{$route:function(t){"discoverSingerCategory"===t.name&&this.initData()}},methods:{initData:function(){var t=this;this.catId=this.$route.query.id,this.routerName=this.$route.name,!1!==this.routerName||this.catId||(this.catId=1001);var i=this.$route.query.initial;this.initial=i,i=0!=i&&-1!=i&&i?String.fromCharCode(i):void 0,this.catId?Object(s.u)({cat:this.catId,initial:i}).then(function(i){t.artists=i.data.artists}):Object(s.w)().then(function(i){t.artists=i.data.artists})}},created:function(){this.initData()},computed:{categoryName:function(){if(this.catId){var t=parseInt(this.catId/1e3),i=this.catId%1e3;return[,"华语","欧美",,"其他",,"日本","韩国"][t]+["男歌手","女歌手","组合/乐队"][i-1]}return"热门歌手"}}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"artist-list"}},[a("div",{staticClass:"section-header clearfix"},[a("h2",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(t.categoryName)+"\n\t\t")])]),t._v(" "),t.catId?a("ul",{staticClass:"initial-selector clearfix"},[a("li",{staticClass:"select-item"},[a("router-link",{staticClass:"cn",class:{active:-1==t.initial||void 0===t.initial},attrs:{to:{name:t.routerName,query:{id:t.catId,initial:-1}}}},[t._v("热门")])],1),t._v(" "),t._l(26,function(i){return a("li",{key:String.fromCharCode(i+64),staticClass:"select-item"},[a("router-link",{class:{active:t.initial==i+64},attrs:{to:{name:t.routerName,query:{id:t.catId,initial:i+64}}}},[t._v(t._s(String.fromCharCode(i+64)))])],1)}),t._v(" "),a("li",{staticClass:"select-item"},[a("router-link",{staticClass:"cn",class:{active:"0"===t.initial},attrs:{to:{name:t.routerName,query:{id:t.catId,initial:0}}}},[t._v("其他")])],1)],2):t._e(),t._v(" "),t.artists?a("ul",{staticClass:"list clearfix"},[t._l(5,function(i){return a("li",{key:t.artists[i-1].id,staticClass:"item"},[a("router-link",{staticClass:"img",attrs:{to:{name:"artist",query:{id:t.artists[i-1].id}}}},[a("img",{attrs:{src:t.artists[i-1].picUrl,alt:""}})]),t._v(" "),a("p",{staticClass:"about clearfix"},[a("router-link",{staticClass:"ar f-thide",attrs:{to:{name:"artist",query:{id:t.artists[i-1].id}},title:t.artists[i-1].name+"的音乐"}},[t._v(t._s(t.artists[i-1].name))]),t._v(" "),t.artists[i-1].accountId?a("router-link",{staticClass:"user",attrs:{to:{name:"userHome",query:{id:t.artists[i-1].accountId}},title:t.artists[i-1].name+"的个人主页"}}):t._e()],1)],1)}),t._v(" "),t._l(5,function(i){return a("li",{key:t.artists[i+5-1].id,staticClass:"item line"},[a("router-link",{staticClass:"img",attrs:{to:{name:"artist",query:{id:t.artists[i+5-1].id}}}},[a("img",{attrs:{src:t.artists[i+5-1].picUrl,alt:""}})]),t._v(" "),a("p",{staticClass:"about clearfix"},[a("router-link",{staticClass:"ar f-thide",attrs:{to:{name:"artist",query:{id:t.artists[i+5-1].id}},title:t.artists[i+5-1].name+"的音乐"}},[t._v(t._s(t.artists[i+5-1].name))]),t._v(" "),t.artists[i+5-1].accountId?a("router-link",{staticClass:"user",attrs:{to:{name:"userHome",query:{id:t.artists[i+5-1].accountId}},title:t.artists[i+5-1].name+"的个人主页"}}):t._e()],1)],1)}),t._v(" "),t._l(t.artists.length-10,function(i){return a("li",{key:t.artists[i+10-1].id,staticClass:"sml"},[a("p",{staticClass:"about clearfix"},[a("router-link",{staticClass:"ar f-thide",attrs:{to:{name:"artist",query:{id:t.artists[i+10-1].id}},title:t.artists[i+10-1].name+"的音乐"}},[t._v(t._s(t.artists[i+10-1].name))]),t._v(" "),t.artists[i+10-1].accountId?a("router-link",{staticClass:"user",attrs:{to:{name:"userHome",query:{id:t.artists[i+10-1].accountId}},title:t.artists[i+10-1].name+"的个人主页"}}):t._e()],1)])})],2):t._e()])},staticRenderFns:[]};var n=a("C7Lr")(r,e,!1,function(t){a("/Ofe")},"data-v-6634916f",null);i.a=n.exports}});
//# sourceMappingURL=18.e89e5208c8a2d7f90377.js.map