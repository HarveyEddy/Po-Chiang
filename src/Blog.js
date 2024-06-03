import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const loadMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.slice(0, visiblePosts).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {visiblePosts < posts.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default Blog;