

class Player {

	constructor(x, y, ctx, depth, images) 
	{
		this.ctxDepth = depth
		this.ctx = ctx
		this.maxWidth = 150
		this.maxHeight = 150
		this.width = 150;
		this.height = 150;
		this.x = x
		this.y = y
		this.poses = images
		this.image = this.poses.front
		this.bindEvents()
	}


	submitDraw()
	{
		var data = this.ctxDepth.getImageData(this.x, this.y, 1, 1).data
		if(data)
		{
			var depth = 1.0 - (data[0]/255.0)
		}
		else
		{
			data = [0]
			var depth = 1.0
		}
		
		this.height = Math.round(this.maxHeight*depth)
		this.width = Math.round(this.maxWidth*depth)

		return data[0]
	}


	draw()
	{
		//this.ctx.fillRect(this.x, this.y, width, width)
		this.ctx.drawImage(this.image, this.x, this.y - this.height, Math.round(this.width), Math.round(this.height) )
		
		this.step ++;
		if(this.step > 31)
			this.step = 0
	}


	proposeMoveY(deltaY) //checks for a legal move
	{
		var y = this.y + deltaY
		
		if(y < this.ctx.canvas.height - 40)
			return y
		else
			return this.y
	}


	bindEvents()
	{
		var self = this
		var keySteps = {38: false, 40: false, 37:false, 39:false}
		$(document).on('keydown', function(e){
			var step = 5
			if (e.keyCode == '38' || keySteps[38]) {
		        // up arrow
		        self.y = self.proposeMoveY(-step)
		        keySteps[38] = true
		        self.image = self.poses.back
		    }
		    if (e.keyCode == '40' || keySteps[40]) {
		        // down arrow
		        self.y = self.proposeMoveY(step)
		        keySteps[40] = true
		        self.image = self.poses.front
		    }
		    if (e.keyCode == '37' || keySteps[37]) {
		       // left arrow
		       self.x -= step
		       keySteps[37] = true
		       self.image = self.poses.left
		    }
		    if (e.keyCode == '39' || keySteps[39]) {
		       // right arrow
		       self.x += step
		       keySteps[39] = true
		       self.image = self.poses.right
		    }
		})

		$(document).on('keyup', function(e){
			if (e.keyCode in keySteps) {
			    keySteps[e.keyCode] = false
			}
		})
	}



}