const primaryColors = ["#1c71d8", "#2ec27e", "#e66100", "#c01c28", "#813d9c", "#77767b", "#4646D3", "#2626C8", "#9629BD", "#113FA8"];
const secondaryColors = ["#1a5fb4", "#26a269", "#c64600", "#a51d2d", "#613583", "#241f31", "#E6AC00", "#B9C500", "#335DBE"];

const color1 = primaryColors[randomRange(0, primaryColors.length - 1)];
const color2 = secondaryColors[randomRange(0, secondaryColors.length - 1)];
const rotation = randomRange(0, 345);

console.log({color1, color2, rotation});

document.body.setAttribute("style", `--bg-gradient-1: ${color1}; --bg-gradient-2: ${color2}; --bg-rotation: -${rotation}deg`);
