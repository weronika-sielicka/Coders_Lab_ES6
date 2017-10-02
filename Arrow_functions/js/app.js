//Zadanie 1
console.log("Zadanie1");

(() => console.log("HELLO WORLD"))()

//Zadanie 2
console.log(" ");
console.log("Zadanie2");

/*(
(a=5) => {
  console.log(a*2);
}
)(5)*/

let multiply = (number = 5) =>
{
  return number * 2
}

multiply = 9;
console.log(multiply);



//Zadanie 3
console.log(" ");
console.log("Zadanie3");

var zad3 = (a,b)=> a>b ? a : b;
console.log(zad3(10,4));

//Zadanie 4
console.log(" ");
console.log("Zadanie4");

var getSecondMaxNumber = array => {
  let sorted = array.sort(function(a,b){
    return b - a
  });
  return sorted[1];
}

console.log(getSecondMaxNumber([1,100,49]));

//Zadanie 5
console.log(" ");
console.log("Zadanie5");

((parameter) => parameter)();


//Zadanie 6
/*console.log(" ");
console.log("Zadanie6");*/
/*
let countHello = (x) =>
{
    if ( x>= 1 && x <= 10 && Math.floor(x) == x) {
        var i = 1;

        var count = () => {
            console.log("Hello " + i);
            i++;
            if ( i>x ) {
                clearInterval(showHello);
                console.log("Koniec!")
            }
        }

        var showHello = setInterval(count, 1000);

    } else {
        console.log('To nie jest liczba całkowita od 1 do 10');
    }
}
countHello(6);
*/

//Zadanie 6
var zad6 = (maks = 10) => {
    let counter = 0;
    let inter = setInterval(() => {
        if (counter === maks) {
            clearInterval(inter);
        } else {
            console.log("Hello World");
        }
        counter++;
    }, 1000);
}
zad6();
