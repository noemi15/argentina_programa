const btnPiedra = document.getElementById("piedra")
const btnPapel = document.getElementById("papel")
const btnTijera = document.getElementById("tijera")
const nombreJugador = document.getElementById("nombre")
const msjJugada = document.getElementById("msj-jugada")
const msjJugadaFinal = document.getElementById("msj-jugada-final")
const eleccionJugador = document.getElementById("eleccion-jugador")
const eleccionPC = document.getElementById("eleccion-pc")
const contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
const contenedorPuntosPC = document.querySelector("#puntos-computadora");
const opcionesJuego = document.querySelector("#opciones");
const marcador = document.getElementById("marcadorId");
const inicio = document.getElementById("inicioId");
const presentacion = document.getElementById("presentacionId");
const reload = document.getElementById("reiniciar");

let opcionJugador;
let opcionPc;
let cantJuegosGanadosJugador = 0;
let cantJuegosGanadosPc = 0;
let conteoJugada = 0;

// ingreso datos del jugador , ocultar bloque
ingresoNombre.addEventListener("click",() => {       
    if(nombreJugador.value.length == 0){
        alert("Campo vacio, favor de ingresar nombre");
    } else {
        document.getElementById("cargaNombre").innerHTML = nombreJugador.value;
        jugador.innerHTML = nombreJugador.value;
        inicio.style.display = "block";
        presentacion.style.display = "none";
       
    }
})

// eleccion jugador
btnPiedra.addEventListener('click', function(){
        opcionJugador = "Piedra";
        opPc();
    });
    
btnPapel.addEventListener('click', function(){
        opcionJugador = "Papel";
        opPc();
    });

btnTijera.addEventListener('click', function(){
        opcionJugador = "Tijera";
        opPc();
    })

// eleccion de PC y conteo jugada
function opPc(){
        let aleaorio = nAleatorio();
    
        if(aleaorio == 0){
            opcionPc = "Piedra";
        }else if(aleaorio == 1){
            opcionPc = "Papel";
        }else if(aleaorio == 2){
            opcionPc = "Tijera";
        }  
        
        if(conteoJugada < 6){
            jugada();
            eleccionJugador.innerHTML = opcionJugador;
            eleccionPC.innerHTML = opcionPc;
            combate();
            jugadaFinal();
        }
    }
    

// agrega imagen en funcion a las elecciones de la jugada
function combate() {
    if(opcionJugador == "Papel" && opcionPc == "Piedra" || opcionPc == "Papel" && opcionJugador == "Piedra"){
        document.getElementById("combate").innerHTML =  '<img src="papel envuelve piedra.png">';
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijera" ||opcionPc == "Piedra" && opcionJugador == "Tijera" ){
        document.getElementById("combate").innerHTML =  '<img src="piedra golpea tijera.png">';
    }else if(opcionJugador == "Tijera" && opcionPc == "Papel" ||  opcionPc == "Tijera" && opcionJugador == "Papel"){
        document.getElementById("combate").innerHTML =  '<img src="tijera corta papel.png">';
    } else{
        document.getElementById("combate").innerHTML =  '<img src="empate.png">';
    }
}

// eleccion aleatoria
function nAleatorio(){
        let n = Math.floor(Math.random() * 3);
        return n;
        }

// determinar ganador de una jugada e ingresar en pantalla
function jugada() {
    if (opcionJugador == "Piedra" && opcionPc == "Tijera" ||
        opcionJugador == "Papel" && opcionPc == "Piedra" ||
        opcionJugador == "Tijera" && opcionPc == "Papel"){
            msjJugada.innerHTML = "Ganó Jugador!";                
            cantJuegosGanadosJugador++;
            conteoJugada++;
            contenedorPuntosUsuario.innerText = cantJuegosGanadosJugador;
    }else if (opcionPc == "Piedra" && opcionJugador == "Tijera" ||
                opcionPc == "Papel" && opcionJugador == "Piedra" ||
                opcionPc == "Tijera" && opcionJugador == "Papel"){
            msjJugada.innerHTML = "Ganó PC!";
            cantJuegosGanadosPc++;
            conteoJugada++;
            contenedorPuntosPC.innerText = cantJuegosGanadosPc;
    }else{
            msjJugada.innerHTML = "Empate"; 
            conteoJugada++;
            cantJuegosGanadosJugador++;
            cantJuegosGanadosPc++;
            contenedorPuntosUsuario.innerText = cantJuegosGanadosJugador;
            contenedorPuntosPC.innerText = cantJuegosGanadosPc;
    }         
    marcador.style.display = "block";
}


// determinar al ganador de 3 juegos
function jugadaFinal(){
    if (cantJuegosGanadosJugador == 3 || cantJuegosGanadosPc == 3) {
        if (cantJuegosGanadosJugador == 3) {
            msjJugadaFinal.innerHTML = "🔥 ¡GANASTE EL JUEGO! 🔥";
        } else if (cantJuegosGanadosPc == 3) {
            msjJugadaFinal.innerHTML = "😭 ¡GANÓ LA PC!";
        }
        inicio.style.display = "none";   
        reload.style.display = "block";
    } 
 } 

// generar reinicio
reload.addEventListener("click", _ => {
    location.reload();
});

