(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=p(n),h=o,d=l["".concat(a,".").concat(h)]||l[h]||u[h]||r;return n?i.a.createElement(d,s(s({ref:t},b),{},{components:n})):i.a.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var b=2;b<r;b++)a[b]=n[b];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/biothings-explorer-logo-480588e1f49962514d23a40645bbf6b4.png"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),r=(n(0),n(128)),a={id:"d2s-biothings",title:"Use BioThings Studio"},s={unversionedId:"d2s-biothings",id:"d2s-biothings",isDocsHomePage:!1,title:"Use BioThings Studio",description:"BioThings Explorer",source:"@site/docs/d2s-biothings.md",slug:"/d2s-biothings",permalink:"/docs/d2s-biothings",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/d2s-biothings.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610635508},c=[{value:"Deploy BioThings Studio",id:"deploy-biothings-studio",children:[]},{value:"Use the BioThings SDK",id:"use-the-biothings-sdk",children:[]},{value:"Use the BioThings Explorer",id:"use-the-biothings-explorer",children:[]},{value:"Expose a new data source",id:"expose-a-new-data-source",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://biothings.io/explorer/"}),Object(r.b)("img",{alt:"BioThings Explorer",src:n(206).default}))),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.biothings.io/en/latest/"}),"BioThings SDK")," is a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://pypi.org/project/biothings/"}),"Python package")," to build and deploy annotated ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://smart-api.info/"}),"Smart APIs")," from flat data files. Multiple BioThings APIs can be built using the BioThings Hub, and exposed using BioThings Web."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://biothings.io/specs/"}),"BioThings API Specifications"),".")),Object(r.b)("h2",{id:"deploy-biothings-studio"},"Deploy BioThings Studio"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/biothings/biothings_studio"}),"BioThings Studio")," enables to deploy a Docker container with all dependencies required to build and expose BioThings APIs. See the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.biothings.io/en/latest/doc/studio.html#part-1-single-datasource"}),"BioThings Studio documentation"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"d2s start biothings-studio\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Access BioThings Studio web UI at http://localhost:8880")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Access BioThings API at http://localhost:7080")),Object(r.b)("p",null,"Volume shared in ",Object(r.b)("inlineCode",{parentName:"p"},"workspace/biothings"),"."),Object(r.b)("h2",{id:"use-the-biothings-sdk"},"Use the BioThings SDK"),Object(r.b)("p",null,"Available on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://pypi.org/project/biothings/"}),"PyPi"),'. BioThings SDK provides a Python-based toolkit to build  high-performance data APIs (or web services) from a single data source  or multiple data sources. It has the particular focus on building data  APIs for biomedical-related entities, a.k.a "BioThings" (such as genes,  genetic variants, drugs, chemicals, diseases, etc).'),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"pip install biothings\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Documentation about BioThings SDK can be found at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://docs.biothings.io"}),"http://docs.biothings.io"))),Object(r.b)("h2",{id:"use-the-biothings-explorer"},"Use the BioThings Explorer"),Object(r.b)("p",null,"BioThings APIs can then be queried by the BioThings Explorer: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://biothings.io/explorer"}),"https://biothings.io/explorer")),Object(r.b)("p",null,"A SDK is also ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://pypi.org/project/biothings-explorer/"}),"available on PyPi")," to use the BioThings Explorer"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"pip install biothings-explorer\n")),Object(r.b)("p",null,"Jupyter Notebooks:"),Object(r.b)("h2",{id:"expose-a-new-data-source"},"Expose a new data source"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To be developed.")))}p.isMDXComponent=!0}}]);