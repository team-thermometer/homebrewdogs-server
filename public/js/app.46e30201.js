(function(e){function n(n){for(var r,s,a=n[0],u=n[1],c=n[2],f=0,p=[];f<a.length;f++)s=a[f],o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},i=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1142:function(e,n,t){},1278:function(e,n,t){"use strict";var r=t("8e9f"),o=t.n(r);o.a},"205c":function(e,n,t){"use strict";var r=t("6258"),o=t.n(r);o.a},"319d":function(e,n,t){"use strict";var r=t("fac3"),o=t.n(r);o.a},"36f4":function(e,n,t){},4508:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=t("8c4f"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Top 10 Beers!")]),e._l(e.beers.slice(2,12),function(n){return t("div",{key:n.name,staticClass:"list"},[t("img",{attrs:{src:n.image_url}}),t("div",{staticClass:"info"},[t("p",[e._v("\n          "+e._s(n.name)+", \n          ")]),e._v("\n          "+e._s(n.tagline)+"\n          "),t("p",[e._v("\n          Abv: "+e._s(n.abv)+"\n          ")])])])})],2)},s=[],a="",u=function(e,n){var t={method:e,headers:{}};return n&&(t.headers["Content-Type"]="application/json",t.body=JSON.stringify(n)),a&&(t.headers.Authorization=a),t},c={setToken:function(e){a=e},signUp:function(e){return fetch("/api/auth/signup",u("POST",e)).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},signIn:function(e){return fetch("/api/auth/signin",u("POST",e)).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},getBeers:function(){return fetch("https://api.punkapi.com/v2/beers",u("GET")).then(function(e){return e.json()})},getBeer:function(e){return fetch("https://api.punkapi.com/v2/beers/".concat(e)).then(function(e){return e.json()})},getBeerByKeyword:function(e){return fetch("https://api.punkapi.com/v2/beers?beer_name=".concat(e)).then(function(e){return e.json()})}},l={data:function(){return{beers:Object}},components:{},created:function(){var e=this;c.getBeers().then(function(n){return e.beers=n})}},f=l,p=(t("d4b3"),t("2877")),d=Object(p["a"])(f,i,s,!1,null,"08d4bd62",null);d.options.__file="Home.vue";var v=d.exports,h=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("About Us")]),t("p",[e._v("fdsfdsfdsfds")])])}],_=(t("b8ab"),{}),b=Object(p["a"])(_,h,m,!1,null,null,null);b.options.__file="About.vue";var g=b.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.beers?t("ul",[t("p",[t("button",{staticClass:"search",on:{click:function(n){e.showModal=!0}}},[e._v(" Search\n  ")])]),e.showModal?t("Modal",{attrs:{onClose:function(){return e.showModal=!1}}},[t("BeerSearch",{attrs:{onSearch:e.handleSearch}})],1):e._e(),e._l(e.beers,function(e){return t("Beer",{key:e.id,attrs:{beer:e}})})],2):e._e()},S=[],y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.beer?t("li",[t("RouterLink",{attrs:{to:"/beers/"+e.beer.id}},[t("h4",[e._v(e._s(e.beer.name))])]),t("p",[e._v(e._s(e.beer.description))])],1):e._e()},k=[],j={props:{beer:null}},O=j,x=(t("80c5"),Object(p["a"])(O,y,k,!1,null,"fd3aeb56",null));x.options.__file="Beer.vue";var $=x.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"modal",on:{click:e.onClose,keyup:function(n){return"button"in n||!e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?e.onClose(n):null}}},[t("div",{staticClass:"content",on:{click:function(e){e.stopPropagation()}}},[t("button",{staticClass:"close",on:{click:e.onClose}},[e._v("X")]),e._t("default")],2)])},U=[],E={props:{onClose:Function},created:function(){var e=this;this.documentListener=function(n){27===n.keyCode&&e.onClose()},document.addEventListener("keyup",this.documentListener)},destroyed:function(){document.removeEventListener("keyup",this.documentListener)}},P=E,C=(t("66c7"),Object(p["a"])(P,B,U,!1,null,null,null));C.options.__file="Modal.vue";var I=C.exports,L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("form",{on:{submit:function(n){return n.preventDefault(),e.handleSubmit(n)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],domProps:{value:e.keyword},on:{input:function(n){n.target.composing||(e.keyword=n.target.value)}}}),t("button",[e._v("Search")])])},N=[],M={props:{search:String,onSearch:Function},data:function(){return{keyword:""}},methods:{handleSubmit:function(){this.onSearch(this.keyword)}}},A=M,T=(t("1278"),Object(p["a"])(A,L,N,!1,null,null,null));T.options.__file="BeerSearch.vue";var F=T.exports,q={data:function(){return{beers:null,showModal:!1}},components:{Beer:$,BeerSearch:F,Modal:I},methods:{handleSearch:function(e){this.searchBeers(e),this.showModal=!1},searchBeers:function(e){var n=this;c.getBeerByKeyword(e).then(function(e){return n.beers=e})}},created:function(){var e=this;c.getBeers().then(function(n){return e.beers=n})}},R=q,H=(t("feb4"),Object(p["a"])(R,w,S,!1,null,null,null));H.options.__file="Beers.vue";var J=H.exports,D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.beer?t("section",[t("h2",[e._v(e._s(e.beer.name))]),t("p",[e._v(e._s(e.beer.description)+"\n  ")]),t("p",[e._v("ABV: "+e._s(e.beer.abv))]),t("p",[e._v("IBU: "+e._s(e.beer.ibu))]),t("p",[e._v("First brewed: "+e._s(e.beer.first_brewed))])]):e._e()},K=[],V={data:function(){return{beer:null}},created:function(){var e=this;c.getBeer(this.$route.params.id).then(function(n){e.beer=n[0]})}},z=V,G=(t("319d"),Object(p["a"])(z,D,K,!1,null,null,null));G.options.__file="BeerDetail.vue";var X=G.exports,Q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("\n        Saved List!\n    ")]),e._l(e.favorites,function(n){return t("div",{key:n},[e._v("\n    "+e._s(n.name)+"\n    ")])})],2)},W=[],Y={data:function(){return{favorites:null}}},Z=Y,ee=(t("c15f"),Object(p["a"])(Z,Q,W,!1,null,null,null));ee.options.__file="Profile.vue";var ne=ee.exports,te=new o["a"]({routes:[{path:"/",component:v},{path:"/about",component:g},{path:"/beers",component:J},{path:"/profile",component:ne},{path:"/beers/:id",component:X},{path:"*",redirect:"/"}]}),re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Header"),e.user?t("nav",[t("RouterLink",{attrs:{to:"/"}},[e._v("Home")]),t("RouterLink",{attrs:{to:"/beers"}},[e._v("Beers List")]),t("RouterLink",{attrs:{to:"/about"}},[e._v("About Us")]),t("a",{attrs:{href:"#"},on:{click:e.handleLogout}},[e._v("Logout")])],1):e._e(),t("main",[e.user?t("RouterView",{attrs:{user:e.user}}):t("Auth",{attrs:{onSignUp:e.handleSignUp,onSignIn:e.handleSignIn}})],1),t("Footer")],1)},oe=[],ie=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("header",[r("RouterLink",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:t("cf05"),alt:"homebrewdog logo"}})])],1)},se=[],ae={data:function(){return{result:null,user:null}}},ue=ae,ce=(t("6102"),Object(p["a"])(ue,ie,se,!1,null,"c904d840",null));ce.options.__file="Header.vue";var le=ce.exports,fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",["signin"===e.method?t("div",{staticClass:"wrapper"},[t("h2",[e._v("Sign In")]),t("p",[e._v("\n      Need to sign up?\n      "),t("button",{on:{click:function(n){e.method="signup"}}},[e._v("Sign Up")])]),t("form",{on:{submit:function(n){n.preventDefault(),e.handleSignInSubmit(e.profile)}}},[t("label",[e._v("\n        Username:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.username,expression:"profile.username"}],attrs:{required:""},domProps:{value:e.profile.username},on:{input:function(n){n.target.composing||e.$set(e.profile,"username",n.target.value)}}})]),t("label",[e._v("\n        Password:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{type:"password",required:""},domProps:{value:e.profile.password},on:{input:function(n){n.target.composing||e.$set(e.profile,"password",n.target.value)}}})]),e._m(0)])]):t("div",{staticClass:"wrapper"},[t("h2",[e._v("Sign Up")]),t("p",[e._v("\n      Already have an account?\n      "),t("button",{on:{click:function(n){e.method="signin"}}},[e._v("Sign In")])]),t("form",{on:{submit:function(n){n.preventDefault(),e.handleSignUpSubmit(e.profile)}}},[t("label",[e._v("\n        Username:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.username,expression:"profile.username"}],attrs:{required:""},domProps:{value:e.profile.username},on:{input:function(n){n.target.composing||e.$set(e.profile,"username",n.target.value)}}})]),t("label",[e._v("\n        Password:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{type:"password",required:""},domProps:{value:e.profile.password},on:{input:function(n){n.target.composing||e.$set(e.profile,"password",n.target.value)}}})]),t("label",[e._v("\n        First Name:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.first,expression:"profile.first"}],attrs:{required:""},domProps:{value:e.profile.first},on:{input:function(n){n.target.composing||e.$set(e.profile,"first",n.target.value)}}})]),t("label",[e._v("\n        Last Name:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.last,expression:"profile.last"}],attrs:{required:""},domProps:{value:e.profile.last},on:{input:function(n){n.target.composing||e.$set(e.profile,"last",n.target.value)}}})]),e._m(1)])]),e.error?t("pre",[e._v(e._s(e.error))]):e._e()])},pe=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("label",[t("button",[e._v("Sign In")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("label",[t("button",[e._v("Sign Up")])])}],de={props:{onSignIn:Function,onSignUp:Function},data:function(){return{method:"signin",error:"",profile:{username:"",password:""}}},methods:{handleSignInSubmit:function(){var e=this;this.error="",this.onSignIn(this.profile).catch(function(n){e.error=n.error})},handleSignUpSubmit:function(){var e=this;this.error="",this.onSignUp(this.profile).catch(function(n){e.error=n.error})}}},ve=de,he=(t("899a"),Object(p["a"])(ve,fe,pe,!1,null,"1d62a6dc",null));he.options.__file="Auth.vue";var me=he.exports,_e=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},be=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("a",{attrs:{href:"https://www.brewdog.com/usa/beer-2/headliners",target:"_blank"}},[e._v("Brewdog")])])}],ge={data:function(){return{result:null,user:null}}},we=ge,Se=Object(p["a"])(we,_e,be,!1,null,null,null);Se.options.__file="Footer.vue";var ye=Se.exports,ke={name:"app",data:function(){return{result:null,user:null}},components:{Header:le,Footer:ye,Auth:me},created:function(){var e=window.localStorage.getItem("profile");e&&this.setUser(JSON.parse(e))},methods:{handleSignUp:function(e){var n=this;return c.signUp(e).then(function(e){n.setUser(e)})},handleSignIn:function(e){var n=this;return c.signIn(e).then(function(e){n.setUser(e)})},setUser:function(e){this.user=e,e?(c.setToken(e.token),window.localStorage.setItem("profile",JSON.stringify(e))):(c.setToken(),window.localStorage.removeItem("profile"))},handleLogout:function(){this.setUser(null),this.$router.push("/")}}},je=ke,Oe=(t("205c"),Object(p["a"])(je,re,oe,!1,null,"93127ffa",null));Oe.options.__file="App.vue";var xe=Oe.exports;r["a"].config.productionTip=!1,r["a"].use(o["a"]),r["a"].directive("focus",{inserted:function(e){e.focus()}}),new r["a"]({router:te,render:function(e){return e(xe)}}).$mount("#app")},6102:function(e,n,t){"use strict";var r=t("933e"),o=t.n(r);o.a},6258:function(e,n,t){},"66c7":function(e,n,t){"use strict";var r=t("d978"),o=t.n(r);o.a},6985:function(e,n,t){},"80c5":function(e,n,t){"use strict";var r=t("b564"),o=t.n(r);o.a},"899a":function(e,n,t){"use strict";var r=t("1142"),o=t.n(r);o.a},"8e9f":function(e,n,t){},"933e":function(e,n,t){},b564:function(e,n,t){},b8ab:function(e,n,t){"use strict";var r=t("36f4"),o=t.n(r);o.a},c15f:function(e,n,t){"use strict";var r=t("c51a"),o=t.n(r);o.a},c51a:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.ece20e46.png"},d4b3:function(e,n,t){"use strict";var r=t("4508"),o=t.n(r);o.a},d978:function(e,n,t){},fac3:function(e,n,t){},feb4:function(e,n,t){"use strict";var r=t("6985"),o=t.n(r);o.a}});
//# sourceMappingURL=app.46e30201.js.map