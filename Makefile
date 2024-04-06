test.html: ch*.md
	pandoc -f markdown -t html5 -o $@ --css pandoc.css -s --toc --tab-stop 3 --highlight-style kate $^
