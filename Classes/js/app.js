/*
class Vehicle {
  constructor(brand, color, price) {
    this._brand = brand;
    this._color = color;
    this._price = price;
  }
  getBrand() {
    return this._brand;
  }
  getColor() {
    return this._color;
  }
  getPrice() {
    return this._color;
  }
  setColor(color){
    this._color = color;
  }
}


class Boat extends Vehicle{

}



let smallCar = new Car("Bentley", "black", "expensive");
smallCar.setColor("silver");

class Element {
  constructor(tag, attributes){
    this._tag = tag;
    this._attributes = attributes;

  }
  createElement(){
    let tagName = document.createElement(this._tag);
    for (key in this._attributes){
      tagName.setAttribute(key, this.attributes[key]);
    }
    let body = document.querySelector("body");
    body.appendChild(tagName);
  }
}
*/

//Z wykładowcą

class Vehicle {
  constructor(brand) {
    this._brand = brand;
  }
}


class Boat extends Vehicle{
swim(){
  console.log(this._brand + " swimming");
}
}

class Plane extends Vehicle{
  fly(){
    console.log(this._brand + " flying");
  }
}

class Car extends Vehicle{
  drive(){
    console.log(this._brand + " driving");
  }
}

let boat = new Boat("Merlin");
boat.swim();

let plane = new Plane("Spitfire");
plane.fly()

let car = new Car("Bentley");
car.drive();

//Zadanie 1
class Kaczka {
  constructor(type){
    this._type = type;
  }
  kwacz(){
    console.log("kwa kwa");
  }
  plywaj(){
    console.log("płynę...");
  }
  wyswietl(){
    console.log("Wygląda jak zwykła " + this._type);
  }
  //Zadanie 4 - nie usuwaj Piotrek ;)
  lec(){
    console.log("Lecę");
  }
}

let kaczucha = new Kaczka("kaczucha");
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();
kaczucha.lec();


//Zadanie 2

class DzikaKaczka extends Kaczka{}
let dzikaKaczka = new DzikaKaczka("dzika");
dzikaKaczka.kwacz();
dzikaKaczka.plywaj();
dzikaKaczka.wyswietl();
dzikaKaczka.lec()

//Zadanie 3
class KrzyzowkaKaczka extends Kaczka{}
let krzyzoKaczucha = new DzikaKaczka("krzyżówka");
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();
krzyzoKaczucha.lec();

//Zadanie 5
class GumowaKaczka extends Kaczka{
  lec(){
    console.log("Gumowe kaczki nie potrafią latać :(");
  }
}
let gumowaKaczucha = new GumowaKaczka("krzyżówka");
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();


//Zadanie 6

class Food { //klasa abstrakcyjna nie tworzyć instancji
  constructor(name, protein, carbs, fat){
    this._name = name;
    this._protein = protein;
    this._carbs = carbs;
    this._fat = fat;
  }
  print() {
        console.log(this._name + " " + this._protein + " "
            + this._carbs + " " + this._fat);
    }
}

class FastFood extends Food {}
class FatFreeFood extends Food {}

document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let productList = document.querySelector("#products");
  let li = document.createElement("li");
  let productName = document.getElementById("name").value;
  let proteins = document.getElementById("proteins").value;
  let carbs = document.getElementById("carbs").value;
  let fat = document.getElementById("fat").value;
  let sum = (carbs * 4) + (proteins * 4) + (fat * 9) + " kcal";
  li.innerText = productName + " " + proteins + " " + carbs + " " + fat + " " + sum;
  productList.append(li);
  if (sum > 250) {
            let ff = new FastFood(productName, proteins, carbs, fat);
            ff.print();
        } else {
            let fff = new FatFreeFood(productName, proteins, carbs, fat);
            fff.print();
        }
})

})
