(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),n=t.n(i),s=t("NmYn"),c=t.n(s),r=t("Wbzz"),o=t("Xrax"),l=t("k4MR"),b=t("TSYQ"),u=t.n(b),d=t("QH2O"),p=t.n(d),m=t("qKvR"),g=function(e){var a,t=e.title,i=e.theme,n=e.tabs,s=void 0===n?[]:n;return Object(m.b)("div",{className:u()(p.a.pageHeader,(a={},a[p.a.withTabs]=s.length,a[p.a.darkMode]="dark"===i,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},t)))))},A=t("BAC9"),v=function(e){var a=e.relativePagePath,t=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,s=n.baseUrl,c=n.subDirectory,o=s+"/edit/"+n.branch+c+"/src/pages"+a;return s?Object(m.b)("div",{className:"bx--row "+A.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:A.link,href:o},"Edit this page on GitHub"))):null},h=t("FCXl"),y=t("9Hrx"),j=t("I8xM"),f=function(e){function a(){return e.apply(this,arguments)||this}return Object(y.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var a,t=c()(e,{lower:!0,strict:!0}),s=t===n,o=new RegExp(n+"/?(#.*)?$"),l=i.replace(o,t);return Object(m.b)("li",{key:e,className:u()((a={},a[j.selectedItem]=s,a),j.listItem)},Object(m.b)(r.Link,{className:j.link,to:""+l},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":a},Object(m.b)("ul",{className:j.list},s))))))},a}(n.a.Component),O=t("MjG9"),w=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,n=e.Title,s=a.frontmatter,b=void 0===s?{}:s,u=a.relativePagePath,d=a.titleType,p=b.tabs,A=b.title,y=b.theme,j=b.description,x=b.keywords,k=Object(w.a)().interiorTheme,N=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=N?i.pathname.replace(N,""):i.pathname,B=p?I.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",S=y||k;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:S,pageTitle:A,pageDescription:j,pageKeywords:x,titleType:d},Object(m.b)(g,{title:n?Object(m.b)(n,null):A,label:"label",tabs:p,theme:S}),p&&Object(m.b)(f,{title:A,slug:I,tabs:p,currentTab:B}),Object(m.b)(O.a,{padded:!0},t,Object(m.b)(v,{relativePagePath:u})),Object(m.b)(h.a,{pageContext:a,location:i,slug:I,tabs:p,currentTab:B}),Object(m.b)(o.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ZBrx:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return d}));var i,n=t("k1TG"),s=t("8o2o"),c=(t("q1tI"),t("7ljp")),r=t("013z"),o=(t("T0C+"),t("qKvR"),{}),l=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),b={_frontmatter:o},u=r.a;function d(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)(u,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)(l,{mdxType:"PageDescription"},Object(c.b)("p",null,"DevSecOps with Aquasec CSP")),Object(c.b)("h2",null,"Guide"),Object(c.b)("p",null,"Aqua CSP provides full lifecycle security for your Cloud-Native applications (containers, orchestrators, cloud VMs, and serverless functions) at a very granular level. Aqua includes preventive controls to secure the development pipeline; protects applications in runtime; detects and blocks attacks; and provides visibility and auditing for security risk management and compliance."),Object(c.b)("p",null,"Aqua CSP:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Integrates with your existing workflows for building, shipping, running, and securing your cloud workloads"),Object(c.b)("li",{parentName:"ul"},"Works with the leading orchestrators and cloud provider platforms"),Object(c.b)("li",{parentName:"ul"},"Secures environments consisting of servers running Linux and Windows, as well as CaaS  and FaaS cloud services"),Object(c.b)("li",{parentName:"ul"},"Provides you with full audit logs of security-related events that have occurred on your hosts or in your containers and serverless functions")),Object(c.b)("h2",null,"Version"),Object(c.b)("p",null,"On IBM Managed Openshift 4.3 , the installation of Aqua CSP 4.6 was carried out"),Object(c.b)("h2",null,"Architecture :"),Object(c.b)("p",null," ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACHklEQVQoz21T227TQBDNh/AXPPBTfFif4RkJREVLKARaAWql0kKVNHHiy95v3j0cx27Th1oa73o9c+acmdkZxqdMK462Ea8uNI4qz6+ef2g5odAw2bjnOfJkE0gpmNWtQN3JEozFLx3xciHwYt7i9VUHnyJubaQjg2hlsmGf+4ROarRty9XAhbgHnW22O9RNW4x1SHSyMcB5Q2IJ1ybgzdaiLwcGpY8ja5o3BsFalBjRxwlweGV65vyoGtnrfcBNp3C6rFA7x0MGESxT6gCsSOCn9DgXDt86i43vR8BBsja+tJ1EIrscDBD0vlbOaYiQJnoMiHbcpoBGChxvOnxY1nh33+KP9geGT5uybnZYa4WVC1gxKEeHa+XwcavwqRI4awwTO3RK4kersagVvncO935MPOsECytUEXKs2yUzvV02WAiPOYMrqWCDx05pNMah8ZRNpsZZnDLB8brF+43ALes9AjJAKF2M8/BWYqkNzpm1ZuCOBTcs9tpFsrC4YL0uddg3RhmFs53EvOpwspX4Z8Pzkpek/rUW+C0d68Iu9j2bEnDbadxRxV8qSGxgnzMqnm+sZ8IAlcZ5nJ3UBl8aW+Yt2dAxUEpULXrKHGevjPmm+XvYBwKeUcnnQTYZPkq+qWoIH8qKlDXl5eSxYTPsMFcD4HArhplzBpbNOtwcnqWEQD/H1fUTw4f8ZRpcziTulIWcJr88rccz30+fIf4/s7Kd4JoLGt0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Aqua CSP Architecture ",title:"Aqua CSP Ar chitecture",src:"/ibm-gsi-cloudnative-journey/static/384729f5b32737cf5b7f155b863f1697/33b5e/Aqua-CSP-Architecture.png",srcSet:["/ibm-gsi-cloudnative-journey/static/384729f5b32737cf5b7f155b863f1697/7fc1e/Aqua-CSP-Architecture.png 288w","/ibm-gsi-cloudnative-journey/static/384729f5b32737cf5b7f155b863f1697/a5df1/Aqua-CSP-Architecture.png 576w","/ibm-gsi-cloudnative-journey/static/384729f5b32737cf5b7f155b863f1697/33b5e/Aqua-CSP-Architecture.png 878w"],sizes:"(max-width: 878px) 100vw, 878px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("h2",null,"Key Features :"),Object(c.b)("p",null," Aqua integrates within your development workflows (build, ship, and run phases) to provide full lifecycle security for your cloud workloads, running across VMs, container platforms, and serverless functions."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Container Runtime Protection for protecting containers at runtime against malicious and unauthorized activities"),Object(c.b)("li",{parentName:"ul"},"Image Assurance for assessing container images against vulnerabilities, malware, secrets, and security best practices"),Object(c.b)("li",{parentName:"ul"},"Host Assurance for assessing VMs against vulnerabilities, malware, and security best practices (e.g., CIS benchmarks)"),Object(c.b)("li",{parentName:"ul"},"Host Runtime Protection for protecting your VMs against malicious and unauthorized activities"),Object(c.b)("li",{parentName:"ul"},"Function Assurance and Runtime Protection for serverless functions"),Object(c.b)("li",{parentName:"ul"},"Network Micro-Segmentation using automated discovery and firewall rules for cloud workloads"),Object(c.b)("li",{parentName:"ul"},"Monitor host logins, both successful and failed"),Object(c.b)("li",{parentName:"ul"},"Vulnerability Shield™ (vShield), a virtual patch for vulnerabilities using a runtime policy that prevents vulnerability exploitation")),Object(c.b)("h2",null,"Installation on IBM Cloud Managed Openshift v4.3 :"),Object(c.b)("p",null,"On Openshift’s OperatorHub leverage the Aquasec Operator to automate the maintenance of mundane operational duties.\nThis makes the use of Aqua’s Cloud-Native Security Platform (CSP), particularly the deployment and scanning pieces, more seamless.\nThe Aqua Server components ( Server, DB Gateway ) are deployed as Pods and Services, while the Aqua Enforcer is deployed as a DaemonSet."),Object(c.b)("h2",null,"Aqua Dashboard"),Object(c.b)("p",null,"Displays alerts, containers running, images scanned, Enforcers deployed, and vulnerabilities discovered in images"),Object(c.b)("p",null," ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACSUlEQVQoz3WSS2vUUBTH8zksgogiKOIDqbTWWjcOWjrUgisZRNTPIdPuxCoKItNF/QC6Ety4qLhVylgVx85jMSOImWQyk5vk5nVz/p6bdLIRA4ecex5/fufcayxUb6uTl6uq/vilAkilqVJZRmyZYlfpALGvzxkRBzJVhNMy5niBcsaukmGkjLnlGo5cqODhoxfgMkxcF1wE/SVxAj+KIIsjuB9xJMFanIuRqAzlR5zjmLG09oCOz1epvtkgT7g0GPwiJmMoYsvIFx5NzCGpwKfAH5PvCcoIFEQh/TFNGo0ckjIkk30WJOPK2n2cuLSK9c1GQZWkoAPCiOl4QI3GpgoQIRB32pgkMSxzCMuy4HkebNsuCOdX7uDYXBXrT7byBl5MKagLJBeHvg8p+B/F8FstyM+f8L/PuHijhpmz17AxFWSiqWCSJAhYLAwCRFIiZJN8jlk4SdM8z2vJd677tG/MXq/h8PkKNp7+K6gJNXHu68UdUGgByeIxCxKvIo1lntN9xuLqPR55hUdulIKcyZN8J4jCCNF4nO9KSlFS6brIZ+LREMIa5LevY8ZC9S6Ozi6XgvopaEBtemcpU8YfPiLrdItL0SNyo+sFSD0L1NsB0gDZlPD01VuYOVcBPxv0+wO02x1YIwf8UCGZJm42Ibe3Eb5+A2WPckF+1RDCRbL3Dun750hbO/k0GceNM0s3cejUIurPtvB7dx/9t6/g2F3Yjp/vSfz8AefLLty9JkSvB59HDwOJwJ1AdL5hsv8VovsdnmXCdxz8BahJFo5aIZsIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Aqua Dashboard ",title:"Aqua CSP Dashboard",src:"/ibm-gsi-cloudnative-journey/static/5320c949619e1110dc895d8b38a3e0d9/3cbba/AquaDashboard.png",srcSet:["/ibm-gsi-cloudnative-journey/static/5320c949619e1110dc895d8b38a3e0d9/7fc1e/AquaDashboard.png 288w","/ibm-gsi-cloudnative-journey/static/5320c949619e1110dc895d8b38a3e0d9/a5df1/AquaDashboard.png 576w","/ibm-gsi-cloudnative-journey/static/5320c949619e1110dc895d8b38a3e0d9/3cbba/AquaDashboard.png 1152w","/ibm-gsi-cloudnative-journey/static/5320c949619e1110dc895d8b38a3e0d9/0b124/AquaDashboard.png 1728w","/ibm-gsi-cloudnative-journey/static/5320c949619e1110dc895d8b38a3e0d9/e957c/AquaDashboard.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("h2",null,"Risk Explorer"),Object(c.b)("p",null,"The Risk Explorer presents a dynamic display of the workloads (containers) running in your Cloud-Native environment, and the security risks associated with them.\nIt is specifically designed to help you quickly visualize and understand these risks, and take concrete actions to manage them.\nThe Risk Explorer calculates and assigns an overall risk assessment to these objects: images, hosts, containers, and controllers."),Object(c.b)("p",null," ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACnUlEQVQoz12S60vTURjHf/9KBIUI+SIwtfD2IkIlJcmIaV5zmhcStLxOLQiJXgSVaJavijCtECKbUenmhamZlzTNvMy56ZzmLj+dbm6fjpva5YHDczh8z4fvc5F0QyPohr/RNzRO7+A4PQOjIo/xuW+YTs0A6m4dXf3DaHSjdIvc1f8FrdBodSP0CF2XboyPWh2avkF6BUM6efYSidmllN5/jrKmgZzqerIqH1D3uI2XHT20vNNyt+kVStUjcmobyBMn93Yjmap66p68pv3TAG/UvTS2fODFWy3S0eBzpBaqSCi6R3hmDTHZtZy+fNMHOwh5a5upBRNTcwZ+zBsZm5hhULjddO7sK7xcL6+jpb0TKeBMAorCamKv3SEkqYQIRRmBcQU0tXb6pNsuN173Lt4NGy7zGq4VCzvmdXbWf/lRXrDLMgplEQ+fPkMKik4iOV9FfO4tQlNKiUivIChOSXOb2vdhV/zYtjuwm8zYTKtYjStYhVvrgh6n1ebXeDyit1/RG5aRAiMTScmrIi6jTABLiMosJygmi+bWjkOxw7iAfXER+/Q8doMRu3GVjdFJ5Dm9KNYfas0YG7ZN0cNTcVwpUHE+q5LQZAFML9sHvv/j0CH7IHbDisgmbBPTyMurbFkdeDx+5MjkPPKmE+lYWDypAphwtZIQRTFRaaWc+AvodrmQTSs4RLmyxYzDYkGenROuxdvisuihH7gH3rtLAeEXSM2vIlFZ5XMYmVH+L1AMxOP2sGm2iLJFyfolHGsWbLN6HPNL+4PxHm6EdFxMOU04vJijIiy5mOj/gbue/cUA144b2/efWMensc3ohXv3IdB/BPBIcCzpApioVBGccoPwjIp/gLsCeCD2leZrgxunWJ8D0F5siZ2cM5j5Dcdkvh2MhL8IAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Risk Explorer ",title:"Aqua CSP Risk Explorer",src:"/ibm-gsi-cloudnative-journey/static/7d38c7e4b1c824cc32d3b98b1a270855/3cbba/AquaRiskExplorer.png",srcSet:["/ibm-gsi-cloudnative-journey/static/7d38c7e4b1c824cc32d3b98b1a270855/7fc1e/AquaRiskExplorer.png 288w","/ibm-gsi-cloudnative-journey/static/7d38c7e4b1c824cc32d3b98b1a270855/a5df1/AquaRiskExplorer.png 576w","/ibm-gsi-cloudnative-journey/static/7d38c7e4b1c824cc32d3b98b1a270855/3cbba/AquaRiskExplorer.png 1152w","/ibm-gsi-cloudnative-journey/static/7d38c7e4b1c824cc32d3b98b1a270855/0b124/AquaRiskExplorer.png 1728w","/ibm-gsi-cloudnative-journey/static/7d38c7e4b1c824cc32d3b98b1a270855/e957c/AquaRiskExplorer.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("h2",null,"Aqua Images"),Object(c.b)("p",null,"Aqua CSP provides full lifecycle security for your containerized applications, running either on Linux or Windows hosts.\nThe overall goal of full container lifecycle security is the deployment of applications that ensure the security of your applications’ operations, data, and computing infrastructure."),Object(c.b)("p",null,"Aqua Image Assurance covers the first part of the container lifecycle: image development.\nThe Image Assurance subsystem detects, assesses, and reports security issues in your images.\nNext, Aqua provides different forms of risk management, based on your preferences:"),Object(c.b)("p",null,"Aqua can block the deployment of containers based on images with security issues.\nAlternatively, it can help you mitigate the risk of deploying such containers based on images with known risks.\nThrough Risk-based Insights, Aqua can also identify running containers based on images with vulnerabilities and known exploits “in the wild”."),Object(c.b)("p",null," ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/ElEQVQoz32ST2vUQBjG8zFE6kHwIoJUhEKR+q+LKMWKVTwpilQ/iuBB7EERvagoePHg2R568qSyWDwsawTXpk133axJZiYzk8zk8Z3Z7EpBnPAyJPPOM7/nyQSL11Zx+ORl3Hv0HG5IKaG1bubSz65qeow1VBZ1XY+L+nOpkOcMMBVAa8H80g3MzLZw//EL3yBEAamUn8vK+FkUkvotVKFRGxKyJG6sF6cXMFp7FzOEXCNYWL6JmWMtPHjy0hMOmfDNFZUTdOX2xXmC79kAUTFCzHLkXEKVFbiQSHmBcMSQlQbB2at3cWh+GQ+fvvaCkdAobf3XFpVDl+kOwv4mNodtdLJfEKqig8b2ldLQFIsbwemVVRycWyLBV/5DmEv0CsrOODvOnvVR1LtfUH6lnuF79NkAqazIvvGiLpKMcd8XnLh4C/uOtrD2bEy4xRUGdLoyTfi0wbqFpIti+wN20za2eQLeEFpyI4mQF3IsuHDpNg4cP4+1xnKXCCMitBPLE8L4M6ruW/BkA1tZjIwIrSes9xKeuXJnj+WICH9TuJhm2AgOO7CDT0hYBz9ZAqHNlNBlKCaEcxeuY//suanlb0T4Q5TokyX3c9y18Jajj+DhG8TJOnrpfwiPnFqhDBengo5wh5ojKne/HKkTrJMQtrcBZG0kYkQZmn9m+Ac8fNGtZNoqewAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Image Scan",title:"Aqua Image Scan",src:"/ibm-gsi-cloudnative-journey/static/800a3bf251007b27cca48801c017168d/3cbba/AquaImages.png",srcSet:["/ibm-gsi-cloudnative-journey/static/800a3bf251007b27cca48801c017168d/7fc1e/AquaImages.png 288w","/ibm-gsi-cloudnative-journey/static/800a3bf251007b27cca48801c017168d/a5df1/AquaImages.png 576w","/ibm-gsi-cloudnative-journey/static/800a3bf251007b27cca48801c017168d/3cbba/AquaImages.png 1152w","/ibm-gsi-cloudnative-journey/static/800a3bf251007b27cca48801c017168d/0b124/AquaImages.png 1728w","/ibm-gsi-cloudnative-journey/static/800a3bf251007b27cca48801c017168d/e957c/AquaImages.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null," ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.166666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQY00WRv0oEMRDG9z1sRLAQbARtBMFKrCz0dRQULAS1EDm8exdBX8PiULDwcFmW3c2/yST5nGQXL/Axk53JL7Nfqt3jC1zez+EANEqjHxS6XkMpgxgjmPlfIUSklESY4pjnRdLrY0K1uX+Kq9snBOPR/Nawraj7hu5XGATK7EFeRAQOoQDynjkg5Ivku3OEJMBcrLYOBHj3jCgNTiYk5+DJSJOBMhbayl5qHPK0seTkGcY4NIPBT6egJa8lBoFWO0fnuH6Yw5JHry28HKSQBOzlAoO2H+CIJ9AoJ5L/x+uqx2zZgKT20VlwBm4fnhVgpluZJvsSszeBEZ0uU2Yv154l6R2Ne6s1Zp9t6V9qX2K1sXeCm8dFOeRkyryK6ZGR3IBBmwm4fogwvcR7rfDyNQEVldofqza+iMpEN1gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Image Scan",title:"Aqua Image Scan Drill Down",src:"/ibm-gsi-cloudnative-journey/static/1b95b9a4b43ddbfba8651432b88ba431/3cbba/AquaImageScan.png",srcSet:["/ibm-gsi-cloudnative-journey/static/1b95b9a4b43ddbfba8651432b88ba431/7fc1e/AquaImageScan.png 288w","/ibm-gsi-cloudnative-journey/static/1b95b9a4b43ddbfba8651432b88ba431/a5df1/AquaImageScan.png 576w","/ibm-gsi-cloudnative-journey/static/1b95b9a4b43ddbfba8651432b88ba431/3cbba/AquaImageScan.png 1152w","/ibm-gsi-cloudnative-journey/static/1b95b9a4b43ddbfba8651432b88ba431/0b124/AquaImageScan.png 1728w","/ibm-gsi-cloudnative-journey/static/1b95b9a4b43ddbfba8651432b88ba431/e957c/AquaImageScan.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-2-devsecops-aquasec-csp-index-mdx-19b2fff85368c0895f0e.js.map