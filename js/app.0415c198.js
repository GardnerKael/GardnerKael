(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1224:function(t,e,n){"use strict";n("900f")},3926:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/ordinary.png"}})])]),t._m(0)],1),n("div",{staticClass:"content"},[n("router-view")],1),n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v("Museum of Ordinary Objects")])])}],s=(n("034f"),n("2877")),o={},c=Object(s["a"])(o,r,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"image-gallery"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"image"},[n("h2",[t._v(t._s(e.title))]),n("img",{attrs:{src:e.path}})])})),0)])},p=[],m=n("1da1"),f=(n("96cf"),n("bc3a")),v=n.n(f),h={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},g=h,_=(n("a9bb"),Object(s["a"])(g,d,p,!1,null,"19b2518f",null)),b=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("h1",[t._v("The Admin Page!")]),t._m(0),n("div",{staticClass:"add"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("p"),n("input",{attrs:{type:"file",name:"photo"},on:{change:t.fileChanged}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{cols:"50",rows:"4",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("button",{staticStyle:{display:"block"},on:{click:t.upload}},[t._v("Upload")])]),t.addItem?n("div",{staticClass:"upload"},[n("h2",[t._v(t._s(t.addItem.title))]),n("img",{attrs:{src:t.addItem.path}}),n("p",[t._v(t._s(t.addItem.text))])]):t._e()]),t._m(1),n("div",{staticClass:"edit"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?n("div",{staticClass:"suggestions"},t._l(t.suggestions,(function(e){return n("div",{key:e.id,staticClass:"suggestion",on:{click:function(n){return t.selectItem(e)}}},[t._v(t._s(e.title)+" ")])})),0):t._e()]),t.findItem?n("div",{staticClass:"upload"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findItem.title,expression:"findItem.title"}],domProps:{value:t.findItem.title},on:{input:function(e){e.target.composing||t.$set(t.findItem,"title",e.target.value)}}}),n("p"),n("img",{attrs:{src:t.findItem.path}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.findItem.text,expression:"findItem.text"}],attrs:{cols:"50",rows:"4",placeholder:"Description"},domProps:{value:t.findItem.text},on:{input:function(e){e.target.composing||t.$set(t.findItem,"text",e.target.value)}}})]):t._e(),t.findItem?n("div",{staticClass:"actions"},[n("button",{on:{click:function(e){return t.deleteItem(t.findItem)}}},[t._v("Delete")]),n("button",{on:{click:function(e){return t.editItem(t.findItem)}}},[t._v("Edit")])]):t._e()])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[t._v("1")]),n("h2",[t._v("Add an Item")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[t._v("2")]),n("h2",[t._v("Edit/Delete an Item")])])}],x=(n("4de4"),n("2ca0"),n("b0c0"),n("a4d3"),n("e01a"),{name:"Admin",data:function(){return{title:"",file:null,description:"",addItem:null,items:[],findTitle:"",findItem:null}},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))}},created:function(){this.getItems()},methods:{fileChanged:function(t){this.file=t.target.files[0]},upload:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("photo",t.file,t.file.name),e.next=4,v.a.post("/api/photos",n);case 4:return i=e.sent,e.next=7,v.a.post("/api/items",{title:t.title,path:i.data.path,text:t.description});case 7:r=e.sent,t.addItem=r.data,t.title="",t.description="",t.file=null;case 12:case"end":return e.stop()}}),e)})))()},getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/items");case 2:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))()},selectItem:function(t){this.findTitle="",this.findItem=t},deleteItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,v.a.delete("/api/items/"+t._id);case 2:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 5:case"end":return n.stop()}}),n)})))()},editItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.put("/api/items/"+t._id,{title:e.findItem.title});case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}}),y=x,C=(n("1224"),Object(s["a"])(y,w,I,!1,null,"38132020",null)),O=C.exports;i["a"].use(l["a"]);var j=[{path:"/",name:"home",component:b},{path:"/admin",name:"admin",component:O}],k=new l["a"]({mode:"history",base:"/",routes:j}),P=k;i["a"].config.productionTip=!1,new i["a"]({router:P,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},"900f":function(t,e,n){},a9bb:function(t,e,n){"use strict";n("3926")}});
//# sourceMappingURL=app.0415c198.js.map