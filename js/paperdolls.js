

class Paperdoll {

	constructor(ctx, ctxDepth, image, depth, width, height) 
	{
		this.ctxDepth = depth
		this.ctx = ctx
		this.depth = depth
		this.image = image
		this.width = width
		this.height = height
	}


	resize(width, height){
		this.width = width
		this.height = height
	}


	submitDraw()
	{
		return this.depth
	}


	draw()
	{
		this.ctx.drawImage(this.image, 0, 0, this.width, this.height)
	}

}