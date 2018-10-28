
window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // freitag, 6-7
  var fr1 = document.createElement("ul");
  document.getElementById("fr6-7").appendChild(fr1);

  var fr2 = document.createElement("ul");
  document.getElementById("fr7-8").appendChild(fr2);

  var fr3 = document.createElement("ul");
  document.getElementById("fr8-9").appendChild(fr3);

  var fr4 = document.createElement("ul");
  document.getElementById("fr9-10").appendChild(fr4);

  var fr5 = document.createElement("ul");
  document.getElementById("fr10-11").appendChild(fr5);

  var fr6 = document.createElement("ul");
  document.getElementById("fr11-12").appendChild(fr6);

  var fr7 = document.createElement("ul");
  document.getElementById("fr12-13").appendChild(fr7);

  var fr8 = document.createElement("ul");
  document.getElementById("fr13-14").appendChild(fr8);

  var fr9 = document.createElement("ul");
  document.getElementById("fr14-15").appendChild(fr9);

  var fr10 = document.createElement("ul");
  document.getElementById("fr15-16").appendChild(fr10);

  var fr11 = document.createElement("ul");
  document.getElementById("fr16-17").appendChild(fr11);

  var fr12 = document.createElement("ul");
  document.getElementById("fr17-18").appendChild(fr12);

  var fr13 = document.createElement("ul");
  document.getElementById("fr18-19").appendChild(fr13);

  var fr14 = document.createElement("ul");
  document.getElementById("fr19-20").appendChild(fr14);

  var fr15 = document.createElement("ul");
  document.getElementById("fr20-21").appendChild(fr15);

  var fr16 = document.createElement("ul");
  document.getElementById("fr21-22").appendChild(fr16);

  var fr17 = document.createElement("ul");
  document.getElementById("fr22-23").appendChild(fr17);

  var fr18 = document.createElement("ul");
  document.getElementById("fr23-24").appendChild(fr18);














  // Gamze Variablen




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen


// freitag, 6 bis 7

for (i in webprog){

  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr1l1 = document.createElement("li");
      var fr1p1 = document.createTextNode(webprog[i].name);
      fr1l1.appendChild(fr1p1);
      fr1.appendChild(fr1l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr1l2 = document.createElement("li");
      var fr1p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr1l2.appendChild(fr1p2);
      fr1.appendChild(fr1l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr1l3 = document.createElement("li");
      var fr1p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr1l3.appendChild(fr1p3);
      fr1.appendChild(fr1l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr1l4 = document.createElement("li"); // Listenelement anlegen
      var fr1p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr1l4.appendChild(fr1p4); // dem Listenelement Text anhängen
      fr1.appendChild(fr1l4);  // Listenelement dem Feld anhängen
    }

  }

}


// freitag, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr3l1 = document.createElement("li");
      var fr3p1 = document.createTextNode(webprog[i].name);
      fr3l1.appendChild(fr3p1);
      fr3.appendChild(fr3l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr3l2 = document.createElement("li");
      var fr3p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr3l2.appendChild(fr3p2);
      fr3.appendChild(fr3l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr3l3 = document.createElement("li");
      var fr3p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr3l3.appendChild(fr3p3);
      fr3.appendChild(fr3l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr3l4 = document.createElement("li"); // Listenelement anlegen
      var fr3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr3l4.appendChild(fr3p4); // dem Listenelement Text anhängen
      fr3.appendChild(fr3l4);  // Listenelement dem Feld anhängen
    }

  }

}

// freitag, 8 bis 9

  for (i in webprog){

    if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var fr3l1 = document.createElement("li");
        var fr3p1 = document.createTextNode(webprog[i].name);
        fr3l1.appendChild(fr3p1);
        fr3.appendChild(fr3l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var fr3l2 = document.createElement("li");
        var fr3p2 = document.createTextNode(webprog[i].name + " " + "!" );
        fr3l2.appendChild(fr3p2);
        fr3.appendChild(fr3l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var fr3l3 = document.createElement("li");
        var fr3p3 = document.createTextNode(webprog[i].name + " " + "!!");
        fr3l3.appendChild(fr3p3);
        fr3.appendChild(fr3l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var fr3l4 = document.createElement("li"); // Listenelement anlegen
        var fr3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        fr3l4.appendChild(fr3p4); // dem Listenelement Text anhängen
        fr3.appendChild(fr3l4);  // Listenelement dem Feld anhängen
      }

    }

  }

// freitag, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var fr4l1 = document.createElement("li");
        var fr4p1 = document.createTextNode(webprog[i].name);
        fr4l1.appendChild(fr4p1);
        fr4.appendChild(fr4l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var fr4l2 = document.createElement("li");
        var fr4p2 = document.createTextNode(webprog[i].name + " " + "!" );
        fr4l2.appendChild(fr4p2);
        fr4.appendChild(fr4l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var fr4l3 = document.createElement("li");
        var fr4p3 = document.createTextNode(webprog[i].name + " " + "!!");
        fr4l3.appendChild(fr4p3);
        fr4.appendChild(fr4l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var fr4l4 = document.createElement("li"); // Listenelement anlegen
        var fr4p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        fr4l4.appendChild(fr3p4); // dem Listenelement Text anhängen
        fr4.appendChild(fr3l4);  // Listenelement dem Feld anhängen
      }

    }
  }


// freitag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr5l1 = document.createElement("li");
      var fr5p1 = document.createTextNode(webprog[i].name);
      fr5l1.appendChild(fr5p1);
      fr5.appendChild(fr5l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr5l2 = document.createElement("li");
      var fr5p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr5l2.appendChild(fr5p2);
      fr5.appendChild(fr5l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr5l3 = document.createElement("li");
      var fr5p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr5l3.appendChild(fr5p3);
      fr5.appendChild(fr5l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr5l4 = document.createElement("li"); // Listenelement anlegen
      var fr5p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr5l4.appendChild(fr5p4); // dem Listenelement Text anhängen
      fr5.appendChild(fr5l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr6l1 = document.createElement("li");
      var fr6p1 = document.createTextNode(webprog[i].name);
      fr6l1.appendChild(fr6p1);
      fr6.appendChild(fr6l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr6l2 = document.createElement("li");
      var fr6p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr6l2.appendChild(fr6p2);
      fr6.appendChild(fr6l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr6l3 = document.createElement("li");
      var fr6p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr6l3.appendChild(fr6p3);
      fr6.appendChild(fr6l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr6l4 = document.createElement("li"); // Listenelement anlegen
      var fr6p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr6l4.appendChild(fr6p4); // dem Listenelement Text anhängen
      fr6.appendChild(fr6l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr7l1 = document.createElement("li");
      var fr7p1 = document.createTextNode(webprog[i].name);
      fr7l1.appendChild(fr7p1);
      fr7.appendChild(fr7l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr7l2 = document.createElement("li");
      var fr7p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr7l2.appendChild(fr7p2);
      fr7.appendChild(m74l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr7l3 = document.createElement("li");
      var fr7p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr7l3.appendChild(fr7p3);
      fr7.appendChild(fr7l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr7l4 = document.createElement("li"); // Listenelement anlegen
      var fr7p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr7l4.appendChild(fr7p4); // dem Listenelement Text anhängen
      fr7.appendChild(fr7l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr8l1 = document.createElement("li");
      var fr8p1 = document.createTextNode(webprog[i].name);
      fr8l1.appendChild(fr8p1);
      fr8.appendChild(fr8l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr8l2 = document.createElement("li");
      var fr8p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr8l2.appendChild(fr8p2);
      fr8.appendChild(fr8l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr8l3 = document.createElement("li");
      var fr8p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr8l3.appendChild(fr8p3);
      fr8.appendChild(fr8l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr8l4 = document.createElement("li"); // Listenelement anlegen
      var fr484 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr8l4.appendChild(fr8p4); // dem Listenelement Text anhängen
      fr8.appendChild(fr8l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr9l1 = document.createElement("li");
      var fr94p1 = document.createTextNode(webprog[i].name);
      fr9l1.appendChild(fr9p1);
      fr9.appendChild(fr9l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr4l2 = document.createElement("li");
      var fr4p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr9l2.appendChild(fr9p2);
      fr9.appendChild(fr9l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr9l3 = document.createElement("li");
      var fr9p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr9l3.appendChild(fr9p3);
      fr9.appendChild(fr9l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr9l4 = document.createElement("li"); // Listenelement anlegen
      var fr9p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr9l4.appendChild(fr9p4); // dem Listenelement Text anhängen
      fr9.appendChild(fr9l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr10l1 = document.createElement("li");
      var fr10p1 = document.createTextNode(webprog[i].name);
      fr10l1.appendChild(fr10p1);
      fr10.appendChild(fr10l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr10l2 = document.createElement("li");
      var fr10p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr10l2.appendChild(fr10p2);
      fr10.appendChild(fr10l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr10l3 = document.createElement("li");
      var fr10p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr10l3.appendChild(fr10p3);
      fr10.appendChild(fr10l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr10l4 = document.createElement("li"); // Listenelement anlegen
      var fr10p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr10l4.appendChild(fr10p4); // dem Listenelement Text anhängen
      fr10.appendChild(fr10l4);  // Listenelement dem Feld anhängen
    }

  }
}


// freitag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr11l1 = document.createElement("li");
      var fr11p1 = document.createTextNode(webprog[i].name);
      fr11l1.appendChild(fr11p1);
      fr11.appendChild(fr11l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr11l2 = document.createElement("li");
      var fr11p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr11l2.appendChild(fr11p2);
      fr11.appendChild(fr11l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr11l3 = document.createElement("li");
      var fr11p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr11l3.appendChild(fr11p3);
      fr4.appendChild(fr11l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr11l4 = document.createElement("li"); // Listenelement anlegen
      var fr11p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr11l4.appendChild(fr11p4); // dem Listenelement Text anhängen
      fr11.appendChild(fr11l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr12l1 = document.createElement("li");
      var fr12p1 = document.createTextNode(webprog[i].name);
      fr12l1.appendChild(fr12p1);
      fr12.appendChild(fr12l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr12l2 = document.createElement("li");
      var fr12p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr12l2.appendChild(fr12p2);
      fr12.appendChild(fr12l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr12l3 = document.createElement("li");
      var fr12p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr12l3.appendChild(fr12p3);
      fr12.appendChild(fr12l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr12l4 = document.createElement("li"); // Listenelement anlegen
      var fr12p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr12l4.appendChild(fr12p4); // dem Listenelement Text anhängen
      fr12.appendChild(fr12l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr13l1 = document.createElement("li");
      var fr13p1 = document.createTextNode(webprog[i].name);
      fr13l1.appendChild(fr13p1);
      fr13.appendChild(fr13l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr13l2 = document.createElement("li");
      var fr13p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr13l2.appendChild(fr13p2);
      fr13.appendChild(fr13l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr13l3 = document.createElement("li");
      var fr13p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr13l3.appendChild(fr13p3);
      fr13.appendChild(fr13l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr13l4 = document.createElement("li"); // Listenelement anlegen
      var fr13p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr13l4.appendChild(fr13p4); // dem Listenelement Text anhängen
      fr13.appendChild(fr13l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr14l1 = document.createElement("li");
      var fr14p1 = document.createTextNode(webprog[i].name);
      fr14l1.appendChild(fr14p1);
      fr14.appendChild(fr14l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr14l2 = document.createElement("li");
      var fr14p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr14l2.appendChild(fr14p2);
      fr14.appendChild(fr14l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr14l3 = document.createElement("li");
      var fr14p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr14l3.appendChild(fr14p3);
      fr14.appendChild(fr14l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr14l4 = document.createElement("li"); // Listenelement anlegen
      var fr14p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr14l4.appendChild(fr14p4); // dem Listenelement Text anhängen
      fr14.appendChild(fr14l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr15l1 = document.createElement("li");
      var fr15p1 = document.createTextNode(webprog[i].name);
      fr15l1.appendChild(fr15p1);
      fr15.appendChild(fr15l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr15l2 = document.createElement("li");
      var fr15p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr15l2.appendChild(fr15p2);
      fr15.appendChild(fr15l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr15l3 = document.createElement("li");
      var fr15p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr15l3.appendChild(fr15p3);
      fr15.appendChild(fr15l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr15l4 = document.createElement("li"); // Listenelement anlegen
      var fr15p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr15l4.appendChild(fr15p4); // dem Listenelement Text anhängen
      fr15.appendChild(fr15l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr16l1 = document.createElement("li");
      var fr16p1 = document.createTextNode(webprog[i].name);
      fr16l1.appendChild(fr16p1);
      fr16.appendChild(fr16l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr16l2 = document.createElement("li");
      var fr16p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr16l2.appendChild(fr16p2);
      fr16.appendChild(fr16l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr16l3 = document.createElement("li");
      var fr16p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr16l3.appendChild(fr16p3);
      fr16.appendChild(fr16l3);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr16l4 = document.createElement("li"); // Listenelement anlegen
      var fr16p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr16l4.appendChild(fr16p4); // dem Listenelement Text anhängen
      fr16.appendChild(fr16l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr17l1 = document.createElement("li");
      var fr17p1 = document.createTextNode(webprog[i].name);
      fr17l1.appendChild(fr17p1);
      fr17.appendChild(fr17l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr17l2 = document.createElement("li");
      var fr17p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr17l2.appendChild(fr17p2);
      fr17.appendChild(fr17l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr17l3 = document.createElement("li");
      var fr17p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr17l3.appendChild(fr17p3);
      fr17.appendChild(fr17l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr17l4 = document.createElement("li"); // Listenelement anlegen
      var fr17p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr17l4.appendChild(fr17p4); // dem Listenelement Text anhängen
      fr17.appendChild(fr17l4);  // Listenelement dem Feld anhängen
    }

  }
}

// freitag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "freitag" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr18l1 = document.createElement("li");
      var fr18p1 = document.createTextNode(webprog[i].name);
      fr18l1.appendChild(fr18p1);
      fr18.appendChild(fr18l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr18l2 = document.createElement("li");
      var fr18p2 = document.createTextNode(webprog[i].name + " " + "!" );
      fr18l2.appendChild(fr18p2);
      fr18.appendChild(fr18l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr18l3 = document.createElement("li");
      var fr18p3 = document.createTextNode(webprog[i].name + " " + "!!");
      fr18l3.appendChild(fr18p3);
      fr18.appendChild(fr18l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr18l4 = document.createElement("li"); // Listenelement anlegen
      var fr18p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      fr18l4.appendChild(fr18p4); // dem Listenelement Text anhängen
      fr18.appendChild(fr18l4);  // Listenelement dem Feld anhängen
    }


}
}
}
)
}
