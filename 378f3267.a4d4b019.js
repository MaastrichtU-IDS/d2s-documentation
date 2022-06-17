(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?o.a.createElement(m,r(r({ref:t},p),{},{components:n})):o.a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),l=(n(0),n(141)),i=["components"],r={id:"d2s-installation",title:"Installation"},c={unversionedId:"d2s-installation",id:"d2s-installation",isDocsHomePage:!1,title:"Installation",description:"Install the d2s client",source:"@site/docs/d2s-installation.md",slug:"/d2s-installation",permalink:"/docs/d2s-installation",editUrl:"https://github.com/MaastrichtU-IDS/d2s-docs/edit/master/website/docs/d2s-installation.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1655461851},p=[{value:"Install the d2s client",id:"install-the-d2s-client",children:[{value:"Enable autocompletion",id:"enable-autocompletion",children:[]},{value:"Windows support",id:"windows-support",children:[]},{value:"Try the client",id:"try-the-client",children:[]}]},{value:"Download the GraphDB triplestore",id:"download-the-graphdb-triplestore",children:[]},{value:"Install pipx",id:"install-pipx",children:[{value:"Install pipx on Ubuntu",id:"install-pipx-on-ubuntu",children:[]},{value:"Install pipx on MacOS",id:"install-pipx-on-macos",children:[]},{value:"Install pipx on CentOS",id:"install-pipx-on-centos",children:[]},{value:"Install pipx on Windows",id:"install-pipx-on-windows",children:[]},{value:"Upgrade d2s version",id:"upgrade-d2s-version",children:[]},{value:"Uninstall",id:"uninstall",children:[]}]},{value:"Install Docker",id:"install-docker",children:[{value:"On Ubuntu",id:"on-ubuntu",children:[]},{value:"On MacOS",id:"on-macos",children:[]},{value:"On Windows",id:"on-windows",children:[]},{value:"Fix known issues",id:"fix-known-issues",children:[]}]},{value:"Install Rabix Benten for VSCode",id:"install-rabix-benten-for-vscode",children:[]},{value:"Install Rabix Composer GUI",id:"install-rabix-composer-gui",children:[]},{value:"Try Apache Airflow",id:"try-apache-airflow",children:[]},{value:"Try Toil",id:"try-toil",children:[]}],b={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"install-the-d2s-client"},"Install the d2s client"),Object(l.b)("p",null,"Install the ",Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/d2s"},"d2s client")," and ",Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/cwlref-runner/"},"cwlref-runner")," with ",Object(l.b)("a",{parentName:"p",href:"https://pipxproject.github.io/pipx/"},"pipx")," on Linux and MacOS:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pipx install d2s cwlref-runner\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"We recommend to use ",Object(l.b)("a",{parentName:"p",href:"https://pipxproject.github.io/pipx/"},"pipx")," if you just want to execute ",Object(l.b)("inlineCode",{parentName:"p"},"d2s"),". You can also install with ",Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/pip/"},"pip")," or pip3 depending on your preferences.")),Object(l.b)("p",null,"Requirements (see below for installation instructions):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://d2s.semanticscience.org/docs/d2s-installation#install-pip"},"Python 3.6")," and pip"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-compose")),Object(l.b)("li",{parentName:"ul"},"Git (download ",Object(l.b)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git for Windows"),")"),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("a",{parentName:"li",href:"https://maastrichtu-ids.github.io/dsri-documentation/docs/openshift-install"},"OpenShift CLI")," (",Object(l.b)("inlineCode",{parentName:"li"},"oc")," command) is required if you want to use experimental features to run services and workflows on OpenShift")),Object(l.b)("p",null,"See those ",Object(l.b)("a",{parentName:"p",href:"/docs/d2s-installation#install-pipx-on-windows"},"instructions to install d2s on Windows")," using Chocolatey and pipx. CWL Workflow execution on Windows\nwith the CWL reference runner ",Object(l.b)("a",{parentName:"p",href:"https://github.com/common-workflow-language/cwltool/#ms-windows-users"},"requires WSL 2 and Docker Desktop"),"."),Object(l.b)("h3",{id:"enable-autocompletion"},"Enable autocompletion"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://img.shields.io/static/v1?label=module&message=Optional&color=blue",alt:"Optional"})),Object(l.b)("p",null,"Enabling commandline autocompletion in the terminal provides a better experience using the ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," client. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ZSH"),": add the import autocomplete line to the ",Object(l.b)("inlineCode",{parentName:"li"},"~/.zshrc")," file.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"echo 'eval \"$(_D2S_COMPLETE=source_zsh d2s)\"' >> ~/.zshrc\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Set your terminal to use ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH"},"ZSH")," by default:"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"chsh -s /bin/zsh\n"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"A ",Object(l.b)("a",{parentName:"p",href:"https://ohmyz.sh/"},"oh-my-zsh")," theme can be easily chosen for a personalized experience. See the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/vemonet/zsh-theme-biradate"},"zsh-theme-biradate")," to easily install a simple theme and configure your terminal in a few minutes.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Bash"),": add the import autocomplete line to the ",Object(l.b)("inlineCode",{parentName:"li"},"~/.bashrc")," file.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"echo 'eval \"$(_D2S_COMPLETE=source d2s)\"' >> ~/.bashrc\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Bash autocompletion needs to be tested."))),Object(l.b)("h3",{id:"windows-support"},"Windows support"),Object(l.b)("p",null,"Support of the ",Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/d2s/"},"d2s tool")," on Windows is a work in progress."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Most workflow orchestrators do not support Windows, as workflows are based on Linux containers, see CWL workflows and ",Object(l.b)("a",{parentName:"li",href:"https://www.nextflow.io/"},"Nextflow"),"."),Object(l.b)("li",{parentName:"ul"},"Windows can run ",Object(l.b)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),", but not natively like ",Object(l.b)("a",{parentName:"li",href:"https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0"},"Linux"),", making it more prone to errors.")),Object(l.b)("p",null,"CWL Workflow execution on Windows with the CWL reference runner works great ",Object(l.b)("a",{parentName:"p",href:"https://github.com/common-workflow-language/cwltool/#ms-windows-users"},"with WSL 2 and Docker Desktop"),"."),Object(l.b)("p",null,"We recommend to use the Windows ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell"},"PowerShell")," terminal (which is easier to use than the basic terminal)."),Object(l.b)("h3",{id:"try-the-client"},"Try the client"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"d2s\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You need to open a new terminal for the autocomplete to be activated.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Use ",Object(l.b)("inlineCode",{parentName:"p"},"Tab")," after a ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," command in the terminal to see all the available options (it will adapt to the command and dynamically retrieve your datasets and workflows!).")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"download-the-graphdb-triplestore"},"Download the GraphDB triplestore"),Object(l.b)("p",null,"For licensing reason the GraphDB RDF triplestore free edition distribution needs to be ",Object(l.b)("a",{parentName:"p",href:"https://ontotext.com/products/graphdb/"},"downloaded manually \ud83d\udce5")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Go to ",Object(l.b)("a",{parentName:"p",href:"https://ontotext.com/products/graphdb/"},"https://ontotext.com/products/graphdb/")," and provide informations to get an email with the link to download GraphDB")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Download the latest version of GraphDB as stand-alone server free version (",Object(l.b)("inlineCode",{parentName:"p"},".zip")," file)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," client will ask you to provide the path to the GraphDB distribution ",Object(l.b)("inlineCode",{parentName:"p"},".zip")," file when initializing the workspace."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"By default the ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," client will try to get the file from your home directory (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"/home/my-user"),")"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# Copy the GraphDB distribution file to your home folder\ncp graphdb-free-*-dist.zip ~/\n")))))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Update GraphDB version")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Change the GraphDB version used by ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," to the one you downloaded by changing ",Object(l.b)("inlineCode",{parentName:"p"},"GRAPHDB_VERSION")," in the file ",Object(l.b)("inlineCode",{parentName:"p"},".env")," in your project folder."))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"install-pipx"},"Install pipx"),Object(l.b)("p",null,"If you just want to run ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," we recommend you to use ",Object(l.b)("a",{parentName:"p",href:"https://pipxproject.github.io/pipx/"},"pipx")," as it install the tool in an isolated environment. It can be compared to ",Object(l.b)("inlineCode",{parentName:"p"},"apt"),", ",Object(l.b)("inlineCode",{parentName:"p"},"brew")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npx"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Consider doing a ",Object(l.b)("inlineCode",{parentName:"p"},"pip install --upgrade pip")," to update your pip installation.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Instructions use ",Object(l.b)("inlineCode",{parentName:"p"},"pip3")," to make sure ",Object(l.b)("inlineCode",{parentName:"p"},"pipx")," is installed with Python3, but feel free to use your own ",Object(l.b)("inlineCode",{parentName:"p"},"pip")," installation.")),Object(l.b)("h3",{id:"install-pipx-on-ubuntu"},"Install pipx on Ubuntu"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# Install Python3.6 and pip if necessary\nsudo apt-get install python3 python3-venv python3-dev python3-distutils\nwget https://bootstrap.pypa.io/get-pip.py\nsudo python3 get-pip.py\n# Install pipx\npip3 install --user pipx\n")),Object(l.b)("h3",{id:"install-pipx-on-macos"},"Install pipx on MacOS"),Object(l.b)("p",null,"Install ",Object(l.b)("inlineCode",{parentName:"p"},"python3")," and ",Object(l.b)("inlineCode",{parentName:"p"},"pip3")," if not installed."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"brew install python3\npip3 install pipx\n# Add pipx apps to path\npipx ensurepath\n")),Object(l.b)("h3",{id:"install-pipx-on-centos"},"Install pipx on CentOS"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# Install python3 and pip3\nsudo yum install python36\nsudo yum install python36-devel\nsudo easy_install-3.6 pip\npip3 install --user pipx\npipx ensurepath\n")),Object(l.b)("h3",{id:"install-pipx-on-windows"},"Install pipx on Windows"),Object(l.b)("p",null,"We will use the ",Object(l.b)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey package manager")," for Windows on the ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-7"},"PowerShell"),". To install Chocolatey:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open the PowerShell ",Object(l.b)("strong",{parentName:"li"},"as administrator")," to install Chocolatey and its packages."),Object(l.b)("li",{parentName:"ul"},"Check and fix system restrictions:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"Get-ExecutionPolicy\n# If returns Restricted:  \nSet-ExecutionPolicy Bypass -Scope Process\n# or Set-ExecutionPolicy AllSigned\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install Chocolatey on PowerShell:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"See the ",Object(l.b)("a",{parentName:"p",href:"https://chocolatey.org/docs/installation#install-with-powershellexe"},"official Chocolatey documentation"),".")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Chocolatey can also be installed using a non-administrative shell. See ",Object(l.b)("a",{parentName:"p",href:"https://chocolatey.org/docs/installation#non-administrative-install"},"the documentation"),".")),Object(l.b)("p",null,"Open the PowerShell ",Object(l.b)("strong",{parentName:"p"},"as administrator")," and use ",Object(l.b)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," to install Python 3.8 and pip:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"choco install python pip\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"A ",Object(l.b)("strong",{parentName:"p"},"reboot")," of your system is required to complete the installation.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Pip does not need to be run as administrator (only ",Object(l.b)("inlineCode",{parentName:"p"},"choco install"),")")),Object(l.b)("p",null,"We recommend using ",Object(l.b)("a",{parentName:"p",href:"https://pipxproject.github.io/pipx/"},"pipx")," if you are not developing on the ",Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/d2s/"},"d2s Python CLI"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pip install pipx\npipx ensurepath\n")),Object(l.b)("h3",{id:"upgrade-d2s-version"},"Upgrade d2s version"),Object(l.b)("p",null,"Upgrade ",Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/d2s/"},"d2s")," to the latest release:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pipx upgrade d2s\n")),Object(l.b)("h3",{id:"uninstall"},"Uninstall"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pipx uninstall d2s cwlref-runner\n")),Object(l.b)("p",null,"If you face issues where ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," or ",Object(l.b)("inlineCode",{parentName:"p"},"cwl-runner")," is already installed, try to make sure it is properly uninstall from ",Object(l.b)("inlineCode",{parentName:"p"},"pip"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo pip uninstall d2s cwlref-runner cwltool\nsudo pip3 uninstall d2s cwlref-runner cwltool\n")),Object(l.b)("p",null,"If you are facing issue with ",Object(l.b)("inlineCode",{parentName:"p"},"No module name pip found"),", it might be due to pip and pipx version issues. Be careful when installing ",Object(l.b)("inlineCode",{parentName:"p"},"pip")," and ",Object(l.b)("inlineCode",{parentName:"p"},"pipx")," as you want it to properly use ",Object(l.b)("inlineCode",{parentName:"p"},"python3.6"),". Those commands will help you uninstalling  ",Object(l.b)("inlineCode",{parentName:"p"},"pipx")," properly: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"rm -rf ~/.local/pipx\npip uninstall pipx\npip3 uninstall pipx\npython3.6 -m pip uninstall pipx\npython3.6 -m pip3 uninstall pipx\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"install-docker"},"Install Docker"),Object(l.b)("h3",{id:"on-ubuntu"},"On Ubuntu"),Object(l.b)("p",null,"Install ",Object(l.b)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"},"Docker")," and ",Object(l.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'sudo apt update\nsudo apt install docker.io\nsudo systemctl enable --now docker\n\nsudo usermod -aG docker ${USER}\n\n# Install docker-compose\nsudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"sudo groupadd docker")," could be required before ",Object(l.b)("inlineCode",{parentName:"p"},"usermod")," if the group has not been created.")),Object(l.b)("h3",{id:"on-macos"},"On MacOS"),Object(l.b)("p",null,"Use the ",Object(l.b)("a",{parentName:"p",href:"https://download.docker.com/mac/beta/Docker.dmg"},"Docker installer for MacOS")," (",Object(l.b)("inlineCode",{parentName:"p"},".dmg")," file) to install Docker and ",Object(l.b)("inlineCode",{parentName:"p"},"docker-compose"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you have a ",Object(l.b)("a",{parentName:"p",href:"https://hub.docker.com/?overlay=onboarding"},"DockerHub account")," you can use the ",Object(l.b)("a",{parentName:"p",href:"https://hub.docker.com/?overlay=onboarding"},"DockerHub installer")," instead.")),Object(l.b)("p",null,"You can change Docker settings by clicking on the Docker icon \ud83d\udc33 in the top bar, then click ",Object(l.b)("strong",{parentName:"p"},"Preferences...")),Object(l.b)("p",null,"The volumes ",Object(l.b)("inlineCode",{parentName:"p"},"/Users")," and ",Object(l.b)("inlineCode",{parentName:"p"},"/tmp")," should be shared by default. It is recommended to create the ",Object(l.b)("inlineCode",{parentName:"p"},"d2s")," project folder in a subfolder of ",Object(l.b)("inlineCode",{parentName:"p"},"/Users"),"."),Object(l.b)("h3",{id:"on-windows"},"On Windows"),Object(l.b)("p",null,"We use ",Object(l.b)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," to install ",Object(l.b)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"),". See the ",Object(l.b)("a",{parentName:"p",href:"https://d2s.semanticscience.org/docs/d2s-installation#install-pipx-on-windows"},"pipx installation section to install Chocolatey"),"."),Object(l.b)("p",null,"Use ",Object(l.b)("a",{parentName:"p",href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows"},"docker-desktop")," for an easier installation if you have Windows Pro or Enterprise and a ",Object(l.b)("a",{parentName:"p",href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows"},"DockerHub account"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"choco install docker-desktop\n")),Object(l.b)("p",null,"If you have Windows home or don't want to create a DockerHub account, use ",Object(l.b)("a",{parentName:"p",href:"https://chocolatey.org/packages/docker-toolbox"},"docker-toolbox"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'choco install docker-toolbox -ia /COMPONENTS="kitematic,virtualbox,dockercompose" -ia /TASKS="desktopicon,modifypath,upgradevm"\n')),Object(l.b)("p",null,"Open  the ",Object(l.b)("inlineCode",{parentName:"p"},"Docker Quickstart Terminal "),"to start Docker."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Additional components that might be needed to install (VM and GUI):"),Object(l.b)("pre",{parentName:"blockquote"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"choco install virtualbox docker-kitematic\n"))),Object(l.b)("h4",{id:"activate-virtualization"},"Activate Virtualization"),Object(l.b)("p",null,"Virtualization and Hyper-V must be ",Object(l.b)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization"},Object(l.b)("strong",{parentName:"a"},"activated")),". Check in the ",Object(l.b)("inlineCode",{parentName:"p"},"Task Manager "),", in tab ",Object(l.b)("inlineCode",{parentName:"p"},"Performance")," if ",Object(l.b)("em",{parentName:"p"},"Virtualization")," is ",Object(l.b)("inlineCode",{parentName:"p"},"enabled"),". "),Object(l.b)("p",null,"Check the ",Object(l.b)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization"},"documentation to enable it"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Docker-desktop installation will propose to install virtualization automatically after the Docker installation, if they are not installed.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Note that Docker Hyper-V is not available for Windows 10 Home edition (you will need Pro or Enterprise edition)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You might need to access the BIOS to enable VT-x virtualization")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Share drive"))),Object(l.b)("p",null,"By default ",Object(l.b)("inlineCode",{parentName:"p"},"docker-desktop")," and ",Object(l.b)("inlineCode",{parentName:"p"},"docker-toolbox")," are sharing your ",Object(l.b)("inlineCode",{parentName:"p"},"C:/Users")," volume. Docker will only be able to access folders and files in the ",Object(l.b)("inlineCode",{parentName:"p"},"Shared Drives"),". So make sure you execute ",Object(l.b)("inlineCode",{parentName:"p"},"d2s init")," somewhere in your users directories. "),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"On ",Object(l.b)("inlineCode",{parentName:"p"},"docker-desktop")," you can change it in Docker config > ",Object(l.b)("inlineCode",{parentName:"p"},"Settings")," > ",Object(l.b)("inlineCode",{parentName:"p"},"Shared Drives")," > ",Object(l.b)("strong",{parentName:"p"},"Share Drive C"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"On ",Object(l.b)("inlineCode",{parentName:"p"},"docker-toolbox")," you need to change the settings of the Virtual Box")),Object(l.b)("h3",{id:"fix-known-issues"},"Fix known issues"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"DNS issue"),": Docker build can't access the internet. E.g.: getting ",Object(l.b)("inlineCode",{parentName:"p"},"wget: unable to resolve host address")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If Docker can't access internet when building you might want to change the DNS (to use Google's one). ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"On Linux:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"nano /etc/resolv.conf\n    > nameserver 8.8.8.8\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"On Windows: go to ",Object(l.b)("inlineCode",{parentName:"p"},"Docker Settings")," > ",Object(l.b)("inlineCode",{parentName:"p"},"Network")," > ",Object(l.b)("inlineCode",{parentName:"p"},"DNS Server")," > ",Object(l.b)("inlineCode",{parentName:"p"},"Fixed: 8.8.8.8"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Firewall issue on Windows"),": it is common to face a firewall when Docker tries to connect to the internet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"This could be due to local services: try deactivate your firewall and/or antivirus "),Object(l.b)("li",{parentName:"ul"},"If you are running it on your office network you might face issues related to the office network firewall. Try at home and contact your IT department if needed.")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"For more details on how to run Docker see the ",Object(l.b)("a",{parentName:"p",href:"/docs/guide-docker"},"Docker guide"),".")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"install-rabix-benten-for-vscode"},"Install Rabix Benten for VSCode"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://img.shields.io/static/v1?label=module&message=Optional&color=blue",alt:"Optional"})),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/rabix/benten"},"Rabix Benten")," is a plugin for completion, error and warning messages for  CWL files in Visual Studio Code."),Object(l.b)("p",null,"Install the package using ",Object(l.b)("inlineCode",{parentName:"p"},"pipx"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pipx install benten --python python3.7\n")),Object(l.b)("p",null,"And add ",Object(l.b)("inlineCode",{parentName:"p"},"CWL (Rabix/Benten)")," extension to Visual Studio Code."),Object(l.b)("h2",{id:"install-rabix-composer-gui"},"Install Rabix Composer GUI"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://img.shields.io/static/v1?label=module&message=Optional&color=blue",alt:"Optional"})),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://rabix.io/"},"Rabix Composer")," is a nice way to visualize CWL workflows."),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/rabix/composer/releases"},"Download")," the right installation file and run it."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Open the ",Object(l.b)("inlineCode",{parentName:"p"},"d2s-core")," folder in Rabix Composer.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note that Rabix will overwrite how you originally wrote your CWL files, and add ",Object(l.b)("inlineCode",{parentName:"p"},"xy")," coordinates to steps.")),Object(l.b)("h2",{id:"try-apache-airflow"},"Try Apache Airflow"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow")," allow to run and monitor workflows. It requires to install the ",Object(l.b)("inlineCode",{parentName:"p"},"cwl-airflow")," package to add CWL compatibility."),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://airflow.apache.org/docs/stable/start.html"},"Install Apache Airflow")," and the ",Object(l.b)("a",{parentName:"p",href:"https://cwl-airflow.readthedocs.io/en/latest/readme/run_demo.html"},"cwl-airflow")," pip package to get started."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pip install apache-airflow\npip install cwl-airflow --find-links https://michael-kotliar.github.io/cwl-airflow-wheels/\nairflow init\ncwl-airflow init\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"cwl-airflow init")," fails: ",Object(l.b)("inlineCode",{parentName:"p"},"FileNotFoundError:[Errno 2]No such file or directory:'airflow'"))),Object(l.b)("p",null,"Start Airflow:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"airflow webserver -p 8080\nairflow scheduler\n")),Object(l.b)("p",null,"Submit a workflow:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cwl-airflow submit d2s-core/cwl/workflows/csv-virtuoso.cwl datasets/cohd/config.yml\n\n# Run demo\ncwl-airflow demo --auto\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"To be tested.")),Object(l.b)("h2",{id:"try-toil"},"Try Toil"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://toil.readthedocs.io/en/latest/running/cwl.html"},"Toil")," is a Python workflow manager which allows to run CWL workflows."),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://toil.readthedocs.io/en/latest/gettingStarted/quickStart.html#running-a-basic-cwl-workflow"},"Install Toil")," for CWL:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"pipx install toil\n")),Object(l.b)("p",null,"Run a workflow"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"toil-cwl-runner --workdir workspace/output/tmp --outdir workspace/output d2s-core/cwl/workflows/csv-virtuoso.cwl datasets/cohd/config.yml\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"To be tested.")))}s.isMDXComponent=!0}}]);