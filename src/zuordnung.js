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
      mo7.appendChild(mo7l2);
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

for (i in webprog){

  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

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


// Mittwoch, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

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

// Mittwoch, 8 bis 9

  for (i in webprog){

    if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

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

// Mittwoch, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

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


// Mittwoch, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

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

// Mittwoch, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

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

// Mittwoch, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

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

// Mittwoch, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

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

// Mittwoch, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

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

// Mittwoch, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

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


// Mittwoch, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

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

// Mittwoch, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

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

// Mittwoch, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

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

// Mittwoch, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

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

// Mittwoch, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

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

// Mittwoch, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

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

// Mittwoch, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

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

// Mittwoch, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

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



// Ende (hier nichts mehr einfügen)
}
)
}
