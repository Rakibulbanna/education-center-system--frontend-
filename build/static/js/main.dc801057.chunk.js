(this["webpackJsonpenglish-coaching"]=this["webpackJsonpenglish-coaching"]||[]).push([[0],{57:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(26),a=c.n(r),i=(c(70),c(57),c(3)),j=c(101),l=c(102),o=c(100),d=c(106),h=c(1),b=function(e){var t=e.course,c=t.name,n=t.duration,s=t.modeltest,r=t.price,a=t.img;return Object(h.jsx)("div",{className:"course-part",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.a.Img,{variant:"top",className:"mentor-photo",src:a}),Object(h.jsxs)(d.a.Body,{children:[Object(h.jsx)(d.a.Title,{children:c}),Object(h.jsxs)(d.a.Text,{children:[Object(h.jsxs)("p",{children:["Duration: ",Object(h.jsxs)("small",{className:"text-info",children:[" ",n," Days"]})]}),Object(h.jsxs)("h5",{children:["Price:",r," taka"]}),Object(h.jsxs)("p",{children:["Model Test: ",s]}),Object(h.jsx)("button",{className:"order-btn",children:"Order Now"})]})]})]})})})},x=(c(72),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("./home.JSON").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(h.jsxs)(j.a,{children:[Object(h.jsx)("h2",{className:"text-center",children:"Our sample courses"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{xs:1,md:3,className:"g-4",children:c.map((function(e){return Object(h.jsx)(b,{course:e})}))})]})}),u=(c(73),function(){return Object(h.jsxs)("div",{class:"card",children:[Object(h.jsxs)("div",{class:"card-body text-center",children:[Object(h.jsx)("h5",{class:"card-title",children:"Founder:"}),Object(h.jsx)("h2",{class:"card-title",children:"Rakib ul Banna"}),Object(h.jsx)("p",{class:"card-text",children:"We are makeing an education center system, where teacher, student and admin or authority can easily manage the education center. Our system will help the three types of user such as Teacher, student and admin. Here teachers can easily see the details of student, Ongoing training courses and research. Students can register them self in the training or research, view ongoing research, published research, see news etc. Admin can update, delete and modify all the function."}),Object(h.jsx)("h2",{children:"Thank You"})]}),Object(h.jsx)("div",{class:"card-footer text-center",children:Object(h.jsx)("small",{class:"text-muted",children:"Hot Line : 018*********"})})]})}),O=c(53),m=(c(79),c(36)),f=c(32),p=(c(80),function(e){var t,c=e.cart,n=0,s=Object(f.a)(c);try{for(s.s();!(t=s.n()).done;){n+=t.value.price}}catch(j){s.e(j)}finally{s.f()}var r=n>0?15:0,a=.1*(n+r),i=(n+a+r).toFixed(2);return Object(h.jsxs)("div",{className:"cart-container",children:[Object(h.jsx)("h2",{children:"order summary: "}),Object(h.jsxs)("h5",{children:["Item ordered: ",c.length]}),Object(h.jsxs)("h5",{children:["Shipping Charge : $",r]}),Object(h.jsxs)("h5",{children:["Before Tax : $",n]}),Object(h.jsxs)("h5",{children:["Tax : $",a]}),Object(h.jsxs)("h2",{className:"orderTotal",children:["Order Total : $",i," "]}),Object(h.jsx)("h2",{children:"Oder list"}),c.map((function(e){return Object(h.jsxs)("div",{className:"cart-selected-container",children:[Object(h.jsx)("div",{className:"cart-selected-header",children:Object(h.jsx)("p",{children:e.name})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.img,alt:""})})]})}))]})}),v=c(54),g=(c(81),c(59)),N=function(e){var t=e.product,c=t.name,n=t.img,s=t.price,r=t.stock,a=t.seller,i=t.star;return Object(h.jsx)(o.a,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.a.Img,{variant:"top",src:n,alt:""}),Object(h.jsxs)(d.a.Body,{children:[Object(h.jsx)(d.a.Title,{children:c}),Object(h.jsxs)("h3",{children:["price : $",s]}),Object(h.jsx)(g.a,{initialRating:i,emptySymbol:"far fa-star fa-2x icon-color",fullSymbol:"fas fa-star fa-2x icon-color"}),Object(h.jsxs)(d.a.Text,{children:[Object(h.jsxs)("p",{children:["by : ",a]}),Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:["only ",r," left in stock - order soon"]})})]}),Object(h.jsxs)("button",{onClick:function(){return e.handleAddToCart(e.product)},className:"purchase-button",children:[Object(h.jsx)(O.a,{icon:v.a}),"\xa0\xa0add to cart"]})]})]})})},y=(c(82),function(){return localStorage.getItem("shopping_cart")}),S=function(e){localStorage.setItem("shopping_cart",JSON.stringify(e))},k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),a=Object(i.a)(r,2),o=a[0],d=a[1],b=Object(n.useState)([]),x=Object(i.a)(b,2),u=x[0],O=x[1];Object(n.useEffect)((function(){fetch("./products.JSON").then((function(e){return e.json()})).then((function(e){s(e),O(e)}))}),[]),Object(n.useEffect)((function(){if(c.length){var e=function(){var e=y();return e?JSON.parse(e):{}}(),t=[],n=function(n){var s=c.find((function(e){return e.key===n}));if(s){var r=e[n];s.quantity=r,t.push(s)}};for(var s in e)n(s);d(t)}}),[c]);var f=function(e){var t=[].concat(Object(m.a)(o),[e]);d(t),function(e){var t=y(),c={};if(t)if((c=JSON.parse(t))[e]){var n=c[e]+1;c[e]=n}else c[e]=1;else c[e]=1;S(c)}(e.key)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"search-container",children:Object(h.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value,n=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));O(n),console.log(n.length)},placeholder:"serch here"})}),Object(h.jsxs)("div",{className:"shop-container",children:[Object(h.jsxs)(j.a,{children:[Object(h.jsxs)("h1",{className:"text-center",children:["Our total Course:",u.length]}),Object(h.jsx)(l.a,{xs:1,md:3,className:"g-4",children:u.map((function(e){return Object(h.jsx)(N,{product:e,handleAddToCart:f},e.key)}))})]}),Object(h.jsx)("div",{children:Object(h.jsx)(p,{cart:o})})]})]})},w=(c(83),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){fetch("./products.json").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(h.jsx)("div",{children:Object(h.jsx)(k,{})})}),T=(c(84),function(e){var t=e.mentor,c=t.name,n=t.email,s=t.img,r=t.address,a=t.titel;return Object(h.jsx)("div",{className:"mentor-part",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.a.Img,{variant:"top",className:"mentor-photo",src:s}),Object(h.jsxs)(d.a.Body,{children:[Object(h.jsx)(d.a.Title,{children:a}),Object(h.jsxs)(d.a.Text,{children:[Object(h.jsx)("p",{children:Object(h.jsx)("small",{className:"text-info",children:n})}),Object(h.jsx)("h2",{children:c}),Object(h.jsxs)("address",{children:["Address:",Object(h.jsxs)("small",{className:"text-warning",children:[" ",r]})]}),Object(h.jsx)("button",{className:"order-btn",children:"Order Now"})]})]})]})})})}),C=(c(85),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("./teacher.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(h.jsxs)(j.a,{children:[Object(h.jsxs)("h2",{className:"text-center",children:["Our Mentor:",c.length]}),Object(h.jsx)(l.a,{xs:1,md:3,className:"g-4",children:c.map((function(e){return Object(h.jsx)(T,{mentor:e},e.id)}))})]})}),I=(c(86),function(){return Object(h.jsx)("div",{class:"card-body text-center",children:Object(h.jsx)("h2",{children:"This page is Not Found 404"})})}),B=(c(87),function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"text-center fixed-bottom footer",children:["Copyright \xa9",Object(h.jsx)("small",{children:"Developed by Rakib ul banna"})]})})}),E=c(18),F=c(9),J=c(104),M=c(105),A=c(103),L=c(28),$=(c(88),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(J.a,{className:"menu-link w-100 p-3 m-10 b",collapseOnSelect:!0,expand:"lg",id:"navbar",children:[Object(h.jsx)(J.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(J.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(M.a,{className:"me-auto",children:[Object(h.jsx)(E.b,{to:"/",className:"navbar-brand text-white logo-space logo-sp",children:"Education center system"}),Object(h.jsx)(E.b,{exact:!0,to:"/home",className:"navbar-brand text-white link-sp ",children:"Home"}),Object(h.jsx)(E.b,{exact:!0,to:"/about",className:"navbar-brand text-white link-sp ",children:"About"}),Object(h.jsx)(E.b,{exact:!0,to:"/course",className:"navbar-brand text-white link-sp ",children:"Course"}),Object(h.jsx)(A.a,{title:Object(h.jsx)("span",{className:"navbar-brand text-white",children:"Reserch"}),renderMenuOnMount:!0,children:Object(h.jsx)(L.a.Menu,{show:function(e){s(!c)},children:Object(h.jsxs)("div",{className:"menu-link",children:[Object(h.jsx)(L.a.Item,{children:Object(h.jsx)(E.b,{exact:!0,to:"/upcommingreserch",className:" navbar-brand",children:"upcomming reserch"})}),Object(h.jsx)(L.a.Item,{children:Object(h.jsx)(E.b,{exact:!0,to:"/ongoingreserch",className:"  navbar-brand",children:"ongoing reserch"})}),Object(h.jsx)(L.a.Item,{children:Object(h.jsx)(E.b,{exact:!0,to:"/publishedreserch",className:"  navbar-brand",children:"published reserch"})})]})})}),Object(h.jsx)(E.b,{exact:!0,to:"/mentor",className:"navbar-brand text-white link-sp ",children:"Mentor"})]})})]})})}),D=function(){return Object(h.jsx)("div",{})},R=function(){return Object(h.jsx)("div",{})},H=function(){return Object(h.jsx)("div",{})};var P=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(E.a,{children:[Object(h.jsx)($,{}),Object(h.jsxs)(F.c,{children:[Object(h.jsx)(F.a,{exact:!0,path:"/",children:Object(h.jsx)(u,{})}),Object(h.jsx)(F.a,{path:"/home",children:Object(h.jsx)(x,{})}),Object(h.jsx)(F.a,{path:"/about",children:Object(h.jsx)(u,{})}),Object(h.jsx)(F.a,{exact:!0,path:"/course",children:Object(h.jsx)(w,{})}),Object(h.jsx)(F.a,{exact:!0,path:"/upcommingreserch",children:Object(h.jsx)(D,{})}),Object(h.jsx)(F.a,{exact:!0,path:"/ongoingreserch",children:Object(h.jsx)(R,{})}),Object(h.jsx)(F.a,{exact:!0,path:"/publishedreserch",children:Object(h.jsx)(H,{})}),Object(h.jsx)(F.a,{exact:!0,path:"/mentor",children:Object(h.jsx)(C,{})}),Object(h.jsx)(F.a,{exact:!0,path:"*",children:Object(h.jsx)(I,{})})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsx)(B,{})})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};c(93);a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),_()}},[[94,1,2]]]);
//# sourceMappingURL=main.dc801057.chunk.js.map