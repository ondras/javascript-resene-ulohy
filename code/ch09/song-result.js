class SongResult extends HTMLElement {
	setData(song) {
		this.innerHTML = `<a href="${song.url}">${song.title}</a> <br/> ${song.text}`;
	}
}

customElements.define("song-result", SongResult);
