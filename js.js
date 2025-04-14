const arry = [1,2,3,4,5,6,7,8]

const pares = arry.filter((num) =>{
    return num % 2 === 0
})

console.log(pares);

const arryy = [1,2,3,4,5,6,7,8]

const impares = arry.filter((num) =>{
    return num % 2 === 1
})

console.log(impares)


const arryu = [1,2,3,4,5,6,7,8]

const maior = arry.filter((num) =>{
    return num > 5
})

console.log(maior)


const arryi = ["GustaGay", "Japagay", "AlyGay", "Migay"]

const maior5 = arryi.filter((arryi) => arryi.length > 5)

console.log(maior5)

const pessoa = [
    { nome: 'gab', idade: 20 },
    { nome: 'gay', idade: 25 },
    { nome: 'ana' }] 

    
const propriedade = pessoa.filter(blaziken => blaziken.idade  !== undefined)

console.log(propriedade)

const pessoaa = [ "Pessoa", "Gustavo", "Gabriel", "Guilherme"] 

const mome = pessoaa.filter(pessoaa => pessoaa.startsWith("G") )
console.log(mome)