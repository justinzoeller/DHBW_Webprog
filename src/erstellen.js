// Abrufen des Formulars



  // Initialize Fi


function einreichen(event) {
  alert("Dein Tag wurde erfolgreich in die Liste aufgenommen");
    name

  var postData = {
    name : document.getElementById("name").value,
    tag : document.getElementById("tag").value,
    prio : document.getElementById("prio").value,
    zeitbis : document.getElementById("zeitbis").value,
    zeitvon : document.getElementById("zeitvon").value,
  };

var newPostKey = firebase.database().ref().child('posts').push().key;
var updates = {};
 updates['/posts/' + newPostKey] = postData;
 updates['/user-posts/'+ newPostKey] = postData;

 return firebase.database().ref().update(updates);
}



// Zuordnung der Angaben in das richtige Eingabefeld

// Anordnung anhand von Tag, Uhrzeit und Name


window.onload = function () {
  console.log("Dokumente geladen");
  document.getElementById("ein").addEventListener("click",einreichen(event));
}


// Die vom Formular erfassten Daten an Google Firebase weiterleiten

//function saveProject() {
