// Функция для рекурсивного обхода дерева DOM
function walkDOM(node, func) {
    // Выполнение действия с узлом
    func(node);
   
    // Обработка всех дочерних узлов узла
    for (let i = 0; i < node.childNodes.length; i++) {
    //Рекурсивный вызов функции walkDOM для каждого дочернего узла
    walkDOM(node.childNodes[i], func);
    }
   }
   
   // Вызов функции для рекурсивного обхода дерева DOM
   walkDOM(document.body, function(node) {
    // Вывод информации о теге в консоль
    console.log(node.tagName);
   })