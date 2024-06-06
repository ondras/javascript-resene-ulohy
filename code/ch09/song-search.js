class SongSearch extends HTMLElement {
	connectedCallback() {
		this.innerHTML = HTML;
		this.querySelector("form").addEventListener("submit", this);
	}

	async handleEvent(e) {
		e.preventDefault();
		let query = this.querySelector("[name=query]").value;
		let url = `/search?query=${encodeURIComponent(query)}`;
		let response = await fetch(url);
		let songs = await response.json();
		this.showResults(songs, query);
	}

	showResults(songs, query) {
		let parent = this.querySelector(".results");
		if (songs.length == 0) {
			parent.replaceChildren("Tomuto dotazu nevyhovují žádné písně 🙁");
			return;
		}

		let heading = document.createElement("h2");
		heading.textContent = `Nalezené písně pro dotaz: ${query}`;

		let ol = document.createElement("ol");
		parent.replaceChildren(heading, ol);

		let results = songs.map(item => {
			let result = document.createElement("song-result");
			result.setData(item);
			return result;
		});
		ol.replaceChildren(...results);
	}
}

const HTML = `<form>
	<label>
		Hledaný výraz: <input type="text" name="query" />
	</label>
	<label><button>🔎</button></label>
</form>
<div class="results"></div>`;

customElements.define("song-search", SongSearch);
