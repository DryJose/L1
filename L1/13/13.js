// Базовый класс Shape
class Shape {
    // Конструктор класса, который принимает длину и ширину в качестве аргументов
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
   
    // Метод для расчета площади
    calculateArea() {
      return this.length * this.width;
    }
   
    // Метод для расчета периметра
    calculatePerimeter() {
      return 2 * (this.length + this.width);
    }
   }
   
   // Подкласс Rectangle, представляющий прямоугольник
   class Rectangle extends Shape {
    // Конструктор класса, который вызывает конструктор базового класса
    constructor(length, width) {
      super(length, width);
    }
   }
   
   // Подкласс Circle, представляющий круг
   class Circle extends Shape {
    // Конструктор класса, который вызывает конструктор базового класса
    constructor(radius) {
      super(radius, radius);
    }
   
    // Переопределение метода calculateArea для круга
    calculateArea() {
      return Math.PI * this.length * this.width;
    }
   
    // Переопределение метода calculatePerimeter для круга
    calculatePerimeter() {
      return 2 * Math.PI * this.length;
    }
   }
   
   // Подкласс Triangle, представляющий треугольник
   class Triangle extends Shape {
    // Конструктор класса, который вызывает конструктор базового класса
    constructor(base, height) {
      super(base, height);
    }
   
    // Переопределение метода calculateArea для треугольника
    calculateArea() {
      return 0.5 * this.length * this.width;
    }
   
    // Переопределение метода calculatePerimeter для треугольника
    calculatePerimeter() {
      return this.length + this.width + Math.sqrt(this.length * this.length + this.width * this.width);
    }
   }
   
   // Создание объектов каждого типа фигуры
   let myRectangle = new Rectangle(5, 10);
   let myCircle = new Circle(5);
   let myTriangle = new Triangle(5, 10);
   
   // Вызов методов расчета площади и периметра для каждой фигуры
   console.log(myRectangle.calculateArea()); // Выводит: 50
   console.log(myRectangle.calculatePerimeter()); // Выводит: 30
   console.log(myCircle.calculateArea()); // Выводит: 78.53981633974483
   console.log(myCircle.calculatePerimeter()); // Выводит: 31.41592653589793
   console.log(myTriangle.calculateArea()); // Выводит: 25
   console.log(myTriangle.calculatePerimeter()); // Выводит: 25.98076211353316