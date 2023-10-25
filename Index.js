window.onload=()=>{
    const h1=document.querySelector("h1");
    const newColors=document.getElementById("newColor");
    const cuadros=document.getElementsByClassName("cuadros");
    const hardMode=document.getElementById("coloresHard");
    const easybutt=document.getElementById("easy");
    const hardbutt=document.getElementById("hard");
    const level=document.getElementById("nivel");
    const victoria=document.getElementById("victoria");
    var posicionAcierto;
    var colorAcierto;
    easy=true;
    victoria.style.visibility="hidden";

    easybutt.addEventListener("click",(e)=>{
        easy=true
        for(cuadro of cuadros){
            cuadro.style.visibility="visible";
        }
        victoria.style.visibility="hidden";
        colorAcierto=activaJuego(easy,h1,hardMode,posicionAcierto,cuadros,newColors,posicionAcierto,colorAcierto,victoria);
    });

    hardbutt.addEventListener("click",()=>{
        easy=false
        for(cuadro of cuadros){
            cuadro.style.visibility="visible";
        }
        victoria.style.visibility="hidden";
        colorAcierto=activaJuego(easy,h1,hardMode,posicionAcierto,cuadros,newColors,posicionAcierto,colorAcierto,victoria);

    })

    newColors.addEventListener("click",(e)=>{
        e.preventDefault();
        if(h1.textContent=="rgb(0,0,0)"){
        newColors.innerHTML="NEW COLORS";
        }
        colorAcierto=activaJuego(easy,h1,hardMode,posicionAcierto,cuadros,newColors,posicionAcierto,colorAcierto,victoria);
    })

    for(cuadro of cuadros){
        cuadro.addEventListener("click",(e)=>{
            if(e.target.style.backgroundColor==colorAcierto){
                victoria.style.visibility="visible";
                for(cuadro of cuadros){
                    cuadro.style.visibility="visible";
                    cuadro.style.backgroundColor=colorAcierto;
                }
            }else{
                e.target.style.visibility="hidden";
            }
        })
    }
    


    
}




function colorAleatorio(){
    let valor1=Math.floor(Math.random() * 256);
    let valor2=Math.floor(Math.random() * 256);
    let valor3=Math.floor(Math.random() * 256);
    return `rgb(${valor1}, ${valor2}, ${valor3})`;
}

function activaJuego(easy,h1,hardMode,posicionAcierto,cuadros,newColors,posicionAcierto,colorAcierto,victoria){
            colorAcierto=colorAleatorio();
            h1.innerHTML=colorAcierto;
            victoria.style.visibility="hidden";
            if(easy){
                for(let i=3;i<6;i++){
                    cuadros[i].style.visibility="hidden";
                }
                posicionAcierto=[Math.floor(Math.random() * 3)];
            }else{
                for(let i=0;i<6;i++){
                    cuadros[i].style.visibility="visible"
                }
                posicionAcierto=[Math.floor(Math.random() * 6)];
            }
            for(color of cuadros){
                color.style.backgroundColor=colorAleatorio();
            }
            cuadros[posicionAcierto].style.backgroundColor=colorAcierto;
            return colorAcierto
}

