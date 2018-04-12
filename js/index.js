
$(document).ready(function(){

	var bugsCount = 100
	var width = $('.painting').width()
	var height = $('.painting').height()

	var depthMap = new Image(width, height)
    depthMap.src = './art/ballet_depth.png'
    depthMap.crossOrigin = "anonymous"
    depthMap.onload = () => {
		var offScreenCanvas= document.createElement('canvas');
		//$('body').append($(offScreenCanvas))
	    offScreenCanvas.width= width;
	    offScreenCanvas.height= height;
	    var context= offScreenCanvas.getContext("2d");
	    context.drawImage(depthMap, 0, 0, width, height)
	    var imgd = context.getImageData(0, 0, width, height);
		var pix = imgd.data;
		console.log(pix)

		for(var i = 0; i < bugsCount; i++)
		{
			var x = Math.ceil(Math.random()*width)
			var y = Math.ceil(Math.random()*height)
			var hb = new Huggabug(x,y)
			hb.buildElements()
		}
    }
})