(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9073572"],{"278b":function(t,c,n){"use strict";n.r(c);var o=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(c){t.isLoading=c}}}),n("h2",[t._v("Hello 單一產品頁")]),n("h3",[t._v(t._s(t.product.title))]),n("p",[t._v(t._s(t.product.category))]),n("p",[t._v(t._s(t.product.content))]),n("p",[t._v(t._s(t.product.description))])],1)},e=[],r=(n("99af"),{data:function(){return{product:{},isLoading:!1,fullPage:!0}},created:function(){var t=this;this.isLoading=!0;var c=this.$route.params.id,n="".concat("https://course-ec-api.hexschool.io/api","/").concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/ec/product/").concat(c);this.$http.get(n).then((function(c){t.product=c.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}}),a=r,i=n("2877"),u=Object(i["a"])(a,o,e,!1,null,null,null);c["default"]=u.exports},8418:function(t,c,n){"use strict";var o=n("c04e"),e=n("9bf2"),r=n("5c6c");t.exports=function(t,c,n){var a=o(c);a in t?e.f(t,a,r(0,n)):t[a]=n}},"99af":function(t,c,n){"use strict";var o=n("23e7"),e=n("d039"),r=n("e8b5"),a=n("861d"),i=n("7b0b"),u=n("50c4"),d=n("8418"),s=n("65f0"),f=n("1dde"),p=n("b622"),l=n("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=l>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=f("concat"),w=function(t){if(!a(t))return!1;var c=t[h];return void 0!==c?!!c:r(t)},x=!b||!_;o({target:"Array",proto:!0,forced:x},{concat:function(t){var c,n,o,e,r,a=i(this),f=s(a,0),p=0;for(c=-1,o=arguments.length;c<o;c++)if(r=-1===c?a:arguments[c],w(r)){if(e=u(r.length),p+e>v)throw TypeError(g);for(n=0;n<e;n++,p++)n in r&&d(f,p,r[n])}else{if(p>=v)throw TypeError(g);d(f,p++,r)}return f.length=p,f}})}}]);
//# sourceMappingURL=chunk-c9073572.580c5270.js.map