(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{117:function(e,t,n){e.exports={header:"Header_header__1qgC_",title:"Header_title__2VfwY",login__button:"Header_login__button__1K9WG"}},138:function(e,t,n){e.exports={form__control:"FormsControls_form__control__mwhBB",error:"FormsControls_error__1VXKM",form__summary_error:"FormsControls_form__summary_error__2itv6"}},141:function(e,t,n){e.exports={users__container:"Users_users__container__aGTZd",users__wrapper:"Users_users__wrapper__1U53-"}},142:function(e,t,n){e.exports={preloader:"Preloader_preloader__3QxHB"}},186:function(e,t,n){e.exports={profile:"Profile_profile__2n60n"}},187:function(e,t,n){e.exports={status:"ProfileStatus_status__2AM9E"}},189:function(e,t,n){e.exports={user__logo:"UserLogo_user__logo__2zm__"}},238:function(e,t,n){},239:function(e,t,n){},25:function(e,t,n){e.exports={dialogs__container:"Dialogs_dialogs__container__3YAGs",dialogs__items:"Dialogs_dialogs__items__3pOfC",dialog__item:"Dialogs_dialog__item__8oPjS",link:"Dialogs_link__H-dq0",messages__container:"Dialogs_messages__container__2p-C5",message__item:"Dialogs_message__item__10xUV",message:"Dialogs_message__2t6gf",message__send_field:"Dialogs_message__send_field__1KUlR",form__message:"Dialogs_form__message__14rZo",add__message_field:"Dialogs_add__message_field__3NNCC"}},26:function(e,t,n){e.exports={menu:"Navbar_menu__t1fqB",link:"Navbar_link__37ms-",item:"Navbar_item__2B-yV",active:"Navbar_active__U22O7"}},364:function(e,t,n){"use strict";n.r(t);var a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,423)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},r=n(0),s=n.n(r),c=n(14),o=n.n(c),i=(n(238),n(239),n(20)),l=n(69),u=n(8),_="SEND_MESSAGE",d={dialogs:[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"4"},{id:5,name:"5"},{id:6,name:"6"}],messages:[{id:1,message:"hi"},{id:2,message:"hello"},{id:3,message:"privet"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var n=t.newMessageBody;return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[{id:4,message:n}])});default:return e}},p=n(25),f=n.n(p),b=n(21),m=n(2),h=function(e){return Object(m.jsx)("div",{className:f.a.dialog__item,children:Object(m.jsx)(b.b,{className:f.a.link,activeClassName:f.a.active,to:"/dialogs/"+e.id,children:e.name})})},g=function(e){return Object(m.jsx)("div",{className:f.a.message,children:e.message})},O=n(176),x=n(177),v=function(e){if(!e)return"Field is required!"},w=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," characters")}},P=function(e){return function(t){if(t.length<e)return"Min length is ".concat(e," characters")}},N=n(73),S=n(138),C=n.n(S),y=n(418),k=["input","meta","child"],I=["input","meta","child"],U=["input","meta","child"],E=function(e){e.input;var t=e.meta,n=(e.child,Object(N.a)(e,k)),a=t.touched&&t.error;return Object(m.jsxs)("div",{className:C.a.form__control+" "+(a?C.a.error:""),children:[Object(m.jsx)("div",{children:n.children}),a&&Object(m.jsx)("span",{children:t.error})]})},T=function(e){var t=e.input,n=(e.meta,e.child,Object(N.a)(e,I));return Object(m.jsx)(E,Object(u.a)(Object(u.a)({},e),{},{children:Object(m.jsx)("textarea",Object(u.a)(Object(u.a)({},t),n))}))},L=function(e){var t=e.input,n=(e.meta,e.child,Object(N.a)(e,U));return Object(m.jsx)(E,Object(u.a)(Object(u.a)({},e),{},{children:Object(m.jsx)(y.a,Object(u.a)(Object(u.a)({},t),n))}))},A=w(50),F=Object(x.a)({form:"dialog-add-message-form"})((function(e){return Object(m.jsxs)("form",{className:f.a.form__message,onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(O.a,{className:f.a.add__message_field,component:T,validate:[v,A],placeholder:"Enter your message",name:"newMessageBody"})}),Object(m.jsx)("div",{className:f.a.wrapper__button,children:Object(m.jsx)("button",{className:f.a.add__message_button,children:"Send"})})]})})),M=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(m.jsx)(h,{name:e.name,id:e.id},e.id)})),a=t.messages.map((function(e){return Object(m.jsx)(g,{message:e.message},e.id)}));t.newMessageBody;return e.isAuth?Object(m.jsxs)("div",{className:f.a.dialogs__container,children:[Object(m.jsx)("div",{className:f.a.dialogs__items,children:n}),Object(m.jsxs)("div",{className:f.a.messages__container,children:[Object(m.jsx)("div",{className:f.a.message__item,children:a}),Object(m.jsx)("div",{className:f.a.message__send_field,children:Object(m.jsx)(F,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})})]})]}):Object(m.jsx)(i.a,{to:"/login"})},D=n(18),z=function(e){return{isAuth:e.auth.isAuth}},B=n(16),G=Object(B.d)(Object(D.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:_,newMessageBody:e}}(t))}}})),(function(e){return Object(D.b)(z)((function(t){return t.isAuth?Object(m.jsx)(e,Object(u.a)({},t)):Object(m.jsx)(i.a,{to:"/login"})}))}))(M),R=n(112),H=n(113),K=n(115),V=n(114),W=n(17),J=n.n(W),Z=n(33),X=n(184).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d334ed35-7c2b-4f86-86db-09775214dcba"}}),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return X.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Q=function(e){return X.post("follow/".concat(e))},Y=function(e){return X.delete("follow/".concat(e))},$=function(e){return console.warn("Obsolete method. Please profileAPI object."),ee.getProfile(e)},ee={getProfile:function(e){return X.get("profile/"+e)},getStatus:function(e){return X.get("profile/status/"+e)},updateStatus:function(e){return X.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),X.put("profile/photo",t)}},te=function(){return X.get("auth/me")},ne=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return X.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},ae=function(){return X.delete("auth/login")},re=function(){return X.get("security/get-captcha-url")},se="FOLLOW",ce="UNFOLLOW",oe="SET_USERS",ie="SET_CURRENT_PAGE",le="SET_TOTAL_USERS_COUNT",ue="TOGGLE_IS_FETCHING",_e="TOGGLE_IS_FOLLOWING_PROGRESS",de={users:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},je=function(e){return{type:se,userId:e}},pe=function(e){return{type:ce,userId:e}},fe=function(e){return{type:ie,currentPage:e}},be=function(e){return{type:ue,isFetching:e}},me=function(e,t){return{type:_e,isFetching:e,userId:t}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case ce:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case oe:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case ie:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case le:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case ue:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case _e:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ge=n(104),Oe=n(55),xe=n(74),ve=n.n(xe),we=n(185),Pe=n.n(we),Ne=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,o=void 0===c?6:c,i=Math.ceil(t/n),l=[],u=1;u<=i;u++)l.push(u);var _=Math.ceil(i/o),d=Object(r.useState)(1),j=Object(Oe.a)(d,2),p=j[0],f=j[1],b=(p-1)*o+1,h=p*o;return Object(m.jsxs)("div",{className:ve.a.paginator,children:[p>1&&Object(m.jsx)("button",{className:ve.a.button,onClick:function(){f(p-1)},children:"prev"}),l.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(m.jsx)("button",{className:Pe()(Object(ge.a)({},ve.a.page__selected,a===e),ve.a.page__number),onClick:function(t){s(e)},children:e},e)})),_>p&&Object(m.jsx)("button",{className:ve.a.button,onClick:function(){f(p+1)},children:"next"})]})},Se=n(37),Ce=n.n(Se),ye=n.p+"static/media/user.db93928b.png",ke=n(406),Ie=n(408),Ue=n(407),Ee=n(409),Te=n(410),Le=n(411),Ae=["user"],Fe=function(e){var t=e.user,n=Object(N.a)(e,Ae);return Object(m.jsxs)(ke.a,{className:Ce.a.user__container,children:[Object(m.jsx)(Ue.a,{className:Ce.a.image__container,title:"user profile",children:Object(m.jsx)(b.b,{to:"/profile/"+t.id,children:Object(m.jsx)("img",{className:Ce.a.user__photo,src:null!=t.photos.small?t.photos.small:ye,alt:"user"})})}),Object(m.jsxs)(Ie.a,{className:Ce.a.user__details,children:[Object(m.jsx)(Ee.a,{className:Ce.a.name__wrapper,component:"h3",variant:"h3",children:Object(m.jsx)("div",{className:Ce.a.name,children:t.name})}),Object(m.jsx)(Ee.a,{className:Ce.a.status__wrapper,variant:"subtitle1",color:"textSecondary",children:Object(m.jsx)("div",{className:Ce.a.status,children:t.status})})]}),Object(m.jsx)(Te.a,{className:Ce.a.button__wrapper,children:t.followed?Object(m.jsx)(Le.a,{variant:"outlined",color:"middle",className:Ce.a.button,disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)},children:"Unfollow"}):Object(m.jsx)(Le.a,{variant:"contained",color:"middle",className:Ce.a.button,disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)},children:"Follow"})})]})},Me=n(141),De=n.n(Me),ze=function(e){return Object(m.jsxs)("div",{className:De.a.users__container,children:[Object(m.jsx)(Ne,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),Object(m.jsx)("div",{className:De.a.users__wrapper,children:e.users.map((function(t){return Object(m.jsx)(Fe,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)}))})]})},Be=n.p+"static/media/preloader.a6f61220.svg",Ge=n(142),Re=n.n(Ge),He=function(e){return Object(m.jsx)("div",{className:Re.a.preloader,children:Object(m.jsx)("img",{className:Re.a.preloader__image,src:Be,alt:"preloader"})})},Ke=function(e){return e.usersPage.users},Ve=function(e){return e.usersPage.pageSize},We=function(e){return e.usersPage.totalUsersCount},Je=function(e){return e.usersPage.currentPage},Ze=function(e){return e.usersPage.isFetching},Xe=function(e){return e.usersPage.followingInProgress},qe=function(e){Object(K.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.props.isFetching?Object(m.jsx)(He,{}):null,Object(m.jsx)(ze,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),Qe=Object(B.d)(Object(D.b)((function(e){return{users:Ke(e),pageSize:Ve(e),totalUsersCount:We(e),currentPage:Je(e),isFetching:Ze(e),followingInProgress:Xe(e)}}),{follow:function(e){return function(){var t=Object(Z.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(me(!0,e)),t.next=3,Q(e);case 3:0===t.sent.data.resultCode&&n(je(e)),n(me(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Z.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(me(!0,e)),t.next=3,Y(e);case 3:0===t.sent.data.resultCode&&n(pe(e)),n(me(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:fe,toggleFollowingProgress:me,getUsers:function(e,t){return function(){var n=Object(Z.a)(J.a.mark((function n(a){var r;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(be(!0)),a(fe(e)),n.next=4,q(e,t);case 4:r=n.sent,a(be(!1)),a((c=r.items,{type:oe,users:c})),a((s=r.totalCount,{type:le,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(qe),Ye=n(186),$e=n.n(Ye),et=n(39),tt=n.n(et),nt=n(187),at=n.n(nt),rt=function(e){var t=Object(r.useState)(!1),n=Object(Oe.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(e.status),o=Object(Oe.a)(c,2),i=o[0],l=o[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(m.jsxs)("div",{className:at.a.status,children:[!a&&Object(m.jsx)("span",{children:Object(m.jsx)("span",{onDoubleClick:function(){return s(!0)},children:e.status||"----"})}),a&&Object(m.jsx)("span",{children:Object(m.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(i)},autoFocus:!0,value:i})})]})},st=n(412),ct=n(188),ot=n.n(ct),it=n(198),lt=function(e){if(!e.profile)return Object(m.jsx)(He,{});return Object(m.jsxs)(it.a,{className:tt.a.profile_info__container,children:[Object(m.jsx)("div",{className:tt.a.photo__block,children:Object(m.jsxs)("div",{className:tt.a.photo__wrapper,children:[e.isOwner&&Object(m.jsxs)("div",{className:tt.a.select__image,children:[Object(m.jsx)("input",{accept:"image/*",className:tt.a.select__image_input,id:"icon-button-file",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),Object(m.jsx)("label",{htmlFor:"icon-button-file",children:Object(m.jsx)(st.a,{className:tt.a.button__load_image,color:"primary","aria-label":"upload picture",component:"div",children:Object(m.jsx)(ot.a,{})})})]}),Object(m.jsx)("img",{className:tt.a.main__photo,src:null!=e.profile.photos.large?e.profile.photos.large:ye,alt:""})]})}),Object(m.jsxs)("div",{className:tt.a.details__block,children:[Object(m.jsx)("div",{className:tt.a.name,children:Object(m.jsx)("h1",{children:e.profile.fullName})}),Object(m.jsxs)("div",{className:tt.a.status,children:[Object(m.jsx)("h3",{children:"Status: "}),Object(m.jsx)(rt,{status:e.status,updateStatus:e.updateStatus})]})]})]})},ut="ADD_POST",_t="SET_USER_PROFILE",dt="SET_STATUS",jt="DELETE_POST",pt="SAVE_PHOTO_SUCCESS",ft={posts:[{id:1,message:"hi",likesCount:12},{id:2,message:"hello",likesCount:5}],profile:null,status:""},bt=function(e){return{type:dt,status:e}},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ut:var n={id:3,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[n]),newPostText:""});case jt:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case pt:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});case _t:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case dt:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}},ht=n(62),gt=n.n(ht),Ot=n(56),xt=n.n(Ot),vt=n(189),wt=n.n(vt),Pt=function(e){return Object(m.jsx)("img",{className:wt.a.user__logo,src:ye,alt:"user logo"})},Nt=n(190),St=n.n(Nt),Ct=function(e){return Object(m.jsxs)(ke.a,{className:xt.a.post_container,children:[Object(m.jsx)(Ue.a,{className:xt.a.image__container,title:"user",children:Object(m.jsx)(Pt,{profile:e.profile})}),Object(m.jsxs)("div",{className:xt.a.details__container,children:[Object(m.jsx)(Ie.a,{className:xt.a.post__text,children:e.message}),Object(m.jsx)(Te.a,{className:xt.a.like__wrapper,children:Object(m.jsx)("div",{className:xt.a.like,children:Object(m.jsx)(St.a,{className:xt.a.icon})})})]})]})},yt=w(100),kt=Object(x.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(m.jsxs)("form",{className:gt.a.form_post,onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(O.a,{className:gt.a.add__post_field,component:T,name:"newPostText",validate:[v,yt]})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:gt.a.add__post_button,children:"Add post"})})]})})),It=function(e){var t=e.posts.map((function(t){return Object(m.jsx)(Ct,{profile:e.profile,message:t.message,likesCount:t.likesCount})}));return Object(m.jsxs)("div",{className:gt.a.posts__container,children:[Object(m.jsx)(it.a,{children:Object(m.jsxs)("div",{className:gt.a.form_post__container,children:[Object(m.jsx)("h2",{children:"My posts"}),Object(m.jsx)(kt,{onSubmit:function(t){e.addPost(t.newPostText)}})]})}),Object(m.jsx)("div",{className:gt.a.posts,children:t})]})},Ut=Object(D.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:ut,newPostText:e}}(t))}}}))(It),Et=function(e){return Object(m.jsxs)("div",{className:$e.a.profile,children:[Object(m.jsx)(lt,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(m.jsx)(Ut,{users:e.users,profile:e.profile})]})},Tt=Object(B.d)(Object(D.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(Z.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e);case 2:a=t.sent,n((r=a.data,{type:_t,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(Z.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee.getStatus(e);case 2:a=t.sent,n(bt(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(Z.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(bt(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(Z.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:pt,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}),i.f)((function(e){return Object(r.useEffect)((function(){var t=e.match.params.userId;t||(t=e.authorizedUserId)||e.history.push("/login"),e.getUserProfile(t),e.getStatus(t)})),Object(m.jsx)(Et,Object(u.a)(Object(u.a)({},e),{},{isOwner:!e.match.params.userId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto}))})),Lt=n(117),At=n.n(Lt),Ft=n(414),Mt=n(415),Dt=n(191),zt=n.n(Dt),Bt=n(192),Gt=n.n(Bt),Rt=n(421),Ht=n(195),Kt=n(419),Vt=n(26),Wt=n.n(Vt),Jt=n(413),Zt=function(e){return Object(m.jsxs)("nav",{className:Wt.a.menu,children:[Object(m.jsx)("div",{className:Wt.a.item,children:Object(m.jsx)(b.b,{className:Wt.a.link,activeClassName:Wt.a.active,onClick:e.toggleDrawer(!1),to:"/profile",children:"Profile"})}),Object(m.jsx)("div",{className:Wt.a.item,children:Object(m.jsx)(b.b,{className:Wt.a.link,activeClassName:Wt.a.active,onClick:e.toggleDrawer(!1),to:"/dialogs",children:"Messages"})}),Object(m.jsx)("div",{className:Wt.a.item,children:Object(m.jsx)(b.b,{className:Wt.a.link,activeClassName:Wt.a.active,onClick:e.toggleDrawer(!1),to:"/users",children:"Users"})}),Object(m.jsx)("div",{className:Wt.a.item,children:Object(m.jsx)(b.b,{className:Wt.a.link,activeClassName:Wt.a.active,onClick:e.toggleDrawer(!1),to:"/weather",children:"Weather"})}),Object(m.jsx)(Jt.a,{}),Object(m.jsx)("div",{className:Wt.a.item,children:Object(m.jsx)(b.b,{className:Wt.a.link,activeClassName:Wt.a.active,onClick:e.toggleDrawer(!1),to:"/settings",children:"Settings"})})]})},Xt=function(e){var t=Object(r.useState)(null),n=Object(Oe.a)(t,2),a=n[0],s=n[1],c=Boolean(a),o=Object(r.useState)(null),i=Object(Oe.a)(o,2),l=i[0],u=i[1],_=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&u(e)}};return Object(m.jsx)("header",{children:Object(m.jsx)(Ft.a,{className:At.a.header,position:"static",children:Object(m.jsxs)(Mt.a,{children:[Object(m.jsx)(st.a,{onClick:_(!0),edge:"start",color:"inherit","aria-label":"open drawer",children:Object(m.jsx)(zt.a,{})}),Object(m.jsx)(Kt.a,{open:l,onClose:_(!1),onOpen:function(){},children:Object(m.jsx)(Zt,{toggleDrawer:_})}),Object(m.jsx)(Ee.a,{variant:"h6",className:At.a.title,children:"HydroBee"}),Object(m.jsxs)("div",{className:At.a.login__block,children:[Object(m.jsx)(st.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(m.jsx)(Gt.a,{})}),Object(m.jsx)(Ht.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:function(){s(null)},children:e.isAuth?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.b,{to:"/profile",children:Object(m.jsx)(Rt.a,{onClick:function(){s(null)},children:"Profile"})}),Object(m.jsx)(Rt.a,{onClick:e.logout,children:"Log out"})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b.b,{to:"/login",children:Object(m.jsx)(Rt.a,{onClick:function(){s(null)},children:"Login"})})})})]})]})})})},qt=n(64),Qt="SET_USER_DATA",Yt="GET_CAPTCHA_URL_SUCCESS",$t={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},en=function(e,t,n,a){return{type:Qt,payload:{userId:e,email:t,login:n,isAuth:a}}},tn=function(e){return{type:Yt,payload:{captchaUrl:e}}},nn=function(){return function(){var e=Object(Z.a)(J.a.mark((function e(t){var n,a,r,s,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,s=a.login,c=a.email,t(en(r,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},an=function(){return function(){var e=Object(Z.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:n=e.sent,a=n.data.url,t(tn(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qt:case Yt:return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},sn=function(e){Object(K.a)(n,e);var t=Object(V.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return Object(m.jsx)(Xt,Object(u.a)({},this.props))}}]),n}(s.a.Component),cn=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(Z.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:0===e.sent.data.resultCode&&t(en(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(sn),on=n(40),ln=n.n(on),un=w(20),_n=P(4),dn=P(8),jn=Object(x.a)({form:"login"})((function(e){return Object(m.jsx)("div",{className:ln.a.login__container,children:Object(m.jsx)(it.a,{className:ln.a.login__wrapper,children:Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{className:ln.a.name_field__wrapper,children:Object(m.jsx)("h1",{children:"Login"})}),Object(m.jsx)("div",{className:ln.a.email__text_field,children:Object(m.jsx)(O.a,{placeholder:"Email",name:"email",component:L,label:"Email",id:"outlined-basic",variant:"outlined",validate:[v,un,_n]})}),Object(m.jsx)("div",{className:ln.a.password__text_field,children:Object(m.jsx)(O.a,{placeholder:"Password",name:"password",type:"password",component:L,label:"Password",id:"outlined-basic",variant:"outlined",validate:[v,un,dn]})}),Object(m.jsxs)("div",{className:ln.a.checkbox,children:[Object(m.jsx)(O.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),e.captchaUrl&&Object(m.jsxs)("div",{className:ln.a.captcha__container,children:[Object(m.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),Object(m.jsx)(O.a,{placeholder:"Symbols from image",name:"captcha",component:L,label:"Captcha",id:"outlined-basic",variant:"outlined",validate:[v]})]}),e.error&&Object(m.jsx)("div",{className:ln.a.form__summary_error,children:e.error}),Object(m.jsx)("div",{className:ln.a.button__wrapper,children:Object(m.jsx)("button",{className:ln.a.button,children:"Login"})})]})})})})),pn=Object(D.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(Z.a)(J.a.mark((function r(s){var c,o;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ne(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?s(nn()):(10===c.data.resultCode&&s(an()),o=c.data.messages.length>0?c.data.messages[0]:"Some error",s(Object(qt.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(m.jsx)(i.a,{to:"/profile"}):Object(m.jsx)("div",{children:Object(m.jsx)(jn,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})})})),fn="INITIALIZED_SUCCESS",bn={initialized:!1},mn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fn:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},hn={},gn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn;return e},On=n(193),xn=n(178),vn=Object(B.c)({profilePage:mt,dialogsPage:j,sidebar:gn,usersPage:he,auth:rn,form:xn.a,app:mn}),wn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,Pn=Object(B.e)(vn,wn(Object(B.a)(On.a))),Nn=n(416),Sn=n(194),Cn=n(417),yn=Object(Sn.a)({palette:{primary:{main:"#2b7a78"},secondary:{main:"#f6fdfc"}}}),kn=Object(D.b)((function(e){return{initialized:e.app.initialized}}),{inititalizeApp:function(){return function(e){e(nn()).then((function(){e({type:fn})}))}}})((function(e){return Object(r.useEffect)((function(){e.inititalizeApp()})),e.initialized?Object(m.jsx)("div",{className:"app-wrapper",children:Object(m.jsxs)(Nn.a,{container:!0,children:[Object(m.jsx)(Nn.a,{item:!0,xs:12,children:Object(m.jsx)(it.a,{children:Object(m.jsx)(cn,{})})}),Object(m.jsx)(Nn.a,{item:!0,xs:12,children:Object(m.jsx)(it.a,{color:"#f6fdfc",children:Object(m.jsxs)("div",{className:"app-wrapper-content",children:[Object(m.jsx)(i.b,{exact:!0,path:"/",children:Object(m.jsx)(i.a,{to:"/profile"})}),Object(m.jsx)(i.b,{path:"/profile/:userId?",render:function(){return Object(m.jsx)(Tt,{})}}),Object(m.jsx)(i.b,{path:"/dialogs",render:function(){return Object(m.jsx)(G,{})}}),Object(m.jsx)(i.b,{path:"/users",render:function(){return Object(m.jsx)(Qe,{})}}),Object(m.jsx)(i.b,{path:"/login",render:function(){return Object(m.jsx)(pn,{})}})]})})})]})}):Object(m.jsx)(He,{})})),In=function(e){return Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b.a,{basename:"/social-network",children:Object(m.jsx)(D.a,{store:Pn,children:Object(m.jsx)(Cn.a,{theme:yn,children:Object(m.jsx)(kn,{})})})})})};o.a.render(Object(m.jsx)(In,{}),document.getElementById("root")),a()},37:function(e,t,n){e.exports={user__container:"User_user__container__2znBy",image__container:"User_image__container__3OPrH",user__photo:"User_user__photo__cIoex",user__details:"User_user__details__3OmXh",name__wrapper:"User_name__wrapper__2S3RC",name:"User_name__1EQay",status__wrapper:"User_status__wrapper__2ZJR-",status:"User_status__3hEK0",button__wrapper:"User_button__wrapper__2sjZ9"}},39:function(e,t,n){e.exports={profile_info__container:"ProfileInfo_profile_info__container__1vFZ_",photo__block:"ProfileInfo_photo__block__2GliM",photo__wrapper:"ProfileInfo_photo__wrapper__Fr4XE",select__image:"ProfileInfo_select__image__9cbOX",select__image_input:"ProfileInfo_select__image_input__2ZWw7",button__load_image:"ProfileInfo_button__load_image__1JmQg",main__photo:"ProfileInfo_main__photo__3Wqxx",details__block:"ProfileInfo_details__block__f-DIg",name:"ProfileInfo_name__2HzSR",status:"ProfileInfo_status__dGaxY"}},40:function(e,t,n){e.exports={login__container:"Login_login__container__1WodL",login__wrapper:"Login_login__wrapper__2UsLk",name_field__wrapper:"Login_name_field__wrapper__DmpDo",email__text_field:"Login_email__text_field__hajkM",password__text_field:"Login_password__text_field__2QwJK",checkbox:"Login_checkbox__53ahI",button__wrapper:"Login_button__wrapper__2M0Lc",button:"Login_button__2rSVP",form__summary_error:"Login_form__summary_error__vMQtn"}},56:function(e,t,n){e.exports={post_container:"Post_post_container__v3bVU",image__container:"Post_image__container__1BxKI",details__container:"Post_details__container__3-41N",post__text:"Post_post__text__7O1F_",like__wrapper:"Post_like__wrapper__weCyI",like:"Post_like__1tYJE",icon:"Post_icon__19IIe"}},62:function(e,t,n){e.exports={posts__container:"MyPosts_posts__container__33aHP",posts__wrapper:"MyPosts_posts__wrapper__1JKCc",posts:"MyPosts_posts__2alx6",form_post__container:"MyPosts_form_post__container__2zLws",form_post:"MyPosts_form_post__fDd11",add__post_field:"MyPosts_add__post_field__2pL6G"}},74:function(e,t,n){e.exports={paginator:"Paginator_paginator__2hrN5",page__number:"Paginator_page__number__2c2gs",page__selected:"Paginator_page__selected__3sk80",button:"Paginator_button__2sN4l"}}},[[364,1,2]]]);
//# sourceMappingURL=main.e5af5b3e.chunk.js.map