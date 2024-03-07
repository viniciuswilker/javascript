let num = [5,8,4,6,7]
// num[3] = 6   // Acrescentar um valor no array - [3] é o INDICE e o 6 o VALOR que vai para a variavel
// num.push(7 ) // Acrescenta o valor ao FINAL
// num.sort()    // Coloca os valores da variavel em CRESCENTE

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if ( pos == -1){
    console.log('O valor não foi encontrado!')
} else{
console.log(`O valor 8 está na posição ${pos}`)
}