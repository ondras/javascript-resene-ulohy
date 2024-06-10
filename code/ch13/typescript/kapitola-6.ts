interface Song {
	url: string;
	title: string;
	text: string;
}

function buildSong(song: Song) {
	let item = document.createElement("li");
	item.innerHTML = `<a href="${song.url}">${song.title}</a> <br/> ${song.text}`;
	return item;
}

function showResults(xhr: XMLHttpRequest, query: string) {
	let results = document.querySelector("#results");
	if (!results) { return; }

	let songs: Song[] = xhr.response;
	if (songs.length == 0) {
		results.replaceChildren("Tomuto dotazu nevyhovují žádné písně 🙁");
		return;
	}

	let heading = document.createElement("h2");
	heading.textContent = `Nalezené písně pro dotaz: ${query}`;

	let ol = document.createElement("ol");
	results.replaceChildren(heading, ol);

	for (let i=0; i<songs.length; i++) {
		let song = buildSong(songs[i]);
		ol.append(song);
	}
}

function onSubmit(e: Event) {
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	let input = form.querySelector<HTMLInputElement>("[name=query]");
	if (!input) { return; }
	let query = input.value;
	let url = `/search?query=${encodeURIComponent(query)}`;
	xhr.responseType = "json";
	xhr.open("GET", url);
	xhr.send();
	xhr.addEventListener("load", e => showResults(xhr, query));
}

let form = document.querySelector("form")!;
form.addEventListener("submit", onSubmit);
