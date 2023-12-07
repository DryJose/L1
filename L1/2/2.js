const isStrangeNumber = (n) => {
    // Проверка, является ли введенное значение числом
    if (!Number.isInteger(n)) {
      return false;
    }
    
    // Инициализирую переменную sum, которая будет хранить сумму всех делителей числа
    let sum = 0;
    
    // Цикл for для перебора всех чисел от 1 до n
    for(let i = 1; i <= n; i++) {
      // Если число i делит n без остатка, то добавляем i к сумме
      if(n % i === 0) {
        sum += i;
      }
    }
    
    // Если сумма всех делителей равна самому числу, то это странное число - возвращает true
    return sum === n;
   }