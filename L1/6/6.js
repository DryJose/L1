// Экспорт функции из модуля
export const sortObjects = (array) => {
    // Сортировка массива объектов по возрастанию возраста
    array.sort((a, b) => a.age - b.age);
    
    // Если возраст двух объектов равен, то сортировка происходит по имени методом localeCompare
    array.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return 0;
    });
    
    // Возвращается отсортированный массив
    return array;
   }