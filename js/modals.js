function show(id, e)
{
	e.preventDefault();
	document.getElementById(id).showModal();
}

const cards = document.getElementsByClassName('card');
for(let i = 0; i < cards.length; i++)
{
	cards[i].addEventListener('contextmenu', (e) =>
	{
		show(e.target.getAttribute('right-click'), e);
	});
}
