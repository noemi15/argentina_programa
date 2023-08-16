    
/*Generamos constantes */
const display = document.querySelector(".calculadoraDisplay");
const botones = document.querySelectorAll(".boton");



/* Agragar contenido por cada click que se realice */
botones.forEach(boton => {
    boton.addEventListener("click",() => {
        const botonApretado = boton.textContent;
       

        /* Configuramos el boton borrar todo*/
        if (boton.id === "AC") {
            display.textContent = "0";
            return;
        }

        /* Configuramos el boton borrar por numero*/
        if (boton.id === "borrar") {
            if(display.textContent.length === 1  || display.textContent === "Error!" ){
                display.textContent ="0";
            } else{
                display.textContent = display.textContent.slice(0,-1);
            }
            return;
        }

        /* Configuramos el  resultado con su respectivo error por exceder espacio y error en caso no se pueda realizar el calculo*/
        if (boton.id === "igual") {
            try  {  
                display.textContent = eval(display.textContent);

                if(display.textContent.includes("e") == true){
                    display.textContent = "Error excede espacio!";
                     }
                 }
            catch{  
                display.textContent = "Error!";
                }
            return;
        }       
        
        /* Configuramos el ingreso de numeros*/
        if(display.textContent ==="0" || display.textContent === "Error!" ) {
            display.textContent =  botonApretado;
        } else {
            display.textContent += botonApretado;
        }
        
    })
})




