(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),b=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,c=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),T=a("9Hrx"),h=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(T.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+l},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),v=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,T=s.theme,h=s.description,P=s.keywords,w=Object(k.a)().interiorTheme,N=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,H=m?y.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",I=T||w;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:h,pageKeywords:P,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:I}),m&&Object(p.b)(f,{title:g,slug:y,tabs:m,currentTab:H}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:H}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},R0j2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("k1TG"),r=a("8o2o"),i=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),c={_frontmatter:b},l=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Solution"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: web\nspec:\n  containers:\n  - name: nginx\n    image: bitnami/nginx\n    command: ["nginx"]\n    args: ["-g", "daemon off;", "-q"]\n    ports:\n    - containerPort: 80\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-1-solution-mdx-a8d1e396c5684b9bb496.js.map