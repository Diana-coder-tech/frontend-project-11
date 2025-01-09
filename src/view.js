const renderFeeds = (elements, feeds) => {
    const { feedsContainer } = elements;
    feedsContainer.innerHTML = '';
    feeds.forEach((feed) => {
      const feedEl = document.createElement('div');
      feedEl.classList.add('feed');
      feedEl.innerHTML = `
        <h3>${feed.title}</h3>
        <p>${feed.description}</p>
      `;
      feedsContainer.append(feedEl);
    });
  };
  
  const renderPosts = (elements, posts) => {
    const { postsContainer } = elements;
    postsContainer.innerHTML = '';
    posts.forEach((post) => {
      const postEl = document.createElement('li');
      postEl.innerHTML = `<a href="${post.link}" target="_blank">${post.title}</a>`;
      postsContainer.append(postEl);
    });
  };
  
  export const setupView = (state, elements) => {
    renderFeeds(elements, state.feeds);
    renderPosts(elements, state.posts);
  
    return (path) => {
      if (path === 'feeds') {
        renderFeeds(elements, state.feeds);
      }
      if (path === 'posts') {
        renderPosts(elements, state.posts);
      }
      if (path.startsWith('loading')) {
        const { feedback } = elements;
        feedback.textContent = state.loading.error || '';
      }
    };
  };
  