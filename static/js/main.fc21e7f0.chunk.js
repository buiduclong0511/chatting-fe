(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{142:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),i=t(18),a=t.n(i),s=(t(75),t(3)),o=t(8),u=t(9),l=t(2),d=(t(80),t(39)),b=t(6),p=t.n(b),h=t(16),j=t(4),f=t(64),x=t.n(f),m=function(n){return K.post("/api/auth/login",n)},v=function(n){return K.post("/api/auth/register",n)},g=function(n){var e="/api/users?q="+n;return K.get(e)},O=function(n){return K.post("/api/conversations",n)},w=function(n){var e="/api/conversations/?senderId="+n;return K.get(e)},k=function(n){var e="/api/messages/"+n;return K.get(e)},C=function(n){return K.post("/api/messages",n)},N=t(99),y=x.a.create({baseURL:"https://chatting-be.herokuapp.com",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:function(n){return N.stringify(n)}});y.interceptors.response.use((function(n){return n&&n.data,n}),(function(n){throw n}));var S,I,_,L,R,M,T,E,F,B,z,H,K=y,P=t(1),U=function(n){var e=n.children,t=void 0===e?null:e,r=n.id,c=void 0===r?"":r,i=n.value,a=void 0===i?"":i,s=n.placeholder,o=void 0===s?"":s,u=n.type,l=void 0===u?"text":u,d=n.onFocus,b=void 0===d?function(){}:d,p=n.onBlur,h=void 0===p?function(){}:p,j=n.onChange,f=void 0===j?function(){}:j;return Object(P.jsxs)(A,{children:[Object(P.jsx)("label",{htmlFor:c,className:"inputLabel",children:t}),Object(P.jsx)("input",{value:a,type:l,id:c,className:"input",placeholder:o,onChange:f,onFocus:b,onBlur:h})]})},A=l.b.div(S||(S=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-top: 10px;\n\n    .inputLabel {\n        position: absolute;\n        top: 50%;\n        left: 5px;\n        transform: translateY(-50%);\n    }\n\n    .input {\n        background-color: transparent;\n        color: #fff;\n        border: 1px solid #fff;\n        outline: none;\n        padding: 10px 10px 10px 25px;\n\n        &::placeholder {\n            color: #ffffffbc;\n        }\n    }\n"]))),D=function(n){var e=n.title,t=void 0===e?"":e,r=n.onClick,c=void 0===r?function(){}:r;return Object(P.jsx)(W,{children:Object(P.jsx)("button",{className:"button",onClick:c,children:t})})},W=l.b.div(I||(I=Object(s.a)(["\n    margin-top: 10px;\n    width: 100%;\n\n    .button {\n        background-color: #341647;\n        color: #fff;\n        border: 1px solid #fff;\n        width: 100%;\n        padding: 10px 0;\n        cursor: pointer;\n        transition: 300ms;\n\n        &:hover {\n            background-color: #ee7b0f;\n        }\n    }\n"]))),q=t(5),G=t(15),J=Object(G.createAsyncThunk)("auth/login",function(){var n=Object(h.a)(p.a.mark((function n(e,t){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,m(e);case 4:return c=n.sent,n.abrupt("return",c.data.userInfo[0]);case 8:return n.prev=8,n.t0=n.catch(1),u.b.error("\u0110\u0103ng nh\u1eadp th\u1ea5t b\u1ea1i"),n.abrupt("return",r(n.t0.response.data));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),V=Object(G.createAsyncThunk)("auth/register",function(){var n=Object(h.a)(p.a.mark((function n(e,t){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,v(e);case 4:return c=n.sent,n.abrupt("return",c.data.userInfo[0]);case 8:return n.prev=8,n.t0=n.catch(1),409===n.t0.response.status&&u.b.error("Email \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u0103ng k\xfd"),n.abrupt("return",r(n.t0.response.data));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),X=Object(G.createSlice)({name:"auth",initialState:{userInfo:null,isLoading:!1},reducers:{logout:function(n){n.userInfo=null,n.isLoading=!1}},extraReducers:function(n){n.addCase(J.fulfilled,(function(n,e){n.userInfo=e.payload,n.isLoading=!1,u.b.success("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng")})),n.addCase(J.pending,(function(n){n.isLoading=!0})),n.addCase(V.fulfilled,(function(n,e){n.userInfo=e.payload,n.isLoading=!1,u.b.success("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng")})),n.addCase(V.pending,(function(n){n.isLoading=!0}))}}),Z=function(n){return n.auth},Y=X.actions.logout,$=X.reducer,Q=(0,t(15).createSlice)({name:"conversation",initialState:{conversations:[]},reducers:{setConversations:function(n,e){n.conversations=e.payload}}}),nn=(Q.actions.setConversations,Q.reducer),en=Object(q.d)({auth:$,conversation:nn}),tn=function(n){var e=n.username,t=void 0===e?"":e,r=n.newestMessage,c=void 0===r?"B\u1eaft \u0111\u1ea7u cu\u1ed9c tr\xf2 chuy\u1ec7n":r,i=n.onClick,a=void 0===i?function(){}:i;return Object(P.jsxs)(rn,{onClick:a,children:[Object(P.jsx)("p",{className:"username",children:t}),Object(P.jsx)("p",{className:"newestMessage",children:c})]})},rn=l.b.div(_||(_=Object(s.a)(["\n    padding: 0 10px;\n    border-bottom: 1px solid #ccc;\n    cursor: pointer;\n\n    .username {\n        padding-top: 10px;\n        padding-bottom: 5px;\n        font-weight: 700;\n        font-size: 20px;\n    }\n\n    .newestMessage {\n        max-width: 150px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding-bottom: 10px;\n        color: #ccc;\n        white-space: nowrap;\n    }\n"]))),cn=function(n){var e=n.data,t=void 0===e?{}:e,r=n.onclick,c=void 0===r?function(){}:r;return Object(P.jsxs)(an,{onClick:c,children:[Object(P.jsx)("div",{className:"username",children:t.username}),Object(P.jsxs)("p",{className:"userId",children:["ID: ",t._id]}),Object(P.jsxs)("p",{className:"userId",children:["Email: ",t.email]})]})},an=l.b.div(L||(L=Object(s.a)(["\n    padding: 10px;\n    border-bottom: 1px solid #3f3d3d;\n    cursor: pointer;\n\n    .username {\n        padding: 5px 0;\n        font-weight: 700;\n    }\n\n    .userId {\n        font-size: 13px;\n    }\n"]))),sn=function(n){var e=n.searchResult,t=void 0===e?[]:e,r=n.onCreateConversation,c=void 0===r?function(){}:r;return Object(P.jsx)(on,{children:t.length?t.map((function(n){return Object(P.jsx)(cn,{data:n,onclick:function(){return c(n._id)}},n._id)})):Object(P.jsx)("p",{children:"no user"})})},on=l.b.div(R||(R=Object(s.a)(["\n    background-color: #242020;\n    width: 100%;\n    min-height: 400px;\n"]))),un=function(n){var e=n.isShowSearchResult,t=void 0!==e&&e,r=n.keySearch,c=void 0===r?"":r,i=n.searchResult,a=void 0===i?[]:i,s=n.onCreateConversation,u=n.conversations,l=void 0===u?[]:u,d=n.onShowSearchResult,b=void 0===d?function(){}:d,p=n.onHiddenSearchResult,h=void 0===p?function(){}:p,j=n.onToggleShowProfile,f=void 0===j?function(){}:j,x=n.onChangeKeySearch,m=void 0===x?function(){}:x,v=n.onClickConversation,g=void 0===v?function(){}:v,O=Object(o.c)(Z).userInfo;return Object(P.jsxs)(ln,{children:[Object(P.jsxs)("div",{className:"searchUser",children:[Object(P.jsx)("div",{className:"userInfo",onClick:f,children:Object(P.jsx)("ion-icon",{name:"person-circle"})}),Object(P.jsxs)("div",{className:"searchBox",children:[Object(P.jsx)(U,{placeholder:"Nh\u1eadp id",onFocus:b,onBlur:h,value:c,onChange:m,children:Object(P.jsx)("ion-icon",{name:"search-outline"})}),t?Object(P.jsx)("div",{className:"searchResult",children:Object(P.jsx)(sn,{searchResult:a,onCreateConversation:s})}):Object(P.jsx)(P.Fragment,{})]})]}),Object(P.jsx)("div",{className:"listFriends",children:l.map((function(n){var e=n.members.find((function(n){return n._id!==O._id})).username;return Object(P.jsx)(tn,{username:e,newestMessage:"newest message",onClick:function(){return g(n)}},n._id)}))})]})},ln=l.b.div(M||(M=Object(s.a)(["\n    min-height: 100vh;\n    background-color: #201f22;\n    display: flex;\n    flex-direction: column;\n\n    .searchUser {\n        border-bottom: 1px solid #ccc;\n        height: 80px;\n        padding: 10px;\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        .userInfo {\n            cursor: pointer;\n\n            ion-icon {\n                font-size: 30px;\n            }\n        }\n\n        .searchBox {\n            flex: 1;\n            margin-left: 10px;\n\n            div {\n                margin-top: 0;\n            }\n\n            .searchResult {\n                position: absolute;\n                top: 100%;\n                left: 0;\n                width: 100%;\n            }\n        }\n    }\n\n    .listFriends {\n        overflow-y: scroll;\n        height: calc(100vh - 80px);\n\n        /* width */\n        &::-webkit-scrollbar {\n            width: 5px;\n        }\n        \n        /* Track */\n        &::-webkit-scrollbar-track {\n            background: #ccc; \n        }\n        \n        /* Handle */\n        &::-webkit-scrollbar-thumb {\n            background: #888; \n        }\n        \n        /* Handle on hover */\n        &::-webkit-scrollbar-thumb:hover {\n            background: #555; \n        }\n    }\n"]))),dn=function(n){var e=n.username,t=void 0===e?"":e,r=n.id,c=void 0===r?"":r;return Object(P.jsx)(bn,{children:Object(P.jsxs)("div",{className:"content",children:[Object(P.jsx)("p",{className:"welcomeHeading",children:"Welcome!"}),Object(P.jsx)("p",{className:"username",children:t}),Object(P.jsxs)("p",{className:"username",children:["ID c\u1ee7a b\u1ea1n l\xe0: ",c]}),Object(P.jsx)("p",{className:"username",children:"Chia s\u1ebb ID c\u1ee7a b\u1ea1n cho b\u1ea1n b\xe8 :v"})]})})},bn=l.b.div(T||(T=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n\n    .welcomeHeading {\n        margin-top: 100px;\n        font-size: 50px;\n    }\n\n    .username {\n        font-size: 25px;\n        font-weight: 700;\n    }\n"]))),pn=function(n){var e=n.isMe,t=void 0!==e&&e,r=n.username,c=void 0===r?"":r,i=n.message,a=void 0===i?"":i;return Object(P.jsx)(hn,{isMe:t,children:t?Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("div",{className:"message",children:a})}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"username",children:c}),Object(P.jsx)("div",{className:"message",children:a})]})})},hn=l.b.div(E||(E=Object(s.a)(["\n    display: flex;\n    justify-content: ",";\n    margin: 20px 0;\n\n    .message {\n        max-width: 400px;\n        background-color: #4e4a4a;\n        padding: 10px;\n        border-radius: 8px;\n        color: #fff;\n        margin: 0 5px;\n    }\n\n    .username {\n        padding: 5px;\n    }\n"])),(function(n){return n.isMe?"flex-end":"flex-start"})),jn=function(n){var e=n.onClose,t=void 0===e?function(){}:e,r=n.onLogout,c=void 0===r?function(){}:r,i=Object(o.c)(Z).userInfo;return Object(P.jsxs)(fn,{children:[Object(P.jsx)("div",{className:"overlay"}),Object(P.jsxs)("div",{className:"profileMain",children:[Object(P.jsxs)("p",{className:"username",children:["Username: ",i.username]}),Object(P.jsxs)("p",{className:"id",children:["ID: ",i._id]}),Object(P.jsx)("div",{className:"buttonOK",children:Object(P.jsx)(D,{title:"OK",onClick:t})}),Object(P.jsx)("div",{className:"buttonLogout",children:Object(P.jsx)(D,{title:"Logout",onClick:c})})]})]})},fn=l.b.div(F||(F=Object(s.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);;\n    }\n\n    .profileMain {\n        z-index: 1;\n        background-color: #381c38;\n        width: 400px;\n        height: 300px;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        padding-top: 50px;\n        border-radius: 15px;\n\n        .username {\n            font-size: 23px;\n            padding-bottom: 10px;\n        }\n\n        .buttonOK {\n            padding-top: 60px;\n            width: 200px;\n        }\n\n        .buttonLogout {\n            width: 200px;\n        }\n    }\n"]))),xn=t(68),mn=Object(xn.io)("https://chatting-socket.herokuapp.com"),vn=function(n){return new Promise((function(e){return setTimeout(e,n)}))},gn=function(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())},On=function(){var n=Object(r.useState)(!0),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(!1),a=Object(j.a)(i,2),s=a[0],u=a[1],l=Object(r.useState)([]),b=Object(j.a)(l,2),f=b[0],x=b[1],m=Object(r.useState)(!1),v=Object(j.a)(m,2),N=v[0],y=v[1],S=Object(r.useState)(""),I=Object(j.a)(S,2),_=I[0],L=I[1],R=Object(r.useState)([]),M=Object(j.a)(R,2),T=M[0],E=M[1],F=Object(r.useState)(null),B=Object(j.a)(F,2),z=B[0],H=B[1],K=Object(r.useState)([]),U=Object(j.a)(K,2),A=U[0],D=U[1],W=Object(r.useState)(""),q=Object(j.a)(W,2),G=q[0],J=q[1],V=Object(r.useState)(null),X=Object(j.a)(V,2),$=X[0],Q=X[1],nn=Object(r.useState)([]),en=Object(j.a)(nn,2),tn=(en[0],en[1]),rn=Object(r.useRef)(null),cn=Object(r.useState)(!1),an=Object(j.a)(cn,2),sn=an[0],on=an[1],ln=Object(r.useState)(!1),bn=Object(j.a)(ln,2),hn=bn[0],fn=bn[1],xn=Object(o.b)(),gn=Object(o.c)(Z).userInfo,On=function(){var n=Object(h.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w(gn._id);case 3:e=n.sent,E(e.data.conversations),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),kn=function(){var n=Object(h.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!z){n.next=6;break}return n.next=4,k(z._id);case 4:e=n.sent,D(e.data.messages);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){On(),mn.emit("register",{userId:gn._id}),mn.on("serverSendMessage",(function(n){Q({sender:n.sender,text:n.text}),fn(!0)})),mn.on("updateUserOnline",(function(n){tn(n)}))}),[]),Object(r.useEffect)((function(){hn&&(On(),fn(!1))}),[hn]),Object(r.useEffect)((function(){kn()}),[z]),Object(r.useEffect)((function(){$&&z&&function(){var n=z.members.find((function(n){return n._id!==gn._id}))._id;$.sender._id===n&&D([].concat(Object(d.a)(A),[$]))}()}),[$]),Object(r.useEffect)((function(){rn.current&&!sn&&(rn.current.scrollTop=rn.current.scrollHeight)}),[A]),Object(r.useEffect)((function(){var n=function(n){n.target.scrollTop>=n.target.scrollHeight-n.target.offsetHeight-50?on(!1):on(!0)};return rn.current&&rn.current.addEventListener("scroll",n),function(){rn.current&&rn.current.removeEventListener("scroll",n)}}),[rn.current]),function(n,e,t){var c=Object(r.useCallback)(n,t);Object(r.useEffect)((function(){var n=setTimeout((function(){c()}),e);return function(){clearTimeout(n)}}),[c,e])}((function(){_.trim()&&g(_).then((function(n){x(n.data.users)})).catch((function(n){console.log(n),x([])}))}),800,[_]);var Cn=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,vn(200);case 2:u(!1);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Nn=function(){y(!N)},yn=function(){var n=Object(h.a)(p.a.mark((function n(){var e,t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!G.trim()){n.next=9;break}return e={conversationId:z._id,senderId:gn._id,text:G},n.next=5,C(e);case 5:t=z.members.find((function(n){return n._id!==gn._id})),mn.emit("clientSendMessage",{sender:gn,receiver:t,text:G}),D([].concat(Object(d.a)(A),[{sender:{_id:gn._id},text:G}])),J("");case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return Object(P.jsxs)(wn,{children:[N&&Object(P.jsx)(jn,{onClose:Nn,onLogout:function(){xn(Y())}}),Object(P.jsx)("div",{className:"sidebar",children:Object(P.jsx)(un,{onShowSearchResult:function(){u(!0)},onHiddenSearchResult:Cn,isShowSearchResult:s,onToggleShowProfile:Nn,keySearch:_,onChangeKeySearch:function(n){L(n.target.value)},searchResult:f,onCreateConversation:function(n){O({senderId:gn._id,receiverId:n}).then((function(n){console.log(n.data.conversation),On(),H(n.data.conversation[0]),c(!1)}))},conversations:T,onClickConversation:function(n){c(!1),H(n)}})}),Object(P.jsx)("div",{className:"main",children:t?Object(P.jsx)(dn,{username:gn.username,id:gn._id}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"header",children:z.members.find((function(n){return n._id!==gn._id})).username}),Object(P.jsx)("div",{className:"listMessage",ref:rn,children:A.map((function(n,e){var t=gn._id===n.sender._id;return Object(P.jsx)(pn,{isMe:t,username:n.sender.username,message:n.text},n._id||e)}))}),Object(P.jsxs)("div",{className:"inputMessage",children:[Object(P.jsx)("div",{className:"input",children:Object(P.jsx)("input",{type:"text",value:G,onChange:function(n){J(n.target.value)},onKeyUp:function(n){13===n.keyCode&&yn()}})}),Object(P.jsx)("div",{className:"btn",children:Object(P.jsx)("button",{className:"sendBtn",onClick:yn,children:Object(P.jsx)("ion-icon",{name:"send-outline"})})})]})]})})]})},wn=l.b.div(B||(B=Object(s.a)(["\n    display: flex;\n    min-height: 100vh;\n\n    .sidebar {\n        flex: 1;\n    }\n\n    .main {\n        flex: 4;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n\n        .header {\n            padding: 20px;\n            border-bottom: 1px solid #000;\n            box-shadow: 0 0 5px #000;\n        }\n\n        .listMessage {\n            flex: 1;\n            overflow-y: scroll;\n            padding-right: 10px;\n\n            /* width */\n            &::-webkit-scrollbar {\n                width: 5px;\n            }\n            \n            /* Track */\n            &::-webkit-scrollbar-track {\n                background: #ccc; \n            }\n            \n            /* Handle */\n            &::-webkit-scrollbar-thumb {\n                background: #888; \n            }\n            \n            /* Handle on hover */\n            &::-webkit-scrollbar-thumb:hover {\n                background: #555; \n            }\n        }\n\n        .inputMessage {\n            display: flex;\n            background-color: #3b383d;\n            border-top: 1px solid #ccc;\n\n            .input {\n                flex: 1;\n\n                input {\n                    background-color: transparent;\n                    width: 100%;\n                    border: none;\n                    outline: none;\n                    padding: 20px;\n                    color: #fff;\n                    font-size: 18px;\n                }\n            }\n\n            .btn {\n                width: 80px;\n\n                button {\n                    width: 100%;\n                    height: 100%;\n                    cursor: pointer;\n                    background-color: transparent;\n                    border: none;\n                    border-left: 1px solid #ccc;\n\n                    ion-icon {\n                        font-size: 25px;\n                        color: #fff;\n                    }\n                }\n            }\n        }\n    }\n"]))),kn=t(14),Cn=function(){var n=Object(o.b)(),e=Object(r.useState)({email:"",username:"",password:""}),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)({email:"",password:""}),s=Object(j.a)(a,2),l=s[0],d=s[1];return Object(P.jsxs)(Nn,{children:[Object(P.jsxs)("div",{className:"form",children:[Object(P.jsx)("h2",{className:"heading",children:"\u0110\u0103ng k\xfd"}),Object(P.jsxs)("div",{className:"inputGroup",children:[Object(P.jsx)(U,{id:"emailRegister",value:c.email,placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 email",onChange:function(n){i(Object(kn.a)(Object(kn.a)({},c),{},{email:n.target.value}))},children:Object(P.jsx)("ion-icon",{name:"mail-outline"})}),Object(P.jsx)(U,{id:"usernameRegister",value:c.username,placeholder:"Nh\u1eadp username",onChange:function(n){i(Object(kn.a)(Object(kn.a)({},c),{},{username:n.target.value}))},children:Object(P.jsx)("ion-icon",{name:"person-outline"})}),Object(P.jsx)(U,{id:"passwordRegister",value:c.password,placeholder:"Nh\u1eadp password",onChange:function(n){i(Object(kn.a)(Object(kn.a)({},c),{},{password:n.target.value}))},type:"password",children:Object(P.jsx)("ion-icon",{name:"lock-closed-outline"})})]}),Object(P.jsx)(D,{title:"\u0110\u0103ng k\xfd",onClick:function(){var e;((e=c).username&&e.password&&gn(e.email)&&e.password.trim()&&e.username.trim()||(gn(e.email)?e.password&&e.password.trim()?e.username&&e.username.trim()?void 0:(u.b.error("B\u1ea1n ch\u01b0a nh\u1eadp username!"),0):(u.b.error("B\u1ea1n ch\u01b0a nh\u1eadp password!"),0):(u.b.error("Email kh\xf4ng h\u1ee3p l\u1ec7!"),0)))&&n(V(c))}})]}),Object(P.jsxs)("div",{className:"form",children:[Object(P.jsx)("h2",{className:"heading",children:"\u0110\u0103ng nh\u1eadp"}),Object(P.jsxs)("div",{className:"inputGroup",children:[Object(P.jsx)(U,{id:"emailLogin",value:l.email,placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 email",onChange:function(n){d({email:n.target.value})},children:Object(P.jsx)("ion-icon",{name:"mail-outline"})}),Object(P.jsx)(U,{id:"passwordLogin",value:l.password,placeholder:"Nh\u1eadp password",onChange:function(n){d(Object(kn.a)(Object(kn.a)({},l),{},{password:n.target.value}))},type:"password",children:Object(P.jsx)("ion-icon",{name:"lock-closed-outline"})})]}),Object(P.jsx)(D,{title:"\u0110\u0103ng nh\u1eadp",onClick:function(){var e;((e=l).password&&gn(e.email)&&e.password.trim()||(gn(e.email)?e.password&&e.password.trim()?void 0:(u.b.error("B\u1ea1n ch\u01b0a nh\u1eadp password!"),0):(u.b.error("Email kh\xf4ng h\u1ee3p l\u1ec7!"),0)))&&n(J(l))}})]})]})},Nn=l.b.div(z||(z=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    \n    .form {\n        border: 1px solid #fff;\n        padding: 20px 10px 30px 10px;\n        margin: 20px;\n        min-height: 300px;\n        display: flex;\n        flex-direction: column;\n\n        .heading {\n            margin-bottom: 10px;\n        }\n\n        .inputGroup {\n            flex: 1;\n        }\n    }\n"]))),yn=function(){var n=Object(o.c)(Z).userInfo;return Object(P.jsxs)(Sn,{className:"App",children:[n?Object(P.jsx)(On,{}):Object(P.jsx)(Cn,{}),Object(P.jsx)(u.a,{position:"top-right",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0})]})},Sn=l.b.div(H||(H=Object(s.a)(["\n    min-height: 100vh;\n    background-color: ",";\n"])),(function(n){return n.theme.colors.main})),In=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,143)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))},_n=t(69),Ln=t(38),Rn=t(70),Mn=t.n(Rn),Tn=t(26),En={key:"root",storage:Mn.a,whitelist:["auth"]},Fn=Object(Ln.a)(En,en),Bn=Object(G.configureStore)({reducer:Fn,middleware:[Tn.a]}),zn=Object(Ln.b)(Bn),Hn=Bn;a.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(o.a,{store:Hn,children:Object(P.jsx)(_n.a,{loading:null,persistor:zn,children:Object(P.jsx)(l.a,{theme:{colors:{main:"#272a2e"}},children:Object(P.jsx)(yn,{})})})})}),document.getElementById("root")),In()},75:function(n,e,t){}},[[142,1,2]]]);
//# sourceMappingURL=main.fc21e7f0.chunk.js.map