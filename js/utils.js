
function pause(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}


async function say(text, div, time = 100)
{
	for(var i = 0; i < text.length; i++)
	{
		var ch = text[i]
		div.html(div.html()+ch)
		await pause(time)
	}

	return
}

function loadImage(src, width, height)
{
	return new Promise(function(accept, reject) {
		if(width && height)
			var image = new Image(width, height)
		else
			var image = new Image()
		image.src = src
		image.onload = () => { accept(image) }
	})
}

function loadPlayerImages(){
	var front = loadImage('./images/ghosty/figureF.svg')
	var back = loadImage('./images/ghosty/figureB.svg')
	var left = loadImage('./images/ghosty/figureL.svg')
	var right = loadImage('./images/ghosty/figureR.svg')

	return new Promise((accept, reject) => {
		Promise.all([front, back, left, right]).then(([front, back, left, right]) => {
			accept({'front': front, 'back': back, 'left': left, 'right': right})
		})
	})
}

function loadSpriteImages(){
	var sprites = getSpriteImages()
	return new Promise((accept, reject) => {
		Promise.all(sprites).then((sprites) => {
			accept(sprites)
		})
	})
}


function loadCutoutImages(width, height) {
	var paths = getCutoutImages()
	var cutouts = []
	for(var i = 0; i < paths.length; i++)
		cutouts.push(loadImage(paths[i], width, height))
	
	return new Promise((accept, reject) => {
		Promise.all(cutouts).then((results) => {
			accept(results)
		})
	})
}	


function loadPaperdolls(images, ctxDraw, ctxDepth, width, height)
{
	var depths = getCutoutDepths()
	var paperdolls = []

	for(var i = 0; i < images.length; i++)
	{
		paperdolls.push(new Paperdoll(ctxDraw, ctxDepth, images[i], depths[i], width, height))
	}

	return paperdolls
}

