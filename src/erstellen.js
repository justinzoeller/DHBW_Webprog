// Abrufen des Formulars

let name = document.getElementById("name").value();
let tag = document.getElementById("tag").value();
let zeitvon = document.getElementById("zeitvon").value;
let zeitbis = document.getElementById("zeitbis").value;
let prio = document.getElementById("prio").value();

// Zuordnung der Angaben in das richtige Eingabefeld

// Anordnung anhand von Tag, Uhrzeit und Name

function einordnen (name, tag, zeitvon, zeitbis, prio) {
  if (tag=="Montag" && zeitvon=="8:00 Uhr" && zeitbis=="9:00 Uhr") {
    document.getElementById("mo8-9").innerHTML = name;
  }
  window.onload = function () {
	document.getElementById("einreichen")
		.onclick = einordnen;
}
