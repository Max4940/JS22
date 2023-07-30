let center = [55.72130263752671,37.57014167790981];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 15
	});

	let placemark = new ymaps.Placemark(center, {
    balloonContent: `
      <div class="balloon__title">Knightsbridge Private Park</div>
      <div class="balloon__type">Жилой комплекс</div>
      <div class="balloon__address">Москва, ул. Ефремова, 19, к. 1-4'</div>
      <div class="balloon__contacts">
        <a href="tel:+7 (495) 542-99-91">+7 (495) 542-99-91</a>
      </div>
    </div>
  `
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/geo.png",
		iconImageSize: [45, 60],
		iconImageOffset: [-30, -60]
	});

  let placemark1 = new ymaps.Placemark([55.72134214467889,37.57273019606739], {
		balloonContent: `
      <div class="balloon__title">Батони</div>
      <div class="balloon__type">Ресторан, кафе</div>
      <div class="balloon__address">Москва, Комсомольский проспект, 42, стр. 3</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (499) 713-86-30">+7 (499) 713-86-30</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/cafe.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark2 = new ymaps.Placemark([55.723165506259924,37.56769428696142], {
		balloonContent: `
      <div class="balloon__title">Домино'с Пицца</div>
      <div class="balloon__type">Пиццерия, доставка еды и обедов, кофейня</div>
      <div class="balloon__address">Москва, улица Доватора, 11, корп. 1</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (495) 478-88-81">+7 (495) 478-88-81</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/cafe.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark3 = new ymaps.Placemark([55.7212144921409,37.564762456722235], {
		balloonContent: `
      <div class="balloon__title">Продукты</div>
      <div class="balloon__type">Магазин продуктов</div>
      <div class="balloon__address">Москва, улица Хамовнический Вал, 32</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (499) 246-60-70">+7 (499) 246-60-70</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/food.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark4 = new ymaps.Placemark([55.72285630569882,37.5753390043972], {
		balloonContent: `
      <div class="balloon__title">ВкусВилл</div>
      <div class="balloon__type">Магазин продуктов, супермаркет</div>
      <div class="balloon__address">Москва, Комсомольский проспект, 38/16</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (800) 550-86-02">+7 (800) 550-86-02</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/food.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark5 = new ymaps.Placemark([55.72245021603718,37.57015555715708], {
		balloonContent: `
      <div class="balloon__title">More SPA Prevention</div>
      <div class="balloon__type">Косметология, спа-салон, медцентр, клиника</div>
      <div class="balloon__address">Москва, улица Ефремова, 19, корп. 1</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (495) 445-99-71">+7 (495) 445-99-71</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/beauty.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark6 = new ymaps.Placemark([55.7218656734514,37.563352720425584], {
		balloonContent: `
      <div class="balloon__title">LA’Театр</div>
      <div class="balloon__type">Театр</div>
      <div class="balloon__address">Москва, улица Хамовнический Вал, 34</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/cinema.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark7 = new ymaps.Placemark([55.72229282907939,37.56636452250863], {
		balloonContent: `
      <div class="balloon__title">Университетская клиническая больница № 4 Клинического центра Первого Московского государственного медицинского университета имени И.М. Сеченова</div>
      <div class="balloon__type">Больница для взрослых, диагностический центр, медцентр, клиника</div>
      <div class="balloon__address">Москва, улица Доватора, 15с1</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (499) 246-65-04">+7 (499) 246-65-04</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/health.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark8 = new ymaps.Placemark([55.72045827484916,37.5691857272858], {
		balloonContent: `
      <div class="balloon__title">ГБОУ школа № 57</div>
      <div class="balloon__type">Общеобразовательная школа</div>
      <div class="balloon__address">Москва, улица Хамовнический Вал, 26</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (499) 242-18-12">+7 (499) 242-18-12</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/study.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

  let placemark9 = new ymaps.Placemark([55.72078323598899,37.56786339824145], {
		balloonContent: `
      <div class="balloon__title">ГБОУ школа № 171, СП № 5</div>
      <div class="balloon__type">Детский сад, ясли</div>
      <div class="balloon__address">Москва, улица Хамовнический Вал, 28с2</div>
      <div class="balloon__contacts">
      <a href="tel:+7 (499) 242-17-92">+7 (499) 242-17-92</a>
				</div>
			</div>
		`
  }, {
		iconLayout: 'default#image',
		iconImageHref: src="/img/map_icon/kindergarten.png",
		iconImageSize: [60, 80],
		iconImageOffset: [-30, -50]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил

	map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
  map.geoObjects.add(placemark8);
  map.geoObjects.add(placemark9);
}

ymaps.ready(init);