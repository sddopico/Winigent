
var carousel = {};
carousel.images = ['frame1.png', 'frame2.png', 'frame3.png', 'frame4.png','frame5.png']
var image=$('#transparent');
carousel.counter = 0;

$(document).ready( function () {
	image.css('background-image', 'url(' + carousel.images[0] + ')');
	frameHandler();
});

function changeFrame() {
	image.fadeIn(500, function () {
		console.log('changeFrame')
		carousel.counter++;
		if(carousel.counter == carousel.images.length){
			carousel.counter=0;
		}
		image.css('background-image', 'url(' + carousel.images[carousel.counter] + ')');
		console.log(carousel.images[carousel.counter]);
	});
}

function frameHandler() {
	demo_interval = setInterval(changeFrame, 5000);
}

function stopRun() {
	clearInterval(demo_interval);
}