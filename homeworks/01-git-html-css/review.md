# Review

## Ogólne

1. Działa Prettier, kod jest super sformatowany, dostajesz bonusowy punkt :D

2. Super, że dla zdjęć zrobiłeś osobny folder.

## CSS

1. Font-family możesz ustawić globalnie, bo kilka razy je deklarujesz - możesz to zrobić po prostu w selektorze dla body.

2. W przypadku zdjęć zastosowałeś height="100px" - to działa, jasne, ale działamy na zasadzie, że wszystkie style przenosimy to plików css - nawet jeśli to będzie wymagało dodania nowej klasy do stylowania.

3. Dobrą praktyką jest używanie jednego stylu kolorów - jeśli korzystasz z hex, to nazwy kolorów typu 'white' też fajnie jest zapisać przy pomocy tej notacji.

4. Dobrą praktyką jest 'zerowanie' paddingu i marginu dla całej zawartości strony - w Twoim przypadku zostaje domyślny margin dla taga 'body' przez co po lewej stronie nagłówka jest 8px przestrzeni - taka mała szpara się zrobiła.

5. W przypadku bardziej złożonych selektorów możesz po prostu dodać klasę i załatwić stylowanie dużo prościej, bo np. '#products ol li:nth-child(4)' jest bardzo złożony i jakakolwiek zmiana kolejności w kodzie HTML sprawi, że ten selektor przestanie działać.

6. logogithub - nieużywana klasa.

7. Selektory powinny bazować na klasach, nie ID - nie jest to błąd a jedynie dobra praktyka, odsyłam do wyjaśnienia: https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4.

## HTML

1. Link (a) powinien być w tagu li a nie odwrotnie

2. Tak samo w przypadku produktów - w tagach ol/ul powinień się znajdować bezpośrednio tag li a dopiero w nim zawartość.

3. Nie działają zdjęcia :(

4. Brak zbędnych tagów w html - brawo!

5. Bardzo czysty HTML, zastosowanie tagów semantycznych (nav, main, section, footer).

6. Zastosowałeś atrybut 'alt' w tagach img - bardzo dobrze!

7. Żeby wyświtlić przykładowy teksty w polu 'textarea' możesz użyć atrybutu 'placeholder' zamiast wpisywać na sztywno treść - tak samo dla innych typów inputów 'placeholder="name"' itd.

8. name="textarea" niewiele mówi, lepiej sprawdziłoby się coś na wzór name="message".

## GIT

1. Praca z GIT super, wszystko poprawnie!

## Podsumowanie

Jest dobrze, niestety zdjęcia nie działają i to jest w zasadzie największy minus :/ Super, że udało Ci się odpalić formatowanie za pomocą Prettiera - kod jest fajnie ułożony, czytelny. Pamiętaj też, żeby bezpośrednio w listach umieszczać element li i dopiero w nim zawartość jaka ma się pojawić. Używaj klas do stylowania, unikaj bardzo złożonych selektorów bo tracą na czytelności i ponowne ich użycie gdzieś w innym miejscu w kodzie jest w zasadzie niemożliwe. Unikaj też łapania elementów w CSS korzystając z nazwy taga (np. h2 {...}). Za zadanko 10 punktów (9/10 za podstawowe wymagania + 1/1 za bonus - formatowanie Prettierem :))
