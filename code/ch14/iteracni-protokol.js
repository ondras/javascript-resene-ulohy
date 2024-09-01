function createIterator(text) {
	let separator = "\n";
	let lastIndex = 0;
	return {
		next() {
			if (lastIndex > text.length) {
				return { value: undefined, done: true };
			}

			let index = text.indexOf(separator, lastIndex);
			if (index == -1) {
				let value = text.slice(lastIndex);
				lastIndex = text.length+1;
				return { value, done: false };
			} else {
				let value = text.slice(lastIndex, index);
				lastIndex = index + separator.length;
				return { value, done: false };
			}
		}
	}
}

class LineIterator {
	constructor(text) {
		this.text = text;
	}

	[Symbol.iterator]() {
		return createIterator(this.text);
	}
}

let data = "a\nb\nc";
let iterator = new LineIterator(data);
for (let line of iterator) console.log(line);