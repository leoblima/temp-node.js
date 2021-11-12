
const {writeFileSync} = require('fs')

for(let i=0; i<10000; i++){
    writeFileSync('./content/textao.txt', `Olha mundão!! ${i} \n`, {flag: 'a'} )
}

