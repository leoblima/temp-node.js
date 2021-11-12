const {readFile, writeFile} = require('fs');
// const fs = require('fs');
// fs.readFileSync = ('fs'); 
console.log('start')
readFile('./content/primeiro.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return null;
    }
    const primeiro = result;
    readFile('./content/segundo.txt', 'utf8', (err, result) =>{
        if(err){
        console.log(err)
        return null;
    }
    const segundo = result;
    writeFile('./content/result-async.txt', 
    `Este é o resultado : ${primeiro}, ${segundo}`,
     (err, result) =>{
        if(err){
            console.log(err)
            return
        }
         console.log('tarefa executada')
    })
    })
})
console.log('começando a proxima')