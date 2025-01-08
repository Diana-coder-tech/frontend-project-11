import * as yup from 'yup';

const validateUrl = (url, existingUrls) => {
  // Схема для проверки URL
  const schema = yup.string().url('Введите корректный URL').notOneOf(existingUrls, 'Этот URL уже добавлен');

  return schema.validate(url); // Асинхронная валидация
};

export default validateUrl;
