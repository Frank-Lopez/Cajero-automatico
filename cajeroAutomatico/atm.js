
var imagenes = [];
imagenes[100] = "img/billetede-100.png" ;
imagenes[50] = "img/billetede-50.png" ;
imagenes[20] = "img/billetede-20.png";
imagenes[10] = "img/billetede-10.png";
imagenes[5] = "img/billetede-5.png";
imagenes[2] = "img/billetede-2.png";
imagenes[1] = "img/billetede-1.png";


var div = 0; 
var dinero = 0;
var papeles = 0;


class Billetes{
    constructor( valor, cantidad)
    {
        this.imagen = new Image();
        this.valor = valor;
        this.cantidad = cantidad;

        this.imagen.src = imagenes[this.valor];
    }
}

var entregado =[];

var caja = [];
caja.push(new Billetes( 100, 100));
caja.push(new Billetes( 50, 20));
caja.push(new Billetes( 20, 15 ));
caja.push(new Billetes( 10, 30));
caja.push(new Billetes( 5,  10));
caja.push(new Billetes( 2,  50));
caja.push(new Billetes( 1,  10));


function entregardinero()
{

    var t = document.getElementById("dinero");

    dinero = parseInt(t.value);
    //Recorriendo la caja 
    for (var bi of caja) {

        if (dinero > 0) {
    //Sacando la cantidad de billetes
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad){

                papeles = bi.cantidad;

            }else{
                papeles = div;
            }
            //Guardando los billetes que va a mostrar
            entregado.push(new Billetes(bi.valor, papeles));
            //Restando a dinero
            dinero -= (bi.valor * papeles);
        }

    }
    if (dinero > 0) {

        resultado.innerHTML = " Billetes insuficientes "; 
    }else{
        for (var e of entregado) {
            if(e.cantidad > 0){
                for( var i = 0; i < e.cantidad; i++)
                {        
                resultado.innerHTML += "<img src=" + imagenes[e.valor] + " />"+ "<br/>"  + e.cantidad + " Billetes de $ " + e.valor + "<br/>" ; 
                }
            }    
        }
    }
}


var resultado = document.getElementById("resultado");
var btn = document.getElementById("extraer");
btn.addEventListener("click", entregardinero);

