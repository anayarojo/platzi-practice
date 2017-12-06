// ----- FORMA 2 ----------//

function* fibonacci() {
    let a = 0, b = 1
    //yield a - hace que la siguiente vez que se ejecute 
    // la función continue en la siguiente linea.

    while (true) {
        let f = a
        a = b
        b = f + a
        let reset = yield f
        if (reset) a = 0, b = 1
    }
}

const fibo = fibonacci()
// Comandos para la ejecución en la consola
fibo
fibo.next()
fibo.next(reset)