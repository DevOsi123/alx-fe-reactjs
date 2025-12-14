import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(['posts'], fetchPosts, {
    staleTime: 5 * 60 * 1000,       // 5 minutes fresh cache
    cacheTime: 10 * 60 * 1000,      // 10 minutes cache retention
    refetchOnWindowFocus: true,     // Refetch when window is focused
    keepPreviousData: true,         // Keep previous data when fetching new data
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} style={{ marginBottom: '1rem' }}>
        Refresh Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
