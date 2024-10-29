let DATA = [
	{name: "Kávu si osladím", date: 63111600, price: 123},
	{name: "Lady Carneval", date: "1968-10-07", price: 345},
	{name: "Trezor", date: "1965-04-27", price: 456}
];

let priceOptions = {style:"currency", currency:"CZK"};
let priceFormat = new Intl.NumberFormat(undefined, priceOptions);
let dateOptions = {dateStyle:"long"};
let dateFormat = new Intl.DateTimeFormat(undefined, dateOptions);

function buildItem(item) {
	let li = document.createElement("li");

	let dateIsNumber = (typeof(item.date) == "number");
	let date = (dateIsNumber ? new Date(item.date*1000) : new Date(item.date));

	li.innerHTML = `
		<h3></h3>
		<span>Datum: ${dateFormat.format(date)}</span>
		<span>Cena: ${priceFormat.format(item.price)}</span>
	`;
	li.children[0].textContent = item.name;  // textContent kvůli XSS
	return li;
}

let items  = DATA.map(buildItem);
document.querySelector("ul").replaceChildren(...items);
