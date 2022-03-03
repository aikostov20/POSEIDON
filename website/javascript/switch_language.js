var lang = {};

lang.bg = {
	_tr_Home: 'Начало',
	_tr_Content : 'Съдържание',
	_tr_AboutUs : "За нас",
	_tr_Kid : "За деца"

	
};

lang.en = {
	_tr_Home: 'Home',
	_tr_Content : 'Content',
	_tr_AboutUs : 'About us',
	_tr_Kid : "Kid"
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