$(document).ready(function(){
	$('.load').click(function(){

		$.get('/countries', function(data){

			$('.countries').empty();

			for(var i=0; i<data.length; i++){

				var listItem = $('<li></li>');

				for(key in data[i]){
					listItem.append("<p>" + key + ": " + data[i][key] + "</p>");
				}

				$('.countries').append(listItem);  
			}
		});
	});

	$('.search').click(function(){
		$.get('/search', {country: $('#searchBox').val()} , function(data){

			$('.countries').empty();


			for(var i=0; i<data.length; i++){

				var listItem = $('<li></li>');

				for(key in data[i]){
					listItem.append("<p>" + key + ": " + data[i][key] + "</p>");
				}

			}

			$('.countries').append(listItem);  

		});

		return false;
	});
});