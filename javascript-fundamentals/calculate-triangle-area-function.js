//calculate triangle area with a function

let base = 5;
let height = 7;

//let triangleArea = function(base, height) {
//    return base * height / 2;
//};

// let triangleArea = function triangleArea(base, height) {
//     return base * height / 2;
// };

let triangleArea = (base, height) => base * height / 2;

console.log(
  `El área del trián gulo de base ${base} y altura ${height} es: ${triangleArea(
    base,
    height
  )}`
);