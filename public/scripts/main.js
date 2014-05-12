$(document).ready(function(){
	var countriesArray = []

	var renderCountries = function(){
		$('.countries').empty();

			for(var i=0; i<countriesArray.length; i++){

				var listItem = $('<li></li>');
				var liList = $('<ul></ul>');
				var trav = $('<input class="traveled" type="checkbox">Traveled</input>');
				if(countriesArray[i].traveled === true){
					trav.prop('checked', true);
				}
				liList.append($('<li></li>').append(trav));

				for(key in countriesArray[i]){
					var subItem = $('<li></li>');
					subItem.append(key + ": " + countriesArray[i][key]);
					liList.append(subItem);
				}
				listItem.append(liList);
				$('.countries').append(listItem);  
			}
	}
	$('.load').click(function(){

		$.get('/countries', function(data){
			countriesArray = data;

			renderCountries();

			
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

	$(document).on('click', '.traveled', function(){
		console.log('click');
		var thisBox = $(this).closest('ul').find('li:nth-child(2)').text();
		var thisName = thisBox.split(' ').slice(1).toString();
		for(var i=0; i<countriesArray.length; i++){
			if((countriesArray[i].name === thisName) || ($(this).attr('checked'))){
				countriesArray[i].traveled = true;
				console.log(countriesArray[i]);
			}
			// else{
			// 	countriesArray[i].traveled = false;
			// }
		}
		
		renderCountries();
		// $('.countries').empty();


	})
});