//Определение шаблона с ID myTemplate
<template id="myTemplate">
 <div>Это новый элемент, созданный с помощью шаблона.</div>
</template>

<script>
// Получение шаблона по его ID
const template = document.getElementById('myTemplate');

// Создание нового элемента на основе шаблона
const newElement = template.content.cloneNode(true);

// Добавление нового элемента в DOM
document.body.appendChild(newElement);
</script>