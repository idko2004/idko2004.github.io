let lang = 'es';
const supportedLanguages = ['es', 'en'];

const allTexts =
{
	'windowtitle': {es: 'La idko página', en: "idko's projects"},
	'chlang': {es: 'Change language', en: 'Cambiar idioma'},
	'welcometo': {es: 'Bienvenido a', en: 'Welcome to'},
	'maintitle': {es: 'La idko página', en: "idko's projects"},
	'tip': {es: 'Consejo: ', en: 'Tip: '},
	'and': {es: 'y', en: 'and'},
	'rightclicktip': {es: 'Haz click derecho (o mantén pulsado) sobre un proyecto para ver sus detalles.', en: 'Right-click (or hold) a project to see details'},
	'projects': {es: 'Proyectos', en: 'Projects'},
	'smallerprojects': {es: 'Proyectos más pequeños', en: 'Smaller projects'},
	'deadprojects': {es: 'Proyectos abandonados', en: 'Abandoned projects'},
	'musicrecomend': {es: 'Recomendación de música', en: 'Music recomendation'},
	'playicon': {es: 'Icono de reproducir', en: 'Play icon'},
	'listenyt': {es: 'Escuchar en Youtube Music', en: 'Listen in Youtube Music'},
	'frontendlibs': {es: 'Librerías en el frontend:', en: 'Frontend libraries:'},
	'nodelibs': {es: 'Librerías en node.js:', en: 'Node.js libraries:'},
	'libs': {es: 'Librerías adicionales:', en: 'Additional libraries:'},
	'email': {es: 'Correo electrónico', en: 'Email'},
	'copy': {es: 'Copiar', en: 'Copy'},
	'sendemail': {es: 'Enviar un correo', en: 'Send an email'},
	'tryitout': {es: 'Pruébalo!', en: 'Try it out!'},
	'sourcecode': {es: 'Ver el código fuente', en: 'View the source code'},
	'seewebpage': {es: 'Ver página web', en: 'See webpage'},
	'contacts': {es: 'Contactos', en: 'Contacts'},
	'close': {es: 'Cerrar', en: 'Close'},
	'tmdview': {es: 'Visualizador de Markdown', en: 'Markdown Viewer'},
	'tunidad': {es: 'Juego de cartas LAN', en: 'LAN cards game'},
	'tcolonthree': {es: 'Un bot que hace :3', en: 'A Discord bot that does :3'},
	'tsanta': {es: 'Organiza un santa secreto con tus amigos en Discord', en: 'Organize a secret santa between your friends on discord'},
	'tmatrix': {es: '"Simulador" de una pantalla dot matrix', en: '"Simulating" a dot matrix screen'},
	'tconvertmusic': {es: 'Usa ffmpeg para convertir una carpeta de archivos multimedia en un formato a otro', en: 'Use ffmpeg to convert a folder of one type of media files to another'},
	'trandomc': {es: 'Elige un item aleatorio de una lista, pero ahora en c.', en: 'Choose a random item from a list, but now on c.'},
	'tmal': {es: 'Encuentra el próximo anime que ver', en: 'Find what anime to watch next'},
	'tcosa': {es: 'Ayuda con un problema de matemática en específico.', en: 'Helps with one specific math problem.'},
	'trandom': {es: 'Elige un item aleatorio de una lista.', en: 'Choose a random item from a list.'},
	'tmines': {es: 'El peor buscaminas que habrás jugado.', en: 'The worst minesweeper you will ever play.'},
	'tidkobot': {es: 'Bot de discord multifunción', en: 'Multipurpose discord bot'},
	'tnotas': {es: 'Aplicación simple para notas', en: 'Simple notes application'},
	'tscriptsandthings': {es: 'También conocido como dot-files', en: 'Also known as dot-files'},
	'albumcover': {es: 'Carátula del álbum recomendado', en: 'Cover of the recomended album'},
	'mmdview1': {es: 'md-view es un visualizador de markdown para el navegador.', en: 'md-view is a markdown reader for the browser.'},
	'mmdview2': {es: 'Lo hice porque no podía encontrar un lector de markdown que pudiera guardar pdfs, no fuese feo, dejase cambiar la fuente y no fuese difícil de instalar.', en: "I made it because i couldn't find a markdown reader that could save pdfs, wasn't ugly, let me change the font and wasn't a pain to install."},
	'mmdview3': {es: 'Es un simple visualizador, no puede editar archivos, y seguramente ni sea del todo compatible con markdown, pero para archivos .md que sean simples, suele funcionar.', en: "It's just a simple reader, it can't edit files, and it isn't full compatible with markdown (may not even be markdown compliant, idk), but for simple .md files, it mostly works."},
	'madewithhelp': {es: 'Hecho con:', en: 'Made with:'},
	'munidad1': {es: 'Unidad es un juego de cartas similar a uno con un nombre muy tonto que se puede jugar con otros en tu red local.', en: "Unidad is a cards game similar to UNO with a very dumb name that you can play with others in your local network."},
	'munidad2': {es: 'Nadie sabe jugar al UNO con las reglas oficiales, ¿verdad? Pues esto es básicamente UNO pero con las reglas de mi casa (bueno, no necesariamente de mi casa, pero se entiende, además, seguro que conoces alguna).', en: "Do you know how nobody plays UNO with the official rules? Well, this is basically UNO but with the rules I'm used to play with (although you surely may know some of them)."},
	'munidad3': {es: 'También hay ', en: "Also, there are "},
	'munidad4': {es: 'cartas más especiales', en: "more special cards"},
	'munidad5': {es: ', estas son cartas nuevas de este juego.', en: ", these are new cards from this game."},
	'munidad6': {es: 'Para jugar, necesitas iniciar el servidor (también se puede iniciar en termux, funciona bien), el servidor te dirá la dirección ip de la red local, ingresa a esa dirección en el dispositivo que quieras jugar, y dile a tus amigos que hagan lo mismo. Ahora pueden jugar juntos!!!', en: "To play, you need to iniciate the server (works great on termux), the server will tell you your ip address in your local network, access to that ip from your favorite web browser, and tell your friend to do the same. Now you can play together!!!"},
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
	'mrandom3': {es: 'También se puede usar con archivos usando la flag -f, o se puede leer la salida de otro programa con la flag -p.', en: 'Can choose from a file with the -f flag, or be piped to another program with the -p flag.'},
	'mmal1': {es: 'mal-randomizer muestra un anime aleatorio de una lista de MyAnimeList', en: 'mal-randomizer shows a random anime from MyAnimeList.'},
	'mmal2': {es: 'Solo ingresa el usuario, elige la lista y la aplicación elegirá un anime aleatorio de esa lista.', en: 'Just type the username, choose the list and the app will pick a random anime from that list.'},
	'mmal3': {es: 'La aplicación está desarrollada en el lenguaje C, utiliza el toolkit gráfico GTK3.', en: 'This app was made with the C language and uses the GTK3 graphic toolkit.'},
	'mcosa1': {es: 'cosa-matemáticas genera una ecuación a partir de una serie de coordenadas.', en: 'cosa-matemáticas generates an equation from a series of coordinates.'},
	'mcosa2': {es: 'No quería hacer la tarea de matemáticas así que hice un programa para que haga la tarea (y casi no llego a entregarla).', en: "I didn't want to do math's homework, so I made a program that did it for me."},
	'mcosa3': {es: 'Está hecho en el lenguaje C.', en: "It's build with the C language."},
	'mjsrandom1': {es: 'Random es mi primer programa en JavaScript c:', en: "Random is my first program made with JavaScript c:"},
	'mjsrandom2': {es: 'Sirve para elegir un elemento aleatorio de una lista.', en: "It chooses a random item from a list."},
	'mjsrandom3': {es: 'También tiene un segundo modo en el que elige un número aleatorio, se puede acceder haciendo click sobre el dado.', en: "It also has a second mode where chooses a random number, you can access it by clicking on the dice."},
	'mmines1': {es: 'Seguramente el peor buscaminas que habrás jugado.', en: "Surelly the worst minesweeper you will ever play."},
	'midkobot1': {es: 'idko-bot fue mi primer programa para node.js y pretendía ser un bot de Discord multifunción.', en: "idko-bot was my first program for node.js and it was supposed to be a multipurpose Discord bot."},
	'midkobot2': {es: 'Estaba fuertemente inspirado en bots como', en: "It was heavily inspired by bots such as"},
	'midkobot3': {es: 'idko-bot nunca fue terminado y en su lugar fue reemplazado por colon-three-bot.', en: "idko-bot was never finished and instead was replaced by colon-three-bot."},
	'mnotas1': {es: 'Notas es una aplicación sencilla para guardar notas en un servidor.', en: "Notas is a simple app for saving notes in a server."},
	'mnotas2': {es: 'Consiste de un sitio web y un servidor en node.js.', en: "Consist of a website and a node.js server."},
	'mnotas3': {es: 'Inicialmente empecé este proyecto para aprender como funcionaban las peticiones HTTP, pero luego de llevar con él demasiado tiempo me desmotivé y lo dejé de lado.', en: "Initially I started this project to learn how to do HTTP calls, but after I have been with it for so long I became demotivated and put it aside."},
	'mnotas4': {es: 'No estoy seguro si es posible utilizar el proyecto en el estado en el que está actualmente, además se necesita una base de datos mongodb.', en: "I'm not sure if it's posible to use it in the state it's in, also, you need a mongodb database."},
	'mscripts1': {es: 'También conocido como dot-files.', en: "Also known as dot-files."},
	'unabletocopy': {es: 'No se pudo copiar el correo electrónico, es posible que tu navegador esté bloqueando esta interacción o no soporte esta acción', en: 'Unable to copy email, your browser may be blocking this interaction or it may not support this action'}
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
