let form = document.querySelector("form");
let results = document.querySelector("#results");

function buildSong(song) {
	let item = document.createElement("li");
	item.innerHTML = `<a href="${song.url}">${song.title}</a> <br/> ${song.text}`;
	return item;
}

function showResults(xhr, query) {
	let songs = xhr.response;
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

function onSubmit(e) {
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	let query = form.querySelector("[name=query]").value;
	let url = `/search?query=${encodeURIComponent(query)}`;
	xhr.responseType = "json";
	xhr.open("GET", url);
	xhr.send();
	xhr.addEventListener("load", e => showResults(xhr, query));
}

form.addEventListener("submit", onSubmit);
