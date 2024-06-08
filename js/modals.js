//	Animations
const modalAnimationList =
{
	'modal-mdview':
	{
		openClass: 'anim-generic-zoom-in',
		openAnim: 'generic-zoom-in',
		closeClass: 'anim-generic-zoom-out',
		closeAnim: 'generic-zoom-out'
	},
	'modal-unidad':
	{
		openClass: 'anim-unidad-open',
		openAnim: 'unidad-open',
		closeClass: 'anim-unidad-close',
		closeAnim: 'unidad-close'
	},
	'modal-colonthreebot':
	{
		openClass: 'anim-generic-scalex-open',
		openAnim: 'generic-scalex-open',
		closeClass: 'anim-generic-scalex-close',
		closeAnim: 'generic-scalex-close'
	}
}

let dialogOpened; //Save the current opened dialog

async function animateModal(modal, id, open)
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

		let classname = modalAnimationList[id][actionClass];
		let animname = modalAnimationList[id][actionAnim];

		let animationListener = modal.addEventListener('animationend', (e) =>
		{
			if(e.animationName !== animname) return;

			modal.classList.remove(classname);
			modal.removeEventListener("animationend", animationListener);
			good();
		});

		modal.classList.add(classname);
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
		let modal = document.getElementById(id);

		modal.showModal();
		animateModal(modal, id, true);
		dialogOpened = id;
	});
}

//	To make the modals close
async function closeModal(modal, modalID)
{
	await animateModal(modal, modalID, false);
	modal.close();
	dialogOpened = null;
}

//	To make the modals close clicking the close button
const closeModalButtons = document.getElementsByClassName('closemodal');
for(let i = 0; i < closeModalButtons.length; i++)
{
	closeModalButtons[i].addEventListener('click', (e) =>
	{
		const modalID = e.target.getAttribute('modalparent');
	
		const modal = document.getElementById(modalID);
	
		closeModal(modal, modalID);
	});
}

//	To make the modals close by clicking outside
const dialogs = document.getElementsByTagName('dialog');
for(let i = 0; i < dialogs.length; i++)
{
	dialogs[i].addEventListener('click', (e) =>
	{
		if(e.target.id !== dialogOpened) return;
		closeModal(e.target, e.target.id);
	});
}