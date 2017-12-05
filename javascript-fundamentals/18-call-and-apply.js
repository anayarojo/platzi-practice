const person = {
    nombre: 'Sacha',
    apellido: 'Lifszyc'
}

function greet(veces, uppercase) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    str = uppercase ? str.toUpperCase() : str
    for (let i = 0; i < veces; i++) {
        console.log(str)
    }
}

const params = [3, true]
saludar.call(sacha, ...params)
saludar.call(sacha, 3, true)
saludar.apply(sacha, [3, true])