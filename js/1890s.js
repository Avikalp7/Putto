
function goToNextArt()
{
	console.log("GO TO NEXT ART")
	//window.location.href = './1650.html'
}


function goToPriorArt()
{
	console.log("GO TO PRIOR ART")
	window.location.href = './degas.html'
}


function getCaption()
{
	return "I think it’s a view of a city street; A close up, Of a white wall."
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
	return [208, 237, 235]
}


function getCutoutImages(){
	return ['./images/1890Cutouts/1.png', './images/1890Cutouts/2.png', './images/1890Cutouts/3.png']
}



