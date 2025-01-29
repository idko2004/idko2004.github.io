var imagenDados;

(function()
{
    imagenDados = document.getElementById("diceImage");
    imagenDados.addEventListener("mouseover",grande);
    imagenDados.addEventListener("mouseout",chikito);
}())

function grande()
{
    imagenDados.className = "animHover";
}

function chikito()
{
    imagenDados.className = "animNotHover";
}
