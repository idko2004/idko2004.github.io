let game = [];
let boardX = 0;
let boardY = 0;
let mines = 0;

let canPlay = false;
let minesLeft = 0;
let checkedBoxes = 0;

function play()
{
    boardX = parseInt(document.getElementById('sizeBoardX').value);
    boardY = parseInt(document.getElementById('sizeBoardY').value);
    mines = parseInt(document.getElementById('totalMines').value);
    
    let txt = document.getElementById('text');
    if(isNaN(boardX) || isNaN(boardY) || isNaN(mines) ||boardX < 3 || boardX > 100 || mines < 1 || mines > ((boardX * boardY) - (boardX + boardY))) return boardOutOfBounds();

    const table = document.getElementById('table');
    table.innerHTML = '';
    table.className = 'table-size';

    stopTimer();

    minesLeft = mines;
    checkedBoxes = mines;

    document.getElementById('flag').innerHTML = checkedBoxes;

    txt.innerHTML = '';
    txt.className = '';


    let timerDiv = document.getElementById('timer');
    timerDiv.innerHTML = '0 segundos';
    timerDiv.className = '';

    canPlay = true;

    createTable(boardY,boardX);

    function boardOutOfBounds()
    {
        txt.innerHTML = 'El tablero está fuera de los límites';
        txt.className = 'red';
    }
}

function createTable(Xlength,Ylength)
{
    //La x y la y están al revés, creo
    game = [];
    let table = document.getElementById('table');
    for(let i = 0; i < Xlength; i++)
    {
        game[i] = [];
        for(let j = 0; j < Ylength; j++)
        {
            let button = document.createElement('button');
            button.setAttribute('class', 'box');
            button.setAttribute('xposition',j);
            button.setAttribute('yposition',i);
            button.setAttribute('mine', 'null');
            button.setAttribute('marked', 'false');
            button.addEventListener('click', function(e){clickButton(e);});
            button.addEventListener('contextmenu',function(e){rightClickButton(e);});
            game[i][j] = button;
            table.appendChild(button);
        }
        let br = document.createElement('br');
        table.appendChild(br);
    }
}

function randomNumber(max)
{
    return Math.floor(Math.random() * (max - 1) + 1);
}

