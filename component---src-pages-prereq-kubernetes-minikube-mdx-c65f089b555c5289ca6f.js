"use strict";(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[46],{8652:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return h}});var a=i(45),t=(i(6540),i(5680)),o=i(4330);const r=["components"],l={},s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},u=s("InlineNotification"),p=s("Tabs"),g=s("Tab"),m=s("Row"),y=s("Column"),d={_frontmatter:l},c=o.A;function h(e){let{components:n}=e,i=(0,a.A)(e,r);return(0,t.yg)(c,Object.assign({},d,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Minikube runs a single-node Kubernetes cluster inside a virtual machine (VM) on your laptop, for users who want to try out Kubernetes or develop with it.\nMinikube documentation is available at ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Installing Kubernetes with Minikube"),".\nThe following sections are not a substitute for the official documentation but they get you started in a classic configuration."),(0,t.yg)("p",null,"The following installation steps are described:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Installing Minikube"),(0,t.yg)("li",{parentName:"ul"},"Starting Minikube"),(0,t.yg)("li",{parentName:"ul"},"Setting up the Docker® registry"),(0,t.yg)("li",{parentName:"ul"},"Configuring the hosts file for Minikube"),(0,t.yg)("li",{parentName:"ul"},"Enabling Helm for Minikube"),(0,t.yg)("li",{parentName:"ul"},"A summary of some useful Minikube commands")),(0,t.yg)("h2",null,"Minikube installation"),(0,t.yg)("p",null,"Minikube installation steps are described in the official documentation for your preferred Operating System: ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Install Minikube"),"."),(0,t.yg)("h2",null,"Starting Minikube"),(0,t.yg)("p",null,"Minikube can be started with a command as simple as ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube start")," without any additional parameters. However, the resulting VM will be too small to deploy an instance of Merative Social Program Management (SPM),\nso several other parameters are required as described in the following sections."),(0,t.yg)("h3",null,"Specifying the resource allocation"),(0,t.yg)("p",null,"You can add properties to specify the resource allocation. For example:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"--cpus 4")," to use 4 CPUs"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"--memory 8G")," to use 8 GB of RAM"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"--disk-size=30G")," to use 30 GB of disk space")),(0,t.yg)("h3",null,"Specifying the VM driver"),(0,t.yg)("p",null,"Add the ",(0,t.yg)("inlineCode",{parentName:"p"},"--driver=")," option to the ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube start")," command to specify the underlying virtual machine driver. The following drivers were tested:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/drivers/virtualbox/"},"VirtualBox")," (",(0,t.yg)("inlineCode",{parentName:"li"},"virtualbox"),") on OSX and Linux"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/drivers/vmware/"},"VMware Fusion")," (",(0,t.yg)("inlineCode",{parentName:"li"},"vmware"),") on OSX",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Note"),": There is an ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube/issues/9720"},"issue")," running Minikube on macOS Big Sur with VMware Fusion 12. If you are using Big Sur, use an alternative driver."))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/drivers/kvm2/"},"Docker")," (",(0,t.yg)("inlineCode",{parentName:"li"},"docker"),") on Linux"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/drivers/kvm2/"},"KVM")," (",(0,t.yg)("inlineCode",{parentName:"li"},"kvm2"),") on Linux"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/drivers/hyperv/"},"Hyperv")," (",(0,t.yg)("inlineCode",{parentName:"li"},"hyperv"),") on Windows")),(0,t.yg)("p",null,"The ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Install Minikube")," page gives you more information on available VM driver options."),(0,t.yg)("h3",null,"Specifying the insecure registry"),(0,t.yg)("p",null,"You must specify the ",(0,t.yg)("inlineCode",{parentName:"p"},"--insecure-registry")," option to reference the Docker registry that is created. The ",(0,t.yg)("inlineCode",{parentName:"p"},"--insecure-registry")," value is the same as specified in the  ",(0,t.yg)("inlineCode",{parentName:"p"},"daemon.json")," file."),(0,t.yg)(u,{mdxType:"InlineNotification"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Note:")," Because of a limitation in the current version of Minikube, adding the ",(0,t.yg)("inlineCode",{parentName:"p"},"--insecure-registry")," option works on a new Minikube instance only.\nIf you start Minikube, be sure to run ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube stop")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube delete")," before you start it again with the ",(0,t.yg)("inlineCode",{parentName:"p"},"--insecure-registry")," option.")),(0,t.yg)("p",null,"For Windows see the ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/handbook/registry/#enabling-insecure-registries"},"Minikube handbook")," for information regarding the ",(0,t.yg)("inlineCode",{parentName:"p"},'--insecure-registry "10.0.0.0/24'),"” setting on the ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube start")," command."),(0,t.yg)("h3",null,"Specifying the Kubernetes version"),(0,t.yg)("p",null,"You can override the version of Kubernetes that gets installed inside the Minikube VM by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"--kubernetes-version")," flag. This flag controls the compatibility between the client tools and the Kubernetes specification."),(0,t.yg)("p",null,"If you override the Kubernetes version, ensure that you download and install the corresponding version of ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl")," - this version must be the same version as the Kubernetes cluster."),(0,t.yg)(u,{mdxType:"InlineNotification"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Note:")," The ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl")," version running locally and on Minikube should be compatible, so it’s possible to use the ",(0,t.yg)("inlineCode",{parentName:"p"},"--kubernetes-version")," flag to keep them consistent.")),(0,t.yg)("h3",null,"Minikube start command"),(0,t.yg)(u,{kind:"info",mdxType:"InlineNotification"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Note:")," In the following example for Mac and Linux we set the ",(0,t.yg)("inlineCode",{parentName:"p"},"--insecure-registry")," option passing in a subnet of ",(0,t.yg)("inlineCode",{parentName:"p"},"192.168.0.0/16"),".\nThe IP address on your machine ",(0,t.yg)("em",{parentName:"p"},"may")," not be on the appropriate network for this subnet to work.\nTherefore, start a Minikube instance to verify the IP address begins with 192.168.0.X. You need only do this once.\nSee the note in ",(0,t.yg)("a",{parentName:"p",href:"#specifying-the-insecure-registry"},"Specifying the insecure registry"),".")),(0,t.yg)("p",null,"Example ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube start")," commands based on the recommended settings above:"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"minikube start --driver=virtualbox --cpus 4 --memory 8G \\\n               --insecure-registry \"192.168.0.0/16\" \\\n               --disk-size='30G' \\\n               --kubernetes-version v1.20.11\n"))))),(0,t.yg)(g,{label:"Windows PS",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"minikube start --vm-driver=hyperv --cpus 4 --memory 8G `\n              --insecure-registry \"10.0.0.0/24\" `\n              --disk-size='30G' `\n              --kubernetes-version v1.20.11\n")))))),(0,t.yg)("h3",null,"Using Docker inside the Minikube VM"),(0,t.yg)("p",null,"You can use the Docker installed in your local environment or, optionally, the Docker inside the Minikube VM."),(0,t.yg)("p",null,"The command to use the Docker inside of the Minikube VM is:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"minikube docker-env\n")),(0,t.yg)("p",null,"The output of that command will instruct you how to run the command for your particular shell as illustrated:"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"eval $(minikube -p minikube docker-env)\n"))))),(0,t.yg)(g,{label:"Windows PS",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"& minikube -p minikube docker-env | Invoke-Expression\n")))))),(0,t.yg)("p",null,"Then ",(0,t.yg)("inlineCode",{parentName:"p"},"docker")," commands will operate against the Minikube VM’s docker, allowing, for example, the likes of ",(0,t.yg)("inlineCode",{parentName:"p"},"docker run")," for chartmuseum and the ",(0,t.yg)("inlineCode",{parentName:"p"},"docker build")," commands to work.\nDon’t forget that if you are using multiple shells you must run the ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube docker-env")," command in each shell."),(0,t.yg)("h2",null,"Docker Hub download rate limit and Minikube"),(0,t.yg)("p",null,"In November 2020, Docker introduced ",(0,t.yg)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/download-rate-limit/"},"download rate limits")," on Docker Hub.\nNormally, this can be mitigated by providing an Image Pull Secret to the deployment."),(0,t.yg)("p",null,"For Minikube addons these pull secrets are not exposed, so the solution involves providing a ",(0,t.yg)("inlineCode",{parentName:"p"},"config.json")," file containing the credentials to the Kubelet process running inside the Minikube environment."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Authenticate your local Docker client with Docker Hub: ",(0,t.yg)("inlineCode",{parentName:"p"},"docker login")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"You can register for a free account on the ",(0,t.yg)("a",{parentName:"li",href:"https://hub.docker.com/signup"},"Docker Hub website")))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Copy the contents of your local Docker secrets:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cat ~/.docker/config.json && echo\n")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"The output should look something like below:")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "auths": {\n    "https://index.docker.io/v1/": {\n      "auth": "<base64 of username:password>"\n    }\n  }\n}\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Open a terminal in your Minikube VM:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"minikube ssh\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Paste the contents of the file from step 2 into ",(0,t.yg)("inlineCode",{parentName:"p"},"/var/lib/kubelet/config.json"),":"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Edit the command to include the contents of your ",(0,t.yg)("inlineCode",{parentName:"li"},"config.json")," file first")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'cat << EOS | sudo tee /var/lib/kubelet/config.json\n{\n  "auths": {\n    "https://index.docker.io/v1/": {\n      "auth": "<base64 of username:password>"\n    }\n  }\n}\nEOS\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Restart the ",(0,t.yg)("inlineCode",{parentName:"p"},"kubelet")," process in the Minikube VM:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart kubelet\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Exit the Minikube terminal."))),(0,t.yg)("h2",null,"Docker registry"),(0,t.yg)("p",null,"You need a registry to use docker images with Helm in Minikube.\nThere are different types of registries that can be used. However, this page describes a simple registry option that doesn’t require extra components."),(0,t.yg)("p",null,"Minikube provides an add-on to run a registry in a container. For more information, see ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tasks/docker_registry/"},"How to access the Docker registry within minikube"),"."),(0,t.yg)("p",null,"You can use the following command to enable the add-on:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"minikube addons enable registry\n")),(0,t.yg)("p",null,"When enabled, starting Minikube starts two pods on the ",(0,t.yg)("inlineCode",{parentName:"p"},"kube-system")," namespace, named ",(0,t.yg)("inlineCode",{parentName:"p"},"registry")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"registry-proxy"),". Now the registry is active and can be used. The registry points to the Minikube IP address on port 5000."),(0,t.yg)("p",null,"The containers don’t mount any volumes, so stopping Minikube deletes the registry content."),(0,t.yg)("p",null,"For Windows, you must follow the steps in the ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/handbook/registry/#docker-on-windows"},"Minikube Handbook")," and set the value of the ",(0,t.yg)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," environment variable as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},'$env:DOCKER_REGISTRY = "localhost:5000"\n')),(0,t.yg)("h3",null,"Using the insecure registry on Windows"),(0,t.yg)("p",null,"For more information see the ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/handbook/registry/#docker-on-windows"},"Minikube handbook"),"."),(0,t.yg)("p",null,"Perform these steps to use the insecure registry on Windows:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Confirm the registry service is running in minikube:\n",(0,t.yg)("inlineCode",{parentName:"li"},"kubectl get service --namespace kube-system")),(0,t.yg)("li",{parentName:"ul"},"Part one of making the registry port available:\n",(0,t.yg)("inlineCode",{parentName:"li"},"kubectl port-forward --namespace kube-system service/registry 5000:80"),"\nNote: The port-forward sporadically times out/dies; so, you have to periodically check that it’s running and renter it if needed."),(0,t.yg)("li",{parentName:"ul"},"Part two of making the registry port available:\n",(0,t.yg)("inlineCode",{parentName:"li"},'docker run -d --rm -it --network=host alpine ash -c "apk add socat && socat TCP-LISTEN:5000,reuseaddr,fork TCP:host.docker.internal:5000"')),(0,t.yg)("li",{parentName:"ul"},"Test the registry:\n",(0,t.yg)("inlineCode",{parentName:"li"},"curl http://localhost:5000/v2/_catalog"),"\nThis first time it will be empty: ",(0,t.yg)("inlineCode",{parentName:"li"},'{"repositories":[]}'),"\nRunning the same ",(0,t.yg)("inlineCode",{parentName:"li"},"curl")," command inside Minikube via ",(0,t.yg)("inlineCode",{parentName:"li"},"minikube ssh")," is also a good check.")),(0,t.yg)("h2",null,"Hostname configuration for Minikube"),(0,t.yg)("p",null,"This runbook uses a generic hostname of ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube.local")," as an example in commands and the configuration files.\nYou should add the Minikube IP address to the ",(0,t.yg)("inlineCode",{parentName:"p"},"hosts")," file by using the generic hostname, or else modify the usage of ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube.local")," in this runbook to reflect your local hostname."),(0,t.yg)("p",null,"Specifying ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube ip")," in the following command returns the Minikube VM’s IP address that is accessible from your workstation:"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'echo -e "$(minikube ip)\\tminikube.local" | sudo tee -a /etc/hosts\n'))))),(0,t.yg)(g,{label:"Windows PS",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},'Add-Content -Path C:\\Windows\\System32\\drivers\\etc\\hosts -Value "$(minikube ip)`tminikube.local" -Force\n')))))),(0,t.yg)("p",null,"If not using the Docker inside of the Minikube VM ","[minikube docker-env]","(Using Docker inside the Minikube VM), the local Docker client configuration must be also be updated with the corresponding IP address."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Update the ",(0,t.yg)("inlineCode",{parentName:"li"},"daemon.json")," docker configuration file with the Minikube IP address. This file is usually located in:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"~/.docker/daemon.json")," on OSX"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"/etc/docker/daemon.json")," on Linux"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"C:\\ProgramData\\Docker\\config\\daemon.json")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"$env:USERPROFILE\\.docker\\daemon.json")," on Windows, depending on your installation."))),(0,t.yg)("li",{parentName:"ul"},"Restart the Docker daemon:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"On Linux - run: ",(0,t.yg)("inlineCode",{parentName:"li"},"sudo systemctl restart docker")),(0,t.yg)("li",{parentName:"ul"},"On Mac and Windows - use the “Restart Docker” menu option in the Docker Desktop application.")))),(0,t.yg)("p",null,"Example of ",(0,t.yg)("inlineCode",{parentName:"p"},"daemon.json"),":"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "insecure-registries": [\n    "192.168.0.0/16"\n  ]\n}\n'))))),(0,t.yg)(g,{label:"Windows",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "insecure-registries": [\n    "10.0.0.0/24"\n  ],\n}\n')))))),(0,t.yg)(u,{mdxType:"InlineNotification"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Note:")," You can provide a specific IP address, or specify a subnet to future-proof the Docker client configuration.")),(0,t.yg)("p",null,"The Minikube IP address might change when you run ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube delete"),". If it changes, you must repeat these steps."),(0,t.yg)("p",null,"Therefore, reconfirm the Minikube IP and its setting in the ",(0,t.yg)("inlineCode",{parentName:"p"},"hosts")," file every time you start Minikube, or after you run ",(0,t.yg)("inlineCode",{parentName:"p"},"minikube delete"),"."),(0,t.yg)("h2",null,"Minikube Ingress"),(0,t.yg)("p",null,"Ingress is a reverse proxy, which sits in front of the application that is deployed in Kubernetes. It facilitates use of a custom domain name to access a deployed application, instead of using service ports.\nTo enable Ingress for Minikube, you must enable the ",(0,t.yg)("inlineCode",{parentName:"p"},"ingress")," add-on."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"minikube addons enable ingress\n")),(0,t.yg)("h2",null,"Create a namespace"),(0,t.yg)("p",null,"Create a namespace for the SPM deployment, again use an environment variable for your convenience when following the guide."),(0,t.yg)("p",null,"Create the environment variable, you can set to value to anything you like, but it should consist of lower case alphanumeric characters or ",(0,t.yg)("inlineCode",{parentName:"p"},"-"),", and must start and end with an alphanumeric character (e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"my-name"),",  or ",(0,t.yg)("inlineCode",{parentName:"p"},"123-abc"),"):"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'export PROJECT="dev"\n'))))),(0,t.yg)(g,{label:"Windows PS",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},'$env:PROJECT = "dev"\n')))))),(0,t.yg)("p",null,"Create the namespace:"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace $PROJECT\n"))))),(0,t.yg)(g,{label:"Windows PS",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"kubectl create namespace $env:PROJECT\n")))))),(0,t.yg)("p",null,"Switch to the new namespace:"),(0,t.yg)(p,{mdxType:"Tabs"},(0,t.yg)(g,{label:"Mac/Linux",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl config set-context --current --namespace $PROJECT\n"))))),(0,t.yg)(g,{label:"Windows PS",mdxType:"Tab"},(0,t.yg)(m,{mdxType:"Row"},(0,t.yg)(y,{mdxType:"Column"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-powershell"},"kubectl config set-context --current --namespace $env:PROJECT\n")))))),(0,t.yg)("h2",null,"Useful Minikube commands"),(0,t.yg)("p",null,"Some useful Minikube commands are as follows:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# Sample commands\nminikube status       # See if Minikube is running\nminikube start        # Create and start Minikube\nminikube dashboard    # Access the Kubernetes dashboard running within the Minikube cluster\nminikube ssh          # Login into the Minikube VM\nminikube addons list  # Show the status of the available add-ons\nminikube stop         # Stop Minikube\nminikube delete       # Delete the Minikube VM\nminikube ip           # Show the Minikube IP\n")),(0,t.yg)("p",null,"For a full list of commands, see ",(0,t.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Installing Kubernetes with Minikube"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prereq-kubernetes-minikube-mdx-c65f089b555c5289ca6f.js.map