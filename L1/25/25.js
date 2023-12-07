// Функция для создания и добавления элемента с стилем
function createAndAddElementWithStyle() {
    // Создание нового элемента div
    const newDiv = document.createElement('div');
   
    // Установка стиля для нового элемента
    //Установка фона элемента на желтый цвет
    newDiv.style.backgroundColor = 'yellow';
    //Установка цвета текста элемента на красный цвет
    newDiv.style.color = 'red';
    //Установка внутреннего отступа элемента на 10 пикселей
    newDiv.style.padding = '10px';
    //Установка внешнего отступа элемента на 10 пикселей
    newDiv.style.margin = '10px';
   
    // Добавление нового элемента в DOM
    document.body.appendChild(newDiv);
   
    // Установка содержимого для нового элемента
    newDiv.textContent = 'Это новый элемент с установленным стилем.';
   }
   
   // Вызов функции для создания и добавления элемента с стилем
   createAndAddElementWithStyle()