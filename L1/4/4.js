// Экспорт функции из модуля с json в аргументе
export const jsonToList = (json) => {
    /* Создаю новый узел, используя функцию, которая принимает значение 
    и возвращает объект с этим значением и ссылкой на следующий узел*/
    const createNode = (value) => ({ value, next: null });
    
    // Инициализация головы списка
    let head = null;
    
    // Инициализация предыдущего узла
    let prev = null;
    
    // Прохождение по всем элементам JSON с помощью цикла for...of
    for (const value of json) {
     // Создание нового узла
     const node = createNode(value);
     
     // Если это первый узел, то он становится головой списка
     if (head === null) {
       head = node;
     } else {
       // Иначе, предыдущий узел указывает на новый узел
       prev.next = node;
     }
     
     // Новый узел становится предыдущим узлом для следующей итерации
     prev = node;
    }
    
    // Возвращаю голову списка, которая представляет собой связный список, созданный из json
    return head;
   }