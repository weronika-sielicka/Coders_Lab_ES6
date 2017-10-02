/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Vehicle = function Vehicle(brand) {
  _classCallCheck(this, Vehicle);

  this._brand = brand;
};

var Boat = function (_Vehicle) {
  _inherits(Boat, _Vehicle);

  function Boat() {
    _classCallCheck(this, Boat);

    return _possibleConstructorReturn(this, (Boat.__proto__ || Object.getPrototypeOf(Boat)).apply(this, arguments));
  }

  _createClass(Boat, [{
    key: "swim",
    value: function swim() {
      console.log(this._brand + " swimming");
    }
  }]);

  return Boat;
}(Vehicle);

var Plane = function (_Vehicle2) {
  _inherits(Plane, _Vehicle2);

  function Plane() {
    _classCallCheck(this, Plane);

    return _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).apply(this, arguments));
  }

  _createClass(Plane, [{
    key: "fly",
    value: function fly() {
      console.log(this._brand + " flying");
    }
  }]);

  return Plane;
}(Vehicle);

var Car = function (_Vehicle3) {
  _inherits(Car, _Vehicle3);

  function Car() {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).apply(this, arguments));
  }

  _createClass(Car, [{
    key: "drive",
    value: function drive() {
      console.log(this._brand + " driving");
    }
  }]);

  return Car;
}(Vehicle);

var boat = new Boat("Merlin");
boat.swim();

var plane = new Plane("Spitfire");
plane.fly();

var car = new Car("Bentley");
car.drive();

//Zadanie 1

var Kaczka = function () {
  function Kaczka(type) {
    _classCallCheck(this, Kaczka);

    this._type = type;
  }

  _createClass(Kaczka, [{
    key: "kwacz",
    value: function kwacz() {
      console.log("kwa kwa");
    }
  }, {
    key: "plywaj",
    value: function plywaj() {
      console.log("płynę...");
    }
  }, {
    key: "wyswietl",
    value: function wyswietl() {
      console.log("Wygląda jak zwykła " + this._type);
    }
    //Zadanie 4 - nie usuwaj Piotrek ;)

  }, {
    key: "lec",
    value: function lec() {
      console.log("Lecę");
    }
  }]);

  return Kaczka;
}();

var kaczucha = new Kaczka("kaczucha");
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();
kaczucha.lec();

//Zadanie 2

var DzikaKaczka = function (_Kaczka) {
  _inherits(DzikaKaczka, _Kaczka);

  function DzikaKaczka() {
    _classCallCheck(this, DzikaKaczka);

    return _possibleConstructorReturn(this, (DzikaKaczka.__proto__ || Object.getPrototypeOf(DzikaKaczka)).apply(this, arguments));
  }

  return DzikaKaczka;
}(Kaczka);

var dzikaKaczka = new DzikaKaczka("dzika");
dzikaKaczka.kwacz();
dzikaKaczka.plywaj();
dzikaKaczka.wyswietl();
dzikaKaczka.lec();

//Zadanie 3

var KrzyzowkaKaczka = function (_Kaczka2) {
  _inherits(KrzyzowkaKaczka, _Kaczka2);

  function KrzyzowkaKaczka() {
    _classCallCheck(this, KrzyzowkaKaczka);

    return _possibleConstructorReturn(this, (KrzyzowkaKaczka.__proto__ || Object.getPrototypeOf(KrzyzowkaKaczka)).apply(this, arguments));
  }

  return KrzyzowkaKaczka;
}(Kaczka);

var krzyzoKaczucha = new DzikaKaczka("krzyżówka");
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();
krzyzoKaczucha.lec();

//Zadanie 5

var GumowaKaczka = function (_Kaczka3) {
  _inherits(GumowaKaczka, _Kaczka3);

  function GumowaKaczka() {
    _classCallCheck(this, GumowaKaczka);

    return _possibleConstructorReturn(this, (GumowaKaczka.__proto__ || Object.getPrototypeOf(GumowaKaczka)).apply(this, arguments));
  }

  _createClass(GumowaKaczka, [{
    key: "lec",
    value: function lec() {
      console.log("Gumowe kaczki nie potrafią latać :(");
    }
  }]);

  return GumowaKaczka;
}(Kaczka);

var gumowaKaczucha = new GumowaKaczka("krzyżówka");
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();

//Zadanie 6

var Food = function () {
  //klasa abstrakcyjna nie tworzyć instancji
  function Food(name, protein, carbs, fat) {
    _classCallCheck(this, Food);

    this._name = name;
    this._protein = protein;
    this._carbs = carbs;
    this._fat = fat;
  }

  _createClass(Food, [{
    key: "print",
    value: function print() {
      console.log(this._name + " " + this._protein + " " + this._carbs + " " + this._fat);
    }
  }]);

  return Food;
}();

var FastFood = function (_Food) {
  _inherits(FastFood, _Food);

  function FastFood() {
    _classCallCheck(this, FastFood);

    return _possibleConstructorReturn(this, (FastFood.__proto__ || Object.getPrototypeOf(FastFood)).apply(this, arguments));
  }

  return FastFood;
}(Food);

var FatFreeFood = function (_Food2) {
  _inherits(FatFreeFood, _Food2);

  function FatFreeFood() {
    _classCallCheck(this, FatFreeFood);

    return _possibleConstructorReturn(this, (FatFreeFood.__proto__ || Object.getPrototypeOf(FatFreeFood)).apply(this, arguments));
  }

  return FatFreeFood;
}(Food);

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var productList = document.querySelector("#products");
    var li = document.createElement("li");
    var productName = document.getElementById("name").value;
    var proteins = document.getElementById("proteins").value;
    var carbs = document.getElementById("carbs").value;
    var fat = document.getElementById("fat").value;
    var sum = carbs * 4 + proteins * 4 + fat * 9 + " kcal";
    li.innerText = productName + " " + proteins + " " + carbs + " " + fat + " " + sum;
    productList.append(li);
    if (sum > 250) {
      var ff = new FastFood(productName, proteins, carbs, fat);
      ff.print();
    } else {
      var fff = new FatFreeFood(productName, proteins, carbs, fat);
      fff.print();
    }
  });
});

/***/ })
/******/ ]);