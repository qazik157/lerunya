// Убедимся, что DOM полностью загружен
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('startConfetti');

     if (!button) {
        console.error('Кнопка "Кликни меня" не найдена!');
        return;
    }

  button.addEventListener('click', function () {
    const count = 200,
      defaults = {
        origin: { y:0.4 },
      };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('photo-modal');
  const modalImage = document.getElementById('modal-image');
  const photos = document.querySelectorAll('.photo img');

  photos.forEach(photo => {
    photo.addEventListener('click', (e) => {
      modalImage.src = e.target.src;
      modal.classList.add('active');
    });
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Проверяем наличие элемента age-timer
  const ageTimerElement = document.getElementById("age-timer");

  if (!ageTimerElement) {
    console.error("Элемент с id 'age-timer' не найден!");
    return;
  }

  function updateAgeTimer() {
    try {
      // Дата начала (27 декабря 00:00)
      const startDate = new Date("2024-12-27T00:00:00");

      // Текущее время
      const now = new Date();

      // Разница во времени в миллисекундах
      const diff = now - startDate;

      if (diff >= 0) {
        // Перевод разницы в минуты, часы и дни
        const minutes = Math.floor(diff / 1000 / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;

        // Обновление текста таймера
        ageTimerElement.textContent = `18 лет, ${days} дней, ${remainingHours} часов, ${remainingMinutes} минут`;
      } else {
        // Если дата ещё не наступила
        ageTimerElement.textContent = "Жди до 27 декабря 00:00!";
      }
    } catch (error) {
      console.error("Ошибка в функции updateAgeTimer:", error);
    }
  }

  // Устанавливаем интервал для обновления таймера каждую минуту
  setInterval(updateAgeTimer, 1000);

  // Запускаем функцию при загрузке страницы
  updateAgeTimer();
});

document.addEventListener("DOMContentLoaded", function () {
  // Элементы кнопок перелистывания
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  // Страницы книги
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  // Устанавливаем начальное состояние z-index для страниц
  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;
  });

  // Функция для перелистывания вперёд
  nextButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      pages[currentPage].style.transform = "rotateY(-180deg)";
      currentPage++;
    } else if (currentPage === pages.length - 1) {
      // Если текущая страница последняя, перейти на первую
      pages[currentPage].style.transform = "rotateY(-180deg)";
      currentPage = 0; // Переход на первую страницу
      setTimeout(() => {
        pages.forEach((page) => (page.style.transform = "rotateY(0deg)")); // Сброс всех страниц
        pages[currentPage].style.transform = "rotateY(0deg)";
      }, 300);
    }
  });

  // Функция для перелистывания назад
  prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      pages[currentPage].style.transform = "rotateY(0deg)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const photo1 = document.querySelector(".photo-1");
  const photo2 = document.querySelector(".photo-2");
  const photo3 = document.querySelector(".photo-3");
  const photo4 = document.querySelector(".photo-4");
  const photo5 = document.querySelector(".photo-5");
  const photo6 = document.querySelector(".photo-6");
  const photo7 = document.querySelector(".photo-7");
  const photo8 = document.querySelector(".photo-8");
  const photo9 = document.querySelector(".photo-9");

  // Пример изменения размера и позиции фото-1 
  photo1.style.width = "350px";
  photo1.style.height = "500px";
  photo1.style.top = "-10px";
  photo1.style.left = "-5px";

  // Пример изменения размера и позиции фото-2 
  photo2.style.width = "300px";
  photo2.style.height = "300px";
  photo2.style.top = "50px";
  photo2.style.left = "30px";

  // Пример изменения размера и позиции фото-3
  photo3.style.width = "300px";
  photo3.style.height = "300px";
  photo3.style.top = "50px";
  photo3.style.left = "40px";

  // Пример изменения размера и позиции фото-4 
  photo4.style.width = "300px";
  photo4.style.height = "300px";
  photo4.style.top = "50px";
  photo4.style.left = "20px";

  // Пример изменения размера и позиции фото-5
  photo5.style.width = "300px";
  photo5.style.height = "300px";
  photo5.style.top = "50px";
  photo5.style.left = "30px";


  // Пример изменения размера и позиции фото-7
  photo7.style.width = "300px";
  photo7.style.height = "300px";
  photo7.style.top = "50px";
  photo7.style.left = "30px";

 // Пример изменения размера и позиции фото-8
  photo8.style.width = "300px";
  photo8.style.height = "300px";
  photo8.style.top = "50px";
  photo8.style.left = "30px";

// Пример изменения размера и позиции фото-9
  photo9.style.width = "300px";
  photo9.style.height = "300px";
  photo9.style.top = "50px";
  photo9.style.left = "30px";
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button1");
  // Массив текстов для каждой кнопки
  const buttonTexts = [
    "Лера , квіточка моя , вітаю тебе з днем народження, я дуже щаслива що в мене є така прекрасна людина як ти , талановита та дуже сильна дівчинка , я бажаю тобі лише щастя , здоровʼя , та самого найкращого «нічого» ахахах, як кажуть)) кохання вам з твоїм пусіком, я тебе люблю !!!! ❤️❤️❤️❤️", // Текст для кнопки 1
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-1`);
      const text = buttonTexts[index]; // Текст для текущей кнопки
      
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button2");
  // Массив текстов для каждой кнопки
  const buttonTexts = [
    "С днем рождения! Я желаю, чтобы ты всегда оставалась такой же крутышкой и оставалась одной из самых смешных людей, которых я когда-либо знала. Ты невероятная, и я тебя очень сильно люблю! Я желаю, что бы твоя жизнь была наполнена счастьем и улыбками. Ты заслуживаешь самого лучшего!", // Текст для кнопки 1
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-2`)
      const text = buttonTexts[index]; // Текст для текущей кнопки
      
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button3");
  // Массив текстов для каждой кнопки
  const buttonTexts = [
    "Лєруся вітаю тебе з твоїм днем народження!! бажаю тобі щоб всі твої мрії збувалися і поруч завжди були щирі люди.  ти неймовірна!", // Текст для кнопки 1
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-3`)
      const text = buttonTexts[index]; // Текст для текущей кнопки
      
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button4");
 // Массив текстов для каждой кнопки
  const buttonTexts = [
    "Лєруша, головне, щоб після того, як ти нарешті стала повнолітньою, ти змогла жити на повну, як ти і мрієш ( як усі ми і бажаємо тобі)", // Текст для кнопки 1
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-4`)
      const text = buttonTexts[index]; // Текст для текущей кнопки
      
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button5");
  // Массив текстов для каждой кнопки
  const buttonTexts = [
    "блин я не знаю что желать кроме счастья здоровья, мейби го чтобы все что ей нравится оставалось таким же, а все что нет, менялось лучшую сторону"
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-5`)
    const text = buttonTexts[index]; // Текст для текущей кнопки
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button6");
  // Массив текстов для каждой кнопки
  const buttonTexts = [
    "Хочу чтобы ты всегда оставалась такой милой и мужчины научились понимать женскую логику.Надеюсь что когда нибудь, ты станешь частичкой нашей crazy family", // Текст для кнопки 1
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-6`)
     const text = buttonTexts[index]; // Текст для текущей кнопки
      
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".album-button7");
 // Массив текстов для каждой кнопки
  const buttonTexts = [
    "Леруся, я бажаю тобі щоб новий твій рік відкрив твою нову яскравішу, вільнішу та щасливішу сторінку твого життя!", // Текст для кнопки 1
  ];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textElement = document.getElementById(`text-output-7`)
      const text = buttonTexts[index]; // Текст для текущей кнопки
      
      textElement.classList.add("active"); // Плавное появление
      textElement.textContent = ""; // Очистка текста
      let i = 0;

      const interval = setInterval(() => {
        textElement.textContent += text[i]; // Добавляем букву
        i++;
        if (i >= text.length) {
          clearInterval(interval); // Останавливаем таймер
          // Через 3 секунды скрываем текст
          setTimeout(() => {
            textElement.classList.remove("active"); // Плавное исчезновение
            textElement.textContent = ""; // Полностью очищаем текст
          }, 3000);
        }
      }, 100); // Скорость появления букв
    });
  });
});


document.querySelectorAll('.hidden-star').forEach(item => {
  item.addEventListener('click', () => {
    alert('Поздравление! Вы нашли сюрприз!');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("redirectButton");

  // Укажите ссылку для перехода
  const link = "https://www.instagram.com/neurastthenia/"; // Замените на вашу ссылку

  button.addEventListener("click", () => {
    window.open(link, "_blank"); // Открытие ссылки в новом окне
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const mySong = document.getElementById("mySong");

  playButton.addEventListener("click", () => {
    if (mySong.paused) {
      mySong.play(); // Воспроизведение песни
    } else {
      mySong.pause(); // Остановка песни при повторном нажатии
    }
  });
});