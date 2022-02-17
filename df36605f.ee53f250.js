(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(141)),i=["components"],c={id:"create-dataset",title:"Create new dataset mappings"},d={unversionedId:"create-dataset",id:"create-dataset",isDocsHomePage:!1,title:"Create new dataset mappings",description:"In this documentation I will use d2s-project-template as example, but you are encouraged to create a new Git repository using the template.",source:"@site/docs/create-dataset.md",slug:"/create-dataset",permalink:"/docs/create-dataset",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/create-dataset.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1645089149},s=[{value:"Create dataset folder and mapping files",id:"create-dataset-folder-and-mapping-files",children:[]},{value:"Check the download script",id:"check-the-download-script",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this documentation I will use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-project-template"},"d2s-project-template")," as example, but you are encouraged to create a new Git repository ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/d2s-project-template/generate"},"using the template"),"."),Object(o.b)("h2",{id:"create-dataset-folder-and-mapping-files"},"Create dataset folder and mapping files"),Object(o.b)("p",null,"Run this command at the root of your repository to generate the dataset mappings files in the ",Object(o.b)("inlineCode",{parentName:"p"},"datasets")," folder"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"d2s new dataset\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Provide some dataset metadata")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You will be prompted to enter some metadata about the dataset to create."))),Object(o.b)("p",null,"The dataset readme, mappings, metadata, and download files are created in the ",Object(o.b)("inlineCode",{parentName:"p"},"datasets/$dataset_id")," folder."),Object(o.b)("h2",{id:"check-the-download-script"},"Check the download script"),Object(o.b)("p",null,"Check the download script generated in ",Object(o.b)("inlineCode",{parentName:"p"},"datasets/$dataset_id/scripts/download.sh")," and edit it if needed."),Object(o.b)("p",null,"We use bash for it's performance and reliability with large file download. But you are free to use a python script or other documented methods."))}l.isMDXComponent=!0},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return a?r.a.createElement(b,c(c({ref:t},s),{},{components:a})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);