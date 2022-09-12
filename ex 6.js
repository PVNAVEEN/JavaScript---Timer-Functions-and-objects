function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
   
    if(hh === 0){
    hh = 12;
    }
    if(hh > 12){
    hh = hh - 12;
    session = "PM";
    }
   
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
 ss = (ss < 10) ? "0" + ss : ss;

 let time = hh + ":" + mm + ":" + ss + " " + session;

 document.getElementById("clock").innerText = time;
 let t = setTimeout(function(){ currentTime() }, 1000);
 }

 currentTime();
 var i = 0;
function change() {
 var doc = document.getElementById("background");
 var color = ["black", "blue", "brown", "green"];
 doc.style.backgroundColor = color[i];
 i = (i + 1) % color.length;
}
setInterval(change, 30000);
function incSize(){
 document.getElementById("paral").style="font-size:28px";}
function decSize(){
 document.getElementById("paral").style = "font-size:10px";
}
function q4Start(){
 car=document.getElementById("car");
 interval=setInterval(q4CarMove,20);

}
function q4Stop(){
 clearInterval(interval);
}
function q4CarMove(){

 car.style.left=parseInt(car.style.left)+2+"px";

 if(parseInt(car.style.left)>parseInt(screen.width)){
 car.style.left="0px";
 }
}
function q5(){
 document.getElementById("bfr").innerHTML="Before 2000";
 document.getElementById("aft").innerHTML="After 2000";
 let student=[{name:"Hemanth kumar",regNo:"URK20CS2077",dob:"14/FEB/2002"},
 {name:"P VENKATA NAVEEN",regNo:"URK20CS2078",dob:"07/Jul/2001"},
 {name:"jeevan",regNo:"URK20CS2074",dob:"10/DEC/1999"},
 {name:"JYOTHI",regNo:"URK20CS2064",dob:"23/MAR/1998"},
 {name:"Sumanth",regNo:"URK20CS2088",dob:"18/NOV/2001"}

 ]
 for(let i=0;i<student.length;i++){
 if(parseInt(student[i].dob.split("/")[2])<2000){
 document.getElementById("before").innerHTML+=student[i].name+"\'s"+"Register Number is "+student[i].regNo+" and the DOB is"+student[i].dob+"<br><br>";}
 else
 document.getElementById("after").innerHTML+=student[i].name+"\'s"+"Register Number is "+student[i].regNo+" and the DOB is"+student[i].dob+"<br><br>";
 }
} 