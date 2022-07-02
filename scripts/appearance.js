function themeChecker(){
    appear();
    if(localStorage.getItem('theme') === 'dark'){
        if(document.body.style.color === '#1f1f1f')
            darkmode();
            localStorage.setItem('theme', 'dark');
    }else{
        if(document.body.style.color !== '#1f1f1f')
            darkmode();
            localStorage.setItem('theme', 'light');
    }
}

function darkmode(){
    document.body.classList.toggle("darkmode");
    if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'light');
    }else{
        localStorage.setItem('theme', 'dark');
    }
    appear();
}

window.onscroll = function() {appear()};
let header = document.getElementById("header");
let logo = document.getElementById("logo");

function appear() {
    if (window.scrollY > 0) {
        if(localStorage.getItem('theme') !== 'dark'){
            header.style.backgroundColor = '#101010DD';
        }else{
            header.style.backgroundColor = '#ffffffdd';
        }
        logo.style.opacity = '1';
    } else {
        header.style.backgroundColor = '#00000000';
        if(document.title === 'Filip Naskovski'){
            logo.style.opacity = '0';
        }else{
            logo.style.opacity = '1';
        }

    }

}