// Функция для загрузки изображения
function loadImage(url) {
    // Создание нового объекта Image
    const img = new Image();
   
    // Создание нового промиса
    return new Promise((resolve, reject) => {
      // Установка URL изображения
      img.src = url;
   
      // Обработчик события загрузки изображения
      img.onload = () => {
        // Промис разрешается с данными об изображении
        resolve(img);
      };
   
      // Обработчик события ошибки загрузки изображения
      img.onerror = () => {
        // Промис отклоняется с сообщением об ошибке
        reject(new Error(`Failed to load image from ${url}`));
      };
    });
   }
   
   // Использование функции для загрузки изображения
   loadImage('https://example.com/image.jpg')
    .then(img => {
      // Обработка загруженного изображения
      console.log(`Image loaded: ${img.src}`);
    })
    .catch(error => {
      // Обработка ошибки загрузки изображения
      console.error(`Failed to load image: ${error.message}`);
    });