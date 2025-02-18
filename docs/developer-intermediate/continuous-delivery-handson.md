---
title: ArgoCD Lab
description: Lab for continuous delivery using ArgoCD
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

=== "OpenShift"

    ## Pre-requisites

    Make sure your environment is setup properly for the lab.

    Check the [Environment Setup](/getting-started/devenvsetup) page for your setup.

    ## ArgoCD Installation

    - Create the namespace `argocd` to install argocd
    ```bash
    oc new-project argocd
    ```
    - Install ArgoCD as follows.
    ```
    oc apply --filename https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/argo-lab/argocd-operator.yaml
    ```
    - When installing the tutorial, make sure you wait until the argocd-operator is finished before installing the argocd-cr..or it will fail. You can do this:
    ```bash
    oc get ClusterServiceVersion/argocd-operator-helm.v0.0.3 -n argocd
    NAME                          DISPLAY                   VERSION   REPLACES                      PHASE
    argocd-operator-helm.v0.0.3   Argo CD Operator (Helm)   0.0.3     argocd-operator-helm.v0.0.2   Succeeded
    ```
    and wait for the "succeeded" to come up before proceeding.
    ```
    oc apply --filename https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/argo-lab/argocd-cr.yaml
    ```
    - Install the `argocd` CLI, for example on OSX use brew
    ```bash
    brew tap argoproj/tap
    brew install argoproj/tap/argocd
    ```
    - Set an environment variable `ARGOCD_URL` using the `EXTERNAL-IP`
    ```bash
    export ARGOCD_SERVER="$(oc get route argocd-server -n argocd -o jsonpath='{.status.ingress[0].host}')"
    export ARGOCD_URL="https://$ARGOCD_SERVER"
    echo ARGOCD_URL=$ARGOCD_URL
    echo ARGOCD_SERVER=$ARGOCD_SERVER
    ```

    ## Deploying the app

    - Login into the UI.
    ```bash
    open $ARGOCD_URL
    ```
    - Use `admin` as the username and get the password with the following command, it's the name of the pod for the argo-server
    ```bash
    oc get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2
    ```
    For example the output is similar to this:
    ```
    argocd-server-b54756f69-jncc9
    ```

    ![ArgoCD Login](./images/argocd_login.png)

    - Now go back to the ArgoCD home and click on `NEW APP`.
    - Add the below details:
    - Application Name: `sample`
    - Project - `default`
    - SYNC POLICY: `Manual`
    - REPO URL: `https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy`
    - Revision: `HEAD`
    - Path: `openshift`

    ![app details one](./images/app_argo_1.png)

    - Cluster - Select the default one `https://kubernetes.default.svc` to deploy in-cluster
    - Namespace - `default`
    - Click Create to finish

    ![app details two](./images/app_argo_2.png)

    - You will now see the available apps.

   ![sampleapp create](./images/sampleapp_create.png)

    - Initially, the app will be out of sync. It is yet to be deployed. You need to sync it for deploying.

    To sync the application, click `SYNC` and then `SYNCHRONIZE`.

    ![out of sync](./images/out_of_sync.png)

    - Wait till the app is deployed.

    ![synched app](./images/synched_app.png)

    - Once the app is deployed, click on it to see the details.

    ![sample app deployed](./images/sample_app_deployed.png)

    ![sample app full deployment](./images/sample_app_full_deployment.png)

    ## Verifying the deployment

    - Access the app to verify if it is correctly deployed.
    - List the cloudnativesampleapp-service route
    ```
    oc get route
    ```
    It should have an IP under `EXTERNAL-IP` column
    ```
    NAME                 HOST/PORT                                     PATH   SERVICES                       PORT   TERMINATION   WILDCARD
    cloudnative-sample   cloudnative-sample-default.apps-crc.testing          cloudnativesampleapp-service   9080                 None
    ```
    - Set an environment variable `APP_URL` using the `EXTERNAL-IP`
    ```
    export APP_URL="http://$(oc get route cloudnative-sample -o jsonpath='{.status.ingress[0].host}')"
    echo ARGOCD_SERVER=$APP_URL
    ```
    - Access the url using `curl`
    ```
    curl "$APP_URL/greeting?name=Carlos"
    ```
    ```
    {"id":2,"content":"Welcome to Cloudnative bootcamp !!! Hello, Carlos :)"}
    ```

    ## Using the ArgoCD CLI

    - Login using the cli.
    - Login as the `admin` user.
    - The initial password is autogenerated to be the pod name of the Argo CD API server. This can be retrieved with the following command.
    ```bash
    oc get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2
    ```
    - Now login as follows.
    ```bash
    argocd login $ARGOCD_SERVER
    ```
    
    ```
    WARNING: server certificate had error: x509: cannot validate certificate for 10.97.240.99 because it doesn't contain 
    any IP SANs. Proceed insecurely (y/n)? y
    Username: admin
    Password: 
    'admin' logged in successfully
    Context '10.97.240.99' updated
    ```
    - List the applications
    ```bash
    argocd app list
    ```
    ```
    NAME    CLUSTER                         NAMESPACE  PROJECT  STATUS  HEALTH   SYNCPOLICY  CONDITIONS  REPO                                                                     PATH   TARGET
    sample  https://kubernetes.default.svc  default    default  Synced  Healthy  <none>      <none>      https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy  openshift  HEAD
    ```
    - Get application details
    ```bash
    argocd app get sample
    ```
    ```
    Name:               sample
    Project:            default
    Server:             https://kubernetes.default.svc
    Namespace:          default
    URL:                https://10.97.240.99/applications/sample
    Repo:               https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy
    Target:             HEAD
    Path:               openshift
    SyncWindow:         Sync Allowed
    Sync Policy:        <none>
    Sync Status:        Synced to HEAD (9684037)
    Health Status:      Healthy

    GROUP  KIND        NAMESPACE  NAME                             STATUS  HEALTH   HOOK  MESSAGE
        Service     default    cloudnativesampleapp-service     Synced  Healthy        service/cloudnativesampleapp-service created
    apps   Deployment  default    cloudnativesampleapp-deployment  Synced  Healthy        deployment.apps/cloudnativesampleapp-deployment created
    ```
    - Show application deployment history
    ```bash
    argocd app history sample
    ```
    ```
    ID  DATE                           REVISION
    0   2020-02-12 21:10:32 -0500 EST  HEAD (9684037)
    ```
    ## References

    - [ArgoCD](https://argoproj.github.io/argo-cd/)



=== "IKS"

    ## Pre-requisites

    Make sure your environment is setup properly for the lab.

    Check the [Environment Setup](/getting-started/devenvsetup) page for your setup.

    ## ArgoCD Installation

    - Create the namespace `argocd` to install argocd
    ```bash
    kubectl create namespace argocd
    ```
    - Install ArgoCD as follows.
    ```bash
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
    ```
    - Install the `argocd` CLI, for example on OSX use brew
    ```bash
    brew tap argoproj/tap
    brew install argoproj/tap/argocd
    ```
    - To allow access via LoadBalancer and leverage the `minikube tunnel` running in the background, patch the argocd server service
    ```bash
    kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
    ```
    - List the argocd-server service
    ```bash
    kubectl get svc argocd-server -n argocd
    ```
    It should have an IP under `EXTERNAL-IP` column
    ```
    NAME            TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)                      AGE
    argocd-server   LoadBalancer   10.97.240.99   10.97.240.99   80:30286/TCP,443:31716/TCP   41s
    ```
    - Set an environment variable `ARGOCD_URL` using the `EXTERNAL-IP`
    ```bash
    export ARGOCD_SERVER="$(kubectl get svc argocd-server -n argocd -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
    export ARGOCD_URL="https://$ARGOCD_SERVER"
    echo ARGOCD_URL=$ARGOCD_URL
    echo ARGOCD_SERVER=$ARGOCD_SERVER
    ```

    ## Deploying the app

    - Login into the UI.
    ```bash
    open $ARGOCD_URL
    ```
    - Use `admin` as the username and get the password with the following command, it's the name of the pod for the argo-server
    ```bash
    kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2
    ```
    For example the output is similar to this:
    ```
    argocd-server-b54756f69-jncc9
    ```

    ![ArgoCD Login](./images/argocd_login.png)

    - Now go back to the ArgoCD home and click on `NEW APP`.
    - Add the below details:
    - Application Name: `sample`
    - Project - `default`
    - SYNC POLICY: `Manual`
    - REPO URL: `https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy`
    - Revision: `HEAD`
    - Path: `kubernetes`

    ![app details one](./images/app_argo_1.png)

    - Cluster - Select the default one `https://kubernetes.default.svc` to deploy in-cluster
    - Namespace - `default`
    - Click Create to finish

    ![app details two](./images/app_argo_2.png)

    - You will now see the available apps.

    ![sampleapp create](./images/sampleapp_create.png)

    - Initially, the app will be out of sync. It is yet to be deployed. You need to sync it for deploying.

    To sync the application, click `SYNC` and then `SYNCHRONIZE`.

    ![out of sync](./images/out_of_sync.png)

    - Wait till the app is deployed.

    ![synched app](./images/synched_app.png)

    - Once the app is deployed, click on it to see the details.

    ![sample app deployed](./images/sample_app_deployed.png)

    ![sample app full deployment](./images/sample_app_full_deployment.png)

    ## Verifying the deployment

    - Access the app to verify if it is correctly deployed.
    - To allow access via LoadBalancer and leverage the `minikube tunnel` running in the background, patch the argocd server service
    ```bash
    kubectl patch svc cloudnativesampleapp-service -p '{"spec": {"type": "LoadBalancer"}}'
    ```
    - List the cloudnativesampleapp-service service
    ```bash
    kubectl get svc cloudnativesampleapp-service
    ```
    It should have an IP under `EXTERNAL-IP` column
    ```
    NAME                           TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)          AGE
    cloudnativesampleapp-service   LoadBalancer   10.109.242.212   10.109.242.212   9080:31905/TCP   13m
    ```
    - Set an environment variable `APP_URL` using the `EXTERNAL-IP`
    ```bash
    export APP_URL="http://$(kubectl get svc cloudnativesampleapp-service -o jsonpath='{.status.loadBalancer.ingress[0].ip}'):9080"
    echo ARGOCD_SERVER=$APP_URL
    ```
    - Access the url using `curl`
    ```bash
    curl "$APP_URL/greeting?name=Carlos"
    ```
    ```
    {"id":2,"content":"Welcome to Cloudnative bootcamp !!! Hello, Carlos :)"}
    ```

    ## Using the ArgoCD CLI

    - Login using the cli.
    - Login as the `admin` user.
    - The initial password is autogenerated to be the pod name of the Argo CD API server. This can be retrieved with the following command.
    ```bash
    kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2
    ```
    - Now login as follows.
    ```bash
    argocd login $ARGOCD_SERVER
    ```
    
    ```
    WARNING: server certificate had error: x509: cannot validate certificate for 10.97.240.99 because it doesn't contain 
    any IP SANs. Proceed insecurely (y/n)? y
    Username: admin
    Password: 
    'admin' logged in successfully
    Context '10.97.240.99' updated
    ```
    - List the applications
    ```bash
    argocd app list
    ```
    ```
    NAME    CLUSTER                         NAMESPACE  PROJECT  STATUS  HEALTH   SYNCPOLICY  CONDITIONS  REPO                                                                     PATH   TARGET
    sample  https://kubernetes.default.svc  default    default  Synced  Healthy  <none>      <none>      https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy  kubernetes  HEAD
    ```
    - Get application details
    ```bash
    argocd app get sample
    ```
    ```
    Name:               sample
    Project:            default
    Server:             https://kubernetes.default.svc
    Namespace:          default
    URL:                https://10.97.240.99/applications/sample
    Repo:               https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy
    Target:             HEAD
    Path:               kubernetes
    SyncWindow:         Sync Allowed
    Sync Policy:        <none>
    Sync Status:        Synced to HEAD (9684037)
    Health Status:      Healthy

    GROUP  KIND        NAMESPACE  NAME                             STATUS  HEALTH   HOOK  MESSAGE
        Service     default    cloudnativesampleapp-service     Synced  Healthy        service/cloudnativesampleapp-service created
    apps   Deployment  default    cloudnativesampleapp-deployment  Synced  Healthy        deployment.apps/cloudnativesampleapp-deployment created
    ```
    - Show application deployment history
    ```bash
    argocd app history sample
    ```
    ```
    ID  DATE                           REVISION
    0   2020-02-12 21:10:32 -0500 EST  HEAD (9684037)
    ```
    ## References

    - [ArgoCD](https://argoproj.github.io/argo-cd/)

