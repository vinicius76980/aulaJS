//const numeros= [1,2,3,4,5]
//const nomes = ["Ana" , "Caio" , "Lucas" , "Jaco" , "Luna" ]

//console.log (numeros[0])

//console.log (nomes[0])


//console.log(nomes.length)

//for (let  i = 0; i < nomes.length; i++){

 // console.log(nomes[i])

//}

//const frutas = ["Maca","Laranja","Uva","Morango"]

//for (const fruta of frutas){

//console.log (fruta)

//}



//const listaNumeros = [10,25,8,42,15,7]

//let soma = 0;

//for (const numero of listaNumeros ){
//soma += numero
//}
//console.log("Numeros  " , listaNumeros)
//console.log("Soma ", soma)

//const Listanotas = [7.5,9.0,6.5,8.8,10.0,5.5];

//let maiornota = Listanotas[0]

//for (const nota of listaNumeros){

//if(nota > maiorNota)
//maiorNota = nota
//}
 
//consolfe.log("Maior nota:" + maiorNota)


const pessoa = {

    nome: "Lucas",
    idade: 33,
    email: "email@teste.com",
    genero: "497.755.999-99"
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])

for (const chave in pessoa){

console.log(pessoa[chave])


}


const aluno = {

nome: "Ana",
matricula: "202609021",
curso: "JavaScript",
nota: 9.5

}

console.log("Dados do Aluno:\n")

for( const chave in aluno){

const valor = aluno[chave]
 console.log("chave:" + chave + "valor:" + valor )    
}
  

const carrinho =  



    
[
    
    {prodoto:"calca jeans",  preco: 60.90, quantidade: 2 },
    
    
    
    
    
    
    
    {prodoto:"tenis", preco: 60.90, quantidade: 2 },] 


    for (const itemDoMercado of carrinho){

        console.log(itemDoMercado.produto)
        console.log(itemDoMercado.preco)


    }

