(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{EEjL:function(t,a,e){"use strict";var n=e("2A+t"),s=e("Ktju");a.a=function(t){var a=t.posts,e=t.className,c=void 0===e?"":e,o=t.showTags,r=void 0===o||o;return Object(n.c)("section",{sx:{mb:[5,6,7]},className:c},a.map((function(t){return Object(n.c)(s.a,{key:t.slug,post:t,showTags:r})})))}},JJht:function(t,a,e){"use strict";var n=e("q1tI"),s=e.n(n),c=e("izhR"),o=e("Wbzz"),r=e("AlKF"),i=e("lUSg");a.a=function(t){var a=t.tags,e=Object(r.a)(),n=e.tagsPath,l=e.basePath;return s.a.createElement(s.a.Fragment,null,a.map((function(t,a){return s.a.createElement(s.a.Fragment,{key:t.slug},!!a&&", ",s.a.createElement(c.f,{as:o.Link,to:Object(i.a)("/"+l+"/"+n+"/"+t.slug)},t.name))})))}},Ktju:function(t,a,e){"use strict";var n=e("q1tI"),s=e.n(n),c=e("2A+t"),o=e("izhR"),r=e("Wbzz"),i=e("JJht");a.a=function(t){var a=t.post,e=t.showTags,n=void 0===e||e;return Object(c.c)(o.a,{mb:4},Object(c.c)(o.f,{as:r.Link,to:a.slug,sx:{fontSize:[1,2,3],color:"text"}},a.title),Object(c.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.c)("time",null,a.date),a.tags&&n&&Object(c.c)(s.a.Fragment,null," — ",Object(c.c)(i.a,{tags:a.tags}))))}},vNEf:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),s=e.n(n),c=e("2A+t"),o=e("izhR"),r=e("Wbzz"),i=e("g8+o"),l=e("AlKF"),u=e("EEjL"),b=e("lUSg"),g=e("3Cqz"),j=function(t){var a=t.posts,e=t.pageContext,n=Object(l.a)(),s=n.tagsPath,j=n.basePath;return Object(c.c)(i.a,null,Object(c.c)(g.a,{title:"Tag: "+e.name}),Object(c.c)(o.c,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},Object(c.c)(o.e,{as:"h1",variant:"styles.h1",sx:{marginY:2}},e.name),Object(c.c)(o.f,{as:r.Link,sx:{variant:"links.secondary",marginY:2},to:Object(b.a)("/"+j+"/"+s)},"View all tags")),Object(c.c)(u.a,{posts:a,sx:{mt:[4,5]}}))};a.default=function(t){var a=Object.assign({},t),e=a.data.allPost;return s.a.createElement(j,Object.assign({posts:e.nodes},a))}}}]);
//# sourceMappingURL=component---node-modules-devpanther-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-b7eeec17316eea2ed1d4.js.map