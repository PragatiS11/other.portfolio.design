(this.webpackJsonppragatishrivas=this.webpackJsonppragatishrivas||[]).push([[0],[,,,,,,function(e,t,a){e.exports={intro:"Home_intro__2HcCs",experience:"Home_experience__32mYY",extraIntro:"Home_extraIntro__3-xy4",name:"Home_name__OjYwm",profile:"Home_profile__1RsSi",profileImage:"Home_profileImage__w-SzR",techStacks:"Home_techStacks__2pVZ8",projects:"Home_projects__3kP_E",heading:"Home_heading__250zi",borderBottom:"Home_borderBottom__3cjxJ",line:"Home_line__1O1Xx",resumeBtn:"Home_resumeBtn__3Kewf"}},function(e,t,a){e.exports={container:"TechStacks_container__2oDaM",logoWrapper:"TechStacks_logoWrapper__2zROj",shake:"TechStacks_shake__1jG8g",techStacks:"TechStacks_techStacks__wyoCd",heading:"TechStacks_heading__3nSx8",borderBottom:"TechStacks_borderBottom__1kJAM"}},function(e,t,a){e.exports={card:"Card_card__1c8YS",card__Container:"Card_card__Container__2f6T5",image:"Card_image__1tJpV",colorDiv:"Card_colorDiv__8CEfb",description:"Card_description__s322D",titleContainer:"Card_titleContainer__sKzjM",popupTech:"Card_popupTech__3zqPB",actionBtns:"Card_actionBtns__x4O-I",description_container:"Card_description_container__hYl_r",dialogElements:"Card_dialogElements__1Nb0K"}},function(e,t,a){e.exports={navContainer:"Navbar_navContainer__IcOcO",logo:"Navbar_logo__1Wgtr",navbar:"Navbar_navbar__1kect",links:"Navbar_links__2-_fl",modeButton:"Navbar_modeButton__ENAre",bars:"Navbar_bars__1e9Wr",circle:"Navbar_circle__3KJyl",crescent:"Navbar_crescent__28B9H"}},function(e,t,a){e.exports={container:"About_container__1bfjN",first:"About_first__3xz70",second:"About_second__2E1yy",heading:"About_heading__7_Gx-",borderBottom:"About_borderBottom__3yk96",aboutMe:"About_aboutMe__36Qem"}},function(e,t,a){e.exports={footer:"Contact_footer__p9sfI",container:"Contact_container__10oHu",paragraph:"Contact_paragraph__1teS0",contactOptions:"Contact_contactOptions__4yvGo",shake:"Contact_shake__g1BVa",line:"Contact_line__3U3PU",copyright:"Contact_copyright__2tCH-"}},function(e,t,a){e.exports={container:"SideIcons_container__2Z9Cf",icons:"SideIcons_icons__l3KGG",iconsRihgt:"SideIcons_iconsRihgt__2dxlM",rightEmail:"SideIcons_rightEmail__1422u",line:"SideIcons_line__1eMMd"}},,,,function(e,t,a){e.exports={buttonComponent:"Button_buttonComponent__3YDzt"}},,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),o=a.n(r),i=(a(26),a(27),a(19)),s=a(2),l=a(6),d=a.n(l),j={dark:{background:"#111825",title:"#CCD6F6",para:"#8993b1",heading:"#CCD6F6",line:"#24243a",imgBackground:"#0C141B",highlightBackground:"#0f1622",sideIcons:"#8892b0",menuBackground:"#093047",card:"#112240",linkHover:"linear-gradient(120deg, #182744, #132c26"},light:{background:"#FFFFFF",title:"#233742",para:"#233742",heading:"#233742",line:"lightgray",imgBackground:"#e9f3e8",highlightBackground:"#f0f8ef",sideIcons:"#766161",menuBackground:"#aaeff8",card:"#8BD8CE",linkHover:"linear-gradient(135deg, #ccc0f5, #6fd8c1)"}},b=a(0),h=JSON.parse(localStorage.getItem("theme"))||"dark",g=Object(c.createContext)(),p=function(e){var t=e.children,a=n.a.useState(h),r=Object(s.a)(a,2),o=r[0],i=r[1],l=n.a.useState(!0),d=Object(s.a)(l,2),p=d[0],x=d[1];Object(c.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(o))}),[o]);var m={mode:o,newTheme:j[o],handleMode:function(){i("dark"===o?"light":"dark")},open:p,handleMenu:function(){x(!p)}};return Object(b.jsx)(g.Provider,{value:m,children:t})};var x=function(){var e=Object(c.useState)([0,0]),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a},m=a(16),u=a.n(m),O=function(e){var t=e.text,a=e.handleButton,c=e.padding,r=n.a.useContext(g).newTheme;return Object(b.jsx)("button",{style:{color:"".concat(r.title),background:"".concat(r.linkHover),padding:"".concat(c)},className:u.a.buttonComponent,onClick:function(){return a()},children:Object(b.jsx)("span",{children:t})})},f=a(8),_=a.n(f),v=a(52),k=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1],i=n.a.useContext(g).newTheme,l=e.img,d=e.des,j=e.title,h=e.live,p=e.gitHub,m=e.technologies,u=x(),f=Object(s.a)(u,1)[0],k=function(e){o(!1)};return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"700",className:_.a.card,style:{boxShadow:"3px 3px 5px ".concat(i.line),backgroundColor:"".concat(i.highlightBackground)},children:[Object(b.jsxs)("div",{className:_.a.image,children:[Object(b.jsx)("img",{src:l,alt:"project"}),Object(b.jsx)("div",{className:_.a.colorDiv})]}),Object(b.jsxs)("div",{className:_.a.card__Container,children:[Object(b.jsxs)("div",{className:_.a.titleContainer,style:f<=1e3?{background:"".concat(i.card)}:{background:"none"},children:[Object(b.jsx)("h2",{style:{color:"".concat(i.title)},children:j}),f<=840&&Object(b.jsx)(O,{text:"Read More",handleButton:function(){o(!r)},padding:"10px 20px"}),Object(b.jsx)("p",{style:{color:"".concat(i.para)},children:d}),Object(b.jsx)("div",{children:m.map((function(e,t){return Object(b.jsx)("span",{style:{marginLeft:"20px",color:"".concat(i.title)},children:e},t)}))})]}),Object(b.jsx)(v.a,{"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",open:r,onClose:k,children:Object(b.jsxs)("div",{style:{backgroundColor:"".concat(i.highlightBackground),padding:"20px"},children:[Object(b.jsx)("div",{className:_.a.image,children:Object(b.jsx)("img",{src:l,alt:"project"})}),Object(b.jsx)("h2",{style:{color:"".concat(i.title)},children:j}),Object(b.jsx)("p",{style:{color:"".concat(i.para)},children:d}),Object(b.jsx)("div",{className:_.a.popupTech,children:m.map((function(e,t){return Object(b.jsxs)("div",{style:{marginRight:"20px",color:"".concat(i.title)},children:[e,t!==m.length-1?",":"."]},t)}))}),Object(b.jsx)("div",{style:{backgroundColor:"".concat(i.line),height:"1px"}}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:_.a.dialogElements,children:[Object(b.jsxs)("div",{style:{color:"".concat(i.title)},className:_.a.actionBtns,children:[Object(b.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:h,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})})]}),Object(b.jsx)(O,{text:"close",handleButton:k,padding:"10px 20px"})]})]})}),Object(b.jsxs)("div",{style:{color:"".concat(i.para),background:"".concat(i.linkHover)},className:_.a.description,children:[Object(b.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:h,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})})]})]})]})},w=a(12),N=a.n(w),y=function(){var e=n.a.useContext(g).newTheme;return Object(b.jsx)("div",{className:N.a.container,children:Object(b.jsx)("div",{className:N.a.icons,style:{right:0,color:"".concat(e.sideIcons)},children:Object(b.jsxs)("div",{className:N.a.rightEmail,children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/pragati-shrivas-a0759a218/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-linkedin",children:[Object(b.jsx)("title",{children:"LinkedIn"}),Object(b.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(b.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),Object(b.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/PragatiS11","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-github",children:[Object(b.jsx)("title",{children:"GitHub"}),Object(b.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/pragati_shrivas/","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-instagram",children:[Object(b.jsx)("title",{children:"Instagram"}),Object(b.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),Object(b.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),Object(b.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-twitter",children:[Object(b.jsx)("title",{children:"Twitter"}),Object(b.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})})]})})})},C=a(7),S=a.n(C),B=function(){var e=Object(c.useContext)(g).newTheme;return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:S.a.heading,children:"Skills"}),Object(b.jsx)("div",{className:S.a.borderBottom}),Object(b.jsxs)("div",{className:S.a.container,children:[Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-html5-plain colored"}),Object(b.jsx)("span",{children:"HTML"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-css3-plain colored"}),Object(b.jsx)("span",{children:"CSS"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-javascript-plain colored"}),Object(b.jsx)("span",{children:"Javascript"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-react-original colored"}),Object(b.jsx)("span",{children:"React"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#7248B6"},className:"devicon-redux-original"}),Object(b.jsx)("span",{children:"Redux"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#509941"},className:"devicon-nodejs-plain"}),Object(b.jsx)("span",{children:"Node"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-express-original"}),Object(b.jsx)("span",{children:"Express"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:S.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-mongodb-plain colored"}),Object(b.jsx)("span",{children:"MongoDB"})]})]})]})},H=a(18),M=a.n(H),T=(a(33),a(10)),I=a.n(T),E=function(){var e=n.a.useContext(g).newTheme,t=x();Object(s.a)(t,1)[0];return Object(b.jsxs)("div",{className:I.a.container,style:{boxShadow:"3px 3px 5px ".concat(e.line)},children:[Object(b.jsx)("div",{className:I.a.first,children:Object(b.jsx)("img",{src:"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true",alt:""})}),Object(b.jsxs)("div",{className:I.a.second,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:I.a.heading,children:"About Me"}),Object(b.jsx)("div",{className:I.a.borderBottom}),Object(b.jsxs)("p",{style:{color:"".concat(e.para)},className:I.a.aboutMe,children:["Hello! My name is Pragati Shrivas and I enjoy creating things that is live on the internet.",Object(b.jsx)("br",{}),"Fast Forwarding to today, I built a number of web applications . Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am",Object(b.jsxs)("span",{style:{color:"#00a0a0"},children:[" ","looking for an opportunity as a full-Stack Web developer"]}),"."]})]})]})},P=[{img:"https://raw.githubusercontent.com/PragatiS11/reactPracticeProject/main/image/shopping.png",title:"Shopping Center",des:"Developed a user-friendly online shopping application named Apna Shopping Center Implemented essential features including user login and signup Implemented product filtering for easy product discovery",demo:"",live:"https://phenomenal-croquembouche-ec5830.netlify.app/",gitHub:"https://github.com/PragatiS11/clean-science-9624",technologies:[" ","HTML","CSS","JavaScript"]},{img:"https://raw.githubusercontent.com/PragatiS11/reactPracticeProject/main/image/child.png",title:"EduKin",des:"Contributed to the development of Edukin, an educational website catering to children.",demo:"",live:"https://gleaming-rabanadas-c8636b.netlify.app/",gitHub:"https://github.com/ak8459/mushy-apparatus-2910",technologies:["HTML","CSS","JavaScript"]}],L=a(11),A=a.n(L),W=function(){var e=n.a.useContext(g).newTheme;return Object(b.jsxs)("footer",{className:A.a.footer,id:"contact",children:[Object(b.jsxs)("div",{className:A.a.container,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},children:"Get in Touch"}),Object(b.jsx)("p",{style:{color:"".concat(e.para)},className:A.a.paragraph,children:"I'm actively looking for any new opportunities, in full-stack web development."}),Object(b.jsxs)("div",{style:{color:"".concat(e.title)},className:A.a.contactOptions,children:[Object(b.jsx)("a",{href:"tel:9098371208","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-phone-alt"})}),Object(b.jsx)("a",{href:"mailto: pragatishrivas2000@gmail.com","aria-label":"email",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"far fa-envelope"})}),Object(b.jsx)("a",{href:"","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)("a",{href:"https://github.com/PragatiS11","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/pragati_shrivas/","aria-label":"Instagram",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/pragati-shrivas-a0759a218/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in"})})]})]}),Object(b.jsx)("div",{style:{background:"".concat(e.line)},className:A.a.line}),Object(b.jsx)("div",{style:{color:"".concat(e.para)},className:A.a.copyright})]})},F=function(e){var t=e.scrollRef,a=Object(c.useState)(P.slice(0,4)),r=Object(s.a)(a,2),o=r[0],l=r[1],j=n.a.useContext(g).newTheme,h=Object(c.useState)(0),p=Object(s.a)(h,2),x=p[0],m=p[1],u=Object(c.useState)(0),f=Object(s.a)(u,2),_=f[0],v=f[1];Object(c.useEffect)((function(){M.a.init()}));var w=function(){m(window.pageYOffset)};Object(c.useEffect)((function(){return window.addEventListener("scroll",w),function(){return window.removeEventListener("scroll",w)}}),[]),Object(c.useEffect)((function(){document.body.style.backgroundColor=j.background}),[j]);console.log(x);return Object(b.jsxs)("div",{ref:t,children:[Object(b.jsx)(y,{}),Object(b.jsxs)("div",{id:"home",className:d.a.profile,style:{backgroundColor:"".concat(j.imgBackground)},children:[Object(b.jsxs)("div",{"data-aos":"fade-zoom-out",className:d.a.intro,style:{color:"".concat(j.para),transform:"translateX(-".concat(2.5*x,"px)"),opacity:"".concat(x>300?"0":x>160?".5":"1")},children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{children:"Hi, My name is"}),Object(b.jsx)("div",{className:d.a.name,style:{color:"".concat(j.title)},children:"Pragati Shrivas."})]}),Object(b.jsx)("h1",{children:"I'm an Aspiring full-stack web developer with a specialization in MERN stack with a passion for learning with an endless supply of optimism and curiosity."}),Object(b.jsx)("div",{className:d.a.btn,children:Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1oyHHUQBNF8GfDv7xZe6GbG8ZPuowvcVp/view?usp=sharing",target:"blank",children:Object(b.jsx)(O,{text:Object(b.jsxs)("span",{className:d.a.resumeBtn,children:[Object(b.jsx)("span",{children:"Resume"})," ",Object(b.jsx)("i",{className:"fas fa-file-download"})]}),handleButton:function(){}})})})]}),Object(b.jsx)("div",{style:{transform:"translateX(".concat(2.5*x,"px)"),opacity:"".concat(x>300?"0":x>160?".5":"1")},className:d.a.profileImage,children:Object(b.jsx)("img",{src:"https://raw.githubusercontent.com/PragatiS11/reactPracticeProject/main/image/img.jpeg",alt:"Profile pic"})})]}),Object(b.jsx)("div",{id:"about",style:{background:"".concat(j.highlightBackground)},className:d.a.experience,children:Object(b.jsx)(E,{})}),Object(b.jsx)("div",{id:"skills",className:d.a.techStacks,children:Object(b.jsx)(B,{})}),Object(b.jsxs)("div",{id:"projects",className:d.a.projects,children:[Object(b.jsx)("h1",{style:{color:"".concat(j.title)},className:d.a.heading,children:"Things I've Developed"}),Object(b.jsx)("div",{className:d.a.borderBottom}),Object(b.jsx)("div",{children:o.map((function(e,t){return Object(b.jsx)(k,Object(i.a)({},e),t)}))}),Object(b.jsx)(O,{text:P.length!==o.length?"Show More":"Show Less",handleButton:function(){P.length===o.length?(l(P.slice(0,4)),window.scrollTo(0,_)):(l(P),v(x))}})]}),Object(b.jsx)("div",{style:{background:"".concat(j.highlightBackground)},children:Object(b.jsx)(W,{})})]})},D=a(9),z=a.n(D),R={bar1:{position:"absolute",width:"15px",transform:"rotate(45deg)"},bar2:{position:"absolute",left:"-2px"},bar3:{position:"absolute",width:"15px",transform:"rotate(-45deg)"}},G={background:"linear-gradient(40deg, #8983F7, #1c2931 70%)"},J={transform:"scale(1)"},Y=function(){var e=Object(c.useState)(window.pageYOffset),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useRef)(),o=Object(c.useContext)(g),i=o.newTheme,l=o.mode,d=o.handleMode,j=o.open,h=o.handleMenu;return window.onscroll=function(){var e=window.pageYOffset;r.current.style.top=a>e?"0":"-80px",n(e)},Object(b.jsx)("nav",{ref:r,className:z.a.navContainer,style:{background:"".concat(i.background),boxShadow:"3px 3px 10px ".concat(i.line)},children:Object(b.jsxs)("div",{className:z.a.navbar,children:[Object(b.jsx)("a",{href:"#home",children:Object(b.jsx)("div",{className:z.a.logo,children:Object(b.jsx)("img",{src:"https://t3.ftcdn.net/jpg/03/68/95/08/360_F_368950850_aMW6C9P5SV7udFGHWgz97fvgNVsnOvpp.jpg",alt:"Logo"})})}),Object(b.jsxs)("div",{style:{color:"".concat(i.title)},className:z.a.links,children:[Object(b.jsx)("a",{href:"#home",children:"Home"}),Object(b.jsx)("a",{href:"#about",children:"About"}),Object(b.jsx)("a",{href:"#skills",children:"Skills"}),Object(b.jsx)("a",{href:"#projects",children:"Projects"}),Object(b.jsx)("a",{href:"#contact",children:"Contact"})]}),Object(b.jsx)("button",{"aria-label":"dark"===l?"Light Mode":"Dark Mode",title:"dark"===l?"Toggle Light Mode":"Toggle Dark Mode",style:{color:"".concat(i.title)},className:z.a.modeButton,onClick:d,children:Object(b.jsx)("div",{className:z.a.circle,style:"light"===l?G:{},children:Object(b.jsx)("div",{style:"light"===l?J:{},className:z.a.crescent})})}),Object(b.jsxs)("div",{onClick:h,className:z.a.bars,children:[Object(b.jsx)("div",{style:j?{background:"".concat(i.title)}:R.bar1}),Object(b.jsx)("div",{style:j?{background:"".concat(i.title)}:R.bar2}),Object(b.jsx)("div",{style:j?{background:"".concat(i.title)}:R.bar3})]})]})})};var V=function(){var e=n.a.useContext(g),t=e.newTheme,a=e.open,r=e.handleMenu,o=Object(c.useRef)();return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsxs)("div",{className:"components",children:[Object(b.jsxs)("div",{style:{background:"".concat(t.menuBackground),color:"".concat(t.title),left:"".concat(a?"-100vw":"0")},className:"links",children:[Object(b.jsx)("a",{onClick:r,href:"#home",children:"Home"}),Object(b.jsx)("a",{onClick:r,href:"#about",children:"About"}),Object(b.jsx)("a",{onClick:r,href:"#projects",children:"Projects"}),Object(b.jsx)("a",{onClick:r,href:"#skills",children:"Skills"}),Object(b.jsx)("a",{onClick:r,href:"#contact",children:"Contact"})]}),Object(b.jsx)(Y,{}),Object(b.jsx)(F,{scrollRef:o})]})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{children:Object(b.jsx)(V,{})})}),document.getElementById("root")),K()}],[[34,1,2]]]);
//# sourceMappingURL=main.6b1bdd05.chunk.js.map