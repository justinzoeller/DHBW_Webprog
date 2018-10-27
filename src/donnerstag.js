
window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // donnerstag, 6-7
  var do1 = document.createElement("ul");
  document.getElementById("do6-7").appendChild(do1);

  var do2 = document.createElement("ul");
  document.getElementById("do7-8").appendChild(do2);

  var do3 = document.createElement("ul");
  document.getElementById("do8-9").appendChild(do3);

  var do4 = document.createElement("ul");
  document.getElementById("do9-10").appendChild(do4);

  var do5 = document.createElement("ul");
  document.getElementById("do10-11").appendChild(do5);

  var do6 = document.createElement("ul");
  document.getElementById("do11-12").appendChild(do6);

  var do7 = document.createElement("ul");
  document.getElementById("do12-13").appendChild(do7);

  var do8 = document.createElement("ul");
  document.getElementById("do13-14").appendChild(do8);

  var do9 = document.createElement("ul");
  document.getElementById("do14-15").appendChild(do9);

  var do10 = document.createElement("ul");
  document.getElementById("do15-16").appendChild(do10);

  var do11 = document.createElement("ul");
  document.getElementById("do16-17").appendChild(do11);

  var do12 = document.createElement("ul");
  document.getElementById("do17-18").appendChild(do12);

  var do13 = document.createElement("ul");
  document.getElementById("do18-19").appendChild(do13);

  var do14 = document.createElement("ul");
  document.getElementById("do19-20").appendChild(do14);

  var do15 = document.createElement("ul");
  document.getElementById("do20-21").appendChild(do15);

  var do16 = document.createElement("ul");
  document.getElementById("do21-22").appendChild(do16);

  var do17 = document.createElement("ul");
  document.getElementById("do22-23").appendChild(do17);

  var do18 = document.createElement("ul");
  document.getElementById("do23-24").appendChild(do18);














  // Gamze Variablen




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen


// donnerstag, 6 bis 7

for (i in webprog){

  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

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


// donnerstag, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

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

// donnerstag, 8 bis 9

  for (i in webprog){

    if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

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

// donnerstag, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var do4l1 = document.createElement("li");
        var do4p1 = document.createTextNode(webprog[i].name);
        do4l1.appendChild(do4p1);
        do4.appendChild(do4l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var do4l2 = document.createElement("li");
        var do4p2 = document.createTextNode(webprog[i].name + " " + "!" );
        do4l2.appendChild(do4p2);
        do4.appendChild(do4l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var do4l3 = document.createElement("li");
        var do4p3 = document.createTextNode(webprog[i].name + " " + "!!");
        do4l3.appendChild(do4p3);
        do4.appendChild(do4l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var do4l4 = document.createElement("li"); // Listenelement anlegen
        var do4p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        do4l4.appendChild(do3p4); // dem Listenelement Text anhängen
        do4.appendChild(do3l4);  // Listenelement dem Feld anhängen
      }

    }
  }


// donnerstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do5l1 = document.createElement("li");
      var do5p1 = document.createTextNode(webprog[i].name);
      do5l1.appendChild(do5p1);
      do5.appendChild(do5l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do5l2 = document.createElement("li");
      var do5p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do5l2.appendChild(do5p2);
      do5.appendChild(do5l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do5l3 = document.createElement("li");
      var do5p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do5l3.appendChild(do5p3);
      do5.appendChild(do5l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do5l4 = document.createElement("li"); // Listenelement anlegen
      var do5p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do5l4.appendChild(do5p4); // dem Listenelement Text anhängen
      do5.appendChild(do5l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do6l1 = document.createElement("li");
      var do6p1 = document.createTextNode(webprog[i].name);
      do6l1.appendChild(do6p1);
      do6.appendChild(do6l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do6l2 = document.createElement("li");
      var do6p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do6l2.appendChild(do6p2);
      do6.appendChild(do6l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do6l3 = document.createElement("li");
      var do6p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do6l3.appendChild(do6p3);
      do6.appendChild(do6l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do6l4 = document.createElement("li"); // Listenelement anlegen
      var do6p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do6l4.appendChild(do6p4); // dem Listenelement Text anhängen
      do6.appendChild(do6l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do7l1 = document.createElement("li");
      var do7p1 = document.createTextNode(webprog[i].name);
      do7l1.appendChild(do7p1);
      do7.appendChild(do7l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do7l2 = document.createElement("li");
      var do7p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do7l2.appendChild(do7p2);
      do7.appendChild(m74l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do7l3 = document.createElement("li");
      var do7p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do7l3.appendChild(do7p3);
      do7.appendChild(do7l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do7l4 = document.createElement("li"); // Listenelement anlegen
      var do7p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do7l4.appendChild(do7p4); // dem Listenelement Text anhängen
      do7.appendChild(do7l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do8l1 = document.createElement("li");
      var do8p1 = document.createTextNode(webprog[i].name);
      do8l1.appendChild(do8p1);
      do8.appendChild(do8l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do8l2 = document.createElement("li");
      var do8p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do8l2.appendChild(do8p2);
      do8.appendChild(do8l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do8l3 = document.createElement("li");
      var do8p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do8l3.appendChild(do8p3);
      do8.appendChild(do8l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do8l4 = document.createElement("li"); // Listenelement anlegen
      var do484 = document.createTextNode(webprog[i].name + " " + "!!!");
      do8l4.appendChild(do8p4); // dem Listenelement Text anhängen
      do8.appendChild(do8l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do9l1 = document.createElement("li");
      var do94p1 = document.createTextNode(webprog[i].name);
      do9l1.appendChild(do9p1);
      do9.appendChild(do9l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do4l2 = document.createElement("li");
      var do4p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do9l2.appendChild(do9p2);
      do9.appendChild(do9l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do9l3 = document.createElement("li");
      var do9p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do9l3.appendChild(do9p3);
      do9.appendChild(do9l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do9l4 = document.createElement("li"); // Listenelement anlegen
      var do9p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do9l4.appendChild(do9p4); // dem Listenelement Text anhängen
      do9.appendChild(do9l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do10l1 = document.createElement("li");
      var do10p1 = document.createTextNode(webprog[i].name);
      do10l1.appendChild(do10p1);
      do10.appendChild(do10l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do10l2 = document.createElement("li");
      var do10p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do10l2.appendChild(do10p2);
      do10.appendChild(do10l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do10l3 = document.createElement("li");
      var do10p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do10l3.appendChild(do10p3);
      do10.appendChild(do10l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do10l4 = document.createElement("li"); // Listenelement anlegen
      var do10p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do10l4.appendChild(do10p4); // dem Listenelement Text anhängen
      do10.appendChild(do10l4);  // Listenelement dem Feld anhängen
    }

  }
}


// donnerstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do11l1 = document.createElement("li");
      var do11p1 = document.createTextNode(webprog[i].name);
      do11l1.appendChild(do11p1);
      do11.appendChild(do11l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do11l2 = document.createElement("li");
      var do11p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do11l2.appendChild(do11p2);
      do11.appendChild(do11l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do11l3 = document.createElement("li");
      var do11p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do11l3.appendChild(do11p3);
      do4.appendChild(do11l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do11l4 = document.createElement("li"); // Listenelement anlegen
      var do11p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do11l4.appendChild(do11p4); // dem Listenelement Text anhängen
      do11.appendChild(do11l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do12l1 = document.createElement("li");
      var do12p1 = document.createTextNode(webprog[i].name);
      do12l1.appendChild(do12p1);
      do12.appendChild(do12l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do12l2 = document.createElement("li");
      var do12p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do12l2.appendChild(do12p2);
      do12.appendChild(do12l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do12l3 = document.createElement("li");
      var do12p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do12l3.appendChild(do12p3);
      do12.appendChild(do12l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do12l4 = document.createElement("li"); // Listenelement anlegen
      var do12p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do12l4.appendChild(do12p4); // dem Listenelement Text anhängen
      do12.appendChild(do12l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do13l1 = document.createElement("li");
      var do13p1 = document.createTextNode(webprog[i].name);
      do13l1.appendChild(do13p1);
      do13.appendChild(do13l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do13l2 = document.createElement("li");
      var do13p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do13l2.appendChild(do13p2);
      do13.appendChild(do13l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do13l3 = document.createElement("li");
      var do13p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do13l3.appendChild(do13p3);
      do13.appendChild(do13l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do13l4 = document.createElement("li"); // Listenelement anlegen
      var do13p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do13l4.appendChild(do13p4); // dem Listenelement Text anhängen
      do13.appendChild(do13l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do14l1 = document.createElement("li");
      var do14p1 = document.createTextNode(webprog[i].name);
      do14l1.appendChild(do14p1);
      do14.appendChild(do14l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do14l2 = document.createElement("li");
      var do14p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do14l2.appendChild(do14p2);
      do14.appendChild(do14l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do14l3 = document.createElement("li");
      var do14p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do14l3.appendChild(do14p3);
      do14.appendChild(do14l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do14l4 = document.createElement("li"); // Listenelement anlegen
      var do14p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do14l4.appendChild(do14p4); // dem Listenelement Text anhängen
      do14.appendChild(do14l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do15l1 = document.createElement("li");
      var do15p1 = document.createTextNode(webprog[i].name);
      do15l1.appendChild(do15p1);
      do15.appendChild(do15l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do15l2 = document.createElement("li");
      var do15p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do15l2.appendChild(do15p2);
      do15.appendChild(do15l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do15l3 = document.createElement("li");
      var do15p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do15l3.appendChild(do15p3);
      do15.appendChild(do15l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do15l4 = document.createElement("li"); // Listenelement anlegen
      var do15p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do15l4.appendChild(do15p4); // dem Listenelement Text anhängen
      do15.appendChild(do15l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do16l1 = document.createElement("li");
      var do16p1 = document.createTextNode(webprog[i].name);
      do16l1.appendChild(do16p1);
      do16.appendChild(do16l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do16l2 = document.createElement("li");
      var do16p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do16l2.appendChild(do16p2);
      do16.appendChild(do16l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do16l3 = document.createElement("li");
      var do16p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do16l3.appendChild(do16p3);
      do16.appendChild(do16l3);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do16l4 = document.createElement("li"); // Listenelement anlegen
      var do16p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do16l4.appendChild(do16p4); // dem Listenelement Text anhängen
      do16.appendChild(do16l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do17l1 = document.createElement("li");
      var do17p1 = document.createTextNode(webprog[i].name);
      do17l1.appendChild(do17p1);
      do17.appendChild(do17l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do17l2 = document.createElement("li");
      var do17p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do17l2.appendChild(do17p2);
      do17.appendChild(do17l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do17l3 = document.createElement("li");
      var do17p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do17l3.appendChild(do17p3);
      do17.appendChild(do17l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do17l4 = document.createElement("li"); // Listenelement anlegen
      var do17p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do17l4.appendChild(do17p4); // dem Listenelement Text anhängen
      do17.appendChild(do17l4);  // Listenelement dem Feld anhängen
    }

  }
}

// donnerstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "donnerstag" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do18l1 = document.createElement("li");
      var do18p1 = document.createTextNode(webprog[i].name);
      do18l1.appendChild(do18p1);
      do18.appendChild(do18l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do18l2 = document.createElement("li");
      var do18p2 = document.createTextNode(webprog[i].name + " " + "!" );
      do18l2.appendChild(do18p2);
      do18.appendChild(do18l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do18l3 = document.createElement("li");
      var do18p3 = document.createTextNode(webprog[i].name + " " + "!!");
      do18l3.appendChild(do18p3);
      do18.appendChild(do18l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do18l4 = document.createElement("li"); // Listenelement anlegen
      var do18p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      do18l4.appendChild(do18p4); // dem Listenelement Text anhängen
      do18.appendChild(do18l4);  // Listenelement dem Feld anhängen
    }


}
}
}
)
}
