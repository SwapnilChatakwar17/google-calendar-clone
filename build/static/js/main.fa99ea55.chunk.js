(this["webpackJsonpgoogle-calendar-clone"]=this["webpackJsonpgoogle-calendar-clone"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),l=n.n(r),s=(n(13),n(3)),o=(n(14),n(2)),i=n.n(o);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i()().month();e=Math.floor(e);var t=i()().year(),n=i()(new Date(t,e,1)).day(),c=0-n,a=new Array(5).fill([]).map((function(){return new Array(7).fill(null).map((function(){return c++,i()(new Date(t,e,c))}))}));return a}var u=a.a.createContext({monthIndex:0,setMonthIndex:function(e){},smallCalendarMonth:0,setSmallCalendarMonth:function(e){},daySelected:null,setDaySelected:function(e){},showEventModal:!1,setShowEventModal:function(){},dispatchCalEvent:function(e){e.type,e.payload},savedEvents:[],selectedEvent:null,setSelectedEvent:function(){},setLabels:function(){},labels:[],updateLabel:function(){},filteredEvents:[]}),b=n(0);function j(){var e=Object(c.useContext)(u),t=e.monthIndex,n=e.setMonthIndex;return Object(b.jsxs)("header",{className:"px-4 py-2 flex items-center",children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACrklEQVR4Ae3YA4wkURAG4GOMCZbRWcFZ0dk24mQVn23btm3bwdm2N1pjXNu16H2LUdcknc78f1LLeS8zX6paVRAEQRAEQRAkUDrOz+7YeWHubitViyn/d8envAqq4pJfrolLejUw/HCL02t1Wphzu/PCHLJatZiWSnHJr0Ks189jU57XChug9kaeWwNMDqjU7bDgdZmfNdCSeHJAik153VEM2Gl+9ppIBeRjohxwQdaeiO3A5Fe7AQhAAAIQgAAEIAABaLUCIACXnrfTlZcuU+vczSt0aMcgQ7Vn2whzAfkDmB3v373kulHDULlv1IwwQAACEIAABCAAed3M43YatSGXEnfk8c/B7AXAz6keGr0h1+d+/L//6V4AVhaG6b/CB55S/Vfm0hcNGoDlonYej+6LH27KzvfqI81/UztRCQD5dSre/4yKY8p/Uzv0wUd9bwDOPJavrznxyEm+sueeQ73PBmBJxu4vBeTR9ZUHH/RO1dbkAVDtQJ9rABg4G67ZFZh88pXE7Xn66zZcxwjr4bFV1+255yQlfDbWkB3qa3gNANXsveeocNHMdyBLz9krXB+OwmVM5dl4zS7ZF4AcXsMniH7FXcc/czf6vnwBoPgiG4C+74+5+wzuB0C+pDE4ugDkSxmDowtAHl3BPgAUnXUBqDz/E4wujoEMx4/4OQA0LQAEoKkBIAAB2Gz+4T0t5p8kIzXn+hU6/+22qfXo5jRyLrQZq2W2NWLA2Dnt9mhFRqrJ1l7U6sgQU2vm1M6U36R+yGVvXP851aplYwMAivAAKMQDoBAPgEI8AArxACjEA6AQD4BCPAAK8QAoxJMDdrQ6oBxPjnjbyoByPDlgrZg57Z9bFFDBMznRc9oM1CDXaDi7g6lGW3rubn1kiKk1b2LH3eHGQxAEQRAEQZAC4ENFnIADmtMAAAAASUVORK5CYII=",alt:"calendar",className:"mr-2 w-12 h-12"}),Object(b.jsx)("h1",{className:"mr-10 text-xl text-gray-500 fond-bold",children:"Calendar"}),Object(b.jsx)("button",{onClick:function(){n(t===i()().month()?t+Math.random():i()().month())},className:"border rounded py-2 px-4 mr-5",children:"Today"}),Object(b.jsx)("button",{onClick:function(){n(t-1)},children:Object(b.jsx)("span",{className:"material-icons-outlined cursor-pointer text-gray-600 mx-2",children:"chevron_left"})}),Object(b.jsx)("button",{onClick:function(){n(t+1)},children:Object(b.jsx)("span",{className:"material-icons-outlined cursor-pointer text-gray-600 mx-2",children:"chevron_right"})}),Object(b.jsx)("h2",{className:"ml-4 text-xl text-gray-500 font-bold",children:i()(new Date(i()().year(),t)).format("MMMM YYYY")})]})}var f=n.p+"static/media/plus.8f3ab9f7.svg";function x(){var e=Object(c.useContext)(u).setShowEventModal;return Object(b.jsxs)("button",{onClick:function(){return e(!0)},className:"border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl",children:[Object(b.jsx)("img",{src:f,alt:"create_event",className:"w-7 h-7"}),Object(b.jsx)("span",{className:"pl-3 pr-7",children:" Create"})]})}function m(){var e=Object(c.useState)(i()().month()),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(c.useState)(d()),o=Object(s.a)(l,2),j=o[0],f=o[1];Object(c.useEffect)((function(){f(d(n))}),[n]);var x=Object(c.useContext)(u),m=x.monthIndex,h=x.setSmallCalendarMonth,O=x.setDaySelected,p=x.daySelected;function v(e){var t="DD-MM-YY",n=i()().format(t),c=e.format(t),a=p&&p.format(t);return n===c?"bg-blue-500 rounded-full text-white":c===a?"bg-blue-100 rounded-full text-blue-600 font-bold":""}return Object(c.useEffect)((function(){r(m)}),[m]),Object(b.jsxs)("div",{className:"mt-9",children:[Object(b.jsxs)("header",{className:"flex justify-between",children:[Object(b.jsx)("p",{className:"text-gray-500 font-bold",children:i()(new Date(i()().year(),n)).format("MMMM YYYY")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){r(n-1)},children:Object(b.jsx)("span",{className:"material-icons-outlined cursor-pointer text-gray-600 mx-2",children:"chevron_left"})}),Object(b.jsx)("button",{onClick:function(){r(n+1)},children:Object(b.jsx)("span",{className:"material-icons-outlined cursor-pointer text-gray-600 mx-2",children:"chevron_right"})})]})]}),Object(b.jsxs)("div",{className:"grid grid-cols-7 grid-rows-6",children:[j[0].map((function(e,t){return Object(b.jsx)("span",{className:"text-sm py-1 text-center",children:e.format("dd").charAt(0)},t)})),j.map((function(e,t){return Object(b.jsx)(a.a.Fragment,{children:e.map((function(e,t){return Object(b.jsx)("button",{onClick:function(){h(n),O(e)},className:"py-1 w-full ".concat(v(e)),children:Object(b.jsx)("span",{className:"text-sm",children:e.format("D")})},t)}))},t)}))]})]})}function h(){var e=Object(c.useContext)(u),t=e.labels,n=e.updateLabel;return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("p",{className:"text-gray-500 font-bold mt-10",children:"Label"}),t.map((function(e,t){var c=e.label,a=e.checked;return Object(b.jsxs)("label",{className:"items-center mt-3 block",children:[Object(b.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return n({label:c,checked:!a})},className:"form-checkbox h-5 w-5 text-".concat(c,"-400 rounded focus:ring-0 cursor-pointer")}),Object(b.jsx)("span",{className:"ml-2 text-gray-700 capitalize",children:c})]},t)}))]})}function O(){return Object(b.jsxs)("aside",{className:"border p-5 w-64",children:[Object(b.jsx)(x,{}),Object(b.jsx)(m,{}),Object(b.jsx)(h,{})]})}function p(e){var t=e.day,n=e.rowIdx,a=Object(c.useState)([]),r=Object(s.a)(a,2),l=r[0],o=r[1],d=Object(c.useContext)(u),j=d.setDaySelected,f=d.setShowEventModal,x=d.filteredEvents,m=d.setSelectedEvent;return Object(c.useEffect)((function(){var e=x.filter((function(e){return i()(e.day).format("DD-MM-YY")===t.format("DD-MM-YY")}));o(e)}),[x,t]),Object(b.jsxs)("div",{className:"border border-gray-200 flex flex-col",children:[Object(b.jsxs)("header",{className:"flex flex-col items-center",children:[0===n&&Object(b.jsx)("p",{className:"text-sm mt-1",children:t.format("ddd").toUpperCase()}),Object(b.jsx)("p",{className:"text-sm p-1 my-1 text-center  ".concat(t.format("DD-MM-YY")===i()().format("DD-MM-YY")?"bg-blue-600 text-white rounded-full w-7":""),children:t.format("DD")})]}),Object(b.jsx)("div",{className:"flex-1 cursor-pointer",onClick:function(){j(t),f(!0)},children:l.map((function(e,t){return Object(b.jsx)("div",{onClick:function(){return m(e)},className:"bg-".concat(e.label,"-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate"),children:e.title},t)}))})]})}function v(e){var t=e.month;return Object(b.jsx)("div",{className:"flex-1 grid grid-cols-7 grid-rows-5",children:t.map((function(e,t){return Object(b.jsx)(a.a.Fragment,{children:e.map((function(e,n){return Object(b.jsx)(p,{day:e,rowIdx:t},n)}))},t)}))})}var g=["indigo","gray","green","blue","red","purple"];function A(){var e=Object(c.useContext)(u),t=e.setShowEventModal,n=e.daySelected,a=e.dispatchCalEvent,r=e.selectedEvent,l=Object(c.useState)(r?r.title:""),o=Object(s.a)(l,2),i=o[0],d=o[1],j=Object(c.useState)(r?r.description:""),f=Object(s.a)(j,2),x=f[0],m=f[1],h=Object(c.useState)(r?g.find((function(e){return e===r.label})):g[0]),O=Object(s.a)(h,2),p=O[0],v=O[1];return Object(b.jsx)("div",{className:"h-screen w-full fixed left-0 top-0 flex justify-center items-center",children:Object(b.jsxs)("form",{className:"bg-white rounded-lg shadow-2xl w-1/4",children:[Object(b.jsxs)("header",{className:"bg-gray-100 px-4 py-2 flex justify-between items-center",children:[Object(b.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"drag_handle"}),Object(b.jsxs)("div",{children:[r&&Object(b.jsx)("span",{onClick:function(){a({type:"delete",payload:r}),t(!1)},className:"material-icons-outlined text-gray-400 cursor-pointer",children:"delete"}),Object(b.jsx)("button",{onClick:function(){return t(!1)},children:Object(b.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"close"})})]})]}),Object(b.jsx)("div",{className:"p-3",children:Object(b.jsxs)("div",{className:"grid grid-cols-1/5 items-end gap-y-7",children:[Object(b.jsx)("div",{}),Object(b.jsx)("input",{type:"text",name:"title",placeholder:"Add title",value:i,required:!0,className:"pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500",onChange:function(e){return d(e.target.value)}}),Object(b.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"schedule"}),Object(b.jsx)("p",{children:n.format("dddd, MMMM DD")}),Object(b.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"segment"}),Object(b.jsx)("input",{type:"text",name:"description",placeholder:"Add a description",value:x,required:!0,className:"pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500",onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"bookmark_border"}),Object(b.jsx)("div",{className:"flex gap-x-2",children:g.map((function(e,t){return Object(b.jsx)("span",{onClick:function(){return v(e)},className:"bg-".concat(e,"-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"),children:p===e&&Object(b.jsx)("span",{className:"material-icons-outlined text-white text-sm",children:"check"})},t)}))})]})}),Object(b.jsx)("footer",{className:"flex justify-end border-t p-3 mt-5",children:Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var c={title:i,description:x,label:p,day:n.valueOf(),id:r?r.id:Date.now()};a(r?{type:"update",payload:c}:{type:"push",payload:c}),t(!1)},className:"bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white",children:"Save"})})]})})}var y=function(){var e=Object(c.useState)(d()),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(c.useContext)(u),o=l.monthIndex,i=l.showEventModal;return Object(c.useEffect)((function(){r(d(o))}),[o]),Object(b.jsxs)(a.a.Fragment,{children:[i&&Object(b.jsx)(A,{}),Object(b.jsxs)("div",{className:"h-screen flex flex-col",children:[Object(b.jsx)(j,{}),Object(b.jsxs)("div",{className:"flex flex-1",children:[Object(b.jsx)(O,{}),Object(b.jsx)(v,{month:n})]})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))},N=n(7);function C(e,t){var n=t.type,c=t.payload;switch(n){case"push":return[].concat(Object(N.a)(e),[c]);case"update":return e.map((function(e){return e.id===c.id?c:e}));case"delete":return e.filter((function(e){return e.id!==c.id}));default:throw new Error}}function M(){var e=localStorage.getItem("savedEvents");return e?JSON.parse(e):[]}function E(e){var t=Object(c.useState)(i()().month()),n=Object(s.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(null),o=Object(s.a)(l,2),d=o[0],j=o[1],f=Object(c.useState)(i()()),x=Object(s.a)(f,2),m=x[0],h=x[1],O=Object(c.useState)(!1),p=Object(s.a)(O,2),v=p[0],g=p[1],A=Object(c.useState)(null),y=Object(s.a)(A,2),w=y[0],E=y[1],S=Object(c.useState)([]),D=Object(s.a)(S,2),k=D[0],B=D[1],I=Object(c.useReducer)(C,[],M),Y=Object(s.a)(I,2),Q=Y[0],L=Y[1],U=Object(c.useMemo)((function(){return Q.filter((function(e){return k.filter((function(e){return e.checked})).map((function(e){return e.label})).includes(e.label)}))}),[Q,k]);return Object(c.useEffect)((function(){localStorage.setItem("savedEvents",JSON.stringify(Q))}),[Q]),Object(c.useEffect)((function(){B((function(e){return Object(N.a)(new Set(Q.map((function(e){return e.label})))).map((function(t){var n=e.find((function(e){return e.label===t}));return{label:t,checked:!n||n.checked}}))}))}),[Q]),Object(c.useEffect)((function(){null!==d&&r(d)}),[d]),Object(c.useEffect)((function(){v||E(null)}),[v]),Object(b.jsx)(u.Provider,{value:{monthIndex:a,setMonthIndex:r,smallCalendarMonth:d,setSmallCalendarMonth:j,daySelected:m,setDaySelected:h,showEventModal:v,setShowEventModal:g,dispatchCalEvent:L,selectedEvent:w,setSelectedEvent:E,savedEvents:Q,setLabels:B,labels:k,updateLabel:function(e){B(k.map((function(t){return t.label===e.label?e:t})))},filteredEvents:U},children:e.children})}l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E,{children:Object(b.jsx)(y,{})})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.fa99ea55.chunk.js.map