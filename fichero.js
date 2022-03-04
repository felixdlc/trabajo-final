// Guarda el número de intentos que lleva el usuario
var intentos = 0;
var palabraBuscada = 'ayuda';
var palabraEscrita = [];
var puntuacion = 0;
var NombreEscrito = [];


function ocultarcasillas(){
    for(let i=1;i<5;i++){
        $('#fila'+i).css('display','none');
    }
}

function mostrarCasilla(){
    intentos++;
    $('#fila'+intentos).css('display','block');
}

function deshabilitarCasilla(n){
    $('#fila'+intentos).children().prop('disabled', true);
}

function capturarPalabra(){
    palabraEscrita=[]; 
    for(i=0; i<5; i++){
        palabraEscrita = palabraEscrita +$('#fila'+intentos).children().eq(i).val();
    }
}
function haGanado(){
    if(palabraBuscada == palabraEscrita){ 
        puntuacion = puntuacion + 20;
        $('#marcador').text(puntuacion);
        return true;
    }
    else return false;
}


function color_casillas(){
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(palabraEscrita[i] == palabraBuscada[j]){
                //La letra coincide
                console.log('Dentro del if');
                if(i==j){
                    $('#fila' + intentos).children().eq(i).css("background-color", "#41FF00")
                    //puntuaciones
                    puntuacion = puntuacion + 1;
                    $('#marcador').text(puntuacion);
                }
                else{
                    $('#fila' + intentos).children().eq(j).css("background-color", "#D9FF00")
                    //puntuaciones
                    puntuacion = puntuacion - 1;
                    $('#marcador').text(puntuacion);
                }
            }
        }
    }
}

function Guardarnombre(){
    nombreEscrito=[]; 
    { nombreEscrito = nombreEscrito +$('name').children().eq(i).val();
    }
}