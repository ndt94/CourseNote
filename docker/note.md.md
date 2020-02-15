---
description: Note about Docker course
---

# note

[Permalink](https://github.com/ndt94/CourseNote/blob/29f2c5979280d0c76c7ca4905b6496b6c1a4fa59/Docker/note.md)

 94 lines \(71 sloc\) 3.23 KB

## `Section 1. Dive into Docker`

Note:  


1. Image is a single file with all the depencies and config required to run a program \(`File System Snapshot`\)
2. Container is an instance of an image which runs a program. Containers use `namespacing` and `control groups`

## `Section 2. Manipulating Containers with the Docker Client`

Note:  


1. docker run `<image_name>` `<command>`  `docker run` = `docker create` + `docker start`  `image_name` : Name of the image  `command`: Name of the overriden command when start a image
2. docker ps  List all running containers
3. docker ps -a  List all containers
4. docker start -a `<container_id>`  Show output from a container to your termial
5. docker system prune  Remove all container and image cache
6. docker logs `<container_id>`  Show all printed output from a container
7. docker stop `<container_id>`  Stop a container \(10s wait\)
8. docker kill `<container_id>`  Kill a container instaly
9. docker exec -it `<container_id>` `<command>`  Run another command inside a container

## `Section 3. Building Custom Images Through Docker Server`

Note:

1. `Flow when creating a Dockerfile`
   1. Specify a base image
   2. Run some commands to install additional programs
   3. Specify a command to run on container startup
2. Dockerfile tell Docker server what to do `<command>` `<argument>`  Ex: FROM alpine
3. After using `docker build .` the end result is we got an image contains our desired program and a command to run when we run that image as a container
4. The order of command in Docker file matter! Put changes as far down as possible so we can make use of cache for building image faster
5. Use `docker build -t <docker_id>/<repo_name>:<version> .` to tag an image
6. Use `docker commit -c <command> <container_id>` to create an image snapshot out of a container

## `Section 4. Building Real Projects with Docker`

Note:

1. COPY `<host_path>` `<temp_container_path>`  Use COPY command to copy build file from host OS to temporary container in build process
2. `docker run -p <port_local>:<port_container> <image_name>`  Port mapping is a runtime constraint which means it's something that we can only change when we run/start a container
3. WORKDIR `<container_path>` Add a working directory in container to avoid copy all file into root directory of a container
4. `Developers should minimizing cache busting and rebuilds`

## `Section 5. Docker Compose with Multiple Local Containers`

Note:

`Docker-compose`

1. Used to start up multiple Docker containers at the same time
2. Automates some of the long-winded arguments we were passing to 'docker run'

`Docker-compose syntax`

1. services ~ containers
2. image: Use image from dockerhub
3. build: `<path>`  Usually find a Dockerfile in the current folder by using `.`

`Docker-compose command`

1. `docker-compose up`  ~ `docker run <image_name>`
2. `docker-compose up --build`  ~ `docker build .` + `docker run <image_name>` 
3. `docker-compose up -d`  Run in background
4. `docker-compose down`  Stop containers
5. `restart`: `<value>`  Choose when to restart a service
6. `docker-compose ps`  Show status of your container in the folder has Dockerfile

