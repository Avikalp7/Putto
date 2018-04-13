

$(document).ready(function(){

	var bugsCount = 100
	var width = $('.painting').width()
	var height = $('.painting').height()
	var bugs = []

	var canvas = $('.particleMap')[0]
	canvas.width= width;
	canvas.height= height;
	var ctxDraw = canvas.getContext("2d");


	var butterby = new Image(width, height)
    butterby.src = './images/butterby.png'
    butterby.crossOrigin = "anonymous"


	var depthMap = new Image(width, height)
    depthMap.src = './art/ballet_depth.png'
    depthMap.crossOrigin = "anonymous"

    redraw = function()
	{
		ctxDraw.resetTransform()
		ctxDraw.clearRect(0, 0, width, height)
		bugs.forEach((item, index) => {
			item.move()
		})
		setTimeout(() => redraw(), 100)
	}

    butterby.onload = () => {
		var offScreenCanvas= document.createElement('canvas');
	    offScreenCanvas.width= width;
	    offScreenCanvas.height= height;
	    var ctxDepth= offScreenCanvas.getContext("2d");
	    ctxDepth.drawImage(depthMap, 0, 0, width, height)

		for(var i = 0; i < bugsCount; i++)
		{
			var x = Math.ceil(Math.random()*width)
			var y = Math.ceil(Math.random()*height)
			var hb = new Huggabug(x,y, ctxDraw, ctxDepth, butterby)
			hb.draw()
			bugs.push(hb)
		}

		setTimeout(() => redraw(), 1000)
    }
})