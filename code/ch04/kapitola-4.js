let form = document.querySelector("form");
let email = form.querySelector("[name=email]");
let tel = form.querySelector("[name=tel]");

const TEL_RE = /^\+?\d{5,12}$/;

function isEmpty(input) {
	return input.value.trim() == "";
}

function checkForm(e) {
	if (isEmpty(email) && isEmpty(tel)) {
		alert("Vyplňte e-mail nebo telefon");
		e.preventDefault();
		return;
	}

	if (!isEmpty(tel)) {
		let t = tel.value;
		if (!t.match(TEL_RE)) {
			tel.classList.add("error");
			e.preventDefault();
		}
	}
}

form.addEventListener("submit", checkForm);