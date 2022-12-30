
function createPad( size){
  let hw = 500/ size;
  let pad = document.querySelector(".pad");
 
  let bxnum = size*size;
   for( let i = 0; i < bxnum; i++)
   {
    let box = document.createElement("div");
    box.style.width = hw + "px";
    box.style.height = hw + "px";
    
   box.addEventListener("mouseover",function(){
    box.style.backgroundColor = "black";  
   });
    pad.insertAdjacentElement("beforeend", box);
   }
}
function sizeget()
{
    let size = prompt(" Enter a number b/n 2 and 100 for the size of the board");
   return size;
}
function sizecheck(size){
  if( size == ""){
    alert("Wrong input");
    sizecheck(sizeget());
  }

  else if ((size < 2) || (size > 100)){
    alert("I said Enter a number b/n 2 and 100");
    sizecheck(sizeget());
  }
    else return size;
}
//sizecheck(sizeget());
const reset = document.createElement("button");
reset.innerText = "Reset";
const body = document.querySelector("#body");
body.appendChild(reset);
reset.addEventListener("click",reload);

function reload(){
  location.reload();
}
createPad(sizecheck(sizeget()));