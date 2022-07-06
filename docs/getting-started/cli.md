---
title: Developer Tools CLI
---
import Globals from 'gatsby-theme-carbon/src/templates/Globals';

<PageDescription>

The <Globals name="shortName" /> Command Line Interface (CLI)

</PageDescription>

The <Globals name="longName" /> includes the IBM Garage for Cloud (IGC) Command Line Interface (CLI).
The [<Globals name="igccli" />](https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli) provides a set of helpful
utilities that can be invoked from the command line. It's designed to automate and simplify complicated and repetitive
tasks thus allowing developers to be more productive.

The CLI is not a <Globals name="shortName" /> requirement as all its actions can be performed manually instead. For each command, the equivalent manual steps are also given for the sake of full transparency and to take away any notion of "magic" that the CLI might be performing.

Some of the utilities provided by the CLI include:
- Register your application's Git repository into a CI pipeline ([Jenkins](/guides/continuous-integration), [Tekton](/guides/continuous-integration-tekton), etc.).
- List the ingress URLs and route URLs defined within the cluster.
- List the connection information (endpoints, user names, and passwords) for the tools configured in the environment.
- Help copy `config maps` and `secrets` into new projects/namespace.
- Enable existing <Globals name="templates" /> with the necessary artifacts to be integrated easily into the <Globals name="env" />.

You can either install the CLI or the Cloud Shell Commands environment on your computer:

<Accordion>

<AccordionItem title="Install the Cloud Shell" open="true">

Follow the instructions in the [cloud-shell-commands readme](https://github.com/ibm-garage-cloud/cloud-shell-commands/blob/master/README.md).

</AccordionItem>

<AccordionItem title="Install the CLI" >

- Install the CLI:
    ```bash
    npm i -g @ibmgaragecloud/cloud-native-toolkit-cli
    ````

- Verify the version:
    ```bash
    igc --version
    ```

</AccordionItem>

</Accordion>

## Invoking the CLI

- Once the CLI is installed, the `igc` executable will be available in your system. Running `igc --help` will list the available commands.
- The output text will be similar to the following:

    ```
    $ igc --help
    IBM Garage Cloud-Native Toolkit CLI (https://cloudnativetoolkit.dev)

    Usage: igc <command> [args]

    Commands:
      igc create-webhook      Create a git webhook for a given Jenkins pipeline
      igc credentials         Lists the urls and credentials for the tools deployed
                              to the cluster
      igc dashboard           Open the Developer Dashboard in the default browser
      igc enable              Enable the current repository with pipeline logic
      igc endpoints           List the current ingress hosts for deployed apps in a
                              namespace      [aliases: ingress, endpoint, ingresses]
      igc generate-token      Generate a Jenkins api token
      igc git-secret [name]   Create a kubernetes secret that contains the url,
                              username, and personal access token for a git repo
      igc jenkins-auth        Generate a Jenkins api token and register it as
                              kubernetes secret
      igc sync [namespace]    Create a namespace (if it does not exist) and prepare
                              it with the necessary configuration
                                                       [aliases: project, namespace]
      igc pipeline            Register a pipeline for the current code repository
      igc tool-config [name]  Create the config map and secret for a tool configured
                              in the environment
      igc vlan                Print out the vlan values
      igc yq <command>        lightweight yaml command-line processor that addresses
                              deficiencies with the existing `yq` command

    Options:
      --version  Show version number                                       [boolean]
      --help     Show help                                                 [boolean]
    ```

- The <Globals name="igccli" /> will now install the commands as plugins to the `kubectl` and `oc` CLIs.
- For example, all of the following commands are equivalent:

    ```
    igc pipeline
    kubectl pipeline
    oc pipeline
    ```

### Prerequisite tools

<InlineNotification>

Some of the commands provided by the <Globals name="igccli" /> orchestrate interactions between other CLIs. To get
started please install the [prerequisite tools](/getting-started/devenvsetup), in particular:
- <Globals name="kube" /> CLI.
- <Globals name="ocp" /> CLI.
- <Globals name="ic" /> CLI--used to interact with IBM Cloud virtual LANs.

</InlineNotification>

### Log into your cluster

Most of the commands provided by the <Globals name="igccli" /> interact with a cluster, so you need to log in to be able to run these.

<Accordion>

<AccordionItem title="OpenShift" open="true">

```bash
oc login --server=<url> --token=<apikey>
```
</AccordionItem>

<AccordionItem title="Kubernetes">

```bash
ibmcloud ks cluster config --cluster <CLUSTER>
```

</AccordionItem>

</Accordion>

### Log in to your IBM Cloud account

- Log in to your <Globals name="ic" /> account with the correct region and resource group:

    ```bash
    ibmcloud login -a cloud.ibm.com -r <region> -g <resource group>
    ```

## Available commands

### `dashboard`

Opens the Developer Dashboard in the default browser. If the default browser has not been configured, then it prints the dashboard URL.

The dashboard displays the <Globals name="shortName" /> tools configured within the cluster along with links to activation content and Starter Kits to initiate a project quickly.

This command requires to be logged into the cluster so the context is established.

**Command flags**
- `-n`: the namespace where the dashboard has been deployed; the default is `tools`.

**Usage**

<Tabs>
<Tab label="CLI">

The command syntax is:

```bash
igc dashboard
```
</Tab>
<Tab label="OpenShift">

The following commands does the same function on OpenShift:

```bash
HOST=$(oc get routes/dashboard -n tools -o jsonpath='{.spec.host}')
open "https://$HOST"
```
</Tab>
<Tab label="Kubernetes">

The following commands does the same function on Kubernetes:

```bash
HOST=$(kubectl get ingress/developer-dashboard -n tools -o jsonpath='{.spec.rules[0].host}')
open "https://$HOST"
```

</Tab>
</Tabs>

**Related commands**

- [`credentials`](#credentials): shows the same credentials information that can be seen in the dashboard.
- [`tool-config`](#tool-config): allows adding configuration for additional tools to the cluster, making them available to the dashboard and the `credentials` command.

### `credentials`

Lists the endpoints, user names, and passwords for the tools configured in the environment. This is the easiest way to get the login credentials for each of the installed tools. Ideally, all of the tools will be accessible via SSO, at which point this command will be obsolete.

This command works by reading the information available in the cluster. For each tool installed by the toolkit, a config map and a secret are created to store its URL and credentials. This information is used in several ways within the environment:

- Provide configuration information to the pipelines.
- Populate the tiles on the Developer Dashboard.
- Populate the results of the `credentials` command.

This command requires that the login context for the cluster has already been established.

**Command flags**
- `-n`: the namespace where the tools have been deployed. The default value is `tools`.

**Usage**

<Tabs>
<Tab label="CLI">

The command is used in the following way:

```bash
igc credentials
```

It will output the credentials in JSON format:

```bash
Credentials:  {
  argocd: {
    user: 'admin',
    password: '12345678',
    url: 'https://argocd-tools.mycluster.us-east.containers.appdomain.cloud'
  },
  . . .
  dashboard: {
    url: 'https://dashboard-tools.mycluster.us-east.containers.appdomain.cloud'
  },
  . . .
}
```

</Tab>
<Tab label="OpenShift or Kubernetes">

The following commands does the same function (note the dependency on `jq`):

```bash
# config maps
kubectl get configmap -n tools -l grouping=garage-cloud-native-toolkit -o json | \
  jq '[.items[] | select(.metadata.name != "ibmcloud-config").data]'

# secrets
kubectl get secret -n tools -l grouping=garage-cloud-native-toolkit -o json | \
  jq '[.items[] | select(.metadata.name != "ibmcloud-apikey").data | with_entries(.value |= @base64d)]'
```
</Tab>
</Tabs>

### `endpoints`

Lists the ingress and/or route URLs for the applications in a given namespace. If a namespace is not provided as an argument, it will try to get it from the current context. The results are shown in an interactive menu. If one of the endpoints is selected, it will display the URL and launch it in the default browser. Selecting `Exit` will print the full list of endpoints and exit.

This command requires that the login context for the cluster has already been established.

**Command flags**
- `-n`: the namespace from which the endpoints will be retrieved. The value will be read from the current context if not provided.

**Usage**

<Tabs>
<Tab label="CLI">

The command is used in the following way:

```bash
igc endpoints
```

</Tab>
<Tab label="OpenShift">

The following commands list the route and ingress endpoints:

```bash
# routes
kubectl get route -n tools

# ingress
kubectl get ingress -n tools
```
</Tab>
<Tab label="Kubernetes">

The following commands list the ingress endpoints:

```bash
kubectl get ingress -n tools
```
</Tab>
</Tabs>

### `sync`

Creates a Kubernetes namespace or OpenShift project (if it doesn't already exist) and sets it up so that the namespace
can be used as a target for application deployments and/or host the <Globals name="env" />.

The command performs two major functions, 1) set up a service account in the namespace with the pull secret(s) for the IBM Container Registry and 2) synchronize the `ConfigMaps` and `Secrets` from a template namespace to create a "development" namespace.

Once the command has run successfully, it will set the provided namespace in the current context (e.g. equivalent to `oc project X`).

The pull secret(s) are required for pods to pull images stored in the IBM Container Registry. When a cluster is created in IBM Cloud, a pull secret is provided in the `default` namespace.

For a pod in another namespace to use the pull secret, it must first be copied into that namespace. After that, the pod either
needs to reference the pull secret directly, or the service account used by the resource needs to have a reference to
the secret. The CLI copies the pull secret over and adds it to the service account so the pod can take either approach.

The other function this command performs is to copy relevant `ConfigMaps` and `Secrets` needed for development into the namespace. Managing resources across namespaces (particularly `ConfigMaps` and `Secrets`) is a
common challenge in Kubernetes environments. We have provided the command at this time to simplify the steps required
to get everything ready. Ultimately, this problem seems like an ideal one for a command to solve and when another one is
available (either from the Toolkit or elsewhere) this one will be retired or transitioned.

There are two different types of namespaces that the command will set up:

- "release" namespace where applications can be deployed (e.g. test, staging).

-OR-

- "development" namespace where DevOps pipelines can be run and where application components can be deployed
(e.g. dev).

Both "release" and "development" namespaces will have the pull secret(s) created. However, only the "development"
one will also have the `ConfigMaps` and `Secrets` copied over.

**Command flags**
- `-t`: the template namespace that will be the source of the `config maps` and `secrets`. The default is `tools`.
- `-z`: the name of the service account. The default is `default`.
- `--dev`: flag indicating the namespace should be set for development.
- `--verbose`: flag indicating that the console output should persist on the screen.

**Usage**

<Tabs>
<Tab label="CLI">

Create a `test` namespace:

```bash
igc sync test
```

Create a `dev` namespace for development:

```bash
igc sync dev --dev
```
</Tab>
<Tab label="Manual pull secret setup">

The following commands will copy the pull secret(s) from the `default` namespace and add them to the service account:

```bash
export NAMESPACE="NAMESPACE"
export SERVICE_ACCOUNT="default"

if [[ $(kubectl get secrets -n "${NAMESPACE}" -o jsonpath='{ range .items[*] }{ .metadata.name }{ "\n" }{ end }' | grep icr | wc -l | xargs) -eq 0 ]]; then
    echo "*** Copying pull secrets from default namespace to the ${NAMESPACE} namespace"

    kubectl get secrets -n default | grep icr | sed "s/\([A-Za-z-]*\) *.*/\1/g" | while read default_secret; do
        kubectl get secret ${default_secret} -n default -o yaml --export | sed "s/name: default-/name: /g" | kubectl -n ${NAMESPACE} create -f -
    done
else
    echo "*** Pull secrets already exist in the ${NAMESPACE} namespace"
fi


EXISTING_SECRETS=$(kubectl get serviceaccount/${SERVICE_ACCOUNT} -n "${NAMESPACE}" -o json  | tr '\n' ' ' | sed -E "s/.*imagePullSecrets.: \[([^]]*)\].*/\1/g" | grep icr | wc -l | xargs)
if [[ ${EXISTING_SECRETS} -eq 0 ]]; then
    echo "*** Adding secrets to serviceaccount/${SERVICE_ACCOUNT} in the ${NAMESPACE} namespace"

    PULL_SECRETS=$(kubectl get secrets -n "${NAMESPACE}" -o jsonpath='{ range .items[*] }{ "{\"name\": \""}{ .metadata.name }{ "\"}\n" }{ end }' | grep icr | grep -v "${NAMESPACE}" | paste -sd "," -)
    kubectl patch -n "${NAMESPACE}" serviceaccount/${SERVICE_ACCOUNT} -p "{\"imagePullSecrets\": [${PULL_SECRETS}]}"
else
  export TEMPLATE_NAMESPACE="tools"
  export NAMESPACE="NAMESPACE"

  kubectl get configmap -l grouping=garage-cloud-native-toolkit -n ${TEMPLATE_NAMESPACE} -o jsonpath='{ range .items[*] }{ .metadata.name }{ "\n" }{ end }' | \
    while read cm; do
      kubectl get configmap ${cm} --namespace ${TEMPLATE_NAMESPACE} --export -o yaml | \
        kubectl apply --namespace $NAMESPACE -f -
    done

  kubectl get secret -l grouping=garage-cloud-native-toolkit -n ${TEMPLATE_NAMESPACE} -o jsonpath='{ range .items[*] }{ .metadata.name }{ "\n" }{ end }' | \
    while read cm; do
      kubectl get secret ${cm} --namespace ${TEMPLATE_NAMESPACE} --export -o yaml | \
        kubectl apply --namespace $NAMESPACE -f -
    done

```
</Tab>
</Tabs>

### `pipeline`

Connects a Git repository branch to either a Jenkins or Tekton CI pipeline in the <Globals name="env" /> and triggers
an initial build. A webhook is created so that when a new commit is added to the branch, the pipeline is triggered
to rebuild and redeploy the app with the updated code. The Git repository needs to be hosted in a service that supports triggers such as GitHub or GitLab.

This command requires the user to be logged into the cluster through a terminal, and that the terminal's current directory be your local copy of the Git repository as it uses its configuration to find the server copy.

If Jenkins or Tekton are not specified when the command is invoked you will be prompted for which CI tool to use.
The command will also prompt for the username and personal access token to access the Git repository unless those are
provided as command-line parameters. It will also prompt you for the branch to use to trigger builds. The default is the current branch.

**Command flags**
- `-n`: the deployment namespace. If not provided, the namespace from the current context will be used.
- `-u`: the username for accessing the Git repository.
- `-p`: the personal access token for accessing the Git repository.
- `--jenkins`: deploy using a Jenkins pipeline.
- `--tekton`: deploy using a Tekton pipeline.

**Usage**

<Tabs>
<Tab label="CLI">
Create a Jenkins pipeline in the `dev` namespace and prompt for the Git credentials:

```bash
igc pipeline --jenkins
```

Create a Tekton pipeline in the `my-dev` namespace, using the Git credentials `gituser` and `gitpat`:

```bash
igc pipeline -n my-dev -u gituser -p gitpat --tekton
```
</Tab>
<Tab label="Manual Steps for Tekton">

The following steps are required to manually configure a **Tekton**
pipeline in your development cluster:
<br></br>


- Configure the service account `pipeline` if it doesn't exist. In OpenShift 4 the operator takes care of it, so you can skip this step.
  ```bash
  oc create serviceaccount pipeline
  oc adm policy add-scc-to-user privileged -z pipeline
  oc adm policy add-role-to-user edit -z pipeline
  ```
- Clone the tasks from the `tools` namespace into the `new-namespace` one:
  ```
  kubectl get tasks --export -o yaml -n tools  | sed s/"namespace: tools/namespace: $(oc project -q)"/ | kubectl apply -f -
  ```
- Clone the pipelines from the `tools` namespace into the `new-namespace` one:
  ```
  kubectl get pipelines --export -o yaml -n tools  | sed s/"namespace: tools/namespace: $(oc project -q)"/ | kubectl apply -f -
  ```

### Pipeline Resource

- The `tkn` CLI creates a pipeline resource for a Git repository. Use `git` as resource type, replace the URL with the correct GitHub one for your repository, and set the desired branch for `revision`:
  ```
  tkn resource create
  ? Enter a name for a pipeline resource : nodejs-typescript-git
  ? Select a resource type to create : git
  ? Enter a value for url :  https://github.com/{user or org}/{app}
  ? Enter a value for revision :  master
  New git resource "nodejs-typescript-git" has been created
  ```
- To create a Pipeline resource for the docker image registry, you can use the internal registry in OpenShift or use an external registry like IBM Container Registry (credentials need setup).
  - With the `tkn` CLI, create an `image` resource:
    ```
    tkn resource create
    ```
  - Select `image` for type.

    - Enter the corresponding `url` for the container registry, and replace `{new-namespace}` with your namespace.

    - For OCP 3 internal registry use `docker-registry.default.svc:5000/{new-namespace}/node-typescript:latest`.

    - For OCP 4 or CRC internal registry use `image-registry.openshift-image-registry.svc:5000/{new-namespace}/node-typescript:latest`.

    - For an external registry like IBM Container Registry based on region use `us.icr.io/{namespace}/node-typescript:latest`, replacing `{namespace}` with an existing namespace in your IBM Cloud.
    ```
    tkn resource create
    ? Enter a name for a pipeline resource : nodejs-typescript-image
    ? Select a resource type to create : image
    ? Enter a value for url :  docker-registry.default.svc:5000/dev/node-typescript:latest
    ? Enter a value for digest :
    New image resource "nodejs-typescript-image" has been created
    ```

- List the available pipelines:
  ```
  tkn pipeline ls
  NAME              AGE              LAST RUN   STARTED   DURATION   STATUS
  igc-java-gradle   33 minutes ago   ---        ---       ---        ---
  igc-nodejs        33 minutes ago   ---        ---       ---        ---
  ```
  In this case we can use `igc-java-gradle` for java or `igc-nodejs` for nodejs.

- Start the pipeline using the `git` and `image` pipeline resources.
  Set the following environment variables for convienience:
  ```
  export PIPELINE=igc-nodejs
  export GIT=nodejs-typescript-git
  export IMAGE=nodejs-typescript-image
  ```
  Then run `tkn pipeline start` with the input arguments using the service account `pipeline`:
  ```
  tkn pipeline start \
  ${PIPELINE} \
  -r git-source=${GIT} \
  -r docker-image=${IMAGE} \
  -s pipeline
  ```

### Create a Git Webhook

- Open the Tekton Dashboard from the main Tools Dashboard or the ICPA landing page.

- Create a Webhook in the Tekton Dashboard

  - Click **Webhook** on the menu.
  - Click **Add Webhook** and enter the information for the webhook.
    - Name: **insert name**.
    - Repository URL: **template git repo URL**.
    - Access Token: Create GitHub access token with permission minimum write:repo_hook.
    - Namespace: **insert namespace**.
    - Pipeline: select **igc-java-gradle** or **igc-nodejs**.
    - Service Account: **pipeline**.
    - Docker Registry:
      - For OCP 3 internal registry use `docker-registry.default.svc:5000/{new-namespace}`.
      - For OCP 4 or CRC internal registry use `image-registry.openshift-image-registry.svc:5000/{new-namespace}`.
      - For an external registry like IBM Container Registry based on region use `us.icr.io/{namespace}` replacing `{namespace}` with an existing namespace from your IBM Cloud. Make sure to configure docker credentials in the Tekton Dashboard using your IAM API Key and `iamapikey` for the your namespace username.

- Check that the webhook is created in the GitHub repository (Settings - Webhooks).

- Make a commit to the git repo and push it to the remote git repository, or click on **Pipelines**
and manually trigger a pipeline build.

</Tab>
<Tab label="Manual steps for Jenkins on OpenShift">

### 1. Provision Jenkins Ephemeral

Jenkins Ephemeral provides a Kubernetes native version of Jenkins that dynamically provisions build agents on-demand.
It's _ephemeral_ in the sense that it doesn't allocate any persistent storage in the cluster.

1. Set the project/namespace:

```bash
oc project {NAMESPACE}
```

where:
- `{NAMESPACE}` is the development namespace where the pipelines will run.

2. Run the following command to provision the Jenkins instance in your namespace:

```bash
oc new-app jenkins-ephemeral
```

3. Open the OpenShift console as described in the login steps above.

4. Select `Workloads -> Pods` from the left-hand menu.

5. At the top of the page select your project/namespace from the drop-down list to see the Jenkins instance running.

### 2. Give the `jenkins` service account `privileged` access

All of the <Globals name="shortName"/> pipelines use `buildah` to build and push the container image to the registry.
Unfortunately, the `buildah` container must run as root. By default, OpenShift does not allow containers to run as the
root user and special permissions are required for the pipeline to run.

With the Jenkins build engine, all the build processes run as the `jenkins` service account. For the pipeline
container to run as root on OpenShift we need to assign the `privileged` security context constraint (scc) to
the `jenkins` service account with the following command:

```bash
oc project {NAMESPACE}
oc adm policy add-scc-to-user privileged -z jenkins
```

where:
 - `{NAMESPACE}` should be the name you claimed in the box note prefixed to `-dev` (e.g. user01-dev).

### 3. Create a secret with Git credentials

For Jenkins to have access to the Git repository, particularly if it is a private repository, a Kubernetes
secret containing the git credentials needs to be added.

1. Create a personal access token (if you don't already have one) using the prerequisites instructions:
https://cloudnativetoolkit.dev/getting-started/prereqs#configure-github-personal-access-token

2. Copy the following into a file called `gitsecret.yaml` and update {Git-Username}, and {Git-PAT}:

```yaml
apiVersion: v1
kind: Secret
metadata:
  annotations:
    build.openshift.io/source-secret-match-uri-1: https://github.com/*
  labels:
    jenkins.io/credentials-type: usernamePassword
  name: git-credentials
type: kubernetes.io/basic-auth
stringData:
  username: {Git-Username}
  password: {Git-PAT}
```

where:
 - `Git-Username` is the username that has access to the git repo
 - `Git-PAT` is the personal access token of the git user

2. After logging into the cluster, create the secret by running the following:

```bash
oc project {NAMESPACE}
oc create -f gitsecret.yaml
```

where:
 - `{NAMESPACE}` is the development namespace where the pipelines will run.

### 3. Create the build config

On OpenShift 4.3, Jenkins is built into the OpenShift console and the build pipelines can be managed using Kubernetes
custom resources. The following steps will manually create the build pipeline for the new application.

1. Copy the following into a file called `buildconfig.yaml` and update {Name}, {Secret}, {Git-Repo-URL},
and {Namespace}:

```yaml
apiVersion: v1
kind: BuildConfig
metadata:
  name: {Name}
spec:
  triggers:
  - type: GitHub
    github:
      secret: my-secret-value
  source:
    git:
      uri: {Git-Repo-URL}
      ref: master
  strategy:
    jenkinsPipelineStrategy:
      jenkinsfilePath: Jenkinsfile
      env:
      - name: CLOUD_NAME
        value: openshift
      - name: NAMESPACE
        value: {NAMESPACE}
```

where:
 - `Name` is the name of your pipeline.
 - `Git-Repo-URL` is the HTTPS URL to the Git repository.
 - `{NAMESPACE}` is the development namespace where the pipelines will run.

2. Assuming you are still logged into the cluster, create the `buildconfig` resource:

```bash
oc project {NAMESPACE}
oc create -f buildconfig.yaml
```

where:
 - `{NAMESPACE}` is the development namespace where the pipelines will run.

### 4. View the pipeline in the OpenShift console

1. Open the cluster's OpenShift console.
2. Select Builds -> Build Config.
3. Select your project/namespace (i.e. `{NAMESPACE}`) from the top.
4. The build pipeline that was created in the previous step should appear.
5. Manually trigger the pipeline by selecting `Start Build` the menu button on the right side of the row.

### 5. Create the webhook

1. Run the following commands to get the webhook details from the build config:

```
oc project {NAMESPACE}
oc describe bc {Name}
```

where:
 - `{Name}` is the name used in the previous step for the build config.
 - `{NAMESPACE}` is the development namespace where the pipelines will run.

The webhook URL will have a structure similar to:

`http://{openshift_api_host:port}/oapi/v1/namespaces/{namespace}/buildconfigs/{name}/webhooks/{secret}/generic`

In this case `{secret}` will be `my-secret-value`.

2. Open a browser to the GitHub repository deployed in the previous step from the build configuration.

3. Select `Settings`, then `Webhooks` and press `Add webhook`.

4. Paste the webhook URL from the previous step into `Payload url`.

5. Set the content-type to `application/json` and leave the rest of the values with the defaults.

6. Press `Add webhook` to create the webhook.

7. Press the button to test the webhook to ensure that everything was done properly.

8. Go back to your project code and push a change to one of the files.

9. Go to the Build pipeline page in the OpenShift console to check that the build was triggered.

</Tab>
<Tab label="Manual steps for Jenkins on Kubernetes">

TBD

</Tab>
</Tabs>

### `enable`

Adds DevOps artifacts to a Git repository that the <Globals name="env" /> uses to deploy the app. The command displays a
list of available pipelines and applies the one you select to your repository. 

This command DOES NOT require the user to be logged into an IBM Cloud account nor the cluster through the terminal. It DOES
require that the terminal's current directory is the one for your local copy of the Git repository.

The command will add several files to the local repo which you need to commit and push them to the server repo. These include (but are not limited to):

- Helm chart.
- `Jenkinsfile`.

Once these are pushed, run `igc pipeline` to connect your repo to a pipeline in the environment.

**Command flags**
- `--repo`: the set of pipelines to choose from; the default is https://github.com/ibm-garage-cloud/garage-pipelines.
- `-p`: the name of the pipeline to be installed. If not provided, you will be prompted for it.
- `-b`: the branch from which the pipeline will be installed. The default is `stable`.
- `r`: the version number of the pipeline to be installed. The default is `latest`.

**Usage**

<Tabs>
<Tab label="CLI">

1. Before running the command, make sure you have a clean repository with no unstaged changes. Either commit any
changes or stash them temporarily with `git stash`. It is particularly important that any changes to the pipeline be
dealt with.

2. Apply the pipeline updates using the following CLI command:

```bash
igc enable
```

3. Review the changes using `git diff` and revert any application-specific changes that should remain (e.g.
customization to the Jenkins pipeline in the `Jenkinsfile`, specific values added to `values.yaml`, customizations
to the templates in the Helm chart).

4. Commit the changes when you are happy with them.

</Tab>
<Tab label="Manual steps">

The following manual steps are equivalent to the `igc enable` command:

1. Before updating the pipelines, make sure you have a clean repository with no unstaged changes. Either commit any
changes or stash them temporarily with `git stash`. It is particularly important that any changes to the pipeline be
dealt with.

2. Download the `index.yaml` file containing the available pipeline versions:

    ```bash
    curl -O https://ibm-garage-cloud.github.io/garage-pipelines/index.yaml
    ```

3. Look through the `index.yaml` file to identify the URL for the desired pipeline branch and version.

4. With the PIPELINE_URL from the previous step, run the following to download the pipeline tar-ball:

    ```bash
    curl -O ${PIPELINE_URL}
    ```

5. Extract the tar-ball into your repository directory. You will be prompted to overwrite files. Overwrite as
appropriate:

    ```bash
    tar xzf ${PIPELINE_FILE}
    ```

6. Review the changes using `git diff` and revert any application-specific changes that should remain like
customization to the Jenkins pipeline in the `Jenkinsfile`, specific values added to `values.yaml` or customizations
to the templates in the helm chart.

7. Commit changes once you are happy with them.

</Tab>
</Tabs>
