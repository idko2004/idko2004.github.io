const primaryColors = ["#3584e4", "#33d17a", "#f5c211", "#ffa348", "#ed333b", "#9141ac", "#3d3846"];
const secondaryColors = ["#073873", "#036F3E", "#8E6400", "#782A00", "#a51d2d", "#5C000B", "#1B142B"];

let i1 = 0;
let i2 = 0;

do
{
	i1 = randomRange(0, primaryColors.length - 1);
	i2 = randomRange(0, secondaryColors.length - 1);
} while(i1 == i2)

const color1 = primaryColors[i1];
const color2 = secondaryColors[i2];
const rotation = randomRange(0, 80);

console.log({color1, color2, rotation});

document.body.setAttribute("style", `--bg-gradient-1: ${color1}; --bg-gradient-2: ${color2}; --bg-rotation: -${rotation}deg`);
