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
