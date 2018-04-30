


$(document).ready(async function(){
	//figure out where the door is
	var doorX = $('.entryDoor').offset().left + 10
	var doorYmin = $('.entryDoor').offset().top 
	var doorY = doorYmin + $('.entryDoor').height()

	//main Canvas for drawing sprites and player
	var canvas = $('.homeMap')[0]
	var width = $('.homeMap').width();
	var height = $('.homeMap').height();
	canvas.width= width
	canvas.height= height
	var ctxDraw = canvas.getContext("2d");


	//choose image set for the player
	var player;
	var playerImages = loadPlayerImages()

	var container = $('.container')

	var dialog = $('<div/>').addClass('dialogBox').appendTo(container)
	await say('Goodmorning new recruit!', dialog)
	await pause(300)
	$('html, body').animate({
	        scrollTop: dialog.position().top
	    }, 1000);	
	await say(' Please remain still while your consciousness is uploaded into our dataframe.', dialog)
	await pause(300)
	await say(' ...', dialog)
	await pause(300)
	await say(' ...', dialog)
	await pause(300)


	playerImages.then(async (playerImages) => {

		player = new Player(width/2, height*.90, ctxDraw, null, null, playerImages)
		setTimeout(() => redraw(), 1000)

		await pause(300)
		var d2 = $('<div/>').addClass('dialogBox').appendTo(container)
		$('html, body').animate({
	        scrollTop: d2.position().top
	    }, 1000);
		await say('You`re a natural! Welcome to our team of art bots :tada:', d2, 50)

		await pause(300)
		var d3 = $('<div/>').addClass('dialogBox').appendTo(container)
		$('html, body').animate({
	        scrollTop: d3.position().top
	    }, 1000);
		await say('Now, be a dear and look up and walk over through that door to get started.', d3, 50)

		await pause(1000)
		var d4 = $('<div/>').addClass('dialogBox').appendTo(container)	
		await say('Do it.', d4, 50)

		await pause(1000)
		var d5 = $('<div/>').addClass('dialogBox').appendTo(container)
		await say('Please.', d5, 50)

	})
	redraw = function()
	{
		if(player.x > doorX && player.y > doorYmin && player.y <= doorY)
			window.location.href = './degas.html'

		ctxDraw.resetTransform()
		ctxDraw.clearRect(0, 0, width, height + 400)

		var drawOrder = []

		var playerDepth = player.submitDraw() 
		player.draw()
		setTimeout(() => redraw(), 100)
	}

})


 