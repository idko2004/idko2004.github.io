async function setupTipAnimation()
{
	const textsToAnim =
	[
		{
			textId: 'tip',
			bold: true
		},
		{
			textId: 'rightclicktip',
			bold: false
		}
	];

	const container = document.getElementById('tip-animation-container');

	let elementsToAnimate = [];
	let delay = 0;

	for(let textToAnimIndex = 0; textToAnimIndex < textsToAnim.length; textToAnimIndex++)
	{
		let textToAnim = textsToAnim[textToAnimIndex];
		let text = getText(textToAnim.textId);
		for(let i = 0; i < text.length; i++)
		{
			let element;
			if(textToAnim.bold) element = document.createElement('b');
			else element = document.createElement('span');

			element.innerText = text[i];
			
			if(text[i] !== ' ')
			{
				element.style = `--dancing-text-delay: ${delay}ms`;
				element.classList.add('dancing-text');
				elementsToAnimate.push(element);
			}
			container.appendChild(element);
			delay += 50;
		}
	}
/*
	for(let i = 0; i < elementsToAnimate.length; i++)
	{
		elementsToAnimate[i].classList.remove('waiting-to-appear');
		elementsToAnimate[i].classList.add('dancing-text');
		await wait(100);
	}
		*/
}

setupTipAnimation();
