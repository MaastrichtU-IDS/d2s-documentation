(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(138)),i={id:"workflow-github",title:"Deploy workflows"},l={unversionedId:"workflow-github",id:"workflow-github",isDocsHomePage:!1,title:"Deploy workflows",description:"We use GitHub Actions to automatically run the different part of the workflow in a reproducible way:",source:"@site/docs/workflow-github.md",slug:"/workflow-github",permalink:"/docs/workflow-github",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/workflow-github.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1611747413,sidebar:"docs",previous:{title:"Use Python",permalink:"/docs/use-python"},next:{title:"Store RDF data",permalink:"/docs/store-rdf"}},c=[{value:"GitHub Actions for RDF",id:"github-actions-for-rdf",children:[{value:"\ud83d\uddfa\ufe0f RML Mapper",id:"\ufe0f-rml-mapper",children:[]},{value:"\ud83d\udcec SPARQL operations",id:"-sparql-operations",children:[]},{value:"\u2714\ufe0f Validate RDF",id:"\ufe0f-validate-rdf",children:[]},{value:"\ud83d\udcdd Convert YARRRML to RML",id:"-convert-yarrrml-to-rml",children:[]},{value:"\ud83d\udcbd Compress RDF to HDT",id:"-compress-rdf-to-hdt",children:[]},{value:"\ud83d\udcc8 Get a SPARQL endpoint metadata",id:"-get-a-sparql-endpoint-metadata",children:[]}]},{value:"Automate data processing and loading",id:"automate-data-processing-and-loading",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Test Actions locally",id:"test-actions-locally",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We use GitHub Actions to automatically run the different part of the workflow in a reproducible way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download the input data files"),Object(o.b)("li",{parentName:"ul"},"Run Python script (to directly generate RDF, or perform preprocessing of the data for RML)"),Object(o.b)("li",{parentName:"ul"},"Run the RML mapper to generate the RDF data, if applicable"),Object(o.b)("li",{parentName:"ul"},"Upload the generated RDF file to the SPARQL endpoint"),Object(o.b)("li",{parentName:"ul"},"Generate and publish descriptive statistics for the published data")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Secure credentials \ud83d\udd12")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Securely define credentials as GitHub secrets (API keys, username, password, etc)"))),Object(o.b)("h2",{id:"github-actions-for-rdf"},"GitHub Actions for RDF"),Object(o.b)("p",null,"A few GitHub Actions are available on the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace?query=rdf"}),"GitHub marketplace")," to easily work with RDF data."),Object(o.b)("h3",{id:"\ufe0f-rml-mapper"},"\ud83d\uddfa\ufe0f RML Mapper"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/rml-mapper-java"}),"GitHub Action for the rmlmapper-java")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- name: Run RML mapper\n  uses: vemonet/rmlmapper-java@v4.9.0\n  with:\n    mapping: mappings.rml.ttl\n    output: rdf-output.nt\n  env:\n    JAVA_OPTS: "-Xmx6g"\n')),Object(o.b)("h3",{id:"-sparql-operations"},"\ud83d\udcec SPARQL operations"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/sparql-operations"}),"GitHub Action for d2s-sparql-operations"),", it allows to perform operations on SPARQL endpoints using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rdf4j.org/"}),"RDF4J")," (SPARQL select, construct, insert, delete queries, upload RDF files, split statements...)"),Object(o.b)("p",null,"Execute insert queries using local folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: MaastrichtU-IDS/sparql-operations-action@v1\n  with:\n    operation: upload\n    file: my-folder/*.ttl\n    endpoint: https://graphdb.ontotext.com/repositories/test/statements\n    user: ${{ secrets.SPARQL_USER }}\n    password: ${{ secrets.SPARQL_PASSWORD }}\n    inputvar: https://w3id.org/d2s/graph/geonames\n    outputvar: https://w3id.org/d2s/metadata\n    servicevar: http://localhost:7200/repositories/test-vincent\n")),Object(o.b)("p",null,"Upload RDF from local folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: MaastrichtU-IDS/sparql-operations-action@v1\n  with:\n    file: folder-with-rq-files/\n    endpoint: https://graphdb.ontotext.com/repositories/test/statements\n    user: ${{ secrets.SPARQL_USER }}\n    password: ${{ secrets.SPARQL_PASSWORD }}\n")),Object(o.b)("h3",{id:"\ufe0f-validate-rdf"},"\u2714\ufe0f Validate RDF"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/validate-rdf-with-jena"}),"GitHub Action to validate RDF with Jena")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: vemonet/jena-riot-action@v3.14\n  with:\n    input: my_file.ttl\n")),Object(o.b)("h3",{id:"-convert-yarrrml-to-rml"},"\ud83d\udcdd Convert YARRRML to RML"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/yarrrml-parser"}),"GitHub Action for the yarrrml-parser"),", to convert YARRRML YAML files to RML turtle files."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: vemonet/yarrrml-parser@v1.1\n  with:\n    input: mappings.yarrr.yml\n    output: mappings.rml.ttl\n")),Object(o.b)("h3",{id:"-compress-rdf-to-hdt"},"\ud83d\udcbd Compress RDF to HDT"),Object(o.b)("p",null,"Convert ntriples to HDT using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/r/rdfhdt/hdt-cpp"}),"hdt-cpp docker image"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Compress RDF to HDT\n  uses: vemonet/rdfhdt-action@master\n  with:\n    input: rdf-output.nt\n    output: hdt-output.hdt\n")),Object(o.b)("h3",{id:"-get-a-sparql-endpoint-metadata"},"\ud83d\udcc8 Get a SPARQL endpoint metadata"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work in progress")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Computing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/hcls-dataset/"}),"HCLS descriptive metadata")," for a SPARQL endpoint is a work in development in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/d2s-cli"}),Object(o.b)("inlineCode",{parentName:"a"},"d2s")," CLI")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"d2s metadata")," will generate descriptive statistics for knowledge graphs, defined by the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/hcls-dataset/"}),"Health Care and Life Science Community Profile"),", for each graph in the SPARQL endpoint. The computed metadata provide an overview of the SPARQL endpoint content in RDF, with quantitative insights on entities classes, and the relations between them."),Object(o.b)("p",null,"Requires Python 3.6+ setup. Metadata are generated as turtle RDF in the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata.ttl")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Generate HCLS metadata for a SPARQL endpoint\n  run: |\n    pip install d2s\n    d2s metadata analyze $SPARQL_ENDPOINT -o metadata.ttl\n")),Object(o.b)("h2",{id:"automate-data-processing-and-loading"},"Automate data processing and loading"),Object(o.b)("p",null,"RDF data can be automatically generated and loaded using GitHub Actions workflows."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/food-claims-kg/blob/master/.github/workflows/generate-rdf.yml"}),"this workflow")," to generate data using a simple ",Object(o.b)("inlineCode",{parentName:"p"},"convert_to_rdf.py")," file and load it in the triplestore"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Checkout the ",Object(o.b)("inlineCode",{parentName:"li"},"git")," repository file in your current folder:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- uses: actions/checkout@v2\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Download input file from Google Docs")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'    - name: Download CSV files from Google docs\n      run: |\n        mkdir -p data/output\n        wget -O data/food-claims-kg.xlsx "https://docs.google.com/spreadsheets/d/1RWZ6AlGB8m7PO5kjsbbbeI4ETLwvKLOvkrzOpl8zAM8/export?format=xlsx&id=1RWZ6AlGB8m7PO5kjsbbbeI4ETLwvKLOvkrzOpl8zAM8"\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Install Python dependencies")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"    - name: Install Python dependencies\n      run: |\n        python -m pip install -r requirements.txt\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Run the python script to generate RDF")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"    - name: Run Python script to generate RDF\n      run: |\n        python src/convert_to_rdf.py\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Optional: clear an existing graph in the triplestore")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'    - name: Clear existing graph\n      uses: vemonet/sparql-operations-action@v1\n      with:\n        query: "CLEAR GRAPH <https://w3id.org/foodkg/graph>"\n        endpoint: https://graphdb.dumontierlab.com/repositories/FoodHealthClaimsKG/statements\n        user: ${{ secrets.GRAPHDB_USER }}\n        password: ${{ secrets.GRAPHDB_PASSWORD }}\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Upload the output as artifact to be able to download them from the GitHub website, or pass them between jobs:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Upload RDF output artifact\n  id: stepupload\n  uses: actions/upload-artifact@v1\n  with:\n    name: rdf-output\n    path: rdf-file.nq\n")),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Optional: download the artifact (",Object(o.b)("inlineCode",{parentName:"li"},"rdf-output")," here) back in another job:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- name: Get RDF output artifact\n  uses: actions/download-artifact@v1\n  with:\n    name: rdf-output\n")),Object(o.b)("p",null,"The files in the artifact can be accessed directly, e.g. here ",Object(o.b)("inlineCode",{parentName:"p"},"rdf-output/rdf-file.nq")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Secrets")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You will need to define those 2 secrets in your GitHub repository workflows secrets: ",Object(o.b)("inlineCode",{parentName:"p"},"GRAPHDB_USER")," and ",Object(o.b)("inlineCode",{parentName:"p"},"GRAPHDB_PASSWORD")))),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"The following ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions#usage-limits"}),"limitations apply to GitHub-hosted runner")," (they do not apply for self-hosted runners):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each ",Object(o.b)("strong",{parentName:"li"},"job")," in a workflow can run for up to ",Object(o.b)("strong",{parentName:"li"},"6 hours")," of execution time."),Object(o.b)("li",{parentName:"ul"},"Each ",Object(o.b)("strong",{parentName:"li"},"workflow")," run is limited to ",Object(o.b)("strong",{parentName:"li"},"72 hours"),"."),Object(o.b)("li",{parentName:"ul"},"Total ",Object(o.b)("strong",{parentName:"li"},"concurrent jobs")," for the free plan: ",Object(o.b)("strong",{parentName:"li"},"20 jobs")," (5 macOS)")),Object(o.b)("p",null,"GitHub-hosted runners run on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners"}),"machines with the following specifications"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2-core CPU")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"7 GB")," of RAM memory"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"14 GB")," of SSD disk space"),Object(o.b)("li",{parentName:"ul"},"Environments: ",Object(o.b)("inlineCode",{parentName:"li"},"ubuntu-latest")," (a.k.a. ",Object(o.b)("inlineCode",{parentName:"li"},"ubuntu-18.04"),"), ",Object(o.b)("inlineCode",{parentName:"li"},"ubuntu-20.04"),", ",Object(o.b)("inlineCode",{parentName:"li"},"windows-latest"),", ",Object(o.b)("inlineCode",{parentName:"li"},"macos-latest"))),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions"}),"GitHub free plan")," allows to run Actions ",Object(o.b)("strong",{parentName:"p"},"in private repositories"),", but impose execution time and storage limitations. By default GitHub set your spending limit to 0 \u20ac, so you will not be billed by surprise. The free plan provides the following credits per months, they are attached to the user or organization owning the repository running the workflows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2,000 minutes")," of execution time (~33h)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"500 MB of storage")," (for private artifacts and GitHub Packages)")),Object(o.b)("h2",{id:"test-actions-locally"},"Test Actions locally"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nektos/act"}),"Act")," allows to run GitHub Actions workflows directly on your local machine to test."),Object(o.b)("p",null,"Provide a specific image and run a specific job:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"act -P ubuntu-latest=nektos/act-environments-ubuntu:18.04 -j generate-rdf\n")))}b.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(u,l(l({ref:t},s),{},{components:a})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);