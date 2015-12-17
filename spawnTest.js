

// Sprites for testing 
var testAImg = new Image();
var testBImg = new Image();
var testCImg = new Image();


testAImg.src = "images/testA.png"; 
testBImg.src = "images/testB.png"; 
testBImg.src = "images/testC.png"; 

function sprite(options) {
	var that = {};
	
	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;
	
	return that;
}