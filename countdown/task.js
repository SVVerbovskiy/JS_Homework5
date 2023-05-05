// Задать количество секунд таймера
var totalSeconds = 15;

// Функция, которая обновляет таймер
function updateTimer() {
  // Рассчитать количество часов, минут и секунд
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

  // Добавить ведущий ноль для минут и секунд, если они состоят из одной цифры
  var paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var paddedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Обновить элемент с таймером на странице
  document.getElementById("timer").textContent = hours + ":" + paddedMinutes + ":" + paddedSeconds;

  // Уменьшить количество оставшихся секунд на 1
  totalSeconds--;

  // Если таймер закончился, остановить обновление
  if (totalSeconds < 0) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!!");
  }
}

// Запустить обновление таймера каждую секунду
var timerInterval = setInterval(updateTimer, 1000);