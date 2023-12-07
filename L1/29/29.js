//Определение формы с ID myForm
<form id="myForm">
//Поле ввода для имени пользователя    
 <input type="text" name="username" placeholder="Username">
//Поле ввода для пароля    
 <input type="password" name="password" placeholder="Password">
//Кнопка отправки формы    
 <button type="submit">Submit</button>
</form>

<script>
// Получение формы по ее ID
const form = document.getElementById('myForm');

// Обработка отправки формы
form.addEventListener('submit', function(event) {
 // Предотвращение стандартной отправки формы
 event.preventDefault();

 // Создание объекта FormData из формы
 const formData = new FormData(form);

 // Преобразование объекта FormData в объект JavaScript
 const data = Object.fromEntries(formData);

 // Вывод данных формы в консоль
 console.log(data);

 // Отправка данных на сервер
 fetch('https://example.com/api/submit', {
 method: 'POST',
 body: JSON.stringify(data),
 headers: {
  'Content-Type': 'application/json'
 }
 });
});
</script>