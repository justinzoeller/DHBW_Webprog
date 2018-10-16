// Einlesen der Daten aus der Eingabe für Aktivität //

let nameakt = document.getElementById(nameakt).value;
let zeitbis = document.getElementById(zeitbis).value;
let zeitvon = document.getElementById(zeitbis).value;

// Abschicken des Formulars

let abschicken = event => {
  let nameakt = document.getElementById(nameakt).value;
  let zeitbis = document.getElementById(zeitbis).value;
  let zeitvon = document.getElementById(zeitbis).value;
  let okay = true;
  let message = "";

  // Überprüfung des Eingabefelds
   if (nameakt == "") {
     okay = false;
     message = "Hey, du hast vergessen, deiner Aktivität einen Namen zu geben!";
   }
}
}
