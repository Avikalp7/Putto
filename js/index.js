

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


$(document).ready(function(){

	var width = $('.painting').width()
	var height = $('.painting').height()

	//main Canvas for drawing sprites and player
	var canvas = $('.particleMap')[0]
	canvas.width= width;
	canvas.height= height + 100;
	var ctxDraw = canvas.getContext("2d");

	//hidden Canvas for drawing depth map
	var depthCanvas= document.createElement('canvas');
	depthCanvas.width= width 
	depthCanvas.height= height 
	var ctxDepth = depthCanvas.getContext("2d");

	//choose image set for the player
	var player;
	var playerImages = loadPlayerImages()

	//choose image set for the sprites
	var bugs = []
    var spriteImages = loadSpriteImages()

    var cutouts = []
    var cutoutImages = loadCutoutImages(width, height)

    //choose image set for the depth map
	var depthMap = loadImage($('#depthMap').attr('src'))


	//start game once all are loaded
	Promise.all([playerImages, spriteImages, depthMap, cutoutImages]).then(([playerImages, spriteImages, depthMap, cutoutImages]) => {
		
		ctxDepth.drawImage(depthMap, 0, 0, width, height)
		player = new Player(width*0.8, height*0.5, ctxDraw, ctxDepth, playerImages)
		cutouts = loadPaperdolls(cutoutImages, ctxDraw, ctxDepth, width, height)

		var spriteCount = getSpriteCount()
		for(var i = 0; i < spriteCount; i++)
		{
			var x = Math.floor(Math.random()*width)
			var y = Math.floor(Math.random()*height)
			var hb = new Huggabug(x,y, ctxDraw, ctxDepth, spriteImages)
			hb.draw()
			bugs.push(hb)
		}

		setTimeout(() => redraw(), 1000)
	})


    redraw = function()
	{
		ctxDraw.resetTransform()
		ctxDraw.clearRect(0, 0, width, height + 400)

		var drawOrder = []

		var playerDepth = player.submitDraw() 
		if(!drawOrder[playerDepth])
			drawOrder[playerDepth] = []
		drawOrder[playerDepth].push(player)

		cutouts.forEach((item, index) => {
			var d = item.submitDraw()
			if(!drawOrder[d])
				drawOrder[d] = []
			drawOrder[d].push(item)
		})

		bugs.forEach((item, index) => {
			var bugDepth = item.submitDraw()
			if(!drawOrder[bugDepth])
				drawOrder[bugDepth] = []
			drawOrder[bugDepth].push(item)
		})


		for(var i = 255; i > -1; i--)
		{
			var list = drawOrder[i]
			if(list)
			{
				list.forEach((item, index) => {item.draw()})
			}
		}


		setTimeout(() => redraw(), 100)
	}

})