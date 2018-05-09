var usedColors = [];
var logo = document.querySelector('.logo');

function changeBackgroundColor() {
    var color = getRandom();

    logo.style.backgroundColor= '#' + color;
}

function getRandom() {
    var changeColor = Math.floor(Math.random()*1000000);

    if (usedColors.indexOf(changeColor) > -1) {
        alert('dublication');
        return getRandom(); //рекурсия - функция вызывает сама себя
    }

    usedColors.push(changeColor);

    return changeColor;
}

logo.addEventListener('mouseenter', changeBackgroundColor,);