//for (let i = 1; i <= 10; i++) {
//console.log(i);
//}

//let numero = Number(prompt("Digite um número:"));

//for (let i = 1; i <= 10; i++) {
    //console.log(numero + " x " + i + " = " + (numero * i))}




//let numeros = Number(prompt("Digite um número inteiro positivo:"));

//let soma = 0;

//
//}

//console.log("A soma é: " + soma);


//for (let i = 1; i <= 50; i++) {
   // if (i % 2 === 0) {
     //   console.log(i);
   // }
//}


//let numeroSecreto = Math.floor(Math.random() * 100) + 1;

//let tentativa = Number(prompt("Adivinhe o número entre 1 e 100:"));

//if (tentativa === numeroSecreto) {
 //   console.log("Parabéns! Você acertou!");
//} else {
 //   console.log("Você errou!");
  //  console.log("O número era: " + numeroSecreto);
//}   


const lanches = [

{produto: "Batata",  preco:20.90 , quantidade: 1 } ,
{produto: "Hanburguer", preco:30.00 , quantidade: 1 } ,
{produto: "Refri",  preco:9.00 , quantidade: 1  } ,
{produto: "Nugget",  preco:13.50 , quantidade: 1 } ,
]

const preco = [30.00,]
const MaiorPreco = MaiorPreco;(preco)
 
console.log(MaiorPreco)

for (const item of lanches){
console.log(item.produto)
console.log(item.quantidade * item.preco)
}
let totalGeral = 0;

for (const item of lanches) {
  totalGeral += item.quantidade * item.preco;
}

console.log("Total geral: " + totalGeral);

