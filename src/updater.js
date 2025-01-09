const checkForNewPosts = (state, fetchRss, parseRss) => {
    const promises = state.feeds.map((feed) =>
      fetchRss(feed.url)
        .then((data) => {
          const { posts } = parseRss(data);
          const newPosts = posts.filter(
            (post) => !state.seenPosts.has(post.link) // Проверяем, есть ли пост уже в состоянии
          );
  
          newPosts.forEach((post) => {
            state.seenPosts.add(post.link); // Добавляем ссылку поста в set
          });
  
          state.posts.push(
            ...newPosts.map((post) => ({
              ...post,
              feedId: feed.id,
              id: Date.now() + Math.random(),
            }))
          );
        })
        .catch((err) => {
          console.error(`Ошибка проверки фида "${feed.url}":`, err.message);
        })
    );
  
    return Promise.all(promises).finally(() => {
      setTimeout(() => checkForNewPosts(state, fetchRss, parseRss), 5000); // Рекурсивный вызов
    });
  };
  
  export default checkForNewPosts;
  