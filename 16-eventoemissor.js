const EventEmitter = require('events');

const customEmmiter = new EventEmitter()

customEmmiter.on('response', (partido,num)=>{
    console.log(`dados recebidos: partido: ${partido} e numero: ${num} `)
})
customEmmiter.on('response', ()=>{
    console.log(`Outra lógica aqui  `)
})

customEmmiter.emit('response', 'PT', 13)