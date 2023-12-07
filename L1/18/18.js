// Проверяем наличие localStorage и отсутствие ключа 'size'
if (localStorage && !localStorage.getItem('size')) {
    var i = 0;
    //Начало блока try, в котором происходит попытка записи данных в localStorage
    try {
      // Тестирование до 10 МБ
      for (i = 250; i <= 10000; i += 250) {
    //Цикл for, который увеличивает i на 250 на каждой итерации, начиная с 250 и заканчивая 10000
        localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
      }
    } catch (e) {
      //Удаление тестовых данных из localStorage
      localStorage.removeItem('test');
      //Запись максимального объема данных, который можно записать в localStorage, в localStorage под ключом 'size'
      localStorage.setItem('size', i - 250);
    }
   }
   
   // Вывод максимального объема данных, который можно записать в localStorage
   console.log(localStorage.getItem('size'));

   //Мы подсчитали максимальный объем данных, который можно записать в localStorage вашего браузера