

function getAverage(...params){
  var sum = params.reduce((prev, curr) => prev + curr); //sposób na sumę tablicy!!!
  return sum / params.length;
}


//Zadanie 1
let myName = "Weronika";

let letters = [...myName];
console.log(letters);

//Zadanie 2
let fruits = ["appe", "pear", "plum"];
let vegetables = ["tomato", "potato"];
let mix = [...vegetables, ...fruits];
console.log(mix);
