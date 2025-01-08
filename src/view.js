const renderForm = (elements, state) => { 
    const { input, feedback } = elements;
  
    switch (state.form.state) {
      case 'filling':
        input.classList.remove('is-invalid');
        feedback.textContent = ''; // Убираем текст ошибки
        break;
  
      case 'error':
        input.classList.add('is-invalid'); // Добавляем красную рамку
        feedback.textContent = state.form.error; // Выводим ошибку
        feedback.classList.add('text-danger'); // Делаем текст красным
        break;
  
      case 'success':
        input.value = ''; // Очищаем инпут
        input.focus(); // Устанавливаем фокус
        break;
  
      default:
        break;
    }
  };
  
  export const setupView = (state, elements) => {
    renderForm(elements, state);
  
    return (path, value) => {
      if (path.startsWith('form')) {
        renderForm(elements, state);
      }
    };
  };
  