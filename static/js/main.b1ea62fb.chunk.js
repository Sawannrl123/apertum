(this.webpackJsonpapertum=this.webpackJsonpapertum||[]).push([[0],{75:function(e,n,t){e.exports=t(88)},88:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),c=t.n(o),i=t(41),s=t(26),l=t(134),u=t(21),m=t.n(u),g=t(32),d=t(28);function p(){return f.apply(this,arguments)}function f(){return(f=Object(g.a)(m.a.mark((function e(){var n,t,a,r,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},a=o.length>2&&void 0!==o[2]?o[2]:"",e.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)});case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,n,t){var a=new Date;a.setTime(a.getTime()+24*t*60*60*1e3);var r="expires="+a.toUTCString();document.cookie=e+"="+n+"; "+r}var v=r.a.createContext({users:[],setUsers:null,loginError:null,setLoginError:null,isLoggedIn:!1,setIsLoggegIn:null,handleLogin:null,isLoading:!1,setIsLoading:null,token:null,setToken:null}),b=function(e){var n=r.a.useState(!1),t=Object(d.a)(n,2),o=t[0],c=t[1],i=r.a.useState([]),s=Object(d.a)(i,2),l=s[0],u=s[1],f=r.a.useState(null),h=Object(d.a)(f,2),b=h[0],E=h[1],w=r.a.useState(!1),k=Object(d.a)(w,2),I=k[0],L=k[1],j=r.a.useState(null),O=Object(d.a)(j,2),x=O[0],y=O[1];Object(a.useEffect)((function(){L(!0);var e=function(e){for(var n=e+"=",t=document.cookie.split(";"),a=0;a<t.length;a++){for(var r=t[a];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}("token");e&&(c(!0),y(e)),L(!1)}),[]);var S=function(){var e=Object(g.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("https://apertum-interview.herokuapp.com/api/user/login",{accountId:n.accountId,pswd:n.password});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),E(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{isLoggedIn:o,setIsLoggegIn:c,users:l,setUsers:u,loginError:b,setLoginError:E,handleLogin:S,isLoading:I,setIsLoading:L,token:x,setToken:y}},e.children)},E=t(48),w=function(){return Object(a.useContext)(v)},k=function(){return{isLoading:w().isLoading,setIsLoading:w().setIsLoading,isLoggedIn:w().isLoggedIn,setIsLoggegIn:w().setIsLoggegIn,users:w().users,setUsers:w().setUsers,loginError:w().loginError,setLoginError:w().setLoginError,handleLogin:w().handleLogin,token:w().token,setToken:w().setToken}},I=function(e){var n=e.component,t=Object(E.a)(e,["component"]),a=k().isLoggedIn;return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return a?r.a.createElement(n,e):r.a.createElement(s.a,{to:"/apertum/login"})}}))},L=t(125),j=t(127),O=t(129),x=t(130),y=t(131),S=Object(L.a)((function(e){return{root:{backgroundColor:e.palette.common.white,color:"#04ba5f",padding:"10px 0"},link:{fontSize:0},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},button:{fontWeight:600}}})),C=function(){var e=S(),n=k(),t=n.isLoggedIn,a=n.setIsLoggegIn,o=n.setToken;return r.a.createElement(j.a,{position:"static",className:e.root},r.a.createElement(O.a,{className:e.toolbar},r.a.createElement(x.a,{color:"inherit",href:"https://apertumo.com/",className:e.link},r.a.createElement("img",{src:"/apertum/logo.png",alt:"Apertum Online",height:"60"})),t&&r.a.createElement(y.a,{color:"inherit",className:e.button,onClick:function(){a(!1),o(null),h("token",null,-10)}},"Logout")))},T=function(e){var n=e.component,t=Object(E.a)(e,["component"]),a=k().isLoggedIn;return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return a?r.a.createElement(s.a,{to:"/apertum"}):r.a.createElement(n,e)}}))},N=t(139),W=t(132),A=Object(L.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),U=function(){var e=A(),n=k().isLoading;return n?r.a.createElement(N.a,{className:e.backdrop,open:n},r.a.createElement(W.a,{color:"inherit"})):null},z=function(){return r.a.createElement("p",null,"Users")},P=t(49),R=t(140),B=t(136),D=t(135),J=t(138),q=t(137),F=t(61),_=t.n(F),M=t(62),V=t(133);function $(){return r.a.createElement(M.a,{variant:"body2",color:"textSecondary",align:"center"},"\xa9 2019 ",r.a.createElement(x.a,{color:"inherit",href:"https://apertumo.com/"},"Apertum Online")," All rights reserved.")}var G=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),H=function(){var e=Object(a.useState)({accountId:"",password:"",remember:!1}),n=Object(d.a)(e,2),t=n[0],o=n[1],c=k(),i=c.setIsLoading,s=c.loginError,u=c.handleLogin,p=c.setIsLoggegIn,f=c.setLoginError,v=c.setToken,b=G(),E=function(){var e=Object(g.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i(!0),e.next=4,u(t);case 4:(a=e.sent).error_message?f({message:a.error_message}):(v(a.token),t.remember?h("token",a.token,365):h("token",a.token,1),p(!0)),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(V.a,{component:"main",maxWidth:"xs"},r.a.createElement(l.a,null),r.a.createElement("div",{className:b.paper},r.a.createElement(R.a,{className:b.avatar},r.a.createElement(_.a,null)),r.a.createElement(M.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:b.form,noValidate:!0,onSubmit:E},r.a.createElement(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"accountId",label:"Account Id",name:"email",type:"text",autoFocus:!0,value:t.accountId,onChange:function(e){o(Object(P.a)({},t,{accountId:e.target.value}))}}),r.a.createElement(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:t.password,onChange:function(e){o(Object(P.a)({},t,{password:e.target.value}))}}),r.a.createElement(D.a,{control:r.a.createElement(J.a,{value:"remember",color:"primary",checked:t.remember,onChange:function(e){o(Object(P.a)({},t,{remember:!t.remember}))}}),label:"Remember me"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,size:"large",variant:"contained",color:"primary",className:b.submit},"Sign In"),r.a.createElement(M.a,{variant:"caption",color:"error"},null===s||void 0===s?void 0:s.message))),r.a.createElement(q.a,{mt:8},r.a.createElement($,null)))},K=function(){return r.a.createElement("p",null,"Not Found")};var Q=function(){return r.a.createElement(b,null,r.a.createElement(l.a,null),r.a.createElement(C,null),r.a.createElement(U,null),r.a.createElement(i.a,null,r.a.createElement(s.d,null,r.a.createElement(I,{component:z,path:"/apertum",exact:!0}),r.a.createElement(T,{component:H,path:"/apertum/login",exact:!0}),r.a.createElement(s.b,{component:K}))))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/apertum",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/apertum","/service-worker.js");X?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(n,e)}))}}()}},[[75,1,2]]]);
//# sourceMappingURL=main.b1ea62fb.chunk.js.map