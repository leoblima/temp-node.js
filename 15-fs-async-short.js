const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromisse = util.promisify(readFile)
// const writeFilePromisse = util.promisify(writeFile)


const start = async() =>{
    try { //Aqui estamos lendo os arquivos
        const primeiro = await readFile('./content/primeiro.txt', 'utf8')
        const segundo = await readFile('./content/segundo.txt', 'utf8')
        await writeFile('./content/textando.txt', `Isto é foda parça!: ${primeiro}`)
        console.log(primeiro, segundo)
    }
 catch (error){
console.log(error)
 }
}

start()

// const getText = (path) =>{//Assim é como se faz em javascript. Em node temos um "atalho"
//     return new Promise((resolve, reject)=> {//Criamos uma promessa para poder depois usar o await
//         readFile(path, 'utf8', (err, data) => {//Lendo o arquivo como uma callback function 
//     if(err){
//         reject(err)//Devolvendo o erro. reject é pronto pelo javascript
//     } else {
//         resolve(data)//Outro modelo pronto é só devolver a variavel
//     }
// })
//     })
// }

// getText('./content/primeiro.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))