const nombre = 'Sacha'
const dias = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
]

function run() {
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++) {
  const kms = run()
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms`)

math.floor; // Rendondea hacia abajo 3.9 = 3
math.ceil; // Redondea para arriba 3.1 = 4
math.round; // Redondea dependiendo 3.1 = 3, 3.5 = 4