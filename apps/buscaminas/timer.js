function timeDefault()
{
    const obj =
    {
        s: 0,
        m: 0,
        h: 0,
        d: 0
    }
    return obj;
}

let time;
let timerSpace;
let timerActive = false;

function timer()
{
    if(time.s >= 60)
    {
        time.s = 0;
        time.m++;
    }
    if(time.m >= 60)
    {
        time.m = 0;
        time.h++;
    }
    if(time.h >= 24)
    {
        time.h = 0;
        time.d++;
    }

    let text = '';

    if(time.d > 0)
    {
        if(time.d === 1) text += `${time.d} día `;
        else text += `${time.d} días `
    }
    if(time.h > 0)
    {
        if(time.h === 1) text += `${time.h} hora `;
        else text += `${time.h} horas `;
    }
    if(time.m > 0)
    {
        if(time.m === 1) text += `${time.m} minuto `;
        else text += `${time.m} minutos `;
    }
    if(time.s === 1) text += `${time.s} segundo.`;
    else text += `${time.s} segundos.`

    timerSpace.innerHTML = text;

    time.s++;
}

let timerID;

function startTimer()
{
    if(timerActive) return;
    timerActive = true;

    console.log('Iniciando un nuevo temporizador');
    time = timeDefault();
    timerSpace = document.getElementById('timer');
    timer();
    timerID = setInterval(timer,1000);
}

function stopTimer()
{
    timerActive = false;
    if(timerID === undefined) return;
    clearInterval(timerID);
}