
//PRÁTICA GUIADA 1
/*
function nomeEcor (nome, cor) {
    const frase = `A cor favotita de ${nome} é ${cor} !`

    console.log(frase)
}

const nomeUser = prompt("Qual é o seu nome ?")
const corFavorita = prompt("Qual é a sua cor favorita ?")

nomeEcor(nomeUser, corFavorita)

//PRÁTICA GUIADA 2
console.log(`Jesus é o "caminho" a verdade e a vida`)
*/
//PRÁTICA GUIADA 3
/*
const nomeMaiusc = nome.toUpperCase()
const nomeQuant = nome.length()
const IncluaA = nome.includes("a")
console.log(nome.length)
*/

//EXERCÍCIO
function cadastro (nome, email) {
    const frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome} !`

    console.log(frase)

    const trocaLetra = frase.replaceAll('r',"x")
console.log(trocaLetra)

    const temArroba = email.includes('@')
console.log(`O email enviado tem '@' ?`, temArroba)

}

const nomeUser = prompt("Qual é o seu nome ?")
const emailUser = prompt("Qual é seu email ?")

cadastro(nomeUser, emailUser)
console.log(nomeUser.length)

