(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),c=a("NmYn"),r=a.n(c),p=a("Wbzz"),s=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),b=a.n(l),d=a("QH2O"),u=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,n=e.tabs,c=void 0===n?[]:n;return Object(m.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=c.length,t[u.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},A=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,i=Object(p.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,c=n.baseUrl,r=n.subDirectory,s=c+"/edit/"+n.branch+r+"/src/pages"+t;return c?Object(m.b)("div",{className:"bx--row "+A.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===n,s=new RegExp(n+"/?(#.*)?$"),o=i.replace(s,a);return Object(m.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(m.b)(p.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},c))))))},t}(n.a.Component),y=a("MjG9"),v=a("CzIb"),w=a("Asxa"),I=a("OIbQ"),x=a.n(I),C=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:x.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,c=t.frontmatter,l=void 0===c?{}:c,b=t.relativePagePath,d=t.titleType,u=l.tabs,A=l.title,h=l.theme,f=l.description,w=l.keywords,I=l.date,x=Object(v.a)().interiorTheme,k=Object(p.useStaticQuery)("2456312558").site.pathPrefix,B=k?i.pathname.replace(k,""):i.pathname,S=u?B.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",T=h||x;return Object(m.b)(o.a,{tabs:u,homepage:!1,theme:T,pageTitle:A,pageDescription:f,pageKeywords:w,titleType:d},Object(m.b)(g,{title:n?Object(m.b)(n,null):A,label:"label",tabs:u,theme:T}),u&&Object(m.b)(N,{title:A,slug:B,tabs:u,currentTab:S}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:b}),Object(m.b)(C,{date:I})),Object(m.b)(O.a,{pageContext:t,location:i,slug:B,tabs:u,currentTab:S}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},QPcP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var i,n=a("wx14"),c=a("zLVn"),r=(a("q1tI"),a("7ljp")),p=a("013z"),s=(a("T0C+"),a("qKvR"),{}),o=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:s},b=p.a;function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o,{mdxType:"PageDescription"},Object(r.b)("p",null,"Securing Inventory App with App ID")),Object(r.b)("p",null,"To secure the application we are using the capabilities available within the IBM Cloud platform to enable integration with AppId.With Openshift 3.11,\na simple annotation was used on the ingress to enable Appid.In Openshift 4.x,Red Hat OpenShift on IBM Cloud annotations (ingress.bluemix.net/","[annotation]",")\nand NGINX annotations (nginx.ingress.kubernetes.io/","[annotation_name]",") are not supported for the router or the Ingress resource. With Openshift 4.x,AppId\nintegration is enabled with SDKs."),Object(r.b)("h2",null,"Prerequisites"),Object(r.b)("p",null,"The following prerequisites are required for AppId integration:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"An instance of the App ID service:\nIn IBM Cloud Dashboard, go to “Services” and select the AppId instance."),Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.069444444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAZUlEQVQI1zVNCQrDMAzr/98aL6VxnDo+NGI2gUAHQhfPhU+/IUuw90ZmFlUVIgKPKO/ulf07M0dEwtyw9P3tAteSF9QIrTUwT2SiyjFGZefkQHWDiGBmYObSvXc8c+Dm54zAy/EFfbyb8shZ6HUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AppId Service",title:"AppId Service",src:"/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/3cbba/AppIdIntegration01.png",srcSet:["/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/7fc1e/AppIdIntegration01.png 288w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/a5df1/AppIdIntegration01.png 576w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/3cbba/AppIdIntegration01.png 1152w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/0b124/AppIdIntegration01.png 1728w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/4ea69/AppIdIntegration01.png 2304w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/86470/AppIdIntegration01.png 2988w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A set of service credentials:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In AppId instance, go to “Application”. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on “Add application”.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter your application name ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the type as Regular web application.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on Save to create the service credentials for your application."),Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrklEQVQoz6WSTW8SURSGZw9b/4kCboi/pOqq/0AXMINIK8ZFF5qwNiiGjSYmFkKHj738CunMYOmkynx2Ph9zh4LQEjee5Ml7z2Tum/OeXOn09Bv9fp+zswGj0YjxeLxB9Nusvw8GA3q9HqqqZv1wOKTVatFsNpEs28ZxPTz/mv+pbrdLo9FA+jFfol385qfp8MuJWLoxV3bCpXnFYnHBYnGJaZq4rkscx3tJ05ROp7My9EKw3BDLCfEC8EMyDYIQz/M2hGGYTSIu30ZUu92mVqshWdaSOIrEr6RJsiJNSDJNNya3+23ztaGiKEi6rqNpGrphIM7z+RzDEBg7zGYzbNveO+XOhCKOZVk4jrOJ5/v+hixulKDpc841I7scxSlRkq40TomTtaGCJHYjFisiBUGQsV0iPokLeECSreYu8OmjiFxDmkwm2Tvai6qiDid8nUZ8nrLi+12+TOGk9YGXdQWpXC5TKpUoFAoUi8VdCvd58PAR956a5J+E5A488o99cjfkb8gdXHNYec+bVzWkSqVCtVpFluVM/yIjC5UVnr14y/P6u39SP3rN8fERfwBpSe247L762gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AppId Credentials Creation",title:"AppId Credentials Creation",src:"/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/3cbba/AppIdInt02a.png",srcSet:["/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/7fc1e/AppIdInt02a.png 288w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/a5df1/AppIdInt02a.png 576w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/3cbba/AppIdInt02a.png 1152w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/0b124/AppIdInt02a.png 1728w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/369ed/AppIdInt02a.png 1916w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"After saving, your application credentials will get created.Click on the down Arrow at\nthe left end of your application name and get the credentials."),Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.791666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAcklEQVQY03WPCwrEIAxEvf9FBRFRq2j8zWLAErpt4DEDCZNEEXXknNF7x1oLc07WN2qtKKX8zR2/VV1XhHMOxhhWay1CCPcCybOePQ7cIVprDvLeMzFGpJT48s3xrTWGiDDGuEOlqn3JaX5tP+9IZJD0P7OOOodj69+bAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AppId Credentials Creation",title:"AppId Credentials Creation",src:"/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/3cbba/AppidInt03.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/7fc1e/AppidInt03.png 288w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/a5df1/AppidInt03.png 576w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/3cbba/AppidInt03.png 1152w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/0b124/AppidInt03.png 1728w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/4ea69/AppidInt03.png 2304w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/c474b/AppidInt03.png 2862w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NPM version 4 or higher."),Object(r.b)("li",{parentName:"ul"},"Node version 6 or higher.")),Object(r.b)("h3",null,"Enable Appid in the solution"),Object(r.b)("h4",null,"Installation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"By using the command line, change to the directory that contains your Node.js app.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install the AppID service and other dependencies."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save ibmcloud-appid\nnpm install --save passport\nnpm install --save express-session\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Obtain your credentials by navigating to the ",Object(r.b)("b",null,"Applications")," tab of the AppId dashboard as mentioned in ",Object(r.b)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Obtain the application as mentioned in ",Object(r.b)("a",{parentName:"p",href:"#appid-redirect-url-config"},"AppId Redirect Url Config"),"."))),Object(r.b)("h4",null,"Create binding secret for appid in your namespace"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Login to the IBM Cloud cluster where your workshop-team-one ocp cluster resides.\nibmcloud login -u ","[username]"," -p ","[password]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Login to your ocp cluster using the oc cli."),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.013888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAoUlEQVQI142MQQqCUAAFvUFE6wgi+plJqZ+PaYJXMPACHqDoBAUd0n1u1J0gIphMJLRoETQwmzfwtJVuogwD3/cRQmBZNq7r4jgOUsov35tSijAMCYIAz/OIoiNJkgzGcYzmSIVYb1gsdUbjCafzhSx7kKYpZVlSFMVP8zynbVv6vueDtj+E7GyJubWZzuZcb/chdN2Tf6jrmqqqaJpmOH8BNvumhoXnfg4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Openshift cli login Page",title:"Openshift cli login Page",src:"/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/3cbba/ocp-cli-login.png",srcSet:["/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/7fc1e/ocp-cli-login.png 288w","/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/a5df1/ocp-cli-login.png 576w","/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/3cbba/ocp-cli-login.png 1152w","/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/0b124/ocp-cli-login.png 1728w","/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/4ea69/ocp-cli-login.png 2304w","/ibm-gsi-cloudnative-journey/static/c8608e0864b0cd5189a211c1e44c355c/164d8/ocp-cli-login.png 2632w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Click on “Copy Login Command”. It will redirect to a new page."),Object(r.b)("li",{parentName:"ul"},"Click the display token link. Copy the “Log in with this token” command & login\nto oc cli.\nEx- oc login —token=sha256~bfGcq7l6H3JHd9GwbNRaSsJ7cDAiLK5EPF4tbPQ-WfY —server=",Object(r.b)("a",{parentName:"li",href:"https://c108-e.eu-gb.containers.cloud.ibm.com:31718"},"https://c108-e.eu-gb.containers.cloud.ibm.com:31718")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Navigate to your namespace where you are running the inventory solution pipeline and create the binding secret for He the Appid instance on the cloud account"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"   oc project [proj_name]\n   ibmcloud oc cluster service bind --cluster workshop-team-one \n   --namespace [YOUR-NAMESPACE] --service workshop-team-one-appid\n")))),Object(r.b)("h4",null,"Update the configuration values in the configuration files"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Put these credentials in ",Object(r.b)("i",null,"server/config/mappings.json")," to be referred by application:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},' {\n "APPID_CONFIG": ""{\\"tenantId\\":\\"<tenantId_value>\\",\\"oauthServerUrl\\":\\"<oauthServer_URL>\\",\\"clientId\\": \\"<ClientID_value>\\", \\"secret\\": \\"<secret_value>\\"}",\n "application_url":"<openshift_appln_route_url>"\n }\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add the following parameters in ",Object(r.b)("inlineCode",{parentName:"p"},"values.yaml")," along with its values:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},' appidBinding: "binding-workshop-team-one-appid"\n \n')))),Object(r.b)("h4",null,"Adding the dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add the following ",Object(r.b)("i",null,"require")," definitions to your ",Object(r.b)("inlineCode",{parentName:"p"},"server/server.js"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"const express = require('express');\nconst session = require('express-session')\nconst passport = require('passport');\nconst WebAppStrategy = require(\"ibmcloud-appid\").WebAppStrategy;\nconst CALLBACK_URL = \"/ibm/cloud/appid/callback\";\nconst appidConfig = require(\"./config/mappings.json\");\n")))),Object(r.b)("h4",null,"Activate the appid integration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In ",Object(r.b)("i",null,"server.js"),",set up your express app to use express-session middleware."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"const app = express();\napp.use(session({\n        secret: appidConfig.secret,\n        resave: true,\n        saveUninitialized: true\n    }));\napp.use(passport.initialize());\napp.use(passport.session());\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the same file,initialize the SDK using the information obtained in the previous steps."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"}," var appidcfg=JSON.parse(appidConfig.APPID_CONFIG);\n passport.use(new WebAppStrategy({\n tenantId: appidcfg.tenantId,\n clientId: appidConfig.client_id,\n secret: appidConfig.secret,\n oauthServerUrl: appidcfg.oauthServerUrl,\n redirectUri: appidConfig.application_url+CALLBACK_URL\n }));\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the same file,configure passport with serialization and deserialization. This configuration step is required for authenticated session persistence across HTTP requests. For more information, see the ",Object(r.b)("a",{parentName:"p",href:"http://www.passportjs.org/docs/"},"passport docs")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"passport.serializeUser(function(user, cb) {\ncb(null, user);\n});\npassport.deserializeUser(function(obj, cb) {\ncb(null, obj);\n});\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add the following code to your ",Object(r.b)("i",null,"server.js")," to issue the service redirects."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"app.get(CALLBACK_URL, passport.authenticate(WebAppStrategy.STRATEGY_NAME));\napp.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME ));\n")))),Object(r.b)("h4",null,"Adding environment variables to ",Object(r.b)("inlineCode",{parentName:"h4"},"deployment.yaml")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"deployment.yaml")," file and add environment variables that use those values to the top of the existing ",Object(r.b)("inlineCode",{parentName:"li"},"env")," block:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  - name: APPID_CONFIG\n    valueFrom:\n       secretKeyRef:\n          name: {{ .Values.appidBinding | quote }}\n          key: binding\n  - name: APP_URI\n    valueFrom:\n      configMapKeyRef:\n        name: appid-ui\n        key: route\n")))),Object(r.b)("h3",null,"AppId redirect url config"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Get the ingress for the UI component by running ",Object(r.b)("inlineCode",{parentName:"p"},"igc ingress -n dev-{initials}"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the IBM Cloud resource list - ",Object(r.b)("inlineCode",{parentName:"p"},"https://cloud.ibm.com/resources"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the AppId instance to the ",Object(r.b)("inlineCode",{parentName:"p"},"Manage Authentication")," -> ",Object(r.b)("inlineCode",{parentName:"p"},"Authentication Settings")," view"),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2ElEQVQoz5WRzU4DMQwG8/5PxhNwROK3hW272Tixk2yTQWxbynJA5TAaO5Y+y4qr85HeO0MwximQkhJEKKXSeqe1tsxvxYkWegdRQ2IiqV2xSq6nha3dhrOcqXPj4CPDIbAbhYOXpU9aSTb/C5dLWQK3g+d5M/C+Fx5eRx43HkmnwKgz0f5Ar3blHDiJ4UMixMwoGR8zal+BBbXy7XV9mZ9cyozrvZ1PDjy9vLH9GPDTtPSTKGqGWv5lW/V29m6MOIBSj8sHxJSRH0S9bK8rX+rVe67c3W/5BBq8IL1j5N8TAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AppId authentication settings",title:"AppId authentication settings",src:"/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/3cbba/appid-authentication-settings.png",srcSet:["/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/7fc1e/appid-authentication-settings.png 288w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/a5df1/appid-authentication-settings.png 576w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/3cbba/appid-authentication-settings.png 1152w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/0b124/appid-authentication-settings.png 1728w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/4ea69/appid-authentication-settings.png 2304w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/4640e/appid-authentication-settings.png 3072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add the redirect url for the application to the web redirect URLs. The redirect url will have\nthe following form:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"`{ingress url}/ibm/cloud/appid/callback`\n\ne.g. `https://inventory-manangement-ui-dev.sms-test-oc-cluster.us-east.containers.appdomain.cloud/ibm/cloud/appid/callback`\n")))),Object(r.b)("h3",null,"Add users to AppId"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the AppId instance to ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Directory")," -> ",Object(r.b)("inlineCode",{parentName:"p"},"Users")),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABKElEQVQoz41RW07DQAzM/U/CKRBH4AAgBKgU1DT7sr3PZJAdQBWiEh8jj9cev3ZyPoBYsG0bFipYQoKIIBFjjIF13SwG/A9TTISci4lICiIxWAqIs/mUO/pYMcb2JzR2iYlZQMRofcXsCO8nh/eTx2lJIGkgqUh8HXtOh+QOKR2TDxGJCH1sePtY8Ph8wNPLEa/HGSFl+Cg7fnEXGEtgxK+iLhbMPmMKSSC5otRu06ivtrbVOkabpCFJM6vinVf4mOFiRqKCu/sDbm4fMOmnsIitHCkjkuDsgt1QbxIiIZeGRLLz2jAv3vzWB2rrcCHZQLby2XlIzuh9ReKCxLoamaC2YSJtpvzb1yLaRLmUas31TeNTiFq9WlDX4dzBeZjdD34N/cde5n4Cwypsw63WJaoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AppId cloud directory users",title:"AppId cloud directory users",src:"/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/3cbba/appid-cloud-directory-users.png",srcSet:["/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/7fc1e/appid-cloud-directory-users.png 288w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/a5df1/appid-cloud-directory-users.png 576w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/3cbba/appid-cloud-directory-users.png 1152w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/0b124/appid-cloud-directory-users.png 1728w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/4ea69/appid-cloud-directory-users.png 2304w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/ed928/appid-cloud-directory-users.png 3094w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add yourself as a user with an email address, name, and password#"))),Object(r.b)("h3",null,"Access the UI"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open a browser to the UI Application URL")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You should be met with the AppId login screen. (This screen can be customized from the AppId service console but for now we are showing the default screen.)"),Object(r.b)("p",{parentName:"li"},"   ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXklEQVQ4y51US29SQRjlr7S1XbgTbEukgECBNhQT19Uf4dqFiQuN/gVX7nzESDSmMW3UKA8vcmmNCzcaIUoVuFy4VB73zuOYGR4BystOcnK+mfnmzLkz31yba8MLp3MDF+xrcDjWYLevYnnlPBYWl4extCJ5UfDCuf744tJwns3tD8MT3EZkOwJvKAr31lX4fZvweP0IBELw+YPweHzwXHIjENyC93IAm6Ed+AMhmePyhOEPhHFx1Qm7Yx22hKIikc4iqWQQV7KIp4+QSqtIplV8zBwi9Skr45SSQSrdiRX1s4w7/UPJCSWDpKLCxgGMgo3wuHk2Ic/GGcMksBkYt8bGOcckUMpgEYqWaaFtWh22LBAqBIUfnFozUVA0sUiIChBKJWRfuOETBDGuickugzOh3GEZ0248kDPQxgr2Puf9l2PceKDibiyPO89zuP8ij5uPf+D2sxyMBuk7nC1IqeSvT2J4uh5EInoNH3Z2Eb9yHW9dESSiu2iXtY6gcD9LsLerlc+htfcSeHcA9uY1uOBXMbD9PfBWa36HvbOxANDumDkQ84EcPrJ2qkPDMFA3DHBxu5YFRohkgcFbnluwXq+jousyppQOF/VZBE8aTVSMv2iapF82ZxTsnBTtls9+toBbD1Xce3QE/aQ9VNCY5wwHdxZlUdQMfPup4XtBR6NNTr2QOQR7iVwKUmKBMwLGqHzHo5sOCU57y8RqoFCsSFSqNWh6FXq1hkaz+X9vubex+BEcFzX8+l3Cn1IZZa2CUlmTouPcTXXYg2maqFZ11Go16Loua5MQ0r/pUYf/AItf/o9Vk+pEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AppId Login Page",title:"AppId Login Page",src:"/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/3cbba/AppidLogin.png",srcSet:["/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/7fc1e/AppidLogin.png 288w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/a5df1/AppidLogin.png 576w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/3cbba/AppidLogin.png 1152w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/0b124/AppidLogin.png 1728w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/c58c0/AppidLogin.png 1958w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Provide the email address and password you configured in the previous steps. You should be granted access to the UI."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-1-inventory-appid-index-mdx-44f366277595bcee7d9b.js.map