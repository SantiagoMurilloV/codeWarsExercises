
// Create a function that takes an array of objects representing people, 
// and returns a new array with the people ordered by age, from youngest to oldest.




function sortByAge(people) {
    people.sort(function (a, b) {
            return  a.edad - b.edad;
    });
    console.log(people);
}

let listOfPeople = [
    { name: "Juan", age: 30 },
    { name: "Pedro", age: 25 },
    { name: "María", age: 35 },
    { name: "Ana", age: 20 }
];


sortByAge(listOfPeople);
  // Output: [
  //   {nombre: "Ana", edad: 20},
  //   {nombre: "Pedro", edad: 25},
  //   {nombre: "Juan", edad: 30},
  //   {nombre: "María", edad: 35}
  // ]
