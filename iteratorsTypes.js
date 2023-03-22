// Definir el arreglo de edades
const edades = [27, 33, 41, 19, 56, 22, 15, 47, 30];

// forEach(): Recorrer cada elemento del arreglo
console.log("Recorriendo cada elemento del arreglo usando forEach():");

edades.forEach(function(edad) {
    console.log(edad);
});

// map(): Crear un nuevo arreglo a partir del original
console.log("\nCreando un nuevo arreglo a partir del original usando map():");
const edadesDoble = edades.map(function(edad) {
  return edad * 2;
});

console.log(edadesDoble);

// filter(): Crear un nuevo arreglo filtrando elementos según una condición
console.log("\nCreando un nuevo arreglo filtrando elementos según una condición usando filter():");
const mayoresDe30 = edades.filter(function(edad) {
    return edad > 30;
});

console.log(mayoresDe30);

// findIndex(): Encontrar el índice de un elemento que cumple una condición
console.log("\nEncontrando el índice del primer elemento que cumple una condición usando findIndex():");
const indiceMenorDe20 = edades.findIndex(function(edad) {
    return edad < 20;
});

console.log(indiceMenorDe20);

// reduce(): Reducir los elementos del arreglo a un solo valor
console.log("\nReduciendo los elementos del arreglo a un solo valor usando reduce():");
const sumaDeEdades = edades.reduce(function(acumulador, edad) {
    return acumulador + edad;
});

console.log(sumaDeEdades);
