let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Функция для изменения слайда
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Обработчик событий для свайпа
let startX = 0;
let endX = 0;

const slider = document.querySelector('.slider');

// Начало свайпа
slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

// Конец свайпа
slider.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Обработка свайпа
function handleSwipe() {
    if (startX > endX + 50) { // Свайп влево
        changeSlide(1);
    } else if (endX > startX + 50) { // Свайп вправо
        changeSlide(-1);
    }
}

// Обработчик событий для перетаскивания на ПК
let isDragging = false;
let startXMouse = 0;

slider.addEventListener('mousedown', (event) => {
    isDragging = true;
    startXMouse = event.clientX;
});

slider.addEventListener('mouseup', (event) => {
    if (isDragging) {
        isDragging = false;
        const endXMouse = event.clientX;
        if (startXMouse > endXMouse + 50) { // Перетаскивание влево
            changeSlide(1);
        } else if (endXMouse > startXMouse + 50) { // Перетаскивание вправо
            changeSlide(-1);
        }
    }
});

slider.addEventListener('mouseleave', () => {
    isDragging = false; // Сбрасываем состояние при уходе мыши
});

// Инициализация карт для каждого слайда
document.addEventListener('DOMContentLoaded', function () {
    // Карта для первого памятника
    ymaps.ready(function () {
        const map1 = new ymaps.Map('map1', {
            center: [53.092695, 30.049659], // Координаты для первого памятника
            zoom: 14
        });
        const placemark1 = new ymaps.Placemark([53.092695, 30.049659], {
            balloonContent: 'Братская могила советских войнов'
        });
        map1.geoObjects.add(placemark1);
    });

    // Карта для второго памятника
    ymaps.ready(function () {
        const map2 = new ymaps.Map('map2', {
            center: [53.079385, 30.053811], // Примерные координаты для второго памятника
            zoom: 14
        });
        const placemark2 = new ymaps.Placemark([53.079385, 30.053811], {
            balloonContent: 'Курган славы в г. Рогачев'
        });
        map2.geoObjects.add(placemark2);
    });

  // Карта для третьего памятника
  ymaps.ready(function () {
    const map3 = new ymaps.Map('map3', {
        center: [53.078400, 30.053617], // Примерные координаты для второго памятника
        zoom: 14
    });
    const placemark3 = new ymaps.Placemark([53.078400, 30.053617], {
        balloonContent: 'В честь подразделений, частей и соединений Советской Армии, г.Рогачев'
    });
    map3.geoObjects.add(placemark3);
});

// Карта для четвертого памятника
ymaps.ready(function () {
  const map4 = new ymaps.Map('map4', {
      center: [53.081975, 30.050402], // Примерные координаты для второго памятника
      zoom: 14
  });
  const placemark4 = new ymaps.Placemark([53.081975, 30.050402], {
      balloonContent: 'Памятник воинам-интернационалистам'
  });
  map4.geoObjects.add(placemark4);
});

// Карта для мемориального комплекса "Живым-помнить"
ymaps.ready(function () {
  const map6 = new ymaps.Map('map6', {
      center: [53.071574, 30.040624], // Координаты памятника
      zoom: 14
  });

  const placemark6 = new ymaps.Placemark([53.071574, 30.040624], {
      balloonContent: 'Мемориальный комплекс "Живым-помнить"'
  });

  map6.geoObjects.add(placemark6);
});


});