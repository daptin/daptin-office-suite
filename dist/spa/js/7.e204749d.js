(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"013f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 offset-3 col-sm-6 col-xs-12"},[n("div",{staticClass:"flex flex-center"},[n("q-card",{staticClass:"q-pa-md",staticStyle:{"min-width":"300px",width:"30vw"},attrs:{flat:""}},[n("q-card-section",[n("span",{staticClass:"text-h4"},[t._v("Login")])]),n("q-card-section",[n("q-form",{staticClass:"q-gutter-md",attrs:{autofocus:""},on:{submit:t.onSubmit}},[n("q-input",{attrs:{filled:"",label:"Email","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",[n("q-btn",{staticClass:"float-left",attrs:{label:"Login",type:"submit",color:"primary"}}),n("q-btn",{staticClass:"float-right",attrs:{label:"Register",type:"reset",color:"secondary",flat:""},on:{click:function(e){return t.$router.push("/register")}}})],1)],1)],1)],1)],1)])])},r=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),o=n.n(s),i=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"PageLogin",methods:l(l({},Object(i["b"])(["executeAction","setToken"])),{},{onSubmit:function(){var t=this;t.executeAction({tableName:"user_account",actionName:"signin",params:{email:this.email,password:this.password}}).then((function(e){for(var n=0;n<e.length;n++)"client.notify"===e[n].ResponseType&&t.$q.notify(e[n].Attributes);t.setToken(),t.$router.push("/workspace")})).catch((function(e){t.$q.notify("Failed to sign in"),console.log("error ",arguments)}))}}),data:function(){return{email:null,password:null}},mounted:function(){console.log("mounted login")}},f=u,p=n("2877"),d=n("f09f"),b=n("a370"),m=n("0378"),w=n("27f9"),y=n("9c40"),g=n("eebe"),h=n.n(g),O=Object(p["a"])(f,a,r,!1,null,null,null);e["default"]=O.exports;h()(O,"components",{QCard:d["a"],QCardSection:b["a"],QForm:m["a"],QInput:w["a"],QBtn:y["a"]})}}]);