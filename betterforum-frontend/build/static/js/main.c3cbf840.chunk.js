(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"light":{"--accent":"rgba(128, 128, 128, 0.123)","--accent2":"rgba(128, 128, 128, 0.246)","--background":"white","--background2":"white","--text-color":"black","--text-color2":"grey","--font":"monospace"},"dark":{"--accent":"#4e4e4e","--accent2":"#3d3d3d","--background":"#1d1f21","--background2":"#282a2e","--text-color":"#ffffff","--text-color2":"#5f89ac","--font":"monospace"},"clean":{"--accent":"white","--accent2":"white","--background":"white","--background2":"white","--text-color":"black","--text-color2":"black","--font":"monospace"},"discord":{"--accent":"rgb(114, 137, 218)","--accent2":"#8ea1e1","--background":"#36393f","--background2":"#2f3136","--text-color":"#dcddde","--text-color2":"#72767d","--font":"Helvetica"},"hackernews_light":{"--accent":"#FF6600","--accent2":"#FF6600","--background":"white","--background2":"#F6F6EF","--text-color":"black","--text-color2":"grey","--font":"Verdana, Geneva, sans-serif"},"hackernews_dark":{"--accent":"#FF6600","--accent2":"#FF6600","--background":"black","--background2":"black","--text-color":"white","--text-color2":"#FF6600","--font":"Verdana, Geneva, sans-serif"},"custom_xnacly":{"--accent":"#9900ff","--accent2":"#9900ff","--background":"black","--background2":"black","--text-color":"white","--text-color2":"#9900ff","--font":"monospace"},"terminal":{"--accent":"#ac4142","--accent2":"#ff6265","--background":"#151515","--background2":"#212121","--text-color":"#cccccc","--text-color2":"#e5b567","--font":"monospace"},"old_school":{"--accent":"green","--accent2":"darkgreen","--background":"black","--background2":"black","--text-color":"white","--text-color2":" white","--font":"monospace"}}')},29:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),o=(n(29),n(2)),i=n.n(o),l=n(4),u=n(7),d=n(5),h=n(3),j=n(0),b=function(e){var t=e.text;return Object(j.jsx)("div",{className:"navbar_container",children:Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"div_left_align",children:Object(j.jsx)("h1",{className:"header1",children:t})})})})},m=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(h.a)(r,2),o=s[0],u=s[1],d=Object(c.useState)(""),b=Object(h.a)(d,2),m=b[0],f=b[1];function p(){return(p=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m&&o){e.next=2;break}return e.abrupt("return",alert("content or title missing"));case 2:return t={title:o,content:m},n&&(t.author=n),e.next=6,fetch("http://localhost:8080/thread/",{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}});case 6:window.location.reload();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"createThread_container",children:[Object(j.jsx)("input",{className:"input__",placeholder:"username",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("input",{className:"input__",placeholder:"*title",onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("textarea",{className:"input__",placeholder:"*content",onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("button",{className:"default_button",onClick:function(){return function(){return p.apply(this,arguments)}()},children:"Submit"})]})},f=function(e){var t=e.createdAt,n=e.title,c=e.content,a=e.author,r=e.id;return Object(j.jsxs)("div",{className:"thread",children:[Object(j.jsx)(u.b,{className:"Link ",id:"thread_href",to:"/thread/".concat(r),children:"#".concat(r.slice(0,6).toUpperCase())}),Object(j.jsx)("p",{className:"thread_title",children:n}),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{className:"thread_content",children:["--\x3e ",c.length>110?c.slice(0,110)+" [...]":c]}),Object(j.jsxs)("div",{className:"author_date_container",children:[Object(j.jsxs)("p",{className:"thread_date",children:["~",null!==a&&void 0!==a?a:"Anon"]}),Object(j.jsx)("p",{className:"thread_date",children:new Date(t).toString()})]})]})};var p=function(e){var t=e.threads;return(t=t.sort((function(e,t){return t.createdAt-e.createdAt}))).length?Object(j.jsx)("div",{className:"thread_div",children:t.map((function(e){return Object(j.jsx)(f,{id:e.id,title:e.title,createdAt:e.createdAt,content:e.content,author:e.author},e.id)}))}):Object(j.jsx)(j.Fragment,{children:"No Threads yet"})};var x=function(e){var t=e.hideHome,n=void 0!==t&&t,c=e.hideAdmin,a=void 0!==c&&c;return Object(j.jsxs)("div",{className:"top_bar_div",children:[Object(j.jsxs)("div",{className:"top_bar_items_left_container",children:[Object(j.jsxs)("span",{className:"Link_top_container_span",children:["[",Object(j.jsx)(u.b,{className:"Link_top",to:"/settings/",children:"Settings"}),"]"]}),!n&&Object(j.jsxs)("span",{className:"Link_top_container_span",children:["[",Object(j.jsx)(u.b,{className:"Link_top",to:"/",children:"Home"}),"]"]})]}),!a&&Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"Link_top_container_span",children:["[",Object(j.jsx)(u.b,{className:"Link_top",to:"/admin/",children:"Admin"}),"]"]})})]})},O=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(h.a)(r,2),o=s[0],u=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/thread");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{hideHome:!0}),Object(j.jsx)(b,{text:"Landingpage"}),Object(j.jsxs)("div",{className:"createThread_container",children:[Object(j.jsx)("hr",{id:"hr"}),Object(j.jsx)("button",{className:"default_button new_thread_button",onClick:function(){return u(!o)},children:"new Thread"}),o&&Object(j.jsx)(m,{})]}),Object(j.jsx)(p,{threads:n})]})};var v=function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("hr",{id:"hr"}),Object(j.jsx)("p",{children:"\xa9 xnacly, 2021"}),Object(j.jsxs)("div",{className:"vrhr_center_items",children:[Object(j.jsx)("a",{id:"footer_href",href:"https://github.com/xNaCly/betterforum",children:"Repo"}),Object(j.jsx)("a",{id:"footer_href",href:"https://github.com/xNaCly/betterforum/blob/master/SETUP.md",children:"Selfhost"}),Object(j.jsx)("div",{className:"vr"}),Object(j.jsx)("a",{id:"footer_href",href:"https://github.com/xNaCly",children:"Github"}),Object(j.jsx)("a",{id:"footer_href",href:"https://xnacly.github.io/",children:"Portfolio"}),Object(j.jsx)("a",{id:"footer_href",href:"mailto:xnacly@gmail.com",children:"Email"})]})]})},_=n(14),g=n.n(_),N=function(e){var t=e.commentData,n=e.threadId,c=e.parentId;return Object(j.jsx)(w,{commentData:t,threadId:n,parentId:c,inline:!0})};var k=function(e){var t=e.threadId,n=e.inline,a=void 0!==n&&n,r=e.parentId,s=void 0===r?null:r,o=Object(c.useState)(""),u=Object(h.a)(o,2),d=u[0],b=u[1],m=Object(c.useState)(""),f=Object(h.a)(m,2),p=f[0],x=f[1],O=Object(c.useState)(""),v=Object(h.a)(O,2),_=v[0],g=v[1];if(a){function N(){return(N=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_&&p){e.next=2;break}return e.abrupt("return",alert("content or title missing"));case 2:return n={title:p,content:_},d&&(n.author=d),e.next=6,fetch("http://localhost:8080/thread/".concat(t,"/comments/").concat(s),{method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}});case 6:window.location.reload();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:a?"input__":"input_",placeholder:"username",onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("input",{className:a?"input__":"input_",placeholder:"*title",onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("textarea",{className:a?"input__":"input_",placeholder:"*content",onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("button",{className:"default_button",onClick:function(){return N.apply(this,arguments)},children:"Submit"})]})}function k(){return(k=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_&&p){e.next=2;break}return e.abrupt("return",alert("content or title missing"));case 2:return n={title:p,content:_},d&&(n.author=d),e.next=6,fetch("http://localhost:8080/thread/".concat(t,"/comments"),{method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}});case 6:window.location.reload();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:"input_",placeholder:"username",onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("input",{className:"input_",placeholder:"*title",onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("textarea",{className:"input_",placeholder:"*content",onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("button",{className:"default_button",onClick:function(){return k.apply(this,arguments)},children:"Submit"})]})},w=function(e){var t=e.commentData,n=e.threadId,a=e.inline,r=void 0!==a&&a,s=e.parentId,o=void 0===s?null:s,i=Object(c.useState)(!1),l=Object(h.a)(i,2),d=l[0],b=l[1],m=Object(c.useState)(!1),f=Object(h.a)(m,2),p=f[0],x=f[1],O=t.author,v=t.createdAt,_=t.content,w=t.title,y=t.comments,S=t.id;return p?Object(j.jsxs)("div",{className:r?"thread_comment inline_comment":"thread_comment",children:[Object(j.jsx)(u.b,{className:r?"Link inline_comment_href":"Link",id:"comment_href",to:o?"/thread/".concat(n,"/comments/").concat(o,"/comments/").concat(S):"/thread/".concat(n,"/comments/").concat(S),children:"#".concat(S.slice(0,6).toUpperCase())}),!r&&Object(j.jsx)("button",{className:"toggle_button",onClick:function(){return x(!p)},children:"[-]"}),Object(j.jsx)("p",{className:"thread_title",children:w})]},S):Object(j.jsxs)("div",{className:r?"thread_comment inline_comment":"thread_comment",children:[Object(j.jsx)(u.b,{className:r?"Link inline_comment_href":"Link",id:"comment_href",to:o?"/thread/".concat(n,"/comments/").concat(o,"/comments/").concat(S):"/thread/".concat(n,"/comments/").concat(S),children:"#".concat(S.slice(0,6).toUpperCase())}),!r&&Object(j.jsx)("button",{className:"toggle_button",onClick:function(){return x(!p)},children:"[-]"}),Object(j.jsx)("p",{className:"thread_title",children:w}),Object(j.jsx)("hr",{}),_.replace(/\\n/g,"\n").split("\n").map((function(e){return Object(j.jsx)("p",{className:"thread_content",children:Object(j.jsx)(g.a,{children:e})},e.slice(0,6))})),Object(j.jsxs)("div",{className:"author_date_container",children:[Object(j.jsxs)("p",{className:"thread_date",children:["~",O]}),Object(j.jsx)("p",{className:"thread_date",children:new Date(v).toString()})]}),!r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"default_button",onClick:function(){return b(!d)},children:"Reply"}),d&&Object(j.jsx)("div",{className:"reply_comment_container",children:Object(j.jsx)(k,{threadId:n,inline:!0,parentId:S})})]}),y&&Object(j.jsxs)("div",{className:"inline_comment_div",children:[Object(j.jsx)("hr",{id:"hr"}),y.map((function(e){return Object(j.jsx)(N,{commentData:e,threadId:n,parentId:S},e.id)}))]})]},S)};var y=function(e){var t=e.id,n=Object(c.useState)([]),a=Object(h.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/thread/".concat(t,"/comments"));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,s(c.comments.sort((function(e,t){return t.createdAt-e.createdAt})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.length?Object(j.jsx)("div",{className:"comment",id:"threadExtended",children:r.map((function(e){return Object(j.jsx)(w,{commentData:e,threadId:t},e.id)}))}):Object(j.jsx)("p",{className:"thread_date",children:"No Comments found, create one"})};var S=function(){var e=window.location.pathname.split("/thread/")[1].replace("/",""),t=Object(c.useState)(),n=Object(h.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(h.a)(s,2),d=o[0],m=o[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/thread/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[]),a&&a.id?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(b,{text:a.title}),Object(j.jsxs)("div",{className:"thread",id:"threadExtended",children:[Object(j.jsx)(u.b,{className:"Link",id:"thread_href",to:window.location.href.split("/thread/")[1],children:"#"+a.id.slice(0,6)}),a.content.split("\n").map((function(e){return Object(j.jsx)("p",{className:"thread_content",children:Object(j.jsx)(g.a,{children:e})},e.slice(0,6))})),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"author_date_container",children:[Object(j.jsxs)("p",{className:"thread_date",children:["~",a.author]}),Object(j.jsx)("p",{className:"thread_date",children:new Date(a.createdAt).toString()})]}),Object(j.jsx)("button",{className:"default_button",onClick:function(){return m(!d)},children:"Reply"})]}),Object(j.jsx)("hr",{id:"seperator_thread_comments"}),d&&Object(j.jsx)(k,{threadId:e}),Object(j.jsx)(y,{id:a.id})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:"404 - Not Found"}),Object(j.jsxs)("span",{children:["Can not GET ",Object(j.jsxs)("span",{className:"thread_date",children:["/",e]})]})]})},C=n(11);var F=function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/theme");case 2:return t=e.sent,e.next=5,t.json();case 5:return t=e.sent,localStorage.setItem("theme-selected",t.theme),window.location.reload(),console.log(t),e.abrupt("return",t.theme);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=localStorage.getItem("theme-selected")||e(),n=C[t],a=Object.keys(n),r=Object(c.useState)("default"),s=Object(h.a)(r,2),o=(s[0],s[1]);function u(){return(u=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("theme-selected",t),o(t),window.location.reload();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"hundred_percent",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsxs)("div",{className:"settings_theme_select",children:[Object(j.jsx)("span",{children:"theme: "}),Object(j.jsx)("select",{className:"setting_select",value:localStorage.getItem("theme-selected"),onChange:function(e){return function(e){return u.apply(this,arguments)}(e.target.value)},children:Object.keys(C).map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})]}),Object(j.jsx)("div",{className:"settings_theme_display_values",children:a.map((function(e){return Object(j.jsxs)("p",{children:[e,":"," ",Object(j.jsx)("span",{style:{color:n[e],background:("--background"===e||"--background2"===e)&&n["--accent"]},children:n[e]})]},e)}))})]})]})};var I=function(){var e=Object(c.useState)(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/theme");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/theme",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({theme:n})});case 2:if(localStorage.getItem("theme-selected")===n){e.next=4;break}return e.abrupt("return");case 4:window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("theme-selected");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:t=e.sent,n=t.theme,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsx)("select",{className:"setting_select",value:n,onChange:function(e){return a(e.target.value)},children:Object.keys(C).map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))}),Object(j.jsx)("button",{className:"default_button",onClick:function(){return s()},children:"Submit"}),Object(j.jsx)("button",{className:"default_button",onClick:function(){return o()},children:"Reset Custom Theme"})]})},E=function(){return Object(j.jsx)("div",{children:"Bans"})},L=n(24),T=n(23),A=n.n(T),D=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()("http://localhost:8080/thread");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsx)("div",{children:n.map((function(e){return Object(j.jsx)(f,Object(L.a)({},e))}))})};var P=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(h.a)(r,2),o=s[0],i=s[1],l=Object(c.useState)(!1),u=Object(h.a)(l,2),d=u[0],b=u[1];return Object(j.jsxs)("div",{className:"admin_pannel",children:[Object(j.jsx)(x,{hideAdmin:!0}),Object(j.jsxs)("div",{className:"admin_container",children:[Object(j.jsxs)("div",{className:"side_pannel",children:[Object(j.jsx)("button",{className:"default_button",to:"/",onClick:function(){return a(!n)},children:"Settings"}),Object(j.jsx)("button",{className:"default_button",to:"/",onClick:function(){return i(!o)},children:"Bans"}),Object(j.jsx)("button",{className:"default_button",to:"/",onClick:function(){return b(!d)},children:"Manage Threads"})]}),Object(j.jsxs)("div",{className:"right_pannel",children:[n&&Object(j.jsx)(I,{}),o&&Object(j.jsx)(E,{}),d&&Object(j.jsx)(D,{})]})]})]})},J=(n(49),Object.keys(C));var U=function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/theme");case 2:return t=e.sent,e.next=5,t.json();case 5:return t=e.sent,e.abrupt("return",t.theme);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(i.a.mark((function t(){var n,c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=localStorage.getItem("theme-selected"),t.t0){t.next=5;break}return t.next=4,e();case 4:t.t0=t.sent;case 5:n=t.t0,c=J.includes(n)?n:"default",a=C[c],Object.keys(a).forEach((function(e){document.documentElement.style.setProperty(e,a[e])}));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(j.jsxs)(u.a,{children:[Object(j.jsx)(d.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(d.a,{path:"/settings/",exact:!0,component:F}),Object(j.jsx)(d.a,{path:"/admin/",exact:!0,component:P}),Object(j.jsx)(d.a,{path:"/thread/",component:S}),Object(j.jsx)(v,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),B()}},[[50,1,2]]]);
//# sourceMappingURL=main.c3cbf840.chunk.js.map