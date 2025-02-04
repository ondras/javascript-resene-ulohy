# JavaScript: řešené úlohy

Tento repozitář obsahuje zdrojové kódy, texty a další součásti knihy Ondřeje Žáry [JavaScript: řešené úlohy](FIXME). Pro čtenáře je zde k dispozici:

  - [Issue tracker](https://github.com/ondras/javascript-resene-ulohy/issues) na hlášení nedostatků
  - [Zdrojové kódy řešených úloh](https://github.com/ondras/javascript-resene-ulohy/tree/main/code)

Dva měsíce po vydání tištěné verze bude k dispozici kniha také elektronicky:

  - [HTML ke čtení v prohlížeči](FIXME)
  - [PDF ke stažení či tisku](FIXME)

## Lokální sestavení knihy

Repoziář obsahuje kompletní zdrojové texty knihy v jazyce Markdown. Proces tvorby sestává z těchto částí:

1. Konverze Markdown -> HTML pomocí Pandoc
    - tento proces zahrnuje vkládání nezlomitelných mezer pomocí [lua pluginu](https://github.com/ondras/javascript-resene-ulohy/blob/main/nbsp.lua)
	- `make build/book.html`
1. Konverze HTML -> PDF pomocí Weasyprint
    - ideální je použít [fork Weasyprintu](https://github.com/ondras/WeasyPrint/tree/issue-2270), který řeší [issue 2270](https://github.com/Kozea/WeasyPrint/issues/2270)
	- `make build/book.pdf`
1. Volitelná konverze do PDF vhodného pro knižní sazbu s pomocí extra stylopisu [print.extra.css](https://github.com/ondras/javascript-resene-ulohy/blob/main/css/print.extra.css)
    - tento styl odebírá titulní stránku, kapitoly začíná na pravé straně, přidává spady a ořezové značky a posouvá okraje směrem od středu
  	- `make build/book.extra.pdf`
