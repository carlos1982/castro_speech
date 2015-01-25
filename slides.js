var slides = new Array(
	{
		bg: 'bg.jpg',
		css: 'jumbotron',
		title: 'Title'
	},
	{
		bg: 'landscape.jpg',
		css: 'jumbo landscape', /*If the Background is in landscape, then set this css class*/
		title: ' '
	},
	{ 
		bg: '',
		css: 'list',
		title: 'Inhalt',
		content: '<ul>'
				+'<li>Bulletpoint1</li>'
				+'<li>Bulletpoint2</li>'
				+'</ul>'
	},
	{
		bg: '',
		title: 'Meme Theorie',	/* More like a label*/
		css: 'video',
		video: 'video', /*filename without ogg*/
		autoplay: true
	}
);
