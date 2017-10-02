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


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function whoAreYou(obj) {
  return "My name is " + obj.name + " " + obj.lastName + ".\n  I am " + (2017 - obj.yearOfBirth) + " years old.\n  My proffesion is " + obj.proffesion + ".";
}

var person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

whoAreYou(person);

//Zadanei 1

var a = 2;
var b = 4;

console.log("Suma dw\xF3ch liczb " + a + " i " + b + " to " + (a + b));

//Zadanie 2
var name = "Stuff";
var lastName = "Things";

console.log("Moje imi\u0119 i nazwisko to: " + name + " " + lastName);

//Zadanie 3

var myText = function myText() {
  console.log("\"My\u015Bl\u0119, \u017Ce jest wiele pi\u0119kna\n   w posiadaniu problem\xF3w.\n   To jeden ze sposob\xF3w, w jaki si\u0119 uczymy\"\n   Herbie Hancock");
};

myText();
var cite = document.querySelector(".cite");

cite.innerText = "\"My\u015Bl\u0119, \u017Ce jest wiele pi\u0119kna\n w posiadaniu problem\xF3w.\n To jeden ze sposob\xF3w, w jaki si\u0119 uczymy\"\n Herbie Hancock";

//Zadanie 4
var zad4 = function zad4(array) {
  return [].concat(_toConsumableArray(array));
};

console.log("" + zad4([1, 2, 3, 4]));

//Zadanie 5
var button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px"
};

console.log("To jest button.\n   Jego szeroko\u015B\u0107 to " + button.width + ".\n   Napis, kt\xF3ry na nim widnieje to " + button.value + ".");

var buttonElement = document.createElement("button");
var body = document.querySelector("body");
buttonElement.setAttribute("id", button.idName);
buttonElement.style.width = button.width;
buttonElement.style.padding = button.padding;
buttonElement.innerHTML = button.value;
body.append(buttonElement);

/***/ })
/******/ ]);