(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},f=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},g=a("FCXl"),y=a("9Hrx"),j=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(m.b)(l.Link,{className:j.link,to:""+c},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},i))))))},t}(r.a.Component),v=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,u=b.tabs,f=b.title,y=b.theme,j=b.description,k=b.keywords,T=Object(x.a)().interiorTheme,N=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=N?n.pathname.replace(N,""):n.pathname,P=u?I.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",S=y||T;return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:S,pageTitle:f,pageDescription:j,pageKeywords:k,titleType:d},Object(m.b)(h,{title:r?Object(m.b)(r,null):f,label:"label",tabs:u,theme:S}),u&&Object(m.b)(w,{title:f,slug:I,tabs:u,currentTab:P}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:P}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},nXOq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("k1TG"),r=a("8o2o"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=a("PXik"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("AnchorLinks"),p=c("AnchorLink"),d={_frontmatter:s},u=o.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Introduction"),Object(i.b)(p,{mdxType:"AnchorLink"},"Red Hat OpenShift overview"),Object(i.b)(p,{mdxType:"AnchorLink"},"What is OpenShift?"),Object(i.b)(p,{mdxType:"AnchorLink"},"Red Hat OpenShift on IBM Cloud"),Object(i.b)(p,{mdxType:"AnchorLink"},"Kubernetes and OpenShift: What's the Difference?"),Object(i.b)(p,{mdxType:"AnchorLink"},"References")),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"Red Hat OpenShift Container Platform (OpenShift) is a container application platform that provides developers and IT organizations with a cloud application platform for deploying new applications on secure, scalable resources with minimal configuration and management overhead."),Object(i.b)("p",null,"Built on Red Hat Enterprise Linux, Docker, and Kubernetes, OpenShift provides a secure and scalable multitenant operating system for today’s enterprise applications, while providing integrated application runtimes and libraries. OpenShift brings a robust, flexible, and scalable container platform to customer data centers, enabling organizations to implement a platform that meets security, privacy, compliance, and governance requirements."),Object(i.b)("p",null,"Applications run as containers, which are isolated partitions inside a single operating system. Containers provide many of the same benefits as virtual machines, such as security, storage, and network isolation, while requiring far fewer hardware resources and being quicker to launch and terminate. The use of containers by OpenShift helps with the efficiency, elasticity, and portability of the platform itself as well as its hosted applications."),Object(i.b)("h2",null,"Red Hat OpenShift overview"),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.21890547263681%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",Object(n.a)({parentName:"div"},{src:"https://www.youtube.com/embed/5dwMrFxq8sU",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(i.b)("h2",null,"What is OpenShift?"),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.21890547263681%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",Object(n.a)({parentName:"div"},{src:"https://www.youtube.com/embed/KTN_QBuDplo",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(i.b)("h2",null,"Red Hat OpenShift on IBM Cloud"),Object(i.b)("p",null,"With Red Hat OpenShift on IBM Cloud, OpenShift developers have a fast and secure way to containerize and deploy enterprise workloads in Kubernetes clusters. OpenShift clusters build on Kubernetes container orchestration that offers consistency and flexibility in operations. Because IBM manages OpenShift Container Platform (OCP), you’ll have more time to focus on your core tasks."),Object(i.b)("h3",null,"Features"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OpenShift experience built on Kubernetes"),"\nUse the OpenShift tools and APIs you already know for a single, consistent experience, even when working across hybrid environments or different cloud providers."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Heightened cluster and app security"),"\nIBM provides security features to protect your cluster infrastructure, isolate your compute resources, encrypt data, and ensure security compliance in your container deployments. Further, OpenShift sets up strict Security Context Constraints for greater pod security by default."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Worldwide, continuous availability"),"\nDeploy and scale workloads across the globe in all IBM Cloud multizone regions. OpenShift clusters include a managed master that is automatically spread across zones within the region for high availability."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Integrated OpenShift catalog"),"\nQuickly set up a CI/CD with Jenkins or deploy a variety of apps in a guided experience that’s fully integrated into your OpenShift cluster."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Innovation with Cloud Paks and the complete IBM Cloud platform"),"\nEasily integrate AI with Watson APIs to extend the power of your apps. Access the IBM middleware in IBM Cloud Paks from within the scalable public cloud. You also get built-in services for monitoring, logging, load-balancing, storage, and security to help you manage an app’s lifecycle."),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",Object(n.a)({parentName:"div"},{src:"https://www.youtube.com/embed/l4Vrj7mkxhQ",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(i.b)("h2",null,"Kubernetes and OpenShift: What’s the Difference?"),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",Object(n.a)({parentName:"div"},{src:"https://www.youtube.com/embed/cTPFwXsM2po",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(i.b)("h3",null,"RedHat Interactive Learning"),Object(i.b)("p",null,"To help understand OpenShift in more detail work through these ",Object(i.b)("strong",{parentName:"p"},"KataKoda")," self paced learning modules offered by\nRedHat "),Object(i.b)(l.a,{content:"openshift",tileColor:"bx--article-card--redhat",mdxType:"ActivationPage"}),Object(i.b)("h3",null,"Advanced Topics"),Object(i.b)("p",null,"The following topics are not required to move onto the ",Object(i.b)("strong",{parentName:"p"},"IBM Sandbox")," self paced learning but will help\nyou understand more about how the base platform works."),Object(i.b)(l.a,{content:"openshift_adv",tileColor:"bx--article-card--redhat",mdxType:"ActivationPage"}),Object(i.b)("h2",null,"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.openshift.com/products/openshift-ibm-cloud"}),"Red Hat Openshift on IBM resources")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://learn.openshift.com/introduction/"}),"Openshift Interactive Learning Portal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://learn.openshift.com/middleware/"}),"Openshift Interactive Learning Portal For Middleware")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://learn.openshift.com/subsystems/"}),"Openshift Interactive Learning Portal For subsystems"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-openshift-index-mdx-b49a23d41fb69086c67f.js.map