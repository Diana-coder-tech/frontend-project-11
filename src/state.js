import onChange from 'on-change';

const initState = () => ({
  feeds: [], // Хранение добавленных фидов
  posts: [], 
  form: {
    state: 'filling', // 'filling' | 'sending' | 'error' | 'success'
    error: null,      // Сообщение об ошибке валидации
  },
  loading: {
    state: 'idle', // 'idle' | 'loading' | 'error' | 'success'
    error: null,   // Ошибки загрузки
  },
});

const watchState = (state, onUpdate) =>
    onChange(state, (path, value) => {
      console.log(`Изменение в состоянии: ${path} = ${value}`); // Логируем изменения
      onUpdate(path, value);
    });

export { initState, watchState };
