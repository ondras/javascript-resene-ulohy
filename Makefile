PANDOC_ARGS := -f markdown -t html5 --template template -V toc-title:"Obsah" --css style.css -s --toc --toc-depth 2 --tab-stop 2 --highlight-style kate

build/book.html: src/*.md src/*.yml
	pandoc $(PANDOC_ARGS) -o $@ $^

build/book-1.html: src/ch01.md src/*.yml
	pandoc $(PANDOC_ARGS) -o $@ $^

build/%.pdf: build/%.html
	weasyprint $< $@
