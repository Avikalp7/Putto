

class Player {

	constructor(x, y, ctx, ctxDepth, ctxWalking, images) 
	{
		this.ctxDepth = ctxDepth
		this.ctxWalking = ctxWalking
		this.ctx = ctx
		this.maxWidth = 23*4
		this.maxHeight = 92*4
		this.width = 25;
		this.height = 90;
		this.x = x
		this.y = y
		this.poses = images
		this.image = this.poses.left
		this.bindEvents()
	}


	submitDraw()
	{
		if(this.ctxDepth)
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
		var x = this.x + this.width/2
		var y = this.y - this.height*9/10
		var xMax = this.ctx.canvas.width
		var yMax = this.ctx.canvas.height

		var gradX = this.ctx.createLinearGradient(0, y, xMax, y);
	    gradX.addColorStop(0, 'rgba(255, 255, 255, 0)');
	    gradX.addColorStop(0.5, '#fff');
	    gradX.addColorStop(1, 'rgba(255, 255, 255, 0)');
		this.ctx.fillStyle = gradX
		this.ctx.fillRect(0, y, xMax, 1)

		var gradY = this.ctx.createLinearGradient(x, 0, x, yMax);
	    gradY.addColorStop(0, 'rgba(255, 255, 255, 0)');
	    gradY.addColorStop(0.5, '#fff');
	    gradY.addColorStop(1, 'rgba(255, 255, 255, 0)');
		this.ctx.fillStyle = gradY
		this.ctx.fillRect(x, 0, 1, yMax)

		this.ctx.translate(x,y);
		this.ctx.rotate(45*Math.PI/180);
		this.ctx.translate(-x,-y);
		this.ctx.fillRect(x, 0, 1, yMax)

		this.ctx.translate(x,y);
		this.ctx.rotate(90*Math.PI/180);
		this.ctx.translate(-x,-y);
		this.ctx.fillRect(x, 0, 1, yMax)

		this.ctx.resetTransform()
		
		this.ctx.clearRect(this.x, this.y - this.height, Math.round(this.width), Math.round(this.height) )

		this.ctx.drawImage(this.image, this.x, this.y - this.height, Math.round(this.width), Math.round(this.height) )
		
		this.step ++;
		if(this.step > 31)
			this.step = 0
	}


	proposeMoveY(deltaY) //checks for a legal move
	{
		var y = this.y + deltaY

		if(this.ctxWalking)
			var data = this.ctxWalking.getImageData(this.x, y, 1, 1).data
		else
			var data = [0,0,0,0]
		//console.log("data at this spot is", data)
		
		if(data[3] > 0 && data[0] === 0 && data[1] === 0 && data[2] === 0)//door
			goToNextArt()
		if(data[3] > 0 && data[0] === 255 && data[1] === 255 && data[2] === 255)//door
			goToPriorArt()
		if(data[2] === 255)//blue barrier
			return this.y
		if(y > -1 && y < this.ctx.canvas.height - 40)
			return y
		else
			return this.y
	}


	proposeMoveX(deltaX) //checks for a legal move
	{
		var x = this.x + deltaX

		if(this.ctxWalking)
			var data = this.ctxWalking.getImageData(x, this.y, 1, 1).data
		else
			var data = [0,0,0,0]
		//console.log("data at this spot is", data)

		if(data[3] > 0 && data[0] === 0 && data[1] === 0 && data[2] === 0)//door
			goToNextArt()
		if(data[3] > 0 && data[0] === 255 && data[1] === 255 && data[2] === 255)//door
			goToPriorArt()
		if(data[2] === 255)//blue barrier
			return this.x
		if(x > -1 && x < this.ctx.canvas.width)
			return x
		else
			return this.x
	}


	bindEvents()
	{
		var self = this
		var keySteps = {38: false, 40: false, 37:false, 39:false}
		$(document).on('keydown', function(e){
			var step = 10
			if (e.keyCode == '38' || keySteps[38]) {
		        // up arrow
		        e.preventDefault()
		        self.y = self.proposeMoveY(-step)
		        keySteps[38] = true
		        self.image = self.poses.back
		    }
		    if (e.keyCode == '40' || keySteps[40]) {
		        // down arrow
		        e.preventDefault()
		        self.y = self.proposeMoveY(step)
		        keySteps[40] = true
		        self.image = self.poses.front
		    }
		    if (e.keyCode == '37' || keySteps[37]) {
		       // left arrow
		       e.preventDefault()
		       self.x = self.proposeMoveX(-step)
		       keySteps[37] = true
		       self.image = self.poses.left
		    }
		    if (e.keyCode == '39' || keySteps[39]) {
		       // right arrow
		       e.preventDefault()
		       self.x = self.proposeMoveX(step)
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