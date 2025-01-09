import i18next from 'i18next';

const resources = {
  en: {
    translation: {
      success: 'RSS has been successfully added!',
      errors: {
        invalidUrl: 'The link must be a valid URL.',
        duplicateUrl: 'This RSS already exists.',
        emptyField: 'URL cannot be empty.',
      },
      form: {
        placeholder: 'Enter RSS feed URL',
        button: 'Add',
        heading: 'RSS Reader',
        subheading: 'Start reading RSS today! It’s easy, it’s beautiful.',
      },
    },
    // Добавьте другие языки, например, русский:
    ru: {
      translation: {
        success: 'RSS успешно добавлен!',
        errors: {
          invalidUrl: 'Ссылка должна быть валидным URL.',
          duplicateUrl: 'Этот RSS уже добавлен.',
          emptyField: 'URL не может быть пустым.',
        },
        form: {
          placeholder: 'Введите ссылку на RSS',
          button: 'Добавить',
          heading: 'RSS Агрегатор',
          subheading: 'Начните читать RSS сегодня! Это легко, это красиво.',
        },
      },
    },
  },
};

i18next.init({
  lng: 'en', // Язык по умолчанию
  debug: true, // Для разработки
  resources,
});

export default i18next;
