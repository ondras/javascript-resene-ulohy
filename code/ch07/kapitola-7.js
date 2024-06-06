function deleteComment(id) {
	return fetch(`/comments/${id}`, {method: "DELETE"});
}

function approveComment(id) {
	return fetch(`/comments/${id}/approve`, {method: "POST"});
}

function buildButton(label) {
	let button = document.createElement("button");
	button.textContent = label;
	return button;
}

function buildComment(comment) {
	let node = document.createElement("li");
	node.textContent = `${comment.author}: ${comment.text}`;

	if (!comment.approved) {
		let approveButton = buildButton("Schválit");
		node.append(approveButton);
		approveButton.addEventListener("click", async e => {
			await approveComment(comment.id);
			loadComments();
		});
	}

	let deleteButton = buildButton("Smazat");
	node.append(deleteButton);
	deleteButton.addEventListener("click", async e => {
		await deleteComment(comment.id);
		loadComments();
	});

	return node;
}

async function loadComments() {
	let response = await fetch("/comments");
	let comments = await response.json();

	let newNodes = comments.filter(c => !c.approved).map(buildComment);
	document.querySelector("#new").replaceChildren(...newNodes);

	let approvedNodes = comments.filter(c => c.approved).map(buildComment);
	document.querySelector("#approved").replaceChildren(...approvedNodes);
}

loadComments();
