$(document).ready(function() {
	loadPartners();
	insertPartners();
});

function loadPartners() {
	//get template
	Partners.template = $('#partner_template').html();
	//get container
	Partners.$container = $('.partner_container');
}

function insertPartners() {
	//template using underscore
	var templated_data = _.template(Partners.template, Partners);
	//put template into container
	Partners.$container.html(templated_data);
}