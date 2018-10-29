// Referenz für die Datenbank (Google Firebase)

var database = firebase.database();


window.onload = function() {
  console.log("Dokumente geladen");
  document.getElementById("form").onsubmit = function einreichen() {
    let name = document.getElementById("name").value;
    let zeitbis = document.getElementById("zeitbis").value;
    let zeitvon = document.getElementById("zeitvon").value;
    let prio = document.getElementById("prio").value;
    let tag = document.getElementById("tag").value;



    // in Google Firebase schreiben
    var postData = {
      name: document.getElementById("name").value,
      tag: document.getElementById("tag").value,
      zeitvon: document.getElementById("zeitvon").value,
      zeitbis: document.getElementById("zeitbis").value,
      prio: document.getElementById("prio").value,
    };

    var newPostKey = firebase.database().ref().child('posts').push().key;

    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }
}