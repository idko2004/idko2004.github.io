document.getElementById('showsmallprojects').addEventListener('click', async (eClick) =>
{
	//Animar el botón desapareciendo
	eClick.target.addEventListener('animationend', (eAnimationEnd) =>
	{
		if(eAnimationEnd.animationName === 'generic-zoom-out')
		{
			eAnimationEnd.target.remove();
			showNewSection('smallprojectssection');
		}
	});

	eClick.target.classList.add('anim-generic-zoom-out');
});

function showNewSection(section)
{
	const element = document.getElementById(section);
	const animationend = element.addEventListener('animationend', (e) =>
	{
		if(e.animationName === 'generic-zoom-in') element.classList.remove('anim-generic-zoom-in');
		element.removeEventListener('animationend', animationend);
	});
	element.classList.add('anim-generic-zoom-in');
	element.hidden = false;
}
