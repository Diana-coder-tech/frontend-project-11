import * as yup from 'yup';

const validateUrl = (url, existingUrls) => {
  const schema = yup
    .string()
    .url('Введите корректный URL') // Сообщение для некорректного URL
    .notOneOf(existingUrls, 'Этот URL уже добавлен') // Проверка на дубли
    .required('Поле не должно быть пустым');

  return schema.validate(url);
};

export default validateUrl;
