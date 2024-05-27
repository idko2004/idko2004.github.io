function randomRange(min, max)
{
	if(max === undefined)
	{
		console.log('random.range: no se ha especificado el valor máximo');
		return null;
	}
	if(min === undefined) min = 0;

	let n = max ** 2;

	let r = Math.floor(Math.random() * (n - min) + min);

	while(r > max)
	{
		r -= max;
	}

	if(r < min)
	{
		console.log('random.range: resultado es < min');
		r = max - 1;
	}

	if(r > max)
	{
		console.log('random.range: el resultado es > max');
		r = min;
	}

	return r;
}
