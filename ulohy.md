Pro fanoušky Karla Gotta chystáme vzpomínkový web, který bude obsahovat i texty písní. Některé jsou ale příliš dlouhé, takže je nutné zobrazit jen prvních několik znaků a zbytek textu skrýt. Po kliknutí na tlačítko se ukáže celý text písně.

```html
<h1>Mám styl Čendy</h1>
<pre>
Mezi námi je mnoho chvil
A pokusů, abych se ti zavděčil
Jenomže od tebe se člověk moc nedoví
Stále básníš o ňákém svém záhadném Čendovi
</pre>

<script>
let song = document.querySelector("pre");
let text = song.textContent;

let visible = text.substring(0, 50);
song.textContent = visible + "...";

let button = document.createElement("button");
button.textContent = "zobrazit celý text";
song.append(button);

function showCompleteText() {
	song.textContent = text;
}
button.addEventListener("click", showCompleteText);
</script>
```
