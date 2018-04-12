

class Huggabug {

	constructor(x, y) 
	{
		this.x = x
		this.y = y
	}

	buildElements()
	{
		this.bug = $('<div/>').addClass('huggabug')
		this.bug.appendTo($('.particleMap'))
		this.resizeTo(this.x, this.y)
		this.moveTo(this.x, this.y)
	}

	resizeTo(x, y)
	{
		
	}

	moveTo(x, y)
	{
		var maxX = $('.painting').width()
		var maxY = $('.painting').height()
		var width = $(this.bug).width()
		var height = width

		if(x + width > maxX)
			x = maxX - width
		if(y + height > maxY)
			y = maxY - height

		this.bug.css('top', y+'px').css('left', x+'px')
	}	

}