function tirarDados()
{
    var select = document.getElementById("select");
    var cantidadDados = select.value;

    var divResultados = document.getElementById("Resultados");
    var nuevoResultado = document.createElement("h3");

    var chikito = document.createElement("small");
    var numeroChikito = document.createTextNode((divResultados.children.length) + ") ");
    chikito.appendChild(numeroChikito);
    nuevoResultado.appendChild(chikito);

    if(cantidadDados == 1)
    {
        var dado = numeroRandom(6);
        var textResultados = document.createTextNode(fraseRandom() + dado + "!");
        nuevoResultado.appendChild(textResultados);
    }
    else if(cantidadDados == 2)
    {
        var dado = numeroRandom(6);
        var dado2 = numeroRandom(6);
        var textResultados = document.createTextNode(fraseRandom2(dado,dado2));
        nuevoResultado.appendChild(textResultados);
    }
    else if(cantidadDados == 3)
    {
        var dado = numeroRandom(6);
        var dado2 = numeroRandom(6);
        var dado3 = numeroRandom(6);
        var textResultados = document.createTextNode(fraseRandom3(dado, dado2, dado3));
        nuevoResultado.appendChild(textResultados);
    }
    else if(cantidadDados == 4)
    {
        var dado = numeroRandom(6);
        var dado2 = numeroRandom(6);
        var dado3 = numeroRandom(6);
        var dado4 = numeroRandom(6);
        var textResultados = document.createTextNode(fraseRandom4(dado, dado2, dado3, dado4));
        nuevoResultado.appendChild(textResultados);
    }
    else
    {
        var textResultados = document.createTextNode(":c");
        nuevoResultado.appendChild(textResultados);
    }

    if(divResultados.children.length === 0)
    {
        divResultados.appendChild(nuevoResultado);
    }
    else
    {
        divResultados.insertBefore(nuevoResultado,divResultados.children[1]);
    }
}

var numeroRandom = function(max)
{
    var num = Math.floor(Math.random() * ((max + 1) - 1) + 1);
    return num;
}

var fraseRandom = function()
{
    var num = numeroRandom(4);
    if(num == 1) return "¡Salió ";
    else if(num == 2) return "¡Ha salido ";
    else if(num == 3) return "¡";
    else if(num == 4) return "¡El dado dice ";
    else return "";
}

var fraseRandom2 = function(dado1, dado2)
{
    var suma = dado1 + dado2;
    var random = numeroRandom(6);
    if(random == 1) return "¡Han salido " + dado1 + " y " + dado2 + "! ¡Eso suma " + suma + "!";
    else if(random == 2) return "¡" + dado1 + " + " + dado2 + " = " + suma + "!";
    else if(random == 3) return "¡" + dado1 + " y " + dado2 + " suman " + suma + "!";
    else if(random == 4) return "¡" + dado1 + " y " + dado2 + " son " + suma + "!";
    else if(random == 5) return "¡Los dados dicen " + dado1 + " y " + dado2 + "! ¡Son " + suma + "!";
    else if(random == 6) return "¡" + dado1 + " y " + dado2 + "! ¡" + suma + "!";
    else return "...";
}

var fraseRandom3 = function(dado1, dado2, dado3)
{
    var suma = dado1 + dado2 + dado3;
    var random = numeroRandom(6);
    if(random == 1) return "¡Han salido " + dado1 + ", " + dado2 + " y " + dado3 + "! ¡Eso suma " + suma + "!";
    else if(random == 2) return "¡" + dado1 + " + " + dado2 + " + " + dado3 + " = " + suma + "!";
    else if(random == 3) return "¡Salieron " + dado1 + ", " + dado2 + " y " + dado3 + "! ¡Son " + suma + "!";
    else if(random == 4) return "¡" + dado1 + ", " + dado2 + " y " + dado3 + "! ¡Suman " + suma + "!";
    else if(random == 5) return "¡Los dados dicen " + dado1 + ", " + dado2 + " y " + dado3 + "! ¡Suman " + suma + "!";
    else if(random == 6) return "¡" + dado1 + ", " + dado2 + " y " + dado3 + "! ¡" + suma + "!";
    else return "...";
}

var fraseRandom4 = function(dado1, dado2, dado3, dado4)
{
    var suma = dado1 + dado2 + dado3 + dado4;
    var random = numeroRandom(6);
    if(random == 1) return "¡Han salido " + dado1 + ", " + dado2 + ", " + dado3 + " y " + dado4 + "! ¡Eso suma " + suma + "!";
    else if(random == 2) return "¡Salieron " + dado1 + ", " + dado2 + ", " + dado3 + " y " +  dado4 + "! ¡Suman " + suma + "!";
    else if(random == 3) return "¡" + dado1 + ", " + dado2 + ", " + dado3 + " y " + dado4 + "! ¡Son " + suma + "!";
    else if(random == 4) return "¡" + dado1 + " + " + dado2 + " + " + dado3 + " + " + dado4 + " = " + suma + "!";
    else if(random == 5) return "¡" + dado1 + ", " + dado2 + ", " + dado3 + " y " + dado4 + "! ¡Suman " + suma + "!";
    else if(random == 6) return "¡Los dados dicen " + dado1 + ", " + dado2 + ", " + dado3 + " y " + dado4 + "! ¡Suman " + suma + "!";
    else return "...";
}
