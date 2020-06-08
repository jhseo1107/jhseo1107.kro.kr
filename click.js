function facebook() {
    var mainscreen = document.getElementById('main');
    var fadeEffect = setInterval(function () {
        if (!mainscreen.style.opacity) {
            mainscreen.style.opacity = 1;
        }
        if (mainscreen.style.opacity > 0) {
            mainscreen.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
    setTimeout(() => {window.open("https://www.facebook.com/seojanghyeob","_self")}, 700);
    
}
function github() {
    var mainscreen = document.getElementById('main');
    var fadeEffect = setInterval(function () {
        if (!mainscreen.style.opacity) {
            mainscreen.style.opacity = 1;
        }
        if (mainscreen.style.opacity > 0) {
            mainscreen.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
    setTimeout(() => {window.open("https://github.com/jhseo1107","_self")}, 700);
    
}

function cv() {
    var mainscreen = document.getElementById('main');
    var fadeEffect = setInterval(function () {
        if (!mainscreen.style.opacity) {
            mainscreen.style.opacity = 1;
        }
        if (mainscreen.style.opacity > 0) {
            mainscreen.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
    setTimeout(() => {window.open("https://jhseo1107.kro.kr/pdf/cv.pdf","_self")}, 700);
    
}
