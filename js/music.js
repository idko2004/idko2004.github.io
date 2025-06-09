let albums;
let artists;
let musicFiles;
let music;

const amusictitle = document.getElementById('amusictitle');
const listenlink = document.getElementById('listenlink');
const amusicalbum = document.getElementById('amusicalbum');
const amusicartist = document.getElementById('amusicartist');
const divmusiccover = document.getElementById('divmusiccover');

async function setMusicRecomendation()
{
	let musicInfo;
	try
	{
		const musicInfoResponse = await fetch("musicinfo.json");
		musicInfo = await musicInfoResponse.json();
	}
	catch(err)
	{
		console.error(`Trying to parse musicinfo.json: ${err}`);
		return;
	}

	//const randomAlbumIndex = musicInfo.length - 1;
	const randomAlbumIndex = randomRange(0, musicInfo.length - 1);
	const randomAlbumUrl = musicInfo[randomAlbumIndex];

	if(randomAlbumUrl === undefined)
	{
		console.error(`Album at index ${randomAlbumIndex} is undefined`);
		return;
	}

	let album;
	try
	{
		const albumResponse = await fetch(randomAlbumUrl);
		album = await albumResponse.json();
	}
	catch(err)
	{
		console.error(`Trying to parse ${randomAlbumUrl}: ${err}`);
		return;
	}

	//const musicIndex = album.songs.length - 1;
	const musicIndex = randomRange(0, album.songs.length - 1);
	let music = album.songs[musicIndex];
	if(music === undefined)
	{
		console.error(`Music at index ${musicIndex} on album ${randomAlbumUrl} is undefined`);
		return;
	}

	//Title
	amusictitle.innerText = music.name;
	amusictitle.href = music.url;
	
	//Play button
	listenlink.href = music.url;
	
	//Album
	amusicalbum.innerText = album.album.name;
	amusicalbum.href = album.album.url;
	
	//Artist
	amusicartist.innerText = album.artist.name;
	amusicartist.href = album.artist.url;
	
	//Cover
	divmusiccover.style = `--music-cover:url("${album.album.image}")`;
	divmusiccover.addEventListener('click', ()=>
	{
		document.getElementById('listenlink').click();
	});
}

setMusicRecomendation();
