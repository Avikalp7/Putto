

class Huggabug {

	constructor(x, y, ctx, depth, images) 
	{
		this.ctxDepth = depth
		this.ctx = ctx
		this.x = x
		this.y = y
		this.angle = 1
		this.step = Math.round(Math.random()*(images.length - 1))
		this.poses = images
		this.image = images[1]
		this.maxWidth = getSpriteMaxWidth() * ctx.canvas.width
	}

	resize(width, height, xShift, yShift){
		this.maxWidth = getSpriteMaxWidth() * width
		this.x += xShift
		this.y += yShift
	}


	draw()
	{
		this.image = this.poses[this.step]
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.width )

		if(Math.round(Math.random()*10) > 4)
		{
			this.step ++;
			if(this.step >= this.poses.length)
				this.step = 1
		}
	}

	submitDraw()
	{
		//this.ctx.resetTransform()
		//this.ctx.translate(this.x, this.y)


		/*var angle = 2 
		this.angle = this.angle + Math.random()*angle - Math.random()*(angle + 1) //Math.pow(Math.ceil(Math.random()*angle), 2) - Math.pow(Math.ceil(Math.random()*angle), 2)
		this.ctx.rotate(this.angle*Math.PI/180)*/

		var data = this.ctxDepth.getImageData(this.x, this.y, 1, 1).data
		if(data)
			var depth = 1 - (data[0]/255)
		else
		{
			var depth = 0
			data = [0]
		}
		this.width = (depth)*(depth)*this.maxWidth

		var move = 2
		
		this.x = this.x + depth*(Math.pow(Math.ceil(Math.random()*move), 2) - Math.pow(Math.ceil(Math.random()*move), 2))
		this.y = this.y + depth*(Math.pow(Math.ceil(Math.random()*move), 2) - Math.pow(Math.ceil(Math.random()*move), 2))

		return data[0]
	}

	imagedata_to_image(imagedata) {
	    var canvas = document.createElement('canvas');
	    var ctx = canvas.getContext('2d');
	    canvas.width = imagedata.width;
	    canvas.height = imagedata.height;
	    ctx.putImageData(imagedata, 0, 0);

	    var image = new Image();
	    image.src = canvas.toDataURL('image/png');
	    return image;
	}

}