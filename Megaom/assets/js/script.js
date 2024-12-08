// Получаем элементы
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Функция для открытия модального окна
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Функция для закрытия модального окна
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие окна при клике вне модального содержимого
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

(function() {
  emailjs.init("YOUR_USER_ID"); // Замените на ваш USER ID из EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Остановка стандартного поведения формы

  const serviceID = 'default_service';
  const templateID = 'template_id'; // Замените на ID вашего шаблона в EmailJS

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Сообщение успешно отправлено!');
    }, (err) => {
      alert('Ошибка отправки: ' + JSON.stringify(err));
    });
});