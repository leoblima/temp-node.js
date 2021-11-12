// npm - comando global, vem com o node
//  npm --version

// dependencia local - usar somente no projeto atual
//  npm i <nomedopacote>

// dependencia global - usar em todos os projetos
// npm install -g <nomedopacote>
// sudo install -g <nome do pacote> (mac)

// package.json - manisfesto ele carrega informações importantes sobre o projeto
// manual approach (cria um package.json na raiz, criando propriedades etc)
// npm init (passo a passo, apertar enter para pular ) criando o package.json automaticamente
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2,[1,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)
console.log("Funfou porra!")