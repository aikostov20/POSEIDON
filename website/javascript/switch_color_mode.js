let colorMode = document.querySelector('.colorMode');
let colorModeLight = document.querySelector('.colorModeLight');
let colorModeDark = document.querySelector('.colorModeDark');

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add('dark');
    colorModeDark.classList.add('close');
    colorModeDark.classList.remove('open');
    colorModeLight.classList.add('open');
    colorModeLight.classList.remove('close');
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove('dark');
    colorModeDark.classList.remove('open');
    colorModeDark.classList.add('close');
    colorModeLight.classList.remove('close');
    colorModeLight.classList.add('open');
    localStorage.setItem("darkMode", null);
}

if(darkMode === "enabled"){
    enableDarkMode();
}

colorMode.onclick = function() {
    colorMode.classList.toggle('active');
    darkMode = localStorage.getItem("darkMode");
    if(darkMode != "enabled"){
        enableDarkMode();
        console.log("darkMode " + darkMode);
    }
    else{
        disableDarkMode();
        console.log("darkMode " + darkMode);
    }
}