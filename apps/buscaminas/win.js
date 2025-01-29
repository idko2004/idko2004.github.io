function win()
{
    canPlay = false;
    stopTimer();
    let textDiv = document.getElementById('text');
    textDiv.innerHTML = '¡Has ganado!';
    textDiv.className = 'green';
    showMines();
}