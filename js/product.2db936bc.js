(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{b0c0:function(t,e,r){var n=r("83ab"),a=r("5e77").EXISTS,i=r("e330"),o=r("9bf2").f,s=Function.prototype,c=i(s.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(u.exec),p="name";n&&!a&&o(s,p,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},d2f1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"product"}},[r("b-overlay",{attrs:{show:!t.sell},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("h1",[t._v("商品已下架")])]},proxy:!0}])},[r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("h1",[t._v(t._s(t.name))])]),r("b-col",{attrs:{cols:"6"}},[r("h4",{staticClass:"text-right"},[t._v("$"+t._s(t.price))]),r("b-form-input",{attrs:{type:"number",state:t.quantityState,min:"0"},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),r("b-btn",{attrs:{variant:"primary"},on:{click:t.addCart}},[t._v("加入購物車")])],1),r("b-col",{attrs:{cols:"12"}},[r("img",{staticClass:"w-100",attrs:{src:t.image}}),r("p",{staticStyle:{"white-space":"pre"}},[t._v(t._s(t.description))])])],1)],1)],1)},a=[],i=r("1da1"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),{data:function(){return{name:"",price:0,description:"",image:"",sell:!1,category:"",quantity:0}},methods:{addCart:function(){this.$store.dispatch("user/addCart",{product:this.$route.params.id,quantity:this.quantity})}},computed:{quantityState:function(){return 0===this.quantity?null:this.quantity>0}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products/"+t.$route.params.id);case 3:r=e.sent,n=r.data,t.name=n.result.name,t.price=n.result.price,t.description=n.result.description,t.image=n.result.image,t.sell=n.result.sell,t.category=n.result.category,document.title="".concat(t.name," | 購物網"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),t.$router.push("/");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}),s=o,c=r("2877"),u=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=u.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("e330"),s=r("1a2d"),c=r("1626"),u=r("3a9b"),l=r("577e"),p=r("9bf2").f,d=r("e893"),f=i.Symbol,b=f&&f.prototype;if(a&&c(f)&&(!("description"in b)||void 0!==f().description)){var m={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(b,this)?new f(t):void 0===t?f():f(t);return""===t&&(m[e]=!0),e};d(v,f),v.prototype=b,b.constructor=v;var y="Symbol(test)"==String(f("test")),h=o(b.toString),g=o(b.valueOf),w=/^Symbol\((.*)\)[^)]+$/,S=o("".replace),_=o("".slice);p(b,"description",{configurable:!0,get:function(){var t=g(this),e=h(t);if(s(m,t))return"";var r=y?_(e,7,-1):S(e,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}}}]);
//# sourceMappingURL=product.2db936bc.js.map