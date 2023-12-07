// Функция для вызова document.write()
function callDocumentWrite() {
    //Запись строки в поток документа
    document.write('<p>Hello, world!</p>');
   }
   
   /* Вызов document.write() внутри document.write()
   Запись первой строки в поток документа*/
   document.write('<p>First paragraph.</p>');
   callDocumentWrite();
   document.write('<p>Second paragraph.</p>');