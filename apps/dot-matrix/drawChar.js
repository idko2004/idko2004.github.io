// Dibuja un caracter dentro de un bloque
function drawChar(charToDraw, charListIndex)
{
    const dots = charList[charListIndex].children[0].children;

    let char = charMap[charToDraw];
    if(char === undefined) char = charMap[' '];

    for(let i = 0; i < dots.length; i++)
    {
        const row = parseInt(dots[i].attributes.row.value) - 1;
        const column = parseInt(dots[i].attributes.column.value) - 1;

        const paintThisDot = char[row][column] === 1;

        if(paintThisDot)
        {
            dots[i].classList.add('on');
        }
    }
}

function tryToDraw(charToDraw, charListIndex)
{
    if(charListIndex >= charList.length) return;
    if(charListIndex < 0) return;

    drawChar(charToDraw, charListIndex);
}

function cleanChar(charListIndex)
{
    const dots = charList[charListIndex].children[0].children;

    for(let i = 0; i < dots.length; i++)
    {
        dots[i].classList.remove('on');
    }
}

let firstCharIndex;
function startToDraw()
{
    let speed = parseInt(document.getElementById('speed').value);
    if(isNaN(speed)) return;

    firstCharIndex = charList.length - 1;

    setInterval(function()
    {
        // Limpiar todos los caracteres
        for(let i = 0; i < charList.length; i++) cleanChar(i);

        let textIndex = 0;
        let lastCharIndex;
        for(let i = firstCharIndex; i < charList.length; i++)
        {
            tryToDraw(text[textIndex], i);
            textIndex++;

            if(lastCharIndex === undefined || i + text.length -1 < lastCharIndex) lastCharIndex = i + text.length -1;
        }

        firstCharIndex--;

        if(lastCharIndex < 0) firstCharIndex = charList.length - 1;

    }, speed);
}
