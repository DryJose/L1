// Импорт библиотеки Moment.js
import moment from 'moment';

// Определяю функцию, которая принимает дату в качестве аргумента
function workWithDates(date) {
 // Создаю объект Moment с заданной датой
 const momentDate = moment(date);

 // Возвращаю объекта Moment
 return momentDate;
}

// Экспортируем функцию для работы с датами
export default workWithDates;
