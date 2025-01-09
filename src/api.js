import axios from 'axios';

const fetchRss = (url) => {
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  return axios.get(proxyUrl).then((response) => {
    if (response.data.status?.http_code >= 400) {
      throw new Error('Ошибка загрузки данных');
    }
    return response.data.contents;
  });
};

export default fetchRss;
