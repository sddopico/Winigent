var random={}
random.check=0

$(document).ready(function() {
	$('#menuDrop').click(drop_down);
});

function drop_down() {
	var temp=$('#navigation');
	if(random.check==0){
		temp.css({"display":"block"});
		random.check++;
	} else {
		temp.css({"display":"none"});
		random.check=0;
	}
}