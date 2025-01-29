//Código copiado de internet porque no se hacer cosas, gracias al que haya hecho esto
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      e.preventDefault();
      AñadirElementos();
    }
  }))
});



var lista = [];
//var indexLista = 0;
var cantidadGanadores = 0;

(function()
{
    document.getElementById("campoDeTexto").focus();
}())


function AñadirElementos()
{
    var campoDeTexto = document.getElementById("campoDeTexto");
    var textValue = campoDeTexto.value;
    var copyTextValue;
    for(i=0;i<textValue.length;i++)
    {
        
    }
    var espacio = document.getElementById("espacio");

    campoDeTexto.focus();
    campoDeTexto.value = "";
    if(!comprobarTextValue(textValue)) return;
    lista[lista.length] = textValue;

    if(lista.length === 1) crearTextoParticipantes();
    else if(lista.length === 2)
    {
        var botonParaElegir = document.createElement("input");
        botonParaElegir.setAttribute("type","button");
        botonParaElegir.setAttribute("id","botónElegir");
        botonParaElegir.setAttribute("value","¡A ver que sale!");
        botonParaElegir.addEventListener("click",ElegirGanador);

        var parteDelFinal = document.getElementById("parteDelFinal");
        parteDelFinal.insertBefore(botonParaElegir,parteDelFinal.children[0]);
    }
    nuevoElemento(lista.length - 1);
}


var comprobarTextValue = function(textValue)
{
    if(textValue == "")
    {
        espacio.innerHTML = "¡Escribe algo!";
        return false;
    }
    espacio.innerHTML = "";
    return true;
}


function nuevoElemento(indexLista)
{
    var cosasAñadidas = document.getElementById("cosasAñadidas");
    var nuevoElemento = document.createElement("p");
    var numeroChikito = document.createElement("small");
    var numeroChikitoText = document.createTextNode((indexLista + 1) + ")");
    var texto = lista[indexLista];
    var a = document.createElement("a");
    var aText = document.createTextNode(texto);
    a.appendChild(aText);
    a.className = "elemento";
    a.addEventListener("click",borrarElemento);
    a.setAttribute("title","Haz click para eliminar a " + texto);
    numeroChikito.appendChild(numeroChikitoText);
    nuevoElemento.appendChild(numeroChikito);
    nuevoElemento.appendChild(a);
    cosasAñadidas.appendChild(nuevoElemento);
}


function crearTextoParticipantes()
{
    var cosasAñadidas = document.getElementById("cosasAñadidas");
    var child = cosasAñadidas.children[0];
    if(child != undefined && child.tagName == "H2") return;
    var titulo = document.createElement("h2");
    var tituloTexto = document.createTextNode("Participantes");
    titulo.appendChild(tituloTexto);
    cosasAñadidas.appendChild(titulo);
}


function borrarElemento()
{
    var smallText = this.parentNode.children[0].innerHTML;
    var indexEnLista = smallText[0] - 1;
    lista[indexEnLista] = undefined;

    var copyList = [];
    var copyIndex = 0;
    for(i = 0; i < lista.length; i++)
    {
        if(lista[i] != undefined)
        {
            copyList[copyList.length] = lista[i];
        }
    }
    lista = copyList;
    var cosasAñadidas = document.getElementById("cosasAñadidas");
    cosasAñadidas.innerHTML = "";
    if(lista.length > 0) crearTextoParticipantes();
    for(i = 0; i < lista.length; i++)
    {
        nuevoElemento(i);
    }

    if(lista.length == 1)
    {
        var boton = document.getElementById("botónElegir");
        boton.parentNode.removeChild(boton);
    }
}


function ElegirGanador()
{
    if(lista.length <= 1) return;
    var ganador;
    var parteDelFinal = document.getElementById("parteDelFinal");

    while(ganador === undefined)
    {
        ganador = elegirGanador();
    }

    if(cantidadGanadores == 0)
    {
        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode("Resultados");
        h2.appendChild(h2Text);
        parteDelFinal.appendChild(h2);
    }

    cantidadGanadores++;
    var numeroChikito = document.createElement("small");
    var numeroChikitoText = document.createTextNode(cantidadGanadores + ") ");
    numeroChikito.appendChild(numeroChikitoText);
    var parrafoGanador = document.createElement("h3");
    var textoGanador = document.createTextNode(fraseRandomParaGanador() + ganador + "!");
    parrafoGanador.appendChild(numeroChikito);
    parrafoGanador.appendChild(textoGanador);
    var hijosDelFinal = parteDelFinal.children;
    parteDelFinal.insertBefore(parrafoGanador,hijosDelFinal[2]);
}


var elegirGanador = function()
{
    var index = random(lista.length) - 1;
    var ganador = lista[index];
    return ganador;
}


var random = function(max)
{
    console.log('RANDOM NUMBER GENERATOR: max ' + max);
    var asdf = max ** 2;
    var rand = Math.floor(Math.random() * ((asdf + 1) - 1) + 1);
    console.log('random generated:' + rand);
    while(rand > max)
    {
        rand -= max;
        console.log(rand);
    }
    console.log('RNG return ' + rand);
    return rand;
}


var numberLenght = function(number)
{
    var index = 0;
    while(number[index] != undefined) index++;
    return index;
}


var fraseRandomParaGanador = function()
{
    var numero = random(9);
    switch(numero)
    {
        case 0: return "¡La fortuna sonríe a ";
        case 1: return "¡Le ha tocado a ";
        case 2: return "¡";
        case 3: return "¡Salió ";
        case 4: return "¡El elegido es ";
        case 5: return "¡Felicidades ";
        case 6: return "¡Qué suerte tiene ";
        case 7: return "¡Ha salido ";
        case 8: return "¡Ha ganado ";
        default: return "¡El ganador es ";
    }
}
