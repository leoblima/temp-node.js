const http = require('http')
// usando Emissor de Evento API
const server = http.createServer()
// emitir uma requisição de evento
// subcreve/ escuta / responde 
server.on('request', (req, res) => {
    res.end('Bem vindo, Bruxo!')
})

server.listen(5000)