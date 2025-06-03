function randomRange(min, max)
{
	if(max === undefined)
	{
		console.log('random.range: no se ha especificado el valor máximo');
		return null;
	}
	if(min === undefined) min = 0;

	return Math.floor(Math.random() * (max - min) + min);
}
