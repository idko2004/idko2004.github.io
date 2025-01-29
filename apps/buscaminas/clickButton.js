function clickButton(e)
{
    if(!canPlay) return;
    startTimer();

    let posX = parseInt(e.target.attributes.xposition.value);
    let posY = parseInt(e.target.attributes.yposition.value);
    let mine = e.target.attributes.mine.value;

    if(mine === 'null') setMines(posX,posY);

    if(mine === 'true') lose();
    else
    {
        console.log(posX,posY, mine);
        let minesAround = setBoxNumber(posY,posX);
        if(minesAround === 0) cleanBoard(posY,posX);
    }
}

function rightClickButton(e)
{
    e.preventDefault();
    if(!canPlay) return;

    let posX = parseInt(e.target.attributes.xposition.value);
    let posY = parseInt(e.target.attributes.yposition.value);
    let mine = e.target.attributes.mine.value;

    if(mine === 'null') setMines(posX,posY);

    if(e.target.innerHTML === '' && !e.target.classList.contains('box-empty'))
    {
        e.target.attributes.marked.value = 'true';
        e.target.innerHTML = '?';
        e.target.className += ' box-marked';
    
        checkedBoxes--;
        document.getElementById('flag').innerHTML = checkedBoxes;
    
        if(mine === 'true') minesLeft--;    
    }
    else if(e.target.innerHTML === '?')
    {
        e.target.attributes.marked.value = 'false';
        e.target.innerHTML = '';

        checkedBoxes++;
        document.getElementById('flag').innerHTML = checkedBoxes;

        if(mine === 'true') minesLeft++;

        e.target.className = e.target.className.replace(' box-marked','');
    }

    if(minesLeft === 0 && checkedBoxes === 0)
    {
        console.log('Ya no quedan minas');
        win();
    }    
}

function setMines(posX,posY)
{
    let target = mines;
    let sizeX = boardX;
    let sizeY = boardY;
    console.log('cantidad de minas a colocar',mines);
    let m = 0;
    for(let i = 0; m < target; i++)
    {
        console.log('colocando minas');
        if(i > sizeX * sizeY)
        {
            //Demasiadas iteraciones
            findOneSpace(posX,posY);
            break;
        }

        let x = randomNumber(sizeX);
        let y = randomNumber(sizeY);
        if(x !== posX && y !== posY)
        {
            if(game[y][x].attributes.mine.value === 'null')
            {
                game[y][x].attributes.mine.value = 'true';
                console.log('mina colocada en',x,y);
                m++;
            }
            else console.log('aquí ya había una mina');
        }
        else console.log('no se puede colocar una mina en la posición del puntero');
        console.log('minas colocadas',m);
    }

    for(let i = 0; i < game.length; i++)
    {
        for(let j = 0; j < game[i].length; j++)
        {
            if(game[i][j].attributes.mine.value === 'null')
            {
                game[i][j].attributes.mine.value = 'false';
            }
        }
    }

    function findOneSpace(posX,posY)
    {
        console.log('Buscando un espacio');
        for(let i = 0; i < game.length; i++)
        {
            for(let j = 0; j < game[i].length; j++)
            {
                if(posX === j && posY === i) continue;
                
                if(m >= target) return;
                let putMineHere = randomNumber(5);
                if(putMineHere > 3)
                {
                    if(game[i][j].attributes.mine.value === 'null')
                    {
                        game[i][j].attributes.mine.value = 'true';
                        console.log('mina colocada en',j,i);
                        m++;
                    }
                }
                else console.log('aquí no colocar minas');
                console.log('minas colocadas',m);
            }
        }
        if(m < target) findOneSpace();
    }
}

function setBoxNumber(posY,posX)
{
    let i = 0;
    if(game[posY][posX].className !== 'box')
    {
        console.log('setboxnumber se va porque esta caja tiene mas propiedades que solo box');
        return null;
    }

    if(game[posY-1] !== undefined)
    {
        if(game[posY-1][posX].attributes.mine.value == 'true') i++;

        if(game[posY-1][posX-1] !== undefined)
        {
            if(game[posY-1][posX-1].attributes.mine.value == 'true') i++;
        }
        if(game[posY-1][posX+1] !== undefined)
        {
            if(game[posY-1][posX+1].attributes.mine.value == 'true') i++;
        }
    }
    if(game[posY][posX-1] !== undefined)
    {
        if(game[posY][posX-1].attributes.mine.value == 'true') i++;
    }
    if(game[posY][posX+1] !== undefined)
    {
        if(game[posY][posX+1].attributes.mine.value == 'true') i++;
    }
    if(game[posY+1] !== undefined)
    {
        if(game[posY+1][posX].attributes.mine.value == 'true') i++;

        if(game[posY+1][posX+1] !== undefined)
        {
            if(game[posY+1][posX+1].attributes.mine.value == 'true') i++;
        }
        if(game[posY+1][posX-1] !== undefined)
        {
            if(game[posY+1][posX-1].attributes.mine.value == 'true') i++;
        }
    }

    if(i > 0) game[posY][posX].innerHTML = i;

    const colorsClass = 
    {
        0: ' box-empty',
        1: ' box-1',
        2: ' box-2',
        3: ' box-3',
        4: ' box-4',
        5: ' box-5',
        6: ' box-6',
        7: ' box-7',
        8: ' box-8',
        9: ' box-9'
    }
    game[posY][posX].className += colorsClass[i];

    return i;
}

function cleanBoard(yClicked,xClicked)
{
    //Sí clickas una casilla y las adyacentes están vacías, se expandan hasta que encuentren una casilla con número.
    console.log('limpiar tablero desde las coordenadas', xClicked, yClicked);
    console.time('tablero limpio');
    let toExpandList = [];
    findLeft(xClicked,yClicked);
    findRight(xClicked,yClicked);
    findUp(xClicked,yClicked);
    findDown(xClicked,yClicked);
    expandFromList();
    console.timeEnd('tablero limpio');
    
    function findLeft(x,y)
    {
        while(true)
        {
            x--;
            if(x < 0) return;
            if(game[y][x].attributes.mine.value === 'true') return;
            else
            {
                let minesAround = setBoxNumber(y,x);
                if(minesAround === null) return;
                if(minesAround > 0) return;
                else addAround(x,y);
            }
        }
    }

    function findRight(x,y)
    {
        while(true)
        {
            x++;
            if(x >= game[y].length) return;
            if(game[y][x].attributes.mine.value === 'true') return;
            else
            {
                let minesAround = setBoxNumber(y,x);
                if(minesAround === null) return;
                if(minesAround > 0) return;
                else addAround(x,y);
            }
        }
    }

    function findUp(x,y)
    {
        while(true)
        {
            y--;
            if(y < 0) return;
            if(game[y][x].attributes.mine.value === 'true') return;
            else
            {
                let minesAround = setBoxNumber(y,x);
                if(minesAround === null) return;
                if(minesAround > 0) return;
                else addAround(x,y);
            }
        }
    }

    function findDown(x,y)
    {
        while(true)
        {
            y++;
            if(y >= game.length) return;
            if(game[y][x].attributes.mine.value === 'true') return;
            else
            {
                let minesAround = setBoxNumber(y,x);
                if(minesAround === null) return;
                if(minesAround > 0) return;
                else addAround(x,y);
            }
        }
    }

    function expandFromList()
    {
        console.log('lista');
        for(let i = 0; i < toExpandList.length; i++)
        {
            let x = toExpandList[i].x;
            let y = toExpandList[i].y;
            findLeft(x,y);
            findRight(x,y);
            findUp(x,y);
            findDown(x,y);
        }
    }

    console.log(toExpandList);

    function addAround(x,y)
    {
        addToList(x-1,y);
        addToList(x-1,y-1);
        addToList(x-1,y+1);
        addToList(x,y-1);
        addToList(x,y+1);
        addToList(x+1,y);
        addToList(x+1,y-1);
        addToList(x+1,y+1);
    }

    function addToList(x,y)
    {
        let obj = {x,y};
        if(isOnBounds() && !isOnList()) toExpandList.push(obj);

        function isOnList()
        {
            for(let i = 0; i < toExpandList.length; i++)
            {
                if(toExpandList[i].x === x && toExpandList[i].y === y) return true;
            }
            return false;
        }

        function isOnBounds()
        {
            if(x < 0) return false;
            if(y < 0) return false;
            if(y >= game.length) return false;
            if(x >= game[y].length) return false;
            return true;
        }
    }
}