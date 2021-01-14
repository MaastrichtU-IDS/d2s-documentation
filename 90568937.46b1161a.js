(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{128:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),p=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=p(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=p(a),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(f,c(c({ref:e},l),{},{components:a})):r.a.createElement(f,c({ref:e},l))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},99:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return s})),a.d(e,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(128)),i={id:"data-validation",title:"RDF data validation"},c={unversionedId:"data-validation",id:"data-validation",isDocsHomePage:!1,title:"RDF data validation",description:"Optionally you can setup data validation to make sure all data added to the knowledge graph is complying with a specific data model.",source:"@site/docs/data-validation.md",slug:"/data-validation",permalink:"/docs/data-validation",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/data-validation.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610635508,sidebar:"docs",previous:{title:"Publish FAIR data",permalink:"/docs/publish-fair-data"},next:{title:"Deploy services",permalink:"/docs/deploy-services"}},s=[{value:"SHACL validation",id:"shacl-validation",children:[]}],l={toc:s};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Optionally you can setup data validation to make sure all data added to the knowledge graph is complying with a specific data model."),Object(o.b)("h3",{id:"shacl-validation"},"SHACL validation"),Object(o.b)("p",null,"We recommend to use Ontotext GraphDB free edition to enable SHACL validation. Enable SHACL validation when creating a new GraphDB repository. "),Object(o.b)("p",null,"For more informations about creating SHACL shapes, checkout the SHACL Shapes repository of the Institute of Data Science at Maastricht University: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/MaastrichtU-IDS/shacl-shapes"}),"https://github.com/MaastrichtU-IDS/shacl-shapes"))),Object(o.b)("p",null,"To find SHACL shapes, checkout the ",Object(o.b)("strong",{parentName:"p"},"Shapes of You")," SHACL shapes registry: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://maastrichtu-ids.github.io/shapes-of-you"}),"https://maastrichtu-ids.github.io/shapes-of-you"))))}p.isMDXComponent=!0}}]);