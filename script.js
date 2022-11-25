let main = ["i am a frontEnd Devoloper","i am a app developer"," i am a mern developer"];
let count = 0;
let index = 0;
let currentText =0;
let letter = 0;
setInterval(funs,100);

function funs(){
   currentText= main[count];
   letter= currentText.slice(0,index++);
   let sharif = document.querySelector("#sharif").innerHTML=letter;

   if(letter.length==currentText.length){
    count++;
    index=0
   }
   if(count==main.length){
    count =0
   }

}