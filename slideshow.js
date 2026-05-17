var i = 0;
var path = new Array();

// List of images
path[0] = "image/01.jpg";
path[1] = "image/02.jpg";
path[2] = "image/03.jpg";
path[3] = "image/04.jpg";
path[4] = "image/05.jpg";

function swapImage()
{
	document.slide.src = path[i]; 
	if(i < path.length - 1) i++; else i=0;
	setTimeout("swapImage()", 3000);
}

window.onload=swapImage;

// 3000 equals 3 seconds