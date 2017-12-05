function platzom(str) {
    //declarations
    let translation = str;

    //functions
    const reverse = str => str
        .split("")
        .reverse()
        .join("");

    const minMay = str => str
        .split("")
        .map((value, key) => (key % 2 == 0 ? value.toUpperCase() : value.toLowerCase()))
        .join("");

    // Si la palabra original es un palíndromo,
    // ninguna refla anterior cuenra y se devuelve
    // la misma palabra intercalando mayúsculas y minúsculas

    if (str == reverse(str)) {
        return minMay(str);
    }

    // Si la palabra termina en "ar",
    // se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);
    }

    // Si la palabra inicia con Z,
    // se le añade "pe" al final
    if (str.toLowerCase().startsWith("z")) {
        translation = translation + "pe";
    }

    // Si la palabra traducida tiene 10 o más letras,
    // se debe partir a la mitad y unir con un guión medio
    const length = translation.length;
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2), length);
        translation = `${firstHalf}-${secondHalf}`;
    }

    return translation;
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS

/*
 * 
 *  MÉTODOS ÚTILES 
 *
 */

let text = "hola";
str.split("") == ["h", "o", "l", "a"]; // Converte el texto en un arreglo de caracteres

let arr = ["h", "o", "l", "a"]; // Converte un arreglo de caracteres en texto
arr.join("") == "hola";

str.toUpperCase(); // Convierte el texto a mayúscula
str.toLowerCase(); // Convierte el texto en minúsculas
str.endsWith("\""); // Evalúa si el string termina con un texto
str.startsWith("\""); // Evalúa si un string comienza con un texto
str.slice(inicio, final); // Partir un carácter
str.length; // Cuantos caracteres tiene el string