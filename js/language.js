let lang = 'es';

const allTexts =
{
	'welcometo': {es: 'Bienvenido a', en: 'Welcome to'},
	'maintitle': {es: 'La idko página', en: "idko's projects"},
	'tip': {es: 'Consejo: ', en: 'Tip: '},
	'rightclicktip': {es: 'Haz click derecho (o mantén pulsado) sobre un projecto para ver sus detalles.', en: 'Right-click (or hold) a project to see details'},
	'projects': {es: 'Proyectos', en: 'Projects'},
	'smallerprojects': {es: 'Proyectos más pequeños', en: 'Smaller projects'},
	'musicrecomend': {es: 'Recomendación de música', en: 'Music recomendation'},
	'playicon': {es: 'Icono de reproducir', en: 'Play icon'},
	'listenyt': {es: 'Escuchar en Youtube Music', en: 'Listen in Youtube Music'},
	'tmdview': {es: 'md-view: Visualizador de Markdown', en: 'md-view: Markdown Viewer'},
	'tunidad': {es: 'Unidad: Juego de cartas LAN', en: 'Unidad: LAN cards game'},
	'tcolonthree': {es: 'colon-three-bot: Un bot que hace :3', en: 'colon-three-bot: A Discord bot that does :3'},
	'tsanta': {es: 'Secret Santa: Organiza un santa secreto con tus amigos en Discord', en: 'Secret Santa: Organize a secret santa between your friends on discord'},
	'tmatrix': {es: 'Dot Matrix: "Simulador" de una pantalla dot matrix', en: 'Dot Matrix: "Simulating" a dot matrix screen'},
	'tconvertmusic': {es: 'convertMusic: Usa ffmpeg para convertir una carpeta de archivos en un formato a otro', en: 'convertMusic: Use ffmpeg to convert a folder of one type of files to another'},
	'trandomc': {es: 'random-c: Genera un número aleatorio', en: 'random-c: Generate a random number'},
	'albumcover': {es: 'Carátula del álbum recomendado', en: 'Cover of the recomended album'}
}

function updateAllTexts()
{
	updateTextsByTxtClass();
	updateAltTexts();
	updateHoverTexts();
}

function updateTextsByTxtClass()
{
	const elements = document.getElementsByClassName('txt');
	for(let i = 0; i < elements.length; i++)
	{
		elements[i].innerText = allTexts[elements[i].getAttribute('txt')][lang];
	}
}

function updateAltTexts()
{
	const elements = document.getElementsByClassName('alttxt');
	for(let i = 0; i < elements.length; i++)
	{
		elements[i].alt = allTexts[elements[i].getAttribute('alttxt')][lang];
	}
}

function updateHoverTexts()
{
	const elements = document.getElementsByClassName('titletxt');
	for(let i = 0; i < elements.length; i++)
	{
		elements[i].title = allTexts[elements[i].getAttribute('titletxt')][lang];
	}
}

updateAllTexts();
