//I. Sprawdź najpierw zasięg let
 {
     //A1 - wypisuję zmienną numbers przed deklaracją
     //Wynik w konsoli to undefined:
     //Dlaczego taki wynik? hoisting nie działa dla let:
     console.log(numbers);

     let numbers = [2,3, 4];
     //A2 - wypisuję zmienną numbers po deklaracji
     //Wynik w konsoli to 234:
     //Dlaczego taki wynik? TODO:
     console.log(numbers);
 }

 //A3 - wypisuję zmienną numbers za blokiem
 //Wynik w konsoli to : undefined
 //Dlaczego taki wynik? delkaracja była w bloku:
 console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to nie ma takiej funkcji:
    //Dlaczego taki wynik? TODO:
    console.log(Pi);

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO:
    //Dlaczego taki wynik? TODO:
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to nie ma takiej zmiennej:
//Dlaczego taki wynik? const jest ograniczony w bloku:
console.log(PI);
