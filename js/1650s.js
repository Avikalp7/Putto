
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
	return []
}


function getCutoutImages(){
	return []
}