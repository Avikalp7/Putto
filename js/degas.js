

function loadPlayerImages(){
	var front = loadImage('./images/ghosty/front.svg')
	var back = loadImage('./images/ghosty/back.svg')
	var left = loadImage('./images/ghosty/left.svg')
	var right = loadImage('./images/ghosty/right.svg')

	return new Promise((accept, reject) => {
		Promise.all([front, back, left, right]).then(([front, back, left, right]) => {
			accept({'front': front, 'back': back, 'left': left, 'right': right})
		})
	})
}


function loadSpriteImages(){
	var sprites = []
	for(var i = 1; i < 17; i++)
	{
		sprites.push(loadImage('./images/butterby/'+i+'.png'))
	}

	return new Promise((accept, reject) => {
		Promise.all(sprites).then((sprites) => {
			accept(sprites)
		})
	})
}


function loadCutoutImages(width, height) {
	var agnes = loadImage('./images/degasCutouts/Agnes.png', width, height)
	var adele = loadImage('./images/degasCutouts/Adele.png', width, height)
	var celine = loadImage('./images/degasCutouts/Celine.png', width, height)
	var elena = loadImage('./images/degasCutouts/Elena.png', width, height)
	var jodi = loadImage('./images/degasCutouts/Jodi.png', width, height)
	
	return new Promise((accept, reject) => {
		Promise.all([agnes, adele, celine, elena, jodi]).then(([agnes, adele, celine, elena, jodi]) => {
			accept([agnes, adele, celine, elena, jodi])
		})
	})
}	


function loadPaperdolls(images, ctxDraw, ctxDepth, width, height)
{
	var agnes = new Paperdoll(ctxDraw, ctxDepth, images[0], 104, width, height)
	var adele = new Paperdoll(ctxDraw, ctxDepth, images[0], 161, width, height)
	var celine = new Paperdoll(ctxDraw, ctxDepth, images[1], 181, width, height)
	var elena = new Paperdoll(ctxDraw, ctxDepth, images[2], 150, width, height)
	var jodi = new Paperdoll(ctxDraw, ctxDepth, images[3], 112, width, height)
	return [adele, celine, elena, jodi]
}


function getSpriteCount(){
	return 55
}