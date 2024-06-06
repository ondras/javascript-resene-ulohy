function getError() {
	return username.labels[0].querySelector(".error");
}

function hideError() {
	let error = getError();
	if (error) { error.remove(); }
}

function showError(suggested) {
	hideError();
	let error = document.createElement("div");
	error.className = "error";
	error.textContent = `Jméno je již zabráno, zkuste třeba "${suggested}"`;
	username.labels[0].append(error);
}

function onLoad(e) {
	let data = e.target.response;
	if (data.available) {
		hideError();
	} else {
		showError(data.suggested);
	}
}

function checkUsername() {
	let xhr = new XMLHttpRequest();
	let u = encodeURIComponent(username.value);
	let url = `/check-username?username=${u}`;
	xhr.responseType = "json";
	xhr.open("GET", url);
	xhr.send();
	xhr.addEventListener("load", onLoad);
}

let username = document.querySelector("[name=username]");
username.addEventListener("blur", checkUsername);
