PANDOC := pandoc
PANDOC_ARGS := -f markdown -t html5 --template template -L nbsp.lua -V toc-title:"Obsah" --css ../css/style.css -s --toc --toc-depth 2 --tab-stop 2 --highlight-style highlight.theme

WEASYPRINT := ~/WeasyPrint/venv/bin/weasyprint
# WEASYPRINT := weasyprint
WEASYPRINT_ARGS := -d --pdf-variant pdf/a-1b

all: build/book.pdf build/book.extra.pdf

build/book.html: src/*.md src/*.yml
	$(PANDOC) $(PANDOC_ARGS) -o $@ $^

build/book-%.html: src/ch%.md src/*.yml
	$(PANDOC) $(PANDOC_ARGS) -o $@ $^

build/%.pdf: build/%.html css/*
	$(WEASYPRINT) $(WEASYPRINT_ARGS) $< $@

build/%.extra.pdf: build/%.html css/*
	$(WEASYPRINT) $(WEASYPRINT_ARGS) -s css/print.extra.css $< $@
