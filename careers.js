career = {}
career.array = [];
$(document).ready(function() {
	loadJobs();
	insertJobs();
});

function loadJobs() {
 for(i=0; i < jobs.Entries.length; i++) {
 	career.array.push('<h2>' + jobs.Entries[i].title + '</h2> <p>Description: ' + jobs.Entries[i].description + '</p> <br> Location: ' + jobs.Entries[i].location + '<br>');
 }
}

function insertJobs() {
	for(j=0; j < career.array.length; j++){
		$('#career_wrapper').append(career.array[j]);
	}
	$('#career_wrapper').append('<br> <h4>Please send your credentials to info@winigent.com and contact us at 425.527.9031 for more information!<h4>');
}