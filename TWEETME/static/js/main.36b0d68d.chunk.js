(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(14),a(7)),i=a.n(s),l=(a(15),a(2)),u=a(1);function m(e,t,a,n){var r;n&&(r=JSON.stringify(n));var c=new XMLHttpRequest,o="http://localhost:8080/api".concat(t);c.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var r=a[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");c.open(e,o),c.setRequestHeader("Content-Type","application/json"),s&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",s)),c.onload=function(){403===c.status&&c.response&&("Authentication credentials were not provided."===c.response.detail&&(window.location.href="/login?showLoginRequired=true"));a(c.response,c.status)},c.onerror=function(e){a({message:"The Request was an error"},400)},c.send(r)}var d=a(8);function f(e){var t=e.tweet,a=e.action,n=e.didPerformAction,c=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-group",s=a.display?a.display:"Action",i=function(e,t){200!==t&&201!==t||!n||n(e,t)},l="like"===a.type?"".concat(c," ").concat(s):s;return r.a.createElement("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,a){m("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,i)}}," ",l)}function w(e){var t=e.tweet;return t.parent?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded bg"},r.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),r.a.createElement(p,{hideActions:!0,className:" ",tweet:t.parent}))):null}function p(e){var t=e.tweet,a=e.didRetweet,c=e.hideActions,o=Object(n.useState)(e.tweet?e.tweet:null),s=Object(u.a)(o,2),i=s[0],l=s[1],m=e.className?e.className:"col-10 mx-auto col-md-6",p=window.loaction.pathname.match(Object(d.a)(/([0-9]+)/,{tweetid:1})),b=p?p.group.tweetId:-1,v="".concat(t.id)==="".concat(b),E=function(e,t){200===t?l(e):201===t&&a&&a(e)};return r.a.createElement("div",{className:m},r.a.createElement("div",null,r.a.createElement("p",null,t.id,"-",t.content),r.a.createElement(w,{tweet:t})),r.a.createElement("div",{className:"btn btn-group"},i&&!0!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{tweet:i,didPerformAction:E,action:{type:"like",display:"Likes"}}),r.a.createElement(f,{tweet:i,didPerformAction:E,action:{type:"unlike",display:"Unlikes"}}),r.a.createElement(f,{tweet:i,didPerformAction:E,action:{type:"retweet",display:"Retweet"}})),!0===v?null:r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="".concat(t.id)}},"View")))}function b(e){var t=Object(n.useState)(e.newTweets?e.newTweets:[]),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),d=i[0],f=i[1],w=Object(n.useState)(!1),b=Object(u.a)(w,2),v=b[0],E=b[1];Object(n.useEffect)((function(){var t=Object(l.a)(e.newTweets).concat(c);t.length!==d.length&&f(t)}),[e.newTweets,d,c]),Object(n.useEffect)((function(){if(!1===v){!function(e,t){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),m("GET",a,t)}(e.username,(function(e,t){200===t?(o(e),E(!0)):alert("there was an error")}))}}),[c,v,E,e.username]);var h=function(e){var t=Object(l.a)(c);t.unshift(e),o(t);var a=Object(l.a)(d);a.unshift(d),f(a)};return d.map((function(e,t){return r.a.createElement(p,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}))}function v(e){var t=r.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):alert("An error has occured")};return r.a.createElement("div",{className:e.className},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.current.value;m("POST","/tweets/create/",n,{content:a}),t.current.value=""}},r.a.createElement("textarea",{ref:t,required:!0,className:"col-12 mb-3 form-controll"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function E(e){var t="false"!==e.canTweet,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],s=c[1];return r.a.createElement("div",{className:e.className},!0===t&&r.a.createElement(v,{didTweet:function(e){var t=Object(l.a)(o);t.unshift(e),s(t)},className:"col-12 mb-3"}),r.a.createElement(b,Object.assign({newTweets:o},e)))}function h(e){var t=e.tweetid,a=Object(n.useState)(!1),c=Object(u.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)(null),l=Object(u.a)(i,2),d=l[0],f=l[1],w=function(e,t){200===t?f(e):alert("There was an error finding your tweet")};return Object(n.useEffect)((function(){var e;!1===o&&(e=w,m("GET","/tweets/".concat(t),e),s(!0))}),[t,o,s]),null===d?null:r.a.createElement(p,{tweet:d,className:e.className})}var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement(E,null)),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=document.getElementById("root");N&&o.a.render(r.a.createElement(g,null),N);var j=r.a.createElement,y=document.getElementById("TWEETME");y&&o.a.render(j(E,y.dataset),y),document.querySelectorAll(".TWEETME-detail").forEach((function(e){o.a.render(j(h,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.36b0d68d.chunk.js.map