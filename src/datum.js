//wird immer ausgeführt wenn page geloaded wird
window.addEventListener("load",() =>{

//findet date von montag DD MM YYYY
var d1 =  moment().startOf('isoWeek').isoWeekday(1).format('DD. MM. YYYY');

//6 tage hinzugefügt für sonntag
var d2 = moment().endOf('isoWeek').isoWeekday(7).format('DD. MM. YYYY');


//zur innerhtml hinzugefügt
document.getElementById("datum").innerHTML = d1 + '  -  ' + d2;

});
