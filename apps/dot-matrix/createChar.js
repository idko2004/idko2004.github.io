// Crea un bloque que representa un caracter
function createChar()
{
    const charContainer = document.createElement('div');
    charContainer.classList.add('charContainer');

    const char = document.createElement('div');
    char.classList.add('char');

    charContainer.appendChild(char);

    for(let row = 1; row <= verticalDots; row++)
    {
        for(let column = 1; column <= horizontalDots; column++)
        {
            const dot = document.createElement('div');
            dot.classList.add('dot');

            dot.style = `grid-area:${row} / ${column};`;

            dot.setAttribute('row', row);
            dot.setAttribute('column', column);
            
            char.appendChild(dot);

            dot.addEventListener('click', function(e)
            {
                if(e.target.classList.contains('on')) e.target.classList.remove('on');
                else e.target.classList.add('on');
            })
        }
    }

    charList.push(charContainer);
    document.getElementById('container').appendChild(charContainer);
    return charContainer;
}
