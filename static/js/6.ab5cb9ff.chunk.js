(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{223:function(e,t,a){e.exports=a.p+"static/media/avatar.716105d1.png"},224:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is "+e+" symbols"}},s=function(e){if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return"Invalid email address"}},225:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a(229),r=a(0),s=a.n(r),c=a(226),o=a.n(c),i=a(105),l=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),c=a.touched&&a.error;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",Object.assign({className:c?o.a.error:null},t,r))),c&&s.a.createElement("span",{className:o.a.someError},a.error))},u=function(e){var t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),c=a.touched&&a.error;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("input",Object.assign({},t,r))),c&&s.a.createElement("span",{className:o.a.someError},a.error))},m=function(e,t,a,n,r,c,o){return s.a.createElement("div",null,s.a.createElement(i.a,{component:e,validate:t,name:a,type:n,placeholder:r,className:o}),c)}},226:function(e,t,a){e.exports={error:"FormControl_error__gJjmm",someError:"FormControl_someError__t-mu_"}},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),s=a(21),c=a(23),o=function(e){return Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}),{})((function(t){return!1===t.isAuth?r.a.createElement(s.a,{to:"/login"}):r.a.createElement(e,t)}))}},251:function(e,t,a){e.exports={back:"social_back__V0VES",newPostText:"social_newPostText__3MGju",addPostDiv:"social_addPostDiv__1d_kC",post:"social_post__2G08v"}},252:function(e,t,a){e.exports={post:"post_post__3VUtQ",avatar:"post_avatar__3qsEh",messageDiv:"post_messageDiv__3Erss",nameLink:"post_nameLink__U23ID",message:"post_message__2E2QE",likeDiv:"post_likeDiv__2RN-y",like:"post_like__4NHLU"}},303:function(e,t,a){"use strict";a.r(t);var n=a(69),r=a(0),s=a.n(r),c=a(251),o=a.n(c),i=a(252),l=a.n(i),u=a(223),m=a.n(u),d=function(e){var t=e.deletePostFunction,a=e.socialPage.postData.map((function(e){return s.a.createElement("div",{key:e.id,className:l.a.post},s.a.createElement("div",{className:l.a.avatar},s.a.createElement("img",{alt:"Avatar",className:l.a.avatar,src:m.a})),s.a.createElement("div",{className:l.a.messageDiv},s.a.createElement("p",{className:l.a.nameLink},e.name),s.a.createElement("p",{className:l.a.message},e.message)),s.a.createElement("div",{className:l.a.likeDiv},s.a.createElement("button",{onClick:function(){t(e.id)},className:l.a.like},"DELETE POST"),s.a.createElement("p",{className:l.a.likeNum},"Likes:",e.likes)))}));return s.a.createElement(s.a.Fragment,null,a)},p=a(106),_=a(224),E=a(225),f=Object(_.b)(30),v=Object(p.a)({form:"AddPost"})((function(e){var t=e.handleSubmit;return s.a.createElement("form",{onSubmit:t},Object(E.a)(E.c,[_.c,f],"newPostMessage",null,"Type something . . .",null),s.a.createElement("button",null,"Add Post"))})),b=function(e){var t=e.socialPage,a=e.deletePostFunction,n=e.addPostFunction,r=e.userName;return s.a.createElement("div",{className:o.a.back},s.a.createElement("div",{className:o.a.addPostDiv},s.a.createElement(v,{onSubmit:function(e){n(e.newPostMessage,r)}})),s.a.createElement("div",{className:o.a.post},s.a.createElement(d,{socialPage:t,deletePostFunction:a})))},g=a(23),N=a(228),P=a(14),k=function(e){return e.auth.login},h=function(e){return e.socialPage};t.default=Object(P.d)(N.a,Object(g.b)((function(e){return{socialPage:h(e),userName:k(e)}}),{addPostFunction:n.a,deletePostFunction:n.c}))(b)}}]);
//# sourceMappingURL=6.ab5cb9ff.chunk.js.map