(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),c=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),u=a.n(o),j=a("QH2O"),d=a.n(j),O=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(O.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:d.a.text},a)))))},p=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,l=b.subDirectory,i=r+"/edit/"+b.branch+l+"/src/pages"+t;return r?Object(O.b)("div",{className:"bx--row "+p.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:p.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("9Hrx"),f=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===b,i=new RegExp(b+"/?(#.*)?$"),s=n.replace(i,a);return Object(O.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(O.b)(c.Link,{className:f.link,to:""+s},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",{"aria-label":t},Object(O.b)("ul",{className:f.list},r))))))},t}(b.a.Component),v=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,o=void 0===r?{}:r,u=t.relativePagePath,j=t.titleType,d=o.tabs,p=o.title,h=o.theme,f=o.description,w=o.keywords,x=Object(y.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,T=C?n.pathname.replace(C,""):n.pathname,P=d?T.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",L=h||x;return Object(O.b)(s.a,{tabs:d,homepage:!1,theme:L,pageTitle:p,pageDescription:f,pageKeywords:w,titleType:j},Object(O.b)(m,{title:b?Object(O.b)(b,null):p,label:"label",tabs:d,theme:L}),d&&Object(O.b)(k,{title:p,slug:T,tabs:d,currentTab:P}),Object(O.b)(v.a,{padded:!0},a,Object(O.b)(g,{relativePagePath:u})),Object(O.b)(N.a,{pageContext:t,location:n,slug:T,tabs:d,currentTab:P}),Object(O.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eSAu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a("k1TG"),b=a("8o2o"),r=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),i={_frontmatter:c},s=l.a;function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Kubernetes"),Object(r.b)("p",null,"These activites give you a chance to walkthrough basic kubernetes tasks via Katacoda. Then give them a try yourself by solving some problems from scratch."),Object(r.b)("p",null,"These tasks assume that you have:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reviewed Kubernetes Concept pages."),Object(r.b)("li",{parentName:"ul"},"Created a Mini-Kube cluster."),Object(r.b)("li",{parentName:"ul"},"Created a Katacoda Account.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creating a Cluster"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to launch a Single Node Minikube cluster including DNS and Kube UI."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/creating-kubernetes-yaml-definitions",target:"_blank"},"Cluster Creation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy Containers Using Kubectl"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to use Kubectl to create and launch Deployments, Replication Controllers and expose them via Services without writing yaml definitions."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/kubectl-run-containers",target:"_blank"},"Using Kubectl")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy Containers Using YAML"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to use Kubectl to create and launch Deployments, Replication Controllers and expose them via Services by writing yaml definitions."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/creating-kubernetes-yaml-definitions",target:"_blank"},"Using YAML")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Intro to Networking"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn about core Kubernetes Networking capabilities"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/networking-introduction",target:"_blank"},"Networking")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Healthchecks"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how Kubernetes checks containers health using Readiness and Liveness Probes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/liveness-readiness-healthchecks",target:"_blank"},"Liveness and Readiness Probes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pod Creation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Challenge yourself to create a Pod YAML file to meet certain parameters."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab1"}),"Pod Creation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pod Configuration"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configure a pod to meet compute resource requirements."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab2"}),"Pod Configuration")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multiple Containers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build a container using legacy container image."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab3"}),"Multiple Containers")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Probes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create some Health & Startup Probes to find what’s causing an issue."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab4"}),"Probes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Debugging"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Find which service is breaking in your cluster and find out why."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab5"}),"Debugging")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rolling Updates"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Roll out a new version of a video game."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab6"}),"Rolling Updates")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cron Jobs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create a Cron Job to run some maintenance."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab7"}),"Cron Jobs")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creating Services"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create two services with certain requirements."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab8"}),"Setting up Services")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"45 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Setting up Persistent Volumes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create a Persistent Volume that’s accessible from a SQL Pod."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/activities/kubernetes/labs/lab10"}),"Setting up Persistent Volumes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 hr")))),Object(r.b)("p",null,"Once you have completed these tasks, you should have a basic understanding for Kubernetes."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-index-mdx-885f306b90bfb2574512.js.map