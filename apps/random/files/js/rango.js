(function()
{
    function eventListener()
    {
        var boton = document.getElementById("boton");
        console.log(boton);
        boton.addEventListener("click",aVerQueSale);
    }
    eventListener();


    function aVerQueSale()
    {
        var valorMinimo = document.getElementById("min").value;
        var valorMaximo = document.getElementById("max").value;

        if(valorMinimo > valorMaximo)
        {
            error("min");
            return;
        }
        else if(valorMaximo === valorMinimo)
        {
            error("equals");
            return;
        }
        else error("none");

        var resultado;
        var vueltasDadas = 0;
        while(resultado < valorMinimo || resultado > valorMaximo || resultado == undefined)
        {
            resultado = random(valorMinimo,valorMaximo);
            vueltasDadas++;
            if(vueltasDadas > 100)
            {
                error("loop");
                return;
            }
        }

        var zonaResultados = document.getElementById("resultados");
        if(zonaResultados.children.length == 0)
        {
            var h2 = document.createElement("h2");
            var h2Text = document.createTextNode("Resultados");
            h2.appendChild(h2Text);
            zonaResultados.appendChild(h2);
        }
        var h3 = document.createElement("h3");
        var h3Text = document.createTextNode("¡El resultado es " + resultado + "!");
        var small = document.createElement("small");
        var smallText = document.createTextNode(zonaResultados.children.length + ")");
        small.appendChild(smallText);
        h3.appendChild(small);
        h3.appendChild(h3Text);
        zonaResultados.insertBefore(h3,zonaResultados.children[1]);
    }
}());


var random = function(min, max)
{
    var num = Math.floor((Math.random() * (max - min) ) + min);
    return num;
}


function error(errorName)
{
    var errorZone = document.getElementById("espacio");
    if(errorName == "loop")
    {
        errorZone.innerHTML = "Ha ocurrido un error con los loops";
    }
    else if(errorName == "min")
    {
        errorZone.innerHTML = "El valor mínimo no puede ser mayor que el valor maximo";
    }
    else if(errorName == "equals")
    {
        errorZone.innerHTML = "Los valores no pueden ser iguales";
    }
    else if(errorName == "none")
    {
        errorZone.innerHTML = "";
    }
    else
    {
        errorZone.innerHTML = "Error c:";
    }
}
