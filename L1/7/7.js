// Экспорт функции из модуля, которая принимает массив функций в качестве аргумента
export const callFunctionsSequentially = (functions) => {
    // Создаю асинхронную функцию, которая будет вызывать функции последовательно
    const callFunctions = async () => {
    for (let i = 0; i < functions.length; i++) {
     // Вызов функции и вывод её порядкового номера
     await functions[i]();
     console.log(`Function number ${i + 1} has been called`);
    }
    }
    
    // Вызов асинхронной функции
    callFunctions();
   }