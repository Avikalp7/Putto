

class Paperdoll {

	constructor(x, y, ctx, ctxDepth, image, depth) 
	{
		this.ctxDepth = depth
		this.ctx = ctx
		this.depth = depth
		this.image = image
	}


	submitDraw()
	{
		return this.depth
	}


	draw()
	{
		this.ctx.drawImage(this.image, 0, 0)
	}

}