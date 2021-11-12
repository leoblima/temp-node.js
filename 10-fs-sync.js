const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
// fs.readFileSync = ('fs'); 
console.log('start')
const primeiro = readFileSync('./content/primeiro.txt', 'utf-8')
const segundo = readFileSync('./content/segundo.txt', 'utf-8')

console.log(primeiro, segundo)

writeFileSync('./content/result-sync.txt',`Este é o resultado : ${primeiro}, ${segundo}`, {flag: 'a'})
console.log('realizada a tarefa')
console.log('comecando a proxima')
