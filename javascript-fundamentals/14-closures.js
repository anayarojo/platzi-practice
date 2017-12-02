function greetFamily(apellido) {
    return function greetFamilyMember(nombre) {
        console.log(`Hola ${nombre} ${apellido}`);
    }
}

const greetGomez = greetFamily("Gomez");
const greetPerez = greetFamily("Perez");
const greetRomero = greetFamily("Romero");

greetGomez("Pedro");
greetGomez("Juan");
greetGomez("Laura");
greetGomez("Mónica");

greetPerez("Dario");
greetPerez("Martin");
greetPerez("Julieta");

greetRomero("Jorge");