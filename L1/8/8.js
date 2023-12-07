// Функция, которая принимает массив функций и возвращает новую функцию
function createFunction(functions) {
    // Возвращаем новую функцию
    return function(...args) {
        // Создаем пустой массив для результатов
        let results = [];
 
        // Вызываем каждую функцию из массива и сохраняем результаты в массив results
        functions.forEach(func => {
            results.push(func(...args));
        });
 
        // Возвращаем массив результатов
        return results;
    };
 }