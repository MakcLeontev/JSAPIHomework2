// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.
// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// Контейнер для отображения текущего изображения.
// Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// Навигационные точки (индикаторы) для быстрого переключения между изображениями.
// Используйте HTML для создания элементов интерфейса.

// Используйте JavaScript для обработки событий:

// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const items = document.querySelectorAll('.item');
const liItems = document.querySelectorAll('li');
const carusel = document.querySelector('.carusel-box');
const indicators = document.querySelector('.indicators');


btnNext.addEventListener('click', () => {
    try {
        items.forEach(element => {
            if (element.classList.contains('change')) {
                if (element.nextElementSibling) {
                    element.classList.remove('change');
                    element.nextElementSibling.classList.add('change');
                    liItems.forEach(el => {
                        if (el.getAttribute('data-slide-to') === element.nextElementSibling.getAttribute('data-slide-to')) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    });
                    throw new Error('1');
                } else {
                    carusel.lastElementChild.classList.remove('change');
                    carusel.firstElementChild.classList.add('change');
                    indicators.lastElementChild.classList.remove('active');
                    indicators.firstElementChild.classList.add('active');
                    throw new Error('1');
                }
            }
        });
    } catch (error) {
    }
});

btnPrev.addEventListener('click', () => {
    try {
        items.forEach(element => {
            if (element.classList.contains('change')) {
                if (element.previousElementSibling) {
                    element.classList.remove('change');
                    element.previousElementSibling.classList.add('change');
                    liItems.forEach(el => {
                        if (el.getAttribute('data-slide-to') === element.previousElementSibling.getAttribute('data-slide-to')) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    });
                    throw new Error('1');
                }else {
                    carusel.lastElementChild.classList.add('change');
                    carusel.firstElementChild.classList.remove('change');
                    indicators.lastElementChild.classList.add('active');
                    indicators.firstElementChild.classList.remove('active');
                    throw new Error('1');
                }
            }
        });
    } catch (error) {
    }
})
liItems.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.indicatorsItem');
        liItems.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
        });
        item.classList.add('active');
        items.forEach(el => {
            if (el.getAttribute('data-slide-to') === item.getAttribute('data-slide-to')) {
                el.classList.add('change');
            } else {
                el.classList.remove('change');
            }
        });
    })
});
