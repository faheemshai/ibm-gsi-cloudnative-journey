---
title: Tekton Lab
description: Lab for continuous integration using tekton
---
<!--- cSpell:ignore ICPA yamls openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

## Pre-requisites

Make sure your environment is properly setup.

Follow the instructions [here](/getting-started/devenvsetup)

=== "OpenShift"

    ## SetUp

    ### Tekton CLI Installation

    - [Tekton CLI](https://github.com/tektoncd/cli) is command line utility used to interact with the Tekton resources.

    - Follow the instructions on the tekton CLI github repository https://github.com/tektoncd/cli#installing-tkn

    - For MacOS for example you can use brew
    ```
    brew tap tektoncd/tools
    brew install tektoncd/tools/tektoncd-cli
    ```
    - Verify the Tekton cli
    ```
    tkn version
    ```
    - The command should show a result like:
    ```
    $ tkn version
    Client version: 0.8.0
    ```
    - If you already have the `tkn` install you can upgrade running
    ```
    brew upgrade tektoncd/tools/tektoncd-cli
    ```

    ### Tekton Pipelines Installation

    - To deploy the Tekton pipelines:
    ```
     oc apply --filename https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/tekton-lab/tekton-operator.yaml
    ```
    - ***Note***: It will take few mins for the Tekton pipeline components to be installed, you an watch the status using the command:
    ```
    oc get pods -n openshift-operators
    ```
    You can use `Ctrl+c` to terminate the watch
    - A successful deployment of Tekton pipelines will show the following pods:
    ```
    NAME                                         READY   STATUS    RESTARTS   AGE
    openshift-pipelines-operator-9cdbbb854-x9tvs   1/1     Running   0          25s
    ```

    ## Create Target Namespace

    - Set the environment variable `NAMESPACE` to `tekton-demo`, if you open a new terminal remember to set this environment again
    ```
    export NAMESPACE=tekton-demo
    ```
    - Create a the namespace using the variable `NAMESPACE`
    ```
    oc create namespace $NAMESPACE
    ```

    ## Pipeline Resources

    ### Pipeline Resource Creation

    #### Create a PipelineResource of type `git`
    - Create the file **git.yaml**
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineResource
    metadata:
      name: source
    spec:
      type: git
      params:
        - name: revision
          value: master
        - name: url
          value: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
    ```
    Verify the file content
    ```bash
    cat git.yaml
    ```

    #### Create a PipelineResource of type `image`

    - Set the environment variable `DOCKER_USERNAME` to your dockerhub account, replace `<REPLACEME>` with your docker username, keep the quotes
    ```
    export DOCKER_USERNAME='<REPLACEME>'
    ```
    - Create the file **image.yaml**
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineResource
    metadata:
      name: image
    spec:
      type: image
      params:
        - name: url
          value: index.docker.io/$DOCKER_USERNAME/cloudnative_sample_app
    ```
    Verify the file content, and make sure the `url` value is valid with your dockerhub username replaced
    ```bash
    cat image.yaml
    ```


    ### Pipeline Resources deployment

    - Each pipeline resource has:
    - **name**: the name using which it will be referred in other places
    - **type**: the type of the pipeline resource, in this example we have two types
    - ***git*** - this type of resource refers to a GitHub repository
    - ***image*** - this type of resource is linux container image
    - **params**: each type can have one or more parameters that will be used to configure the underlying type. In the above example for the git-source pipeline resource, the parameters url and revision are used to identify the GitHub repository url and revision of the sources respectively.

    - More details on other types of pipeline resource types is available [here](https://github.com/tektoncd/pipeline/blob/master/docs/resources.md#resource-types).

    - Create the pipeline resources using the command:
    ```
    oc apply -f git.yaml -n $NAMESPACE
    oc apply -f image.yaml -n $NAMESPACE
    ```

    ### Verify the deployed resource

    - Use the Tekton cli to list the created resources
    ```
    tkn res ls -n $NAMESPACE
    ```

    - The above command should list two resources as shown below:
    ```
    NAME                        TYPE    DETAILS
    source                      git     url: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
    image                       image   url: index.docker.io/yourdockerhubusername/cloudnative_sample_app
    ```
    Use the command help via `tkn res --help`
    - Use the Tekton cli to describe the git resource
    ```
    tkn res describe source -n $NAMESPACE
    ```
    The output should look like this:
    ```
    Name:                    source
    Namespace:               tekton-demo
    PipelineResource Type:   git

    Params
    NAME       VALUE
    revision   master
    url        https://github.com/ibm-cloud-architecture/cloudnative_sample_app

    Secret Params
    No secret params
    ```
    - Use the Tekton cli to describe the git resource
    ```
    tkn res describe image -n $NAMESPACE
    ```
    The output should look like this:
    ```
    Name:                    image
    Namespace:               tekton-demo
    PipelineResource Type:   image

    Params
    NAME   VALUE
    url    index.docker.io/myusername/cloudnative_sample_app

    Secret Params
    No secret params
    ```

    ## Tasks

    ### Task Creation

    - Create the below yaml files.
    - The following snippet shows what a Tekton Task YAML looks like:
    - Create the file **test_task.yaml**
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: Task
    metadata:
      name: java-test
    spec:
      inputs:
        resources:
          - name: source
            type: git
        params:
          - name: maven-image
            type: string
            default: maven:3.3-jdk-8
      steps:
        - name: test
          image: $(inputs.params.maven-image)
          workingdir: $(inputs.resources.source.path)
          command: ["/bin/bash"]
          args:
            - -c
            - |
              set -e
              mvn test
              echo "tests passed with rc=$?"
          volumeMounts:
            - name: m2-repository
              mountPath: /.m2
      volumes:
        - name: m2-repository
          emptyDir: {}
    ```

    - Each Task has the following:

    - **name** - the unique name using which the task can be referred
    - **inputs** - the inputs to the task
    - ***resources*** - the pipeline resources that will be used in the task e.g. git-source
    - name - the name of the input resource using which it can be referenced and bound via TaskRun
    - type - the type of the input resource, typically the pipeline resource type
    - ***params*** - the parameters that will be used in the task steps. Each parameter has
    - name - the name of the parameter
    - description - the description of the parameter
    - default - the default value of parameter

    - **Note**: The `TaskRun` or `PipelineRun` could override the parameter values, if no parameter value is passed then the default value will be used.

    - **outputs** the pipeline resource that will end artifact of the task. In the above example the build will produce a container image artifact.
    - ***resources*** - the pipeline resources that will be used in the task e.g. builtImage
    - name - the name of the input resource using which it can be referenced and bound via TaskRun
    - type - the type of the input resource, typically the pipeline resource type
    - **steps** - One or more sub-tasks that will be executed in the defined order. The step has all the attributes like a Pod spec
    - **stepTemplate** - when there is a need to have similar container configuration across all steps of a the task, we can have them defined in the stepTemplate, the task steps will inherit them implicitly in all steps. In the example above we define the resources and securityContext for all the steps
    - **volumes** - the task can also mount external volumes using the volumes attribute.

    - The parameters that were part of the spec inputs  params can be used in the steps using the notation `$(<variable-name>)`.

    ### Task Deploy

    - The application test task could be created using the command:
    ```
    oc apply -f test_task.yaml -n $NAMESPACE
    ```

    - We will use the Tekton cli to inspect the created resources
    ```
    tkn task ls -n $NAMESPACE
    ```

    - The above command should list one Task as shown below:
    ```
    NAME        AGE
    java-test   22 seconds ago
    ```


    ### TaskRun

    - The [TaskRun](https://github.com/tektoncd/pipeline/blob/master/docs/taskruns.md) is used to run a specific task independently. In the following section we will run the build-app task created in the previous step

    #### TaskRun Creation

    - The following snippet shows what a Tekton TaskRun YAML looks like:
    - Create the file **test_taskrun.yaml**
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: TaskRun
    metadata:
      generateName: test-task-run-
    spec:
      taskRef:
        name: java-test
      inputs:
        resources:
          - name: source
            resourceRef:
              name: source
    ```
    - **generateName** - since the TaskRun can be run many times, in order to have unique name across the TaskRun ( helpful when checking the TaskRun history) we use this generateName instead of name. When Kubernetes sees generateName it will generate unique set of characters and suffix the same to build-app-, similar to how pod names are generated
    - **taskRef** - this is used to refer to the Task by its name that will be run as part of this TaskRun. In this example we use build-app Task.
    - As described in the earlier section that the Task inputs and outputs could be overridden via TaskRun.
    - In this example we make the Task Run `spec > inputs > resources > source` to refer to pipeline resource `source` via the `resourceRef`.
    - The application test task(java-maven-test) could be run using the command:
    ```
    oc create -n $NAMESPACE -f test_taskrun.yaml
    ```
    - **Note** - As tasks will use generated name, never use `oc apply  -f test_taskrun.yaml`
    - We will use the Tekton cli to inspect the created resources:
    ```
    tkn tr ls -n $NAMESPACE
    ```
    The above command should list one TaskRun as shown below:
    ```
    NAME                       STARTED        DURATION   STATUS
    test-task-run-q6s8c        1 minute ago   ---        Running(Pending)
    ```
    **Note** - It will take few seconds for the TaskRun to show status as Running as it needs to download the container images.

    - To check the logs of the Task Run using the `tkn`:
    ```
    tkn tr logs -f -a -n $NAMESPACE
    ```
    **Note** - Each task step will be run within a container of its own.
    The -f or -a allows to tail the logs from all the containers of the task. For more options run `tkn tr logs --help`
    - If you see the TaskRun status as Failed or Error use the following command to check the reason for error:
    ```
    tkn tr describe <taskrun-name> -n $NAMESPACE
    ```
    - If it is successful, you will see something like below.
    ```
    tkn tr ls -n $NAMESPACE
    ```
    The above command should list one TaskRun as shown below:
    ```
    NAME                  STARTED          DURATION     STATUS
    test-task-run-q6s8c   47 seconds ago   34 seconds   Succeeded
    ```

    ### Creating additional tasks and deploying them

    - Create a Task to build a container image and push to the registry
    - This task will be later used by the pipeline.
    - Download the task file [task-buildah.yaml](/yamls/tekton-lab/task-buildah.yaml) to build the image, push the image to the registry:
    - Create the `buildah` Task using the file and the command:
    ```
    oc apply -f task-buildah.yaml -n $NAMESPACE
    ```
    - Use the Tekton cli to inspect the created resources
    ```
    tkn task ls -n $NAMESPACE
    ```
    - The above command should list one Task as shown below:
    ```
    NAME              AGE
    buildah            4 seconds ago
    java-test         46 minutes ago
    ```

    - To access the docker registry, create the required secret as follows.
    - Create the environment variables to be use, replace with real values and include the single quotes:
    ```
    export DOCKER_USERNAME='<DOCKER_USERNAME>'
    ```
    ```
    export DOCKER_PASSWORD='<DOCKER_PASSWORD>'
    ```
    ```
    export DOCKER_EMAIL='<DOCKER_EMAIL>'
    ```
    - Run the following command to create a secret `regcred` in the namespace `NAMESPACE`
    ```
    oc create secret docker-registry regcred \
      --docker-server=https://index.docker.io/v1/ \
      --docker-username=${DOCKER_USERNAME} \
      --docker-password=${DOCKER_PASSWORD} \
      --docker-email=${DOCKER_EMAIL} \
      -n ${NAMESPACE}
    ```
    Before creating, replace the values as mentioned above.
    Note: If your docker password contains special characters in it, please enclose the password in double quotes or place an escape character before each special character.

    - (Optional) Only if you have problems with the credentials you can recreate it, but you have to deleted first
    ```bash
    oc delete secret regcred -n $NAMESPACE
    ```
    - Before we run the Task using TaskRun let us create the Kubernetes service account and attach the needed permissions to the service account, the following Kubernetes resource defines a service account called `pipeline` in namespace `$NAMESPACE` who will have administrative role within the `$NAMESPACE` namespace.
    - Create the file **sa.yaml**
    ```
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: pipeline
    secrets:
      - name: regcred
    ```
    - Create sa role as follows:
    ```bash
    oc apply -n $NAMESPACE -f sa.yaml
    ```

    - Lets create a Task Run for `buildah` Task using the `tkn` CLI passing the inputs, outputs and service account
    ```bash
    tkn task start buildah \
      -i source=source \
      -i image=image \
      -s pipeline \
      -n $NAMESPACE
    ```
    The task will start and logs will start printing automatically
    ```
    Taskrun started: buildah-run-vvrg2
    Waiting for logs to be available...
    ```

    - Verify the status of the Task Run
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    Output should look like this
    ```
    NAME                  STARTED          DURATION     STATUS
    buildah-run-zbsrv      2 minutes ago    1 minute     Succeeded
    ```
    - To clean up all Pods associated with all Task Runs, delete all the task runs resources
    ```bash
    oc delete taskrun --all -n $NAMESPACE
    ```
    - (Optional) Instead of starting the Task via `tkn task start` you could also use yaml TaskRun
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: TaskRun
    metadata:
      generateName: buildah-task-run-
    spec:
      serviceAccountName: pipeline
      taskRef:
        name: buildah
      inputs:
        resources:
          - name: source
            resourceRef:
              name: source
          - name: image
            resourceRef:
              name: image
    ```
    Then create the TaskRun with `generateName`
    ```bash
    oc create -f taskrun.yaml -n $NAMESPACE
    ```
    Follow the logs with:
    ```
    tkn tr logs -f -n $NAMESPACE
    ```

    ## Pipelines

    ### Pipeline Creation

    - Pipelines allows to start multiple Tasks, in parallel or in a [certain order](https://github.com/tektoncd/pipeline/blob/master/docs/pipelines.md#runafter)

    - Create the file **pipeline.yaml**, the Pipeline contains two Tasks
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: Pipeline
    metadata:
      name: test-build-push
    spec:
      resources:
        - name: source
          type: git
        - name: image
          type: image
      tasks:
        - name: test
          taskRef:
            name: java-test
          resources:
            inputs:
              - name: source
                resource: source
        - name: build-push
          taskRef:
            name: buildah
          runAfter: [test]
          resources:
            inputs:
              - name: source
                resource: source
              - name: image
                resource: image
    ```

    - Pipeline defines a list of Tasks to execute in order, while also indicating if any outputs should be used as inputs of a following Task by using the from field and also indicating the order of executing (using the runAfter and from fields). The same variable substitution you used in Tasks is also available in a Pipeline.
    - Create the Pipeline using the command:
    ```bash
    oc apply -f pipeline.yaml -n $NAMESPACE
    ```
    - Use the Tekton cli to inspect the created resources
    ```bash
    tkn pipeline ls -n $NAMESPACE
    ```
    The above command should list one Pipeline as shown below:
    ```bash
     NAME              AGE              LAST RUN   STARTED   DURATION   STATUS
    test-build-push   31 seconds ago   ---        ---       ---        ---
    ```

    ### PipelineRun

    #### PipelineRun Creation

    - To execute the Tasks in the Pipeline, you must create a PipelineRun. Creation of a PipelineRun will trigger the creation of TaskRuns for each Task in your pipeline.
    - Create the file **pipelinerun.yaml**
    ```
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineRun
    metadata:
      generateName: test-build-push-run-
    spec:
      serviceAccountName: pipeline
      pipelineRef:
        name: test-build-push
      serviceAccountName: pipeline
      resources:
        - name: source
          resourceRef:
            name: source
        - name: image
          resourceRef:
            name: image
    ```
    **serviceAccount** - it is always recommended to have a service account associated with PipelineRun, which can then be used to define fine grained roles.
    - Create the PipelineRun using the command:
    ```bash
    oc create -f pipelinerun.yaml -n $NAMESPACE
    ```
    - We will use the Tekton cli to inspect the created resources
    ```bash
    tkn pipelinerun ls -n $NAMESPACE
    ```

    - The above command should list one PipelineRun as shown below:
    ```bash
    NAME                        STARTED         DURATION   STATUS
    test-build-push-run-c7zgv   8 seconds ago   ---        Running
    ```

    - Wait for few minutes for your pipeline to complete all the tasks. If it is successful, you will see something like below.
    ```bash
    tkn pipeline ls -n $NAMESPACE
    ```
    ```
    NAME              AGE              LAST RUN                    STARTED         DURATION    STATUS
    test-build-push   33 minutes ago   test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded
    ```
    - Run again the pipeline ls command
    ```bash
    tkn pipelinerun ls -n $NAMESPACE
    ```
    ```
    NAME                        STARTED         DURATION    STATUS
    test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded
    ```
    If it is successful, go to your container registry account and verify if you have the `cloudnative_sample_app` image pushed.

    - (Optional) Run the pipeline again using the `tkn` CLI
    ```bash
    tkn pipeline start test-build-push \
      -r source=source \
      -r image=image \
      -s pipeline \
      -n $NAMESPACE
    ```
    - (Optional) Re-run the pipeline using last pipelinerun values
    ```bash
    tkn pipeline start test-build-push --last -n $NAMESPACE
    ```

    ## Deploy Application

    - Deploy the app as follows:
    ```bash
    export APP_YAML_URL='https://raw.githubusercontent.com/ibm-cloud-architecture/cloudnative_sample_app_deploy/master/yamls/'
    oc apply -n $NAMESPACE -f $APP_YAML_URL/deployment.yaml
    oc apply -n $NAMESPACE -f $APP_YAML_URL/service.yaml
    ```
    - Replace the default image with the new image you deployed using Tekton
    - Replace `<DOCKER_USERNAME>` with your username
    ```bash
    export DOCKER_USERNAME='<DOCKER_USERNAME>'
    ```
    - Replace `<SHORT_GIT_HASH>` with the tag of the image you push to the registry, you can go the registry Web UI and verify the tag value.
    ```bash
    export SHORT_GIT_HASH='<SHORT_GIT_HASH>'
    ```
    - Set the environment variable `IMAGE_URL` to the new image url value sing the two previous environment variables `DOCKER_USERNAME` and `SHORT_GIT_HASH`
    ```bash
    export IMAGE_URL=docker.io/${DOCKER_USERNAME}/cloudnative_sample_app:${SHORT_GIT_HASH}
    echo $IMAGE_URL
    ```
    - Replace the image on the deployment
    ```bash
    oc set image \
      deployment/cloudnativesampleapp-deployment \
      \*=${IMAGE_URL} \
      -n $NAMESPACE --record
    ```
    - Verify the image is set
    ```bash
    oc get deploy \
      cloudnativesampleapp-deployment \
      -o jsonpath='{.spec.template.spec.containers[0].image}' \
      -n $NAMESPACE
    ```
    - Verify if the pods are running:
    ```bash
    oc get pods -n $NAMESPACE -l app=cloudnativesampleapp-selector
    ```
    ```
    NAME                          READY   STATUS      RESTARTS   AGE
    cloudnativesampleapp...       1/1     Running     0          82s
    ```
    - Retrieve the service NodePort:
    ```bash
    oc describe svc cloudnativesampleapp-service -n $NAMESPACE | grep NodePort
    ```
    ```
    Type:                     NodePort
    NodePort:                 http  30632/TCP
    ```
    In this instance the NodePort assigned is `30632`
    - Get the External Public IP as follows:
    ```bash
    crc ip
    ```
    ```
    192.168.64.30
    ```
    - Now access the compose the URL of the App using IP and NodePort
    ```bash
    export APP_EXTERNAL_IP=$(crc ip)
    export APP_NODEPORT=$(oc get svc cloudnativesampleapp-service -n $NAMESPACE -o jsonpath='{.spec.ports[0].nodePort}')
    export APP_URL="http://${APP_EXTERNAL_IP}:${APP_NODEPORT}/greeting?name=Carlos"
    echo $APP_URL
    ```
    ```
    http://192.168.64.30:30632//greeting?name=Carlos
    ```
    - Now access the app from terminal or browser
    ```bash
    curl $APP_URL
    ```
    ```bash
    open $APP_URL
    ```





=== "IKS"

    ## SetUp

    ### Tekton CLI Installation

    - [Tekton CLI](https://github.com/tektoncd/cli) is command line utility used to interact with the Tekton resources.

    - Follow the instructions on the tekton CLI github repository https://github.com/tektoncd/cli#installing-tkn

    - For MacOS for example you can use brew
    ```bash
    brew tap tektoncd/tools
    brew install tektoncd/tools/tektoncd-cli
    ```
    - Verify the Tekton cli
    ```bash
    tkn version
    ```
    - The command should show a result like:
    ```bash
    $ tkn version
    Client version: 0.8.0
    ```
    - If you already have the `tkn` install you can upgrade running
    ```bash
    brew upgrade tektoncd/tools/tektoncd-cli
    ```

    ### Tekton Pipelines Installation

    - To deploy the Tekton pipelines:
    ```bash
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
    ```
    - ***Note***: It will take few mins for the Tekton pipeline components to be installed, you an watch the status using the command:
    ```bash
    kubectl get pods -n tekton-pipelines -w
    ```
    You can use `Ctrl+c` to terminate the watch
    - A successful deployment of Tekton pipelines will show the following pods:
    ```
    NAME                                         READY   STATUS    RESTARTS   AGE
    tekton-pipelines-controller-9b8cccff-j6hvr   1/1     Running   0          2m33s
    tekton-pipelines-webhook-6fc9d4d9b6-kpkp7    1/1     Running   0          2m33s
    ```

    ### Tekton Dashboard Installation (Optional)

    - To deploy the Tekton dashboard:
    ```bash
    kubectl apply --filename https://github.com/tektoncd/dashboard/releases/download/latest/dashboard_latest_release.yaml
    ```
    - ***Note***: It will take few mins for the Tekton dashboard components to be installed, you an watch the status using the command:
    ```bash
    kubectl get pods -n tekton-pipelines -w
    ```
    You can use `Ctrl+c` to terminate the watch
    - A successful deployment of Tekton pipelines will show the following pods:
    ```
    NAME                                           READY   STATUS    RESTARTS   AGE
    tekton-dashboard-59c7fbf49f-79f7q              1/1     Running   0          50s
    tekton-pipelines-controller-6b7f7cf7d8-r65ps   1/1     Running   0          15m
    tekton-pipelines-webhook-7bbd8fcc45-sfgxs      1/1     Running   0          15m
    ```
    - Access the dashboard as follows:
    ```bash
    kubectl --namespace tekton-pipelines port-forward svc/tekton-dashboard 9097:9097
    ```
    You can access the web UI at http://localhost:9097 .

    ## Create Target Namespace

    - Set the environment variable `NAMESPACE` to `tekton-demo`, if you open a new terminal remember to set this environment again
    ```bash
    export NAMESPACE=tekton-demo
    ```
    - Create a the namespace using the variable `NAMESPACE`
    ```bash
    kubectl create namespace $NAMESPACE
    ```

    ## Pipeline Resources

    ### Pipeline Resource Creation

    #### Create a PipelineResource of type `git`
    - Create the file **git.yaml**
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineResource
    metadata:
      name: source
    spec:
      type: git
      params:
        - name: revision
          value: master
        - name: url
          value: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
    ```
    Verify the file content
    ```bash
    cat git.yaml
    ```

    #### Create a PipelineResource of type `image`

    - Set the environment variable `DOCKER_USERNAME` to your dockerhub account, replace `<REPLACEME>` with your docker username, keep the quotes
    ```bash
    export DOCKER_USERNAME='<REPLACEME>'
    ```
    - Create the file **image.yaml**
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineResource
    metadata:
      name: image
    spec:
      type: image
      params:
        - name: url
          value: index.docker.io/$DOCKER_USERNAME/cloudnative_sample_app
    ```
    Verify the file content, and make sure the `url` value is valid with your dockerhub username replaced
    ```bash
    cat image.yaml
    ```


    ### Pipeline Resources deployment

    - Each pipeline resource has:
      - **name**: the name using which it will be referred in other places
      - **type**: the type of the pipeline resource, in this example we have two types
      - ***git*** - this type of resource refers to a GitHub repository
      - ***image*** - this type of resource is linux container image
      - **params**: each type can have one or more parameters that will be used to configure the underlying type. In the above example for the git-source pipeline resource, the parameters url and revision are used to identify the GitHub repository url and revision of the sources respectively.

    - More details on other types of pipeline resource types is available [here](https://github.com/tektoncd/pipeline/blob/master/docs/resources.md#resource-types).

    - Create the pipeline resources using the command:
    ```bash
    kubectl apply -f git.yaml -n $NAMESPACE
    kubectl apply -f image.yaml -n $NAMESPACE
    ```

    ### Verify the deployed resource

    - Use the Tekton cli to list the created resources
    ```bash
    tkn res ls -n $NAMESPACE
    ```

    - The above command should list two resources as shown below:
    ```
    NAME                        TYPE    DETAILS
    source                      git     url: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
    image                       image   url: index.docker.io/yourdockerhubusername/cloudnative_sample_app
    ```
    Use the command help via `tkn res --help`
    - Use the Tekton cli to describe the git resource
    ```bash
    tkn res describe source -n $NAMESPACE
    ```
    The output should look like this:
    ```
    Name:                    source
    Namespace:               tekton-demo
    PipelineResource Type:   git

    Params
    NAME       VALUE
    revision   master
    url        https://github.com/ibm-cloud-architecture/cloudnative_sample_app

    Secret Params
    No secret params
    ```
    - Use the Tekton cli to describe the git resource
    ```bash
    tkn res describe image -n $NAMESPACE
    ```
    The output should look like this:
    ```
    Name:                    image
    Namespace:               tekton-demo
    PipelineResource Type:   image

    Params
    NAME   VALUE
    url    index.docker.io/myusername/cloudnative_sample_app

    Secret Params
    No secret params
    ```

    ## Tasks

    ### Task Creation

    - Create the below yaml files.
    - The following snippet shows what a Tekton Task YAML looks like:
    - Create the file **test_task.yaml**
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: Task
    metadata:
      name: java-test
    spec:
      inputs:
        resources:
          - name: source
            type: git
        params:
          - name: maven-image
            type: string
            default: maven:3.3-jdk-8
      steps:
        - name: test
          image: $(inputs.params.maven-image)
          workingdir: $(inputs.resources.source.path)
          command: ["/bin/bash"]
          args:
            - -c
            - |
              set -e
              mvn test
              echo "tests passed with rc=$?"
          volumeMounts:
            - name: m2-repository
              mountPath: /.m2
      volumes:
        - name: m2-repository
          emptyDir: {}
    ```

    - Each Task has the following:

    - **name** - the unique name using which the task can be referred
    - **inputs** - the inputs to the task
    - ***resources*** - the pipeline resources that will be used in the task e.g. git-source
    - name - the name of the input resource using which it can be referenced and bound via TaskRun
    - type - the type of the input resource, typically the pipeline resource type
    - ***params*** - the parameters that will be used in the task steps. Each parameter has
      - name - the name of the parameter
      - description - the description of the parameter
      - default - the default value of parameter

    - **Note**: The `TaskRun` or `PipelineRun` could override the parameter values, if no parameter value is passed then the default value will be used.

    - **outputs** the pipeline resource that will end artifact of the task. In the above example the build will produce a container image artifact.
    - ***resources*** - the pipeline resources that will be used in the task e.g. builtImage
       - name - the name of the input resource using which it can be referenced and bound via TaskRun
       - type - the type of the input resource, typically the pipeline resource type
    - **steps** - One or more sub-tasks that will be executed in the defined order. The step has all the attributes like a Pod spec
    - **stepTemplate** - when there is a need to have similar container configuration across all steps of a the task, we can have them defined in the stepTemplate, the task steps will inherit them implicitly in all steps. In the example above we define the resources and securityContext for all the steps
    - **volumes** - the task can also mount external volumes using the volumes attribute.

    - The parameters that were part of the spec inputs  params can be used in the steps using the notation `$(<variable-name>)`.

    ### Task Deploy

    - The application test task could be created using the command:
    ```bash
    kubectl apply -f test_task.yaml -n $NAMESPACE
    ```

    - We will use the Tekton cli to inspect the created resources
    ```bash
    tkn task ls -n $NAMESPACE
    ```

    - The above command should list one Task as shown below:
    ```
    NAME        AGE
    java-test   22 seconds ago
    ```


    ### TaskRun

    - The [TaskRun](https://github.com/tektoncd/pipeline/blob/master/docs/taskruns.md) is used to run a specific task independently. In the following section we will run the build-app task created in the previous step

    #### TaskRun Creation

    - The following snippet shows what a Tekton TaskRun YAML looks like:
    - Create the file **test_taskrun.yaml**
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: TaskRun
    metadata:
      generateName: test-task-run-
    spec:
      taskRef:
        name: java-test
      inputs:
        resources:
          - name: source
            resourceRef:
              name: source
    ```
    - **generateName** - since the TaskRun can be run many times, in order to have unique name across the TaskRun ( helpful when checking the TaskRun history) we use this generateName instead of name. When Kubernetes sees generateName it will generate unique set of characters and suffix the same to build-app-, similar to how pod names are generated
    - **taskRef** - this is used to refer to the Task by its name that will be run as part of this TaskRun. In this example we use build-app Task.
    - As described in the earlier section that the Task inputs and outputs could be overridden via TaskRun.
    - In this example we make the Task Run `spec > inputs > resources > source` to refer to pipeline resource `source` via the `resourceRef`.
    - The application test task(java-maven-test) could be run using the command:
    ```bash
    kubectl create -n $NAMESPACE -f test_taskrun.yaml
    ```
    - **Note** - As tasks will use generated name, never use `kubectl apply -f test_taskrun.yaml`
    - We will use the Tekton cli to inspect the created resources:
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    The above command should list one TaskRun as shown below:
    ```bash
    NAME                       STARTED        DURATION   STATUS
    test-task-run-q6s8c        1 minute ago   ---        Running(Pending)
    ```
    **Note** - It will take few seconds for the TaskRun to show status as Running as it needs to download the container images.

    - To check the logs of the Task Run using the `tkn`:
  ```bash
  tkn tr logs -f -a -n $NAMESPACE
  ```
    **Note** - Each task step will be run within a container of its own.
    The -f or -a allows to tail the logs from all the containers of the task. For more options run `tkn tr logs --help`
    - If you see the TaskRun status as Failed or Error use the following command to check the reason for error:
    ```bash
    tkn tr describe <taskrun-name> -n $NAMESPACE
    ```
    - If it is successful, you will see something like below.
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    The above command should list one TaskRun as shown below:
    ```bash
    NAME                  STARTED          DURATION     STATUS
    test-task-run-q6s8c   47 seconds ago   34 seconds   Succeeded
    ```

    ### Creating additional tasks and deploying them

    - Create a Task to build a container image and push to the registry
    - This task will be later used by the pipeline.
    - Download the task file [task-buildah.yaml](/yamls/tekton-lab/task-buildah.yaml) to build the image, push the image to the registry:
    - Create the `buildah` Task using the file and the command:
    ```bash
    kubectl apply -f task-buildah.yaml -n $NAMESPACE
    ```
    - Use the Tekton cli to inspect the created resources
    ```bash
    tkn task ls -n $NAMESPACE
    ```
    - The above command should list one Task as shown below:
    ```bash
    NAME              AGE
    buildah            4 seconds ago
    java-test         46 minutes ago
    ```

    - To access the docker registry, create the required secret as follows.
    - Create the environment variables to be use, replace with real values and include the single quotes:
    ```bash
    export DOCKER_USERNAME='<DOCKER_USERNAME>'
    ```
    ```bash
    export DOCKER_PASSWORD='<DOCKER_PASSWORD>'
    ```
    ```bash
    export DOCKER_EMAIL='<DOCKER_EMAIL>'
    ```
    - Run the following command to create a secret `regcred` in the namespace `NAMESPACE`
    ```bash
    kubectl create secret docker-registry regcred \
      --docker-server=https://index.docker.io/v1/ \
      --docker-username=${DOCKER_USERNAME} \
      --docker-password=${DOCKER_PASSWORD} \
      --docker-email=${DOCKER_EMAIL} \
      -n ${NAMESPACE}
    ```
    Before creating, replace the values as mentioned above.
    Note: If your docker password contains special characters in it, please enclose the password in double quotes or place an escape character before each special character.

    - (Optional) Only if you have problems with the credentials you can recreate it, but you have to deleted first
    ```bash
    kubectl delete secret regcred -n $NAMESPACE
    ```
    - Before we run the Task using TaskRun let us create the Kubernetes service account and attach the needed permissions to the service account, the following Kubernetes resource defines a service account called `pipeline` in namespace `$NAMESPACE` who will have administrative role within the `$NAMESPACE` namespace.
    - Create the file **sa.yaml**
    ```bash
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: pipeline
    secrets:
      - name: regcred
    ```
    - Create sa role as follows:
    ```bash
    kubectl apply -n $NAMESPACE -f sa.yaml
    ```

    - Lets create a Task Run for `buildah` Task using the `tkn` CLI passing the inputs, outputs and service account
    ```bash
    tkn task start buildah \
      -i source=source \
      -i image=image \
      -s pipeline \
      -n $NAMESPACE
    ```
    The task will start and logs will start printing automatically
    ```
    Taskrun started: buildah-run-vvrg2
    Waiting for logs to be available...
    ```

    - Verify the status of the Task Run
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    Output should look like this
    ```
    NAME                  STARTED          DURATION     STATUS
    buildah-run-zbsrv      2 minutes ago    1 minute     Succeeded
    ```
    - To clean up all Pods associated with all Task Runs, delete all the task runs resources
    ```bash
    kubectl delete taskrun --all -n $NAMESPACE
    ```
    - (Optional) Instead of starting the Task via `tkn task start` you could also use yaml TaskRun
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: TaskRun
    metadata:
      generateName: buildah-task-run-
    spec:
      serviceAccountName: pipeline
      taskRef:
        name: buildah
      inputs:
        resources:
          - name: source
            resourceRef:
              name: source
          - name: image
            resourceRef:
              name: image
    ```
    Then create the TaskRun with `generateName`
    ```bash
    kubectl create -f taskrun.yaml -n $NAMESPACE
    ```
    Follow the logs with:
    ```
    tkn tr logs -f -n $NAMESPACE
    ```

    ## Pipelines

    ### Pipeline Creation

    - Pipelines allows to start multiple Tasks, in parallel or in a [certain order](https://github.com/tektoncd/pipeline/blob/master/docs/pipelines.md#runafter)

    - Create the file **pipeline.yaml**, the Pipeline contains two Tasks
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: Pipeline
    metadata:
      name: test-build-push
    spec:
      resources:
        - name: source
          type: git
        - name: image
          type: image
      tasks:
        - name: test
          taskRef:
            name: java-test
          resources:
            inputs:
              - name: source
                resource: source
        - name: build-push
          taskRef:
            name: buildah
          runAfter: [test]
          resources:
            inputs:
              - name: source
                resource: source
              - name: image
                resource: image
    ```

    - Pipeline defines a list of Tasks to execute in order, while also indicating if any outputs should be used as inputs of a following Task by using the from field and also indicating the order of executing (using the runAfter and from fields). The same variable substitution you used in Tasks is also available in a Pipeline.
    - Create the Pipeline using the command:
    ```bash
       kubectl apply -f pipeline.yaml -n $NAMESPACE
    ```
    - Use the Tekton cli to inspect the created resources
    ```bash
       tkn pipeline ls -n $NAMESPACE
    ```
    The above command should list one Pipeline as shown below:
    ```bash
       NAME              AGE              LAST RUN   STARTED   DURATION   STATUS
       test-build-push   31 seconds ago   ---        ---       ---        ---
    ```

    ### PipelineRun

    #### PipelineRun Creation

    - To execute the Tasks in the Pipeline, you must create a PipelineRun. Creation of a PipelineRun will trigger the creation of TaskRuns for each Task in your pipeline.
    - Create the file **pipelinerun.yaml**
    ```bash
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineRun
    metadata:
      generateName: test-build-push-run-
    spec:
      serviceAccountName: pipeline
      pipelineRef:
        name: test-build-push
      serviceAccountName: pipeline
      resources:
        - name: source
          resourceRef:
            name: source
        - name: image
          resourceRef:
            name: image
    ```
    **serviceAccount** - it is always recommended to have a service account associated with PipelineRun, which can then be used to define fine grained roles.
    - Create the PipelineRun using the command:
    ```bash
    kubectl create -f pipelinerun.yaml -n $NAMESPACE
    ```
    - We will use the Tekton cli to inspect the created resources
    ```bash
    tkn pipelinerun ls -n $NAMESPACE
    ```

    - The above command should list one PipelineRun as shown below:
    ```bash
    NAME                        STARTED         DURATION   STATUS
    test-build-push-run-c7zgv   8 seconds ago   ---        Running
    ```

    - Wait for few minutes for your pipeline to complete all the tasks. If it is successful, you will see something like below.
    ```bash
    tkn pipeline ls -n $NAMESPACE
    ```
    ```
    NAME              AGE              LAST RUN                    STARTED         DURATION    STATUS
    test-build-push   33 minutes ago   test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded
    ```
    - Run again the pipeline ls command
    ```bash
    tkn pipelinerun ls -n $NAMESPACE
    ```
    ```
    NAME                        STARTED         DURATION    STATUS
    test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded
    ```
    If it is successful, go to your container registry account and verify if you have the `cloudnative_sample_app` image pushed.

    - (Optional) Run the pipeline again using the `tkn` CLI
    ```bash
    tkn pipeline start test-build-push \
      -r source=source \
      -r image=image \
      -s pipeline \
      -n $NAMESPACE
    ```
    - (Optional) Re-run the pipeline using last pipelinerun values
    ```bash
    tkn pipeline start test-build-push --last -n $NAMESPACE
    ```

    ## Deploy Application

    - Deploy the app as follows:
    ```bash
    export APP_YAML_URL='https://raw.githubusercontent.com/ibm-cloud-architecture/cloudnative_sample_app_deploy/master/yamls/'
    kubectl apply -n $NAMESPACE -f $APP_YAML_URL/deployment.yaml
    kubectl apply -n $NAMESPACE -f $APP_YAML_URL/service.yaml
    ```
    - Replace the default image with the new image you deployed using Tekton
    - Replace `<DOCKER_USERNAME>` with your username
    ```bash
    export DOCKER_USERNAME='<DOCKER_USERNAME>'
    ```
    - Replace `<SHORT_GIT_HASH>` with the tag of the image you push to the registry, you can go the registry Web UI and verify the tag value.
    ```bash
    export SHORT_GIT_HASH='<SHORT_GIT_HASH>'
    ```
    - Set the environment variable `IMAGE_URL` to the new image url value sing the two previous environment variables `DOCKER_USERNAME` and `SHORT_GIT_HASH`
    ```bash
    export IMAGE_URL=docker.io/${DOCKER_USERNAME}/cloudnative_sample_app:${SHORT_GIT_HASH}
    echo $IMAGE_URL
    ```
    - Replace the image on the deployment
    ```bash
    kubectl set image \
      deployment/cloudnativesampleapp-deployment \
      \*=${IMAGE_URL} \
      -n $NAMESPACE --record
    ```
    - Verify the image is set
    ```bash
    kubectl get deploy \
      cloudnativesampleapp-deployment \
      -o jsonpath='{.spec.template.spec.containers[0].image}' \
      -n $NAMESPACE
    ```
    - Verify if the pods are running:
    ```bash
    kubectl get pods -n $NAMESPACE -l app=cloudnativesampleapp-selector
    ```
    ```
    NAME                          READY   STATUS      RESTARTS   AGE
    cloudnativesampleapp...       1/1     Running     0          82s
    ```
    - Retrieve the service NodePort:
    ```bash
    kubectl describe svc cloudnativesampleapp-service -n $NAMESPACE | grep NodePort
    ```
    ```
    Type:                     NodePort
    NodePort:                 http  30632/TCP
    ```
    In this instance the NodePort assigned is `30632`
    - Get the External Public IP as follows:
    ```bash
    minikube ip
    ```
    ```
    192.168.64.30
    ```
    - Now access the compose the URL of the App using IP and NodePort
    ```bash
    export APP_EXTERNAL_IP=$(minikube ip)
    export APP_NODEPORT=$(kubectl get svc cloudnativesampleapp-service -n $NAMESPACE -o jsonpath='{.spec.ports[0].nodePort}')
    export APP_URL="http://${APP_EXTERNAL_IP}:${APP_NODEPORT}/greeting?name=Carlos"
    echo $APP_URL
    ```
    ```
    http://192.168.64.30:30632//greeting?name=Carlos
    ```
    - Now access the app from terminal or browser
    ```bash
    curl $APP_URL
    ```
    ```bash
    open $APP_URL
    ```

