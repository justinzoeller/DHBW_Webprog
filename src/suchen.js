window.addEventListener("load",() =>{
 
         
          let database = firebase.database();
          database.ref('posts').orderByChild('name').on("value", function(snapshot) {
            snapshot.forEach(function(data) {
              key = data.key;
              name2 = data.val().name;
              if ('Neue Aktivität' == name2) {

              }
        
            });
          });
});

function searchFunction () {
    let database = firebase.database();
    database.ref('posts').orderByChild('name').on("value", function(snapshot) {
        let seachvalue = document.getElementById('search').value;
        let webprog = snapshot.val();
      
        let message = '';
        let gefunden = false;

        

        for (i in webprog){ 
            let searchtocompare = seachvalue.replace(/\s*$/,'');
            nametocompare = webprog[i].name;
            nametocompare = nametocompare.replace(/\s*$/,'');
            searchtocompare = searchtocompare.toUpperCase();
            nametocompare = nametocompare.toUpperCase();
            if (searchtocompare == nametocompare) {
            gefunden = true;
            message = message + 'Tag: ' + webprog[i].tag + ' \n';
            message = message + 'Ab : ' + webprog[i].zeitvon + ' \n';
            message = message + 'Bis: ' + webprog[i].zeitbis + ' \n';
            message = message + 'Prio: ' + webprog[i].prio + ' \n';
            message = message + '--------------------------- \n';
            }
        }

        if(gefunden == true) {  
           message = 'Die Aktivität ' + seachvalue + ' ist eingetragen am: \n ' + message;
        } else {
            message = seachvalue + ' ist keine eingetragene Aktivität!';
        }

        window.alert(message);
    });
}

        
     