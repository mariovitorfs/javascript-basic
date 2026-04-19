let nome = "Mário"

console.log(nome) // retorna o valor da variável nome, que é "Mário"
console.error(nome) // retorna o valor da variável nome, mas indica que é um erro, mesmo que não seja necessariamente um erro real
console.warn(nome)  // aviso, não é um erro, mas é algo que deve ser observado
console.info(nome) // retorna o valor da variável nome, mas indica que é uma informação

// window.alert (exibe um alerta na tela)
window.alert("Olá, mundo!") // exibe um alerta com a mensagem "Olá, mundo!"

// window.confirm (exibe uma caixa de confirmação)
let resposta = window.confirm("Você tem certeza?") // exibe uma caixa de confirmação com a mensagem "Você tem certeza?" e armazena a resposta (true ou false) na variável resposta
console.log(resposta) // exibe a resposta no console

// window.prompt (exibe uma caixa de prompt para o usuário inserir um valor)
let idade = window.prompt("Qual é a sua idade?") // exibe uma caixa de prompt com a mensagem "Qual é a sua idade?" e armazena o valor inserido na variável idade
console.log(idade) // exibe a idade no console

//window é o objeto global que representa a janela do navegador. Ele contém várias propriedades e métodos que permitem interagir com a janela, como alertas, confirmações, prompts, manipulação de eventos, entre outros.


// Document é um objeto que representa o conteúdo da página web. Ele é uma propriedade do objeto window e permite acessar e manipular os elementos HTML da página, como criar novos elementos, alterar o conteúdo, adicionar eventos, etc.