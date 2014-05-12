$(document).ready(function(){
	$('.load').click(function(){
		console.log('button clicked')
		$.get('/countries', function(data){
			for(var i=0; i<data.length; i++){
				var listItem = $('<li></li>');

				for(key in data[i]){
					listItem.append("<p>" + key + ": " + data[i][key] + "</p>");
				}

				$('.countries').append(listItem);  
			}
		});
	});
});