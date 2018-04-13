

class Huggabug {

	constructor(x, y, ctx, depth, image) 
	{
		this.ctxDepth = depth
		this.ctx = ctx
		this.x = x
		this.y = y
		this.angle = 1
		this.image = image
	}

	draw(width)
	{
		if(!width)
		{
			var data = this.ctxDepth.getImageData(this.x, this.y, 1, 1).data
			if(data)
			{
				var depth = 1.0 - (data[0]/255.0)
				//console.log('DEPTH', data[0], depth, width)
			}
			else
				var depth = 1.0
			var width = (depth*10)*(depth*10)
		}
	
		//this.ctx.fillRect(this.x, this.y, width, width)
		this.ctx.drawImage(this.image, this.x, this.y, width, width )
	}

	move()
	{
		this.ctx.resetTransform()
		this.ctx.translate(this.x, this.y)


		var angle = 2 
		this.angle = this.angle + Math.pow(Math.ceil(Math.random()*angle), 2) - Math.pow(Math.ceil(Math.random()*angle), 2)
		this.ctx.rotate(this.angle*Math.PI/180)

		var data = this.ctxDepth.getImageData(this.x, this.y, 1, 1).data
		var depth = 1 - (data[0]/255)
		var width = (depth*10)*(depth*10)

		var move = 2
		
		this.x = this.x + depth*(Math.pow(Math.ceil(Math.random()*move), 2) - Math.pow(Math.ceil(Math.random()*move), 2))
		this.y = this.y + depth*(Math.pow(Math.ceil(Math.random()*move), 2) - Math.pow(Math.ceil(Math.random()*move), 2))

		this.draw(width)
		this.ctx.resetTransform()
	}

}