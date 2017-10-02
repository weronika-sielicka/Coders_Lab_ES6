
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
//Nie można nadpisywać zmiennej const


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//nie można nadpisywać zmiennej const
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];
//b)
simpleArray.push(5);
//c) najpierw trzeba usunąć wszystkie wartości i potem push
simpleArray[3] = 0;
//simpleArray.length = 0;
simpleArray.push(8);
console.log(simpleArray);


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//Nie można
//b) spróbuj zmienić właśność skill obiektu dog
//można
//c) spróbuj dodać nową własność do obiektu dog np. age
//można
const dog = {
    name: "Puszek",
    skill: "killing"
}
