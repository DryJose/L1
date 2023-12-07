// Функция для проверки сложности пароля, которая принимает пароль в кчестве аргумента
function checkPasswordStrength(password) {
    // Определение регулярных выражений для проверки наличия различных символов в пароле
    //Проверка наличия строчных букв в пароле
    const hasLowerCase = /[a-z]/.test(password);
    //Проверка наличия заглавных букв в пароле
    const hasUpperCase = /[A-Z]/.test(password);
    //Проверка наличия чисел в пароле
    const hasNumber = /\d/.test(password);
    //Проверка наличия специальных символов в пароле
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
   
    // Определение длины пароля
    const length = password.length;
   
    // Оценка сложности пароля
    const strength = hasLowerCase + hasUpperCase + hasNumber + hasSpecialChar + (length >= 8 ? 1 : 0);
   
    // Вывод оценки сложности пароля
    console.log(`Оценка сложности пароля: ${strength}/5`);
   
    // Предложение улучшений, если пароль слишком слабый
    if (strength < 3) {
    console.log('Ваш пароль недостаточно безопасный. Попробуйте добавить больше символов или использовать комбинацию букв, цифр и специальных символов.');
    }
   }
   
   // Проверка сложности пароля
   checkPasswordStrength('Password123!');