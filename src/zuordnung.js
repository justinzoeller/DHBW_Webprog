// Referenz auf Google firebase



window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  var mo1 = document.createElement("mo1");
  var mo2 = document.createElement("li");
  var mo3 = document.createElement("li");



  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
    var anzahlChild = snapshot.numChildren();
    var webprog = snapshot.val();

  // aus der Datenbank auslesen
  for (i in webprog){

    if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var mo1p1 = document.createTextNode(webprog[i].name + "\r\n");
        mo1.appendChild(mo1p1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var mo1p2 = document.createTextNode(webprog[i].name + "" + "!\r\n" );
        mo1.appendChild(mo1p2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var mo1p3 = document.createTextNode(webprog[i].name + "" + "!!\r\n");
        mo1.appendChild(mo1p3);
      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var mo1p4 = document.createTextNode(webprog[i].name + "" + "!!!\r\n");
        mo1.appendChild(mo1p4);
      }

      document.getElementById("mo8-9").appendChild(mo1);

    }
  }
}
)
}
