(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),n=a("NmYn"),r=a.n(n),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),d=a.n(p),u=a("QH2O"),b=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(m.b)("div",{className:d()(b.a.pageHeader,(t={},t[b.a.withTabs]=n.length,t[b.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:b.a.text},a)))))},g=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,n=o.baseUrl,r=o.subDirectory,l=n+"/edit/"+o.branch+r+"/src/pages"+t;return n?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),v=a("dI71"),A=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),n=a===o,l=new RegExp(o+"/?(#.*)?$"),c=i.replace(l,a);return Object(m.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=n,t),A.listItem)},Object(m.b)(s.Link,{className:A.link,to:""+c},e))}));return Object(m.b)("div",{className:A.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:A.list},n))))))},t}(o.a.Component),j=a("MjG9"),O=a("CzIb"),x=a("Asxa"),z=a("OIbQ"),k=a.n(z),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(x.c,{className:k.a.row},Object(m.b)(x.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,n=t.frontmatter,p=void 0===n?{}:n,d=t.relativePagePath,u=t.titleType,b=p.tabs,g=p.title,v=p.theme,A=p.description,x=p.keywords,z=p.date,k=Object(O.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,S=N?i.pathname.replace(N,""):i.pathname,B=b?S.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",P=v||k;return Object(m.b)(c.a,{tabs:b,homepage:!1,theme:P,pageTitle:g,pageDescription:A,pageKeywords:x,titleType:u},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:b,theme:P}),b&&Object(m.b)(w,{title:g,slug:S,tabs:b,currentTab:B}),Object(m.b)(j.a,{padded:!0},a,Object(m.b)(y,{relativePagePath:d}),Object(m.b)(T,{date:z})),Object(m.b)(f.a,{pageContext:t,location:i,slug:S,tabs:b,currentTab:B}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},JrpD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var i=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),{}),l={_frontmatter:s},c=r.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(c,Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Application modernization is a necessary part of cloud-centric business transformation. Business pressures demand faster time to market. IT economics require greater workload mobility to allow migrations to the cloud, improving operational efficiency and cost reductions."),Object(n.b)("p",null,"The success of a digital transformation depends on the ability of applications to build innovative capabilities and deliver them quickly and to accelerate developer productivity and the adoption of new cloud-native technologies. Containers, Kubernetes, and microservices deliver speed and simplicity and are being adopted rapidly. But, your current estate determines your modernization strategy. Rewriting your entire application estate isn’t feasible, so modernization is inevitable."),Object(n.b)("p",null,"Modernizing your applications provides a few immediate benefits:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Accelerating digital transformation. Application modernization is driven by the need to transform business to build capabilities and deliver them quickly.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Improving developer productivity. Adopting cloud-native and containerization technology enables self service for developers.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Improving operational efficiency and standardization. DevOps enablement drives a culture of automation and transformation of operations."))),Object(n.b)("h2",null,"The application modernization journey"),Object(n.b)("p",null,"What does application modernization mean? To start your modernization journey, you must understand the approaches that are right for your inventory and your modernization goals and choose the approach that best fits your needs."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.2361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADH0lEQVQ4y22T22sTWxTGv7lPOtPUtJ1WLbWmRusd9UXUB58EOQcfRAU5oIKKVWmbcWZMJ7YV71VE++ANDoeiD3oOUvQ0RjSXWpsmJmmqtiD+BeI1ij7ok7hlyRR9cMNmw157r/37vrUXANQBWApgMQC+43o/ulN3sK//ChhjAMABmOadmwFAws8h8Rw3SxFFwydJtZIgGFMBPbhimdSVGFzjxge2ufGBrTv6zqjXPr2ailOyRQBqf0kGVRRpmQWgBcB8ANMh+3w6x/M/Dh8bTU6ceZxlx7PpL/v6rzT9eaDt1/sCfjNChhEIGcbyVcHgymBNTQ18VX5Jrw5UATCOZ1PF88/HWW8p82ZTTye9WCUpCq1NHkkjgCCA+sZAoJIgM6Z59WE4/DHZ1vbhYTj8DLwgGKqukxS1KzGYc+MD7ODt/8p7/7nUTB6qujbdk2p40usBVJzasEFgw8MYj0QSsdZWdnPnTjYeiXwGL4rVoqKEyPCe1J2Cc+sGc+MD5e3nTxOZX1LVOQBozvMKR6T6XMMgQqlg27EnnZ1swnW/jUciZYiKrBmzmxR6tTsZyx8eusu6Ev+XO673UxJBUtWQZ/hcz/yZHCBf3LJFIAU5y7r/1HXZRDTKCo5ThiBJ01RdIzkNJ/IPCueeldjpx9l3G6POEiJRtIpGL9kUKckOrGluVklBxjRHio7DMqbJio7zFoIoGpKq0P8KnMwPF89OFtixbKq8+3IfXZZUXaNYg1cQ8k+tq6zE+oULZYrnbTs9QYSuSwlfE2E1x/N0eUZ3MjbWlRgkD1//Ed5PflX6/P7qH/8LoJ/goz0A2pzaWlqrcpaVIsmT0SjLWdYr7L7ch5kt83gAck86PnZk5D47mkm+3PP3hQaP0PCqPDVlieepe8DSaTyyrHt522YPOjq+Fh3nBRHWczy/gLw5NTYySR72ljLvV2/dvJyoRVle5BWF2rPZk6211NURoZ5uby+RXKp03ra/Uaf4RFn208FD927/21saLXenYkPr9u4iz0RFqyDJAa+fNSLkAH5tKER9xw21t/+Vs6zejGnaowfM1u+mRgrxtz5SIAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Appmodern journery",title:"Appmodern journery",src:"/ibm-gsi-cloudnative-journey/static/47be26bb95bee3feb1a6f4fa787ef18d/3cbba/appmod-journey-sketch.png",srcSet:["/ibm-gsi-cloudnative-journey/static/47be26bb95bee3feb1a6f4fa787ef18d/7fc1e/appmod-journey-sketch.png 288w","/ibm-gsi-cloudnative-journey/static/47be26bb95bee3feb1a6f4fa787ef18d/a5df1/appmod-journey-sketch.png 576w","/ibm-gsi-cloudnative-journey/static/47be26bb95bee3feb1a6f4fa787ef18d/3cbba/appmod-journey-sketch.png 1152w","/ibm-gsi-cloudnative-journey/static/47be26bb95bee3feb1a6f4fa787ef18d/c6824/appmod-journey-sketch.png 1185w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"Modernization comes in many flavors. First, analyze your current application estate and prioritize your modernization goals. You can use ",Object(n.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/learn/ibm-transformation-advisor"},"IBM Cloud™ Transformation Advisor ")," to analyze and categorize your applications. It provides guidance on the right target application server and the amount of effort that is required to start the modernization journey."),Object(n.b)("p",null,"Several factors determine an application’s path through the modernization phases and where it eventually finishes. Among those factors is the number of code changes that are required to move an application to a modern, cloud-ready application server and the business need for future investment in the application. The outcome of the analysis can help you select appropriate modernization patterns."),Object(n.b)("p",null,"Review the ",Object(n.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/architecture/architectures/application-modernization/reference-architecture"},"Application modernization reference architecture")," to understand which people, tools, and steps you might need on your journey."),Object(n.b)("h3",null,"Move the monolith to cloud"),Object(n.b)("p",null,"Application migration to the cloud is often approached by using the VM-based “lift and shift” method. However, because of the rapid and broad adoption of container orchestration on Kubernetes platforms across virtually all cloud providers, containerization is usually the better way to move applications to the cloud. At the highest level, containerize means to get the applications that you have today to run in a container."),Object(n.b)("p",null,"When you containerize an application, you’re focused on reducing costs, simplifying operations, and streamlining cloud migration to a common Kubernetes platform, such as Red Hat® OpenShift®. You’re also focused on moving toward a single operational model that can be used by both new cloud-native applications and traditional applications. By using the information from Transformation Advisor, you can decide at this phase whether the application can move to a modern, cloud-ready runtime such as IBM® WebSphere® Liberty. Such a move can require code changes and investment from the development team. You can also decide whether the application can move to a container that is based on traditional WebSphere without code changes."),Object(n.b)("h3",null,"Expose on-premises assets by using APIs"),Object(n.b)("p",null,"APIs enable assets that are difficult to enable for the cloud. By externalizing an application with an API, you allow new applications to use the exposed capability in an accessible way. Typically, this activity involves having an OpenAPI-specified REST interface that allows the interface to be discovered and managed. If you externalize the application early in the modernization lifecycle, you insulate consumers from further modernization activities that are done in pursuit of a complete cloud-native implementation."),Object(n.b)("h3",null,"Refactor the monolith into macroservices"),Object(n.b)("p",null,"Refactoring means getting serious about the monolithic things and starting to transform them to become Cloud-Native. Refactoring is where you tackle the huge Java™ and JavaScript files and break monoliths into smaller deployable components as suggested by the programming model. These components are not fully independent microservices from an end-to-end delivery perspective. However, by using this approach, you can decouple modernization paths for individual macroservices and enable the ",Object(n.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/chunking-strategy-strangler-pattern"},"Strangler pattern"),"."),Object(n.b)("h3",null,"Add capabilities as microservices"),Object(n.b)("p",null,"Innovate incrementally and establish success early. Enriching an application with new business function is a great way to realize the value from application modernization for cloud. Your application can consume a wide variety of innovative services that are available in the cloud, such as AI, industry, and domain services."),Object(n.b)("h3",null,"Strangle the monolith"),Object(n.b)("p",null,"Incrementally withdraw the monolith from service by replacing functions with new implementations."),Object(n.b)("p",null,"An application modernization journey that is container-oriented aligns with the hybrid nature of cloud adoption by large enterprises. It fully supports multicloud deployments that can span private, on-premises clouds and various public clouds by using standard Kubernetes-based container orchestration platforms, such as Red Hat OpenShift."),Object(n.b)("h2",null,"Modernization solutions"),Object(n.b)("p",null,"To help you on your cloud journey, IBM introduced experiences on modernization approaches, such as the incremental lift-and-shift to cloud-native microservices. You can make the most of your investments without rewriting your entire estate. When you modernize your applications, you can ease your move to the cloud on the full promise of cloud technology. With a cloud-native microservices approach, you can capitalize on the scalability and flexibility that is inherent to cloud. When you modernize your cloud-native applications, they can run concurrently and seamlessly connect with your investments. Barriers that prohibit productivity and integration are removed to create user experiences and develop applications."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"922px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADy0lEQVQ4yz2S20+bBRjGXwPMDSbOOeMhxjtC9GLxbjEu3rEIbvNiiTESRKJyKGRjg5VpopHB2GSMuOm2IpAxGGsBD2Oj41QojFNLz/0+Stvv0K9fS89FEOPFyvKYMvX9A568v+f50arf/5gLBsEKwtji6gb97SmiDf5UQdhZAcFQhnV/zVTi56rvhLbPIF/9HJvtn94oCTF3Sxk9vhCNKJfM5SeTbioLWDKud3UT8aFQSorF4Pb7JwAQYidoU1S+72MugDG0ICw16zf7TjVJnUoEer5C8oaiozqyqlHyJihlO05KluoaxGgWyOxWq7OICwZTvmgUTo6bJqK9RLRbsNQftbGLeGRxweV9OB192NzolyX4Y1GIE7dVvYJT7YvF4Iis4RJrUBBRzp7c5/LeOXx4HwnhcMofj8Mjy+Nji26yjRVRgDlXyPsdYMUQfLJOvzZyoUkKBiAnEuDGezv6RVYTTCbBxiL4QXBUpcnePVKwfxvIJFYUUy5Jgt3rTX+4m4ie9dnqi1zcMhx8AF5xTL+uu3zeZDXDYLdDmr6r6uOdmgWrFTMrDNo9lmoieibv7YMvFB47lksjOl1q6MED6JeWdDsdAiRa6z5Y8Rph9UjwiqP65GTr+SWjAfNmM3xT/apezqGeM5kwabfimsRWElHm8wdezPu4pCSbWEFIsYIAhuefjoJl8juUhbzfDk8wDnEHublJCsiQ43Hw47c7+kVGIyeeIl9xm6vHAdIHfVm/jo7u2ukwkEyCEYT/kHM8xtqjjtVlLNh5uLyj09HRlkYhEIAYT4Cf7FP1i4xajsbAhtfQztsqiCh7V/aeN4uOH88hbm0tJUYicMvy+P2ZFZq8c4iiq3WFm4F2/BVWYT3Uok/cqW/6U/sjtsZvYqOnoUMZYDXXoxzaI16cFS1VZ5Cij87W7kV6lHRg2kMnx+nT3xFRrsdU/6GXn4WZsUAKjMyFRlpajHPTWDLMg9N2dXXyzqEJswlaxo4rojOtTdb+V195/ZPS0py0h0/SHq74fP+O0kcxtuZIRPpli1vVpv4Idf++PVh5WtKp4Zsd2t4a+ObS97L55gBvf9LvZx432KbSgQf2vfxSfl5+/ms0u7z81pzZfHDGaHyjsepLqu/soWtT83mdC4/aepdnL/9ksH97cXil7pZa29aj0ba1DS41KBYTX1fY4q2VlvjVqhnfofcu3qL/z+Z2k4PjyOJy0ekBNkPxW5DKB6UCxb0oFMNxVA9HUNZjRXGXGcXdFhSrFlA9wOHM/TBq762hZkisOKfbohOtYxnpwH8AYz6wHgho8z0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Appmodern solution",title:"Appmodern solution",src:"/ibm-gsi-cloudnative-journey/static/97233f9688eec87e0711e269a8c4febb/e177d/appmod-solution-diagram.png",srcSet:["/ibm-gsi-cloudnative-journey/static/97233f9688eec87e0711e269a8c4febb/7fc1e/appmod-solution-diagram.png 288w","/ibm-gsi-cloudnative-journey/static/97233f9688eec87e0711e269a8c4febb/a5df1/appmod-solution-diagram.png 576w","/ibm-gsi-cloudnative-journey/static/97233f9688eec87e0711e269a8c4febb/e177d/appmod-solution-diagram.png 922w"],sizes:"(max-width: 922px) 100vw, 922px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"IBM Cloud Pak for Applications solutions"),Object(n.b)("p",null,"IBM Cloud Pak™ for Applications is a full-stack cloud solution. It gives you an open environment where you can quickly build cloud-native applications, modernize or extend your applications, and deploy middleware consistently across clouds."),Object(n.b)("p",null,"IBM Cloud Pak for Applications is portable to run on premises, on public clouds, or in a preintegrated system. It is certified, up-to-date software that secures the entire stack, from hardware to applications. It has a flexible consumption-based licensing model, where you pay for what you use and use the capabilities that you want."),Object(n.b)("p",null,"IBM Cloud Pak for Applications supports your enterprise’s application runtimes and offers instrumental developer tools and modernization toolkits, DevOps, AppOps management, and a self-service portal. IBM Cloud Pak for Applications can speed up the ability to build cloud-native applications by using built-in developer tools and processes, including support for microservices functions and serverless computing. You can use this Cloud Pak to quickly build applications on any cloud. It provides the most straightforward modernization path to the cloud for WebSphere clients, with security, resiliency, and scalability."),Object(n.b)("p",null,"As shown in the diagram, you can customize your modernization strategy with a flexible deployment model and modernization toolkit. You can also gradually move traditional applications to the cloud in a cost-effective way that makes sense for your business. As you modernize your applications, you can use insights to make decisions about what to replatform, repackage, and refactor, which will optimize your resources and costs."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1044px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVQ4yz2SbUxbZRTHD7RXLXNmOHyJJhpIFl8SP+gHFw3ZvvrNqIn7MNkKy8IwvhRTZnQ66YYKG8imxhDl8rLCtmJdBqM4uAUKYy20txf6Sm9ve+/tvdy2l9ohDCUui8c8zOxJzpcn5/97zv9/HkgoCiAixESRETQNY5LkGgwg6NF6KCYtvwi+WtQTdcqa/WCTdKYGtfb3kOv/xPp2hpPNUQ82KFzvUZkljBLC2T7BeBySquqWV1cxoWSuAwCFSMNf8sd0NtGKmuK4lZxzjIUvn8O4oxPZGyNj3bl08Rs5hA1a6AIBvX7gnbL6RgsFZWVlJgAw8oqyDYyJ4gQAlAOAYUs+Rq/pVzAmyf/M+b1brP8mcqwP59jAVkQU7zhWZazLLvWRfurhHc+9snevCYwURcQ7Y6I4Jek68ooyRqZGtMGGdJz+e+U0rmuns+lfP+soDp/D9eEO9A2dbf9cFzRbPo5NWri/AXPArOWpxYxshNeqq6Gyqgo8CwvMNYZBz/w8AwCPAcBDWrqH9nF+TAkO9Y/xT7+UVBWVTAojIz9+MRGNKrNsAJlkvBcASqqeenr3RdeoAQwGAxHvDAvCVFQUMS5LY28csAHvt8Ka2Ez/qXXhhvbtSn6q7dR8kMNgcAGD47Ttq3xS7cjz2CyH+ocQoW2w/wGGDRjhnj0EXlUn1WKRZEgmrACAB7PC+e5QhEFFtK/o01+fWkyrGBZSGJnosw2nefX3eBidUoJkaHxid8Xj75oPUyTDRwHgkbgkuUmGiUzGBQCl5BE9dZbmI32oy2eU4lDt8VveYdzwOpGzn7C2p2NyT2IRfxZC/aS3xmw2ne+hjbCrvJwiG00oijdTKOByRp4BgB2I38GmbOndzP+Een50k2fH5zX3AObcdlwKzvgGCiu3WwoCHs6G7AcRYf+RQyanm7lnedTthqgotgqaxi7xfCsBkvt/M3Xfb+jX7mq6kuMTnLQcXiguh3xFPhWVsoVcbqCQvGsucD8Qy6aK8ic7e2kDUBQFz1ZWbudIauv/3941PQndczdO0LPTQtfM9GzbCHepxznJ9v02FWwZCV9q8KRmLTflZKNXaX7TGdjWBsRMCVisVqjet+8+MI8IRxxq6cllhA8m7rxfN6Qx5oHUlVp7zFUzmLxac1G4evSy4Kq/EHN+6FSYpuvrFrLll95qNNzfMCl/JAKLPA9cNAzWVYSPbiMcCiK82lmEl09ysL9lHJ5vZWFPsweastsuSPa7AOCZktLSFwDgRQDY8x9TSmcPfWGtPgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"CP4A solution",title:"CP4A solution",src:"/ibm-gsi-cloudnative-journey/static/b6e7b3fa542cf6b0a1f2d6c3415e204a/50232/icpa-solution-diagram.png",srcSet:["/ibm-gsi-cloudnative-journey/static/b6e7b3fa542cf6b0a1f2d6c3415e204a/7fc1e/icpa-solution-diagram.png 288w","/ibm-gsi-cloudnative-journey/static/b6e7b3fa542cf6b0a1f2d6c3415e204a/a5df1/icpa-solution-diagram.png 576w","/ibm-gsi-cloudnative-journey/static/b6e7b3fa542cf6b0a1f2d6c3415e204a/50232/icpa-solution-diagram.png 1044w"],sizes:"(max-width: 1044px) 100vw, 1044px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"You can develop cloud-native applications with containers, common services, developer tools of your choice, and integrated DevOps and use an optimized set of frameworks and runtimes for cloud-native and traditional applications. Accelerate development with governance that is supported by IBM expertise. Examine the application modernization solutions that are provided by IBM Cloud Pak for Applications. The solution is an end-to-end application modernization experience that includes Build, Deploy, and Run phases:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Build. When you containerize an application or integration middleware component, you’re moving to a common Kubernetes platform such as Red Hat OpenShift and to a single operational model. The model can be used by both new cloud-native applications and traditional applications. IBM Cloud Pak for Applications provides fully tested, secure, and certified application and middleware runtime containers.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Deploy. A key practice for containerization is to make application container images immutable and embrace a deployment and operations approach that is based on replacing running containers with the original image if problems occur. Thus, DevOps deployment automation pipelines are a building block of any containerization solution.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run. As you move deeper into the container orchestration world of Kubernetes, you find that many of the responsibilities and tasks that are associated with a traditional WebSphere clustered environment are subsumed into the Kubernetes layer and into the common platform services that are provided by OpenShift."))),Object(n.b)("h3",null,"Application replatforming to cloud-ready Liberty containers"),Object(n.b)("p",null,"Application containerization outcomes are greatly improved when containerization is accompanied by replatforming the application to a modern container-native runtime that is most suitable for cloud environments, such as WebSphere Liberty. Such modern application runtimes allow application containers to be more agile in terms of smaller runtime footprint and faster startup time. They also provide DevOps-oriented server configuration by using simple human-readable files and prebuilt integration points with common operational services such as logging, metrics, metering, health, and security. A few code changes are typically required to move applications from traditional WebSphere to Liberty."),Object(n.b)("p",null,"For an end-to-end scenario that moves an application to the WebSphere Liberty runtime and runs it in Red Hat OpenShift, see ",Object(n.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/architecture/architectures/runtime-modernization-solution"},"Runtime modernization by using WebSphere Liberty"),"."),Object(n.b)("h3",null,"Containerizing a traditional WebSphere application for operational modernization"),Object(n.b)("p",null,"Refactoring enterprise Java applications to WebSphere Liberty and Open Liberty containers is your most strategic option. However, if there is little business need for future investment in the WebSphere application and Transformation Advisor suggests that you need to change the code to move the application to WebSphere Liberty, you can use the container for traditional IBM WebSphere Application Server."),Object(n.b)("p",null,"By repackaging traditional WebSphere or WebSphere Network Deployment (ND) applications into a container, you can modernize traditional WebSphere ND operations and replace manual administration of WebSphere ND cells with automated DevOps pipelines that automate applications deployment and configuration. You can reuse WebSphere automation scripting. If no such automation exists, you can use the configuration migration tools that are provided by IBM Cloud Pak for Applications to capture WebSphere environment configurations. Those tools create a separate DevOps pipeline for each application in the cell that is moved to a traditional WebSphere container."),Object(n.b)("p",null,"For an end-to-end scenario that moves an application to the traditional WebSphere container and runs it in Red Hat OpenShift, see ",Object(n.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/architecture/architectures/op-modernization-solution"},"Operational modernization by using traditional WebSphere"),"."))}p.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-appmodern-index-mdx-45ad3f43faa420d53e49.js.map