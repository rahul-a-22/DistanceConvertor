(function(){

    'use strict';

        let convertType = "miles";
		const heading = document.querySelector("h1");
		const intro = document.querySelector("p");
		const answerDiv = document.getElementById("answer");
		const form = document.getElementById("convert");

		document.addEventListener('keydown',function(event){
			var key = event.code;
			
			if(key === 'KeyK'){
				convertType = "miles";
				heading.innerHTML="<h1>Miles to Kilometers Converter</h1>";
				intro.innerHTML="<p>Type a number of miles and click the button to convert the distance to kilometers.</p>";
			}

			else if(key === 'KeyM'){
				convertType = "kilometers";
				heading.innerHTML="<h1>Kilometers to Miles Converter</h1>";
				intro.innerHTML="<p>Type a number of kilometers and click the button to convert the distance to miles.</p>";
			}

		});

		form.addEventListener('submit',function(event){
			event.preventDefault();

			const distance = parseFloat(document.getElementById('distance').value);

			if(distance ){
				if(convertType=="miles"){
					const converted = (distance * 1.6093).toFixed(3);
					answer.innerHTML=`<h2>${distance} miles = ${converted} kilometers</h2>`;
				}
				else{
					const converted = (distance * 0.6214).toFixed(3);
					answer.innerHTML=`<h2>${distance} kilometers = ${converted} miles</h2>`;
				}
			}
			else{
				answer.innerHTML=`<h2>Please provide a Number...!</h2>`;
			}
		});
})();