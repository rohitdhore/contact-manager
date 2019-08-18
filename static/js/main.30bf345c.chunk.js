(window["webpackJsonpcontact-manager"]=window["webpackJsonpcontact-manager"]||[]).push([[0],{116:function(e,n,t){e.exports=t(173)},121:function(e,n,t){},122:function(e,n,t){},173:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),l=(t(121),t(29)),u=(t(122),t(214)),i=t(213),s=t(32),d=t(12),m=t(35),p=t(30),f=t(72),v=t.n(f),g=t(93),b=t(215),E=t(217),h=t(43),y=t(70),O=t.n(y),x=t(98),j=t.n(x),w=t(69),C=t.n(w),T=t(96),k=t.n(T),A=t(97),N=t.n(A);function R(){var e=Object(l.a)(["\n\tfont-size: 14px;\n\t","}\n"]);return R=function(){return e},e}var D=p.a.span(R(),function(e){return"error"===e.type?"color: #f50057":"color: #00a152"}),_=function(e){return r.a.createElement(D,{type:e.type},e.value)},S=t(3),W=t.n(S);function P(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return P=function(){return e},e}var H=p.a.div(P()),q=function(e){var n=e.id,t=e.label,a=e.name,c=e.value,o=e.errors;return r.a.createElement(H,null,r.a.createElement(b.a,{id:n,label:t,name:a,value:c,margin:"normal",autoComplete:"none",onChange:e.changeData(a),required:!0}),o[a].length>0&&r.a.createElement(_,{value:o[a],type:"error"}))},I=Object(h.makeStyles)(function(e){return{root:{display:"flex"},formControl:{marginTop:"30px"},group:{margin:e.spacing(1,0)}}});q.propTypes={name:W.a.string.isRequired,errors:W.a.object.isRequired,changeData:W.a.func.isRequired,value:W.a.string.isRequired};var L=function(e){var n=I(),t=e.name,a=e.errors,c=e.value;return r.a.createElement("div",{className:n.root},r.a.createElement(k.a,{component:"fieldset",className:n.formControl},r.a.createElement(N.a,{component:"legend"},"Gender *"),r.a.createElement(j.a,{"aria-label":"gender",name:"gender",className:n.group,value:c,onChange:e.changeData("gender")},r.a.createElement(C.a,{value:"female",control:r.a.createElement(O.a,null),label:"Female"}),r.a.createElement(C.a,{value:"male",control:r.a.createElement(O.a,null),label:"Male"})),a[t].length>0&&r.a.createElement(_,{value:a[t],type:"error"})))},z=t(71),F=t(25);function G(e,n,t){return{type:"ADD_CONTACT_WATCHER",payload:e,resolve:n,reject:t}}function J(e){return{type:"CONTACT_LIST_WATCHER",payload:e}}function B(e){return{type:"UPDATE_LIST_WATCHER",payload:e}}function U(e,n,t){return{type:"DELETE_CONTACT_WATCHER",payload:e,resolve:n,reject:t}}function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(t,!0).forEach(function(n){Object(s.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function $(){var e=Object(l.a)(["\n\tpadding: 20px 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return $=function(){return e},e}function M(){var e=Object(l.a)(["\n\tmargin: 10px 0;\n\tdisplay: flex; \n\tflex-direction: column;\n"]);return M=function(){return e},e}var V=p.a.div(M()),K=p.a.div($()),Q=Object(m.b)(null,function(e){return Object(F.b)({addContactWatcher:G,contactListWatcher:J},e)})(function(e){var n=Object(a.useState)({contact:{name:"",address:"",phone:"",email:"",gender:"",country:"",region:"",note:""},errors:{name:"",address:"",phone:"",email:"",gender:"",country:"",region:"",note:""},dirty:!1,newRecordAdded:!1}),t=Object(d.a)(n,2),c=t[0],o=t[1];Object(a.useEffect)(function(){e.contactListWatcher({})});var l=function(e,n){var t=c.errors,a="",r=e.length;switch(n){case"name":a=r<3||r>20?"Name must be min 3 characters or max 20 long!":"";break;case"address":a=r<3||r>100?"Address must be min 3 characters or max 100 long!":"";break;case"phone":a=r<10||r>10?"Enter valid 10 digit mobile no":"";break;case"email":a=z.validEmailRegex.test(e)?"":"Email is not valid!";break;case"gender":a=r<4?"Please select gender":"";break;case"country":a=r<1?"Select country":"";break;case"region":a=r<1?"Select region":"";break;case"note":a=r<3||r>20?"Note must be min 3 characters or max 20 long! ":""}t[n]=a;var l=c.contact;l[n]=e,o({errors:t,contact:l,dirty:!0})},u=function(e){return function(n){n.preventDefault(),l(n.target.value,e)}},i=function(){o({contact:{name:"",address:"",phone:"",email:"",gender:"",country:"",region:"",note:""},errors:{name:"",address:"",phone:"",email:"",gender:"",country:"",region:"",note:""}})},s=c.contact,m=s.name,p=s.address,f=s.phone,h=s.email,y=s.gender,O=s.country,x=s.region,j=s.note,w=c.errors,C=c.newRecordAdded;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("form",{noValidate:!0},r.a.createElement(q,{id:"standard-name",label:"Name",name:"name",value:m,errors:w,changeData:u}),r.a.createElement(q,{id:"standard-address",label:"Address",name:"address",value:p,errors:w,changeData:u}),r.a.createElement(q,{id:"standard-phone",label:"Phone",name:"phone",value:f,errors:w,changeData:u}),r.a.createElement(q,{id:"standard-email",label:"Email",name:"email",value:h,errors:w,changeData:u}),r.a.createElement("div",null,r.a.createElement(L,{name:"gender",errors:w,changeData:u,value:y}),r.a.createElement(V,null,r.a.createElement(b.a,{id:"country",label:"Country",value:O,select:!0,required:!0,onChange:u("country")},g.a.map(function(e,n){return r.a.createElement(E.a,{key:n,value:e},e[0])})),w.country.length>0&&r.a.createElement(_,{value:w.country,type:"error"}),r.a.createElement(b.a,{id:"region",label:"Region",value:x,select:!0,required:!0,onChange:u("region")},function(e){return e?e[2].split("|").map(function(e){var n=e.split("~"),t=Object(d.a)(n,2),a=t[0];t[1];return a}):[]}(O).map(function(e,n){return r.a.createElement(E.a,{key:n,value:e},e)})),w.region.length>0&&r.a.createElement(_,{value:w.region,type:"error"})),r.a.createElement(q,{id:"standard-note",label:"Note",name:"note",value:j,required:!0,errors:c.errors,changeData:u}),r.a.createElement(K,null,r.a.createElement(v.a,{variant:"contained",color:"secondary",component:"span",onClick:i},"Clear"),r.a.createElement(v.a,{variant:"contained",color:"primary",component:"span",onClick:function(){o(Z({},c,{newRecordAdded:!1})),Object.keys({name:"",address:"",phone:"",email:"",gender:"",country:"",region:"",note:""}).forEach(function(e){l(c.contact[e],e)}),Object(z.validateForm)(c.errors,c.dirty)?new Promise(function(n,t){e.addContactWatcher(c.contact,n,t)}).then(function(){o(Z({},c,{newRecordAdded:!1})),i()}).catch(function(e){console.log(e)}):console.error("Invalid Form")}},"Submit")),C&&r.a.createElement(_,{value:"New record added successfully!",type:"success"})))))}),Y=t(101),ee=t.n(Y),ne=t(103),te=t.n(ne),ae=t(99),re=t.n(ae),ce=t(102),oe=t.n(ce),le=t(73),ue=t.n(le),ie=t(100),se=t.n(ie),de=t(212),me=Object(h.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(re.a),pe=Object(h.withStyles)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(ue.a),fe=Object(h.withStyles)(function(e){return{root:{padding:"5px 0",minWidth:"35px",borderRadius:"10px"}}})(de.a),ve=Object(h.makeStyles)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:700}}});q.propTypes={tags:W.a.array.isRequired,records:W.a.array.isRequired};var ge=Object(m.b)(null,function(e){return Object(F.b)({deleteContactWatcher:U},e)})(function(e){var n=ve(),t=e.tags,a=e.records;return r.a.createElement(se.a,{className:n.root},r.a.createElement(ee.a,{className:n.table},r.a.createElement(oe.a,null,r.a.createElement(ue.a,null,t&&t.map(function(e,n){return r.a.createElement(me,{key:n},e)}))),r.a.createElement(te.a,null,a&&a.map(function(n,t){return r.a.createElement(pe,{key:t},r.a.createElement(me,{component:"th",scope:"row"},n.name),r.a.createElement(me,null,n.address),r.a.createElement(me,null,n.phone),r.a.createElement(me,null,n.email),r.a.createElement(me,null,n.gender),r.a.createElement(me,null,"".concat(n.country[0]," - ").concat(n.region)),r.a.createElement(me,null,n.note),r.a.createElement(me,null,r.a.createElement(fe,{variant:"contained",color:"secondary",onClick:function(){return function(n){console.log("deleting item"),new Promise(function(t,a){e.deleteContactWatcher({index:n},t,a)}).then(function(){}).catch(function(e){console.log(e)})}(t)}},"X")))}))))});function be(){var e=Object(l.a)(["\n  padding: 20px;\n  margin: 10px;\n"]);return be=function(){return e},e}function Ee(){var e=Object(l.a)(["\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #ccc;\n"]);return Ee=function(){return e},e}var he=Object(i.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}),ye=p.a.div(Ee()),Oe=Object(p.a)(ge)(be()),xe=Object(m.b)(function(e){return{contacts:e.contact.list}},null)(function(e){var n=he();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:n.root},r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement(ye,null,r.a.createElement("h1",null,"Add new contact"),r.a.createElement(Q,null))),r.a.createElement(u.a,{item:!0,xs:12,sm:8},r.a.createElement(Oe,{tags:["Name","Address","Phone","Email","Gender","Country","Note",""],records:e.contacts})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=t(105),we=t(104),Ce=t(216),Te=Object(Ce.a)({UPDATE_LIST_WATCHER:function(e,n){var t=n.payload;return Object.assign({},e,{list:t})},CONTACT_LIST_WATCHER:function(e,n){var t=n.payload;return Object.assign({},e,{list:t})}},{list:[]}),ke=Object(F.c)({contact:Te}),Ae=t(15),Ne=t.n(Ae),Re=t(20),De=function(e){return JSON.parse(localStorage.getItem(e))},_e=function(e,n){localStorage.setItem(e,JSON.stringify(n))};function Se(){return De("contacts")||[]}function We(e){var n=De("contacts")||[];return n.push(e),_e("contacts",n),n}function Pe(e){return[]}function He(e){var n=De("contacts")||[];return n.splice(e,1),_e("contacts",n),n}function qe(e){return[]}var Ie=Ne.a.mark($e),Le=Ne.a.mark(Me),ze=Ne.a.mark(Ve),Fe=Ne.a.mark(Ke),Ge=Ne.a.mark(Qe),Je=Ne.a.mark(Ye),Be=Ne.a.mark(en),Ue=Ne.a.mark(nn),Xe=Ne.a.mark(tn),Ze=Ne.a.mark(an);function $e(e){var n;return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Re.b)(Se);case 3:return n=e.sent,e.next=6,Object(Re.c)(B(n));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},Ie,null,[[0,8]])}function Me(e){var n;return Ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Re.b)(We,e.payload);case 3:return n=t.sent,t.next=6,Object(Re.c)(J(n));case 6:e.resolve(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),e.reject(t.t0);case 13:case"end":return t.stop()}},Le,null,[[0,9]])}function Ve(e){var n,t;return Ne.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Re.b)(Pe,e);case 3:return n=a.sent,t=n.data,a.next=7,Object(Re.c)(J(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},ze,null,[[0,9]])}function Ke(e){var n;return Ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Re.b)(qe,e.payload);case 3:n=t.sent,n.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},Fe,null,[[0,7]])}function Qe(e){var n;return Ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Re.b)(He,e.payload.index);case 3:return n=t.sent,t.next=6,Object(Re.c)(J(n));case 6:e.resolve(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),e.reject(t.t0);case 13:case"end":return t.stop()}},Ge,null,[[0,9]])}function Ye(){return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)("CONTACT_LIST_WATCHER",$e);case 2:case"end":return e.stop()}},Je)}function en(){return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)("ADD_CONTACT_WATCHER",Me);case 2:case"end":return e.stop()}},Be)}function nn(){return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)("EDIT_CONTACT_WATCHER",Ve);case 2:case"end":return e.stop()}},Ue)}function tn(){return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)("GET_CONTACT_WATCHER",Ke);case 2:case"end":return e.stop()}},Xe)}function an(){return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)("DELETE_CONTACT_WATCHER",Qe);case 2:case"end":return e.stop()}},Ze)}var rn=Ne.a.mark(cn);function cn(){return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.a)([Ye(),en(),nn(),tn(),an()]);case 2:case"end":return e.stop()}},rn)}var on=Object(je.a)(),ln=Object(F.e)(ke,Object(F.a)(on,we.logger));on.run(cn),o.a.render(r.a.createElement(m.a,{store:ln},r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,n){var t=RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);e.exports={validateForm:function(e,n){if(n){var t=!0;return Object.values(e).forEach(function(e){console.log(e),e.length>0&&(t=!1)}),t}return!1},validEmailRegex:t}}},[[116,1,2]]]);
//# sourceMappingURL=main.30bf345c.chunk.js.map