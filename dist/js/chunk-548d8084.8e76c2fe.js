(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-548d8084"],{"4cfc":function(t,n,c){"use strict";c.r(n);var e=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",[c("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),c("section",{staticClass:"enter-banner _c_banner-product"},[c("h2",[t._v("Hello 單一產品頁")]),c("h3",[t._v(t._s(t.product.title))]),c("p",[t._v(t._s(t.product.category))]),c("p",[t._v(t._s(t.product.content))]),c("p",[t._v(t._s(t.product.description))])])],1)},o=[],r=(c("99af"),{data:function(){return{product:{},isLoading:!1,fullPage:!0}},created:function(){var t=this;this.isLoading=!0;var n=this.$route.params.id,c="https://course-ec-api.hexschool.io/api/".concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/ec/product/").concat(n);this.$http.get(c).then((function(n){t.product=n.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}}),a=r,i=c("2877"),d=Object(i["a"])(a,e,o,!1,null,null,null);n["default"]=d.exports},8418:function(t,n,c){"use strict";var e=c("c04e"),o=c("9bf2"),r=c("5c6c");t.exports=function(t,n,c){var a=e(n);a in t?o.f(t,a,r(0,c)):t[a]=c}},"99af":function(t,n,c){"use strict";var e=c("23e7"),o=c("d039"),r=c("e8b5"),a=c("861d"),i=c("7b0b"),d=c("50c4"),u=c("8418"),s=c("65f0"),f=c("1dde"),p=c("b622"),l=c("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",g=l>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=f("concat"),w=function(t){if(!a(t))return!1;var n=t[h];return void 0!==n?!!n:r(t)},x=!g||!_;e({target:"Array",proto:!0,forced:x},{concat:function(t){var n,c,e,o,r,a=i(this),f=s(a,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(r=-1===n?a:arguments[n],w(r)){if(o=d(r.length),p+o>v)throw TypeError(b);for(c=0;c<o;c++,p++)c in r&&u(f,p,r[c])}else{if(p>=v)throw TypeError(b);u(f,p++,r)}return f.length=p,f}})}}]);
//# sourceMappingURL=chunk-548d8084.8e76c2fe.js.map