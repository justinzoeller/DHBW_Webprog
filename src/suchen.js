
window.onload=searchFunction(){

  // Firebase einbinden
  var database = firebase.database();
  var rootRef = firebase.database().ref("posts");
  rootRef.once("value").then(function(snapshot) {
  var anzahlChild = snapshot.numChildren();
  var webprog = snapshot.val();

//   let name = document.getElementById("name").value;
  let name=document.getElementById("name");
  let search=document.getElementById("search").value;
  document.getElementById("name").addEventListener('keydown',function(event){
      if(event.which==10){
        searching()
      }
  })
  search.addEventListener("click",()=>{
      searching()
  })
  function searching(){
     for(i in webprog){
    if(webprog[i].name!=null){

    
    return firebase.database().ref().

    } 
  }
  
  }
    
}