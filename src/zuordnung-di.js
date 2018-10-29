// Referenz auf Google firebase



window.onload = function () {

  // Für mie einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // mienstag, 6-7
  var mi1 = document.createElement("ul");
  document.getElementById("mi6-7").appendChild(mi1);

  var mi2 = document.createElement("ul");
  document.getElementById("mi7-8").appendChild(mi2);

  var mi3 = document.createElement("ul");
  document.getElementById("mi8-9").appendChild(mi3);

  var mi4 = document.createElement("ul");
  document.getElementById("mi9-10").appendChild(mi4);

  var mi5 = document.createElement("ul");
  document.getElementById("mi10-11").appendChild(mi5);

  var mi6 = document.createElement("ul");
  document.getElementById("mi11-12").appendChild(mi6);

  var mi7 = document.createElement("ul");
  document.getElementById("mi12-13").appendChild(mi7);

  var mi8 = document.createElement("ul");
  document.getElementById("mi13-14").appendChild(mi8);

  var mi9 = document.createElement("ul");
  document.getElementById("mi14-15").appendChild(mi9);

  var mi10 = document.createElement("ul");
  document.getElementById("mi15-16").appendChild(mi10);

  var mi11 = document.createElement("ul");
  document.getElementById("mi16-17").appendChild(mi11);

  var mi12 = document.createElement("ul");
  document.getElementById("mi17-18").appendChild(mi12);

  var mi13 = document.createElement("ul");
  document.getElementById("mi18-19").appendChild(mi13);

  var mi14 = document.createElement("ul");
  document.getElementById("mi19-20").appendChild(mi14);

  var mi15 = document.createElement("ul");
  document.getElementById("mi20-21").appendChild(mi15);

  var mi16 = document.createElement("ul");
  document.getElementById("mi21-22").appendChild(mi16);

  var mi17 = document.createElement("ul");
  document.getElementById("mi22-23").appendChild(mi17);

  var mi18 = document.createElement("ul");
  document.getElementById("mi23-24").appendChild(mi18);














  // Gamze Variablen




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen


// mienstag, 6 bis 7

for (i in webprog){

  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi1l1 = document.createElement("li");
      var mi1p1 = document.createTextNode(webprog[i].name);
      mi1l1.appendChild(mi1p1);
      mi1.appendChild(mi1l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi1l2 = document.createElement("li");
      var mi1p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi1l2.appendChild(mi1p2);
      mi1.appendChild(mi1l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi1l3 = document.createElement("li");
      var mi1p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi1l3.appendChild(mi1p3);
      mi1.appendChild(mi1l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi1l4 = document.createElement("li"); // Listenelement anlegen
      var mi1p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi1l4.appendChild(mi1p4); // dem Listenelement Text anhängen
      mi1.appendChild(mi1l4);  // Listenelement dem Feld anhängen
    }

  }

}


// mienstag, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi3l1 = document.createElement("li");
      var mi3p1 = document.createTextNode(webprog[i].name);
      mi3l1.appendChild(mi3p1);
      mi3.appendChild(mi3l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi3l2 = document.createElement("li");
      var mi3p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi3l2.appendChild(mi3p2);
      mi3.appendChild(mi3l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi3l3 = document.createElement("li");
      var mi3p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi3l3.appendChild(mi3p3);
      mi3.appendChild(mi3l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi3l4 = document.createElement("li"); // Listenelement anlegen
      var mi3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi3l4.appendChild(mi3p4); // dem Listenelement Text anhängen
      mi3.appendChild(mi3l4);  // Listenelement dem Feld anhängen
    }

  }

}

// mienstag, 8 bis 9

  for (i in webprog){

    if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var mi3l1 = document.createElement("li");
        var mi3p1 = document.createTextNode(webprog[i].name);
        mi3l1.appendChild(mi3p1);
        mi3.appendChild(mi3l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var mi3l2 = document.createElement("li");
        var mi3p2 = document.createTextNode(webprog[i].name + " " + "!" );
        mi3l2.appendChild(mi3p2);
        mi3.appendChild(mi3l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var mi3l3 = document.createElement("li");
        var mi3p3 = document.createTextNode(webprog[i].name + " " + "!!");
        mi3l3.appendChild(mi3p3);
        mi3.appendChild(mi3l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var mi3l4 = document.createElement("li"); // Listenelement anlegen
        var mi3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        mi3l4.appendChild(mi3p4); // dem Listenelement Text anhängen
        mi3.appendChild(mi3l4);  // Listenelement dem Feld anhängen
      }

    }

  }

// mienstag, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var mi4l1 = document.createElement("li");
        var mi4p1 = document.createTextNode(webprog[i].name);
        mi4l1.appendChild(mi4p1);
        mi4.appendChild(mi4l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var mi4l2 = document.createElement("li");
        var mi4p2 = document.createTextNode(webprog[i].name + " " + "!" );
        mi4l2.appendChild(mi4p2);
        mi4.appendChild(mi4l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var mi4l3 = document.createElement("li");
        var mi4p3 = document.createTextNode(webprog[i].name + " " + "!!");
        mi4l3.appendChild(mi4p3);
        mi4.appendChild(mi4l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var mi4l4 = document.createElement("li"); // Listenelement anlegen
        var mi4p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        mi4l4.appendChild(mi3p4); // dem Listenelement Text anhängen
        mi4.appendChild(mi3l4);  // Listenelement dem Feld anhängen
      }

    }
  }


// mienstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi5l1 = document.createElement("li");
      var mi5p1 = document.createTextNode(webprog[i].name);
      mi5l1.appendChild(mi5p1);
      mi5.appendChild(mi5l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi5l2 = document.createElement("li");
      var mi5p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi5l2.appendChild(mi5p2);
      mi5.appendChild(mi5l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi5l3 = document.createElement("li");
      var mi5p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi5l3.appendChild(mi5p3);
      mi5.appendChild(mi5l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi5l4 = document.createElement("li"); // Listenelement anlegen
      var mi5p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi5l4.appendChild(mi5p4); // dem Listenelement Text anhängen
      mi5.appendChild(mi5l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi6l1 = document.createElement("li");
      var mi6p1 = document.createTextNode(webprog[i].name);
      mi6l1.appendChild(mi6p1);
      mi6.appendChild(mi6l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi6l2 = document.createElement("li");
      var mi6p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi6l2.appendChild(mi6p2);
      mi6.appendChild(mi6l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi6l3 = document.createElement("li");
      var mi6p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi6l3.appendChild(mi6p3);
      mi6.appendChild(mi6l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi6l4 = document.createElement("li"); // Listenelement anlegen
      var mi6p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi6l4.appendChild(mi6p4); // dem Listenelement Text anhängen
      mi6.appendChild(mi6l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi7l1 = document.createElement("li");
      var mi7p1 = document.createTextNode(webprog[i].name);
      mi7l1.appendChild(mi7p1);
      mi7.appendChild(mi7l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi7l2 = document.createElement("li");
      var mi7p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi7l2.appendChild(mi7p2);
      mi7.appendChild(m74l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi7l3 = document.createElement("li");
      var mi7p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi7l3.appendChild(mi7p3);
      mi7.appendChild(mi7l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi7l4 = document.createElement("li"); // Listenelement anlegen
      var mi7p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi7l4.appendChild(mi7p4); // dem Listenelement Text anhängen
      mi7.appendChild(mi7l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi8l1 = document.createElement("li");
      var mi8p1 = document.createTextNode(webprog[i].name);
      mi8l1.appendChild(mi8p1);
      mi8.appendChild(mi8l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi8l2 = document.createElement("li");
      var mi8p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi8l2.appendChild(mi8p2);
      mi8.appendChild(mi8l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi8l3 = document.createElement("li");
      var mi8p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi8l3.appendChild(mi8p3);
      mi8.appendChild(mi8l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi8l4 = document.createElement("li"); // Listenelement anlegen
      var mi484 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi8l4.appendChild(mi8p4); // dem Listenelement Text anhängen
      mi8.appendChild(mi8l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi9l1 = document.createElement("li");
      var mi94p1 = document.createTextNode(webprog[i].name);
      mi9l1.appendChild(mi9p1);
      mi9.appendChild(mi9l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi4l2 = document.createElement("li");
      var mi4p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi9l2.appendChild(mi9p2);
      mi9.appendChild(mi9l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi9l3 = document.createElement("li");
      var mi9p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi9l3.appendChild(mi9p3);
      mi9.appendChild(mi9l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi9l4 = document.createElement("li"); // Listenelement anlegen
      var mi9p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi9l4.appendChild(mi9p4); // dem Listenelement Text anhängen
      mi9.appendChild(mi9l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi10l1 = document.createElement("li");
      var mi10p1 = document.createTextNode(webprog[i].name);
      mi10l1.appendChild(mi10p1);
      mi10.appendChild(mi10l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi10l2 = document.createElement("li");
      var mi10p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi10l2.appendChild(mi10p2);
      mi10.appendChild(mi10l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi10l3 = document.createElement("li");
      var mi10p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi10l3.appendChild(mi10p3);
      mi10.appendChild(mi10l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi10l4 = document.createElement("li"); // Listenelement anlegen
      var mi10p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi10l4.appendChild(mi10p4); // dem Listenelement Text anhängen
      mi10.appendChild(mi10l4);  // Listenelement dem Feld anhängen
    }

  }
}


// mienstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi11l1 = document.createElement("li");
      var mi11p1 = document.createTextNode(webprog[i].name);
      mi11l1.appendChild(mi11p1);
      mi11.appendChild(mi11l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi11l2 = document.createElement("li");
      var mi11p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi11l2.appendChild(mi11p2);
      mi11.appendChild(mi11l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi11l3 = document.createElement("li");
      var mi11p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi11l3.appendChild(mi11p3);
      mi4.appendChild(mi11l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi11l4 = document.createElement("li"); // Listenelement anlegen
      var mi11p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi11l4.appendChild(mi11p4); // dem Listenelement Text anhängen
      mi11.appendChild(mi11l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi12l1 = document.createElement("li");
      var mi12p1 = document.createTextNode(webprog[i].name);
      mi12l1.appendChild(mi12p1);
      mi12.appendChild(mi12l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi12l2 = document.createElement("li");
      var mi12p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi12l2.appendChild(mi12p2);
      mi12.appendChild(mi12l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi12l3 = document.createElement("li");
      var mi12p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi12l3.appendChild(mi12p3);
      mi12.appendChild(mi12l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi12l4 = document.createElement("li"); // Listenelement anlegen
      var mi12p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi12l4.appendChild(mi12p4); // dem Listenelement Text anhängen
      mi12.appendChild(mi12l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi13l1 = document.createElement("li");
      var mi13p1 = document.createTextNode(webprog[i].name);
      mi13l1.appendChild(mi13p1);
      mi13.appendChild(mi13l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi13l2 = document.createElement("li");
      var mi13p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi13l2.appendChild(mi13p2);
      mi13.appendChild(mi13l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi13l3 = document.createElement("li");
      var mi13p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi13l3.appendChild(mi13p3);
      mi13.appendChild(mi13l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi13l4 = document.createElement("li"); // Listenelement anlegen
      var mi13p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi13l4.appendChild(mi13p4); // dem Listenelement Text anhängen
      mi13.appendChild(mi13l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi14l1 = document.createElement("li");
      var mi14p1 = document.createTextNode(webprog[i].name);
      mi14l1.appendChild(mi14p1);
      mi14.appendChild(mi14l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi14l2 = document.createElement("li");
      var mi14p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi14l2.appendChild(mi14p2);
      mi14.appendChild(mi14l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi14l3 = document.createElement("li");
      var mi14p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi14l3.appendChild(mi14p3);
      mi14.appendChild(mi14l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi14l4 = document.createElement("li"); // Listenelement anlegen
      var mi14p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi14l4.appendChild(mi14p4); // dem Listenelement Text anhängen
      mi14.appendChild(mi14l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi15l1 = document.createElement("li");
      var mi15p1 = document.createTextNode(webprog[i].name);
      mi15l1.appendChild(mi15p1);
      mi15.appendChild(mi15l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi15l2 = document.createElement("li");
      var mi15p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi15l2.appendChild(mi15p2);
      mi15.appendChild(mi15l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi15l3 = document.createElement("li");
      var mi15p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi15l3.appendChild(mi15p3);
      mi15.appendChild(mi15l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi15l4 = document.createElement("li"); // Listenelement anlegen
      var mi15p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi15l4.appendChild(mi15p4); // dem Listenelement Text anhängen
      mi15.appendChild(mi15l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi16l1 = document.createElement("li");
      var mi16p1 = document.createTextNode(webprog[i].name);
      mi16l1.appendChild(mi16p1);
      mi16.appendChild(mi16l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi16l2 = document.createElement("li");
      var mi16p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi16l2.appendChild(mi16p2);
      mi16.appendChild(mi16l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi16l3 = document.createElement("li");
      var mi16p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi16l3.appendChild(mi16p3);
      mi16.appendChild(mi16l3);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi16l4 = document.createElement("li"); // Listenelement anlegen
      var mi16p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi16l4.appendChild(mi16p4); // dem Listenelement Text anhängen
      mi16.appendChild(mi16l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi17l1 = document.createElement("li");
      var mi17p1 = document.createTextNode(webprog[i].name);
      mi17l1.appendChild(mi17p1);
      mi17.appendChild(mi17l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi17l2 = document.createElement("li");
      var mi17p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi17l2.appendChild(mi17p2);
      mi17.appendChild(mi17l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi17l3 = document.createElement("li");
      var mi17p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi17l3.appendChild(mi17p3);
      mi17.appendChild(mi17l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi17l4 = document.createElement("li"); // Listenelement anlegen
      var mi17p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi17l4.appendChild(mi17p4); // dem Listenelement Text anhängen
      mi17.appendChild(mi17l4);  // Listenelement dem Feld anhängen
    }

  }
}

// mienstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "mienstag" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi18l1 = document.createElement("li");
      var mi18p1 = document.createTextNode(webprog[i].name);
      mi18l1.appendChild(mi18p1);
      mi18.appendChild(mi18l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi18l2 = document.createElement("li");
      var mi18p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mi18l2.appendChild(mi18p2);
      mi18.appendChild(mi18l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi18l3 = document.createElement("li");
      var mi18p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mi18l3.appendChild(mi18p3);
      mi18.appendChild(mi18l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi18l4 = document.createElement("li"); // Listenelement anlegen
      var mi18p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mi18l4.appendChild(mi18p4); // dem Listenelement Text anhängen
      mi18.appendChild(mi18l4);  // Listenelement dem Feld anhängen
    }


}
}

}
)
}
