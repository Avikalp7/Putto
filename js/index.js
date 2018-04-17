

$(document).ready(function(){

	var bugsCount = 55
	var width = $('.painting').width()
	var height = $('.painting').height()
	var bugs = []
	var player;


	var canvas = $('.particleMap')[0]
	canvas.width= width;
	canvas.height= height + 100;
	var ctxDraw = canvas.getContext("2d");

	var waitOnImages = 3

	var spriteW = 429
	var spriteH = 13728
	var spriteCanvas= document.createElement('canvas');
	var ctxSprites;
	var butterby = new Image(spriteW, spriteH)
    butterby.src = './images/butterby1_sprites.png'
    butterby.crossOrigin = "anonymous"
    butterby.onload = () => {
	    spriteCanvas.width= spriteW;
	    spriteCanvas.height= spriteH;
	    ctxSprites = spriteCanvas.getContext("2d");
	    ctxSprites.drawImage(butterby, 0, 0, spriteW, spriteH)
	    readyToGo()
	}


	var still = new Image(width, height)
	still.src = './images/butterby.png'
	still.onload = () => {	readyToGo() }


	var depthMap = new Image(width, height)
	var offScreenCanvas= document.createElement('canvas');
	var ctxDepth;
    depthMap.src = $('#depthMap').attr('src')
    console.log("SOURCE IS", depthMap.src)
    depthMap.crossOrigin = "anonymous"
    depthMap.onload = () => {
	    offScreenCanvas.width= width;
	    offScreenCanvas.height= height;
	    ctxDepth= offScreenCanvas.getContext("2d");
	    ctxDepth.drawImage(depthMap, 0, 0, width, height)
	    readyToGo()
	}


	readyToGo = function()
	{
		waitOnImages --
		if(waitOnImages === 0) // ready to draw!
		{
			player = new Player(width*0.8, height*0.5, ctxDraw, ctxDepth, './images/cat.png')

			for(var i = 0; i < bugsCount; i++)
			{
				var x = Math.floor(Math.random()*width)
				var y = Math.floor(Math.random()*height)
				var hb = new Huggabug(x,y, ctxDraw, ctxDepth, ctxSprites, still)
				hb.draw()
				bugs.push(hb)
			}

			setTimeout(() => redraw(), 1000)
		}
	}


    redraw = function()
	{
		ctxDraw.resetTransform()
		ctxDraw.clearRect(0, 0, width, height + 400)

		var drawOrder = []

		var playerDepth = player.submitDraw() 
		if(!drawOrder[playerDepth])
			drawOrder[playerDepth] = []
		drawOrder[playerDepth].push(player)

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