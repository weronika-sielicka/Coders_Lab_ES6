const IMIE = "imie";
let test = "test";

for (let i=0; i < 3; i++){
  console.log(IMIE, test);
}

function checkVariables() {
  console.log(IMIE, test);
}

{
  console.log(IMIE, test);
}


//zadanie 5
(function() {
  console.log("HELLO WORLD")
}());


//zadanie 6
(
function(name){
  console.log(name);
}
)("Weronika");
