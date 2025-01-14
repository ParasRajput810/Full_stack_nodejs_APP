#./bin/bash

echo "-----Initiated Process-------"

sudo apt-get update -y

sudo apt-get install docker.io -y

sudo chown ubuntu /var/run/docker.sock

cd Todo_React_APP

docker build -t frontend_image .

cd ..

cd Todo_React_APP_Backend

docker build -t backend_image .

docker pull mysql 

docker network create --driver bridge my_bridge_network

docker run -itd --name mysql --network my_bridge_network -e MYSQL_ROOT_PASSWORD=Paras@8101999 mysql 

echo "Waiting for MySQL to be ready..."
until docker exec mysql mysql -uroot -pParas@8101999 -e "SELECT 1;" > /dev/null 2>&1; do
    sleep 2
    echo "Waiting for MySQL..."
done
echo "MySQL is up and running."


docker run -itd --name todoApp --network my_bridge_network backend_image

docker run -itd --name ReactApp --network my_bridge_network -p 3000:3000 frontend_image

echo "-----Done intiated all processes-----"

