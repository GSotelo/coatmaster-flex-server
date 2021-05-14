(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[16],{145:function(e,t,r){"use strict";r.r(t);var a=r(159),n=r.n(a),c=r(161),o=r(31),i=r(32),u=r(33),s=r(51),l=r(34),p=r(35),d=r(0),f=r(268),m=r(179),v=r(184),b=r(160),j=r(185),O=r(4),h={colors:"#86a315",enableArea:!1,translateX:-30,xtitle:"Date",ytitle:"Temperature (\xb0C)"},y={colors:"#e37222",enableArea:!1,translateX:-30,xtitle:"Date",ytitle:"Humidity (%)"},x=function(e){var t,r=e.data,a=e.id;"TST"===a&&(t=h),"HST"===a&&(t=y);var n=[{id:a,data:[{x:(new Date).toISOString(),y:0}]}],c="undefined"!=typeof r[0].data&&r[0].data.length>0?r:n;return Object(O.jsx)(j.a,Object(o.a)(Object(o.a)({},t),{},{data:c}))},w=r(150),g=r(151),S=r(933),T=r.n(S),D=r(169),k=r(182),E=r(175),H=r(172),V=r(382),R=r(386),N=r(162),_=r.n(N),P={icon:Object(O.jsx)(V.a,{}),title:"Humidity sensor",type:3},I={icon:Object(O.jsx)(R.a,{}),title:"Temperature sensor",type:3},Z={icon:Object(O.jsx)(V.a,{}),title:"Humidity sensor",type:3},A={icon:Object(O.jsx)(R.a,{}),title:"Temperature sensor",type:3},C=["Error",{description:"Sensor device not found."}],F=_.a.range(1,7),M=(_.a.map(F,(function(e){return{key:e,text:"TS-".concat(e),value:e}})),_.a.range(1,7)),B=(_.a.map(M,(function(e){return{key:e,text:"HS-".concat(e),value:e}})),r(1087)),q=function(e,t,r){var a;switch(t){case"HSD":a="/humidity/".concat(e,"/deck-").concat(r);break;case"TSD":a="/temperature/".concat(e,"/deck-").concat(r);break;case"HST":a="/humidity/".concat(e,"/").concat(r);break;case"TST":a="/temperature/".concat(e,"/").concat(r)}return a},G=function(e,t){var r;switch(t){case"HSD":case"HST":r="sensor_humidity_".concat(e,".csv");break;case"TSD":case"TST":r="sensor_temperature_".concat(e,".csv")}return r},L=function(){var e=Object(c.a)(n.a.mark((function e(t,r,a){var c,o,i,u,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a instanceof Array,!("string"===typeof a)){e.next=16;break}return o=q(t,r,a),i=!1,e.prev=5,e.next=8,k.a.get(H.f,o);case 8:i=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),B.a.danger.apply(B.a,Object(D.a)(C)),console.error("[connectServer]: Request to server API failed (GET)");case 15:return e.abrupt("return",i);case 16:if(!c){e.next=30;break}return u=G(t,r),s=!1,e.prev=19,e.next=22,k.a.post(H.f,"/",{filename:u,timeRange:a});case 22:s=e.sent,e.next=29;break;case 25:e.prev=25,e.t1=e.catch(19),B.a.danger.apply(B.a,Object(D.a)(C)),console.error("[connectServer]: Request to server API failed (POST)");case 29:return e.abrupt("return",s);case 30:case"end":return e.stop()}}),e,null,[[5,11],[19,25]])})));return function(t,r,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(c.a)(n.a.mark((function e(t,r,a){var c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,r,a);case 2:o=e.sent,e.t0=r,e.next="HSD"===e.t0||"TSD"===e.t0?6:"HST"===e.t0||"TST"===e.t0?8:10;break;case 6:return c=E.a.run(o,a,1),e.abrupt("break",11);case 8:return c=o,e.abrupt("break",11);case 10:return e.abrupt("break",11);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,e.prev=1,e.next=4,H.f.get("/dropdowns/".concat(t));case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.error("[getDataForDropdown]: Request to server API failed (GET)"),e.abrupt("return",r);case 11:return e.abrupt("return",a.data);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}(),J=function(e){return"currentValueDropdown".concat(e)},X=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(e=t.call.apply(t,[this].concat(u))).optionsDropdownHS=[{key:1,text:"HS1",value:1}],e.optionsDropdownTS=[{key:1,text:"TS1",value:1}],e.state={api:{dataHSD:{average:{avgTimeRange:0,avgPrevTimeRange:0},maxValue:0,minValue:0},dataTSD:{average:{avgTimeRange:0,avgPrevTimeRange:0},maxValue:0,minValue:0},dataHST:[],dataTST:[]},currentTimeRange:{currentTimeRangeHSD:"week",currentTimeRangeHST:"week",currentTimeRangeTST:"week",currentTimeRangeTSD:"week"},currentValueDropdown:{currentValueDropdownHSD:1,currentValueDropdownHST:1,currentValueDropdownTSD:1,currentValueDropdownTST:1}},e.updateDropdownState=function(t,r,a){var n=r.value;return e.setState((function(e){var t="currentValueDropdown".concat(a),r=Object(o.a)({},e);return r.currentValueDropdown[t]=n,{nextUpdate:r}}))},e.getDataFromServer=function(){var t=Object(c.a)(n.a.mark((function t(r,a){var c,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.state.currentValueDropdown[J(r)],t.next=3,U(c,r,a);case 3:i=t.sent,e.setState((function(e){var t="data".concat(r),n="currentTimeRange".concat(r),c=Object(o.a)({},e);return c.currentTimeRange[n]=a,c.api[t]=i,{nextUpdate:c}}));case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),e.createContextValues=function(t){var r=e.state.currentValueDropdown,a=Object(s.a)(e),n={getDataFromServer:a.getDataFromServer,updateDropdownState:a.updateDropdownState};return t.map((function(e){return Object(o.a)(Object(o.a)({},n),{},{id:e,currentValueDropdown:r["currentValueDropdown".concat(e)]})}))},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,r,a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{key:1,text:"HS1",value:1}],r=[{key:1,text:"TS1",value:1}],e.next=4,W("humidity",t);case 4:return this.optionsDropdownHS=e.sent,e.next=7,W("temperature",r);case 7:this.optionsDropdownTS=e.sent,this.updateDataOnScreen(),this.timerID=setInterval((function(){return a.updateDataOnScreen()}),36e5);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"updateDataOnScreen",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,r,a,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,r=t.currentTimeRange,a=t.currentValueDropdown,o=["HSD","HST","TSD","TST"],e.next=4,Promise.all(o.map(function(){var e=Object(c.a)(n.a.mark((function e(t){var c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a["currentValueDropdown".concat(t)],o=r["currentTimeRange".concat(t)],e.next=4,U(c,t,o);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:i=e.sent,this.setState({api:{dataHSD:i[0],dataHST:i[1],dataTSD:i[2],dataTST:i[3]}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.createContextValues,t=this.optionsDropdownHS,r=this.optionsDropdownTS,a=this.state.api,n=a.dataHSD,c=a.dataHST,i=a.dataTSD,u=a.dataTST,s=this.state.currentTimeRange,l=s.currentTimeRangeHSD,p=s.currentTimeRangeTSD,d=e(["TST","HST","TSD","HSD"]),j=Object(O.jsx)(f.a,{data:n,timeRange:l,units:"%"}),h=Object(O.jsx)(f.a,{data:i,timeRange:p,units:"\xb0C"}),y=Object(O.jsx)(m.a,{options:t}),S=Object(O.jsx)(m.a,{options:r}),D=Object(O.jsx)(x,{id:"HST",data:[{id:"Humidity",data:c}]}),k=Object(O.jsx)(x,{id:"TST",data:[{id:"Temperature",data:u}]});return Object(O.jsxs)(w.a,{className:T.a.humidityTemperature,children:[Object(O.jsxs)(g.a,{className:T.a.left,children:[Object(O.jsx)("div",{className:T.a.top,children:Object(O.jsx)(b.a.Provider,{value:d[0],children:Object(O.jsx)(v.a,Object(o.a)(Object(o.a)({},I),{},{graph:k,dropdown:S}))})}),Object(O.jsx)("div",{className:T.a.bottom,children:Object(O.jsx)(b.a.Provider,{value:d[1],children:Object(O.jsx)(v.a,Object(o.a)(Object(o.a)({},P),{},{graph:D,dropdown:y}))})})]}),Object(O.jsxs)(g.a,{className:T.a.right,children:[Object(O.jsx)("div",{className:T.a.top,children:Object(O.jsx)(b.a.Provider,{value:d[2],children:Object(O.jsx)(v.a,Object(o.a)(Object(o.a)({},A),{},{graph:h,dropdown:S}))})}),Object(O.jsx)("div",{className:T.a.bottom,children:Object(O.jsx)(b.a.Provider,{value:d[3],children:Object(O.jsx)(v.a,Object(o.a)(Object(o.a)({},Z),{},{graph:j,dropdown:y}))})})]})]})}}]),r}(d.Component);t.default=X},179:function(e,t,r){"use strict";var a=r(0),n=r(1086),c=r(160),o=r(180),i=r.n(o),u=r(4);t.a=function(e){var t=e.options,r=Object(a.useContext)(c.a),o=r.id,s=r.currentValueDropdown,l=r.updateDropdownState;return Object(u.jsx)(n.a,{className:i.a.dropdown,options:t,placeholder:"Select",selection:!0,onChange:function(e,t){var r=t.value;return l(e,{value:r},o)},value:s})}},180:function(e,t,r){e.exports={dropdown:"Dropdown_dropdown__37I9C"}},191:function(e,t,r){"use strict";r(0),r(192);var a=r(4);t.a=function(e){var t=e.icon,r=e.units,n=e.value;return Object(a.jsxs)("div",{className:"cardWithoutFooter",children:[Object(a.jsx)("div",{className:"header",children:t}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("span",{className:"value",children:n}),Object(a.jsx)("span",{className:"units",children:r})]})]})}},192:function(e,t,r){},208:function(e,t,r){"use strict";r(0),r(209);var a=r(4);t.a=function(e){var t=e.cards;return Object(a.jsx)("div",{className:"deck",children:t.map((function(e,t){return Object(a.jsx)("div",{className:"cardBox",children:e},t)}))})}},209:function(e,t,r){},268:function(e,t,r){"use strict";var a=r(31),n=r(0),c=r(206),o=r(191),i=r(207);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),p=n.createElement("path",{className:"cls-1",d:"M4,4V6H28V4Zm12,5.7-5.62,4.5a1,1,0,0,0,1.24,1.56L15,13.08V28h2V13.08l3.38,2.7A1,1,0,0,0,21,16a1,1,0,0,0,.78-.38,1,1,0,0,0-.16-1.4Z"}),d=n.createElement("rect",{className:"cls-2",width:32,height:32});function f(e,t){var r=e.title,a=e.titleId,c=s(e,["title","titleId"]);return n.createElement("svg",u({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,l,p,d)}var m=n.forwardRef(f);r.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var j=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),O=n.createElement("path",{className:"cls-1",d:"M4,26v2H28V26Zm12-3.72,5.62-4.5a1,1,0,1,0-1.24-1.56L17,18.92V4H15V18.92l-3.38-2.7a1,1,0,0,0-1.24,1.56Z"}),h=n.createElement("rect",{className:"cls-2",width:32,height:32});function y(e,t){var r=e.title,a=e.titleId,c=b(e,["title","titleId"]);return n.createElement("svg",v({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,j,O,h)}var x=n.forwardRef(y),w=(r.p,r(4)),g=function(e){return 1===e.type?Object(w.jsx)(c.a,Object(a.a)(Object(a.a)({},e),{},{icon:Object(w.jsx)(i.a,{})})):2===e.type?Object(w.jsx)(o.a,Object(a.a)(Object(a.a)({},e),{},{icon:Object(w.jsx)(m,{})})):3===e.type?Object(w.jsx)(o.a,Object(a.a)(Object(a.a)({},e),{},{icon:Object(w.jsx)(x,{})})):void 0},S=r(208),T=r(175),D=T.a.setFooterLabel,k=T.a.setFooterValue;t.a=function(e){var t=e.data,r=e.timeRange,c=e.units,o=t.average,i=o.avgTimeRange,u=o.avgPrevTimeRange,s=[{label:D(r,i,u),previousValue:k(r,u,c),type:1,value:i,units:c},{type:2,value:t.maxValue,units:c},{type:3,value:t.minValue,units:c}].map((function(e){return Object(w.jsx)(g,Object(a.a)({},e))}));return Object(w.jsx)(n.Fragment,{children:Object(w.jsx)(S.a,{cards:s})})}},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),i=a.createElement("path",{className:"cls-1",d:"M24,13s-5,7-5,10a5,5,0,0,0,10,0C29,20,24,13,24,13Zm0,13a3,3,0,0,1-3-3c0-1.1,1.37-3.8,3-6.4,1.63,2.6,3,5.3,3,6.4A3,3,0,0,1,24,26Z"}),u=a.createElement("path",{className:"cls-1",d:"M21,12c0-3-5-10-5-10s-5,7-5,10a5,5,0,0,0,10,0Zm-5,3a3,3,0,0,1-3-3c0-1.1,1.37-3.8,3-6.4,1.63,2.6,3,5.3,3,6.4A3,3,0,0,1,16,15Z"}),s=a.createElement("path",{className:"cls-1",d:"M4,24a5,5,0,0,0,10,0c0-3-5-10-5-10S4,21,4,24Zm5,3a3,3,0,0,1-3-3c0-1.1,1.37-3.8,3-6.4,1.63,2.6,3,5.3,3,6.4A3,3,0,0,1,9,27Z"}),l=a.createElement("rect",{className:"cls-2",width:32,height:32});function p(e,t){var r=e.title,p=e.titleId,d=c(e,["title","titleId"]);return a.createElement("svg",n({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":p},d),r?a.createElement("title",{id:p},r):null,o,i,u,s,l)}var d=a.forwardRef(p);r.p},386:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r(0);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),i=a.createElement("path",{className:"cls-1",d:"M16,4a3,3,0,0,1,3,3V18.92l.57.58a5,5,0,1,1-7.14,0l.57-.58V7a3,3,0,0,1,3-3m0-2a5,5,0,0,0-5,5V18.11a7,7,0,1,0,10,0V7A5,5,0,0,0,16,2Z"}),u=a.createElement("path",{className:"cls-1",d:"M17,20.18V12H15v8.18a3,3,0,1,0,2,0Z"}),s=a.createElement("rect",{className:"cls-2",width:32,height:32});function l(e,t){var r=e.title,l=e.titleId,p=c(e,["title","titleId"]);return a.createElement("svg",n({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":l},p),r?a.createElement("title",{id:l},r):null,o,i,u,s)}var p=a.forwardRef(l);r.p},933:function(e,t,r){e.exports={humidityTemperature:"HumidityTemperature_humidityTemperature__1g8pc",left:"HumidityTemperature_left__2RIBj",top:"HumidityTemperature_top__34yeZ",bottom:"HumidityTemperature_bottom__3WIuP",right:"HumidityTemperature_right__NGTzr"}}}]);
//# sourceMappingURL=16.a106b05c.chunk.js.map