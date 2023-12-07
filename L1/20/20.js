// Функция для подсчета объема памяти занимаемого данными в LocalStorage
function calculateMemoryUsage() {
    // Получение всех ключей из LocalStorage
    const keys = Object.keys(localStorage);
   
    // Подсчет общего объема памяти занимаемого данными
    const totalSize = keys.reduce((total, key) => {
     const item = localStorage.getItem(key);
     return total + (new Blob([item]).size);
    }, 0);
   
    // Вывод объема памяти занимаемого данными в LocalStorage
    console.log(`Объем памяти занимаемого данными в LocalStorage: ${totalSize} байт`);
   
    // Вывод максимального размера хранилища
    console.log(`Максимальный размер хранилища: ${localStorage.getQuota()} байт`);
   }
   
   // Отслеживание изменений в LocalStorage
   const observer = new MutationObserver(calculateMemoryUsage);
   observer.observe(window.localStorage, {
    attributes: true,
    attributeFilter: ['length']
   });
   
   // Вызываем функцию для подсчета объема памяти занимаемого данными в LocalStorage
   calculateMemoryUsage();