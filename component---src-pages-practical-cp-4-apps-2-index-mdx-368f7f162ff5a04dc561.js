(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),p=a.n(o),b=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),s=a.n(l),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(u.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,p=i.subDirectory,r=o+"/edit/"+i.branch+p+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:r},"Edit this page on GitHub"))):null},h=a("FCXl"),y=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=p()(e,{lower:!0,strict:!0}),o=a===i,r=new RegExp(i+"/?(#.*)?$"),c=n.replace(r,a);return Object(u.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(b.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},o))))))},t}(i.a.Component),A=a("MjG9"),x=a("CzIb"),k=a("Asxa"),v=a("OIbQ"),w=a.n(v),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(k.c,{className:w.a.row},Object(u.b)(k.a,null,Object(u.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,l=void 0===o?{}:o,s=t.relativePagePath,d=t.titleType,m=l.tabs,j=l.title,y=l.theme,f=l.description,k=l.keywords,v=l.date,w=Object(x.a)().interiorTheme,C=Object(b.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,B=m?P.split("/").filter(Boolean).slice(-1)[0]||p()(m[0],{lower:!0}):"",I=y||w;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:j,pageDescription:f,pageKeywords:k,titleType:d},Object(u.b)(g,{title:i?Object(u.b)(i,null):j,label:"label",tabs:m,theme:I}),m&&Object(u.b)(N,{title:j,slug:P,tabs:m,currentTab:B}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:s}),Object(u.b)(T,{date:v})),Object(u.b)(h.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:B}),Object(u.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FvS5:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return g}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),p=a("013z"),b=a("T0C+"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("PageDescription"),s=c("AnchorLinks"),d=c("AnchorLink"),m={_frontmatter:r},u=p.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use IBM Cloud Pak for Applications to integrate microservices")),Object(o.b)("p",null,"For this homework, you will use two existing applications and deploy them as a set of microservices using the CP4Apps workflow."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuElEQVQoz1WRTW/TQBCG/cO5InGoEAcQQsCFViriQClJ+qWEUJKQ2HWSZt3E9jpr727sXc/srhPBH0AJohKPXo3mMKN5Z8YLz1v3s3g0T5es/B7m/Ocw71/XrjGIxhjnnLUW/6dx4LYWXePF4aI9fncTHq9IfD571Z1+4azUWjEukiyLCEmShHNe/EOK3F9sFsMH7gdeROL3V09Pui+C8ez1xZPTyzfFWihVxhlPc0nIfV4UxphaqRpA63rXwNXE/fgYyHbHi+PV7bfBeOSnaXrbGwSTO8aY1nXyEE37k8BPZFUJMo9arWAabmQBiFBXGlVWFJ4x1lqrVGWtBaxd44wxO9t8HfaO2ieCcZYzBbuM1xnjQlp3qN81W14UHh4OI4Q4O/scRREiCimhEu3x+vl1pSXjEqrly/7ww2BZvh0dgaGDu1XPJ0LwfbO1VkrZ6XTiJAYApfTW6Msgf3aJJc8yViaLT9H8Ykg2N+SU8qw7WbYHhOWHyYgIgGVZ/nWxXwS1H7FOWPJ8XVYV2N8adzUYg78QHaAxtskL7j1+zxjzmAPAOqMFozQ7QBO6F033MaVpSimN49Ufym3Lgyb0Kv8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Frontend Backend Demo",title:"Frontend Backend Demo",src:"/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/3cbba/cp4apps-front-back.png",srcSet:["/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/7fc1e/cp4apps-front-back.png 288w","/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/a5df1/cp4apps-front-back.png 576w","/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/3cbba/cp4apps-front-back.png 1152w","/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/0b124/cp4apps-front-back.png 1728w","/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/4ea69/cp4apps-front-back.png 2304w","/ibm-gsi-cloudnative-journey/static/d7e4bd08eece95700746227611ce7769/ebc9b/cp4apps-front-back.png 5160w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"This guide assumes the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You are using a ",Object(o.b)(b.a,{name:"env",mdxType:"Globals"})," that has already been installed."),Object(o.b)("li",{parentName:"ol"},"Cloud Pak for Applications has already been installed in the environment."),Object(o.b)("li",{parentName:"ol"},"You already completed ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/cp4apps"},"CP4Apps homeworks"),".")),Object(o.b)("p",null,"This guide consists of the following sections:"),Object(o.b)(s,{mdxType:"AnchorLinks"},Object(o.b)(d,{to:"#deploy-existing-backend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing backend as Appsody app"),Object(o.b)(d,{to:"#deploy-existing-frontend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing frontend as Appsody app"),Object(o.b)(d,{to:"#verify-deployed-microservice-solution",mdxType:"AnchorLink"},"Verify deployed microservice solution")),Object(o.b)("h2",null,"Deploy existing backend as Appsody app"),Object(o.b)("p",null,"Create a backend app from an Appsody template, set it up for Appsody, and connect the repo to a pipeline."),Object(o.b)("p",null,"First, create a backend app from an existing template."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to the template ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kabanero-demo/appsody-backend"},"https://github.com/kabanero-demo/appsody-backend"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Complete the ",Object(o.b)("a",{parentName:"p",href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"},"GitHub create repository from template")," process"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(o.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}")))),Object(o.b)("p",{parentName:"li"},"The new repository will be created in your selected organization.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(o.b)("p",null,"Second, set up the cloned template with Appsody."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Initialize the backend as an Appsody Express.js app"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use Appsody to run the backend"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"appsody run -p 3001:3000 -p 9230:9229 -p 8081:8080\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test the running backend, accessible at http://localhost:3001 (port 3000 will be use later for frontend)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add deployment manifest"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"appsody deploy --generate-only\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit the generated file, ",Object(o.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Specify the namespace to deploy the application into",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  namespace: dev-{initials}\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Commit and push the new Appsody-related files"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Add appsody files"\ngit push\n')))),Object(o.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/cp4apps#build-an-app-with-a-tekton-pipeline"},"Tekton Pipelines Homework"))),Object(o.b)("h2",null,"Deploy existing frontend as Appsody app"),Object(o.b)("p",null,"Create a frontend app from an Appsody template, set it up for Appsody and connect it to the backend, and connect the repo to a pipeline."),Object(o.b)("p",null,"First, create a frontend app from an existing template."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Repeat the steps above to create a repo from a template:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Template"),": ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kabanero-demo/appsody-frontend"},"https://github.com/kabanero-demo/appsody-frontend"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(o.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(o.b)("p",null,"Second, set up the cloned template with Appsody and connect it to the backend."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Initialize the frontend as an Appsody Express.js app"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use Appsody to run the frontend"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"appsody run\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test the running frontend, accessible at http://localhost:3000 (port 3001 is used by the backend)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure the backend is running with Appsody and exposed on port 3001")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test the app by adding a new user")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Repeat the steps above from the backend using the command ",Object(o.b)("inlineCode",{parentName:"p"},"appsody deploy --generate-only")," to add the Appsody deployment manifest file ",Object(o.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," and set the target namespace to ",Object(o.b)("inlineCode",{parentName:"p"},"dev-{initials}"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Also in ",Object(o.b)("inlineCode",{parentName:"p"},"app-deploy.yaml"),", add an environment variable to link the frontend service to the backend service"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  env:\n    - name: APPSODY_BACKEND_DEFAULT_URL\n      value: http://appsody-backend-{initials}:3000/\n")),Object(o.b)("p",{parentName:"li"},"  (On the server, the frontend and backend will both listen on port 3000 (in different pods).)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Commit and push your changes to Git"))),Object(o.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/cp4apps#build-an-app-with-a-tekton-pipeline"},"Tekton Pipelines Homework"))),Object(o.b)("h2",null,"Verify deployed microservice solution"),Object(o.b)("p",null,"The webhooks should have triggered the pipelines to deploy the frontend and backend to your OpenShift project. Let’s verify the apps are in OpenShift and running correctly."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the OpenShift web console, navigate to your project and its deployments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Verify there are two applications corresponding to the frontend (",Object(o.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"),") and backend (",Object(o.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}"),") services"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAABYlAAAWJQFJUiTwAAACNUlEQVQoz4WQW0/UUBSFGxDGzANhDI8SAsbRmU7baTt3kKgx6osv/kSIERwJGGP8M8Z4AQamPZ2253SfS8/FFKOP+mW/7J2srL2WdafRuLu5ubGx0Wg01tfX19bW6vX68vKt1dXVpaVl6w+1Wq1er9++oVarraysVNeWE7Qcv+0EO0277QbdcOQGA8fvu36/44VtN2i5YccfdsOhfbPabtjxekF/3PF6lhdOvN6u19vdeeAdvDnCGJ+fX0RJEucFJgBAAShlHCgtCvg7lDJKmTV4/nr/2au9Jy+dcPfjp8/GGCGEMUaZf6G1llJa4f6L/uRpb/y45Q1PTj8Yo7Mso5Sa/6GUsmxv4IWTtjfYum+/PZ5SytI0wxjnOY7jmBCCEMIYAwAhJIoiAEAIpWnKObc6/tANx04w2m52jt+fKmMY59oYXkouSqV1FRKglFIqlWNcSgmUYowrZycYeeHE7g63m+7R0ZSTLEdRSaGkIACKLBUAjBBeEAHAi0IyyggpAaQQldgf7LnBeKvpvDs4hDSPryO6SGS2oAlazC5ZgpKLn/nVjC3Q1dcvEEfo/Mf8+zcRzSqxE4xsb7DVdKcHh7yg8zmiaVbiXOJcEmyAUBTzBdIFzmYXLIkBzdPZpZrPLDccB8NHbji+99CdnpyBMlcJxgUjwATnnDFTliRNKcaK80UclZTiNEXX17Isq7arz/t7zbY/PTmTxswxz7lSWkuthdLGGMoYF0JpneX578LSLJNK/QIU9em7BALz8QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Frontend Backend Console",title:"Frontend Backend Console",src:"/ibm-gsi-cloudnative-journey/static/a11c72cd5454b1afac20d057b698449c/3cbba/ocp-console-front-back.png",srcSet:["/ibm-gsi-cloudnative-journey/static/a11c72cd5454b1afac20d057b698449c/7fc1e/ocp-console-front-back.png 288w","/ibm-gsi-cloudnative-journey/static/a11c72cd5454b1afac20d057b698449c/a5df1/ocp-console-front-back.png 576w","/ibm-gsi-cloudnative-journey/static/a11c72cd5454b1afac20d057b698449c/3cbba/ocp-console-front-back.png 1152w","/ibm-gsi-cloudnative-journey/static/a11c72cd5454b1afac20d057b698449c/0b124/ocp-console-front-back.png 1728w","/ibm-gsi-cloudnative-journey/static/a11c72cd5454b1afac20d057b698449c/d4943/ocp-console-front-back.png 2058w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Access the route for the frontend service and register a new user"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABqUlEQVQoz32QzW7TUBCF82QIVIkkruu2Ui1gwYa+D8sueQEkFqgCoQpBg1CalDptQ5PGTrFjO/deJ/65P7arpr5jFIcdaY+OZjFnPs1oaorSqNcbirqzq2qvmo3X29v7uv5G39vX915oWl1Rm5tbzU2toWyp2k5TXXW0ZxvPnzzdqGESYBIgjAlGMcERRuHUR46DHRt7XvBPsyAI3h68+3j0jUSh7fsuQpiQWrlOBcA9wL2UEkBKWFYAx0Mx5ctUSqjGaqtAVqoGpSyKkLJZnISUVmaVqcjzmPOYiZCyhAspYc1mKSVN06uxfXxydnltnRj988Go1TF+dHtt47LVMUzbFfktwFoYIGJ8FicuCc76g3av/71jfGm1v/7sTqbE9pBPZizLlmf/DwNARJmLA9vHF0PzamhdD2/M0Z+u0Tdtd4IImocsfQRmHIfR8MaxJ9Njc/T+9/mHwcXpeGzZE8vxSBg9Bq+eNKcsE+mB1dNPP7389fnQtXKRz9kyoiJ9EOZpxtKMipSKNOYi4iLmIuFi1Um4EPntergsy8Vicbe4K4qihPJBl+Vffu5DNqkcTNgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Frontend Route",title:"Frontend Route",src:"/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/3cbba/frontend-running.png",srcSet:["/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/7fc1e/frontend-running.png 288w","/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/a5df1/frontend-running.png 576w","/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/3cbba/frontend-running.png 1152w","/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/0b124/frontend-running.png 1728w","/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/4ea69/frontend-running.png 2304w","/ibm-gsi-cloudnative-journey/static/49e782ef08c49a9078b6a4a3609683ae/61c60/frontend-running.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}g.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-practical-cp-4-apps-2-index-mdx-368f7f162ff5a04dc561.js.map