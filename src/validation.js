import * as yup from 'yup';

const validateUrl = (url, feeds) => {
  const schema = yup
    .string()
    .required('URL не может быть пустым')
    .url('Ссылка должна быть валидным URL')
    .notOneOf(feeds, 'URL уже добавлен');

  return schema.validate(url).catch((err) => {
    throw new Error(err.errors[0]); // Возвращаем только первое сообщение об ошибке
  });
};

export default validateUrl;

