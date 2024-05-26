import Comment from "./comment.js";

export async function loadComments() {
	let response = await fetch("/comments");
	let comments = await response.json();

	let newList = document.querySelector("#new");
	let approvedList = document.querySelector("#approved");
	newList.replaceChildren();
	approvedList.replaceChildren();

	comments.forEach(c => {
		let comment = new Comment(c);
		(c.approved ? approvedList : newList).append(comment.node);
	});
}

loadComments();
