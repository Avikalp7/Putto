
function goToNextArt()
{
	console.log("GO TO NEXT ART")
	window.location.href = './1890.html'
}


function goToPriorArt()
{
	console.log("GO TO PRIOR ART")
	window.location.href = './degas.html'
}


function getCaption()
{
	return "I think it’s a group of people walking down a street; He seems expressionless; A close up, Of a man’s face."
}


function getPlayerMaxWidth(){
	return 0.12
}



function getSpriteMaxWidth(){
	return 0.20
}


function getPlayerStartX()
{
	return 0.65
}


function getPlayerStartY(){
	return 0.55
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
	return [72, 125]
}


function getCutoutImages(){
	return ['./images/1880Cutouts/1.png', './images/1880Cutouts/2.png']
}