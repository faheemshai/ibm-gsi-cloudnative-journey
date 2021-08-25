(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,b=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),N=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(i.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},o))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),T=a("Asxa"),x=a("OIbQ"),C=a.n(x),A=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:C.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=s.tabs,h=s.title,f=s.theme,N=s.description,T=s.keywords,x=s.date,C=Object(w.a)().interiorTheme,k=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=k?n.pathname.replace(k,""):n.pathname,D=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",P=f||C;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:P,pageTitle:h,pageDescription:N,pageKeywords:T,titleType:d},Object(u.b)(g,{title:r?Object(u.b)(r,null):h,label:"label",tabs:m,theme:P}),m&&Object(u.b)(v,{title:h,slug:I,tabs:m,currentTab:D}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(A,{date:x})),Object(u.b)(j.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:D}),Object(u.b)(b.a,null))}},"0HYS":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),b=a("T0C+"),c=(a("qKvR"),{}),s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),p={_frontmatter:c},d=i.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(d,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{mdxType:"PageDescription"},Object(l.b)("p",null,"An Overview of what DevSecOps is, and how it can help you\nspeed up Cloud-Native solution delivery")),Object(l.b)("p",null,"One of the patterns emerging with development teams is the ability to use ",Object(l.b)("a",{parentName:"p",href:"https://landscape.cncf.io/"},"CNCF Tools")," as part of a more open multicloud CI/CD strategy. This approach is aligning around the Kubernetes platform. The IBM Cloud supports both upstream Kubernetes for advanced cutting edge workloads and Red Hat OpenShift, the proven mutlicloud distribution of Kubernetes that can install on IBM Cloud, Azure, AWS, VMWare and on Premise and many more places. This approach removes cloud vendor lock in around CI/CD tools and enables development teams to be more flexible with the target cloud they focus on deploying and developing in."),Object(l.b)("p",null,"There are two patterns from this approach:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"There are a core set of Development Tools that are installed inside the Kubernetes environment with the use of Operators the management and support of these tools can be controlled with centralized operations teams"),Object(l.b)("li",{parentName:"ul"},"Integration of centralized operations tools like Source Code Management, Artifact Management, Image Management, Logging and Monitoring")),Object(l.b)("p",null,"This model enables agile Cloud-Native development teams to execute quickly while also conforming to the enterprise standards required for CI/CD. This pattern also enable the reduction of costs of managing expensive centralized multi-tenant CI services and enables development teams to use a percentage of their development cluster to support CI activities. This approach with Tekton enables the centralized operations teams to impose specific pipeline tasks that need to be supported by development teams without the complex"),Object(l.b)("h3",null,"Overview"),Object(l.b)("p",null,"This short video introduces the Cloud-Native concepts of CI/CD DevOps with ",Object(l.b)(b.a,{name:"ocp",mdxType:"Globals"}),":"),Object(l.b)("iframe",{width:"80%",height:"500",src:"https://www.youtube.com/embed/GOPWObjFTsI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(l.b)("p",null),Object(l.b)("p",null,"Each Cluster can have a selection of CNCF DevSecOps tools installed using IasC (Infrastructure As Code) using Terraform. The cluster then turns from a production state cluster into a cluster that is used for multi tenant development teams."),Object(l.b)("p",null,"The following describes the requirements:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Installation"),": Install the CNCF Tools using Terraform this create a new ",Object(l.b)(b.a,{name:"env",mdxType:"Globals"})),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Cluster"),": A ",Object(l.b)(b.a,{name:"kube",mdxType:"Globals"})," or ",Object(l.b)(b.a,{name:"ocp",mdxType:"Globals"})," cluster that both hosts the tools and itself is a deployment target for application builds"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Software Delivery Lifecycle"),": Deployment target environments that support the application development lifecycle: ",Object(l.b)("em",{parentName:"li"},"dev"),", ",Object(l.b)("em",{parentName:"li"},"test"),", and ",Object(l.b)("em",{parentName:"li"},"staging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Backend services"),": Cloud services commonly required by cloud-native applications for monitoring, security, and persistence"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"CI/CD"),": A prebuilt, ready-to-run continuous delivery pipeline incorporating best-of-breed open source software tools supporting ",Object(l.b)("inlineCode",{parentName:"li"},"Jenkins"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Tekton")," for CI and ",Object(l.b)("inlineCode",{parentName:"li"},"ArgoCD")," for CD"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)(b.a,{name:"templates",mdxType:"Globals"})),": Prebuilt code templates for common application components and tasks incorporating best practices that developers can add to their codebase as needed"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Dashboard"),": Integration of the tools into the OpenShift dashboard, and a centralized developer dashboard to help developers use the environment’s capabilities")),Object(l.b)("p",null,"A core set of tools are sourced from the ",Object(l.b)("a",{parentName:"p",href:"https://cloud.ibm.com/catalog?search=label%3Ahelm#software"},"IBM Cloud Catalog")," that can be found in the ",Object(l.b)(b.a,{name:"ic",mdxType:"Globals"}),". This approach helps assemble these reliable open source development tools into an end-to-end developer experience that is fully integrated with ",Object(l.b)(b.a,{name:"ic",mdxType:"Globals"}),"’s managed container orchestration services."),Object(l.b)("p",null,"The tools can also be sourced from the ",Object(l.b)("a",{parentName:"p",href:"https://operatorhub.io/"},"Operator Hub")," and the ",Object(l.b)("a",{parentName:"p",href:"https://marketplace.redhat.com/en-us"},"Red Hat Marketplace"),". The Operations team that owns the IasC can decide the best approach to install the tools either using ",Object(l.b)("strong",{parentName:"p"},"Helm3")," or ",Object(l.b)("strong",{parentName:"p"},"Operators"),"."),Object(l.b)("p",null,"Typically a ",Object(l.b)("strong",{parentName:"p"},"Cloud System Admin")," installs and sets up a new ",Object(l.b)(b.a,{name:"env",mdxType:"Globals"}),", providing a place for the developers to start developing the minimum viable product (MVP). The objective is to reduce the time required for a team to configure and prepare their development environment. The key benefit is to make the end-to-end ",Object(l.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/deliver/practice_continuous_delivery/"},"CI/CD development lifecycle")," consistent across each platform and make the out-of-the-box developer experience as simple as possible."),Object(l.b)("p",null,"The installation is performed using ",Object(l.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/terraform"},"Terraform"),", driven by scripts with a ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"},"modular configuration")," so unneeded tools can be easily disabled or new tools added. The combination of tools selected are proven in the industry to deliver real value for modern cloud-native development."),Object(l.b)("h3",null,"Environment components"),Object(l.b)("p",null,"After installation, the ",Object(l.b)(b.a,{name:"env",mdxType:"Globals"})," consists of a set of CNCF tools installed into your nominated kubernetes cluster."),Object(l.b)("p",null,"This diagram illustrates the ",Object(l.b)(b.a,{name:"env",mdxType:"Globals"}),":"),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVQozx2SWW/bVhSE+bMLF/ZT0T50BYrWRVGkTVI4aWy0sKPGjWRZjjZKpLWYWqldIsNFW+VS95KXy5lCnpczT4PvDEaiUGC8Y5BdD4gCLEtvgThAUdth4XDEUUCb7RaMB4vr0y8+1VJnaGqtpNfuUznzju4vX1K+XCFLPqea/IGkQAhY+wDjfYgoDOHNuuDMw8xiWG72EMGeDJfDbS+My19PT1pKGb2+noxHE5ILH1DJXkNRVZitApRyARLrVhG1yyB/D7Y0wcMEnHN4bA/GGYQQRETww9j48/vPT/S7FIa9XjI1liTfpqmXu6KJYZGz2lCt3iDJnldgrzRE5ghO9hVWvsBBy9IVmDlCRKA4ChElyeKP578cN0p36GpaMp2bVMhloeT+Qbvbg2ksoCgKJMubwzYKoL0Hn4CgrwMExJuP8HdrBGFIIAIPI+Pv069ODPUWM9tMesMJKbk0jNwlHMvGdrvFw0MTUpgA+44Krt0htqeY/n6OmPNDJuKE4Ps+RVEEJMnis5cvjl8X89Aa9aTb7tDb2ywuqhUM+zpG4zFKpRKkwOf4LwqxW3Th9RWwMAATPrxQ4JEzcMYoThIgjBYnZ8+P/+q3MDONRPg+FdQazqvX0PT34Eyg1WpBikNAd4oYrO4RH14tvMHdpIuvB228mvYPdR5gEYLmV19+c/RwlcJDt5MM+zqlbm5wdvsezboKXR8gn89DEoHAo/cv1ts1PMbhWlOYronZ0oAzmz8ROnsPCTC/+O6Ho0G5is3jKpk2OaXlKi4qZex6c0xsG5rWgsQYw8p1oc8s1HtjbPkc5q6DyVYFchWMhzr9NO4eIOepZ98eVd+9QbXWSJRqhbKZGyreZEmWZapWZEqn0yQdNnaQCENw34fvMwQigC98CM4RCkHbx91TYObFj0fDZg0ffVBHacDdcViFAvaWjfXSwEDvQxqNRrBtG67rwnUduI4Lx3HgHK775Ml1HKzXq8XPz377JFcootFo+Op9Pag3mqJSLolarSZU9V5kMhnxP4E6VbF+f2i/AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Provisioned CNCF Tools",title:"Provisioned CNCF Tools",src:"/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/3cbba/cncf-tools-environment.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/7fc1e/cncf-tools-environment.png 288w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/a5df1/cncf-tools-environment.png 576w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/3cbba/cncf-tools-environment.png 1152w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/90155/cncf-tools-environment.png 1375w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null,"The diagram shows the components in the environment: the cluster, the deployment target environments, the cloud services, and the tools."),Object(l.b)("h4",null,"Development cluster"),Object(l.b)("p",null,"The heart of the ",Object(l.b)(b.a,{key:"env",mdxType:"Globals"})," is a cluster:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/container-service"},Object(l.b)(b.a,{key:"iks",mdxType:"Globals"})),"\nor ",Object(l.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/openshift"},Object(l.b)(b.a,{key:"roks",mdxType:"Globals"}))," 3-node cluster"),Object(l.b)("li",{parentName:"ul"},"Cluster namespace that encapsulates the tooling installed in the cluster: ",Object(l.b)("em",{parentName:"li"},"tools")),Object(l.b)("li",{parentName:"ul"},"Cluster namespaces for deployment target environments: ",Object(l.b)("em",{parentName:"li"},"dev"),", ",Object(l.b)("em",{parentName:"li"},"test"),", and ",Object(l.b)("em",{parentName:"li"},"staging"))),Object(l.b)("p",null,"The following IBM Cloud services are created and bound to the cluster:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Capability"),Object(l.b)("th",{parentName:"tr",align:"left"},"Service"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Logging"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://cloud.ibm.com/docs/log-analysis?topic=log-analysis-getting-started"},"LogDNA Logging")),Object(l.b)("td",{parentName:"tr",align:null},"Manage app logging LogDNA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Monitoring"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://cloud.ibm.com/docs/monitoring?topic=monitoring-getting-started"},"SysDig Monitoring")),Object(l.b)("td",{parentName:"tr",align:null},"Manage monitoring of apps with SysDig")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AppID"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://cloud.ibm.com/docs/services/appid?topic=appid-service-access-management"},"AppID Application Authentication")),Object(l.b)("td",{parentName:"tr",align:null},"Secure your apps, APIs and Kubernetes Ingress end points")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Cloudant"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.ibm.com/cloud/cloudant"},"Cloudant NoSQL Database")),Object(l.b)("td",{parentName:"tr",align:null},"NoSQL Database commonly used for data persistence")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Cloud Object Storage"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage"},"Cloud Object Storage Storage")),Object(l.b)("td",{parentName:"tr",align:null},"Storage service commonly used for binary content")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PostreSQL"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.ibm.com/cloud/learn/postgresql"},"PostgreSQL")," (used by SonarQube)"),Object(l.b)("td",{parentName:"tr",align:null},"SQL Database used for structure data persistence")))),Object(l.b)("h4",null,"Continuous delivery tools"),Object(l.b)("p",null,"The following best-of-breed open source software tools are installed in the cluster’s ",Object(l.b)("em",{parentName:"p"},"tools")," namespace:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Capability"),Object(l.b)("th",{parentName:"tr",align:"left"},"Tool"),Object(l.b)("th",{parentName:"tr",align:null},"Bitnami"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Continuous Integration"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://jenkins.io/"},"Jenkins CI")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Jenkins is a common tool for Continuous Integration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Continuous Integration"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://tekton.dev/"},"Tekton CI")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Tekton is an emerging tool for Continuous Integration with Kubernetes and OpenShift")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Code Analysis"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://www.sonarqube.org/"},"SonarQube")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"SonarQube can scan code and display the results in a dashboard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Artifact and Helm Storage"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://jfrog.com/open-source/"},"Artifactory")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Artifactory is an artifact storage and Helm chart repository")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Continuous Deployment"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://argoproj.github.io/argo-cd/"},"ArgoCD")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"ArgoCD support Continuous Delivery with GitOps")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Contract API Testing"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://docs.pact.io/"},"Pact")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Pact enables API contract testing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Code Ready Workspace"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://developers.redhat.com/products/codeready-workspaces/overview"},"Eclipse CHE")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"IDE for editing and managing code in a web browser")))),Object(l.b)("p",null,"If you want to find out more about IBM assets that help you get these common tools installed"))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-content-overview-index-mdx-faeed2ba994afbdbfe5f.js.map