(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(128)),i={id:"workflow-github",title:"Run workflows"},c={unversionedId:"workflow-github",id:"workflow-github",isDocsHomePage:!1,title:"Run workflows",description:"We use GitHub Actions to automatically run the different part of the workflow in a reproducible way:",source:"@site/docs/workflow-github.md",slug:"/workflow-github",permalink:"/docs/workflow-github",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/workflow-github.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610642873,sidebar:"docs",previous:{title:"Use Python",permalink:"/docs/use-python"},next:{title:"Store RDF data",permalink:"/docs/store-rdf"}},l=[{value:"GitHub Actions for RDF",id:"github-actions-for-rdf",children:[{value:"\ud83d\uddfa\ufe0f RML Mapper",id:"\ufe0f-rml-mapper",children:[]},{value:"\ud83d\udcec SPARQL operations",id:"-sparql-operations",children:[]},{value:"\u2714\ufe0f Validate RDF",id:"\ufe0f-validate-rdf",children:[]},{value:"\ud83d\udcdd Convert YARRRML to RML",id:"-convert-yarrrml-to-rml",children:[]}]},{value:"Automate data processing and loading",id:"automate-data-processing-and-loading",children:[]},{value:"Test Actions locally",id:"test-actions-locally",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We use GitHub Actions to automatically run the different part of the workflow in a reproducible way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download the input data files"),Object(o.b)("li",{parentName:"ul"},"Run Python script (to directly generate RDF, or perform preprocessing of the data for RML)"),Object(o.b)("li",{parentName:"ul"},"Run the RML mapper to generate the RDF data, if applicable"),Object(o.b)("li",{parentName:"ul"},"Upload the generated RDF file to the SPARQL endpoint"),Object(o.b)("li",{parentName:"ul"},"Generate and publish descriptive statistics for the published data")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Secure credentials \ud83d\udd12")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Securely define credentials as GitHub secrets (API keys, username, password, etc)"))),Object(o.b)("h2",{id:"github-actions-for-rdf"},"GitHub Actions for RDF"),Object(o.b)("p",null,"A few GitHub Actions are available on the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace?query=rdf"}),"GitHub marketplace")," to easily work with RDF data."),Object(o.b)("h3",{id:"\ufe0f-rml-mapper"},"\ud83d\uddfa\ufe0f RML Mapper"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/rml-mapper-java"}),"GitHub Action for the rmlmapper-java")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- name: Run RML mapper\n  uses: vemonet/rmlmapper-java@v4.9.0\n  with:\n    mapping: mappings.rml.ttl\n    output: rdf-output.nt\n  env:\n    JAVA_OPTS: "-Xmx6g"\n')),Object(o.b)("h3",{id:"-sparql-operations"},"\ud83d\udcec SPARQL operations"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/sparql-operations"}),"GitHub Action for d2s-sparql-operations"),", it allows to perform operations on SPARQL endpoints using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rdf4j.org/"}),"RDF4J")," (SPARQL select, construct, insert, delete queries, upload RDF files, split statements...)"),Object(o.b)("p",null,"Execute insert queries using local folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: MaastrichtU-IDS/sparql-operations-action@v1\n  with:\n    operation: upload\n    file: my-folder/*.ttl\n    endpoint: https://graphdb.ontotext.com/repositories/test/statements\n    user: ${{ secrets.SPARQL_USER }}\n    password: ${{ secrets.SPARQL_PASSWORD }}\n    inputvar: https://w3id.org/d2s/graph/geonames\n    outputvar: https://w3id.org/d2s/metadata\n    servicevar: http://localhost:7200/repositories/test-vincent\n")),Object(o.b)("p",null,"Upload RDF from local folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: MaastrichtU-IDS/sparql-operations-action@v1\n  with:\n    file: folder-with-rq-files/\n    endpoint: https://graphdb.ontotext.com/repositories/test/statements\n    user: ${{ secrets.SPARQL_USER }}\n    password: ${{ secrets.SPARQL_PASSWORD }}\n")),Object(o.b)("h3",{id:"\ufe0f-validate-rdf"},"\u2714\ufe0f Validate RDF"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/validate-rdf-with-jena"}),"GitHub Action to validate RDF with Jena")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: vemonet/jena-riot-action@v3.14\n  with:\n    input: my_file.ttl\n")),Object(o.b)("h3",{id:"-convert-yarrrml-to-rml"},"\ud83d\udcdd Convert YARRRML to RML"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/yarrrml-parser"}),"GitHub Action for the yarrrml-parser"),", to convert YARRRML YAML files to RML turtle files."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: vemonet/yarrrml-parser@v1.1\n  with:\n    input: mappings.yarrr.yml\n    output: mappings.rml.ttl\n")),Object(o.b)("h2",{id:"automate-data-processing-and-loading"},"Automate data processing and loading"),Object(o.b)("p",null,"RDF data can be automatically generated and loaded using GitHub Actions workflows."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/.github/workflows/generate-rdf.yml"}),"this workflow")," to generate data using a simple ",Object(o.b)("inlineCode",{parentName:"p"},"convert_to_rdf.py")," file and load it in the triplestore"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download input file from Google Docs")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'    - name: Download CSV files from Google docs\n      run: |\n        mkdir -p data/output\n        wget -O data/food-claims-kg.xlsx "https://docs.google.com/spreadsheets/d/1RWZ6AlGB8m7PO5kjsbbbeI4ETLwvKLOvkrzOpl8zAM8/export?format=xlsx&id=1RWZ6AlGB8m7PO5kjsbbbeI4ETLwvKLOvkrzOpl8zAM8"\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Install Python dependencies")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"    - name: Install Python dependencies\n      run: |\n        python -m pip install -r requirements.txt\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Run the python script to generate RDF")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"    - name: Run Python script to generate RDF\n      run: |\n        python src/convert_to_rdf.py\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Optional: clear existing graph")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'    - name: Clear existing graph\n      uses: vemonet/sparql-operations-action@v1\n      with:\n        query: "CLEAR GRAPH <https://w3id.org/foodkg/graph>"\n        endpoint: https://graphdb.dumontierlab.com/repositories/FoodHealthClaimsKG/statements\n        user: ${{ secrets.GRAPHDB_USER }}\n        password: ${{ secrets.GRAPHDB_PASSWORD }}\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Secrets")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to define those 2 secrets in your GitHub repository workflows secrets: ",Object(o.b)("inlineCode",{parentName:"p"},"GRAPHDB_USER")," and ",Object(o.b)("inlineCode",{parentName:"p"},"GRAPHDB_PASSWORD")))),Object(o.b)("h2",{id:"test-actions-locally"},"Test Actions locally"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nektos/act"}),"Act")," allows to run GitHub Actions workflows directly on your local machine to test."),Object(o.b)("p",null,"Provide a specific image and run a specific job:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"act -P ubuntu-latest=nektos/act-environments-ubuntu:18.04 -j generate-rdf\n")))}p.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);