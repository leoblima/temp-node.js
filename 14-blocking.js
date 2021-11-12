const http = require('http');

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('Pagina Inicial')
}

    if(req.url === '/about'){
    // Codigo Blocking
    for(let i=0; i <1000; i++){
     for(let j=0; j <1000; j++){
    console.log(`${i} ${j}`)
     }
    }
    res.end('Sobre')
}
})

server.listen(5000, () => {
    console.log('Server est ouvindo no porto 5000...')
})
