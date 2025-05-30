let emailLink = document.getElementById('email-link');

emailLink.removeAttribute('href');
emailLink.removeAttribute('target');

emailLink.addEventListener('click', function(e)
{
	const id = 'modal-email'
	const modal = document.getElementById(id);

	modal.showModal();
	animateModal(modal, id, true);
	dialogOpened = id;
});