
let btn = document.createElement("button");
btn.innerText = "changebackroundcolor";
btn.className="changebtn"
document.body.append(btn)
let a = document.body

let btn2 = document.createElement("button")
btn2.innerText= "colors";
a.appendChild(btn2)


let colors = ["#008000","#FF0000","#0000FF","#FFFF00","#FFC0CB","#7f00ff","#E6E6FA","#ADD8E6","#000FF"];
b = [0]; 
a.appendChild(btn)



btn.addEventListener('click',backg)
function backg(){
       
            b=b>=colors.length-1?0:b++;

            document.body.style.backgroundColor=colors[b];
            b++;
            btn2.innerText=colors[b];

           
         } 















