# JavaScript: řešené úlohy

Tento repozitář obsahuje zdrojové kódy, texty a další součásti knihy Ondřeje Žáry [JavaScript: řešené úlohy](https://eshop.cvut.cz/simplifyworks/cs/eoc/public/product/392705452-zara-ondrej-javascript-resene-ulohy). Pro čtenáře je zde k dispozici:

  - [Issue tracker](https://github.com/ondras/javascript-resene-ulohy/issues) na hlášení nedostatků
  - [Zdrojové kódy řešených úloh](https://github.com/ondras/javascript-resene-ulohy/tree/main/code)

Dva měsíce po vydání tištěné verze bude k dispozici kniha také elektronicky:

  - [HTML ke čtení v prohlížeči](#)
  - [PDF ke stažení či tisku](#)


## Errata

Seznam chyb v tištěné verzi knihy. V elektronické jsou opraveny.

  - Strana 57, funkce `checkPhone()`. V podmínce chybí vykřičník (výjimku má způsobit neshoda s regulárním výrazem).

  - Strana 57, ukázka zdrojového kódu s try-catch. V obou dvou try-catch blocích je zachycená výjimka označena písmenem `e`, což je nepraktické, neboť tak dojde k překrytí hodnoty `e` (událost), která je parametrem funkce. V prvním případě to nevadí, ve druhém je to přímo zdrojem chyby -- neboť nelze zavolat `e.preventDefault()` (v proměnné `e` je tou dobou výjimka, nikoliv událost). Náprava je snadná, stačí zachycenou hodnotu libovolně přejmenovat, např. `catch (err)`.

  - Strana 114, překlep ve slově *funkcionalitu*.

  - Strana 141, namísto *pole řetězců* má být *pole objektů*.

Dejte vědět, pokud nějakou další naleznete!


## Lokální sestavení knihy

Repoziář obsahuje kompletní zdrojové texty knihy v jazyce Markdown. Proces tvorby sestává z těchto částí:

1. Konverze Markdown -> HTML pomocí Pandoc
    - tento proces zahrnuje vkládání nezlomitelných mezer pomocí [lua pluginu](https://github.com/ondras/javascript-resene-ulohy/blob/main/nbsp.lua)
	- `make build/book.html`
1. Konverze HTML -> PDF pomocí Weasyprint
    - použít verzi / fork / commit, která obsahuje opravy pro https://github.com/Kozea/WeasyPrint/issues/2270 a https://github.com/Kozea/WeasyPrint/issues/2269 (tj. např. release >= 66.0)
    - `make build/book.pdf`
1. Volitelná konverze do PDF vhodného pro knižní sazbu s pomocí extra stylopisu [print.extra.css](https://github.com/ondras/javascript-resene-ulohy/blob/main/css/print.extra.css)
    - tento styl odebírá titulní stránku, kapitoly začíná na pravé straně, přidává spady a ořezové značky a posouvá okraje směrem od středu
  	- `make build/book.extra.pdf`
