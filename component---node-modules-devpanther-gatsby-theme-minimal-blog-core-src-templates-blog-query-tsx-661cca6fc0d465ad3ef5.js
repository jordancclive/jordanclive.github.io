(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7/g1":function(t,a,e){"use strict";e.r(a);var s=e("q1tI"),n=e.n(s),c=e("2A+t"),o=e("izhR"),r=e("Wbzz"),i=e("g8+o"),l=e("EEjL"),u=e("AlKF"),b=e("lUSg"),g=e("3Cqz"),j=function(t){var a=t.posts,e=Object(u.a)(),s=e.tagsPath,n=e.basePath;return Object(c.c)(i.a,null,Object(c.c)(g.a,{title:"Blog"}),Object(c.c)(o.c,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},Object(c.c)(o.e,{as:"h1",variant:"styles.h1",sx:{marginY:2}},"Blogs"),Object(c.c)(o.f,{as:r.Link,sx:{variant:"links.secondary",marginY:2},to:Object(b.a)("/"+n+"/"+s)},"View all tags")),Object(c.c)(l.a,{posts:a,sx:{mt:[4,5]}}))};a.default=function(t){var a=Object.assign({},t),e=a.data.allPost;return n.a.createElement(j,Object.assign({posts:e.nodes},a))}},EEjL:function(t,a,e){"use strict";var s=e("2A+t"),n=e("Ktju");a.a=function(t){var a=t.posts,e=t.className,c=void 0===e?"":e,o=t.showTags,r=void 0===o||o;return Object(s.c)("section",{sx:{mb:[5,6,7]},className:c},a.map((function(t){return Object(s.c)(n.a,{key:t.slug,post:t,showTags:r})})))}},JJht:function(t,a,e){"use strict";var s=e("q1tI"),n=e.n(s),c=e("izhR"),o=e("Wbzz"),r=e("AlKF"),i=e("lUSg");a.a=function(t){var a=t.tags,e=Object(r.a)(),s=e.tagsPath,l=e.basePath;return n.a.createElement(n.a.Fragment,null,a.map((function(t,a){return n.a.createElement(n.a.Fragment,{key:t.slug},!!a&&", ",n.a.createElement(c.f,{as:o.Link,to:Object(i.a)("/"+l+"/"+s+"/"+t.slug)},t.name))})))}},Ktju:function(t,a,e){"use strict";var s=e("q1tI"),n=e.n(s),c=e("2A+t"),o=e("izhR"),r=e("Wbzz"),i=e("JJht");a.a=function(t){var a=t.post,e=t.showTags,s=void 0===e||e;return Object(c.c)(o.a,{mb:4},Object(c.c)(o.f,{as:r.Link,to:a.slug,sx:{fontSize:[1,2,3],color:"text"}},a.title),Object(c.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.c)("time",null,a.date),a.tags&&s&&Object(c.c)(n.a.Fragment,null," — ",Object(c.c)(i.a,{tags:a.tags}))))}}}]);
//# sourceMappingURL=component---node-modules-devpanther-gatsby-theme-minimal-blog-core-src-templates-blog-query-tsx-661cca6fc0d465ad3ef5.js.map