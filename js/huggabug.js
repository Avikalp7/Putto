

class Huggabug {

	constructor(x, y, ctx, depth, sprites, image) 
	{
		this.ctxDepth = depth
		this.ctx = ctx
		this.ctxSprites = sprites
		this.x = x
		this.y = y
		this.angle = 1
		this.step = 0
		this.image = image
		this.width = 100
	}

	draw()
	{
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.width )
		this.step ++;
		if(this.step > 31)
			this.step = 0
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
		this.width = (depth*10)*(depth*10)

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