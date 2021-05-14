(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[12],{142:function(e,t,r){"use strict";r.r(t);var n=r(159),a=r.n(n),o=r(161),c=r(31),i=r(32),s=r(33),u=r(51),l=r(34),p=r(35),d=r(0),f=r(179),m=r(184),b=r(160),v=r(185),h=r(4),j={colors:"#86a315",enableArea:!1,translateX:-30,xtitle:"Date",ytitle:"Powder (kg)"},O={colors:"#e37222",enableArea:!1,translateX:-30,xtitle:"Date",ytitle:"Powder (kg)"},y=function(e){var t,r=e.data,n=e.id;"TopSPCTT"===n&&(t=j),"BottomSPCTT"===n&&(t=O);var a=[{id:n,data:[{x:(new Date).toISOString(),y:0}]}],o="undefined"!=typeof r[0].data&&r[0].data.length>0?r:a;return Object(h.jsx)(v.a,Object(c.a)(Object(c.a)({},t),{},{data:o}))},x=r(150),w=r(151),g=r(935),T=r.n(g),S=r(169),P=r(182),H=r(172),C=r(267),V=r(162),D=r.n(V),k={icon:Object(h.jsx)(C.a,{}),title:"Consumption per powder type",type:3},E=["Error",{description:"Resource not found"}],Z=D.a.range(1,256),_=(D.a.map(Z,(function(e){return{key:e,text:"T".concat(e),value:e}})),{columns:[{field:"type",headerName:"Type",sortable:!0,flex:1},{field:"consumption",headerName:"Kilograms",sortable:!0,type:"number",flex:1}],pageSize:14}),B=r(1087),N=function(e,t,r){var n;switch(t){case"BottomSPCTT":case"TopSPCTT":n="/types/".concat(e,"/").concat(r);break;case"TableAPT":n="/types/all"}return n},R=function(e,t){var r;switch(t){case"BottomSPCTT":case"TopSPCTT":r="consumption_powder_type_".concat(e,".csv")}return r},A=function(){var e=Object(o.a)(a.a.mark((function e(t,r,n){var o,c,i,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n instanceof Array,!("string"===typeof n)){e.next=22;break}if(c=N(t,r,n),i=!1,e.prev=5,"TableAPT"===r){e.next=12;break}return e.next=9,P.a.get(H.h,c);case 9:i=e.sent,e.next=15;break;case 12:return e.next=14,P.a.getMultipleResources(H.h,c);case 14:i=e.sent;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),B.a.danger.apply(B.a,Object(S.a)(E)),console.error("[connectServer]: Request to server API failed (GET)");case 21:return e.abrupt("return",i);case 22:if(!o){e.next=36;break}return s=R(t,r),u=!1,e.prev=25,e.next=28,P.a.post(H.h,"/",{filename:s,timeRange:n});case 28:u=e.sent,e.next=35;break;case 31:e.prev=31,e.t1=e.catch(25),B.a.danger.apply(B.a,Object(S.a)(E)),console.error("[connectServer]: Request to server API failed (POST)");case 35:return e.abrupt("return",u);case 36:case"end":return e.stop()}}),e,null,[[5,17],[25,31]])})));return function(t,r,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(a.a.mark((function e(t,r,n){var o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,r,n);case 2:c=e.sent,e.t0=r,e.next="BottomSPCTT"===e.t0||"TopSPCTT"===e.t0?6:"TableAPT"===e.t0?8:10;break;case 6:case 8:return o=c,e.abrupt("break",11);case 10:return e.abrupt("break",11);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,e.prev=1,e.next=4,H.h.get("/dropdowns/".concat(t));case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.error("[getDataForDropdown]: Request to server API failed (GET)"),e.abrupt("return",r);case 11:return e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}(),L=function(e){return"currentValueDropdown".concat(e)},F=r(269),U=r(255),z=r(233),W=z.a.filterArrayByObjectProperty,$=z.a.getTotalValueFromArray,X=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){var e;console.log("MOUNTING");var t=JSON.parse(localStorage.getItem("pd")),r=this.props,n=r.data,a=Object(F.a)(r,["data"]),o=n;D.a.isEmpty(n)&&(o=[]);var i=null===(e=o)||void 0===e?void 0:e.map((function(e){var t=W(e,"y");return $(t)})),s=[];return D.a.isEmpty(i)||D.a.isEmpty(t)||(s=i.map((function(e,r){return{id:r,type:"".concat(t[r]),consumption:e}}))),Object(h.jsx)(d.Fragment,{children:Object(h.jsx)(U.a,Object(c.a)(Object(c.a)({rows:s},a),{},{enableToolbar:!0}))})}}]),r}(d.PureComponent),Y=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).optionsDropdownCPT=[{key:1,text:"T1",value:1}],e.state={api:{dataBottomSPCTT:[],dataTopSPCTT:[],dataTableAPT:[]},currentTimeRange:{currentTimeRangeBottomSPCTT:"week",currentTimeRangeTopSPCTT:"week",currentTimeRangeTableAPT:"allTime"},currentValueDropdown:{currentValueDropdownBottomSPCTT:1,currentValueDropdownTopSPCTT:1}},e.updateDropdownState=function(t,r,n){var a=r.value;return e.setState((function(e){var t="currentValueDropdown".concat(n),r=Object(c.a)({},e);return r.currentValueDropdown[t]=a,{nextUpdate:r}}))},e.getDataFromServer=function(){var t=Object(o.a)(a.a.mark((function t(r,n){var o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.state.currentValueDropdown[L(r)],t.next=3,I(o,r,n);case 3:i=t.sent,e.setState((function(e){var t="data".concat(r),a="currentTimeRange".concat(r),o=Object(c.a)({},e);return o.currentTimeRange[a]=n,o.api[t]=i,{nextUpdate:o}}));case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),e.createContextValues=function(t){var r=e.state.currentValueDropdown,n=Object(u.a)(e),a={getDataFromServer:n.getDataFromServer,updateDropdownState:n.updateDropdownState};return t.map((function(e){return Object(c.a)(Object(c.a)({},a),{},{id:e,currentValueDropdown:r["currentValueDropdown".concat(e)]})}))},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{key:1,text:"T1",value:1}],e.next=3,M("types",t);case 3:this.optionsDropdownCPT=e.sent,r=this.optionsDropdownCPT.map((function(e){return e.powderDescription})),window.localStorage.setItem("pd",JSON.stringify(r,null,2)),this.updateDataOnScreen(),this.timerID=setInterval((function(){return n.updateDataOnScreen()}),36e5);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.localStorage.removeItem("pd"),clearInterval(this.timerID)}},{key:"updateDataOnScreen",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,r=t.currentTimeRange,n=t.currentValueDropdown,c=["TopSPCTT","BottomSPCTT","TableAPT"],e.next=4,Promise.all(c.map(function(){var e=Object(o.a)(a.a.mark((function e(t){var o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n["currentValueDropdown".concat(t)],c=r["currentTimeRange".concat(t)],e.next=4,I(o,t,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:i=e.sent,this.setState({api:{dataTopSPCTT:i[0],dataBottomSPCTT:i[1],dataTableAPT:i[2]}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.createContextValues,t=this.optionsDropdownCPT,r=this.state.api,n=r.dataBottomSPCTT,a=r.dataTopSPCTT,o=r.dataTableAPT,i=e(["TopSPCTT","BottomSPCTT"]),s=Object(h.jsx)(f.a,{options:t}),u=Object(h.jsx)(y,{id:"BottomSPCTT",data:[{id:"Recipe",data:n}]}),l=Object(h.jsx)(y,{id:"TopSPCTT",data:[{id:"Total",data:a}]});return Object(h.jsxs)(x.a,{className:T.a.powderType,children:[Object(h.jsxs)(w.a,{className:T.a.left,children:[Object(h.jsx)("div",{className:T.a.top,children:Object(h.jsx)(b.a.Provider,{value:i[0],children:Object(h.jsx)(m.a,Object(c.a)(Object(c.a)({},k),{},{graph:l,dropdown:s}))})}),Object(h.jsx)("div",{className:T.a.bottom,children:Object(h.jsx)(b.a.Provider,{value:i[1],children:Object(h.jsx)(m.a,Object(c.a)(Object(c.a)({},k),{},{graph:u,dropdown:s}))})})]}),Object(h.jsx)(w.a,{className:T.a.right,children:Object(h.jsx)(X,Object(c.a)({data:o},_))})]})}}]),r}(d.Component);t.default=Y},160:function(e,t,r){"use strict";var n=r(0),a=r.n(n).a.createContext({id:"Graph default id",currentValueDropdown:1,getDataFromServer:function(){},updateDropdownState:function(){}});t.a=a},165:function(e,t,r){},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(237),a=r(238),o=r(239),c=r(240),i=r(241);r(242),r(243);n.extend(a),n.extend(o),n.extend(c),n.extend(i);var s=function(e,t){return t?n(e,t):n.utc(e)},u=function(e){var t=function(e){return e<=9?"0".concat(e):e},r=s(e),n=r.$y,a=r.$M,o=r.$D,c=r.$H,i=r.$m,u=r.$s,l=t(o),p=t(a+1),d=t(c),f=t(i),m=t(u);return"".concat(l,".").concat(p,".").concat(n," ").concat(d,":").concat(f,":").concat(m)}},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(253),a=r.n(n),o=a.a.create({baseURL:"/consumption/air-pressure"}),c=a.a.create({baseURL:"/production/color-change"}),i=a.a.create({baseURL:"/consumption/electricity-air"}),s=a.a.create({baseURL:"/consumption/fresh-powder"}),u=a.a.create({baseURL:"/consumption/humidity-temperature"}),l=a.a.create({baseURL:"/production/monitoring"}),p=a.a.create({baseURL:"/consumption/powder-type"}),d=a.a.create({baseURL:"/consumption/sprayed-powder"}),f=a.a.create({baseURL:"/batch-information"})},179:function(e,t,r){"use strict";var n=r(0),a=r(1086),o=r(160),c=r(180),i=r.n(c),s=r(4);t.a=function(e){var t=e.options,r=Object(n.useContext)(o.a),c=r.id,u=r.currentValueDropdown,l=r.updateDropdownState;return Object(s.jsx)(a.a,{className:i.a.dropdown,options:t,placeholder:"Select",selection:!0,onChange:function(e,t){var r=t.value;return l(e,{value:r},c)},value:u})}},180:function(e,t,r){e.exports={dropdown:"Dropdown_dropdown__37I9C"}},181:function(e,t,r){e.exports={controlBar:"ControlBar_controlBar__1pf-0",col:"ControlBar_col__28Ct3",w12:"ControlBar_w12__3YsUZ",w58:"ControlBar_w58__3tBmK"}},182:function(e,t,r){"use strict";var n=r(159),a=r.n(n),o=r(161),c=function(e){var t=[];return e.map((function(e){var r=e.timestamp,n=e.value,a=e.value2,o=e.value3,c=e.value4;return t.push({x:r,y:n,y2:a,y3:o,y4:c})})),t},i={get:function(){var e=Object(o.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(r);case 2:return n=e.sent,e.abrupt("return",c(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),getMultipleResources:function(){var e=Object(o.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(r);case 2:return n=e.sent,e.abrupt("return",n.data.map((function(e){return c(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),post:function(){var e=Object(o.a)(a.a.mark((function e(t,r,n){var o,i,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.timeRange,i=n.filename,s={endDate:new Date(o[1]._d).toISOString(),startDate:new Date(o[0]._d).toISOString(),filename:i},e.next=4,t.post(r,s);case 4:return u=e.sent,e.abrupt("return",c(u.data));case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()};t.a=i},184:function(e,t,r){"use strict";var n=r(32),a=r(33),o=r(34),c=r(35),i=r(0);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createElement("defs",null,i.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),p=i.createElement("path",{className:"cls-1",d:"M23,4V3a1,1,0,0,0-2,0V4H11V3A1,1,0,0,0,9,3V4H4V28H28V4Zm3,22H6V11H26ZM26,9H6V6H9V7a1,1,0,0,0,2,0V6H21V7a1,1,0,0,0,2,0V6h3ZM10,13H8v2h2Z"}),d=i.createElement("rect",{className:"cls-2",width:32,height:32});function f(e,t){var r=e.title,n=e.titleId,a=u(e,["title","titleId"]);return i.createElement("svg",s({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,l,p,d)}var m=i.forwardRef(f);r.p;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=i.createElement("defs",null,i.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),j=i.createElement("path",{className:"cls-1",d:"M23,4V3a1,1,0,0,0-2,0V4H11V3A1,1,0,0,0,9,3V4H4V28H28V4Zm3,22H6V11H26ZM26,9H6V6H9V7a1,1,0,0,0,2,0V6H21V7a1,1,0,0,0,2,0V6h3ZM9,13H7v2H9Zm3,0H10v2h2Zm3,0H13v2h2Zm3,0H16v2h2Zm3,0H19v2h2Zm4,0H22v2h3Z"}),O=i.createElement("rect",{className:"cls-2",width:32,height:32});function y(e,t){var r=e.title,n=e.titleId,a=v(e,["title","titleId"]);return i.createElement("svg",b({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,h,j,O)}var x=i.forwardRef(y);r.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var T=i.createElement("defs",null,i.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),S=i.createElement("path",{className:"cls-1",d:"M23,4V3a1,1,0,0,0-2,0V4H11V3A1,1,0,0,0,9,3V4H4V28H28V4Zm3,22H6V11H26ZM26,9H6V6H9V7a1,1,0,0,0,2,0V6H21V7a1,1,0,0,0,2,0V6h3ZM9,13H7v2H9Zm3,0H10v2h2Zm3,0H13v2h2Zm3,0H16v2h2Zm3,0H19v2h2Zm4,0H22v2h3ZM9,16H7v2H9Zm3,0H10v2h2Zm3,0H13v2h2Zm3,0H16v2h2Zm3,0H19v2h2Zm4,0H22v2h3ZM9,19H7v2H9Zm3,0H10v2h2Zm3,0H13v2h2Zm3,0H16v2h2Zm3,0H19v2h2Zm4,0H22v2h3ZM9,22H7v2H9Zm3,0H10v2h2Zm3,0H13v2h2Zm3,0H16v2h2Zm3,0H19v2h2Zm4,0H22v2h3Z"}),P=i.createElement("rect",{className:"cls-2",width:32,height:32});function H(e,t){var r=e.title,n=e.titleId,a=g(e,["title","titleId"]);return i.createElement("svg",w({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,T,S,P)}var C=i.forwardRef(H),V=(r.p,r(210)),D=r.n(V),k=r(160),E=r(4),Z=function(e){var t=e.type,r=t,n=Object(i.useContext)(k.a),a=n.id,o=n.getDataFromServer;return Object(E.jsxs)("div",{className:D.a.controlButton,onClick:function(){o(a,r)},children:["day"===t&&Object(E.jsx)(m,{}),"week"===t&&Object(E.jsx)(x,{}),"month"===t&&Object(E.jsx)(C,{})]})},_=r(151),B=r(181),N=r.n(B),R=function(e){return Object(E.jsx)(i.Fragment,{children:["day","week","month"].map((function(e){return Object(E.jsx)(_.a,{className:[N.a.col,N.a.w12].join(" "),children:Object(E.jsx)(Z,{type:e})},e)}))})},A=r(1088),I=r(211),M=r.n(I),L=A.a.RangePicker,F=function(){var e=Object(i.useContext)(k.a),t=e.id,r=e.getDataFromServer;return Object(E.jsx)(L,{allowClear:!1,onChange:function(e){return r(t,e)},className:M.a.datepicker})},U=r(150),z=function(){return Object(E.jsxs)(U.a,{className:N.a.controlBar,children:[Object(E.jsx)(R,{}),Object(E.jsx)(_.a,{className:[N.a.col,N.a.w58].join(" "),children:Object(E.jsx)(F,{})})]})},W=r(194),$=r(195),X=(r(165),function(e){var t=e.icon1,r=e.icon2,n=e.title;return Object(E.jsxs)(U.a,{className:"titleBar",children:[Object(E.jsxs)(_.a,{className:"col wc icon",children:[t,r]}),Object(E.jsx)(_.a,{className:"col wd textFormat",children:n})]})}),Y=(r(212),function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this.props,t=e.dropdown,r=e.graph,n=e.icon,a=e.icon1,o=e.icon2,c=e.title,i=e.type,s=e.controlBarVisibility,u="undefined"===typeof s||s;return Object(E.jsxs)(U.a,{className:"graphContainer",children:[Object(E.jsxs)(_.a,{className:"titleBox",children:[1===i&&Object(E.jsx)($.a,{icon:n,title:c}),2===i&&Object(E.jsx)(X,{icon1:a,icon2:o,title:c}),3===i&&Object(E.jsx)(W.a,{dropdown:t,icon:n,title:c})]}),u&&Object(E.jsx)(_.a,{className:"controlBox",children:Object(E.jsx)(z,{})}),Object(E.jsx)(_.a,{className:"graphBox",children:r})]})}}]),r}(i.Component));t.a=Y},185:function(e,t,r){"use strict";var n=r(31),a=r(274),o=r(4),c={legendOffset:-43,legendPosition:"middle"},i={legendOffset:20,legendPosition:"middle",tickPadding:500,format:"%x"},s={curve:"catmullRom",enableCrosshair:!1,enablePoints:!0,margin:{top:50,right:4,bottom:30,left:60},pointBorderColor:{from:"color",modifiers:[]},pointBorderWidth:2,pointSize:0,pointSymbol:function(e){var t=e.size,r=e.borderWidth,n=e.borderColor;return Object(o.jsx)("g",{children:Object(o.jsx)("circle",{fill:"#fff",r:t/2,strokeWidth:r,stroke:n})})},xFormat:"time:%Y/%m/%d %H:%M",xScale:{format:"%Y-%m-%dT%H:%M:%S.%LZ",type:"time",useUTC:!1},yScale:{type:"linear",stacked:!1},useMesh:!0},u={anchor:"top",direction:"row",effects:[{on:"hover",style:{itemTextColor:"#0071be"}}],itemDirection:"left-to-right",itemHeight:0,itemOpacity:.9,itemsSpacing:80,itemWidth:0,justify:!1,translateX:0,translateY:-30,symbolShape:"square",symbolSize:12},l={axis:{legend:{text:{fontSize:16,fontWeight:"bold"}}},fontSize:13,textColor:"#777777",tooltip:{container:{background:"#333",color:"#fff"}}};t.a=function(e){var t=e.data,r=e.xtitle,p=e.ytitle,d=e.enableArea,f=e.itemsSpacing,m=e.translateX,b=e.colors;return Object(o.jsx)(a.a,Object(n.a)(Object(n.a)({},s),{},{colors:b,axisLeft:Object(n.a)(Object(n.a)({},c),{},{legend:p}),axisBottom:Object(n.a)(Object(n.a)({},i),{},{legend:r}),data:t,legends:[Object(n.a)(Object(n.a)({},u),{},{itemsSpacing:f,translateX:m})],theme:l,enableArea:d,areaOpacity:.15}))}},194:function(e,t,r){"use strict";r(0);var n=r(150),a=r(151),o=(r(165),r(4));t.a=function(e){var t=e.dropdown,r=e.icon,c=e.title;return Object(o.jsxs)(n.a,{className:"titleBar",children:[Object(o.jsx)(a.a,{className:"col wx icon",children:r}),Object(o.jsx)(a.a,{className:"col wy textFormat",children:c}),Object(o.jsx)(a.a,{className:"col wz textFormat",children:t})]})}},195:function(e,t,r){"use strict";r(0);var n=r(150),a=r(151),o=(r(165),r(4));t.a=function(e){var t=e.icon,r=e.title;return Object(o.jsxs)(n.a,{className:"titleBar",children:[Object(o.jsx)(a.a,{className:"col wa icon",children:t}),Object(o.jsx)(a.a,{className:"col wb textFormat",children:r})]})}},210:function(e,t,r){e.exports={controlButton:"ControlButton_controlButton__2paaT"}},211:function(e,t,r){e.exports={datepicker:"Datepicker_datepicker__2UiLF"}},212:function(e,t,r){},233:function(e,t,r){"use strict";var n=r(162),a=r.n(n),o=r(171),c=function(e,t,r,n){return!a.a.isEmpty(e)&&("x"in e[0]&&a.a.filter(e,(function(e){var n=e.x;return r(n).isSameOrBefore(t,"day")})))},i=function(e,t,r,n){return!a.a.isEmpty(e)&&("x"in e[0]&&a.a.filter(e,(function(e){var n=e.x;return!0===r(n).isAfter(t,"day")})))},s=function(e,t,r,n,o,c){return!a.a.isEmpty(e)&&(c instanceof Array?{prevData:!1,currentData:e}:{prevData:n(e,t,r,c),currentData:o(e,t,r,c)})},u={filterArrayByObjectProperty:function(e,t){return!a.a.isEmpty(e)&&a.a.map(e,t)},getAverage:function(e){return a.a.isEmpty(e)?0:a.a.round(a.a.mean(e),2)},getMaxValueFromArray:function(e){return a.a.isEmpty(e)?0:a.a.round(a.a.max(e),2)},getMinValueFromArray:function(e){return a.a.isEmpty(e)?0:a.a.round(a.a.min(e),2)},getTotalValueFromArray:function(e){return a.a.isEmpty(e)?0:a.a.round(a.a.sum(e),2)},run:function(e,t,r){if("undefined"===typeof e||!1===e)return console.error("[groupDataByDate.run]: There is no data to process"),t;var n=[e,Object(o.a)(new Date).subtract(1,r),o.a,c,i,r],a=s.apply(void 0,n);return"boolean"==typeof a?t:"prevData"in a&&"currentData"in a?a:t}};t.a=u},255:function(e,t,r){"use strict";r(0);var n=r(350),a=(r(258),r(4));t.a=function(e){var t=e.rows,r=e.columns,o=e.pageSize,c=e.onCellDoubleClick,i=e.enableToolbar;return Object(a.jsx)(n.a,{components:{Toolbar:i&&n.b},columns:r,className:"dataTable",pageSize:o,rows:t,onCellDoubleClick:function(e){return c(e)},disableSelectionOnClick:!0})}},258:function(e,t,r){},267:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#005293;}.cls-2{fill:none;}")),i=n.createElement("path",{className:"cls-1",d:"M27,12l1.56-1a1,1,0,0,0-.07-1.66l-9-5a1,1,0,0,0-1,0L16,5.87,13.55,4.24a1,1,0,0,0-1,0l-9,5a1,1,0,0,0-.41,1.35,1,1,0,0,0,.41.41l1.71.86L2.55,13.18a1,1,0,0,0-.41,1.35,1,1,0,0,0,.41.41l3.52,2a.83.83,0,0,0-.07.13V22.2a.67.67,0,0,0,0,.2.89.89,0,0,0,.08.17.91.91,0,0,0,.11.16l.16.13.09.08,9,5,.15.06h.09a1.06,1.06,0,0,0,.5,0h.09l.15-.06,9-5a1,1,0,0,0,.58-.87V16.9l3.52-2a1,1,0,0,0,.41-1.35,1,1,0,0,0-.41-.41ZM19.07,6.41l7,3.91L25,11.07,18,7.16ZM15,15.54l-5.94-3.3L15,8.94Zm2-6.6,5.94,3.3L17,15.54ZM13,6.41l1.13.75L7.47,10.85l-1.31-.61Zm-6,7,6.86,3.83L12,18.11,5.16,14.29Zm4.51,6.74a1,1,0,0,0,.94,0L15,18.86v6.68L8,21.65V18.16ZM24,21.65l-7,3.89V18.86l2.55,1.27a.88.88,0,0,0,.45.11,1,1,0,0,0,.49-.13L24,18.16Zm-4-3.54-1.86-.87L25,13.37l1.84.92Z"}),s=n.createElement("rect",{className:"cls-2",width:32,height:32});function u(e,t){var r=e.title,u=e.titleId,l=o(e,["title","titleId"]);return n.createElement("svg",a({id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":u},l),r?n.createElement("title",{id:u},r):null,c,i,s)}var l=n.forwardRef(u);r.p},935:function(e,t,r){e.exports={powderType:"PowderType_powderType__16ugY",left:"PowderType_left__3KeN7",top:"PowderType_top__19EW6",bottom:"PowderType_bottom__3Bu8d",right:"PowderType_right__3svaF"}}}]);
//# sourceMappingURL=12.9c71dfc3.chunk.js.map