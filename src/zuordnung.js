// Referenz auf Google firebase



window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // Montag, 6-7
  var mo1 = document.createElement("ul");
  document.getElementById("mo6-7").appendChild(mo1);


  // Für Montag, 8-9 Uhr: Parent-Listen-Element, das an das Feld angehängt wird.
  var mo3 = document.createElement("ul");
  document.getElementById("mo8-9").appendChild(mo3);

  // Montag, 9-10 Uhr
  var mo4 = document.createElement("ul");
  document.getElementById.appendChild("mo9-10");




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen
  for (i in webprog){

    // Montag, 6-7
    if (webprog[i].tag = "Montag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis == "7.00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var mo1l1 = document.createElement("li");
        var mo1p1 = document.createTextNode(webprog[i].name);
        mo1l1.appendChild(mo1p1);
        mo1.appendChild(mo1l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var mo1l2 = document.createElement("li");
        var mo1p2 = document.createTextNode(webprog[i].name + " " + "!" );
        mo1l2.appendChild(mo1p2);
        mo1.appendChild(mo1l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var mo1l3 = document.createElement("li");
        var mo1p3 = document.createTextNode(webprog[i].name + " " + "!!");
        mo1l3.appendChild(mo1p3);
        mo1.appendChild(mo1l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var mo1l4 = document.createElement("li"); // Listenelement anlegen
        var mo1p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        mo1l4.appendChild(mo3p4); // dem Listenelement Text anhängen
        mo1.appendChild(mo3l4);  // Listenelement dem Feld anhängen
      }
    }


    if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var mo3l1 = document.createElement("li");
        var mo3p1 = document.createTextNode(webprog[i].name);
        mo3l1.appendChild(mo3p1);
        mo3.appendChild(mo3l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var mo3l2 = document.createElement("li");
        var mo3p2 = document.createTextNode(webprog[i].name + " " + "!" );
        mo3l2.appendChild(mo3p2);
        mo3.appendChild(mo3l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var mo3l3 = document.createElement("li");
        var mo3p3 = document.createTextNode(webprog[i].name + " " + "!!");
        mo3l3.appendChild(mo3p3);
        mo3.appendChild(mo3l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var mo3l4 = document.createElement("li"); // Listenelement anlegen
        var mo3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        mo3l4.appendChild(mo3p4); // dem Listenelement Text anhängen
        mo3.appendChild(mo3l4);  // Listenelement dem Feld anhängen
      }

    }



































    // Donnerstag, Freitag, Samstag
















    // Sonntag














    // Sonntag,  Feld-ID Justin so17-18





  }
}
)
}
