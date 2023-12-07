// Импорт библиотеки VK
import VK from 'vk-io';

// Создание экземпляра VK
const vk = new VK({
 token: 'ТОКЕН',
 apiVersion: '5.131',
});

// Функция для получения списка постов из паблика
async function getPosts(ownerId, offset = 0) {
 // Получение списка постов из паблика
 const posts = await vk.api.wall.get({
   owner_id: ownerId,
   offset: offset,
   count: 10,
 });

 // Кэширование постов в localStorage
 const cachedPosts = JSON.parse(localStorage.getItem('posts')) || [];
 localStorage.setItem('posts', JSON.stringify([...cachedPosts, ...posts.items]));

 // Возвращение списка постов
 return posts.items;
}

// Функция для отображения списка постов в виджете
function displayPosts(posts) {
 // Создание элемента для каждого поста
 const postElements = posts.map(post => {
   const postElement = document.createElement('div');
   postElement.textContent = post.text;
   return postElement;
 });

 // Добавление элементов постов в виджет
 const widget = document.getElementById('widget');
 postElements.forEach(postElement => {
   widget.appendChild(postElement);
 });
}

// Функция для загрузки новых постов при прокрутке содержимого виджета до конца
function loadMorePosts() {
 const widget = document.getElementById('widget');
 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       const ownerId = entry.target.getAttribute('data-owner-id');
       const offset = entry.target.getAttribute('data-offset');
       getPosts(ownerId, offset).then(posts => {
         displayPosts(posts);
       });
     }
   });
 });

 const lastPostElement = widget.lastElementChild;
 observer.observe(lastPostElement);
}

// Загрузка и отображение первых постов
getPosts('OWNER_ID').then(posts => {
 displayPosts(posts);
 loadMorePosts();
});