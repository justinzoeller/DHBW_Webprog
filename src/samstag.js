
window.onload = function () {

  // Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden

  // samstag, 6-7
  var sa1 = document.createElement("ul");
  document.getElementById("sa6-7").appendChild(sa1);

  var sa2 = document.createElement("ul");
  document.getElementById("sa7-8").appendChild(sa2);

  var sa3 = document.createElement("ul");
  document.getElementById("sa8-9").appendChild(sa3);

  var sa4 = document.createElement("ul");
  document.getElementById("sa9-10").appendChild(sa4);

  var sa5 = document.createElement("ul");
  document.getElementById("sa10-11").appendChild(sa5);

  var sa6 = document.createElement("ul");
  document.getElementById("sa11-12").appendChild(sa6);

  var sa7 = document.createElement("ul");
  document.getElementById("sa12-13").appendChild(sa7);

  var sa8 = document.createElement("ul");
  document.getElementById("sa13-14").appendChild(sa8);

  var sa9 = document.createElement("ul");
  document.getElementById("sa14-15").appendChild(sa9);

  var sa10 = document.createElement("ul");
  document.getElementById("sa15-16").appendChild(sa10);

  var sa11 = document.createElement("ul");
  document.getElementById("sa16-17").appendChild(sa11);

  var sa12 = document.createElement("ul");
  document.getElementById("sa17-18").appendChild(sa12);

  var sa13 = document.createElement("ul");
  document.getElementById("sa18-19").appendChild(sa13);

  var sa14 = document.createElement("ul");
  document.getElementById("sa19-20").appendChild(sa14);

  var sa15 = document.createElement("ul");
  document.getElementById("sa20-21").appendChild(sa15);

  var sa16 = document.createElement("ul");
  document.getElementById("sa21-22").appendChild(sa16);

  var sa17 = document.createElement("ul");
  document.getElementById("sa22-23").appendChild(sa17);

  var sa18 = document.createElement("ul");
  document.getElementById("sa23-24").appendChild(sa18);














  // Gamze Variablen




  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

  // aus der Datenbank auslesen


// samstag, 6 bis 7

for (i in webprog){

  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis =="7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa1l1 = document.createElement("li");
      var sa1p1 = document.createTextNode(webprog[i].name);
      sa1l1.appendChild(sa1p1);
      sa1.appendChild(sa1l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa1l2 = document.createElement("li");
      var sa1p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa1l2.appendChild(sa1p2);
      sa1.appendChild(sa1l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa1l3 = document.createElement("li");
      var sa1p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa1l3.appendChild(sa1p3);
      sa1.appendChild(sa1l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa1l4 = document.createElement("li"); // Listenelement anlegen
      var sa1p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa1l4.appendChild(sa1p4); // dem Listenelement Text anhängen
      sa1.appendChild(sa1l4);  // Listenelement dem Feld anhängen
    }

  }

}


// samstag, 7 bis 8

for (i in webprog){

  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "7:00 Uhr" && webprog[i].zeitbis =="8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa3l1 = document.createElement("li");
      var sa3p1 = document.createTextNode(webprog[i].name);
      sa3l1.appendChild(sa3p1);
      sa3.appendChild(sa3l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa3l2 = document.createElement("li");
      var sa3p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa3l2.appendChild(sa3p2);
      sa3.appendChild(sa3l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa3l3 = document.createElement("li");
      var sa3p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa3l3.appendChild(sa3p3);
      sa3.appendChild(sa3l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa3l4 = document.createElement("li"); // Listenelement anlegen
      var sa3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa3l4.appendChild(sa3p4); // dem Listenelement Text anhängen
      sa3.appendChild(sa3l4);  // Listenelement dem Feld anhängen
    }

  }

}

// samstag, 8 bis 9

  for (i in webprog){

    if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "8:00 Uhr" && webprog[i].zeitbis =="9:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var sa3l1 = document.createElement("li");
        var sa3p1 = document.createTextNode(webprog[i].name);
        sa3l1.appendChild(sa3p1);
        sa3.appendChild(sa3l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var sa3l2 = document.createElement("li");
        var sa3p2 = document.createTextNode(webprog[i].name + " " + "!" );
        sa3l2.appendChild(sa3p2);
        sa3.appendChild(sa3l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var sa3l3 = document.createElement("li");
        var sa3p3 = document.createTextNode(webprog[i].name + " " + "!!");
        sa3l3.appendChild(sa3p3);
        sa3.appendChild(sa3l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var sa3l4 = document.createElement("li"); // Listenelement anlegen
        var sa3p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        sa3l4.appendChild(sa3p4); // dem Listenelement Text anhängen
        sa3.appendChild(sa3l4);  // Listenelement dem Feld anhängen
      }

    }

  }

// samstag, 9 bis 10
  for (i in webprog) {
    if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "9:00 Uhr" && webprog[i].zeitbis =="10:00 Uhr") {

      if (webprog[i].prio == "keine Priorität") {
        // Wenn keine Priorität, keine zusätzliche Zeichen
        var sa4l1 = document.createElement("li");
        var sa4p1 = document.createTextNode(webprog[i].name);
        sa4l1.appendChild(sa4p1);
        sa4.appendChild(sa4l1);
      }

      if (webprog[i].prio == "wenig Priorität") {
        // Wenn wenig Priorität, nur ein Ausrufezeichen
        var sa4l2 = document.createElement("li");
        var sa4p2 = document.createTextNode(webprog[i].name + " " + "!" );
        sa4l2.appendChild(sa4p2);
        sa4.appendChild(sa4l2);
      }

      if (webprog[i].prio == "mittlere Priorität") {
        // Wenn mittlere Priorität, dann zwei Ausrufezeichen
        var sa4l3 = document.createElement("li");
        var sa4p3 = document.createTextNode(webprog[i].name + " " + "!!");
        sa4l3.appendChild(sa4p3);
        sa4.appendChild(sa4l3);


      }

      if (webprog[i].prio == "hohe Priorität") {
        // Wenn hohe Priorität, dann drei Ausrufezeichen
        var sa4l4 = document.createElement("li"); // Listenelement anlegen
        var sa4p4 = document.createTextNode(webprog[i].name + " " + "!!!");
        sa4l4.appendChild(sa3p4); // dem Listenelement Text anhängen
        sa4.appendChild(sa3l4);  // Listenelement dem Feld anhängen
      }

    }
  }


// samstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "10:00 Uhr" && webprog[i].zeitbis =="11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa5l1 = document.createElement("li");
      var sa5p1 = document.createTextNode(webprog[i].name);
      sa5l1.appendChild(sa5p1);
      sa5.appendChild(sa5l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa5l2 = document.createElement("li");
      var sa5p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa5l2.appendChild(sa5p2);
      sa5.appendChild(sa5l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa5l3 = document.createElement("li");
      var sa5p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa5l3.appendChild(sa5p3);
      sa5.appendChild(sa5l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa5l4 = document.createElement("li"); // Listenelement anlegen
      var sa5p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa5l4.appendChild(sa5p4); // dem Listenelement Text anhängen
      sa5.appendChild(sa5l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "11:00 Uhr" && webprog[i].zeitbis =="12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa6l1 = document.createElement("li");
      var sa6p1 = document.createTextNode(webprog[i].name);
      sa6l1.appendChild(sa6p1);
      sa6.appendChild(sa6l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa6l2 = document.createElement("li");
      var sa6p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa6l2.appendChild(sa6p2);
      sa6.appendChild(sa6l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa6l3 = document.createElement("li");
      var sa6p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa6l3.appendChild(sa6p3);
      sa6.appendChild(sa6l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa6l4 = document.createElement("li"); // Listenelement anlegen
      var sa6p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa6l4.appendChild(sa6p4); // dem Listenelement Text anhängen
      sa6.appendChild(sa6l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis =="13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa7l1 = document.createElement("li");
      var sa7p1 = document.createTextNode(webprog[i].name);
      sa7l1.appendChild(sa7p1);
      sa7.appendChild(sa7l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa7l2 = document.createElement("li");
      var sa7p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa7l2.appendChild(sa7p2);
      sa7.appendChild(m74l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa7l3 = document.createElement("li");
      var sa7p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa7l3.appendChild(sa7p3);
      sa7.appendChild(sa7l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa7l4 = document.createElement("li"); // Listenelement anlegen
      var sa7p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa7l4.appendChild(sa7p4); // dem Listenelement Text anhängen
      sa7.appendChild(sa7l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "13:00 Uhr" && webprog[i].zeitbis =="14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa8l1 = document.createElement("li");
      var sa8p1 = document.createTextNode(webprog[i].name);
      sa8l1.appendChild(sa8p1);
      sa8.appendChild(sa8l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa8l2 = document.createElement("li");
      var sa8p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa8l2.appendChild(sa8p2);
      sa8.appendChild(sa8l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa8l3 = document.createElement("li");
      var sa8p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa8l3.appendChild(sa8p3);
      sa8.appendChild(sa8l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa8l4 = document.createElement("li"); // Listenelement anlegen
      var sa484 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa8l4.appendChild(sa8p4); // dem Listenelement Text anhängen
      sa8.appendChild(sa8l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "14:00 Uhr" && webprog[i].zeitbis =="15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa9l1 = document.createElement("li");
      var sa94p1 = document.createTextNode(webprog[i].name);
      sa9l1.appendChild(sa9p1);
      sa9.appendChild(sa9l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa4l2 = document.createElement("li");
      var sa4p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa9l2.appendChild(sa9p2);
      sa9.appendChild(sa9l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa9l3 = document.createElement("li");
      var sa9p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa9l3.appendChild(sa9p3);
      sa9.appendChild(sa9l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa9l4 = document.createElement("li"); // Listenelement anlegen
      var sa9p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa9l4.appendChild(sa9p4); // dem Listenelement Text anhängen
      sa9.appendChild(sa9l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "15:00 Uhr" && webprog[i].zeitbis =="16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa10l1 = document.createElement("li");
      var sa10p1 = document.createTextNode(webprog[i].name);
      sa10l1.appendChild(sa10p1);
      sa10.appendChild(sa10l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa10l2 = document.createElement("li");
      var sa10p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa10l2.appendChild(sa10p2);
      sa10.appendChild(sa10l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa10l3 = document.createElement("li");
      var sa10p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa10l3.appendChild(sa10p3);
      sa10.appendChild(sa10l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa10l4 = document.createElement("li"); // Listenelement anlegen
      var sa10p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa10l4.appendChild(sa10p4); // dem Listenelement Text anhängen
      sa10.appendChild(sa10l4);  // Listenelement dem Feld anhängen
    }

  }
}


// samstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "16:00 Uhr" && webprog[i].zeitbis =="17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa11l1 = document.createElement("li");
      var sa11p1 = document.createTextNode(webprog[i].name);
      sa11l1.appendChild(sa11p1);
      sa11.appendChild(sa11l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa11l2 = document.createElement("li");
      var sa11p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa11l2.appendChild(sa11p2);
      sa11.appendChild(sa11l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa11l3 = document.createElement("li");
      var sa11p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa11l3.appendChild(sa11p3);
      sa4.appendChild(sa11l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa11l4 = document.createElement("li"); // Listenelement anlegen
      var sa11p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa11l4.appendChild(sa11p4); // dem Listenelement Text anhängen
      sa11.appendChild(sa11l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "17:00 Uhr" && webprog[i].zeitbis =="18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa12l1 = document.createElement("li");
      var sa12p1 = document.createTextNode(webprog[i].name);
      sa12l1.appendChild(sa12p1);
      sa12.appendChild(sa12l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa12l2 = document.createElement("li");
      var sa12p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa12l2.appendChild(sa12p2);
      sa12.appendChild(sa12l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa12l3 = document.createElement("li");
      var sa12p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa12l3.appendChild(sa12p3);
      sa12.appendChild(sa12l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa12l4 = document.createElement("li"); // Listenelement anlegen
      var sa12p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa12l4.appendChild(sa12p4); // dem Listenelement Text anhängen
      sa12.appendChild(sa12l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "18:00 Uhr" && webprog[i].zeitbis =="19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa13l1 = document.createElement("li");
      var sa13p1 = document.createTextNode(webprog[i].name);
      sa13l1.appendChild(sa13p1);
      sa13.appendChild(sa13l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa13l2 = document.createElement("li");
      var sa13p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa13l2.appendChild(sa13p2);
      sa13.appendChild(sa13l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa13l3 = document.createElement("li");
      var sa13p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa13l3.appendChild(sa13p3);
      sa13.appendChild(sa13l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa13l4 = document.createElement("li"); // Listenelement anlegen
      var sa13p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa13l4.appendChild(sa13p4); // dem Listenelement Text anhängen
      sa13.appendChild(sa13l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "19:00 Uhr" && webprog[i].zeitbis =="20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa14l1 = document.createElement("li");
      var sa14p1 = document.createTextNode(webprog[i].name);
      sa14l1.appendChild(sa14p1);
      sa14.appendChild(sa14l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa14l2 = document.createElement("li");
      var sa14p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa14l2.appendChild(sa14p2);
      sa14.appendChild(sa14l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa14l3 = document.createElement("li");
      var sa14p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa14l3.appendChild(sa14p3);
      sa14.appendChild(sa14l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa14l4 = document.createElement("li"); // Listenelement anlegen
      var sa14p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa14l4.appendChild(sa14p4); // dem Listenelement Text anhängen
      sa14.appendChild(sa14l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "20:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa15l1 = document.createElement("li");
      var sa15p1 = document.createTextNode(webprog[i].name);
      sa15l1.appendChild(sa15p1);
      sa15.appendChild(sa15l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa15l2 = document.createElement("li");
      var sa15p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa15l2.appendChild(sa15p2);
      sa15.appendChild(sa15l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa15l3 = document.createElement("li");
      var sa15p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa15l3.appendChild(sa15p3);
      sa15.appendChild(sa15l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa15l4 = document.createElement("li"); // Listenelement anlegen
      var sa15p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa15l4.appendChild(sa15p4); // dem Listenelement Text anhängen
      sa15.appendChild(sa15l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis =="22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa16l1 = document.createElement("li");
      var sa16p1 = document.createTextNode(webprog[i].name);
      sa16l1.appendChild(sa16p1);
      sa16.appendChild(sa16l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa16l2 = document.createElement("li");
      var sa16p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa16l2.appendChild(sa16p2);
      sa16.appendChild(sa16l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa16l3 = document.createElement("li");
      var sa16p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa16l3.appendChild(sa16p3);
      sa16.appendChild(sa16l3);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa16l4 = document.createElement("li"); // Listenelement anlegen
      var sa16p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa16l4.appendChild(sa16p4); // dem Listenelement Text anhängen
      sa16.appendChild(sa16l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "22:00 Uhr" && webprog[i].zeitbis =="23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa17l1 = document.createElement("li");
      var sa17p1 = document.createTextNode(webprog[i].name);
      sa17l1.appendChild(sa17p1);
      sa17.appendChild(sa17l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa17l2 = document.createElement("li");
      var sa17p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa17l2.appendChild(sa17p2);
      sa17.appendChild(sa17l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa17l3 = document.createElement("li");
      var sa17p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa17l3.appendChild(sa17p3);
      sa17.appendChild(sa17l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa17l4 = document.createElement("li"); // Listenelement anlegen
      var sa17p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa17l4.appendChild(sa17p4); // dem Listenelement Text anhängen
      sa17.appendChild(sa17l4);  // Listenelement dem Feld anhängen
    }

  }
}

// samstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "samstag" && webprog[i].zeitvon == "23:00 Uhr" && webprog[i].zeitbis =="24:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa18l1 = document.createElement("li");
      var sa18p1 = document.createTextNode(webprog[i].name);
      sa18l1.appendChild(sa18p1);
      sa18.appendChild(sa18l1);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa18l2 = document.createElement("li");
      var sa18p2 = document.createTextNode(webprog[i].name + " " + "!" );
      sa18l2.appendChild(sa18p2);
      sa18.appendChild(sa18l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa18l3 = document.createElement("li");
      var sa18p3 = document.createTextNode(webprog[i].name + " " + "!!");
      sa18l3.appendChild(sa18p3);
      sa18.appendChild(sa18l3);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa18l4 = document.createElement("li"); // Listenelement anlegen
      var sa18p4 = document.createTextNode(webprog[i].name + " " + "!!!");
      sa18l4.appendChild(sa18p4); // dem Listenelement Text anhängen
      sa18.appendChild(sa18l4);  // Listenelement dem Feld anhängen
    }


}
}
}
)
}
