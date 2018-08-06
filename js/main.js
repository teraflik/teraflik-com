$(document).ready(function() {
	$('#pagepiling').pagepiling();
});

$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});