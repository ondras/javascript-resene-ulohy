function Inlines(inlines)
	local i = 1
	local pattern = '^%(?[ksvzouai]$'
    while inlines[i+1] do
--        if inlines[i].t == 'Str' and inlines[i+1].t == 'Space' and inlines[i+2].t == 'Str' then
        if inlines[i].t == 'Str' and inlines[i+1].t == 'Space' then
			if string.match(string.lower(inlines[i].text), pattern) then
				inlines[i+1] = pandoc.Str('\u{00a0}')
			end
        end
		i = i+1
	end

	return inlines
end
