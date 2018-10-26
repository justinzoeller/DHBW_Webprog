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
  for (i in webprog){  //muss bleiben, alles drunter

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



      // Für Donnerstag, 6-7 Uhr: Parent-Listen-Element, das an das Feld angehängt wird.
      var do1 = document.createElement("ul");
      document.getElementById("do6-7").appendChild(do1);
      // Für Donnerstag7-8 Uhr
      var do2 = document.createElement("ul");
      document.getElementById("do7-8").appendChild(do2);
      // Für Donnerstag8-9 Uhr
      var do3 = document.createElement("ul");
      document.getElementById("do8-9").appendChild(do3);
      // Für Donnerstag9-10 Uhr
      var do4 = document.createElement("ul");
      document.getElementById("do9-10").appendChild(do4);
      // Für Donnerstag10-11 Uhr
      var do5 = document.createElement("ul");
      document.getElementById("do10-11").appendChild(do5);
      // Für Donnerstag11-12 Uhr
      var do6 = document.createElement("ul");
      document.getElementById("do11-12").appendChild(do6);
      // Für Donnerstag12-13 Uhr
      var do7 = document.createElement("ul");
      document.getElementById("do12-13").appendChild(do7);
      // Für Donnerstag13-14 Uhr
      var do8 = document.createElement("ul");
      document.getElementById("do13-14").appendChild(do8);
      // Für Donnerstag14-15 Uhr
      var do9 = document.createElement("ul");
      document.getElementById("do14-15").appendChild(do9);
      // Für Donnerstag15-16 Uhr
      var do10 = document.createElement("ul");
      document.getElementById("do15-16").appendChild(do10);
      // Für Donnerstag16-17 Uhr
      var do11 = document.createElement("ul");
      document.getElementById("do16-17").appendChild(do11);
      // Für Donnerstag17-18 Uhr
      var do12 = document.createElement("ul");
      document.getElementById("do17-18").appendChild(do12);
      // Für Donnerstag18-19 Uhr
      var do13 = document.createElement("ul");
      document.getElementById("do18-19").appendChild(do13);
      // Für Donnerstag19-20 Uhr
      var do14 = document.createElement("ul");
      document.getElementById("do19-20").appendChild(do14);
      // Für Donnerstag20-21 Uhr
      var do15 = document.createElement("ul");
      document.getElementById("do20-21").appendChild(do15);
      // Für Donnerstag21-22 Uhr
      var do16 = document.createElement("ul");
      document.getElementById("do21-22").appendChild(do16);
      // Für Donnerstag22-23 Uhr
      var do17 = document.createElement("ul");
      document.getElementById("do22-23").appendChild(do17);
      // Für Donnerstag23-24 Uhr
      var do18 = document.createElement("ul");
      document.getElementById("do23-24").appendChild(do18);




      // Donnerstag, 6-7
                if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

            if (webprog[i].prio == "keine Priorität") {
              // Wenn keine Priorität, keine zusätzliche Zeichen
              var do1l1 = document.createElement("li");
              var do1p1 = document.createTextNode(webprog[i].name);
              do1l1.appendChild(do1p1);
              do1.appendChild(do1l1);
            }

            if (webprog[i].prio == "wenig Priorität") {
              // Wenn wenig Priorität, nur ein Ausrufezeichen
              var do1l2 = document.createElement("li");
              var do1p2 = document.createTextNode(webprog[i].name + " " + "!" );
              do1l2.appendChild(do1p2);
              do1.appendChild(do1l2);
            }

            if (webprog[i].prio == "mittlere Priorität") {
              // Wenn mittlere Priorität, dann zwei Ausrufezeichen
              var do1l3 = document.createElement("li");
              var do1p3 = document.createTextNode(webprog[i].name + " " + "!!");
              do1l3.appendChild(do1p3);
              do1.appendChild(do1l3);


            }

            if (webprog[i].prio == "hohe Priorität") {
              // Wenn hohe Priorität, dann drei Ausrufezeichen
              var do1l4 = document.createElement("li"); // Listenelement anlegen
              var do1p4 = document.createTextNode(webprog[i].name + " " + "!!!");
              do1l4.appendChild(do1p4); // dem Listenelement Text anhängen
              do1.appendChild(do1l4);  // Listenelement dem Feld anhängen
            }

          }

        }

//Donnerstag 7-8
if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

if (webprog[i].prio == "keine Priorität") {
// Wenn keine Priorität, keine zusätzliche Zeichen
var do2l1 = document.createElement("li");
var do2p1 = document.createTextNode(webprog[i].name);
do2l1.appendChild(do2p1);
do2.appendChild(do2l1);
}

if (webprog[i].prio == "wenig Priorität") {
// Wenn wenig Priorität, nur ein Ausrufezeichen
var do2l2 = document.createElement("li");
var do2p2 = document.createTextNode(webprog[i].name + " " + "!" );
do2l2.appendChild(do2p2);
do2.appendChild(do2l2);
}

if (webprog[i].prio == "mittlere Priorität") {
// Wenn mittlere Priorität, dann zwei Ausrufezeichen
var do2l3 = document.createElement("li");
var do2p3 = document.createTextNode(webprog[i].name + " " + "!!");
do2l3.appendChild(do2p3);
do2.appendChild(do2l3);


}

if (webprog[i].prio == "hohe Priorität") {
// Wenn hohe Priorität, dann drei Ausrufezeichen
var do2l4 = document.createElement("li"); // Listenelement anlegen
var do2p4 = document.createTextNode(webprog[i].name + " " + "!!!");
do2l4.appendChild(do2p4); // dem Listenelement Text anhängen
do2.appendChild(do2l4);  // Listenelement dem Feld anhängen
}

}

}

//Donnerstag 8-9
if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

if (webprog[i].prio == "keine Priorität") {
// Wenn keine Priorität, keine zusätzliche Zeichen
var do3l1 = document.createElement("li");
var do3p1 = document.createTextNode(webprog[i].name);
do3l1.appendChild(do3p1);
do3.appendChild(do3l1);
}

if (webprog[i].prio == "wenig Priorität") {
// Wenn wenig Priorität, nur ein Ausrufezeichen
var do3l2 = document.createElement("li");
var do3p2 = document.createTextNode(webprog[i].name + " " + "!" );
do3l2.appendChild(do3p2);
do3.appendChild(do3l2);
}

if (webprog[i].prio == "mittlere Priorität") {
// Wenn mittlere Priorität, dann zwei Ausrufezeichen
var do3l3 = document.createElement("li");
var do3p3 = document.createTextNode(webprog[i].name + " " + "!!");
do3l3.appendChild(do3p3);
do3.appendChild(do3l3);

}

if (webprog[i].prio == "hohe Priorität") {
// Wenn hohe Priorität, dann drei Ausrufezeichen
var do3l4 = document.createElement("li"); // Listenelement anlegen
var do3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
do3l4.appendChild(do3p4); // dem Listenelement Text anhängen
do3.appendChild(do3l4);  // Listenelement dem Feld anhängen
}

}

}
//Donnerstag9-10



    // Sonntag














    // Sonntag,  Feld-ID Justin so17-18





  }
}
)
}
