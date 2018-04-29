

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


function getSpriteCount(){
	return 55
}