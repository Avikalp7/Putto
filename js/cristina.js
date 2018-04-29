

function loadPlayerImages(){
	var front = loadImage('./images/ghosty/archivistF.png')
	var back = loadImage('./images/ghosty/archivistB.png')
	var left = loadImage('./images/ghosty/archivistL.png')
	var right = loadImage('./images/ghosty/archivistR.png')

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
	var chris = loadImage('./images/christinaCutouts/cristina.png', width, height)
	var door = loadImage('./images/christinaCutouts/door.png', width, height)
	
	return new Promise((accept, reject) => {
		Promise.all([chris, door]).then(([chris, door]) => {
			accept([chris, door])
		})
	})
}	


function loadPaperdolls(images, ctxDraw, ctxDepth, width, height)
{
	var chris = new Paperdoll(ctxDraw, ctxDepth, images[0], 70, width, height)
	var door = new Paperdoll(ctxDraw, ctxDepth, images[1], 249, width, height)
	return [chris, door]
}


function getSpriteCount(){
	return 200
}

function getPlayerStartX()
{
	return 0.45
}

function getPlayerStartY(){
	return 0.15
}