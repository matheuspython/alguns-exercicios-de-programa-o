/*
*escreva uma função que recebe um numero e
*retorne em seguida se:
*o numero é divisivel por 3 = fizz
*o numero é divisivel por 5 = buzz
*o numero é divisivel por 3 e 5 = fizzbuzz
*o numero NÃO é divisivel por 3 e 5 = retorna o proprio numero
--------------------------------------------------------------------
*checar se o numero é realmente um número = retorna o proprio numero
*use a função com os numeros de 0 a 100
*/

function fizzBuzz(numero) {

    if (typeof numero !== 'number') return `${numero} não é um numero`
    if (numero % 3 === 0 && numero % 5 === 0) return 'fizzBuzz'
    if (numero % 5 === 0) return 'buzz'
    if (numero % 3 === 0) return 'fizz'
    return numero

}
console.log(fizzBuzz('rew'))
for (let i = 0; i < 101; i++) {
    console.log(i, fizzBuzz(i))
}