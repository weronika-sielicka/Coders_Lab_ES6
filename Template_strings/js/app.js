function whoAreYou(obj){
  return `My name is ${obj.name} ${obj.lastName}.
  I am ${2017- obj.yearOfBirth} years old.
  My proffesion is ${obj.proffesion}.`;
}



 let person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

whoAreYou(person);

//Zadanei 1

let a = 2;
let b = 4;

console.log(`Suma dwóch liczb ${a} i ${b} to ${a + b}`);

//Zadanie 2
let name = "Stuff";
let lastName = "Things";

console.log(`Moje imię i nazwisko to: ${name} ${lastName}`);

//Zadanie 3

 let myText = () => {
   console.log(`"Myślę, że jest wiele piękna
   w posiadaniu problemów.
   To jeden ze sposobów, w jaki się uczymy"
   Herbie Hancock`);
 }

 myText();
 let cite = document.querySelector(".cite");

 cite.innerText = `"Myślę, że jest wiele piękna
 w posiadaniu problemów.
 To jeden ze sposobów, w jaki się uczymy"
 Herbie Hancock`;

 //Zadanie 4
 let zad4 = array => {
return [...array];
}

console.log(`${zad4([1,2,3,4])}`);

 //Zadanie 5
 const button = {
   value: "Send message",
   idName: "sendMsg",
   width: "100px",
   padding: "20px",
 }

 console.log(`To jest button.
   Jego szerokość to ${button.width}.
   Napis, który na nim widnieje to ${button.value}.`);

let buttonElement = document.createElement("button");
let body = document.querySelector("body");
buttonElement.setAttribute("id", button.idName);
buttonElement.style.width = button.width;
buttonElement.style.padding = button.padding;
buttonElement.innerHTML = button.value;
body.append(buttonElement);
