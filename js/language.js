let lang = 'es';
const supportedLanguages = ['es', 'en'];

const allTexts =
{
	'windowtitle': {es: 'La idko página', en: "idko's projects"},
	'chlang': {es: 'Change language', en: 'Cambiar idioma'},
	'welcometo': {es: 'Bienvenido a', en: 'Welcome to'},
	'maintitle': {es: 'La idko página', en: "idko's projects"},
	'tip': {es: 'Consejo: ', en: 'Tip: '},
	'rightclicktip': {es: 'Haz click derecho (o mantén pulsado) sobre un projecto para ver sus detalles.', en: 'Right-click (or hold) a project to see details'},
	'projects': {es: 'Proyectos', en: 'Projects'},
	'smallerprojects': {es: 'Proyectos más pequeños', en: 'Smaller projects'},
	'musicrecomend': {es: 'Recomendación de música', en: 'Music recomendation'},
	'playicon': {es: 'Icono de reproducir', en: 'Play icon'},
	'listenyt': {es: 'Escuchar en Youtube Music', en: 'Listen in Youtube Music'},
	'nodelibs': {es: 'Librerías en node.js:', en: 'Node.js libraries:'},
	'tmdview': {es: 'md-view: Visualizador de Markdown', en: 'md-view: Markdown Viewer'},
	'tunidad': {es: 'Unidad: Juego de cartas LAN', en: 'Unidad: LAN cards game'},
	'tcolonthree': {es: 'colon-three-bot: Un bot que hace :3', en: 'colon-three-bot: A Discord bot that does :3'},
	'tsanta': {es: 'Secret Santa: Organiza un santa secreto con tus amigos en Discord', en: 'Secret Santa: Organize a secret santa between your friends on discord'},
	'tmatrix': {es: 'Dot Matrix: "Simulador" de una pantalla dot matrix', en: 'Dot Matrix: "Simulating" a dot matrix screen'},
	'tconvertmusic': {es: 'convertMusic: Usa ffmpeg para convertir una carpeta de archivos en un formato a otro', en: 'convertMusic: Use ffmpeg to convert a folder of one type of files to another'},
	'trandomc': {es: 'random-c: Genera un número aleatorio', en: 'random-c: Generate a random number'},
	'albumcover': {es: 'Carátula del álbum recomendado', en: 'Cover of the recomended album'},
	'mmdview1': {es: 'md-view es un visualizador de markdown para el navegador.', en: 'md-view is a markdown reader for the browser.'},
	'mmdview2': {es: 'Lo hice porque no podía encontrar un lector de markdown que pudiera guardar pdfs, no fuese feo, dejase cambiar la fuente y no fuese difícil de instalar.', en: "I made it because i couldn't find a markdown reader that could save pdfs, wasn't ugly, let me change the font and wasn't a pain to install."},
	'mmdview3': {es: 'Es un simple visualizador, no puede editar archivos, y seguramente ni sea del todo compatible con markdown, pero para archivos .md que sean simples, suele funcionar.', en: "It's just a simple reader, it can't edit files, and it isn't full compatible with markdown (may not even be markdown compliant, idk), but for simple .md files, it mostly works."},
	'madewithhelp': {es: 'Hecho con la ayuda de:', en: 'Made with the help of:'},
	'munidad1': {es: 'Unidad es un juego de cartas similar a uno con un nombre muy tonto que se puede jugar con otros en tu red local.', en: "Unidad is a cards game similar to UNO with a very dumb name that you can play with others in your local network."},
	'munidad2': {es: 'Nadie sabe jugar al UNO con las reglas oficiales, ¿verdad? Pues esto es básicamente UNO pero con las reglas de mi casa (bueno, no necesariamente de mi casa, pero se entiende, además, seguro que conoces alguna).', en: "Do you know how nobody plays UNO with the official rules? Well, this is basically UNO but with the rules I'm used to play with (although you surely may know some of them)."},
	'munidad3': {es: 'También hay ', en: "Also, there are "},
	'munidad4': {es: 'cartas más especiales', en: "more special cards"},
	'munidad5': {es: ', estas son cartas nuevas de este juego.', en: ", these are new cards from this game."},
	'munidad6': {es: 'Para jugar, necesitas inicar el servidor (también se puede inicar en termux, funciona bien), el servidor te dirá la dirección ip de la red local, ingresa a esa dirección en el dispositivo que quieras jugar, y dile a tus amigos que hagan lo mismo. Ahora pueden jugar juntos!!!', en: "To play, you need to iniciate the server (works great on termux), the server will tell you your ip address in your local network, access to that ip from your favorite web browser, and tell your friend to do the same. Now you can play together!!!"},
	'm:31': {es: 'colon-three-bot es un bot de Discord que hace :3.', en: 'colon-three-bot is a Discord bot that does :3.'},
	'm:32': {es: 'Si envías algunos emoticonos, también responderá con esos mismos emoticonos.', en: 'It will reply with certain emoticons if it finds them in a message.'},
	'm:33': {es: 'Algunos emoticonos son:', en: 'Some of them are:'},
	'm:34': {es: 'También hay emoticonos tristes:', en: 'There are also sad ones:'},
	'm:35': {es: 'Para configurarlo se necesita crear un bot en el Portal de Desarrolladores de Discord, consulta la guía disponible en la página de GitHub.', en: 'For setting it up you will need to create a Discord bot (There are steps are detailed in the GitHub page).'},
	'msanta1': {es: 'Secret santa es un bot de Discord para hacer un santa secreto.\n(Explicación de santa secreto: Todos los participantes reciben el nombre de una persona en sus mensajes privados, preparan un regalo para esta persona y se lo entregan el dia de nochebuena).', en: 'Secret santa is a Discord bot for doing a... secret santa.'},
	'msanta2': {es: 'Cómo funciona:', en: 'The way it works is:'},
	'msanta3': {es: 'El bot envía un mensaje en un canal especificado, como en #anuncios.', en: 'It sends a message in the specified channel, like #annoucements or something.'},
	'msanta4': {es: 'La gente que quiera participar reacciona a ese mensaje con un emoji.', en: 'The people who wants to participate react to the message with a specific emoji.'},
	'msanta5': {es: 'Si tienen el rol requerido (que es opcional), el bot les otorga otro rol.', en: 'If the participant has the requiered role (optional), another role is given to them.'},
	'msanta6': {es: 'Ese rol debe estar configurado de forma que de acceso a otro canal para el evento del santa secreto.', en: 'You should set up that role in a way that it gives access to a secret santa channel.'},
	'msanta7': {es: 'Cuando quién esté a cargo pulse el botón de enviar santas, los participantes recibirán el nombre de usuario de la persona a la que deben prepararle un regalo. (Por favor, avísen a los que quieran participar que dejen abierto sus mensajes privados o el bot no les podrá hablar).', en: 'When you click the send santas button, the participants will receive their santa in their DMs (please tell everyone to keep their DMs open).'},
	'mmatrix1': {es: 'Dot Matrix es una simple página web que simula una pantalla de matriz de puntos.', en: 'Dot Matrix is just a simple webpage that simulates a Dot matrix display billboard.'},
	'mmatrix2': {es: 'Lo hice porque pensé que sería divertido.', en: 'I made it because i thought it would be fun.'},
	'mcm1': {es: 'convertMusic es un pequeño programa para node.js que convierte archivos en una carpeta de un formato a otro usando ffmpeg.', en: 'convertMusic is a little node.js program that converts files in a folder to another format using ffmpeg.'},
	'mcm2': {es: 'Por ejemplo: imagina que la radio de tu auto solo funciona con archivos mp3, pero tienes toda tu música en archivos opus, en vez de convertirlos uno por uno usando ffmpeg, puedes usar esto.', en: 'Like, for example, imagine that your car has a cheap stereo system that only works with mp3 files, but all your music files are in opus, instead of converting them one by one with ffmpeg, you can just use this program.'},
	'mcm3': {es: 'Lo único que hace este programa es ejecutar "ffmpeg -i input.opus output.mp3" por cada archivo en una carpeta.', en: 'This program is basically a glorified way of running "ffmpeg -i input.opus output.mp3", I mean, that\'s literally what it does, but for each file in a folder.'},
	'mrandom1': {es: 'random-c es mi primer programa escrito en C.', en: 'random-c is my first program written in the C language'},
	'mrandom2': {es: 'Elige de forma aleatoria una de las opciones proporcionadas en los argumentos. O un número random con la flag -d.', en: 'It chooses one of the options you give in the arguments. Or a random number if you use the -d flag.'},
	'mrandom3': {es: 'También se puede usar con archivos usando la flag -f, o se puede leer la salida de otro programa con la flag -p.', en: 'Can choose from a file with the -f flag, or be piped to another program with the -p flag.'}
}

const langmodal = document.getElementById('modal-language');

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

function setLanguage(l)
{
	lang = l;
	updateAllTexts();
	location.hash = l;
}

function setLanguageBtn(l)
{
	closeModal(langmodal, 'modal-language');
	setLanguage(l);
}

function setLangByBrowser()
{
	let browserLang = navigator.language.split('-')[0];
	if(!supportedLanguages.includes(browserLang)) setLanguage('es');
	else setLanguage(browserLang);
}

function setLangAtStartup()
{
	if(location.hash === '' || location.hash === '#') setLangByBrowser();
	let h = location.hash;

	h = h.replace('#', '');
	if(supportedLanguages.includes(h)) setLanguage(h);
	else setLangByBrowser();
}

setLangAtStartup();

document.getElementById('langbtn').addEventListener('click', () =>
{
	langmodal.showModal();
	animateModal(langmodal, 'modal-language', true);
	dialogOpened = 'modal-language';
});
document.getElementById('langbtn').hidden = false;
