var name = "Sacha"

function greet() {
    var name
    if (true) {
        name = "Eric"
    }

    console.log(`Hola ${name}`)
}

greet("Sacha")
console.log(`La variable name tiene el valor ${name}`)

function greetToSacha() {
    const name = "Sacha"

    for (let i = 0; i < 10; i++) {
        console.log(`Hola ${name}`)
    }
}

greetToSacha()