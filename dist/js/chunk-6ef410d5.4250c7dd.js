(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ef410d5"],{1511:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"details container"},[t("router-link",{attrs:{to:"/"}},[s._v("Back to the list")]),s.user?t("div",[s.user.name?t("h1",{staticClass:"page-header"},[s._v(s._s(s.user.name))]):s._e(),t("ul",{staticClass:"list-group"},[s.user.phone?t("li",{staticClass:"list-group-item"},[t("span",{staticClass:"col-xs-1 glyphicon glyphicon-phone",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.phone))])]):s._e(),s.user.email?t("li",{staticClass:"list-group-item"},[t("span",{staticClass:"col-xs-1 glyphicon glyphicon-envelope",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.email))])]):s._e(),s.user.website?t("li",{staticClass:"list-group-item"},[t("span",{staticClass:"col-xs-1 glyphicon glyphicon-home",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.website))])]):s._e()]),t("ul",{staticClass:"list-group"},[s.user.address.street?t("li",{staticClass:"list-group-item"},[t("i",{staticClass:"col-xs-1 fa fa-road",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.address.street))])]):s._e(),s.user.address.zipcode&&s.user.address.city?t("li",{staticClass:"list-group-item"},[t("i",{staticClass:"col-xs-1 fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.address.zipcode)+" "+s._s(s.user.address.city))])]):s.user.address.city?t("li",{staticClass:"list-group-item"},[t("i",{staticClass:"col-xs-1 fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"col-xs-10"},[s._v(s._s(s.user.address.city))])]):s._e()])]):t("div",[t("h1",{staticClass:"page-header"},[s._v("No data available!")])])],1)},i=[],r=(t("cadf"),t("551c"),t("097d"),t("bc3a"),t("d722")),c={name:"user",data:function(){return{user:""}},created:function(){var s=this;s.fetchUser(s.$route.params.id)},methods:{fetchUser:function(s){var a=this;r["a"].getSingleUser(s).then(function(s){a.user=s.data},function(s){console.error(s)})}}},l=c,n=(t("3044"),t("2877")),o=Object(n["a"])(l,e,i,!1,null,"5c72c8dc",null);o.options.__file="User.vue";a["default"]=o.exports},3044:function(s,a,t){"use strict";var e=t("607b"),i=t.n(e);i.a},"607b":function(s,a,t){}}]);
//# sourceMappingURL=chunk-6ef410d5.4250c7dd.js.map