test.html: ch*.md
	pandoc -f markdown -t html5 -o $@ --css pandoc.css -s $^
