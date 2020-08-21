//channge:age in days

function ageInDays(){

var birthYear=prompt('give your birth year');
var ageInDayss=(2020-birthYear)*365;
var h1=document.createElement("h1");
var textAnswer=document.createTextNode("you are" +ageInDayss +" old");
h1.setAttribute('id','ageInDays')
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image=document.createElement('img');
   var div=document.getElementById('flexcatgen');
   image.src="https://i.pinimg.com/originals/5c/f9/82/5cf98269df8c368aeaddeebfa6db8d93.jpg";
   div.appendChild(image);
}