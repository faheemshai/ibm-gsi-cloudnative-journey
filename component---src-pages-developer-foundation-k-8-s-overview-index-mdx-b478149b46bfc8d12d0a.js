(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),o=n.replace(c,a);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+o},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},b))))))},t}(r.a.Component),x=a("MjG9"),C=a("CzIb"),y=a("Asxa"),P=a("OIbQ"),T=a.n(P),w=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(y.c,{className:T.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,m=s.tabs,j=s.title,h=s.theme,f=s.description,y=s.keywords,P=s.date,T=Object(C.a)().interiorTheme,k=Object(i.useStaticQuery)("2456312558").site.pathPrefix,S=k?n.pathname.replace(k,""):n.pathname,D=m?S.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=h||T;return Object(u.b)(o.a,{tabs:m,homepage:!1,theme:I,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:p},Object(u.b)(O,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:I}),m&&Object(u.b)(v,{title:j,slug:S,tabs:m,currentTab:D}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:d}),Object(u.b)(w,{date:P})),Object(u.b)(N.a,{pageContext:t,location:n,slug:S,tabs:m,currentTab:D}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Vlpn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},o=l.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Resources"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Presentation: ",Object(b.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/slides/03-Kubernetes-Basics.pdf"},"Kubernetes Basics"))),Object(b.b)("h1",null,"Topics Covered"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Topics"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Core Concepts"),Object(b.b)("td",{parentName:"tr",align:null},"Covers Kubernetes Objects and Namespaces."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./core-concepts/"},"Core Concepts"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Configuration"),Object(b.b)("td",{parentName:"tr",align:null},"Coveres ConfigMaps, Resource Quotas, Secrets, and Service Accounts."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./configuration/"},"Configuration"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Multi-Container Pods"),Object(b.b)("td",{parentName:"tr",align:null},"Use Cases for multi container pods."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./multi-container-pods/"},"Multi-Container Pods"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Observability"),Object(b.b)("td",{parentName:"tr",align:null},"Covers probes and logging for containers."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./observability/"},"Observability"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Pod Design"),Object(b.b)("td",{parentName:"tr",align:null},"Covers Labels, Selectors, Deployments, and Jobs."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./pod-design/"},"Pod Design"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Services and Networking"),Object(b.b)("td",{parentName:"tr",align:null},"Covers Services and Ingresses."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./services-networking/"},"Services and Networking"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Troubleshooting"),Object(b.b)("td",{parentName:"tr",align:null},"Ways to troubleshoot your kubernetes."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./troubleshooting/"},"Troubleshooting"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"State Persistence"),Object(b.b)("td",{parentName:"tr",align:null},"Covering Volumes and Persistence Volumes."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./state-persistence/"},"State Persistence"))))),Object(b.b)("h1",null,"Activities"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Topics"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Pod Creation"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./core-concepts/"},"Core Concepts")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab1"},"Pod Creation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Pod Configuration"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./configuration/"},"Configuration")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab2"},"Pod Configuration"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Multiple Containers"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./multi-container-pods/"},"Multi-Container Pods")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab3"},"Multiple Containers"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Probes"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./observability/"},"Observability")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab4"},"Probes"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Rolling Updates Lab"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./pod-design/"},"Pod Design")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab6"},"Rolling Updates"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Cron Jobs Lab"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./pod-design#jobs-and-cronjobs"},"Pod Design Jobs")," section."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab7"},"Crons Jobs"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Creating Services"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./services-networking/"},"Services")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab8"},"Setting up Services"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Debugging"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./troubleshooting/"}," Troubleshooting")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab5"},"Debugging"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Setting up Persistent Volumes"),Object(b.b)("td",{parentName:"tr",align:null},"Covers the topics in the ",Object(b.b)("a",{parentName:"td",href:"./state-persistence/"},"State Persistence")," page."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"./activities/labs/lab10"},"Setting up Persistent Volumes"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-k-8-s-overview-index-mdx-b478149b46bfc8d12d0a.js.map