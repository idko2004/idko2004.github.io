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
	container.innerHTML = '';

	let velocity = 2000;
	let delayFormula = 0;

	for(let textToAnimIndex = 0; textToAnimIndex < textsToAnim.length; textToAnimIndex++)
	{
		delayFormula += getText(textsToAnim[textToAnimIndex].textId).length;
	}
	delayFormula = velocity/delayFormula;
	let delay = 0;

	for(let textToAnimIndex = 0; textToAnimIndex < textsToAnim.length; textToAnimIndex++)
	{
		let textToAnim = textsToAnim[textToAnimIndex];
		let text = getText(textToAnim.textId);
		let words = text.split(' ');
		for(let wordIndex = 0; wordIndex < words.length; wordIndex++)
		{
			let word = words[wordIndex];
			let wordContainer = document.createElement('div');
			wordContainer.classList.add('word-container');
			for(let i = 0; i < word.length; i++)
			{
				let element;
				if(textToAnim.bold) element = document.createElement('b');
				else element = document.createElement('span');

				element.innerText = word[i];
				
				element.style = `--dancing-text-delay: ${delay}ms; --velocity: ${velocity}ms`;
				element.classList.add('appear-after-delay');
				element.classList.add('dancing-text');
				wordContainer.appendChild(element);
				delay += delayFormula;
			}

			if(wordIndex < words.length - 1)
			{
				let element = document.createElement('span');
				element.innerText = 'a';
				element.classList.add('whitespace');
				wordContainer.appendChild(element);
			}

			container.appendChild(wordContainer);
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

