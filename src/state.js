import onChange from 'on-change';

const initState = () => ({
  feeds: [], // Хранение добавленных фидов
  form: {
    state: 'filling', // 'filling' | 'sending' | 'error' | 'success'
    error: null,      // Сообщение об ошибке валидации
  },
});

const watchState = (state, onUpdate) =>
    onChange(state, (path, value) => {
      console.log(`Изменение в состоянии: ${path} = ${value}`); // Логируем изменения
      onUpdate(path, value);
    });

export { initState, watchState };
