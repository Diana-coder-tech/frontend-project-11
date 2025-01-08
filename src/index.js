import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import validateUrl from './validation.js';
import { initState, watchState } from './state.js';
import { setupView } from './view.js';

const runApp = () => {
  const elements = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    feedback: document.querySelector('.feedback'),
  };

  const state = initState();

  // Создаём наблюдателя для состояния
  const watchedState = watchState(state, setupView(state, elements));

  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(elements.form);
    const url = formData.get('url'); // Получаем URL из формы

    // Валидация URL
    validateUrl(url, state.feeds)
      .then(() => {
        // Если URL валидный, добавляем его в список фидов и очищаем форму
        state.feeds.push(url);
        state.form.state = 'success'; // Успех
        state.form.error = null; // Ошибка очищена
      })
      .catch((err) => {
        // Если ошибка, показываем её в интерфейсе
        state.form.state = 'error'; // Ошибка
        state.form.error = err.message; // Сообщение об ошибке
      });
  });
};

runApp();
