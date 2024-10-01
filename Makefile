build/test.html: src/*
	pandoc -f markdown -t html5 -o $@ --css pandoc.css -s --toc --tab-stop 3 --highlight-style kate $^

build/test.pdf: src/*
	pandoc -f markdown -t pdf -o $@ --pdf-engine lualatex -s --toc --tab-stop 3 -M papersize=a5 $^

build/testw.pdf: build/test.html
	weasyprint $< $@
