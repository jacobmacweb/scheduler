(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{12:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),s=i(7),n=i.n(s),l=(i(12),i(3));i(6);var d=i(5),r=i.n(d),o=i(2),j=i.n(o),u=i(0);function b(e){var t=function(e,t){var i=c.a.useState((function(){var i=window.localStorage.getItem(t);return null!==i?JSON.parse(i):e})),a=Object(l.a)(i,2),s=a[0],n=a[1];return c.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(s))}),[t,s]),[s,n]}(e,e.id),i=Object(l.a)(t,2),s=i[0],n=i[1],d=Object(a.useState)(!1),o=Object(l.a)(d,2),b=o[0],O=o[1];return Object(u.jsxs)("div",{className:"Schedule",children:[Object(u.jsxs)("div",{className:"Info",children:[Object(u.jsxs)("div",{className:"MainBar",children:[Object(u.jsx)("div",{className:"Title",children:s.title}),Object(u.jsx)("div",{className:"Countdown",children:Object(u.jsx)(r.a,{date:s.date,fromNow:!0,withTitle:!0})})]}),Object(u.jsxs)("div",{className:"InfoBar",children:[Object(u.jsx)("div",{className:"Date",children:Object(u.jsx)(r.a,{date:s.date,local:!0})}),Object(u.jsx)("div",{className:"Description",children:s.description})]})]}),Object(u.jsxs)("div",{className:"Actions",children:[Object(u.jsx)("button",{onClick:function(){return O(!0)},children:"Edit"}),Object(u.jsx)("button",{children:"Delete"})]}),b?Object(u.jsxs)("div",{className:"EditSection",children:[Object(u.jsxs)("div",{className:"Field",children:[Object(u.jsx)("label",{htmlFor:"title",className:"FieldTitle",children:"Title"}),Object(u.jsx)("input",{type:"text",className:"FieldInput",defaultValue:s.title,onChange:function(e){n({id:s.id,title:e.target.value,description:s.description,date:s.date})}})]}),Object(u.jsxs)("div",{className:"Field",children:[Object(u.jsx)("label",{htmlFor:"description",className:"FieldTitle",children:"Description"}),Object(u.jsx)("textarea",{rows:10,className:"FieldInput",defaultValue:s.description,onChange:function(e){n({id:s.id,title:s.title,description:e.target.value,date:s.date})}})]}),Object(u.jsxs)("div",{className:"Field",children:[Object(u.jsx)("label",{htmlFor:"date",className:"FieldTitle",children:"Date and time"}),Object(u.jsx)("input",{type:"date",className:"FieldInput",defaultValue:j()(s.date).format("YYYY-MM-DD"),onChange:function(e){n({id:s.id,title:s.title,description:s.description,date:j()(e.target.value+" "+j()(s.date).format("HH:MM:SS")).toISOString()})}}),Object(u.jsx)("input",{type:"time",className:"FieldInput",defaultValue:j()(s.date).format("HH:MM:SS"),onChange:function(e){n({id:s.id,title:s.title,description:s.description,date:j()(j()(s.date).format("YYYY/MM/DD")+" "+e.target.value).toISOString()})}})]})]}):null]})}var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"Header",children:[Object(u.jsx)("div",{className:"Main",children:"Scheduler"}),Object(u.jsx)("div",{className:"Description",children:"Define a list of times to look forward to!"})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(b,{id:"a",title:"aa",description:"aaaaaaaa",date:(new Date).toISOString()})})]})};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))},6:function(e,t,i){}},[[15,1,2]]]);
//# sourceMappingURL=main.74de0d3e.chunk.js.map