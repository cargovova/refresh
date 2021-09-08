* `docker network create refresh`
* `docker run -d --network refresh -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=example --name mongo -p 27017:27017 mongo`
* `docker run -d --network refresh -e ME_CONFIG_MONGODB_ADMINUSERNAME=root -e ME_CONFIG_MONGODB_ADMINPASSWORD=example -e ME_CONFIG_MONGODB_SERVER=mongo -p 8081:8081 mongo-express`