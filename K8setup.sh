set -e

cd k8s

kubectl apply -f Namespace.yml

echo "########### MYSQL_Deployment_Started #############"  

kubectl apply -f mysql_secret.yml

kubectl apply -f mysql_deployment.yml

kubectl wait --for=condition=ready pod -l app=mysql --timeout=600s

kubectl apply -f mysql_service.yml

echo "########### MYSQL_Deployment_Completed ##############"

sleep 5

echo "############# Backend_Deployment_Started ################"

kubectl apply -f backend_secret.yml

kubectl apply -f backend_configMap.yml

kubectl apply -f backend_deployment.yml

kubectl apply -f backend_service.yml

echo "############## Backend_Deployment_Completed ################"

sleep 5

echo "############## Frontend_Deployment_Started #################"

kubectl apply -f frontend_deployment.yml

kubectl apply -f frontend_service.yml

echo "############## Frontend_Deployment_Completed ################"