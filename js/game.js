
$(document).ready(function(){

	$("img").one("load", function() {
	  // do stuff
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

		//hidden Canvas for the walking map
		var walkCanvas= document.createElement('canvas');
		walkCanvas.width= width 
		walkCanvas.height= height 
		var ctxWalking = walkCanvas.getContext("2d");


		//choose image set for the player
		var player;
		var playerImages = loadPlayerImages()

		//choose image set for the sprites
		var bugs = []
	    var spriteImages = loadSpriteImages()

	    var cutouts = []
	    var cutoutImages = loadCutoutImages(width, height)

	    //choose image for the depth map
		var depthMap = loadImage($('#depthMap').attr('src'), width, height)

		//chose image for the walking map
		var walkingMap = loadImage($('#blockMap').attr('src'), width, height)


		//start game once all are loaded
		Promise.all([depthMap, playerImages, spriteImages, cutoutImages, walkingMap]).then(async ([depthMap, playerImages, spriteImages, cutoutImages, walkingMap]) => {
			ctxDepth.drawImage(depthMap, 0, 0, width, height)
			ctxWalking.drawImage(walkingMap, 0, 0, width, height)
			player = new Player(width*getPlayerStartX(), height*getPlayerStartY(), ctxDraw, ctxDepth, ctxWalking, playerImages)
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

			var dialog = $('<div/>').addClass('dialogBox2').appendTo($('body'))
			say('This is what I`ve computed for this piece: '+getCaption(), dialog)

			$(window).on('resize', function(){
				width = $('.painting').width()
				height = $('.painting').height()
				var xShift = width - canvas.width
				var yShift = height + 100 - canvas.height
		      	canvas.width = width
		      	canvas.height = height + 100
		      	depthCanvas.width = width
		      	depthCanvas.height = height
		      	walkCanvas.width = width
		      	walkCanvas.height = height
		      	ctxDepth.resetTransform()
				ctxDepth.clearRect(0, 0, width, height)
		      	ctxDepth.drawImage(depthMap, 0, 0, width, height)
		      	ctxWalking.resetTransform()
				ctxWalking.clearRect(0, 0, width, height)
				ctxWalking.drawImage(walkingMap, 0, 0, width, height)

		      	if(player)
		      	{
		      		player.resize(width, height, xShift, yShift)
		      		cutouts.forEach((item, index) => {
						item.resize(width, height)
					})
					bugs.forEach((item, index) => {
						item.resize(width, height, xShift, yShift)
					})
		      	}
			})
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

	$("img").each(function() {
	  if(this.complete) $(this).load();
	});

})