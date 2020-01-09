(this["webpackJsonphighlighter-react-app"]=this["webpackJsonphighlighter-react-app"]||[]).push([[0],{44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(37),o=a.n(l),i=(a(49),a(38)),r=a(16),s=a(106),u=a(96),h=a(95),m=a(97),d=a(4),g={customBg:{backgroundColor:"#dfe09b",color:"#000000"},customMarginTop:{marginTop:"20px"},customPaddingTop:{paddingTop:"20px"},bgRed:{backgroundColor:"#ec8888"},bgGreen:{backgroundColor:"#5bad3e"},tableMinHeight:{minHeight:"20px"}},f=Object(n.createContext)(),E=Object(d.a)(g)((function(e){return c.a.createElement(f.Provider,{value:{classes:e.classes}},e.children)})),p=function(e){var t=Object(n.useContext)(f);return c.a.createElement(h.a,null,c.a.createElement(u.a,{className:t.classes.customBg},c.a.createElement(h.a,null,c.a.createElement(m.a,{variant:"h6"},"Highlighter"))))},b=function(){return c.a.createElement(p,null)},v=function(){return c.a.createElement(m.a,{variant:"h6"},"Page Not Found")},x=a(18),j=a(21),O=a.n(j),F=a(22),C=a.n(F),w=function(){var e,t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(C.a.get("./data/data_file.json").then((function(e){return e.data})).catch((function(e){})));case 2:return e=a.sent,a.next=5,O.a.awrap(C.a.get("./data/highlight.json").then((function(e){var t=e.data,a={inclusion:[],exclusion:[]};return t&&t.formattedAnnotations&&t.formattedAnnotations.forEach((function(e){e&&e.annotations&&e.annotations.annotations&&e.annotations.annotations.encounters&&(e.annotations.annotations.encounters.inclusion&&e.annotations.annotations.encounters.inclusion.forEach((function(e){a.inclusion.push(e)})),e.annotations.annotations.encounters.exclusion&&e.annotations.annotations.encounters.exclusion.forEach((function(e){a.exclusion.push(e)})))})),a})).catch((function(e){})));case 5:return t=a.sent,a.abrupt("return",{data:e,highlight:t});case 7:case"end":return a.stop()}}))},k=Object(n.createContext)(),y=function(e){var t=Object(n.useState)({}),a=Object(x.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)({}),r=Object(x.a)(i,2),s=r[0],u=r[1],h=Object(n.useState)(!1),m=Object(x.a)(h,2),d=m[0],g=m[1],f=Object(n.useState)(!1),E=Object(x.a)(f,2),p=E[0],b=E[1];return Object(n.useEffect)((function(){d||(w().then((function(e){e.data&&o(e.data),e.highlight&&u(e.highlight),b(!0)})),g(!0))}),[d]),c.a.createElement(k.Provider,{value:{dataFile:l,highlightFile:s,isDataFetched:p}},e.children)},N=a(103),S=a(102),I=a(76),T=a(104),B=a(100),M=a(98),H=a(99),P=function(e){var t=Object(n.useContext)(f);return c.a.createElement(M.a,null,c.a.createElement(H.a,null,e.value.head.map((function(e,a){return c.a.createElement(B.a,{className:t.classes.customBg,align:"center",key:a},e)}))))},_=a(101),D=function(e,t,a){var l=Object(n.useContext)(f),o=Object(n.useContext)(k),i="";return o.highlightFile.inclusion&&o.highlightFile.inclusion.includes(a)&&(i=l.classes.bgRed),o.highlightFile.exclusion&&o.highlightFile.exclusion.includes(a)&&(i=l.classes.bgGreen),c.a.createElement(e,Object.assign({},t,{className:i}),a)},A=function(e){return c.a.createElement(_.a,null,e.value.data.map((function(e,t){return c.a.createElement(H.a,{key:t},c.a.createElement(B.a,{align:"left"},e.date),c.a.createElement(B.a,{align:"left"},e.name),c.a.createElement(B.a,{align:"left"},e.code),D(B.a,{align:"left"},e.code_system),D(B.a,{align:"left"},e.code_system_name))})))},G=function(e){return c.a.createElement(_.a,null,c.a.createElement(H.a,null,c.a.createElement(B.a,{colSpan:e.cellCount,align:"left"},"No Items")))},J=a(105),R=function(){var e=Object(n.useContext)(k),t=Object(n.useContext)(f),a=[];e.dataFile&&e.dataFile.deIdentifiedFile&&e.dataFile.deIdentifiedFile.file&&e.dataFile.deIdentifiedFile.file.encounters&&(a=e.dataFile.deIdentifiedFile.file.encounters.parser);var l=["Date","Name","Code","Code System","Code System Name"];return e.isDataFetched?c.a.createElement(S.a,{component:I.a,className:"".concat(t.classes.customMarginTop," ").concat(t.classes.tableMinHeight)},c.a.createElement(N.a,{"aria-label":"simple table"},c.a.createElement(P,{value:{head:l}}),a.length>0?c.a.createElement(A,{value:{data:a}}):c.a.createElement(G,{cellCount:l.length}))):c.a.createElement(T.a,{container:!0,justify:"center",className:"".concat(t.classes.customMarginTop)},c.a.createElement(J.a,{disableShrink:!0}))};a(72);var W=function(){return c.a.createElement(s.a,{fixed:!0},c.a.createElement(E,null,c.a.createElement(y,null,c.a.createElement(b,null),c.a.createElement(i.a,null,c.a.createElement(r.c,null,c.a.createElement(r.a,{component:R,exact:!0,path:"/"}),c.a.createElement(r.a,{component:R,exact:!0,path:"/highlighter-react/"})," ",c.a.createElement(r.a,{path:"*",component:v}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.ca7fbce7.chunk.js.map