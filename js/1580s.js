
function goToNextArt()
{
	console.log("GO TO NEXT ART")
	window.location.href = './1650.html'
}


function goToPriorArt()
{
	console.log("GO TO PRIOR ART")
	window.location.href = './1500.html'
}


function getCaption()
{
	return "I think it’s a painting of a person; A close up, Of a blur."
}


function getPlayerMaxWidth(){
	return 0.02
}



function getSpriteMaxWidth(){
	return 0.20
}


function getPlayerStartX()
{
	return 0.45
}


function getPlayerStartY(){
	return 0.75
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
	return [103, 69, 95, 97, 113, 129, 137, 113, 165]
}


function getCutoutImages(){
	var sprites = []
	for(var i = 2; i < 11; i++)
	{
		sprites.push('./images/1580Cutouts/'+i+'.png')
	}
	return sprites
}