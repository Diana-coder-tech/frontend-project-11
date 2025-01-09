import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import i18next from './i18n.js';
import validateUrl from './validation.js';
import { initState, watchState } from './state.js';
import { setupView } from './view.js';
console.log('setupView:', setupView);
import fetchRss from './api.js';
import parseRss from './parser.js';

const runApp = () => {
  const elements = {
    form: document.querySelector('form'),
    input: document.querySelector('#rss-input'),
    feedback: document.querySelector('.feedback'),
    heading: document.querySelector('h1'),
    subheading: document.querySelector('label[for="rss-input"]'),
    button: document.querySelector('button'),
    feedsContainer: document.querySelector('.feeds'),
    postsContainer: document.querySelector('.posts'),
  };

  const state = initState();

  elements.heading.textContent = i18next.t('form.heading');
  elements.subheading.textContent = i18next.t('form.subheading');
  elements.input.placeholder = i18next.t('form.placeholder');
  elements.button.textContent = i18next.t('form.button');

  const watchedState = watchState(state, setupView(state, elements));

  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formData = new FormData(elements.form);
    const url = formData.get('url').trim();
  
    console.log('Проверяем URL:', url);
    console.log('Список фидов:', state.feeds);
  
    validateUrl(url, state.feeds.map((feed) => feed.url))
    .then(() => {
      state.loading.state = 'loading';
      state.loading.error = null;
      return fetchRss(url);
    })
    .then((data) => {
      const { feed, posts } = parseRss(data);

      // Генерация ID для каждого фида и поста
      const feedId = Date.now();
      const postsWithId = posts.map((post) => ({ ...post, feedId, id: Date.now() + Math.random() }));

      // Обновление состояния
      state.feeds.push({ id: feedId, url, ...feed });
      state.posts = [...state.posts, ...postsWithId];
      state.loading.state = 'success';
    })
      .catch((err) => {
        console.error('Ошибка валидации:', err.message);
        state.loading.state = 'error';
        state.loading.error = err.message;
      });
  });  
};

runApp();
