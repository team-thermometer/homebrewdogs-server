(function(e){function n(n){for(var r,a,s=n[0],u=n[1],c=n[2],f=0,p=[];f<s.length;f++)a=s[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,s=1;s<t.length;s++){var u=t[s];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1142:function(e,n,t){},"120c":function(e,n,t){},1278:function(e,n,t){"use strict";var r=t("8e9f"),o=t.n(r);o.a},"162b":function(e,n,t){},"3a19":function(e,n,t){e.exports=t.p+"img/profile.ccca92ec.jpg"},"3f60":function(e,n,t){},4987:function(e,n,t){"use strict";var r=t("3f60"),o=t.n(r);o.a},"4ddb":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=t("8c4f"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Top 10 Beers!")]),e._l(e.beers,function(n){return t("div",{key:n.name,staticClass:"list"},[t("img",{attrs:{src:n.image_url}}),t("div",{staticClass:"info"},[t("p",[e._v("\n          "+e._s(n.name)+", \n          ")]),e._v("\n          "+e._s(n.tagline)+"\n          "),t("p",[e._v("\n          Abv: "+e._s(n.abv)+"\n          ")])])])})],2)},a=[],s="",u=function(e,n){var t={method:e,headers:{}};return n&&(t.headers["Content-Type"]="application/json",t.body=JSON.stringify(n)),s&&(t.headers.Authorization=s),t},c={setToken:function(e){s=e},signUp:function(e){return fetch("/api/auth/signup",u("POST",e)).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},signIn:function(e){return fetch("/api/auth/signin",u("POST",e)).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},getFavorites:function(){return fetch("/api/favorites",u("GET")).then(function(e){return e.json()})},getBeers:function(){return fetch("/api/beers",u("GET")).then(function(e){return e.json()})},getBeer:function(e){return fetch("https://api.punkapi.com/v2/beers/".concat(e)).then(function(e){return e.json()})},getBeerByKeyword:function(e){return fetch("https://api.punkapi.com/v2/beers?beer_name=".concat(e)).then(function(e){return e.json()})}},l={data:function(){return{beers:Object}},components:{},created:function(){var e=this;c.getBeers().then(function(n){return e.beers=n.slice(2,12)})}},f=l,p=(t("df34"),t("2877")),d=Object(p["a"])(f,i,a,!1,null,"be016b78",null);d.options.__file="Home.vue";var v=d.exports,h=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"aboutus"},[r("h1",[e._v("About Us")]),r("section",[r("h3",[e._v("Cari Palazzolo")]),r("img",{staticClass:"profile",attrs:{src:t("f778")}}),r("p",[e._v("\n      Cari is a full-stack developer currently training at Alchemy Code Lab. She has backgrounds in QA/QC, Graphic Design, Visual Art, and Music. \n      When she’s not writing code she enjoys biking around Portland, going on hikes and sipping delicious IPA’s. \n      Her favorite Brewdog beer is the Punk IPA.\n    ")])]),r("section",[r("h3",[e._v('Dyanna "Dee" Tolman')]),r("img",{staticClass:"profile",attrs:{src:t("3a19")}}),r("p",[e._v("\n      Dyanna is currently a student at Alchemy Code Lab and has lived in Portland on and off for 10 years. \n      Originally from Singapore, she enjoys traveling, trying new restaurants and spending time with her family.\n      She doesn't drink but if she did, she thinks her favorite Brewdog beer would be Electric India.\n    ")])]),r("section",[r("h3",[e._v("Aaron Dennis")]),r("img",{staticClass:"profile",attrs:{src:t("cca7")}}),r("p",[e._v("\n      Aaron is a climber, traveler, software developer, and amateur chef. He has actually visited the BrewDog main brewery in Edinburgh, Scotland. His favorite BrewDog beer is Punk IPA.\n    ")])]),r("section",[r("h3",[e._v("Drew Van Valkenburg")]),r("img",{staticClass:"profile",attrs:{src:t("e778")}}),r("p",[e._v("\n      Drew is an avid reader, web developer, economist, snowboarder and basketball player. Drew's favorite beer is Fresh Squeezed IPA.\n    ")])])])}],_=(t("e537"),{}),g=Object(p["a"])(_,h,m,!1,null,"d32e51e0",null);g.options.__file="About.vue";var b=g.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.beers?t("ul",[t("p",[t("button",{staticClass:"search",on:{click:function(n){e.showModal=!0}}},[e._v(" Search\n  ")])]),e.showModal?t("Modal",{attrs:{onClose:function(){return e.showModal=!1}}},[t("BeerSearch",{attrs:{onSearch:e.handleSearch}})],1):e._e(),e._l(e.beers,function(e){return t("Beer",{key:e.id,attrs:{beer:e}})}),t("Pagination")],2):e._e()},y=[],k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.beer?t("li",[t("RouterLink",{attrs:{to:"/beers/"+e.beer.id}},[t("h4",[e._v(e._s(e.beer.name))])]),t("p",[e._v(e._s(e.beer.description))])],1):e._e()},S=[],P={props:{beer:null}},j=P,x=(t("80c5"),Object(p["a"])(j,k,S,!1,null,"fd3aeb56",null));x.options.__file="Beer.vue";var C=x.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"modal",on:{click:e.onClose,keyup:function(n){return"button"in n||!e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?e.onClose(n):null}}},[t("div",{staticClass:"content",on:{click:function(e){e.stopPropagation()}}},[t("button",{staticClass:"close",on:{click:e.onClose}},[e._v("X")]),e._t("default")],2)])},O=[],$={props:{onClose:Function},created:function(){var e=this;this.documentListener=function(n){27===n.keyCode&&e.onClose()},document.addEventListener("keyup",this.documentListener)},destroyed:function(){document.removeEventListener("keyup",this.documentListener)}},E=$,A=(t("66c7"),Object(p["a"])(E,B,O,!1,null,null,null));A.options.__file="Modal.vue";var U=A.exports,I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("form",{on:{submit:function(n){return n.preventDefault(),e.handleSubmit(n)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],domProps:{value:e.keyword},on:{input:function(n){n.target.composing||(e.keyword=n.target.value)}}}),t("button",[e._v("Search")])])},L=[],N={props:{search:String,onSearch:Function},data:function(){return{keyword:""}},methods:{handleSubmit:function(){this.onSearch(this.keyword)}}},D=N,M=(t("1278"),Object(p["a"])(D,I,L,!1,null,null,null));M.options.__file="BeerSearch.vue";var T=M.exports,F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"people"},[t("h2",[e._v("Beer")]),t("p",[t("button",{attrs:{disabled:1===e.page},on:{click:function(n){e.handlePage(-1)}}},[e._v("Prev")]),e._v("\n    Page "+e._s(e.page)+"\n    "),t("button",{on:{click:function(n){e.handlePage(1)}}},[e._v("Next")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"error"},[e._v("    "+e._s(e.error)+"\n  ")])])},q=[],H={data:function(){return{error:null,page:1}},components:{},watch:{$route:function(e,n){var t=e.query.page,r=n.query.page;t!==r&&(this.page=t)}},methods:{handlePage:function(e){this.page+=e,this.recordPage()},recordPage:function(){this.$router.push({query:{page:this.page}})}}},R=H,z=(t("d2f9"),Object(p["a"])(R,F,q,!1,null,null,null));z.options.__file="Pagination.vue";var J=z.exports,V={data:function(){return{beers:null,showModal:!1}},components:{Beer:C,BeerSearch:T,Modal:U,Pagination:J},methods:{handleSearch:function(e){this.searchBeers(e),this.showModal=!1},searchBeers:function(e){var n=this;c.getBeerByKeyword(e).then(function(e){return n.beers=e})}},created:function(){var e=this;c.getBeers().then(function(n){return e.beers=n})}},G=V,K=(t("feb4"),Object(p["a"])(G,w,y,!1,null,null,null));K.options.__file="Beers.vue";var Q=K.exports,W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.beer?t("section",[t("h2",[e._v(e._s(e.beer.name))]),t("p",{staticClass:"checkmark",on:{click:e.handleAdd}},[e._v("✓")]),t("p",[e._v(e._s(e.beer.description)+"\n    ")]),t("p",[e._v("ABV: "+e._s(e.beer.abv))]),t("p",[e._v("IBU: "+e._s(e.beer.ibu))]),t("p",[e._v("First brewed: "+e._s(e.beer.first_brewed))])]):e._e()},X=[],Y={data:function(){return{beer:null}},created:function(){var e=this;c.getBeer(this.$route.params.id).then(function(n){e.beer=n[0]})},methods:{handleAdd:function(){console.log(1)}}},Z=Y,ee=(t("d211"),Object(p["a"])(Z,W,X,!1,null,"525c61fe",null));ee.options.__file="BeerDetail.vue";var ne=ee.exports,te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("\n        Saved List!\n    ")]),e._l(e.favorites,function(n,r){return t("div",{key:r},[e._v("\n    "+e._s(n.name)+"\n    ")])})],2)},re=[],oe={data:function(){return{favorites:null}},created:function(){var e=this;c.getFavorites().then(function(n){return e.favorites=n})}},ie=oe,ae=(t("c15f"),Object(p["a"])(ie,te,re,!1,null,null,null));ae.options.__file="Profile.vue";var se=ae.exports,ue=new o["a"]({routes:[{path:"/",component:v},{path:"/about",component:b},{path:"/beers",component:Q},{path:"/profile",component:se},{path:"/beers/:id",component:ne},{path:"*",redirect:"/"}]}),ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Header"),e.user?t("nav",[t("RouterLink",{staticClass:"profile",attrs:{to:"/profile"}},[e._v("Profile")]),t("RouterLink",{attrs:{to:"/"}},[e._v("Home")]),t("RouterLink",{attrs:{to:"/beers"}},[e._v("Beers List")]),t("RouterLink",{attrs:{to:"/about"}},[e._v("About Us")]),t("a",{attrs:{href:"#"},on:{click:e.handleLogout}},[e._v("Logout")])],1):e._e(),t("main",[e.user?t("RouterView",{attrs:{user:e.user}}):t("Auth",{attrs:{onSignUp:e.handleSignUp,onSignIn:e.handleSignIn}})],1),t("Footer")],1)},le=[],fe=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("header",[r("RouterLink",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:t("cf05"),alt:"homebrewdog logo"}})])],1)},pe=[],de={data:function(){return{result:null,user:null}}},ve=de,he=(t("4987"),Object(p["a"])(ve,fe,pe,!1,null,"1cb9ed0a",null));he.options.__file="Header.vue";var me=he.exports,_e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",["signin"===e.method?t("div",{staticClass:"wrapper"},[t("h2",[e._v("Sign In")]),t("p",[e._v("\n      Need to sign up?\n      "),t("button",{on:{click:function(n){e.method="signup"}}},[e._v("Sign Up")])]),t("form",{on:{submit:function(n){n.preventDefault(),e.handleSignInSubmit(e.profile)}}},[t("label",[e._v("\n        Username:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.username,expression:"profile.username"}],attrs:{required:""},domProps:{value:e.profile.username},on:{input:function(n){n.target.composing||e.$set(e.profile,"username",n.target.value)}}})]),t("label",[e._v("\n        Password:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{type:"password",required:""},domProps:{value:e.profile.password},on:{input:function(n){n.target.composing||e.$set(e.profile,"password",n.target.value)}}})]),e._m(0)])]):t("div",{staticClass:"wrapper"},[t("h2",[e._v("Sign Up")]),t("p",[e._v("\n      Already have an account?\n      "),t("button",{on:{click:function(n){e.method="signin"}}},[e._v("Sign In")])]),t("form",{on:{submit:function(n){n.preventDefault(),e.handleSignUpSubmit(e.profile)}}},[t("label",[e._v("\n        Username:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.username,expression:"profile.username"}],attrs:{required:""},domProps:{value:e.profile.username},on:{input:function(n){n.target.composing||e.$set(e.profile,"username",n.target.value)}}})]),t("label",[e._v("\n        Password:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],attrs:{type:"password",required:""},domProps:{value:e.profile.password},on:{input:function(n){n.target.composing||e.$set(e.profile,"password",n.target.value)}}})]),t("label",[e._v("\n        First Name:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.first,expression:"profile.first"}],attrs:{required:""},domProps:{value:e.profile.first},on:{input:function(n){n.target.composing||e.$set(e.profile,"first",n.target.value)}}})]),t("label",[e._v("\n        Last Name:\n        "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.last,expression:"profile.last"}],attrs:{required:""},domProps:{value:e.profile.last},on:{input:function(n){n.target.composing||e.$set(e.profile,"last",n.target.value)}}})]),e._m(1)])]),e.error?t("pre",[e._v(e._s(e.error))]):e._e()])},ge=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("label",[t("button",[e._v("Sign In")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("label",[t("button",[e._v("Sign Up")])])}],be={props:{onSignIn:Function,onSignUp:Function},data:function(){return{method:"signin",error:"",profile:{username:"",password:""}}},methods:{handleSignInSubmit:function(){var e=this;this.error="",this.onSignIn(this.profile).catch(function(n){e.error=n.error})},handleSignUpSubmit:function(){var e=this;this.error="",this.onSignUp(this.profile).catch(function(n){e.error=n.error})}}},we=be,ye=(t("899a"),Object(p["a"])(we,_e,ge,!1,null,"1d62a6dc",null));ye.options.__file="Auth.vue";var ke=ye.exports,Se=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},Pe=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("a",{attrs:{href:"https://www.brewdog.com/usa/beer-2/headliners",target:"_blank"}},[e._v("Brewdog")])])}],je={data:function(){return{result:null,user:null}}},xe=je,Ce=Object(p["a"])(xe,Se,Pe,!1,null,null,null);Ce.options.__file="Footer.vue";var Be=Ce.exports,Oe={name:"app",data:function(){return{result:null,user:null}},components:{Header:me,Footer:Be,Auth:ke},created:function(){var e=window.localStorage.getItem("profile");e&&this.setUser(JSON.parse(e))},methods:{handleSignUp:function(e){var n=this;return c.signUp(e).then(function(e){n.setUser(e)})},handleSignIn:function(e){var n=this;return c.signIn(e).then(function(e){n.setUser(e)})},setUser:function(e){this.user=e,e?(c.setToken(e.token),window.localStorage.setItem("profile",JSON.stringify(e))):(c.setToken(),window.localStorage.removeItem("profile"))},handleLogout:function(){this.setUser(null),this.$router.push("/")}}},$e=Oe,Ee=(t("8f6e"),Object(p["a"])($e,ce,le,!1,null,"2e84525d",null));Ee.options.__file="App.vue";var Ae=Ee.exports;r["a"].config.productionTip=!1,r["a"].use(o["a"]),r["a"].directive("focus",{inserted:function(e){e.focus()}}),new r["a"]({router:ue,render:function(e){return e(Ae)}}).$mount("#app")},"66c7":function(e,n,t){"use strict";var r=t("d978"),o=t.n(r);o.a},6985:function(e,n,t){},"80c5":function(e,n,t){"use strict";var r=t("b564"),o=t.n(r);o.a},"899a":function(e,n,t){"use strict";var r=t("1142"),o=t.n(r);o.a},"8e9f":function(e,n,t){},"8f6e":function(e,n,t){"use strict";var r=t("9f18"),o=t.n(r);o.a},"9f18":function(e,n,t){},b564:function(e,n,t){},c15f:function(e,n,t){"use strict";var r=t("c51a"),o=t.n(r);o.a},c51a:function(e,n,t){},cca7:function(e,n,t){e.exports=t.p+"img/AboutMePic.6d1acc8a.jpeg"},cf05:function(e,n,t){e.exports=t.p+"img/logo.ece20e46.png"},d211:function(e,n,t){"use strict";var r=t("120c"),o=t.n(r);o.a},d2f9:function(e,n,t){"use strict";var r=t("4ddb"),o=t.n(r);o.a},d978:function(e,n,t){},df34:function(e,n,t){"use strict";var r=t("df69"),o=t.n(r);o.a},df69:function(e,n,t){},e537:function(e,n,t){"use strict";var r=t("162b"),o=t.n(r);o.a},e778:function(e,n,t){e.exports=t.p+"img/profile_pic.f2b7c76b.jpg"},f778:function(e,n,t){e.exports=t.p+"img/caripalazzolo.632552a4.jpg"},feb4:function(e,n,t){"use strict";var r=t("6985"),o=t.n(r);o.a}});
//# sourceMappingURL=app.2cd6d463.js.map