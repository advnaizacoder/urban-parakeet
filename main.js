var nameofthestudentarray = [];
function submit(){
var display = [];
for(var j = 1; j<=4; j++){
   var nameofthestudent = document.getElementById('name_of_the_student_' +j).value;
   console.log(nameofthestudent);
   nameofthestudentarray.push(nameofthestudent);

}
console.log(nameofthestudentarray);
var lengthofarray = nameofthestudentarray.length;
for(i=0; i<lengthofarray; i++){
    display.push("<h4>NAME - "+ nameofthestudentarray[i]+ "</h4>");
    console.log(display);
}
console.log(display);
document.getElementById('display_name_with_commas').innerHTML=display;
var remove =display.join("");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display ="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    var display2 = [];
    var lengthofarray= nameofthestudentarray.length;
    console.log(lengthofarray);
    for(i=0; i<lengthofarray; i++){
        display2.push("<h4>NAME - "+ nameofthestudentarray[i]+ "</h4>");
        console.log(display2);
    }
    var removecommas = display2.join("");
    document.getElementById('display_name_without_commas').innerHTML=removecommas;
    

}