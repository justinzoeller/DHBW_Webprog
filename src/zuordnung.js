// Referenz auf Google firebase

function createDeleteButton() {
  let button = document.createElement("button");
  button.setAttribute("class", "arminboy");
  button.setAttribute("onclick", "deleteList(event)");
  button.innerHTML = 'x';

  return button;
}


let key = null;


deleteOnFireBaseKey('Mathe lernen');





function deleteOnFireBaseKey(name) {
  var database = firebase.database();
  database.ref('posts').orderByChild('name').on("value", function(snapshot) {
    snapshot.forEach(function(data) {
      key = data.key;
      name2 = data.val().name;
      if (name == name2) {
        console.log(key + ',' + name2);
        firebase.database().ref('posts').child(key).remove();
      }

    });
  });
}

//schlachtet die space und ! und x ab
function slaughter(str){
 console.log(str);

  str = str.slice(0, -1);
  console.log(str);
  str = str.replace ("[bis", " ");
  str = str.replace("6:00 Uhr", " ");
  str = str.replace("7:00 Uhr", "");
  str = str.replace("8:00 Uhr", "");
  str = str.replace("9:00 Uhr","");
  str = str.replace("10:00 Uhr","");
  str = str.replace("11:00 Uhr","");
  str = str.replace("12:00 Uhr","");
  str = str.replace("13:00 Uhr","");
  str = str.replace("14:00 Uhr","");
  str = str.replace("15:00 Uhr","");
  str = str.replace("16:00 Uhr","");
  str = str.replace("17:00 Uhr","");
  str = str.replace("18:00 Uhr","");
  str = str.replace("19:00 Uhr","");
  str = str.replace("20:00 Uhr","");
  str = str.replace("21:00 Uhr","");
  str = str.replace("22:00 Uhr","");
  str = str.replace("23:00 Uhr","");
  str = str.replace("24:00 Uhr","");
  str = str.replace("]", " ")

  str = str.replace('[','');
  str = str.replace('!','');
  str = str.replace('!','');
  str = str.replace('!','');
  console.log(str);
  str = str.replace(/\s*$/,'');
  console.log(str);
  return str;

}

//Delete function
function deleteList(event) {
  console.log('moin');
  let li = event.target;
  let str = li.parentNode.textContent;
  str = slaughter(str);
  deleteOnFireBaseKey('' + str);
  //key von dieses li in Firebase finden




  //Node aus  löschen: ref.child(key).remove();
  li.parentNode.parentNode.removeChild(li.parentNode);
}

window.onload = function() {




// Für die einzelnen Tages- und Zeitkombinationen müssen Parent-Elemente erzeugt werden
//Justin
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
//Donnerstag

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

//Freitag

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

//Samstag

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

//Aisha
//Sonntag

//Samstag

var so1 = document.createElement("ul");
document.getElementById("so6-7").appendChild(so1);

var so2 = document.createElement("ul");
document.getElementById("so7-8").appendChild(so2);

var so3 = document.createElement("ul");
document.getElementById("so8-9").appendChild(so3);

var so4 = document.createElement("ul");
document.getElementById("so9-10").appendChild(so4);

var so5 = document.createElement("ul");
document.getElementById("so10-11").appendChild(so5);

var so6 = document.createElement("ul");
document.getElementById("so11-12").appendChild(so6);

var so7 = document.createElement("ul");
document.getElementById("so12-13").appendChild(so7);

var so8 = document.createElement("ul");
document.getElementById("so13-14").appendChild(so8);

var so9 = document.createElement("ul");
document.getElementById("so14-15").appendChild(so9);

var so10 = document.createElement("ul");
document.getElementById("so15-16").appendChild(so10);

var so11 = document.createElement("ul");
document.getElementById("so16-17").appendChild(so11);

var so12 = document.createElement("ul");
document.getElementById("so17-18").appendChild(so12);

var so13 = document.createElement("ul");
document.getElementById("so18-19").appendChild(so13);

var so14 = document.createElement("ul");
document.getElementById("so19-20").appendChild(so14);

var so15 = document.createElement("ul");
document.getElementById("so20-21").appendChild(so15);

var so16 = document.createElement("ul");
document.getElementById("so21-22").appendChild(so16);

var so17 = document.createElement("ul");
document.getElementById("so22-23").appendChild(so17);

var so18 = document.createElement("ul");
document.getElementById("so23-24").appendChild(so18);



// Firebase einbinden
var database = firebase.database();
var rootRef = firebase.database().ref("posts");
rootRef.once("value").then(function(snapshot) {
    var anzahlChild = snapshot.numChildren();
    var webprog = snapshot.val();

    // aus der Datenbank auslesen

    //ab hier delete button
    // Montag, 6 bis 7

    for (i in webprog) {

      if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "6:00 Uhr") {

        if (webprog[i].prio == "keine Priorität") {
          // Wenn keine Priorität, keine zusätzliche Zeichen
          var mo1l1 = document.createElement("li");
          var mo1p1 = document.createTextNode(webprog[i].name + " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo1l1.appendChild(mo1p1);
          mo1.appendChild(mo1l1);
          let btn = createDeleteButton();
          mo1l1.appendChild(btn);
        }

        if (webprog[i].prio == "wenig Priorität") {
          // Wenn wenig Priorität, nur ein Ausrufezeichen
          var mo1l2 = document.createElement("li");
          var mo1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" + " " + webprog[i].zeitbis+"]");
          mo1l2.appendChild(mo1p2);
          mo1.appendChild(mo1l2);
          let btn = createDeleteButton();
          mo1l2.appendChild(btn);
        }

        if (webprog[i].prio == "mittlere Priorität") {
          // Wenn mittlere Priorität, dann zwei Ausrufezeichen
          var mo1l3 = document.createElement("li");
          var mo1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo1l3.appendChild(mo1p3);
          mo1.appendChild(mo1l3);
          let btn = createDeleteButton();
          mo1l3.appendChild(btn);


        }

        if (webprog[i].prio == "hohe Priorität") {
          // Wenn hohe Priorität, dann drei Ausrufezeichen
          var mo1l4 = document.createElement("li"); // Listenelement anlegen
          var mo1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo1l4.appendChild(mo1p4); // dem Listenelement Text anhängen
          mo1.appendChild(mo1l4); // Listenelement dem Feld anhängen
          let btn = createDeleteButton();
          mo1l4.appendChild(btn);
        }


      }

    }


    // Montag, 7 bis 8

    for (i in webprog) {

      if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "7:00 Uhr") {

        if (webprog[i].prio == "keine Priorität") {
          // Wenn keine Priorität, keine zusätzliche Zeichen
          var mo3l1 = document.createElement("li");
          var mo3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l1.appendChild(mo3p1);
          mo3.appendChild(mo3l1);
          let btn = createDeleteButton();
          mo3l1.appendChild(btn);
        }

        if (webprog[i].prio == "wenig Priorität") {
          // Wenn wenig Priorität, nur ein Ausrufezeichen
          var mo3l2 = document.createElement("li");
          var mo3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l2.appendChild(mo3p2);
          mo3.appendChild(mo3l2);
          let btn = createDeleteButton();
          mo3l2.appendChild(btn);
        }

        if (webprog[i].prio == "mittlere Priorität") {
          // Wenn mittlere Priorität, dann zwei Ausrufezeichen
          var mo3l3 = document.createElement("li");
          var mo3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l3.appendChild(mo3p3);
          mo3.appendChild(mo3l3);
          let btn = createDeleteButton();
          mo3l3.appendChild(btn);

        }

        if (webprog[i].prio == "hohe Priorität") {
          // Wenn hohe Priorität, dann drei Ausrufezeichen
          var mo3l4 = document.createElement("li"); // Listenelement anlegen
          var mo3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l4.appendChild(mo3p4); // dem Listenelement Text anhängen
          mo3.appendChild(mo3l4); // Listenelement dem Feld anhängen
          let btn = createDeleteButton();
          mo3l4.appendChild(btn);
        }

      }

    }

    // Montag, 8 bis 9

    for (i in webprog) {

      if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "8:00 Uhr") {

        if (webprog[i].prio == "keine Priorität") {
          // Wenn keine Priorität, keine zusätzliche Zeichen
          var mo3l1 = document.createElement("li");
          var mo3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l1.setAttribute("id", webprog[i].name);
          mo3l1.appendChild(mo3p1);
          mo3.appendChild(mo3l1);
          let btn = createDeleteButton();
          mo3l1.appendChild(btn);

        }

        if (webprog[i].prio == "wenig Priorität") {
          // Wenn wenig Priorität, nur ein Ausrufezeichen
          var mo3l2 = document.createElement("li");
          var mo3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l2.appendChild(mo3p2);
          mo3.appendChild(mo3l2);
          let btn = createDeleteButton();
          mo3l2.appendChild(btn);
        }

        if (webprog[i].prio == "mittlere Priorität") {
          // Wenn mittlere Priorität, dann zwei Ausrufezeichen
          var mo3l3 = document.createElement("li");
          var mo3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l3.appendChild(mo3p3);
          mo3.appendChild(mo3l3);
          let btn = createDeleteButton();
          mo3l3.appendChild(btn);


        }

        if (webprog[i].prio == "hohe Priorität") {
          // Wenn hohe Priorität, dann drei Ausrufezeichen
          var mo3l4 = document.createElement("li"); // Listenelement anlegen
          var mo3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo3l4.appendChild(mo3p4); // dem Listenelement Text anhängen
          mo3.appendChild(mo3l4); // Listenelement dem Feld anhängen
          let btn = createDeleteButton();
          mo3l4.appendChild(btn);
        }

      }

    }

    // Montag, 9 bis 10
    for (i in webprog) {
      if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "9:00 Uhr") {

        if (webprog[i].prio == "keine Priorität") {
          // Wenn keine Priorität, keine zusätzliche Zeichen
          var mo4l1 = document.createElement("li");
          var mo4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo4l1.appendChild(mo4p1);
          mo4.appendChild(mo4l1);
          let btn = createDeleteButton();
          mo4l1.appendChild(btn);
        }

        if (webprog[i].prio == "wenig Priorität") {
          // Wenn wenig Priorität, nur ein Ausrufezeichen
          var mo4l2 = document.createElement("li");
          var mo4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo4l2.appendChild(mo4p2);
          mo4.appendChild(mo4l2);
          let btn = createDeleteButton();
          mo4l2.appendChild(btn);
        }

        if (webprog[i].prio == "mittlere Priorität") {
          // Wenn mittlere Priorität, dann zwei Ausrufezeichen
          var mo4l3 = document.createElement("li");
          var mo4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo4l3.appendChild(mo4p3);
          mo4.appendChild(mo4l3);
          let btn = createDeleteButton();
          mo4l3.appendChild(btn);


        }

        if (webprog[i].prio == "hohe Priorität") {
          // Wenn hohe Priorität, dann drei Ausrufezeichen
          var mo4l4 = document.createElement("li"); // Listenelement anlegen
          var mo4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo4l4.appendChild(mo3p4); // dem Listenelement Text anhängen
          mo4.appendChild(mo3l4); // Listenelement dem Feld anhängen
          let btn = createDeleteButton();
          mo4l4.appendChild(btn);
        }

      }
    }


    // Montag, 10 bis 11

    for (i in webprog) {
      if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "10:00 Uhr") {

        if (webprog[i].prio == "keine Priorität") {
          // Wenn keine Priorität, keine zusätzliche Zeichen
          var mo5l1 = document.createElement("li");
          var mo5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo5l1.appendChild(mo5p1);
          mo5.appendChild(mo5l1);
          let btn = createDeleteButton();
          mo5l1.appendChild(btn);
        }

        if (webprog[i].prio == "wenig Priorität") {
          // Wenn wenig Priorität, nur ein Ausrufezeichen
          var mo5l2 = document.createElement("li");
          var mo5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo5l2.appendChild(mo5p2);
          mo5.appendChild(mo5l2);
          let btn = createDeleteButton();
          mo5l2.appendChild(btn);
        }

        if (webprog[i].prio == "mittlere Priorität") {
          // Wenn mittlere Priorität, dann zwei Ausrufezeichen
          var mo5l3 = document.createElement("li");
          var mo5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo5l3.appendChild(mo5p3);
          mo5.appendChild(mo5l3);
          let btn = createDeleteButton();
          mo5l3.appendChild(btn);


        }

        if (webprog[i].prio == "hohe Priorität") {
          // Wenn hohe Priorität, dann drei Ausrufezeichen
          var mo5l4 = document.createElement("li"); // Listenelement anlegen
          var mo5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo5l4.appendChild(mo5p4); // dem Listenelement Text anhängen
          mo5.appendChild(mo5l4); // Listenelement dem Feld anhängen
          let btn = createDeleteButton();
          mo5l4.appendChild(btn);
        }

      }
    }

    // Montag, 11 bis 12

    for (i in webprog) {
      if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "11:00 Uhr") {

        if (webprog[i].prio == "keine Priorität") {
          // Wenn keine Priorität, keine zusätzliche Zeichen
          var mo6l1 = document.createElement("li");
          var mo6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo6l1.appendChild(mo6p1);
          mo6.appendChild(mo6l1);
          let btn = createDeleteButton();
          mo6l1.appendChild(btn);
        }

        if (webprog[i].prio == "wenig Priorität") {
          // Wenn wenig Priorität, nur ein Ausrufezeichen
          var mo6l2 = document.createElement("li");
          var mo6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo6l2.appendChild(mo6p2);
          mo6.appendChild(mo6l2);
          let btn = createDeleteButton();
          mo6l2.appendChild(btn);
        }

        if (webprog[i].prio == "mittlere Priorität") {
          // Wenn mittlere Priorität, dann zwei Ausrufezeichen
          var mo6l3 = document.createElement("li");
          var mo6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo6l3.appendChild(mo6p3);
          mo6.appendChild(mo6l3);
          let btn = createDeleteButton();
          mo6l3.appendChild(btn);


        }

        if (webprog[i].prio == "hohe Priorität") {
          // Wenn hohe Priorität, dann drei Ausrufezeichen
          var mo6l4 = document.createElement("li"); // Listenelement anlegen
          var mo6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
          mo6l4.appendChild(mo6p4); // dem Listenelement Text anhängen
          mo6.appendChild(mo6l4); // Listenelement dem Feld anhängen
          let btn = createDeleteButton();
          mo6l4.appendChild(btn);


      }
    }
}
      // Montag, 12 bis 13

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "12:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo7l1 = document.createElement("li");
            var mo7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo7l1.appendChild(mo7p1);
            mo7.appendChild(mo7l1);
            let btn = createDeleteButton();
            mo7l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo7l2 = document.createElement("li");
            var mo7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo7l2.appendChild(mo7p2);
            mo7.appendChild(m74l2);
            let btn = createDeleteButton();
            mo7l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo7l3 = document.createElement("li");
            var mo7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo7l3.appendChild(mo7p3);
            mo7.appendChild(mo7l3);
            let btn = createDeleteButton();
            mo7l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo7l4 = document.createElement("li"); // Listenelement anlegen
            var mo7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo7l4.appendChild(mo7p4); // dem Listenelement Text anhängen
            mo7.appendChild(mo7l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo7l4.appendChild(btn);
          }

        }
      }

      // Montag, 13 bis 14

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "13:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo8l1 = document.createElement("li");
            var mo8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo8l1.appendChild(mo8p1);
            mo8.appendChild(mo8l1);
            let btn = createDeleteButton();
            mo8l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo8l2 = document.createElement("li");
            var mo8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo8l2.appendChild(mo8p2);
            mo8.appendChild(mo8l2);
            let btn = createDeleteButton();
            mo8l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo8l3 = document.createElement("li");
            var mo8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo8l3.appendChild(mo8p3);
            mo8.appendChild(mo8l3);
            let btn = createDeleteButton();
            mo8l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo8l4 = document.createElement("li"); // Listenelement anlegen
            var mo484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo8l4.appendChild(mo8p4); // dem Listenelement Text anhängen
            mo8.appendChild(mo8l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo8l4.appendChild(btn);
          }

        }
      }

      // Montag, 14 bis 15

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "14:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo9l1 = document.createElement("li");
            var mo9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo9l1.appendChild(mo9p1);
            mo9.appendChild(mo9l1);
            let btn = createDeleteButton();
            mo9l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo9l2 = document.createElement("li");
            var mo9p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo9l2.appendChild(mo9p2);
            mo9.appendChild(mo9l2);
            let btn = createDeleteButton();
            mo9l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo9l3 = document.createElement("li");
            var mo9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo9l3.appendChild(mo9p3);
            mo9.appendChild(mo9l3);
            let btn = createDeleteButton();
            mo9l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo9l4 = document.createElement("li"); // Listenelement anlegen
            var mo9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo9l4.appendChild(mo9p4); // dem Listenelement Text anhängen
            mo9.appendChild(mo9l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo9l4.appendChild(btn);
          }

        }
      }

      // Montag, 15 bis 16

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "15:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo10l1 = document.createElement("li");
            var mo10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo10l1.appendChild(mo10p1);
            mo10.appendChild(mo10l1);
            let btn = createDeleteButton();
            mo10l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo10l2 = document.createElement("li");
            var mo10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo10l2.appendChild(mo10p2);
            mo10.appendChild(mo10l2);
            let btn = createDeleteButton();
            mo10l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo10l3 = document.createElement("li");
            var mo10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo10l3.appendChild(mo10p3);
            mo10.appendChild(mo10l3);
            let btn = createDeleteButton();
            mo10l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo10l4 = document.createElement("li"); // Listenelement anlegen
            var mo10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo10l4.appendChild(mo10p4); // dem Listenelement Text anhängen
            mo10.appendChild(mo10l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo10l4.appendChild(btn);
          }

        }
      }


      // Montag, 16-17

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "16:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo11l1 = document.createElement("li");
            var mo11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo11l1.appendChild(mo11p1);
            mo11.appendChild(mo11l1);
            let btn = createDeleteButton();
            mo11l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo11l2 = document.createElement("li");
            var mo11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo11l2.appendChild(mo11p2);
            mo11.appendChild(mo11l2);
            let btn = createDeleteButton();
            mo11l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo11l3 = document.createElement("li");
            var mo11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo11l3.appendChild(mo11p3);
            mo4.appendChild(mo11l3);
            let btn = createDeleteButton();
            mo11l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo11l4 = document.createElement("li"); // Listenelement anlegen
            var mo11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo11l4.appendChild(mo11p4); // dem Listenelement Text anhängen
            mo11.appendChild(mo11l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo11l4.appendChild(btn);
          }

        }
      }

      // Montag, 17 bis 18

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "17:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo12l1 = document.createElement("li");
            var mo12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo12l1.appendChild(mo12p1);
            mo12.appendChild(mo12l1);
            let btn = createDeleteButton();
            mo12l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo12l2 = document.createElement("li");
            var mo12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo12l2.appendChild(mo12p2);
            mo12.appendChild(mo12l2);
            let btn = createDeleteButton();
            mo12l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo12l3 = document.createElement("li");
            var mo12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo12l3.appendChild(mo12p3);
            mo12.appendChild(mo12l3);
            let btn = createDeleteButton();
            mo12l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo12l4 = document.createElement("li"); // Listenelement anlegen
            var mo12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo12l4.appendChild(mo12p4); // dem Listenelement Text anhängen
            mo12.appendChild(mo12l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo12l4.appendChild(btn);
          }

        }
      }

      // Montag, 18 bis 19

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "18:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo13l1 = document.createElement("li");
            var mo13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo13l1.appendChild(mo13p1);
            mo13.appendChild(mo13l1);
            let btn = createDeleteButton();
            mo13l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo13l2 = document.createElement("li");
            var mo13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo13l2.appendChild(mo13p2);
            mo13.appendChild(mo13l2);
            let btn = createDeleteButton();
            mo13l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo13l3 = document.createElement("li");
            var mo13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo13l3.appendChild(mo13p3);
            mo13.appendChild(mo13l3);
            let btn = createDeleteButton();
            mo13l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo13l4 = document.createElement("li"); // Listenelement anlegen
            var mo13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo13l4.appendChild(mo13p4); // dem Listenelement Text anhängen
            mo13.appendChild(mo13l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo13l4.appendChild(btn);
          }

        }
      }

      // Montag, 19 bis 20

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "19:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo14l1 = document.createElement("li");
            var mo14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo14l1.appendChild(mo14p1);
            mo14.appendChild(mo14l1);
            let btn = createDeleteButton();
            mo14l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo14l2 = document.createElement("li");
            var mo14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo14l2.appendChild(mo14p2);
            mo14.appendChild(mo14l2);
            let btn = createDeleteButton();
            mo14l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo14l3 = document.createElement("li");
            var mo14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo14l3.appendChild(mo14p3);
            mo14.appendChild(mo14l3);
            let btn = createDeleteButton();
            mo14l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo14l4 = document.createElement("li"); // Listenelement anlegen
            var mo14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo14l4.appendChild(mo14p4); // dem Listenelement Text anhängen
            mo14.appendChild(mo14l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo14l4.appendChild(btn);
          }

        }
      }

      // Montag, 20 bis 21

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "20:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo15l1 = document.createElement("li");
            var mo15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo15l1.appendChild(mo15p1);
            mo15.appendChild(mo15l1);
            let btn = createDeleteButton();
            mo15l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo15l2 = document.createElement("li");
            var mo15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo15l2.appendChild(mo15p2);
            mo15.appendChild(mo15l2);
            let btn = createDeleteButton();
            mo15l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo15l3 = document.createElement("li");
            var mo15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo15l3.appendChild(mo15p3);
            mo15.appendChild(mo15l3);
            let btn = createDeleteButton();
            mo15l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo15l4 = document.createElement("li"); // Listenelement anlegen
            var mo15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo15l4.appendChild(mo15p4); // dem Listenelement Text anhängen
            mo15.appendChild(mo15l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo15l4.appendChild(btn);
          }

        }
      }

      // Montag, 21 bis 22

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "21:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo16l1 = document.createElement("li");
            var mo16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo16l1.appendChild(mo16p1);
            mo16.appendChild(mo16l1);
            let btn = createDeleteButton();
            mo16l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo16l2 = document.createElement("li");
            var mo16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo16l2.appendChild(mo16p2);
            mo16.appendChild(mo16l2);
            let btn = createDeleteButton();
            mo16l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo16l3 = document.createElement("li");
            var mo16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo16l3.appendChild(mo16p3);
            mo16.appendChild(mo16l3);
            let btn = createDeleteButton();
            mo16l3.appendChild(btn);
          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo16l4 = document.createElement("li"); // Listenelement anlegen
            var mo16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo16l4.appendChild(mo16p4); // dem Listenelement Text anhängen
            mo16.appendChild(mo16l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo16l4.appendChild(btn);
          }

        }
      }

      // Montag, 22 bis 23

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "22:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo17l1 = document.createElement("li");
            var mo17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo17l1.appendChild(mo17p1);
            mo17.appendChild(mo17l1);
            let btn = createDeleteButton();
            mo17l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo17l2 = document.createElement("li");
            var mo17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo17l2.appendChild(mo17p2);
            mo17.appendChild(mo17l2);
            let btn = createDeleteButton();
            mo17l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo17l3 = document.createElement("li");
            var mo17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo17l3.appendChild(mo17p3);
            mo17.appendChild(mo17l3);
            let btn = createDeleteButton();
            mo17l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo17l4 = document.createElement("li"); // Listenelement anlegen
            var mo17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo17l4.appendChild(mo17p4); // dem Listenelement Text anhängen
            mo17.appendChild(mo17l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo17l4.appendChild(btn);
          }

        }
      }

      // Montag, 23 bis 24

      for (i in webprog) {
        if (webprog[i].tag == "Montag" && webprog[i].zeitvon == "23:00 Uhr") {

          if (webprog[i].prio == "keine Priorität") {
            // Wenn keine Priorität, keine zusätzliche Zeichen
            var mo18l1 = document.createElement("li");
            var mo18p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo18l1.appendChild(mo18p1);
            mo18.appendChild(mo18l1);
            let btn = createDeleteButton();
            mo18l1.appendChild(btn);
          }

          if (webprog[i].prio == "wenig Priorität") {
            // Wenn wenig Priorität, nur ein Ausrufezeichen
            var mo18l2 = document.createElement("li");
            var mo18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo18l2.appendChild(mo18p2);
            mo18.appendChild(mo18l2);
            let btn = createDeleteButton();
            mo18l2.appendChild(btn);
          }

          if (webprog[i].prio == "mittlere Priorität") {
            // Wenn mittlere Priorität, dann zwei Ausrufezeichen
            var mo18l3 = document.createElement("li");
            var mo18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo18l3.appendChild(mo18p3);
            mo18.appendChild(mo18l3);
            let btn = createDeleteButton();
            mo18l3.appendChild(btn);


          }

          if (webprog[i].prio == "hohe Priorität") {
            // Wenn hohe Priorität, dann drei Ausrufezeichen
            var mo18l4 = document.createElement("li"); // Listenelement anlegen
            var mo18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
            mo18l4.appendChild(mo18p4); // dem Listenelement Text anhängen
            mo18.appendChild(mo18l4); // Listenelement dem Feld anhängen
            let btn = createDeleteButton();
            mo18l4.appendChild(btn);
          }
          //bis hier button delete



  }
}

for (i in webprog) {

  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "6:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di1l1 = document.createElement("li");
      var di1p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di1l1.appendChild(di1p1);
      di1.appendChild(di1l1);
      let btn = createDeleteButton();
      di1l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di1l2 = document.createElement("li");
      var di1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di1l2.appendChild(di1p2);
      di1.appendChild(di1l2);
      let btn = createDeleteButton();
      di1l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di1l3 = document.createElement("li");
      var di1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di1l3.appendChild(di1p3);
      di1.appendChild(di1l3);
      let btn = createDeleteButton();
      di1l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di1l4 = document.createElement("li"); // Listenelement anlegen
      var di1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di1l4.appendChild(di1p4); // dem Listenelement Text anhängen
      di1.appendChild(di1l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di1l4.appendChild(btn);
    }

  }

}


// Dienstag, 7 bis 8

for (i in webprog) {

  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di2l1 = document.createElement("li");
      var di2p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l1.appendChild(di3p1);
      di3.appendChild(di3l1);
      let btn = createDeleteButton();
      di2l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di2l2 = document.createElement("li");
      var di2p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l2.appendChild(di3p2);
      di3.appendChild(di3l2);
      let btn = createDeleteButton();
      di2l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di2l3 = document.createElement("li");
      var di2p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l3.appendChild(di3p3);
      di3.appendChild(di3l3);
      let btn = createDeleteButton();
      di2l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di2l4 = document.createElement("li"); // Listenelement anlegen
      var di2p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l4.appendChild(di3p4); // dem Listenelement Text anhängen
      di3.appendChild(di3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di2l4.appendChild(btn);
    }

  }

}

// Dienstag, 8 bis 9

for (i in webprog) {

  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di3l1 = document.createElement("li");
      var di3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l1.appendChild(di3p1);
      di3.appendChild(di3l1);
      let btn = createDeleteButton();
      di3l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di3l2 = document.createElement("li");
      var di3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l2.appendChild(di3p2);
      di3.appendChild(di3l2);
      let btn = createDeleteButton();
      di3l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di3l3 = document.createElement("li");
      var di3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l3.appendChild(di3p3);
      di3.appendChild(di3l3);
      let btn = createDeleteButton();
      di3l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di3l4 = document.createElement("li"); // Listenelement anlegen
      var di3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di3l4.appendChild(di3p4); // dem Listenelement Text anhängen
      di3.appendChild(di3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di3l4.appendChild(btn);
    }

  }

}

// Dienstag, 9 bis 10
for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "9:00 Uhr" ) {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di4l1 = document.createElement("li");
      var di4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di4l1.appendChild(di4p1);
      di4.appendChild(di4l1);
      let btn = createDeleteButton();
      di4l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di4l2 = document.createElement("li");
      var di4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di4l2.appendChild(di4p2);
      di4.appendChild(di4l2);
      let btn = createDeleteButton();
      di4l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di4l3 = document.createElement("li");
      var di4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di4l3.appendChild(di4p3);
      di4.appendChild(di4l3);
      let btn = createDeleteButton();
      di4l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di4l4 = document.createElement("li"); // Listenelement anlegen
      var di4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di4l4.appendChild(di3p4); // dem Listenelement Text anhängen
      di4.appendChild(di3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di4l4.appendChild(btn);
    }

  }
}


// Dienstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "10:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di5l1 = document.createElement("li");
      var di5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di5l1.appendChild(di5p1);
      di5.appendChild(di5l1);
      let btn = createDeleteButton();
      di5l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di5l2 = document.createElement("li");
      var di5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di5l2.appendChild(di5p2);
      di5.appendChild(di5l2);
      let btn = createDeleteButton();
      di5l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di5l3 = document.createElement("li");
      var di5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di5l3.appendChild(di5p3);
      di5.appendChild(di5l3);
      let btn = createDeleteButton();
      di5l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di5l4 = document.createElement("li"); // Listenelement anlegen
      var di5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di5l4.appendChild(di5p4); // dem Listenelement Text anhängen
      di5.appendChild(di5l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di5l4.appendChild(btn);
    }

  }
}

// Dienstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di6l1 = document.createElement("li");
      var di6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di6l1.appendChild(di6p1);
      di6.appendChild(di6l1);
      let btn = createDeleteButton();
      di6l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di6l2 = document.createElement("li");
      var di6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di6l2.appendChild(di6p2);
      di6.appendChild(di6l2);
      let btn = createDeleteButton();
      di6l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di6l3 = document.createElement("li");
      var di6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di6l3.appendChild(di6p3);
      di6.appendChild(di6l3);
      let btn = createDeleteButton();
      di6l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di6l4 = document.createElement("li"); // Listenelement anlegen
      var di6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di6l4.appendChild(di6p4); // dem Listenelement Text anhängen
      di6.appendChild(di6l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di6l4.appendChild(btn);
    }

  }
}

// Dienstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di7l1 = document.createElement("li");
      var di7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di7l1.appendChild(di7p1);
      di7.appendChild(di7l1);
      let btn = createDeleteButton();
      di7l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di7l2 = document.createElement("li");
      var di7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di7l2.appendChild(di7p2);
      di7.appendChild(m74l2);
      let btn = createDeleteButton();
      di7l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di7l3 = document.createElement("li");
      var di7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di7l3.appendChild(di7p3);
      di7.appendChild(di7l3);
      let btn = createDeleteButton();
      di7l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di7l4 = document.createElement("li"); // Listenelement anlegen
      var di7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di7l4.appendChild(di7p4); // dem Listenelement Text anhängen
      di7.appendChild(di7l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di7l4.appendChild(btn);
    }

  }
}

// Dienstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di8l1 = document.createElement("li");
      var di8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di8l1.appendChild(di8p1);
      di8.appendChild(di8l1);
      let btn = createDeleteButton();
      di8l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di8l2 = document.createElement("li");
      var di8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di8l2.appendChild(di8p2);
      di8.appendChild(di8l2);
      let btn = createDeleteButton();
      di8l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di8l3 = document.createElement("li");
      var di8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di8l3.appendChild(di8p3);
      di8.appendChild(di8l3);
      let btn = createDeleteButton();
      di8l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di8l4 = document.createElement("li"); // Listenelement anlegen
      var di484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di8l4.appendChild(di8p4); // dem Listenelement Text anhängen
      di8.appendChild(di8l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di8l4.appendChild(btn);
    }

  }
}

// Dienstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di9l1 = document.createElement("li");
      var di9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di9l1.appendChild(di9p1);
      di9.appendChild(di9l1);
      let btn = createDeleteButton();
      di9l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di9l2 = document.createElement("li");
      var di9p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di9l2.appendChild(di9p2);
      di9.appendChild(di9l2);
      let btn = createDeleteButton();
      di9l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di9l3 = document.createElement("li");
      var di9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di9l3.appendChild(di9p3);
      di9.appendChild(di9l3);
      let btn = createDeleteButton();
      di9l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di9l4 = document.createElement("li"); // Listenelement anlegen
      var di9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di9l4.appendChild(di9p4); // dem Listenelement Text anhängen
      di9.appendChild(di9l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di9l4.appendChild(btn);
    }

  }
}

// Dienstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di10l1 = document.createElement("li");
      var di10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di10l1.appendChild(di10p1);
      di10.appendChild(di10l1);
      let btn = createDeleteButton();
      di10l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di10l2 = document.createElement("li");
      var di10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di10l2.appendChild(di10p2);
      di10.appendChild(di10l2);
      let btn = createDeleteButton();
      di10l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di10l3 = document.createElement("li");
      var di10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di10l3.appendChild(di10p3);
      di10.appendChild(di10l3);
      let btn = createDeleteButton();
      di10l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di10l4 = document.createElement("li"); // Listenelement anlegen
      var di10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di10l4.appendChild(di10p4); // dem Listenelement Text anhängen
      di10.appendChild(di10l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di10l4.appendChild(btn);
    }

  }
}


// Dienstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di11l1 = document.createElement("li");
      var di11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di11l1.appendChild(di11p1);
      di11.appendChild(di11l1);
      let btn = createDeleteButton();
      di11l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di11l2 = document.createElement("li");
      var di11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di11l2.appendChild(di11p2);
      di11.appendChild(di11l2);
      let btn = createDeleteButton();
      di11l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di11l3 = document.createElement("li");
      var di11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di11l3.appendChild(di11p3);
      di4.appendChild(di11l3);
      let btn = createDeleteButton();
      di11l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di11l4 = document.createElement("li"); // Listenelement anlegen
      var di11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di11l4.appendChild(di11p4); // dem Listenelement Text anhängen
      di11.appendChild(di11l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di11l4.appendChild(btn);
    }

  }
}

// Dienstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di12l1 = document.createElement("li");
      var di12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di12l1.appendChild(di12p1);
      di12.appendChild(di12l1);
      let btn = createDeleteButton();
      di12l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di12l2 = document.createElement("li");
      var di12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di12l2.appendChild(di12p2);
      di12.appendChild(di12l2);
      let btn = createDeleteButton();
      di12l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di12l3 = document.createElement("li");
      var di12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di12l3.appendChild(di12p3);
      di12.appendChild(di12l3);
      let btn = createDeleteButton();
      di12l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di12l4 = document.createElement("li"); // Listenelement anlegen
      var di12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di12l4.appendChild(di12p4); // dem Listenelement Text anhängen
      di12.appendChild(di12l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di12l4.appendChild(btn);
    }

  }
}

// Dienstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di13l1 = document.createElement("li");
      var di13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di13l1.appendChild(di13p1);
      di13.appendChild(di13l1);
      let btn = createDeleteButton();
      di13l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di13l2 = document.createElement("li");
      var di13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di13l2.appendChild(di13p2);
      di13.appendChild(di13l2);
      let btn = createDeleteButton();
      di13l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di13l3 = document.createElement("li");
      var di13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di13l3.appendChild(di13p3);
      di13.appendChild(di13l3);
      let btn = createDeleteButton();
      di13l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di13l4 = document.createElement("li"); // Listenelement anlegen
      var di13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di13l4.appendChild(di13p4); // dem Listenelement Text anhängen
      di13.appendChild(di13l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di13l4.appendChild(btn);
    }

  }
}

// Dienstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di14l1 = document.createElement("li");
      var di14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di14l1.appendChild(di14p1);
      di14.appendChild(di14l1);
      let btn = createDeleteButton();
      di14l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di14l2 = document.createElement("li");
      var di14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di14l2.appendChild(di14p2);
      di14.appendChild(di14l2);
      let btn = createDeleteButton();
      di14l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di14l3 = document.createElement("li");
      var di14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di14l3.appendChild(di14p3);
      di14.appendChild(di14l3);
      let btn = createDeleteButton();
      di14l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di14l4 = document.createElement("li"); // Listenelement anlegen
      var di14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di14l4.appendChild(di14p4); // dem Listenelement Text anhängen
      di14.appendChild(di14l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di14l4.appendChild(btn);
    }

  }
}

// Dienstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di15l1 = document.createElement("li");
      var di15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di15l1.appendChild(di15p1);
      di15.appendChild(di15l1);
      let btn = createDeleteButton();
      di15l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di15l2 = document.createElement("li");
      var di15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di15l2.appendChild(di15p2);
      di15.appendChild(di15l2);
      let btn = createDeleteButton();
      di15l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di15l3 = document.createElement("li");
      var di15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di15l3.appendChild(di15p3);
      di15.appendChild(di15l3);
      let btn = createDeleteButton();
      di15l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di15l4 = document.createElement("li"); // Listenelement anlegen
      var di15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di15l4.appendChild(di15p4); // dem Listenelement Text anhängen
      di15.appendChild(di15l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di15l4.appendChild(btn);
    }

  }
}

// Dienstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "21:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di16l1 = document.createElement("li");
      var di16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di16l1.appendChild(di16p1);
      di16.appendChild(di16l1);
      let btn = createDeleteButton();
      di16l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di16l2 = document.createElement("li");
      var di16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di16l2.appendChild(di16p2);
      di16.appendChild(di16l2);
      let btn = createDeleteButton();
      di16l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di16l3 = document.createElement("li");
      var di16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di16l3.appendChild(di16p3);
      di16.appendChild(di16l3);
      let btn = createDeleteButton();
      di16l3.appendChild(btn);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di16l4 = document.createElement("li"); // Listenelement anlegen
      var di16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di16l4.appendChild(di16p4); // dem Listenelement Text anhängen
      di16.appendChild(di16l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di16l4.appendChild(btn);
    }

  }
}

// Dienstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di17l1 = document.createElement("li");
      var di17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di17l1.appendChild(di17p1);
      di17.appendChild(di17l1);
      let btn = createDeleteButton();
      di17l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di17l2 = document.createElement("li");
      var di17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di17l2.appendChild(di17p2);
      di17.appendChild(di17l2);
      let btn = createDeleteButton();
      di17l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di17l3 = document.createElement("li");
      var di17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di17l3.appendChild(di17p3);
      di17.appendChild(di17l3);
      let btn = createDeleteButton();
      di17l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di17l4 = document.createElement("li"); // Listenelement anlegen
      var di17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di17l4.appendChild(di17p4); // dem Listenelement Text anhängen
      di17.appendChild(di17l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di17l4.appendChild(btn);
    }

  }
}

// Dienstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Dienstag" && webprog[i].zeitvon == "23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var di18l1 = document.createElement("li");
      var di18p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di18l1.appendChild(di18p1);
      di18.appendChild(di18l1);
      let btn = createDeleteButton();
      di18l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var di18l2 = document.createElement("li");
      var di18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di18l2.appendChild(di18p2);
      di18.appendChild(di18l2);
      let btn = createDeleteButton();
      di18l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var di18l3 = document.createElement("li");
      var di18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di18l3.appendChild(di18p3);
      di18.appendChild(di18l3);
      let btn = createDeleteButton();
      di18l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var di18l4 = document.createElement("li"); // Listenelement anlegen
      var di18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      di18l4.appendChild(di18p4); // dem Listenelement Text anhängen
      di18.appendChild(di18l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      di18l4.appendChild(btn);
    }


  }
}

for (i in webprog) {

  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "6:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi1l1 = document.createElement("li");
      var mi1p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi1l1.appendChild(mi1p1);
      mi1.appendChild(mi1l1);
      let btn = createDeleteButton();
      mi1l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi1l2 = document.createElement("li");
      var mi1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi1l2.appendChild(mi1p2);
      mi1.appendChild(mi1l2);
      let btn = createDeleteButton();
      mi1l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi1l3 = document.createElement("li");
      var mi1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi1l3.appendChild(mi1p3);
      mi1.appendChild(mi1l3);
      let btn = createDeleteButton();
      mi1l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi1l4 = document.createElement("li"); // Listenelement anlegen
      var mi1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi1l4.appendChild(mi1p4); // dem Listenelement Text anhängen
      mi1.appendChild(mi1l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi1l4.appendChild(btn);
    }

  }

}


// Mittwoch, 7 bis 8

for (i in webprog) {

  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi2l1 = document.createElement("li");
      var mi2p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi2l1.appendChild(mi3p1);
      mi2.appendChild(mi3l1);
      let btn = createDeleteButton();
      mi2l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi2l2 = document.createElement("li");
      var mi2p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi2l2.appendChild(mi3p2);
      mi2.appendChild(mi3l2);
      let btn = createDeleteButton();
      mi2l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi2l3 = document.createElement("li");
      var mi2p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi2l3.appendChild(mi3p3);
      mi2.appendChild(mi3l3);
      let btn = createDeleteButton();
      mi2l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi2l4 = document.createElement("li"); // Listenelement anlegen
      var mi2p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi2l4.appendChild(mi3p4); // dem Listenelement Text anhängen
      mi2.appendChild(mi3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi2l4.appendChild(btn);
    }

  }

}

// Mittwoch, 8 bis 9

for (i in webprog) {

  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi3l1 = document.createElement("li");
      var mi3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi3l1.appendChild(mi3p1);
      mi3.appendChild(mi3l1);
      let btn = createDeleteButton();
      mi3l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi3l2 = document.createElement("li");
      var mi3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi3l2.appendChild(mi3p2);
      mi3.appendChild(mi3l2);
      let btn = createDeleteButton();
      mi3l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi3l3 = document.createElement("li");
      var mi3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi3l3.appendChild(mi3p3);
      mi3.appendChild(mi3l3);
      let btn = createDeleteButton();
      mi3l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi3l4 = document.createElement("li"); // Listenelement anlegen
      var mi3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi3l4.appendChild(mi3p4); // dem Listenelement Text anhängen
      mi3.appendChild(mi3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi3l4.appendChild(btn);
    }

  }

}

// Mittwoch, 9 bis 10
for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "9:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi4l1 = document.createElement("li");
      var mi4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi4l1.appendChild(mi4p1);
      mi4.appendChild(mi4l1);
      let btn = createDeleteButton();
      mi4l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi4l2 = document.createElement("li");
      var mi4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi4l2.appendChild(mi4p2);
      mi4.appendChild(mi4l2);
      let btn = createDeleteButton();
      mi4l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi4l3 = document.createElement("li");
      var mi4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi4l3.appendChild(mi4p3);
      mi4.appendChild(mi4l3);
      let btn = createDeleteButton();
      mi4l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi4l4 = document.createElement("li"); // Listenelement anlegen
      var mi4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi4l4.appendChild(mi3p4); // dem Listenelement Text anhängen
      mi4.appendChild(mi3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi4l4.appendChild(btn);
    }

  }
}


// Mittwoch, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "10:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi5l1 = document.createElement("li");
      var mi5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi5l1.appendChild(mi5p1);
      mi5.appendChild(mi5l1);
      let btn = createDeleteButton();
      mi5l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi5l2 = document.createElement("li");
      var mi5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi5l2.appendChild(mi5p2);
      mi5.appendChild(mi5l2);
      let btn = createDeleteButton();
      mi5l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi5l3 = document.createElement("li");
      var mi5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi5l3.appendChild(mi5p3);
      mi5.appendChild(mi5l3);
      let btn = createDeleteButton();
      mi5l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi5l4 = document.createElement("li"); // Listenelement anlegen
      var mi5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi5l4.appendChild(mi5p4); // dem Listenelement Text anhängen
      mi5.appendChild(mi5l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi5l4.appendChild(btn);
    }

  }
}

// Mittwoch, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi6l1 = document.createElement("li");
      var mi6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi6l1.appendChild(mi6p1);
      mi6.appendChild(mi6l1);
      let btn = createDeleteButton();
      mi6l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi6l2 = document.createElement("li");
      var mi6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi6l2.appendChild(mi6p2);
      mi6.appendChild(mi6l2);
      let btn = createDeleteButton();
      mi6l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi6l3 = document.createElement("li");
      var mi6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi6l3.appendChild(mi6p3);
      mi6.appendChild(mi6l3);
      let btn = createDeleteButton();
      mi6l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi6l4 = document.createElement("li"); // Listenelement anlegen
      var mi6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi6l4.appendChild(mi6p4); // dem Listenelement Text anhängen
      mi6.appendChild(mi6l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi6l4.appendChild(btn);
    }

  }
}

// Mittwoch, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi7l1 = document.createElement("li");
      var mi7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi7l1.appendChild(mi7p1);
      mi7.appendChild(mi7l1);
      let btn = createDeleteButton();
      mi7l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi7l2 = document.createElement("li");
      var mi7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi7l2.appendChild(mi7p2);
      mi7.appendChild(m74l2);
      let btn = createDeleteButton();
      mi7l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi7l3 = document.createElement("li");
      var mi7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi7l3.appendChild(mi7p3);
      mi7.appendChild(mi7l3);
      let btn = createDeleteButton();
      mi7l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi7l4 = document.createElement("li"); // Listenelement anlegen
      var mi7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi7l4.appendChild(mi7p4); // dem Listenelement Text anhängen
      mi7.appendChild(mi7l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi7l4.appendChild(btn);
    }

  }
}

// Mittwoch, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi8l1 = document.createElement("li");
      var mi8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi8l1.appendChild(mi8p1);
      mi8.appendChild(mi8l1);
      let btn = createDeleteButton();
      mi8l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi8l2 = document.createElement("li");
      var mi8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi8l2.appendChild(mi8p2);
      mi8.appendChild(mi8l2);
      let btn = createDeleteButton();
      mi8l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi8l3 = document.createElement("li");
      var mi8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi8l3.appendChild(mi8p3);
      mi8.appendChild(mi8l3);
      let btn = createDeleteButton();
      mi8l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi8l4 = document.createElement("li"); // Listenelement anlegen
      var mi484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi8l4.appendChild(mi8p4); // dem Listenelement Text anhängen
      mi8.appendChild(mi8l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi8l4.appendChild(btn);
    }

  }
}

// Mittwoch, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi9l1 = document.createElement("li");
      var mi9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi9l1.appendChild(mi9p1);
      mi9.appendChild(mi9l1);
      let btn = createDeleteButton();
      mi9l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi9l2 = document.createElement("li");
      var mi9p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi9l2.appendChild(mi9p2);
      mi9.appendChild(mi9l2);
      let btn = createDeleteButton();
      mi9l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi9l3 = document.createElement("li");
      var mi9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi9l3.appendChild(mi9p3);
      mi9.appendChild(mi9l3);
      let btn = createDeleteButton();
      mi9l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi9l4 = document.createElement("li"); // Listenelement anlegen
      var mi9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi9l4.appendChild(mi9p4); // dem Listenelement Text anhängen
      mi9.appendChild(mi9l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi9l4.appendChild(btn);
    }

  }
}

// Mittwoch, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi10l1 = document.createElement("li");
      var mi10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi10l1.appendChild(mi10p1);
      mi10.appendChild(mi10l1);
      let btn = createDeleteButton();
      mi10l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi10l2 = document.createElement("li");
      var mi10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi10l2.appendChild(mi10p2);
      mi10.appendChild(mi10l2);
      let btn = createDeleteButton();
      mi10l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi10l3 = document.createElement("li");
      var mi10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi10l3.appendChild(mi10p3);
      mi10.appendChild(mi10l3);
      let btn = createDeleteButton();
      mi10l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi10l4 = document.createElement("li"); // Listenelement anlegen
      var mi10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi10l4.appendChild(mi10p4); // dem Listenelement Text anhängen
      mi10.appendChild(mi10l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi10l4.appendChild(btn);
    }

  }
}


// Mittwoch, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi11l1 = document.createElement("li");
      var mi11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi11l1.appendChild(mi11p1);
      mi11.appendChild(mi11l1);
      let btn = createDeleteButton();
      mi11l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi11l2 = document.createElement("li");
      var mi11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi11l2.appendChild(mi11p2);
      mi11.appendChild(mi11l2);
      let btn = createDeleteButton();
      mi11l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi11l3 = document.createElement("li");
      var mi11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi11l3.appendChild(mi11p3);
      mi11.appendChild(mi11l3);
      let btn = createDeleteButton();
      mi11l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi11l4 = document.createElement("li"); // Listenelement anlegen
      var mi11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi11l4.appendChild(mi11p4); // dem Listenelement Text anhängen
      mi11.appendChild(mi11l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi11l4.appendChild(btn);
    }

  }
}

// Mittwoch, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi12l1 = document.createElement("li");
      var mi12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi12l1.appendChild(mi12p1);
      mi12.appendChild(mi12l1);
      let btn = createDeleteButton();
      mi12l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi12l2 = document.createElement("li");
      var mi12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi12l2.appendChild(mi12p2);
      mi12.appendChild(mi12l2);
      let btn = createDeleteButton();
      mi12l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi12l3 = document.createElement("li");
      var mi12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi12l3.appendChild(mi12p3);
      mi12.appendChild(mi12l3);
      let btn = createDeleteButton();
      mi12l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi12l4 = document.createElement("li"); // Listenelement anlegen
      var mi12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi12l4.appendChild(mi12p4); // dem Listenelement Text anhängen
      mi12.appendChild(mi12l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi12l4.appendChild(btn);
    }

  }
}

// Mittwoch, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi13l1 = document.createElement("li");
      var mi13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi13l1.appendChild(mi13p1);
      mi13.appendChild(mi13l1);
      let btn = createDeleteButton();
      mi13l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi13l2 = document.createElement("li");
      var mi13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi13l2.appendChild(mi13p2);
      mi13.appendChild(mi13l2);
      let btn = createDeleteButton();
      mi13l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi13l3 = document.createElement("li");
      var mi13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi13l3.appendChild(mi13p3);
      mi13.appendChild(mi13l3);
      let btn = createDeleteButton();
      mi13l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi13l4 = document.createElement("li"); // Listenelement anlegen
      var mi13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi13l4.appendChild(mi13p4); // dem Listenelement Text anhängen
      mi13.appendChild(mi13l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi13l4.appendChild(btn);
    }

  }
}

// Mittwoch, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi14l1 = document.createElement("li");
      var mi14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi14l1.appendChild(mi14p1);
      mi14.appendChild(mi14l1);
      let btn = createDeleteButton();
      mi14l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi14l2 = document.createElement("li");
      var mi14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi14l2.appendChild(mi14p2);
      mi14.appendChild(mi14l2);
      let btn = createDeleteButton();
      mi14l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi14l3 = document.createElement("li");
      var mi14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi14l3.appendChild(mi14p3);
      mi14.appendChild(mi14l3);
      let btn = createDeleteButton();
      mi14l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi14l4 = document.createElement("li"); // Listenelement anlegen
      var mi14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi14l4.appendChild(mi14p4); // dem Listenelement Text anhängen
      mi14.appendChild(mi14l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi14l4.appendChild(btn);
    }

  }
}

// Mittwoch, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi15l1 = document.createElement("li");
      var mi15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi15l1.appendChild(mi15p1);
      mi15.appendChild(mi15l1);
      let btn = createDeleteButton();
      mi15l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi15l2 = document.createElement("li");
      var mi15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi15l2.appendChild(mi15p2);
      mi15.appendChild(mi15l2);
      let btn = createDeleteButton();
      mi15l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi15l3 = document.createElement("li");
      var mi15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi15l3.appendChild(mi15p3);
      mi15.appendChild(mi15l3);
      let btn = createDeleteButton();
      mi15l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi15l4 = document.createElement("li"); // Listenelement anlegen
      var mi15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi15l4.appendChild(mi15p4); // dem Listenelement Text anhängen
      mi15.appendChild(mi15l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi15l4.appendChild(btn);
    }

  }
}

// Mittwoch, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "21:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi16l1 = document.createElement("li");
      var mi16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi16l1.appendChild(mi16p1);
      mi16.appendChild(mi16l1);
      let btn = createDeleteButton();
      mi16l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi16l2 = document.createElement("li");
      var mi16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi16l2.appendChild(mi16p2);
      mi16.appendChild(mi16l2);
      let btn = createDeleteButton();
      mi16l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi16l3 = document.createElement("li");
      var mi16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi16l3.appendChild(mi16p3);
      mi16.appendChild(mi16l3);
      let btn = createDeleteButton();
      mi16l3.appendChild(btn);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi16l4 = document.createElement("li"); // Listenelement anlegen
      var mi16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi16l4.appendChild(mi16p4); // dem Listenelement Text anhängen
      mi16.appendChild(mi16l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi16l4.appendChild(btn);
    }

  }
}

// Mittwoch, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi17l1 = document.createElement("li");
      var mi17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi17l1.appendChild(mi17p1);
      mi17.appendChild(mi17l1);
      let btn = createDeleteButton();
      mi17l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi17l2 = document.createElement("li");
      var mi17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi17l2.appendChild(mi17p2);
      mi17.appendChild(mi17l2);
      let btn = createDeleteButton();
      mi17l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi17l3 = document.createElement("li");
      var mi17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi17l3.appendChild(mi17p3);
      mi17.appendChild(mi17l3);
      let btn = createDeleteButton();
      mi17l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi17l4 = document.createElement("li"); // Listenelement anlegen
      var mi17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi17l4.appendChild(mi17p4); // dem Listenelement Text anhängen
      mi17.appendChild(mi17l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi17l4.appendChild(btn);
    }

  }
}

// Mittwoch, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Mittwoch" && webprog[i].zeitvon == "23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var mi18l1 = document.createElement("li");
      var mi18p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi18l1.appendChild(mi18p1);
      mi18.appendChild(mi18l1);
      let btn = createDeleteButton();
      mi18l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var mi18l2 = document.createElement("li");
      var mi18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi18l2.appendChild(mi18p2);
      mi18.appendChild(mi18l2);
      let btn = createDeleteButton();
      mi18l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var mi18l3 = document.createElement("li");
      var mi18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi18l3.appendChild(mi18p3);
      mi18.appendChild(mi18l3);
      let btn = createDeleteButton();
      mi18l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var mi18l4 = document.createElement("li"); // Listenelement anlegen
      var mi18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      mi18l4.appendChild(mi18p4); // dem Listenelement Text anhängen
      mi18.appendChild(mi18l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      mi18l4.appendChild(btn);
    }


  }
}

//Donnerstag

for (i in webprog) {

  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "6:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do1l1 = document.createElement("li");
      var do1p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do1l1.appendChild(do1p1);
      do1.appendChild(do1l1);
      let btn = createDeleteButton();
      do1l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do1l2 = document.createElement("li");
      var do1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do1l2.appendChild(do1p2);
      do1.appendChild(do1l2);
      let btn = createDeleteButton();
      do1l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do1l3 = document.createElement("li");
      var do1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do1l3.appendChild(do1p3);
      do1.appendChild(do1l3);
      let btn = createDeleteButton();
      do1l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do1l4 = document.createElement("li"); // Listenelement anlegen
      var do1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do1l4.appendChild(do1p4); // dem Listenelement Text anhängen
      do1.appendChild(do1l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do1l4.appendChild(btn);
    }

  }

}


// Donnerstag, 7 bis 8

for (i in webprog) {

  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do2l1 = document.createElement("li");
      var do2p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do2l1.appendChild(do2p1);
      do2.appendChild(do2l1);
      let btn = createDeleteButton();
      do2l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do2l2 = document.createElement("li");
      var do2p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do2l2.appendChild(do2p2);
      do2.appendChild(do2l2);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do2l3 = document.createElement("li");
      var do2p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do2l3.appendChild(do2p3);
      do2.appendChild(do2l3);
      let btn = createDeleteButton();
      do2l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do2l4 = document.createElement("li"); // Listenelement anlegen
      var do2p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do2l4.appendChild(do2p4); // dem Listenelement Text anhängen
      do2.appendChild(do2l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do2l4.appendChild(btn);
    }

  }

}

// Donnerstag, 8 bis 9

for (i in webprog) {

  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do3l1 = document.createElement("li");
      var do3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do3l1.appendChild(do3p1);
      do3.appendChild(do3l1);
      let btn = createDeleteButton();
      do3l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do3l2 = document.createElement("li");
      var do3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do3l2.appendChild(do3p2);
      do3.appendChild(do3l2);
      let btn = createDeleteButton();
      do3l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do3l3 = document.createElement("li");
      var do3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do3l3.appendChild(do3p3);
      do3.appendChild(do3l3);
      let btn = createDeleteButton();
      do3l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do3l4 = document.createElement("li"); // Listenelement anlegen
      var do3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do3l4.appendChild(do3p4); // dem Listenelement Text anhängen
      do3.appendChild(do3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do3l4.appendChild(btn);
    }

  }

}

// Donnerstag, 9 bis 10
for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "9:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do4l1 = document.createElement("li");
      var do4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do4l1.appendChild(do4p1);
      do4.appendChild(do4l1);
      let btn = createDeleteButton();
      do4l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do4l2 = document.createElement("li");
      var do4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do4l2.appendChild(do4p2);
      do4.appendChild(do4l2);
      let btn = createDeleteButton();
      do4l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do4l3 = document.createElement("li");
      var do4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do4l3.appendChild(do4p3);
      do4.appendChild(do4l3);
      let btn = createDeleteButton();
      do4l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do4l4 = document.createElement("li"); // Listenelement anlegen
      var do4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do4l4.appendChild(do4p4); // dem Listenelement Text anhängen
      do4.appendChild(do4l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do4l4.appendChild(btn);

    }

  }
}


// Donnerstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "10:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do5l1 = document.createElement("li");
      var do5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do5l1.appendChild(do5p1);
      do5.appendChild(do5l1);
      let btn = createDeleteButton();
      do5l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do5l2 = document.createElement("li");
      var do5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do5l2.appendChild(do5p2);
      do5.appendChild(do5l2);
      let btn = createDeleteButton();
      do5l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do5l3 = document.createElement("li");
      var do5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do5l3.appendChild(do5p3);
      do5.appendChild(do5l3);
      let btn = createDeleteButton();
      do5l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do5l4 = document.createElement("li"); // Listenelement anlegen
      var do5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do5l4.appendChild(do5p4); // dem Listenelement Text anhängen
      do5.appendChild(do5l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do5l4.appendChild(btn);
    }

  }
}

// Donnerstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do6l1 = document.createElement("li");
      var do6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do6l1.appendChild(do6p1);
      do6.appendChild(do6l1);
      let btn = createDeleteButton();
      do6l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do6l2 = document.createElement("li");
      var do6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do6l2.appendChild(do6p2);
      do6.appendChild(do6l2);
      let btn = createDeleteButton();
      do6l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do6l3 = document.createElement("li");
      var do6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do6l3.appendChild(do6p3);
      do6.appendChild(do6l3);
      let btn = createDeleteButton();
      do6l3.appendChild(btn);

    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do6l4 = document.createElement("li"); // Listenelement anlegen
      var do6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do6l4.appendChild(do6p4); // dem Listenelement Text anhängen
      do6.appendChild(do6l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do6l4.appendChild(btn);
    }

  }
}

// Donnerstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "12:00 Uhr" && webprog[i].zeitbis == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do7l1 = document.createElement("li");
      var do7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do7l1.appendChild(do7p1);
      do7.appendChild(do7l1);
      let btn = createDeleteButton();
      do7l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do7l2 = document.createElement("li");
      var do7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do7l2.appendChild(do7p2);
      do7.appendChild(m74l2);
      let btn = createDeleteButton();
      do7l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do7l3 = document.createElement("li");
      var do7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do7l3.appendChild(do7p3);
      do7.appendChild(do7l3);
      let btn = createDeleteButton();
      do7l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do7l4 = document.createElement("li"); // Listenelement anlegen
      var do7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do7l4.appendChild(do7p4); // dem Listenelement Text anhängen
      do7.appendChild(do7l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do7l4.appendChild(btn);
    }

  }
}

// Donnerstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do8l1 = document.createElement("li");
      var do8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do8l1.appendChild(do8p1);
      do8.appendChild(do8l1);
      let btn = createDeleteButton();
      do8l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do8l2 = document.createElement("li");
      var do8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do8l2.appendChild(do8p2);
      do8.appendChild(do8l2);
      let btn = createDeleteButton();
      do8l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do8l3 = document.createElement("li");
      var do8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do8l3.appendChild(do8p3);
      do8.appendChild(do8l3);
      let btn = createDeleteButton();
      do8l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do8l4 = document.createElement("li"); // Listenelement anlegen
      var do484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do8l4.appendChild(do8p4); // dem Listenelement Text anhängen
      do8.appendChild(do8l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do8l4.appendChild(btn);
    }

  }
}

// Donnerstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do9l1 = document.createElement("li");
      var do9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do9l1.appendChild(do9p1);
      do9.appendChild(do9l1);
      let btn = createDeleteButton();
      do9l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do9l2 = document.createElement("li");
      var do9p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do9l2.appendChild(do9p2);
      do9.appendChild(do9l2);
      let btn = createDeleteButton();
      do9l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do9l3 = document.createElement("li");
      var do9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do9l3.appendChild(do9p3);
      do9.appendChild(do9l3);
      let btn = createDeleteButton();
      do9l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do9l4 = document.createElement("li"); // Listenelement anlegen
      var do9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do9l4.appendChild(do9p4); // dem Listenelement Text anhängen
      do9.appendChild(do9l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do9l4.appendChild(btn);
    }

  }
}

// Donnerstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do10l1 = document.createElement("li");
      var do10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do10l1.appendChild(do10p1);
      do10.appendChild(do10l1);
      let btn = createDeleteButton();
      do10l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do10l2 = document.createElement("li");
      var do10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do10l2.appendChild(do10p2);
      do10.appendChild(do10l2);
      let btn = createDeleteButton();
      do10l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do10l3 = document.createElement("li");
      var do10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do10l3.appendChild(do10p3);
      do10.appendChild(do10l3);
      let btn = createDeleteButton();
      do10l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do10l4 = document.createElement("li"); // Listenelement anlegen
      var do10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do10l4.appendChild(do10p4); // dem Listenelement Text anhängen
      do10.appendChild(do10l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do10l4.appendChild(btn);
    }

  }
}


// Donnerstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do11l1 = document.createElement("li");
      var do11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do11l1.appendChild(do11p1);
      do11.appendChild(do11l1);
      let btn = createDeleteButton();
      do11l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do11l2 = document.createElement("li");
      var do11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do11l2.appendChild(do11p2);
      do11.appendChild(do11l2);
      let btn = createDeleteButton();
      do11l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do11l3 = document.createElement("li");
      var do11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do11l3.appendChild(do11p3);
      do4.appendChild(do11l3);
      let btn = createDeleteButton();
      do11l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do11l4 = document.createElement("li"); // Listenelement anlegen
      var do11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do11l4.appendChild(do11p4); // dem Listenelement Text anhängen
      do11.appendChild(do11l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do11l4.appendChild(btn);
    }

  }
}

// Donnerstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do12l1 = document.createElement("li");
      var do12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do12l1.appendChild(do12p1);
      do12.appendChild(do12l1);
      let btn = createDeleteButton();
      do12l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do12l2 = document.createElement("li");
      var do12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do12l2.appendChild(do12p2);
      do12.appendChild(do12l2);
      let btn = createDeleteButton();
      do12l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do12l3 = document.createElement("li");
      var do12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do12l3.appendChild(do12p3);
      do12.appendChild(do12l3);
      let btn = createDeleteButton();
      do12l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do12l4 = document.createElement("li"); // Listenelement anlegen
      var do12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do12l4.appendChild(do12p4); // dem Listenelement Text anhängen
      do12.appendChild(do12l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do12l4.appendChild(btn);
    }

  }
}

// Donnerstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do13l1 = document.createElement("li");
      var do13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do13l1.appendChild(do13p1);
      do13.appendChild(do13l1);
      let btn = createDeleteButton();
      do13l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do13l2 = document.createElement("li");
      var do13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do13l2.appendChild(do13p2);
      do13.appendChild(do13l2);
      let btn = createDeleteButton();
      do13l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do13l3 = document.createElement("li");
      var do13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do13l3.appendChild(do13p3);
      do13.appendChild(do13l3);
      let btn = createDeleteButton();
      do13l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do13l4 = document.createElement("li"); // Listenelement anlegen
      var do13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do13l4.appendChild(do13p4); // dem Listenelement Text anhängen
      do13.appendChild(do13l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do13l4.appendChild(btn);
    }

  }
}

// Donnerstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do14l1 = document.createElement("li");
      var do14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do14l1.appendChild(do14p1);
      do14.appendChild(do14l1);
      let btn = createDeleteButton();
      do14l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do14l2 = document.createElement("li");
      var do14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do14l2.appendChild(do14p2);
      do14.appendChild(do14l2);
      let btn = createDeleteButton();
      do14l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do14l3 = document.createElement("li");
      var do14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do14l3.appendChild(do14p3);
      do14.appendChild(do14l3);
      let btn = createDeleteButton();
      do14l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do14l4 = document.createElement("li"); // Listenelement anlegen
      var do14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do14l4.appendChild(do14p4); // dem Listenelement Text anhängen
      do14.appendChild(do14l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do14l4.appendChild(btn);
    }

  }
}

// Donnerstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do15l1 = document.createElement("li");
      var do15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do15l1.appendChild(do15p1);
      do15.appendChild(do15l1);
      let btn = createDeleteButton();
      do15l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do15l2 = document.createElement("li");
      var do15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do15l2.appendChild(do15p2);
      do15.appendChild(do15l2);
      let btn = createDeleteButton();
      do15l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do15l3 = document.createElement("li");
      var do15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do15l3.appendChild(do15p3);
      do15.appendChild(do15l3);
      let btn = createDeleteButton();
      do15l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do15l4 = document.createElement("li"); // Listenelement anlegen
      var do15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do15l4.appendChild(do15p4); // dem Listenelement Text anhängen
      do15.appendChild(do15l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do15l4.appendChild(btn);
    }

  }
}

// Donnerstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "21:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do16l1 = document.createElement("li");
      var do16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do16l1.appendChild(do16p1);
      do16.appendChild(do16l1);
      let btn = createDeleteButton();
      do16l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do16l2 = document.createElement("li");
      var do16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do16l2.appendChild(do16p2);
      do16.appendChild(do16l2);
      let btn = createDeleteButton();
      do16l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do16l3 = document.createElement("li");
      var do16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do16l3.appendChild(do16p3);
      do16.appendChild(do16l3);
      let btn = createDeleteButton();
      do16l3.appendChild(btn);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do16l4 = document.createElement("li"); // Listenelement anlegen
      var do16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do16l4.appendChild(do16p4); // dem Listenelement Text anhängen
      do16.appendChild(do16l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do16l4.appendChild(btn);
    }

  }
}

// Donnerstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "22:00 Uhr"){

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do17l1 = document.createElement("li");
      var do17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do17l1.appendChild(do17p1);
      do17.appendChild(do17l1);
      let btn = createDeleteButton();
      do17l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do17l2 = document.createElement("li");
      var do17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do17l2.appendChild(do17p2);
      do17.appendChild(do17l2);
      let btn = createDeleteButton();
      do17l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do17l3 = document.createElement("li");
      var do17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do17l3.appendChild(do17p3);
      do17.appendChild(do17l3);
      let btn = createDeleteButton();
      do17l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do17l4 = document.createElement("li"); // Listenelement anlegen
      var do17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do17l4.appendChild(do17p4); // dem Listenelement Text anhängen
      do17.appendChild(do17l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do17l4.appendChild(btn);
    }

  }
}

// Donnerstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Donnerstag" && webprog[i].zeitvon == "23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var do18l1 = document.createElement("li");
      var do18p1 = document.createTextNode(webprog[i].name);
      do18l1.appendChild(do18p1);
      do18.appendChild(do18l1);
      let btn = createDeleteButton();
      do18l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var do18l2 = document.createElement("li");
      var do18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do18l2.appendChild(do18p2);
      do18.appendChild(do18l2);
      let btn = createDeleteButton();
      do18l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var do18l3 = document.createElement("li");
      var do18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do18l3.appendChild(do18p3);
      do18.appendChild(do18l3);
      let btn = createDeleteButton();
      do18l3.appendChild(btn);



    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var do18l4 = document.createElement("li"); // Listenelement anlegen
      var do18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      do18l4.appendChild(do18p4); // dem Listenelement Text anhängen
      do18.appendChild(do18l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      do18l4.appendChild(btn);
    }


  }
}


//Freitag
for (i in webprog) {

  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "6:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr1l1 = document.createElement("li");
      var fr1p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr1l1.appendChild(fr1p1);
      fr1.appendChild(fr1l1);
      let btn = createDeleteButton();
      fr1l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr1l2 = document.createElement("li");
      var fr1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr1l2.appendChild(fr1p2);
      fr1.appendChild(fr1l2);
      let btn = createDeleteButton();
      fr1l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr1l3 = document.createElement("li");
      var fr1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr1l3.appendChild(fr1p3);
      fr1.appendChild(fr1l3);
      let btn = createDeleteButton();
      fr1l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr1l4 = document.createElement("li"); // Listenelement anlegen
      var fr1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr1l4.appendChild(fr1p4); // dem Listenelement Text anhängen
      fr1.appendChild(fr1l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr1l4.appendChild(btn);
    }

  }

}


// Freitag, 7 bis 8

for (i in webprog) {

  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr2l1 = document.createElement("li");
      var fr2p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr2l1.appendChild(fr2p1);
      fr2.appendChild(fr2l1);
      let btn = createDeleteButton();
      fr2l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr2l2 = document.createElement("li");
      var fr2p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr2l2.appendChild(fr2p2);
      fr2.appendChild(fr2l2);
      let btn = createDeleteButton();
      fr2l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr2l3 = document.createElement("li");
      var fr2p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr2l3.appendChild(fr2p3);
      fr2.appendChild(fr2l3);
      let btn = createDeleteButton();
      fr2l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr2l4 = document.createElement("li"); // Listenelement anlegen
      var fr2p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr2l4.appendChild(fr2p4); // dem Listenelement Text anhängen
      fr2.appendChild(fr2l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr2l4.appendChild(btn);
    }

  }

}

// Freitag, 8 bis 9

for (i in webprog) {

  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr3l1 = document.createElement("li");
      var fr3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr3l1.appendChild(fr3p1);
      fr3.appendChild(fr3l1);
      let btn = createDeleteButton();
      fr3l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr3l2 = document.createElement("li");
      var fr3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr3l2.appendChild(fr3p2);
      fr3.appendChild(fr3l2);
      let btn = createDeleteButton();
      fr3l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr3l3 = document.createElement("li");
      var fr3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr3l3.appendChild(fr3p3);
      fr3.appendChild(fr3l3);
      let btn = createDeleteButton();
      fr3l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr3l4 = document.createElement("li"); // Listenelement anlegen
      var fr3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr3l4.appendChild(fr3p4); // dem Listenelement Text anhängen
      fr3.appendChild(fr3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr3l4.appendChild(btn);
    }

  }

}

// Freitag, 9 bis 10
for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "9:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr4l1 = document.createElement("li");
      var fr4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr4l1.appendChild(fr4p1);
      fr4.appendChild(fr4l1);
      let btn = createDeleteButton();
      fr4l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr4l2 = document.createElement("li");
      var fr4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr4l2.appendChild(fr4p2);
      fr4.appendChild(fr4l2);
      let btn = createDeleteButton();
      fr4l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr4l3 = document.createElement("li");
      var fr4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr4l3.appendChild(fr4p3);
      fr4.appendChild(fr4l3);
      let btn = createDeleteButton();
      fr4l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr4l4 = document.createElement("li"); // Listenelement anlegen
      var fr4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr4l4.appendChild(fr4p4); // dem Listenelement Text anhängen
      fr4.appendChild(fr4l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr4l4.appendChild(btn);
    }

  }
}


// Freitag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "10:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr5l1 = document.createElement("li");
      var fr5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr5l1.appendChild(fr5p1);
      fr5.appendChild(fr5l1);
      let btn = createDeleteButton();
      fr5l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr5l2 = document.createElement("li");
      var fr5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr5l2.appendChild(fr5p2);
      fr5.appendChild(fr5l2);
      let btn = createDeleteButton();
      fr5l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr5l3 = document.createElement("li");
      var fr5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr5l3.appendChild(fr5p3);
      fr5.appendChild(fr5l3);
      let btn = createDeleteButton();
      fr5l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr5l4 = document.createElement("li"); // Listenelement anlegen
      var fr5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr5l4.appendChild(fr5p4); // dem Listenelement Text anhängen
      fr5.appendChild(fr5l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr5l4.appendChild(btn);
    }

  }
}

// Freitag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr6l1 = document.createElement("li");
      var fr6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr6l1.appendChild(fr6p1);
      fr6.appendChild(fr6l1);
      let btn = createDeleteButton();
      fr6l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr6l2 = document.createElement("li");
      var fr6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr6l2.appendChild(fr6p2);
      fr6.appendChild(fr6l2);
      let btn = createDeleteButton();
      fr6l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr6l3 = document.createElement("li");
      var fr6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr6l3.appendChild(fr6p3);
      fr6.appendChild(fr6l3);
      let btn = createDeleteButton();
      fr6l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr6l4 = document.createElement("li"); // Listenelement anlegen
      var fr6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr6l4.appendChild(fr6p4); // dem Listenelement Text anhängen
      fr6.appendChild(fr6l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr6l4.appendChild(btn);
    }

  }
}

// Freitag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr7l1 = document.createElement("li");
      var fr7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr7l1.appendChild(fr7p1);
      fr7.appendChild(fr7l1);
      let btn = createDeleteButton();
      fr7l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr7l2 = document.createElement("li");
      var fr7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr7l2.appendChild(fr7p2);
      fr7.appendChild(m7l2);
      let btn = createDeleteButton();
      fr7l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr7l3 = document.createElement("li");
      var fr7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr7l3.appendChild(fr7p3);
      fr7.appendChild(fr7l3);
      let btn = createDeleteButton();
      fr7l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr7l4 = document.createElement("li"); // Listenelement anlegen
      var fr7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr7l4.appendChild(fr7p4); // dem Listenelement Text anhängen
      fr7.appendChild(fr7l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr7l4.appendChild(btn);
    }

  }
}

// Freitag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr8l1 = document.createElement("li");
      var fr8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr8l1.appendChild(fr8p1);
      fr8.appendChild(fr8l1);
      let btn = createDeleteButton();
      fr8l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr8l2 = document.createElement("li");
      var fr8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr8l2.appendChild(fr8p2);
      fr8.appendChild(fr8l2);
      let btn = createDeleteButton();
      fr8l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr8l3 = document.createElement("li");
      var fr8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr8l3.appendChild(fr8p3);
      fr8.appendChild(fr8l3);
      let btn = createDeleteButton();
      fr8l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr8l4 = document.createElement("li"); // Listenelement anlegen
      var fr484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr8l4.appendChild(fr8p4); // dem Listenelement Text anhängen
      fr8.appendChild(fr8l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr8l4.appendChild(btn);
    }

  }
}

// Freitag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr9l1 = document.createElement("li");
      var fr9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr9l1.appendChild(fr9p1);
      fr9.appendChild(fr9l1);
      let btn = createDeleteButton();
      fr9l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr9l2 = document.createElement("li");
      var fr9p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr9l2.appendChild(fr9p2);
      fr9.appendChild(fr9l2);
      let btn = createDeleteButton();
      fr9l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr9l3 = document.createElement("li");
      var fr9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr9l3.appendChild(fr9p3);
      fr9.appendChild(fr9l3);
      let btn = createDeleteButton();
      fr9l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr9l4 = document.createElement("li"); // Listenelement anlegen
      var fr9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr9l4.appendChild(fr9p4); // dem Listenelement Text anhängen
      fr9.appendChild(fr9l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr9l4.appendChild(btn);
    }

  }
}

// Freitag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr10l1 = document.createElement("li");
      var fr10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr10l1.appendChild(fr10p1);
      fr10.appendChild(fr10l1);
      let btn = createDeleteButton();
      fr10l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr10l2 = document.createElement("li");
      var fr10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr10l2.appendChild(fr10p2);
      fr10.appendChild(fr10l2);
      let btn = createDeleteButton();
      fr10l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr10l3 = document.createElement("li");
      var fr10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr10l3.appendChild(fr10p3);
      fr10.appendChild(fr10l3);
      let btn = createDeleteButton();
      fr10l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr10l4 = document.createElement("li"); // Listenelement anlegen
      var fr10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr10l4.appendChild(fr10p4); // dem Listenelement Text anhängen
      fr10.appendChild(fr10l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr10l4.appendChild(btn);
    }

  }
}


// Freitag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr11l1 = document.createElement("li");
      var fr11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr11l1.appendChild(fr11p1);
      fr11.appendChild(fr11l1);
      let btn = createDeleteButton();
      fr11l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr11l2 = document.createElement("li");
      var fr11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr11l2.appendChild(fr11p2);
      fr11.appendChild(fr11l2);
      let btn = createDeleteButton();
      fr11l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr11l3 = document.createElement("li");
      var fr11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr11l3.appendChild(fr11p3);
      fr11.appendChild(fr11l3);
      let btn = createDeleteButton();
      fr11l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr11l4 = document.createElement("li"); // Listenelement anlegen
      var fr11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr11l4.appendChild(fr11p4); // dem Listenelement Text anhängen
      fr11.appendChild(fr11l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr11l4.appendChild(btn);
    }

  }
}

// Freitag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr12l1 = document.createElement("li");
      var fr12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr12l1.appendChild(fr12p1);
      fr12.appendChild(fr12l1);
      let btn = createDeleteButton();
      fr12l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr12l2 = document.createElement("li");
      var fr12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr12l2.appendChild(fr12p2);
      fr12.appendChild(fr12l2);
      let btn = createDeleteButton();
      fr12l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr12l3 = document.createElement("li");
      var fr12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr12l3.appendChild(fr12p3);
      fr12.appendChild(fr12l3);
      let btn = createDeleteButton();
      fr12l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr12l4 = document.createElement("li"); // Listenelement anlegen
      var fr12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr12l4.appendChild(fr12p4); // dem Listenelement Text anhängen
      fr12.appendChild(fr12l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr12l4.appendChild(btn);
    }

  }
}

// Freitag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr13l1 = document.createElement("li");
      var fr13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr13l1.appendChild(fr13p1);
      fr13.appendChild(fr13l1);
      let btn = createDeleteButton();
      fr13l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr13l2 = document.createElement("li");
      var fr13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr13l2.appendChild(fr13p2);
      fr13.appendChild(fr13l2);
      let btn = createDeleteButton();
      fr13l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr13l3 = document.createElement("li");
      var fr13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr13l3.appendChild(fr13p3);
      fr13.appendChild(fr13l3);
      let btn = createDeleteButton();
      fr13l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr13l4 = document.createElement("li"); // Listenelement anlegen
      var fr13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr13l4.appendChild(fr13p4); // dem Listenelement Text anhängen
      fr13.appendChild(fr13l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr13l4.appendChild(btn);
    }

  }
}

// Freitag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr14l1 = document.createElement("li");
      var fr14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr14l1.appendChild(fr14p1);
      fr14.appendChild(fr14l1);
      let btn = createDeleteButton();
      fr14l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr14l2 = document.createElement("li");
      var fr14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr14l2.appendChild(fr14p2);
      fr14.appendChild(fr14l2);
      let btn = createDeleteButton();
      fr14l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr14l3 = document.createElement("li");
      var fr14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr14l3.appendChild(fr14p3);
      fr14.appendChild(fr14l3);
      let btn = createDeleteButton();
      fr14l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr14l4 = document.createElement("li"); // Listenelement anlegen
      var fr14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr14l4.appendChild(fr14p4); // dem Listenelement Text anhängen
      fr14.appendChild(fr14l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr14l4.appendChild(btn);
    }

  }
}

// Freitag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr15l1 = document.createElement("li");
      var fr15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr15l1.appendChild(fr15p1);
      fr15.appendChild(fr15l1);
      let btn = createDeleteButton();
      fr15l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr15l2 = document.createElement("li");
      var fr15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr15l2.appendChild(fr15p2);
      fr15.appendChild(fr15l2);
      let btn = createDeleteButton();
      fr15l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr15l3 = document.createElement("li");
      var fr15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr15l3.appendChild(fr15p3);
      fr15.appendChild(fr15l3);
      let btn = createDeleteButton();
      fr15l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr15l4 = document.createElement("li"); // Listenelement anlegen
      var fr15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr15l4.appendChild(fr15p4); // dem Listenelement Text anhängen
      fr15.appendChild(fr15l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr15l4.appendChild(btn);
    }

  }
}

// Freitag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "21:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr16l1 = document.createElement("li");
      var fr16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr16l1.appendChild(fr16p1);
      fr16.appendChild(fr16l1);
      let btn = createDeleteButton();
      fr16l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr16l2 = document.createElement("li");
      var fr16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr16l2.appendChild(fr16p2);
      fr16.appendChild(fr16l2);
      let btn = createDeleteButton();
      fr16l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr16l3 = document.createElement("li");
      var fr16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr16l3.appendChild(fr16p3);
      fr16.appendChild(fr16l3);
      let btn = createDeleteButton();
      fr16l3.appendChild(btn);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr16l4 = document.createElement("li"); // Listenelement anlegen
      var fr16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr16l4.appendChild(fr16p4); // dem Listenelement Text anhängen
      fr16.appendChild(fr16l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr16l4.appendChild(btn);
    }

  }
}

// Freitag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr17l1 = document.createElement("li");
      var fr17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr17l1.appendChild(fr17p1);
      fr17.appendChild(fr17l1);
      let btn = createDeleteButton();
      fr17l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr17l2 = document.createElement("li");
      var fr17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr17l2.appendChild(fr17p2);
      fr17.appendChild(fr17l2);
      let btn = createDeleteButton();
      fr17l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr17l3 = document.createElement("li");
      var fr17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr17l3.appendChild(fr17p3);
      fr17.appendChild(fr17l3);
      let btn = createDeleteButton();
      fr17l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr17l4 = document.createElement("li"); // Listenelement anlegen
      var fr17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr17l4.appendChild(fr17p4); // dem Listenelement Text anhängen
      fr17.appendChild(fr17l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr17l4.appendChild(btn);
    }

  }
}

// Freitag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Freitag" && webprog[i].zeitvon == "23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var fr18l1 = document.createElement("li");
      var fr18p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr18l1.appendChild(fr18p1);
      fr18.appendChild(fr18l1);
      let btn = createDeleteButton();
      fr18l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var fr18l2 = document.createElement("li");
      var fr18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr18l2.appendChild(fr18p2);
      fr18.appendChild(fr18l2);
      let btn = createDeleteButton();
      fr18l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var fr18l3 = document.createElement("li");
      var fr18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr18l3.appendChild(fr18p3);
      fr18.appendChild(fr18l3);
      let btn = createDeleteButton();
      fr18l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var fr18l4 = document.createElement("li"); // Listenelement anlegen
      var fr18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      fr18l4.appendChild(fr18p4); // dem Listenelement Text anhängen
      fr18.appendChild(fr18l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      fr18l4.appendChild(btn);
    }


  }
}

//Samstag
for (i in webprog) {

  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "6:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa1l1 = document.createElement("li");
      var sa1p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa1l1.appendChild(sa1p1);
      sa1.appendChild(sa1l1);
      let btn = createDeleteButton();
      sa1l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa1l2 = document.createElement("li");
      var sa1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa1l2.appendChild(sa1p2);
      sa1.appendChild(sa1l2);
      let btn = createDeleteButton();
      sa1l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa1l3 = document.createElement("li");
      var sa1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa1l3.appendChild(sa1p3);
      sa1.appendChild(sa1l3);
      let btn = createDeleteButton();
      sa1l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa1l4 = document.createElement("li"); // Listenelement anlegen
      var sa1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa1l4.appendChild(sa1p4); // dem Listenelement Text anhängen
      sa1.appendChild(sa1l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa1l4.appendChild(btn);
    }

  }

}


// Samstag, 7 bis 8

for (i in webprog) {

  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa2l1 = document.createElement("li");
      var sa2p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa2l1.appendChild(sa2p1);
      sa2.appendChild(sa2l1);
      let btn = createDeleteButton();
      sa2l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa2l2 = document.createElement("li");
      var sa2p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa2l2.appendChild(sa2p2);
      sa2.appendChild(sa2l2);
      let btn = createDeleteButton();
      sa2l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa2l3 = document.createElement("li");
      var sa2p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa2l3.appendChild(sa2p3);
      sa2.appendChild(sa2l3);
      let btn = createDeleteButton();
      sa2l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa2l4 = document.createElement("li"); // Listenelement anlegen
      var sa2p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa2l4.appendChild(sa2p4); // dem Listenelement Text anhängen
      sa2.appendChild(sa2l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa2l4.appendChild(btn);
    }

  }

}

// Samstag, 8 bis 9

for (i in webprog) {

  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa3l1 = document.createElement("li");
      var sa3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa3l1.appendChild(sa3p1);
      sa3.appendChild(sa3l1);
      let btn = createDeleteButton();
      sa3l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa3l2 = document.createElement("li");
      var sa3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa3l2.appendChild(sa3p2);
      sa3.appendChild(sa3l2);
      let btn = createDeleteButton();
      sa3l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa3l3 = document.createElement("li");
      var sa3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa3l3.appendChild(sa3p3);
      sa3.appendChild(sa3l3);
      let btn = createDeleteButton();
      sa3l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa3l4 = document.createElement("li"); // Listenelement anlegen
      var sa3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa3l4.appendChild(sa3p4); // dem Listenelement Text anhängen
      sa3.appendChild(sa3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa3l4.appendChild(btn);
    }

  }

}

// Samstag, 9 bis 10
for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "9:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa4l1 = document.createElement("li");
      var sa4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa4l1.appendChild(sa4p1);
      sa4.appendChild(sa4l1);
      let btn = createDeleteButton();
      sa4l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa4l2 = document.createElement("li");
      var sa4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa4l2.appendChild(sa4p2);
      sa4.appendChild(sa4l2);
      let btn = createDeleteButton();
      sa4l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa4l3 = document.createElement("li");
      var sa4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa4l3.appendChild(sa4p3);
      sa4.appendChild(sa4l3);
      let btn = createDeleteButton();
      sa4l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa4l4 = document.createElement("li"); // Listenelement anlegen
      var sa4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa4l4.appendChild(sa3p4); // dem Listenelement Text anhängen
      sa4.appendChild(sa3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa4l4.appendChild(btn);
    }

  }
}


// Samstag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "10:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa5l1 = document.createElement("li");
      var sa5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa5l1.appendChild(sa5p1);
      sa5.appendChild(sa5l1);
      let btn = createDeleteButton();
      sa5l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa5l2 = document.createElement("li");
      var sa5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa5l2.appendChild(sa5p2);
      sa5.appendChild(sa5l2);
      let btn = createDeleteButton();
      sa5l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa5l3 = document.createElement("li");
      var sa5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa5l3.appendChild(sa5p3);
      sa5.appendChild(sa5l3);
      let btn = createDeleteButton();
      sa5l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa5l4 = document.createElement("li"); // Listenelement anlegen
      var sa5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa5l4.appendChild(sa5p4); // dem Listenelement Text anhängen
      sa5.appendChild(sa5l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa5l4.appendChild(btn);
    }

  }
}

// Samstag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa6l1 = document.createElement("li");
      var sa6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa6l1.appendChild(sa6p1);
      sa6.appendChild(sa6l1);
      let btn = createDeleteButton();
      sa6l1.appendChild(btn);

    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa6l2 = document.createElement("li");
      var sa6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa6l2.appendChild(sa6p2);
      sa6.appendChild(sa6l2);
      let btn = createDeleteButton();
      sa6l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa6l3 = document.createElement("li");
      var sa6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa6l3.appendChild(sa6p3);
      sa6.appendChild(sa6l3);
      let btn = createDeleteButton();
      sa6l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa6l4 = document.createElement("li"); // Listenelement anlegen
      var sa6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa6l4.appendChild(sa6p4); // dem Listenelement Text anhängen
      sa6.appendChild(sa6l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa6l4.appendChild(btn);
    }

  }
}

// Samstag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa7l1 = document.createElement("li");
      var sa7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa7l1.appendChild(sa7p1);
      sa7.appendChild(sa7l1);
      let btn = createDeleteButton();
      sa7l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa7l2 = document.createElement("li");
      var sa7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa7l2.appendChild(sa7p2);
      sa7.appendChild(m74l2);
      let btn = createDeleteButton();
      sa7l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa7l3 = document.createElement("li");
      var sa7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa7l3.appendChild(sa7p3);
      sa7.appendChild(sa7l3);
      let btn = createDeleteButton();
      sa7l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa7l4 = document.createElement("li"); // Listenelement anlegen
      var sa7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa7l4.appendChild(sa7p4); // dem Listenelement Text anhängen
      sa7.appendChild(sa7l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa7l4.appendChild(btn);
    }

  }
}

// Samstag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa8l1 = document.createElement("li");
      var sa8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa8l1.appendChild(sa8p1);
      sa8.appendChild(sa8l1);
      let btn = createDeleteButton();
      sa8l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa8l2 = document.createElement("li");
      var sa8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa8l2.appendChild(sa8p2);
      sa8.appendChild(sa8l2);
      let btn = createDeleteButton();
      sa8l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa8l3 = document.createElement("li");
      var sa8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa8l3.appendChild(sa8p3);
      sa8.appendChild(sa8l3);
      let btn = createDeleteButton();
      sa8l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa8l4 = document.createElement("li"); // Listenelement anlegen
      var sa484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa8l4.appendChild(sa8p4); // dem Listenelement Text anhängen
      sa8.appendChild(sa8l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa8l4.appendChild(btn);
    }

  }
}

// Samstag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa9l1 = document.createElement("li");
      var sa9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa9l1.appendChild(sa9p1);
      sa9.appendChild(sa9l1);
      let btn = createDeleteButton();
      sa9l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa4l2 = document.createElement("li");
      var sa4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa9l2.appendChild(sa9p2);
      sa9.appendChild(sa9l2);
      let btn = createDeleteButton();
      sa9l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa9l3 = document.createElement("li");
      var sa9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa9l3.appendChild(sa9p3);
      sa9.appendChild(sa9l3);
      let btn = createDeleteButton();
      sa9l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa9l4 = document.createElement("li"); // Listenelement anlegen
      var sa9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa9l4.appendChild(sa9p4); // dem Listenelement Text anhängen
      sa9.appendChild(sa9l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa9l4.appendChild(btn);
    }

  }
}

// Samstag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "15:00 Uhr") {
    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa10l1 = document.createElement("li");
      var sa10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa10l1.appendChild(sa10p1);
      sa10.appendChild(sa10l1);
      let btn = createDeleteButton();
      sa10l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa10l2 = document.createElement("li");
      var sa10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa10l2.appendChild(sa10p2);
      sa10.appendChild(sa10l2);
      let btn = createDeleteButton();
      sa10l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa10l3 = document.createElement("li");
      var sa10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa10l3.appendChild(sa10p3);
      sa10.appendChild(sa10l3);
      let btn = createDeleteButton();
      sa10l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa10l4 = document.createElement("li"); // Listenelement anlegen
      var sa10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa10l4.appendChild(sa10p4); // dem Listenelement Text anhängen
      sa10.appendChild(sa10l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa10l4.appendChild(btn);
    }

  }
}


// Samstag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa11l1 = document.createElement("li");
      var sa11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa11l1.appendChild(sa11p1);
      sa11.appendChild(sa11l1);
      let btn = createDeleteButton();
      sa11l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa11l2 = document.createElement("li");
      var sa11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa11l2.appendChild(sa11p2);
      sa11.appendChild(sa11l2);
      let btn = createDeleteButton();
      sa11l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa11l3 = document.createElement("li");
      var sa11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa11l3.appendChild(sa11p3);
      sa4.appendChild(sa11l3);
      let btn = createDeleteButton();
      sa11l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa11l4 = document.createElement("li"); // Listenelement anlegen
      var sa11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa11l4.appendChild(sa11p4); // dem Listenelement Text anhängen
      sa11.appendChild(sa11l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa11l4.appendChild(btn);
    }

  }
}

// Samstag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa12l1 = document.createElement("li");
      var sa12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa12l1.appendChild(sa12p1);
      sa12.appendChild(sa12l1);
      let btn = createDeleteButton();
      sa12l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa12l2 = document.createElement("li");
      var sa12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa12l2.appendChild(sa12p2);
      sa12.appendChild(sa12l2);
      let btn = createDeleteButton();
      sa12l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa12l3 = document.createElement("li");
      var sa12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa12l3.appendChild(sa12p3);
      sa12.appendChild(sa12l3);
      let btn = createDeleteButton();
      sa12l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa12l4 = document.createElement("li"); // Listenelement anlegen
      var sa12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa12l4.appendChild(sa12p4); // dem Listenelement Text anhängen
      sa12.appendChild(sa12l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa12l4.appendChild(btn);
    }

  }
}

// Samstag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa13l1 = document.createElement("li");
      var sa13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa13l1.appendChild(sa13p1);
      sa13.appendChild(sa13l1);
      let btn = createDeleteButton();
      sa13l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa13l2 = document.createElement("li");
      var sa13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa13l2.appendChild(sa13p2);
      sa13.appendChild(sa13l2);
      let btn = createDeleteButton();
      sa13l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa13l3 = document.createElement("li");
      var sa13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa13l3.appendChild(sa13p3);
      sa13.appendChild(sa13l3);
      let btn = createDeleteButton();
      sa13l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa13l4 = document.createElement("li"); // Listenelement anlegen
      var sa13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa13l4.appendChild(sa13p4); // dem Listenelement Text anhängen
      sa13.appendChild(sa13l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa13l4.appendChild(btn);
    }

  }
}

// Samstag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa14l1 = document.createElement("li");
      var sa14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa14l1.appendChild(sa14p1);
      sa14.appendChild(sa14l1);
      let btn = createDeleteButton();
      sa14l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa14l2 = document.createElement("li");
      var sa14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa14l2.appendChild(sa14p2);
      sa14.appendChild(sa14l2);
      let btn = createDeleteButton();
      sa14l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa14l3 = document.createElement("li");
      var sa14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa14l3.appendChild(sa14p3);
      sa14.appendChild(sa14l3);
      let btn = createDeleteButton();
      sa14l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa14l4 = document.createElement("li"); // Listenelement anlegen
      var sa14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa14l4.appendChild(sa14p4); // dem Listenelement Text anhängen
      sa14.appendChild(sa14l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa14l4.appendChild(btn);
    }

  }
}

// Samstag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa15l1 = document.createElement("li");
      var sa15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa15l1.appendChild(sa15p1);
      sa15.appendChild(sa15l1);
      let btn = createDeleteButton();
      sa15l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa15l2 = document.createElement("li");
      var sa15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa15l2.appendChild(sa15p2);
      sa15.appendChild(sa15l2);
      let btn = createDeleteButton();
      sa15l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa15l3 = document.createElement("li");
      var sa15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa15l3.appendChild(sa15p3);
      sa15.appendChild(sa15l3);
      let btn = createDeleteButton();
      sa15l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa15l4 = document.createElement("li"); // Listenelement anlegen
      var sa15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa15l4.appendChild(sa15p4); // dem Listenelement Text anhängen
      sa15.appendChild(sa15l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa15l4.appendChild(btn);
    }

  }
}

// Samstag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "21:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa16l1 = document.createElement("li");
      var sa16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa16l1.appendChild(sa16p1);
      sa16.appendChild(sa16l1);
      let btn = createDeleteButton();
      sa16l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa16l2 = document.createElement("li");
      var sa16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa16l2.appendChild(sa16p2);
      sa16.appendChild(sa16l2);
      let btn = createDeleteButton();
      sa16l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa16l3 = document.createElement("li");
      var sa16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa16l3.appendChild(sa16p3);
      sa16.appendChild(sa16l3);
      let btn = createDeleteButton();
      sa16l3.appendChild(btn);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa16l4 = document.createElement("li"); // Listenelement anlegen
      var sa16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa16l4.appendChild(sa16p4); // dem Listenelement Text anhängen
      sa16.appendChild(sa16l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa16l4.appendChild(btn);
    }

  }
}

// Samstag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa17l1 = document.createElement("li");
      var sa17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa17l1.appendChild(sa17p1);
      sa17.appendChild(sa17l1);
      let btn = createDeleteButton();
      sa17l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa17l2 = document.createElement("li");
      var sa17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa17l2.appendChild(sa17p2);
      sa17.appendChild(sa17l2);
      let btn = createDeleteButton();
      sa17l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa17l3 = document.createElement("li");
      var sa17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa17l3.appendChild(sa17p3);
      sa17.appendChild(sa17l3);
      let btn = createDeleteButton();
      sa17l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa17l4 = document.createElement("li"); // Listenelement anlegen
      var sa17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa17l4.appendChild(sa17p4); // dem Listenelement Text anhängen
      sa17.appendChild(sa17l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa17l4.appendChild(btn);
    }

  }
}

// Samstag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Samstag" && webprog[i].zeitvon == "23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var sa18l1 = document.createElement("li");
      var sa18p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa18l1.appendChild(sa18p1);
      sa18.appendChild(sa18l1);
      let btn = createDeleteButton();
      sa18l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var sa18l2 = document.createElement("li");
      var sa18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa18l2.appendChild(sa18p2);
      sa18.appendChild(sa18l2);
      let btn = createDeleteButton();
      sa18l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var sa18l3 = document.createElement("li");
      var sa18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa18l3.appendChild(sa18p3);
      sa18.appendChild(sa18l3);
      let btn = createDeleteButton();
      sa18l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var sa18l4 = document.createElement("li"); // Listenelement anlegen
      var sa18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      sa18l4.appendChild(sa18p4); // dem Listenelement Text anhängen
      sa18.appendChild(sa18l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      sa18l4.appendChild(btn);
    }


  }
}

//Sonntag


for (i in webprog) {

  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "6:00 Uhr" && webprog[i].zeitbis == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so1l1 = document.createElement("li");
      var so1p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so1l1.appendChild(so1p1);
      so1.appendChild(so1l1);
      let btn = createDeleteButton();
      so1l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so1l2 = document.createElement("li");
      var so1p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so1l2.appendChild(so1p2);
      so1.appendChild(so1l2);
      let btn = createDeleteButton();
      so1l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so1l3 = document.createElement("li");
      var so1p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so1l3.appendChild(so1p3);
      so1.appendChild(so1l3);
      let btn = createDeleteButton();
      so1l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so1l4 = document.createElement("li"); // Listenelement anlegen
      var so1p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so1l4.appendChild(so1p4); // dem Listenelement Text anhängen
      so1.appendChild(so1l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so1l4.appendChild(btn);
    }

  }

}


// Sonntag, 7 bis 8

for (i in webprog) {

  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "7:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so2l1 = document.createElement("li");
      var so2p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so2l1.appendChild(so2p1);
      so2.appendChild(so2l1);
      let btn = createDeleteButton();
      so2l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so2l2 = document.createElement("li");
      var so2p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so2l2.appendChild(so2p2);
      so2.appendChild(so2l2);
      let btn = createDeleteButton();
      so2l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so2l3 = document.createElement("li");
      var so2p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so2l3.appendChild(so2p3);
      so2.appendChild(so2l3);
      let btn = createDeleteButton();
      so2l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so2l4 = document.createElement("li"); // Listenelement anlegen
      var so2p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so2l4.appendChild(so2p4); // dem Listenelement Text anhängen
      so2.appendChild(so2l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so2l4.appendChild(btn);
    }

  }

}

// Sonntag, 8 bis 9

for (i in webprog) {

  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "8:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so3l1 = document.createElement("li");
      var so3p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so3l1.appendChild(so3p1);
      so3.appendChild(so3l1);
      let btn = createDeleteButton();
      so3l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so3l2 = document.createElement("li");
      var so3p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so3l2.appendChild(so3p2);
      so3.appendChild(so3l2);
      let btn = createDeleteButton();
      so3l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so3l3 = document.createElement("li");
      var so3p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so3l3.appendChild(so3p3);
      so3.appendChild(so3l3);
      let btn = createDeleteButton();
      so3l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so3l4 = document.createElement("li"); // Listenelement anlegen
      var so3p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so3l4.appendChild(so3p4); // dem Listenelement Text anhängen
      so3.appendChild(so3l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so3l4.appendChild(btn);
    }

  }

}

// Sonntag, 9 bis 10
for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "9:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so4l1 = document.createElement("li");
      var so4p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so4l1.appendChild(so4p1);
      so4.appendChild(so4l1);
      let btn = createDeleteButton();
      so4l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so4l2 = document.createElement("li");
      var so4p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so4l2.appendChild(so4p2);
      so4.appendChild(so4l2);
      let btn = createDeleteButton();
      so4l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so4l3 = document.createElement("li");
      var so4p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so4l3.appendChild(so4p3);
      so4.appendChild(so4l3);
      let btn = createDeleteButton();
      so4l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so4l4 = document.createElement("li"); // Listenelement anlegen
      var so4p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so4l4.appendChild(so4p4); // dem Listenelement Text anhängen
      so4.appendChild(so4l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so4l4.appendChild(btn);
    }

  }
}


// Sonntag, 10 bis 11

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "10:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so5l1 = document.createElement("li");
      var so5p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so5l1.appendChild(so5p1);
      so5.appendChild(so5l1);
      let btn = createDeleteButton();
      so5l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so5l2 = document.createElement("li");
      var so5p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so5l2.appendChild(so5p2);
      so5.appendChild(so5l2);
      let btn = createDeleteButton();
      so5l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so5l3 = document.createElement("li");
      var so5p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so5l3.appendChild(so5p3);
      so5.appendChild(so5l3);
      let btn = createDeleteButton();
      so5l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so5l4 = document.createElement("li"); // Listenelement anlegen
      var so5p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so5l4.appendChild(so5p4); // dem Listenelement Text anhängen
      so5.appendChild(so5l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so5l4.appendChild(btn);
    }

  }
}

// Sonntag, 11 bis 12

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "11:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so6l1 = document.createElement("li");
      var so6p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so6l1.appendChild(so6p1);
      so6.appendChild(so6l1);
      let btn = createDeleteButton();
      so6l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so6l2 = document.createElement("li");
      var so6p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so6l2.appendChild(so6p2);
      so6.appendChild(so6l2);
      let btn = createDeleteButton();
      so6l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so6l3 = document.createElement("li");
      var so6p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so6l3.appendChild(so6p3);
      so6.appendChild(so6l3);
      let btn = createDeleteButton();
      so6l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so6l4 = document.createElement("li"); // Listenelement anlegen
      var so6p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so6l4.appendChild(so6p4); // dem Listenelement Text anhängen
      so6.appendChild(so6l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so6l4.appendChild(btn);
    }

  }
}

// Sonntag, 12 bis 13

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "12:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so7l1 = document.createElement("li");
      var so7p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so7l1.appendChild(so7p1);
      so7.appendChild(so7l1);
      let btn = createDeleteButton();
      so7l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so7l2 = document.createElement("li");
      var so7p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so7l2.appendChild(so7p2);
      so7.appendChild(so7l2);
      let btn = createDeleteButton();
      so7l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so7l3 = document.createElement("li");
      var so7p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so7l3.appendChild(so7p3);
      so7.appendChild(so7l3);
      let btn = createDeleteButton();
      so7l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so7l4 = document.createElement("li"); // Listenelement anlegen
      var so7p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so7l4.appendChild(so7p4); // dem Listenelement Text anhängen
      so7.appendChild(so7l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so7l4.appendChild(btn);
    }

  }
}

// Sonntag, 13 bis 14

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "13:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so8l1 = document.createElement("li");
      var so8p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so8l1.appendChild(so8p1);
      so8.appendChild(so8l1);
      let btn = createDeleteButton();
      so8l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so8l2 = document.createElement("li");
      var so8p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so8l2.appendChild(so8p2);
      so8.appendChild(so8l2);
      let btn = createDeleteButton();
      so8l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so8l3 = document.createElement("li");
      var so8p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so8l3.appendChild(so8p3);
      so8.appendChild(so8l3);
      let btn = createDeleteButton();
      so8l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so8l4 = document.createElement("li"); // Listenelement anlegen
      var so484 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so8l4.appendChild(so8p4); // dem Listenelement Text anhängen
      so8.appendChild(so8l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so8l4.appendChild(btn);
    }

  }
}

// Sonntag, 14 bis 15

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "14:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so9l1 = document.createElement("li");
      var so9p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so9l1.appendChild(so9p1);
      so9.appendChild(so9l1);
      let btn = createDeleteButton();
      so9l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so9l2 = document.createElement("li");
      var so9p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so9l2.appendChild(so9p2);
      so9.appendChild(so9l2);
      let btn = createDeleteButton();
      so9l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so9l3 = document.createElement("li");
      var so9p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so9l3.appendChild(so9p3);
      so9.appendChild(so9l3);
      let btn = createDeleteButton();
      so9l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so9l4 = document.createElement("li"); // Listenelement anlegen
      var so9p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so9l4.appendChild(so9p4); // dem Listenelement Text anhängen
      so9.appendChild(so9l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so9l4.appendChild(btn);
    }

  }
}

// Sonntag, 15 bis 16

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "15:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so10l1 = document.createElement("li");
      var so10p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so10l1.appendChild(so10p1);
      so10.appendChild(so10l1);
      let btn = createDeleteButton();
      so10l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so10l2 = document.createElement("li");
      var so10p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so10l2.appendChild(so10p2);
      so10.appendChild(so10l2);
      let btn = createDeleteButton();
      so10l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so10l3 = document.createElement("li");
      var so10p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so10l3.appendChild(so10p3);
      so10.appendChild(so10l3);
      let btn = createDeleteButton();
      so10l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so10l4 = document.createElement("li"); // Listenelement anlegen
      var so10p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so10l4.appendChild(so10p4); // dem Listenelement Text anhängen
      so10.appendChild(so10l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so10l4.appendChild(btn);
    }

  }
}


// Sonntag, 16-17

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "16:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so11l1 = document.createElement("li");
      var so11p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so11l1.appendChild(so11p1);
      so11.appendChild(so11l1);
      let btn = createDeleteButton();
      so11l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so11l2 = document.createElement("li");
      var so11p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so11l2.appendChild(so11p2);
      so11.appendChild(so11l2);
      let btn = createDeleteButton();
      so11l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so11l3 = document.createElement("li");
      var so11p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so11l3.appendChild(so11p3);
      so11.appendChild(so11l3);
      let btn = createDeleteButton();
      so11l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so11l4 = document.createElement("li"); // Listenelement anlegen
      var so11p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so11l4.appendChild(so11p4); // dem Listenelement Text anhängen
      so11.appendChild(so11l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so11l4.appendChild(btn);
    }

  }
}

// Sonntag, 17 bis 18

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "17:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so12l1 = document.createElement("li");
      var so12p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so12l1.appendChild(so12p1);
      so12.appendChild(so12l1);
      let btn = createDeleteButton();
      so12l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so12l2 = document.createElement("li");
      var so12p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so12l2.appendChild(so12p2);
      so12.appendChild(so12l2);
      let btn = createDeleteButton();
      so12l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so12l3 = document.createElement("li");
      var so12p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so12l3.appendChild(so12p3);
      so12.appendChild(so12l3);
      let btn = createDeleteButton();
      so12l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so12l4 = document.createElement("li"); // Listenelement anlegen
      var so12p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so12l4.appendChild(so12p4); // dem Listenelement Text anhängen
      so12.appendChild(so12l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so12l4.appendChild(btn);
    }

  }
}

// Sonntag, 18 bis 19

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "18:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so13l1 = document.createElement("li");
      var so13p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so13l1.appendChild(so13p1);
      so13.appendChild(so13l1);
      let btn = createDeleteButton();
      so13l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so13l2 = document.createElement("li");
      var so13p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so13l2.appendChild(so13p2);
      so13.appendChild(so13l2);
      let btn = createDeleteButton();
      so13l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so13l3 = document.createElement("li");
      var so13p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so13l3.appendChild(so13p3);
      so13.appendChild(so13l3);
      let btn = createDeleteButton();
      so13l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so13l4 = document.createElement("li"); // Listenelement anlegen
      var so13p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so13l4.appendChild(so13p4); // dem Listenelement Text anhängen
      so13.appendChild(so13l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so13l4.appendChild(btn);
    }

  }
}

// Sonntag, 19 bis 20

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "19:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so14l1 = document.createElement("li");
      var so14p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so14l1.appendChild(so14p1);
      so14.appendChild(so14l1);
      let btn = createDeleteButton();
      so14l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so14l2 = document.createElement("li");
      var so14p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so14l2.appendChild(so14p2);
      so14.appendChild(so14l2);
      let btn = createDeleteButton();
      so14l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so14l3 = document.createElement("li");
      var so14p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so14l3.appendChild(so14p3);
      so14.appendChild(so14l3);
      let btn = createDeleteButton();
      so14l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so14l4 = document.createElement("li"); // Listenelement anlegen
      var so14p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so14l4.appendChild(so14p4); // dem Listenelement Text anhängen
      so14.appendChild(so14l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so14l4.appendChild(btn);
    }

  }
}

// Sonntag, 20 bis 21

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "20:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so15l1 = document.createElement("li");
      var so15p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so15l1.appendChild(so15p1);
      so15.appendChild(so15l1);
      let btn = createDeleteButton();
      so15l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so15l2 = document.createElement("li");
      var so15p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so15l2.appendChild(so15p2);
      so15.appendChild(so15l2);
      let btn = createDeleteButton();
      so15l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so15l3 = document.createElement("li");
      var so15p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so15l3.appendChild(so15p3);
      so15.appendChild(so15l3);
      let btn = createDeleteButton();
      so15l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so15l4 = document.createElement("li"); // Listenelement anlegen
      var so15p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so15l4.appendChild(so15p4); // dem Listenelement Text anhängen
      so15.appendChild(so15l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so15l4.appendChild(btn);
    }

  }
}

// Sonntag, 21 bis 22

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "21:00 Uhr" && webprog[i].zeitbis == "22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so16l1 = document.createElement("li");
      var so16p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so16l1.appendChild(so16p1);
      so16.appendChild(so16l1);
      let btn = createDeleteButton();
      so16l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so16l2 = document.createElement("li");
      var so16p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so16l2.appendChild(so16p2);
      so16.appendChild(so16l2);
      let btn = createDeleteButton();
      so16l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so16l3 = document.createElement("li");
      var so16p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so16l3.appendChild(so16p3);
      so16.appendChild(so16l3);
      let btn = createDeleteButton();
      so16l3.appendChild(btn);
    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so16l4 = document.createElement("li"); // Listenelement anlegen
      var so16p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so16l4.appendChild(so16p4); // dem Listenelement Text anhängen
      so16.appendChild(so16l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so16l4.appendChild(btn);
    }

  }
}

// Sonntag, 22 bis 23

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "22:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so17l1 = document.createElement("li");
      var so17p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so17l1.appendChild(so17p1);
      so17.appendChild(so17l1);
      let btn = createDeleteButton();
      so17l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so17l2 = document.createElement("li");
      var so17p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so17l2.appendChild(so17p2);
      so17.appendChild(so17l2);
      let btn = createDeleteButton();
      so17l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so17l3 = document.createElement("li");
      var so17p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so17l3.appendChild(so17p3);
      so17.appendChild(so17l3);
      let btn = createDeleteButton();
      so17l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so17l4 = document.createElement("li"); // Listenelement anlegen
      var so17p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so17l4.appendChild(so17p4); // dem Listenelement Text anhängen
      so17.appendChild(so17l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so17l4.appendChild(btn);
    }

  }
}

// Sonntag, 23 bis 24

for (i in webprog) {
  if (webprog[i].tag == "Sonntag" && webprog[i].zeitvon == "23:00 Uhr") {

    if (webprog[i].prio == "keine Priorität") {
      // Wenn keine Priorität, keine zusätzliche Zeichen
      var so18l1 = document.createElement("li");
      var so18p1 = document.createTextNode(webprog[i].name+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so18l1.appendChild(so18p1);
      so18.appendChild(so18l1);
      let btn = createDeleteButton();
      so18l1.appendChild(btn);
    }

    if (webprog[i].prio == "wenig Priorität") {
      // Wenn wenig Priorität, nur ein Ausrufezeichen
      var so18l2 = document.createElement("li");
      var so18p2 = document.createTextNode(webprog[i].name + " " + "!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so18l2.appendChild(so18p2);
      so18.appendChild(so18l2);
      let btn = createDeleteButton();
      so18l2.appendChild(btn);
    }

    if (webprog[i].prio == "mittlere Priorität") {
      // Wenn mittlere Priorität, dann zwei Ausrufezeichen
      var so18l3 = document.createElement("li");
      var so18p3 = document.createTextNode(webprog[i].name + " " + "!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so18l3.appendChild(so18p3);
      so18.appendChild(so18l3);
      let btn = createDeleteButton();
      so18l3.appendChild(btn);


    }

    if (webprog[i].prio == "hohe Priorität") {
      // Wenn hohe Priorität, dann drei Ausrufezeichen
      var so18l4 = document.createElement("li"); // Listenelement anlegen
      var so18p4 = document.createTextNode(webprog[i].name + " " + "!!!"+ " " +"[bis" +" " + webprog[i].zeitbis+"]");
      so18l4.appendChild(so18p4); // dem Listenelement Text anhängen
      so18.appendChild(so18l4); // Listenelement dem Feld anhängen
      let btn = createDeleteButton();
      so18l4.appendChild(btn);
    }


  }
}



// Ende (hier nichts mehr einfügen)
}
)
}
