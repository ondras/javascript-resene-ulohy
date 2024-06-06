const LIMIT = 50;

function shortenSong(song) {
	let text = song.textContent;

	let button = document.createElement("button");
	button.textContent = "zobrazit celý text";
	song.replaceChildren(text.substring(0, LIMIT), "…", button);

	function showCompleteText() {
		song.textContent = text;
	}
	button.addEventListener("click", showCompleteText);
}

let songs = document.querySelectorAll(".song");
for (let i=0; i<songs.length; i++) {
	shortenSong(songs[i]);
}
