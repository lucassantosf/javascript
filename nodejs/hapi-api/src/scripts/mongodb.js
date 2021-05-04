// docker ps
// docker exec -it 493d9f38638a mongo -u lucas -p 123456 --authenticationDatabase herois

//mostrar databases
show dbs

//mudar contexto p/ database
use herois

//mostrar colecoes de documentos
show collections

//inserir um registro
db.herois.insert({
    nome: 'flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

//exibir dados 
db.herois.find().pretty()

//inserir vários
for(let i = 0 ;  i <=1000 ; i++){
    db.herois.insert({
        nome: `clone-${i}`,
        poder: 'velocidade',
        dataNascimento: '1998-01-01'
    })
}

//limitar consulta
db.herois.find().limit(1000).sort({nome:-1})
//selecionar alguma coluna
db.herois.find({},{poder:1,_id:0})

//create
db.herois.insert({
    nome: 'flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

//read
db.herois.find()

//update
db.herois.update({_id: ObjectId('608b028c4d50d0ec97ef8e34')},{nome:'Mulher maravilha'})

db.herois.update({_id: ObjectId('608b028c4d50d0ec97ef8e34')},{ $set: {nome:'Lanterna Verde'}})
db.herois.update({poder: 'velocidade'},{ $set: {poder:'força'}})

//delete
db.herois.remove({})
db.herois.remove({nome>''})