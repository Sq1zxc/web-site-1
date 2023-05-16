// Скрипт для изменения цвета
var square1 = document.querySelector('#section-1');
var square2 = document.querySelector('#section-2');
var square3 = document.querySelector('#section-3');
var square4 = document.querySelector('#section-4');
var square5 = document.querySelector('#section-5');
var square6 = document.querySelector('#section-6');
var color = document.querySelector('#col');
color.oninput = function(){
	square1.style.backgroundColor = color.value;
	square2.style.backgroundColor = color.value;
	square3.style.backgroundColor = color.value;
	square4.style.backgroundColor = color.value;
	square5.style.backgroundColor = color.value;
	square6.style.backgroundColor = color.value;
}



// Скрипт для слайдера и кнопок

pictures = [
	'imgonline-com-ua-Resize-TTReF9escMU.jpg',
	'https://www.holidaytravel.co/uploaded_files/destination_img/2016_04580f5394a8020bandhavgarh-tourist-and-resorts-guide-qpr.jpg',
	'https://shots.codepen.io/nik5f94/pen/rJBzbr-512.jpg?version=1517130607'
]

img = document.querySelector('.image');

count = 1;

document.querySelector('.left').onclick = function() 
{  //Реакция на нажатие левой кнопки
	if (count == 0) 
	{
		img.style.backgroundImage = 'url(' + pictures[pictures.length - 1] + ')';
		count = pictures.length - 1;
	}
		else
			{
				img.style.backgroundImage = 'url(' + pictures[count - 1] + ')';
				count--;
			}
}

document.querySelector('.right').onclick = function() 
{ //Реакция на нажатие правой кнопки
	if (count == pictures.length - 1) 
	{
		img.style.backgroundImage = 'url(' + pictures[0] + ')';
		count = 0;
	}	
		else
			{
				count++;
				img.style.backgroundImage = 'url(' + pictures[count] + ')';
			}
}
