let text = "";

let horizontalDots = 5;
let verticalDots = 7;

const charList = [];

document.getElementById('start').addEventListener('click', function()
{
    const fieldValue = document.getElementById('textField').value.toUpperCase().trim();
    if(fieldValue === '') return;

    text = fieldValue;

    document.getElementById('enterText').hidden = true;
    document.getElementById('container').hidden = false;

    generateCanvas();
    startToDraw();
});

//generateCanvas();

function generateCanvas()
{
    const char = createChar();

    const width = parseFloat(window.getComputedStyle(char).getPropertyValue('width'));
    const padding = parseFloat(window.getComputedStyle(char).getPropertyValue('padding'));
    const margin = parseFloat(window.getComputedStyle(char).getPropertyValue('margin'));
    const border = parseFloat(window.getComputedStyle(char).getPropertyValue('border'));

    const charWidth = width + (padding * 2) + (margin * 2) + (border * 2);

    console.log(`${width}+${padding*2}+${margin*2}+${border*2} = ${charWidth}`);

    const screenWidth = window.innerWidth;

    let screenAvailable = screenWidth - charWidth;
    let howManyChars = 0;

    while(screenAvailable > charWidth)
    {
        howManyChars++;
        screenAvailable -= charWidth;

        console.log('Calculating chars space', howManyChars, screenAvailable);
    }

    console.log('Se crearán', howManyChars);

    for(let i = 0; i < howManyChars; i++)
    {
        createChar();
        console.log(i);
    }
}

//startToDraw();
