/*Генератор изображений для галереи слайдера по ссылкам */

var url = "..\/..\/links.txt";




function getData(url, ready) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status !== 404) {
            ready(this.responseText);
        }
    }
    xhr.send();
}