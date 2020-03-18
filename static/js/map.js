/* Яндекс-карта */
console.log("Привет, Яндекс-Карта");
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [44.96385676, 37.32515126],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([44.96386628, 37.32509761], {
                hintContent: '<div class="map__hint">ул. Смолянка, д. 26</div>',
                balloonContent: [
                    '<div class="map__balloon">',
                    '<img class="map__img" src="./images/am-img/content/kolenval-min.png" alt="Ремонт коленчатых валов в Анапе!"/>',
                    'Ремонт коленчатых валов в Анапе! Наш адрес: г.Анапа, х.Воскресенский, ул.Смолянка, д.26',
                    '</div>'
                ].join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: './assets/img/marker.svg',
                iconImageSize: [85, 91],
                iconImageOffset: [-43, -77],
            });
    
    map.geoObjects.add(placemark);
    
}