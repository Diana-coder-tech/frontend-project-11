const renderForm = (elements, state) => {
    const { input, feedback, form } = elements;
  
    switch (state.form.state) {
      case 'filling':
        input.classList.remove('is-invalid');
        feedback.textContent = '';
        break;
  
      case 'error':
        input.classList.add('is-invalid');
        feedback.textContent = state.form.error;
        feedback.classList.add('text-danger');
        break;
  
      case 'success':
        input.value = '';
        input.focus();
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
  