(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9073572"],{"278b":function(t,c,n){"use strict";n.r(c);var e=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",[n("h2",[t._v("Hello 單一產品頁")]),n("h3",[t._v(t._s(t.product.title))])])},o=[],r=(n("99af"),{data:function(){return{product:{}}},created:function(){var t=this,c=this.$route.params.id,n="".concat("https://course-ec-api.hexschool.io/api","/").concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/ec/product/").concat(c);this.$http.get(n).then((function(c){t.product=c.data.data,console.log("sign this.product",t.product)})).catch((function(t){console.log(t)}))}}),a=r,i=n("2877"),u=Object(i["a"])(a,e,o,!1,null,null,null);c["default"]=u.exports},8418:function(t,c,n){"use strict";var e=n("c04e"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,c,n){var a=e(c);a in t?o.f(t,a,r(0,n)):t[a]=n}},"99af":function(t,c,n){"use strict";var e=n("23e7"),o=n("d039"),r=n("e8b5"),a=n("861d"),i=n("7b0b"),u=n("50c4"),d=n("8418"),s=n("65f0"),f=n("1dde"),l=n("b622"),p=n("2d00"),h=l("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",w=p>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=f("concat"),x=function(t){if(!a(t))return!1;var c=t[h];return void 0!==c?!!c:r(t)},_=!w||!g;e({target:"Array",proto:!0,forced:_},{concat:function(t){var c,n,e,o,r,a=i(this),f=s(a,0),l=0;for(c=-1,e=arguments.length;c<e;c++)if(r=-1===c?a:arguments[c],x(r)){if(o=u(r.length),l+o>b)throw TypeError(v);for(n=0;n<o;n++,l++)n in r&&d(f,l,r[n])}else{if(l>=b)throw TypeError(v);d(f,l++,r)}return f.length=l,f}})}}]);
//# sourceMappingURL=chunk-c9073572.b443456f.js.map