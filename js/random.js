function randomRange(min, max)
{
	if(max === undefined)
	{
		console.log('random.range: no se ha especificado el valor máximo');
		return null;
	}
	if(min === undefined) min = 0;

	//return Math.floor(Math.random() * (max - min) + min);

	//https://stackoverflow.com/a/42321673
	const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}
