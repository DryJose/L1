// Функция для конвертации JSON в строку, которая принимает объект json в качестве аргумента
function jsonToString(jsonData) {
    // Преобразование JSON в строку с помощью функции JSON.stringify
    let jsonString = JSON.stringify(jsonData);
 
    // Возвращение преобразованной строки
    return jsonString;
 }