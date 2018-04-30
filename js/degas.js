
function goToNextArt()
{
	window.location.href = './1650.html'
}


function getCaption()
{
	return "I think it’s a person standing next to a horse; A close up, Of a blur."
}


function getPlayerStartX()
{
	return 0.8
}


function getPlayerStartY(){
	return 0.9
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
	return [104,
			161,
			181,
			150,
			112]
}


function getCutoutImages(){
	return ['./images/degasCutouts/Agnes.png',
			'./images/degasCutouts/Adele.png',
			'./images/degasCutouts/Celine.png',
			'./images/degasCutouts/Elena.png',
			'./images/degasCutouts/Jodi.png',]
}