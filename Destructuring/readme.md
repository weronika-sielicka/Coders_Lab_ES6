<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Destrukturyzacja &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Destrukturyzacja tabeli

W pliku ```app.js``` podstaw pod zmienne pierwszą i ostatnią wartość następującej tablicy: ```[ "snow", "rain", "sun" ]```. Wypisz zmienne w konsoli.

### Destrukturyzacja obiektu

W pliku ```app.js``` stwórz obiekt ```slider```, taki jak poniżej:

```JavaScript
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
```
Podstaw do zmiennych ```type``` oraz ```autoStart``` odpowiednie wartości z obiektu ```slider```.


## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 2min - 5min)

W pliku ```app.js``` stwórz tablicę z 3 imionami. Następnie każde imie przypisz do kolejnej zmiennej np. name1, name2, name3. Wykorzystaj destrukturyzację.


### Zadanie 2 (~ 5min - 7min)

W pliku ```app.js``` stwórz funkcję ```generateRandomNumbers()```, której zadaniem jest wylosowanie i zapisanie do tablicy 6 liczb (0-5) oraz zwrócenie tej tablicy.
Zapisz do zmiennych pierwszą i trzecią liczbę ze zwróconej tablicy. Wyświetl te zmienne w konsoli.


### Zadanie 4 (~ 5min - 7min)

W pliku ```app.js``` stwórz funkcję ```getAnimal()```, która zwraca nastepujący obiekt:
```JavaScript
 {
     name: "Mruczek",
     age: 10,
     getVoice: () => "miau miau"
 }
 ```

 Podstaw pod zmienne ```catName``` oraz ```catVoice``` wartości pobrane z funkcji ```getAnimal()```.
