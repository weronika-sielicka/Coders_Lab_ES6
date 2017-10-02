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

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Zadanie 1
console.log("Zadanie1");

(function () {
    return console.log("HELLO WORLD");
})();

//Zadanie 2
console.log(" ");
console.log("Zadanie2");

/*(
(a=5) => {
  console.log(a*2);
}
)(5)*/

var multiply = function multiply() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

    return number * 2;
};

multiply = 9;
console.log(multiply);

//Zadanie 3
console.log(" ");
console.log("Zadanie3");

var zad3 = function zad3(a, b) {
    return a > b ? a : b;
};
console.log(zad3(10, 4));

//Zadanie 4
console.log(" ");
console.log("Zadanie4");

var getSecondMaxNumber = function getSecondMaxNumber(array) {
    var sorted = array.sort(function (a, b) {
        return b - a;
    });
    return sorted[1];
};

console.log(getSecondMaxNumber([1, 100, 49]));

//Zadanie 5
console.log(" ");
console.log("Zadanie5");

(function (parameter) {
    return parameter;
})();

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
var zad6 = function zad6() {
    var maks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    var counter = 0;
    var inter = setInterval(function () {
        if (counter === maks) {
            clearInterval(inter);
        } else {
            console.log("Hello World");
        }
        counter++;
    }, 1000);
};
zad6();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log(" ");
console.log("Zadanie7");

var App = function App() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
  this.menuUl = document.querySelector(".menu").querySelector("ul").querySelectorAll("li");
};

App.prototype.generateLinks = function () {
  var _this = this;

  var sorted = this.websites.sort(function (a, b) {
    return a.length - b.length;
  });
  sorted.forEach(function (element) {
    _this.links[_this.links.length] = "https://" + element + ".com";
  });
  this.menuUl.forEach(function (element, index) {
    element.querySelector("a").setAttribute("href", _this.links[index]);
  });
};

var app = new App();
app.generateLinks();
console.log(app.links);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Zadanie 8
console.log(" ");
console.log("Zadanie 8");

var dog = {
    type: "Mammal",
    name: "",
    setName: function setName(newName) {
        this.name = newName;
    }

};

dog.setName("Reksio");

console.log(dog.name);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//USING jquery

$(function () {
    var ul = $("ul");
    var span = $("span");
    ul.hide();
    span.on("mouseenter", function () {
        $(this).next().slideDown();
    }).on("mouseout", function () {
        $(this).next().slideUp();
    });
});

/***/ })
/******/ ]);