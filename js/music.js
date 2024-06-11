const musics =
[
	{
		title: 'Dream Sweet in Sea Major',
		artist: 'Miracle Musical',
		album: 'Hawaii: Part II',
		url: 'https://music.youtube.com/watch?v=uxyM7vhU0uU',
		lyrics:
		[
			"Alone at the edge of a universe humming a tune.",
			"Believe me, darling, the stars were made for falling.",
			"Signed, yours truly, the whale."
		]
	},
	{
		title: 'Isle Unto Thyself',
		artist: 'Miracle Musical',
		album: 'Hawaii: Part II',
		url: 'https://music.youtube.com/watch?v=uQnz55oYEA4',
		lyrics:
		[
			"I was a victim of magic, Apollo.",
			"Why did fire-erupted lands arrive?",
			"Why did murderous animals survive?",
			"Why did we deserve to be revived?",
			"Why was any and everything alive?"
		]
	},
	{
		title: 'White Ball',
		artist: 'Miracle Musical',
		album: 'Hawaii: Part II',
		url: 'https://music.youtube.com/watch?v=bnUZ8HcPKsA',
		lyrics:
		[
			"Such impossible bliss."
		]
	},
	{
		title: 'Murders',
		artist: 'Miracle Musical',
		album: 'Hawaii: Part II',
		url: 'https://music.youtube.com/watch?v=CaTX0pt3uyg',
		lyrics:
		[
			"I was in the forest, looking to see the trees, but none were there.",
			"All, for nothing at all.",
			"I was in the middle ground, looking to find the."
		]
	},
	{
		title: 'The Mind Electric',
		artist: 'Miracle Musical',
		album: 'Hawaii: Part II',
		url: 'https://music.youtube.com/watch?v=0vfZjdK8Ktw',
		lyrics:
		[
			"See how the serfs work the ground (See how they fall).",
			"See how the brain plays around. And you fall inside a hole you couldn't see.",
			"And you fall inside a hole inside a. Someone help me.",
			"Doctor, I can't tell if I'm not me.",
			"My brain has claimed its glory over me.",
			"I've a good heart albeit enasni."
		]
	}
]

const albums =
{
	'Hawaii: Part II':
	{
		cover: 'img/music/hawaiipartii.jpg',
		url: 'https://music.youtube.com/playlist?list=OLAK5uy_kCPng04PE0tr1Lw6kaCt7-O5xk2ztqsJw'
	}
}

const artist =
{
	'Miracle Musical': 'https://music.youtube.com/channel/UCLcDCIWMBruo5VASmmlv7Uw'
}

const musicIndex = randomRange(0, musics.length - 1);

//Title
let element = document.getElementById('amusictitle');

element.innerText = musics[musicIndex].title;
element.href = musics[musicIndex].url;

//Play button
element = document.getElementById('listenlink');
element.href = musics[musicIndex].url;

//Album
element = document.getElementById('amusicalbum');

element.innerText = musics[musicIndex].album;
element.href = albums[musics[musicIndex].album].url;

//Artist
element = document.getElementById('amusicartist');
element.innerText = musics[musicIndex].artist;
element.href = artist[musics[musicIndex].artist];

//Cover
element = document.getElementById('divmusiccover');
element.style = `--music-cover:url("${albums[musics[musicIndex].album].cover}")`;

//Lyric
let lyric;
if(musics[musicIndex].lyrics.length < 2) lyric = 0;
else lyric = randomRange(0, musics[musicIndex].lyrics.length - 1);

element = document.getElementById('musiclyric');
element.innerText = `"${musics[musicIndex].lyrics[lyric]}"`;
