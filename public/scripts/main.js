$(document).ready(function(){
	$('.load').click(function(){
		console.log('button clicked')
		$.get('/countries', function(data){

		});
	});
});