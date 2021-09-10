* `docker network create refresh`
* `docker run -d --network refresh -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=example --name mongo -p 27017:27017 mongo`
* `docker run -d --network refresh -e ME_CONFIG_MONGODB_ADMINUSERNAME=root -e ME_CONFIG_MONGODB_ADMINPASSWORD=example -e ME_CONFIG_MONGODB_SERVER=mongo -p 8081:8081 mongo-express`

You have to create .env file into server folder.
- PORT=5000
- JWT_ACCESS_SECRET=
- JWT_REFRESH_SECRET=
- SMTP_HOST="smtp.gmail.com" *enable IMAP, enable unreliable applications*
- SMTP_PORT=587
- SMTP_USER=
- SMTP_PASSWORD=
- API_URL=http://localhost:5000
- CLIENT_URL=http://localhost:8082