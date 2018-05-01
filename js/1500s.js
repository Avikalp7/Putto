
function goToNextArt()
{
	console.log("GO TO NEXT ART")
	window.location.href = './1580.html'
}


function goToPriorArt()
{
	console.log("GO TO PRIOR ART")
	window.location.href = './1890.html'
}


function getCaption()
{
	return "I am not really confident, but I think it's a bunch of stuffed animals, and they seem: Expressionless, Expressionless, Expressionless, Expressionless, Surprised, Expressionless, Expressionless, and Angry. A close up, Of a blur."
}



function getPlayerStartX()
{
	return 0.3
}

function getPlayerMaxWidth(){
	return 0.12
}



function getSpriteMaxWidth(){
	return 0.40
}



function getPlayerStartY(){
	return 0.26
}


function getSpriteCount(){
	return 55
}


function getSpriteImages(){
	var sprites = []
	for(var i = 1; i < 17; i++)
	{
		sprites.push(loadImage('./images/butterby/'+i+'.png'))
	}
	return sprites
}


function getCutoutDepths()
{
	return [238, 179, 131, 112, 150, 163, 125, 136, 110]
}


function getCutoutImages(){
	var sprites = []
	for(var i = 1; i < 10; i++)
	{
		sprites.push(('./images/1500Cutouts/'+i+'.png'))
	}
	return sprites
}