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

  const watchedState = watchState(state, setupView(state, elements));

  elements.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(elements.form);
    const url = formData.get('url');

    validateUrl(url, state.feeds)
      .then(() => {
        state.feeds.push(url);
        state.form.state = 'success';
        state.form.error = null;
      })
      .catch((err) => {
        state.form.state = 'error';
        state.form.error = err.message;
      });
  });
};

runApp();
