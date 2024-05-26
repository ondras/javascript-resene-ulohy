import { loadComments } from "./kapitola-8.js";


export default class Comment {
	constructor(data) {
		let node = document.createElement("li");
		node.textContent = `${data.author}: ${data.text}`;

		if (!data.approved) { node.append(this.buildApproveButton()); }
		node.append(this.buildDeleteButton());

		this.id = data.id;
		this.node = node;
	}

	buildApproveButton() {
		let button = buildButton("Schválit");
		button.addEventListener("click", async e => {
			await this.approve();
			loadComments();
		});
		return button;
	}

	buildDeleteButton() {
		let button = buildButton("Smazat");
		button.addEventListener("click", async e => {
			await this.delete();
			loadComments();
		});
		return button;
	}

	delete() {
		return fetch(`/comments/${this.id}`, {method: "DELETE"});
	}

	approve(id) {
		return fetch(`/comments/${this.id}/approve`, {method: "POST"});
	}
}

function buildButton(label) {
	let button = document.createElement("button");
	button.textContent = label;
	return button;
}
