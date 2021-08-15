(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{142:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),i=t(18),a=t.n(i),s=(t(75),t(3)),o=t(9),u=t(5),l=t(2),d=(t(80),t(39)),b=t(7),p=t.n(b),h=t(16),j=t(4),f=t(64),x=t(65),m=t.n(x),g=function(n){return U.post("/api/auth/login",n)},v=function(n){return U.post("/api/auth/register",n)},O=function(n){var e="/api/users?q="+n;return U.get(e)},w=function(n){return U.post("/api/conversations",n)},k=function(n){var e="/api/conversations/?senderId="+n;return U.get(e)},C=function(n){var e="/api/messages/"+n;return U.get(e)},y=function(n){return U.post("/api/messages",n)},N=t(129),S=m.a.create({baseURL:"https://chatting-be.herokuapp.com",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:function(n){return N.stringify(n)}});S.interceptors.response.use((function(n){return n&&n.data,n}),(function(n){throw n}));var _,I,L,R,M,T,E,F,B,z,H,P,U=S,K=t(1),A=function(n){var e=n.children,t=void 0===e?null:e,r=n.id,c=void 0===r?"":r,i=n.value,a=void 0===i?"":i,s=n.placeholder,o=void 0===s?"":s,u=n.type,l=void 0===u?"text":u,d=n.onFocus,b=void 0===d?function(){}:d,p=n.onBlur,h=void 0===p?function(){}:p,j=n.onChange,f=void 0===j?function(){}:j;return Object(K.jsxs)(D,{children:[Object(K.jsx)("label",{htmlFor:c,className:"inputLabel",children:t}),Object(K.jsx)("input",{value:a,type:l,id:c,className:"input",placeholder:o,onChange:f,onFocus:b,onBlur:h})]})},D=l.b.div(_||(_=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-top: 10px;\n\n    .inputLabel {\n        position: absolute;\n        top: 50%;\n        left: 5px;\n        transform: translateY(-50%);\n    }\n\n    .input {\n        background-color: transparent;\n        color: #fff;\n        border: 1px solid #fff;\n        outline: none;\n        padding: 10px 10px 10px 25px;\n\n        &::placeholder {\n            color: #ffffffbc;\n        }\n    }\n"]))),W=function(n){var e=n.title,t=void 0===e?"":e,r=n.onClick,c=void 0===r?function(){}:r;return Object(K.jsx)(q,{children:Object(K.jsx)("button",{className:"button",onClick:c,children:t})})},q=l.b.div(I||(I=Object(s.a)(["\n    margin-top: 10px;\n    width: 100%;\n\n    .button {\n        background-color: #341647;\n        color: #fff;\n        border: 1px solid #fff;\n        width: 100%;\n        padding: 10px 0;\n        cursor: pointer;\n        transition: 300ms;\n\n        &:hover {\n            background-color: #ee7b0f;\n        }\n    }\n"]))),G=t(6),J=t(15),V=Object(J.createAsyncThunk)("auth/login",function(){var n=Object(h.a)(p.a.mark((function n(e,t){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,g(e);case 4:return c=n.sent,n.abrupt("return",c.data.userInfo[0]);case 8:return n.prev=8,n.t0=n.catch(1),u.b.error("\u0110\u0103ng nh\u1eadp th\u1ea5t b\u1ea1i"),n.abrupt("return",r(n.t0.response.data));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),X=Object(J.createAsyncThunk)("auth/register",function(){var n=Object(h.a)(p.a.mark((function n(e,t){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.prev=1,n.next=4,v(e);case 4:return c=n.sent,n.abrupt("return",c.data.userInfo[0]);case 8:return n.prev=8,n.t0=n.catch(1),409===n.t0.response.status&&u.b.error("Email \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u0103ng k\xfd"),n.abrupt("return",r(n.t0.response.data));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),Z=Object(J.createSlice)({name:"auth",initialState:{userInfo:null,isLoading:!1},reducers:{logout:function(n){n.userInfo=null,n.isLoading=!1}},extraReducers:function(n){n.addCase(V.fulfilled,(function(n,e){n.userInfo=e.payload,n.isLoading=!1,u.b.success("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng")})),n.addCase(V.pending,(function(n){n.isLoading=!0})),n.addCase(X.fulfilled,(function(n,e){n.userInfo=e.payload,n.isLoading=!1,u.b.success("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng")})),n.addCase(X.pending,(function(n){n.isLoading=!0}))}}),Y=function(n){return n.auth},$=Z.actions.logout,Q=Z.reducer,nn=(0,t(15).createSlice)({name:"conversation",initialState:{conversations:[]},reducers:{setConversations:function(n,e){n.conversations=e.payload}}}),en=(nn.actions.setConversations,nn.reducer),tn=Object(G.d)({auth:Q,conversation:en}),rn=function(n){var e=n.username,t=void 0===e?"":e,r=n.newestMessage,c=void 0===r?"B\u1eaft \u0111\u1ea7u cu\u1ed9c tr\xf2 chuy\u1ec7n":r,i=n.onClick,a=void 0===i?function(){}:i;return Object(K.jsxs)(cn,{onClick:a,children:[Object(K.jsx)("p",{className:"username",children:t}),Object(K.jsx)("p",{className:"newestMessage",children:c})]})},cn=l.b.div(L||(L=Object(s.a)(["\n    padding: 0 10px;\n    border-bottom: 1px solid #ccc;\n    cursor: pointer;\n\n    .username {\n        padding-top: 10px;\n        padding-bottom: 5px;\n        font-weight: 700;\n        font-size: 20px;\n    }\n\n    .newestMessage {\n        max-width: 150px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding-bottom: 10px;\n        color: #ccc;\n        white-space: nowrap;\n    }\n"]))),an=function(n){var e=n.data,t=void 0===e?{}:e,r=n.onclick,c=void 0===r?function(){}:r;return Object(K.jsxs)(sn,{onClick:c,children:[Object(K.jsx)("div",{className:"username",children:t.username}),Object(K.jsxs)("p",{className:"userId",children:["ID: ",t._id]}),Object(K.jsxs)("p",{className:"userId",children:["Email: ",t.email]})]})},sn=l.b.div(R||(R=Object(s.a)(["\n    padding: 10px;\n    border-bottom: 1px solid #3f3d3d;\n    cursor: pointer;\n\n    .username {\n        padding: 5px 0;\n        font-weight: 700;\n    }\n\n    .userId {\n        font-size: 13px;\n    }\n"]))),on=function(n){var e=n.searchResult,t=void 0===e?[]:e,r=n.isSearching,c=void 0!==r&&r,i=n.onCreateConversation,a=void 0===i?function(){}:i;return Object(K.jsx)(un,{children:t.length?t.map((function(n){return Object(K.jsx)(an,{data:n,onclick:function(){return a(n._id)}},n._id)})):c?Object(K.jsx)("p",{children:"searching..."}):Object(K.jsx)("p",{children:"User not found"})})},un=l.b.div(M||(M=Object(s.a)(["\n    background-color: #242020;\n    width: 100%;\n    min-height: 400px;\n"]))),ln=function(n){var e=n.isShowSearchResult,t=void 0!==e&&e,r=n.keySearch,c=void 0===r?"":r,i=n.searchResult,a=void 0===i?[]:i,s=n.onCreateConversation,u=n.conversations,l=void 0===u?[]:u,d=n.isSearching,b=n.onShowSearchResult,p=void 0===b?function(){}:b,h=n.onHiddenSearchResult,j=void 0===h?function(){}:h,f=n.onToggleShowProfile,x=void 0===f?function(){}:f,m=n.onChangeKeySearch,g=void 0===m?function(){}:m,v=n.onClickConversation,O=void 0===v?function(){}:v,w=Object(o.c)(Y).userInfo;return Object(K.jsxs)(dn,{children:[Object(K.jsxs)("div",{className:"searchUser",children:[Object(K.jsx)("div",{className:"userInfo",onClick:x,children:Object(K.jsx)("ion-icon",{name:"person-circle"})}),Object(K.jsxs)("div",{className:"searchBox",children:[Object(K.jsx)(A,{placeholder:"Nh\u1eadp id",onFocus:p,onBlur:j,value:c,onChange:g,children:Object(K.jsx)("ion-icon",{name:"search-outline"})}),t?Object(K.jsx)("div",{className:"searchResult",children:Object(K.jsx)(on,{isSearching:d,searchResult:a,onCreateConversation:s})}):Object(K.jsx)(K.Fragment,{})]})]}),Object(K.jsx)("div",{className:"listFriends",children:l.map((function(n){var e=n.members.find((function(n){return n._id!==w._id})).username;return Object(K.jsx)(rn,{username:e,newestMessage:"newest message",onClick:function(){return O(n)}},n._id)}))})]})},dn=l.b.div(T||(T=Object(s.a)(["\n    min-height: 100vh;\n    background-color: #201f22;\n    display: flex;\n    flex-direction: column;\n\n    .searchUser {\n        border-bottom: 1px solid #ccc;\n        height: 80px;\n        padding: 10px;\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        .userInfo {\n            cursor: pointer;\n\n            ion-icon {\n                font-size: 30px;\n            }\n        }\n\n        .searchBox {\n            flex: 1;\n            margin-left: 10px;\n\n            div {\n                margin-top: 0;\n            }\n\n            .searchResult {\n                position: absolute;\n                top: 100%;\n                left: 0;\n                width: 100%;\n            }\n        }\n    }\n\n    .listFriends {\n        overflow-y: scroll;\n        height: calc(100vh - 80px);\n\n        /* width */\n        &::-webkit-scrollbar {\n            width: 5px;\n        }\n        \n        /* Track */\n        &::-webkit-scrollbar-track {\n            background: #ccc; \n        }\n        \n        /* Handle */\n        &::-webkit-scrollbar-thumb {\n            background: #888; \n        }\n        \n        /* Handle on hover */\n        &::-webkit-scrollbar-thumb:hover {\n            background: #555; \n        }\n    }\n"]))),bn=function(n){var e=n.username,t=void 0===e?"":e,r=n.id,c=void 0===r?"":r;return Object(K.jsx)(pn,{children:Object(K.jsxs)("div",{className:"content",children:[Object(K.jsx)("p",{className:"welcomeHeading",children:"Welcome!"}),Object(K.jsx)("p",{className:"username",children:t}),Object(K.jsxs)("p",{className:"username",children:["ID c\u1ee7a b\u1ea1n l\xe0: ",c]}),Object(K.jsx)("p",{className:"username",children:"Chia s\u1ebb ID c\u1ee7a b\u1ea1n cho b\u1ea1n b\xe8 :v"})]})})},pn=l.b.div(E||(E=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n\n    .welcomeHeading {\n        margin-top: 100px;\n        font-size: 50px;\n    }\n\n    .username {\n        font-size: 25px;\n        font-weight: 700;\n    }\n"]))),hn=function(n){var e=n.isMe,t=void 0!==e&&e,r=n.username,c=void 0===r?"":r,i=n.message,a=void 0===i?"":i;return Object(K.jsx)(jn,{isMe:t,children:t?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("div",{className:"message",children:a})}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{className:"username",children:c}),Object(K.jsx)("div",{className:"message",children:a})]})})},jn=l.b.div(F||(F=Object(s.a)(["\n    display: flex;\n    justify-content: ",";\n    margin: 20px 0;\n\n    .message {\n        max-width: 400px;\n        background-color: #4e4a4a;\n        padding: 10px;\n        border-radius: 8px;\n        color: #fff;\n        margin: 0 5px;\n    }\n\n    .username {\n        padding: 5px;\n    }\n"])),(function(n){return n.isMe?"flex-end":"flex-start"})),fn=function(n){var e=n.onClose,t=void 0===e?function(){}:e,r=n.onLogout,c=void 0===r?function(){}:r,i=Object(o.c)(Y).userInfo;return Object(K.jsxs)(xn,{children:[Object(K.jsx)("div",{className:"overlay"}),Object(K.jsxs)("div",{className:"profileMain",children:[Object(K.jsxs)("p",{className:"username",children:["Username: ",i.username]}),Object(K.jsxs)("p",{className:"id",children:["ID: ",i._id]}),Object(K.jsx)("div",{className:"buttonOK",children:Object(K.jsx)(W,{title:"OK",onClick:t})}),Object(K.jsx)("div",{className:"buttonLogout",children:Object(K.jsx)(W,{title:"Logout",onClick:c})})]})]})},xn=l.b.div(B||(B=Object(s.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .3);;\n    }\n\n    .profileMain {\n        z-index: 1;\n        background-color: #381c38;\n        width: 400px;\n        height: 300px;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        padding-top: 50px;\n        border-radius: 15px;\n\n        .username {\n            font-size: 23px;\n            padding-bottom: 10px;\n        }\n\n        .buttonOK {\n            padding-top: 60px;\n            width: 200px;\n        }\n\n        .buttonLogout {\n            width: 200px;\n        }\n    }\n"]))),mn=function(n){return new Promise((function(e){return setTimeout(e,n)}))},gn=function(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())},vn=function(){var n=Object(r.useState)(!0),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(!1),a=Object(j.a)(i,2),s=a[0],u=a[1],l=Object(r.useState)([]),b=Object(j.a)(l,2),x=b[0],m=b[1],g=Object(r.useState)(!1),v=Object(j.a)(g,2),N=v[0],S=v[1],_=Object(r.useState)(""),I=Object(j.a)(_,2),L=I[0],R=I[1],M=Object(r.useState)([]),T=Object(j.a)(M,2),E=T[0],F=T[1],B=Object(r.useState)(null),z=Object(j.a)(B,2),H=z[0],P=z[1],U=Object(r.useState)([]),A=Object(j.a)(U,2),D=A[0],W=A[1],q=Object(r.useState)(""),G=Object(j.a)(q,2),J=G[0],V=G[1],X=Object(r.useState)(null),Z=Object(j.a)(X,2),Q=Z[0],nn=Z[1],en=Object(r.useState)([]),tn=Object(j.a)(en,2),rn=(tn[0],tn[1]),cn=Object(r.useRef)(null),an=Object(r.useState)(!1),sn=Object(j.a)(an,2),on=sn[0],un=sn[1],dn=Object(r.useState)(!1),pn=Object(j.a)(dn,2),jn=pn[0],xn=pn[1],gn=Object(r.useState)(!1),vn=Object(j.a)(gn,2),wn=vn[0],kn=vn[1],Cn=Object(r.useRef)(null),yn=Object(o.b)(),Nn=Object(o.c)(Y).userInfo,Sn=function(){var n=Object(h.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k(Nn._id);case 3:e=n.sent,F(e.data.conversations),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),_n=function(){var n=Object(h.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!H){n.next=6;break}return n.next=4,C(H._id);case 4:e=n.sent,W(e.data.messages);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){Cn.current=Object(f.io)("https://chatting-socket.herokuapp.com"),Sn(),Cn.current.emit("register",{userId:Nn._id}),Cn.current.on("serverSendMessage",(function(n){nn({sender:n.sender,text:n.text}),xn(!0)})),Cn.current.on("updateUserOnline",(function(n){rn(n)}))}),[]),Object(r.useEffect)((function(){jn&&(Sn(),xn(!1))}),[jn]),Object(r.useEffect)((function(){_n()}),[H]),Object(r.useEffect)((function(){Q&&H&&function(){var n=H.members.find((function(n){return n._id!==Nn._id}))._id;Q.sender._id===n&&W([].concat(Object(d.a)(D),[Q]))}()}),[Q]),Object(r.useEffect)((function(){cn.current&&!on&&(cn.current.scrollTop=cn.current.scrollHeight)}),[D]),Object(r.useEffect)((function(){var n=function(n){n.target.scrollTop>=n.target.scrollHeight-n.target.offsetHeight-50?un(!1):un(!0)};return cn.current&&cn.current.addEventListener("scroll",n),function(){cn.current&&cn.current.removeEventListener("scroll",n)}}),[cn.current]),function(n,e,t){var c=Object(r.useCallback)(n,t);Object(r.useEffect)((function(){var n=setTimeout((function(){c()}),e);return function(){clearTimeout(n)}}),[c,e])}((function(){L.trim()&&(kn(!0),O(L).then((function(n){console.log(n.data);var e=n.data.users.filter((function(n){return n._id!==Nn._id}));m(e)})).catch((function(n){console.log(n),m([])})).finally((function(){kn(!1)})))}),800,[L]);var In=function(){var n=Object(h.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,mn(200);case 2:u(!1);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Ln=function(){S(!N)},Rn=function(){var n=Object(h.a)(p.a.mark((function n(){var e,t,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!J.trim()){n.next=10;break}return e=J,V(""),t={conversationId:H._id,senderId:Nn._id,text:J},n.next=7,y(t);case 7:r=H.members.find((function(n){return n._id!==Nn._id})),Cn.current.emit("clientSendMessage",{sender:Nn,receiver:r,text:e}),W([].concat(Object(d.a)(D),[{sender:{_id:Nn._id},text:e}]));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return Object(K.jsxs)(On,{children:[N&&Object(K.jsx)(fn,{onClose:Ln,onLogout:function(){yn($())}}),Object(K.jsx)("div",{className:"sidebar",children:Object(K.jsx)(ln,{onShowSearchResult:function(){u(!0)},onHiddenSearchResult:In,isShowSearchResult:s,onToggleShowProfile:Ln,keySearch:L,onChangeKeySearch:function(n){R(n.target.value)},searchResult:x,onCreateConversation:function(n){w({senderId:Nn._id,receiverId:n}).then((function(n){n.data.conversation&&(Sn(),P(n.data.conversation[0]),c(!1))}))},conversations:E,onClickConversation:function(n){c(!1),P(n)},isSearching:wn})}),Object(K.jsx)("div",{className:"main",children:t?Object(K.jsx)(bn,{username:Nn.username,id:Nn._id}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{className:"header",children:H.members.find((function(n){return n._id!==Nn._id})).username}),Object(K.jsx)("div",{className:"listMessage",ref:cn,children:D.map((function(n,e){var t=Nn._id===n.sender._id;return Object(K.jsx)(hn,{isMe:t,username:n.sender.username,message:n.text},n._id||e)}))}),Object(K.jsxs)("div",{className:"inputMessage",children:[Object(K.jsx)("div",{className:"input",children:Object(K.jsx)("input",{type:"text",value:J,onChange:function(n){V(n.target.value)},onKeyUp:function(n){13===n.keyCode&&Rn()}})}),Object(K.jsx)("div",{className:"btn",children:Object(K.jsx)("button",{className:"sendBtn",onClick:Rn,children:Object(K.jsx)("ion-icon",{name:"send-outline"})})})]})]})})]})},On=l.b.div(z||(z=Object(s.a)(["\n    display: flex;\n    min-height: 100vh;\n\n    .sidebar {\n        flex: 1;\n    }\n\n    .main {\n        flex: 4;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n\n        .header {\n            padding: 20px;\n            border-bottom: 1px solid #000;\n            box-shadow: 0 0 5px #000;\n        }\n\n        .listMessage {\n            flex: 1;\n            overflow-y: scroll;\n            padding-right: 10px;\n\n            /* width */\n            &::-webkit-scrollbar {\n                width: 5px;\n            }\n            \n            /* Track */\n            &::-webkit-scrollbar-track {\n                background: #ccc; \n            }\n            \n            /* Handle */\n            &::-webkit-scrollbar-thumb {\n                background: #888; \n            }\n            \n            /* Handle on hover */\n            &::-webkit-scrollbar-thumb:hover {\n                background: #555; \n            }\n        }\n\n        .inputMessage {\n            display: flex;\n            background-color: #3b383d;\n            border-top: 1px solid #ccc;\n\n            .input {\n                flex: 1;\n\n                input {\n                    background-color: transparent;\n                    width: 100%;\n                    border: none;\n                    outline: none;\n                    padding: 20px;\n                    color: #fff;\n                    font-size: 18px;\n                }\n            }\n\n            .btn {\n                width: 80px;\n\n                button {\n                    width: 100%;\n                    height: 100%;\n                    cursor: pointer;\n                    background-color: transparent;\n                    border: none;\n                    border-left: 1px solid #ccc;\n\n                    ion-icon {\n                        font-size: 25px;\n                        color: #fff;\n                    }\n                }\n            }\n        }\n    }\n"]))),wn=t(14),kn=function(){var n=Object(o.b)(),e=Object(r.useState)({email:"",username:"",password:""}),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)({email:"",password:""}),s=Object(j.a)(a,2),l=s[0],d=s[1];return Object(K.jsxs)(Cn,{children:[Object(K.jsxs)("div",{className:"form",children:[Object(K.jsx)("h2",{className:"heading",children:"\u0110\u0103ng k\xfd"}),Object(K.jsxs)("div",{className:"inputGroup",children:[Object(K.jsx)(A,{id:"emailRegister",value:c.email,placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 email",onChange:function(n){i(Object(wn.a)(Object(wn.a)({},c),{},{email:n.target.value}))},children:Object(K.jsx)("ion-icon",{name:"mail-outline"})}),Object(K.jsx)(A,{id:"usernameRegister",value:c.username,placeholder:"Nh\u1eadp username",onChange:function(n){i(Object(wn.a)(Object(wn.a)({},c),{},{username:n.target.value}))},children:Object(K.jsx)("ion-icon",{name:"person-outline"})}),Object(K.jsx)(A,{id:"passwordRegister",value:c.password,placeholder:"Nh\u1eadp password",onChange:function(n){i(Object(wn.a)(Object(wn.a)({},c),{},{password:n.target.value}))},type:"password",children:Object(K.jsx)("ion-icon",{name:"lock-closed-outline"})})]}),Object(K.jsx)(W,{title:"\u0110\u0103ng k\xfd",onClick:function(){var e;((e=c).username&&e.password&&gn(e.email)&&e.password.trim()&&e.username.trim()||(gn(e.email)?e.password&&e.password.trim()?e.username&&e.username.trim()?void 0:(u.b.error("B\u1ea1n ch\u01b0a nh\u1eadp username!"),0):(u.b.error("B\u1ea1n ch\u01b0a nh\u1eadp password!"),0):(u.b.error("Email kh\xf4ng h\u1ee3p l\u1ec7!"),0)))&&(n(X(c)),u.b.info("Processing..."))}})]}),Object(K.jsxs)("div",{className:"form",children:[Object(K.jsx)("h2",{className:"heading",children:"\u0110\u0103ng nh\u1eadp"}),Object(K.jsxs)("div",{className:"inputGroup",children:[Object(K.jsx)(A,{id:"emailLogin",value:l.email,placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 email",onChange:function(n){d({email:n.target.value})},children:Object(K.jsx)("ion-icon",{name:"mail-outline"})}),Object(K.jsx)(A,{id:"passwordLogin",value:l.password,placeholder:"Nh\u1eadp password",onChange:function(n){d(Object(wn.a)(Object(wn.a)({},l),{},{password:n.target.value}))},type:"password",children:Object(K.jsx)("ion-icon",{name:"lock-closed-outline"})})]}),Object(K.jsx)(W,{title:"\u0110\u0103ng nh\u1eadp",onClick:function(){var e;((e=l).password&&gn(e.email)&&e.password.trim()||(gn(e.email)?e.password&&e.password.trim()?void 0:(u.b.error("B\u1ea1n ch\u01b0a nh\u1eadp password!"),0):(u.b.error("Email kh\xf4ng h\u1ee3p l\u1ec7!"),0)))&&(n(V(l)),u.b.info("Processing..."))}})]})]})},Cn=l.b.div(H||(H=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    \n    .form {\n        border: 1px solid #fff;\n        padding: 20px 10px 30px 10px;\n        margin: 20px;\n        min-height: 300px;\n        display: flex;\n        flex-direction: column;\n\n        .heading {\n            margin-bottom: 10px;\n        }\n\n        .inputGroup {\n            flex: 1;\n        }\n    }\n"]))),yn=function(){var n=Object(o.c)(Y).userInfo;return Object(K.jsxs)(Nn,{className:"App",children:[n?Object(K.jsx)(vn,{}):Object(K.jsx)(kn,{}),Object(K.jsx)(u.a,{position:"top-right",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0})]})},Nn=l.b.div(P||(P=Object(s.a)(["\n    min-height: 100vh;\n    background-color: ",";\n"])),(function(n){return n.theme.colors.main})),Sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,143)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))},_n=t(69),In=t(38),Ln=t(70),Rn=t.n(Ln),Mn=t(26),Tn={key:"root",storage:Rn.a,whitelist:["auth"]},En=Object(In.a)(Tn,tn),Fn=Object(J.configureStore)({reducer:En,middleware:[Mn.a]}),Bn=Object(In.b)(Fn),zn=Fn;a.a.render(Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(o.a,{store:zn,children:Object(K.jsx)(_n.a,{loading:null,persistor:Bn,children:Object(K.jsx)(l.a,{theme:{colors:{main:"#272a2e"}},children:Object(K.jsx)(yn,{})})})})}),document.getElementById("root")),Sn()},75:function(n,e,t){}},[[142,1,2]]]);
//# sourceMappingURL=main.ae894185.chunk.js.map