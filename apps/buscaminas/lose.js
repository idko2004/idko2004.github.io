function lose()
{
    canPlay = false;
    stopTimer();
    let textDiv = document.getElementById('text');
    textDiv.innerHTML = '¡Has perdido!';
    textDiv.className = 'red';
    showMines();
}

function showMines()
{
    canPlay = false;
    for(let i = 0; i < game.length; i++)
    {
        for(let j = 0; j < game[i].length; j++)
        {
            if(game[i][j].attributes.mine.value === 'true')
            {
                game[i][j].innerHTML = '!';
                if(game[i][j].attributes.marked.value === 'true') game[i][j].className += ' box-marked-well';
                else game[i][j].className += ' box-mine';
            }
        }
    }
    return 'Espero que no estés haciendo trampas c:';
}