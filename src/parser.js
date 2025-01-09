const parseRss = (data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'application/xml');
    const parseError = doc.querySelector('parsererror');
  
    if (parseError) {
      throw new Error('Ошибка парсинга RSS');
    }
  
    const feed = {
      title: doc.querySelector('channel > title').textContent,
      description: doc.querySelector('channel > description').textContent,
    };
  
    const posts = Array.from(doc.querySelectorAll('item')).map((item) => ({
      title: item.querySelector('title').textContent,
      link: item.querySelector('link').textContent,
    }));
  
    return { feed, posts };
  };
  
  export default parseRss;
  