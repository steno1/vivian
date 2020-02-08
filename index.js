

var randomNo1=Math.floor(Math.random()*5)+1;
var randomImage="dice"+randomNo1+".png";
var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImage);
 
 var randomNo2=Math.floor(Math.random()*5)+1;
var randomImage2="dice"+randomNo2+".png";
var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomImage2);
 if( randomNo1>randomNo2){
	 document.querySelector("h2").innerHTML="Player one wins";
 }else if(randomNo2>randomNo1){
	 
	 document.querySelector("h2").innerHTML="Player two wins";
 }else{
	 document.querySelector("h2").innerHTML="Draw";
 }