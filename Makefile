build/book.html: src/*
	pandoc -f markdown -t html5 --template template -o $@ -V toc-title:"Obsah" --css style.css -s --toc --toc-depth 2 --tab-stop 2 --highlight-style kate $^

build/book.pdf: build/book.html
	weasyprint $< $@
