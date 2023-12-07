// Функция для рекурсии
function recurse() {
    //Рекурсивный вызов функции recurse
    recurse();
   }
   
   // Функция для определения максимального размера стека вызовов
   function getMaxCallStackSize() {
    let maxSize = 0;
    try {
     recurse();
     //Обработка исключения, которое возникает, когда достигнут максимальный размер стека вызовов
    } catch (e) {
     maxSize = e.stack.split('\n').length;
    }
    //Возвращение максимального размера стека вызовов
    return maxSize;
   }
   
   // Вывод максимального размера стека вызовов
   console.log(`Максимальный размер стека вызовов: ${getMaxCallStackSize()} вызовов`);