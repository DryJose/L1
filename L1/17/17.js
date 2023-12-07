// Импорт библиотеки Google Maps
import { Loader } from '@googlemaps/js-api-loader';

// Функция для дебоунсинга
function debounce(func, wait) {
 let timeout;
 return function executedFunction(...args) {
  const later = () => {
    clearTimeout(timeout);
    func(...args);
  };
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
 };
}

// Функция для геокодирования адреса
async function geocodeAddress(address) {
 // Создание экземпляра загрузчика Google Maps
 const loader = new Loader({
  apiKey: 'API_КЛЮЧ',
  version: 'weekly',
 });

 // Загрузка Google Maps
 await loader.load();

 // Создание объекта Geocoder
 const geocoder = new google.maps.Geocoder();

 // Геокодирование адреса
 geocoder.geocode(
  { address: address },
  (results, status) => {
    if (status === 'OK') {
      // Обработка результатов геокодирования
      console.log(results);
    } else {
      // Обработка ошибок геокодирования
      console.error(`Geocode was not successful for the following reason: ${status}`);
    }
  }
 );
}

// Использование функции для геокодирования адреса с дебоунсингом
const debouncedGeocodeAddress = debounce(geocodeAddress, 300);

// Использование дебоунсированной функции для геокодирования адреса
debouncedGeocodeAddress('1600 Amphitheatre Parkway, Mountain View, CA');