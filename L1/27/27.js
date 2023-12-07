// Функция для добавления анимации для элемента
function animateElement(elementId) {
    // Получение элемента по его ID
    const element = document.getElementById(elementId);
   
    // Создание анимации, которая изменяет положение элемента
    const animation = element.animate([
     // Начальное состояние
     { transform: 'translate(0px, 0px)' },
     // Конечное состояние
     { transform: 'translate(100px, 100px)' }
    ], {
     // Длительность анимации в миллисекундах
     duration: 1000,
     // Функция, которая будет вызвана после окончания анимации
     fill: 'forwards'
    });
   
    // Добавление обработчика события, который будет вызываться при окончании анимации
    animation.onfinish = () => {
     console.log('Анимация завершена');
    };
   }
   
   // Вызов функции для добавления анимации для элемента
   animateElement('myElement')   