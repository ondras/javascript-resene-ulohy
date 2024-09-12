test.html: ch*.md
	pandoc -f markdown -t html5 -o $@ --css pandoc.css -s --toc --tab-stop 3 --highlight-style kate $^

test.pdf: ch*.md
	pandoc -f markdown -t pdf -o $@ --pdf-engine lualatex -s --toc --tab-stop 3 -M papersize=a5 $^
