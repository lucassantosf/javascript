/* listar imagens abertas */
docker-ps

/* entrar no container para executar qualquer comando neste container */
docker exec -it postgres /bin/bash

/* Criar container docker para postgres */
docker run \
    --name postgres\
    -e POSTGRES_USER=lucas\
    -e POSTGRES_PASSWORD=123456\
    -e POSTGRES_DB=heroes\
    -p 5432:5432\
    -d \
    postgres

/* Criar container para o adminer - gerenciar o banco do postgres no browser */
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres \
    -d \
    adminer

/* Criar container com imagem do MongoDB */
docker run\
    --name mongodb\
    -p 27017:27017\
    -e MONGO_INITDB_ROOT_USERNAME=admin\
    -e MONGO_INITDB_ROOT_PASSWORD=123456\
    -d \
    mongo:4

/* Criar client para conectar no mongodb no browser */
docker run\
    --name mongoclient\
    -p 3000:3000\
    --link mongodb:mongodb\
    -d \
    mongoclient/mongoclient

/* criar usuario via comando para acessar o mongodb */
docker exec -it mongodb\
    mongo --host localhost -u admin -p 123456 --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'lucas', pwd: '123456', roles: [{role: 'readWrite',db: 'herois'}]})"

