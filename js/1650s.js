
function goToNextArt()
{
	console.log("GO TO NEXT ART")
	window.location.href = './degas.html'
}


function goToPriorArt()
{
	console.log("GO TO PRIOR ART")
	window.location.href = './1580.html'
}


function getCaption()
{
	return "I think it's a group of people standing in front of a building; He seems expressionless. A blurry image, Of a person."
}


function getPlayerMaxWidth(){
	return 0.12
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
	return [130, 82]
}


function getCutoutImages(){
	return ['./images/1650Cutouts/boyWall.png',
			'./images/1650Cutouts/pot.png']
}