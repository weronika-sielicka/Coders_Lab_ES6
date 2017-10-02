<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Operator reszty/rozproszenia &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Operator rozproszenia (spread operator) (~ 5min)

Stwórz w pliku ```app.js``` dwie tablice ```namesA``` i ```namesB```. Pierwsza niech zawiera same stringi.
Druga niech zawiera dwa dowolne stringi, a od trzeciego miejsca te same elementy co tablica ```namesA```. Ostatnie dwa elementy tablicy ```namesB``` to niech będą "Jan" i  "Karol".

Przykład:

```JavaScript
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil","Jan", "Karol" ];
```

### Operator reszty (rest operator) (~ 5min)

Stwórz w pliku ```app.js``` funkcję o nazwie ```getAverage```, która może przyjąć dowolną liczbę parametrów (w postaci liczb) i która zwraca średnią arytmetyczną tych liczb.

Przykład wywołania:

```JavaScript
getAverage(2,4,5,6,7,79);
```

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 2min - 5min)

W pliku ```app.js``` stwórz zmienną przechowującą Twoje imię. Za pomocą **operatora rozproszenia** zapisz każdą literkę do tablicy.
Wypisz tablicę w konsoli.

### Zadanie 2 (~ 2min - 5min)

W pliku ```app.js``` stwórz dwie tablicę ```fruits``` i ```vegetables```. Następnie stwórz trzecią tablicę ```mix```, która będzie połączeniem obu poprzednich tablic. Użyj **operator rozproszenia**.

### Zadanie 3 (~ 5min - 10min)

W pliku ```zadanie03.js``` jest zadeklarowana tablica. Stwórz funkcję o nazwie ```setFunnyName```, która będzie przyjmować dowolną liczbę parametrów. Zadaniem funkcji jest dodanie wszystkich przekazanych do niej parametrów do tablicy ```people```. Użyj **operatora reszty**.
