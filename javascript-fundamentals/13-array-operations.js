
function sum(...numbers) {
    return numbers.reduce(function (acum, number) {
        acum += number
        return acum
    }, 0)
}

const dobles = (...numbers) => numbers.map(number => number * 2)

const pares = (...numbers) => numbers.filter(number => number % 2 == 0)

//reduce:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
//push:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push
//map:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
//filter:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter