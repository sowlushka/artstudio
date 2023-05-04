/*Генератор изображений для галереи слайдера по ссылкам */


var linksURL = "..\/..\/links.txt";
var txt = DownloadURL(linksURL);//Считываем ссылки на сайты с изображениями
var links = txt.split('\r\n');

var imgStartLink = "https://img2.rudalle.ru/images/";// Стартовая часть линков на изображения
var galleryContent;

//var arrXHR = new Array(links.length);
var imgLink = new Array(links.length);//Массив изображений

for (i = 0; i < links.length; ++i)
//В цикле создаём массив объектов для асинхронной загрузки линков
{
    imgLink[i] = createImgURL(links[i]);
    //Заполняю галерею по мере получения информации о линках на изображения
    //galleryTemplate(links[i], imgLink[i],'Рис.'+i,'');
    let html=document.getElementById('itc-slider__items');
    html.innerHTML=html.innerHTML.replace('<!--{items}-->', galleryTemplate(links[i], imgLink[i],'Рис.'+i,''));


    /*
        arrXHR[i] = new XMLHttpRequest();
        arrXHR[i].open('GET', links[i], true);
        arrXHR[i].send();
        arrXHR[i].onreadystatechange = function () {
            if (this.readyState != 4) return;
            if (this.status == 200)
            //Загрузка выполнена успешно, обрабатываем результат
            {
                var html = this.responseText;//Читаю сайт в переменную
    
            }
        }
    */
}





function DownloadURL(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    oRequest.send();

    return oRequest.responseText;
};

function createImgURL(html0) {
    mainPart = html0.replace('https://rudalle.ru/check_kandinsky2/', '').replace('#', '');
    var htmlPart = "";//
    for (let i = 0; i < 6; i += 2) {
        htmlPart += mainPart.substr(i, 2);
        htmlPart += '/';

    }
    return imgStartLink + htmlPart + mainPart + '_00000.jpg';
}

function galleryTemplate(link_site, link_img, galleryHeader, galleryText){
    return `
    <div class="itc-slider__item">
        <div class="production-slider-card">
            <a href="${link_site}" target="_blank">
                <div class="production-slider-card-img">
                    <img src="${link_img}" alt="$img_name">
                </div>
                <div class="production-slider-card-info">
                    <h4>${galleryHeader}</h4>
                    <div>
                        ${galleryText}
                    </div>
                </div>
            </a>
        </div>
    </div>
    <!--{items}-->
    `;
}