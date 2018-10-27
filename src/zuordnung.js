// Referenz auf Google firebase



window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // Montag, 6-7
  var mo1 = document.createElement("ul");
  document.getElementById("mo6-7").appendChild(mo1);

  var mo2 = document.createElement("ul");
  document.getElementById("mo7-8").appendChild(mo2);

  var mo3 = document.createElement("ul");
  document.getElementById("mo8-9").appendChild(mo3);

  var mo4 = document.createElement("ul");
  document.getElementById("mo9-10").appendChild(mo4);

  var mo5 = document.createElement("ul");
  document.getElementById("mo10-11").appendChild(mo5);

  var mo6 = document.createElement("ul");
  document.getElementById("mo11-12").appendChild(mo6);

  var mo7 = document.createElement("ul");
  document.getElementById("mo12-13").appendChild(mo7);

  var mo8 = document.createElement("ul");
  document.getElementById("mo13-14").appendChild(mo8);

  var mo9 = document.createElement("ul");
  document.getElementById("mo14-15").appendChild(mo9);

  var mo10 = document.createElement("ul");
  document.getElementById("mo15-16").appendChild(mo10);

  var mo11 = document.createElement("ul");
  document.getElementById("mo16-17").appendChild(mo11);

  var mo12 = document.createElement("ul");
  document.getElementById("mo17-18").appendChild(mo12);

  var mo13 = document.createElement("ul");
  document.getElementById("mo18-19").appendChild(mo13);

  var mo14 = document.createElement("ul");
  document.getElementById("mo19-20").appendChild(mo14);

  var mo15 = document.createElement("ul");
  document.getElementById("mo20-21").appendChild(mo15);

  var mo16 = document.createElement("ul");
  document.getElementById("mo21-22").appendChild(mo16);

  var mo17 = document.createElement("ul");
  document.getElementById("mo22-23").appendChild(mo17);

  var mo18 = document.createElement("ul");
  document.getElementById("mo23-24").appendChild(mo18);














  // Gamze Variablen




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen


// Montag, 6 bis 7

for (i in webprog){

  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

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
      mo1l4.appendChild(mo1p4); // dem Listenelement Text anhängen
      mo1.appendChild(mo1l4);  // Listenelement dem Feld anhängen
    }

  }

}


// Montag, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

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

}

// Montag, 8 bis 9

  for (i in webprog){

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

  }

// Montag, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var mo4l1 = document.createElement("li");
        var mo4p1 = document.createTextNode(webprog[i].name);
        mo4l1.appendChild(mo4p1);
        mo4.appendChild(mo4l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var mo4l2 = document.createElement("li");
        var mo4p2 = document.createTextNode(webprog[i].name + " " + "!" );
        mo4l2.appendChild(mo4p2);
        mo4.appendChild(mo4l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var mo4l3 = document.createElement("li");
        var mo4p3 = document.createTextNode(webprog[i].name + " " + "!!");
        mo4l3.appendChild(mo4p3);
        mo4.appendChild(mo4l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var mo4l4 = document.createElement("li"); // Listenelement anlegen
        var mo4p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        mo4l4.appendChild(mo3p4); // dem Listenelement Text anhängen
        mo4.appendChild(mo3l4);  // Listenelement dem Feld anhängen
      }

    }
  }


// Montag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo5l1 = document.createElement("li");
      var mo5p1 = document.createTextNode(webprog[i].name);
      mo5l1.appendChild(mo5p1);
      mo5.appendChild(mo5l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo5l2 = document.createElement("li");
      var mo5p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo5l2.appendChild(mo5p2);
      mo5.appendChild(mo5l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo5l3 = document.createElement("li");
      var mo5p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo5l3.appendChild(mo5p3);
      mo5.appendChild(mo5l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo5l4 = document.createElement("li"); // Listenelement anlegen
      var mo5p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo5l4.appendChild(mo5p4); // dem Listenelement Text anhängen
      mo5.appendChild(mo5l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo6l1 = document.createElement("li");
      var mo6p1 = document.createTextNode(webprog[i].name);
      mo6l1.appendChild(mo6p1);
      mo6.appendChild(mo6l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo6l2 = document.createElement("li");
      var mo6p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo6l2.appendChild(mo6p2);
      mo6.appendChild(mo6l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo6l3 = document.createElement("li");
      var mo6p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo6l3.appendChild(mo6p3);
      mo6.appendChild(mo6l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo6l4 = document.createElement("li"); // Listenelement anlegen
      var mo6p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo6l4.appendChild(mo6p4); // dem Listenelement Text anhängen
      mo6.appendChild(mo6l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo7l1 = document.createElement("li");
      var mo7p1 = document.createTextNode(webprog[i].name);
      mo7l1.appendChild(mo7p1);
      mo7.appendChild(mo7l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo7l2 = document.createElement("li");
      var mo7p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo7l2.appendChild(mo7p2);
      mo7.appendChild(m74l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo7l3 = document.createElement("li");
      var mo7p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo7l3.appendChild(mo7p3);
      mo7.appendChild(mo7l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo7l4 = document.createElement("li"); // Listenelement anlegen
      var mo7p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo7l4.appendChild(mo7p4); // dem Listenelement Text anhängen
      mo7.appendChild(mo7l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo8l1 = document.createElement("li");
      var mo8p1 = document.createTextNode(webprog[i].name);
      mo8l1.appendChild(mo8p1);
      mo8.appendChild(mo8l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo8l2 = document.createElement("li");
      var mo8p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo8l2.appendChild(mo8p2);
      mo8.appendChild(mo8l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo8l3 = document.createElement("li");
      var mo8p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo8l3.appendChild(mo8p3);
      mo8.appendChild(mo8l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo8l4 = document.createElement("li"); // Listenelement anlegen
      var mo484 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo8l4.appendChild(mo8p4); // dem Listenelement Text anhängen
      mo8.appendChild(mo8l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo9l1 = document.createElement("li");
      var mo94p1 = document.createTextNode(webprog[i].name);
      mo9l1.appendChild(mo9p1);
      mo9.appendChild(mo9l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo4l2 = document.createElement("li");
      var mo4p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo9l2.appendChild(mo9p2);
      mo9.appendChild(mo9l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo9l3 = document.createElement("li");
      var mo9p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo9l3.appendChild(mo9p3);
      mo9.appendChild(mo9l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo9l4 = document.createElement("li"); // Listenelement anlegen
      var mo9p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo9l4.appendChild(mo9p4); // dem Listenelement Text anhängen
      mo9.appendChild(mo9l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo10l1 = document.createElement("li");
      var mo10p1 = document.createTextNode(webprog[i].name);
      mo10l1.appendChild(mo10p1);
      mo10.appendChild(mo10l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo10l2 = document.createElement("li");
      var mo10p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo10l2.appendChild(mo10p2);
      mo10.appendChild(mo10l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo10l3 = document.createElement("li");
      var mo10p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo10l3.appendChild(mo10p3);
      mo10.appendChild(mo10l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo10l4 = document.createElement("li"); // Listenelement anlegen
      var mo10p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo10l4.appendChild(mo10p4); // dem Listenelement Text anhängen
      mo10.appendChild(mo10l4);  // Listenelement dem Feld anhängen
    }

  }
}


// Montag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo11l1 = document.createElement("li");
      var mo11p1 = document.createTextNode(webprog[i].name);
      mo11l1.appendChild(mo11p1);
      mo11.appendChild(mo11l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo11l2 = document.createElement("li");
      var mo11p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo11l2.appendChild(mo11p2);
      mo11.appendChild(mo11l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo11l3 = document.createElement("li");
      var mo11p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo11l3.appendChild(mo11p3);
      mo4.appendChild(mo11l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo11l4 = document.createElement("li"); // Listenelement anlegen
      var mo11p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo11l4.appendChild(mo11p4); // dem Listenelement Text anhängen
      mo11.appendChild(mo11l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo12l1 = document.createElement("li");
      var mo12p1 = document.createTextNode(webprog[i].name);
      mo12l1.appendChild(mo12p1);
      mo12.appendChild(mo12l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo12l2 = document.createElement("li");
      var mo12p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo12l2.appendChild(mo12p2);
      mo12.appendChild(mo12l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo12l3 = document.createElement("li");
      var mo12p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo12l3.appendChild(mo12p3);
      mo12.appendChild(mo12l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo12l4 = document.createElement("li"); // Listenelement anlegen
      var mo12p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo12l4.appendChild(mo12p4); // dem Listenelement Text anhängen
      mo12.appendChild(mo12l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo13l1 = document.createElement("li");
      var mo13p1 = document.createTextNode(webprog[i].name);
      mo13l1.appendChild(mo13p1);
      mo13.appendChild(mo13l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo13l2 = document.createElement("li");
      var mo13p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo13l2.appendChild(mo13p2);
      mo13.appendChild(mo13l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo13l3 = document.createElement("li");
      var mo13p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo13l3.appendChild(mo13p3);
      mo13.appendChild(mo13l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo13l4 = document.createElement("li"); // Listenelement anlegen
      var mo13p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo13l4.appendChild(mo13p4); // dem Listenelement Text anhängen
      mo13.appendChild(mo13l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo14l1 = document.createElement("li");
      var mo14p1 = document.createTextNode(webprog[i].name);
      mo14l1.appendChild(mo14p1);
      mo14.appendChild(mo14l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo14l2 = document.createElement("li");
      var mo14p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo14l2.appendChild(mo14p2);
      mo14.appendChild(mo14l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo14l3 = document.createElement("li");
      var mo14p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo14l3.appendChild(mo14p3);
      mo14.appendChild(mo14l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo14l4 = document.createElement("li"); // Listenelement anlegen
      var mo14p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo14l4.appendChild(mo14p4); // dem Listenelement Text anhängen
      mo14.appendChild(mo14l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo15l1 = document.createElement("li");
      var mo15p1 = document.createTextNode(webprog[i].name);
      mo15l1.appendChild(mo15p1);
      mo15.appendChild(mo15l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo15l2 = document.createElement("li");
      var mo15p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo15l2.appendChild(mo15p2);
      mo15.appendChild(mo15l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo15l3 = document.createElement("li");
      var mo15p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo15l3.appendChild(mo15p3);
      mo15.appendChild(mo15l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo15l4 = document.createElement("li"); // Listenelement anlegen
      var mo15p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo15l4.appendChild(mo15p4); // dem Listenelement Text anhängen
      mo15.appendChild(mo15l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo16l1 = document.createElement("li");
      var mo16p1 = document.createTextNode(webprog[i].name);
      mo16l1.appendChild(mo16p1);
      mo16.appendChild(mo16l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo16l2 = document.createElement("li");
      var mo16p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo16l2.appendChild(mo16p2);
      mo16.appendChild(mo16l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo16l3 = document.createElement("li");
      var mo16p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo16l3.appendChild(mo16p3);
      mo16.appendChild(mo16l3);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo16l4 = document.createElement("li"); // Listenelement anlegen
      var mo16p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo16l4.appendChild(mo16p4); // dem Listenelement Text anhängen
      mo16.appendChild(mo16l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo17l1 = document.createElement("li");
      var mo17p1 = document.createTextNode(webprog[i].name);
      mo17l1.appendChild(mo17p1);
      mo17.appendChild(mo17l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo17l2 = document.createElement("li");
      var mo17p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo17l2.appendChild(mo17p2);
      mo17.appendChild(mo17l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo17l3 = document.createElement("li");
      var mo17p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo17l3.appendChild(mo17p3);
      mo17.appendChild(mo17l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo17l4 = document.createElement("li"); // Listenelement anlegen
      var mo17p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo17l4.appendChild(mo17p4); // dem Listenelement Text anhängen
      mo17.appendChild(mo17l4);  // Listenelement dem Feld anhängen
    }

  }
}

// Montag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mo18l1 = document.createElement("li");
      var mo18p1 = document.createTextNode(webprog[i].name);
      mo18l1.appendChild(mo18p1);
      mo18.appendChild(mo18l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mo18l2 = document.createElement("li");
      var mo18p2 = document.createTextNode(webprog[i].name + " " + "!" );
      mo18l2.appendChild(mo18p2);
      mo18.appendChild(mo18l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mo18l3 = document.createElement("li");
      var mo18p3 = document.createTextNode(webprog[i].name + " " + "!!");
      mo18l3.appendChild(mo18p3);
      mo18.appendChild(mo18l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mo18l4 = document.createElement("li"); // Listenelement anlegen
      var mo18p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      mo18l4.appendChild(mo18p4); // dem Listenelement Text anhängen
      mo18.appendChild(mo18l4);  // Listenelement dem Feld anhängen
    }


}
}
}
)
}
