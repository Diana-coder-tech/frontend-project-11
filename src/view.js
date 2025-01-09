const renderForm = (elements, state) => {
    const { input, feedback } = elements;
  
    console.log('Рендерим форму:', state.form.state);
  
    switch (state.form.state) {
      case 'filling':
        input.classList.remove('is-invalid');
        feedback.textContent = '';
        feedback.classList.remove('text-danger');
        break;
  
      case 'error':
        console.log('Состояние изменилось на error:', state.form.error);
        input.classList.add('is-invalid');
        feedback.textContent = state.form.error;
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        break;
  
      case 'success':
        console.log('Состояние success. Поле ввода очищается.');
        input.value = '';
        input.focus();
        feedback.textContent = i18next.t('success');
        feedback.textContent = 'RSS добавлен успешно!';
        feedback.classList.remove('text-danger');
        feedback.classList.add('text-success');
        break;

      case 'success':
        console.log('Состояние изменилось на success:', state.form);
        break;
          
  
      default:
        break;
    }
  };

  export const setupView = (state, elements) => {
    renderForm(elements, state);
  
    return (path) => {
      if (path.startsWith('form')) {
        console.log('Вызов renderForm для пути:', path);
        renderForm(elements, state);
      }
    };
  };
  