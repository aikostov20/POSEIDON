var lang = {};

lang.bg = {
	_tr_Home: 'Начало',
	_tr_Content : 'Съдържание',
	_tr_AboutUs : "За нас",
	_tr_Kid : "За деца",

	/*	Carousel overlay text	*/
	_tr_Carousel_geophysical: "Геофизични",
	_tr_Carousel_hydrological: "Хидрологични",
	_tr_Carousel_climatological: "Климатологични",
	_tr_Carousel_meteorological: "Метеорологични",
	
	/*	Names	*/
	_tr_Alexander_Kostov : "Александър Костов",
	_tr_Georgi_Kotakov : "Георги Котаков",
	_tr_Ivailo_Dimitrov : "Ивайло Димитров",
	_tr_Dimitur_Yoldov : "Димитър Йолдов",

	/*	Roles	*/
	_tr_Scrum_Trainer : "Лидер",
	_tr_Backend_Developer : "Бекенд Разработчик",
	_tr_Frontend_Developer : "Фронтенд Разработчик",
	_tr_Designer : "Дизайнер"
};

lang.en = {
	_tr_Home: 'Home',
	_tr_Content : 'Content',
	_tr_AboutUs : 'About us',
	_tr_Kid : "For kids",

	/*	Carousel overlay text	*/
	_tr_Carousel_geophysical: "Geophysical",
	_tr_Carousel_hydrological: "Hydrological",
	_tr_Carousel_climatological: "Climatological",
	_tr_Carousel_meteorological: "Meteorological",
	
	/*	 Names	*/
	_tr_Alexander_Kostov : "Alexander Kostov",
	_tr_Georgi_Kotakov : "Georgi Kotakov",
	_tr_Ivailo_Dimitrov : "Ivailo Dimitrov",
	_tr_Dimitur_Yoldov : "Dimitur Yoldov",

	/*	Roles	*/
	_tr_Scrum_Trainer : "Scrum Trainer",
	_tr_Backend_Developer : "Backend Developer",
	_tr_Frontend_Developer : "Frontend Developer",
	_tr_Designer : "Designer"
};

function translate(){

	//Get current language
	var current_lang = localStorage.getItem('current_lang');

	//Translate
	$.each( lang[current_lang], function( key, value ) {
		$('.'+key).text(value);
	});

	//Change Flag
	if(current_lang == 'en'){
		$('#flagIMG').attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png","alt","UK Flag");
	} else {
		$('#flagIMG').attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/2560px-Flag_of_Bulgaria.svg.png","alt","BG Flag");
	}
}


function change_language(new_lang){
	localStorage.setItem('current_lang', new_lang);
	translate();
}


$(document).ready(function(){
	translate();
});



let flag = document.querySelector('.flagLink');

flag.onclick = function() {
	if(localStorage.getItem('current_lang') == 'bg'){
		change_language('en');
	} else {
		change_language('bg');
	}

}