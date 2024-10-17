PANDOC_ARGS := -f markdown -t html5 --template template -V toc-title:"Obsah" --css style.css -s --toc --toc-depth 2 --tab-stop 2 --highlight-style highlight.theme
WEASYPRINT := ~/WeasyPrint/venv/bin/weasyprint
PANDOC := pandoc

build/book.html: src/*.md src/*.yml
	$(PANDOC) $(PANDOC_ARGS) -o $@ $^

build/book-%.html: src/ch%.md src/*.yml
	$(PANDOC) $(PANDOC_ARGS) -o $@ $^

build/%.pdf: build/%.html *.css
	$(WEASYPRINT) -d --pdf-variant pdf/a-1b $< $@

build/test.html: src/*.md src/*.yml
	$(PANDOC) $(PANDOC_ARGS) -o $@ src/ch01.md src/ch02.md src/ch07.md src/metadata.yml

vlna:
	vlna -x 266e6273703b -v KkSsVvZzOoUuAaIi