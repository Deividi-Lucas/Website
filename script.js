let name = "Deividi"
let idade = 19
let pai = "davi"
let msg = 'Já adicionado o Javascript nesta página'
let idadepai = 50

console.log(name)

console.log(idade)

console.log(msg)

console.log("bem vindo ao curso.")

// object 

let id = {
    idade
}
console.log(id)

// Array

let familia = [26, 30, 35, 49];


console.log(familia)

// functions 
// verbo mais substantivo = mais facil lembrar
let corSite = ''
function resetacor(cor) {
    corSite = cor
};


console.log(corSite)


// dois tipo de functions, 
// realiza uma tarefa e não devolve nada.
function dizerNome() {
    console.log('deividi')
}

dizerNome()

// realiza uma tarefa e retorna 
function multiplicarpordois(valor) {
    return valor * 2
}

console.log(multiplicarpordois(5))

//Operadores aritméticos (matématico)
// Operadores atribuição
//Operadores de comparação
//Operadores Lógicos
// Operadores Bitwise

// ultilizando if e else
let horas = 7

if (horas > 6 && horas < 12) {
    console.log("Bom dia!")
}
else if (horas > 12 && horas < 18) {
    console.log("Boa Tarde!")
}
else {
    console.log("Boa noite!")
};


let permissao // comum, Premium, diretor
permissao = 'premium'
switch (permissao) {
    case 'comum':
        console.log("usuário comum")
        break;
    case 'premium':
        console.log("usuário Premium")
        break;
    case "Diretor":
        console.log("Usuário Diretor")
        break

    default:
        console.log("Usuário não reconhecido!")
        break;
}


// for // while // do.. while// for ..in //for of 
//Loops   for ([inicial];[condição];[expressão final]){        };

for (let contador = 0; contador <= 4; contador++ ) {
    console.log("Estou fazendo loop")
}

// while loop

let i = 5

while (i < 6){
    console.log('I é menor que 6')
    break
    i = i +1
}

const pessoa = {
    nome: 'deividi',
    idade: 19 
}

for(let chave in pessoa) {
    console.log(chave,pessoa.nome)
}
