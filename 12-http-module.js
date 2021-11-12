// res.write('Welcome a nossa pagina bruxa')
// res.end()
const http = require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('Welcome a nossa pagina bruxa')
}
if(req.url === '/about'){
    res.end(
        `<h1> Ops! </h1>
        <p> Não podemos achar a pagina que voce esta procurando</p>
        <a href= "/"> back home </a>
        `  
    )
}

})
server.listen(5000)


// Ferramenta de NPM nutty professor movie npmjs.com
// Achar as ferramentas para fazer várias coisas. 