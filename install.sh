#./bin/bash

echo "-----Initiated Process-------"

sudo apt-get update -y

sudo apt-get docker.io -y

sudo chown ubuntu /var/run/docker.sock

sudo mkdir project

cd project 

git clone https://github.com/ParasRajput810/Full_stack_nodejs_APP.git

cd Full_stack_nodejs_APP

cd Todo_React_APP

docker build -t frontend_image .

cd ..

cd Todo_React_APP_Backend

docker build -t backend_image .

docker pull mysql 

docker network create --driver bridge my_bridge_network

docker run -itd --name mysql --network my_bridge_network -e MYSQL_ROOT_PASSWORD=Paras@8101999 mysql 

docker run -itd --name todoApp --network my_bridge_network backend_image

docker run -itd --name ReactApp --network my_bridge_network -p 3000:3000 frontend_image

echo "-----Done intiated all processes-----"

