const days =
[
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"
];

const months =
[
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

const birthDate = new Date(1992, 8, 4);
console.log(`Mi fecha de nacimiento es ${birthDate}`);

const today = new Date();
console.log(`La fecha de hoy es ${today}`);

const ageMiliseconds = today - birthDate;
console.log(`He cumplido ${ageMiliseconds} milisegundos`);

const ageSeconds = ageMiliseconds / 1000;
console.log(`He cumplido ${ageSeconds} segundos`);

const ageMinutes = ageSeconds / 60;
console.log(`He cumplido ${ageMinutes} minutos`);

const ageHours = ageMinutes / 60;
console.log(`He cumplido ${ageHours} minutos`);

const ageDays = ageHours / 24;
console.log(`He cumplido ${ageDays} dias`);

const ageYears = ageDays / 365;
console.log(`He cumplido ${ageYears} años`);

const nextBirthDay = () => new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
console.log(`Mi proximo cumpleaños es el ${nextBirthDay()}`);

const getDay = (day) => days[day];
console.log(`El dia de mi cumpleaños es ${getDay(nextBirthDay().getDate())}`);