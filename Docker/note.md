# `Section 1. Dive into Docker`

Note:<br>

1. Image is a single file with all the depencies and config required to run a program (`File System Snapshot`)
2. Container is an instance of an image which runs a program. Containers use `namespacing` and `control groups`

# `Section 2. Manipulating Containers with the Docker Client`

Note:<br>

1. docker run `<image_name>` `<command>` <br>
   `docker run` = `docker create` + `docker start`<br>
   `image_name` : Name of the image<br>
   `command`: Name of the overriden command when start a image
2. docker ps<br>
   List all running containers
3. docker ps -a<br>
   List all containers
4. docker start -a `<container_id>`<br>
   Show output from a container to your termial
5. docker system prune<br>
   Remove all container and image cache
6. docker logs `<container_id>`<br>
   Show all printed output from a container
7. docker stop `<container_id>`<br>
   Stop a container (10s wait)
8. docker kill `<container_id>`<br>
   Kill a container instaly
9. docker exec -it `<container_id>` `<command>`<br>
   Run another command inside a container

# `Section 3. Building Custom Images Through Docker Server`

Note:

1. `Flow when creating a Dockerfile`
    1. Specify a base image
    2. Run some commands to install additional programs
    3. Specify a command to run on container startup
2. Dockerfile tell Docker server what to do
   `<command>` `<argument>`<br>
   Ex: FROM alpine

3. After using `docker build .` the end result is we got an image contains our desired program and a command to run when we run that image as a container

4. The order of command in Docker file matter! Put changes as far down as possible so we can make use of cache for building image faster

5. Use `docker build -t <docker_id>/<repo_name>:<version> .` to tag an image

6. Use `docker commit -c <command> <container_id>` to create an image snapshot out of a container

# `Section 4. Building Real Projects with Docker`

Note:

1. COPY `<host_path>` `<temp_container_path>`<br>
   Use COPY command to copy build file from host OS to temporary container in build process
2. `docker run -p <port_local>:<port_container> <image_name>`<br>
   Port mapping is a runtime constraint which means it's something that we can only change when we run/start a container
3. WORKDIR `<container_path>`
   Add a working directory in container to avoid copy all file into root directory of a container
4. `Developers should minimizing cache busting and rebuilds`

# `Section 5. Docker Compose with Multiple Local Containers`

Note:

`Docker-compose`

1. Used to start up multiple Docker containers at the same time
2. Automates some of the long-winded arguments we were passing to 'docker run'

`Docker-compose syntax`

1. services ~ containers
2. image: Use image from dockerhub
3. build: `<path>`<br>
   Usually find a Dockerfile in the current folder by using `.`

`Docker-compose command`

1. `docker-compose up`<br>
   ~ `docker run <image_name>`
2. `docker-compose up --build`<br>
   ~ `docker build .` + `docker run <image_name>`<br>
3. `docker-compose up -d`<br>
   Run in background
4. `docker-compose down`<br>
   Stop containers
5. `restart`: `<value>`<br>
   Choose when to restart a service
6. `docker-compose ps`<br>
   Show status of your container in the folder has Dockerfile
