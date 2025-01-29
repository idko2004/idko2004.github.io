//const primaryColors = ["#1c71d8", "#2ec27e", "#e66100", "#c01c28", "#813d9c", "#77767b", "#4646D3", "#2626C8", "#9629BD", "#113FA8"];
//const secondaryColors = ["#1a5fb4", "#26a269", "#c64600", "#a51d2d", "#613583", "#241f31", "#E6AC00", "#B9C500", "#335DBE"];

const bgColorList =
[
	["#1c71d8", "#1a5fb4"],
	["#1c71d8", "#26a269"],
	["#1c71d8", "#c64600"],
	["#1c71d8", "#a51d2d"],
	["#1c71d8", "#613583"],
	["#1c71d8", "#e6ac00"],
	["#1c71d8", "#2ec27e"],
	["#2ec27e", "#1a5fb4"],
	["#2ec27e", "#613583"],
	["#2ec27e", "#335dbe"],
	["#e66100", "#1a5fb4"],
	["#e66100", "#613583"],
	["#e66100", "#335DBE"],
	["#c01c28", "#1a5fb4"],
	["#c01c28", "#335DBE"],
	["#813d9c", "#1a5fb4"],
	["#813d9c", "#26a269"],
	["#813d9c", "#E6AC00"],
	["#813d9c", "#335DBE"],
	["#77767b", "#1a5fb4"],
	["#77767b", "#26a269"],
	["#77767b", "#613583"],
	["#77767b", "#335DBE"],
	["#4646D3", "#26a269"],
	["#4646D3", "#c64600"],
	["#4646D3", "#613583"],
	["#4646D3", "#335DBE"],
	["#2626C8", "#26a269"],
	["#2626C8", "#E6AC00"],
	["#9629BD", "#1a5fb4"],
	["#9629BD", "#26a269"],
	["#9629BD", "#E6AC00"],
	["#9629BD", "#335DBE"],
	//
	["#113FA8", "#26a269"],
	["#113FA8", "#613583"],
	["#113FA8", "#335DBE"]
];

const colorsIndex = randomRange(0, bgColorList.length - 1);
//const colorsIndex = bgColorList.length - 1;

const color1 = bgColorList[colorsIndex][0];
const color2 = bgColorList[colorsIndex][1];
const rotation = randomRange(0, 345);

console.log({color1, color2, rotation});

document.body.setAttribute("style", `--bg-gradient-1: ${color1}; --bg-gradient-2: ${color2}; --bg-rotation: -${rotation}deg`);
