(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(126)),c={id:"convert-rml",title:"Convert with RML"},i={unversionedId:"convert-rml",id:"convert-rml",isDocsHomePage:!1,title:"Convert with RML",description:"Use the RDF Mapping Language (RML) to map your structured data (CSV, TSV, XLSX, SPSS, SQL, XML, JSON, YAML) to RDF using a declarative mapping language.",source:"@site/docs/convert-rml.md",slug:"/convert-rml",permalink:"/docs/convert-rml",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/convert-rml.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1610649962,sidebar:"docs",previous:{title:"Choose a data model",permalink:"/docs/choose-data-model"},next:{title:"Use Python",permalink:"/docs/use-python"}},p=[{value:"Define mappings",id:"define-mappings",children:[]},{value:"Convert with the RML Mapper",id:"convert-with-the-rml-mapper",children:[]},{value:"Convert with the RML Streamer",id:"convert-with-the-rml-streamer",children:[{value:"Prepare files",id:"prepare-files",children:[]},{value:"Run the RMLStreamer",id:"run-the-rmlstreamer",children:[]},{value:"Merge and compress output",id:"merge-and-compress-output",children:[]},{value:"Copy to Node2",id:"copy-to-node2",children:[]},{value:"Preload in GraphDB",id:"preload-in-graphdb",children:[]}]}],s={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rml.io/"}),"RDF Mapping Language (RML)")," to map your structured data (CSV, TSV, XLSX, SPSS, SQL, XML, JSON, YAML) to RDF using a declarative mapping language. "),Object(o.b)("h2",{id:"define-mappings"},"Define mappings"),Object(o.b)("p",null,"We recommend to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rml.io/yarrrml/"}),"YARRRML"),", a mapping language to replace the RDF by YAML, to make the definition of RML mappings easier."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://rml.io/yarrrml/matey/#edit"}),"Matey web UI \ud83e\udd9c"))," is available to easily write and test RML mappings in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://yaml.org/"}),"YAML")," files using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rml.io/yarrrml/"}),"YARRRML")," simplified mapping language. The mappings can be conveniently tested in the browser on a sample of the file to transform."),Object(o.b)("p",null,"Recommended workflow to easily create and test RML mappings:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Use the ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://rml.io/yarrrml/matey/#edit"}),"Matey web UI \ud83e\udd9c"))," to write YARRRML mappings, and test them against a sample of your data"),Object(o.b)("li",{parentName:"ol"},"Copy the YARRRML mappings to a file with the extension ",Object(o.b)("inlineCode",{parentName:"li"},".yarrr.yml")),Object(o.b)("li",{parentName:"ol"},"Copy the RML mappings to a file with same name, and the extension ",Object(o.b)("inlineCode",{parentName:"li"},".rml.ttl")),Object(o.b)("li",{parentName:"ol"},"Optionally you can automate the execution in a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/workflow-github"}),"GitHub Actions workflow"),".")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Specifications")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"RML Specifications can be found as a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rml.io/specs/rml/"}),"W3C unofficial draft"),"."),Object(o.b)("li",{parentName:"ul"},"See the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rml.io/"}),"rml.io")," website for more documentation about RML and the various tools built and deployed by Ghent University.")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"YARRRML package")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"YARRRML can also be parsed locally or automatically using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/RMLio/yarrrml-parser"}),"yarrrml-parser")," ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," package:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npm i @rmlio/yarrrml-parser -g\nyarrrml-parser -i mappings.yarrr.yml\n")))),Object(o.b)("p",null,"Example  of a YARRRML mapping file using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rml.io/docs/rmlmapper/default-functions/#split"}),"split function")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"|")," character:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'prefixes:\n  grel: "http://users.ugent.be/~bjdmeest/function/grel.ttl#"\n  rdfs: "http://www.w3.org/2000/01/rdf-schema#"\n  gn: "http://www.geonames.org/ontology#"\n\nmappings:\n  neighbours:\n    sources:\n      - [\'/mnt/workspace/input/geonames/dataset-geonames-countryInfo.csv~csv\']\n    s: http://www.geonames.org/ontology#$(ISO)\n    po:\n      - [a, gn:Country]\n      - p: gn:neighbours\n        o:\n            function: grel:string_split\n            parameters:\n                - [grel:valueParameter, $(neighbours)]\n                - [grel:p_string_sep, "\\|"]\n            language: en\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grel:p_string_sep")," separators needs to be escaped with ",Object(o.b)("inlineCode",{parentName:"li"},"\\")),Object(o.b)("li",{parentName:"ul"},"See the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rml.io/docs/rmlmapper/default-functions/"}),"full list of available default functions"),"."),Object(o.b)("li",{parentName:"ul"},"Additional function can be added by integrating them in a ",Object(o.b)("inlineCode",{parentName:"li"},".jar")," file, see the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/RMLio/rmlmapper-java#including-functions"}),"documentation"),".")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Generate nquads")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can also generate nquads by adding the graph infos in the ",Object(o.b)("inlineCode",{parentName:"p"},"rr:subjectMap")," in RML mappings (or just ",Object(o.b)("inlineCode",{parentName:"p"},"g:")," in YARRRML):"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-turtle"}),"rr:graphMap [ rr:constant <https://w3id.org/d2s/graph> ];\n")))),Object(o.b)("h2",{id:"convert-with-the-rml-mapper"},"Convert with the RML Mapper"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/RMLio/rmlmapper-java/"}),"rmlmapper-java")," execute RML mappings to generate RDF Knowledge Graphs."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Not for large files")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The RML Mapper loads all data in memory, so be aware when working with big datasets. "))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download the rmlmapper ",Object(o.b)("inlineCode",{parentName:"li"},".jar")," file at ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/RMLio/rmlmapper-java/releases"}),"https://github.com/RMLio/rmlmapper-java/releases")),Object(o.b)("li",{parentName:"ol"},"Run the RML mapper:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"java -jar rmlmapper.jar -m mapping.ttl -o rdf-output.nt\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Run automatically in workflow")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The RMLMapper can be easily run in GitHub Actions workflows, checkout the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/workflow-github"}),"Run workflows"))," page for more details."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- name: Run RML mapper\n  uses: vemonet/rmlmapper-java@v4.9.0\n  with:\n    mapping: mappings.rml.ttl\n    output: rdf-output.nt\n  env:\n    JAVA_OPTS: "-Xmx6g"\n')))),Object(o.b)("h2",{id:"convert-with-the-rml-streamer"},"Convert with the RML Streamer"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/RMLio/RMLStreamer/"}),"RMLStreamer")," is a scalable implementation of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rml.io/specs/rml/"}),"RDF Mapping Language Specifications")," to generate RDF out of structured input data streams."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Work in progress ")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The RMLStreamer is still in development, some features such as functions are yet to be implemented."))),Object(o.b)("p",null,"To run the RMLStreamer you have 2 options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start a single node ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/RMLio/RMLStreamer/blob/development/docker/README.md"}),"Apache Flink cluster using docker on your machine"),". "),Object(o.b)("li",{parentName:"ul"},"Use the DSRI Apache Flink cluster (especially for really large files).")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Documentation")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/deploy-services#apache-flink"}),"DSRI documentation to deploy Apache Flink"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Checkout the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/d2s-project-template/tree/master/datasets/cohd"}),"documentation to convert COHD using the RMLStreamer")," on the DSRI."))))),Object(o.b)("h3",{id:"prepare-files"},"Prepare files"),Object(o.b)("p",null,"Copy the ",Object(o.b)("inlineCode",{parentName:"p"},"RMLStreamer.jar")," file, your mapping files and data files to the Flink ",Object(o.b)("inlineCode",{parentName:"p"},"jobmanager")," pod before running it. "),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# get flink pod id\nPOD_ID=$(oc get pod --selector app=flink --selector component=jobmanager --no-headers -o=custom-columns=NAME:.metadata.name)\noc rsh flink-jobmanager-7459cc58f7-5hqjb\noc exec $POD_ID -- mkdir -p /mnt/project\n# If script run from mappings/dataset1/scripts/ :\noc cp ../../mappings $POD_ID:/mnt/project/\nchmod +x /mnt/project/mappings/dataset1/scripts/download.sh\noc exec $POD_ID -- /mnt/project/mappings/dataset1/scripts/download.sh\noc exec $POD_ID -- wget -O /mnt/RMLStreamer.jar https://github.com/RMLio/RMLStreamer/releases/download/v2.0.0/RMLStreamer-2.0.0.jar\n")),Object(o.b)("h3",{id:"run-the-rmlstreamer"},"Run the RMLStreamer"),Object(o.b)("p",null,"Example of command to run the RMLStreamer from the Flink cluster master:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'nohup /opt/flink/bin/flink run -p 128 -c io.rml.framework.Main /mnt/RMLStreamer.jar toFile -m /mnt/mappings.rml.ttl -o /mnt/rmlstreamer-mappings-output.nt --job-name "RMLStreamer mappings.rml.ttl" &\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Check the progress")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The progress of the job can be checked in the Apache Flink web UI."))),Object(o.b)("p",null,"Check if the conversion is running well in the pod:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc rsh $POD_ID\ntail /mnt/cohd/openshift-rmlstreamer-cohd-associations.nt\nls -alh /mnt/cohd/openshift-rmlstreamer-cohd-associations.nt\n")),Object(o.b)("h3",{id:"merge-and-compress-output"},"Merge and compress output"),Object(o.b)("p",null,"The ntriples files produced by RMLStreamer in parallel:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd /mnt/cohd/openshift-rmlstreamer-cohd-associations.nt\nnohup cat * >> openshift-rmlstreamer-cohd-associations.nt &\n\nls -alh /mnt/cohd/openshift-rmlstreamer-cohd-associations.nt/openshift-rmlstreamer-cohd-associations.nt\n\n# Zip the merged output file:\nnohup gzip openshift-rmlstreamer-cohd-associations.nt &\n")),Object(o.b)("h3",{id:"copy-to-node2"},"Copy to Node2"),Object(o.b)("p",null,"SSH connect to node2, http_proxy var need to be changed temporary to access DSRI"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'export http_proxy=""\nexport https_proxy=""\n\n# Copy with oc tool:\noc login\noc cp flink-jobmanager-7459cc58f7-cjcqf:/mnt/cohd/openshift-rmlstreamer-cohd-associations.nt/openshift-rmlstreamer-cohd-associations.nt.gz /data/graphdb/import/umids-download &!\n\n# Check (19G total):\nls -alh /data/graphdb/import/umids-download\ncp /data/graphdb/import/umids-download/openshift-rmlstreamer-cohd-associations.nt.gz /data/d2s-project-trek/workspace/dumps/rdf/cohd/\ngzip -d openshift-rmlstreamer-cohd-associations.nt.gz\n')),Object(o.b)("p",null,"Reactivate the proxy (",Object(o.b)("inlineCode",{parentName:"p"},"EXPORT http_proxy"),")"),Object(o.b)("h3",{id:"preload-in-graphdb"},"Preload in GraphDB"),Object(o.b)("p",null,"Check the generated COHD file on node2 at:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd /data/d2s-project-trek/workspace/dumps/rdf/cohd\n")),Object(o.b)("p",null,"Replace wrong triples:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sed -i \'s/"-inf"^^<http:\\/\\/www.w3.org\\/2001\\/XMLSchema#double>/"-inf"/g\' openshift-rmlstreamer-cohd-associations.nt\n')),Object(o.b)("p",null,"Start preload:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd /data/deploy-ids-services/graphdb/preload-cohd\ndocker-compose up -d\n")),Object(o.b)("p",null,"The COHD repository will be created in ",Object(o.b)("inlineCode",{parentName:"p"},"/data/graphdb-preload/data"),", copy it to the main GraphDB:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mv /data/graphdb-preload/data/repositories/cohd /data/graphdb/data/repositories\n")))}l.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,h=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return a?r.a.createElement(h,i(i({ref:t},s),{},{components:a})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);