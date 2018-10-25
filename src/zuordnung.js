// Referenz auf Google firebase



window.onload = function () {

  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
    var anzahlChild = snapshot.numChildren();
    var webprog = snapshot.val();

  // aus der Datenbank auslesen
  for (i in webprog){

    // jetzt folgen die Abfragen für die Zuordnung

    // Montag, 8-9



    if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      // Prioritätsprüfung & - darstellung

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        document.getElementById("mo8-9").innerHTML = webprog[i].name;
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        document.getElementById("mo8-9").innerHTML = webprog[i].name + " " + "!";
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        document.getElementById("mo8-9").innerHTML = webprog[i].name + " " + "!!";
      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        document.getElementById("mo8-9").innerHTML = webprog[i].name + " " + "!!!";
      }

    }
  }
}
)
}
