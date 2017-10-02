document.addEventListener("DOMContentLoaded", function(){

  var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

var nameLength = cities.map(function(element){
return element.length;
});

console.log(nameLength);

//Zadanie 1

function randomize(param1, param2, callback){
if(typeof callback !== "function"){
  return false;
  console.log("not a function")
}
return callback(param1, param2);
}

var num = randomize(10, 20, function(a, b){
  var rnd = Math.floor(Math.random()*(b-a)+a);
  return rnd;
});

console.log(num);



//2

var animals = ["cat", "shrimp", "giraffe"];

animals.forEach(function(element){console.log(element)});

//3

var years = [1995, 1856, 2014, 1987];

var ages = years.map(function(element){
  return 2017- element;
});
console.log(ages);

//4

var sum = nameLength.reduce(function(prev,curr){
  return prev + curr

});
console.log(sum);

var result = nameLength.reduce(function(prev,curr){
  return prev * curr

});
console.log(result);


});
