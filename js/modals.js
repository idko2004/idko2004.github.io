//	Animations
const cardAnimationList =
{
	'modal-mdview':
	{
		openClass: 'anim-generic-zoom-in',
		openAnim: 'generic-zoom-in',
		closeClass: 'anim-generic-zoom-out',
		closeAnim: 'generic-zoom-out'
	}
}

async function animateCard(card, id, open)
{
	return new Promise((good, bad) =>
	{
		let actionClass;
		let actionAnim;
		if(open)
		{
			actionClass = 'openClass';
			actionAnim = 'openAnim';
		}
		else
		{
			actionClass = 'closeClass';
			actionAnim = 'closeAnim';
		}

		let classname = cardAnimationList[id][actionClass];
		let animname = cardAnimationList[id][actionAnim];

		let animationListener = card.addEventListener('animationend', (e) =>
		{
			if(e.animationName !== animname) return;

			card.classList.remove(classname);
			card.removeEventListener("animationend", animationListener);
			good();
		});

		card.classList.add(classname);
	});
}

//	To make the cards appear
const cards = document.getElementsByClassName('card');
for(let i = 0; i < cards.length; i++)
{
	cards[i].addEventListener('contextmenu', async (e) =>
	{
		e.preventDefault();

		let id = e.target.getAttribute('right-click');
		let card = document.getElementById(id);

		card.showModal();
		animateCard(card, id, true);
	});
}

//	To make the cards close
async function closeCardByAttribute(e)
{
	const modalID = e.target.getAttribute('modalparent');
	
	const card = document.getElementById(modalID);

	await animateCard(card, modalID, false);
	card.close();
}

const closeModalButtons = document.getElementsByClassName('closemodal');
for(let i = 0; i < closeModalButtons.length; i++)
{
	closeModalButtons[i].addEventListener('click', (e) =>
	{
		closeCardByAttribute(e);
	});
}
