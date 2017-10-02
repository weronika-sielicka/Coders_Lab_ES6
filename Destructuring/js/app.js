let array = [ "snow", "rain", "sun" ];
let [a, ,b] = array;
console.log(a + " " + b);

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

let {type, autoStart} = slider;


//Zadanie 1
let names = ["Ala", "Weronika", "Michał"];
let [name1, name2, name3] = names;

//Zadanie 2
let generateRandomNumbers = () => {
  let a = [];
  while (a.length < 6){
    let random = Math.floor(Math.random() * 10);
    a[a.length] = random;
  }
  return a;
}

let [x, ,y] = generateRandomNumbers();

//Zadanie 3
 function getAnimal(){
   return {
       name: "Mruczek",
       age: 10,
       getVoice: () => "miau miau"
   }
 }

 let {name: catName, getVoice: catVoice, age: catAge} = getAnimal();
