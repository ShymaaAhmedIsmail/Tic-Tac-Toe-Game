
let flag;
let fail=false;

function myFunction(){
    document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    document.getElementById("myDIV2").style.boxShadow = "none";
    
}



function myFunction2(){
    document.getElementById("myDIV").style.boxShadow = "none";

    document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    flag=1;

}





 function fun1(){
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").style.textAlign="center";
        document.getElementById("b1").style.fontFamily="bold";
        document.getElementById("b1").style.fontSize="60px";
        document.getElementById("b1").style.color="red";

        document.getElementById("b1").disabled = true;
        flag = 0;

    document.getElementById("myDIV").style.boxShadow = "none";

    document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";

    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").style.fontFamily="bold";
        document.getElementById("b1").style.fontSize="60px";
        document.getElementById("b1").disabled = true;
        document.getElementById("b1").style.color="blue";
        flag = 1;
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";

    }
   
  

 }

 function fun2(){
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").style.textAlign="center";
        document.getElementById("b2").style.fontFamily="bold";
        document.getElementById("b2").style.fontSize="60px";
        document.getElementById("b2").disabled = true;
        document.getElementById("myDIV").style.boxShadow = "none";
        document.getElementById("b2").style.color="red";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").style.fontFamily="bold";
        document.getElementById("b2").style.fontSize="60px";
        document.getElementById("b2").disabled = true;
        document.getElementById("b2").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }
 
 function fun3(){
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").style.textAlign="center";
        document.getElementById("b3").style.fontFamily="bold";
        document.getElementById("b3").style.fontSize="60px";
        document.getElementById("b3").disabled = true;
        document.getElementById("myDIV").style.boxShadow = "none";
        document.getElementById("b3").style.color="red";
        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").style.fontFamily="bold";
        document.getElementById("b3").style.fontSize="60px";
        document.getElementById("b3").disabled = true;
        document.getElementById("b3").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }

 function fun4(){
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").style.textAlign="center";
        document.getElementById("b4").style.fontFamily="bold";
        document.getElementById("b4").style.fontSize="60px";
        document.getElementById("b4").disabled = true;
        document.getElementById("b4").style.color="red";
        document.getElementById("myDIV").style.boxShadow = "none";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").style.fontFamily="bold";
        document.getElementById("b4").style.fontSize="60px";
        document.getElementById("b4").disabled = true;
        document.getElementById("myDIV").style.boxShadow = "none";
        document.getElementById("b4").style.color="blue";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }
 function fun5(){
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").style.textAlign="center";
        document.getElementById("b5").style.fontFamily="bold";
        document.getElementById("b5").style.fontSize="60px";
        document.getElementById("b5").disabled = true;
        document.getElementById("b5").style.color="red";
        document.getElementById("myDIV").style.boxShadow = "none";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").style.fontFamily="bold";
        document.getElementById("b5").style.fontSize="60px";
        document.getElementById("b5").disabled = true;
        document.getElementById("b5").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }
 function fun6(){
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").style.textAlign="center";
        document.getElementById("b6").style.fontFamily="bold";
        document.getElementById("b6").style.fontSize="60px";
        document.getElementById("b6").disabled = true;
        document.getElementById("b6").style.color="red";
        document.getElementById("myDIV").style.boxShadow = "none";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").style.fontFamily="bold";
        document.getElementById("b6").style.fontSize="60px";
        document.getElementById("b6").disabled = true;
        document.getElementById("b6").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }
 function fun7(){
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").style.textAlign="center";
        document.getElementById("b7").style.fontFamily="bold";
        document.getElementById("b7").style.fontSize="60px";
        document.getElementById("b7").style.color="red";
        document.getElementById("b7").disabled = true;
        
        document.getElementById("myDIV").style.boxShadow = "none";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").style.fontFamily="bold";
        document.getElementById("b7").style.fontSize="60px";
        document.getElementById("b7").disabled = true;
        document.getElementById("b7").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }
 function fun8(){
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").style.textAlign="center";
        document.getElementById("b8").style.fontFamily="bold";
        document.getElementById("b8").style.fontSize="60px";
        document.getElementById("b8").disabled = true;
        document.getElementById("b8").style.color="red";
        document.getElementById("myDIV").style.boxShadow = "none";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").style.fontFamily="bold";
        document.getElementById("b8").style.fontSize="60px";
        document.getElementById("b8").disabled = true;
        document.getElementById("b8").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }
 function fun9(){
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").style.textAlign="center";
        document.getElementById("b9").style.fontFamily="bold";
        document.getElementById("b9").style.fontSize="60px";
        document.getElementById("b9").disabled = true;
        document.getElementById("b9").style.color="red";
        document.getElementById("myDIV").style.boxShadow = "none";

        document.getElementById("myDIV2").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 0;

    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").style.fontFamily="bold";
        document.getElementById("b9").style.fontSize="60px";
        document.getElementById("b9").disabled = true;
        document.getElementById("b9").style.color="blue";
        document.getElementById("myDIV2").style.boxShadow = "none";

        document.getElementById("myDIV").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        flag = 1;
    }
 }





 let b1=document.getElementById("b1").value;
 let b2=document.getElementById("b2").value;
 let b3=document.getElementById("b3").value;
 let b4=document.getElementById("b4").value;
 let b5=document.getElementById("b5").value;
 let b6=document.getElementById("b6").value;
 let b7=document.getElementById("b7").value;
 let b8=document.getElementById("b8").value;
 let b9=document.getElementById("b9").value;



function reset(){
    console.log("hhh")
    location.reload();
b1=b2=b3=b4=b5=b6=b7=b8=b9=''
}


function win(){
    
 let b1=document.getElementById("b1").value;
 let b2=document.getElementById("b2").value;
 let b3=document.getElementById("b3").value;
 let b4=document.getElementById("b4").value;
 let b5=document.getElementById("b5").value;
 let b6=document.getElementById("b6").value;
 let b7=document.getElementById("b7").value;
 let b8=document.getElementById("b8").value;
 let b9=document.getElementById("b9").value;

 let bb1=document.getElementById("b1");
 let bb2=document.getElementById("b2");
 let bb3=document.getElementById("b3");
 let bb4=document.getElementById("b4");
 let bb5=document.getElementById("b5");
 let bb6=document.getElementById("b6");
 let bb7=document.getElementById("b7");
 let bb8=document.getElementById("b8");
 let bb9=document.getElementById("b9");
    if((b1=='x'|| b1=='X') && (b2=='x'|| b2=='X')&&(b3=='x'||b3=='X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
        
        

bb4.disabled=true;
bb5.disabled=true;
bb6.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b6 == 'x' || b6 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
bb1.disabled=true;
bb2.disabled=true;
bb3.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
    b8 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
bb4.disabled=true;
bb5.disabled=true;
bb6.disabled=true;
bb1.disabled=true;
bb2.disabled=true;
bb3.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
    b4 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
bb2.disabled=true;
bb3.disabled=true;
bb5.disabled=true;
bb6.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b8 == 'x' || b8 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
bb1.disabled=true;
bb4.disabled=true;
bb7.disabled=true;
bb3.disabled=true;
bb6.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
    b6 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
bb1.disabled=true;
bb2.disabled=true;
bb4.disabled=true;
bb5.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
bb1.disabled=true;
bb4.disabled=true;
bb2.disabled=true;
bb6.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("X is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);

bb2.disabled=true;
bb3.disabled=true;
bb4.disabled=true;
bb6.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true
    }


    if((b1=='0') && ( b2=='0')&&(b3=='0')){
        document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

        const newDiv = document.createElement("div");
        newDiv.style.fontSize="50px"
        newDiv.style.textAlign="center"
        newDiv.style.color="blue"
        newDiv.style.background="#ebedec"
        newDiv.style.paddingTop="6%"


  const newContent = document.createTextNode("0 is Win");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("Parent");
  document.body.insertBefore(newDiv, currentDiv);
        bb4.disabled=true;
        bb5.disabled=true;
        bb6.disabled=true;
        bb7.disabled=true;
        bb8.disabled=true;
        bb9.disabled=true;
        document.body.style.backgroundImage = "url('11.gif')";
        newDiv.style.backgroundImage = "url('11.gif')";
        currentDiv.style.backgroundImage = "url('11.gif')";
        fail=true
            }
            else if ((b4 == '0' ) && (b5 == '0' ) && (b6 == '0' )){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
        bb1.disabled=true;
bb2.disabled=true;
bb3.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true

            }
            else if ((b7 == '0' ) && (b8 == '0' ) && (b9 == '0' )){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
        bb4.disabled=true;
bb5.disabled=true;
bb6.disabled=true;
bb1.disabled=true;
bb2.disabled=true;
bb3.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true

            }
            else if ((b1 == '0' ) && (b4 == '0' ) && (b7 == '0' )){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
        bb2.disabled=true;
bb3.disabled=true;
bb5.disabled=true;
bb6.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true

            }
            else if ((b2 == '0' ) && (b5 == '0' ) && (b8 == '0' )){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
        bb1.disabled=true;
bb4.disabled=true;
bb7.disabled=true;
bb3.disabled=true;
bb6.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true

            }
            else if ((b3 == '0')  && (b6 == '0' ) && (b9 == '0')){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
        bb1.disabled=true;
bb2.disabled=true;
bb4.disabled=true;
bb5.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true

            }
            else if ((b3 == '0' ) && (b5 == '0' ) && (b7 == '0' )){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
        bb1.disabled=true;
bb4.disabled=true;
bb2.disabled=true;
bb6.disabled=true;
bb8.disabled=true;
bb9.disabled=true;
document.body.style.backgroundImage = "url('11.gif')";
newDiv.style.backgroundImage = "url('11.gif')";
currentDiv.style.backgroundImage = "url('11.gif')";
let mySound = new Audio('my_audio_file.mp3')
mySound.play()
fail=true

            }
            else if ((b1 == '0' ) && (b5 == '0') && (b9 == '0')){
                document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "none";

                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("0 is Win");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv);
          document.body.style.backgroundImage = "url('11.gif')";
          newDiv.style.backgroundImage = "url('11.gif')";
          currentDiv.style.backgroundImage = "url('11.gif')";
          let mySound = new Audio('my_audio_file.mp3')
mySound.play()
          



        bb2.disabled=true;
bb3.disabled=true;
bb4.disabled=true;
bb6.disabled=true;
bb7.disabled=true;
bb8.disabled=true;
fail=true

            }

            if ((b1=='0'||b1=='x'||b1=='X')&&
            (b2=='0'||b2=='x'||b2=='X')&&
            (b3=='0'||b3=='x'||b3=='X')&&
            (b4=='0'||b4=='x'||b4=='X')&&
            (b5=='0'||b5=='x'||b5=='X')&&
            (b6=='0'||b6=='x'||b6=='X')&&
            (b7=='0'||b7=='x'||b7=='X')&&
            (b8=='0'||b8=='x'||b8=='X')&&
            (b9=='0'||b9=='x'||b9=='X')&&
            (fail==false)
            
            )


            {
                document.getElementById("game").style.display = "none";
                const newDiv = document.createElement("div");
                newDiv.style.fontSize="50px"
                newDiv.style.textAlign="center"
                newDiv.style.color="blue"
                newDiv.style.background="#ebedec"
                newDiv.style.paddingTop="6%"
        
        
          const newContent = document.createTextNode("Draw");
        
          newDiv.appendChild(newContent);
        
          const currentDiv = document.getElementById("Parent");
          document.body.insertBefore(newDiv, currentDiv); 
          let mySound = new Audio('1.mp3')
          mySound.play()
            }
}



function withComputer(){
    document.getElementById("game").style.display = "none";
    document.getElementById("gamevscm").style.display = "block";
    let bv1=document.getElementById("bv1")
    let bv2=document.getElementById("bv2")
    let bv3=document.getElementById("bv3")
    let bv4=document.getElementById("bv4")
    let bv5=document.getElementById("bv5")
    let bv6=document.getElementById("bv6")
    let bv7=document.getElementById("bv7")
    let bv8=document.getElementById("bv8")
    let bv9=document.getElementById("bv9")
    const allcells = [bv1, bv2, bv3,bv4,bv5,bv6,bv7,bv8,bv9];
    const emptyCells = Array.from(allcells).filter(ceallcellsll => allcells.textContent === '');

    let random=   Math.floor(Math.random() * 9);

  

bv1.addEventListener('click',function(){
    
    document.getElementById("bv1").value = "X";
    document.getElementById("bv1").style.textAlign="center";
    document.getElementById("bv1").style.fontFamily="bold";
    document.getElementById("bv1").style.fontSize="60px";
    document.getElementById("bv1").disabled = true;
    document.getElementById("bv1").style.color="red";
   
    allcells.splice(0, 1);
    // console.log(allcells.length)

    setTimeout(() => { 
       

       

            allcells[random].value="0"
            allcells[random]. style.textAlign="center";
            allcells[random]. style.fontFamily="bold";
            allcells[random]. style.fontSize="60px";
            allcells[random]. disabled = true;
            allcells[random]. style.color="blue";
            allcells.splice(random,random+1)
            
         }
            , 500)
 
 
}

)

bv2.addEventListener('click',function(){
    
    document.getElementById("bv2").value = "X";
    document.getElementById("bv2").style.textAlign="center";
    document.getElementById("bv2").style.fontFamily="bold";
    document.getElementById("bv2").style.fontSize="60px";
    document.getElementById("bv2").disabled = true;
    document.getElementById("bv2").style.color="red";
   
    allcells.splice(1, 2);
    

    setTimeout(() => { 
       
        
    
     if (random==newrand)
{
    newrand=   Math.floor(Math.random() * 8);
    allcells[newrand].value="0"
            allcells[newrand]. style.textAlign="center";
            allcells[newrand]. style.fontFamily="bold";
            allcells[newrand]. style.fontSize="60px";
            allcells[newrand]. disabled = true;
            allcells[newrand]. style.color="blue";
            allcells.splice(newrand,newrand+1)

}  
else{
            allcells[newrand].value="0"
            allcells[newrand]. style.textAlign="center";
            allcells[newrand]. style.fontFamily="bold";
            allcells[newrand]. style.fontSize="60px";
            allcells[newrand]. disabled = true;
            allcells[newrand]. style.color="blue";
            allcells.splice(newrand,newrand+1) 
}     
            
          
         }
            , 500)
   
   

   
 
}

)







// bv4.addEventListener('click',function(){
    
//     document.getElementById("bv4").value = "X";
//     document.getElementById("bv4").style.textAlign="center";
//     document.getElementById("bv4").style.fontFamily="bold";
//     document.getElementById("bv4").style.fontSize="60px";
//     document.getElementById("bv4").disabled = true;
//     document.getElementById("bv4").style.color="red";
   
//     allcells.splice(3,4 );
//     console.log(allcells.length)

//     setTimeout(() => { 
        
     
       
//             allcells[random].value="0"
//             allcells[random]. style.textAlign="center";
//             allcells[random]. style.fontFamily="bold";
//             allcells[random]. style.fontSize="60px";
//             allcells[random]. disabled = true;
//             allcells[random]. style.color="blue";
//             allcells.splice(random,random+1)
//             console.log(allcells)
//          }
//             , 500)
   
   

   
 
// }

// )

// bv5.addEventListener('click',function(){
    
//     document.getElementById("bv5").value = "X";
//     document.getElementById("bv5").style.textAlign="center";
//     document.getElementById("bv5").style.fontFamily="bold";
//     document.getElementById("bv5").style.fontSize="60px";
//     document.getElementById("bv5").disabled = true;
//     document.getElementById("bv5").style.color="red";
   
//     allcells.splice(4, 5);
//     console.log(allcells.length)

//     setTimeout(() => { 
        
     
       
//             allcells[random].value="0"
//             allcells[random]. style.textAlign="center";
//             allcells[random]. style.fontFamily="bold";
//             allcells[random]. style.fontSize="60px";
//             allcells[random]. disabled = true;
//             allcells[random]. style.color="blue";
//             allcells.splice(random,random+1)
//             console.log(allcells)
//          }
//             , 500)
   
   

   
 
// }

// )



// bv6.addEventListener('click',function(){
    
//     document.getElementById("bv6").value = "X";
//     document.getElementById("bv6").style.textAlign="center";
//     document.getElementById("bv6").style.fontFamily="bold";
//     document.getElementById("bv6").style.fontSize="60px";
//     document.getElementById("bv6").disabled = true;
//     document.getElementById("bv6").style.color="red";
   
//     allcells.splice(5, 6);
//     console.log(allcells.length)

//     setTimeout(() => { 
        
     
       
//             allcells[random].value="0"
//             allcells[random]. style.textAlign="center";
//             allcells[random]. style.fontFamily="bold";
//             allcells[random]. style.fontSize="60px";
//             allcells[random]. disabled = true;
//             allcells[random]. style.color="blue";
//             allcells.splice(random,random+1)
//             console.log(allcells)
//          }
//             , 500)
   
   

   
 
// }

// )


// bv7.addEventListener('click',function(){
    
//     document.getElementById("bv7").value = "X";
//     document.getElementById("bv7").style.textAlign="center";
//     document.getElementById("bv7").style.fontFamily="bold";
//     document.getElementById("bv7").style.fontSize="60px";
//     document.getElementById("bv7").disabled = true;
//     document.getElementById("bv7").style.color="red";
   
//     allcells.splice(6, 7);
//     console.log(allcells.length)

//     setTimeout(() => { 
        
     
       
//             allcells[random].value="0"
//             allcells[random]. style.textAlign="center";
//             allcells[random]. style.fontFamily="bold";
//             allcells[random]. style.fontSize="60px";
//             allcells[random]. disabled = true;
//             allcells[random]. style.color="blue";
//             allcells.splice(random,random+1)
//             console.log(allcells)
//          }
//             , 500)
   
   

   
 
// }

// )


// bv8.addEventListener('click',function(){
    
//     document.getElementById("bv8").value = "X";
//     document.getElementById("bv8").style.textAlign="center";
//     document.getElementById("bv8").style.fontFamily="bold";
//     document.getElementById("bv8").style.fontSize="60px";
//     document.getElementById("bv8").disabled = true;
//     document.getElementById("bv8").style.color="red";
   
//     allcells.splice(8, 9);
//     console.log(allcells.length)

//     setTimeout(() => { 
        
     
       
//             allcells[random].value="0"
//             allcells[random]. style.textAlign="center";
//             allcells[random]. style.fontFamily="bold";
//             allcells[random]. style.fontSize="60px";
//             allcells[random]. disabled = true;
//             allcells[random]. style.color="blue";
//             allcells.splice(random,random+1)
//             console.log(allcells)
//          }
//             , 500)
   
   

   
 
// }

// )
// bv9.addEventListener('click',function(){
    
//     document.getElementById("bv9").value = "X";
//     document.getElementById("bv9").style.textAlign="center";
//     document.getElementById("bv9").style.fontFamily="bold";
//     document.getElementById("bv9").style.fontSize="60px";
//     document.getElementById("bv9").disabled = true;
//     document.getElementById("bv9").style.color="red";
   
//     allcells.splice(9, 10);
//     console.log(allcells.length)

//     setTimeout(() => { 
        
     
       
//             allcells[random].value="0"
//             allcells[random]. style.textAlign="center";
//             allcells[random]. style.fontFamily="bold";
//             allcells[random]. style.fontSize="60px";
//             allcells[random]. disabled = true;
//             allcells[random]. style.color="blue";
//             allcells.splice(random,random+1)
//             console.log(allcells)
//          }
//             , 500)
   
   

   
 
// }

// )


 

}




