(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd4e72f6"],{1511:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"details container"},[a("router-link",{attrs:{to:"/"}},[s._v("Back to the list")]),s.user?a("div",[s.user.name?a("h1",{staticClass:"page-header"},[s._v(s._s(s.user.name))]):s._e(),a("ul",{staticClass:"list-group"},[s.user.phone?a("li",{staticClass:"list-group-item"},[a("span",{staticClass:"col-xs-1 glyphicon glyphicon-phone",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.phone))])]):s._e(),s.user.email?a("li",{staticClass:"list-group-item"},[a("span",{staticClass:"col-xs-1 glyphicon glyphicon-envelope",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.email))])]):s._e(),s.user.website?a("li",{staticClass:"list-group-item"},[a("span",{staticClass:"col-xs-1 glyphicon glyphicon-home",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.website))])]):s._e()]),a("ul",{staticClass:"list-group"},[s.user.address.street?a("li",{staticClass:"list-group-item"},[a("i",{staticClass:"col-xs-1 fa fa-road",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.address.street))])]):s._e(),s.user.address.zipcode&&s.user.address.city?a("li",{staticClass:"list-group-item"},[a("i",{staticClass:"col-xs-1 fa fa-map-marker",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.address.zipcode)+" "+s._s(s.user.address.city))])]):s.user.address.city?a("li",{staticClass:"list-group-item"},[a("i",{staticClass:"col-xs-1 fa fa-map-marker",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.address.city))])]):s._e()])]):a("div",[a("h1",{staticClass:"page-header"},[s._v("No data available!")])])],1)},i=[],r=(a("cadf"),a("551c"),a("097d"),a("d722")),c={name:"user",data:function(){return{user:""}},created:function(){var s=this;s.fetchUser(s.$route.params.id)},methods:{fetchUser:function(s){var t=this;r["a"].getSingleUser(s).then(function(s){t.user=s.data},function(s){console.error(s)})}}},l=c,n=(a("227c"),a("2877")),o=Object(n["a"])(l,e,i,!1,null,"5b244409",null);o.options.__file="User.vue";t["default"]=o.exports},"227c":function(s,t,a){"use strict";var e=a("5dc8"),i=a.n(e);i.a},"5dc8":function(s,t,a){}}]);
//# sourceMappingURL=chunk-cd4e72f6.a34f1329.js.map