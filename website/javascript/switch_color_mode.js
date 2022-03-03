let colorModeDark = document.querySelector('.colorModeDark');
let colorModeLight = document.querySelector('.colorModeLight');



colorModeDark.onclick = function() {

    localStorage.setItem("darkMode", 'disable');
    check();
}

colorModeLight.onclick = function() {

    localStorage.setItem("darkMode", 'enable');
    check();
}


check();

function check(){
    darkMode = localStorage.getItem("darkMode");
   
    if(darkMode === 'enable'){
        document.body.classList.add('dark');

        $('.colorModeDark').show();
        $('.colorModeLight').hide();
    } else {
        document.body.classList.remove('dark');

        $('.colorModeDark').hide();
        $('.colorModeLight').show();
    }
}