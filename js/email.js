const email = 'ivankeudell@gmail.com';

let emailLink = document.getElementById('email-link');

emailLink.setAttribute('href', '#');
emailLink.removeAttribute('target');

emailLink.addEventListener('click', function(e)
{
	e.preventDefault();

	const id = 'modal-email'
	const modal = document.getElementById(id);

	modal.showModal();
	animateModal(modal, id, true);
	dialogOpened = id;
});

delete emailLink;

document.getElementById('email-copy').addEventListener('click', function()
{
	try
	{
		navigator.clipboard.writeText(email);
	}
	catch
	{
		alert(allTexts['unabletocopy'][lang]);
	}
	closeModal(document.getElementById('modal-email'), 'modal-email');
});

document.getElementById('email-send').addEventListener('click', async function()
{
	await closeModal(document.getElementById('modal-email'), 'modal-email');

	const a = document.createElement('a');
	a.style.display = 'none';
	a.setAttribute('href', `mailto:${email}`);
	a.setAttribute('target', '_blank');

	document.body.appendChild(a);
	a.click();
	a.remove();
});
