// Определение класса книги
class Book {
    // Конструктор класса, который принимает название книги, автора и год издания в качестве аргументов
    constructor(title, author, year) {
        // Определение свойств книги
        this._title = title;
        this._author = author;
        this._year = year;
    }
  
    // Геттеры и сеттеры для свойств книги
    get title() {
        return this._title;
    }
  
    set title(newTitle) {
        this._title = newTitle;
    }
  
    get author() {
        return this._author;
    }
  
    set author(newAuthor) {
        this._author = newAuthor;
    }
  
    get year() {
        return this._year;
    }
  
    set year(newYear) {
        this._year = newYear;
    }
  }
  
  // Создание объекта книги
  let myBook = new Book("Название книги", "Автор книги", 2023);
  
  // Получение свойств книги
  console.log(myBook.title); // Выводит: "Название книги"
  console.log(myBook.author); // Выводит: "Автор книги"
  console.log(myBook.year); // Выводит: 2023
  
  // Изменение свойств книги
  myBook.title = "Новое название книги";
  myBook.author = "Новый автор книги";
  myBook.year = 2024;
  
  // Проверка изменения свойств книги
  console.log(myBook.title); // Выводит: "Новое название книги"
  console.log(myBook.author); // Выводит: "Новый автор книги"
  console.log(myBook.year); // Выводит: 2024