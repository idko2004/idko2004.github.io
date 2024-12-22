let albums;
let artists;
let musicFiles;
let music;

const amusictitle = document.getElementById('amusictitle');
const listenlink = document.getElementById('listenlink');
const amusicalbum = document.getElementById('amusicalbum');
const amusicartist = document.getElementById('amusicartist');
const divmusiccover = document.getElementById('divmusiccover');
const musiclyric = document.getElementById('musiclyric');

async function setMusicRecomendation()
{
	let musicInfoResponse;
	let musicInfo;
	try
	{
		musicInfoResponse = await fetch("musicinfo.json");
		musicInfo = await musicInfoResponse.json();
	}
	catch(err)
	{
		alert(`Trying to parse musicinfo.json: ${err}`);
		return;
	}

	artists = musicInfo.artists;
	albums = musicInfo.albums;
	musicFiles = musicInfo['music-files'];

	const musicIndex = randomRange(0, musicFiles.length - 1);

	let musicResponse;
	try
	{
		musicResponse = await fetch(musicFiles[musicIndex]);
		music = await musicResponse.json();
	}
	catch(err)
	{
		alert(`Trying to parse musicResponse of (${musicIndex}):${musicFiles[musicIndex]}: ${err}`);
		return;
	}

	//Title
	amusictitle.innerText = music.title;
	amusictitle.href = music.url;
	
	//Play button
	listenlink.href = music.url;
	
	//Album
	amusicalbum.innerText = music.album;
	amusicalbum.href = albums[music.album].url;
	
	//Artist
	amusicartist.innerText = music.artist;
	amusicartist.href = artists[music.artist];
	
	//Cover
	divmusiccover.style = `--music-cover:url("${albums[music.album].cover}")`;
	divmusiccover.addEventListener('click', ()=>
	{
		document.getElementById('listenlink').click();
	});
	
	//Lyric
	if(music.lyrics !== undefined && music.lyrics.length > 0)
	{
		let lyric;
		if(music.lyrics.length == 1) lyric = 0;
		else if(music.lyrics.length == 2)
		{
			if(Math.random() > 0.49) lyric = 0;
			else lyric = 1;
		}
		else lyric = randomRange(0, music.lyrics.length - 1);
		
		musiclyric.innerText = `"${music.lyrics[lyric]}"`;
	}
	else
	{
		musiclyric.hidden = true;
	}
}

setMusicRecomendation();
