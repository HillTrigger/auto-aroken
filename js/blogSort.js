let sort1 = document.querySelector(".blog__btn-sort.sort1");

sort1.addEventListener("click", (e) => {
  // Получаем коллекцию элементов jQuery
  let posts = $(".blog__post");

  // Преобразуем коллекцию jQuery в массив и сортируем
  posts = Array.from(posts).sort((a, b) => {
    return new Date(b.dataset.date) - new Date(a.dataset.date);
  });

  // Получаем контейнер, куда будем добавлять отсортированные элементы
  let main = document.querySelector(".blog__main");

  // Добавляем отсортированные элементы обратно в контейнер
  posts.forEach((el) => {
    main.appendChild(el);
  });
});

let sort2 = document.querySelector(".blog__btn-sort.sort2");

sort2.addEventListener("click", (e) => {
  // Получаем коллекцию элементов jQuery
  let posts = $(".blog__post");

  // Преобразуем коллекцию jQuery в массив и сортируем
  posts = Array.from(posts).sort((a, b) => {
    return new Date(a.dataset.date) - new Date(b.dataset.date);
  });

  // Получаем контейнер, куда будем добавлять отсортированные элементы
  let main = document.querySelector(".blog__main");

  // Добавляем отсортированные элементы обратно в контейнер
  posts.forEach((el) => {
    main.appendChild(el);
  });
});
