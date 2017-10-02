<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Klasy  &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Pojazdy (~ 5min - 10min)

Stwórz klasę abstrakcyjną Vehicle. Stwórz trzy obiekty boat, car i plane na podstawie odpowiednich klas dziedziczących po Vehicle. W odpowiednich klasach stwórz metody, które będą wypisywały w konsoli informacje wyróżniające te pojazdy. Zrób to w taki sposób, aby obiekt boat nie mógł jeździć ani pływać itp.

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)

W pliku ```app.js``` stwórz klasę ```Kaczka```. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki. Stwórz wewnątrz tej klasy konstruktor i metody:

* konstruktor - którego zadaniem będzie ustawienie typu kaczki na "zwykła" np. this.type = "zwykla"
* kwacz() - wypisuje "kwa kwa"
* plywaj() - wypisuje "płynę...""
* wyswietl() - wypisuje "Wygląda jak zwykla kaczka". Skorzystaj z ustawienia type do wypisania typu kaczki.

Stwórz obiekt ```kaczucha```. Wywołaj dla niego wszystkie metody.

### Zadanie 2 (~ 5min - 10min)

Na bazie  klasy ```Kaczka``` stwórz kolejną o nazwie ```DzikaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```wyswietl()``` typ kaczki zmienił się na "dzika". Stwórz obiekt ```dzikaKaczucha```. Wywołaj dla niego wszystkie metody.

### Zadanie 3 (~ 5min - 10min)

Na bazie klasy ```Kaczka``` stwórz kolejną o nazwie ```KrzyzowkaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```wyswietl()``` typ kaczki zmienił się na "krzyżówka". Stwórz obiekt ```krzyzoKaczucha```. Wywołaj dla niego wszystkie metody.

### Zadanie 4 (~ 5min - 7min)

Stworzyłeś klasę ```Kaczka```. Mogą z niej dziedziczyć wszytkie kaczki. Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody ```lec()```. Metoda ma wypisywać w konsoli tekst "Lecę".

### Zadanie 5 (~ 5min - 7min)
Na bazie  klasy ```Kaczka``` stwórz kolejną o nazwie ```GumowaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```wyswietl()``` typ kaczki zmienił się na "gumowa". Stwórz obiekt ```gumowaKaczucha```. Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego? ......Twoja gumowa kaczka potrafi latać!!
Nadpisz odpowiednio metodę ```lec()``` tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "gumowe kaczki nie potrafią latać :(".


### Zadanie 6 (~ 15min - 25min)

Na Twojej stronie internetowej masz stworzony formularz, który pozwala dodawać
różne rodzaje produktów do listy.

W pliku app.js masz stworzoną klasę Food - jako klasę abstrakcyjną. W konstruktorze klasa ustawia nazwę
produktu (name), ilość białka (protein), ilość węglowodanów (carbs)  oraz ilość tłuszczu (fat) w produkcie, (W gramach).


Napisz kod dzięki, któremu po wypełnieniu formularza i kliknięciu przycisku "Dodaj", zostaną wykonane następujące czynności:
 * nowy produkt zostanie dodany do listy ```ul``` o id ```products```
 * zostanie stworzony nowy obiekt na podstawie odpowiedniej klasy dziedziczącej po Food. To znaczy, jeżeli produkt będzie zawierał powyżej 250 kcal zostanie stworzony jako obiekt klasy FastFood. Jeżeli poniżej 250 kcal zostanie stworzony jako obiekt klasy FatFreeFood.

Kalorie możesz obliczyć na podstawie następującego wzoru:
```JavaScript
1 g białka	dostarcza	4 kcal
1 g tłuszczu	dostarcza	9 kcal
1 g węglowodanów	dostarcza	4 kcal
```

Przykład.
Po dodaniu produktu hot_dog i wypełnieniu jego danych odżywczych w formularzu, zostanie stworzony obiekt na bazie klasy Fast_Food np. w następujący sposób: ```new FastFood('Hot Dog', 10, 4.2, 26)```, co po przeliczeniu:
10* 4 + 4.2 * 4 + 9 * 26 daje 280.8 kcal.

Na podstawie formularza stwórz kilka obiektów jak poniżej:

```JavaScript
new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
```
Napisz metodę o nazwie print (w odpowiedniej klasie), która będzie wypisywała informację o produkcie.


### Zadanie 8 (~ 15min - 25min) - dodatkowe (dla chętnych)

Wyobraź sobie, że tworzysz serwis internetowy, na którym będą dwa rodzaje menu: poziome i pionowe.
Stwórz klasę abstrakcyjną np. ```MenuGenerator```, na bazie której będziemy tworzyć nowe rodzaje menu. Podczas tworzenia menu, do konstruktora przekaż typ menu oraz tablicę z elementami menu (Przykład wywołania niżej).

Stwórz również dwie metody w klasie bazowej:
* getType() - wypisującą typ menu
* showItems() - wypisującą elementy menu

Dodatkowo chcesz, aby menu pionowe mogło być animowane. Dodaj mu odpowiednią metodę, która będzie wypisywała w konsoli tekst "Animacja menu typu: vertical"

```JavaScript
let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);

```
