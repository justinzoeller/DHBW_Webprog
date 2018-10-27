// Referenz auf Google firebase



window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // Dienstag, 6-7
  var di1 = document.createElement("ul");
  document.getElementById("di6-7").appendChild(di1);

  var di2 = document.createElement("ul");
  document.getElementById("di7-8").appendChild(di2);

  var di3 = document.createElement("ul");
  document.getElementById("di8-9").appendChild(di3);

  var di4 = document.createElement("ul");
  document.getElementById("di9-10").appendChild(di4);

  var di5 = document.createElement("ul");
  document.getElementById("di10-11").appendChild(di5);

  var di6 = document.createElement("ul");
  document.getElementById("di11-12").appendChild(di6);

  var di7 = document.createElement("ul");
  document.getElementById("di12-13").appendChild(di7);

  var di8 = document.createElement("ul");
  document.getElementById("di13-14").appendChild(di8);

  var di9 = document.createElement("ul");
  document.getElementById("di14-15").appendChild(di9);

  var di10 = document.createElement("ul");
  document.getElementById("di15-16").appendChild(di10);

  var di11 = document.createElement("ul");
  document.getElementById("di16-17").appendChild(di11);

  var di12 = document.createElement("ul");
  document.getElementById("di17-18").appendChild(di12);

  var di13 = document.createElement("ul");
  document.getElementById("di18-19").appendChild(di13);

  var di14 = document.createElement("ul");
  document.getElementById("di19-20").appendChild(di14);

  var di15 = document.createElement("ul");
  document.getElementById("di20-21").appendChild(di15);

  var di16 = document.createElement("ul");
  document.getElementById("di21-22").appendChild(di16);

  var di17 = document.createElement("ul");
  document.getElementById("di22-23").appendChild(di17);

  var di18 = document.createElement("ul");
  document.getElementById("di23-24").appendChild(di18);














  // Gamze Variablen




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen


// Dienstag, 6 bis 7

for (i in webprog){

  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di1l1 = document.createElement("li");
      var di1p1 = document.createTextNode(webprog[i].name);
      di1l1.appendChild(di1p1);
      di1.appendChild(di1l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di1l2 = document.createElement("li");
      var di1p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di1l2.appendChild(di1p2);
      di1.appendChild(di1l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di1l3 = document.createElement("li");
      var di1p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di1l3.appendChild(di1p3);
      di1.appendChild(di1l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di1l4 = document.createElement("li"); // Listenelement anlegen
      var di1p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di1l4.appendChild(di1p4); // dem Listenelement Text anhängen
      di1.appendChild(di1l4);  // Listenelement dem Feld anhängen
    }

  }

}


// Dienstag, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di3l1 = document.createElement("li");
      var di3p1 = document.createTextNode(webprog[i].name);
      di3l1.appendChild(di3p1);
      di3.appendChild(di3l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di3l2 = document.createElement("li");
      var di3p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di3l2.appendChild(di3p2);
      di3.appendChild(di3l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di3l3 = document.createElement("li");
      var di3p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di3l3.appendChild(di3p3);
      di3.appendChild(di3l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di3l4 = document.createElement("li"); // Listenelement anlegen
      var di3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di3l4.appendChild(di3p4); // dem Listenelement Text anhängen
      di3.appendChild(di3l4);  // Listenelement dem Feld anhängen
    }

  }

}

// Dienstag, 8 bis 9

  for (i in webprog){

    if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var di3l1 = document.createElement("li");
        var di3p1 = document.createTextNode(webprog[i].name);
        di3l1.appendChild(di3p1);
        di3.appendChild(di3l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var di3l2 = document.createElement("li");
        var di3p2 = document.createTextNode(webprog[i].name + " " + "!" );
        di3l2.appendChild(di3p2);
        di3.appendChild(di3l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var di3l3 = document.createElement("li");
        var di3p3 = document.createTextNode(webprog[i].name + " " + "!!");
        di3l3.appendChild(di3p3);
        di3.appendChild(di3l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var di3l4 = document.createElement("li"); // Listenelement anlegen
        var di3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        di3l4.appendChild(di3p4); // dem Listenelement Text anhängen
        di3.appendChild(di3l4);  // Listenelement dem Feld anhängen
      }

    }

  }

// Dienstag, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var di4l1 = document.createElement("li");
        var di4p1 = document.createTextNode(webprog[i].name);
        di4l1.appendChild(di4p1);
        di4.appendChild(di4l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var di4l2 = document.createElement("li");
        var di4p2 = document.createTextNode(webprog[i].name + " " + "!" );
        di4l2.appendChild(di4p2);
        di4.appendChild(di4l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var di4l3 = document.createElement("li");
        var di4p3 = document.createTextNode(webprog[i].name + " " + "!!");
        di4l3.appendChild(di4p3);
        di4.appendChild(di4l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var di4l4 = document.createElement("li"); // Listenelement anlegen
        var di4p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        di4l4.appendChild(di3p4); // dem Listenelement Text anhängen
        di4.appendChild(di3l4);  // Listenelement dem Feld anhängen
      }

    }
  }


// Dienstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di5l1 = document.createElement("li");
      var di5p1 = document.createTextNode(webprog[i].name);
      di5l1.appendChild(di5p1);
      di5.appendChild(di5l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di5l2 = document.createElement("li");
      var di5p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di5l2.appendChild(di5p2);
      di5.appendChild(di5l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di5l3 = document.createElement("li");
      var di5p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di5l3.appendChild(di5p3);
      di5.appendChild(di5l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di5l4 = document.createElement("li"); // Listenelement anlegen
      var di5p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di5l4.appendChild(di5p4); // dem Listenelement Text anhängen
      di5.appendChild(di5l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di6l1 = document.createElement("li");
      var di6p1 = document.createTextNode(webprog[i].name);
      di6l1.appendChild(di6p1);
      di6.appendChild(di6l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di6l2 = document.createElement("li");
      var di6p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di6l2.appendChild(di6p2);
      di6.appendChild(di6l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di6l3 = document.createElement("li");
      var di6p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di6l3.appendChild(di6p3);
      di6.appendChild(di6l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di6l4 = document.createElement("li"); // Listenelement anlegen
      var di6p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di6l4.appendChild(di6p4); // dem Listenelement Text anhängen
      di6.appendChild(di6l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di7l1 = document.createElement("li");
      var di7p1 = document.createTextNode(webprog[i].name);
      di7l1.appendChild(di7p1);
      di7.appendChild(di7l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di7l2 = document.createElement("li");
      var di7p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di7l2.appendChild(di7p2);
      di7.appendChild(m74l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di7l3 = document.createElement("li");
      var di7p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di7l3.appendChild(di7p3);
      di7.appendChild(di7l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di7l4 = document.createElement("li"); // Listenelement anlegen
      var di7p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di7l4.appendChild(di7p4); // dem Listenelement Text anhängen
      di7.appendChild(di7l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di8l1 = document.createElement("li");
      var di8p1 = document.createTextNode(webprog[i].name);
      di8l1.appendChild(di8p1);
      di8.appendChild(di8l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di8l2 = document.createElement("li");
      var di8p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di8l2.appendChild(di8p2);
      di8.appendChild(di8l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di8l3 = document.createElement("li");
      var di8p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di8l3.appendChild(di8p3);
      di8.appendChild(di8l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di8l4 = document.createElement("li"); // Listenelement anlegen
      var di484 = document.createTextNode(webprog[i].name + " " + "!!!");
      di8l4.appendChild(di8p4); // dem Listenelement Text anhängen
      di8.appendChild(di8l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di9l1 = document.createElement("li");
      var di94p1 = document.createTextNode(webprog[i].name);
      di9l1.appendChild(di9p1);
      di9.appendChild(di9l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di4l2 = document.createElement("li");
      var di4p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di9l2.appendChild(di9p2);
      di9.appendChild(di9l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di9l3 = document.createElement("li");
      var di9p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di9l3.appendChild(di9p3);
      di9.appendChild(di9l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di9l4 = document.createElement("li"); // Listenelement anlegen
      var di9p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di9l4.appendChild(di9p4); // dem Listenelement Text anhängen
      di9.appendChild(di9l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di10l1 = document.createElement("li");
      var di10p1 = document.createTextNode(webprog[i].name);
      di10l1.appendChild(di10p1);
      di10.appendChild(di10l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di10l2 = document.createElement("li");
      var di10p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di10l2.appendChild(di10p2);
      di10.appendChild(di10l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di10l3 = document.createElement("li");
      var di10p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di10l3.appendChild(di10p3);
      di10.appendChild(di10l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di10l4 = document.createElement("li"); // Listenelement anlegen
      var di10p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di10l4.appendChild(di10p4); // dem Listenelement Text anhängen
      di10.appendChild(di10l4);  // Listenelement dem Feld anhängen
    }

  }
}


// Dienstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di11l1 = document.createElement("li");
      var di11p1 = document.createTextNode(webprog[i].name);
      di11l1.appendChild(di11p1);
      di11.appendChild(di11l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di11l2 = document.createElement("li");
      var di11p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di11l2.appendChild(di11p2);
      di11.appendChild(di11l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di11l3 = document.createElement("li");
      var di11p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di11l3.appendChild(di11p3);
      di4.appendChild(di11l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di11l4 = document.createElement("li"); // Listenelement anlegen
      var di11p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di11l4.appendChild(di11p4); // dem Listenelement Text anhängen
      di11.appendChild(di11l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di12l1 = document.createElement("li");
      var di12p1 = document.createTextNode(webprog[i].name);
      di12l1.appendChild(di12p1);
      di12.appendChild(di12l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di12l2 = document.createElement("li");
      var di12p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di12l2.appendChild(di12p2);
      di12.appendChild(di12l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di12l3 = document.createElement("li");
      var di12p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di12l3.appendChild(di12p3);
      di12.appendChild(di12l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di12l4 = document.createElement("li"); // Listenelement anlegen
      var di12p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di12l4.appendChild(di12p4); // dem Listenelement Text anhängen
      di12.appendChild(di12l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di13l1 = document.createElement("li");
      var di13p1 = document.createTextNode(webprog[i].name);
      di13l1.appendChild(di13p1);
      di13.appendChild(di13l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di13l2 = document.createElement("li");
      var di13p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di13l2.appendChild(di13p2);
      di13.appendChild(di13l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di13l3 = document.createElement("li");
      var di13p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di13l3.appendChild(di13p3);
      di13.appendChild(di13l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di13l4 = document.createElement("li"); // Listenelement anlegen
      var di13p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di13l4.appendChild(di13p4); // dem Listenelement Text anhängen
      di13.appendChild(di13l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di14l1 = document.createElement("li");
      var di14p1 = document.createTextNode(webprog[i].name);
      di14l1.appendChild(di14p1);
      di14.appendChild(di14l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di14l2 = document.createElement("li");
      var di14p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di14l2.appendChild(di14p2);
      di14.appendChild(di14l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di14l3 = document.createElement("li");
      var di14p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di14l3.appendChild(di14p3);
      di14.appendChild(di14l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di14l4 = document.createElement("li"); // Listenelement anlegen
      var di14p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di14l4.appendChild(di14p4); // dem Listenelement Text anhängen
      di14.appendChild(di14l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di15l1 = document.createElement("li");
      var di15p1 = document.createTextNode(webprog[i].name);
      di15l1.appendChild(di15p1);
      di15.appendChild(di15l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di15l2 = document.createElement("li");
      var di15p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di15l2.appendChild(di15p2);
      di15.appendChild(di15l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di15l3 = document.createElement("li");
      var di15p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di15l3.appendChild(di15p3);
      di15.appendChild(di15l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di15l4 = document.createElement("li"); // Listenelement anlegen
      var di15p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di15l4.appendChild(di15p4); // dem Listenelement Text anhängen
      di15.appendChild(di15l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di16l1 = document.createElement("li");
      var di16p1 = document.createTextNode(webprog[i].name);
      di16l1.appendChild(di16p1);
      di16.appendChild(di16l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di16l2 = document.createElement("li");
      var di16p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di16l2.appendChild(di16p2);
      di16.appendChild(di16l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di16l3 = document.createElement("li");
      var di16p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di16l3.appendChild(di16p3);
      di16.appendChild(di16l3);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di16l4 = document.createElement("li"); // Listenelement anlegen
      var di16p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di16l4.appendChild(di16p4); // dem Listenelement Text anhängen
      di16.appendChild(di16l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di17l1 = document.createElement("li");
      var di17p1 = document.createTextNode(webprog[i].name);
      di17l1.appendChild(di17p1);
      di17.appendChild(di17l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di17l2 = document.createElement("li");
      var di17p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di17l2.appendChild(di17p2);
      di17.appendChild(di17l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di17l3 = document.createElement("li");
      var di17p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di17l3.appendChild(di17p3);
      di17.appendChild(di17l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di17l4 = document.createElement("li"); // Listenelement anlegen
      var di17p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di17l4.appendChild(di17p4); // dem Listenelement Text anhängen
      di17.appendChild(di17l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Dienstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di18l1 = document.createElement("li");
      var di18p1 = document.createTextNode(webprog[i].name);
      di18l1.appendChild(di18p1);
      di18.appendChild(di18l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di18l2 = document.createElement("li");
      var di18p2 = document.createTextNode(webprog[i].name + " " + "!" );
      di18l2.appendChild(di18p2);
      di18.appendChild(di18l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di18l3 = document.createElement("li");
      var di18p3 = document.createTextNode(webprog[i].name + " " + "!!");
      di18l3.appendChild(di18p3);
      di18.appendChild(di18l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di18l4 = document.createElement("li"); // Listenelement anlegen
      var di18p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      di18l4.appendChild(di18p4); // dem Listenelement Text anhängen
      di18.appendChild(di18l4);  // Listenelement dem Feld anhängen
    }


}
}

}
)
}
