// Функция для конвертации строки в JSON, которая принимает строку в качестве аргумента
function stringToJson(str) {
    // Проверка, является ли строка действительно строкой JSON
    try {
        // Преобразование строки в JSON с помощью функции JSON.parse
        let jsonData = JSON.parse(str);
  
        // Возвращение объекта JSON
        return jsonData;
    } catch (error) {
        /*Начало блока catch, который будет выполнен, если в блоке try произойдет ошибка.
        Возвращение ошибки, если строка не является строкой JSON*/
        return error;
    }
  }