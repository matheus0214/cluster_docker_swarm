## Learning to create cluster with docker swarm



#### Build docker image

1 - go to directory **/aplication**<br />
2 - docker build -t **name image** . *(dot in final is required)*<br />

#### Create cluster
1 - docker swarm init<br />
2 - docker swarm deploy -c **docker-compose.yml** name_cluster<br />

<blockquote>
If using Windowns check port to connect is using<br />
netstat -ano | findstr :port<br />
taskkill /f /pid (Pid from port)
</blockquote>
