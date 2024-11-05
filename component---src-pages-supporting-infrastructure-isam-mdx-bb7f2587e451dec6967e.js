"use strict";(self.webpackChunkspm_kubernetes=self.webpackChunkspm_kubernetes||[]).push([[307],{2095:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(45),o=(a(6540),a(5680)),i=a(4330);const r=["components"],s={},p=(l="InlineNotification",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var l;const m={_frontmatter:s},c=i.A;function d(e){let{components:t}=e,a=(0,n.A)(e,r);return(0,o.yg)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",null,"IBM Security Access Manager"),(0,o.yg)("p",null,"Merative Social Program Management (SPM) can be integrated with ",(0,o.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/sva/9.0.7"},"IBM Security Access Manager")," (ISAM) to enable single sign-on (SSO) authentication.\nSSO authentication enables users to access multiple secure applications by authenticating once with a single user name and password."),(0,o.yg)("p",null,"If a user authenticates to an SSO system, they are no longer prompted for credentials when they access any of the other applications that are configured to work with the SSO system."),(0,o.yg)("p",null,"SSO systems usually maintain the user accounts on a lightweight directory application protocol (LDAP) server. If user accounts are stored in one location, it is easier for system administrators to safeguard the accounts.\nAlso, it is easier for users to reset one account password for multiple applications."),(0,o.yg)("p",null,"For an overview of ",(0,o.yg)("inlineCode",{parentName:"p"},"ISAM")," as well as procurement options, please visit ",(0,o.yg)("a",{parentName:"p",href:"https://www.ibm.com/support/pages/download-ibm-security-access-manager-907"},"IBM Marketplace"),".\nThe following guide provides the steps required to configure SPM on a Kubernetes environment for integration with ",(0,o.yg)("inlineCode",{parentName:"p"},"ISAM"),".\nFor steps covering the configuration of ISAM itself, please review the ",(0,o.yg)("a",{parentName:"p",href:"https://community.ibm.com/community/user/security/viewdocument/access-manager-federation-cookbook-1?CommunityKey=e7c36119-46d7-42f2-97a9-b44f0cc89c6d&tab=librarydocuments"},"Federation Cookbook"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," The version of ",(0,o.yg)("inlineCode",{parentName:"p"},"ISAM")," used for the following examples is 9.0.7."),(0,o.yg)("h3",null,"ISAM integration with SPM"),(0,o.yg)("p",null,"To integrate with SPM, we will need to:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Retrieve the federation metadata XML file from ISAM server, either via management console or via RESTful call to API."),(0,o.yg)("p",{parentName:"li"},"For steps on using the console please review the Federation Cookbook.\nFor steps on using the API please review the ",(0,o.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/sva/9.0.7?topic=developing-rest-api-documentation"},"RESTful Web service documentation"),".\nThis document will use the latter."),(0,o.yg)("p",{parentName:"li"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"RESTful Web service documentation")," provides a library of the available Web services that can be used to interact with your ISAM server with tools such as curl.\nThe information provided in the request section of each Web service can be used to construct a curl command."),(0,o.yg)("p",{parentName:"li"},"To export the meta-data for a specific federation, the documentation (located under ",(0,o.yg)("inlineCode",{parentName:"p"},"Secure: Federation -> Manage: -> Federations: -> Export a federation"),") gives an example of:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"GET https://{appliance_hostname}/iam/access/v8/federations/{federation_id}/metadata\n")),(0,o.yg)("p",{parentName:"li"},"and lists the accepted headers as:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"Accept:application/json\nAuthorization: Basic\n")),(0,o.yg)("p",{parentName:"li"},"The corresponding curl command would be formatted as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"curl --location --request GET 'https://{appliance_hostname}/iam/access/v8/federations/{federation_id}/metadata' \\\n--header 'Authorization: Basic {token}'\n")),(0,o.yg)("p",{parentName:"li"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"curl")," command will return the federation metadata XML file in the response body.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install the federation metadata file as a configmap into namespace."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"kubectl --namespace ${NAMESPACE} create configmap $releaseName-federated-metadata-cm --from-file=${federationMetadataFile}\n")),(0,o.yg)(p,{mdxType:"InlineNotification"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Note:"),(0,o.yg)("inlineCode",{parentName:"p"},"${NAMESPACE}")," refers to the namespace being used for the install and ",(0,o.yg)("inlineCode",{parentName:"p"},"${federationMetadataFile}")," refers to the XML file returned from the previous step."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Enable ISAM by toggling the following properties in the override values file injected through Helm during deployment:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-yaml",metastring:"path=apps-values.yaml",path:"apps-values.yaml"},"---\nglobal:\n  isam:\n    enabled: true\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Return to ",(0,o.yg)("a",{parentName:"p",href:"/spm-kubernetes/deployment/hc_preparation"},"Preparing Helm Charts")," and continue the installation of SPM."),(0,o.yg)(p,{mdxType:"InlineNotification"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Note:")," The ",(0,o.yg)("inlineCode",{parentName:"p"},"curamAuthFilter")," defined within the ",(0,o.yg)("inlineCode",{parentName:"p"},"helm-charts/apps/templates/configmaps/configmap-isam.yaml")," resource may need expansion to handle customisations."),(0,o.yg)("p",{parentName:"li"},"This should be reviewed by your security architect."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"After the completion of the helm install, complete the federation steps.\nDetailed instructions for the following steps can be found in the Federation Cookbook.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"First, add the Service Provider Signer Certificate to the ISAM server’s trust store.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Next import the Service Provider XML to ISAM server."),(0,o.yg)("p",{parentName:"li"},"This XML can be obtained from ",(0,o.yg)("inlineCode",{parentName:"p"},"https://<hostname>/ibm/saml20/defaultSP/samlmetadata"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Reload the applicances on the ISAM server."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-isam-mdx-bb7f2587e451dec6967e.js.map