const MAX = 1000;

async function loadImage(file) {
	let img = new Image();
	img.src = URL.createObjectURL(file);
	await img.decode();
	return img;
}

function resizeImage(img) {
	const { width, height } = img;
	let scale = Math.max(width/MAX, height/MAX, 1);
	let canvas = document.createElement("canvas");
	canvas.width = Math.round(width / scale);
	canvas.height = Math.round(height / scale);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	return canvas.toDataURL("image/jpeg");
}

async function onChange(e) {
	let file = e.target.files[0];
	if (!file) return;

	let sourceImage = await loadImage(file);
	let targetImage = resizeImage(sourceImage);

	fetch("/upload", {
		method: "POST",
		body: targetImage
	});
}

let input = document.querySelector("[type=file]");
input.addEventListener("change", onChange);
