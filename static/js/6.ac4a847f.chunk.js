(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{222:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return e.auth.login},r=function(e){return e.auth.id}},223:function(e,t,a){e.exports=a.p+"static/media/avatar.716105d1.png"},224:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is "+e+" symbols"}},s=function(e){if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return"Invalid email address"}},225:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return m}));var n=a(234),r=a(0),s=a.n(r),c=a(226),i=a.n(c),o=a(104),u=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),c=a.touched&&a.error;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",Object.assign({className:c?i.a.error:null},t,r))),c&&s.a.createElement("span",{className:i.a.someError},a.error))},l=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),c=a.touched&&a.error;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("input",Object.assign({},t,r))),c&&s.a.createElement("span",{className:i.a.someError},a.error))},m=function(e,t,a,n,r,c,i){return s.a.createElement("div",null,s.a.createElement(o.a,{component:e,validate:t,name:a,type:n,placeholder:r,className:i}),c)}},226:function(e,t,a){e.exports={error:"FormControl_error__gJjmm",someError:"FormControl_someError__t-mu_"}},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),s=a(5),c=a(20),i=function(e){return Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{})((function(t){return!1===t.isAuth?r.a.createElement(s.a,{to:"/login"}):r.a.createElement(e,t)}))}},252:function(e,t,a){e.exports={back:"social_back__V0VES",newPostText:"social_newPostText__3MGju",addPostDiv:"social_addPostDiv__1d_kC",post:"social_post__2G08v"}},253:function(e,t,a){e.exports={post:"post_post__3VUtQ",avatar:"post_avatar__3qsEh",messageDiv:"post_messageDiv__3Erss",nameLink:"post_nameLink__U23ID",message:"post_message__2E2QE",likeDiv:"post_likeDiv__2RN-y",like:"post_like__4NHLU"}},304:function(e,t,a){"use strict";a.r(t);var n=a(70),r=a(0),s=a.n(r),c=a(252),i=a.n(c),o=a(253),u=a.n(o),l=a(223),m=a.n(l),d=function(e){var t=e.deletePostFunction,a=e.socialPage.postData.map((function(e){return s.a.createElement("div",{key:e.id,className:u.a.post},s.a.createElement("div",{className:u.a.avatar},s.a.createElement("img",{alt:"Avatar",className:u.a.avatar,src:m.a})),s.a.createElement("div",{className:u.a.messageDiv},s.a.createElement("p",{className:u.a.nameLink},e.name),s.a.createElement("p",{className:u.a.message},e.message)),s.a.createElement("div",{className:u.a.likeDiv},s.a.createElement("button",{onClick:function(){t(e.id)},className:u.a.like},"DELETE POST"),s.a.createElement("p",{className:u.a.likeNum},"Likes:",e.likes)))}));return s.a.createElement(s.a.Fragment,null,a)},f=a(105),p=a(224),E=a(225),_=Object(p.b)(300),v=Object(f.a)({form:"AddPost"})((function(e){var t=e.handleSubmit,a=e.reset,n=e.length;return Object(r.useEffect)((function(){a()}),[n]),s.a.createElement("form",{onSubmit:t},Object(E.a)(E.c,[p.c,_],"newPostMessage",null,"Type something . . .",null),s.a.createElement("button",null,"Add Post"))})),b=function(e){var t=e.socialPage,a=e.deletePostFunction,n=e.addPostFunction,r=e.userName;e.reset;return s.a.createElement("div",{className:i.a.back},s.a.createElement("div",{className:i.a.addPostDiv},s.a.createElement(v,{length:t.postData.length,onSubmit:function(e){n(e.newPostMessage,r)}})),s.a.createElement("div",{className:i.a.post},s.a.createElement(d,{socialPage:t,deletePostFunction:a})))},g=a(20),N=a(229),P=a(13),h=function(e){return e.socialPage},k=a(222);t.default=Object(P.d)(N.a,Object(g.b)((function(e){return{socialPage:h(e),userName:Object(k.b)(e)}}),{addPostFunction:n.a,deletePostFunction:n.c}))(b)}}]);
//# sourceMappingURL=6.ac4a847f.chunk.js.map